import React from 'react';
import { Trophy, Award, Sparkles, CheckCircle2, Flame, ArrowRight, Zap } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function Prizes({ onTriggerConfetti, onOpenRegisterModal }) {
  return (
    <section id="prizes" className="py-20 relative overflow-hidden bg-cyber-900/40 border-y border-white/5">
      
      {/* Background Neon Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-neon-gold/15 via-neon-green/10 to-neon-cyan/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-gold/10 border border-neon-gold/30 text-neon-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tournament Glory & Rewards</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black font-athletic uppercase text-white tracking-tight">
            MEGA <span className="flashy-gold-text">₹50,000</span> CASH POOL
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Compete against the finest parish teams in Karnataka. Lift the grand Season 1 trophy and take home high-voltage cash prizes!
          </p>
        </div>

        {/* Flashy Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
          
          {/* WINNERS CARD (FLASHY GOLD) */}
          <div 
            onClick={onTriggerConfetti}
            className="group cursor-pointer relative cyber-card rounded-3xl p-6 sm:p-8 border-2 border-neon-gold/60 hover:border-neon-gold transition-all duration-300 shadow-[0_0_35px_rgba(255,222,89,0.3)] hover:shadow-[0_0_55px_rgba(255,222,89,0.5)] hover:scale-[1.02] overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-yellow-200 via-neon-gold to-amber-700 flex items-center justify-center shadow-xl shadow-neon-gold/30 group-hover:rotate-6 transition-transform">
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-neon-gold">GRAND CHAMPIONS</div>
                <div className="text-4xl sm:text-6xl font-black font-athletic text-white drop-shadow-[0_0_20px_rgba(255,222,89,0.6)]">
                  ₹30,000
                </div>
                <div className="text-xs text-amber-200 font-bold uppercase tracking-wider mt-1">Direct Cash Prize</div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neon-gold shrink-0" />
                <span>Magnificent Season 1 Championship Trophy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neon-gold shrink-0" />
                <span>Individual Gold Medals for all 8 squad players</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neon-gold shrink-0" />
                <span>Parish prestige & state-level football honors</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neon-gold/20 flex items-center justify-between text-xs font-bold text-neon-gold">
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-neon-pink" />
                Tap card to celebrate
              </span>
              <span className="group-hover:translate-x-1 transition-transform">🎉 Confetti Burst &raquo;</span>
            </div>
          </div>

          {/* RUNNERS UP CARD (FLASHY CYBER SILVER/CYAN) */}
          <div 
            onClick={onTriggerConfetti}
            className="group cursor-pointer relative cyber-card rounded-3xl p-6 sm:p-8 border-2 border-neon-cyan/50 hover:border-neon-cyan transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:shadow-[0_0_50px_rgba(0,240,255,0.4)] hover:scale-[1.02] overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-white via-neon-cyan to-blue-700 flex items-center justify-center shadow-xl shadow-neon-cyan/30 group-hover:-rotate-6 transition-transform">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-neon-cyan">RUNNERS UP</div>
                <div className="text-4xl sm:text-6xl font-black font-athletic text-white drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                  ₹20,000
                </div>
                <div className="text-xs text-sky-200 font-bold uppercase tracking-wider mt-1">Direct Cash Prize</div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0" />
                <span>Prestigious Runners Up Cup</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0" />
                <span>Individual Silver Medals for all squad players</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0" />
                <span>Official recognition & honors</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neon-cyan/20 flex items-center justify-between text-xs font-bold text-neon-cyan">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-neon-green" />
                Tap card to celebrate
              </span>
              <span className="group-hover:translate-x-1 transition-transform">✨ Confetti Burst &raquo;</span>
            </div>
          </div>

        </div>

        {/* Entry Fee & Value Proposition Banner */}
        <div className="max-w-3xl mx-auto cyber-card rounded-3xl p-6 sm:p-7 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 border border-neon-pink/40 shadow-[0_0_30px_rgba(255,0,119,0.2)]">
          <div>
            <div className="text-xs uppercase font-black text-neon-pink tracking-wider">Tournament Entry Fee</div>
            <div className="text-3xl sm:text-4xl font-black font-athletic text-white mt-0.5">
              ₹2,000 <span className="text-sm font-normal text-slate-300">/ per team (8 players)</span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Slots confirmed strictly on first-come-first-served payment verification.
            </p>
          </div>

          <button
            onClick={onOpenRegisterModal}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-neon-pink to-neon-crimson hover:from-neon-crimson hover:to-neon-pink text-white font-athletic font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,0,119,0.4)] transition-all flex items-center gap-2 shrink-0 active:scale-95"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
