import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',   label: 'Introduction' },
  { id: 'doc-hp10',     label: '1. The HP-10 Series' },
  { id: 'doc-keys',     label: '2. Other Keys & Everyday Use' },
];

export const entities: Record<string, Entity> = {
  'HP-10 Series': {
    title: 'HP-10 Series',
    definition: 'A set of Hemi-Sync taped exercises, part of the Management series, that trains an individual to perceive an entire problem simultaneously rather than through linear left-brain reasoning alone. Associates ten numbered "keys" with specific, instantly recallable mental states.',
    crossRef: 'Part I — The HP-10 Series',
    category: 'technology',
  },
  'Frequency Following Response': {
    title: 'Frequency Following Response (FFR)',
    definition: 'The brain\'s tendency to synchronize its own electrical activity to an external audio frequency. Here applied specifically to whole-mind problem solving — allowing many possible solution paths to be perceived at once rather than processed one at a time.',
    crossRef: 'Introduction — Whole-Mind Perception',
    category: 'technology',
  },
  'RAPT Program': {
    title: 'RAPT Program',
    definition: 'A program designed by MIAS (Monroe Institute of Applied Sciences) that brings specific "mental tools" to the forefront of a trainee\'s awareness, establishing recognizable signposts for peak performance and states of mind.',
    crossRef: 'Part I — Origin of the HP-10 Keys',
    category: 'concept',
  },
  'Energy Bar Tool': {
    title: 'Energy Bar Tool (EBT)',
    definition: 'One of the additional Gateway "keys" — a familiar mind-set tool that, like the others, can be recalled quickly through repeated day-to-day application.',
    crossRef: 'Part II — Other Keys',
    category: 'technique',
  },
  'REBAL': {
    title: 'Resonant Energy Balloon (REBAL)',
    definition: 'A visualized, egg-shaped energy field surrounding the body, listed here among the Gateway "keys" that provide familiar, quickly recallable mental states through repeated practice.',
    crossRef: 'Part II — Other Keys',
    category: 'technique',
  },
  'Patterning': {
    title: 'Patterning',
    definition: 'Constant mental participation in positive, deliberate action or thought, practiced until it becomes automatic and carries over into every aspect of a person\'s life — producing near-constant positive feedback.',
    crossRef: 'Part II — Patterning as Automatic Practice',
    category: 'technique',
  },
  'Color Breathing': {
    title: 'Color Breathing',
    definition: 'A breathing technique paired with color visualization for everyday emotional regulation — for example, breathing while picturing green to calm emotions, or red to enhance strength and coordination.',
    crossRef: 'Part II — Color Breathing Example',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">MIAS</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00788R001700270008-8</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Gateway Breathing Techniques<br />and Patterning
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Source', 'Monroe Institute of Applied Sciences'], ['Location', 'Route 1, Box 175, Faber, Virginia']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          Management problem solving and decision making usually involve the need to perceive actual or potential
          information in a whole context or spatial sense — to observe every element bearing on a probable solution,
          including both cause and effect, which usually objectifies the subjective to a large degree.
        </P>
        <P>
          The human mind physically operates in much the same fashion. Left-brain logic applies orderliness to
          right-brain input, where intuition, emotion, and spatial sense originate ideas. But because the mind
          processes spatial information through a linear, left-brain scenario, the original idea becomes muddled —
          some of the information is never even processed, even though its relevance to the problem may have had a
          significant impact on the result (as when a valid gut feeling is discarded).
        </P>
        <P>
          The <E term="HP-10 Series">HP-10</E> and Management series of Hemi-Sync taped exercises generate a new
          method of focus for conceptualizing not only every spatial aspect of a problem, but the multitude of
          possible linear patterns running through it — assisting in seeing the entire &quot;jigsaw puzzle&quot;
          through all its pieces at once, without linear processing. The{' '}
          <E term="Frequency Following Response">Frequency Following Response</E> induced by the Hemi-Sync process
          assists in total perception of all possible solutions simultaneously: a problem with several essential
          elements appears less as a line of steps and more as a &quot;helix&quot; or &quot;ball&quot; of information
          through which any linear path could be constructed.
        </P>
        <P>
          Applied properly to problem or planning work, this &quot;whole mind&quot; approach brings an openness to
          original thought. With practice, an individual becomes so familiar with the state of mind required for
          whole-brain utilization that they can switch in and out of it without the tape at all — a new but easily
          learned operational mind-set.
        </P>
      </section>

      {/* ── Part I: The HP-10 Series ──────────────────────── */}
      <DocSection id="doc-hp10" number="PART I" title="The HP-10 Series">
        <P>
          The <E term="RAPT Program">RAPT Program</E>, designed by MIAS, was originally conceived — and is
          continually reviewed and upgraded — to bring specific &quot;mental tools&quot; to the forefront for the
          person learning this new mind-set. It establishes signposts for recognizing peak performance and provides
          identifiable &quot;keys&quot; that open the way to this new mode of perception. The{' '}
          <E term="HP-10 Series">HP-10 Series</E> of tapes associates numbers with different states, which, through
          repetitive use, assist in instant recall of the state of mind most beneficial to the task at hand:
        </P>
        <P className="pl-4 border-l-2 border-accent/30">
          #1 — To become wide awake, alert, or to stay awake.<br />
          #2 — To focus attention completely on a single area or subject.<br />
          #3 — To remember immediately anything experienced.<br />
          #4 — To return to normal operation from any Hemi-Sync state.<br />
          #5 — To think clearly, cleanly, and sharply.<br />
          #6 — To apply muscle strength or smooth coordination.<br />
          #7 — To instantly let go of emotion (anger, disappointment, etc.).<br />
          #8 — To feel better when tired, depressed, or discouraged.<br />
          #9 — To read, speak, or talk smoothly and easily.<br />
          #10 — To totally relax, ease tension, or ease stress.
        </P>
      </DocSection>

      {/* ── Part II: Other Keys & Everyday Use ────────────── */}
      <DocSection id="doc-keys" number="PART II" title="Other Keys and Everyday Application">
        <P>
          Other keys available — the{' '}
          <E term="Energy Bar Tool">Energy Bar Tool (EBT)</E>,{' '}
          <E term="REBAL">Resonant Energy Balloon (REBAL)</E>, Non-Verbal Communication (NVC), and{' '}
          <E term="Color Breathing">Color Breathing</E> Techniques and{' '}
          <E term="Patterning">Patterning</E> — are equally important in that they provide familiar mind-sets that
          can be easily recalled through day-to-day application. The mind, operating from such familiar territory,
          establishes confidence and trust in itself based on immediate feedback recognized during practice.
        </P>
        <P>
          In the case of patterning, constant mental participation in positive, deliberate action or thought achieves
          such a degree of perfection through practice that it becomes automatic, spilling over into every aspect of
          a person&apos;s life and producing an almost constant positive feedback loop. The same applies to everyday
          use of color breathing — for example, using the breathing technique while thinking of the color green to
          calm emotions, or red to enhance strength and coordination.
        </P>
        <P>
          As a final thought: use of the Hemi-Sync process has proven to reduce stress and tension. The benefit of
          that alone, including use of the restorative sleep rate, is considerable. As the sophistication of the
          world around us constantly increases, our ability to bring clarity and focus continues to rise — and it is
          to that end that MIAS continues to strive.
        </P>
      </DocSection>
    </>
  );
}
