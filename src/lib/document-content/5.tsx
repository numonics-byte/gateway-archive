import { E, P, DocSection, type Entity, type ViewerSection } from '@/components/ui/GatewayViewer';

export const sections: ViewerSection[] = [
  { id: 'doc-intro',      label: 'The Rise of Meditation in the West' },
  { id: 'doc-early',      label: '1. Early Physiological Studies' },
  { id: 'doc-technique',  label: '2. What TM Is and How It Works' },
  { id: 'doc-effects',    label: '3. Measured Physiological Effects' },
  { id: 'doc-drugs',      label: '4. TM and Drug Use' },
  { id: 'doc-clinical',   label: '5. Clinical and Psychological Effects' },
  { id: 'doc-caveats',    label: '6. Caveats and Open Questions' },
];

export const entities: Record<string, Entity> = {
  'Transcendental Meditation': {
    title: 'Transcendental Meditation (TM)',
    definition: 'The specific meditation technique most studied by researchers in this article, popularized in the U.S. by Maharishi Mahesh Yogi. Chosen for study because it produces consistent physiological changes, is easy to practice under experimental conditions, and had a large pool of uniformly trained subjects available.',
    crossRef: 'Part 2 — What TM Is and How It Works',
    category: 'technique',
  },
  'Robert Keith Wallace': {
    title: 'Robert Keith Wallace',
    definition: 'Published one of the first major papers on meditation\'s physiological effects in Science (1970), finding decreased heart rate and oxygen consumption during TM. Later collaborated with Herbert Benson on further studies.',
    crossRef: 'Part 1 — Early Physiological Studies',
    category: 'person',
  },
  'Herbert Benson': {
    title: 'Herbert Benson',
    definition: 'Harvard Medical School researcher who, with Wallace, published the first major study of TM\'s physiological effects in the American Journal of Physiology (1971), and went on to study its clinical applications for hypertension and drug use.',
    crossRef: 'Part 1 — Early Physiological Studies',
    category: 'person',
  },
  'Edward Taub': {
    title: 'Edward Taub',
    definition: 'Researcher at the Institute for Behavioral Research who chaired a symposium on the psychobiology of meditation at that year\'s American Psychological Association meeting, arguing subjective reports of meditation\'s benefits require objective physiological verification.',
    crossRef: 'Introduction — The Need for Verification',
    category: 'person',
  },
  'mantra': {
    title: 'Mantra',
    definition: 'A sound, word, or thought — assigned to a TM practitioner according to their personality — perceived and freely experienced during meditation without active concentration, serving as the technique\'s central cue.',
    crossRef: 'Part 2 — What TM Is and How It Works',
    category: 'concept',
  },
  'fight-or-flight reflex': {
    title: 'Fight-or-Flight Reflex',
    definition: 'The sympathetic nervous system response that TM\'s measured effects — increased blood flow, decreased oxygen consumption, increased skin resistance — appeared to be the opposite of. Its overstimulation by modern stress is thought to contribute to hypertension and psychosomatic disease.',
    crossRef: 'Part 3 — Measured Physiological Effects',
    category: 'concept',
  },
  'Gary E. Schwartz': {
    title: 'Gary E. Schwartz',
    definition: 'Harvard researcher whose later work complicated Wallace and Benson\'s findings, pointing out that the personality of the experimenter — not just the subject — may be an important variable in the physiological results measured during meditation.',
    crossRef: 'Part 6 — Caveats and Open Questions',
    category: 'person',
  },
};

