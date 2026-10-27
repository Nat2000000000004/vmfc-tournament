import React, { useState } from 'react';
import { Download, Share2, ZoomIn, Check, Eye, ExternalLink, Sparkles, FileText, Trophy } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function PosterViewer() {
  const [copied, setCopied] = useState(false);
  const [activeFlyer, setActiveFlyer] = useState('main'); // 'main' | 'rules'
  const [isZoomed, setIsZoomed] = useState(false);

  const currentPosterPath = activeFlyer === 'main' 
    ? TOURNAMENT_DATA.posters.mainPoster 
    : TOURNAMENT_DATA.posters.rulesPoster;

  const currentPosterTitle = activeFlyer === 'main' 
    ? 'Official Tournament Flyer' 
    : 'Official Rules & Regulations Flyer';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = `🏆 *VIRGIN MARY FC — SEASON 1 FOOTBALL TOURNAMENT* 🏆%0A%0A` +
      `📅 *Match Date:* November 14, 2026 (10 AM to 11 PM)%0A` +
      `⏳ *Reg. Deadline:* 11 November 2026%0A` +
      `🎲 *Lots Drawn:* 12 November 2026%0A` +
      `📍 *Location:* Virgin Mary Playground, Mallapur%0A` +
      `🥇 *Winners:* ₹30,000 + Trophy%0A` +
      `🥈 *Runners:* ₹20,000 + Trophy%0A` +
      `🎟 *Entry Fee:* ₹2,000%0A` +
      `⚽ *Format:* 8 Players (6+2) | 1 Christian Icon Player Allowed from anywhere in Karnataka%0A` +
      `✝ *Open Catholic Tournament*%0A%0A` +
      `🔗 Official details & direct WhatsApp registration: ${encodeURIComponent(window.location.href)}`;
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="poster" className="py-20 relative bg-cyber-900/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-gold/10 border border-neon-gold/30 text-neon-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Official Media Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-athletic uppercase text-white tracking-tight">
            OFFICIAL <span className="flashy-gold-text">TOURNAMENT FLYERS</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Switch between the official announcement flyer and the full rules poster. Download high-resolution files to share with your parish!
          </p>
        </div>

        {/* Flyer Toggle Buttons (Visible High-Contrast White) */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveFlyer('main')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-athletic font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 text-white ${
              activeFlyer === 'main'
                ? 'bg-gradient-to-r from-neon-gold to-yellow-400 shadow-[0_0_25px_rgba(255,222,89,0.5)] scale-105 border-2 border-white/40 drop-shadow'
                : 'bg-white/15 hover:bg-white/25 border-2 border-white/30 backdrop-blur-md'
            }`}
          >
            <Trophy className="w-4 h-4 text-white" />
            <span>Tournament Flyer</span>
          </button>

          <button
            onClick={() => setActiveFlyer('rules')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-athletic font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 text-white ${
              activeFlyer === 'rules'
                ? 'bg-gradient-to-r from-neon-green to-teal-500 shadow-[0_0_25px_rgba(0,255,135,0.5)] scale-105 border-2 border-white/40 drop-shadow'
                : 'bg-white/15 hover:bg-white/25 border-2 border-white/30 backdrop-blur-md'
            }`}
          >
            <FileText className="w-4 h-4 text-white" />
            <span>Rules & Regulations Flyer</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Poster Image Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full rounded-3xl p-2.5 bg-gradient-to-b from-white/15 via-cyber-900 to-transparent border-2 border-white/20 shadow-2xl backdrop-blur-xl">
              
              <div className="relative overflow-hidden rounded-2xl bg-cyber-950">
                <img
                  src={currentPosterPath}
                  alt={currentPosterTitle}
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div 
                  onClick={() => setIsZoomed(true)}
                  className="absolute inset-0 bg-cyber-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-xs"
                >
                  <span className="px-4 py-2 rounded-xl bg-white text-stadium-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl">
                    <ZoomIn className="w-4 h-4" /> Click to Zoom Full Screen
                  </span>
                </div>
              </div>

              <div className="text-center py-2 text-xs font-bold text-slate-300">
                {currentPosterTitle}
              </div>

            </div>
          </div>

          {/* Action Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl cyber-card border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-xl font-bold font-athletic text-white uppercase flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neon-gold" />
                <span>Spread the Word!</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Download the official {activeFlyer === 'main' ? 'Tournament Poster' : '19 Rules Flyer'} and share it across parish WhatsApp groups, youth ministries, and your status.
              </p>

              <div className="space-y-3 pt-2">
                {/* Download Button (WHITE TEXT) */}
                <a
                  href={currentPosterPath}
                  download={activeFlyer === 'main' ? 'Virgin-Mary-FC-Tournament-Poster.jpg' : 'Virgin-Mary-FC-Rules-Poster.jpg'}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-neon-gold to-yellow-400 text-white font-athletic font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,222,89,0.5)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-white/30 drop-shadow"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span className="text-white drop-shadow">Download {activeFlyer === 'main' ? 'Tournament Poster' : 'Rules Flyer'} (HD)</span>
                </a>

                {/* WhatsApp Share Button (WHITE TEXT) */}
                <button
                  onClick={handleShareWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-neon-green to-teal-500 text-white font-athletic font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,255,135,0.5)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-white/30 drop-shadow"
                >
                  <Share2 className="w-4 h-4 text-white" />
                  <span className="text-white drop-shadow">Share via WhatsApp Status & Groups</span>
                </button>

                {/* Copy Website Link Button (Visible White Style) */}
                <button
                  onClick={handleCopyLink}
                  className="w-full py-3 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider border-2 border-white/30 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-neon-green" />
                      <span className="text-neon-green font-bold">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4 text-white" />
                      <span>Copy Tournament Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Timeline Specs */}
            <div className="p-4 rounded-2xl bg-cyber-950 border border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-400">Registration Deadline:</span>
                <span className="font-bold text-neon-pink">11 November 2026</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-400">Drawing of Lots:</span>
                <span className="font-bold text-neon-cyan">12 November 2026</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Match Day Kickoff:</span>
                <span className="font-bold text-neon-green">14 November 2026 (10 AM)</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div className="relative max-w-2xl max-h-[90vh]">
            <img
              src={currentPosterPath}
              alt="Fullscreen Preview"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-center text-xs text-white mt-2 font-medium">Click anywhere to close full screen preview</p>
          </div>
        </div>
      )}
    </section>
  );
}
