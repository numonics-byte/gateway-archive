import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',          label: 'Summary' },
  { id: 'doc-events',         label: 'I. Human Behavior Manipulation' },
  { id: 'doc-parapsychology', label: 'II. Parapsychology & the Apport Technique' },
  { id: 'doc-mindaltering',   label: 'III–V. Hypnosis, Propaganda & Drugs' },
  { id: 'doc-sensory',        label: 'VI–VIII. Light, Odor & Sound Weapons' },
  { id: 'doc-electromagnetic', label: 'X. Electromagnetic Effects' },
];

export const entities: Record<string, Entity> = {
  'Vladimir Bukovsky': {
    title: 'Vladimir Bukovsky',
    definition: 'A Soviet dissident who, by age 27, had spent six years in prisons, asylums, and labor camps for organizing an unofficial exhibition of abstract art. Declared insane by the Serbsky Psychiatric Institute and confined to a Leningrad prison asylum, Bukovsky described three forms of "medical punishment" used against inmates there — including forced injections that left some recipients permanently incapacitated.',
    crossRef: 'Part I, Section II — Events in the Soviet Union',
    category: 'person',
  },
  'Andrei Sakharov': {
    title: 'Andrei D. Sakharov',
    definition: 'Physicist and civil-rights campaigner who sent a thousand-word telegram to the Soviet Minister of the Interior charging that drugs were being forcibly administered to political prisoners to change their beliefs, and that medicine was being turned into "a servile handmaiden of the regime\'s correction agencies."',
    crossRef: 'Part I, Section II — Events in the Soviet Union',
    category: 'person',
  },
  'Apport Technique': {
    title: 'The Apport Technique',
    definition: 'A claimed parapsychological ability to mentally dematerialize and transport a physical object across space, then rematerialize it — theorized by some Cold War-era analysts as a way to abduct enemy documents from denied territory without detection. The report traces the claim to 19th-century accounts by scientists including Sir William Crookes, and notes contemporary speculation that a refined version could disable equipment or "cause the instant death of any US official, at a distance."',
    crossRef: 'Part II, Section III — The Apport Technique',
    category: 'concept',
  },
  'Sir William Crookes': {
    title: 'Sir William Crookes',
    definition: 'British chemist and physicist, discoverer of the element thallium and former president of the British Association for the Advancement of Science, cited here for his own published first-person account of witnessing a materialized "hand" during a 19th-century séance — cool and lifelike to the touch before dissolving from his grasp. His testimony is used to establish the apport phenomenon\'s claimed historical pedigree.',
    crossRef: 'Part II, Section III — The Apport Technique',
    category: 'person',
  },
  'Aminazine': {
    title: 'Aminazine',
    definition: 'The Soviet brand name for chlorpromazine, a phenothiazine tranquilizer. The report identifies it, alongside haloperidol, as the drug most frequently named in accounts of forced psychiatric "treatment" of Soviet political prisoners — with roughly 127 Soviet references on aminazine specifically, most describing standard clinical use, but some — per Part I — used for what the report calls "more sinister purposes."',
    crossRef: 'Part V — Psychopharmacology in the USSR',
    category: 'concept',
  },
  'photic-flicker': {
    title: 'Photic-Flicker',
    definition: 'Rhythmic or flashing light, studied for its ability to disrupt consciousness, provoke hypnotic-like states, or produce visual illusions and disorientation — effects tied to the brain\'s alpha rhythm near 10 Hz. The report links a wave of real nocturnal incidents, in which Soviet naval and aircrews shined intense flashing lights at US and NATO pilots and lookouts, to a documented period of active Soviet laboratory research into the same effect.',
    crossRef: 'Part VI — Light and Color as a Means of Altering Human Behavior',
    category: 'concept',
  },
  'Edgar D. Mitchell': {
    title: 'Edgar D. Mitchell',
    definition: 'Apollo 14 astronaut and the sixth person to walk on the Moon, quoted at the close of the parapsychology section defending ESP research as scientifically serious: "the probabilities have been established beyond chance... I happen to be curious about it, and thus have been pursuing it for many years."',
    crossRef: 'Part II, Section V — Summary and Military Implications',
    category: 'person',
  },
  'superhigh frequency radiation': {
    title: 'Superhigh Frequency (SHF) Radiation',
    definition: 'Microwave-range radiation (1mm–1m wavelength) whose central-nervous-system effects were extensively studied by Soviet researcher Yu. Kholodov. Reported animal effects ranged from altered sensitivity to sound, light, and smell at low intensity to, at high intensity, brain-cell destruction, convulsions, and death — with one cited experiment describing a monkey\'s exposure producing sleep, then waking with dilated pupils, heavy salivation, and convulsions.',
    crossRef: 'Part X — Electromagnetic Effects',
    category: 'concept',
  },
  'infrasound': {
    title: 'Infrasound',
    definition: 'Sound below the range of human hearing (roughly 1–20 Hz), reported to impair tracking ability, reaction time, and vision, and — at high intensity — to produce sensations of panic and pressure. One cited case attributed "epileptic fits" and death in rats to a stray industrial ventilator emitting 7 Hz infrasound; a separate study associated infrasonic disturbances with elevated automobile-accident and school-absenteeism rates.',
    crossRef: 'Part VIII, Section II — Infrasonic Noise',
    category: 'concept',
  },
  'Yu. Kholodov': {
    title: 'Yu. Kholodov',
    definition: 'A leading Soviet researcher on electromagnetic and magnetic effects on the central nervous system, author of a compiled review with 455 bibliographic entries. His animal research on superhigh-frequency radiation is the report\'s primary evidentiary basis for concluding the Soviets held substantial knowledge, even if unpublished, of how such radiation might affect humans.',
    crossRef: 'Part X — Electromagnetic Effects',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">SECRET</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00788R001300020001-6</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Controlled Offensive Behavior — USSR
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Author', 'Capt. John D. LaMothe, Medical Service Corps'], ['Date', 'July 1972'], ['Prepared by', 'U.S. Army Medical Intelligence Office, OTSG'], ['Reference', 'ST-CS-01-169-72']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          The broadest and darkest survey in the archive. Where most STAR GATE-era documents examine remote viewing
          as an intelligence-collection tool, this 1972 Army Medical Intelligence report surveys the full range of
          Soviet research into influencing or incapacitating the human mind — drugs, hypnosis, propaganda,
          sensory manipulation, electromagnetic radiation, and parapsychology alike — treating all of them as
          potential weapons requiring US countermeasures.
        </P>
        <P>
          Its own summary is candid about the stakes: an &quot;ever increasing amount&quot; of underground Soviet
          reporting suggested authoritarian institutions were practicing forced &quot;mental reorientation&quot; of
          political dissidents through confinement, isolation, and drugs. Separately, it estimates the USSR
          operated twenty or more parapsychology research centers with an annual budget near $21 million — a
          &quot;head start,&quot; the report concludes, that likely put Soviet knowledge in this field ahead of the
          United States.
        </P>
      </section>

      {/* ── Part 1: Human Behavior Manipulation ───────────── */}
      <DocSection id="doc-events" number="PART I" title="Human Behavior Manipulation">
        <P>
          The report opens by benchmarking against a contemporary, non-Soviet case: 1971–72 accounts of detainee
          treatment in Northern Ireland, where prisoners were held standing against a wall for up to 43.5 hours,
          hooded, subjected to masking noise, and cycled through disorienting transport and sleep deprivation —
          one detainee lost eight pounds in seven days on a bread-and-water diet. A 40-year-old released prisoner
          reportedly emerged showing symptoms of senility inconsistent with his health at the time of arrest. The
          report cites this not as Soviet-authored, but as a real-world proof of concept for the same techniques
          discussed throughout the rest of the document.
        </P>
        <P>
          Its Soviet case study is more extensive: the use of psychiatric detention to silence political dissenters,
          documented through Soviet underground (&quot;samizdat&quot;) sources. It centers on{' '}
          <E term="Vladimir Bukovsky">Vladimir Bukovsky</E>, declared insane and confined after organizing an
          unauthorized art exhibition, and on a telegram from{' '}
          <E term="Andrei Sakharov">Andrei Sakharov</E> alleging drugs were forcibly used to change prisoners&apos;
          political beliefs. The report treats this as directly relevant to its subject: techniques being refined on
          Soviet citizens, it warns, could plausibly be extended to foreign nationals as expertise grows. A
          preliminary survey of possible weaponizable stimuli follows — temperature, atmospheric composition, odor,
          light, and sound — flagging light and sound in particular for deeper treatment later in the report, since
          both are field-deployable and show documented signs of active Soviet research.
        </P>
      </DocSection>

      {/* ── Part 2: Parapsychology & the Apport Technique ─── */}
      <DocSection id="doc-parapsychology" number="PART II" title="Parapsychology & the Apport Technique">
        <P>
          Most striking here is the report&apos;s treatment of the{' '}
          <E term="Apport Technique">apport technique</E> — the claimed ability to dematerialize an object,
          transport it across space, and rematerialize it elsewhere. The report is explicit that this is not an
          endorsement of the phenomenon&apos;s existence, but presents its claimed historical pedigree at length,
          including <E term="Sir William Crookes">Sir William Crookes</E>&apos;s own 19th-century account of grasping a
          materialized hand that &quot;gradually seemed to resolve itself into vapor&quot; in his grip. It then walks
          through the speculative military logic step by step: if organic matter can become intangible &quot;force-matter&quot;
          and travel through solid walls, some analysts argued, a sufficiently refined technique could in principle
          disable equipment, steal documents from denied territory undetected, or — the report states directly —
          &quot;produce instant death in military and civilian officials.&quot;
        </P>
        <P>
          The broader ESP and psychokinesis discussion leans heavily on Ostrander and Schroeder&apos;s reporting and
          parapsychologist Milan Ryzl, both cited for the claim that Soviet military, KGB, and paramilitary agencies
          disproportionately fund psi research compared to civilian applications — including, per Ryzl, an early
          program attempting to use telepathic suggestion to covertly re-educate &quot;antisocial elements&quot; into
          officially approved political attitudes. The section&apos;s own strategic threat assessment lists four
          hypothetical Soviet capabilities — reading classified US documents at a distance, remotely influencing the
          thoughts of US leaders, disabling equipment remotely, and causing remote &quot;instant death&quot; — while
          conceding most &quot;sound like science fiction&quot; and judging remote influence of leaders&apos; thinking the
          single most plausible of the four within the period surveyed. The section closes, notably, not with a
          skeptic&apos;s rebuttal but with a real endorsement: Apollo 14 astronaut{' '}
          <E term="Edgar D. Mitchell">Edgar Mitchell</E>, quoted defending ESP research as scientifically serious
          and a matter of established probability, not belief.
        </P>
      </DocSection>

      {/* ── Part 3: Hypnosis, Propaganda & Drugs ──────────── */}
      <DocSection id="doc-mindaltering" number="PARTS III–V" title="Hypnosis, Propaganda & Drugs">
        <P>
          Three further parts survey more conventional influence techniques. Soviet hypnosis and suggestion research
          is examined for both medical and covert applications; a section on propaganda and mass media addresses
          large-scale persuasion; and a dedicated part on Soviet psychopharmacology catalogs the era&apos;s major
          psychotropic agents — LSD-25 and mescaline, used to model psychosis for diagnostic study; harmine and
          Indian cannabis; and antidepressants like iprazide and imizine — alongside their clinical Soviet
          applications. Central to this part is <E term="Aminazine">aminazine</E>, the Soviet chlorpromazine, backed
          by roughly 127 Soviet clinical references — the overwhelming majority describing standard psychiatric use,
          but explicitly tied by the report to the same forced-treatment cases described in Part I.
        </P>
      </DocSection>

      {/* ── Part 4: Light, Odor & Sound Weapons ───────────── */}
      <DocSection id="doc-sensory" number="PARTS VI–VIII" title="Light, Odor & Sound Weapons">
        <P>
          The light and color section pairs real incident reports with laboratory theory. Between 1968 and 1970, US
          and NATO surveillance aircrews and naval lookouts repeatedly reported being deliberately blinded by intense
          or flashing lights from Soviet vessels and long-range aircraft — an F-102 pilot tracked and flashed up to
          twenty times by a hand-held light from a BEAR bomber&apos;s tail blister; a night officer aboard HMS Valiant
          temporarily blinded by a bright blue light from a Soviet destroyer. The report connects these incidents
          directly to a documented period of active Soviet laboratory research into{' '}
          <E term="photic-flicker">photic-flicker</E> — rhythmic light&apos;s ability to disrupt consciousness near the
          brain&apos;s 10 Hz alpha rhythm, including University of Leningrad work showing that flickering each eye at a
          different rate produces measurable brain-wave changes and an intensely unpleasant sensation of rotation.
        </P>
        <P>
          Odor research is treated more briefly — the seven identified primary odors (camphoraceous, musky, floral,
          minty, pungent, putrid, ethereal) can in combination reproduce any known smell, and sufficiently foul or
          surprising odors were judged capable of eliciting behavioral change in field conditions. Sound receives
          fuller treatment, including a Soviet &quot;Zone of Health&quot; rest facility in Baku that treated 142,000
          visitors in 1969 with therapies built around escaping excessive urban noise, and dedicated research into{' '}
          <E term="infrasound">infrasound</E> — sub-audible frequencies reported to impair reaction time and vision,
          provoke sensations of panic, and, per one Soviet study attributed to a stray industrial ventilator emitting
          7 Hz, to cause seizures and death in nearby rats.
        </P>
      </DocSection>

      {/* ── Part 5: Electromagnetic Effects ────────────────── */}
      <DocSection id="doc-electromagnetic" number="PART X" title="Electromagnetic Effects">
        <P>
          The report&apos;s final major weapons category concerns electromagnetic radiation. An anecdote opens the
          section: engineers testing a high-voltage electromagnetic-pulse generator watched a bird fly under the
          array mid-pulse, fall from the sky, flop disoriented for about a minute, then fully recover and fly off —
          an incident that itself prompted a literature search into human safety risk, turning up reports of aircrew
          &quot;slowing of thought processes&quot; after lightning strikes of comparable field strength.
        </P>
        <P>
          The more systematic evidence comes from Soviet researcher{' '}
          <E term="Yu. Kholodov">Yu. Kholodov</E>, whose compiled review of{' '}
          <E term="superhigh frequency radiation">superhigh-frequency (SHF) radiation</E> effects — backed by 455
          bibliographic entries — documents a dose-dependent range of central-nervous-system effects in animals,
          from altered sensory sensitivity at low exposure to brain-cell destruction, convulsions, and death at high
          exposure and duration. One cited experiment describes a monkey&apos;s head exposed to a strong SHF field first
          drifting toward sleep, then waking with dilated pupils, heavy salivation, and convulsions — recovering fully
          within a day if the radiation was stopped in time, but dying within minutes if it was not. Though the
          Soviet literature reviewed stops short of describing deliberate human applications, the report&apos;s
          assessment is unambiguous: the depth of the animal research alone indicates the Soviets possessed
          substantial, if unpublished, knowledge of how such radiation would affect a human target.
        </P>
      </DocSection>
    </>
  );
}
