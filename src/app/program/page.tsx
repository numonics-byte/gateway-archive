import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Gateway Program — 10-Step Implementation Guide | Gateway Archive',
  description:
    'A practical, step-by-step program for replicating the CIA-documented Gateway Process. From breath foundations to Focus 21 — the complete training system.',
}

const STEPS = [
  {
    number: 1,
    title: 'Build Your Foundation — Breath and Deep Relaxation',
    duration: '2–3 weeks · 15–20 min/session',
    wave: null,
    milestone: 'Body feels heavy, warm, and borderline asleep while mind remains alert. Physical sensations may include tingling, warmth, or floating.',
    content: `Lie down in a comfortable position in a quiet, dark room. Begin slow, deep diaphragmatic breathing — inhale through the nose for 4 counts, hold for 4 counts, exhale through the mouth for 8 counts. Perform progressive muscle relaxation: systematically tense and release every muscle group, starting at your feet and moving up through your calves, thighs, abdomen, chest, hands, arms, shoulders, neck, face, and scalp. Once fully relaxed, simply observe your breath and body for 5–10 minutes without trying to change anything.`,
    why: 'The report identifies profound physical quietude as the non-negotiable prerequisite for everything that follows. You need the heart\'s "bifurcation echo" to fade so the body can enter coherent resonance around 7 Hz. This does not happen if you are carrying physical tension.',
  },
  {
    number: 2,
    title: 'Introduce Hemi-Sync Audio — Reach Focus 10',
    duration: '2–4 weeks · 30–45 min/session',
    wave: 'Wave I — Discovery',
    milestone: 'Can reliably enter Focus 10 within the first 10 minutes and maintain it for 20+ minutes.',
    content: `Put on stereo headphones. Work through the Wave I exercises in order — they are sequenced deliberately. Follow the voice guidance precisely. Your goal is Focus 10: Mind Awake / Body Asleep — the state where your physical body has dropped into a sleep-like condition while your consciousness remains fully alert.

What Focus 10 feels like: your body may feel extremely heavy or, paradoxically, like it has disappeared entirely. You may lose awareness of your physical boundaries. Your mind is clear, calm, and observant — not drowsy. You may experience hypnagogic imagery (fleeting visuals, colors, patterns).

Common obstacles: Falling asleep is the most common issue. If it keeps happening, try practicing at a more alert time of day, or sit in a reclined position rather than lying flat. Racing thoughts are normal — do not fight them. Acknowledge each thought and gently return attention to the audio.`,
    why: null,
  },
  {
    number: 3,
    title: 'Master the Energy Conversion Box',
    duration: 'Ongoing · 2–3 min at the start of every session',
    wave: null,
    milestone: 'Can complete this exercise in under 2 minutes and feel a tangible sense of mental lightness before the session begins.',
    content: `At the beginning of every Gateway session, before the Hemi-Sync tones begin, close your eyes and visualize a sturdy container — a box, chest, vault, or whatever image feels right. Mentally identify every worry, anxiety, daily concern, unresolved issue, and distracting thought you are carrying. One by one, place each concern into the container. Be specific: "my deadline at work," "that conversation I need to have," "my financial stress." Close and lock the container. Affirm that these concerns will be waiting for you after the session, untouched, and that you are now free to explore without them.`,
    why: 'The left brain\'s analytical chatter is the single biggest obstacle to entering expanded states. This is not about suppression or denial — it is about temporary compartmentalization so the left hemisphere can quiet down enough for coherence to occur.',
  },
  {
    number: 4,
    title: 'Develop Resonant Tuning',
    duration: 'Ongoing · 3–5 min per session',
    wave: null,
    milestone: 'Can feel a tangible vibration spreading from head through torso within the first 60 seconds. The vibration feels self-sustaining rather than forced.',
    content: `Following the audio guidance, begin producing a sustained, monotonous humming or toning sound — a single pitch, held as long as your breath allows. Focus on feeling the physical vibration in your head, sinuses, chest, and eventually your entire body. Hum along with the chorus of tones on the Gateway tape. Allow the vibration to build until you feel it resonating through you without effort.`,
    why: 'This practice directly accelerates the shift in your body\'s fundamental resonance pattern. The monotonous tone creates standing acoustic waves — the same phenomenon that transcendental meditation achieves over decades, but induced much more rapidly through the combined effect of your voice and the Hemi-Sync frequencies.',
  },
  {
    number: 5,
    title: 'Build Your Energy Balloon (REBAL)',
    duration: '2–3 weeks of focused practice · 5–10 min within each session',
    wave: null,
    milestone: 'Can establish a vivid, stable REBAL within 2–3 minutes that persists throughout the session without constant maintenance.',
    content: `Once you are in Focus 10, visualize a flow of energy gathering at the center of your body. See and feel this energy rising upward through your torso and out through the top of your head. Visualize the energy cascading outward and downward in all directions — like a fountain — forming a complete egg-shaped field surrounding your body. See the energy flowing down past your feet, then cycling back up through the bottom, re-entering your body, and rising again through the top — creating a continuous loop. Hold this visualization until the energy field feels stable and self-sustaining.`,
    why: 'The REBAL serves two functions: it mirrors the torus/cosmic egg pattern of the universe itself, amplifying your body\'s resonant field and accelerating entrainment with the Earth\'s electromagnetic field. It also acts as a boundary that repels lower-energy influences as you access deeper states.',
  },
  {
    number: 6,
    title: 'Affirm Your Intent and Progress to Focus 12',
    duration: '3–6 weeks · 45–60 min/session',
    wave: 'Wave II — Threshold · Wave III — Freedom',
    milestone: 'Can enter Focus 12 reliably and maintain stable expanded awareness for 15+ minutes. Begin receiving intuitive impressions or insights during sessions.',
    content: `Before each session, repeat the Gateway Affirmation with genuine conviction. Progress to the Wave II and III tapes, which target Focus 12: Expanded Awareness — the state where consciousness begins to perceive beyond the boundaries of physical reality. At this level, begin practicing Patterning: clearly define an intention, question, or desired outcome. Hold it vividly in your expanded awareness. Project it outward with the conviction that it is already accomplished.

What Focus 12 feels like: a profound sense of spaciousness — awareness seems to extend well beyond the body. Enhanced intuitive perception — insights may arrive as sudden "knowings" rather than logical deductions. Visual or symbolic imagery may become more vivid and meaningful. Time perception may shift — sessions may feel much shorter or longer than clock time.`,
    why: null,
    affirmation: true,
  },
  {
    number: 7,
    title: 'Integrate Journaling as a Feedback System',
    duration: 'Ongoing · 5–10 min immediately after every session',
    wave: null,
    milestone: 'After 30+ sessions, can identify 3–5 specific conditions that reliably predict your deepest sessions.',
    content: `After every session, immediately capture: date and time, session duration, focus level reached, physical sensations (vibrations, temperature, heaviness, floating), emotional state before/during/after, visual imagery (images, colors, symbols), intuitive insights ("downloads," sudden knowledge), challenges (racing thoughts, sleepiness, discomfort), and breakthroughs (anything new or notably different).`,
    why: 'The report describes biofeedback as a critical tool for training the left brain to recognize and replicate specific internal states. Your journal is your biofeedback system. Over weeks and months, patterns will emerge: certain times of day may produce deeper states, certain foods or activities may help or hinder. Without documentation, these insights are lost.',
  },
  {
    number: 8,
    title: 'Apply the Advanced Toolkit',
    duration: 'Ongoing, once Focus 12 is stable',
    wave: 'Wave III — Freedom',
    milestone: null,
    content: null,
    why: null,
    techniques: [
      {
        name: 'Problem Solving',
        steps: 'Enter Focus 12 and fill your expanded awareness with your full perception of the problem. Project the problem outward into the universal hologram. Invite your "higher self" to interact with the universal information field to find solutions. Solutions may arrive immediately as holistic perceptions, or over the next 2–3 days as sudden insights in waking life.',
      },
      {
        name: 'Patterning (Manifestation)',
        steps: 'Enter Focus 12 and clearly define your desired objective — physical, emotional, or intellectual. Concentrate fully on the objective, experiencing it as already accomplished. Extend this perception into the whole of your expanded consciousness. Project it outward into the universe with the absolute intention that it is a matter of established achievement.',
      },
      {
        name: 'Color Breathing',
        steps: 'In Focus 12, visualize specific colors flowing through your body with each breath. Blue: cooling, calming, reducing inflammation. Red/warm: energizing, activating. Green: balancing, harmonizing. Gold/white: general healing. Direct the colored light to specific areas of your body that need attention.',
      },
      {
        name: 'Energy Bar Tool',
        steps: 'Visualize a small, intensely pulsating dot of light. Charge it with enormous energy in your imagination. Extrude the dot into a sparkling, vibrating cylinder of light. Use this tool to channel universal force to selected parts of your body — or turn it into a whirling vortex for Remote Viewing.',
      },
      {
        name: 'Living Body Map',
        steps: 'Visualize the full configuration of your body. See your major systems — nervous, circulatory, skeletal, organs — in vivid detail. Envisage appropriate colors within the outline of each system. Apply the energy bar tool to specific organs, directing streams of colored energy for healing, balancing, and revitalization.',
      },
    ],
  },
  {
    number: 9,
    title: 'Progress Toward Focus 15 and Focus 21',
    duration: 'Months to years · dedicated practice',
    wave: 'Waves IV–VII',
    milestone: null,
    content: `Focus 15 — No Time / Travel to the Past: all preceding techniques are conducted at Focus 12; Focus 15 involves further expansion through additional Hemi-Sync intensification. The concept of linear time dissolves — past, present, and future become accessible. Visualize time as a huge wheel with various spokes, each giving access to a different part of your past. Reality check: fewer than 5% of participants achieve stable Focus 15 during a standard 7-day Gateway training. This is a marathon, not a sprint.

Focus 21 — The Future and Other Dimensions: the most advanced Gateway state — movement outside the boundaries of time-space entirely. Attention shifts to discovering the future and interfacing with other dimensions. Supplementary practices: regular meditation outside of Hemi-Sync sessions, autohypnotic suggestion before sessions, progressive deepening through repetition.`,
    why: null,
  },
  {
    number: 10,
    title: 'Release Blockages and Commit to the Long Game',
    duration: 'Lifetime practice',
    wave: null,
    milestone: null,
    content: `Your Gateway practice will surface buried emotions, unresolved conflicts, fears, and self-limiting beliefs. This is not a side effect — it is the process working. The energy blockages created by these psychological patterns are what prevent consciousness from achieving coherence. They must be acknowledged, processed, and released.

Complement your Gateway sessions with: shadow work (actively examine the parts of yourself you avoid, deny, or project onto others), therapy or counseling (professional support for processing deeper psychological material), forgiveness practices (both self-forgiveness and forgiveness of others), physical movement (yoga, breathwork, dance, or martial arts), nature immersion (the report establishes that the body entrains with the Earth's electromagnetic field), and community practice (the report recommends group practice in Focus 12, where synchronized consciousness creates amplified holographic patterns).`,
    why: 'Section 37 of the report makes the most important practical observation in the entire document: "The speed with which an individual may expect to progress seems less a function of the number of hours spent practicing than it is a question of the speed with which he or she is able to use the insights gained to release anxieties and stresses within both the mind and the body."',
    isKeyInsight: true,
  },
]

