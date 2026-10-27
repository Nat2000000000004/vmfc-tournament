import React from 'react';
import { MessageCircle, Phone, ArrowUpRight, Sparkles, User, ShieldCheck } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function Coordinators() {
  return (
    <section id="coordinators" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold uppercase tracking-widest mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>1-Click WhatsApp Registration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-athletic uppercase text-white tracking-tight">
            MEET THE <span className="flashy-gradient-text">ORGANIZERS</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Select any coordinator below to start a direct WhatsApp chat. No forms or signups required!
          </p>
        </div>

        {/* 4 Coordinators Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {TOURNAMENT_DATA.coordinators.map((coordinator) => {
            const encodedText = encodeURIComponent(coordinator.greeting);
            const waUrl = `https://wa.me/${coordinator.whatsappNumber}?text=${encodedText}`;

            return (
              <div
                key={coordinator.name}
                className="rounded-3xl p-6 cyber-card border border-white/10 hover:border-neon-green/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-green/20 to-teal-500/10 border border-neon-green/30 flex items-center justify-center text-neon-green mb-4 group-hover:scale-110 transition-transform">
                    <User className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-athletic text-white uppercase group-hover:text-neon-cyan transition-colors">
                    {coordinator.name}
                  </h3>
                  <div className="text-xs text-neon-gold font-bold mb-2">
                    {coordinator.role}
                  </div>
                  
                  <div className="text-sm font-mono font-bold text-white mb-4 tracking-wide">
                    +91 {coordinator.phone}
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  {/* WhatsApp Direct Chat Button (Font is Strictly WHITE) */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-neon-green to-teal-500 hover:from-teal-400 hover:to-neon-green text-white font-athletic font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,135,0.5)] active:scale-95 border border-white/30 drop-shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span className="text-white drop-shadow">WhatsApp Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </a>

                  {/* Direct Phone Call Button (High Visibility White) */}
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider border-2 border-white/30 transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5 text-neon-green" />
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Registration Reminder Banner */}
        <div className="max-w-3xl mx-auto rounded-3xl p-6 bg-gradient-to-r from-neon-green/10 via-cyber-900 to-neon-cyan/10 border-2 border-white/15 text-center shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-black text-neon-green uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-neon-green" />
            <span>Frictionless Team Registration</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-1">
            Simply message any coordinator with your team name. They will send the official tournament slot confirmation and UPI details immediately.
          </p>
        </div>

      </div>
    </section>
  );
}
