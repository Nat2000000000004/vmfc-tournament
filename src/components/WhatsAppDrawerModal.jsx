import React from 'react';
import { X, MessageCircle, Phone, ArrowUpRight, Sparkles, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function WhatsAppDrawerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-cyber-950 border-2 border-neon-green/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,255,135,0.3)] overflow-hidden max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-28 bg-neon-green/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button (Visible High Contrast) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/15 text-white hover:bg-white/25 border border-white/30 transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-neon-pink" />
        </button>

        {/* Header */}
        <div className="text-center sm:text-left mb-6 pb-4 border-b border-white/10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold uppercase tracking-wider mb-2">
            <MessageCircle className="w-3.5 h-3.5 fill-neon-green" />
            <span>Direct WhatsApp Registration</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-athletic text-white uppercase tracking-tight">
            CONNECT WITH AN ORGANIZER
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Tap any organizer below to open WhatsApp instantly with a pre-written registration request. No forms needed!
          </p>
        </div>

        {/* 4 Organizers WhatsApp Buttons List (Font is Strictly WHITE) */}
        <div className="space-y-3 mb-6">
          {TOURNAMENT_DATA.coordinators.map((coordinator) => {
            const encodedText = encodeURIComponent(coordinator.greeting);
            const waUrl = `https://wa.me/${coordinator.whatsappNumber}?text=${encodedText}`;

            return (
              <div
                key={coordinator.name}
                className="group p-4 rounded-2xl bg-cyber-900 border border-white/10 hover:border-neon-green/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-athletic font-black text-white text-base sm:text-lg uppercase group-hover:text-neon-cyan transition-colors">
                      {coordinator.name}
                    </h4>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/15">
                      {coordinator.role}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-neon-green font-bold mt-0.5">
                    +91 {coordinator.phone}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Direct WhatsApp Redirection Button (WHITE TEXT) */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-neon-green to-teal-500 hover:from-teal-400 hover:to-neon-green text-white font-athletic font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,255,135,0.5)] hover:scale-105 active:scale-95 border border-white/30 drop-shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span className="text-white drop-shadow">WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </a>

                  {/* Direct Call Button (Visible White Style) */}
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border-2 border-white/30 transition-colors shadow-md"
                    title={`Call ${coordinator.name}`}
                  >
                    <Phone className="w-4 h-4 text-neon-green" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Important Guidelines Footer */}
        <div className="p-4 rounded-2xl bg-cyber-900 border border-white/10 space-y-2 text-xs text-slate-300">
          <div className="flex items-center justify-between py-1 border-b border-white/10">
            <span className="text-slate-400">Entry Fee:</span>
            <span className="font-bold text-neon-gold">₹2,000 per team</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-white/10">
            <span className="text-slate-400">Last Date to Register:</span>
            <span className="font-bold text-neon-pink">11 November 2026</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-white/10">
            <span className="text-slate-400">Lots Drawing Ceremony:</span>
            <span className="font-bold text-neon-cyan">12 November 2026</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-slate-400">Squad Format:</span>
            <span className="font-bold text-white">8 Players (6+2) • 1 Icon Player</span>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-slate-300 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-neon-green" />
          <span>Registrations are confirmed immediately after receipt of the ₹2,000 entry fee.</span>
        </p>

      </div>
    </div>
  );
}
