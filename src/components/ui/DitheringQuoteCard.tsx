'use client'

import { useState, Suspense, lazy } from 'react'

const Dithering = lazy(() =>
  import('@paper-design/shaders-react').then((mod) => ({ default: mod.Dithering }))
)

export default function DitheringQuoteCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden border border-accent/30 cyber-chamfer-lg bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dithering background */}
      <Suspense fallback={<div className="absolute inset-0 bg-accent/5" />}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-screen">
          <Dithering
            colorBack="#00000000"
            colorFront="#00ff88"
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.6 : 0.15}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent z-10" />
      <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent z-10" />
      <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent z-10" />
      <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent z-10" />

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10">
        <p className="font-label text-[10px] tracking-[0.2em] uppercase text-accent mb-6">
          <span className="text-muted-foreground">&gt; </span>Army Intelligence Memo · June 9, 1983 · Classification: SECRET
        </p>
        <blockquote className="font-mono text-base sm:text-lg text-foreground leading-relaxed tracking-wide max-w-3xl">
          "The Gateway Experience has the potential to induce a state of consciousness in which the individual achieves synchronous operation of both cerebral hemispheres — a 'whole brain' state enabling access to expanded cognitive capabilities well beyond ordinary waking consciousness."
        </blockquote>
        <footer className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <p className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
            LTC Wayne M. McDonnell · US Army Intelligence
          </p>
        </footer>
      </div>
    </div>
  )
}
