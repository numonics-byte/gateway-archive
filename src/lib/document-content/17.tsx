import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';
import type { ReactNode } from 'react';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',     label: 'Method of Site Acquisition' },
  { id: 'doc-site1',     label: '1. Pyramid and Megalithic Ruins' },
  { id: 'doc-site2',     label: '2. Canyon Structures and the Obelisk' },
  { id: 'doc-site3',     label: '3. The Basin and Reflective Structures' },
  { id: 'doc-site4',     label: '4. Shelter, and a Dying Civilization' },
];

export const entities: Record<string, Entity> = {
  'Method of Site Acquisition': {
    title: 'Method of Site Acquisition',
    definition: 'The blind-targeting protocol used in this session: a sealed envelope containing a 3×5 card naming the target (the planet Mars, ~1 million years B.C.) was given to the subject just before the interview and not opened until after. Geographic coordinates were read to the subject verbally during the session.',
    crossRef: 'Header — Method of Site Acquisition',
    category: 'technique',
  },
  'Monitor': {
    title: 'Monitor (MON)',
    definition: 'The session facilitator, who reads target coordinates to the subject, redirects attention, and prompts for raw perceptual data rather than interpretation — annotating the transcript with timestamped, unspoken observations.',
    crossRef: 'Transcript — Speaker Roles',
    category: 'concept',
  },
  'Subject': {
    title: 'Subject (SUB)',
    definition: 'The remote viewer, who reports perceptions in fragments as attention moves between target coordinates — describing structures, beings, and events without prior knowledge of what is being targeted.',
    crossRef: 'Transcript — Speaker Roles',
    category: 'concept',
  },
  'the Ancient People': {
    title: 'The Ancient People',
    definition: 'Tall, thin beings the subject repeatedly perceives across several sites — first as fragmentary "shadows" of people no longer present, later encountered directly as an aged population living out what they describe as the end of their time, waiting for a group that departed long ago to find a new place to live.',
    crossRef: 'Part 4 — Meeting the Ancient People',
    category: 'concept',
  },
};

function Line({ speaker, children }: { speaker: 'MON' | 'SUB'; children: ReactNode }) {
  return (
    <p className="font-mono text-[0.9375rem] leading-[1.85] tracking-wide">
      <span className={speaker === 'MON' ? 'text-accent font-medium' : 'text-accent-secondary font-medium'}>
        {speaker}:
      </span>{' '}
      <span className="text-foreground/90">{children}</span>
    </p>
  );
}

