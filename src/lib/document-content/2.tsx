import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'Introduction — Who Are We?' },
  { id: 'doc-purpose',    label: '1. What Are We Doing?' },
  { id: 'doc-howitworks', label: '2. How It Works' },
  { id: 'doc-focus10',    label: '3. Focus 10 — Deep Relaxation' },
  { id: 'doc-focus12',    label: '4. Focus 12, Focus 15 & One-to-One' },
  { id: 'doc-obstacles',  label: '5. Common Obstacles' },
  { id: 'doc-affirmation', label: '6. The Gateway Affirmation' },
];

export const entities: Record<string, Entity> = {
  'Robert Monroe': {
    title: 'Robert Monroe',
    definition: 'A New York broadcasting executive who, beginning in 1958, began having unwilled out-of-body experiences. Wrote Journeys Out of the Body (1971) about them, later developed Hemi-Sync binaural-beat technology, and founded the Monroe Institute of Applied Sciences in 1971.',
    crossRef: 'Introduction — Who Are We?',
    category: 'person',
  },
  'Frequency Following Response': {
    title: 'Frequency Following Response (FFR)',
    definition: 'The brain-wave response the Institute\'s recordings are built to evoke — non-verbal audio patterns that shift the listener\'s brain-wave profile in frequency, power, and synchronization.',
    crossRef: 'Introduction — Monroe\'s Discovery',
    category: 'technology',
  },
  'binaural beats': {
    title: 'Binaural Beats',
    definition: 'Monroe\'s system of presenting slightly different frequencies to each ear, creating a perceived "beat" frequency that promotes brain-wave synchronization between the hemispheres. Patented in May 1975.',
    crossRef: 'Introduction — Monroe\'s Discovery',
    category: 'technology',
  },
  'Monroe Institute of Applied Sciences': {
    title: 'Monroe Institute of Applied Sciences',
    definition: 'Founded 1971 in the Blue Ridge foothills of Virginia after Monroe shared his findings with others in the field. An Advisory Board spanning several scientific disciplines formed around it, and it developed an experimental program for training consciousness itself.',
    crossRef: 'Introduction — Founding of the Institute',
    category: 'concept',
  },
  'Focus 10': {
    title: 'Focus 10 — Deep Relaxation',
    definition: '"Body asleep, mind awake." The first stage of the Gateway Program: profound physical relaxation close to the lucid-dream state, reached through FFR stimulation, progressive relaxation, and suggestion — eventually without needing the tape at all.',
    crossRef: 'Part 3 — Focus 10',
    category: 'state',
  },
  'Focus 12': {
    title: 'Focus 12 — High Energy',
    definition: 'The stage reached after Focus 10, marked by a sudden or gradual heightening of mind and body, a strong vibration or charged feeling, and — with practice — direct contact with an "apparently larger self" that can help manifest desired changes.',
    crossRef: 'Part 4 — Focus 12',
    category: 'state',
  },
  'Focus 15': {
    title: 'Focus 15',
    definition: 'A state that grows out of a strong, stable Focus 12, marked above all by the nonsignificance of time — time as ordinarily experienced no longer applies, and some explorers report limited ability to manipulate it.',
    crossRef: 'Part 4 — Focus 15',
    category: 'state',
  },
  'homeostasis': {
    title: 'Homeostasis',
    definition: 'The body\'s (and, by extension, the mind\'s) tendency to maintain equilibrium and resist new methods of functioning, even beneficial ones — described by Elmer and Alyce Green as also applying to resistance against new mental systems.',
    crossRef: 'Part 5 — Homeostasis as an Obstacle',
    category: 'concept',
  },
  'One To One': {
    title: '"One To One" Phenomenon',
    definition: 'A phenomenon observed in Focus 12 and Focus 15 in which a guiding figure leads an explorer out of body, then speaks through the explorer\'s own vocal cords, thought patterns, and vocabulary — reported independently and consistently across multiple explorers who did not know of each other\'s experiences.',
    crossRef: 'Part 4 — One To One',
    category: 'concept',
  },
  'non-physical energies': {
    title: 'Non-Physical Energies',
    definition: 'Strong energies — similar to electrical or vibratory sensations — that Focus 10 participants learn to gather, focus, and distribute using simple "imaginary" tools. Appears connected to mind-body channels, useful in healing, and associated with "distant viewing" of a familiar person\'s state.',
    crossRef: 'Part 3 — Non-Physical Energies',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">MIAS</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00788R001700270006-0</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          The Gateway Program
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Source', 'Monroe Institute of Applied Sciences'], ['Location', 'Afton, Virginia']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P className="font-heading text-xs tracking-widest text-accent/70 uppercase mb-2">Who Are We?</P>
        <P>
          In 1958, <E term="Robert Monroe">Robert Monroe</E>, a New York broadcasting executive, began having
          experiences that drastically altered his life. Unpredictably, and without willing it, Monroe found himself
          leaving his physical body to travel — via a &quot;second body&quot; — to locales far removed from the
          physical and spiritual realities of his life, inhabiting a place unbounded by time or space. With some
          trepidation he wrote a book about his experiences: Doubleday published{' '}
          <span className="italic">Journeys Out of the Body</span> in 1971. Throughout the book, Monroe maintains the
          stance of a careful, objective reporter who often reports his own confusion in this unusual area, drawing
          on personal experience for interpretation rather than any occult, religious, or spiritual framework.
        </P>
        <P>
          In the 1960s, Monroe became interested in the possible connection between non-verbal audio patterns and
          brain-wave rhythms. From his long experience with sound, he advanced from rotating disc circuit breakers to
          sophisticated, custom-built signal generators and the production of tape recordings mixing as many as
          sixteen patterns of sound together on stereo channels. Drawing on his discoveries and the work of others, he
          employs a system of <E term="binaural beats">binaural beats</E> to create a{' '}
          <E term="Frequency Following Response">Frequency Following Response</E> in the brain-wave rhythms — a
          response that not only gives some control over the brainwave emission of each hemisphere, but promotes
          brain-wave synchronization between the two. In May 1975, Monroe received a generic patent for this method.
        </P>
        <P>
          In 1971, the <E term="Monroe Institute of Applied Sciences">Monroe Institute of Applied Sciences</E> was
          founded in the foothills of the Blue Ridge in Virginia. After Monroe shared his findings with others
          pursuing the same interests, an Advisory Board representing several major scientific disciplines formed
          around the Institute, which then developed a highly experimental program for the training of consciousness
          itself.
        </P>
      </section>

      {/* ── Part 1: What Are We Doing ─────────────────────── */}
      <DocSection id="doc-purpose" number="PART I" title="What Are We Doing?">
        <P>
          We are instructing and training individuals in the art of switching perceptual modes — the art of becoming
          more conscious of one&apos;s inner resources, inner abilities, and, most of all, one&apos;s inner guidance.
        </P>
        <P>
          From Samadhi and Satori to the &quot;Vision Quest&quot; and the &quot;Cloud of Unknowing,&quot; cultures in
          all times and places have harbored individuals who reached and practiced profound levels of self-exploration,
          most often within a mythology — an epistemological groundwork by which they could interpret and give
          meaning to their experiences. Present-day Western epistemology, just recovering from an entrancing
          flirtation with materialism, provides little in the way of a ladder toward other perceptual modes. What
          investigation has been done within our current theory of knowledge has centered on the physiology of the
          brain and on the possible correlation between the brain&apos;s physical state and the subjective state of
          the mind.
        </P>
        <P>
          Yet we suspect that while the tremendous variety of subjective states may each have physiological
          correlates, the ability to determine those correlates lies beyond our present techniques. It may well be,
          as Elmer Green suggests in <span className="italic">Beyond Biofeedback</span>, that the brain as a physical
          mechanism cannot register &quot;non-physical&quot; events. If so, the Western idea of &quot;knowledge&quot;
          will have to be enlarged. It is precisely this that we are investigating: training interested individuals
          to switch their perception to areas outside the realm of physical matter reality — what we call
          &quot;non-physical realities&quot; — and then examining the &quot;data&quot; they bring back. Often these
          experiences appear to come from a qualitatively greater consciousness than our usual waking consciousness,
          so we must take that greater perspective into account while, at the same time, accounting for the
          distorting effect of physical matter reality&apos;s own perspective.
        </P>
        <P>
          Our Gateway Program provides the instruction, training, and environment for making this transition. On a
          wide scale we have no idea how successful the program would be; on a small scale, we do know it is
          successful for those with the volition, courage, and desire to rise into the truly unknown.
        </P>
      </DocSection>

      {/* ── Part 2: How It Works ──────────────────────────── */}
      <DocSection id="doc-howitworks" number="PART II" title="How It Works">
        <P>
          In appearance, the Gateway Program presents a puzzling facade. A group of twenty people stand around
          talking and stretching. Then they all enter a large room, lie down on individual mattresses, pull blankets
          over themselves, put on padded stereo headphones, and become motionless. The room is darkened. For the
          first five minutes, slight coughs and rustlings can be heard; for the next forty, not a sound or movement
          save an occasional snore. Then, all at the same time, everyone sits up and looks around, and soon resumes
          talking and stretching. This happens several times a day — sometimes at three in the morning. Retreat
          center staff often ask, &quot;What is going on here?&quot;
        </P>
        <P>
          These individuals are practicing a progressive series of{' '}
          <E term="Frequency Following Response">Frequency Following Response</E> recordings. The major component is
          a series of non-verbal audio patterns, most masked by a &quot;pink sound&quot; similar to waves on a beach
          or wind through trees — sometimes several patterns at once, sometimes only one, changing slowly or rapidly,
          simple or complex. Because the brain and mind are complex, it appears they must be coaxed into certain
          formations through an orchestration of audio patterns rather than a static mix of frequencies. It is,
          indeed, an art, approached from a creative engineer&apos;s point of view: whatever works, we use, and
          attempt to improve.
        </P>
        <P>
          Verbal instruction, carefully synchronized with the audio patterns, demands that the listener not wait
          passively for new experiences to overtake him — he must use volition and concentration to cooperate with
          the instructions in the environment generated by the audio stimulation. From long experience, we know the
          brain and mind respond with great regularity to shifting FFR patterns; researchers studying the brain-wave
          profile have noted strong, regular shifts in frequency, power, and synchronization. For the most part,
          though, we have restricted ourselves to studying the mind&apos;s response — our interest lies here.
        </P>
        <P>
          We call it the Gateway Program because this series of techniques leads to a gateway — into different modes
          of perception. Individuals who become involved find it both deeply disturbing and deeply satisfying, one
          response often outweighing the other from time to time. Some participants run into what we call the
          &quot;fear barrier,&quot; particularly if they advance too fast, manifesting as fear about the potential
          loss of the self as they know it. For this reason the Program develops along carefully controlled steps,
          each with a strong, positive base, permitting a self-protective mechanism to work: when an individual
          stimulates himself beyond his level of adjustment, he simply blanks out the experience, feeling that he
          went to sleep or &quot;clicked out&quot; for a period of time — and on a later repetition, remembers it, and
          edges his level of adjustment into a larger awareness.
        </P>
        <P>
          As individuals advance through these stages, they develop a deep sense of self-worth — much as a child
          proclaims new worth on turning seven — along with a vital sense of growth, new ability, creativity, and
          self-control. Best of all, their interior sense of direction strengthens. For most, this takes
          re-adjustment, dedication, time, and occasionally courage — yet as they learn to cooperate with the inner
          process, they often experience a sense of lightness, deftness, even great playfulness.
        </P>
      </DocSection>

      {/* ── Part 3: Focus 10 ──────────────────────────────── */}
      <DocSection id="doc-focus10" number="PART III" title="Focus 10 — Deep Relaxation">
        <P>
          To avoid the connotations often associated with names, we use numbers to designate different levels of
          consciousness. The first series of exercises in the Gateway Program instructs and trains the participant
          in the art of deep relaxation — most interior exploration depends on reaching profoundly relaxed levels,
          close to the lucid-dream state. Our key phrase is &quot;body asleep; mind awake.&quot; At this level, the
          mind focuses on interior events in a different, more concentrated perceptual focus than in ordinary waking
          consciousness.
        </P>
        <P>
          Three training approaches work together toward{' '}
          <E term="Focus 10">Focus 10</E>. The first, and most powerful, is{' '}
          <E term="Frequency Following Response">FFR</E> stimulation — most individuals who listen to the masked
          audio patterns, with no other instruction, can reach a level of relaxation beyond any they have
          consciously achieved before (it is for this that the patent was granted). The second is a standard
          progressive relaxation technique: counting slowly from one to ten, the participant relaxes part by part in
          the environment generated by the FFR. The third is suggestion. After several repetitions of this process,
          the participant no longer needs the FFR or the progressive relaxation exercise to reach Focus 10.
        </P>
        <P>
          Is this self-hypnosis? It depends on definition — if hypnosis is a generic term for all altered states of
          awareness and all use of suggestion, then yes, as would be many other areas of life, such as watching
          television. We do know that the brain-wave profile of an individual in Focus 10 differs greatly from that
          of an individual in a standard hypnotic trance; what that difference means, we do not yet know.
        </P>
        <P>
          In Focus 10, individuals find themselves thinking more with images than words — a peculiar experience for
          non-visualizers who have not previously reached this level of relaxation in the waking state. Strong{' '}
          <E term="non-physical energies">energies</E>, similar to electrical or vibratory sensations, can flow in
          Focus 10. To establish more control, the next series of exercises concentrates on building and using
          simple &quot;imaginary&quot; tools for gathering, focusing, and distributing these energies — and to their
          delight, participants find that these energies do affect physical reality. This system appears connected
          to the channels between mind and body, useful in healing and in preparing the body for stronger use; it
          also appears responsible for much of the &quot;psychic&quot; attunement between individuals some distance
          apart. One of the most important exercises at this level is &quot;distant viewing&quot; — discerning the
          emotional, and perhaps physical, state of a familiar person not in the immediate vicinity. Anyone in Focus
          10 finds this a relatively simple exercise.
        </P>
      </DocSection>

      {/* ── Part 4: Focus 12, Focus 15, One-to-One ────────── */}
      <DocSection id="doc-focus12" number="PART IV" title="Focus 12, Focus 15, and One-to-One">
        <P>
          After participants have explored{' '}
          <E term="Focus 10">Focus 10</E> to their satisfaction, they advance to{' '}
          <E term="Focus 12">Focus 12</E>. Occasionally, an individual in Focus 10 feels a sudden or gradual
          heightening or expansion of mind and possibly body, along with a strong vibration or charged feeling — many
          have this experience in &quot;high dreams&quot; or during out-of-body experiences. The next series of FFR
          recordings instructs participants in generating energy from this new system, transporting them into Focus
          12, helping them acclimate, and finally bringing them back to Focus 10. After a gradual, carefully
          controlled introduction, participants learn to stay there longer and put it to use.
        </P>
        <P>
          Two things are discovered in this state. The first is the ability to project changes participants wish to
          have in various aspects of their future — an apparently larger self of each individual does appear to help
          bring about the conditions needed for those changes. The second is more direct contact with this larger
          self, appearing usually as an external guide or guides, an inner voice, an internal &quot;movie
          maker,&quot; or an inner knowing. One can ask questions from the most mundane to the most profound, and
          this source often answers from an apparently larger perspective — opening the door to great creative
          expression. With this resource, a participant&apos;s life increases in both responsibility and complexity,
          matched by a corresponding increase in the ability to handle new situations. After much practice
          intensifying Focus 12, some participants find they can control out-of-body experience, identifying with a
          second body composed of non-physical energy and, after reducing their initial cultural shock, roaming
          through other energy systems.
        </P>
        <P>
          Much as Focus 12 rises naturally out of Focus 10, the state we call{' '}
          <E term="Focus 15">Focus 15</E> grows naturally out of a strong, stable Focus 12 — a different energy level
          marked most of all by the nonsignificance of time. In fact, time as we know it no longer exists there; our
          explorers report that in one area of Focus 15 they have some ability to manipulate it.
        </P>
        <P>
          The Institute has also investigated a phenomenon that can appear in Focus 12 and Focus 15, which we call{' '}
          <E term="One To One">&quot;One to One.&quot;</E> With great care and compassion, a strong and guiding
          figure will lead an explorer out of the body, place him in a comfortable position, and watch over him while
          speaking to Institute staff using the explorer&apos;s own vocal cords, thought patterns, and vocabulary.
          The onset of this phenomenon in several explorers, each unaware of the others&apos; experience, has been
          astoundingly similar — and the information these sources give, gentle and instructional in nature, shows a
          high degree of correlation. We have no way to rule out all possible contamination or leakage between
          explorers and ourselves, and we do not promote this information or make claims about its authenticity, but
          we have been most impressed with its quality.
        </P>
      </DocSection>

      {/* ── Part 5: Common Obstacles ───────────────────────── */}
      <DocSection id="doc-obstacles" number="PART V" title="Common Obstacles">
        <P>
          On the way to Focus 10 and Focus 12, most participants encounter a few obstacles. A small percentage
          develop physical symptoms; if these persist, we recommend they leave the Program temporarily and
          concentrate on physical health and a mind-body integration technique such as Reichian therapy, yoga asanas,
          or Tai Chi. Almost every participant has some initial difficulty maintaining waking consciousness before
          reaching the lucid-dream level; we give them several suggestions to counter this, and by the time they
          repeat the exercises, they begin to enter Focus 10 more consistently.
        </P>
        <P>
          Some who have great difficulty with physical and mental relaxation may hold their minds tense to keep
          unwanted material repressed — a natural self-protective mechanism. At first, in the Focus 10 exercises,
          they either sleep or remain wide awake at what we call the Focus 1 level. As they repeat the exercises,
          they learn to relax more deeply while maintaining consciousness, and bit by bit, in a self-regulating
          process, begin conscious assimilation of repressed material — for some, a matter of hours; for a few, a
          matter of months. At times they express and release a great deal of negative emotion. If an individual
          passes our screening process but carries a great deal of repressed material and little ego strength, we do
          not permit him to continue — we are not practicing psychotherapy; our task is to build on solid
          foundations, not to repair.
        </P>
        <P>
          <E term="homeostasis">Homeostasis</E> impedes most participants at times. Physicians use the term for the
          body&apos;s tendency to establish equilibrium across all its systems — an equilibrium that sets up an
          inertia, like a spinning gyroscope, resisting any new method of functioning, even a beneficial one. Elmer
          and Alyce Green have noted that the term also describes the mind&apos;s resistance to any new mental
          system. In the Gateway Program, this resistance manifests as the thought that Focus 10 and Focus 12 may be
          interesting, but are &quot;just imagination inside the head&quot; and have little to do with &quot;real&quot;
          reality — interest wanes, and the mind keeps its homeostatic network intact.
        </P>
        <P>
          That network may also be threatened by existentially disturbing experiences — experiences of a larger
          awareness that can be overpowering in ways the participant had not previously conceived. With guidance from
          the Institute and others, the participant can assimilate the new level of awareness; if he does not wish
          to, he can push the experience into the background and preserve his present homeostasis. Deep relaxation
          pursued with the intent of personal growth appears to trigger an internal process toward better physical
          and mental health — some participants find themselves spontaneously giving up tobacco, alcohol, drugs, even
          television; others go through an overdue divorce, change jobs, or move to another state. As the
          participant approaches Focus 12, contact with this source of direction grows clearer, setting up a feedback
          loop about his particular path — all he has to do is pay attention to these inner directions and exercise
          the volition to follow the changes.
        </P>
      </DocSection>

      {/* ── Part 6: The Gateway Affirmation ────────────────── */}
      <DocSection id="doc-affirmation" number="PART VI" title="The Gateway Affirmation">
        <div className="border border-accent/30 cyber-chamfer p-5 my-6">
          <p className="font-label text-[9px] tracking-[0.2em] text-accent uppercase mb-3">Direct Quotation — Recited by Participants</p>
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic">
            &quot;I am more than my physical body. Because I am more than physical matter, I can perceive that which
            is greater than the physical world. I deeply desire to Expand, and to Experience, to Know, to
            Understand, to Control, to Use such greater energies and energy systems as may be beneficial and
            constructive to me and to those who follow me. Also, I deeply desire the help and cooperation, the
            assistance, the understanding of those individuals whose wisdom, development and experience is equal to
            or greater than my own. I ask their guidance and protection from any influence or any source that might
            provide me with less than my stated desires.&quot;
          </blockquote>
        </div>
        <P>
          The Program&apos;s Board of Advisors, drawn from several scientific disciplines, has included James Beal,
          Lawrence Davis M.D., Robert Ellsworth Ph.D., David Francis, Arthur Gladman M.D., Alyce Green, Elmer Green
          Ph.D., Steven Henderson, Fowler Jones Ph.D., Stanley Krippner Ph.D., Mary Jane Ledyard Ph.D., R. Stanton
          Maxey M.D., Joseph Chilton Pearce Ph.D., Bill Schul Ph.D., Charles T. Tart Ph.D., and Stuart Twemlow M.D.
        </P>
      </DocSection>
    </>
  );
}
