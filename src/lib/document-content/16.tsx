import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'Introduction' },
  { id: 'doc-defining',   label: '1. Defining Hemi-Sync' },
  { id: 'doc-eeg',        label: '2. Bi-Lateral EEG Research' },
  { id: 'doc-origins',    label: '3. Institute Origins & Premise' },
  { id: 'doc-discovery',  label: '4. Discovery of FFR & Sleep Programming' },
  { id: 'doc-findings',   label: '5. Research Findings' },
];

export const entities: Record<string, Entity> = {
  'Hemi-Sync': {
    title: 'Hemi-Sync (Hemispheric Synchronization)',
    definition: 'Synchronous or simultaneous brain-wave patterns in both hemispheres, indicated by EEG forms in each hemisphere that are simultaneously equal in amplitude and frequency. Occurs infrequently and briefly in typical human consciousness — usually for a few seconds at most.',
    crossRef: 'Introduction — Defining Hemi-Sync',
    category: 'state',
  },
  'Elmer and Alyce Green': {
    title: 'Elmer and Alyce Green',
    definition: 'Researchers at the Menninger Clinic whose early biofeedback work included the best pre-Institute measurement of hemispheric synchronization — testing a subject with twenty years of Zen meditative training who could establish a hemi-sync state at will, consistently, for over fifteen minutes.',
    crossRef: 'Part 1 — The Menninger Clinic Study',
    category: 'person',
  },
  'Frequency Following Response': {
    title: 'Frequency Following Response (FFR)',
    definition: 'An electrical brain response evoked by audio stimuli, developed by the Institute as the mechanism for inducing hemispheric synchronization — applying differential signals to each ear in a beat-frequency mode.',
    crossRef: 'Part 1 — Inducing Hemi-Sync',
    category: 'technology',
  },
  'binaural beat-frequency stimulation': {
    title: 'Binaural Beat-Frequency Stimulation',
    definition: 'The Institute\'s method of applying differential audio signals to each ear to create a sustaining Frequency Following Response synchronous in both amplitude and frequency between the brain hemispheres.',
    crossRef: 'Part 2 — Bi-Lateral EEG Study',
    category: 'technology',
  },
  'corpus callosum': {
    title: 'Corpus Callosum',
    definition: 'The nerve network connecting the brain\'s two hemispheres. Whether the Hemi-Sync signal crosses the corpus callosum, travels through the brain stem, or involves the limbic system had not yet been determined at the time of this bulletin, though new neural pathways appeared to be established as a result of practice.',
    crossRef: 'Part 2 — Open Questions',
    category: 'concept',
  },
  'mind awake - body asleep': {
    title: '"Mind Awake, Body Asleep" State',
    definition: 'A state developed through Institute research into consciousness — described as another important milestone alongside the sleep-cycle programming work, and later central to the Focus 10 stage of the Gateway Program.',
    crossRef: 'Part 4 — A Further Milestone',
    category: 'state',
  },
  'Robert Monroe': {
    title: 'Robert Monroe',
    definition: 'Originator of the Frequency Following Response method and namesake of the Monroe Institute. Received a generic patent on the technique for developing and holding a subject in various stages of sleep.',
    crossRef: 'Part 4 — The Sleep Patent',
    category: 'person',
  },
};

