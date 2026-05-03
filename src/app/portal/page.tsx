import Link from 'next/link'

const MODULES = [
  {
    tier: 1,
    title: 'The Archive',
    description: 'All 23 intelligence documents, searchable and annotated.',
    color: 'tertiary' as const,
    links: [
      { label: 'Browse Document Archive',     href: '/documents' },
      { label: 'Interactive Dossier',          href: '/viewer' },
      { label: 'Research Glossary',            href: '/glossary' },
    ],
    downloads: [
      { label: 'Executive Summary (PDF)',      href: '#' },
      { label: 'Gateway Cheat Sheet (PDF)',    href: '#' },
    ],
  },
  {
    tier: 2,
    title: 'The Program',
    description: '8-week structured training system built from the source documents.',
    color: 'accent' as const,
    links: [
      { label: '10-Step Implementation Guide', href: '/program' },
      { label: 'Quick Reference Sheet',        href: '/cheat-sheet' },
      { label: 'Research Breakdown',           href: '/research' },
    ],
    downloads: [
      { label: 'Full Program Guide (PDF)',     href: '#' },
      { label: 'Session Tracking Template',   href: '#' },
    ],
  },
]

const COLOR_CONFIG = {
  accent:    { text: 'text-accent',          border: 'border-accent',          bg: 'bg-accent/10' },
  tertiary:  { text: 'text-accent-tertiary', border: 'border-accent-tertiary', bg: 'bg-accent-tertiary/10' },
}

export default function PortalPage() {
  return (
    <div className="pt-14 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 border border-accent/40 cyber-chamfer-sm px-3 py-1 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-neon" />
              <span className="font-label text-[10px] tracking-[0.2em] text-accent uppercase">
                Access Granted
              </span>
            </span>
          </div>
          <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Member Portal</p>
          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-wide mb-4">
            Your Intelligence Files
          </h1>
          <p className="font-mono text-sm text-muted-foreground tracking-wide max-w-xl leading-relaxed">
            <span className="text-accent">&gt; </span>
            Welcome back. Your access level covers all modules below. Files are available instantly — no expiration, no limits.
          </p>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {MODULES.map((mod) => {
            const { text, border, bg } = COLOR_CONFIG[mod.color]
            return (
              <div key={mod.tier} className={`relative border ${border} cyber-chamfer-lg p-7 bg-card`}>
                <span className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${border}`} />
                <span className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${border}`} />
                <span className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${border}`} />
                <span className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${border}`} />

                <div className="mb-5">
                  <span className={`font-label text-[9px] tracking-[0.2em] uppercase ${text} block mb-2`}>
                    Tier {mod.tier}
                  </span>
                  <h2 className="font-heading text-xl font-bold tracking-wide mb-2">{mod.title}</h2>
                  <p className="font-mono text-xs text-muted-foreground tracking-wide leading-relaxed">{mod.description}</p>
                </div>

                {/* Online access */}
                <div className="mb-5">
                  <p className="font-label text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-3">Online Access</p>
                  <div className="space-y-2">
                    {mod.links.map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-2 font-mono text-xs ${text} hover:underline tracking-wide transition-colors`}
                      >
                        <span className="opacity-60">&gt;</span> {label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Downloads */}
                <div className={`border-t ${border} pt-4`}>
                  <p className="font-label text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-3">Downloads</p>
                  <div className="space-y-2">
                    {mod.downloads.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className={`flex items-center gap-2 font-mono text-xs ${text} ${bg} border ${border} cyber-chamfer-sm px-3 py-2 hover:opacity-80 transition-opacity tracking-wide`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M6 1v7M3 5l3 3 3-3M1 10h10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Upgrade prompt — shown if they have Tier 1 only; for now always show Immersion upsell */}
        <div className="relative border border-accent-secondary/40 cyber-chamfer-lg p-8 bg-card overflow-hidden">
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-secondary" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-secondary" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent-secondary" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-secondary" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <span className="font-label text-[9px] tracking-[0.2em] uppercase text-accent-secondary block mb-2">Tier 3 — The Immersion</span>
              <h3 className="font-heading text-lg font-bold tracking-wide mb-2">Want guided implementation?</h3>
              <p className="font-mono text-xs text-muted-foreground tracking-wide leading-relaxed max-w-md">
                Monthly live group coaching, session review, and private community access. For those going all the way.
              </p>
            </div>
            <Link
              href="/#pricing"
              className="shrink-0 cyber-chamfer-sm border-2 border-accent-secondary text-accent-secondary font-label text-xs tracking-[0.2em] uppercase px-6 py-3 text-center hover:bg-accent-secondary hover:text-background transition-all duration-150 cyber-focus"
            >
              Upgrade — $297 →
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
