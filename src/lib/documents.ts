import rawData from './data.json'
import type { Document, NeonColor } from './types'

const { reference_document: ref, related_documents: related } = rawData as typeof rawData

export function getCategoryColor(category: string): NeonColor {
  const c = category.toLowerCase()
  if (c.includes('soviet') || c.includes('foreign') || c.includes('offensive')) return 'destructive'
  if (c.includes('remote viewing') || c.includes('operational') || c.includes('intelligence')) return 'secondary'
  if (c.includes('breath') || c.includes('energy') || c.includes('research') || c.includes('planning') || c.includes('experimental')) return 'tertiary'
  return 'accent'
}

export const COLOR_MAP: Record<NeonColor, { text: string; border: string; shadow: string; bg: string }> = {
  accent:      { text: 'text-accent',      border: 'border-accent',      shadow: 'shadow-neon',             bg: 'bg-accent/10' },
  secondary:   { text: 'text-accent-secondary', border: 'border-accent-secondary', shadow: 'shadow-neon-secondary', bg: 'bg-accent-secondary/10' },
  tertiary:    { text: 'text-accent-tertiary',  border: 'border-accent-tertiary',  shadow: 'shadow-neon-tertiary',  bg: 'bg-accent-tertiary/10' },
  destructive: { text: 'text-destructive',  border: 'border-destructive',  shadow: 'shadow-neon-destructive', bg: 'bg-destructive/10' },
}

// Normalize raw category strings to one of the 6 canonical categories
function normalizeCategory(raw: string): string {
  const c = raw.toLowerCase()
  if (c.includes('soviet') || c.includes('foreign') || c.includes('offensive') || c.includes('east european') || c.includes('parapsychology research')) return 'Soviet/Foreign Metaphysical Research'
  if (c.includes('remote viewing')) return 'Remote Viewing & Operational Applications'
  if (c.includes('breath') || c.includes('energy work') || c.includes('ritual') || c.includes('patterning')) return 'Breathing Techniques & Energy Work'
  if (c.includes('research planning') || c.includes('program management') || c.includes('planning')) return 'Program Management & Research Planning'
  if (c.includes('parapsych') || c.includes('esp') || c.includes('meta-analysis') || c.includes('experimental') || c.includes('anomalous') || c.includes('psychic')) return 'Parapsychology & ESP Research'
  return 'Consciousness & Meditation Training'
}

const referenceDoc: Document = {
  id: '0',
  title: ref.title,
  docNumber: ref.doc_number,
  author: ref.author,
  date: ref.date,
  pages: ref.pages,
  classification: ref.classification,
  pdfUrl: ref.pdf_url,
  readingRoomUrl: ref.reading_room_url,
  category: 'Consciousness & Meditation Training',
  topics: ref.topics,
  summary: ref.summary,
  isFeatured: true,
}

const relatedDocs: Document[] = related.map((d) => ({
  id: String(d.id),
  title: d.title,
  docNumber: d.doc_number,
  pdfUrl: d.pdf_url,
  category: normalizeCategory(d.category),
  topics: d.topics,
  summary: d.summary,
  isFeatured: false,
}))

export const allDocuments: Document[] = [referenceDoc, ...relatedDocs]

export function getDocumentById(id: string): Document | undefined {
  return allDocuments.find((d) => d.id === id)
}

export function getDocumentsByCategory(category: string): Document[] {
  return allDocuments.filter((d) => d.category === category)
}

export function getRelatedDocuments(doc: Document, limit = 3): Document[] {
  return allDocuments
    .filter((d) => d.id !== doc.id && d.category === doc.category)
    .slice(0, limit)
}

export const CATEGORY_STATS: Record<string, { count: number; color: NeonColor }> = {
  'Consciousness & Meditation Training':     { count: 0, color: 'accent' },
  'Breathing Techniques & Energy Work':      { count: 0, color: 'tertiary' },
  'Remote Viewing & Operational Applications': { count: 0, color: 'secondary' },
  'Parapsychology & ESP Research':           { count: 0, color: 'accent' },
  'Soviet/Foreign Metaphysical Research':    { count: 0, color: 'destructive' },
  'Program Management & Research Planning':  { count: 0, color: 'tertiary' },
}

for (const doc of allDocuments) {
  if (CATEGORY_STATS[doc.category]) {
    CATEGORY_STATS[doc.category].count++
  }
}
