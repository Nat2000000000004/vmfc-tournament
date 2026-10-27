import React from 'react';
import { ArrowUp, Heart, Trophy, Shield, Phone, MapPin, Zap, ExternalLink } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyber-950 border-t border-neon-cyan/20 pt-16 pb-24 sm:pb-16 text-slate-400 text-xs relative overflow-hidden">
      
      {/* Top glowing laser line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink opacity-80" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Values Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 mb-12 border-b border-white/10 text-center">
          {TOURNAMENT_DATA.coreValues.map((val) => (
            <div key={val.label} className="p-4 rounded-2xl cyber-card border-white/5">
              <div className="text-neon-cyan font-black font-athletic text-sm uppercase tracking-wider mb-1">
                {val.label}
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">{val.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Club Info with Official Crest */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-cyber-950 border border-neon-gold/80 p-0.5 shadow-lg shadow-neon-gold/20">
                <img
                  src={TOURNAMENT_DATA.logoPath}
                  alt="Virgin Mary FC Crest"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-athletic font-black text-base tracking-wider text-white uppercase block">
                  {TOURNAMENT_DATA.clubName}
                </span>
                <span className="text-[11px] text-neon-green font-bold tracking-wide">
                  Mallapur, Karnataka • Season 1
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              An Open Catholic Football Tournament uniting players across Karnataka in the spirit of athletic excellence, Christian fellowship, and grassroots sports passion.
            </p>

            <a
              href={TOURNAMENT_DATA.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-neon-cyan hover:underline font-semibold"
            >
              <MapPin className="w-3.5 h-3.5 text-neon-pink" />
              <span>{TOURNAMENT_DATA.venue.fullAddress}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-neon-cyan transition-colors">Kickoff & Overview</a></li>
              <li><a href="#prizes" className="hover:text-neon-cyan transition-colors">Mega ₹50k Prize Pool</a></li>
              <li><a href="#rules" className="hover:text-neon-cyan transition-colors">Official 19 Rulebook</a></li>
              <li><a href="#poster" className="hover:text-neon-cyan transition-colors">Official Flyers & Downloads</a></li>
              <li><a href="#coordinators" className="hover:text-neon-cyan transition-colors">Direct WhatsApp Links</a></li>
              <li><a href="#venue" className="hover:text-neon-cyan transition-colors">Google Maps Navigation</a></li>
            </ul>
          </div>

          {/* Organizer Numbers */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">1-Tap Registration Leads</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {TOURNAMENT_DATA.coordinators.map((c) => (
                <a
                  key={c.name}
                  href={`https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(c.greeting)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-cyber-900 border border-white/5 hover:border-neon-green/50 hover:text-white transition-all group"
                >
                  <div className="font-bold text-slate-200 group-hover:text-neon-green">{c.name}</div>
                  <div className="text-neon-cyan font-mono text-[10px]">{c.phone}</div>
                </a>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              Tap any name to open WhatsApp chat instantly.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            &copy; 2026 {TOURNAMENT_DATA.clubName}, Mallapur. All rights reserved. Faith • Football • Family.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyber-900 hover:bg-cyber-850 text-slate-200 hover:text-white border border-white/10 hover:border-neon-cyan/40 transition-all text-xs font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-neon-green" />
          </button>
        </div>

      </div>
    </footer>
  );
}
