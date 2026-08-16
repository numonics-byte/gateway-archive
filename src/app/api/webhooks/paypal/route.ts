import { NextRequest, NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'
import {
  verifyWebhookSignature,
  fetchOrder,
  resolvePurchase,
  entitlementsForTier,
  type Tier,
} from '@/lib/paypal'

// PayPal fires both of these for a single successful purchase (order approval, then capture).
// Handling is idempotent — writing the same entitlement twice is a no-op — so no de-dup needed.
const ACTIONABLE_EVENTS = new Set(['CHECKOUT.ORDER.COMPLETED', 'PAYMENT.CAPTURE.COMPLETED'])

function getOrderId(eventType: string, resource: Record<string, unknown>): string | null {
  if (eventType === 'CHECKOUT.ORDER.COMPLETED') {
    return typeof resource.id === 'string' ? resource.id : null
  }
  // PAYMENT.CAPTURE.COMPLETED — the order id lives one level down.
  const supplementary = resource.supplementary_data as { related_ids?: { order_id?: string } } | undefined
  return supplementary?.related_ids?.order_id ?? null
}

async function grantEntitlements(purchase: { tier: Tier; customUserId: string | null; payerEmail: string | null }) {
  const entitlements = entitlementsForTier(purchase.tier)
  const client = await clerkClient()

  const paypalAudit = {
    tier: purchase.tier,
    purchasedAt: new Date().toISOString(),
  }

  // updateUserMetadata deep-merges rather than replacing, so this can't clobber unrelated
  // metadata another part of the app may have set.
  const metadataUpdate = { publicMetadata: { entitlements }, privateMetadata: { paypal: paypalAudit } }

  // Prefer a directly-supplied user id (only possible if checkout ever passes custom_id).
  if (purchase.customUserId) {
    await client.users.updateUserMetadata(purchase.customUserId, metadataUpdate)
    return
  }

  if (!purchase.payerEmail) {
    throw new Error('No customUserId and no payer email — cannot identify the buyer')
  }

  const existing = await client.users.getUserList({ emailAddress: [purchase.payerEmail] })
  if (existing.data.length > 0) {
    await client.users.updateUserMetadata(existing.data[0].id, metadataUpdate)
    return
  }

  // No account yet — this is the common case, since checkout doesn't require sign-in first.
  // Clerk merges an invitation's public_metadata into the user's publicMetadata on acceptance,
  // so entitlements are already in place the moment they finish signing up. The privateMetadata
  // audit record above isn't available for this path — nothing to attach it to until they exist.
  try {
    await client.invitations.createInvitation({
      emailAddress: purchase.payerEmail,
      publicMetadata: { entitlements },
    })
  } catch (err) {
    // Most likely: an invitation (or account) for this email already exists. Don't crash the
    // webhook over it — surface it in logs so a human can reconcile, since we can't safely
    // guess whether it's safe to revoke and recreate.
    console.error('[paypal webhook] invitation creation failed', purchase.payerEmail, err)
  }
}

export async function POST(req: NextRequest) {
  let event: { event_type?: string; resource?: Record<string, unknown> }
  try {
    event = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  let verified: boolean
  try {
    verified = await verifyWebhookSignature(req.headers, event)
  } catch (err) {
    console.error('[paypal webhook] signature verification error', err)
    return NextResponse.json({ error: 'Verification error' }, { status: 500 })
  }

  if (!verified) {
    console.error('[paypal webhook] signature verification failed', event.event_type)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const eventType = event.event_type
  if (!eventType || !ACTIONABLE_EVENTS.has(eventType)) {
    return NextResponse.json({ ok: true, skipped: true })
  }

  try {
    const orderId = getOrderId(eventType, event.resource ?? {})
    if (!orderId) {
      console.error('[paypal webhook] no order id found on event', eventType)
      return NextResponse.json({ ok: true, skipped: true })
    }

    const order = await fetchOrder(orderId)
    const purchase = resolvePurchase(order)
    if (!purchase) {
      console.error('[paypal webhook] could not resolve a tier for order', orderId)
      return NextResponse.json({ ok: true, skipped: true })
    }

    await grantEntitlements(purchase)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[paypal webhook] processing error', err)
    return NextResponse.json({ error: 'Processing error' }, { status: 500 })
  }
}
