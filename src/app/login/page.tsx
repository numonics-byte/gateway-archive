'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') ?? '/documents'

  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    setLoading(false)

    if (res.ok) {
      router.push(redirect)
    } else {
      setError(true)
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Terminal chrome */}
        <div className="border border-accent/40 cyber-chamfer-lg overflow-hidden shadow-neon-sm">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/50 opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent opacity-70" />
            <span className="ml-2 font-label text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
              gateway_auth.exe
            </span>
          </div>

          <div className="bg-background p-8">
            {/* Classification badge */}
            <div className="flex items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-2 border border-destructive cyber-chamfer-sm px-3 py-1 bg-destructive/10">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-neon" />
                <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">
                  Restricted Access Terminal
                </span>
              </span>
            </div>

            <h1 className="font-heading text-2xl font-black tracking-widest uppercase text-foreground mb-2">
              Gateway Archive
            </h1>
            <p className="font-mono text-xs text-muted-foreground tracking-wide mb-8 leading-relaxed">
              <span className="text-accent">&gt; </span>
              This archive is in private preview. Enter the access code to continue.
            </p>

            {/* Demo credentials */}
            <div className="border border-accent/30 bg-accent/5 cyber-chamfer-sm p-4 mb-8">
              <p className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase mb-2">
                Demo Access
              </p>
              <div className="flex items-center gap-3">
                <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                  Access Code:
                </span>
                <span className="font-mono text-sm font-bold text-accent tracking-widest">
                  gateway2024
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                  Access Code
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-accent">
                    &gt;
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="enter access code"
                    className="w-full bg-card border border-border cyber-chamfer-sm pl-8 pr-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-150"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="font-label text-[10px] tracking-[0.15em] text-destructive uppercase">
                  &gt; ACCESS DENIED — INVALID CREDENTIALS
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full cyber-chamfer-sm border-2 border-accent text-accent font-label text-xs tracking-[0.2em] uppercase py-3 hover:bg-accent hover:text-background transition-all duration-150 hover:shadow-neon disabled:opacity-40 disabled:cursor-not-allowed cyber-focus"
              >
                {loading ? 'Authenticating...' : '> Authenticate'}
              </button>
            </form>
          </div>
        </div>

        {/* Corner accents */}
        <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-accent" />
        <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-accent" />
        <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-accent" />
        <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-accent" />
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
