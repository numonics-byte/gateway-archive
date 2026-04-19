'use client'

import { useState } from 'react'

const INCLUDED = [
  'Session checklist — exactly what to do before every session',
  'The Gateway Affirmation in full (the one from the report)',
  'Focus 10 → 12 → 15 → 21 state guide in plain language',
  'REBAL energy balloon — step-by-step visualization',
  'Advanced techniques: Problem Solving, Patterning, Color Breathing, Remote Viewing',
  'Troubleshooting table for the 7 most common obstacles',
  'Monroe Institute audio progression: Waves I–VII mapped to Focus levels',
]

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: Replace with Beehiiv subscribe endpoint
    // POST to: https://api.beehiiv.com/v2/publications/{pub_id}/subscriptions
    // Body: { email, utm_source: 'gateway-archive-site', utm_medium: 'lead-magnet' }
    setSubmitted(true)
  }

  return (
    <section id="lead-magnet" className="py-16 sm:py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg-tertiary opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-accent-tertiary/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — offer copy */}
          <div>
            <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-3">Free Download</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-5">
              The Gateway<br />Cheat Sheet
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed tracking-wide mb-8 max-w-md">
              23 declassified CIA documents. One page. Everything the government spent 23 years and $20M+ researching — distilled into an actionable reference you can use tonight.
            </p>
            <ul className="space-y-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 font-mono text-xs text-foreground tracking-wide">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — terminal form */}
          <div className="relative border border-accent/40 cyber-chamfer-lg p-6 sm:p-8 bg-card shadow-neon-sm">
            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />

            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <span className="w-2 h-2 rounded-full bg-destructive opacity-70" />
              <span className="w-2 h-2 rounded-full bg-accent/50 opacity-70" />
              <span className="w-2 h-2 rounded-full bg-accent opacity-70" />
              <span className="ml-2 font-label text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
                free_download_terminal.sh
              </span>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <p className="font-heading text-xl text-accent mb-2">ACCESS GRANTED</p>
                <p className="font-mono text-xs text-muted-foreground tracking-wide">
                  <span className="text-accent">&gt; </span>Check your inbox. Cheat sheet incoming.
                  <span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink" />
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-label text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    <span className="text-accent">&gt; </span>Enter Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-input border border-border cyber-chamfer-sm px-4 py-3 text-sm font-mono text-accent placeholder:text-muted-foreground focus:border-accent focus:shadow-neon-sm outline-none transition-all duration-200 tracking-wide"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full cyber-chamfer-sm border-2 border-accent text-accent font-label text-xs tracking-[0.2em] uppercase py-3 hover:bg-accent hover:text-background transition-all duration-150 hover:shadow-neon cyber-focus"
                >
                  Send Me the Cheat Sheet →
                </button>

                <p className="font-label text-[9px] tracking-[0.12em] text-muted-foreground text-center">
                  No spam. Unsubscribe anytime. Your data stays private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
