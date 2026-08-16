'use client';

import { useState, useEffect, useRef, createContext, useContext, type ReactNode } from 'react';

/* ── Shared Types ────────────────────────────────────────────── */
export interface Entity {
  title: string;
  definition: string;
  crossRef: string;
  category: 'technology' | 'state' | 'physics' | 'person' | 'technique' | 'concept';
}

export interface ViewerSection {
  id: string;
  label: string;
}

export interface ViewerMetadata {
  title: string;
  docNumber: string;
  author?: string;
  date?: string;
  pages?: number;
  classification?: string;
  pdfUrl: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  technology: 'text-accent border-accent/40 bg-accent/10',
  state:      'text-accent-secondary border-secondary/40 bg-secondary/10',
  physics:    'text-accent-tertiary border-tertiary/40 bg-tertiary/10',
  person:     'text-destructive border-destructive/40 bg-destructive/10',
  technique:  'text-accent border-accent/40 bg-accent/10',
  concept:    'text-accent-tertiary border-tertiary/40 bg-tertiary/10',
};

/* ── Entity Context — lets document content author <E> without prop drilling ── */
interface EntityContextValue {
  extractionMode: boolean;
  activeEntity: string | null;
  entities: Record<string, Entity>;
  onSelect: (term: string) => void;
}
const EntityContext = createContext<EntityContextValue | null>(null);

/* ── Extractable Inline Component ───────────────────────────── */
function Extractable({
  term,
  extractionMode,
  activeEntity,
  entities,
  onSelect,
  children,
}: {
  term: string;
  extractionMode: boolean;
  activeEntity: string | null;
  entities: Record<string, Entity>;
  onSelect: (term: string) => void;
  children: ReactNode;
}) {
  if (!extractionMode) return <>{children}</>;

  const isActive = activeEntity === term;
  const entity = entities[term];
  const colorClass = entity ? CATEGORY_COLORS[entity.category] : CATEGORY_COLORS.concept;
  const [textColor] = colorClass.split(' ');

  return (
    <span className="relative group/entity inline">
      <span
        onClick={() => onSelect(term)}
        className={`cursor-pointer transition-all duration-150 border-b border-dotted ${
          isActive
            ? `${textColor} border-current font-medium bg-current/10 px-0.5 rounded-sm`
            : `${textColor} border-current/60 hover:border-current hover:bg-current/5`
        }`}
      >
        {children}
      </span>
      {/* Hover tooltip */}
      {!isActive && (
        <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-50 opacity-0 group-hover/entity:opacity-100 transition-opacity duration-150 whitespace-nowrap">
          <span className={`inline-flex items-center gap-1.5 border cyber-chamfer-sm px-2 py-1 text-[9px] font-label tracking-[0.12em] uppercase shadow-lg bg-background ${colorClass}`}>
            <span className="w-1 h-1 rounded-full bg-current" />
            {entity?.title ?? term}
          </span>
        </span>
      )}
    </span>
  );
}

/** Marks a term as extractable. Document content files use this directly —
 *  it reads live state from the nearest GatewayViewer via context. */
export function E({ term, children }: { term: string; children: ReactNode }) {
  const ctx = useContext(EntityContext);
  if (!ctx) return <>{children}</>;
  return (
    <Extractable
      term={term}
      extractionMode={ctx.extractionMode}
      activeEntity={ctx.activeEntity}
      entities={ctx.entities}
      onSelect={ctx.onSelect}
    >
      {children}
    </Extractable>
  );
}

/* ── Document Section Wrapper ───────────────────────────────── */
export function DocSection({ id, number, title, children }: { id: string; number?: string | null; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="flex items-start gap-4 mb-4">
        {number && (
          <span className="font-heading text-xs font-bold text-accent/30 tracking-widest shrink-0 mt-1">{number}</span>
        )}
        <h2 className="font-heading text-lg sm:text-xl font-bold tracking-widest uppercase text-foreground leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-5 pl-0 sm:pl-8">
        {children}
      </div>
    </section>
  );
}

