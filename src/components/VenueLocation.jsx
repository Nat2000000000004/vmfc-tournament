import React from 'react';
import { MapPin, Navigation, Car, Shield, Lightbulb, Coffee, HeartPulse, ExternalLink, Zap } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function VenueLocation() {
  const amenities = [
    { icon: Lightbulb, title: 'High-Power Stadium Floodlights', desc: 'Full pitch illumination for intense night football until 11:00 PM.' },
    { icon: Car, title: 'Ample Parking Area', desc: 'Dedicated parking for team buses, cars, and two-wheelers.' },
    { icon: HeartPulse, title: 'On-Site First Aid & Physio', desc: 'Medical kit and emergency response provided on ground.' },
    { icon: Coffee, title: 'Refreshment & Food Stalls', desc: 'Hydration counters, energy drinks, and fresh food.' },
    { icon: Shield, title: 'Player Dugouts & Warmup Area', desc: 'Dedicated benches, team shelters, and kit storage.' },
    { icon: Navigation, title: 'Easy Road Connectivity', desc: 'Direct road access leading directly to Virgin Mary Playground.' }
  ];

  return (
    <section id="venue" className="py-20 relative bg-cyber-900/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Tournament Location</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-athletic uppercase text-white tracking-tight">
            GROUND <span className="flashy-cyan-text">LOCATION & DIRECTIONS</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Get directions to the Virgin Mary Playground in Mallapur, Karnataka for the tournament kickoff!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Venue Info & Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="cyber-card rounded-3xl p-6 sm:p-8 border border-neon-cyan/30 space-y-5 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center text-white shrink-0 shadow-lg shadow-neon-cyan/30 font-black">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neon-cyan">Ground Location</div>
                  <h3 className="text-2xl font-black font-athletic text-white uppercase">
                    {TOURNAMENT_DATA.venue.name}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 font-medium">
                    {TOURNAMENT_DATA.venue.fullAddress}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Match Day:</span>
                  <span className="font-bold text-white">November 14, 2026 (10:00 AM)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Reporting Time:</span>
                  <span className="font-bold text-neon-green">15 Mins Before Match</span>
                </div>
              </div>

              {/* Direct Link to Google Maps Provided by User (WHITE TEXT) */}
              <a
                href={TOURNAMENT_DATA.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-green to-neon-cyan text-white font-athletic font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(0,255,135,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-white/30 drop-shadow"
              >
                <Navigation className="w-4 h-4 fill-white text-white" />
                <span className="text-white drop-shadow">Open in Google Maps App</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>

            </div>

            {/* Ground Facilities Grid */}
            <div className="grid grid-cols-2 gap-3">
              {amenities.slice(0, 4).map((a, i) => {
                const Icon = a.icon;
                return (
                  <div key={i} className="bg-cyber-900/80 rounded-2xl p-3.5 border border-white/10 flex flex-col justify-between">
                    <Icon className="w-5 h-5 text-neon-cyan mb-2" />
                    <div>
                      <div className="text-xs font-bold text-white">{a.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{a.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Satellite/Street View */}
          <div className="lg:col-span-7">
            <div className="cyber-card rounded-3xl p-3 sm:p-4 border border-neon-cyan/30 shadow-[0_0_35px_rgba(0,240,255,0.2)] overflow-hidden">
              <div className="w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden relative border border-white/10 bg-cyber-950">
                
                <iframe
                  title="Virgin Mary Playground Mallapur Google Map"
                  src={TOURNAMENT_DATA.venue.embedUrl}
                  className="w-full h-full border-0 filter contrast-125 saturate-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                />
                
                {/* Floating GPS Location Badge */}
                <div className="absolute top-4 left-4 bg-cyber-950/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neon-green/40 text-neon-green text-xs font-athletic font-bold uppercase tracking-wider shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
                  <span>📍 Virgin Mary Playground, Mallapur</span>
                </div>

                <a
                  href={TOURNAMENT_DATA.venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-neon-green to-teal-500 text-white font-black px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-2xl flex items-center gap-1.5 border border-white/30 drop-shadow"
                >
                  <span className="text-white drop-shadow">Get Driving Directions</span>
                  <Navigation className="w-3.5 h-3.5 fill-white text-white" />
                </a>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
