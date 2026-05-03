export default function BackstorySection() {
  return (
    <section className="py-14 sm:py-20 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20" />
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-destructive/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Classification stamp */}
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 border border-destructive/60 cyber-chamfer-sm px-3 py-1 bg-destructive/8">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-neon" />
              <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">
                ⚠ These Are Declassified Government Files
              </span>
            </span>
          </div>

          <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-4">How These Files Surfaced</p>

          <div className="space-y-5 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed tracking-wide">
            <p>
              In 1972, the CIA began funding something it would never publicly acknowledge: a systematic, scientific investigation into whether the human mind could perceive beyond the limits of the physical body.
            </p>
            <p>
              By 1985, they had evidence. By 1995, the program was quietly shut down.
            </p>
            <p>
              Eight years later, twenty-three documents appeared in a government database — filed under bureaucratic identifiers, cross-referenced across three agencies, buried in a system that most people don't know exists. No press release. No summary. Just files.
            </p>
            <p className="text-foreground font-semibold">
              Declassified Mine spent two years reconstructing what those files contain: a complete map of the human consciousness programs the U.S. government funded, tested, and classified as operationally viable — then shut down anyway.
            </p>
            <p>
              What you're looking at is that reconstruction.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="font-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
              <span className="text-accent">//</span> Document recovery confirmed via CIA CREST database
              <span className="text-accent mx-2">//</span> File IDs cross-verified
              <span className="text-accent mx-2">//</span> All 23 source documents intact
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
