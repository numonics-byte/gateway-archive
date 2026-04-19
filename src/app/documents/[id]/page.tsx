import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allDocuments, getDocumentById, getRelatedDocuments, getCategoryColor, COLOR_MAP } from '@/lib/documents'
import CategoryBadge from '@/components/ui/CategoryBadge'
import DocCard from '@/components/ui/DocCard'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return allDocuments.map((doc) => ({ id: doc.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const doc = getDocumentById(id)
  if (!doc) return {}
  return {
    title: `${doc.title} | CIA Archive`,
    description: doc.summary.slice(0, 160),
  }
}

export default async function DocumentPage({ params }: Props) {
  const { id } = await params
  const doc = getDocumentById(id)
  if (!doc) notFound()

  const related = getRelatedDocuments(doc, 3)
  const color = getCategoryColor(doc.category)
  const { text, border, shadow, bg } = COLOR_MAP[color]

  return (
    <div className="pt-14 min-h-screen">
      {/* ── Classification Banner ────────────────────────────── */}
      <div className={`${bg} border-b ${border} py-2`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            {doc.classification ?? 'Unclassified — Approved for Release'}
          </span>
          <span className={`font-label text-[10px] tracking-[0.2em] ${text} uppercase`}>
            CIA Reading Room
          </span>
        </div>
      </div>

      {/* ── Document Header ──────────────────────────────────── */}
      <div className="border-b border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10`}
             style={{ background: color === 'accent' ? '#00ff88' : color === 'secondary' ? '#ff00ff' : color === 'tertiary' ? '#00d4ff' : '#ff3366' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href="/documents"
              className="font-label text-[10px] tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors uppercase"
            >
              ← Archive
            </Link>
            <span className="text-border">|</span>
            <CategoryBadge category={doc.category} size="md" />
            {doc.isFeatured && (
              <span className="font-label text-[10px] tracking-[0.15em] text-accent border border-accent cyber-chamfer-sm px-2 py-0.5">
                FEATURED
              </span>
            )}
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-widest uppercase leading-tight mb-6 max-w-4xl">
            {doc.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {doc.author && (
              <div>
                <span className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-0.5">Author</span>
                <span className="font-mono text-sm text-foreground tracking-wide">{doc.author}</span>
              </div>
            )}
            {doc.date && (
              <div>
                <span className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-0.5">Date</span>
                <span className="font-mono text-sm text-foreground tracking-wide">{doc.date}</span>
              </div>
            )}
            {doc.pages && (
              <div>
                <span className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-0.5">Pages</span>
                <span className="font-mono text-sm text-foreground tracking-wide">{doc.pages}</span>
              </div>
            )}
            <div>
              <span className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-0.5">File ID</span>
              <span className="font-mono text-sm text-muted-foreground tracking-wide">{doc.docNumber}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Main Content ────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary — terminal card */}
            <div className="border border-border bg-background cyber-chamfer overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-card">
                <span className="w-2 h-2 rounded-full bg-destructive opacity-70" />
                <span className="w-2 h-2 rounded-full bg-accent/50 opacity-70" />
                <span className="w-2 h-2 rounded-full bg-accent opacity-70" />
                <span className="ml-2 font-label text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
                  document_summary.txt
                </span>
              </div>
              <div className="p-6">
                <p className="font-label text-[10px] tracking-[0.2em] text-accent uppercase mb-4">
                  &gt; cat summary.txt
                </p>
                <p className="font-mono text-sm text-foreground leading-relaxed tracking-wide">
                  {doc.summary}
                </p>
              </div>
            </div>

            {/* Topics */}
            <div>
              <p className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
                Research Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {doc.topics.map((topic) => (
                  <span
                    key={topic}
                    className={`inline-flex items-center font-label text-[10px] tracking-[0.12em] uppercase border cyber-chamfer-sm px-3 py-1.5 ${text} ${border} ${bg}`}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar ─────────────────────────────────────── */}
          <div className="space-y-6">
            {/* Product Upsell */}
            <div className={`relative border ${border} cyber-chamfer p-6`}>
              <span className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${border}`} />
              <span className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${border}`} />
              <span className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${border}`} />
              <span className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${border}`} />

              <p className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-3">
                Get the Full Analysis
              </p>
              <p className="font-mono text-xs text-foreground leading-relaxed tracking-wide mb-4">
                This document is one of 23. The Gateway Archive distills all of them into an actionable system.
              </p>
              {/* TODO: Replace href with Lemon Squeezy Tier 1 URL */}
              <Link
                href="/#pricing"
                className={`block w-full text-center cyber-chamfer-sm border-2 ${border} ${text} font-label text-xs tracking-[0.2em] uppercase px-6 py-3 hover:shadow-neon transition-all duration-150 cyber-focus`}
              >
                Get Instant Access — $27
              </Link>
            </div>

            {/* Access document */}
            <div className={`relative border ${border} cyber-chamfer p-6 ${shadow}`}>
              <span className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${border}`} />
              <span className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${border}`} />
              <span className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${border}`} />
              <span className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${border}`} />

              <p className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
                Source Document
              </p>

              <a
                href={doc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center cyber-chamfer-sm border-2 ${border} ${text} font-label text-xs tracking-[0.2em] uppercase px-6 py-3 hover:${bg} transition-all duration-150 hover:${shadow} cyber-focus mb-3`}
              >
                Access PDF ↗
              </a>

              {doc.readingRoomUrl && (
                <a
                  href={doc.readingRoomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center cyber-chamfer-sm border border-border text-muted-foreground font-label text-xs tracking-[0.15em] uppercase px-6 py-3 hover:border-accent/50 hover:text-foreground transition-all duration-150 cyber-focus"
                >
                  CIA Reading Room ↗
                </a>
              )}
            </div>

            {/* File metadata */}
            <div className="border border-border bg-card cyber-chamfer p-5">
              <p className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4 border-b border-border pb-3">
                File Metadata
              </p>
              <div className="space-y-3">
                {[
                  ['Document ID', doc.docNumber],
                  ['Category', doc.category],
                  ['Classification', doc.classification ?? 'Unclassified'],
                  ['Topics', `${doc.topics.length} indexed`],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase block">{label}</span>
                    <span className="font-mono text-xs text-foreground tracking-wide break-all">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Documents ───────────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-2">Same Category</p>
                <h2 className="font-heading text-3xl font-bold tracking-wide">Related Files</h2>
              </div>
              <Link
                href={`/documents?cat=${encodeURIComponent(doc.category)}`}
                className="hidden sm:flex font-label text-xs tracking-[0.15em] text-accent hover:text-neon transition-colors cyber-focus"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((rel) => (
                <DocCard key={rel.id} doc={rel} variant="terminal" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
