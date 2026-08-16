import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',          label: 'Summary' },
  { id: 'doc-telepathy',      label: 'I. The History & Theory of Telepathy' },
  { id: 'doc-behaviormod',    label: 'II. Telepathic Behavior Modification' },
  { id: 'doc-generator',      label: 'III. Psychotronic Generator Research' },
  { id: 'doc-psychokinesis',  label: 'IV. Psychokinesis Research' },
  { id: 'doc-outofbody',      label: 'V. Out-of-the-Body Phenomena' },
  { id: 'doc-assessment',     label: 'VI. Conclusions, Trends & Forecasts' },
];

export const entities: Record<string, Entity> = {
  'Biocommunication': {
    title: 'Biocommunication',
    definition: 'The Soviet umbrella term preferred over "parapsychology," "psi phenomena," or "ESP." Splits into two categories: bioinformation (telepathy, precognition, clairvoyance — paranormal information transfer) and bioenergetics (dowsing, psychokinesis — paranormal influence on matter).',
    crossRef: 'Section I — Background',
    category: 'concept',
  },
  'Bioenergetics': {
    title: 'Bioenergetics',
    definition: 'The Soviet term for the "energetics" half of biocommunication — the ability to influence physical or biological systems by mental volition through an unknown mechanism, encompassing psychokinesis, biological locator/dowsing techniques, and electromagnetic-field therapy.',
    crossRef: 'Section I — Background',
    category: 'concept',
  },
  'L.L. Vasilev': {
    title: 'L.L. Vasilev',
    definition: 'Professor of Physiology at the University of Leningrad, holder of the Order of Lenin, and the researcher most responsible for parapsychology\'s post-Stalin rehabilitation in the USSR. A former student of V.M. Bekhterev, Vasilev conducted telepathic-suggestion experiments from 1920–1943 and published two influential books — "Mysterious Phenomena of the Human Psyche" (1959) and "Experiments in Mental Suggestion" (1962, published in English in 1963) — that first brought Soviet parapsychology to Western attention.',
    crossRef: 'Section III, Part A — Classical Theories and Experiments',
    category: 'person',
  },
  'V.M. Bekhterev': {
    title: 'V.M. Bekhterev',
    definition: 'A Leningrad University researcher who, in the 1920s and 1930s, collaborated with circus performer V.L. Durov to test mental-suggestion "telepathy" in trained dogs. Bekhterev originally sought to prove the effect was carried by electromagnetic radiation, but by 1937 concluded no known form of EMR could account for it — a question the report says remains formally unresolved in Soviet theory to this day.',
    crossRef: 'Section II — Telepathy in Animals',
    category: 'person',
  },
  'Nina Kulagina': {
    title: 'Nina Kulagina',
    definition: 'A Moscow psychic subject studied extensively by Drs. Sergeyev and Adamenko, reported able to start, stop, and alter the beat rate of an excised frog heart preparation at a distance, imprint images on sealed unexposed film, and move objects weighing up to a pound. Testing reportedly produced severe physiological stress — elevated pulse and breathing, spinal pain, dizziness, nausea, and measurable weight loss.',
    crossRef: 'Part III — Psychokinesis Research',
    category: 'person',
  },
  'Psychotronic Generator': {
    title: 'Psychotronic Generator (Pavlita Generator)',
    definition: 'A class of small metal devices developed by Czech inventor Robert Pavlita, said to absorb and store human biological energy through direct contact or focused mental concentration, then release it to produce effects otherwise associated with gifted psychics. Reported effects ranged from precipitating pollutants out of water to inducing hibernation-like states in snails and killing flies placed in a generator\'s gap — leading the report to flag the devices\' potential as an antipersonnel weapon.',
    crossRef: 'Part II — Psychotronic Generator Research',
    category: 'concept',
  },
  '"mentions"': {
    title: '"Mentions" (Kahuda\'s Theory)',
    definition: 'A theoretical particle proposed by Czech researcher Frantisek Kahuda of Charles University, Prague, extending a 1966 Soviet "neutrino hypothesis" of telepathy. Kahuda held that mental processes are carried by particles capable of moving at the speed of light without violating relativity, and derived a formula for total "mention energy" from indirect laboratory measurements — concluding electromagnetic processes alone cannot account for psychic phenomena.',
    crossRef: 'Section III, Part B — Current Soviet/Czech Theories',
    category: 'concept',
  },
  'G.A. Sergeyev': {
    title: 'Dr. G.A. Sergeyev',
    definition: 'A researcher at Leningrad\'s A.A. Uktomskii Physiological Institute who developed classified instrumentation to detect the "bioplasmic field," reportedly measuring fields of 10,000 volts/centimeter around a target object during psychokinesis demonstrations. Sergeyev\'s primary research subject was Nina Kulagina, whose measured body-energy readings he found to be half that of a non-psychic individual — leading him to theorize she draws in ambient energy before discharging it at a target.',
    crossRef: 'Part III — Psychokinesis Research',
    category: 'person',
  },
  'Remote Viewing': {
    title: 'Remote Viewing',
    definition: 'The ability to mentally project to a remote or inaccessible location and report on its details — distinguished in this report from telepathy by its vivid, first-person sense of "leaving the body" rather than piecing together fragmentary information. The report notes SRI\'s (unpublicized) remote-viewing research program and the widely publicized psychic claims of Uri Geller and Ingo Swann, but found no evidence the Soviets were pursuing a comparable research effort of their own.',
    crossRef: 'Section I — Remote Viewing',
    category: 'concept',
  },
  'Apport Technique': {
    title: 'Apport Technique',
    definition: 'A claimed form of astral projection in which a psychic subject mentally transports an "energy body" to a remote site, dematerializes an object there, and rematerializes it back at the point of origin. The report found no verified demonstration of the technique and no Soviet or Eastern-bloc research on it — flagging that gap itself as a significant intelligence blind spot.',
    crossRef: 'Section II — The Apport Technique',
    category: 'concept',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">CONFIDENTIAL</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00792R000600350001-3</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Soviet and Czechoslovakian Parapsychology Research
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Authors', 'Louis F. Maire III & Maj. J.D. LaMothe, MSC'], ['Date', 'September 1975'], ['Prepared by', 'U.S. Army Medical Intelligence & Information Agency for DIA'], ['Reference', 'DST-1810S-387-75']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          Drawing on 25 years of intelligence reports, technical journals, books, and personal communications, this
          DIA survey documents Soviet and Czechoslovakian claims to have demonstrated extrasensory perception,
          telepathy, and psychokinesis under rigorously controlled laboratory conditions. The Soviets reject the
          Western term ESP in favor of <E term="Biocommunication">biocommunication</E>, split into{' '}
          <span className="text-foreground">bioinformation</span> (telepathy and precognition) and{' '}
          <E term="Bioenergetics">bioenergetics</E> (dowsing and psychokinesis).
        </P>
        <P>
          The report frames Soviet and Czech scientists as arguing they need not apologize to materialist orthodoxy:
          conventional science, they note, still lacks a satisfactory neurophysiological account of memory, and
          contemporary physics is already full of &quot;bizarre&quot; ideas — advanced potential, quantum tunneling,
          and hypothetical faster-than-light tachyons. If &quot;hard&quot; science can accommodate those, they argue, it no
          longer has a principled basis for denying the possibility of paranormal phenomena outright.
        </P>
      </section>

      {/* ── Part I: History & Theory of Telepathy ─────────── */}
      <DocSection id="doc-telepathy" number="PART I" title="The History & Theory of Telepathy">
        <P>
          Soviet parapsychology has an uneven political history. Studied openly in the 1920s and 30s by researchers
          including <E term="V.M. Bekhterev">V.M. Bekhterev</E> — whose collaboration with circus trainer V.L. Durov
          reported trained dogs solving arithmetic and retrieving objects on mental suggestion alone, though results
          collapsed when anyone but the trainer attempted it — the field was banned outright after 1937 and treated
          under Stalin as an attempt to undermine materialist doctrine. It reemerged only in the late 1950s, spurred
          by rumors (probably mythical) that the US submarine Nautilus had run ship-to-shore telepathy trials. One
          claimed Soviet precursor experiment, described by researcher Pavel Naumov, involved a mother rabbit wired
          with brain electrodes on shore while her offspring were killed one by one aboard a submerged submarine —
          the mother&apos;s brain allegedly registering a detectable reaction at each death. Soviet authorities allowed{' '}
          <E term="L.L. Vasilev">L.L. Vasilev</E> to publish his decades-old research shortly after, and his 1963
          English translation triggered a wave of international interest.
        </P>
        <P>
          A 1965 Academy of Sciences meeting crystallized the Soviet research agenda around three questions: is
          telepathy possible in principle, does it contradict natural law, and do observed facts fit an
          electromagnetic explanation? None of the competing hypotheses advanced to answer them ever stuck cleanly.
          The electromagnetic hypothesis struggled because shielding experiments failed to block reception and signal
          strength did not fall off with distance as physics would predict. Vasilev himself proposed a gravitational
          hypothesis, and later a role for neutrinos — particles with no charge, moving near light speed, able to
          pass through immense mass — as a possible telepathic carrier. Researcher I.M. Kogan ran the first
          post-Vasilev experiments, finding transmission rates between 0.005 and 0.1 bits/second, falling off with
          distance, and best with short messages under a minute. Czech physicist{' '}
          <E term='"mentions"'>Frantisek Kahuda</E> later proposed telepathy is carried by particles he called
          &quot;mentions,&quot; capable of light-speed travel, deriving a formal energy equation from indirect
          laboratory measurement — a striking illustration of how far Eastern-bloc theorists were willing to reach
          for a physical mechanism rather than treat the phenomenon as inherently unexplainable.
        </P>
        <P>
          By contrast, animal telepathy research had by the 1970s largely given way to biophysical energy-transfer
          studies: University of Novosibirsk work found damaged cells emit a detectable ultraviolet radiation pattern
          transmissible to healthy control cultures, and Czech researcher Jiri Bradna demonstrated &quot;myotransfer&quot; —
          contactless stimulus transfer between isolated frog-muscle preparations — mediated by very-high-frequency
          energy that could be blocked by ferrous metal and deflected by magnets.
        </P>
      </DocSection>

      {/* ── Part II: Telepathic Behavior Modification ─────── */}
      <DocSection id="doc-behaviormod" number="PART II" title="Telepathic Behavior Modification">
        <P>
          Unusually, applied research preceded basic research in this field — one reason, the report notes, telepathy
          is still called a &quot;phenomenon&quot; rather than an established mechanism. From 1920–1943,{' '}
          <E term="L.L. Vasilev">Vasilev</E> ran experiments telepathically suggesting muscle movements and visual
          images to hypnotized and non-hypnotized subjects, concluding hypnosis produced the most reliable results.
          A Naumov-Sergeyev-Pavlova research team later correlated telepathically transmitted negative emotions with
          measurable EEG changes — a shift toward slow, &quot;tired-brain&quot; delta and theta waves that normalized
          within one to three minutes once positive emotions were transmitted. Separately, Sverdlovsk researchers
          reported white-blood-cell counts rising by 1,500 after suggested positive emotion and falling by 1,600
          after suggested negative emotion — a result the report treats as evidence that telepathically imposed
          emotional states could measurably shift human physiology, for better or worse.
        </P>
        <P>
          The report is blunt about the implication: Polish researcher Stefan Manczarski predicted telepathy would
          become a new vehicle for propaganda, and Western analysts had already raised concerns about subliminal
          techniques targeting nuclear-missile-silo personnel. Soviet research, it concludes, is chiefly oriented
          toward reproducing and amplifying the phenomenon well enough to make deliberate control feasible — with
          control and manipulation of human consciousness treated as a primary, not incidental, research goal.
        </P>
      </DocSection>

      {/* ── Part III: Psychotronic Generator Research ─────── */}
      <DocSection id="doc-generator" number="PART III" title="Psychotronic Generator Research">
        <P>
          <E term="Psychotronic Generator">Psychotronic generators</E>, developed over three decades by Czech
          inventor Robert Pavlita, are small metal devices claimed to draw in and store human biological energy —
          charged by touching them to the temporal region of the head, or simply by focused visual concentration from
          a distance — then release stored effects resembling magnetism, heat, or luminous radiation, despite being
          none of those things. Czechoslovakian Academy of Sciences commissions reportedly ruled out static
          electricity, air currents, and temperature as explanations, and found the effect passed unimpeded through
          glass, water, wood, and metal.
        </P>
        <P>
          Reported effects escalate from mundane to alarming: irradiated seeds said to grow faster, industrial
          pollutants said to precipitate out of water, snails placed near a generator lapsing into
          hibernation-like states, and flies placed in the gap of a circular generator dying instantly. Pavlita
          reportedly aimed a generator at his own daughter&apos;s head from several yards away and recorded a changed
          EEG, dizziness, and disrupted equilibrium. The report draws the logical — and unsettling — conclusion
          directly: if the devices can already kill insects, a scaled-up or refined version could plausibly become
          an antipersonnel weapon, one that would be silent, require no power source beyond a human operator, and be
          difficult to defend against since it appears to penetrate ordinary insulation.
        </P>
      </DocSection>

      {/* ── Part IV: Psychokinesis Research ────────────────── */}
      <DocSection id="doc-psychokinesis" number="PART IV" title="Psychokinesis Research">
        <P>
          Soviet and Czech approaches to psychokinesis (PK) diverge sharply. Soviet researchers concentrate on a
          small number of highly &quot;gifted&quot; individuals, searching for the physiological traits that set them
          apart; Czech researchers work from the belief that most people can produce PK effects without special
          ability. Leading Soviet theorists — Viktor Adamenko, Viktor Inyushin, and{' '}
          <E term="G.A. Sergeyev">Genady Sergeyev</E> — converged on the idea of &quot;bioplasma,&quot; a proposed
          fifth state of matter carrying the biological energy behind PK. Sergeyev&apos;s classified detector
          instrumentation reportedly measured fields of 10,000 volts/centimeter around objects during PK
          demonstrations, concentrated most strongly around a subject&apos;s head. Adamenko separately proposed that
          living tissue behaves like an &quot;electret&quot; — a body that sustains its own external electrical field —
          while biophysicist Aleksandr Dubrov proposed &quot;biogravitation,&quot; in which molecular conformational
          shifts inside cells generate genuine, if minute, gravitational forces.
        </P>
        <P>
          The report&apos;s two central case studies are its most vivid. Psychic Boris Ermolayev was reported, in
          1973–74 Moscow University trials, to suspend objects in midair after pressing them briefly between his
          hands, under conditions Soviet scientists described as excluding strings or mechanical aids. And{' '}
          <E term="Nina Kulagina">Nina Kulagina</E>, studied intensively by Sergeyev and Adamenko, was reported able
          to start, stop, and alter the beat of an excised frog heart from several feet away, imprint images on
          sealed unexposed film, and move objects up to a pound in weight — at a considerable physiological cost:
          elevated pulse and respiration, spinal pain, a metallic taste, dizziness, nausea, and measurable weight
          loss within an hour of testing. Sergeyev measured her ambient body energy at half that of a non-psychic
          person, leading him to theorize she absorbs energy before discharging it toward a target — and the report
          notes her ability was strongly mood-dependent, requiring more effort in a skeptical or hostile testing
          atmosphere.
        </P>
      </DocSection>

      {/* ── Part V: Out-of-the-Body Phenomena ──────────────── */}
      <DocSection id="doc-outofbody" number="PART V" title="Out-of-the-Body Phenomena">
        <P>
          <E term="Remote Viewing">Remote viewing</E> — described here as a vivid, first-person sense of leaving
          one&apos;s body to observe a distant location, distinct from telepathy&apos;s piecemeal information transfer — was
          under active, unpublicized study at Stanford Research Institute using randomly selected map coordinates
          under double-blind conditions, with SRI reporting results in some categories exceeding chance correlation.
          The report notes Soviet awareness of related Western claims — Uri Geller had reportedly been invited to
          the USSR for testing, and Ingo Swann&apos;s work was widely covered in the US press — but found the Soviets had
          published almost nothing of their own on the subject, beyond a pair of secondhand 1970–72 reports (one from
          Ostrander and Schroeder, one from a US tabloid) alleging Soviet astral-projection research on yogis with no
          corroborating detail.
        </P>
        <P>
          The <E term="Apport Technique">apport technique</E> — transporting an &quot;energy body&quot; to dematerialize
          and retrieve a remote object — fares even worse evidentially: the report found no definitive verification
          of the ability anywhere, US or foreign, and no Soviet or Eastern-bloc research on it at all. It calls that
          absence itself a significant intelligence gap, since silence could mean genuine disinterest or a
          well-concealed classified program.
        </P>
      </DocSection>

      {/* ── Part VI: Conclusions, Trends & Forecasts ──────── */}
      <DocSection id="doc-assessment" number="PART VI" title="Conclusions, Trends & Forecasts">
        <P>
          The report&apos;s own analytical judgment is that Soviet and Czech researchers have already accepted the
          reality of these phenomena and are focused on building a unified physical theory of the underlying energy
          — an emphasis on energetics the report credits with pushing Soviet science toward treating the human being
          as an integrated whole rather than a collection of separate systems. It draws its sharpest warning from the
          juxtaposition of Pavlita&apos;s insect-killing generators with Kulagina&apos;s reported ability to stop a living
          heart: if a frog heart can be started and stopped by biological energy, the report reasons, the same
          mechanism could in principle be turned on a human being, and the same devices sold as therapeutic could as
          easily become weapons.
        </P>
        <P>
          On methodology, the report is candid that Soviet parapsychology faces the identical problem as its Western
          counterpart — unstable phenomena with a low rate of controlled reproducibility, a weakness domestic critics
          have seized on to allege inadequate controls against fraud. Even so, it forecasts continued Soviet emphasis
          on the field over the following 15 years, moving from instrumentation development toward computer-assisted
          modeling of biological energy interactions, and specifically flags Soviet leadership in{' '}
          <span className="text-foreground">inferential measurement and complex systems modeling (IMCSM)</span> — a
          technique suited to systems with many interacting, partly unobservable variables — as a method that could
          meaningfully raise the odds of a genuine Soviet breakthrough. A closing section on intelligence gaps was
          withheld from release in full; the source document notes one page there remains exempt from disclosure.
        </P>
      </DocSection>
    </>
  );
}
