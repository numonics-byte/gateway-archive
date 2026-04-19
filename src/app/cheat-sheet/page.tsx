import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quick Reference Cheat Sheet — Gateway Process | Gateway Archive',
  description:
    'The complete Gateway Process quick reference: session checklist, Gateway Affirmation, Focus levels, REBAL guide, advanced techniques, and troubleshooting.',
}

export default function CheatSheetPage() {
  return (
    <div className="pt-14 min-h-screen">
      {/* Classification Banner */}
      <div className="bg-accent/5 border-b border-accent/30 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="font-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Product Access — The Archive</span>
          <span className="font-label text-[10px] tracking-[0.2em] text-accent uppercase">Gateway Archive Member</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/documents" className="font-label text-[10px] tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors uppercase">← Archive</Link>
            <span className="text-border">|</span>
            <span className="font-label text-[10px] tracking-[0.15em] text-muted-foreground">Quick Reference</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-widest uppercase leading-tight mb-3">
            Gateway Process
          </h1>
          <p className="font-heading text-xl text-accent font-bold tracking-widest uppercase mb-2">
            Quick Reference Cheat Sheet
          </p>
          <p className="font-mono text-xs text-muted-foreground tracking-wide">
            Source: CIA-RDP96-00788R001700210016-5 — LTC Wayne M. McDonnell, US Army Intelligence, 1983
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Session Checklist */}
          <div className="border border-accent cyber-chamfer overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card flex items-center gap-3">
              <span className="font-label text-[9px] tracking-[0.2em] text-accent uppercase">Session Checklist</span>
              <span className="font-label text-[9px] text-muted-foreground/50">— Do This Every Time</span>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {[
                  'Quiet, dark room — no interruptions',
                  'Stereo headphones on',
                  'Energy Conversion Box — store all worries (2 min)',
                  'Resonant Tuning — hum a sustained tone, feel the vibration (3–5 min)',
                  'Gateway Affirmation — repeat with conviction',
                  'Hemi-Sync audio begins — follow tape guidance',
                  'REBAL — establish energy balloon once in Focus 10',
                  'Practice your current technique (based on your phase)',
                  'Journal immediately after — do not skip this',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-accent shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-mono text-xs text-foreground leading-relaxed tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gateway Affirmation */}
          <div className="border border-accent/40 cyber-chamfer overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card">
              <span className="font-label text-[9px] tracking-[0.2em] text-accent uppercase">The Gateway Affirmation</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <p className="font-mono text-xs text-foreground leading-relaxed tracking-wide italic">
                &ldquo;I am more than my physical body. Because I am more than physical matter, I can perceive that which is greater than the physical world. Therefore, I deeply desire to expand, to experience, to know, to understand, to control, and to use such greater energies and energy systems as may be beneficial and constructive to me and to those who follow me. Also, I deeply desire the help and cooperation, the assistance, the understanding of those individuals whose wisdom, development, and experience are equal to or greater than my own.&rdquo;
              </p>
              <p className="font-label text-[9px] tracking-[0.12em] text-muted-foreground uppercase">
                Repeat at the start of every session with genuine conviction
              </p>
            </div>
          </div>

          {/* Focus Levels */}
          <div className="border border-border cyber-chamfer overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card">
              <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Focus Levels at a Glance</span>
            </div>
            <div className="divide-y divide-border">
              {[
                { level: 'Focus 10', state: 'Mind Awake / Body Asleep', desc: 'Body in deep sleep-like relaxation; mind fully alert', color: 'text-accent' },
                { level: 'Focus 12', state: 'Expanded Awareness', desc: 'Consciousness extends beyond physical reality', color: 'text-accent' },
                { level: 'Focus 15', state: 'No Time', desc: 'Linear time dissolves; past becomes accessible (<5% in 7-day training)', color: 'text-accent-secondary' },
                { level: 'Focus 21', state: 'Other Dimensions', desc: 'Movement beyond time-space; future exploration', color: 'text-accent-tertiary' },
              ].map(({ level, state, desc, color }) => (
                <div key={level} className="px-5 py-4 flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className={`font-heading text-xs font-bold tracking-wide ${color}`}>{level}</span>
                    <span className="font-label text-[9px] tracking-[0.12em] text-muted-foreground uppercase">{state}</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* REBAL Visualization */}
          <div className="border border-border cyber-chamfer overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card">
              <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">REBAL — Energy Balloon</span>
            </div>
            <div className="p-5">
              {/* Visual diagram */}
              <div className="flex justify-center mb-5">
                <div className="relative w-48 h-64 flex flex-col items-center justify-center">
                  {/* Egg/oval shape */}
                  <div className="absolute inset-0 border-2 border-accent/30 rounded-[50%] border-dashed" />
                  {/* Person silhouette area */}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <span className="font-label text-[8px] tracking-[0.2em] text-accent uppercase">↑ out through crown</span>
                    <div className="w-px h-8 bg-gradient-to-b from-accent to-accent/30" />
                    <div className="border border-accent/40 cyber-chamfer-sm px-3 py-1.5 bg-accent/5">
                      <span className="font-heading text-[10px] font-bold text-accent tracking-widest">YOU</span>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-t from-accent to-accent/30" />
                    <span className="font-label text-[8px] tracking-[0.2em] text-accent uppercase">↑ re-enters from base</span>
                  </div>
                  {/* Side arrows */}
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 font-label text-[7px] text-accent/60 rotate-90">cascades down</span>
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 font-label text-[7px] text-accent/60 -rotate-90">all directions</span>
                </div>
              </div>
              <ol className="space-y-1.5">
                {[
                  'Energy gathers at center of body',
                  'Rises up and out through crown of head',
                  'Cascades down in all directions (egg/balloon shape)',
                  'Flows past feet, back into body from below',
                  'Cycles continuously — self-sustaining',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-[10px] text-accent shrink-0">{i + 1}.</span>
                    <span className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="border border-border cyber-chamfer overflow-hidden lg:col-span-2">
            <div className="px-5 py-3 border-b border-border bg-card">
              <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Advanced Techniques — Quick Reference</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    {['Technique', 'When to Use', 'How'].map((h) => (
                      <th key={h} className="px-5 py-3 text-left font-label text-[8px] tracking-[0.15em] text-muted-foreground uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Problem Solving', 'Need answers or solutions', 'Project the problem into Focus 12 awareness; invite higher self to search the universal hologram; receive answers immediately or within 2–3 days'],
                    ['Patterning', 'Manifestation / goal setting', 'In Focus 12, visualize desired outcome as already accomplished; project into universe with total conviction'],
                    ['Color Breathing', 'Healing / energy work', 'Breathe specific colors into targeted body areas (blue = cooling, red = energizing, green = balancing, gold = healing)'],
                    ['Energy Bar Tool', 'Healing / remote viewing', 'Visualize pulsating light dot → charge with energy → extrude into vibrating cylinder → direct to body or into vortex for exploration'],
                    ['Living Body Map', 'Targeted physical healing', 'Visualize body systems in detail → apply energy bar tool with colored energy to specific organs'],
                  ].map(([technique, when, how]) => (
                    <tr key={technique} className="border-b border-border last:border-0">
                      <td className="px-5 py-3 font-heading text-xs font-bold text-accent tracking-wide align-top">{technique}</td>
                      <td className="px-5 py-3 font-mono text-xs text-muted-foreground tracking-wide align-top">{when}</td>
                      <td className="px-5 py-3 font-mono text-xs text-foreground leading-relaxed tracking-wide align-top">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="border border-border cyber-chamfer overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card">
              <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Key Concepts — One-Liner Summary</span>
            </div>
            <div className="divide-y divide-border">
              {[
                ['Hemi-Sync', 'Binaural beats synchronize brain hemispheres via Frequency Following Response'],
                ['FFR', 'Brain mimics external sound frequencies by adjusting its own brainwave output'],
                ['Bifurcation Echo', 'Heart pulse interference pattern that fades in deep relaxation, enabling body resonance'],
                ['7–7.5 Hz Resonance', "Body's natural frequency when deeply relaxed — matches Earth's Schumann Resonance"],
                ['Holographic Model', 'Universe is a hologram; mind is a hologram that reads the universal hologram'],
                ["Planck's Distance", '10⁻³³ cm — threshold where energy "clicks out" of time-space into other dimensions'],
                ['The Absolute', 'Infinite, formless, conscious energy at rest — source of all reality'],
                ['Cosmic Egg / Torus', 'Universe shaped as a self-contained torus; all time exists simultaneously within it'],
                ['REBAL', 'Resonant Energy Balloon — protective and amplifying energy field around the body'],
              ].map(([concept, summary]) => (
                <div key={concept} className="px-5 py-3">
                  <span className="font-heading text-[10px] font-bold text-accent tracking-wide block mb-0.5">{concept}</span>
                  <span className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">{summary}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="border border-border cyber-chamfer overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card">
              <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Troubleshooting</span>
            </div>
            <div className="divide-y divide-border">
              {[
                ['Keep falling asleep', 'Practice at a more alert time of day; sit in a reclined chair instead of lying down'],
                ['Racing thoughts', 'Spend more time on the Energy Conversion Box; acknowledge thoughts and return to focus without judgment'],
                ['No visual imagery', 'Normal — not everyone is visual. Pay attention to feelings, sensations, and "knowings" instead'],
                ["Can't feel the REBAL", 'Practice the visualization daily outside of sessions; the felt sense develops with repetition'],
                ['Stuck at Focus 10', 'Focus on releasing emotional blockages (journaling, therapy, shadow work) rather than pushing harder'],
                ['Uncomfortable sensations', 'Open your eyes, wiggle fingers and toes, ground yourself. You are always in control.'],
                ['Progress feels slow', '"The speed of progress is less about hours practiced and more about the speed with which you release anxieties" — the report'],
              ].map(([problem, solution]) => (
                <div key={problem} className="px-5 py-3">
                  <span className="font-heading text-[10px] font-bold text-destructive tracking-wide block mb-0.5">{problem}</span>
                  <span className="font-mono text-xs text-foreground leading-relaxed tracking-wide">{solution}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monroe Audio Progression */}
          <div className="border border-border cyber-chamfer overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card">
              <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Monroe Audio Progression</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    {['Wave', 'Name', 'Focus', 'Content'].map((h) => (
                      <th key={h} className="px-5 py-3 text-left font-label text-[8px] tracking-[0.15em] text-muted-foreground uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['I', 'Discovery', 'Focus 10', 'Orientation, Focus 10 exercises, Energy Conversion Box, REBAL'],
                    ['II', 'Threshold', 'Focus 12', 'Expanded awareness, introduction to advanced tools'],
                    ['III', 'Freedom', 'Focus 12', 'Problem Solving, Patterning, remote viewing'],
                    ['IV', 'Adventure', 'Focus 15', 'Time dissolution, past life exploration'],
                    ['V', 'Exploring', 'Focus 15+', 'Deepening Focus 15, advanced exploration'],
                    ['VI', 'Odyssey', 'Focus 21', 'Movement beyond time-space'],
                    ['VII', 'Voyager', 'Focus 21+', 'Advanced interdimensional work'],
                  ].map(([wave, name, focus, content]) => (
                    <tr key={wave} className="border-b border-border last:border-0">
                      <td className="px-5 py-3 font-heading text-xs font-bold text-accent">{wave}</td>
                      <td className="px-5 py-3 font-mono text-xs text-foreground tracking-wide">{name}</td>
                      <td className="px-5 py-3 font-label text-[9px] text-accent-secondary tracking-[0.1em] uppercase">{focus}</td>
                      <td className="px-5 py-3 font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">{content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* OBE Conditions */}
          <div className="border border-border cyber-chamfer overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card">
              <span className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Three Conditions for Out-of-Body Experience</span>
            </div>
            <div className="p-5 space-y-4">
              {[
                ['01', 'Profound physical quiet', 'Bifurcation echo fades, body resonates at ~7 Hz'],
                ['02', 'Brain hemisphere synchronization', 'Coherent wave patterns across both hemispheres'],
                ['03', 'Right hemisphere stimulation', 'Heightened alertness — only after condition 2 is met; premature stimulation interferes'],
              ].map(([num, title, desc]) => (
                <div key={num} className="flex gap-4">
                  <span className="font-heading text-2xl font-black text-accent/20 shrink-0 leading-none">{num}</span>
                  <div>
                    <p className="font-heading text-xs font-bold text-accent tracking-wide mb-1">{title}</p>
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/program" className="cyber-chamfer-sm border border-accent text-accent font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:bg-accent hover:text-background transition-all duration-150">
            Full Implementation Guide →
          </Link>
          <Link href="/research" className="cyber-chamfer-sm border border-border text-muted-foreground font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:border-accent hover:text-accent transition-all duration-150">
            Research Breakdown →
          </Link>
          <Link href="/glossary" className="cyber-chamfer-sm border border-border text-muted-foreground font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 hover:border-accent hover:text-accent transition-all duration-150">
            Glossary →
          </Link>
        </div>
      </div>
    </div>
  )
}
