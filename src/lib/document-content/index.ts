import type { ComponentType } from 'react'
import type { Entity, ViewerSection } from '@/components/ui/GatewayViewer'

export interface DocumentContentModule {
  sections: ViewerSection[]
  entities: Record<string, Entity>
  default: ComponentType
}

// Register a document here once its interactive reader content exists.
// Everything else falls back to a plain link to the source PDF.
export const documentContentLoaders: Record<string, () => Promise<DocumentContentModule>> = {
  '0': () => import('./0'),
  '1': () => import('./1'),
  '2': () => import('./2'),
  '3': () => import('./3'),
  '4': () => import('./4'),
  '5': () => import('./5'),
  '6': () => import('./6'),
  '7': () => import('./7'),
  '8': () => import('./8'),
  '9': () => import('./9'),
  '10': () => import('./10'),
  '11': () => import('./11'),
  '12': () => import('./12'),
  '13': () => import('./13'),
  '14': () => import('./14'),
  '15': () => import('./15'),
  '16': () => import('./16'),
  '17': () => import('./17'),
  '18': () => import('./18'),
  '19': () => import('./19'),
  '20': () => import('./20'),
  '21': () => import('./21'),
  '22': () => import('./22'),
}

export function hasReaderContent(id: string): boolean {
  return id in documentContentLoaders
}
