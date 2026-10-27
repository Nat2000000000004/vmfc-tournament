import React, { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle, ShieldCheck, User, Users, Church } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function WhatsAppQuickRegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedCoord, setSelectedCoord] = useState(TOURNAMENT_DATA.coordinators[0].name);
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [parish, setParish] = useState('');
  const [phone, setPhone] = useState('');

  const activeCoordinator = TOURNAMENT_DATA.coordinators.find(c => c.name === selectedCoord) || TOURNAMENT_DATA.coordinators[0];

  const handleRegister = (e) => {
    e.preventDefault();
    const cleanTeam = teamName.trim() || 'My Football Team';
    const cleanCap = captainName.trim() || 'Captain';
    const cleanParish = parish.trim() || 'Parish';
    const cleanPhone = phone.trim() || 'N/A';

    const message = `⚽ *VIRGIN MARY FC — TEAM REGISTRATION ENTRY* ⚽%0A%0A` +
      `Hi ${activeCoordinator.name}, we would like to register for the *Season 1 6-A-Side Football Tournament* on *November 14, 2026* at Mallapur Ground!%0A%0A` +
      `📋 *Registration Info:*%0A` +
      `• *Team:* ${cleanTeam}%0A` +
      `• *Captain:* ${cleanCap}%0A` +
      `• *Parish:* ${cleanParish}%0A` +
      `• *Contact:* ${cleanPhone}%0A` +
      `• *Roster:* 8 Players (6 Playing + 2 Subs)%0A` +
      `• *Category:* Open Catholic Tournament (Karnataka Players)%0A` +
      `• *Entry Fee:* ₹2,000%0A%0A` +
      `Please provide the UPI Payment QR code to confirm our entry!`;

    window.open(`https://wa.me/${activeCoordinator.whatsappNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-stadium-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-stadium-800 text-slate-400 hover:text-white hover:bg-stadium-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Instant WhatsApp Registration</span>
          </div>
          <h3 className="text-2xl font-black font-athletic text-white uppercase">
            REGISTER YOUR TEAM
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Fill your squad details to send a formatted registration request directly to the tournament coordinators.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
              Team Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. St. Jude Warriors"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stadium-950 border border-stadium-700 focus:border-emerald-500 focus:outline-none text-white text-sm placeholder:text-slate-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Captain / Manager *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Robin Peter"
                value={captainName}
                onChange={(e) => setCaptainName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stadium-950 border border-stadium-700 focus:border-emerald-500 focus:outline-none text-white text-sm placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stadium-950 border border-stadium-700 focus:border-emerald-500 focus:outline-none text-white text-sm placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
              Parish / Church & Location *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. St. Francis Xavier Church, Karnataka"
              value={parish}
              onChange={(e) => setParish(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stadium-950 border border-stadium-700 focus:border-emerald-500 focus:outline-none text-white text-sm placeholder:text-slate-500"
            />
          </div>

          {/* Select Coordinator */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Select Coordinator to Message:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TOURNAMENT_DATA.coordinators.map((c) => (
                <button
                  type="button"
                  key={c.name}
                  onClick={() => setSelectedCoord(c.name)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                    selectedCoord === c.name
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-400'
                      : 'bg-stadium-950 text-slate-400 hover:text-white border border-stadium-700'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-stadium-950 border border-stadium-800 text-[11px] text-slate-300 space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-400">Entry Fee:</span>
              <span className="font-bold text-amber-400">₹2,000 per team</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Squad Limit:</span>
              <span className="font-bold text-white">8 Players (6 Playing + 2 Subs)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Icon Player:</span>
              <span className="font-bold text-emerald-400">1 Allowed from any parish</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white font-athletic font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Send Details to {activeCoordinator.name} via WhatsApp</span>
          </button>

          {/* Quick Direct Call Alternative */}
          <div className="pt-2 text-center">
            <span className="text-xs text-slate-400">Prefer calling directly? </span>
            <a
              href={`tel:${activeCoordinator.phone}`}
              className="text-xs font-bold text-amber-400 hover:underline"
            >
              Call {activeCoordinator.name} (+91 {activeCoordinator.phone})
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}
