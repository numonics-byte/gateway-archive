import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${req.nextUrl.protocol}//${req.nextUrl.host}`
  const res = NextResponse.redirect(new URL('/', siteUrl))
  res.cookies.set('gateway_session', '', { maxAge: 0, path: '/' })
  return res
}
