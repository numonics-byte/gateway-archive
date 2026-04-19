import type { Metadata } from 'next'
import GatewayViewer from '@/components/ui/GatewayViewer'

export const metadata: Metadata = {
  title: 'Gateway Process — Interactive Dossier | CIA Archive',
  description:
    'Read the declassified CIA Gateway Experience analysis in an interactive document viewer with entity extraction and cross-referencing.',
}

export default function ViewerPage() {
  return (
    <div className="pt-14">
      <GatewayViewer />
    </div>
  )
}
