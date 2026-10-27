import React, { useState, useEffect } from 'react';
import { CalendarCheck, Shuffle, Trophy, Zap, Radio } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days, max: 365, ringColor: 'stroke-neon-gold', glow: 'shadow-neon-gold/20' },
    { label: 'HOURS', value: timeLeft.hours, max: 24, ringColor: 'stroke-neon-cyan', glow: 'shadow-neon-cyan/20' },
    { label: 'MINUTES', value: timeLeft.minutes, max: 60, ringColor: 'stroke-neon-green', glow: 'shadow-neon-green/20' },
    { label: 'SECONDS', value: timeLeft.seconds, max: 60, ringColor: 'stroke-neon-pink', glow: 'shadow-neon-pink/20' },
  ];

  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="w-full max-w-3xl mx-auto">
      
      {/* Flashy Cyber-Scoreboard Housing */}
      <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink shadow-[0_0_40px_rgba(0,240,255,0.25)]">
        <div className="bg-cyber-950/95 rounded-[22px] p-5 sm:p-7 relative overflow-hidden backdrop-blur-2xl">
          
          {/* Top Scan Light & HUD Elements */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink opacity-80" />

          {/* HUD Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green" />
              </span>
              <span className="text-xs sm:text-sm font-athletic font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-cyan to-white">
                LIVE KICKOFF COUNTDOWN
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-[11px] font-bold tracking-wider">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>NOV 14 • 10:00 AM</span>
            </div>
          </div>

          {/* Flashy Circular Dials Grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-6">
            {units.map((unit) => {
              const progress = Math.min(1, Math.max(0, unit.value / unit.max));
              const offset = circumference - progress * circumference;

              return (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="relative w-20 h-20 sm:w-26 sm:h-26 flex items-center justify-center">
                    
                    {/* Dial Gauge SVG */}
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 84 84">
                      {/* Outer track */}
                      <circle
                        cx="42"
                        cy="42"
                        r={radius}
                        className="stroke-cyber-800"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      {/* Animated high-voltage glow track */}
                      <circle
                        cx="42"
                        cy="42"
                        r={radius}
                        className={`${unit.ringColor} transition-all duration-700 ease-out`}
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>

                    {/* Flashy Centered Scoreboard Number */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-athletic font-black text-2xl sm:text-4xl text-white tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                    </div>

                  </div>

                  <span className="mt-2 text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-300">
                    {unit.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Flashy Timeline Badges */}
          <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-cyber-900/90 border border-neon-gold/30 flex items-center justify-center gap-2 text-slate-200">
              <CalendarCheck className="w-4 h-4 text-neon-gold shrink-0" />
              <span>Reg. Closes: <strong className="text-neon-gold font-athletic">11 NOV</strong></span>
            </div>

            <div className="p-2.5 rounded-xl bg-cyber-900/90 border border-neon-cyan/30 flex items-center justify-center gap-2 text-slate-200">
              <Shuffle className="w-4 h-4 text-neon-cyan shrink-0" />
              <span>Lots Drawn: <strong className="text-neon-cyan font-athletic">12 NOV</strong></span>
            </div>

            <div className="p-2.5 rounded-xl bg-cyber-900/90 border border-neon-green/30 flex items-center justify-center gap-2 text-slate-200">
              <Trophy className="w-4 h-4 text-neon-green shrink-0" />
              <span>Kickoff: <strong className="text-neon-green font-athletic">14 NOV (10 AM)</strong></span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
