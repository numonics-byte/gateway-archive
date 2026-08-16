import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDocumentById } from '@/lib/documents'
import { documentContentLoaders } from '@/lib/document-content'
import GatewayViewer from '@/components/ui/GatewayViewer'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return Object.keys(documentContentLoaders).map((id) => ({ id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const doc = getDocumentById(id)
  if (!doc) return {}
  return {
    title: `${doc.title} — Interactive Dossier | CIA Archive`,
    description: doc.summary,
  }
}

export default async function ViewerPage({ params }: Props) {
  const { id } = await params
  const doc = getDocumentById(id)
  const loadContent = documentContentLoaders[id]
  if (!doc || !loadContent) notFound()

  const { sections, entities, default: Body } = await loadContent()

  return (
    <div className="pt-14">
      <GatewayViewer
        metadata={{
          title: doc.title,
          docNumber: doc.docNumber,
          author: doc.author,
          date: doc.date,
          pages: doc.pages,
          classification: doc.classification,
          pdfUrl: doc.pdfUrl,
        }}
        sections={sections}
        entities={entities}
      >
        <Body />
      </GatewayViewer>
    </div>
  )
}
