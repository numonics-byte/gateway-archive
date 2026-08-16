import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',        label: 'Executive Summary' },
  { id: 'doc-directive',    label: 'I. The Congressional Mandate' },
  { id: 'doc-terminology',  label: 'II. Terminology & Plan Objectives' },
  { id: 'doc-oversight',    label: 'III. Project & Scientific Oversight' },
  { id: 'doc-review',       label: 'IV. The 1987 Enhanced Human Performance Review' },
];

export const entities: Record<string, Entity> = {
  'Congressionally Directed Action': {
    title: 'Congressionally Directed Action (CDA)',
    definition: 'A directive issued by Defense Authorization Conference conferees, concerned that "insufficient funds have been spent on research and development to establish the scientific basis for the STAR GATE program." It orders the Director of DIA to prepare a multi-year program plan and budget request, subject to "peer review by neutral scientific experts," to determine whether STAR GATE can show cost-effective, performance-criteria-satisfying results — reproduced in full at Appendix A.',
    crossRef: 'Appendix A — Congressionally-Directed Action',
    category: 'concept',
  },
  'Project Review Group': {
    title: 'Project Review Group',
    definition: 'An independent panel of scientists and DoD officials convened at the Pentagon on 6 March 1987, at the request of MG Philip K. Russell (Commander, U.S. Army Medical Research and Development Command), to formally assess the Enhanced Human Performance Project. Chaired by Dr. Nick Yaru, its unanimous findings — reproduced in full at Appendix H — concluded the underlying anomaly, which it named Remote Viewing, was real and worth continued investment.',
    crossRef: 'Appendix H — An Assessment of the Enhanced Human Performance Project',
    category: 'concept',
  },
  'Enhanced Human Performance Project': {
    title: 'Enhanced Human Performance Project',
    definition: 'The name under which the Army-sponsored, SRI-executed anomalous cognition research program operated circa 1986–87 — an earlier phase of the same government research effort that became STAR GATE. Its Fiscal Year 1986 results and Scientific Oversight Committee comments were the material formally assessed by the Project Review Group in Appendix H.',
    crossRef: 'Appendix H',
    category: 'concept',
  },
  'Edwin C. May': {
    title: 'Edwin C. May, Ph.D.',
    definition: 'SRI International\'s Principal Investigator on the Enhanced Human Performance Project, present at the 6 March 1987 Pentagon review as the researcher whose Fiscal Year 1986 work was under formal assessment. May would go on to direct the successor SAIC research program through the mid-1990s.',
    crossRef: 'Appendix H — attendee list',
    category: 'person',
  },
  'Remote Action': {
    title: 'Remote Action',
    definition: 'The Project Review Group\'s term for a class of anomalous-perturbation phenomena assessed alongside Remote Viewing in 1987. The panel judged Remote Action less likely to be successfully demonstrated and explained than Remote Viewing, and recommended the project narrow its focus toward the more productive pathway rather than funding both at equal levels of effort.',
    crossRef: 'Appendix H — Is the direction and emphasis appropriate?',
    category: 'concept',
  },
  'anomalous cognition': {
    title: 'Anomalous Cognition (AC)',
    definition: 'The preferred neutral term for information access absent any known sensory channel — encompassing what older literature called extra-sensory perception, remote viewing, or precognition. One of the two phenomenological aspects, alongside anomalous perturbation, that this research plan is organized around.',
    crossRef: 'Appendix B — Terminology and Definitions',
    category: 'concept',
  },
  'anomalous perturbation': {
    title: 'Anomalous Perturbation (AP)',
    definition: 'The preferred neutral term for mental influence over physical or biological systems by an unknown mechanism — affecting sensor or electronic-device output, or a person\'s physiological parameters. Also historically called psychokinesis or telekinesis.',
    crossRef: 'Appendix B — Terminology and Definitions',
    category: 'concept',
  },
  'Scientific Oversight Committee': {
    title: 'Scientific Oversight Committee (SOC)',
    definition: 'A six-member panel of external scientists — drawn from physics, astronomy, statistics, neuroscience, and psychology — tasked with approving every experimental protocol before data collection, critically reviewing every final report as if it were a journal submission, and suggesting directions for further research. Members may make unannounced drop-in visits to observe experiments in progress.',
    crossRef: 'Section XI.B — Scientific Oversight',
    category: 'concept',
  },
  'Institutional Review Board': {
    title: 'Institutional Review Board (IRB)',
    definition: 'A contractor board, drawn from the health, legal, and spiritual professions, responsible for assuring compliance with U.S. and DoD human-use regulations and the safety of research subjects.',
    crossRef: 'Section XI.B — Scientific Oversight',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">SECRET</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00789R002700020001-0</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Project STAR GATE: Research and Peer Review Plan
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Date', 'May 1994'], ['Prepared by', 'Technology Assessment and Support Activity, DIA'], ['Reference', 'PAG-TA-1068-SL']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          In compliance with a{' '}
          <E term="Congressionally Directed Action">Congressionally Directed Action</E>, the Defense Intelligence
          Agency proposes a multi-year research and development program, subject to rigorous scientific and technical
          oversight, to demonstrate the scientific validity of the STAR GATE program and to determine whether
          military and intelligence value can be obtained cost-effectively from anomalous mental phenomena (AMP). If
          successfully implemented, the plan states, this program will:
        </P>
        <ul className="list-none space-y-2 my-5">
          {[
            'Identify the underlying mechanisms of AMP.',
            'Establish the limits of operational usefulness of AMP.',
            'Determine the degree to which foreign activities in AMP represent a threat to national security.',
            'Lead to the development of countermeasures to neutralize this threat.',
            'Use research findings to improve operational activities.',
            'Develop data fusion criteria to integrate AMP results with other intelligence sources.',
          ].map((goal) => (
            <li key={goal} className="flex gap-3 text-sm">
              <span className="text-accent font-mono shrink-0">▸</span>
              <span className="text-foreground/90">{goal}</span>
            </li>
          ))}
        </ul>
        <P>
          Because the sponsoring Activity has no in-house R&amp;D capability of its own, external research support is
          described as an absolute necessity — chosen partly because it also guarantees peer-group review and a
          variety of scientific interactions that a purely in-house effort could not provide. Before any budget line
          item is submitted, DIA will convene a panel of scientists to review the plan’s major tenets, and an
          annual report will subsequently track the program’s operational, technical, and administrative status.
        </P>
      </section>

      {/* ── Part I: The Congressional Mandate ─────────────── */}
      <DocSection id="doc-directive" number="PART I" title="The Congressional Mandate">
        <P>
          This entire plan exists to answer a specific instruction from Congress. Appendix A reproduces the{' '}
          <E term="Congressionally Directed Action">Congressionally Directed Action</E> in full:
        </P>
        <P className="pl-4 border-l-2 border-accent/30 italic text-foreground/90">
          &quot;The conferees are concerned that insufficient funds have been spent on research and development to
          establish the scientific basis for the STAR GATE program. The conferees direct the Director of DIA to
          prepare a program plan and to submit an appropriate budget request for a research effort, over several
          years, to determine whether the STAR GATE program can show results that are cost-effective and satisfy
          reasonable performance criteria. This plan, and any research under this program, should be subject to peer
          review by neutral scientific experts. The Director of DIA is directed to prepare this research and peer
          review plan within existing program funds.&quot;
        </P>
        <P>
          The plan’s Introduction explains its scope directly follows from that language: a long-term,
          systematic, and comprehensive research and peer review effort covering Fiscal Years 1995 through 1999,
          combining in-house activities with external research support. Its governing premise is that a
          well-integrated, interdisciplinary approach is the most appropriate strategy for a field this diverse — the
          plan draws on findings from other leading-edge disciplines, a review of worldwide research, consultation
          with outside experts, and lessons from STAR GATE’s own prior research and operational activity.
        </P>
        <P>
          A practical constraint shapes the plan’s urgency: external research support funded to date runs out in
          June 1994. Because human-subject research cannot simply be paused and resumed — interrupted studies
          generally have to restart from the beginning — the plan argues that continuity requires an uninterrupted,
          multi-year program, and that any decision to proceed should therefore be made without delay.
        </P>
      </DocSection>

      {/* ── Part II: Terminology & Plan Objectives ────────── */}
      <DocSection id="doc-terminology" number="PART II" title="Terminology & Plan Objectives">
        <P>
          Appendix B sets out the plan’s standard vocabulary, closely paralleling the terminology used across the
          wider STAR GATE literature. Foreign researchers use their own terms for this field — &quot;psychoenergetics&quot;
          in the USSR, &quot;extraordinary human function&quot; in the People’s Republic of China — but this plan
          adopts the neutral umbrella term anomalous mental phenomena (AMP), split into two aspects:{' '}
          <E term="anomalous cognition">anomalous cognition</E> (AC), covering information access with no known
          sensory channel involved, and <E term="anomalous perturbation">anomalous perturbation</E> (AP), covering
          mental influence over physical or biological systems by an unknown mechanism.
        </P>
        <P>
          The plan’s stated objective is to further develop understanding of the phenomena, of their potential
          applications, and of their operational feasibility — directly supporting DIA’s ability to assess
          foreign AMP research and to systematically review potential U.S. applications. In compliance with the
          conferees’ request, DIA recommends setting aside the first six to nine months of any new program for
          small, multidisciplinary working groups to identify the most promising and cost-effective experiments
          before full-scale work begins.
        </P>
        <P>
          Basic research is defined as pursuing the underlying mechanisms of AMP, beginning conservatively by
          assuming a putative &quot;sensorial&quot; system for AMP that behaves similarly to the five known senses. Applied
          research is defined as improving AMP functioning toward its practical maximum, holding variables like
          training methodology constant against a base of known, reliable receivers and targets. A third strand,
          foreign assessment, aims to determine how far claims from foreign laboratories can be confirmed under
          controlled, U.S.-based conditions.
        </P>
      </DocSection>

      {/* ── Part III: Project & Scientific Oversight ──────── */}
      <DocSection id="doc-oversight" number="PART III" title="Project & Scientific Oversight">
        <P>
          The plan lays out a dense, multi-layered oversight structure. Program-level review runs through a
          five-member Project Review Board drawn from outside the National Military Intelligence Production Center, a
          six-member Project Oversight Panel providing technical guidance, the 28-member DIA Advisory Board, and
          periodic reviews from the General Defense Intelligence Program staff director — described as ensuring every
          activity in the plan can be monitored and evaluated on an ongoing basis.
        </P>
        <P>
          Scientific oversight of the external contract work runs separately, through the{' '}
          <E term="Scientific Oversight Committee">Scientific Oversight Committee</E> (SOC), whose five voting members
          are drawn from physics, astronomy, statistics, neuroscience, and psychology, and a contractor{' '}
          <E term="Institutional Review Board">Institutional Review Board</E> (IRB) drawn from the health, legal, and
          spiritual professions. The SOC must approve every experimental protocol before data collection begins,
          reviews every final report as if it were a journal submission, and its members may make unannounced
          drop-in visits to observe experiments in progress.
        </P>
        <P>
          On the question of scientific validity, the plan states plainly that the &quot;STAR GATE Scientific Advisory
          Committee has determined that the scientific validity of the STAR GATE program has been satisfactorily
          demonstrated under the most demanding of experimental protocols,&quot; identifying a statistically significant
          anomaly not currently explained by conventional means — and citing, as a measure of the field’s standing,
          a claim that 77% of surveyed academics in the arts, humanities, and education believe AMP is either an
          established fact or a likely possibility.
        </P>
      </DocSection>

      {/* ── Part IV: The 1987 Review ───────────────────────── */}
      <DocSection id="doc-review" number="PART IV" title="The 1987 Enhanced Human Performance Review">
        <P>
          As evidence that STAR GATE’s predecessor work has already withstood independent scrutiny, the plan
          reproduces at Appendix H a formal 1987 assessment of the{' '}
          <E term="Enhanced Human Performance Project">Enhanced Human Performance Project</E> — the earlier,
          Army-sponsored phase of this same research line. At the request of MG Philip K. Russell, Commander of the
          U.S. Army Medical Research and Development Command, the{' '}
          <E term="Project Review Group">Project Review Group</E> convened at the Pentagon on 6 March 1987. Its
          members were Ms. Amoretta Hoeber (TRW), Dr. Jack Vorona (DIA), Dr. Michael A. Wartell (Humboldt State
          University), Dr. Chris Zarafonetis (Biomedical R&amp;D, Inc.), and Dr. Nick Yaru as chairman. Also present
          was <E term="Edwin C. May">Dr. Edwin C. May</E>, SRI’s Principal Investigator on the project whose work
          was under review.
        </P>
        <P>
          The group was asked to answer four questions, and — the report is careful to note — reached unanimous
          answers to each:
        </P>
        <P className="pl-4 border-l-2 border-accent/30">
          <span className="text-foreground">1. Is the science sound?</span> — Yes. The individual FY1986 experiments
          appeared scientifically sound, under continual qualified scrutiny from the Scientific Oversight
          Committee, with adjustments made promptly by the researchers to maintain quality.<br /><br />
          <span className="text-foreground">2. Is there an anomaly?</span> — Yes. &quot;The results of experiments
          conducted by this Project during FY 1986, as well as other reports of previous operational related
          research, lead this Review Group to conclude that a natural anomaly exists, which we will refer to as{' '}
          <span className="text-accent font-mono">Remote Viewing</span>.&quot;<br /><br />
          <span className="text-foreground">3. Is it worthwhile?</span> — Yes, continuation was judged &quot;not only
          warranted, but entirely appropriate and strongly recommended,&quot; with real DoD applications possible
          should Remote Viewing prove predictably reproducible and its mechanisms become understood.<br /><br />
          <span className="text-foreground">4. Is the direction and emphasis appropriate?</span> — Partially. The
          group judged the probability of successfully demonstrating and explaining{' '}
          <E term="Remote Action">Remote Action</E> lower than for Remote Viewing, and recommended the project stop
          funding both at equal effort — instead critically reviewing the coming year’s results, exploiting the
          areas showing the most promise, terminating the rest, and shifting to a narrower, more vertical focus (with
          adequate resources still assured for that narrower effort, not as a cost-cutting move).
        </P>
        <P>
          The group also recommended the project sharpen its use of three terms often blurred together — global or
          conceptual replication (other labs observing the phenomena without following the same protocol),
          exact or technical replication (other labs reproducing it with the same protocol, different subjects and
          targets), and reproducibility (the same subjects reproducing it over time on a freshly randomized target
          set) — and, in service of reproducibility specifically, urged identifying and working with especially
          talented individuals, plus establishing one or two additional secure labs to carry out exact/technical
          replication of the most promising experiments.
        </P>
        <P>
          The panel’s formal summary, signed by Dr. Nick Yaru as chairman, states that the Project Review Group
          &quot;has determined to its satisfaction that the work of the Enhanced Human Performance Project is
          scientifically sound, appropriately managed and monitored, and is providing valuable insight into the
          nature of an anomaly which could have a significant impact on the DoD.&quot;
        </P>
      </DocSection>
    </>
  );
}
