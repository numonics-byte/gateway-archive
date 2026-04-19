'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';

/* ── Entity Dictionary ──────────────────────────────────────── */
interface Entity {
  title: string;
  definition: string;
  crossRef: string;
  category: 'technology' | 'state' | 'physics' | 'person' | 'technique' | 'concept';
}

const ENTITIES: Record<string, Entity> = {
  'Gateway Experience': {
    title: 'Gateway Experience',
    definition: 'A training system developed by the Monroe Institute designed to bring enhanced strength, focus and coherence to brainwave output, altering consciousness to escape the restrictions of time and space.',
    crossRef: 'Sec. 5 — Hemi-Sync Introduction',
    category: 'concept',
  },
  'Hemi-Sync': {
    title: 'Hemi-Sync (Hemispheric Synchronization)',
    definition: 'Audio technology using binaural beats to synchronize the left and right hemispheres of the brain, enabling progressively deeper altered states of consciousness.',
    crossRef: 'Sec. 6 — Frequency Following Response',
    category: 'technology',
  },
  'Itzhak Bentov': {
    title: 'Itzhak Bentov',
    definition: 'Biomedical engineer whose models describe the physical aspects of the Gateway process, specifically relating to standing acoustical waves in the cerebral ventricles and body resonance patterns.',
    crossRef: 'Sec. 3 — Transcendental Meditation; Sec. 7 — Body Resonance',
    category: 'person',
  },
  'Robert Monroe': {
    title: 'Robert Monroe',
    definition: 'Founder of the Monroe Institute and developer of Hemi-Sync technology. Author of Journeys Out of the Body. Pioneered systematic research into out-of-body states through audio-guided techniques.',
    crossRef: 'Sec. 5 — Gateway and Hemi-Sync',
    category: 'person',
  },
  'Monroe Institute': {
    title: 'Monroe Institute',
    definition: 'Research organization founded by Robert Monroe in Faber, Virginia. Developed the Gateway Experience training program and Hemi-Sync audio technology. Trained US Army Intelligence personnel, as documented in this report.',
    crossRef: 'Cover page — Source of Assessment',
    category: 'concept',
  },
  'Karl Pribram': {
    title: 'Karl Pribram',
    definition: 'Stanford neuroscientist whose holographic model of brain function underpins the Gateway framework. Proposed that the brain stores memory and processes perception holographically, with each part encoding the whole.',
    crossRef: 'Sec. 12 — The Holographic Model',
    category: 'person',
  },
  'David Bohm': {
    title: 'David Bohm',
    definition: 'Physicist at the University of London who proposed that the universe itself is a hologram — an "implicate order" of interacting energy fields. His work, combined with Pribram\'s, forms the holographic model central to Gateway theory.',
    crossRef: 'Sec. 12 — The Holographic Model',
    category: 'person',
  },
  'quantum mechanics': {
    title: 'Quantum Mechanics',
    definition: 'Physics principles necessary to describe the nature and functioning of human consciousness, specifically behaviors below Planck\'s Distance (10⁻³³ cm) where energy exits the time-space dimension.',
    crossRef: 'Sec. 19 — Intervening Dimensions',
    category: 'physics',
  },
  'brain hemisphere synchronization': {
    title: 'Brain Hemisphere Synchronization',
    definition: 'The state of consciousness defined when the EEG patterns of both hemispheres are simultaneously equal in amplitude and frequency — like a laser versus an incandescent bulb. Dramatically increases the power and reach of consciousness.',
    crossRef: 'Sec. 6 — Gateway and Hemi-Sync',
    category: 'technology',
  },
  'Frequency Following Response': {
    title: 'Frequency Following Response (FFR)',
    definition: 'The brain\'s natural tendency to adjust its brainwave output to match an external frequency it perceives. The physiological foundation of Hemi-Sync technology.',
    crossRef: 'Sec. 6 — Hemi-Sync Mechanism',
    category: 'technology',
  },
  'binaural beats': {
    title: 'Binaural Beats',
    definition: 'An auditory phenomenon where two slightly different frequencies are delivered to each ear via stereo headphones. The brain perceives the mathematical difference as a third "beat" frequency and entrains to it — the only method for introducing sub-audible brainwave frequencies.',
    crossRef: 'Sec. 6 — Hemi-Sync Mechanism',
    category: 'technology',
  },
  'time-space dimension': {
    title: 'Time-Space Dimension',
    definition: 'The physical realm governed by relativity where energy in motion generates time and space. Consciousness operating in this dimension is subject to linear causality. The Gateway process is designed to allow consciousness to transcend these boundaries.',
    crossRef: 'Sec. 18 — Time-Space Dimension',
    category: 'physics',
  },
  'bifurcation echo': {
    title: 'Bifurcation Echo',
    definition: 'The interference pattern created when the heart\'s pressure pulse bounces back from the aortic fork and collides with the next outgoing pulse. In deep relaxation, this echo fades, producing a clean resonant sine wave throughout the body at 7–7.5 Hz.',
    crossRef: 'Sec. 7 — Body Resonance',
    category: 'physics',
  },
  'Schumann Resonance': {
    title: 'Schumann Resonance',
    definition: 'The Earth\'s natural electromagnetic resonance frequency — approximately 7–7.5 Hz. When the body achieves deep relaxation, its resonant frequency matches the Schumann Resonance, effectively tuning the body to the planet\'s electromagnetic field.',
    crossRef: 'Sec. 7 — Body/Earth Resonance',
    category: 'physics',
  },
  'holographic model': {
    title: 'Holographic Model of Consciousness',
    definition: 'The theoretical framework (Pribram/Bohm) proposing that the universe is a hologram of interacting energy fields, and the human mind is itself a hologram that perceives reality by attuning to the universal hologram through energy exchange. "The Part Encodes the Whole."',
    crossRef: 'Sec. 12 — Holographic Model',
    category: 'concept',
  },
  'Focus 10': {
    title: 'Focus 10 — Mind Awake / Body Asleep',
    definition: 'The first major Gateway consciousness state. The physical body enters a deep sleep-like condition while consciousness remains fully alert and aware. The platform for all subsequent Gateway techniques.',
    crossRef: 'Sec. 15 — Focus Levels',
    category: 'state',
  },
  'Focus 12': {
    title: 'Focus 12 — Expanded Awareness',
    definition: 'The state where consciousness begins to perceive beyond the boundaries of physical reality. The platform for all advanced Gateway techniques including Problem Solving, Patterning, Remote Viewing, and Color Breathing.',
    crossRef: 'Sec. 15 — Focus Levels',
    category: 'state',
  },
  'Focus 15': {
    title: 'Focus 15 — No Time',
    definition: 'An advanced state where the concept of linear time dissolves and access to past events and timelines becomes possible. Achieved by fewer than 5% of participants during standard 7-day Gateway training.',
    crossRef: 'Sec. 15 — Focus Levels',
    category: 'state',
  },
  'Focus 21': {
    title: 'Focus 21 — Other Dimensions',
    definition: 'The most advanced Gateway state — movement outside time-space boundaries with attention to future discovery and interdimensional exploration. Requires months to years of dedicated practice.',
    crossRef: 'Sec. 15 — Focus Levels',
    category: 'state',
  },
  "Planck's Distance": {
    title: "Planck's Distance",
    definition: '10⁻³³ centimeters. The quantum mechanical threshold below which energy "clicks out" of the time-space dimension. At this boundary, the normal rules of causality and linear time break down. Bentov: "When distances go below Planck\'s Distance, we enter, in effect, a new world."',
    crossRef: 'Sec. 19 — Click-Out Phenomenon',
    category: 'physics',
  },
  'the Absolute': {
    title: 'The Absolute',
    definition: 'Infinite, formless, conscious energy at complete rest. It occupies every dimension (being without boundaries) but cannot be perceived by consciousness operating in the active universe. The source from which all reality emerges. Analogous to God or infinite consciousness in spiritual traditions.',
    crossRef: 'Sec. 18 — The Absolute',
    category: 'concept',
  },
  'torus': {
    title: 'Torus / Cosmic Egg',
    definition: 'Itzhak Bentov\'s model of the universe as a donut-shaped geometric form. Matter is ejected from a "white hole," travels around the shell, and is reabsorbed at a "black hole." Past, present, and future all exist simultaneously within this self-contained structure.',
    crossRef: 'Sec. 21 — Cosmic Egg Model',
    category: 'concept',
  },
  'out-of-body state': {
    title: 'Out-of-Body State (OBE)',
    definition: 'A condition involving projection of a major portion of the energy pattern constituting consciousness outside the physical body. The projected consciousness can move freely through the terrestrial sphere or into other dimensions. Requires three simultaneous conditions: physical quiet, hemisphere synchronization, and right-hemisphere stimulation.',
    crossRef: 'Sec. 25 — Out-of-Body Experience',
    category: 'concept',
  },
  'REBAL': {
    title: 'REBAL — Resonant Energy Balloon',
    definition: 'A continuous, egg-shaped energy field visualized around the body. Energy flows up through the body, out the crown, cascades down in all directions, and cycles back through the feet. Mirrors the torus pattern of the universe. Serves to amplify body resonance and provide energetic protection.',
    crossRef: 'Sec. 15 — Energy Balloon Technique',
    category: 'technique',
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  technology: 'text-accent border-accent/40 bg-accent/10',
  state:      'text-accent-secondary border-secondary/40 bg-secondary/10',
  physics:    'text-accent-tertiary border-tertiary/40 bg-tertiary/10',
  person:     'text-destructive border-destructive/40 bg-destructive/10',
  technique:  'text-accent border-accent/40 bg-accent/10',
  concept:    'text-accent-tertiary border-tertiary/40 bg-tertiary/10',
};

/* ── Table of Contents ──────────────────────────────────────── */
const SECTIONS = [
  { id: 'doc-intro',        label: 'Introduction' },
  { id: 'doc-context',      label: '1. Related Techniques' },
  { id: 'doc-hemis',        label: '2. The Hemi-Sync Mechanism' },
  { id: 'doc-resonance',    label: '3. Resonance & Body Vibration' },
  { id: 'doc-hologram',     label: '4. Consciousness & Holograms' },
  { id: 'doc-timespace',    label: '5. Time-Space & The Absolute' },
  { id: 'doc-cosmic',       label: '6. The Cosmic Egg / Torus' },
  { id: 'doc-obe',          label: '7. The Out-of-Body State' },
  { id: 'doc-training',     label: '8. Gateway Training Method' },
  { id: 'doc-conclusion',   label: '9. Conclusions' },
];

/* ── Extractable Inline Component ───────────────────────────── */
function Extractable({
  term,
  extractionMode,
  activeEntity,
  onSelect,
  children,
}: {
  term: string;
  extractionMode: boolean;
  activeEntity: string | null;
  onSelect: (term: string) => void;
  children: ReactNode;
}) {
  if (!extractionMode) return <>{children}</>;

  const isActive = activeEntity === term;
  const entity = ENTITIES[term];
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

/* ── Document Section Wrapper ───────────────────────────────── */
function DocSection({ id, number, title, children }: { id: string; number?: string | null; title: string; children: ReactNode }) {
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

function P({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[0.9375rem] text-foreground/90 leading-[1.85] tracking-wide ${className}`}>
      {children}
    </p>
  );
}

/* ── Main Viewer Component ──────────────────────────────────── */
export default function GatewayViewer() {
  const [extractionMode, setExtractionMode] = useState(false);
  const [activeEntity, setActiveEntity] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('doc-intro');
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
      for (const { id } of [...SECTIONS].reverse()) {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 80 <= scrollTop) {
          setActiveSection(id);
          break;
        }
      }
    }

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el && mainRef.current) {
      mainRef.current.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' });
    }
  }

  const selectedEntity = activeEntity ? ENTITIES[activeEntity] : null;

  // Shorthand for Extractable — captures closed-over state
  function E({ term, children }: { term: string; children: ReactNode }) {
    return (
      <Extractable term={term} extractionMode={extractionMode} activeEntity={activeEntity} onSelect={handleSelect}>
        {children}
      </Extractable>
    );
  }

  return (
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
            {[
              ['File', 'CIA-RDP96-00788'],
              ['Date', '9 June 1983'],
              ['Classification', 'SECRET'],
              ['Author', 'LTC McDonnell'],
              ['Pages', '29'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between">
                <span className="font-label text-[8px] tracking-[0.15em] text-muted-foreground uppercase">{label}</span>
                <span className="font-label text-[8px] tracking-[0.15em] text-accent uppercase">{value}</span>
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
              {Object.keys(ENTITIES).length} entities indexed — hover to preview, click to extract
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
                {SECTIONS.map(({ id, label }) => (
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
                  href="/00-gateway-experience-CIA-RDP96-00788R001700210016-5.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full cyber-chamfer-sm border border-border text-muted-foreground font-label text-[9px] tracking-[0.15em] uppercase py-2 hover:border-accent hover:text-accent transition-all duration-150"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Export PDF
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

          {/* ── Document Header ──────────────────────────────── */}
          <section id="doc-intro" className="scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 border border-destructive cyber-chamfer-sm px-3 py-1 bg-destructive/10">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-neon" />
                <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">SECRET</span>
              </span>
              <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00788R001700210016-5</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
              Analysis and Assessment of<br />Gateway Process
            </h1>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
              {[['Author', 'LTC Wayne M. McDonnell'], ['Date', '9 June 1983'], ['Command', 'US Army Operational Group, Fort Meade']].map(([l, v]) => (
                <div key={l}>
                  <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
                  <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

            <P>
              1. You tasked me to provide an assessment of the{' '}
              <E term="Gateway Experience">Gateway Experience</E>{' '}
              in terms of its mechanics and ultimate practicality. As I set out to fulfill that tasking it soon became
              clear that in order to assess the validity and practicality of the process I needed to do enough supporting
              research and analysis to fully understand how and why the process works.
            </P>
            <P>
              2. Frankly, sir, that proved to be an extremely involved and difficult business. Initially, I had recourse to
              the biomedical models developed by{' '}
              <E term="Itzhak Bentov">Itzhak Bentov</E>{' '}
              to obtain information concerning the physical aspects of the process. Then I found it necessary to delve into{' '}
              <E term="quantum mechanics">quantum mechanics</E>{' '}
              in order to describe the nature and functioning of human consciousness. I had to construct a scientifically
              valid model of how consciousness functions under the influence of{' '}
              <E term="brain hemisphere synchronization">brain hemisphere synchronization</E>{' '}
              as employed by Gateway.
            </P>
            <P>
              3. Once this was done, the next step involved recourse to theoretical physics in order to explain the
              character of the{' '}
              <E term="time-space dimension">time-space dimension</E>{' '}
              and the means by which expanded human consciousness transcends it in achieving Gateway&apos;s objectives.
              Finally, I needed to be able to describe the{' '}
              <E term="holographic model">holographic model</E>{' '}
              of the universe so that the reader could understand the relationship between the universe and human consciousness.
            </P>
          </section>

          {/* ── Section 1: Related Techniques ────────────────── */}
          <DocSection id="doc-context" number="PART I" title="Related Techniques as Context">
            <P>
              4. The{' '}
              <E term="Monroe Institute">Monroe Institute</E>{' '}
              program profitably employs a variety of techniques — some commonplace, some more exotic — in the
              Gateway training. In order to understand how and why the Gateway process works it is first necessary
              to appreciate the significance of the following background techniques.
            </P>
            <P>
              5. <span className="text-accent font-mono">Hypnosis.</span> It is well established that hypnosis
              works by causing the left hemisphere of the brain to go into a sleep state so that the right hemisphere
              can be accessed by the hypnotist. The left hemisphere is the analytical, verbal part of the brain. In ordinary
              consciousness it screens all input and processes it through a filter of preconceived constructs and concepts.
              Hypnosis short-circuits this filtering function. Gateway differs from hypnosis in that it does not depend on
              an external hypnotist — the participant retains full volition and conscious control throughout.
            </P>
            <P>
              6. <span className="text-accent font-mono">Transcendental Meditation.</span> Transcendental Meditation uses
              a mantra to focus the concentration and to draw energy up the spinal column. Over the long period of
              practice required by TM (15 to 20 years), this process creates standing acoustic waves in the brain&apos;s
              ventricles. The limitation is obvious: it requires extraordinary patience and discipline over decades of practice.
            </P>
            <P>
              7. <span className="text-accent font-mono">Biofeedback.</span> Biofeedback uses electronic devices to
              train the left brain to recognize and replicate specific brainwave states associated with right-brain
              intuitive function. Gateway incorporates this principle but delivers it through audio rather than electronic
              instrumentation — dramatically reducing the complexity and cost of achieving the same outcome.{' '}
              <E term="Hemi-Sync">Hemi-Sync</E>{' '}
              is the audio technology through which this is achieved.
            </P>
          </DocSection>

          {/* ── Section 2: Hemi-Sync ─────────────────────────── */}
          <DocSection id="doc-hemis" number="PART II" title="The Hemi-Sync Mechanism">
            <P>
              8. The{' '}
              <E term="Hemi-Sync">Hemi-Sync</E>{' '}
              technique works as follows. The left hemisphere of the brain is presented with one frequency in one ear while
              the right hemisphere receives a slightly different frequency in the other ear. The brain &quot;hears&quot; the
              mathematical difference between the two as a{' '}
              <E term="binaural beats">binaural beat</E>{' '}
              and attempts to entrain its own brainwave output to match it. This is called the{' '}
              <E term="Frequency Following Response">Frequency Following Response</E>.
            </P>
            <P>
              9. Because the low frequencies associated with altered states of consciousness are below the threshold
              of ordinary hearing, binaural beats represent the only practical method for introducing sub-audible
              brainwave-range frequencies into the brain. A 4 Hz Theta beat, for example, is produced by sending 100 Hz
              to the left ear and 104 Hz to the right. The brain resolves the difference.
            </P>
            <P>
              10. What{' '}
              <E term="Hemi-Sync">Hemi-Sync</E>{' '}
              achieves, when properly applied, is to simultaneously: (a) relax the left hemisphere and quiet its
              analytical filtering function; (b) place the body in a virtual sleep state while the mind remains alert;
              (c) bring both hemispheres into coherence; and (d) progressively elevate brainwave amplitude and frequency
              toward the range of{' '}
              <E term="brain hemisphere synchronization">full hemispheric synchronization</E>.
            </P>
            <P>
              11. The metaphor employed in the program is apt: the ordinary conscious mind resembles an incandescent light
              bulb, scattering energy diffusely in all directions. Under Hemi-Sync, consciousness becomes a laser — coherent,
              focused, and enormously more powerful because all energy waves are aligned in phase and frequency.
            </P>
          </DocSection>

          {/* ── Section 3: Resonance ─────────────────────────── */}
          <DocSection id="doc-resonance" number="PART III" title="Resonance and Body Vibration">
            <P>
              12. When the heart ejects blood into the aorta, a pressure wave travels down its length. At the point
              where the aorta forks in the lower abdomen, a portion of this wave reflects back upward and collides with
              the next outgoing pulse. This is the{' '}
              <E term="bifurcation echo">bifurcation echo</E>.
              In ordinary waking states, these two waves produce a complex interference pattern. In deep relaxation,
              the heart rate slows enough that the echo fades and the body achieves a single, clean, resonant sine wave.
            </P>
            <P>
              13. Bentov&apos;s biomedical research demonstrated that this resonant state oscillates the body at
              approximately 7 to 7.5 Hz — matching the{' '}
              <E term="Schumann Resonance">Schumann Resonance</E>,
              the natural electromagnetic resonance of the Earth&apos;s ionospheric cavity. The body, in effect, becomes
              a tuned antenna synchronized with the planet&apos;s electromagnetic field.
            </P>
            <P>
              14. This vibration transmits through the fluid surrounding the brain (the dura), establishing a micromotion
              pattern that generates electromagnetic pulses and raises brainwave amplitude and frequency. The brain
              physically oscillates 0.005 to 0.010 mm in a rhythmic pattern. The resulting electromagnetic signal,
              at 6.8 to 7.5 Hz and a wavelength of approximately 40,000 km — the circumference of the Earth — passes
              through all physical matter: metal, concrete, water, organic material.{' '}
              <E term="Itzhak Bentov">Bentov</E>{' '}
              describes this as &quot;the ideal medium for conveying a telepathic signal.&quot;
            </P>
          </DocSection>

          {/* ── Section 4: Hologram ──────────────────────────── */}
          <DocSection id="doc-hologram" number="PART IV" title="Consciousness, Energy, and Holograms">
            <P>
              15. Solid matter does not exist in the strict physical sense. Atoms are oscillating energy grids surrounded
              by other oscillating energy grids. The nucleus vibrates at approximately 10²² Hz; a single atom at 10¹⁵ Hz;
              a live human cell at approximately 10³ Hz. Human consciousness is an extraordinarily complex system of
              energy fields.
            </P>
            <P>
              16. Drawing on the work of{' '}
              <E term="Karl Pribram">Karl Pribram</E>{' '}
              at Stanford and{' '}
              <E term="David Bohm">David Bohm</E>{' '}
              at the University of London, we can say: the universe is a gigantic hologram of interacting energy fields,
              some at rest, some in motion. The human mind is also a hologram that attunes itself to the universal hologram
              through resonant energy exchange. In holographic terms,{' '}
              &quot;the part encodes the whole&quot; — even a fragment of a hologram contains the entire image, though with
              reduced resolution.
            </P>
            <P>
              17. The right hemisphere acts as the primary receptor for{' '}
              <E term="holographic model">holographic</E>{' '}
              input. The left hemisphere provides secondary processing — reducing three-dimensional holographic data
              to two-dimensional verbal/conceptual form. As psychologist Keith Floyd observed: &quot;It may not be
              the brain that produces consciousness — but rather, consciousness that creates the appearance of the brain.&quot;
            </P>
            <P>
              18. Expanding the frequency and amplitude range of consciousness expands which portions of the universal
              hologram are accessible. This is the operating principle of{' '}
              <E term="Gateway Experience">Gateway</E>.
            </P>
          </DocSection>

          {/* ── Section 5: Time-Space ────────────────────────── */}
          <DocSection id="doc-timespace" number="PART V" title="Time-Space and the Absolute">
            <P>
              19. Time is a measurement of energy in motion — specifically, the measurement of change relative to a
              fixed reference point. Space is the capacity for energy to be confined at a specific location. Energy
              without form or limit — infinite energy — cannot move, has no location, and therefore exists outside
              the{' '}
              <E term="time-space dimension">time-space dimension</E>.
              This infinite, formless, conscious energy is what the report designates{' '}
              <E term="the Absolute">the Absolute</E>.
            </P>
            <P>
              20. Any oscillating wave pattern reaches two points of complete rest per cycle. At these rest points,
              the oscillating energy briefly exits the time-space dimension when its speed drops below{' '}
              <E term="Planck's Distance">Planck&apos;s Distance</E>{' '}
              (10⁻³³ centimeters). At that threshold — at that infinitesimal gap in the wave cycle — we enter,
              in effect, a new world.
            </P>
            <P>
              21. Human consciousness wave patterns oscillate at such high frequency that these &quot;click-out&quot;
              intervals have virtual continuity. A portion of consciousness is, at any given moment, operating in
              dimensions between time-space and{' '}
              <E term="the Absolute">the Absolute</E>.
              In those intermediate dimensions, the rules of linear causality and sequential time do not apply.
              Access to past and future becomes theoretically possible.
            </P>
          </DocSection>

          {/* ── Section 6: Cosmic Egg ────────────────────────── */}
          <DocSection id="doc-cosmic" number="PART VI" title="The Cosmic Egg and the Torus Model">
            <P>
              22. Drawing on{' '}
              <E term="Itzhak Bentov">Bentov&apos;s</E>{' '}
              cosmological model from{' '}
              <span className="italic">Stalking the Wild Pendulum</span>: the universe has the overall shape of a{' '}
              <E term="torus">torus</E>{' '}
              — a donut-shaped, self-contained spiral. Matter is ejected from a &quot;white hole&quot; at one pole,
              travels around the shell, and is reabsorbed at a &quot;black hole&quot; at the other.
              This forms the continuous cosmic egg pattern independently identified by scholars across ancient Eastern
              civilizations.
            </P>
            <P>
              23. The{' '}
              <E term="torus">torus</E>{' '}
              is being generated simultaneously by matter in all phases of time. Past, present, and future all exist
              at once within this holographic structure. A sufficiently focused consciousness could, in principle,
              perceive how energy patterns cross and recross to form the four-dimensional torus — and in doing so,
              perceive events not yet manifest in physical time.
            </P>
            <P>
              24. The practical implication for{' '}
              <E term="Gateway Experience">Gateway</E>{' '}
              is significant: the{' '}
              <E term="REBAL">REBAL (Resonant Energy Balloon)</E>{' '}
              technique, which asks practitioners to visualize a continuous egg-shaped energy field surrounding the body,
              is not arbitrary. It mirrors the cosmological geometry of the universe itself, and this geometric resonance
              is hypothesized to amplify the practitioner&apos;s energy field.
            </P>
          </DocSection>

          {/* ── Section 7: OBE ───────────────────────────────── */}
          <DocSection id="doc-obe" number="PART VII" title="The Out-of-Body State">
            <P>
              25. The{' '}
              <E term="out-of-body state">out-of-body state</E>{' '}
              involves projecting a major portion of the energy pattern constituting consciousness outside the physical
              body. The projected consciousness may then move freely through the terrestrial sphere or into other
              dimensions. Three conditions must be met simultaneously:
            </P>
            <P className="pl-4 border-l-2 border-accent/30">
              (a) Profound physical quiet — the{' '}
              <E term="bifurcation echo">bifurcation echo</E>{' '}
              fades and the body resonates at approximately 7 Hz.{' '}
              (b){' '}
              <E term="brain hemisphere synchronization">Brain hemisphere synchronization</E>{' '}
              — coherent wave patterns across both hemispheres.{' '}
              (c) Right hemisphere stimulation — heightened alertness in the right brain, but only after condition (b)
              is established. Premature right-hemisphere stimulation interferes with the process.
            </P>
            <P>
              26. Consciousness, like{' '}
              <E term="the Absolute">the Absolute</E>,
              has neither beginning nor end. It exists beyond the bounds of the{' '}
              <E term="time-space dimension">time-space dimension</E>.
              Memory is a function of consciousness and therefore shares its eternal character. Return of consciousness
              to the Absolute does not extinguish individual identity — it implies a differentiated consciousness
              that merges with the universal while retaining self-knowledge.
            </P>
            <P>
              27. A note on the reliability of out-of-body perception: information gathered in the{' '}
              <E term="out-of-body state">out-of-body state</E>{' '}
              can be distorted by holographic interference. Energy patterns from other time periods — past events
              at the same physical location — may mingle with present reality. Additionally, holograms can be
              viewed &quot;inside out or backwards&quot; (pseudoscopically), creating spatial and temporal distortions
              that the analyst must account for.
            </P>
          </DocSection>

          {/* ── Section 8: Training ──────────────────────────── */}
          <DocSection id="doc-training" number="PART VIII" title="The Gateway Training Method">
            <P>
              28. The{' '}
              <E term="Monroe Institute">Monroe Institute</E>&apos;s{' '}
              <E term="Gateway Experience">Gateway Experience</E>{' '}
              proceeds through a structured sequence of techniques, each building on the last. The preparatory phase
              establishes the foundational conditions; subsequent phases progressively expand the practitioner&apos;s
              range of consciousness.
            </P>
            <P>
              29. The four primary{' '}
              <E term="Focus 10">Focus</E>{' '}
              states are operationally defined as follows:{' '}
              <E term="Focus 10">Focus 10</E>{' '}
              (Mind Awake / Body Asleep) is the platform for initial exploration.{' '}
              <E term="Focus 12">Focus 12</E>{' '}
              (Expanded Awareness) is the state from which all advanced techniques — Problem Solving, Patterning,
              Color Breathing, Energy Bar Tool, Remote Viewing, and Living Body Map — are conducted.{' '}
              <E term="Focus 15">Focus 15</E>{' '}
              (No Time) involves dissolution of linear temporal awareness and access to past timelines; fewer than
              5% of participants achieve stable Focus 15 in standard 7-day training.{' '}
              <E term="Focus 21">Focus 21</E>{' '}
              (Other Dimensions) represents the limit of documented Gateway exploration.
            </P>
            <P>
              30. The{' '}
              <E term="REBAL">Resonant Energy Balloon (REBAL)</E>{' '}
              technique is introduced at the{' '}
              <E term="Focus 10">Focus 10</E>{' '}
              level. The practitioner visualizes a flow of energy rising from the center of the body, out through the
              crown of the head, cascading down in all directions, and cycling back up through the base of the body
              in a continuous loop — forming a torus-shaped protective and amplifying energy field.
            </P>
          </DocSection>

          {/* ── Section 9: Conclusion ────────────────────────── */}
          <DocSection id="doc-conclusion" number="CONCLUSIONS" title="Conclusions and Recommendations">
            <P>
              31. On the basis of this analysis it is the opinion of this office that{' '}
              <E term="Gateway Experience">Gateway</E>{' '}
              represents a legitimate, scientifically consistent method for expanding human consciousness. The program
              is not in any sense pseudo-scientific or mystical in its orientation — it is grounded in quantum
              mechanics, acoustics, and the{' '}
              <E term="holographic model">holographic model of the universe</E>.
            </P>
            <div className="border border-accent/30 cyber-chamfer p-5 my-6">
              <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-3">Direct Quotation — Report Conclusion</p>
              <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic">
                &quot;There is a sound, rational basis in terms of physical science parameters for considering Gateway
                to be plausible in terms of its essential objectives.&quot;
              </blockquote>
            </div>
            <P>
              32. A phased approach is recommended: initial training through{' '}
              <E term="Focus 10">Focus 10</E>{' '}
              and{' '}
              <E term="Focus 12">Focus 12</E>{' '}
              to establish basic competence; progressive advancement through higher Focus levels as individual
              capability permits; and supplementary use of autohypnotic suggestion and REM-sleep induction
              for operational applications.
            </P>
            <P>
              33. The critical limiting factor is not the technology or the time investment, but the practitioner&apos;s
              willingness to release personal anxieties, unresolved emotional material, and self-limiting constructs.
              The speed of progress is less a function of hours practiced than of the speed with which the individual
              can use the insights gained to release anxieties and stresses within both mind and body.
            </P>
            <P>
              34. Unlike yoga, Zen, or Transcendental Meditation — which may require decades of patient practice —{' '}
              <E term="Gateway Experience">Gateway</E>{' '}
              does not require &quot;the infinite patience and total personal subservience to and faith in a system
              of discipline.&quot; It begins producing results within a relatively short time, and those early results
              create the feedback and motivation to continue.
            </P>
          </DocSection>

          {/* Document footer */}
          <div className="pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground/50 uppercase">
                End of Document · Analysis and Assessment of Gateway Process
              </span>
              <span className="font-label text-[9px] tracking-[0.15em] text-destructive/50 uppercase">SECRET</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
