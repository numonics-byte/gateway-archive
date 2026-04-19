import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Glossary — CIA Gateway Process Terms | Gateway Archive',
  description:
    'Definitions of 28 key terms from the CIA Gateway Process report: Hemi-Sync, binaural beats, Focus levels, REBAL, holographic model, and more.',
}

const TERMS = [
  {
    term: 'Absolute, The',
    definition: 'The state of infinite, formless, conscious energy at complete rest. It occupies every dimension (being without boundaries), but cannot be perceived by consciousness operating in the active universe. It is the source from which all reality emerges and to which all energy ultimately returns. Analogous to the concept of God or infinite consciousness in various spiritual traditions.',
    category: 'cosmology',
  },
  {
    term: 'Bifurcation Echo',
    definition: 'The interference pattern created when the heart\'s pressure pulse bounces back from the aortic fork in the lower abdomen and collides with the next outgoing pulse. In deep relaxation, the heart slows enough that this echo fades, producing a clean resonant sine wave throughout the body.',
    category: 'physiology',
  },
  {
    term: 'Binaural Beats',
    definition: 'An auditory phenomenon where two slightly different frequencies are played into each ear via stereo headphones. The brain perceives the mathematical difference between the two frequencies as a third "beat" frequency and entrains its own brainwave output to match it.',
    category: 'technology',
  },
  {
    term: 'Click-Out',
    definition: 'The phenomenon where, at the two points of complete rest in each oscillation cycle, energy briefly exits the time-space dimension when the speed of oscillation drops below Planck\'s Distance (10⁻³³ cm). Human consciousness "clicks out" into intermediate dimensions at these points.',
    category: 'physics',
  },
  {
    term: 'Coherence',
    definition: 'The state in which brainwaves from both hemispheres are synchronized in frequency, amplitude, and phase — like a laser versus an incandescent bulb. Coherence dramatically increases the power and reach of consciousness.',
    category: 'neuroscience',
  },
  {
    term: 'Color Breathing',
    definition: 'A Gateway technique where the practitioner visualizes specific colors flowing through the body to resonate with and alter bodily energy flows. Used for healing and revitalization. Different colors correspond to different energy frequencies and effects.',
    category: 'technique',
  },
  {
    term: 'Cosmic Egg',
    definition: 'Itzhak Bentov\'s model of the universe as a torus (donut) shape, where matter is ejected from a "white hole," travels around the shell, and is reabsorbed at a "black hole." Past, present, and future all exist simultaneously within this structure.',
    category: 'cosmology',
  },
  {
    term: 'Energy Bar Tool',
    definition: 'A Gateway visualization technique where the practitioner creates a small pulsating dot of light, charges it with energy, and extrudes it into a vibrating cylinder. Used for healing, channeling universal force, and as a portal for remote viewing.',
    category: 'technique',
  },
  {
    term: 'Energy Conversion Box',
    definition: 'A preparatory visualization used at the start of every Gateway session. The practitioner mentally places all worries, anxieties, and distracting thoughts into an imagined container, then closes it. Purpose: temporarily compartmentalizing left-brain concerns to enable deeper states.',
    category: 'technique',
  },
  {
    term: 'FFR (Frequency Following Response)',
    definition: 'The brain\'s natural tendency to adjust its brainwave output to match an external frequency it perceives. The foundation of Hemi-Sync technology.',
    category: 'neuroscience',
  },
  {
    term: 'Focus 10',
    definition: '"Mind Awake / Body Asleep." The first major Gateway state, where the physical body enters a deep sleep-like condition while consciousness remains fully alert and aware.',
    category: 'state',
  },
  {
    term: 'Focus 12',
    definition: '"Expanded Awareness." The state where consciousness begins to perceive beyond the boundaries of physical reality. The platform for all advanced Gateway techniques.',
    category: 'state',
  },
  {
    term: 'Focus 15',
    definition: '"No Time." An advanced state where the concept of linear time dissolves and access to past events and timelines becomes possible. Achieved by fewer than 5% of participants during standard 7-day training.',
    category: 'state',
  },
  {
    term: 'Focus 21',
    definition: '"Other Dimensions / The Future." The most advanced Gateway state, involving movement outside time-space boundaries with attention to future discovery and interdimensional exploration.',
    category: 'state',
  },
  {
    term: 'Gateway Affirmation',
    definition: 'A statement repeated at the start of each session affirming that one is more than a physical body and deeply desires to expand consciousness. Serves to set intention and engage the subconscious.',
    category: 'technique',
  },
  {
    term: 'Gateway Experience',
    definition: 'The consciousness-expansion training program developed by the Monroe Institute, using Hemi-Sync audio technology to guide participants through progressively deeper states of awareness.',
    category: 'program',
  },
  {
    term: 'Hemi-Sync (Hemispheric Synchronization)',
    definition: 'Audio technology developed by Robert Monroe that uses binaural beats to synchronize the left and right hemispheres of the brain, enabling altered states of consciousness.',
    category: 'technology',
  },
  {
    term: 'Hologram / Holographic Model',
    definition: 'The theoretical framework (Pribram/Bohm) proposing that the universe is a hologram of interacting energy fields, and that the human mind is itself a hologram that perceives by attuning to the universal hologram through energy exchange.',
    category: 'physics',
  },
  {
    term: 'Living Body Map',
    definition: 'An advanced Gateway technique combining visualization of the body\'s systems with the energy bar tool to direct colored healing energy to specific organs and systems.',
    category: 'technique',
  },
  {
    term: 'Patterning',
    definition: 'A Gateway manifestation technique performed in Focus 12. The practitioner concentrates on a desired objective, experiences it as already accomplished, and projects it into the universal hologram with the conviction that it is destined to be realized.',
    category: 'technique',
  },
  {
    term: 'Planck\'s Distance',
    definition: '10⁻³³ centimeters. The threshold in quantum mechanics below which energy "clicks out" of the time-space dimension. "When distances go below Planck\'s Distance, we enter, in effect, a new world." (Bentov)',
    category: 'physics',
  },
  {
    term: 'REBAL (Resonant Energy Balloon)',
    definition: 'A continuous, egg-shaped energy field visualized around the body. Energy flows up through the body, out the crown, cascades down around the body, returns through the feet, and cycles continuously. Serves to amplify the body\'s energy field and provide energetic protection.',
    category: 'technique',
  },
  {
    term: 'Remote Viewing',
    definition: 'A Gateway technique using the energy bar tool as a portal. The practitioner sends the tool into a whirling vortex through which imagination searches for new insights and information at distant locations.',
    category: 'technique',
  },
  {
    term: 'Resonant Tuning',
    definition: 'A preparatory Gateway exercise involving sustained humming or toning to create physical vibration in the head and body. Accelerates the shift in the body\'s fundamental resonance pattern.',
    category: 'technique',
  },
  {
    term: 'Schumann Resonance',
    definition: 'The Earth\'s natural electromagnetic resonance frequency, approximately 7–7.5 Hz. The body\'s resonant frequency in deep relaxation matches this, effectively tuning the body to the planet\'s electromagnetic field.',
    category: 'physics',
  },
  {
    term: 'Torus',
    definition: 'A donut-shaped geometric form. Bentov\'s model of the universe, and the shape of the REBAL energy field. A self-contained, self-referencing pattern of energy flow.',
    category: 'cosmology',
  },
  {
    term: 'Universal Hologram',
    definition: 'The totality of all interacting energy fields in the universe, encoding all information across all dimensions and all time. Consciousness perceives by "reading" portions of this hologram that match its current frequency and amplitude.',
    category: 'cosmology',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  cosmology:   'text-accent-tertiary border-tertiary/40 bg-tertiary/10',
  physiology:  'text-accent border-accent/40 bg-accent/10',
  technology:  'text-accent border-accent/40 bg-accent/10',
  physics:     'text-accent-secondary border-secondary/40 bg-secondary/10',
  neuroscience:'text-accent border-accent/40 bg-accent/10',
  technique:   'text-accent-tertiary border-tertiary/40 bg-tertiary/10',
  state:       'text-accent-secondary border-secondary/40 bg-secondary/10',
  program:     'text-accent border-accent/40 bg-accent/10',
}

export default function GlossaryPage() {
  return (
    <div className="pt-14 min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link href="/" className="font-label text-[10px] tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors uppercase">← Home</Link>
            <span className="text-border">|</span>
            <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground">Gateway Process Reference</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-widest uppercase leading-tight mb-4">
            Glossary
          </h1>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed tracking-wide max-w-2xl mb-6">
            <span className="text-accent">&gt; </span>
            {TERMS.length} key terms from the CIA Gateway Process report — defined and cross-referenced. Source: CIA-RDP96-00788R001700210016-5, 1983.
          </p>
          {/* Category legend */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'States', key: 'state' },
              { label: 'Techniques', key: 'technique' },
              { label: 'Physics', key: 'physics' },
              { label: 'Cosmology', key: 'cosmology' },
              { label: 'Neuroscience', key: 'neuroscience' },
              { label: 'Technology', key: 'technology' },
            ].map(({ label, key }) => (
              <span key={key} className={`inline-flex font-label text-[9px] tracking-[0.15em] uppercase border cyber-chamfer-sm px-2 py-1 ${CATEGORY_COLORS[key]}`}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Terms grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TERMS.map((item) => {
            const colorClass = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.technology
            const [textClass] = colorClass.split(' ')
            return (
              <div key={item.term} className="border border-border cyber-chamfer p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h2 className={`font-heading text-sm font-bold tracking-wide ${textClass}`}>{item.term}</h2>
                  <span className={`inline-flex shrink-0 font-label text-[8px] tracking-[0.15em] uppercase border cyber-chamfer-sm px-1.5 py-0.5 ${colorClass}`}>
                    {item.category}
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">
                  {item.definition}
                </p>
              </div>
            )
          })}
        </div>

        {/* Source */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-label text-[10px] tracking-[0.1em] text-muted-foreground">
            Source: CIA-RDP96-00788R001700210016-5 — LTC Wayne M. McDonnell, US Army Intelligence, 1983
          </p>
          <div className="flex gap-4">
            <Link href="/research" className="font-label text-[10px] tracking-[0.15em] text-accent hover:text-neon transition-colors uppercase">Read the Breakdown →</Link>
            <Link href="/program" className="font-label text-[10px] tracking-[0.15em] text-accent-tertiary hover:text-neon transition-colors uppercase">Implementation Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
