import Link from 'next/link'
import { allDocuments, CATEGORY_STATS, COLOR_MAP } from '@/lib/documents'
import DocCard from '@/components/ui/DocCard'
import HeroSection from '@/components/hero/HeroSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import LeadMagnetSection from '@/components/sections/LeadMagnetSection'
import PricingSection from '@/components/sections/PricingSection'
import HemiSyncOscilloscope from '@/components/ui/HemiSyncOscilloscope'

const DOMAIN_ARCHETYPES: Record<string, string> = {
  'Consciousness & Meditation Training':       'Consciousness',
  'Breathing Techniques & Energy Work':        'Methodology',
  'Remote Viewing & Operational Applications': 'Operations',
  'Parapsychology & ESP Research':             'Consciousness',
  'Soviet/Foreign Metaphysical Research':      'Threat Intel',
  'Program Management & Research Planning':    'Methodology',
}

const LEGEND = [
  { label: 'Consciousness', color: 'text-accent',           dot: 'bg-accent' },
  { label: 'Operations',    color: 'text-accent-secondary', dot: 'bg-accent-secondary' },
  { label: 'Methodology',   color: 'text-accent-tertiary',  dot: 'bg-accent-tertiary' },
  { label: 'Threat Intel',  color: 'text-destructive',      dot: 'bg-destructive' },
]

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'Consciousness & Meditation Training':
    'Hemi-Sync, binaural beats, and altered states. Monroe Institute programs that trained intelligence personnel.',
  'Breathing Techniques & Energy Work':
    'Structured breathing protocols, resonant energy, and patterning techniques for consciousness expansion.',
  'Remote Viewing & Operational Applications':
    'STAR GATE program: operational remote viewing, training procedures, and intelligence collection methods.',
  'Parapsychology & ESP Research':
    'ESP, psychokinesis, and meta-analyses of anomalous mental phenomena spanning two decades of research.',
  'Soviet/Foreign Metaphysical Research':
    'CIA assessments of Soviet psychoenergetics, biocommunication, and offensive mind control research.',
  'Program Management & Research Planning':
    'Congressional directives, multi-year research plans, and peer review for STAR GATE and related programs.',
}

export default function HomePage() {
  const featuredDoc = allDocuments.find((d) => d.isFeatured)!
  const recentDocs = allDocuments.filter((d) => !d.isFeatured).slice(0, 6)

  return (
    <div className="pt-14">
      {/* 1. Hero — Hook + intrigue */}
      <HeroSection />

      {/* 2. Social Proof — validate immediately after hook */}
      <SocialProofSection />

      {/* 3. Six Domains — answer "what is this?" */}
      <section className="py-16 sm:py-24 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg-tertiary opacity-40" />
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-accent-tertiary/4 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-2">What's Inside</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-5">Six Research Domains</h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGEND.map(({ label, dot }) => (
                <span key={label} className="inline-flex items-center gap-1.5 font-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(CATEGORY_STATS).map(([category, { color }]) => {
              const { text, border, bg } = COLOR_MAP[color]
              return (
                <Link key={category} href={`/documents?cat=${encodeURIComponent(category)}`} className="group block">
                  <div className={`relative border ${border} bg-card cyber-chamfer p-6 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}>
                    <span className={`inline-flex self-start font-label text-[9px] tracking-[0.2em] uppercase ${text} ${bg} border ${border} cyber-chamfer-sm px-2 py-0.5 mb-3`}>
                      {DOMAIN_ARCHETYPES[category]}
                    </span>
                    <h3 className="font-heading text-sm font-bold tracking-wide leading-tight mb-3 text-foreground">
                      {category}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed tracking-wide flex-1">
                      {CATEGORY_DESCRIPTIONS[category]}
                    </p>
                    <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                      <span className={`font-label text-[10px] tracking-[0.12em] ${text} opacity-70`}>Browse Files</span>
                      <span className={`font-label text-xs ${text} group-hover:translate-x-1 transition-transform duration-150`}>→</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Anchor Document — star piece, deepest credibility */}
      <section className="py-16 sm:py-24 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-2">The Source Material</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">The Anchor Document</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
            {/* Left — DocCard + CTA */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 [&>a]:h-full [&>a>article]:h-full [&>a>article]:flex [&>a>article]:flex-col">
                <DocCard doc={featuredDoc} variant="featured" />
              </div>
              <Link
                href="/viewer"
                className="cyber-chamfer border-2 border-accent text-accent font-label text-xs tracking-[0.2em] uppercase px-8 py-3 text-center hover:bg-accent hover:text-background transition-all duration-150 hover:shadow-neon cyber-focus"
              >
                Read Interactive Dossier →
              </Link>
            </div>

            {/* Right — oscilloscope */}
            <div className="flex flex-col gap-3">
              <p className="font-label text-[10px] tracking-[0.2em] uppercase text-muted-foreground shrink-0">
                <span className="text-accent">&gt;</span> Interactive: Hemi-Sync Visualization
              </p>
              <div className="flex-1 min-h-[360px]">
                <HemiSyncOscilloscope />
              </div>
              <p className="font-mono text-[10px] text-muted-foreground tracking-wide leading-relaxed shrink-0">
                Drag the slider to simulate binaural entrainment — the core technology behind the Gateway Experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing — paid tiers after value established */}
      <PricingSection />

      {/* 7. Archive preview — reinforce depth for scrollers */}
      <section className="py-16 sm:py-24 border-t border-border relative">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-2">Active Files</p>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">From the Archive</h2>
            </div>
            <Link
              href="/documents"
              className="hidden sm:flex items-center gap-2 font-label text-xs tracking-[0.15em] text-accent hover:text-neon transition-colors duration-150 cyber-focus"
            >
              View All {allDocuments.length} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {recentDocs.map((doc) => (
              <DocCard key={doc.id} doc={doc} variant="terminal" />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/documents"
              className="inline-flex cyber-chamfer border border-accent text-accent font-label text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-accent hover:text-background transition-all duration-150"
            >
              View All {allDocuments.length} Documents
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Lead Magnet — second touch before footer */}
      <LeadMagnetSection />
    </div>
  )
}
