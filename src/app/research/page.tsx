import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CIA Gateway Process — Research Breakdown | Gateway Archive',
  description:
    'A scientific breakdown of the 1983 CIA report on the Gateway Process — Hemi-Sync, consciousness, holographic models, and the physics of expanded awareness.',
}

const PARTS = [
  {
    number: 1,
    title: 'Related Techniques as Context',
    color: 'accent',
    content: [
      {
        heading: 'Hypnosis',
        body: 'Bypasses the left brain\'s analytical filters to directly access the right hemisphere\'s non-critical, holistic processing. The left brain (dominant, verbal, analytical) normally screens all input; hypnosis quiets it so the right brain can accept suggestion uncritically. Gateway differs in that it does not depend on a hypnotist — the participant retains volition and conscious control.',
      },
      {
        heading: 'Transcendental Meditation (TM)',
        body: 'Uses a mantra to focus concentration, drawing energy up the spinal cord. Over long practice (15–20 years), creates standing acoustic waves in the brain ventricles. Produces heightened right-brain focus and increased brainwave amplitude and frequency. Limitation: requires extraordinary patience and discipline over decades.',
      },
      {
        heading: 'Biofeedback',
        body: 'Uses electronic feedback (EEG readings, etc.) to train the left brain to consciously recognize and replicate specific brainwave states. Teaches the analytical mind to access right-brain intuitive functions. Gateway incorporates this principle but through audio rather than electronic instrumentation.',
      },
      {
        heading: 'Key Insight',
        body: 'Gateway borrows elements from all three — the focused hemispheric access of hypnosis, the resonance-building of TM, and the self-guided brainwave training of biofeedback — but packages them in a system that is faster, more accessible, and does not require a facilitator or decades of practice.',
        highlight: true,
      },
    ],
  },
  {
    number: 2,
    title: 'The Hemi-Sync Mechanism',
    color: 'accent',
    content: [
      {
        heading: 'Frequency Following Response (FFR)',
        body: 'The brain naturally mimics external sound frequencies by adjusting its own brainwave output. If you hear a frequency associated with Theta waves while fully awake, your brain will attempt to shift from Beta down to Theta.',
      },
      {
        heading: 'Binaural Beats',
        body: 'Stereo headphones deliver a slightly different frequency to each ear. Example: 100 Hz in the left ear, 104 Hz in the right ear. The brain perceives the 4 Hz difference as a "beat" frequency and entrains to it. Since these brainwave frequencies are below the audible range, binaural beats are the only way to introduce them.',
      },
      {
        heading: 'The Laser Analogy',
        body: 'The report uses a powerful metaphor: the ordinary mind is like an incandescent light bulb, scattering energy in all directions. Under Hemi-Sync, consciousness becomes like a laser — coherent, focused, and enormously more powerful because all energy waves are aligned in phase and frequency.',
        highlight: true,
      },
    ],
    table: {
      caption: 'What Hemi-Sync Achieves',
      rows: [
        ['Relaxes the left hemisphere', 'Quiets the analytical, verbal mind'],
        ['Places the body in virtual sleep', 'Profound physical relaxation without loss of awareness'],
        ['Brings both hemispheres into coherence', 'Synchronized brainwave output'],
        ['Promotes higher amplitude and frequency', 'Increasingly powerful brainwave patterns'],
      ],
    },
  },
  {
    number: 3,
    title: 'Resonance and Body Vibration',
    color: 'secondary',
    content: [
      {
        heading: 'The Bifurcation Echo',
        body: 'When the heart ejects blood, a pressure wave travels down the aorta. At the lower abdomen (where the aorta forks), part of the wave bounces back up. Normally these two waves collide, creating an interference pattern. In deep relaxation, the heart calms enough that the bifurcation echo fades. The result: a clean, rhythmic sine wave resonating throughout the entire body.',
      },
      {
        heading: '7–7.5 Hz Resonance',
        body: 'The body\'s resonant frequency in this deeply relaxed state is approximately 7–7.5 Hz. This matches the Earth\'s ionospheric cavity resonance — the Schumann Resonance. The body essentially becomes a tuned vibrational antenna synchronized with the planet\'s electromagnetic field.',
        highlight: true,
      },
      {
        heading: 'Earth Connection',
        body: 'The body, vibrating at 6.8–7.5 Hz, transfers energy into the Earth\'s electromagnetic field. The resulting wavelength is approximately 40,000 km — the circumference of the planet. This signal passes through all physical matter: metal, concrete, water, organic material. Bentov describes this as "the ideal medium for conveying a telepathic signal."',
      },
    ],
  },
  {
    number: 4,
    title: 'Consciousness, Energy, and Holograms',
    color: 'tertiary',
    content: [
      {
        heading: 'Everything Is Energy',
        body: 'Solid matter does not exist in the strict sense. Atoms are oscillating energy grids surrounded by other oscillating energy grids. The nucleus vibrates at approximately 10²² Hz. A single atom oscillates at 10¹⁵ Hz. A live human cell vibrates at approximately 10³ Hz. Consciousness is an extraordinarily complex system of energy fields.',
      },
      {
        heading: 'The Holographic Model',
        body: 'Drawing on the work of Karl Pribram (Stanford, neuroscience) and David Bohm (University of London, physics): the universe is a gigantic hologram — interacting energy fields, some at rest, some in motion. The human mind is also a hologram that attunes to the universal hologram through energy exchange. "The Part Encodes the Whole" — even a fragment of a hologram contains the entire image.',
        highlight: true,
      },
      {
        heading: 'How Expanded Consciousness Works',
        body: 'The right hemisphere acts as the primary receptor for holographic input. The left hemisphere provides secondary processing — reducing 3D holographic data to 2D verbal/conceptual form through binary "go/no go" comparison. Expanding the frequency and amplitude range of consciousness expands which parts of the universal hologram you can perceive.',
      },
    ],
    quote: {
      text: 'It may not be the brain that produces consciousness — but rather, consciousness that creates the appearance of the brain.',
      attribution: 'Keith Floyd, psychologist — cited in CIA report',
    },
  },
  {
    number: 5,
    title: 'Time-Space, Dimensions, and the Absolute',
    color: 'tertiary',
    content: [
      {
        heading: 'Time and Space as Energy Constructs',
        body: 'Time is a measurement of change (energy in motion). Space is the capacity for energy to be confined at a specific location. Energy without form or limit (infinite) cannot move, has no location, exists outside time-space. This infinite, formless, conscious energy is called "the Absolute."',
      },
      {
        heading: 'Planck\'s Distance and "Clicking Out"',
        body: 'Any oscillating wave reaches two points of complete rest per cycle. At these rest points, energy briefly "clicks out" of time-space when the oscillation drops below 10⁻³³ centimeters (Planck\'s Distance). At that threshold, "we enter, in effect, a new world" (Bentov). Human consciousness wave patterns oscillate at such high frequency that these "click-outs" have virtual continuity.',
        highlight: true,
      },
      {
        heading: 'Intermediate Dimensions',
        body: 'Between the Absolute and our physical reality, there are intervening dimensions or gradients. In these dimensions, the normal rules of time-space (cause and effect, linear time) break down. Time and space become "grainy" or "chunky" — non-uniform and unpredictable. Access to past and future opens when the dimension of current time-space is transcended.',
      },
    ],
  },
  {
    number: 6,
    title: 'The Cosmic Egg / Torus Model',
    color: 'secondary',
    content: [
      {
        heading: 'Structure of the Universe',
        body: 'Using Itzhak Bentov\'s cosmological model from Stalking the Wild Pendulum: the universe has the overall shape of a torus (donut shape) — a self-contained spiral. Matter is ejected from a "white hole" at the top, travels around the shell, and is absorbed back at a "black hole" at the bottom. This forms a continuous cosmic egg pattern.',
      },
      {
        heading: 'Implications for Consciousness',
        body: 'The torus is being generated simultaneously by matter in all phases of "time." Past, present, and future all exist at once within this holographic structure. A sufficiently focused consciousness could "see" how energy patterns cross and recross to form the four-dimensional torus. The future can be predicted or "seen" because all consequences of past and present are already embedded in the hologram.',
        highlight: true,
      },
    ],
  },
  {
    number: 7,
    title: 'Quality of Consciousness and the Out-of-Body State',
    color: 'accent',
    content: [
      {
        heading: 'Consciousness Beyond the Body',
        body: 'The out-of-body state involves projecting a major portion of the energy pattern that constitutes consciousness outside the physical body. This projected consciousness can move freely through the terrestrial sphere or into other dimensions. Consciousness is the organizing principle that keeps energy in motion within given parameters.',
      },
      {
        heading: 'The Eternal Nature of Consciousness',
        body: 'Consciousness, like the Absolute, has neither beginning nor end. It exists beyond the bounds of time-space. When reality ends, its constituent energy returns to infinity in the Absolute. Memory is a function of consciousness and therefore shares its eternal character. Return to the Absolute does not extinguish individual identity — it suggests a differentiated consciousness that merges with the universal while retaining self-knowledge.',
        highlight: true,
      },
    ],
  },
  {
    number: 8,
    title: 'The Gateway Training Method',
    color: 'accent',
    content: [
      {
        heading: 'Phase 1: Preparatory',
        body: 'Energy Conversion Box — mentally isolate extraneous concerns in a visualization device. Resonant Tuning — humming a monotonous tone to set up physical vibration in the head. Gateway Affirmation — statement that one is more than a physical body. Introduction to Hemi-Sync — first exposure to binaural beat frequencies.',
      },
      {
        heading: 'Phase 2: Physical Relaxation',
        body: 'Progressive Relaxation — systematic physical relaxation while Hemi-Sync frequencies expand to include "pink and white noise" designed to bring the body to the virtual threshold of sleep. Left Brain Calmed, Right Brain Heightened.',
      },
      {
        heading: 'Phase 3: Energy Work',
        body: 'Energy Balloon (REBAL) — visualization of an energy flow from the top of the head, extending down in all directions to the feet, then cycling back through the body — creating a torus-shaped protective energy field.',
      },
    ],
    table: {
      caption: 'Focus Levels',
      rows: [
        ['Focus 10', 'Mind Awake / Body Asleep', 'Body in virtual sleep state; mind remains fully conscious'],
        ['Focus 12', 'Expanded Awareness', 'Consciousness expands beyond physical reality; platform for advanced techniques'],
        ['Focus 15', 'No Time', 'Boundaries of time dissolve; access to past events (<5% achieve in 7-day training)'],
        ['Focus 21', 'Other Dimensions', 'Movement outside time-space boundaries; highest Gateway state'],
      ],
    },
  },
  {
    number: 9,
    title: 'The Out-of-Body Experience',
    color: 'tertiary',
    content: [
      {
        heading: 'Three Conditions Required',
        body: '1. Profound physical quiet — bifurcation echo fades, body resonates at ~7 Hz. 2. Brain hemisphere synchronization — both hemispheres producing coherent wave patterns. 3. Right hemisphere stimulation — heightened alertness in the right brain (but only after synchronization is established; otherwise it interferes).',
        highlight: true,
      },
      {
        heading: 'Role of REM Sleep',
        body: 'An ex-trainer at Monroe Institute could guarantee out-of-body experiences by combining REM sleep induction with Hemi-Sync. REM sleep produces complete motor cortex disengagement, deepest possible body quiet, and leaves the right hemisphere free to respond to tape instructions. The left hemisphere is nearly completely suppressed during REM.',
      },
      {
        heading: 'Practical Limitations',
        body: 'Information gathered in the out-of-body state can be distorted by holographic interference. Energy patterns from other times (past events at the same location) can mingle with present reality. Holograms can be viewed "inside out or backwards" (pseudoscopically), creating spatial distortions.',
      },
    ],
  },
  {
    number: 10,
    title: 'Belief Systems and Historical Parallels',
    color: 'secondary',
    content: [
      {
        heading: 'Convergence Across Traditions',
        body: 'The report\'s final section notes remarkable convergence between the Gateway framework and ancient traditions. Tibetan Buddhism: "The tangible world is movement... There are no objects \'in movement,\' it is the movement which constitutes the objects." Hinduism: the Indra\'s Net metaphor describing the universal hologram. The Judeo-Christian concept of an omnipotent, omniscient divinity at rest maps to the Absolute.',
      },
      {
        heading: 'The Cosmic Egg Across Cultures',
        body: 'The Cosmic Egg pattern — the torus shape of the universe — was known to scholars across ancient Eastern civilizations and cultures of high spiritual attainment. The convergence between modern physics and ancient mysticism, as documented by the CIA report, suggests these traditions were describing genuine perceptual discoveries rather than mythology.',
        highlight: true,
      },
    ],
  },
]

