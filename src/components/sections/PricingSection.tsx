import Link from 'next/link'

const TIERS = [
  {
    name: 'The Archive',
    tier: 1,
    price: '$27',
    description: 'The complete declassified research — everything the government studied, now in your hands.',
    color: 'tertiary' as const,
    featured: false,
    features: [
      'All 23 declassified documents',
      'Executive summary (3 pages)',
      'Gateway cheat sheet',
      'Research glossary',
      'Lifetime access',
    ],
    cta: 'Get Instant Access',
    // TODO: Replace with Lemon Squeezy checkout URL for Tier 1
    href: '#',
  },
  {
    name: 'The Program',
    tier: 2,
    price: '$97',
    description: 'Everything in The Archive plus the structured 8-week training system built from the source documents.',
    color: 'accent' as const,
    featured: true,
    features: [
      'Everything in The Archive',
      '8-week training program',
      'Deep-dive research reports',
      'Technique implementation guides',
      'Breathing protocol audio cues',
      'Priority email support',
    ],
    cta: 'Start the Program',
    // TODO: Replace with Lemon Squeezy checkout URL for Tier 2
    href: '#',
  },
  {
    name: 'The Immersion',
    tier: 3,
    price: '$297',
    description: 'For those who want guided implementation. Includes everything plus live group coaching.',
    color: 'secondary' as const,
    featured: false,
    features: [
      'Everything in The Program',
      'Monthly live group coaching',
      'Session review & feedback',
      'Private community access',
      'Early access to new content',
    ],
    cta: 'Apply for Immersion',
    // TODO: Replace with Lemon Squeezy checkout URL for Tier 3 (or waitlist form)
    href: '#',
  },
]

const COLOR_CONFIG = {
  accent:    { text: 'text-accent',           border: 'border-accent',           shadow: 'shadow-neon-lg',        bg: 'bg-accent/10',  badge: 'border-accent text-accent',                       hoverBg: 'hover:bg-accent/10',          hoverShadow: 'hover:shadow-neon-lg' },
  secondary: { text: 'text-accent-secondary', border: 'border-accent-secondary', shadow: 'shadow-neon-secondary', bg: 'bg-accent-secondary/10', badge: 'border-accent-secondary text-accent-secondary', hoverBg: 'hover:bg-accent-secondary/10', hoverShadow: 'hover:shadow-neon-secondary' },
  tertiary:  { text: 'text-accent-tertiary',  border: 'border-accent-tertiary',  shadow: 'shadow-neon-tertiary',  bg: 'bg-accent-tertiary/10', badge: 'border-accent-tertiary text-accent-tertiary',    hoverBg: 'hover:bg-accent-tertiary/10',  hoverShadow: 'hover:shadow-neon-tertiary' },
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 border-t border-border bg-card relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-2">Get Access</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-4">Choose Your Level</h2>
          <p className="font-mono text-sm text-muted-foreground tracking-wide max-w-lg mx-auto">
            One-time payment. Instant digital access. 90-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {TIERS.map((tier) => {
            const { text, border, shadow, badge, hoverBg, hoverShadow } = COLOR_CONFIG[tier.color]
            return (
              <div
                key={tier.name}
                className={`relative ${
                  tier.featured ? 'md:scale-105 md:-translate-y-2' : ''
                }`}
              >
                {/* Featured badge — outside clip-path */}
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className={`font-label text-[10px] tracking-[0.2em] uppercase border cyber-chamfer-sm px-3 py-1 bg-background ${badge}`}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`relative border ${border} bg-background cyber-chamfer-lg p-7 flex flex-col transition-all duration-300 cursor-pointer ${
                    tier.featured ? `${shadow}` : ''
                  }`}
                >
                  {/* Corner accents */}
                  <span className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${border}`} />
                  <span className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${border}`} />
                  <span className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${border}`} />
                  <span className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${border}`} />

                  {/* Header */}
                  <div className="mb-6">
                    <span className={`font-label text-[9px] tracking-[0.2em] uppercase ${text} block mb-3`}>
                      Tier {tier.tier}
                    </span>
                    <h3 className="font-heading text-lg font-bold tracking-wide mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className={`font-heading text-4xl font-black ${text}`}>{tier.price}</span>
                      <span className="font-label text-[10px] text-muted-foreground tracking-wide">one-time</span>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 font-mono text-xs text-foreground tracking-wide">
                        <span className={`${text} shrink-0 mt-0.5`}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={tier.href}
                    className={`block text-center cyber-chamfer-sm border-2 ${border} ${text} font-label text-xs tracking-[0.2em] uppercase px-6 py-3 ${hoverBg} ${hoverShadow} transition-all duration-150 cyber-focus`}
                  >
                    {tier.cta}
                  </Link>
                  <p className="text-center font-label text-[9px] tracking-[0.12em] text-muted-foreground mt-2">
                    90-day money-back guarantee
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
