import React from 'react';
import { Calendar, MapPin, Sparkles, MessageCircle, ChevronDown, Download, ShieldCheck, Zap } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';
import Countdown from './Countdown';

export default function Hero({ onOpenRegisterModal, onTriggerConfetti }) {
  return (
    <section id="overview" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Official VMFC Logo Crest Showcase */}
        <div className="relative mb-5 group cursor-pointer" onClick={onTriggerConfetti}>
          {/* Animated Neon Rings around the Crest */}
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all animate-spin-slow" />
          <div className="absolute -inset-1 rounded-full border-2 border-dashed border-neon-gold/70 animate-spin-reverse-slow" />
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-cyber-950 p-1 border-2 border-neon-gold shadow-[0_0_30px_rgba(255,222,89,0.5)] group-hover:scale-105 transition-transform">
            <img
              src={TOURNAMENT_DATA.logoPath}
              alt="Virgin Mary Football Club Mallapur Crest"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Club Header Strip */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyber-900/90 border border-neon-cyan/40 text-neon-cyan text-xs sm:text-sm font-athletic font-black uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl">
          <Zap className="w-4 h-4 fill-neon-cyan text-neon-cyan animate-bounce" />
          <span>{TOURNAMENT_DATA.clubName} • MALLAPUR PRESENTS</span>
          <Zap className="w-4 h-4 fill-neon-cyan text-neon-cyan animate-bounce" />
        </div>

        {/* Mottos & Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-black tracking-widest uppercase mb-5">
          <span className="text-neon-gold drop-shadow-sm">FAITH</span> • 
          <span className="text-white drop-shadow-sm">FOOTBALL</span> • 
          <span className="text-neon-gold drop-shadow-sm">FAMILY</span> | 
          <span className="text-neon-green drop-shadow-sm">DISCIPLINE</span> • 
          <span className="text-neon-cyan drop-shadow-sm">UNITY</span> • 
          <span className="text-neon-pink drop-shadow-sm">SPORTSMANSHIP</span>
        </div>

        {/* Main Tournament Branding */}
        <div className="space-y-1 mb-8">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-neon-pink via-neon-crimson to-neon-gold text-white font-athletic font-black text-xs sm:text-sm tracking-widest uppercase rounded-full shadow-lg shadow-neon-pink/40 -rotate-1">
            SEASON 1 • PARISH YOUTH CHAMPIONSHIP
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-athletic tracking-tight uppercase leading-none drop-shadow-2xl">
            <span className="flashy-gradient-text block">
              6 A SIDE
            </span>
            <span className="text-white text-3xl sm:text-5xl md:text-6xl block mt-2 tracking-wider drop-shadow-[0_0_35px_rgba(0,255,135,0.5)]">
              FOOTBALL TOURNAMENT
            </span>
          </h1>
        </div>

        {/* Live Flashy HUD Countdown Timer */}
        <div className="w-full mb-10">
          <Countdown targetDate={TOURNAMENT_DATA.targetDate} />
        </div>

        {/* High-Visibility Standalone Register via WhatsApp Button */}
        <div className="flex items-center justify-center w-full max-w-sm mb-12">
          <button
            onClick={onOpenRegisterModal}
            className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-athletic font-black text-base sm:text-lg tracking-wider uppercase shadow-[0_0_35px_rgba(0,255,135,0.7)] hover:shadow-[0_0_45px_rgba(0,240,255,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 drop-shadow-md border border-white/30"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span className="text-white drop-shadow">Register via WhatsApp</span>
          </button>
        </div>

        {/* Snapshot Specs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl text-left">
          <div className="p-3.5 rounded-2xl cyber-card border-neon-cyan/20">
            <div className="text-[10px] text-neon-cyan uppercase font-bold">Match Date</div>
            <div className="text-sm font-extrabold text-white">Nov 14, 2026</div>
            <div className="text-[11px] text-slate-300">10:00 AM to 11:00 PM</div>
          </div>

          <div className="p-3.5 rounded-2xl cyber-card border-neon-gold/20">
            <div className="text-[10px] text-neon-gold uppercase font-bold">Entry Fee</div>
            <div className="text-sm font-black text-neon-gold">₹2,000 / Team</div>
            <div className="text-[11px] text-slate-300">8 Players Squad</div>
          </div>

          <div className="p-3.5 rounded-2xl cyber-card border-neon-pink/20">
            <div className="text-[10px] text-neon-pink uppercase font-bold">Registration Closes</div>
            <div className="text-sm font-extrabold text-neon-pink">11 Nov 2026</div>
            <div className="text-[11px] text-slate-300">Lots on 12 Nov</div>
          </div>

          <div className="p-3.5 rounded-2xl cyber-card border-neon-green/20">
            <div className="text-[10px] text-neon-green uppercase font-bold">Location</div>
            <div className="text-sm font-extrabold text-white">Virgin Mary Ground</div>
            <div className="text-[11px] text-slate-300">Mallapur, Karnataka</div>
          </div>
        </div>

      </div>
    </section>
  );
}
