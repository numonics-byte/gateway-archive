import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',       label: 'Origins of the Report' },
  { id: 'doc-remote',      label: '1. Remote Viewing — The Credibility Exercise' },
  { id: 'doc-taxonomy',    label: '2. A Taxonomy of Psychic Phenomena' },
  { id: 'doc-pk',          label: '3. Psychokinesis Experiments' },
  { id: 'doc-poltergeist', label: '4. Poltergeist Phenomena' },
  { id: 'doc-models',      label: '5. Theoretical Models' },
  { id: 'doc-applications', label: '6. Applications and Implications' },
  { id: 'doc-reflections', label: '7. Reflections' },
];

export const entities: Record<string, Entity> = {
  'Robert G. Jahn': {
    title: 'Robert G. Jahn',
    definition: 'Author of this report and Dean of Princeton\'s School of Engineering and Applied Science since 1971, normally known for work on advanced space propulsion and plasma physics. Later founded Princeton\'s PEAR (Princeton Engineering Anomalies Research) laboratory.',
    crossRef: 'Origins of the Report',
    category: 'person',
  },
  'Carol Kay Curry': {
    title: 'Carol Kay Curry \'79',
    definition: 'Princeton electrical engineering and computer science undergraduate whose 1977 request to study psychic phenomena, under Jahn\'s supervision, prompted the research described in this report. Designed and built the random-event generator used in the psychokinesis experiments.',
    crossRef: 'Origins of the Report',
    category: 'person',
  },
  'remote viewing': {
    title: 'Remote Viewing',
    definition: 'A technique, described by SRI physicists Russell Targ and Harold Puthoff, in which an "outbound" experimenter positions themselves at a randomly selected target location while an "inbound" experimenter, elsewhere, attempts to visualize aspects of the scene. Chosen by Jahn and Curry as their first "credibility exercise" for its simplicity and immediate verifiability.',
    crossRef: 'Part 1 — Remote Viewing',
    category: 'technique',
  },
  'psychokinesis': {
    title: 'Psychokinesis (PK)',
    definition: 'One of the two dominant subdivisions of psychic phenomena (alongside ESP): a palpable disturbance of, or interaction with, a physical or biological system, ranging from microscopic atomic-level disturbance to macroscopic distortion or levitation to dramatic "poltergeist" effects. Became Jahn and Curry\'s primary research focus.',
    crossRef: 'Part 2 — A Taxonomy of Psychic Phenomena',
    category: 'concept',
  },
  'extrasensory perception': {
    title: 'Extrasensory Perception (ESP)',
    definition: 'The other dominant subdivision of psychic phenomena: acquisition of information from sources blocked from ordinary perception, subdivided into telepathy (another person\'s thoughts), clairvoyance (contemporary physical objects or events), precognition/retrocognition (future or inaccessible past events), and animal ESP.',
    crossRef: 'Part 2 — A Taxonomy of Psychic Phenomena',
    category: 'concept',
  },
  'Society for Psychical Research': {
    title: 'Society for Psychical Research',
    definition: 'Founded in London in 1882, the first organization to publish formal, controlled experiments in telepathy and clairvoyance — beginning the scholarly study of psychic phenomena after millennia of unstudied human interest in the paranormal.',
    crossRef: 'Part 2 — History of Psychic Research',
    category: 'concept',
  },
  'J. B. Rhine': {
    title: 'J. B. Rhine',
    definition: 'Along with Louisa Rhine, made Duke University the center of academic parapsychology research starting in 1930 under Professor William McDougall, and began publishing the Journal of Parapsychology in 1937.',
    crossRef: 'Part 2 — History of Psychic Research',
    category: 'person',
  },
  'random-event generator': {
    title: 'Random-Event Generator',
    definition: 'An electronic device, based on a radioactive decay process, that simulates rapid coin flips and displays the cumulative count of "heads" — used to test whether a subject\'s attention can push the result away from the expected 50-50 chance line. Carol Curry designed and built her own version for her independent project.',
    crossRef: 'Part 3 — Psychokinesis Experiments',
    category: 'technology',
  },
  'Fabry-Perot interferometer': {
    title: 'Fabry-Perot Interferometer',
    definition: 'A high-precision optical instrument using two reflective glass plates to produce circular interference fringes. Used as a "high-gain" PK experiment: displacement of the plates by less than one millionth of a centimeter is detectable as a change in fringe brightness or position.',
    crossRef: 'Part 3 — Psychokinesis Experiments',
    category: 'technology',
  },
  'poltergeist': {
    title: 'Poltergeist (RSPK)',
    definition: 'More formally, "recurrent spontaneous psychokinesis" — rare, spectacular, large-scale PK effects historically attributed to spirits or hauntings, now systematically surveyed by researchers like J. G. Pratt and W. G. Roll. Frequently associated with a specific individual, often a teenager, near a period of personal distress.',
    crossRef: 'Part 4 — Poltergeist Phenomena',
    category: 'concept',
  },
  'entropy': {
    title: 'Entropy',
    definition: 'A measure of a physical system\'s disorder, invoked as a model for psychokinesis: many PK effects (a random generator skewing toward high numbers, a temperature differential forming between two isothermal thermistors) represent a local, "spontaneous" reduction of entropy — a process the Second Law of Thermodynamics does not otherwise permit for an isolated system.',
    crossRef: 'Part 5 — Theoretical Models',
    category: 'physics',
  },
  'Schrödinger\'s Cat': {
    title: 'Schrödinger\'s Cat (the Measurement Problem)',
    definition: 'One of several famous paradoxes (alongside Wigner\'s Friend and the Einstein-Podolsky-Rosen paradox) illustrating that a quantum system\'s state is not fixed until a measurement is made — cited as a foothold for models proposing that an experimenter\'s consciousness might play a direct causal role in psychokinetic effects.',
    crossRef: 'Part 5 — Quantum Mechanical Models',
    category: 'physics',
  },
  'Edgar Mitchell': {
    title: 'Edgar Mitchell',
    definition: 'Apollo astronaut who conducted psychic experiments aboard his own mission and became an advocate for psi research, quoted in this report on whether human thought might subtly influence reality on an everyday, universal basis rather than being confined to a few gifted individuals.',
    crossRef: 'Part 6 — Applications and Implications',
    category: 'person',
  },
  'conformance behavior': {
    title: 'Conformance Behavior',
    definition: 'A proposed empirical model of psychic functioning: living systems — tested in experiments with humans, monkeys, goldfish, cockroaches, and even seeds — may have an inherent ability to influence the physical world to their own advantage, without a specified mechanism.',
    crossRef: 'Part 5 — Theoretical Models',
    category: 'concept',
  },
};

