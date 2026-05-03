import Link from 'next/link'

const PRODUCT_LINKS = [
  { label: 'The Archive — $27',    href: '/#pricing' },
  { label: 'The Program — $97',    href: '/#pricing' },
  { label: 'The Immersion — $297', href: '/#pricing' },
  { label: 'Free Cheat Sheet',     href: '/#lead-magnet' },
  { label: 'Member Login',         href: '/login' },
]

const ARCHIVE_LINKS = [
  { label: 'Consciousness & Meditation', href: '/documents?cat=Consciousness+%26+Meditation+Training' },
  { label: 'Remote Viewing',             href: '/documents?cat=Remote+Viewing+%26+Operational+Applications' },
  { label: 'Breathing & Energy Work',    href: '/documents?cat=Breathing+Techniques+%26+Energy+Work' },
  { label: 'Parapsychology & ESP',       href: '/documents?cat=Parapsychology+%26+ESP+Research' },
  { label: 'Soviet Files',               href: '/documents?cat=Soviet%2FForeign+Metaphysical+Research' },
]

const LEARN_LINKS = [
  { label: 'Research Breakdown',   href: '/research' },
  { label: 'Glossary of Terms',    href: '/glossary' },
  { label: 'Implementation Guide', href: '/program' },
  { label: 'Quick Reference',      href: '/cheat-sheet' },
  { label: 'Interactive Dossier',  href: '/viewer' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy',  href: '/refund' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-accent mb-3">
              DECLASSIFIED//MINE
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed tracking-wide max-w-xs mb-4">
              23 government intelligence documents on consciousness, remote viewing, and altered states — reconstructed, annotated, and turned into an actionable system.
            </p>
            <Link
              href="/#pricing"
              className="inline-flex cyber-chamfer-sm border border-accent text-accent font-label text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 hover:bg-accent hover:text-background transition-all duration-150"
            >
              Get Access →
            </Link>
          </div>

          {/* Product */}
          <div>
            <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Product</p>
            <ul className="space-y-2">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs text-muted-foreground hover:text-accent transition-colors duration-150 tracking-wide">
                    <span className="text-accent mr-2">&gt;</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive */}
          <div>
            <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Research Archive</p>
            <ul className="space-y-2">
              {ARCHIVE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs text-muted-foreground hover:text-accent transition-colors duration-150 tracking-wide">
                    <span className="text-accent mr-2">&gt;</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Learn</p>
            <ul className="space-y-2">
              {LEARN_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs text-muted-foreground hover:text-accent transition-colors duration-150 tracking-wide">
                    <span className="text-accent mr-2">&gt;</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">By the Numbers</p>
            <div className="space-y-3">
              {[
                ['23',       'Intelligence Documents'],
                ['$20M+',    'Government Funded'],
                ['1953–95',  'Program Era'],
                ['90-Day',   'Money-Back Guarantee'],
              ].map(([val, label]) => (
                <div key={label} className="flex items-baseline gap-3">
                  <span className="font-heading text-sm font-bold text-accent">{val}</span>
                  <span className="text-xs text-muted-foreground tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Easter egg — hover the classification stamp */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-label text-xs text-muted-foreground tracking-[0.1em]">
            Intelligence recovered via{' '}
            <a
              href="https://www.cia.gov/readingroom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-neon transition-colors"
            >
              CIA CREST database
            </a>
            {' '}· Reconstructed 2024
          </p>

          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              {LEGAL_LINKS.map(({ label, href }) => (
                <Link key={href} href={href} className="font-label text-[10px] tracking-[0.1em] text-muted-foreground hover:text-accent transition-colors">
                  {label}
                </Link>
              ))}
            </div>
            {/* Easter egg: hover reveals classified level */}
            <p className="font-label text-xs text-muted-foreground tracking-[0.1em] group relative cursor-default select-none">
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                UNCLASSIFIED <span className="text-accent mx-1">//</span> APPROVED FOR RELEASE
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-destructive tracking-[0.1em] whitespace-nowrap">
                ⚠ EYES ONLY <span className="text-accent mx-1">//</span> CLEARANCE: COSMIC
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
