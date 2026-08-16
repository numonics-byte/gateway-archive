import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';
import type { ReactNode } from 'react';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'Introduction' },
  { id: 'doc-meta',       label: 'II. Meta-Analyses of AMP' },
  { id: 'doc-mainstream', label: 'III. Main-Stream Publications' },
  { id: 'doc-journals',   label: 'IV. AMP Journal Publications' },
  { id: 'doc-meg',        label: 'V. Magnetoencephalography' },
  { id: 'doc-physics',    label: 'VI. Physics' },
];

export const entities: Record<string, Entity> = {
  'Cognitive Sciences Laboratory': {
    title: 'Cognitive Sciences Laboratory',
    definition: 'The SAIC division, run by Dr. Edwin C. May, that compiled and published this anthology on 24 June 1991 — not as original research, but as a curated reading list meant to give outside reviewers and sponsors a representative cross-section of the scientific literature the AMP program considered its evidentiary foundation.',
    crossRef: 'Title page',
    category: 'concept',
  },
  'meta-analysis': {
    title: 'Meta-Analysis',
    definition: 'A statistical technique for aggregating results across many independent experiments to detect a consistent effect too small to reliably prove in any single study. The compilers treat Section II\'s meta-analyses as the anthology\'s methodological backbone — the tool meant to let outside scientists judge the AMP literature\'s claims by its aggregate weight of evidence rather than any one cherry-picked result.',
    crossRef: 'Section II — Meta-Analyses of Anomalous Mental Phenomena',
    category: 'concept',
  },
  'Ganzfeld': {
    title: 'Ganzfeld',
    definition: 'A mildly sensory-deprived experimental state, used across a widely cited 1990 meta-analysis (Honorton et al., paper 4) covering 355 trials across 11 experimental series — cited here as one of the strongest independent statistical cases for anomalous cognition in the wider parapsychology literature.',
    crossRef: 'Section II — Meta-Analyses',
    category: 'concept',
  },
  'Jessica Utts': {
    title: 'Jessica Utts',
    definition: 'Professor of Statistics at UC Davis, whose two papers bookend Section II — one setting out a rigorous statistical definition of "successful replication" for small effects, the other providing an independent overview of the meta-analyses that follow. She would go on to review the government\'s own remote-viewing program for the 1995 AIR evaluation.',
    crossRef: 'Section II — Meta-Analyses',
    category: 'person',
  },
  'Uri Geller': {
    title: 'Uri Geller',
    definition: 'The Israeli subject featured in Targ & Puthoff\'s 1974 Nature paper — the anthology\'s earliest and most famous main-stream publication, and the paper that introduced the term "remote viewing" to the scientific literature via a formal peer-reviewed journal.',
    crossRef: 'Section III — Main-Stream Publications',
    category: 'person',
  },
  'Robert Jahn': {
    title: 'Robert G. Jahn',
    definition: 'Dean of Engineering at Princeton University and founder of the Princeton Engineering Anomalies Research (PEAR) lab, whose invited 1982 IEEE paper extended a remote-viewing replication to a distance of over 10,000 kilometers and surveyed anomalous perturbation experiments from an engineering perspective.',
    crossRef: 'Section III — Main-Stream Publications',
    category: 'person',
  },
  'fuzzy set theory': {
    title: 'Fuzzy Set Theory',
    definition: 'A mathematical framework for handling degrees of partial truth rather than strict true/false categories, applied by May, Utts, and colleagues to score the subjective, impressionistic content of remote-viewing transcripts against "ground truth" targets — an attempt to replace ad hoc human judging with a formal, replicable scoring method.',
    crossRef: 'Section IV — AMP Journal Publications',
    category: 'concept',
  },
  'magnetoencephalography': {
    title: 'Magnetoencephalography (MEG)',
    definition: 'A non-invasive technique for measuring the tiny magnetic fields produced by electrical activity in the brain. Section V collects the technical background papers underlying SAIC\'s own attempts to find a neuromagnetic signature of anomalous cognition — the same research line documented as "Experiment 3" and "Experiment 8" of the SAIC database in other archive documents.',
    crossRef: 'Section V — Magnetoencephalography',
    category: 'concept',
  },
  'Kip Thorne': {
    title: 'Kip Thorne',
    definition: 'Caltech theoretical physicist and co-author of the anthology\'s 1988 wormhole paper — showing that traversable wormholes are consistent with Einstein\'s field equations under the right conditions, provided causality itself is treated as fundamentally probabilistic. Thorne later shared the 2017 Nobel Prize in Physics for the detection of gravitational waves.',
    crossRef: 'Section VI — Physics',
    category: 'person',
  },
  'Aharonov-Bohm effect': {
    title: 'The Aharonov-Bohm Paper',
    definition: 'A foundational 1959 quantum mechanics paper showing that electromagnetic potentials are physically measurable, not just mathematical bookkeeping devices — included here as a candidate theoretical mechanism by which consciousness might interact with physical systems at a distance.',
    crossRef: 'Section VI — Physics',
    category: 'concept',
  },
};