export default function Body() {
  return (
    <>
      {/* ── Document Header ──────────────────────────────── */}
      <section id="doc-intro" className="scroll-mt-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 border border-accent cyber-chamfer-sm px-3 py-1 bg-accent/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-neon" />
            <span className="font-label text-[10px] tracking-[0.2em] text-accent uppercase">PAW Special Report</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00787R000500380004-4</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Psychic Process, Energy Transfer,<br />and Things That Go Bump in the Night
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Author', 'Robert G. Jahn \'51'], ['Publication', 'Princeton Alumni Weekly'], ['Date', 'December 4, 1978']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          In the spring of 1977,{' '}
          <E term="Carol Kay Curry">Carol Kay Curry</E>, an electrical engineering and computer science major, asked{' '}
          <E term="Robert G. Jahn">Robert G. Jahn</E> — Dean of Princeton&apos;s School of Engineering — whether she
          might undertake independent work in psychic phenomena, building on her background in instrumentation and
          data processing. Jahn, uncertain any faculty member could supervise such work, found himself agreeing when
          Curry bluntly replied that, obviously, he would. A summer of background research convinced them the project
          was worth pursuing; a winter at Stanford working alongside a research group at SRI International followed,
          then a Farnum Lecture at Princeton in April 1978 that drew unexpectedly strong interest and led to this
          report.
        </P>
        <P>
          Jahn and Curry are careful to claim no authority and take no position of advocacy: &quot;we shall simply
          set before you some of the things we have seen and done... and let you assess them as you will.&quot; The
          report follows three threads — remote viewing exercises undertaken to establish scholarly substance,
          experiments in psychokinesis (their main interest), and the analytical models proposed to interpret psychic
          phenomena — plus a closing discussion of applications and implications.
        </P>
      </section>

      {/* ── Part 1: Remote Viewing ─────────────────────────── */}
      <DocSection id="doc-remote" number="PART I" title="Remote Viewing — The Credibility Exercise">
        <P>
          Choosing between importing gifted psychics or running &quot;do-it-yourself&quot; experiments with their own
          students and staff, Jahn and Curry chose the latter — partly for practicality, partly because they believed
          the field&apos;s greater significance lay in what is accessible to the general public rather than to a few
          gifted subjects. Curry brought Jahn a paper by SRI physicists Russell Targ and Harold Puthoff describing{' '}
          <E term="remote viewing">remote viewing</E>: an outbound experimenter at a randomly selected target
          location, and an inbound experimenter attempting to visualize the scene.
        </P>
        <P>
          Their first attempt paired Jahn at Brookhaven National Laboratory with Curry babysitting in Princeton, who
          had never visited Brookhaven; her sketch correctly identified the water tower, cars, birds, and trees Jahn
          had described, with a curious left-right inversion, and she independently noted that Jahn turned around
          partway through the session — which he had, without recording it in his own sketch. A reversed attempt
          (Jahn in Pompano Beach, Florida, perceiving Curry in Princeton) correctly identified that Curry was with a
          horse and dismounted partway through, though details of the setting (an outdoor show ring rather than open
          grass) differed.
        </P>
        <P>
          Several &quot;near-miss&quot; cases proved similarly interesting: when Jahn found himself in a noisy indoor
          party, Curry sketched an outdoor scene that turned out to accurately depict the yard outside; a damp, cold
          visit to the Stanford University Chapel vestibule was matched by Curry&apos;s accurate sketch of the
          chapel&apos;s exterior, arches, and patio stonework, sketched from an SRI office. Jahn and Curry further
          convinced themselves the process need not occur in real time — a percipient could acquire information
          about a target hours or days before the outbound experimenter even reached, or selected, it. They encourage
          readers to attempt the experiment themselves, noting it &quot;seems to require little more than an open
          mind and a devil-may-care attitude to succeed, at least to a degree.&quot;
        </P>
      </DocSection>

      {/* ── Part 2: Taxonomy and History ───────────────────── */}
      <DocSection id="doc-taxonomy" number="PART II" title="A Taxonomy of Psychic Phenomena">
        <P>
          The report proposes a working taxonomy: the two dominant subdivisions of psychic phenomena (psi) are{' '}
          <E term="extrasensory perception">extrasensory perception</E> (ESP) — telepathy, clairvoyance,
          precognition/retrocognition, and animal ESP — and{' '}
          <E term="psychokinesis">psychokinesis</E> (PK), a disturbance of or interaction with a physical or
          biological system, spanning microscopic atomic disturbance through macroscopic object distortion to
          dramatic poltergeist effects. Adjacent domains not covered in the report include survival research
          (reincarnation, apparitions, mediumship) and out-of-body experiences.
        </P>
        <P>
          The scholarly study of psychic phenomena is far older than its recent popularity suggests: cave drawings at
          Lascaux and Altamira reflect ancient preoccupation with the supernatural, the Delphic Oracle was politically
          consulted by Greek city-states, and even Aristotle studied causal links in prophetic dreams. Formal,
          controlled study began only with the founding of the{' '}
          <E term="Society for Psychical Research">Society for Psychical Research</E> in London in 1882, followed
          three years later by its American counterpart, co-founded by William James. Thomas W. Stanford — brother of
          Stanford University&apos;s founder — endowed psychic research there so substantially that the university
          still maintains a &quot;Psychic Research Fellow.&quot; In 1930,{' '}
          <E term="J. B. Rhine">J. B. Rhine</E> and Louisa Rhine made Duke University the field&apos;s academic
          center, launching the Journal of Parapsychology in 1937; a Parapsychological Association formed in 1957 was
          later recognized by the American Association for the Advancement of Science. Princeton&apos;s own history
          in the field includes Upton Sinclair (whose psychic wife inspired dialogues with Einstein) and statistics
          professor Samuel Wilks, who in 1937 published recommended statistical methods for telepathy experiments.
        </P>
      </DocSection>

      {/* ── Part 3: Psychokinesis Experiments ──────────────── */}
      <DocSection id="doc-pk" number="PART III" title="Psychokinesis Experiments">
        <P>
          Jahn and Curry confined their own PK experiments to microscopic and low-level macroscopic effects, avoiding
          the highly publicized but poorly controlled macroscopic feats of figures like Uri Geller. Curry&apos;s
          junior project centered on a{' '}
          <E term="random-event generator">random-event generator</E>, based on radioactive decay, that flips a
          simulated coin 100 times per split second; in one recorded session, 17 of the first 18 groups of 100 flips
          yielded more &quot;heads&quot; than chance would predict, reverting to normal randomness the moment Curry
          ceased her effort.
        </P>
        <P>
          A dual-thermistor experiment, replicating earlier work by Gertrude Schmeidler and psychic Ingo Swann,
          balanced two sensitive thermometric devices in an electrical bridge and asked a subject to shift one
          reading relative to the other — producing apparent temperature changes of a few thousandths of a degree,
          not reliably reproducible in magnitude or direction but, the authors write, &quot;hardly ignorable,
          either.&quot; A{' '}
          <E term="Fabry-Perot interferometer">Fabry-Perot interferometer</E> experiment attempted to force its
          reflective plates apart by less than a millionth of a centimeter, shifting the central optical fringe from
          dark to light — achieved on several occasions, though not reliably. A luminous phosphor decay experiment,
          just brought to a trustworthy baseline, aimed to speed up or slow down the roughly five-minute spontaneous
          decay of a phosphorescent surface on demand.
        </P>
        <P>
          Across all these experiments, the pattern was consistent: suggestive anecdotal effects on isolated
          occasions, without routine scientific reproducibility — &quot;experiments that work well on one day work
          less well, or fail to respond at all, on the next, under apparently identical conditions.&quot; Jahn likens
          the subjective experience of a successful PK effort to biofeedback, where a display leads the experimenter
          to unconsciously select whatever mental strategy happens to be productive — comparing the challenge of
          teaching PK to that of teaching someone to create a work of art.
        </P>
      </DocSection>

      {/* ── Part 4: Poltergeist Phenomena ──────────────────── */}
      <DocSection id="doc-poltergeist" number="PART IV" title="Poltergeist Phenomena">
        <P>
          <E term="poltergeist">Poltergeist</E> effects — formally, recurrent spontaneous psychokinesis — represent
          PK at a vastly larger scale of energy transfer than the microscopic effects Jahn and Curry could test in
          their own lab. A survey of 116 documented cases dating back to 1612 found 92 associated with a specific
          individual living in the house, typically around age 15 and often suffering an emotional or neurological
          condition such as epilepsy, with a precipitating event, a period of escalating disturbance, and weeks of
          &quot;aftershocks&quot; following the main activity.
        </P>
        <P>
          A representative case from Pearisburg, Virginia (December 1976) involved a nine-year-old foster boy: two
          weeks of minor precursors (falling flower pots) escalated to fruit tumbling from a ledge, a Christmas tree
          toppling, kitchen cabinets overturning, and — most strikingly — a sewing machine completely inverted, an act
          requiring more physical strength than the boy could plausibly have exerted deliberately. University of
          Virginia Medical School researchers, called in through the local police, documented the case; the family
          eventually relocated the boy to another foster home after the disturbances recurred when he briefly
          returned to collect belongings. Such agents, the report notes, seem entirely unaware they are causing the
          activity — to them the experience resembles an epileptic seizure more than anything under conscious
          control.
        </P>
      </DocSection>

      {/* ── Part 5: Theoretical Models ──────────────────────── */}
      <DocSection id="doc-models" number="PART V" title="Theoretical Models">
        <P>
          A range of physical models have been proposed to explain psychic phenomena, none fully satisfactory. Early
          models proposed very-low-frequency electromagnetic waves (around 10 hertz, matching certain biological
          frequencies like heart and brain potentials) as a carrier — testable in principle, but practically
          difficult given the enormous wavelengths involved. Related models invoke infrasonic waves, static electric
          or geoseismic fields, or the Earth&apos;s magnetic anomalies as the medium.
        </P>
        <P>
          Thermodynamic models focus on{' '}
          <E term="entropy">entropy</E> — many PK effects (a random generator skewed toward high numbers, two
          isothermal thermistors developing a temperature difference) represent a spontaneous local reduction of
          disorder that the Second Law of Thermodynamics does not otherwise permit for an isolated system, a
          &quot;theoretically troublesome&quot; parallel the report likens to several Biblical miracles. Other models
          look to the classical wave equation&apos;s discarded &quot;advanced wave&quot; solutions as a possible
          basis for precognition, or to hyperspace theories proposing additional spatial dimensions beyond the usual
          four.
        </P>
        <P>
          The most actively explored models draw on quantum mechanics, where a system&apos;s state is not fixed until
          measured — the paradox at the heart of{' '}
          <E term="Schrödinger's Cat">Schrödinger&apos;s Cat</E>, Wigner&apos;s Friend, and the Einstein-Podolsky-Rosen
          paradox (Princeton&apos;s own Eugene Wigner is the Wigner in question). Once an experimenter is conceded to
          unavoidably influence a quantum measurement, some researchers argue, the step to a deliberate psychokinetic
          interaction becomes less unpalatable — through hidden-variable theories or analogies to quantum
          &quot;tunnelling.&quot; A separate, more skeptical model holds that no source or receiver in nature is
          truly random, and that apparent psychic communication is simply the resonant tuning of naturally biased
          systems. A more empirical proposal,{' '}
          <E term="conformance behavior">conformance behavior</E>, has been tested across subjects ranging from
          humans to goldfish, cockroaches, and seeds. The report also notes, without endorsing a mechanism, that
          people skilled at psychic tasks tend to be strongly right-brained — aesthetic and impressionistic — while
          the analytical left-brain types needed to interpret results tend to be less adept at producing the
          phenomena themselves; Targ and Puthoff reported that people with photographic memories were entirely
          unable to perform remote viewing.
        </P>
      </DocSection>

      {/* ── Part 6: Applications and Implications ──────────── */}
      <DocSection id="doc-applications" number="PART VI" title="Applications and Implications">
        <P>
          If psychic research matures from observation into reliable practice, applications could extend from
          gifted psychics already consulted by police to locate missing persons, to individual self-regulation of
          body functions some researchers already suspect involves a form of unconscious &quot;self-PK.&quot; The
          report identifies five levels of broader challenge the field raises: whether the phenomena, if valid,
          represent new physical forces or a modification of physical law itself; the personal discipline required to
          be rigorous without being closed-minded; the philosophical question of whether this can be called a science
          at all, given its apparent resistance to reproducibility; the individual worldview it implies — echoed by
          astronaut{' '}
          <E term="Edgar Mitchell">Edgar Mitchell</E>, who asked whether everyday thought subtly influences reality
          for everyone, or only a rare few; and finally the social and political reaction of others, which the
          report suggests currently ranges from incredulity to a small but possibly growing fascination.
        </P>
        <P>
          That prevailing skepticism, Jahn notes, keeps funding for psychic research minuscule — less per year
          nationally than the cost of a single tank or fighter aircraft — and researchers in the field a somewhat
          defensive, sometimes professionally persecuted group.
        </P>
      </DocSection>

      {/* ── Part 7: Reflections ─────────────────────────────── */}
      <DocSection id="doc-reflections" number="PART VII" title="Reflections">
        <P>
          Jahn closes without advocacy beyond urging open-mindedness. He quotes Einstein&apos;s 1932 preface to Upton
          Sinclair&apos;s <span className="italic">Mental Radio</span>, conceding the telepathic results described
          there stood &quot;far beyond those which a mature investigator holds to be thinkable,&quot; while
          affirming Sinclair&apos;s good faith. He draws a historical parallel to electricity and magnetism — known
          only as amber-rubbing and lodestones in the age of the Delphic Oracle, centuries before Maxwell&apos;s
          equations — and notes that Princeton&apos;s own Joseph Henry was once criticized by peers for experiments
          that violated the scientific common sense of his day.
        </P>
        <div className="border border-accent/30 cyber-chamfer p-5 my-6">
          <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-3">Quoted — Robert F. Goheen, President Emeritus of Princeton</p>
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic">
            &quot;There is one place above all where it is (or should be) possible for men to think and act as their
            own reasoned judgment and best conscience dictate — namely, a university... The universities... are
            committed to freedom for the individual, the dignity of the human person, and tolerance toward dissent
            within broad and agreed upon limits.&quot;
          </blockquote>
        </div>
        <P>
          Jahn and Curry close simply hoping readers have enjoyed &quot;sharing our own brief exposure to the psychic
          tapestry,&quot; and that some may wish to hold the cloth themselves.
        </P>
      </DocSection>
    </>
  );
}
