import Link from 'next/link'
import type { Document } from '@/lib/types'
import { getCategoryColor, COLOR_MAP } from '@/lib/documents'
import CategoryBadge from './CategoryBadge'

interface Props {
  doc: Document
  variant?: 'default' | 'terminal' | 'featured'
}

export default function DocCard({ doc, variant = 'default' }: Props) {
  const color = getCategoryColor(doc.category)
  const { text, border, shadow } = COLOR_MAP[color]

  if (variant === 'featured') {
    return (
      <Link href={`/documents/${doc.id}`} className="block group">
        <article className={`relative border ${border} bg-card cyber-chamfer-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:${shadow}`}>
          {/* Holographic corner accents */}
          <span className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${border}`} />
          <span className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${border}`} />
          <span className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${border}`} />
          <span className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${border}`} />

          <div className="flex items-start justify-between gap-4 mb-4">
            <CategoryBadge category={doc.category} size="md" />
            {doc.isFeatured && (
              <span className="font-label text-[10px] tracking-[0.15em] text-accent border border-accent cyber-chamfer-sm px-2 py-0.5 animate-pulse-neon">
                FEATURED
              </span>
            )}
          </div>

          <h2 className={`font-heading text-xl font-bold mb-3 tracking-wide leading-tight group-hover:${text} transition-colors duration-150`}>
            {doc.title}
          </h2>

          {(doc.author || doc.date) && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
              {doc.author && (
                <span className="font-label text-xs text-muted-foreground tracking-wide">
                  {doc.author}
                </span>
              )}
              {doc.date && (
                <span className="font-label text-xs text-muted-foreground tracking-wide">
                  {doc.date}
                </span>
              )}
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed tracking-wide mb-5 flex-1">
            {doc.summary}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
              {doc.docNumber}
            </span>
            <span className={`font-label text-xs ${text} tracking-[0.1em] group-hover:underline`}>
              ACCESS FILE →
            </span>
          </div>
        </article>
      </Link>
    )
  }

  if (variant === 'terminal') {
    return (
      <Link href={`/documents/${doc.id}`} className="block group h-full">
        <article className="border border-border bg-background cyber-chamfer transition-all duration-300 hover:border-accent hover:shadow-neon-sm hover:-translate-y-0.5 h-full flex flex-col">
          {/* Terminal header bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-card shrink-0">
            <span className="w-2 h-2 rounded-full bg-destructive opacity-70" />
            <span className="w-2 h-2 rounded-full bg-accent/50 opacity-70" />
            <span className="w-2 h-2 rounded-full bg-accent opacity-70" />
            <span className="ml-2 font-label text-[10px] text-muted-foreground tracking-[0.15em] uppercase truncate">
              {doc.docNumber}
            </span>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <CategoryBadge category={doc.category} />

            <h3 className="font-heading text-sm font-bold mt-3 mb-2 leading-snug tracking-wide group-hover:text-accent transition-colors duration-150 line-clamp-2">
              {doc.title}
            </h3>

            <p className="text-xs text-muted-foreground leading-relaxed tracking-wide line-clamp-2 mb-4 flex-1">
              {doc.summary}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {doc.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="font-label text-[10px] tracking-[0.1em] text-muted-foreground border border-border/60 px-1.5 py-0.5"
                >
                  {topic}
                </span>
              ))}
              {doc.topics.length > 3 && (
                <span className="font-label text-[10px] tracking-[0.1em] text-muted-foreground">
                  +{doc.topics.length - 3}
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    )
  }

  // Default card
  return (
    <Link href={`/documents/${doc.id}`} className="block group">
      <article className="border border-border bg-card cyber-chamfer p-5 transition-all duration-300 hover:border-accent hover:shadow-neon-sm hover:-translate-y-0.5 h-full flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3">
          <CategoryBadge category={doc.category} />
          {doc.pages && (
            <span className="font-label text-[10px] text-muted-foreground tracking-wide whitespace-nowrap">
              {doc.pages}p
            </span>
          )}
        </div>

        <h3 className="font-heading text-sm font-bold mb-2 leading-snug tracking-wide group-hover:text-accent transition-colors duration-150 line-clamp-2">
          {doc.title}
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed tracking-wide line-clamp-3 flex-1 mb-4">
          {doc.summary}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="font-label text-[10px] text-muted-foreground tracking-[0.1em] truncate">
            {doc.docNumber}
          </span>
          <span className={`font-label text-[10px] ${text} tracking-[0.1em]`}>→</span>
        </div>
      </article>
    </Link>
  )
}
