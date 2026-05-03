'use client'

export default function MineLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <style>{`
        .mine-stroke {
          animation: mine-pulse-stroke 2.4s ease-in-out infinite;
        }
        .mine-fill {
          animation: mine-pulse-fill 2.4s ease-in-out infinite;
        }
        @keyframes mine-pulse-stroke {
          0%, 100% { stroke: #ff3366; filter: drop-shadow(0 0 2px #ff3366); }
          50%       { stroke: #00d4ff; filter: drop-shadow(0 0 4px #00d4ff); }
        }
        @keyframes mine-pulse-fill {
          0%, 100% { fill: #ff3366; }
          50%       { fill: #00d4ff; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mine-stroke { animation: none; stroke: #00ff88; filter: none; }
          .mine-fill   { animation: none; fill: #00ff88; }
        }
      `}</style>

      {/* Outer ring */}
      <circle cx="16" cy="16" r="9" strokeWidth="1.5" className="mine-stroke" />

      {/* Spikes — cardinal */}
      <line x1="16" y1="5"  x2="16" y2="2"  strokeWidth="1.5" strokeLinecap="round" className="mine-stroke" />
      <line x1="16" y1="27" x2="16" y2="30" strokeWidth="1.5" strokeLinecap="round" className="mine-stroke" />
      <line x1="5"  y1="16" x2="2"  y2="16" strokeWidth="1.5" strokeLinecap="round" className="mine-stroke" />
      <line x1="27" y1="16" x2="30" y2="16" strokeWidth="1.5" strokeLinecap="round" className="mine-stroke" />

      {/* Spikes — diagonal */}
      <line x1="9"  y1="9"  x2="7"  y2="7"  strokeWidth="1.5" strokeLinecap="round" className="mine-stroke" />
      <line x1="23" y1="9"  x2="25" y2="7"  strokeWidth="1.5" strokeLinecap="round" className="mine-stroke" />
      <line x1="9"  y1="23" x2="7"  y2="25" strokeWidth="1.5" strokeLinecap="round" className="mine-stroke" />
      <line x1="23" y1="23" x2="25" y2="25" strokeWidth="1.5" strokeLinecap="round" className="mine-stroke" />

      {/* Center core */}
      <circle cx="16" cy="16" r="3" className="mine-fill" />
    </svg>
  )
}