export default function Body() {
  return (
    <>
      {/* ── Document Header ──────────────────────────────── */}
      <section id="doc-intro" className="scroll-mt-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 border border-accent cyber-chamfer-sm px-3 py-1 bg-accent/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-neon" />
            <span className="font-label text-[10px] tracking-[0.2em] text-accent uppercase">Science News</span>
          </span>
          <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground uppercase">CIA-RDP79-00999A000200010091-5</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase leading-tight mb-5">
          Meditating Toward Inner Peace
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
          {[['Author', 'Robert J. Trotter'], ['Publication', 'Science News, Vol. 104, No. 24'], ['Date', 'December 15, 1973']].map(([l, v]) => (
            <div key={l}>
              <span className="font-label text-[9px] tracking-[0.15em] text-muted-foreground uppercase block">{l}</span>
              <span className="font-mono text-xs text-foreground tracking-wide">{v}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-accent via-accent/30 to-transparent mb-8" />

        <P className="text-xs text-muted-foreground/80 italic">
          This document is a full issue of Science News magazine, archived here for one feature article — the
          surrounding pages (Jupiter probe data, book reviews, letters to the editor) are not reproduced.
        </P>
        <P>
          Meditation was becoming a popular relaxer and escape mechanism in Western societies, and researchers were
          finding that many of its claims seemed to have physiological correlates. The counterculture of the 1960s
          left many young people ideologically adrift, and many turned to a practice that had been, in the
          article&apos;s words, &quot;the opiate of the Eastern masses for several millennia&quot; — meditation. Long
          dismissed in the West as mysterious and semi-religious, meditation techniques had by the early 1970s been
          adapted into forms &quot;that can be communicated and learned by anyone,&quot; with hundreds of thousands of
          Westerners taking them up. Most methods, however they differ, aim at the same goal: a profound state of
          rest combined with relaxed alertness — something like the moment just before sleep, prolonged and reached
          at will.
        </P>
        <P>
          Regular meditators reported greater serenity, more energy, better prioritization, and reduced anxiety,
          aggression, and hostility. But these reports were entirely subjective, said{' '}
          <E term="Edward Taub">Edward Taub</E> of the Institute for Behavioral Research, chairing a symposium on the
          psychobiology of meditation at that year&apos;s American Psychological Association meeting — subjective
          reports, he noted, often correspond poorly with outward reality as perceived by others, compelling
          researchers to seek objective verification.
        </P>
      </section>

      {/* ── Part 1: Early Physiological Studies ───────────── */}
      <DocSection id="doc-early" number="PART I" title="Early Physiological Studies">
        <P>
          Physiological interest in meditation is not new: in 1935, a French cardiologist brought a portable
          electrocardiograph to India to test yogis who claimed they could voluntarily stop their own heartbeat. One
          apparently could, though follow-up studies were inconclusive.
        </P>
        <P>
          More rigorous American research began with{' '}
          <E term="Robert Keith Wallace">Robert Keith Wallace</E>&apos;s 1970 paper in{' '}
          <span className="italic">Science</span>, which found meditation accompanied by decreased heart rate and
          oxygen consumption. Wallace, <E term="Herbert Benson">Herbert Benson</E>, and Archie F. Wilson of Harvard
          Medical School followed up in the{' '}
          <span className="italic">American Journal of Physiology</span> in 1971 with the first major study of
          meditation&apos;s physiological effects.
        </P>
      </DocSection>

      {/* ── Part 2: What TM Is ─────────────────────────────── */}
      <DocSection id="doc-technique" number="PART II" title="What TM Is and How It Works">
        <P>
          Wallace, Benson, and most subsequent researchers focused on one specific technique:{' '}
          <E term="Transcendental Meditation">Transcendental Meditation</E>, or TM, popularized in the United States
          by Maharishi Mahesh Yogi and taught through the Students&apos; International Meditation Society. Researchers
          favored TM for study because it produced consistent physiological changes, subjects found it easy to
          practice during experimental measurement, and a large pool of uniformly trained subjects was available.
          Taub noted TM is described as an entirely mechanical process, requiring no faith, belief, intellectual
          analysis, or reclusive lifestyle — it integrates with a normal, active life.
        </P>
        <P>
          The basic technique is taught in a single 90-minute session, then practiced for 20 minutes twice a day: the
          meditator sits comfortably with eyes closed, perceiving an assigned{' '}
          <E term="mantra">mantra</E> — a sound or thought — without actively concentrating on it. Other thoughts may
          arise and be examined and set aside, without being followed to further associations, which meditators
          report leads to a finer, more creative level of thinking.
        </P>
      </DocSection>

      {/* ── Part 3: Measured Physiological Effects ────────── */}
      <DocSection id="doc-effects" number="PART III" title="Measured Physiological Effects">
        <P>
          Presuming a physical rather than spiritual cause for meditation&apos;s reported effects, Benson and Wallace
          measured 36 subjects across a range of physiological scales during TM: blood flow in the arm increased by
          about 32 percent, oxygen consumption decreased by about 17 percent, electrical resistance of the skin
          increased by an average of about 200 percent, brain-wave patterns indicated alert wakefulness, and carbon
          dioxide elimination decreased. This pattern — a &quot;quiescence of the sympathetic nervous system&quot; —
          is the opposite of the{' '}
          <E term="fight-or-flight reflex">fight-or-flight reflex</E>, whose overstimulation by modern stress is
          thought to contribute to hypertension and psychosomatic disease. &quot;It should be well worthwhile,&quot;
          Wallace and Benson concluded, &quot;to investigate the possibilities for clinical application of this state
          of wakeful rest and relaxation.&quot;
        </P>
      </DocSection>

      {/* ── Part 4: TM and Drug Use ────────────────────────── */}
      <DocSection id="doc-drugs" number="PART IV" title="TM and Drug Use">
        <P>
          Because a similar lessening of anxiety is often pursued through drugs, several researchers studied
          meditation&apos;s effect on drug use — finding, unlike drugs, that TM does not require escalating doses as
          the practitioner becomes habituated, and that most steady meditators simply stop using drugs. Benson and
          Wallace surveyed 1,862 subjects and found that after about 21 months of TM practice, almost 96 percent of
          those who had been trafficking in drugs had stopped; more than 95 percent of illegal drug users since
          starting TM had tried to discourage others from non-medical drug use. Marijuana and hashish use fell from
          78.3 percent (22.4 percent heavy use) before TM to 12.2 percent (0.1 percent heavy use) after 22 months of
          practice, with similar drops reported for LSD, opiates, amphetamines, barbiturates, alcohol, and tobacco.
        </P>
        <P>
          W. T. Winquist of UCLA found that after at least three months of TM, 84 percent of regular marijuana users
          had stopped, with 49 percent attributing the decline to life becoming more fulfilling after starting
          meditation. David Orme-Johnson studied narcotics addicts at a federal prison in New Mexico and found
          prisoners became less compulsive and more sociable after two months of regular meditation; a separate study
          of staff at a Fort Bliss drug and alcohol treatment center found reduced anxiety symptoms and more organized
          thought and behavior after ten weeks of TM, measured by MMPI testing before and after.
        </P>
      </DocSection>

      {/* ── Part 5: Clinical and Psychological Effects ────── */}
      <DocSection id="doc-clinical" number="PART V" title="Clinical and Psychological Effects">
        <P>
          Benson and Wallace worked with 22 hypertensive subjects and reported that regular TM practice reduced blood
          pressure. Other researchers reported TM beneficial in treating bronchial asthma and inflammatory conditions
          such as swollen gums, and found it increased auditory ability. On psychological tests, meditators displayed
          significantly less verbal hostility than non-meditators, and one psychiatrist reported that patients
          practicing TM showed a faster-than-average rate of improvement in psychotherapy — with some patients
          showing greater productivity and greatly decreased hours of therapy needed. Other clinicians reported
          success treating claustrophobia and excessive perspiration, and one report claimed TM could improve
          marriages by releasing the tensions of daily life.
        </P>
      </DocSection>

      {/* ── Part 6: Caveats and Open Questions ─────────────── */}
      <DocSection id="doc-caveats" number="PART VI" title="Caveats and Open Questions">
        <P>
          The article closes with real caveats. In nearly every study, subjects had elected to become meditators —
          setting them apart from other hypertensives, drug users, or neurotics, since the willpower to take up and
          sustain TM may itself account for some of the change, and subjects who didn&apos;t follow through received
          none of the benefits. Meditation is not, the article stresses, &quot;a shot-in-the-arm cure-all&quot;:
          Arthur Vassiliadis of the Stanford Research Institute found three months of TM produced no statistically
          significant change in heart rate — only after nine months of conscientious practice did a significant
          reduction appear.
        </P>
        <P>
          Nor is the underlying mechanism agreed upon. Later work by{' '}
          <E term="Gary E. Schwartz">Gary E. Schwartz</E> at Harvard complicated Wallace and Benson&apos;s original
          findings, suggesting the personality of the experimenter — not just the subject — may be an important
          variable (Wallace, an easygoing and interested experimenter, reportedly got different results than a less
          sympathetic one would). Taub maintained that Wallace and Benson&apos;s work remained valid even as newer
          data offered different interpretations, concluding that without a coherent explanation yet, the data on TM
          were nonetheless &quot;suggestive and exciting.&quot;
        </P>
      </DocSection>
    </>
  );
}
