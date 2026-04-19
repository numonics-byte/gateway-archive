'use client'

import { Suspense, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { allDocuments, CATEGORY_STATS, COLOR_MAP } from '@/lib/documents'
import DocCard from '@/components/ui/DocCard'

const ALL_FILTER = 'ALL'

export default function DocumentsPage() {
  return (
    <Suspense>
      <DocumentsCatalog />
    </Suspense>
  )
}

function DocumentsCatalog() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const activeCategory = searchParams.get('cat') ?? ALL_FILTER
  const query = searchParams.get('q') ?? ''

  function setActiveCategory(cat: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === ALL_FILTER) {
      params.delete('cat')
    } else {
      params.set('cat', cat)
    }
    router.replace(`/documents?${params.toString()}`, { scroll: false })
  }

  function setQuery(q: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (q.trim()) {
      params.set('q', q)
    } else {
      params.delete('q')
    }
    router.replace(`/documents?${params.toString()}`, { scroll: false })
  }

  function clearFilters() {
    router.replace('/documents', { scroll: false })
  }

  const filtered = useMemo(() => {
    let docs = allDocuments
    if (activeCategory !== ALL_FILTER) {
      docs = docs.filter((d) => d.category === activeCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      docs = docs.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.summary.toLowerCase().includes(q) ||
          d.topics.some((t) => t.toLowerCase().includes(q)) ||
          d.docNumber.toLowerCase().includes(q)
      )
    }
    return docs
  }, [activeCategory, query])

  return (
    <div className="pt-14 min-h-screen">
      {/* ── Page Header ──────────────────────────────────────── */}
      <div className="border-b border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-accent/4 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-3">
            <span className="text-muted-foreground">&gt; </span>declassified / intelligence-archive
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-widest uppercase mb-4">
            Document Archive
          </h1>
          <p className="font-mono text-sm text-muted-foreground tracking-wide max-w-xl">
            {allDocuments.length} declassified files across 6 research domains. All documents sourced from the CIA Reading Room.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Search ───────────────────────────────────────────── */}
        <div className="relative mb-8 max-w-lg">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-accent text-sm select-none">&gt;</span>
          <input
            type="text"
            placeholder="Search documents, topics, doc numbers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-input border border-border cyber-chamfer-sm pl-9 pr-4 py-3 text-sm font-mono text-accent placeholder:text-muted-foreground focus:border-accent focus:shadow-neon-sm outline-none transition-all duration-200 tracking-wide"
          />
        </div>

        {/* ── Category Filters ─────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(ALL_FILTER)}
            className={`cyber-chamfer-sm font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-150 cyber-focus ${
              activeCategory === ALL_FILTER
                ? 'border-accent text-accent bg-accent/10 shadow-neon-sm'
                : 'border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
            }`}
          >
            All ({allDocuments.length})
          </button>

          {Object.entries(CATEGORY_STATS).map(([category, { count, color }]) => {
            const { text, border } = COLOR_MAP[color]
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cyber-chamfer-sm font-label text-[10px] tracking-[0.12em] uppercase px-3 py-2 border transition-all duration-150 cyber-focus ${
                  isActive
                    ? `${border} ${text} bg-current/10`
                    : 'border-border text-muted-foreground hover:border-current/50 hover:text-foreground'
                }`}
              >
                {category.split('&')[0].trim()} ({count})
              </button>
            )
          })}
        </div>

        {/* ── Results count ────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-label text-xs tracking-[0.15em] text-muted-foreground uppercase">
            {filtered.length} file{filtered.length !== 1 ? 's' : ''} found
            {activeCategory !== ALL_FILTER && (
              <> — <span className="text-accent">{activeCategory}</span></>
            )}
          </p>
          {(activeCategory !== ALL_FILTER || query) && (
            <button
              onClick={clearFilters}
              className="font-label text-[10px] tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors uppercase"
            >
              Clear Filters ×
            </button>
          )}
        </div>

        {/* ── Document Grid ────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((doc) => (
              <DocCard key={doc.id} doc={doc} variant="default" />
            ))}
          </div>
        ) : (
          <div className="border border-border cyber-chamfer p-12 text-center">
            <p className="font-heading text-xl text-muted-foreground mb-2">NO FILES FOUND</p>
            <p className="font-mono text-xs text-muted-foreground tracking-wide">
              <span className="text-accent">&gt; </span>Try different search terms or clear filters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
