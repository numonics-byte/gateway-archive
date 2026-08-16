import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',       label: 'Preface and Recent DIA Direction' },
  { id: 'doc-history',     label: '1. Brief History of Phenomenological Research' },
  { id: 'doc-demos',       label: '2. Remote Viewing Demonstrations' },
  { id: 'doc-applications', label: '3. Application Investigations' },
  { id: 'doc-foreign',     label: '4. Foreign Assessments' },
  { id: 'doc-terminology', label: '5. Appendix A — Terminology' },
  { id: 'doc-review',      label: '6. Appendix B — 1984 SRI Program Review' },
];

export const entities: Record<string, Entity> = {
  'STAR GATE': {
    title: 'STAR GATE',
    definition: 'The official name for the Defense Intelligence Agency\'s parapsychological research program, established following $2 million in FY 1991 Defense Authorization Act funding. Encompassed foreign assessment, external research (contracted to SAIC), and in-house application investigations.',
    crossRef: 'Preface and Recent DIA Direction',
    category: 'concept',
  },
  'SUN STREAK': {
    title: 'SUN STREAK',
    definition: 'The Special Access Program (SAP) established to protect the identity of individuals involved in operational remote viewing projects, when the original INSCOM unit was transferred to DIA in 1986 with 12 authorized billets.',
    crossRef: 'Part 3 — Application Investigations',
    category: 'concept',
  },
  'Ingo Swann': {
    title: 'Ingo Swann',
    definition: 'The trainer whose five years of self-developed technique — centered on a coordinate method using latitude and longitude — became the basis for training roughly a dozen other remote viewers to varying levels of claimed competence, per the 1984 SRI program review.',
    crossRef: 'Appendix B — Training and the Coordinate Method',
    category: 'person',
  },
  'Harold Puthoff': {
    title: 'Dr. H. (Harold) Puthoff',
    definition: 'Head of the small SRI International research group that, over eleven years, sought evidence for extrasensory perception, with work centering on remote viewing of scenes beyond the subject\'s field of vision.',
    crossRef: 'Appendix B — SRI Studies in Remote Viewing',
    category: 'person',
  },
  'Robert Jahn': {
    title: 'Dr. Robert Jahn',
    definition: 'Dean of Princeton\'s Aerospace Science Department, who established a parapsychological research team exploring psychokinesis, precognition, and remote viewing — work described as more quantitative than SRI\'s, and independently estimated by Jahn to represent information transfer above noise at roughly one bit per thousand.',
    crossRef: 'Part 1 — Brief History of Phenomenological Research',
    category: 'person',
  },
  'J. B. Rhine': {
    title: 'Dr. J. B. Rhine',
    definition: 'The best-known early U.S. researcher, at Duke University, who explored proof-of-principle extrasensory perception using simple five-symbol card targets and established statistical methods — work that led to broad publicity and general acceptance that lab experiments had reasonably demonstrated telepathy, clairvoyance, and psychokinesis.',
    crossRef: 'Part 1 — Brief History of Phenomenological Research',
    category: 'person',
  },
  'coordinate method': {
    title: 'Coordinate Method',
    definition: 'Ingo Swann\'s technique of describing a remote location using only its expressed latitude and longitude — a procedure whose rational basis eluded the 1984 SRI review panel entirely, since the coordinates\' significance was unknown to the viewer, yet reportedly still produced precise geographic detail.',
    crossRef: 'Appendix B — Training and the Coordinate Method',
    category: 'technique',
  },
  'anomalous cognition': {
    title: 'Anomalous Cognition (AC)',
    definition: 'A term, alongside remote viewing (RV) and extrasensory perception (ESP), for the "informational" aspect of the phenomena under study — the ability to describe remote or concealed data without use of known sensory systems. Distinguished from "energetic" phenomena like psychokinesis.',
    crossRef: 'Appendix A — Terminology',
    category: 'concept',
  },
  'Scientific Oversight Committee': {
    title: 'Scientific Oversight Committee',
    definition: 'A nine-person expert committee that critically reviewed the research procedures and techniques behind later SRI findings, judging the research approach and procedures scientifically sound.',
    crossRef: 'Part 1 — Brief History of Phenomenological Research',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">Secret / NOFORN</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00789R002800180001-2</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          STAR GATE Project: An Overview
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Publication', 'DTI-S-1056-SL'], ['Date', '30 April 1993'], ['Prepared By', 'Directorate for Scientific and Technical Intelligence, DIA']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          Prepared as background for a 5 May 1993 briefing to the Deputy Secretary of Defense, this document covers
          the three main activity areas of{' '}
          <E term="STAR GATE">STAR GATE</E>: foreign assessment, external research, and in-house investigations of
          parapsychological and related biophysical phenomena — telepathy, remote viewing, and psychokinesis.
        </P>
        <P>
          In the FY 1991 Defense Authorization Act, DIA was named executive agent for a new program investigating
          parapsychological and anomalous phenomena, with $2 million authorized for research and related activity —
          intended to enable a scientifically sound R&amp;D effort, broaden review of intelligence applications, and
          assess foreign developments. This activity was formally established as a limited-dissemination project
          under the name <E term="STAR GATE">STAR GATE</E>. A Congressionally requested Long-Range Comprehensive
          Plan followed, along with an external research contract with Science Applications International
          Corporation (SAIC). The FY 1992 Defense Appropriations Act added another $2 million, directing DIA toward
          a more even balance of foreign assessment, research, and operational activity — with foreign assessment
          emphasizing Russia and China, and a new priority on identifying possible foreign weaponization of this
          technology as unconventional or non-lethal weapons.
        </P>
      </section>

      {/* ── Part 1: Brief History ──────────────────────────── */}
      <DocSection id="doc-history" number="PART I" title="Brief History of Phenomenological Research">
        <P>
          Formal investigation into anomalous mental phenomena began in the mid-to-late 1800s, motivated by anecdotal
          accounts of spontaneous occurrences, with investigation societies established in London (1892) and New York
          (1896). The best-known early American researcher,{' '}
          <E term="J. B. Rhine">Dr. J. B. Rhine</E> of Duke University, used simple five-symbol card targets and
          established statistical methods to explore extrasensory perception, generating publicity and general
          acceptance that laboratory experiments had reasonably demonstrated telepathy, clairvoyance, and
          psychokinesis.
        </P>
        <P>
          New work in the 1960s, based in New York and San Antonio, shifted to a &quot;free-response&quot; approach —
          subjects attempting to draw concealed pictorial material rather than guess from a fixed set of cards —
          exploring altered states like deep relaxation and sleep, and requiring new statistical methods since target
          possibilities were no longer a small fixed set. The most productive of these teams, from Maimonides Medical
          Center, eventually relocated to Princeton and became the Psychophysical Research Laboratory, around the
          same time{' '}
          <E term="Robert Jahn">Dr. Robert Jahn</E>, Dean of Princeton&apos;s Aerospace Science Department,
          established his own parapsychological team exploring psychokinesis, precognition, and remote viewing.
          Early research at SRI International and Princeton went further, testing whether a remote viewer could
          describe geographic targets at a distance — with reliable results when limited to shape and form rather
          than analytical interpretation.
        </P>
        <P>
          The field&apos;s findings have never been readily or uniformly accepted. A 1987{' '}
          <span className="italic">Behavioral and Brain Sciences</span> review presented a balanced case for anomaly
          demonstration; a 1988 National Research Council report took a broadly negative stance despite reviewing
          only a limited slice of the field; more recent publications in{' '}
          <span className="italic">Statistical Science</span> (1991) and{' '}
          <span className="italic">Psychological Bulletin</span> (1993) provided evidence judged to support
          replicable paranormal effects. Later SRI investigations, reviewed by a nine-person expert{' '}
          <E term="Scientific Oversight Committee">Scientific Oversight Committee</E> and judged scientifically
          sound, produced several key findings: distance and shielding do not affect results; some individuals have
          an innate capability; goal orientation matters more than psychological state or target nature; and a
          potential correlation may exist between remote-viewing capability and specific brain-area activity. SRI&apos;s
          effort was discontinued in 1990, with research redirected to SAIC in Menlo Park following the FY 1991
          Congressional direction.
        </P>
      </DocSection>

      {/* ── Part 2: Remote Viewing Demonstrations ─────────── */}
      <DocSection id="doc-demos" number="PART II" title="Remote Viewing Demonstrations">
        <P>
          The overview includes several illustrated examples of remote-viewing sessions against real, verifiable
          targets, with the viewer&apos;s raw description quoted directly alongside the actual target.
        </P>
        <div className="border border-accent/30 cyber-chamfer p-5 my-4">
          <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-2">Close Location — Real-Time Beaconing</p>
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic mb-2">
            &quot;Some kind of diagonal trough up in the air&quot;... &quot;Building is an aereator&quot;
          </blockquote>
          <p className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase">Target: Walkway, Sylvania Facility</p>
        </div>
        <div className="border border-accent/30 cyber-chamfer p-5 my-4">
          <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-2">Close-In Shielded Viewing</p>
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic mb-2">
            &quot;This is an energy expander. It hums. It&apos;s some very strong electrical energy going around
            there... pure energy.&quot;
          </blockquote>
          <p className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase">Target: Berkeley Bevatron</p>
        </div>
        <div className="border border-accent/30 cyber-chamfer p-5 my-4">
          <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-2">Long Distance — Retrocognitive (14 hrs)</p>
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic mb-2">
            &quot;Rocks... uneven holes... on mountain over water... a lighthouse? Tall structure with conical roof...
            similar to a castle... musty... high, large, cavernous hall... a castle.&quot;
          </blockquote>
          <p className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase">Target: Urquhart Castle, Loch Ness, Scotland</p>
        </div>
        <div className="border border-accent/30 cyber-chamfer p-5 my-4">
          <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-2">Long Distance — Precognitive (24 hrs)</p>
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic mb-2">
            &quot;[Beacon] is somewhere near water... may be boats... several vertical lines, like narrow poles... a
            large round thing, like a disc, with height... buildings on one side... like a boardwalk... vertical
            lines along the walkway.&quot;
          </blockquote>
          <p className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase">Target: Danube River area, Bratislava, Czechoslovakia</p>
        </div>
      </DocSection>

      {/* ── Part 3: Application Investigations ────────────── */}
      <DocSection id="doc-applications" number="PART III" title="Application Investigations">
        <P>
          In the early 1970s, SRI International research on remote viewing came to CIA&apos;s attention, which then
          funded continued work until 1975; subsequent funding came from DIA and its service-support elements,
          primarily motivated by threat assessment of Soviet capability. Successful long-distance SRI experiments
          generated interest in operational use with in-house government personnel: HQDA/INSCOM established a small
          unit in the late 1970s, transferred to DIA in 1986 under 12 authorized billets, with a Special Access
          Program named <E term="SUN STREAK">SUN STREAK</E> established to protect participant identities.
        </P>
        <P>
          After the Military Intelligence Board agreed in 1989 to field-test the project&apos;s utility on
          counternarcotics work, and reviewed results that September,{' '}
          <E term="STAR GATE">STAR GATE</E> was established to expand and systematize the effort. Of 192 total
          projects worked between 1986 and 1989, a formal review found potential applications for counternarcotics,
          counterterrorism, and counterintelligence work; only limited potential for precise, detailed data such as
          exact locations; and low potential for predictive tasks — though individual performance correlated with
          project demands and improved under strong goal orientation. A follow-up 1990 review, evaluating 32 of 104
          conducted counternarcotics projects (weather and operational constraints prevented ground-truth follow-up
          on the rest), found about one-third had provided data of good quality.
        </P>
      </DocSection>

      {/* ── Part 4: Foreign Assessments ────────────────────── */}
      <DocSection id="doc-foreign" number="PART IV" title="Foreign Assessments">
        <P>
          The FY 1991 Defense Authorization Act directed DIA to develop an integrated foreign database on
          parapsychological activities. The declassified release withholds the substance of this section entirely —
          the document marks ten full pages here as{' '}
          <span className="italic">&quot;Exempt&quot;</span> from release, leaving only this brief introduction
          visible.
        </P>
      </DocSection>

      {/* ── Part 5: Appendix A — Terminology ───────────────── */}
      <DocSection id="doc-terminology" number="APPENDIX A" title="Terminology">
        <P>
          The report distinguishes two general types of the phenomena under investigation. The{' '}
          <span className="text-foreground font-medium">informational</span> aspect covers the ability to describe
          remote or concealed data without known sensory systems — commonly called remote viewing (RV) or
          extrasensory perception (ESP), and increasingly referred to by researchers as{' '}
          <E term="anomalous cognition">anomalous cognition</E> (AC); the ability to predict future events is
          precognition. The <span className="text-foreground font-medium">energetic</span> aspect refers to mental
          influence over material or biological systems by unknown mechanisms — psychokinesis (PK). Soviet
          researchers generally use the term &quot;psychoenergetics&quot; for this area; Chinese researchers prefer
          &quot;extraordinary human body functions&quot; or &quot;somatic science.&quot;
        </P>
      </DocSection>

      {/* ── Part 6: Appendix B ──────────────────────────────── */}
      <DocSection id="doc-review" number="APPENDIX B" title="1984 SRI Program Review">
        <P>
          Appendix B reproduces an independent review, dated 1 March 1984, of the SRI remote-viewing program headed
          by <E term="Harold Puthoff">Dr. H. Puthoff</E>. The reviewers found the implications of genuine remote
          viewing &quot;revolutionary&quot; and manifestly incompatible with accepted scientific principles — real-time
          viewing would require a transmission mechanism unlike any known physical process, and viewing of future
          events would violate causality outright. Still, they wrote that &quot;the evidence shown to us is too
          impressive to dismiss as mere coincidence,&quot; citing compelling similarities between the SRI results and
          the independently obtained, more quantitative results from{' '}
          <E term="Robert Jahn">Dr. Jahn</E>&apos;s Princeton work — which Jahn estimated corresponded to
          information transfer above noise of roughly one bit per thousand.
        </P>
        <P>
          The panel examined the training program developed over five years by{' '}
          <E term="Ingo Swann">Ingo Swann</E>, whose self-developed technique had by then been passed to roughly a
          dozen trainees. Central to Swann&apos;s method was the{' '}
          <E term="coordinate method">coordinate method</E> — describing a target using only its latitude and
          longitude — a procedure the panel could find no rational basis for, since the coordinates&apos; meaning was
          unknown to the viewer, yet repeated attempts to get the investigators to question the mechanism or compare
          it with alternative methods were &quot;uniformly unsuccessful.&quot; Swann distinguished three phases in
          his own viewing process: an initial percept forming in as little as 1/50 of a second, several minutes of
          added detail, and only then — critically, not before — a period of critical judgment and interpretation,
          since intruding judgment too early was found to be destructive to accuracy.
        </P>
        <P>
          The panel&apos;s conclusion was cautious but genuinely supportive: remote viewing is either real, or the
          product of some form of experimental interference such as inadvertent cueing — and on their own brief
          exposure to the program, they found no obvious evidence of cueing or collusion. They recommended continued
          fiscal support, conducted as openly as possible so that reproducibility could be independently verified.
          The review is signed by W. Ross Adey and F. Zachariasen; a third signature is present in the source but its
          scan quality is too degraded to transcribe reliably. As with the Foreign Assessments section, part of this
          appendix is also marked exempt from release — two pages withheld immediately following the signed
          conclusion.
        </P>
      </DocSection>
    </>
  );
}
