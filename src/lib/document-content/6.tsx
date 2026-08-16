import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',       label: 'Executive Summary' },
  { id: 'doc-background',  label: '1. Background & History' },
  { id: 'doc-evalplan',    label: '2. The Blue-Ribbon Review Panel' },
  { id: 'doc-utts',        label: '3a. Dr. Utts — The Case For' },
  { id: 'doc-hyman',       label: '3b. Dr. Hyman — The Rejoinder' },
  { id: 'doc-operational', label: '4. Evaluating Operational Utility' },
  { id: 'doc-conclusions', label: '5. Final Conclusions' },
];

export const entities: Record<string, Entity> = {
  'Dr. Jessica Utts': {
    title: 'Dr. Jessica Utts',
    definition: 'Professor of Statistics at UC Davis, Associate Editor of the Journal of the American Statistical Association, and Statistical Editor of the Journal of the American Society for Psychical Research. Selected as the panel\'s pro-paranormal-leaning reviewer, her report concluded that "using the standards applied to any other area of science, psychic functioning has been well established."',
    crossRef: 'Chapter 3 — Research Reviews',
    category: 'person',
  },
  'Dr. Raymond Hyman': {
    title: 'Dr. Raymond Hyman',
    definition: 'Professor of Psychology at the University of Oregon, author of over 200 papers including critiques of the paranormal, and a veteran of the original 1988 National Research Council review panel. Selected as the panel\'s skeptical reviewer, though the report describes him as "one of the most important and fair-minded skeptics working in this area."',
    crossRef: 'Chapter 3 — Research Reviews',
    category: 'person',
  },
  'Edwin C. May': {
    title: 'Dr. Edwin C. May',
    definition: 'Principal Investigator of the government remote-viewing research program, first at SRI International from the mid-1970s and then as Project Director at SAIC from 1986 through the program\'s close. May supplied the review panel with the complete list of SAIC experiments and unlimited access to clarify methodological questions, and also personally served as the sole judge scoring most of the remote-viewing sessions under review — a dual role both reviewers flagged as a problem.',
    crossRef: 'Chapter 2 — Evaluation Plan',
    category: 'person',
  },
  'National Research Council Report': {
    title: 'National Research Council Report (1988)',
    definition: 'An earlier "blue ribbon" review, commissioned by the Army Research Institute and published as Enhancing Human Performance: Issues, Theories, and Techniques, that found little or no support for remote viewing and similar techniques. Its predominantly negative verdict — and the roughly 50–100 further studies conducted since — set the stage for this 1995 AIR reevaluation.',
    crossRef: 'Chapter 1 — Background and History',
    category: 'concept',
  },
  'Blue-Ribbon Review Panel': {
    title: 'The Blue-Ribbon Review Panel',
    definition: 'The six-member panel AIR assembled at CIA request: Dr. Jessica Utts and Dr. Raymond Hyman as the two credentialed parapsychology experts representing opposing priors, AIR senior scientists Dr. Michael Mumford and Dr. Andrew Rose providing unbiased methodological expertise, Stanford\'s Dr. Lincoln Moses as statistical resource, and AIR president Dr. David Goslin as coordinator.',
    crossRef: 'Chapter 2 — Evaluation Plan',
    category: 'concept',
  },
  'Ganzfeld': {
    title: 'Ganzfeld',
    definition: 'A separate parapsychology paradigm, run mainly at the Psychophysical Research Laboratories in Princeton, in which a subject in a mildly sensory-deprived ("ganzfeld") altered state attempts to identify a target. Cited by Dr. Utts as independent, cross-laboratory confirmation of remote-viewing effect sizes; cited by Dr. Hyman as actually inconsistent with the SAIC results once its specific conditions are examined.',
    crossRef: 'Chapter 3 — Research Reviews',
    category: 'concept',
  },
  'effect size': {
    title: 'Effect Size',
    definition: 'The statistical measure of how far an experiment\'s results depart from chance. The full 1973–1988 SRI dataset (154 experiments, over 26,000 trials) produced results so far beyond chance that a p-value below 10⁻²⁰ was reported; effect sizes for novice and experienced viewers at SRI (.164 and .385) closely tracked those from the independent Princeton ganzfeld program (.17 and .35) — the cross-laboratory consistency Dr. Utts treated as her strongest evidence against a fraud or artifact explanation.',
    crossRef: 'Chapter 3, Section 3.4 — Consistency With Other Laboratories',
    category: 'concept',
  },
  'single-judge problem': {
    title: 'The Single-Judge Problem',
    definition: 'A methodological gap both reviewers agreed had never been closed: essentially all SAIC remote-viewing sessions were scored for accuracy by one judge — the Principal Investigator himself, who knew the viewers, the target set, and the procedures intimately. Without independent, blinded judges reaching the same conclusions, neither reviewer could rule out that the observed effect reflected the judge\'s interpretive skill rather than a genuine anomalous ability in the viewers.',
    crossRef: 'Chapter 5 — Conclusions',
    category: 'concept',
  },
  'boundary conditions': {
    title: 'Boundary Conditions',
    definition: 'The specific conditions research suggests are needed for the remote-viewing effect to appear — including post-session feedback to the viewer and a constrained, familiar target "bandwidth." The evaluation found several of these conditions are structurally unavailable in real intelligence-gathering operations, which was itself a central reason the panel judged the phenomenon operationally inapplicable even before addressing whether it is real.',
    crossRef: 'Chapter 4 — Research on Boundary Conditions',
    category: 'concept',
  },
  'report editing': {
    title: 'Post-Hoc Report Editing',
    definition: 'A disclosure from the interviews with remote viewers and the program manager: written viewing reports were, by the viewers\' own account, sometimes altered after the fact to make them consistent with known background facts about the target — a practice both current and prior program managers reportedly engaged in. The evaluators note this practice, while understandable operationally, makes it impossible to independently verify the accuracy of any individual "hit," including some of the program\'s most publicized success stories.',
    crossRef: 'Chapter 4 — Remote Viewers',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">DRAFT REPORT</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00791R000200180005-5</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          An Evaluation of the Remote Viewing Program
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Date', 'September 22, 1995'], ['Prepared by', 'The American Institutes for Research (AIR)'], ['Commissioned by', 'CIA Office of Research and Development']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          This is the report that ended STAR GATE. Commissioned by the CIA in 1995, as Congress weighed transferring
          the program to a new sponsor, the American Institutes for Research assembled two respected but opposing
          experts — <E term="Dr. Jessica Utts">Dr. Jessica Utts</E> and <E term="Dr. Raymond Hyman">Dr. Raymond Hyman</E> —
          to independently review two decades of government-funded remote-viewing research and, separately, to
          evaluate whether the program had ever produced usable intelligence.
        </P>
        <P>
          Their scientific findings split sharply: a statistically significant laboratory effect was undeniable, but
          whether it reflected a genuine paranormal ability, rather than judge interpretation or an uncontrolled
          artifact, could not be resolved. On the operational side there was no split at all — the evaluation found
          that remote viewing had never produced actionable intelligence, that reports were vague and inconsistent
          across viewers, and that some reports had reportedly been edited after the fact to match known facts. The
          report&apos;s conclusion was blunt: &quot;continued support for the operational component of the current program is
          not justified.&quot;
        </P>
      </section>

      {/* ── Part 1: Background & History ──────────────────── */}
      <DocSection id="doc-background" number="CHAPTER 1" title="Background & History">
        <P>
          The immediate precedent for this review was a mid-1980s <E term="National Research Council Report">National
          Research Council</E> panel, commissioned by the Army Research Institute, which found little or no support
          for remote viewing or similar techniques — a predominantly negative verdict published in 1988. Government
          research nonetheless continued: by 1995, an estimated 50 to 100 additional studies had been conducted,
          many explicitly designed to fix the methodological problems the 1988 panel had identified.
        </P>
        <P>
          STAR GATE itself, the report explains, was a DIA program built on three pillars: Operations (using remote
          viewing to collect intelligence against foreign targets), Research and Development (laboratory work to
          improve the technique), and Foreign Assessment (tracking adversary paranormal research) — the last of
          which fell outside this review&apos;s scope. With Congress now weighing a transfer of the program to a new
          sponsor, the CIA declassified its parapsychology history and contracted AIR — chosen for its behavioral-science
          expertise and its neutrality on the underlying subject matter — to answer two separate questions: is the
          research scientifically valid, and is the program operationally useful?
        </P>
      </DocSection>

      {/* ── Part 2: The Blue-Ribbon Panel ─────────────────── */}
      <DocSection id="doc-evalplan" number="CHAPTER 2" title="The Blue-Ribbon Review Panel">
        <P>
          To guarantee a fair hearing on both sides of a genuinely controversial question, AIR built its{' '}
          <E term="Blue-Ribbon Review Panel">review panel</E> around deliberate ideological balance: Dr. Utts,
          a statistician with a record of publishing sympathetically on parapsychology, was paired against Dr.
          Hyman, a career skeptic who had sat on the 1988 NRC panel — described in the report as &quot;one of the
          most important and fair-minded skeptics working in this area.&quot; Two AIR senior scientists with no prior
          background in parapsychology, methodologists Dr. Michael Mumford and Dr. Andrew Rose, sat alongside them
          to keep the review grounded, with Stanford&apos;s Dr. Lincoln Moses providing statistical counsel and AIR
          president Dr. David Goslin coordinating.
        </P>
        <P>
          The CIA transferred the program&apos;s full documentary record to AIR, and Principal Investigator{' '}
          <E term="Edwin C. May">Dr. Edwin May</E> was asked to separately identify the specific studies he considered
          the strongest evidence for the phenomenon. Utts and Hyman then wrote independent reports addressing four
          fixed questions — was there a significant effect, could it be attributed to a paranormal cause, what
          mechanism might explain it, and what did the findings suggest for real-world application — before
          exchanging reports and conferring by conference call to isolate exactly where, and why, they agreed and
          disagreed. Both their original reports and the record of that disagreement were preserved in full and form
          the heart of Chapter 3.
        </P>
      </DocSection>

      {/* ── Part 3a: Utts' Case For ────────────────────────── */}
      <DocSection id="doc-utts" number="CHAPTER 3A" title="Dr. Utts — The Case For">
        <P>
          Utts&apos; report leans on scale. A 1988 analysis of the full SRI dataset — 154 experiments, over 26,000
          individual trials, 227 subjects, spanning 1973 to 1988 — produced results so far beyond chance that the
          probability of the pattern occurring by chance alone was reported at less than 1 in 10²⁰. A talented
          subgroup of six selected viewers consistently outperformed the general subject pool across varied
          protocols; mass screening found only about 1% of volunteers were consistently successful, suggesting the
          ability, if real, is unevenly distributed like athletic talent; and neither distance nor electromagnetic
          shielding appeared to degrade performance.
        </P>
        <P>
          Her central argument, though, is cross-laboratory <E term="effect size">consistency</E>. She reports that
          novice and experienced remote viewers at SRI produced effect sizes of .164 and .385 — nearly identical to
          the .17 and .35 found for novice and experienced subjects in the independently run{' '}
          <E term="Ganzfeld">ganzfeld</E> program at Princeton&apos;s Psychophysical Research Laboratories. Turning to the
          ten SAIC experiments conducted from 1991–1994 under Dr. May, she notes the program was overseen by a
          Scientific Oversight Committee that included a Nobel physics laureate and reports the individual results
          directly: Target Dependencies (200 trials, effect size .124, p = 0.040), Remote Observation (48 trials,
          effect size .361, p = 0.006), and Entropy II (90 trials, effect size .550, p ≈ 9.1×10⁻⁴) among the
          strongest. Her conclusion, stated without qualification: &quot;using the standards applied to any other area of
          science, it is concluded that psychic functioning has been well established.&quot;
        </P>
      </DocSection>

      {/* ── Part 3b: Hyman's Rejoinder ─────────────────────── */}
      <DocSection id="doc-hyman" number="CHAPTER 3B" title="Dr. Hyman — The Rejoinder">
        <P>
          Hyman opens by conceding real common ground: he and Utts agree the SAIC experiments avoided the SRI-era
          methodological flaws, and that the observed effects are &quot;too large and consistent to be dismissed as
          statistical flukes.&quot; His disagreement is about what that concession is worth. Science, he argues, is a
          communal activity — a finding only becomes knowledge once it survives peer review and independent
          replication across separate laboratories, and the SAIC program&apos;s secrecy cut it off from exactly that
          process. Twenty-two years of research had produced only ten adequate experiments from what is, in
          scientific effect, a single laboratory — far too few, he argues, to establish a reliable relationship in
          almost any field, let alone one this contested.
        </P>
        <P>
          He is candid, even so, about where the data pushes him: &quot;I tend to agree with Professor Utts that real
          effects are occurring in these experiments. Something other than chance departures from the null
          hypothesis has occurred.&quot; His line is that a statistical departure from chance is not the same thing as a
          demonstrated paranormal phenomenon — without a positive causal theory, an anomaly could reflect any number
          of undiscovered mundane explanations. He also directly disputes Utts&apos; signature argument: where she sees
          the ganzfeld and SAIC results converging, he sees them diverging on substance — the ganzfeld requires an
          altered sensory state and subjects judging their own responses, while SAIC used viewers in a normal state
          judged by an outside party, and the two paradigms&apos; findings on static versus dynamic targets directly
          contradict each other. Both reviewers, notably, agreed on the necessary next step regardless of who was
          right: rejudge the existing sessions using independent, blinded judges before drawing any further
          conclusions.
        </P>
      </DocSection>

      {/* ── Part 4: Operational Utility ────────────────────── */}
      <DocSection id="doc-operational" number="CHAPTER 4" title="Evaluating Operational Utility">
        <P>
          Setting the scientific dispute aside and assuming, for the sake of argument, that remote viewing works,
          AIR then asked whether it had actually been useful. The <E term="boundary conditions">boundary
          conditions</E> research suggested were necessary for the effect — feedback to the viewer, a familiar,
          bounded pool of possible targets — are essentially unavailable in real intelligence work, where targets are
          unconstrained and feedback is rarely if ever possible. A study specifically testing target type found
          significant effects for familiar &quot;static&quot; National Geographic-style targets but not for novel
          &quot;dynamic&quot; ones — and real intelligence targets, the report notes dryly, do not arrive pre-sorted into
          a lab-friendly bandwidth.
        </P>
        <P>
          Structured interviews with end users, the three working remote viewers, and the program manager converged
          on the same picture: reports were consistently vague, accurate mainly on broad stereotypical background
          rather than specific verifiable detail, riddled with irrelevant material, and inconsistent between
          independent viewers on the same target. No user group had ever used a viewing as the primary basis for an
          operational decision — at best it filled gaps when no other source was available. Quantified feedback from
          40 real 1994–1995 taskings confirmed this: mean accuracy rated 3.0 on a 6-point scale (1 = highly
          accurate) and mean value rated 3.5 on a 5-point scale (1 = major significance, 5 = no value) — in the
          report&apos;s words, results consistent with the information being &quot;possibly&quot; somewhat accurate but of
          &quot;relatively low value.&quot;
        </P>
        <P>
          The single most consequential admission surfaced almost incidentally during the interviews:{' '}
          <E term="report editing">viewers and program managers reported that written viewing reports were sometimes
          altered after the fact</E> to bring them into line with known background facts about a target. The
          evaluators are careful to note this was not necessarily malicious — analysts naturally want a usable,
          coherent report — but its consequence is severe: it makes it impossible to independently verify any
          individual reported &quot;hit,&quot; and casts explicit doubt on some of the program&apos;s most publicized
          success stories, since subsequent investigation suggested viewers may have had access to more background
          information than the dramatic retellings implied.
        </P>
      </DocSection>

      {/* ── Part 5: Final Conclusions ──────────────────────── */}
      <DocSection id="doc-conclusions" number="CHAPTER 5" title="Final Conclusions">
        <P>
          The panel&apos;s summary judgment threads carefully between its two reviewers&apos; positions. Both agreed a
          statistically significant effect had been observed; neither would say that effect had been unambiguously
          shown to be paranormal. Central to that caution was the{' '}
          <E term="single-judge problem">single-judge problem</E> — nearly every SAIC session had been scored by one
          person, Dr. May himself, who knew the viewers, targets, and procedures intimately, leaving no independent
          evidence that a blinded judge would reach the same conclusions. Both reviewers agreed this gap alone was
          enough to prevent a confident claim that the phenomenon had been demonstrated, even while agreeing that
          &quot;something other than chance&quot; appeared to be happening in the data.
        </P>
        <P>
          On the science, the panel&apos;s formal finding was that &quot;adequate experimental and theoretical evidence for
          the existence of remote viewing as a parapsychological phenomenon has not been provided by the research
          component of the current program&quot; — not a declaration that the phenomenon is false, but that it remains
          unproven by the standards the panel was asked to apply. On operations, there was no ambiguity at all: given
          the mismatch between laboratory conditions and real intelligence work, the vagueness and inconsistency of
          the reports actually produced, and the revelation that reports had been edited for consistency after the
          fact, the panel concluded plainly that &quot;continued support for the operational component of the current
          program is not justified.&quot; That verdict — not a claim that psychic ability is impossible, but that this
          program had never turned it into usable intelligence — is what closed STAR GATE.
        </P>
      </DocSection>
    </>
  );
}
