import { NextRequest, NextResponse } from 'next/server'

const DEMO_PASSWORD = process.env.DEMO_PASSWORD ?? 'gateway2024'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  if (password !== DEMO_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set('gateway_session', '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  return res
}
