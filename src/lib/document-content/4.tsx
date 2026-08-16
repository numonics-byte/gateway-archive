import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'Affirmations and Gateway Notes' },
  { id: 'doc-tools',      label: '1. Core Tools — EBT, LBM, EBM' },
  { id: 'doc-focus12',    label: '2. Focus 12 and Remote Viewing' },
  { id: 'doc-rebal',      label: '3. REBAL and Free Movement' },
  { id: 'doc-pattern',    label: '4. Pattern Changes and Energy Balance' },
  { id: 'doc-daily',      label: '5. Daily Tools' },
  { id: 'doc-methods',    label: '6. Detailed Exercise Methods' },
];

export const entities: Record<string, Entity> = {
  'Resonant Breathing Exercise': {
    title: 'Resonant Breathing Exercise (RBX)',
    definition: 'The opening step of every exercise: six paired inhale-exhale cycles, each drawing fresh energy into a different body region (head, upper chest and arms, abdomen, pelvic region, thighs and knees, lower legs and feet) while exhaling stale energy out through the feet — "as if filling an inverted jar."',
    crossRef: 'Gateway Notes — As You Start Each Exercise',
    category: 'technique',
  },
  'Security Repository Box': {
    title: 'Security Repository Box',
    definition: 'A visualized container into which the practitioner places all problems and distractions before beginning an exercise, and from which — at the exercise\'s end — problems requiring action are retrieved and cleansed of excess emotional charge.',
    crossRef: 'Gateway Notes — As You Start Each Exercise',
    category: 'concept',
  },
  'Energy Bar Tool': {
    title: 'Energy Bar Tool (EBT)',
    definition: 'A visualized bar of light, expandable and rechargeable, used to stimulate and focus non-physical energies. Central to nearly every other exercise in this workbook — charging the Living and Emotional Body Maps, powering remote viewing, and balancing energy throughout the body.',
    crossRef: 'Gateway Notes — To Create Energy Bar Tool',
    category: 'technique',
  },
  'Living Body Map': {
    title: 'Living Body Map (LBM)',
    definition: 'A visualized silhouette of the physical body, color-coded by system — blue for nervous, red for circulatory, orange for muscle and bone, yellow for organs and glands, white as composite — used to locate and charge areas of imbalance with the EBT.',
    crossRef: 'Gateway Notes — To Create and Use Living Body Map',
    category: 'technique',
  },
  'Emotional Body Map': {
    title: 'Emotional Body Map (EBM)',
    definition: 'A finer, thinner silhouette located behind the Living Body Map, representing the emotional body. Balanced and recharged the same way as the LBM, using purple healing energy from the EBT to equalize brightness and calm.',
    crossRef: 'Gateway Notes — Emotional Body Map',
    category: 'technique',
  },
  'REBAL': {
    title: 'Resonant Energy Balloon (REBAL)',
    definition: 'An egg-shaped, then spherical, field of energy built through repeated breath cycles in Focus 10, used as a protective shield and as a vehicle for floating "upward" into Focus 12 and Focus 15 — reabsorbed back into the self at the end of each exercise.',
    crossRef: 'Gateway Notes — To Create Resonant Energy Balloon',
    category: 'technique',
  },
  'Focus 12 Clock Exercise': {
    title: 'Focus 12 Clock Exercise',
    definition: 'A spatial-orientation exercise: imagining a clock face with consciousness at its center, sending attention outward toward each hour position, then rotating the whole clock 90 degrees and repeating — observing closely what is perceived at each point.',
    crossRef: 'Gateway Notes — Focus 12 Clock Exercise',
    category: 'technique',
  },
  'Free Movement Exercises': {
    title: 'Free Movement Exercises',
    definition: 'Five methods for leaving the physical body while inside a REBAL: rolling out like a log in water, rising straight up like a stiff pole, backing away from the body, exiting through the head like a gas, or simply floating up above it.',
    crossRef: 'Gateway Notes — Free Movement Exercises',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">Restricted</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00788R001700210023-7</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Gateway Intermediate Workbook
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Source', 'Monroe Institute of Applied Sciences'], ['Year', '1977'], ['Restriction', 'Personal use only, post-Session 1 participants']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          The workbook opens with a restriction notice: the material is intended for personal use only by those who
          have completed the first Session of the Gateway Program, warning that attempted application by others
          &quot;may result in undesirable and uncontrolled effects.&quot;
        </P>
        <div className="border border-accent/30 cyber-chamfer p-5 my-6">
          <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-3">First Affirmation</p>
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic">
            &quot;I am more than my physical body. Because I am more than physical matter, I can perceive that which
            is greater than the physical world. Therefore, in these exercises, I deeply desire to Expand, to
            Experience, to Know, to Understand, to Control, to Use such greater energies and energy systems as may be
            beneficial and constructive to me and to those who follow me...&quot;
          </blockquote>
        </div>
        <P>
          A Second Affirmation follows, restricting any &quot;channel of communication&quot; opened during the
          exercises to sources of equal or greater wisdom and to constructive purpose only, closed except when
          consciously desired.
        </P>
        <P>
          Every exercise begins the same way: a{' '}
          <E term="Resonant Breathing Exercise">Resonant Breathing Exercise</E>, placing problems and distractions in
          the <E term="Security Repository Box">Security Repository Box</E>, and reciting the Affirmation while
          renewing the intent behind the session — &quot;as in all affirmations, the words mean nothing without the
          feeling.&quot; To reach Focus 10 from ordinary waking consciousness (C-1), the practitioner relaxes deeply
          and counts up from two to ten on each exhale, redoing any level that feels unsatisfactory. Return to C-1 is
          a slow count from ten back to one; an emergency return is as simple as moving any physical body part.
        </P>
      </section>

      {/* ── Part 1: Core Tools ─────────────────────────────── */}
      <DocSection id="doc-tools" number="PART I" title="Core Tools — EBT, LBM, EBM">
        <P>
          The <E term="Energy Bar Tool">Energy Bar Tool</E> (EBT) begins as a visualized dot of light, expanded into
          a bar and charged with brilliant white energy — practiced by cycling it through colors and on/off speeds.
          Its purpose is to stimulate and focus non-physical energies for use in nearly every other exercise.
        </P>
        <P>
          The <E term="Living Body Map">Living Body Map</E> (LBM) is created in Focus 10 as a bright white silhouette
          of the body, its lines recolored to inspect each physical system — blue for nervous, red for circulatory,
          orange for muscle and bone, yellow for organs and glands, white as a composite of all systems. Dim or
          flickering areas are charged with bright purple healing energy from the EBT to rebalance them.
        </P>
        <P>
          The <E term="Emotional Body Map">Emotional Body Map</E> (EBM), located behind the LBM and finer in texture,
          is balanced and recharged the same way, using the EBT&apos;s purple energy to equalize dim or overly bright
          areas until it glows evenly, calm and strong.
        </P>
      </DocSection>

      {/* ── Part 2: Focus 12 and Remote Viewing ────────────── */}
      <DocSection id="doc-focus12" number="PART II" title="Focus 12 and Remote Viewing">
        <P>
          To perceive distant events and people, the practitioner charges the EBT in Focus 10, places one end near
          their own center of consciousness, and stretches the other end out to the person or event to be perceived
          — letting the energy flowing back through the bar enter conscious awareness. With practice, this becomes a
          method for both distant viewing and sending messages.
        </P>
        <P>
          A stable, deep Focus 10 naturally begins to produce the charged feeling of Focus 12; saying
          &quot;eleven,&quot; then &quot;twelve&quot; as the feeling strengthens deepens the state further — Focus 10
          is described as &quot;the key to the whole system,&quot; and difficulty reaching Focus 12 means more work
          is needed at Focus 10 first. Return is a slow count from twelve to ten, then ten to one.
        </P>
        <P>
          In Focus 12, problem solving works by holding a specific question in mind at C-1, then releasing
          concentration once in Focus 12 and simply noticing whatever visual images, words, sensations, or thought
          forms arise. The{' '}
          <E term="Focus 12 Clock Exercise">Focus 12 Clock Exercise</E> trains spatial orientation the same way —
          sending consciousness toward each hour of an imagined clock face, then rotating the whole clock 90 degrees
          and repeating, observing closely at each point.
        </P>
      </DocSection>

      {/* ── Part 3: REBAL and Free Movement ────────────────── */}
      <DocSection id="doc-rebal" number="PART III" title="REBAL and Free Movement">
        <P>
          The <E term="REBAL">Resonant Energy Balloon</E> is built in Focus 10 through repeated breath cycles —
          inhaling energy up from the body, holding, then exhaling it down and around in a widening, rounding arc,
          alternating with right-to-left flows, until it forms a protective, floating sphere of light around the
          practitioner. Once light enough, the balloon carries the practitioner upward naturally — not by force of
          will, but into a lighter, expanded state of being — with pauses to observe at each new height, repeated
          several times before returning and reabsorbing the balloon&apos;s energy back into the self.
        </P>
        <P>
          With practice, the REBAL carries the practitioner not just upward but into Focus 12 and eventually Focus
          15, where perception of the balloon itself may fade unless its protection is needed; it is used again to
          descend back to Focus 10.
        </P>
        <P>
          <E term="Free Movement Exercises">Free movement exercises</E> — practiced while inside a REBAL in Focus
          10 — offer five ways to leave the physical body: rolling out like a log in water, rising up like a stiff
          pole, backing away from the body, exiting through the head like a gas, or simply floating up above it.
        </P>
      </DocSection>

      {/* ── Part 4: Pattern Changes and Energy Balance ─────── */}
      <DocSection id="doc-pattern" number="PART IV" title="Pattern Changes and Energy Balance">
        <P>
          To make desired changes in one&apos;s life, the practitioner goes to Focus 12, carefully builds the desired
          pattern or position in mind, then releases that thought pattern outward into every area of expanded
          awareness — where it will begin to form and develop into reality, provided the pattern is constructive and
          beneficial to everyone within it.
        </P>
        <P>
          For energy balance, purple healing energy from the EBT is applied to the LBM and EBM in Focus 10; problems
          worth acting on are then taken from the repository box and cleansed of negative emotional charge with
          soothing, cool EBT energy. Every exercise concludes the same way: remaining problems are cleansed with
          calming green energy, the practitioner counts back to C-1, stretches, breathes deeply, and immediately
          records their experience in the workbook.
        </P>
      </DocSection>

      {/* ── Part 5: Daily Tools ─────────────────────────────── */}
      <DocSection id="doc-daily" number="PART V" title="Daily Tools">
        <P>
          A set of shorter techniques is offered for ordinary waking life, each triggered by a brief ritual of closed
          eyes, a held breath, and a specific mental image:
        </P>
        <P className="pl-4 border-l-2 border-accent/30">
          <span className="text-foreground font-medium">To go into normal, restful sleep</span> — lie down, breathe
          deeply five times, and count from 1 to 20; sleep arrives before the count finishes.<br /><br />
          <span className="text-foreground font-medium">To remember</span> — close the eyes and touch the fingers of
          the right hand softly to the center of the forehead.<br /><br />
          <span className="text-foreground font-medium">To reduce pain signals</span> — look with closed eyes at the
          source of the pain and mentally repeat the number 55515.<br /><br />
          <span className="text-foreground font-medium">To reduce emotional charge</span> — inhale, hold, think of
          calming green, then exhale slowly as the green energy pushes excess emotion out through the soles of the
          feet.<br /><br />
          <span className="text-foreground font-medium">To charge the body for speed and strength</span> — inhale
          while picturing the act to be performed alongside strong red energy, then exhale and open the eyes to
          perform it.<br /><br />
          <span className="text-foreground font-medium">To receive fresh energy</span> — extend the hands outward,
          palms up, and inhale while visualizing radiant white energy flowing down into the palms and spreading
          through the body.<br /><br />
          <span className="text-foreground font-medium">To balance any part of the body</span> — inhale, hold, direct
          cool purple energy to the affected area while mentally repeating &quot;heal, balance,&quot; then exhale.
        </P>
        <P>
          A near-identical set of these same techniques — emotional pressure reduction, speed and strength, fresh
          energy, and physical balancing — reappears later in the workbook under the Institute&apos;s Western
          Division letterhead, along with the pattern-setting technique from Part IV, framed as skills to carry
          forward &quot;from this moment on.&quot;
        </P>
      </DocSection>

      {/* ── Part 6: Detailed Exercise Methods ──────────────── */}
      <DocSection id="doc-methods" number="PART VI" title="Detailed Exercise Methods">
        <P>
          Later pages expand on the EBT, LBM, EBM, and REBAL exercises in more granular detail. For the EBT, the
          workbook suggests choosing whatever shape feels natural to hold — a wand, a fluorescent tube, even a
          lightsaber — and cycling it on and off with increasing speed until the on/off rhythm produces a pulsing
          sensation in the solar plexus, eventually so fast that the bar appears continuously lit and the whole body
          feels charged. Once charged this way, the EBT can be shaped into a long tube for distant viewing exactly as
          described earlier, or placed inside the repository box to draw out and release stored energy.
        </P>
        <P>
          Three methods are offered for the LBM: projecting the body behind a two-dimensional paper-cutout
          silhouette, behind a translucent movie screen, or reconstructing it as a three-dimensional translucent
          statue viewed from all sides — in each case cycling the image through white, red (circulatory), blue
          (nervous), orange (muscle and bone), and yellow (organs and glands) to locate and charge dim or flickering
          areas, then returning it to white and giving it a final purple charge. The EBM is built the same way, one
          layer behind the LBM, using the same color sequence to cleanse and strengthen the emotional structure.
        </P>
        <P>
          The REBAL method is described in its most granular form here: relaxed, rhythmic inhale-exhale cycles that
          gradually round the exhaled energy into an egg shape and then a full sphere, followed by right-to-left
          breath cycles that set the sphere swirling, until it becomes light enough to lift the practitioner upward —
          the workbook cautions that control &quot;does not come within a day or a week,&quot; but with twice-daily
          practice becomes a reliable tool for reaching expanded states.
        </P>
        <P>
          The workbook closes with a suggested personal-record form for logging each exercise session — name, date,
          time, location, body position, temperature, mood, and energy level, plus optional details on physical
          disturbances, diet, medication, room conditions, and any distracting factors — followed by a final
          restatement of the First Affirmation.
        </P>
      </DocSection>
    </>
  );
}