const TIMELINE = [
  ['Weeks 1–3',    'Foundation',      'Breath, relaxation, no audio'],
  ['Weeks 3–7',    'Focus 10',        'Wave I, Energy Box, Resonant Tuning, REBAL'],
  ['Weeks 7–14',   'Focus 12',        'Waves II–III, Patterning, Problem Solving'],
  ['Weeks 14–26',  'Advanced Tools',  'Color Breathing, Energy Bar, Remote Viewing, Living Body Map'],
  ['Months 6–12+', 'Focus 15',        'Waves IV–V, time dissolution, past access'],
  ['Year 1–2+',    'Focus 21',        'Waves VI–VII, interdimensional exploration'],
]

export default function ProgramPage() {
  return (
    <div className="pt-14 min-h-screen">
      {/* Classification Banner */}
      <div className="bg-accent/5 border-b border-accent/30 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Product Access — The Program</span>
          <span className="font-label text-[10px] tracking-[0.2em] text-accent uppercase">Gateway Archive Member</span>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10" style={{ background: '#00ff88' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link href="/documents" className="font-label text-[10px] tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors uppercase">← Archive</Link>
            <span className="text-border">|</span>
            <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground">The Gateway Program</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-widest uppercase leading-tight mb-4">
            10-Step Implementation Guide
          </h1>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed tracking-wide max-w-2xl mb-8">
            <span className="text-accent">&gt; </span>
            A practical program for replicating the CIA-documented Gateway Process. Based on the 1983 Army Intelligence report and the Monroe Institute&apos;s Gateway Experience training system. Progress depends less on hours practiced and more on willingness to release emotional blockages.
          </p>

          {/* Before You Begin */}
          <div className="border border-accent/30 cyber-chamfer p-6 max-w-2xl">
            <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-4">Equipment Required</p>
            <ul className="space-y-2">
              {[
                'Quality stereo headphones (over-ear; binaural beats require stereo separation)',
                'Monroe Institute Gateway Experience audio series (Waves I–VII)',
                'Quiet, dark room where you will not be disturbed',
                'A journal and pen for session documentation',
                'A consistent daily time block of 30–60 minutes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent font-mono text-xs shrink-0 mt-0.5">&gt;</span>
                  <span className="font-mono text-xs text-foreground leading-relaxed tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map((step) => (
            <div key={step.number} className="border border-border cyber-chamfer overflow-hidden">
              {/* Step header */}
              <div className="px-6 py-4 border-b border-border bg-card flex flex-wrap items-start gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <span className="font-heading text-3xl font-black text-accent/30 shrink-0">
                    {String(step.number).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-heading text-base sm:text-lg font-bold tracking-wide text-foreground leading-tight mb-1">
                      {step.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                        {step.duration}
                      </span>
                      {step.wave && (
                        <span className="font-label text-[9px] tracking-[0.15em] text-accent uppercase">
                          {step.wave}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Main content */}
                {step.content && (
                  <p className="font-mono text-sm text-foreground leading-relaxed tracking-wide whitespace-pre-line">
                    {step.content}
                  </p>
                )}

                {/* Techniques (Step 8) */}
                {'techniques' in step && step.techniques && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.techniques.map((t) => (
                      <div key={t.name} className="border border-accent/20 bg-accent/5 cyber-chamfer-sm p-4">
                        <p className="font-heading text-xs font-bold tracking-[0.15em] text-accent uppercase mb-2">{t.name}</p>
                        <p className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">{t.steps}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Why This Matters */}
                {step.why && (
                  <div className={`border-l-2 pl-4 ${step.isKeyInsight ? 'border-accent' : 'border-accent/30'}`}>
                    <p className={`font-label text-[9px] tracking-[0.2em] uppercase mb-2 ${step.isKeyInsight ? 'text-accent' : 'text-muted-foreground'}`}>
                      {step.isKeyInsight ? 'Critical Insight' : 'Why This Matters'}
                    </p>
                    <p className="font-mono text-xs text-foreground leading-relaxed tracking-wide italic">
                      {step.why}
                    </p>
                  </div>
                )}

                {/* Gateway Affirmation (Step 6) */}
                {'affirmation' in step && step.affirmation && (
                  <div className="border border-accent/30 bg-accent/5 cyber-chamfer-sm p-5">
                    <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-3">The Gateway Affirmation</p>
                    <p className="font-mono text-xs text-foreground leading-relaxed tracking-wide italic">
                      &ldquo;I am more than my physical body. Because I am more than physical matter, I can perceive that which is greater than the physical world. Therefore, I deeply desire to expand, to experience, to know, to understand, to control, and to use such greater energies and energy systems as may be beneficial and constructive to me and to those who follow me. Also, I deeply desire the help and cooperation, the assistance, the understanding of those individuals whose wisdom, development, and experience are equal to or greater than my own.&rdquo;
                    </p>
                  </div>
                )}

                {/* Milestone */}
                {step.milestone && (
                  <div className="flex items-start gap-2 pt-1">
                    <span className="font-label text-[9px] tracking-[0.2em] text-accent uppercase shrink-0 mt-0.5">✓ Milestone:</span>
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">{step.milestone}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progression Timeline */}
        <div className="mt-12 border border-border cyber-chamfer overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-card">
            <h2 className="font-heading text-lg font-bold tracking-wide text-foreground">Recommended Progression Timeline</h2>
            <p className="font-mono text-xs text-muted-foreground tracking-wide mt-1">Individual progress varies based on prior experience, emotional openness, and consistency of practice.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {['Phase', 'Duration', 'Focus'].map((h) => (
                    <th key={h} className="px-6 py-3 text-left font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMELINE.map(([duration, phase, focus], i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-card/50 transition-colors">
                    <td className="px-6 py-3 font-mono text-xs text-accent tracking-wide">{duration}</td>
                    <td className="px-6 py-3 font-heading text-xs font-bold tracking-wide text-foreground">{phase}</td>
                    <td className="px-6 py-3 font-mono text-xs text-muted-foreground tracking-wide">{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Essential Reading */}
        <div className="mt-8 border border-border cyber-chamfer p-6">
          <p className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase mb-4">Essential Reading (from the Report&apos;s Bibliography)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Stalking the Wild Pendulum', 'Itzhak Bentov', 'The primary scientific framework for body resonance, consciousness, and the cosmic egg model'],
              ['Journeys Out of the Body', 'Robert Monroe', 'First-person account from the creator of Hemi-Sync and the Gateway Experience'],
              ['Altered States of Consciousness', 'Charles Tart', 'Academic overview of altered states research'],
              ['Kundalini — Psychosis or Transcendence', 'Lee Sannella, M.D.', 'Medical perspective on kundalini energy and expanded consciousness'],
              ['The Mystic Spiral', 'Jill Purce', 'The spiral/torus pattern across mystical traditions'],
            ].map(([title, author, desc]) => (
              <div key={title} className="flex flex-col gap-0.5">
                <span className="font-mono text-xs text-accent tracking-wide">{title}</span>
                <span className="font-label text-[9px] tracking-[0.12em] text-muted-foreground uppercase">{author}</span>
                <span className="font-mono text-[10px] text-muted-foreground/70 leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/cheat-sheet" className="cyber-chamfer-sm border border-accent text-accent font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:bg-accent hover:text-background transition-all duration-150">
            Quick Reference Cheat Sheet →
          </Link>
          <Link href="/research" className="cyber-chamfer-sm border border-border text-muted-foreground font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:border-accent hover:text-accent transition-all duration-150">
            Research Breakdown →
          </Link>
          <Link href="/glossary" className="cyber-chamfer-sm border border-border text-muted-foreground font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:border-accent hover:text-accent transition-all duration-150">
            Glossary →
          </Link>
        </div>
      </div>
    </div>
  )
}