export default function Body() {
  return (
    <>
      {/* ── Document Header ──────────────────────────────── */}
      <section id="doc-intro" className="scroll-mt-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 border border-destructive cyber-chamfer-sm px-3 py-1 bg-destructive/10">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-neon" />
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">MIAS Bulletin</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00788R001200060018-5</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Hemi-Sync Brain Wave Patterns
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Source', 'Monroe Institute of Applied Sciences'], ['Bulletin Nos.', '#PRI1380H / #22480G']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          Perhaps the most significant mind-brain research in recent years has concerned hemispheric specialization.
          The consensus of several hundred papers and studies generally supports the postulates of dominant left-brain
          functions (lineal, verbal, analytic) and right-brain functions (visual, spatial, synthesis) — and all
          concede that our educational system and the fundamental values of our culture heavily nurture left-brain
          dominance.
        </P>
      </section>

      {/* ── Part 1: Defining Hemi-Sync ────────────────────── */}
      <DocSection id="doc-defining" number="PART I" title="Defining Hemi-Sync">
        <P>
          Synchronous or simultaneous brain-wave patterns in both hemispheres —{' '}
          <E term="Hemi-Sync">Hemi-Sync</E> — apparently occur infrequently in typical human consciousness, and then
          for a few seconds at most. Usually, activity shifts from left to right hemisphere as the dominant area,
          almost in a flickering movement, according to the mental task at the moment.
        </P>
        <P>
          By definition, hemispheric synchronization or coherence is a state of consciousness indicated by EEG forms
          in both hemispheres that are simultaneously equal in amplitude and frequency. Due to the rare occurrence and
          short duration of such consciousness, there has been little supportive instrumental measurement until
          recently. The best early work was conducted by{' '}
          <E term="Elmer and Alyce Green">Elmer and Alyce Green</E> at the Menninger Clinic, where a subject with
          twenty years of Zen meditative training was tested extensively. Results showed the subject could establish
          a hemi-sync state at will, consistently, for over fifteen minutes at a time.
        </P>
        <P>
          Through the use of audio stimuli to evoke an electrical{' '}
          <E term="Frequency Following Response">Frequency Following Response</E> in the brain, as developed by the
          Institute, and applying such signals in a beat-frequency mode — differential signals in each ear —
          Institute research has determined workable methods and techniques that induce hemispheric synchronization
          or coherence in the human brain. This has been verified and replicated consistently, both at the Institute
          and at other facilities. Thus, for the first time, consciousness as represented by the Hemi-Sync state can
          be instigated, identified, and measured.
        </P>
        <P>
          The full scope of Hemi-Sync consciousness is yet to be determined. Very little is known of its
          characteristics, value, or utility beyond the Institute&apos;s preliminary work. There is a growing belief
          that meditation, moments of crisis, certain mental disciplines, intense concentration, and peak experiences
          all represent varieties of such consciousness — while, conversely, hypnosis, drug-induced states, illness,
          and anaesthesia do not. Subsequent research may substantiate this through experience: that thinking,
          cognition, and other components of consciousness are not dependent upon physical sensory signals, a most
          profound learning process for the participating subjects. In a social structure bound heavily to causal
          relationships through matter-time-space, the acceptance of this as valid through personal experience was
          indeed profound, disturbing, and extremely stimulating to both staff and participants — a suspected
          Pandora&apos;s Box offering unexpected potential in an aspect that has preoccupied humankind since its
          earliest beginnings.
        </P>
      </DocSection>

      {/* ── Part 2: Bi-Lateral EEG Research ───────────────── */}
      <DocSection id="doc-eeg" number="PART II" title="Bi-Lateral EEG Research">
        <P>
          With the advent of wide interest in brain-hemispheric theory, the Institute undertook to explore the
          bi-lateral effects of FFR. The natural outcome was to seek patterns that would &quot;balance&quot; or adjust
          the relationship between the left and right brain, helping produce desired changes in behavior. Utilizing
          the Institute&apos;s FFR process in the binaural mode, a bi-lateral EEG on a volunteer subject was set up so
          that the dominant wave form of each brain hemisphere was displayed on a dual-trace oscilloscope.
        </P>
        <P>
          <E term="binaural beat-frequency stimulation">Binaural beat-frequency stimulation</E> creates a sustaining
          FFR that is synchronous in both amplitude and frequency between the brain hemispheres. The total meaning of
          such coherence is not fully understood, as no extended studies have been made beyond those begun by the
          Institute. Prior to the development of the FFR method, no efficient technique was available to generate a
          hemi-sync state; it may be true that those in a focused, relaxed state during prayer, meditation, or
          similar physically quiet states produce periods of such synchronization, and it must occur naturally, if
          only momentarily, under certain specific conditions in human life — exactly which conditions is not yet
          known.
        </P>
        <P>
          There is a partial entrainment effect, and indications are that it can be learned, much as in the
          biofeedback model. Whether the synchronizing signal crosses the{' '}
          <E term="corpus callosum">corpus callosum</E>, travels through the brain stem, or involves the limbic
          system has yet to be determined — it appears that new neural pathways are established as a result.
        </P>
        <P>
          The Institute&apos;s efforts have not been designed or performed with the intent of offering documentation
          to the scientific community at large, although much of orthodox scientific method has been utilized.
          Instead, that can well be the goal of other organizations and individuals who may take the Institute&apos;s
          basic findings and prove and present them in other forms, in other areas of specialization — participation
          the Institute welcomes.
        </P>
      </DocSection>

      {/* ── Part 3: Institute Origins & Premise ───────────── */}
      <DocSection id="doc-origins" number="PART III" title="Institute Origins and Premise">
        <P>
          <span className="text-accent font-mono">Origins.</span> The Institute had its beginning in the Research and
          Development Division of Monroe Industries, Inc., which at the time (1958) was investigating methods and
          techniques of accelerated learning through practical environmental changes. As a result of certain
          findings, the decision was made to broaden the base of such investigations and alter the purpose of the
          research effort. In 1971, the Institute was created to conform with and expand this different approach.
        </P>
        <P>
          <span className="text-accent font-mono">Premise.</span> Stated simply, the Institute holds to three
          concepts: (1) consciousness, and the focusing thereof, contains any and all solutions to the life
          processes that man desires or encounters; (2) greater understanding and appreciation of such consciousness
          can be achieved only through inter-disciplinary approaches and coordination; and (3) the results of related
          research are meaningful only if reduced to practical application — to &quot;something of value&quot;
          within the context of contemporary culture.
        </P>
      </DocSection>

      {/* ── Part 4: Discovery of FFR & Sleep Programming ──── */}
      <DocSection id="doc-discovery" number="PART IV" title="Discovery of FFR and Sleep Programming">
        <P>
          Early studies of consciousness and its decay into sleep brought a major tool into use by the Institute. It
          was discovered that phased sine waves at discernible sound frequencies, when blended to create
          &quot;beat&quot; frequencies within the ranges of electrical brain waves found at the various stages of
          human sleep, create a{' '}
          <E term="Frequency Following Response">Frequency Following Response</E> within the EEG pattern of the
          individual listening to such audio waveforms. The FFR in EEG evokes physiological and mental states in
          direct relationship to the original stimulus.
        </P>
        <P>
          With this new tool, it became possible, for the first time, to develop and hold a subject in any of the
          various stages of sleep — from light alpha relaxation through theta into delta, and into REM (dreaming). A
          generic patent on the method and technique was granted to its originator,{' '}
          <E term="Robert Monroe">Robert Monroe</E>, for whom the Institute is named.
        </P>
        <P>
          The Monroe method and techniques were found able to &quot;program&quot; sleep cycles throughout the night,
          if desired — variations could adjust the duration of each stage of sleep during the cycle, according to
          the needs and desires of the individual. The waking-from-sleep moment was enhanced greatly over the
          traditional alarm clock, which had no cognizance of the sleep stage it was invading: by programming the FFR
          up into REM sleep for the few minutes before wake-up time, then inserting a beta signal, the sleeper was
          roused gently yet firmly, without startling shock or the dull sleep &quot;hangover&quot; of a traditional
          alarm.
        </P>
        <P>
          Another important milestone of Institute research into consciousness came with the development of the{' '}
          <E term="mind awake - body asleep">&quot;mind awake, body asleep&quot;</E> state.
        </P>
      </DocSection>

      {/* ── Part 5: Research Findings ──────────────────────── */}
      <DocSection id="doc-findings" number="PART V" title="Research Findings">
        <P>
          The Institute has reached the following conclusions regarding the propagation and delineation of Hemi-Sync
          consciousness, based on both anecdotal and bio-monitoring consensus from 4,823 experiments among 1,280
          volunteer participants over a five-year period:
        </P>
        <P className="pl-4 border-l-2 border-accent/30">
          (1) The characteristics of such consciousness may be varied directly in accordance with the signal or
          signals introduced.<br /><br />
          (2) The re-introduction of such signal patterns evokes a replication of the original characteristics.<br /><br />
          (3) Specific states of Hemi-Sync consciousness can be learned and re-established without the original
          stimulus, much as in the biofeedback process.<br /><br />
          (4) Hemi-Sync audio stimulus is not all-pervasive — it can be rejected easily, either subjectively or
          objectively.<br /><br />
          (5) No significant or lasting contraindicative effects have been reported among participants in the
          experimental series.<br /><br />
          (6) Based on the application of specific single and multiple audio patterns, the following characteristics
          of Hemi-Sync consciousness have been noted: deep mental and physical relaxation; a sense of euphoria
          extending beyond the stimulus; single-pointed focus of attention; increased utilization of memory patterns
          at all levels; higher suggestibility, but with greater acceptance or rejection; holistic problem solving
          and decision-making; changes in overview, less restrictive and significantly broader in scope; a major
          increase in creativity and ideas, with attendant application; measurable changes in muscular coordination;
          and permanent memory addition, by rote and by self-synthesized experience.
        </P>
        <P>
          The Institute continues to operate experimental programs evaluating the effects produced by other audio
          patterns yet to be investigated. Formal papers on this effort will be presented to appropriate groups at a
          future date.
        </P>
      </DocSection>
    </>
  );
}
