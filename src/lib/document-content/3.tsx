import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',       label: 'Origins and Premise' },
  { id: 'doc-learning',    label: '1. Three Types of Learning' },
  { id: 'doc-sleep',       label: '2. The Sleep Discovery' },
  { id: 'doc-binaural',    label: '3. Binaural Discovery and Hemi-Sync' },
  { id: 'doc-applications', label: '4. Nine Applications' },
  { id: 'doc-twemlow',     label: '5. Clinical Cases (Dr. Twemlow)' },
  { id: 'doc-gateway',     label: '6. Origins of the Gateway Program' },
  { id: 'doc-account',     label: '7. A Participant\'s Account' },
];

export const entities: Record<string, Entity> = {
  'Type III Learning': {
    title: 'Type III Learning',
    definition: 'The Institute\'s term for non-conscious learning — experience absorbed either through unattended sensory input (over 80% of what the five senses perceive, ordinarily never reaching conscious awareness) or through dream experience. Identified as holding the most promise for the Institute\'s original research goal.',
    crossRef: 'Part 1 — Three Types of Learning',
    category: 'concept',
  },
  'Frequency Following Response': {
    title: 'Frequency Following Response (FFR)',
    definition: 'Discovered when phased sine waves at discernible sound frequencies, blended into "beat" frequencies matching the ranges of human sleep-stage brain waves, evoke a corresponding response in the EEG pattern of the listener — with physiological and mental effects directly related to the stimulus.',
    crossRef: 'Part 2 — The Sleep Discovery',
    category: 'technology',
  },
  'Robert Monroe': {
    title: 'Robert Monroe',
    definition: 'Originator of the Frequency Following Response method, granted a generic patent for developing and holding a subject in any stage of sleep. Namesake of the Institute.',
    crossRef: 'Part 2 — The Patent',
    category: 'person',
  },
  'binaural beat insertion': {
    title: 'Binaural Beat Insertion',
    definition: 'The discovery that applying beat-frequency patterns separately to each ear — rather than as a single mixed signal — produced a "quantum jump" in effectiveness: shortened response time, extended duration, and dramatically increased intensity, even among well-indoctrinated prior subjects.',
    crossRef: 'Part 3 — Binaural Discovery',
    category: 'technology',
  },
  'Hemi-Sync': {
    title: 'Hemi-Sync',
    definition: 'The Institute\'s brain-hemisphere-synchronizing process, built on binaural beat-frequency stimulation. Named for its effect of bringing the two hemispheres into coherent, synchronous EEG activity.',
    crossRef: 'Part 3 — Hemi-Sync',
    category: 'technology',
  },
  'corpus callosum': {
    title: 'Corpus Callosum',
    definition: 'The nerve network connecting the brain\'s hemispheres. Whether the Hemi-Sync signal crosses it, travels through the brain stem, or involves the limbic system remained undetermined — though new neural pathways appeared to form with practice.',
    crossRef: 'Part 3 — Open Questions',
    category: 'concept',
  },
  'Stuart Twemlow': {
    title: 'Stuart Twemlow',
    definition: 'Psychiatrist and Institute research associate whose clinical work applying Monroe tapes — including Focus 10 — to chronic pain, psychosomatic illness, and end-of-life care is quoted at length in this report.',
    crossRef: 'Part 5 — Clinical Cases',
    category: 'person',
  },
  'Gateway Program': {
    title: 'Gateway Program (formerly M-5000)',
    definition: 'The Institute\'s semi-public, week-long training program, originating from a 1975 workshop at the Esalen Institute in Big Sur. Originally named M-5000; over 1,500 participants had completed it within four years of its start.',
    crossRef: 'Part 6 — Origins of the Gateway Program',
    category: 'concept',
  },
  'energy conversion box': {
    title: 'Energy Conversion Box',
    definition: 'The first step of the Gateway pre-preparation ritual: a mentally visualized chest in which the participant "locks away" everyday concerns and worries, freeing the mind for the exercise ahead.',
    crossRef: 'Part 7 — The Pre-Preparation Ritual',
    category: 'technique',
  },
  'resonant tuning': {
    title: 'Resonant Tuning',
    definition: 'The second step of the pre-preparation ritual: deep, open-throated breaths, inhaling while visualizing sparkling energy rising into the head, and exhaling while chanting ("aaah," "oooh," "ummm") and releasing the energy.',
    crossRef: 'Part 7 — The Pre-Preparation Ritual',
    category: 'technique',
  },
  'REBAL': {
    title: 'REBAL (Resonant Energy Balloon)',
    definition: 'The third pre-preparation step: a sphere of energy built outside the body by "shooting" gathered energy out the top of the head, down around the body, and back in at the feet.',
    crossRef: 'Part 7 — The Pre-Preparation Ritual',
    category: 'technique',
  },
  'Focus 10': {
    title: 'Focus 10',
    definition: '"Mind awake, body asleep" — induced by combining low theta (sleep) signals with higher beta (wakeful) ones. Described as the launching pad for every other Gateway experience.',
    crossRef: 'Part 7 — Focus 10',
    category: 'state',
  },
  'Focus 12': {
    title: 'Focus 12',
    definition: 'The "state of expanded awareness," reached by counting up from Focus 10. Associated with intense physical sensations on first exposure — tightness of chest, rushes of light, vibrating energy — that typically ease with practice.',
    crossRef: 'Part 7 — Intro Focus 12',
    category: 'state',
  },
  'Focus 21': {
    title: 'Focus 21',
    definition: 'A state corresponding, in the Institute\'s cosmology, to the boundary between physical and nonphysical existence — the beginning of a bridge to nonphysical "spirit forms," reached for attempted communication with "the beyond."',
    crossRef: 'Part 7 — Friday: Focus 21',
    category: 'state',
  },
  'patterning': {
    title: 'Patterning',
    definition: 'A Focus 12 technique: forming a specific request or question, then mentally "shooting" it out to the universe — phrased in the present tense, without a time frame, and qualified with the caveat that it be fulfilled only if in the interest of one\'s higher self.',
    crossRef: 'Part 7 — Patterning',
    category: 'technique',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">MIAS</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00788R001700270009-7</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Monroe Institute of Applied Sciences
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Location', 'Afton, Virginia'], ['Includes', 'MIAS History + Mother Earth News Reprint (1983)']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          The Institute had its beginning in the Research and Development Division of Monroe Industries, Inc.,
          which in 1958 was investigating methods of accelerated learning through practical environmental changes.
          As certain findings emerged, the decision was made to broaden and redirect the research effort, and in
          1971 the Institute was created to expand this different approach.
        </P>
        <P>
          Stated simply, the Institute holds to three premises: (1) consciousness, and the focusing thereof, contains
          any and all solutions to the life processes man desires or encounters; (2) greater understanding of such
          consciousness can be achieved only through inter-disciplinary approaches and coordination; and (3) results
          of related research are meaningful only if reduced to practical application — to &quot;something of
          value&quot; within the context of contemporary culture. The report that follows offers no statistical
          tables or references to others&apos; work; the Institute&apos;s intent has never been to provide proof to
          the scientific community, but to develop tools others may take up and validate in their own areas of
          specialization.
        </P>
      </section>

      {/* ── Part 1: Three Types of Learning ───────────────── */}
      <DocSection id="doc-learning" number="PART I" title="Three Types of Learning">
        <P>
          Early goals centered on learning methods usable under typical societal conditions — precluding chemical,
          drug, or dietary approaches, and anything requiring expensive instrumentation. Studying learning broadly,
          the Institute identified three distinct patterns.
        </P>
        <P>
          <span className="text-accent font-mono">Type I Learning</span> is natural learning, triggered by attention
          that experience itself focuses — through pain or pleasure, emotion, or intense physical sensation. The
          greater the depth of experience, the greater the imprint. (A simple test: list your ten most vividly
          recalled pieces of information, and note how few came from formal training.)
        </P>
        <P>
          <span className="text-accent font-mono">Type II Learning</span> is the conventional, deliberate,
          Pavlovian-style process — reading and re-reading a textbook, an athlete&apos;s physical coordination, a
          pianist&apos;s skill — requiring a special, pre-learned form of attention.
        </P>
        <P>
          <E term="Type III Learning">Type III Learning</E> occurs largely outside conscious recall, in two areas.
          The first is non-conscious retention of experience perceived but never attended to — of the information
          taken in by the five senses at any moment, less than 20% ordinarily reaches conscious awareness, yet all of
          it is stored in minute detail (as when one recalls a conversation overheard while attention was elsewhere).
          The second is the dream experience, which becomes part of non-conscious memory with the same emotional
          force as Type I learning, entirely without the individual&apos;s conscious awareness. It was here, in Type
          III, that the Institute found the most promise — though sorting out its catalytic factor from centuries of
          overlapping labels (suggestion, hypnosis, psycho-synthesis, placebo) required settling, reluctantly, on the
          term <span className="italic">consciousness</span> (shortened, through impatience, to CS) as the actual
          object of study.
        </P>
      </DocSection>

      {/* ── Part 2: The Sleep Discovery ────────────────────── */}
      <DocSection id="doc-sleep" number="PART II" title="The Sleep Discovery">
        <P>
          The project aimed at the natural edge of CS — its release and dispersion at the onset of sleep — seeking a
          way to maintain the quality of consciousness as the body converted into sleep, working against the
          resistance of the body&apos;s homeostatic network. Early efforts with 52 subjects verified existing sleep
          research without new insight. The real breakthrough came inadvertently: unable to house subjects overnight
          or reliably get volunteers to fall asleep on request, the team tried various environments (temperature,
          humidity, light, sound) before landing on audio signals as the answer.
        </P>
        <P>
          It was discovered that phased sine waves, blended into &quot;beat&quot; frequencies matching the ranges of
          brain waves at various stages of human sleep, create a{' '}
          <E term="Frequency Following Response">Frequency Following Response</E> (FFR) within the listener&apos;s
          EEG pattern — evoking physiological and mental states directly related to the stimulus. With this tool, it
          became possible, for the first time, to develop and hold a subject in any stage of sleep, from light alpha
          through theta into delta and REM. A generic patent was granted to its originator,{' '}
          <E term="Robert Monroe">Robert Monroe</E>, for whom the Institute is named.
        </P>
        <P>
          The Monroe method could &quot;program&quot; sleep cycles through the night, adjusting the duration of each
          stage, and could rouse a sleeper gently from REM sleep rather than jarring them awake mid-cycle. In one
          medically supervised trial, 45 insomniacs — defined as unable to sleep without medication — were given a
          month of nightly FFR tapes at home; 40 of 45 reported the system at least as effective as their medication,
          without drug side effects, and in some cases an entrainment effect lasted up to six months, with the
          patient only needing to think of the sound pattern to fall asleep.
        </P>
      </DocSection>

      {/* ── Part 3: Binaural Discovery and Hemi-Sync ──────── */}
      <DocSection id="doc-binaural" number="PART III" title="Binaural Discovery and Hemi-Sync">
        <P>
          As the exploration of sleep states continued, it became clear that consciousness was not merely preserved
          but enhanced by the process — subjects discovered their consciousness was not, in fact, dependent on
          physical sensory signals, and grew in capacity once freed of the interference those signals ordinarily
          create. A researcher then recommended applying the beat-frequency patterns{' '}
          <E term="binaural beat insertion">binaurally</E> — one signal to each ear rather than a mixed signal — so
          that the brain itself would synthesize the beat frequency (a 200Hz signal in one ear and 210Hz in the other
          suggesting an effective 10Hz resonance). The results were dramatic: response time shortened, duration
          extended, and intensity increased sharply, even among subjects well used to the older method.
        </P>
        <P>
          Extended experimentation with sequences of signals — some producing states from comatose delta sleep to
          high-anxiety hyperfocus — led to the discovery that a &quot;Mind Awake, Body Asleep&quot; state (arbitrarily
          labeled Focus 10) achieved through one signal, followed by a second, ordinarily nerve-racking overlapping
          signal, produced unusually clear mentation. Exploring the bilateral effects of FFR further, the Institute
          found that inserting unrelated signals in each ear could produce temporary disorientation, while low EEG
          frequencies in one ear could &quot;de-tune&quot; the opposite hemisphere — leading to the search for
          patterns that would balance the two hemispheres and shift behavior.
        </P>
        <P>
          The core effect this work eventually defined became known as{' '}
          <E term="Hemi-Sync">Hemi-Sync</E>: binaural beat-frequency stimulation that creates a sustaining FFR
          synchronous in both amplitude and frequency between the brain hemispheres. A bi-lateral EEG on a volunteer,
          set up by an associate researcher, displayed the dominant wave form of each hemisphere on a dual-trace
          oscilloscope, confirming the effect directly. Whether the signal crosses the{' '}
          <E term="corpus callosum">corpus callosum</E>, the brain stem, or the limbic system remained undetermined —
          though a Zen master with twenty years of contemplative study was independently found able to produce the
          same effect for long periods unaided, suggesting the state occurs naturally, if rarely, under specific
          conditions not yet understood.
        </P>
      </DocSection>

      {/* ── Part 4: Nine Applications ──────────────────────── */}
      <DocSection id="doc-applications" number="PART IV" title="Nine Applications">
        <P>
          Work with Hemi-Sync brought forward a range of practical prospects:
        </P>
        <P className="pl-4 border-l-2 border-accent/30">
          <span className="text-foreground font-medium">1. Balanced Health</span> — stabilization of mental and
          physical energy, typically appearing between the 10th and 11th 45-minute session, often permanent
          thereafter.<br /><br />
          <span className="text-foreground font-medium">2. Stress-Tension Reduction</span> — used chiefly where
          conventional approaches had failed, apparently by shifting overall outlook rather than treating
          specifics.<br /><br />
          <span className="text-foreground font-medium">3. Surgical Support</span> — applied before, during, and
          after surgery to reduce anxiety, pain, and accelerate healing.<br /><br />
          <span className="text-foreground font-medium">4. Control of Pain</span> — as little as one week of tape
          work has produced dynamic reductions in chronic pain, by a mechanism not yet understood.<br /><br />
          <span className="text-foreground font-medium">5. Stroke Recovery</span> — preliminary work with two
          patients shortly after minor strokes showed definite improvement; one regained clear speech and steady
          gait after three sessions, with no observed retrogression three months later.<br /><br />
          <span className="text-foreground font-medium">6. Psychotherapy</span> — used in interviews, Hemi-Sync
          appears to help patients reach long-submerged material quickly; ten sessions have been likened to ten
          years of orthodox treatment.<br /><br />
          <span className="text-foreground font-medium">7. Problem Solving</span> — in a demonstration with 45
          corporate executives seeking answers to individual problems, thirty reported unexpected,
          high-quality decisions they were certain were &quot;right.&quot;<br /><br />
          <span className="text-foreground font-medium">8. Accelerated Learning</span> — one college student raised
          her average from 2.5 to 3.9 in a quarter; a test subject retained oral information at 1,000 words per
          minute; six golfers each cut their scores by up to five strokes using guided imagery under Hemi-Sync.
          <br /><br />
          <span className="text-foreground font-medium">9. Creative Stimulus</span> — a small engineering group
          produced several patent-worthy designs; other participants went on to write and sell books, become
          professional artists, or compose music after their sessions.
        </P>
      </DocSection>

      {/* ── Part 5: Twemlow's Clinical Cases ──────────────── */}
      <DocSection id="doc-twemlow" number="PART V" title="Clinical Cases (Dr. Twemlow)">
        <P>
          Institute research associate and psychiatrist{' '}
          <E term="Stuart Twemlow">Stuart Twemlow</E> reported that Monroe tapes measurably narrow and intensify the
          brain&apos;s focused energy — comparable, he suggested, to the yogic concept of one-pointedness. He
          described three clinical cases with particularly striking results.
        </P>
        <P>
          A middle-aged woman with chronic pain from a poorly healed fracture was found, as she relaxed under the
          tapes, to be holding pain in service of &quot;secondary gains&quot; — it helped her cope with unrelated
          psychological stress. As she regained a sense of control over her life, her need for the pain diminished;
          after discharge she looked years younger and had become re-engaged with parts of her life she had long
          withdrawn from.
        </P>
        <P>
          A middle-aged man with psychosomatic symptoms across nearly every organ, traced to childhood surgical
          trauma, was gradually exposed — through Focus 10 paired with anxiety-triggering reminders of that trauma —
          to the source of his distress over several weeks, and became desensitized, gaining far greater control over
          his life.
        </P>
        <P>
          A dying man, in pain unreachable by massive doses of narcotics, achieved control of that pain over several
          weeks of tape use, and — per a letter from his widow — remained pain-free and at peace through the final
          week of his life, using the process to make peace with his family before he died.
        </P>
        <P>
          Twemlow also noted that the Focus 10 exercise relaxed not only voluntary muscles but involuntary ones (such
          as bladder muscles), and that chronically ill patients who gained a sense of control over one symptom often
          experienced a &quot;snowball&quot; effect of improvement across others — some learning to program their
          sleep timing, others becoming more reflective and inwardly satisfied rather than dependent on external
          stimulation.
        </P>
      </DocSection>

      {/* ── Part 6: Origins of the Gateway Program ────────── */}
      <DocSection id="doc-gateway" number="PART VI" title="Origins of the Gateway Program">
        <P>
          In 1975, the Institute was invited to the Esalen Institute in Big Sur, California, to conduct a weekend
          workshop — and, in that session and a follow-up in San Francisco, inadvertently opened a new avenue: a
          semi-public program, selecting participants by sincerity of interest and personality profile rather than
          restricting work to inside the Institute. This offered a far wider base of consensus data than internal
          experimentation alone, with participant feedback driving continuous evolution of the methods used.
        </P>
        <P>
          Originally named M-5000, the program is now called the{' '}
          <E term="Gateway Program">Gateway Program</E>. In four years, over 1,500 participants passed through it —
          the present Gateway session, the report notes, is &quot;a distant cousin&quot; of the first. The Institute
          describes itself as now open to contact from any sector — medicine, psychiatry, education, commercial
          products, music, entertainment, religion — believing broad, responsible dissemination is the best defense
          against the tools&apos; potential misuse.
        </P>
      </DocSection>

      {/* ── Part 7: A Participant's Account ───────────────── */}
      <DocSection id="doc-account" number="PART VII" title="A Participant's Account">
        <P>
          The remainder of this document is a first-person account by Pat Stone, associate editor of{' '}
          <span className="italic">THE MOTHER EARTH NEWS</span>, reprinted from the magazine&apos;s March/April 1983
          issue, describing a week-long Gateway Program at the Institute — undertaken after the magazine learned that
          Elisabeth Kübler-Ross had described a life-changing experience there.
        </P>
        <P>
          Each of the week&apos;s roughly six daily tape sessions opened with the same pre-preparation ritual:
          building an <E term="energy conversion box">energy conversion box</E> to lock away everyday worries,{' '}
          <E term="resonant tuning">resonant tuning</E> through breath and chant, constructing a{' '}
          <E term="REBAL">REBAL</E>, and reciting the Gateway Affirmation (&quot;I am more than my physical
          body...&quot;). Stone found the ritual difficult to execute cleanly at first, but noted immediate physical
          effects from the Hemi-Sync tones and chanting alone.
        </P>
        <P>
          The tapes progressed from{' '}
          <E term="Focus 10">Focus 10</E> — &quot;mind awake, body asleep,&quot; the launching pad for everything
          that followed — into{' '}
          <E term="Focus 12">Focus 12</E>, &quot;the state of expanded awareness.&quot; First exposure to Focus 12
          brought intense, sometimes frightening physical sensations: chest tightness, rushes of light, vibrating
          energy strong enough that Stone chanted the Gateway Affirmation aloud to steady himself. Monroe, in a
          follow-up interview quoted in the piece, explained that Focus 10 layers high-beta signals over
          already-established theta tones to trigger waking consciousness in a sleeping body, while Focus 12 drops
          the body into deeper delta sleep while raising mental wakefulness with specialized beta-signal mixtures —
          signals well above what conventional EEG researchers typically study.
        </P>
        <P>
          A recurring theme was self-responsibility: when Stone described a difficult session to the group, the
          instructor Melissa Jager challenged him rather than offering comfort — &quot;Don&apos;t resist pain, that
          just increases it. Move into the experience, so you can move through it&quot; — and staff generally
          declined to encourage dependency or shared interpretation of experiences, leaving each participant&apos;s
          conclusions to themselves.
        </P>
        <P>
          Later in the week, participants learned{' '}
          <E term="patterning">patterning</E> — releasing a specific, present-tense request into Focus 12 without
          holding an expectation of the outcome, and without a time frame, always qualified by the wish that it serve
          the participant&apos;s &quot;higher self.&quot; Stone applied the technique, half-seriously, to a case of
          poison ivy (following a fellow participant&apos;s advice to visualize an elaborate folk remedy rather than
          attempt it physically) — and reported that while the rash ran its normal course, the itching stopped
          entirely whenever he revisited the visualization.
        </P>
        <P>
          By midweek, Focus 10 and 12 had become more familiar and less physically overwhelming, and a session on{' '}
          <E term="Focus 15">Focus 15</E> — &quot;the state of no time&quot; — left Stone feeling calm and clear
          enough that he extended the experience on his own after the tape ended. On the session’s final day, a{' '}
          <E term="Focus 21">Focus 21</E> tape — corresponding, in the Institute&apos;s cosmology, to the boundary
          between physical and nonphysical existence — produced a personally powerful experience of flushed emotion
          and insight into people he knew, along with a physical sensation of his forearms rising that he could not
          fully verify as more than a few inches.
        </P>
        <P>
          On the week&apos;s final tape, Stone used patterning to ask for a closer relationship with his infant
          daughter, from whom a difficult period after her birth had left him somewhat estranged — and on returning
          home, found her greeting him with unprecedented delight. A postscript, following up with group members
          seven months later, found lasting but uneven effects: some used the techniques only occasionally for
          relaxation or sleep, others applied Focus 10 and 12 regularly for decision-making, and Stone himself
          reported the poison-ivy remedy and patterning results continuing to work reliably, even as his daily
          practice of the formal techniques lapsed.
        </P>
      </DocSection>
    </>
  );
}
