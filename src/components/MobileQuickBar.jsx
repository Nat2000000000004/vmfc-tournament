import React from 'react';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function MobileQuickBar({ onOpenRegisterModal }) {
  const primaryCoordinator = TOURNAMENT_DATA.coordinators[0];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-cyber-950/98 backdrop-blur-2xl border-t-2 border-neon-cyan/30 px-3 py-2.5 shadow-[0_-10px_35px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2">
        
        {/* WhatsApp Register Button (WHITE FONT) */}
        <button
          onClick={onOpenRegisterModal}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-neon-green to-teal-500 text-white font-athletic font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,255,135,0.5)] active:scale-95 transition-transform border border-white/30 drop-shadow"
        >
          <MessageCircle className="w-4 h-4 fill-white text-white" />
          <span className="text-white drop-shadow">Register Team</span>
        </button>

        {/* Quick Call Button (Bright & Visible White) */}
        <a
          href={`tel:${primaryCoordinator.phone}`}
          className="py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase border-2 border-white/30 flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-md"
          aria-label={`Call coordinator ${primaryCoordinator.name}`}
        >
          <Phone className="w-4 h-4 text-neon-green" />
          <span>Call</span>
        </a>

        {/* Rules Shortcut (Bright & Visible White) */}
        <a
          href="#rules"
          className="py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border-2 border-white/30 flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-md"
        >
          <FileText className="w-4 h-4 text-neon-cyan" />
          <span>Rules</span>
        </a>

      </div>
    </div>
  );
}
