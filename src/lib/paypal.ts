const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE ?? 'https://api-m.paypal.com'

export const PAYPAL_TIERS = {
  '4CQX7EPUB34EA': { tier: 'archive', name: 'The Archive', amount: '27.00', currency: 'USD' },
  'JSW295PWCMDW8': { tier: 'program', name: 'The Program', amount: '97.00', currency: 'USD' },
  '46FWDB2FX922N': { tier: 'immersion', name: 'The Immersion', amount: '297.00', currency: 'USD' },
} as const

export type Tier = 'archive' | 'program' | 'immersion'

// Higher tiers include everything below them — matches the "Everything in The Archive" /
// "Everything in The Program" language already on the pricing page.
const TIER_INCLUDES: Record<Tier, Tier[]> = {
  archive: ['archive'],
  program: ['archive', 'program'],
  immersion: ['archive', 'program', 'immersion'],
}

export function entitlementsForTier(tier: Tier): Record<Tier, boolean> {
  const included = new Set(TIER_INCLUDES[tier])
  return {
    archive: included.has('archive'),
    program: included.has('program'),
    immersion: included.has('immersion'),
  }
}

function matchTierByAmount(amount: string | undefined, currency: string | undefined) {
  if (!amount || !currency) return null
  return (
    Object.values(PAYPAL_TIERS).find((t) => t.amount === amount && t.currency === currency) ??
    null
  )
}

const KNOWN_TIERS = new Set<Tier>(['archive', 'program', 'immersion'])

// Expected shape if a checkout ever supplies one: "user_id=...&tier=...&source=paypal".
// Today's static PayPal Payment Links can't set this per click — see route.ts comment —
// so in practice this will usually be absent and amount/currency does the matching.
function parseCustomId(customId: string | null | undefined): { userId: string | null; tier: Tier | null } | null {
  if (!customId) return null
  const params = new URLSearchParams(customId)
  const userId = params.get('user_id')
  const rawTier = params.get('tier')
  const tier = rawTier && KNOWN_TIERS.has(rawTier as Tier) ? (rawTier as Tier) : null
  if (!userId && !tier) return null
  return { userId, tier }
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !clientSecret) {
    throw new Error('PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET are not set')
  }

  const res = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  if (!res.ok) throw new Error(`PayPal OAuth token request failed: ${res.status}`)
  const data = await res.json()
  return data.access_token as string
}

export async function verifyWebhookSignature(headers: Headers, event: unknown): Promise<boolean> {
  const webhookId = process.env.PAYPAL_WEBHOOK_ID
  if (!webhookId) throw new Error('PAYPAL_WEBHOOK_ID is not set')

  const transmissionId = headers.get('paypal-transmission-id')
  const transmissionTime = headers.get('paypal-transmission-time')
  const certUrl = headers.get('paypal-cert-url')
  const transmissionSig = headers.get('paypal-transmission-sig')

  if (!transmissionId || !transmissionTime || !certUrl || !transmissionSig) {
    return false
  }

  const accessToken = await getAccessToken()
  const res = await fetch(`${PAYPAL_API_BASE}/v1/notifications/verify-webhook-signature`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      transmission_id: transmissionId,
      transmission_time: transmissionTime,
      cert_url: certUrl,
      auth_algo: 'SHA256withRSA',
      transmission_sig: transmissionSig,
      webhook_id: webhookId,
      webhook_event: event,
    }),
  })
  if (!res.ok) return false
  const data = await res.json()
  return data.verification_status === 'SUCCESS'
}

interface PayPalOrder {
  id: string
  payer?: { email_address?: string }
  purchase_units?: Array<{
    custom_id?: string
    invoice_id?: string
    amount?: { value?: string; currency_code?: string }
  }>
}

export async function fetchOrder(orderId: string): Promise<PayPalOrder> {
  const accessToken = await getAccessToken()
  const res = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!res.ok) throw new Error(`Failed to fetch PayPal order ${orderId}: ${res.status}`)
  return res.json()
}

export interface ResolvedPurchase {
  tier: Tier
  customUserId: string | null
  payerEmail: string | null
}

// Amount + currency is the authoritative match today, since the checkout links don't pass
// custom_id. If custom_id ever does carry a tier, it must still agree with the paid amount
// before it's trusted — never let client-suppliable data alone decide what a customer gets.
export function resolvePurchase(order: PayPalOrder): ResolvedPurchase | null {
  const unit = order.purchase_units?.[0]
  const amount = unit?.amount?.value
  const currency = unit?.amount?.currency_code
  const custom = parseCustomId(unit?.custom_id)
  const matched = matchTierByAmount(amount, currency)

  if (!matched) return null
  if (custom?.tier && custom.tier !== matched.tier) return null

  return {
    tier: matched.tier,
    customUserId: custom?.userId ?? null,
    payerEmail: order.payer?.email_address ?? null,
  }
}
