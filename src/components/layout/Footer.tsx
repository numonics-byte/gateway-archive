import Link from 'next/link'

const PRODUCT_LINKS = [
  { label: 'The Archive — $27',    href: '/#pricing' },
  { label: 'The Program — $97',    href: '/#pricing' },
  { label: 'The Immersion — $297', href: '/#pricing' },
  { label: 'Free Cheat Sheet',     href: '/#lead-magnet' },
]

const ARCHIVE_LINKS = [
  { label: 'Consciousness & Meditation', href: '/documents?cat=Consciousness+%26+Meditation+Training' },
  { label: 'Remote Viewing',             href: '/documents?cat=Remote+Viewing+%26+Operational+Applications' },
  { label: 'Breathing & Energy Work',    href: '/documents?cat=Breathing+Techniques+%26+Energy+Work' },
  { label: 'Parapsychology & ESP',       href: '/documents?cat=Parapsychology+%26+ESP+Research' },
  { label: 'Soviet Files',               href: '/documents?cat=Soviet%2FForeign+Metaphysical+Research' },
]

const LEARN_LINKS = [
  { label: 'Research Breakdown',         href: '/research' },
  { label: 'Glossary of Terms',          href: '/glossary' },
  { label: 'Implementation Guide',       href: '/program' },
  { label: 'Quick Reference Sheet',      href: '/cheat-sheet' },
  { label: 'Interactive Dossier',        href: '/viewer' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-accent mb-3">
              GATEWAY//ARCHIVE
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed tracking-wide max-w-xs mb-4">
              23 declassified CIA documents on consciousness, remote viewing, and altered states — turned into an actionable system.
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
            <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Product
            </p>
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
            <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Research Archive
            </p>
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
            <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Learn
            </p>
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
            <p className="font-label text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              By the Numbers
            </p>
            <div className="space-y-3">
              {[
                ['23',       'Declassified Documents'],
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

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-label text-xs text-muted-foreground tracking-[0.1em]">
            Source documents publicly available via the{' '}
            <a href="https://www.cia.gov/readingroom/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-neon transition-colors">
              CIA Reading Room
            </a>
          </p>
          <p className="font-label text-xs text-muted-foreground tracking-[0.1em]">
            UNCLASSIFIED <span className="text-accent mx-2">//</span> APPROVED FOR RELEASE
          </p>
        </div>
      </div>
    </footer>
  )
}