const COLOR_STYLES: Record<string, { text: string; border: string; bg: string }> = {
  accent:    { text: 'text-accent',           border: 'border-accent/40',     bg: 'bg-accent/5' },
  secondary: { text: 'text-accent-secondary', border: 'border-secondary/40',  bg: 'bg-secondary/5' },
  tertiary:  { text: 'text-accent-tertiary',  border: 'border-tertiary/40',   bg: 'bg-tertiary/5' },
}

export default function ResearchPage() {
  return (
    <div className="pt-14 min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10" style={{ background: '#00ff88' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link href="/" className="font-label text-[10px] tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors uppercase">← Home</Link>
            <span className="text-border">|</span>
            <span className="inline-flex items-center gap-2 border border-destructive cyber-chamfer-sm px-3 py-1 bg-destructive/10">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-neon" />
              <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">Declassified 2003 · CIA-RDP96-00788</span>
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-widest uppercase leading-tight mb-4">
            The Gateway Process
          </h1>
          <p className="font-heading text-xl sm:text-2xl text-accent font-bold tracking-widest uppercase mb-6">
            Research Breakdown
          </p>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed tracking-wide max-w-2xl mb-8">
            <span className="text-accent">&gt; </span>
            A scientific analysis of the 1983 Army Intelligence report by LTC Wayne M. McDonnell — covering the physics of consciousness, Hemi-Sync technology, holographic models of reality, and the methodology behind the CIA-documented Gateway Experience.
          </p>
          <div className="flex flex-wrap gap-6">
            {[['Author', 'LTC Wayne M. McDonnell'], ['Date', 'June 9, 1983'], ['Declassified', 'September 10, 2003'], ['Document', 'CIA-RDP96-00788R001700210016-5']].map(([label, value]) => (
              <div key={label}>
                <span className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-0.5">{label}</span>
                <span className="font-mono text-xs text-foreground tracking-wide">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border border-accent/30 cyber-chamfer overflow-hidden mb-12">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-card">
            <span className="w-2 h-2 rounded-full bg-destructive opacity-70" />
            <span className="w-2 h-2 rounded-full bg-accent/50 opacity-70" />
            <span className="w-2 h-2 rounded-full bg-accent opacity-70" />
            <span className="ml-2 font-label text-[10px] text-muted-foreground tracking-[0.15em] uppercase">overview.txt</span>
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-label text-[10px] tracking-[0.2em] text-accent uppercase mb-4">&gt; cat overview.txt</p>
            <p className="font-mono text-sm text-foreground leading-relaxed tracking-wide">
              This declassified 1983 US Army Intelligence report provides a scientific, physics-based framework for understanding the Monroe Institute&apos;s &quot;Gateway Experience&quot; — a consciousness-expansion program built around a technique called <span className="text-accent font-bold">Hemi-Sync</span> (Hemispheric Synchronization).
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed tracking-wide mt-4">
              The core thesis: everything — matter, consciousness, the universe itself — is fundamentally energy vibrating at different frequencies. The Gateway Process is a training system designed to synchronize the brain&apos;s hemispheres, elevate brainwave frequency and coherence, and ultimately allow human consciousness to transcend the boundaries of physical time-space.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {PARTS.map((part) => {
            const styles = COLOR_STYLES[part.color]
            return (
              <div key={part.number} className={`border ${styles.border} cyber-chamfer overflow-hidden`}>
                {/* Part header */}
                <div className={`px-6 py-4 border-b border-border ${styles.bg} flex items-center gap-4`}>
                  <span className={`font-heading text-2xl font-black ${styles.text} opacity-40`}>
                    {String(part.number).padStart(2, '0')}
                  </span>
                  <div>
                    <p className={`font-label text-[9px] tracking-[0.2em] uppercase ${styles.text} opacity-70 mb-0.5`}>Part {part.number}</p>
                    <h2 className={`font-heading text-lg sm:text-xl font-bold tracking-wide ${styles.text}`}>{part.title}</h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {part.content.map((item) => (
                    <div key={item.heading} className={item.highlight ? `border-l-2 ${styles.border} pl-4` : ''}>
                      <p className={`font-label text-[10px] tracking-[0.2em] uppercase mb-2 ${item.highlight ? styles.text : 'text-muted-foreground'}`}>
                        {item.heading}
                      </p>
                      <p className="font-mono text-sm text-foreground leading-relaxed tracking-wide">
                        {item.body}
                      </p>
                    </div>
                  ))}

                  {part.table && (
                    <div className="mt-4">
                      <p className={`font-label text-[9px] tracking-[0.2em] uppercase mb-3 ${styles.text}`}>{part.table.caption}</p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <tbody>
                            {part.table.rows.map((row, i) => (
                              <tr key={i} className="border-b border-border last:border-0">
                                {row.map((cell, j) => (
                                  <td key={j} className={`py-2.5 pr-6 font-mono text-xs tracking-wide ${j === 0 ? `${styles.text} font-bold` : 'text-muted-foreground'}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {'quote' in part && part.quote && (
                    <blockquote className={`border border-dashed ${styles.border} cyber-chamfer-sm p-5 mt-4`}>
                      <p className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic mb-3">
                        &ldquo;{part.quote.text}&rdquo;
                      </p>
                      <p className={`font-label text-[9px] tracking-[0.15em] uppercase ${styles.text}`}>
                        — {part.quote.attribution}
                      </p>
                    </blockquote>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Conclusion */}
        <div className="mt-12 border border-accent cyber-chamfer p-8">
          <p className="font-label text-[10px] tracking-[0.2em] text-accent uppercase mb-4">The Report&apos;s Conclusion</p>
          <blockquote className="font-mono text-base sm:text-lg text-foreground leading-relaxed tracking-wide italic mb-6">
            &ldquo;There is a sound, rational basis in terms of physical science parameters for considering Gateway to be plausible in terms of its essential objectives.&rdquo;
          </blockquote>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed tracking-wide">
            The report concludes that Gateway represents a legitimate, physics-consistent method for expanding consciousness. It recommends a phased approach combining Hemi-Sync, REM sleep induction, autohypnotic suggestion, and progressive advancement through the Focus levels.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/program" className="group border border-accent cyber-chamfer p-6 hover:-translate-y-1 transition-all duration-300 block">
            <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-2">Product Access Required</p>
            <h3 className="font-heading text-lg font-bold tracking-wide text-foreground mb-2">The 10-Step Implementation Guide</h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">Apply everything in this breakdown with a practical, step-by-step training program.</p>
            <p className="font-label text-[10px] tracking-[0.15em] text-accent mt-4 group-hover:translate-x-1 transition-transform duration-150 inline-block">Access Program →</p>
          </Link>
          <Link href="/documents" className="group border border-border cyber-chamfer p-6 hover:-translate-y-1 transition-all duration-300 block">
            <p className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase mb-2">23 Source Documents</p>
            <h3 className="font-heading text-lg font-bold tracking-wide text-foreground mb-2">Browse the Full Archive</h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">Read the original declassified CIA documents this breakdown is based on.</p>
            <p className="font-label text-[10px] tracking-[0.15em] text-accent mt-4 group-hover:translate-x-1 transition-transform duration-150 inline-block">Browse Archive →</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