export function P({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[0.9375rem] text-foreground/90 leading-[1.85] tracking-wide ${className}`}>
      {children}
    </p>
  );
}

/* ── Main Viewer Shell ───────────────────────────────────────── */
export default function GatewayViewer({
  metadata,
  sections,
  entities,
  children,
}: {
  metadata: ViewerMetadata;
  sections: ViewerSection[];
  entities: Record<string, Entity>;
  children: ReactNode;
}) {
  const [extractionMode, setExtractionMode] = useState(false);
  const [activeEntity, setActiveEntity] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '');
  const [readProgress, setReadProgress] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  function handleSelect(term: string) {
    setActiveEntity((prev) => (prev === term ? null : term));
  }

  function toggleAnalysis() {
    setExtractionMode((prev) => !prev);
    if (extractionMode) setActiveEntity(null);
  }

  // Track scroll progress + active section
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } = el!;
      setReadProgress(Math.min(100, Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)));

      // Find active section
      for (const { id } of [...sections].reverse()) {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 80 <= scrollTop) {
          setActiveSection(id);
          break;
        }
      }
    }

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [sections]);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el && mainRef.current) {
      mainRef.current.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' });
    }
  }

  const selectedEntity = activeEntity ? entities[activeEntity] : null;

  const metaRows: [string, string][] = [
    ['File', metadata.docNumber],
    ...(metadata.date ? [['Date', metadata.date] as [string, string]] : []),
    ...(metadata.classification ? [['Classification', metadata.classification] as [string, string]] : []),
    ...(metadata.author ? [['Author', metadata.author] as [string, string]] : []),
    ...(metadata.pages ? [['Pages', String(metadata.pages)] as [string, string]] : []),
  ];

  return (
    <EntityContext.Provider value={{ extractionMode, activeEntity, entities, onSelect: handleSelect }}>
      <div className="flex h-[calc(100vh-3.5rem)] w-full overflow-hidden">
        {/* ── Left Sidebar ──────────────────────────────────────── */}
        <aside className="hidden lg:flex flex-col w-[300px] shrink-0 border-r border-border bg-card/60 backdrop-blur-md z-10 overflow-hidden">
          {/* Header */}
          <div className="p-5 border-b border-border shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 border border-accent cyber-chamfer-sm flex items-center justify-center">
                <span className="text-accent text-[9px] font-heading font-bold leading-none">G</span>
              </div>
              <span className="font-heading text-[10px] font-bold tracking-[0.2em] text-accent uppercase">Dossier Viewer</span>
            </div>

            {/* Metadata */}
            <div className="space-y-1.5 mb-4">
              {metaRows.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-3">
                  <span className="font-label text-[8px] tracking-[0.15em] text-muted-foreground uppercase shrink-0">{label}</span>
                  <span className="font-label text-[8px] tracking-[0.15em] text-accent uppercase text-right truncate">{value}</span>
                </div>
              ))}
            </div>

            {/* Analysis Mode Toggle */}
            <button
              onClick={toggleAnalysis}
              className={`w-full cyber-chamfer-sm font-label text-[10px] tracking-[0.15em] uppercase py-2.5 transition-all duration-200 cyber-focus ${
                extractionMode
                  ? 'border-2 border-accent text-accent bg-accent/10 shadow-neon-sm'
                  : 'border border-border text-muted-foreground hover:border-accent hover:text-accent'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${extractionMode ? 'bg-accent animate-pulse-neon' : 'bg-muted-foreground/40'}`} />
                {extractionMode ? 'Analysis Active' : 'Enable Analysis Mode'}
              </span>
            </button>

            {extractionMode && (
              <p className="font-mono text-[9px] text-muted-foreground/60 tracking-wide text-center mt-2">
                {Object.keys(entities).length} entities indexed — hover to preview, click to extract
              </p>
            )}
          </div>

          {/* TOC or Entity Panel */}
          <div className="flex-1 overflow-y-auto">
            {selectedEntity ? (
              /* Entity Info */
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Extracted Entity</span>
                  <button
                    onClick={() => setActiveEntity(null)}
                    className="font-label text-[9px] text-muted-foreground hover:text-accent transition-colors"
                  >
                    ✕ clear
                  </button>
                </div>
                <div className="relative border border-accent/40 cyber-chamfer p-4">
                  <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-accent" />
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-accent" />
                  <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-accent" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-accent" />

                  <div className="flex items-start justify-between gap-2 mb-3">
                    <p className="font-heading text-xs font-bold tracking-[0.12em] text-accent uppercase leading-tight">
                      {selectedEntity.title}
                    </p>
                    <span className={`shrink-0 inline-flex font-label text-[7px] tracking-[0.1em] uppercase border cyber-chamfer-sm px-1.5 py-0.5 ${CATEGORY_COLORS[selectedEntity.category]}`}>
                      {selectedEntity.category}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-foreground leading-relaxed tracking-wide mb-4">
                    {selectedEntity.definition}
                  </p>
                  <div className="pt-3 border-t border-border">
                    <span className="font-label text-[8px] tracking-[0.15em] text-muted-foreground uppercase block mb-1">Cross-Reference</span>
                    <span className="font-mono text-[10px] text-accent tracking-wide">{selectedEntity.crossRef}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveEntity(null)}
                  className="mt-4 w-full font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase text-center hover:text-accent transition-colors"
                >
                  ← Back to Table of Contents
                </button>
              </div>
            ) : (
              /* Table of Contents */
              <div className="p-5">
                <p className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase mb-3 border-b border-border pb-3">
                  Table of Contents
                </p>
                <nav className="space-y-0.5">
                  {sections.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left px-3 py-2 cyber-chamfer-sm transition-all duration-150 ${
                        activeSection === id
                          ? 'bg-accent/10 border border-accent/30 text-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-card'
                      }`}
                    >
                      <span className="font-label text-[9px] tracking-[0.12em] uppercase">{label}</span>
                    </button>
                  ))}
                </nav>

                <div className="mt-5 pt-4 border-t border-border">
                  <a
                    href={metadata.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full cyber-chamfer-sm border border-border text-muted-foreground font-label text-[9px] tracking-[0.15em] uppercase py-2 hover:border-accent hover:text-accent transition-all duration-150"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Source PDF ↗
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="px-5 py-3 border-t border-border shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${extractionMode ? 'bg-accent animate-pulse-neon' : 'bg-muted-foreground/30'}`} />
                <span className="font-label text-[8px] tracking-[0.15em] text-muted-foreground uppercase">
                  {extractionMode ? 'EXTRACTION ACTIVE' : 'STANDBY'}
                </span>
              </div>
              <span className="font-label text-[8px] text-muted-foreground/50">{readProgress}% read</span>
            </div>
            <div className="h-0.5 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${readProgress}%` }}
              />
            </div>
          </div>
        </aside>

        {/* ── Mobile FAB ────────────────────────────────────────── */}
        <div className="lg:hidden fixed bottom-6 right-6 z-30">
          <button
            onClick={toggleAnalysis}
            className={`flex items-center gap-2 rounded-full pl-4 pr-5 py-3 backdrop-blur-md shadow-lg transition-all duration-200 ${
              extractionMode
                ? 'border-2 border-accent bg-background/90 text-accent shadow-neon-sm'
                : 'border border-border bg-background/80 text-muted-foreground'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${extractionMode ? 'bg-accent animate-pulse-neon' : 'bg-muted-foreground/40'}`} />
            <span className="font-label text-[10px] tracking-[0.15em] uppercase">
              {extractionMode ? 'Analysis On' : 'Analysis'}
            </span>
          </button>
        </div>

        {/* ── Mobile Entity Card ─────────────────────────────────── */}
        {selectedEntity && (
          <div className="lg:hidden fixed bottom-20 left-4 right-4 z-20 border border-accent/40 bg-background/95 backdrop-blur-xl cyber-chamfer p-4 shadow-neon-sm">
            <button onClick={() => setActiveEntity(null)} className="absolute top-2 right-3 font-label text-[10px] text-muted-foreground hover:text-accent">✕</button>
            <p className="font-heading text-xs font-bold tracking-[0.15em] text-accent uppercase mb-2">{selectedEntity.title}</p>
            <p className="font-mono text-xs text-foreground leading-relaxed tracking-wide mb-2">{selectedEntity.definition}</p>
            <span className="font-label text-[9px] text-muted-foreground">Ref: {selectedEntity.crossRef}</span>
          </div>
        )}

        {/* ── Main Document Pane ─────────────────────────────────── */}
        <main ref={mainRef} className="flex-1 overflow-y-auto relative">
          {/* Reading progress bar — top of pane */}
          <div className="sticky top-0 z-10 h-0.5 bg-border">
            <div className="h-full bg-accent transition-all duration-300" style={{ width: `${readProgress}%` }} />
          </div>

          <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />

          <div className="relative max-w-[760px] mx-auto px-6 sm:px-10 py-12 sm:py-16 space-y-16">
            {children}

            {/* Document footer */}
            <div className="pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground/50 uppercase">
                  End of Document · {metadata.title}
                </span>
                {metadata.classification && (
                  <span className="font-label text-[9px] tracking-[0.15em] text-destructive/50 uppercase">{metadata.classification}</span>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </EntityContext.Provider>
  );
}