function Paper({ num, cite, children }: { num: number; cite: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-accent/30 pl-4 py-1">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="font-mono text-[10px] text-accent shrink-0">[{num}]</span>
        <span className="font-mono text-xs text-foreground/90 italic leading-snug">{cite}</span>
      </div>
      <P className="text-sm text-muted-foreground pl-6">{children}</P>
    </div>
  );
}

export default function Body() {
  return (
    <>
      {/* ── Document Header ──────────────────────────────── */}
      <section id="doc-intro" className="scroll-mt-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 border border-accent cyber-chamfer-sm px-3 py-1 bg-accent/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-neon" />
            <span className="font-label text-[10px] tracking-[0.2em] text-accent uppercase">Compiled Anthology</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00789R003100030001-4</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Anomalous Mental Phenomena: Selected Papers
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Compiled by', 'Cognitive Sciences Laboratory, SAIC'], ['Date', '24 June 1991'], ['Length', '~439 pages, 30 reprinted papers']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          This is not a report — it is a bound reference volume. In June 1991, SAIC&apos;s{' '}
          <E term="Cognitive Sciences Laboratory">Cognitive Sciences Laboratory</E> compiled full reprints of 30
          papers it considered representative of the scientific case for anomalous mental phenomena, organized into
          six sections and separated by physical blue divider sheets. Its own introduction is candid about the
          selection&apos;s limits: &quot;no section could possibly be complete; however, we have chosen papers that are
          representative of their particular sections.&quot;
        </P>
        <P>
          Because every paper is reproduced here as a full-length reprint — journal formatting, references, and all
          — the volume runs to roughly 439 pages despite covering only 30 individual works. Rather than attempt to
          re-narrate three decades of published research paper by paper, this reader presents the compilers&apos; own
          numbered descriptions for every entry, organized by the anthology&apos;s original six sections, so the full
          scope of what SAIC considered its supporting literature remains legible at a glance.
        </P>
      </section>

      {/* ── Section II: Meta-Analyses ──────────────────────── */}
      <DocSection id="doc-meta" number="SECTION II" title="Meta-Analyses of Anomalous Mental Phenomena">
        <P>
          The compilers place <E term="meta-analysis">meta-analysis</E> first for a reason: in a field defined by
          small, inconsistent individual effects, aggregating results across many independent studies is presented
          as the discipline&apos;s best tool for separating a genuine signal from noise. Eight papers are collected here.
        </P>
        <div className="space-y-4 mt-4">
          <Paper num={1} cite="Utts, J., 'Successful Replication Versus Statistical Significance,' Journal of Parapsychology, Vol. 52, pp. 305–320 (1988)">
            Argues that treating statistical significance as the definition of successful replication is a category
            error, since p-values are driven as much by sample size as by any real effect — and proposes alternative
            approaches including power analysis and Bayesian methods.
          </Paper>
          <Paper num={2} cite="Honorton, C., 'Error Some Place!' Journal of Communication, pp. 103–116 (Winter 1975)">
            A pre-meta-analysis critical review of every ESP card-guessing experiment conducted from 1934 to 1939,
            including the claims and counter-claims of that era&apos;s controversy.
          </Paper>
          <Paper num={3} cite="Honorton, C. and Ferrari, D. C., 'Future Telling: A Meta-Analysis of Forced-Choice Precognition Experiments, 1935–1987,' Journal of Parapsychology, Vol. 53, pp. 282–308 (1989)">
            A full meta-analytic review of every forced-choice precognition experiment in which the target was
            generated only after the subject&apos;s guess was already recorded.
          </Paper>
          <Paper num={4} cite="Honorton, C. et al., 'Psi Communication in the Ganzfeld,' Journal of Parapsychology, Vol. 54, pp. 99–137 (1990)">
            A <E term="Ganzfeld">ganzfeld</E> meta-analysis spanning 11 experimental series and 355 individual trials.
          </Paper>
          <Paper num={5} cite="Radin, D. I. and Nelson, R. D., 'Evidence for Consciousness-Related Anomalies in Random Physical Systems,' Foundations of Physics, Vol. 19, No. 12, pp. 1499–1514 (1989)">
            Analyzes over 800 experiments claiming mind-machine interaction effects (anomalous perturbation) and,
            after controlling for known experimental flaws, concludes substantial statistical evidence supports the
            claim.
          </Paper>
          <Paper num={6} cite="Honorton, C., Ferrari, D. C., and Bem, D. J., 'Extraversion and ESP Performance: Meta-Analysis and a New Confirmation,' Proceedings of the Parapsychological Association 33rd Annual Convention (1990)">
            Links ESP performance to a standard personality variable — extraversion — connecting AMP research to
            mainstream personality psychology.
          </Paper>
          <Paper num={7} cite="Rosenthal, R., 'Meta-Analytic Procedures and the Nature of Replication: The Ganzfeld Debate,' Journal of Parapsychology, Vol. 50, pp. 319–336 (1986)">
            Written by a Harvard psychology professor and one of meta-analysis&apos;s early developers, commenting
            directly on the ganzfeld replication controversy.
          </Paper>
          <Paper num={8} cite="Utts, J., 'Replication and Meta-Analysis in Parapsychology,' Statistical Sciences (accepted for publication)">
            <E term="Jessica Utts">Utts</E>&apos; independent, objective overview synthesizing the meta-analyses collected
            in this section.
          </Paper>
        </div>
      </DocSection>

      {/* ── Section III: Main-Stream Publications ──────────── */}
      <DocSection id="doc-mainstream" number="SECTION III" title="Main-Stream Publications">
        <P>
          The compilers frame publication venue as its own kind of evidence: &quot;one measure of the acceptance of
          anomalous mental phenomena as a valid area of investigation is the degree to which research papers appear
          in the main-stream scientific literature.&quot; This section collects seven papers that cleared peer review
          at general-audience, non-parapsychology-specific journals.
        </P>
        <div className="space-y-4 mt-4">
          <Paper num={9} cite="Targ, R. and Puthoff, H. E., 'Information Transmission Under Conditions of Sensory Shielding,' Nature, Vol. 252, pp. 602–607 (October 1974)">
            The anthology&apos;s earliest and most consequential entry: a series of experiments with selected subjects,
            including <E term="Uri Geller">Uri Geller</E>, that introduced the term &quot;remote viewing&quot; into the
            peer-reviewed literature, alongside a pilot study of anomalous cognition&apos;s effect on brain alpha rhythms.
          </Paper>
          <Paper num={10} cite="Puthoff, H. E. and Targ, R., 'A Perceptual Channel for Information Transfer over Kilometer Distances,' Proceedings of the IEEE, Vol. 64, No. 3, pp. 329–354 (March 1976)">
            A historical literature review paired with over 50 documented remote-viewing trials and representative
            transcript examples.
          </Paper>
          <Paper num={11} cite="Jahn, R. G., 'The Persistent Paradox of Psychic Phenomena: An Engineering Perspective,' Proceedings of the IEEE, Vol. 70, No. 2, pp. 136–170 (February 1982)">
            An invited paper by <E term="Robert Jahn">Robert Jahn</E>, extending remote-viewing replication to a
            distance of over 10,000 kilometers and surveying anomalous perturbation experiments alongside an
            independent overview of the wider field.
          </Paper>
          <Paper num={12} cite="Child, I. L., 'Psychology and Anomalous Observations: The Question of ESP in Dreams,' American Psychologist, Vol. 40, No. 11, pp. 1219–1230 (November 1985)">
            Written by the then-Chairman of Yale&apos;s Psychology Department, critically reviewing the Maimonides
            Medical Center dream-ESP studies and urging the psychological research community not to dismiss the body
            of work.
          </Paper>
          <Paper num={13} cite="Atkinson, R. L. et al., Introduction to Psychology, 10th Edition, pp. 234–243, Harcourt Brace Jovanovich (1990)">
            A chapter from a widely used introductory psychology textbook, in which co-author Daryl Bem covers
            anomalous cognition alongside consciousness and its altered states — definitions, experimental evidence,
            the surrounding debate, and anecdotal reports.
          </Paper>
          <Paper num={14} cite="Walker, E. H., May, E. C., Spottiswoode, S. J. P., and Piantanida, T., 'Testing Schrödinger's Paradox with a Michelson Interferometer,' Physics Letters B, Vol. 151, pp. 339–348 (1988)">
            Tests whether consciousness is a necessary ingredient in determining physical reality; the authors
            conclude it is not — a result the compilers note carries implications for anomalous perturbation
            research even though the paper isn&apos;t directly about AMP.
          </Paper>
          <Paper num={15} cite="Hyman, R., 'Parapsychological Research: A Tutorial Review and Critical Appraisal,' Proceedings of the IEEE, Vol. 74, No. 6, pp. 823–849 (June 1986)">
            An invited critical review by longtime skeptic Dr. Raymond Hyman, surveying the field&apos;s historical
            experiments and current research from an explicitly critical standpoint — included by the compilers
            despite, or because of, its skepticism.
          </Paper>
        </div>
      </DocSection>

      {/* ── Section IV: AMP Journal Publications ───────────── */}
      <DocSection id="doc-journals" number="SECTION IV" title="Anomalous-Mental-Phenomena Journal Publications">
        <P>
          Specialized parapsychology journals date back to the late 1800s and are, per the compilers, &quot;too
          numerous to include here&quot; in full — these six papers were selected as representative of current
          research directions circa 1990–91, with several authored by SAIC&apos;s own research team.
        </P>
        <div className="space-y-4 mt-4">
          <Paper num={16} cite="Ryzl, M., 'A Model of Parapsychological Communication,' Journal of Parapsychology, Vol. 30, pp. 18–30 (1966)">
            Proposes that if anomalous cognition can improve the odds of correctly guessing a coin toss, a redundant
            coding scheme could build a communication channel approaching 100% accuracy — and describes one such
            successful application.
          </Paper>
          <Paper num={17} cite="Honorton, C., 'Precognition and Real-Time ESP Performance in a Computer Task with an Exceptional Subject,' Journal of Parapsychology, Vol. 51, pp. 291–319 (December 1987)">
            Documents a single exceptional subject across a 20-year experimental relationship, finding statistical
            evidence for precognition that remains stable over that entire span.
          </Paper>
          <Paper num={18} cite="May, E. C., Utts, J. M., Humphrey, B. S., Luke, W. L. W., Frivold, T. J., and Trask, V. V., 'Advances in Remote-Viewing Analysis,' Journal of Parapsychology, Vol. 54, pp. 194–228 (September 1990)">
            Applies <E term="fuzzy set theory">fuzzy set theory</E> to score subjective remote-viewing transcripts
            against ground-truth targets, replacing ad hoc human judgment with a formal method.
          </Paper>
          <Paper num={19} cite="May, E. C., Luke, W. L. W., Trask, V. V., and Frivold, T. J., 'Observation of Neuromagnetic Fields in Response to Remote Stimuli,' Proceedings of the 33rd Annual Convention of the Parapsychological Association, pp. 168–185 (August 1990)">
            A progress report applying visual-evoked-response techniques to search for a{' '}
            <E term="magnetoencephalography">neuromagnetic</E> signature of anomalous-cognition stimuli, reporting a
            statistically significant effect alongside discussion of possible artifacts.
          </Paper>
          <Paper num={20} cite="Braud, W., Shafer, D., and Andrews, S., 'Electrodermal Correlates of Remote Attention,' Proceedings of the 33rd Annual Convention of the Parapsychological Association, pp. 14–28 (August 1990)">
            Continues a research line from the Mind Science Foundation testing whether skin-conductance responses
            can statistically confirm that a person can sense, without looking, that they are being watched.
          </Paper>
          <Paper num={21} cite="Lantz, N. D., May, E. C., and Piantanida, T., 'Remote Viewing: From What Time Frame Does the Information Originate?' Proceedings of the 33rd Annual Convention of the Parapsychological Association, pp. 138–150 (August 1990)">
            A technically complex experiment probing the temporal origin of remote-viewing information; found
            statistically robust evidence for an effect but no evidence of temporal dependence.
          </Paper>
        </div>
      </DocSection>

      {/* ── Section V: Magnetoencephalography ──────────────── */}
      <DocSection id="doc-meg" number="SECTION V" title="Magnetoencephalography">
        <P>
          A short, purely technical section: three background papers underlying{' '}
          <E term="magnetoencephalography">SAIC&apos;s own attempts</E> to find a neuromagnetic correlate of anomalous
          cognition — the same research thread documented elsewhere in the archive as Experiments 3 and 8 of the
          SAIC database.
        </P>
        <div className="space-y-4 mt-4">
          <Paper num={22} cite="Biotechnologies, Inc., 'Identification of Sources of Brain Activity Using Magnetic Source Localization and Magnetic Resonance Imaging,' Research Review">
            A brief technical review discussing the potential for localizing the brain&apos;s response to a 1000 Hz audio
            stimulus.
          </Paper>
          <Paper num={23} cite="Sato, S., Balish, M., and Muratore, R., 'Principles of Magnetoencephalography,' Journal of Clinical Neurophysiology, Vol. 8, No. 2, pp. D1–D13 (1991)">
            A clinically oriented technical tutorial broad enough to cover topics of direct interest to the AMP
            research program, including evoked responses.
          </Paper>
          <Paper num={24} cite="Lehmann, D., Ozaki, H., and Pal, I., 'EEG Alpha Map Series: Brain Micro-states by Space-Oriented Adaptive Segmentation,' Electroencephalography and Clinical Neurophysiology, Vol. 67, pp. 271–288 (1987)">
            Included as a primary technical reference for paper 19, describing the phase shift of alpha-rhythm
            activity in response to external stimuli.
          </Paper>
        </div>
      </DocSection>

      {/* ── Section VI: Physics ─────────────────────────────── */}
      <DocSection id="doc-physics" number="SECTION VI" title="Physics">
        <P>
          The final section reaches furthest from the laboratory: six theoretical physics papers offered not as
          direct evidence, but as &quot;plausibility arguments&quot; that mainstream physics does not necessarily forbid
          the kind of information transfer AMP research claims to observe — several of them landmark papers in their
          own right, independent of any parapsychological application.
        </P>
        <div className="space-y-4 mt-4">
          <Paper num={25} cite="Tipler, F. J., 'Rotating Cylinders and the Possibility of Global Causality Violation,' Physical Review D, Vol. 9, No. 8, pp. 2203–2206 (April 1974)">
            A technical general-relativity argument that an infinite rotating cylinder could, under extreme
            conditions, violate causality — offered as a physical precedent for why the compilers argue causality
            may need to be treated as fundamentally stochastic to accommodate precognition data.
          </Paper>
          <Paper num={26} cite="Morris, M. S., Thorne, K. S., and Yurtsever, U., 'Wormholes, Time Machines, and the Weak Energy Condition,' Physical Review Letters, Vol. 61, No. 13, pp. 1446–1449 (September 1988)">
            <E term="Kip Thorne">Kip Thorne</E> and coauthors show that time travel may be consistent with Einstein&apos;s
            field equations under relatively ordinary conditions, provided causality is allowed a probabilistic
            character.
          </Paper>
          <Paper num={27} cite="Redmount, I., 'Wormholes, Time Travel and Quantum Gravity,' New Scientist, p. 57 (April 1990)">
            A non-technical popular-science account of how contemporary relativity models might permit realizable
            time travel.
          </Paper>
          <Paper num={28} cite="Misra, B. and Sudarshan, E. C. G., 'The Zeno's Paradox in Quantum Theory,' Journal of Mathematical Physics, Vol. 18, No. 4, pp. 756–763 (April 1977)">
            A foundational quantum-theory paper showing that physical systems under continuous observation can
            behave fundamentally differently than when unobserved — offered as a possible mechanism for anomalous
            perturbation.
          </Paper>
          <Paper num={29} cite={`Aharonov, Y. and Vardi, M., 'Meaning of an Individual "Feynman Path,"' Physical Review D, Vol. 21, No. 8, pp. 2235–2240 (April 1980)`}>
            Extends the Misra-Sudarshan result, showing that under continuous observation a physical system conforms
            to the measuring apparatus rather than the physical laws that would otherwise govern it.
          </Paper>
          <Paper num={30} cite="Aharonov, Y. and Bohm, D., 'Significance of Electromagnetic Potentials in the Quantum Theory,' The Physical Review, Vol. 115, No. 3, pp. 485–491 (August 1959)">
            The founding paper of the <E term="Aharonov-Bohm effect">Aharonov-Bohm effect</E> — proof that
            electromagnetic potentials are physically real and measurable, not mere mathematical convenience, cited
            here as one candidate mechanism for how consciousness might interact with distant physical systems.
          </Paper>
        </div>
      </DocSection>
    </>
  );
}
