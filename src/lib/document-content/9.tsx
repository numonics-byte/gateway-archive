import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',       label: 'Abstract and Introduction' },
  { id: 'doc-structure',   label: '1. Basic Structure of an RV Session' },
  { id: 'doc-concepts',    label: '2. Noise Reduction and Impressionistic Data' },
  { id: 'doc-procedure',   label: '3. The Access, Objectify, Qualify Procedure' },
  { id: 'doc-anatomy',     label: '4. Anatomy of a Viewing' },
  { id: 'doc-examples',    label: '5. Examples — Novice to Expert' },
  { id: 'doc-training',    label: '6. Training Exercises and Glossary' },
  { id: 'doc-conclusions', label: '7. Conclusions and Recommendations' },
];

export const entities: Record<string, Entity> = {
  'Gary O. Langford': {
    title: 'Gary O. Langford',
    definition: 'Founder of Consultants International (1979) and co-author of this report, drawing on over thirteen years of formal and informal remote-viewing experimentation and six years of observing novice viewers.',
    crossRef: 'Company Background',
    category: 'person',
  },
  'targeting': {
    title: 'Targeting (Noise Reduction)',
    definition: 'The idea that a perceptual "window" to remote-viewing data can be briefly opened on demand through a stimulus-response technique — a neutral cue word ("target") reduces the mental noise of everyday concerns and memories that otherwise blocks access to the data.',
    crossRef: 'Part 2 — Noise Reduction and Impressionistic Data',
    category: 'technique',
  },
  'bit-grabbing': {
    title: 'Bit-Grabbing',
    definition: 'Once access to a target is established, correct impressions are fleeting, vague, and generally indistinct — captured as symbolic "bits" of data. Correct interpretation of these bits is a skill built through experience, especially for novices.',
    crossRef: 'Part 2 — Noise Reduction and Impressionistic Data',
    category: 'technique',
  },
  'Interpretive Overlay': {
    title: 'Interpretive Overlay (IO)',
    definition: 'Vivid, clear information that overshadows or distorts the real signal related to a target — often something experientially familiar to the viewer. Almost always incorrect and discarded, IO appears in 80–100% of novice sessions but drops to under 20% at the expert level, where it can even be used to extract additional target information.',
    crossRef: 'Part 3 — The Access, Objectify, Qualify Procedure',
    category: 'concept',
  },
  'Access, Objectify, Qualify': {
    title: 'Access, Objectify, Qualify',
    definition: 'The three-phase remote viewing procedure: Access opens the perceptual channel via a stimulus word; Objectify records the first impression quickly as a written or drawn "bit," discarding anything that feels too vivid or distinct (Interpretive Overlay); Qualify repeats the cycle and builds a full description of texture, function, color, and form.',
    crossRef: 'Part 3 — The Access, Objectify, Qualify Procedure',
    category: 'technique',
  },
  'retracing': {
    title: 'Retracing',
    definition: 'When access to a target through an objectified bit feels clouded, tracing back over the written bit with the pen can refocus attention on the underlying experience, helping clarify the bit\'s corporeal and aesthetic qualities.',
    crossRef: 'Part 6 — Training Exercises and Glossary',
    category: 'technique',
  },
  'ideogram': {
    title: 'Ideogram',
    definition: 'A written symbol directly representing an idea or object — formally, a bit combined with a feeling. The order in which ideogram qualities are typically described, observed across years of sessions, is concrete objects, then spatial forms, then colors, then numbers.',
    crossRef: 'Part 6 — Training Exercises and Glossary',
    category: 'concept',
  },
  'Consultants International': {
    title: 'Consultants International (CI)',
    definition: 'The firm founded by Gary Langford in 1979 to develop and apply remote-viewing abilities to problems unsolvable by conventional means, with clients including five government organizations, four industrial corporations, four commercial companies, and three private individuals.',
    crossRef: 'Company Background',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">Secret</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00789R002200070001-0</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          A Suggested Remote Viewing<br />Training Procedure
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Authors', 'G. Scott Hubbard (SRI) and Gary O. Langford (CI)'], ['Date', '7 December 1986'], ['Contract', 'DAMD 17-85-C-5130']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          In FY 1986, SRI International subcontracted{' '}
          <E term="Consultants International">Consultants International</E> (CI) to assemble a detailed report, by
          an expert viewer, of the subjective experience of remote viewing — with the goal of suggesting procedures
          that might evolve into a testable training method. Two key concepts emerged for testing: that a
          perceptual &quot;window&quot; to remote-viewing data can be briefly opened on demand through a
          stimulus-response technique, and that once access is established, correct impressions are fleeting, vague,
          and captured as symbolic &quot;bits&quot; of data. SRI used these concepts to begin a Novice RV Training
          program with nine individuals selected through psychological profiling.
        </P>
        <P>
          The authors are careful to frame the material honestly: these concepts arose almost entirely from personal
          observation, introspection, and informal experimentation, with almost none rigorously tested against
          sufficient data to establish them as fact — a formal test of a few of the ideas was, at the time of
          writing, just getting underway.
        </P>
      </section>

      {/* ── Part 1: Basic Structure ────────────────────────── */}
      <DocSection id="doc-structure" number="PART I" title="Basic Structure of an RV Session">
        <P>
          Every session requires a Viewer (the percipient who accesses and records target data), a Monitor (who
          tracks session progress, maintains the procedural framework, and queries the viewer), and a Target — which
          can be almost anything, defined strictly by its property of uniqueness distinguishing it from every other
          potential target, from a single sealed photograph to encoded geographic coordinates.
        </P>
        <P>
          A typical SRI demonstration session: an experimenter outside the session selects a target photograph from
          a pool of 300 (drawn from National Geographic Magazine, covering a wide range of man-made and natural
          sites) using a computer pseudorandom number generator, then seals it inside an opaque folder and envelope
          in an adjacent room. After the viewing, the monitor opens the envelope and shows the viewer the actual
          target — a feedback step the report describes as crucial for reinforcing correct perception going forward.
        </P>
      </DocSection>

      {/* ── Part 2: Noise Reduction ─────────────────────────── */}
      <DocSection id="doc-concepts" number="PART II" title="Noise Reduction and Impressionistic Data">
        <P>
          CI holds that once a target is agreed upon, information about it is immediately available below the
          viewer&apos;s conscious awareness — but normal mental noise (concerns, memories, imagination, analysis)
          usually blocks access. Everyone, they claim, occasionally and spontaneously lapses into brief quiet periods
          where a flash of intuition brings that information to awareness; the purpose of{' '}
          <E term="targeting">targeting</E> is to artificially stimulate those periods on demand. In practice, a
          monitor speaks a neutral cue word — &quot;target&quot; — and the viewer&apos;s task is to capture only the
          very first mental impression that follows, within a reported data-access window of roughly half a second
          to a second. Sensory isolation techniques like white noise or the Ganzfeld were tried as ways to further
          reduce noise but reportedly backfired, increasing vivid imagery rather than reducing it; hypnosis was
          slated for FY 1987 investigation but had not, in related tasks, historically outperformed the normal waking
          state.
        </P>
        <P>
          Once access opens, <E term="bit-grabbing">bit-grabbing</E> takes over: correct impressions are
          impressionistic and vague, especially for novices, and largely nonvisual even when experienced viewers
          describe them as visual. CI developed a set of common symbols — angular lines for steep cliffs or
          structures, curved lines for a bounded area or channel, straight lines for a boundary or shoreline,
          irregular waving lines for rolling terrain, jagged lines for hills or mountains, and dots for shaded or
          light/dark areas — to help novices capture these bits before analysis destroys them.
        </P>
      </DocSection>

      {/* ── Part 3: The Procedure ──────────────────────────── */}
      <DocSection id="doc-procedure" number="PART III" title="The Access, Objectify, Qualify Procedure">
        <P>
          Once a novice grasps noise reduction and bit recognition, further progress depends on a structured
          three-phase procedure: <E term="Access, Objectify, Qualify">Access, Objectify, Qualify</E>. Access means
          uniquely identifying the target, establishing a genuine need to describe it, supplying the stimulus word,
          and capturing the very first impression that follows. Objectify means quickly recording that impression as
          a bit symbol — correct data will feel vague — then taking a brief 10-to-30-second break; any impression
          that instead feels vivid or distinct is circled and labeled as{' '}
          <E term="Interpretive Overlay">Interpretive Overlay</E>, and discarded. Qualify means repeating the cycle
          until the target is described in real detail — texture, function, color, age, motion — and ending only
          once feedback about the actual target is received.
        </P>
        <P>
          As viewers progress from novice to expert, the balance of time spent on each phase shifts dramatically:
          novices spend nearly all their early sessions on Access alone, gradually adding Objectify and only later
          Qualify, while expert viewers spend nearly 100% of session time on Qualify — access becomes close to
          instantaneous and routine.
        </P>
      </DocSection>

      {/* ── Part 4: Anatomy of a Viewing ────────────────────── */}
      <DocSection id="doc-anatomy" number="PART IV" title="Anatomy of a Viewing">
        <P>
          The report walks through an unedited, six-stage transcript from a single expert session. In the initial
          access period, the viewer records name, date, time, and session number to satisfy the uniqueness
          requirement, then produces primary bits of &quot;a steep angle drop-off&quot; and &quot;a flat area,&quot;
          with multiple connecting bits filling the gap, before writing &quot;break&quot; to end access — already
          more data than a novice would typically produce at this stage. In the second period, the viewer is hit with
          a vivid impression of cliffs and water, correctly recognizes it as Interpretive Overlay, and labels it as
          such rather than treating it as signal. By the third period the viewer enters the Qualify phase for the
          first time, describing a hard surface; the fourth spends more time on form and function; by the fifth, the
          viewer uses retracing to pull more detail from an earlier bit and begins arranging bits into something more
          pictorial; and in the sixth and final period, the bits resolve into a coherent composite, which the viewer
          summarizes in a single word: &quot;ruins.&quot;
        </P>
      </DocSection>

      {/* ── Part 5: Examples ───────────────────────────────── */}
      <DocSection id="doc-examples" number="PART V" title="Examples — Novice to Expert">
        <P>
          Appendix A illustrates the progression across skill levels with real sessions. A novice-level response to
          the target Grant&apos;s Tomb — designated by an outbound &quot;beacon&quot; person physically at the site — showed
          only a weak correspondence between the drawing and the tomb&apos;s gross exterior shape, the kind of result
          typical of novice sessions, which are rarely sufficient to blind-match against a set of candidate targets.
          An advanced-level long-distance session against the Louisiana Superdome, run from SRI in Menlo Park,
          correctly described &quot;a large circular building with a white dome.&quot; An expert-level session,
          tasked with describing the perpetrator of a specific criminal offense on a specified date, produced an
          accurate portrayal of facial characteristics — the kind of result expert viewers achieve roughly 10% of
          the time, at a quality level well above the advanced tier.
        </P>
        <P>
          A separate expert session applying the complete Access-Objectify-Qualify methodology described in this
          report reached equivalent information content to the criminal-suspect session in just 12 minutes, versus
          more than 90 minutes for the earlier examples — evidence, the authors suggest, that structured procedure
          measurably speeds up expert performance without sacrificing accuracy.
        </P>
      </DocSection>

      {/* ── Part 6: Training and Glossary ──────────────────── */}
      <DocSection id="doc-training" number="PART VI" title="Training Exercises and Glossary">
        <P>
          Appendix B outlines classroom exercises for introducing novices to sub-second perception — for instance,
          briefly blinking open the eyes to glimpse a scattered group of small objects or a photograph, then writing
          down first impressions before comparing them to the actual target — with the caution that this exercise
          should be used only once or twice before being dropped, since it doesn&apos;t fully replicate the RV
          experience itself. A parallel word-association sequence (saying &quot;house,&quot; then &quot;water,&quot;
          then a single letter, and having trainees objectify each) is used to demonstrate that remote sensing is
          learned the same way any other skill is: through repetition and reinforcement of the correct response.
        </P>
        <P>
          The report also documents{' '}
          <E term="retracing">retracing</E> — tracing back over a clouded bit with the pen to refocus attention on
          the underlying experience — and defines a small working glossary:{' '}
          <E term="ideogram">ideogram</E> (a bit combined with a feeling), state, access, objectify, and qualify,
          alongside careful distinctions between consciousness, unconsciousness, and subconsciousness as used
          throughout the report.
        </P>
      </DocSection>

      {/* ── Part 7: Conclusions ─────────────────────────────── */}
      <DocSection id="doc-conclusions" number="PART VII" title="Conclusions and Recommendations">
        <P>
          With formal testing of CI&apos;s methodology still underway at the time of writing, the authors describe
          the evidence for its effectiveness as suggestive rather than conclusive. From SRI&apos;s perspective, the
          key ingredients in training appear to be latent ability, motivation, structured practice, and the
          conceptual framework CI supplies — though the relative importance of each had not yet been experimentally
          determined. The report recommends expanding CI&apos;s work to expert-level as well as novice and advanced
          training, contingent on results, and calls for rigorous testing to determine which specific elements of the
          training concept actually drive improvement.
        </P>
      </DocSection>
    </>
  );
}
