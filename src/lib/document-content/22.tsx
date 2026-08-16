import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',     label: 'Introduction — Background' },
  { id: 'doc-table',     label: '1. The Experiment Database' },
  { id: 'doc-details',   label: '2. Experiment Details' },
  { id: 'doc-comments',  label: '3. Comments' },
  { id: 'doc-glossary',  label: '4. Glossary of Terms' },
];

export const entities: Record<string, Entity> = {
  'Edwin C. May': {
    title: 'Edwin C. May, Ph.D.',
    definition: 'Author of this memorandum and director of the SAIC research program that succeeded SRI International\'s Cognitive Sciences Program. Reports to a Scientific Oversight Committee on the results of ten government-contracted experiments conducted between 1991 and 1994.',
    crossRef: 'Memorandum header — From',
    category: 'person',
  },
  'Scientific Oversight Committee': {
    title: 'Scientific Oversight Committee (SOC)',
    definition: 'A committee created to actively monitor SAIC\'s research, following the model of the prior SRI program. Chartered to approve written protocols and statistical analyses before any experiment, exercise unannounced drop-in privileges to observe experiments in progress, review final reports in writing, and provide guidelines for future research.',
    crossRef: 'Introduction — Background',
    category: 'concept',
  },
  'anomalous cognition': {
    title: 'Anomalous Cognition (AC)',
    definition: 'A form of information transfer in which all known sensorial stimuli are absent — some individuals gain access to information by an as yet unknown process. Also known as Remote Viewing (RV) or clairvoyance.',
    crossRef: 'Glossary',
    category: 'concept',
  },
  'psychokinesis': {
    title: 'Psychokinesis (PK)',
    definition: 'A form of interaction with matter in which all known physical mechanisms are absent — some individuals are able to influence matter by an as yet unknown process. Also known as telekinesis.',
    crossRef: 'Glossary',
    category: 'concept',
  },
  'receiver': {
    title: 'Receiver',
    definition: 'An individual who attempts to perceive, by anomalous cognition, and report information about a sensorially isolated target. Also known as a Subject or Percipient.',
    crossRef: 'Glossary',
    category: 'concept',
  },
  'sender': {
    title: 'Sender',
    definition: 'An individual who, while receiving direct sensorial stimuli from an intended target, acts as a putative transmitter of that information to the receiver in AC experiments.',
    crossRef: 'Glossary',
    category: 'concept',
  },
  'effect size': {
    title: 'Effect Size',
    definition: 'The statistical measure, reported with an uncertainty and p-value, of how strongly an experiment\'s results depart from chance. Reported in Table 1 for all ten SAIC experiments; combined across the six experiments using a traditional AC protocol, the weighted effect size was 0.230 ± 0.047 across 455 trials (p = 5.7×10⁻⁶).',
    crossRef: 'Comments — Aggregate Result',
    category: 'concept',
  },
  'protocol': {
    title: 'Protocol',
    definition: 'A template for conducting a structured data collection session, requiring SOC review and approval — including all statistical analyses — before any experiment could begin.',
    crossRef: 'Glossary',
    category: 'concept',
  },
  'trial': {
    title: 'Trial',
    definition: 'The smallest unit of data to be analyzed in an anomalous mental phenomena (AMP) session.',
    crossRef: 'Glossary',
    category: 'concept',
  },
};

const TABLE_ROWS: [string, string, string, string, string][] = [
  ['1. Target Dependencies', '200', '0.124 ± 0.071', '0.040', ''],
  ['2. AC of Binary Targets', '300', '0.123 ± 0.058', '0.017', ''],
  ['3. MEG Replication', '12,000s', 'MCE', 'MCE', ''],
  ['4. AC With Binary Coding', '40', '−0.067 ± 0.158', '0.664', ''],
  ['5. AC in Lucid Dreams (Baseline)', '24', '0.088 ± 0.204', '0.333', ''],
  ['6. AC in Lucid Dreams (Pilot)', '21', '0.368 ± 0.218', '0.046', ''],
  ['7. Remote Observation', '48', '0.361 ± 0.144', '0.006', ''],
  ['8. ERD EEG Investigation', '7,000s', 'MCE', 'MCE', ''],
  ['9. ERD AC Behavior', '70', '0.303 ± 0.120', '0.006', ''],
  ['10. Entropy II', '90', '0.550 ± 0.105', '9.1×10⁻⁴', ''],
];

