import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',       label: 'Abstract and Framing the Question' },
  { id: 'doc-soviet',      label: '1. The Soviet Advantage' },
  { id: 'doc-belief',      label: '2. A Need to Believe?' },
  { id: 'doc-sri',         label: '3. The SRI Tests' },
  { id: 'doc-tool',        label: '4. Remote Viewing as an Intelligence Tool' },
  { id: 'doc-conclusion',  label: '5. Conclusion' },
];

export const entities: Record<string, Entity> = {
  'Michael E. Zarbo': {
    title: 'Captain Michael E. Zarbo',
    definition: 'Author of this thesis, a US Army officer submitting it in partial fulfillment of a Master of Science in Strategic Intelligence at the Defense Intelligence College, November 1992.',
    crossRef: 'Title Page',
    category: 'person',
  },
  'Harold Puthoff': {
    title: 'Harold Puthoff, Ph.D.',
    definition: 'Stanford-trained physicist and, with Russell Targ, one of the two principal researchers behind SRI International\'s remote-viewing program beginning in 1973 — credentialed with laser-field patents and co-authorship of a quantum physics textbook.',
    crossRef: 'Part 3 — The SRI Tests',
    category: 'person',
  },
  'Russell Targ': {
    title: 'Russell Targ',
    definition: 'Laser physicist and co-founder, with Harold Puthoff, of SRI International\'s remote-viewing research program, holding significant patents in the laser field.',
    crossRef: 'Part 3 — The SRI Tests',
    category: 'person',
  },
  'Pat Price': {
    title: 'Pat Price',
    definition: 'Former police commissioner and vice mayor of Burbank, California, and — per this thesis — SRI\'s most successful remote viewer, whose work for the CIA included precisely locating file-cabinet contents from geographic coordinates alone and conducting the agency\'s first actual remote-viewing intelligence collection operation in 1974.',
    crossRef: 'Part 3 — The SRI Tests',
    category: 'person',
  },
  'L. L. Vasilyev': {
    title: 'L. L. Vasilyev',
    definition: 'Soviet researcher, protégé of V. M. Bechterev, tasked in the 1930s with investigating telepathy — his findings, not published until 1960, prompted him to found a new telepathy research group at Leningrad University.',
    crossRef: 'Part 1 — The Soviet Advantage',
    category: 'person',
  },
  'Dr. Kenneth Kress': {
    title: 'Dr. Kenneth Kress',
    definition: 'CIA project officer during the Stanford Research Institute tests, who introduced the agency to Pat Price and later wrote the 1977 article "Parapsychology and Intelligence" documenting the CIA\'s early involvement with Puthoff and Targ.',
    crossRef: 'Part 3 — The SRI Tests',
    category: 'person',
  },
  'the Nautilus hoax': {
    title: 'The Nautilus Hoax',
    definition: 'A 1960 French press report, later revealed as false, claiming the US Navy was conducting telepathic submarine-to-shore experiments from the USS Nautilus at the North Pole — the story reportedly spurred the Soviets to conduct their own sub-to-shore telepathy experiment involving a mother rabbit and her separated offspring.',
    crossRef: 'Part 1 — The Soviet Advantage',
    category: 'concept',
  },
  'Project ULTRA': {
    title: 'Project ULTRA',
    definition: 'A 1961 CIA Office of Technical Service project in which the Director of Oxford University\'s Parapsychological Laboratory was commissioned to review the validity of ESP — the resulting report claimed ESP was demonstrated but neither understood nor controllable, and was read with interest but produced no further action.',
    crossRef: 'Part 1 — The Soviet Advantage',
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
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP96-00789R002600250001-6</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Remote Viewing: Parapsychological<br />Potential for Intelligence Collection?
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Author', 'Captain Michael E. Zarbo, US Army'], ['Institution', 'Defense Intelligence College'], ['Date', 'November 1992']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P className="italic text-muted-foreground">
          &quot;You&apos;re travelling through another dimension. A dimension, not only of sight and sound, but of
          mind...&quot; — Rod Serling, opening quotation
        </P>
        <P>
          This master&apos;s thesis, submitted by{' '}
          <E term="Michael E. Zarbo">Captain Michael E. Zarbo</E> to the Defense Intelligence College, argues that
          blindly overlooking persuasive experimental data on remote viewing could amount, from a
          counterintelligence perspective, to disregarding a genuine threat. The paper does not claim the phenomenon
          is proven, only that continued study could make it a worthwhile collection tool — and that the
          intelligence community&apos;s reluctance to seriously engage with it stems less from the evidence itself
          than from fear of professional humiliation for taking something so far outside conventional wisdom
          seriously.
        </P>
        <P>
          Remote viewing — a term coined by SRI scientists{' '}
          <E term="Harold Puthoff">Harold Puthoff</E> and <E term="Russell Targ">Russell Targ</E> — falls under
          extrasensory perception, the acquisition of information blocked from ordinary perception by distance or
          shielding. Author Benjamin Wolman defines it as an experience where one&apos;s center of consciousness
          seems located separately from the physical body; psychologist Ray Hyman defines it operationally, as a
          subject describing a target site with no sensory basis for doing so, whether by latitude and longitude or
          via an observer team acting as a conduit at an unknown location. The thesis opens with a stark scenario:
          an opposing force retrieving a US tactical operations center&apos;s battle plans by remote viewing, far
          enough in advance to plan a counterattack — with, at the time of writing, no serious US countermeasure
          effort underway.
        </P>
      </section>

      {/* ── Part 1: The Soviet Advantage ───────────────────── */}
      <DocSection id="doc-soviet" number="CHAPTER 2" title="The Soviet Advantage">
        <P>
          The thesis argues the Soviet Union approached parapsychology empirically, as a legitimate subject for
          controlled experiment, while the US treated it as unworthy of serious scientific inquiry — a divide Army
          Medical Service Corps Captain Richard Groller summarized as &quot;first prove to me that it exists, then
          I&apos;ll believe it&quot; versus the Soviet &quot;we believe that something exists that has no normal,
          rational explanation — let us investigate it.&quot; This gave Soviet researchers a reported 25-to-50-year
          head start, and considerably more funding — tens of millions of dollars annually through the 1980s,
          versus under $500,000 a year in the US, mostly from private foundations.
        </P>
        <P>
          Soviet research traces to World War I and{' '}
          <E term="L. L. Vasilyev">L. L. Vasilyev</E>&apos;s telepathy investigations, though it survived Stalin-era
          hostility only underground — parapsychologists risked execution or exile as heretics before 1953. Interest
          revived in 1960 following two catalysts: rumors that Party Chairman Brezhnev consulted a psychic healer,
          and{' '}
          <E term="the Nautilus hoax">a fabricated French press report</E> claiming the US Navy was running
          telepathic submarine experiments — which reportedly spurred the Soviets to attempt their own version
          using a mother rabbit and her separated newborns, wired with electrodes, at sea and ashore. A 1973 Prague
          parapsychology conference exposed Soviet research difficulties: delegates questioned a prominent American
          psychic in a transparent effort to learn about US methods without revealing their own, and two visiting
          Soviets — a cosmonaut and a space-systems engineer — later sought out American remote-viewing researchers
          under a thin pretext, probing specifically for training methods (hypnosis, machines, repeated practice).
          The thesis also raises — without fully endorsing — the theory that Soviet microwave bombardment of the US
          Embassy in Moscow (1975–76) may have aimed at inducing mind-altering effects via brain-wave-frequency
          radiation, tying it to reported erratic behavior in President Carter following the Vienna SALT II talks
          and Vasilyev&apos;s own 1960 claims about radiation-induced hallucination and long-distance hypnosis.
        </P>
      </DocSection>

      {/* ── Part 2: A Need to Believe? ──────────────────────── */}
      <DocSection id="doc-belief" number="CHAPTER 3" title="A Need to Believe?">
        <P>
          The thesis confronts the charge that parapsychological conviction resembles religious faith more than
          science head-on, quoting V. M. Bleykher&apos;s comparison of parapsychological belief to blind religious
          faith and Dr. J. B. Rhine&apos;s observation that parapsychical assumptions run through virtually every
          human culture&apos;s formal religions. Zarbo turns this into an argument rather than a concession: if
          Christians are not considered irrational for accepting claims without irrefutable proof, why should remote
          viewing be dismissed purely for lacking one? Russell Targ, writing in 1985, argued that the field&apos;s
          critics typically know little about it and reject it out of discomfort with its philosophical implications
          rather than engagement with its evidence.
        </P>
      </DocSection>

      {/* ── Part 3: The SRI Tests ───────────────────────────── */}
      <DocSection id="doc-sri" number="CHAPTER 3" title="The SRI Tests">
        <P>
          Despite official US ambivalence, the CIA quietly funded controlled remote-viewing tests at SRI starting in
          1973 under <E term="Harold Puthoff">Puthoff</E> and <E term="Russell Targ">Targ</E>, both credentialed
          laser physicists. In the standard protocol, a remote viewer was closeted with an interviewer while a
          conduit researcher selected one of sixty target cards via a random-number function and traveled to that
          site, unknown to either the viewer or interviewer, to prevent unconscious cueing. After the viewing,
          independent SRI judges — blind to which transcript matched which site — attempted to match viewer
          transcripts to targets using a six-concept, zero-to-ten rating scale; per Puthoff, judges matched
          transcripts to their correct targets in first place roughly half the time, a result the thesis
          characterizes as exceptionally significant.
        </P>
        <P>
          The CIA&apos;s own project officer,{' '}
          <E term="Dr. Kenneth Kress">Dr. Kenneth Kress</E>, introduced the program to{' '}
          <E term="Pat Price">Pat Price</E>, a former police commissioner and vice mayor of Burbank — SRI&apos;s
          most successful viewer on record. Given only geographic coordinates for a site roughly 135 miles southwest
          of Washington, DC, Price reportedly described the area from a 1,500-foot altitude down to building
          interiors, including equipment, names on desks, and a dozen labels on file folders locked inside a
          cabinet — confirmed exactly right three weeks later. The first genuine intelligence-collection operation
          using remote viewing followed in early 1974, tasking Price against an unidentified Soviet research and
          development facility identified from satellite reconnaissance.
        </P>
      </DocSection>

      {/* ── Part 4: RV as an Intelligence Tool ─────────────── */}
      <DocSection id="doc-tool" number="CHAPTER 4" title="Remote Viewing as an Intelligence Tool">
        <P>
          Chapter 4 opens with a quotation attributed to Kung Ming (181–234 BC): &quot;Attacking the mind is
          superior while attacking fortifications is inferior.&quot; Researcher Loring B. Williams, reflecting on the
          embarrassment of Gary Powers&apos; U-2 being shot down over Soviet territory, argued that reliably trained
          remote viewers could survey any nation&apos;s military capability, sit in on its high councils, and search
          its political archives — all without risking an agent&apos;s life. The thesis also relates a widely
          circulated World War I anecdote: a German soldier claiming the ability to project himself out of body
          reportedly reported enemy attack plans obtained by &quot;visiting&quot; his own division headquarters from
          a trance; his commanding officer dismissed the warning, and the unit was overrun at the exact hour and
          location the soldier had predicted.
        </P>
        <P>
          Lieutenant Colonel John B. Alexander, described as a respected authority on the subject, argued the
          Soviets held a decisive lead in mind-based capabilities with lethal potential already demonstrated, and
          that a fully developed capability could ultimately let an operator enter an enemy headquarters at will to
          observe plans and dispositions, or reconnoiter a battlefield area from complete physical safety.
        </P>
      </DocSection>

      {/* ── Part 5: Conclusion ──────────────────────────────── */}
      <DocSection id="doc-conclusion" number="CHAPTER 5" title="Conclusion">
        <P>
          Zarbo closes with two personal anecdotes. In 1976, his mother — a skeptic — visited a psychic who told her
          one of her two sons would be &quot;laid up for a while because of an accident&quot; and that both sons
          would become military officers; in 1977 Zarbo was seriously injured in a car accident that killed a close
          friend, and he and his brother both went on to become Army officers, information his mother had not shared
          with him until years later. Separately, while researching this thesis, a psychic he consulted correctly
          stated roughly ten specific personal facts about him after only fifteen seconds of examining his hands.
        </P>
        <P>
          On the substance of the research, Zarbo quotes{' '}
          <E term="Dr. Kenneth Kress">Kress</E>&apos;s own assessment: &quot;There are observations that defy
          explanation. Coincidence is not likely, and fraud has not been discovered. The implication of these data
          cannot be determined until an assessment is done.&quot; He invokes Herbert Spencer&apos;s warning against
          &quot;contempt before investigation,&quot; and philosopher Antony Flew&apos;s 1975 assessment that there was
          &quot;too much evidence... to dismiss it as all a lot of nonsense, and enough to require that one should
          maintain a continuing interest.&quot; Captain Groller&apos;s comparison to the Manhattan Project — vast
          resources committed to an unproven, highly theoretical program that became reality within a few years —
          closes the argument: with the Cold War ending, some might see continued research as less urgent, but Zarbo
          contends the Intelligence Community should continue systematic investigation of a field with genuine
          collection potential precisely because its implications, if real, are too significant to leave
          unexamined.
        </P>
      </DocSection>
    </>
  );
}
