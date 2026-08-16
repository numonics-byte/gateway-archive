import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'The Assessment' },
  { id: 'doc-background', label: '1. Background and Organization' },
  { id: 'doc-research',   label: '2. Areas of Research' },
  { id: 'doc-facilities', label: '3. Covert Research Facilities' },
  { id: 'doc-significance', label: '4. Significance and Potential Uses' },
];

export const entities: Record<string, Entity> = {
  'clairvoyance': {
    title: 'Clairvoyance (Remote Viewing)',
    definition: 'Judged the Soviet program\'s prime candidate for applied use — acquiring information about locations and objects inaccessible by other means. Soviet methodology relies heavily on hypnotism, biofeedback, yoga, and drugs to induce trance states, contrasting sharply with US experiments conducted with subjects fully conscious.',
    crossRef: 'Part 2 — Clairvoyance (Remote Viewing)',
    category: 'technique',
  },
  'telepathy': {
    title: 'Telepathy',
    definition: 'Soviet research reportedly includes sender-to-recipient communication, mind reading, and causing involuntary physiological or behavioral changes in unwitting target individuals — explored in connection with the manned space program and assessed as a lower-probability but still-pursued applied capability.',
    crossRef: 'Part 2 — Telepathy',
    category: 'concept',
  },
  'psychokinesis': {
    title: 'Psychokinesis',
    definition: 'The influencing of matter by mental force alone — including mentally moving objects and mentally affecting electrical circuitry. Some Soviet research aimed at remotely affecting target individuals is categorized in Soviet reporting as psychokinesis rather than telepathy, complicating precise classification.',
    crossRef: 'Part 2 — Psychokinesis',
    category: 'concept',
  },
  'D. G. Mirza': {
    title: 'D. G. Mirza',
    definition: 'Director of the highly classified Institute on Vorobyovyye Gori (facility M3) until about 1969, encompassing applied clairvoyance, telepathy, and yoga research. Also reportedly headed a new secret laboratory (M4) established around 1969 to study black magic.',
    crossRef: 'Part 3 — Moscow Facilities',
    category: 'person',
  },
  'G. A. Sergeyev': {
    title: 'G. A. Sergeyev',
    definition: 'Soviet researcher who specializes in applying statistical techniques to biological objects. Primary investigator on a 1970 telepathy experiment monitoring physiological changes in a recipient timed to a remote light stimulus, and developer of the Sergeyev detector — a remote physiological sensor for electrical and magnetic fields around living organisms.',
    crossRef: 'Part 2 — Telepathy',
    category: 'person',
  },
  'Wolf Messing': {
    title: 'Wolf Messing',
    definition: 'Famous Soviet hypnotist and psychic reportedly directing a covert Moscow research program (facility M5) believed to be the only one funded directly by the KGB, investigating clairvoyance and telepathic influence over target individuals\' behavior and physiology, with heavy emphasis on training.',
    crossRef: 'Part 3 — Moscow Facilities',
    category: 'person',
  },
  'Kirlian photography': {
    title: 'Kirlian Photography',
    definition: 'A technique exposing photographic plates in a high-voltage alternating electric field, producing a visual "aura" around the photographed object. Long associated with occult claims of photographing paranormal energy fields, but assessed here as having no paranormal basis — likely useful instead as a biomedical sensor for physiological and emotional states.',
    crossRef: 'Part 4 — Related Research Benefits',
    category: 'technology',
  },
  'Sergeyev detector': {
    title: 'Sergeyev Detector',
    definition: 'A remote physiological sensor developed at the Ukhtomsky Research Institute, Leningrad State University, registering electrical and possibly magnetic field variations around living organisms, correlated with respiration and cardiac/nervous system activity — with a time constant fast enough to detect changes in milliseconds.',
    crossRef: 'Part 4 — Related Research Benefits',
    category: 'technology',
  },
  'I. M. Kogan': {
    title: 'I. M. Kogan',
    definition: 'Soviet researcher whose information-theory work — applied mathematics rather than parapsychology itself — likely provided Soviet parapsychologists with more mathematically sophisticated analytical tools than their US counterparts typically used.',
    crossRef: 'Part 2 — Telepathy',
    category: 'person',
  },
  'Institute on Vorobyovyye Gori': {
    title: 'Institute on Vorobyovyye Gori (Facility M3)',
    definition: 'The largest and most highly classified of the covert Soviet parapsychology facilities identified, occupying an entire eight-story Moscow building and employing several hundred people, mostly technicians and electronic engineers. Directed by D. G. Mirza until about 1969, likely funded by the Ministry of Defense.',
    crossRef: 'Part 3 — Covert Research Facilities',
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
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">NSA-RDP96X00790R000100010041-2</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Soviet and East European<br />Parapsychology Research
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Project Officer', 'Thomas C. Hamilton'], ['Publication', 'SI 77-10012'], ['Date', 'April 1977'], ['Office', 'CIA Directorate of Intelligence, Office of Scientific Intelligence']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P>
          <span className="text-accent font-mono">Problem.</span> To assess the organization, scope, potential
          intelligence value, and military significance of Soviet parapsychological research.
        </P>
        <P>
          <span className="text-accent font-mono">Summary and Conclusions.</span> Analysis from multiple sources
          indicates the Soviets have a classified parapsychology research program funded and controlled largely by
          the Ministry of Defense and possibly the KGB, active since the early 1960s, staffed by competent scientists
          and technicians across roughly ten research units ranging from single laboratories to large institutes
          employing several hundred people. The program emphasizes{' '}
          <E term="clairvoyance">clairvoyance</E> (remote viewing) to acquire intelligence on remote locations,{' '}
          <E term="telepathy">telepathy</E> to remotely influence targeted individuals or establish covert
          communications channels, and possibly{' '}
          <E term="psychokinesis">psychokinesis</E> to affect remote electronic circuitry.
        </P>
        <P>
          Soviet accomplishments cannot be confidently assessed, but the classified program has likely had some
          success improving the reliability of information obtained through paranormal means, and Soviet researchers
          have gained experience with a wider variety of methods than their US counterparts. The government
          increasingly controls unclassified research as well, shifting an ever-larger share of the work to the
          classified program while academically oriented researchers find it harder to publish or communicate with
          foreign colleagues.
        </P>
      </section>

      {/* ── Part 1: Background ─────────────────────────────── */}
      <DocSection id="doc-background" number="PART I" title="Background and Organization">
        <P>
          Soviet laboratory investigation of paranormal phenomena dates to at least the 1930s, with the notable
          exception of Vasilyev&apos;s excellent telepathy work, conducted without government sponsorship or formal
          scientific review and generally of poor quality — Vasilyev&apos;s own work remained largely unpublished
          until the 1960s due to the political climate. An officially tolerated popularization of Soviet
          parapsychology in the early-to-mid 1960s gave way, around 1968, to sudden suppression: independent
          investigators were curtailed, contact with Western scientists sharply cut, and numerous articles published
          exposing parapsychological fraud — even as official policy, under the authorship of several eminent Soviet
          scientists, continued to support fully government-controlled research. Analysts read this shift two ways:
          either genuine suppression, or a deliberate move to gain tight control while using negative press coverage
          as cover for a now-secret, applied research program.
        </P>
        <P>
          Soviet and East European research divides into two tracks: officially supported groups funded by the KGB
          and military, conducting essentially all applications-oriented work and excluding East European
          investigators from its details; and part-time, often poorly qualified hobbyist researchers tolerated by
          universities, whose published work — scientifically weak, often anecdotal, frequently overlapping with the
          occult — provides an effective cover for the classified program underneath it. Where US research has
          historically focused on statistically proving paranormal processes exist at all, Soviet research generally
          accepts their existence and instead investigates the underlying biophysical and physiological mechanisms —
          a more integrated, multidisciplinary approach that has also made the work politically easier to fund by
          reducing its association with mysticism. In recent years the number of research topics has narrowed to
          those judged most useful, with only government-chosen investigators permitted in the highest-priority
          areas, gradually replacing long-standing academic parapsychologists with new researchers better trained in
          the physical and physiological sciences.
        </P>
      </DocSection>

      {/* ── Part 2: Areas of Research ──────────────────────── */}
      <DocSection id="doc-research" number="PART II" title="Areas of Research">
        <P>
          Soviet <E term="clairvoyance">remote-viewing</E> methodology diverges sharply from the American approach:
          where US subjects work in a fully normal conscious state, the Soviets reportedly rely on hypnotism,
          biofeedback, yoga, and drugs to induce trance states, and appear to be developing training techniques for
          subjects with no prior demonstrated ability. Soviet intelligence-gathering interest in Western methods
          surfaced directly: at a June 1973 Prague conference, Soviet delegates independently asked a well-known
          American psychic the same standardized questions on remote viewing, suggesting they were probing Western
          work without disclosing their own. More recently, a visiting Soviet cosmonaut and space-systems engineer —
          neither a parapsychologist — sought out prominent American remote-viewing researchers under the guise of a
          private visit, asking pointed technical questions (including whether trance states were used, to which they
          seemed surprised the American answer was no) while giving little in return.
        </P>
        <P>
          <E term="telepathy">Telepathy</E> research reportedly includes sender-to-recipient communication, mind
          reading, and inducing involuntary physiological or behavioral change in unwitting targets, with apparent
          interest in applying it to the Soviet manned space program. <E term="I. M. Kogan">I. M. Kogan</E>&apos;s
          information-theory work likely gave Soviet parapsychologists more mathematically sophisticated analytical
          tools than typical US researchers used. The one well-controlled telepathy experiment with results in open
          literature — monitoring a recipient&apos;s physiological response to a remote light flashed at 16 Hz,
          replicated with similar results in the US about two years later — was led by{' '}
          <E term="G. A. Sergeyev">G. A. Sergeyev</E>, though his broader publication record suggests his
          involvement in applied parapsychology was likely only part-time, possibly as a consultant directing a small
          instrumentation lab.
        </P>
        <P>
          <E term="psychokinesis">Psychokinesis</E> research in the open literature centers on psychics moving small
          objects like pencils, of little intelligence value; classified work possibly affecting remote electronic
          circuitry is harder to confirm, and some reports categorize Soviet efforts to remotely affect target
          individuals as psychokinesis rather than telepathy, blurring the two categories in this analysis.{' '}
          <span className="text-foreground font-medium">Hypnosis, autogenic training, and yoga</span> function
          primarily as training tools to help subjects acquire or accelerate paranormal abilities, rather than as
          paranormal phenomena themselves.{' '}
          <span className="text-foreground font-medium">Black magic</span> research, established around 1969 under{' '}
          <E term="D. G. Mirza">D. G. Mirza</E> at a dedicated secret laboratory tasked with identifying and
          evaluating sorcerers, witches, and their incantations, is judged unlikely to have produced any genuinely
          paranormal applied system — but may have yielded useful psychological and sociological data on influencing
          individuals and groups, and information relevant to training programs elsewhere in the covert effort.
        </P>
      </DocSection>

      {/* ── Part 3: Covert Research Facilities ─────────────── */}
      <DocSection id="doc-facilities" number="PART III" title="Covert Research Facilities">
        <P>
          Of eleven identified facilities believed involved in covert Soviet parapsychology research, at most five
          represent major applied research centers, with Moscow as the apparent center of activity and Baku, Alma
          Ata, and Novosibirsk providing supporting or collaborative work. In Moscow, three facilities under Mirza and
          S. G. Gellerstein formed a compartmented functional unit: a small laboratory (M1) for meeting and vetting
          potential psychics without exposing the covert program; a larger, unclassified-but-camouflaged facility (M2)
          staffed by serious researchers under KGB monitoring; and the{' '}
          <E term="Institute on Vorobyovyye Gori">highly classified Institute on Vorobyovyye Gori (M3)</E>,
          occupying an entire eight-story building and employing several hundred people, mostly technicians and
          electronic engineers, which absorbed the talent and data generated by M1 and M2. A fourth Moscow facility
          (M4), established around 1969 under Mirza, was dedicated to black magic research — though the report
          flags the possibility that even the source describing M4 may have been fed disinformation before
          emigrating from the USSR.
        </P>
        <P>
          A fifth Moscow facility, believed the only one funded directly by the KGB, was reportedly run by famed
          hypnotist and psychic <E term="Wolf Messing">Wolf Messing</E>, investigating clairvoyance and telepathic
          influence with heavy emphasis on training. Elsewhere: a secret institute in Alma Ata develops training
          programs using yoga, hypnosis, and autogenic training; a Navy Psychology Laboratory near Baku reportedly
          investigates telepathic influence over target individuals, though its very existence is disputed among
          sources; two small Leningrad laboratories include Vasilyev&apos;s original lab (likely inactive since his
          death) and a Navy School of Electronics lab under Sergeyev, primarily focused on biomedical instrumentation
          with parapsychology as apparently part-time work; and a highly classified facility in Novosibirsk (created
          1965, roughly 150 scientific staff) works on clairvoyance, psychokinesis, and instrumented amplification of
          telepathic ability, reportedly in collaboration with a smaller facility in Rostov-on-Don.
        </P>
      </DocSection>

      {/* ── Part 4: Significance and Potential Uses ────────── */}
      <DocSection id="doc-significance" number="PART IV" title="Significance and Potential Uses">
        <P>
          The major potential impact of Soviet applied parapsychology is judged to lie in intelligence collection.
          Clairvoyance for acquiring information about otherwise-inaccessible locations and objects is assessed as
          the strongest candidate for applied use, with recent preliminary US experimentation suggesting real-time
          data about significant, geographically definable events may be obtainable — though how much detailed,
          reliable, or quantitative information (as opposed to general impressions) can be extracted remains unknown.
          Telepathic communication channels are assessed as somewhat less likely to reach full operational maturity,
          though extensive Soviet work combining information theory, statistical analysis, and physiological sensors
          like the Sergeyev detector may have given them a better basis to judge that probability than available US
          data allows. Whether telepathy could actively induce behavioral or physiological change in an unwitting
          target cannot be meaningfully assessed from current US data at all. Black magic is judged highly unlikely
          to yield any genuinely paranormal operational capability.
        </P>
        <P>
          Independent of whether the paranormal phenomena themselves prove applicable, the program has already
          generated related research benefits — most notably{' '}
          <E term="Kirlian photography">Kirlian photography</E>, assessed here as having no paranormal basis but
          real potential as a biomedical sensor for physiological and emotional states, and the{' '}
          <E term="Sergeyev detector">Sergeyev detector</E>, a remote physiological sensor with potential
          applications as a covert, short-range communication or monitoring system quite apart from any paranormal
          claims. The report also flags a genuine counter-intelligence concern: Soviet experience with drugs and
          hypnosis in this context raises the possibility that related techniques could be developed for covertly
          obtaining human intelligence through entirely non-parapsychological means.
        </P>
      </DocSection>
    </>
  );
}