export default function Body() {
  return (
    <>
      {/* ── Document Header ──────────────────────────────── */}
      <section id="doc-intro" className="scroll-mt-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 border border-destructive cyber-chamfer-sm px-3 py-1 bg-destructive/10">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-neon" />
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">SG1I</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00791R000200190047-6</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          SAIC Experiment Database
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['From', 'Edwin C. May, Ph.D.'], ['Date', '25 July 1995'], ['Source', 'Cognitive Sciences Laboratory, SAIC, Palo Alto']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          <E term="Edwin C. May">Edwin C. May</E> was asked to identify a complete list of experiments conducted at
          Science Applications International Corporation (SAIC) from 4 February 1991 through 30 September 1994. This
          memorandum lists the experiments, describes their justification, and tabulates their overall results, with
          complete references to the original reports.
        </P>
        <P>
          Following the example of the prior Cognitive Sciences Program at SRI International, SAIC was asked to
          create a{' '}
          <E term="Scientific Oversight Committee">Scientific Oversight Committee</E> (SOC) to actively monitor the
          research. To comply with a Congressionally directed requirement, the first four months of the contract
          were used to prepare a five-year integrated research plan; technical and human-use protocols then had to be
          officially approved before any experimentation could begin. Data collection began in January 1992 and
          continued, with gaps to prepare and seek approval for further protocols, through March 1994. All approved
          protocol documents, final reports, and SOC comments remain on file with the sponsor.
        </P>
      </section>

      {/* ── Part 1: The Experiment Database ───────────────── */}
      <DocSection id="doc-table" number="PART I" title="The Experiment Database">
        <P>
          Ten experiments were conducted by SAIC under government contract, spanning all pilot and formal series and
          containing every trial conducted — by definition, there is no &quot;file-drawer problem.&quot; Full results
          appear in two primary reports: May, Luke &amp; Lantz (1993),{' '}
          <span className="italic">Phenomenological Research and Analysis</span>, and May, Luke &amp; James (1994),{' '}
          <span className="italic">Phenomenological Research and Analysis, Final Report</span>. Experiments 1 and 10
          were additionally published in the peer-reviewed{' '}
          <span className="italic">Journal of Parapsychology</span>, Vol. 58.
        </P>

        <div className="overflow-x-auto border border-border cyber-chamfer-sm my-6">
          <table className="w-full text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-card border-b border-border">
                <th className="text-left px-3 py-2 font-label text-[9px] tracking-[0.1em] text-muted-foreground uppercase">Experiment</th>
                <th className="text-right px-3 py-2 font-label text-[9px] tracking-[0.1em] text-muted-foreground uppercase">Trials</th>
                <th className="text-right px-3 py-2 font-label text-[9px] tracking-[0.1em] text-muted-foreground uppercase">Effect Size</th>
                <th className="text-right px-3 py-2 font-label text-[9px] tracking-[0.1em] text-muted-foreground uppercase">P-Value</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(([name, trials, effect, p]) => (
                <tr key={name} className="border-b border-border/50 last:border-0">
                  <td className="px-3 py-2 text-foreground">{name}</td>
                  <td className="px-3 py-2 text-right text-muted-foreground tabular-nums">{trials}</td>
                  <td className="px-3 py-2 text-right text-accent tabular-nums">{effect}</td>
                  <td className="px-3 py-2 text-right text-muted-foreground tabular-nums">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P className="text-xs text-muted-foreground/80">
          MCE = mean chance expectation (no statistical effect found). Experiments 3 and 8 were physiologically
          oriented; their trial counts approximate the number of stimuli presented. Effect sizes are computed across
          all conditions and subjects, provided as a conservative guideline.
        </P>
      </DocSection>

      {/* ── Part 2: Experiment Details ────────────────────── */}
      <DocSection id="doc-details" number="PART II" title="Experiment Details">
        <P>
          <span className="text-accent font-mono">1. Target and Sender Dependencies.</span> This experiment tested
          whether AC quality depends on a{' '}
          <E term="sender">sender</E> focusing attention on the target, and whether dynamic targets (video clips)
          outperform static ones (photographs), as claimed in the Ganzfeld literature. The results found a sender is
          not necessary for good AC, and — contrary to Ganzfeld findings — static targets produced stronger AC than
          dynamic ones, with a significant correlation between AC quality and the Shannon-entropy gradient of static
          targets.
        </P>
        <P>
          <span className="text-accent font-mono">2. Enhancing Detection of AC of Binary Targets.</span> Designed to
          test whether information theory and error correction could increase binary hit rates, this experiment used
          two novice receivers and one experienced receiver (&quot;531,&quot; who had previously produced significant
          results in SRI&apos;s 1979 random number generator experiment). Receiver 531 again produced a significant
          result, though efficiency was low — 213 individual binary calls were needed to reach a single sequential
          analysis decision. The combined significant result was exclusively attributable to this one receiver.
        </P>
        <P>
          <span className="text-accent font-mono">3. Magnetoencephalograph Replication.</span> An attempted
          replication, with substantially more data, of significant neuromagnetic responses to isolated image stimuli
          previously reported at the close of the SRI program. No statistical evidence of an effect was found — and,
          after the fact, a fatal flaw was discovered that neither the SOC, Los Alamos National Laboratory
          neuroscience staff, nor the Cognitive Sciences Laboratory staff had caught: the dependent variable (phase
          shift of the dominant alpha rhythm) was constrained by the Cramer–Rao condition, which set a lower limit on
          measurable variance that would have masked any real effect. The experiment nonetheless informed the design
          of the next attempt to find a central-nervous-system correlate of AC (Experiment 8).
        </P>
        <P>
          <span className="text-accent font-mono">4–6. Binary Coding and Lucid Dream Trials.</span> An attempt to use
          error-correcting binary coding to &quot;send a message&quot; via AC produced no statistical evidence of an
          effect, though statistical power was low. Two related pilot experiments tested whether AC could be enhanced
          in the lucid-dream state; a baseline series with Lucidity Institute personnel found one of three receivers
          producing solid evidence for AC, while a follow-up pilot of 21 trials — conducted with each dreamer taking
          the sealed target home overnight — found a stronger, significant effect via rank-order analysis.
        </P>
        <P>
          <span className="text-accent font-mono">7. Autonomic Detection of Remote Observation.</span> Motivated by
          Former Soviet Union research suggesting biological systems make excellent targets for anomalous
          perturbation, this experiment had an isolated sender attempt to physiologically arouse a sensorially
          isolated receiver, measured via electrodermal activity. The experiment successfully replicated the earlier
          FSU-inspired work.
        </P>
        <P>
          <span className="text-accent font-mono">8–9. EEG and ERD Investigations.</span> Reasoning that AC, like
          virtually all human activity, should interrupt production of the brain&apos;s alpha rhythm, this pair of
          experiments collected EEG data alongside standard behavioral AC data, using event-related desynchronizations
          (ERD) as match-filter templates. Analysis of the first EEG lead found no evidence of an AC-induced ERD — a
          result considered useful either way, since the absence of ERD alongside significant AC evidence is itself
          informative. A companion behavioral experiment (70 trials, rank-order judged) found two of three receivers
          independently significant.
        </P>
        <P>
          <span className="text-accent font-mono">10. The Gradient of Shannon&apos;s Entropy.</span> A replication,
          with a narrower target-pool bandwidth and closer session monitoring, of the entropy-and-target-type finding
          from Experiment 1. The result conceptually replicated — greater Shannon-entropy gradient in the target
          correlated with better AC — though because the significant correlation traced mainly to target-type
          differences, the memo cautions it is premature to conclude entropy gradient is the deciding factor. Monte
          Carlo results added to the manuscript for publication favor the hypothesis nonetheless.
        </P>
      </DocSection>

      {/* ── Part 3: Comments ───────────────────────────────── */}
      <DocSection id="doc-comments" number="PART III" title="Comments">
        <P>
          By definition, this data set contains no file-drawer problem — every trial from the SAIC database was
          included. For the six experiments using a traditional AC protocol, regardless of condition, the weighted{' '}
          <E term="effect size">effect size</E> was 0.230 ± 0.047 across 455 trials (p = 5.7×10⁻⁶). All experiments
          described here were approved by the SOC and the Institutional Review Board.
        </P>
      </DocSection>

      {/* ── Part 4: Glossary ───────────────────────────────── */}
      <DocSection id="doc-glossary" number="GLOSSARY" title="Glossary of Terms">
        <P>
          The memorandum closes with a glossary of standard terminology for anomalous mental phenomena (AMP) research,
          not all of which is used elsewhere in this document but included for completeness:
        </P>
        <P className="pl-4 border-l-2 border-accent/30">
          <E term="anomalous cognition">Anomalous Cognition (AC)</E> — information transfer with no known sensorial
          stimuli present; also called Remote Viewing or clairvoyance.<br /><br />
          <span className="text-foreground">Agent</span> — an individual who attempts to influence a target system by
          mental means alone.<br /><br />
          <span className="text-foreground">Analyst</span> — an individual who provides a quantitative measure of AC,
          usually blind to experimental conditions and the intended target.<br /><br />
          <E term="psychokinesis">Psychokinesis (PK)</E> — influencing matter with no known physical mechanism
          present; also called telekinesis.<br /><br />
          <span className="text-foreground">Beacon</span> — an individual who, while receiving direct sensorial
          stimuli from a target, acts as a focus of attention for the receiver.<br /><br />
          <span className="text-foreground">Feedback</span> — information about the intended target, displayed to the
          receiver or agent after a response is secured.<br /><br />
          <span className="text-foreground">Noise</span> — incorrect elements in an AC response.<br /><br />
          <E term="protocol">Protocol</E> — a template for conducting a structured data collection session.<br /><br />
          <E term="receiver">Receiver</E> — an individual who attempts to perceive and report on a sensorially
          isolated target by AC; also called a Subject or Percipient.<br /><br />
          <E term="sender">Sender</E> — an individual who acts as a putative transmitter of target information to the
          receiver.<br /><br />
          <span className="text-foreground">Session</span> — a time interval during which AMP data are collected.
          <br /><br />
          <span className="text-foreground">Specialty</span> — a receiver&apos;s tendency to be particularly
          successful with a given class of targets.<br /><br />
          <span className="text-foreground">Target</span> — the item that is the focus of an AMP task.<br /><br />
          <E term="trial">Trial</E> — the smallest unit of data to be analyzed.
        </P>
      </DocSection>
    </>
  );
}
