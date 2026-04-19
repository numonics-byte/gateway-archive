'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import CosmicTorus from './CosmicTorus';

export default function HeroSection() {
  const TYPEWRITER_TEXT = '23 declassified government documents on remote viewing, breathwork, and altered states — distilled into one actionable system.';
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(TYPEWRITER_TEXT);
      setIsTypingDone(true);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(TYPEWRITER_TEXT.slice(0, i));
      if (i >= TYPEWRITER_TEXT.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-start pt-20 sm:justify-center sm:pt-0 overflow-hidden">
      {/* ── 3D Canvas — full hero background ─────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 8, 14], fov: 45 }}>
          <ambientLight intensity={0.08} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-8, -8, -8]} intensity={2.5} color="#00ff88" />
          <pointLight position={[0, 0, 12]} intensity={0.4} color="#00d4ff" />

          <Suspense fallback={null}>
            <CosmicTorus speed={0.5} isWireframe={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Left gradient — keeps headline readable against the torus */}
      <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      {/* ── Hero text — left side ─────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          {/* Classification badge */}
          <div className="hidden sm:flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 border border-destructive cyber-chamfer-sm px-3 py-1 bg-destructive/10">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-neon" />
              <span className="font-label text-[10px] tracking-[0.2em] text-destructive uppercase">
                Declassified 2003 · CIA-RDP96-00788
              </span>
            </span>
          </div>

          {/* Glitch headline */}
          <h1 className="font-heading text-[clamp(2rem,9vw,5rem)] sm:text-7xl lg:text-8xl font-black leading-tight sm:leading-[0.9] tracking-wide sm:tracking-widest uppercase mb-6">
            <span className="block glitch-text text-accent animate-flicker">The CIA</span>
            <span className="block text-foreground mt-1 sm:mt-2">Studied</span>
            <span className="block text-foreground">Consciousness</span>
          </h1>

          {/* Tagline */}
          <p className="font-heading text-lg sm:text-2xl lg:text-3xl font-black tracking-wide text-accent uppercase mb-4" style={{ textShadow: '0 0 20px rgba(0,255,136,0.4), 0 0 40px rgba(0,255,136,0.15)' }}>
            <span className="text-muted-foreground font-mono text-base mr-2">&gt;</span>
            So you don&apos;t have to.
          </p>

          {/* Supporting copy — typewriter */}
          <p className="font-mono text-sm sm:text-base text-foreground sm:text-muted-foreground leading-relaxed tracking-wide mb-10 max-w-lg min-h-[4.5rem] sm:min-h-[5rem]">
            {displayedText}
            <span className={`inline-block w-2 h-4 bg-accent ml-1 ${isTypingDone ? 'animate-blink' : ''}`} />
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              href="/#lead-magnet"
              className="cyber-chamfer border-2 border-accent text-accent font-label text-xs tracking-[0.2em] uppercase px-8 py-3 text-center hover:bg-accent hover:text-background transition-all duration-150 hover:shadow-neon cyber-focus"
            >
              Get the Free Cheat Sheet
            </Link>
            <Link
              href="/#pricing"
              className="cyber-chamfer border border-foreground/40 text-foreground sm:border-muted-foreground/40 sm:text-muted-foreground font-label text-xs tracking-[0.2em] uppercase px-8 py-3 text-center hover:border-accent hover:text-accent transition-all duration-150 cyber-focus"
            >
              See the Full Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

