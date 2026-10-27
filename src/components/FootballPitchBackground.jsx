import React from 'react';

export default function FootballPitchBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Deep Cyber Void Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(0,255,135,0.18),rgba(7,13,30,0.92)_55%,#03060f_100%)]" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      {/* High-Voltage Stadium Ambient Beams */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-neon-cyan/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-neon-green/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-neon-pink/5 rounded-full blur-[180px]" />

      {/* Vertical Laser Scan Line */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-40 blur-xs animate-laser-scan" />

      {/* Electric Neon Pitch Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth="1.8"
      >
        <defs>
          <linearGradient id="pitchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff87" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff0077" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ff87" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00ff87" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Field Perimeter */}
        <rect x="4%" y="4%" width="92%" height="92%" rx="16" stroke="url(#pitchGrad)" />
        
        {/* Halfway Line */}
        <line x1="4%" y1="50%" x2="96%" y2="50%" stroke="url(#pitchGrad)" strokeDasharray="6 6" />
        
        {/* Center Circle & Glowing Pulse */}
        <circle cx="50%" cy="50%" r="140" stroke="url(#pitchGrad)" />
        <circle cx="50%" cy="50%" r="140" fill="url(#radarGlow)" />
        <circle cx="50%" cy="50%" r="6" fill="#00ff87" />

        {/* Penalty Areas */}
        <rect x="28%" y="4%" width="44%" height="16%" stroke="url(#pitchGrad)" />
        <rect x="36%" y="4%" width="28%" height="7%" stroke="url(#pitchGrad)" />
        
        <rect x="28%" y="80%" width="44%" height="16%" stroke="url(#pitchGrad)" />
        <rect x="36%" y="89%" width="28%" height="7%" stroke="url(#pitchGrad)" />

        {/* Corner Arcs */}
        <path d="M 4% 6% A 25 25 0 0 1 6% 4%" stroke="#00f0ff" />
        <path d="M 94% 4% A 25 25 0 0 1 96% 6%" stroke="#00f0ff" />
        <path d="M 4% 94% A 25 25 0 0 0 6% 96%" stroke="#00ff87" />
        <path d="M 94% 96% A 25 25 0 0 0 96% 94%" stroke="#00ff87" />
      </svg>

      {/* Flashy Floating Neon Soccer Balls with Orbital Glow Rings */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Ball 1 - Top Left Orbit */}
        <div 
          className="absolute top-[16%] left-[6%] w-28 h-28 opacity-30 animate-float-dynamic"
          style={{ animationDuration: '8s' }}
        >
          <div className="relative w-full h-full">
            {/* Orbital Ring */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-neon-cyan/40 animate-spin-slow" />
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-neon-cyan stroke-2 animate-spin-slow">
              <circle cx="50" cy="50" r="46" />
              <polygon points="50,22 68,36 61,58 39,58 32,36" fill="rgba(0,240,255,0.15)" />
              <line x1="50" y1="22" x2="50" y2="4" />
              <line x1="68" y1="36" x2="88" y2="28" />
              <line x1="61" y1="58" x2="74" y2="82" />
              <line x1="39" y1="58" x2="26" y2="82" />
              <line x1="32" y1="36" x2="12" y2="28" />
            </svg>
          </div>
        </div>

        {/* Ball 2 - Right Mid Orbit */}
        <div 
          className="absolute top-[48%] right-[5%] w-36 h-36 opacity-30 animate-float-dynamic"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        >
          <div className="relative w-full h-full">
            <div className="absolute -inset-3 rounded-full border border-dashed border-neon-green/40 animate-spin-reverse-slow" />
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-neon-green stroke-2 animate-spin-reverse-slow">
              <circle cx="50" cy="50" r="46" />
              <polygon points="50,22 68,36 61,58 39,58 32,36" fill="rgba(0,255,135,0.15)" />
              <line x1="50" y1="22" x2="50" y2="4" />
              <line x1="68" y1="36" x2="88" y2="28" />
              <line x1="61" y1="58" x2="74" y2="82" />
              <line x1="39" y1="58" x2="26" y2="82" />
              <line x1="32" y1="36" x2="12" y2="28" />
            </svg>
          </div>
        </div>

        {/* Ball 3 - Bottom Left Glow */}
        <div 
          className="absolute bottom-[12%] left-[10%] w-24 h-24 opacity-30 animate-float-dynamic"
          style={{ animationDuration: '9s', animationDelay: '3s' }}
        >
          <div className="relative w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-neon-yellow stroke-2 animate-spin-slow">
              <circle cx="50" cy="50" r="46" />
              <polygon points="50,22 68,36 61,58 39,58 32,36" fill="rgba(255,222,89,0.15)" />
              <line x1="50" y1="22" x2="50" y2="4" />
              <line x1="68" y1="36" x2="88" y2="28" />
              <line x1="61" y1="58" x2="74" y2="82" />
              <line x1="39" y1="58" x2="26" y2="82" />
              <line x1="32" y1="36" x2="12" y2="28" />
            </svg>
          </div>
        </div>

      </div>

      {/* Floating High-Energy Spark Particles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-neon-cyan blur-xs animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute top-2/3 right-1/4 w-3.5 h-3.5 rounded-full bg-neon-green blur-xs animate-ping" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-neon-pink blur-xs animate-ping" style={{ animationDuration: '2.5s' }} />

    </div>
  );
}
