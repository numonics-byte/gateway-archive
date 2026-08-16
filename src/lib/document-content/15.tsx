import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'Introduction — The Mailbox Coincidence' },
  { id: 'doc-framework',  label: '1. The Ritual Framework' },
  { id: 'doc-grounding',  label: '2. Grounding & Energy Work' },
  { id: 'doc-temple',     label: '3. The Sacred Temple and the Message' },
  { id: 'doc-close',      label: '4. Return and Closing' },
];

export const entities: Record<string, Entity> = {
  'Larissa Vilenskaya': {
    title: 'Larissa Vilenskaya',
    definition: 'Author of this account, writing under the byline Larissa Vilenskaya (Laura V. Faith), Monterey, California. Led a guided workshop on intuition and creative problem solving combining Akashic-record visualization with Earth and Cosmic energy work.',
    crossRef: 'Byline — Author',
    category: 'person',
  },
  'Ruth-Inge Heinze': {
    title: 'Dr. Ruth-Inge Heinze',
    definition: 'Presenter at the Seventh International Conference on the Study of Shamanism whose talk on the ritual process — including the phrase "checking your mailbox" for inner messages, and a seven-step ritual framework — struck the author as an uncanny match to a workshop she had independently led weeks earlier.',
    crossRef: 'Introduction — The Coincidence',
    category: 'person',
  },
  'Akashic records': {
    title: 'Akashic Records',
    definition: 'A universal record believed to contain all information about the past, present, and possible or probable futures of humankind — and, per this workshop\'s premise, accessible to anyone willing to "retrieve" a waiting message from it.',
    crossRef: 'Part 1 — Instructions to Participants',
    category: 'concept',
  },
  'synchronicity': {
    title: 'Synchronicity',
    definition: 'The meaningful coincidence at the center of this account: the author independently used the same "mailbox" metaphor and the same seven-step ritual structure that Dr. Heinze presented moments later — without either having discussed it with the other beforehand.',
    crossRef: 'Introduction — The Coincidence',
    category: 'concept',
  },
  'pelvic cradle': {
    title: 'Pelvic Cradle',
    definition: 'The base-of-spine focal point in this exercise where threads of breath-drawn energy are visualized intertwining into a golden rope, then grounded into the Earth\'s core, and later used to blend incoming Earth and Cosmic energies.',
    crossRef: 'Part 2 — Grounding the Energy',
    category: 'concept',
  },
  'Sacred Temple': {
    title: 'Sacred Temple',
    definition: 'The visualized destination of the guided meditation\'s second half — a self-chosen temple (church, synagogue, mosque, or otherwise) containing a stairway, a corridor of doors, and a room where the participant\'s message appears as a book, tape, video, or on-screen.',
    crossRef: 'Part 3 — Entering the Temple',
    category: 'concept',
  },
  'chakras': {
    title: 'Chakras',
    definition: 'Energy centers activated in sequence during the exercise — solar plexus, heart, throat, third eye (ajna), and crown — visualized as glowing with revitalizing light before the participant proceeds to the Sacred Temple.',
    crossRef: 'Part 2 — Chakra Sequence',
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
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">Field Account</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00792R000300380001-3</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          &quot;Check Your Mailbox&quot;: Ritual,<br />Synchronicity, and Inner Guidance
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Author', 'Larissa Vilenskaya (Laura V. Faith)'], ['Location', 'Monterey, California']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <div className="border border-accent/30 cyber-chamfer p-5 mb-6">
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic">
            &quot;Within our reach lies every path we ever dream of taking. Within our power lies every step we ever
            dream of making. Within our range lies every joy we ever dream of seeing... Within ourselves lies
            everything we ever dream of being.&quot;
          </blockquote>
          <p className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase mt-3">— Amanda Bradley</p>
        </div>

        <P>
          On the Labor Day weekend of 1990,{' '}
          <E term="Larissa Vilenskaya">the author</E> and a friend arrived at St. Sabina Center in San Rafael,
          California, ahead of the Seventh International Conference on the Study of Shamanism. While waiting, she
          described to her friend a workshop on intuition and creative problem solving she had led a month earlier at
          Carleton College in Minnesota — inspired by <span className="italic">Life Between Life</span> (Whitton and
          Fisher, 1986), combined with work on Earth and Cosmic energies described by Stevens (1984), plus some
          intuitively gleaned details. In that workshop, participants had been guided in &quot;reading{' '}
          <E term="Akashic records">Akashic records</E>&quot; — told, &quot;Perhaps there is a message for you
          waiting there, and you need to go and retrieve it.&quot;
        </P>
        <P>
          About half an hour later, when Dr.{' '}
          <E term="Ruth-Inge Heinze">Ruth-Inge Heinze</E> began her presentation on the ritual process, the author
          was astonished to hear her speak of looking for messages in &quot;our mailbox&quot; — exactly what she had
          just described to her friend. She further found that she had intuitively used a process incorporating the
          same seven steps of a ritual that Heinze discussed, without ever having studied them. This{' '}
          <E term="synchronicity">coincidence</E> prompted her to write up the workshop and share both her approach
          and the &quot;messages&quot; participants received.
        </P>
      </section>

      {/* ── Part 1: The Ritual Framework ──────────────────── */}
      <DocSection id="doc-framework" number="PART I" title="The Ritual Framework">
        <P>
          About thirty participants took part, ranging in age from their early 20s to middle 60s. All had at least
          some experience with meditation — many meditated regularly — and some experience with spiritual traditions.
          The author began by discussing the importance of listening to inner guidance, the concept of universal{' '}
          <E term="Akashic records">Akashic records</E> believed to contain all information about the past, present,
          and possible or probable futures of humankind, and the power of every individual to access them.
        </P>
        <P>
          Participants were instructed: they were about to enter a Sacred Space; there is great value in symbolism,
          and whatever can be clearly imagined and visualized has power, connecting the practitioner to the Sacred
          realm they seek to contact. Before beginning, each could ask a specific question and send it to the
          Universe, or simply go and see what came. &quot;Perhaps there is a message for you waiting there, and you
          need to go and retrieve it. Relax and let go... don&apos;t force it... it will come.&quot;
        </P>
      </DocSection>

      {/* ── Part 2: Grounding & Energy Work ───────────────── */}
      <DocSection id="doc-grounding" number="PART II" title="Grounding and Energy Work">
        <P>
          With music playing and eyes closed, participants were guided to notice a tiny light in the center of the
          head — their Inner Self, their soul — then to place attention in the{' '}
          <E term="pelvic cradle">pelvic cradle</E> at the base of the spine. With every breath, they imagined
          drawing thousands of tiny threads of energy into that cradle; as the threads met, they intertwined into a
          rope of golden energy. A portion of this golden, twined energy was dropped between the legs and gathered
          into a small, dense ball of 14-karat gold, still attached to the rope — then allowed to drop all the way
          down into the exact geographic center of the Earth, through soil, rock, water, gases, and crystals, into
          the Earth&apos;s iron core, fusing there. A tug at the base of the spine confirmed a golden beam of energy
          now ran from spine to Earth&apos;s center — the grounding cord left in place.
        </P>
        <P>
          Attention then returned to the center of the head, then to the arches of the feet, drawing a pink Earth
          energy up through the leg channels into the pelvic cradle. Next, attention moved to the crown of the head,
          drawing a blue Cosmic energy down the back of the spine into the same pelvic cradle — combining, balancing,
          and blending the two energies there before letting the mixture rise up the front of the spine and out
          through the crown, flowing &quot;as water, cleansing you, allowing you to flow with the current of the
          Universe.&quot;
        </P>
        <P>
          Attention then moved through the{' '}
          <E term="chakras">chakras</E> in sequence — solar plexus, heart, throat, the ajna or third eye, and
          crown — each visualized glowing, full of energy and revitalizing light.
        </P>
      </DocSection>

      {/* ── Part 3: The Sacred Temple ──────────────────────── */}
      <DocSection id="doc-temple" number="PART III" title="The Sacred Temple and the Message">
        <P>
          Participants were then guided to visualize and enter their own{' '}
          <E term="Sacred Temple">Sacred Temple</E> — a church, synagogue, mosque, chapel, or whatever form arose —
          finding within it a long stairway leading up. How long the climb took varied from person to person and
          session to session. At the top, a corridor of many doors awaited — some marked, some not, some simply felt
          to be &quot;for you&quot; — and each participant entered their own.
        </P>
        <P>
          What lay beyond differed for everyone. The author usually finds a large library with many identical-looking
          shelves, yet she is drawn to a particular one — &quot;something guides you&quot; — and takes a book from it
          to read. For others it might be a room of tapes with a cassette player, a room of video tapes, or, in a more
          technology-oriented image, a computer screen displaying the message as text, symbol, or both. Participants
          were told to remain in silence, receive their message, and — when called back — return not by descending
          the stairs, but simply by returning, to share afterward what had transpired.
        </P>
      </DocSection>

      {/* ── Part 4: Return and Closing ─────────────────────── */}
      <DocSection id="doc-close" number="PART IV" title="Return and Closing">
        <P>
          After roughly twenty minutes in meditation, the author called everyone back, asked them to open their eyes,
          stand, and embrace the person beside them. She congratulated the group on their return and led them in
          singing a Russian Hymn to the Earth:
        </P>
        <div className="border border-accent/30 cyber-chamfer p-5 my-6">
          <blockquote className="font-mono text-sm text-foreground leading-relaxed tracking-wide italic">
            &quot;If the people lived their lives as if it were a song for singing out of light, providing music for
            the stars to be dancing circles in the night.&quot;
          </blockquote>
        </div>
        <P>
          Finally, she asked everyone to give thanks to the forces, inside and outside themselves, that had enabled
          the journey.
        </P>
      </DocSection>
    </>
  );
}
