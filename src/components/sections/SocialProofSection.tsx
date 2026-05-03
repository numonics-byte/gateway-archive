import DitheringQuoteCard from '@/components/ui/DitheringQuoteCard'

const VIRAL_STATS = [
  { value: '$20M+',   label: 'Government Funded',   sublabel: 'Taxpayer research budget' },
  { value: '23 yrs',  label: 'Active Program',       sublabel: '1972 to 1995' },
  { value: '3',       label: 'Federal Agencies',     sublabel: 'CIA · DIA · NSA' },
  { value: '439 pp',  label: 'Scientific Papers',    sublabel: 'SAIC meta-analysis alone' },
]

export default function SocialProofSection() {
  return (
    <section id="proof" className="py-16 sm:py-24 border-t border-border bg-card relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 rounded-full bg-accent/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-12 text-center">
          <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-2">The Evidence</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">The Research Is Real</h2>
        </div>

        {/* Viral stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border border border-border lg:cyber-chamfer mb-16">
          {VIRAL_STATS.map(({ value, label, sublabel }) => (
            <div key={label} className="px-4 py-5 sm:px-6 lg:py-8 flex flex-col gap-1 bg-background">
              <span className="font-heading text-2xl sm:text-3xl font-black text-accent">{value}</span>
              <span className="font-label text-xs tracking-[0.15em] uppercase text-foreground">{label}</span>
              <span className="font-label text-[10px] tracking-[0.1em] text-muted-foreground">{sublabel}</span>
            </div>
          ))}
        </div>

        {/* Featured finding */}
        <DitheringQuoteCard />
      </div>
    </section>
  )
}
