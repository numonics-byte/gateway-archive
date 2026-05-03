import type { Metadata } from 'next'
import { Orbitron, JetBrains_Mono, Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const shareTechMono = Share_Tech_Mono({
  variable: '--font-share-tech',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Declassified Mine — CIA Consciousness Intelligence',
  description:
    'The U.S. government spent 23 years and $20M+ studying whether the human mind could exceed the limits of physics. These are the files they left behind. Now reconstructed. Now yours.',
  keywords: [
    'Gateway Experience', 'CIA declassified', 'remote viewing', 'STAR GATE',
    'consciousness research', 'Hemi-Sync', 'Monroe Institute', 'breathwork',
    'binaural beats', 'altered states', 'Gateway Process CIA', 'declassified mine',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${jetbrainsMono.variable} ${shareTechMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-mono">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
