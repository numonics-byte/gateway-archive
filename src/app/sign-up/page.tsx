'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSignUp } from '@clerk/nextjs'
import Link from 'next/link'
import MineLogo from '@/components/ui/MineLogo'

function SignUpForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') ?? '/portal'
  const { signUp, errors, fetchStatus } = useSignUp()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')
  const [globalError, setGlobalError] = useState('')

  const loading = fetchStatus === 'fetching'

  async function finalizeAndRedirect() {
    await signUp.finalize({
      navigate: async ({ decorateUrl }) => {
        const url = decorateUrl(redirect)
        if (url.startsWith('http')) {
          window.location.href = url
        } else {
          router.push(url)
        }
      },
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setGlobalError('')

    const { error } = await signUp.password({ emailAddress: email, password })
    if (error) return

    if (signUp.isTransferable) {
      setGlobalError('An account with this email already exists. Sign in instead.')
      return
    }

    if (signUp.status === 'missing_requirements' && signUp.unverifiedFields.includes('email_address')) {
      const { error: sendErr } = await signUp.verifications.sendEmailCode()
      if (sendErr) {
        setGlobalError('Could not send a verification code. Try again.')
        return
      }
      setPendingVerification(true)
      return
    }

    if (signUp.status === 'complete') {
      await finalizeAndRedirect()
      return
    }

    setGlobalError('This sign-up method isn’t supported here. Contact support.')
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault()
    setGlobalError('')

    const { error } = await signUp.verifications.verifyEmailCode({ code })
    if (error) return

    if (signUp.status === 'complete') {
      await finalizeAndRedirect()
    }
  }

  async function handleGoogle() {
    setGlobalError('')
    const { error } = await signUp.sso({
      strategy: 'oauth_google',
      redirectUrl: redirect,
      redirectCallbackUrl: '/sso-callback',
    })
    if (error) setGlobalError('Could not start Google sign-up. Try again.')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="border border-accent/40 cyber-chamfer-lg overflow-hidden shadow-neon-sm">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/50 opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent opacity-70" />
            <span className="ml-2 font-label text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
              declassified_mind_auth.exe
            </span>
          </div>

          <div className="bg-background p-8">
            {/* Logo + brand */}
            <div className="flex items-center gap-3 mb-8">
              <MineLogo size={32} />
              <div>
                <h1 className="font-heading text-lg font-black tracking-widest uppercase text-foreground leading-tight">
                  Declassified Mind
                </h1>
                <p className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                  Create Member Account
                </p>
              </div>
            </div>

            {pendingVerification ? (
              <>
                <p className="font-mono text-xs text-muted-foreground tracking-wide mb-8 leading-relaxed">
                  <span className="text-accent">&gt; </span>
                  Enter the verification code sent to {email}.
                </p>

                <form onSubmit={handleVerify} className="space-y-4">
                  <div>
                    <label className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                      Verification Code
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-accent">&gt;</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="000000"
                        className="w-full bg-card border border-border cyber-chamfer-sm pl-8 pr-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-150"
                        autoComplete="one-time-code"
                        required
                      />
                    </div>
                    {errors?.fields?.code && (
                      <p className="font-label text-[10px] tracking-[0.15em] text-destructive uppercase mt-2">
                        &gt; {errors.fields.code.message}
                      </p>
                    )}
                  </div>

                  {globalError && (
                    <p className="font-label text-[10px] tracking-[0.15em] text-destructive uppercase">
                      &gt; {globalError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !code}
                    className="w-full cyber-chamfer-sm border-2 border-accent text-accent font-label text-xs tracking-[0.2em] uppercase py-3 hover:bg-accent hover:text-background transition-all duration-150 hover:shadow-neon disabled:opacity-40 disabled:cursor-not-allowed cyber-focus"
                  >
                    {loading ? 'Verifying...' : '> Verify Email'}
                  </button>
                </form>
              </>
            ) : (
              <>
                <p className="font-mono text-xs text-muted-foreground tracking-wide mb-8 leading-relaxed">
                  <span className="text-accent">&gt; </span>
                  Create an account to access your intelligence files.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-accent">&gt;</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-card border border-border cyber-chamfer-sm pl-8 pr-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-150"
                        autoComplete="email"
                        required
                      />
                    </div>
                    {errors?.fields?.emailAddress && (
                      <p className="font-label text-[10px] tracking-[0.15em] text-destructive uppercase mt-2">
                        &gt; {errors.fields.emailAddress.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-accent">&gt;</span>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="minimum 15 characters"
                        className="w-full bg-card border border-border cyber-chamfer-sm pl-8 pr-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-150"
                        autoComplete="new-password"
                        minLength={15}
                        required
                      />
                    </div>
                    {errors?.fields?.password && (
                      <p className="font-label text-[10px] tracking-[0.15em] text-destructive uppercase mt-2">
                        &gt; {errors.fields.password.message}
                      </p>
                    )}
                  </div>

                  {(globalError || errors?.global) && (
                    <p className="font-label text-[10px] tracking-[0.15em] text-destructive uppercase">
                      &gt; {globalError || errors?.global?.[0]?.message}
                    </p>
                  )}

                  {/* Required by Clerk's bot sign-up protection */}
                  <div id="clerk-captcha" />

                  <button
                    type="submit"
                    disabled={loading || !email || password.length < 15}
                    className="w-full cyber-chamfer-sm border-2 border-accent text-accent font-label text-xs tracking-[0.2em] uppercase py-3 hover:bg-accent hover:text-background transition-all duration-150 hover:shadow-neon disabled:opacity-40 disabled:cursor-not-allowed cyber-focus"
                  >
                    {loading ? 'Creating Account...' : '> Create Account'}
                  </button>
                </form>

                <div className="flex items-center gap-3 my-6">
                  <div className="h-px flex-1 bg-border" />
                  <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">or</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <button
                  type="button"
                  onClick={handleGoogle}
                  disabled={loading}
                  className="w-full cyber-chamfer-sm border border-border text-foreground font-label text-xs tracking-[0.15em] uppercase py-3 hover:border-accent hover:text-accent transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed cyber-focus flex items-center justify-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden="true">
                    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.84 2.09-1.8 2.73v2.27h2.92c1.7-1.57 2.68-3.88 2.68-6.64z"/>
                    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.34C2.44 15.98 5.48 18 9 18z"/>
                    <path fill="#FBBC05" d="M3.97 10.71c-.18-.54-.28-1.11-.28-1.71s.1-1.17.28-1.71V4.95H.96A8.996 8.996 0 000 9c0 1.45.35 2.83.96 4.05l3.01-2.34z"/>
                    <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.95l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"/>
                  </svg>
                  Continue with Google
                </button>

                <p className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase text-center mt-6">
                  Already have an account?{' '}
                  <Link href="/login" className="text-accent hover:text-neon transition-colors">
                    Sign in
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>

        <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-accent" />
        <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-accent" />
        <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-accent" />
        <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-accent" />
      </div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUpForm />
    </Suspense>
  )
}
