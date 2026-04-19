export interface Document {
  id: string
  title: string
  docNumber: string
  author?: string
  date?: string
  pages?: number
  classification?: string
  pdfUrl: string
  readingRoomUrl?: string
  category: string
  topics: string[]
  summary: string
  isFeatured: boolean
}

export type NeonColor = 'accent' | 'secondary' | 'tertiary' | 'destructive'

export const CATEGORIES = [
  'Consciousness & Meditation Training',
  'Breathing Techniques & Energy Work',
  'Remote Viewing & Operational Applications',
  'Parapsychology & ESP Research',
  'Soviet/Foreign Metaphysical Research',
  'Program Management & Research Planning',
] as const

export type Category = typeof CATEGORIES[number]
