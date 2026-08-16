import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'Introduction' },
  { id: 'doc-prep',       label: '1. Preparing the Operator' },
  { id: 'doc-practice',   label: '2. The Technique in Practice' },
  { id: 'doc-mastery',    label: '3. Method, Variants & Mastery' },
];

export const entities: Record<string, Entity> = {
  'Dr. Dolin': {
    title: 'Dr. Dolin',
    definition: 'Researcher whose operator-training methodology for "remote influence" is detailed in this memorandum. Trains operators in his own laboratories; the techniques described are drawn directly from his practice.',
    crossRef: 'Subject line — Dolin\'s Training Technique',
    category: 'person',
  },
  'remote influence': {
    title: 'Remote Influence',
    definition: 'The phenomenon under study: an operator attempting to mentally affect a distant receiver\'s mental, emotional, or physiological state without physical contact — distinct from remote viewing, which is about perceiving rather than affecting a distant target.',
    crossRef: 'Opening paragraph — Definition of the Technique',
    category: 'concept',
  },
  'operator': {
    title: 'Operator',
    definition: 'The person conducting a remote influence attempt. Success is described as depending heavily on the operator\'s self-confidence, visualization ability, and rapport with the receiver — not on any special equipment.',
    crossRef: 'Point 1 — Operator Prerequisites',
    category: 'concept',
  },
  'receiver': {
    title: 'Receiver',
    definition: 'The person targeted by a remote influence attempt. The operator must know the receiver well enough to judge what mental image would be genuinely calming or upsetting for that specific individual.',
    crossRef: 'Point 4 — Rapport with the Receiver',
    category: 'concept',
  },
  'three-phase breathing': {
    title: 'Three-Phase Breathing',
    definition: 'The breathing pattern recommended during a session: (1) slow exhale through the nose or a narrow opening between the lips, (2) breath retention for a duration found individually through experience, (3) automatic, effortless inhale through the nose.',
    crossRef: 'Point 2 — Breathing Technique',
    category: 'technique',
  },
  'impulse mode': {
    title: 'Impulse Mode',
    definition: 'The recommended concentration pattern: rather than sustaining focus for the full three-to-five minute trial, the operator concentrates in short bursts of roughly 2 to 15 seconds, relaxes, then repeats.',
    crossRef: 'Point 5 — Concentration Pattern',
    category: 'technique',
  },
  'field influence': {
    title: 'Field Influence (Field Effect)',
    definition: 'A short-range variant of the technique, usable at distances of dozens of meters. The operator visualizes standing near the receiver and imagines "energy" emitted from their own hands directed at the receiver\'s head or body. Requires less concentration than mental influence and can be combined with it.',
    crossRef: 'Point 12 — Mental vs. Field Influence',
    category: 'technique',
  },
  'mental influence': {
    title: 'Mental Influence',
    definition: 'Dr. Dolin\'s term for the primary, longer-range form of the technique described throughout this memo — as opposed to the short-range "field influence" variant.',
    crossRef: 'Point 12 — Mental vs. Field Influence',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">SG1J</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00792R000500600034-0</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Dolin&apos;s Training Technique
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['From', 'Ms. L. Faith and Dr. E. May'], ['Date', '14 February 1994'], ['Source', 'SAIC Cognitive Sciences Laboratory']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          <E term="Dr. Dolin">Dr. Dolin</E>{' '}
          emphasizes that the training, experience, and techniques of operators are crucial for the success of
          &quot;<E term="remote influence">remote influence</E>&quot; experiments. The memorandum below details the
          training procedures as they are practiced in his laboratories.
        </P>
      </section>

      {/* ── Part I: Preparing the Operator ────────────────── */}
      <DocSection id="doc-prep" number="PART I" title="Preparing the Operator">
        <P>
          1. The main prerequisite for an aspiring{' '}
          <E term="operator">operator</E>{' '}
          is self-confidence — in particular, confidence in his ability to &quot;connect&quot; with the{' '}
          <E term="receiver">receiver</E>{' '}
          and to affect the receiver&apos;s mental, emotional, or physiological state. Previous experience in yoga
          (especially yogic breathing techniques) or martial arts training is helpful but not mandatory.
        </P>
        <P>
          2. Correct breathing is important, but the process should not distract the operator from concentration on
          mental images and visualization. So-called{' '}
          <E term="three-phase breathing">three-phase breathing</E>{' '}
          is advisable: (1) exhale slowly, through the nose or through a narrow opening between the compressed lips;
          (2) breath retention, the duration of which is found individually from experience, within comfortable
          limits; (3) inhale through the nose, automatically and effortlessly, just allowing air to fill the lungs.
        </P>
        <P>
          3. Another important point of the training is for an operator to learn to concentrate his attention on a
          particular mental image. The operator should be able to visualize clearly the face of the receiver and the
          situation, surroundings, and actions of the receiver.
        </P>
        <P>
          4. The operator should know the receiver as well as possible and have a good rapport with them. During the
          remote influence session, the operator attempts to mentally &quot;impose&quot; on the receiver an image of
          an event that would be pleasant (in calming-down trials) or upsetting (in &quot;arousing&quot; trials).
          If the operator attempts to impose an image that may be upsetting in general but is not part of this
          particular receiver&apos;s life or experience, it usually does not work — the operator has to learn what
          is genuinely emotionally arousing, upsetting, or pleasant for that specific person. Not only the image
          itself matters but the emotion accompanying it; it is advisable for the operator to learn to simulate and
          experience emotions as vividly as possible, much as an actor learns to summon emotions on demand.
        </P>
      </DocSection>

      {/* ── Part II: The Technique in Practice ────────────── */}
      <DocSection id="doc-practice" number="PART II" title="The Technique in Practice">
        <P>
          5. The operator is not required to sustain intense concentration for the entire trial period — typically
          three to five minutes, depending on protocol. Rather, he works in an{' '}
          <E term="impulse mode">impulse mode</E>: concentrating for approximately 2 to 15 seconds, then relaxing,
          then repeating the process.
        </P>
        <P>
          6. The best mental concentration is achieved while exhaling and/or during the breath retention phase that
          follows the exhalation.
        </P>
        <P>
          7. During mental concentration, the body&apos;s muscles should be relaxed.
        </P>
        <P>
          8. The visualized mental image is not expected to have exceptional, hallucinatory clarity — it can resemble
          the memory of a particular event. Practicing visualization and achieving more vivid mental images is
          helpful but not essential. What counts more is the operator&apos;s clear intent and inner confidence in his
          ability to &quot;connect.&quot;
        </P>
        <P>
          9. It can be subjectively helpful for the operator to visualize the process of remote influence as entering
          the receiver&apos;s brain through the receiver&apos;s eyes — it is important to see the receiver&apos;s eyes
          clearly. Operators knowledgeable in neuroanatomy may find it helpful, though not essential, to attempt
          affecting particular structures of the receiver&apos;s brain (e.g., the substantia nigra in a subcortical
          area).
        </P>
        <P>
          10. When the &quot;connection&quot; is established, an operator often experiences some kind of subjective
          feedback — for instance, a burning sensation in the middle of the forehead.
        </P>
      </DocSection>

      {/* ── Part III: Method, Variants & Mastery ──────────── */}
      <DocSection id="doc-mastery" number="PART III" title="Method, Variants, and Mastery">
        <P>
          11. The training process is trial-and-error: the operator-in-training repeatedly modifies his approach
          after learning the outcome of each trial, until a certain degree of success is achieved. At the same time,
          an operator understands that the effect is relatively weak and statistical — changes in the receiver&apos;s
          physiology in the desired direction will not happen on every trial, and this should not be discouraging.
        </P>
        <P>
          12. Dr. Dolin calls this primary method &quot;<E term="mental influence">mental influence</E>.&quot; Many of
          his operators also master &quot;<E term="field influence">field influence</E>&quot; (or &quot;field
          effect&quot;), usable at relatively short distances — dozens of meters. In this variant, the operator
          imagines standing near the receiver and imagines his own hands emitting &quot;energy&quot; directed at the
          receiver&apos;s head or other parts of the body. It requires a lesser degree of mental concentration, and
          for increased effectiveness an operator can combine the field and mental effects, provided the combination
          doesn&apos;t disrupt concentration.
        </P>
        <P>
          13. Even for experienced operators, establishing rapport with a new receiver takes two to five days, at
          times up to seven. The same is often true when an operator begins working with a new biological system —
          for example, with plants — where the operator&apos;s mental strategy (e.g., visualizing a significant
          change in temperature or lighting) is developed intuitively and confirmed or modified through the same
          trial-and-error approach.
        </P>
        <P>
          14. Beyond the above, an operator&apos;s performance has an important non-verbal component that can only be
          mastered through observing experienced operators and close personal interaction with them. This kind of
          training is a one-on-one apprenticeship, requiring patience on the part of the operator-in-training so he
          can learn to function in an intuitive, open, and perceptive mode.
        </P>
      </DocSection>
    </>
  );
}
