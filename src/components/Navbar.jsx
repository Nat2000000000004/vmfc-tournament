import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, MessageCircle, Sparkles, Zap } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function Navbar({ onOpenRegisterModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#overview' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Rules', href: '#rules' },
    { name: 'Flyers', href: '#poster' },
    { name: 'Organizers', href: '#coordinators' },
    { name: 'Location', href: '#venue' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cyber-950/95 backdrop-blur-xl border-b border-neon-cyan/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-2' 
        : 'bg-gradient-to-b from-cyber-950/90 via-cyber-950/50 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Club Crest from Poster */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Outer Glowing Neon Ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink opacity-75 blur-xs group-hover:opacity-100 group-hover:blur-sm transition-all animate-spin-slow" />
              
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-cyber-950 p-0.5 border border-white/20 shadow-xl group-hover:scale-105 transition-transform">
                <img
                  src={TOURNAMENT_DATA.logoPath}
                  alt="Virgin Mary FC Official Crest"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-athletic font-black text-sm sm:text-base tracking-wider text-white uppercase group-hover:text-neon-cyan transition-colors">
                  {TOURNAMENT_DATA.clubName}
                </span>
                <span className="text-[10px] bg-gradient-to-r from-neon-crimson to-neon-pink text-white font-black px-2 py-0.5 rounded-full tracking-widest uppercase shadow-md shadow-neon-pink/30 animate-pulse">
                  SEASON 1
                </span>
              </div>
              <p className="text-[11px] font-bold text-neon-green/90 tracking-wider uppercase flex items-center gap-1.5">
                <span>Faith</span> • <span>Football</span> • <span>Family</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-bold text-white hover:text-neon-cyan hover:bg-white/10 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button (Font is Strictly WHITE) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenRegisterModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 text-white font-athletic font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,255,135,0.6)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] hover:scale-105 active:scale-95 flex items-center gap-2 border border-white/30 drop-shadow"
            >
              <Zap className="w-4 h-4 fill-white text-white animate-bounce" />
              <span className="text-white drop-shadow">Register via WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenRegisterModal}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-neon-green to-teal-500 text-white font-black text-xs uppercase shadow-md shadow-neon-green/30 border border-white/30"
            >
              Register
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/15 text-white border border-white/30"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-neon-pink" /> : <Menu className="w-5 h-5 text-neon-cyan" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden bg-cyber-950/98 border-b border-neon-cyan/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-white hover:text-neon-cyan hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenRegisterModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink text-white font-black text-center tracking-wider uppercase text-sm shadow-lg shadow-neon-green/30 border border-white/30"
            >
              ⚡ 1-Tap WhatsApp Registration
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