export default function Body() {
  return (
    <>
      {/* ── Document Header ──────────────────────────────── */}
      <section id="doc-intro" className="scroll-mt-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 border border-destructive cyber-chamfer-sm px-3 py-1 bg-destructive/10">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-neon" />
            <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">Session Transcript</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00788R001900760001-9</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Mars Exploration
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Session Date', 'May 22, 1984'], ['Session Start', '10:09 AM'], ['Target Era', '~1,000,000 years B.C.']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P className="font-heading text-xs tracking-widest text-accent/70 uppercase mb-2">
          <E term="Method of Site Acquisition">Method of Site Acquisition</E>
        </P>
        <P>
          A sealed envelope, coupled with geographic coordinates, was given to the{' '}
          <E term="Subject">subject</E> immediately prior to the interview and not opened until afterward. Inside was
          a 3×5 card reading: &quot;The planet Mars. Time of interest approximately 1 million years B.C.&quot;
          Selected geographic coordinates, provided by the parties requesting the information, were given verbally to
          the subject during the interview.
        </P>
      </section>

      {/* ── Site 1 ─────────────────────────────────────────── */}
      <DocSection id="doc-site1" number="SITE I" title="Pyramid and Megalithic Ruins — 40.89° N, 9.55° W">
        <P>
          The session opens with the <E term="Monitor">monitor</E> directing attention to the first coordinate pair.
        </P>
        <Line speaker="MON">
          All right now, using the information in the envelope I&apos;ve provided, exclusively focusing your
          attention now, using the information in the envelope, focus on: 40.89 degrees north, 9.55 degrees west.
        </Line>
        <Line speaker="SUB">
          I want to say it looks like... I don&apos;t know, it sort of looks... I kind of got an oblique view of a
          pyramid or pyramid form. It&apos;s very high, it&apos;s kind of sitting in a large depressed area. It&apos;s
          yellowish, okra colored.
        </Line>
        <Line speaker="MON">
          Move in time to the time indicated in the envelope I&apos;ve provided you and describe what&apos;s
          happening.
        </Line>
        <Line speaker="SUB">
          I&apos;m tracking severe clouds, more like a dust storm — it&apos;s a geologic problem. I&apos;m looking at
          the after-effect of a major geologic problem.
        </Line>
        <Line speaker="MON">Okay, go back to the time before the geologic problem.</Line>
        <Line speaker="SUB">
          Total difference — before, there&apos;s no... it&apos;s like mountains of dirt appear and then disappear
          when I go before. Large flat surfaces, very smooth, angles, walls — they&apos;re really large though, I
          mean they&apos;re megalithic.
        </Line>
        <Line speaker="MON">
          All right. At this period in time now, before the geologic activity, look around, in and around this area,
          and see if you can find any activity.
        </Line>
        <Line speaker="SUB">
          I&apos;m seeing... it&apos;s like a perception of a shadow of{' '}
          <E term="the Ancient People">people</E>, very tall, thin — it&apos;s only a shadow. It&apos;s as if they
          were there and they&apos;re not there anymore.
        </Line>
        <Line speaker="MON">Go back to a period of time where they are there.</Line>
        <Line speaker="SUB">
          It&apos;s like I get a lot of static on a line, everything&apos;s breaking up, very fragmentary pieces. I
          just keep seeing very large people — they appear thin and tall, but they&apos;re very large. Wearing some
          kind of strange clothes.
        </Line>
      </DocSection>

      {/* ── Site 2 ─────────────────────────────────────────── */}
      <DocSection id="doc-site2" number="SITE II" title="Canyon Structures and the Obelisk">
        <P>
          Holding in the same time period, the monitor moves the subject to a new location — 46.45° N, 353.22° E.
        </P>
        <Line speaker="SUB">
          Deep inside of a cavern — not a cavern, more like a canyon. I&apos;m looking up the sides of a steep wall
          that seem to go on forever. There&apos;s a structure — it&apos;s like the wall of the canyon itself has
          been carved. Again I&apos;m getting very large structures, huge sections of smooth stone.
        </Line>
        <Line speaker="MON">Do the structures have insides and outsides?</Line>
        <Line speaker="SUB">
          Yes — it&apos;s like a rabbit warren, corners of rooms, they&apos;re really huge. Ceiling is very high,
          walls very wide.
        </Line>
        <P className="text-xs text-muted-foreground/70 font-mono">(Monitor notes, real time plus 22 minutes: &quot;Yes, that would be correct.&quot;)</P>
        <P>
          Moving to a nearby point — 45.86° N, 354.1° E:
        </P>
        <Line speaker="SUB">
          They have... appears to be the end of a very large road, and there&apos;s a marker thing that&apos;s very
          large — keep getting Washington Monument overlay, it&apos;s like an obelisk.
        </Line>
      </DocSection>

      {/* ── Site 3 ─────────────────────────────────────────── */}
      <DocSection id="doc-site3" number="SITE III" title="The Basin and Reflective Structures">
        <P>Four further coordinate moves follow in quick succession.</P>
        <Line speaker="SUB">
          [35.26° N, 213.24° E] It&apos;s like I&apos;m in the middle of a huge circular basin, ringed by mountains
          almost all the way around — very ragged, very tall. The basin is very, very large. Scale seems to be off
          or something, it&apos;s just really big, everything&apos;s big.
        </Line>
        <Line speaker="SUB">
          [34.6° N, 213.09° E] A cluster of squares, up and down — it&apos;s like you want to make them square
          anyway. They&apos;re almost flush with the ground and connected. Something very white, or reflects light.
        </Line>
        <Line speaker="MON">What&apos;s your position of observation as you look at this thing that reflects light?</Line>
        <Line speaker="SUB">I&apos;m amid an oblique left angle, the sun is weird.</Line>
        <Line speaker="SUB">
          [34.57° N, 212.22° E] I can just perceive a radiating pattern of some kind — strange, intersecting kinds of
          roads dug into valleys, where the road is just a little below the edge. They&apos;re like real neat
          channels cut, very deep, like the road went down.
        </Line>
        <Line speaker="SUB">
          [15° N, 198° E] I see intersecting... whatever these are, aqueduct-type things — rounded-bottom carved
          channels, like road beds. I see pointed tops of something on the horizon. Even the horizon looks funny and
          weird — misty, like it&apos;s really far away, very vague.
        </Line>
      </DocSection>

      {/* ── Site 4 ─────────────────────────────────────────── */}
      <DocSection id="doc-site4" number="SITE IV" title="Shelter, and a Dying Civilization">
        <P>
          A final move — 80° S, 64° E — leads to the session&apos;s longest and most sustained encounter.
        </P>
        <Line speaker="SUB">See pyramids. Can&apos;t tell if it&apos;s overlay or not, &apos;cause they&apos;re different.</Line>
        <Line speaker="MON">Do these pyramids have insides and outsides?</Line>
        <Line speaker="SUB">Um-hum, got both, and they&apos;re huge. It&apos;s really an interesting perception I&apos;m getting.</Line>
        <P className="text-xs text-muted-foreground/70 font-mono">
          (Monitor notes: subject appears to be losing precise targeting ability but is drawn to specific details, so
          the session lets him follow his own attention rather than forcing further coordinate moves.)
        </P>
        <Line speaker="SUB">They&apos;re like shelters from storms. They&apos;re designed for that.</Line>
        <Line speaker="MON">All right. Go inside one of these and find some activity to tell me about.</Line>
        <Line speaker="SUB">
          Different chambers — but they&apos;re almost stripped of any kind of furnishings, it&apos;s strictly a
          functional place for sleeping, or — hibernations, some form. Raw inputs: storms, savage storms, and
          sleeping through storms.
        </Line>
        <Line speaker="MON">Tell me about the ones who sleep through the storms.</Line>
        <Line speaker="SUB">
          Very tall again, very large people, but they&apos;re thin — they look thin because of their height. They
          dress in something like real light silk, but not flowing — it&apos;s cut to fit.
        </Line>
        <Line speaker="MON">Move close to one of them and ask them to tell you about themselves.</Line>
        <Line speaker="SUB">
          They&apos;re <E term="the Ancient People">ancient people</E>. They&apos;re dying — it&apos;s past their
          time, or age. They&apos;re very philosophic about it. They&apos;re looking for a way to survive and they
          just can&apos;t. They can&apos;t seem to find their way out, so they&apos;re hanging on while they look, or
          wait, for something — or someone — to return with the answer.
        </Line>
        <Line speaker="MON">What is it they&apos;re waiting for?</Line>
        <Line speaker="SUB">
          There was evidently a group of them that went to find a new place to live. I&apos;m getting overwhelming
          input of the corruption of their environment — it&apos;s failing very rapidly, and this group went
          somewhere, a long way, to find another place to live.
        </Line>
        <Line speaker="MON">What was the cause of the atmospheric disturbance, or the environment disturbance?</Line>
        <Line speaker="SUB">
          I see a picture of... it&apos;s almost a warp — this is difficult. I get a globe — it&apos;s like a globe
          that goes through a comet&apos;s tail, or through a river of something, but it&apos;s all very cosmic.
          Like space pictures.
        </Line>
        <Line speaker="MON">
          Before you leave this individual, ask him if he knows who you are, and if there is any way you can help
          him in his present predicament.
        </Line>
        <Line speaker="SUB">
          All I get is that they must just wait. He doesn&apos;t know who I am — I think he perceives I&apos;m a
          hallucination, or something.
        </Line>
        <Line speaker="MON">When the others left, these people who are waiting — how did they go?</Line>
        <Line speaker="SUB">
          I get an impression of... I don&apos;t know what it is. It looks like the inside of a larger boat. Very
          rounded walls, shiny metal.
        </Line>
        <Line speaker="MON">Go along with them on their journey and find out where it is they go.</Line>
        <Line speaker="SUB">
          An impression of a really crazy place, with volcanoes and gas pockets and strange plants — very volatile,
          like going from the frying pan into the fire. The difference is there seems to be a lot of vegetation where
          the other place did not have it. And a different kind of storm.
        </Line>
        <P>
          The session closes with the subject brought back to present time.
        </P>
        <Line speaker="MON">
          All right, it&apos;s time to come back now to the sound of my voice, into present time — to right now, the
          22nd of May, 1984. Move now back to the room, back to the sound of my voice.
        </Line>
        <p className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase text-center pt-4">
          — End of Interview —
        </p>
      </DocSection>
    </>
  );
}
