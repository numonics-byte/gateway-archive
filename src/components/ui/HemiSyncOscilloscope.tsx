'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function HemiSyncOscilloscope() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [entrainment, setEntrainment] = useState<number>(0);
  const entrainmentRef = useRef(0);

  useEffect(() => {
    entrainmentRef.current = entrainment;
  }, [entrainment]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerY = height / 2;

    // Skip animation if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      time += prefersReduced ? 0 : 0.03;
      const level = entrainmentRef.current / 100;

      ctx.fillStyle = 'rgba(10, 10, 15, 0.4)';
      ctx.fillRect(0, 0, width, height);

      // Grid
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.05)';
      ctx.beginPath();
      for (let i = 0; i < width; i += 40) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
      }
      for (let i = 0; i < height; i += 40) {
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
      }
      ctx.stroke();

      const targetFreq = 0.03;
      const targetAmp = 110;

      const leftFreq  = targetFreq + (1 - level) * 0.015 * Math.sin(time * 0.5);
      const leftAmp   = 40 + level * (targetAmp - 40);
      const leftPhase = time + (1 - level) * Math.sin(time * 0.2);

      const rightFreq  = targetFreq - (1 - level) * 0.01 * Math.cos(time * 0.4);
      const rightAmp   = 35 + level * (targetAmp - 35);
      const rightPhase = time + (1 - level) * Math.PI;

      const baseLineWidth = 2 + level * 4;

      // Left wave
      ctx.beginPath();
      ctx.lineWidth = baseLineWidth;
      if (level > 0.95) {
        ctx.strokeStyle = '#00ff88';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#00ff88';
      } else {
        ctx.strokeStyle = `rgba(0, 255, 136, ${0.4 + level * 0.6})`;
        ctx.shadowBlur = 0;
      }
      for (let x = 0; x < width; x++) {
        const y = centerY + Math.sin(x * leftFreq + leftPhase) * leftAmp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Right wave
      if (level < 0.98) {
        ctx.beginPath();
        ctx.lineWidth = baseLineWidth;
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 + level * 0.2})`;
        ctx.shadowBlur = 0;
        for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin(x * rightFreq + rightPhase) * rightAmp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const isEntrained = entrainment > 95;

  return (
    <div className="relative w-full h-full border border-accent/20 cyber-chamfer-lg overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent z-10" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent z-10" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent z-10" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent z-10" />

      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Control overlay */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        style={{ width: '82%' }}
      >
        <div
          className="border border-accent/20 p-5"
          style={{
            background: 'rgba(10, 10, 15, 0.7)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-heading text-xs font-bold tracking-[0.15em] text-foreground uppercase">
                Hemisphere Synchronization
              </p>
              <p className="font-label text-[9px] tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                Binaural Entrainment Level
              </p>
            </div>
            <span
              className="font-heading text-2xl font-black tabular-nums transition-colors duration-300"
              style={{
                color: isEntrained ? '#00ff88' : '#e0e0e0',
                textShadow: isEntrained ? '0 0 10px rgba(0,255,136,0.6)' : 'none',
              }}
            >
              {entrainment}%
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={entrainment}
            onChange={(e) => setEntrainment(parseInt(e.target.value))}
            aria-label="Entrainment level"
            className="w-full cursor-pointer"
            style={{ accentColor: '#00ff88' }}
          />

          <div className="flex justify-between mt-2">
            <span className="font-label text-[9px] tracking-[0.1em] text-muted-foreground uppercase">Incoherent (Lamp)</span>
            <span className="font-label text-[9px] tracking-[0.1em] text-muted-foreground uppercase">Coherent (Laser)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
