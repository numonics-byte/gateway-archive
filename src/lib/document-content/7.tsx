import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'Objective and Executive Summary' },
  { id: 'doc-history',    label: '1. Historical Background' },
  { id: 'doc-framework',  label: '2. The Research Plan Framework' },
  { id: 'doc-rationale',  label: '3. Anomalous Cognition and Perturbation' },
  { id: 'doc-integration', label: '4. Integration with Broader Science' },
  { id: 'doc-recommendations', label: '5. Recommendations and Foreign Assessment' },
  { id: 'doc-glossary',   label: '6. Glossary Highlights' },
];

export const entities: Record<string, Entity> = {
  'Edwin C. May': {
    title: 'Edwin C. May, Ph.D.',
    definition: 'Co-author of this research plan alongside Wanda L. W. Luke, and director of SAIC\'s Cognitive Sciences Program — the successor to SRI International\'s program following USAMRDC funding decisions in the early 1990s.',
    crossRef: 'Authors',
    category: 'person',
  },
  'anomalous cognition': {
    title: 'Anomalous Cognition (AC)',
    definition: 'A form of information transfer in which all known sensorial stimuli are absent — encompassing what parapsychological literature calls ESP, telepathy, clairvoyance, and precognition. The earlier SRI program was able to verify AC\'s existence; this plan aims to improve the quality and reliability of AC data.',
    crossRef: 'Executive Summary',
    category: 'concept',
  },
  'anomalous perturbation': {
    title: 'Anomalous Perturbation (AP)',
    definition: 'The perturbation of matter in which all known physical interactions are absent — encompassing psychokinesis, teleportation, levitation, and materialization. Defined negatively: what remains after every known source of perturbation has been eliminated. Unlike AC, the earlier program was unable to verify its existence.',
    crossRef: 'Part 3 — Anomalous Cognition and Perturbation',
    category: 'concept',
  },
  'Decision Augmentation Theory': {
    title: 'Decision Augmentation Theory',
    definition: 'A heuristic model suggesting that apparent micro-scale psychokinetic effects on random number generators are actually a form of anomalous cognition, not anomalous perturbation — the operator unconsciously perceives and selects favorable moments to act, rather than physically influencing the hardware.',
    crossRef: 'Part 3 — Anomalous Perturbation',
    category: 'concept',
  },
  'entropy': {
    title: 'Entropy (as a Target Property)',
    definition: 'The most promising single physical characteristic identified for target selection research — a measure of the information inherent in a target, theorized to correlate with how readily it can be perceived through anomalous cognition.',
    crossRef: 'Part 2 — The Research Plan Framework',
    category: 'physics',
  },
  'Cognitive Sciences Program': {
    title: 'Cognitive Sciences Program (CSP)',
    definition: 'SAIC\'s research effort proposing this plan — successor to SRI International\'s cognitive sciences program, intended to integrate with the broader academic and national-laboratory research community rather than operate in isolation.',
    crossRef: 'Part 4 — Integration with Broader Science',
    category: 'concept',
  },
  'macro-AP and micro-AP': {
    title: 'Macro-AP and Micro-AP',
    definition: 'The two research categories within anomalous perturbation: macro-AP involves mental interaction with human-scale objects (never confirmed in a decade of prior laboratory research), while micro-AP involves microscopic amounts of matter — individual atoms or biological cells — where over 800 analyzed random-number-generator experiments showed a robust statistical effect, later reattributed to anomalous cognition rather than perturbation.',
    crossRef: 'Part 3 — Anomalous Cognition and Perturbation',
    category: 'concept',
  },
  'Abstract Technique': {
    title: 'Abstract Technique',
    definition: 'A CSP-specific target designation method: the receiver is presented with a brief stimulus (such as the word "target") and responds with whatever comes to mind, building a full AC response out of a series of these short stimulus-response pairs.',
    crossRef: 'Part 6 — Glossary Highlights',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">Secret / NOFORN</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00789R003100080001-9</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          A Comprehensive Research Plan<br />for Anomalous Mental Phenomena
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Authors', 'Edwin C. May, Ph.D. and Wanda L. W. Luke'], ['Date', '7 June 1991'], ['Presented To', 'Defense Intelligence Agency']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          This plan proposes a long-term, systematic, and multidisciplinary investigation of anomalous mental
          phenomena, combining basic and applied research with standard HUMINT practices toward intelligence
          community applications. It divides the phenomena into two categories:{' '}
          <E term="anomalous cognition">anomalous cognition</E> (AC) — information transfer absent any known
          sensorial stimuli, covering ESP, telepathy, clairvoyance, and precognition — and{' '}
          <E term="anomalous perturbation">anomalous perturbation</E> (AP) — perturbation of matter absent any
          known physical interaction, covering psychokinesis, teleportation, levitation, and materialization.
        </P>
        <P>
          Thirty-two major research topics are identified, eighteen applied and fourteen basic. The applied program
          aims to identify talented individuals, train them, identify optimal targets, and develop data-collection
          and analysis protocols; the basic program aims to define the nature of an AC target, quantify how AC
          information propagates, understand the underlying neurophysiology, and verify whether AP exists at all.
          SAIC recommends a 175 man-year program beginning in FY 1992, starting at roughly $7.5M for the first two
          years and growing to a total of $30M over five years, overseen by a technical panel of academic and
          government experts.
        </P>
      </section>

      {/* ── Part 1: Historical Background ─────────────────── */}
      <DocSection id="doc-history" number="PART I" title="Historical Background">
        <P>
          Government-funded research into these domains began in 1973, when the CIA initiated a modest effort to
          determine whether a genuine phenomenon could be verified and applied to intelligence problems. Support
          through 1985 was minimal and sporadic. Beginning in FY 1986, the Army Medical Research and Development
          Command funded a coordinated five-year basic research program at SRI International with three
          objectives: provide incontrovertible evidence for AC and AP; determine their physiological, physical, and
          psychological basis; and determine how well AC data could integrate into the intelligence community.
          Funding was uneven — full for two years, half for the third, restored via DARPA for the fourth after House
          Appropriations Committee intervention, and cut entirely for the fifth.
        </P>
        <P>
          Despite that funding history, the program met or partially met its goals: an information-transfer anomaly
          not explainable by faulty protocol, incorrect analysis, or fraud was confirmed to exist, though AP could
          not be verified. Preliminary evidence suggested the central nervous system of individuals with known AC
          ability responds to isolated, remote AC stimuli similarly to direct visual stimulation. Two theoretical
          models emerged: a heuristic model systematizing over 600 published experiments across 22 years, and a
          fundamental model proposing that animals possess an additional sensory system directly sensitive to
          information. Secondary findings included that dynamic targets outperform static ones; that traditional
          psychological and medical screening cannot identify AC talent, though empirical surveys suggest roughly 1%
          of the general population possesses robust, natural ability; and that AC does not depend on distance or
          time span between target and receiver.
        </P>
      </DocSection>

      {/* ── Part 2: The Research Plan Framework ───────────── */}
      <DocSection id="doc-framework" number="PART II" title="The Research Plan Framework">
        <P>
          The plan defines its working vocabulary early: a Receiver attempts to perceive and report on a target; an
          Agent attempts to influence one; a Monitor facilitates a session; a Protocol structures data collection;
          and an Analyst provides a quantitative measure of the result — terms used consistently throughout, with a
          full cross-national glossary provided separately.
        </P>
        <P>
          Basic research uses a &quot;transmission&quot; analogy borrowed from vision: a source radiates
          information that is detected, so basic AC research investigates the Source (a quantitative, intrinsic
          description of AC targets), Transmission (how AC information crosses space and time), and Detector (the
          physiological mechanism of sensing it, with hardware detection as a long-term goal). Applied research
          instead targets Receiver Selection, Receiver Training, Target Selection, Protocol development, and
          Analysis — each scheduled across FY 1992 through 1996 with built-in decision points: if a line of research
          shows no promise by a set date, it is abandoned rather than continued indefinitely. Receiver selection, for
          instance, begins by testing whether physiological or hypnotic-susceptibility markers correlate with AC
          ability, with a decision point in mid-FY 1994; target selection focuses first on{' '}
          <E term="entropy">entropy</E> as the most promising intrinsic property, since it had already shown promise
          in the earlier program.
        </P>
      </DocSection>

      {/* ── Part 3: AC and AP Rationale ────────────────────── */}
      <DocSection id="doc-rationale" number="PART III" title="Anomalous Cognition and Perturbation">
        <P>
          Anomalous perturbation research divides into{' '}
          <E term="macro-AP and micro-AP">macro-AP and micro-AP</E>. A decade of prior literature analysis could
          not confirm macro-AP existed in the laboratory, and a separate quantum-measurement experiment involving
          photons found that consciousness was not a necessary condition for physical reality — a direct challenge
          to some earlier theoretical claims. Micro-AP evidence was more substantial: an analysis of over 800
          random-number-generator experiments found a robust statistical effect that no alternative hypothesis could
          explain, but the plan attributes this to{' '}
          <E term="Decision Augmentation Theory">Decision Augmentation Theory</E> — the effect is now understood as
          a form of anomalous cognition (the operator unconsciously choosing favorable moments to act), not
          anomalous perturbation of the hardware itself.
        </P>
        <P>
          The plan for macro-AP research is deliberately conservative: establish strict criteria for what counts as
          evidence, review the historical literature against those criteria, design new experiments only where
          circumstantial evidence warrants it (nanotechnology-scale targets, the Mössbauer effect, single
          alpha-particle perturbation), then conduct and independently replicate them — with applications
          development (a thought-controlled communications switch, disrupting inertial guidance systems)
          deliberately given minimal attention until verification itself succeeds.
        </P>
      </DocSection>

      {/* ── Part 4: Integration with Broader Science ──────── */}
      <DocSection id="doc-integration" number="PART IV" title="Integration with Broader Science">
        <P>
          The <E term="Cognitive Sciences Program">Cognitive Sciences Program</E> plans deliberate collaboration
          across an unusually wide range of disciplines. The newly formed Society for the Anthropology of
          Consciousness (a 1990 division of the American Anthropological Association) could contribute cross-cultural
          perspective on receiver selection and foreign data assessment. Vision psychophysiology research already
          informed the earlier program&apos;s subliminal-perception work. Researchers at the California Institute
          for Transpersonal Psychology could inform psychoimmunology questions around mind-body interaction. Los
          Alamos National Laboratory expressed interest in the search for an AC-evoked brain response, given the
          specialized signal processing magnetic brain signals require. Statistics researchers at Harvard offered
          interest in the field&apos;s core hypothesis-testing methodology. Perhaps most strikingly, physicists at
          an Austrian university in Vienna studying ultra-cold neutrons were seen as well-positioned to test
          consciousness effects on single particles, while Caltech&apos;s physics department — active in stochastic
          causality research within general relativity — was proposed as a collaborator for calculating whether
          information could, in principle, travel backward in time.
        </P>
      </DocSection>

      {/* ── Part 5: Recommendations and Foreign Assessment ─── */}
      <DocSection id="doc-recommendations" number="PART V" title="Recommendations and Foreign Assessment">
        <P>
          The plan recommends full implementation at roughly 175 man-years and $30M over five years, involving a
          prime contractor, numerous subcontractors, and close collaboration with government agencies — starting
          with about $7.5M for FY 1992–1993 to expand current staffing and subcontractor relationships. It calls for
          continued policy oversight and a scientific expert panel to monitor the technical effort, and commits the
          program to full compliance with Defense Department and Health and Human Services regulations.
        </P>
        <P>
          The declassified release withholds the Foreign Assessment section that would have followed the
          Recommendations — the document marks three full pages here as{' '}
          <span className="italic">&quot;Exempt&quot;</span> from release.
        </P>
      </DocSection>

      {/* ── Part 6: Glossary Highlights ────────────────────── */}
      <DocSection id="doc-glossary" number="PART VI" title="Glossary Highlights">
        <P>
          The report closes with an extensive glossary cross-referencing AMP terminology as used across seven
          national research traditions — the People&apos;s Republic of China, Czechoslovakia, Holland, France,
          Hungary, the Soviet Union, and the United States — alongside terms specific to SAIC&apos;s own Cognitive
          Sciences Program. Among the CSP-specific entries is the{' '}
          <E term="Abstract Technique">Abstract Technique</E>, a stimulus-response method of target designation in
          which a receiver is given a brief cue and responds freely, building a complete AC response from a series
          of such short exchanges. The glossary explicitly declines to judge the validity of any phenomenon or
          method it defines — the terms are documented purely as they appear in the AMP literature.
        </P>
      </DocSection>
    </>
  );
}
