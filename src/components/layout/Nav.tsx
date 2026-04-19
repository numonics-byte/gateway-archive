'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/research',     label: 'Research' },
  { href: '/#pricing',     label: 'Pricing' },
  { href: '/documents',    label: 'Archive' },
  { href: '/glossary',     label: 'Glossary' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isGated = pathname.startsWith('/documents') || pathname === '/program' || pathname === '/cheat-sheet'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 border border-accent cyber-chamfer-sm flex items-center justify-center group-hover:shadow-neon transition-all duration-150">
            <span className="text-accent text-xs font-heading font-bold leading-none">G</span>
          </div>
          <span className="font-heading text-xs font-bold tracking-[0.2em] text-foreground group-hover:text-accent transition-colors duration-150">
            GATEWAY<span className="text-muted-foreground">//</span>ARCHIVE
          </span>
        </Link>

        {/* Nav links — desktop only */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-label text-xs tracking-[0.15em] uppercase transition-colors duration-150 ${
                pathname === href.split('?')[0] && pathname !== '/' && !href.startsWith('/#')
                  ? 'text-accent text-neon'
                  : 'text-muted-foreground hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: CTA/Logout + hamburger */}
        <div className="flex items-center gap-3">
          {isGated ? (
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="cyber-chamfer-sm bg-transparent border border-muted-foreground/40 text-muted-foreground font-label text-xs tracking-[0.15em] uppercase px-4 py-2 hover:border-destructive hover:text-destructive transition-all duration-150 cyber-focus"
              >
                Log Out
              </button>
            </form>
          ) : (
            <Link
              href="/#pricing"
              className="cyber-chamfer-sm bg-transparent border border-accent text-accent font-label text-xs tracking-[0.15em] uppercase px-4 py-2 hover:bg-accent hover:text-background transition-all duration-150 hover:shadow-neon cyber-focus"
            >
              <span className="hidden sm:inline">Get Access</span>
              <span className="sm:hidden">Access</span>
            </Link>
          )}

          {/* Hamburger — mobile/tablet only */}
          <button
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-accent transition-colors duration-150 cyber-focus cursor-pointer"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 font-label text-xs tracking-[0.15em] uppercase py-3 border-b border-border/50 last:border-0 transition-colors duration-150 ${
                  pathname === href.split('?')[0] && pathname !== '/' && !href.startsWith('/#')
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-accent'
                }`}
              >
                <span className="text-accent">&gt;</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
    </header>
  )
}
