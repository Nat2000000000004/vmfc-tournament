import React, { useState } from 'react';
import { 
  FileText, Users, Star, ShieldAlert, Award, Clock, 
  Search, CheckCircle2, ChevronRight, AlertTriangle, 
  CalendarCheck, Shuffle, Trophy, Image, Download
} from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export default function Rules() {
  const [viewMode, setViewMode] = useState('bento'); // 'bento' | 'full19' | 'posters'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPoster, setSelectedPoster] = useState('rules'); // 'main' | 'rules'

  // Categorized groups for Bento View
  const categories = [
    {
      id: 'squad',
      name: 'Squad & Icon Player',
      icon: Users,
      badge: 'Rules 1, 3, 10, 13, 19',
      color: 'from-amber-500/20 to-yellow-500/5',
      borderColor: 'border-amber-500/40',
      tagColor: 'text-neon-gold',
      items: [
        { ruleNum: 1, title: "Parish Youth & Icon Player", text: "It's a parish youth tournament. Players should be from their own respective parish. However, one icon player may be picked from anywhere in Karnataka. The icon player must be Christian." },
        { ruleNum: 3, title: "Single Icon Continuity", text: "Each team can have ONLY ONE icon player. The icon player cannot be changed in the second round; the team must continue with the same icon player." },
        { ruleNum: 10, title: "Squad Composition", text: "Each team consists of 6 players with 2 substitutes (rolling substitutions)." },
        { ruleNum: 13, title: "No Age Limit", text: "There is NO age limit for players." },
        { ruleNum: 19, title: "Unique Team Name", text: "Each team captain must provide a UNIQUE name for their team." }
      ]
    },
    {
      id: 'matchplay',
      name: 'Matchplay, Free Kicks & Penalties',
      icon: Trophy,
      badge: 'Rules 11, 12, 15, 18',
      color: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'border-emerald-500/40',
      tagColor: 'text-neon-green',
      items: [
        { ruleNum: 12, title: "Knockout Stage & Reporting", text: "The tournament is knockout stage. Teams must report 15 minutes before their match. No changes will be made to the schedule." },
        { ruleNum: 18, title: "No Throw-ins or Offside", text: "Throw-ins and offside rules will NOT apply. All free kicks are DIRECT." },
        { ruleNum: 15, title: "Tie-Breaker: 3+1 Penalties", text: "If scores are tied, there will be 3+1 penalties (3 main penalties + sudden death 1)." },
        { ruleNum: 11, title: "Match Duration", text: "Match duration and timing will be decided by the organising committee based on the number of teams participating." }
      ]
    },
    {
      id: 'discipline',
      name: 'Discipline, Alcohol & Conduct',
      icon: ShieldAlert,
      badge: 'Rules 4, 5, 7, 9',
      color: 'from-crimson-600/20 to-rose-600/5',
      borderColor: 'border-crimson-500/40',
      tagColor: 'text-neon-pink',
      items: [
        { ruleNum: 4, title: "Referee's Decision is Final", text: "The referee's decision is final. Players must respect it." },
        { ruleNum: 5, title: "Zero Misconduct Tolerance", text: "If a team or player is found guilty of misconduct, the whole team will be disqualified." },
        { ruleNum: 7, title: "Strict Alcohol Prohibition", text: "Alcohol or intoxicating drinks are strictly prohibited. Violation will result in team disqualification." },
        { ruleNum: 9, title: "Organising Committee Authority", text: "Major decisions are reserved for the organising committee. Teams and players must co-operate for the success of the tournament." }
      ]
    },
    {
      id: 'safety',
      name: 'ID Proof & Medical Safety',
      icon: AlertTriangle,
      badge: 'Rules 2, 6, 8',
      color: 'from-sky-500/20 to-blue-500/5',
      borderColor: 'border-sky-500/40',
      tagColor: 'text-neon-cyan',
      items: [
        { ruleNum: 2, title: "Identity Verification", text: "Players must bring ID proof if identification is necessary (Family Record Book)." },
        { ruleNum: 8, title: "First Aid & Medical Support", text: "First aid will be provided by the organising committee. In case of a major injury, the respective team must take responsibility." },
        { ruleNum: 6, title: "Emergency Decisions", text: "In case of an emergency, the organisers will make the decision." }
      ]
    },
    {
      id: 'timeline',
      name: 'Registration & Critical Dates',
      icon: CalendarCheck,
      badge: 'Rules 14, 16, 17',
      color: 'from-amber-400/20 to-orange-500/5',
      borderColor: 'border-amber-400/40',
      tagColor: 'text-neon-gold',
      items: [
        { ruleNum: 14, title: "Entry Fee ₹2,000", text: "Entry fee is ₹2,000. Team registration is confirmed only after payment to the concerned person." },
        { ruleNum: 16, title: "Registration Deadline: 11 Nov", text: "Last date for team registration is 11 November 2026." },
        { ruleNum: 17, title: "Lots Drawn: 12 Nov", text: "Lots will be drawn transparently on 12 November 2026." }
      ]
    }
  ];

  // Filtered 19 rules for search
  const filteredRules = TOURNAMENT_DATA.officialRules.filter(r => 
    r.rule.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(r.number).includes(searchQuery)
  );

  return (
    <section id="rules" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Rulebook</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-athletic uppercase text-white tracking-tight">
            OFFICIAL <span className="flashy-gradient-text">RULES & REGULATIONS</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            All official tournament regulations issued by the Virgin Mary Football Club Organizing Committee.
          </p>
        </div>

        {/* Critical Tournament Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {TOURNAMENT_DATA.timeline.map((item, index) => (
            <div 
              key={index}
              className={`p-5 rounded-2xl bg-cyber-900/90 border ${item.border} backdrop-blur-xl shadow-lg transition-transform hover:-translate-y-1 duration-300`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-black uppercase tracking-wider ${item.color}`}>
                  Step {index + 1}
                </span>
                <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                  {item.date}
                </span>
              </div>
              <h3 className="text-lg font-bold font-athletic text-white uppercase mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* View Switcher Buttons (Font Color is Strictly WHITE on all states) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setViewMode('bento')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-athletic font-black uppercase tracking-wider transition-all duration-300 text-white ${
              viewMode === 'bento'
                ? 'bg-gradient-to-r from-neon-green to-teal-500 shadow-[0_0_25px_rgba(0,255,135,0.6)] scale-105 border-2 border-white/40 drop-shadow'
                : 'bg-white/15 hover:bg-white/25 border-2 border-white/30 backdrop-blur-md shadow-md'
            }`}
          >
            Categorized Bento View
          </button>

          <button
            onClick={() => setViewMode('full19')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-athletic font-black uppercase tracking-wider transition-all duration-300 text-white ${
              viewMode === 'full19'
                ? 'bg-gradient-to-r from-neon-green to-teal-500 shadow-[0_0_25px_rgba(0,255,135,0.6)] scale-105 border-2 border-white/40 drop-shadow'
                : 'bg-white/15 hover:bg-white/25 border-2 border-white/30 backdrop-blur-md shadow-md'
            }`}
          >
            Rules (All 19)
          </button>

          <button
            onClick={() => setViewMode('posters')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-athletic font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 text-white ${
              viewMode === 'posters'
                ? 'bg-gradient-to-r from-neon-gold to-yellow-400 shadow-[0_0_25px_rgba(255,222,89,0.6)] scale-105 border-2 border-white/40 drop-shadow'
                : 'bg-white/15 hover:bg-white/25 border-2 border-white/30 backdrop-blur-md shadow-md'
            }`}
          >
            <Image className="w-4 h-4 text-white" />
            <span>Official Posters</span>
          </button>
        </div>

        {/* TAB 1: BENTO VIEW */}
        {viewMode === 'bento' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={cat.id}
                  className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${cat.color} backdrop-blur-xl border ${cat.borderColor} shadow-xl`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyber-950 flex items-center justify-center text-white shrink-0 border border-white/15">
                        <Icon className={`w-5 h-5 ${cat.tagColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-athletic text-white uppercase">
                          {cat.name}
                        </h3>
                        <span className={`text-xs font-bold ${cat.tagColor}`}>
                          {cat.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.items.map((it) => (
                      <div 
                        key={it.ruleNum}
                        className="bg-cyber-950/80 rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all flex items-start gap-3.5 group shadow-md"
                      >
                        <div className="w-7 h-7 rounded-full bg-white/15 text-neon-green flex items-center justify-center font-athletic font-black text-xs shrink-0 mt-0.5 group-hover:bg-neon-green group-hover:text-white transition-colors">
                          {it.ruleNum}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm mb-1">{it.title}</h4>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{it.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: RULES LIST WITH SEARCH */}
        {viewMode === 'full19' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-neon-cyan absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search rule (e.g. icon, penalty, alcohol, id, offside)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-cyber-900 border-2 border-white/20 focus:border-neon-cyan focus:outline-none text-white text-sm placeholder:text-slate-400 shadow-md"
              />
            </div>

            <div className="space-y-3">
              {filteredRules.map((r) => (
                <div
                  key={r.number}
                  className="p-4 sm:p-5 rounded-2xl bg-cyber-900/90 border border-white/10 hover:border-neon-green/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-neon-gold to-neon-pink text-white font-athletic font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                      #{r.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-neon-gold uppercase border border-white/10">
                          {r.category}
                        </span>
                        <h4 className="font-bold text-white text-sm">{r.title}</h4>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {r.rule}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right sm:border-l sm:border-white/10 sm:pl-4">
                    <span className="text-[11px] font-bold text-neon-green bg-neon-green/10 px-3 py-1 rounded-full border border-neon-green/30 inline-block">
                      {r.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 3: DUAL POSTER FLYER VIEW */}
        {viewMode === 'posters' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-center gap-3 mb-6">
              <button
                onClick={() => setSelectedPoster('rules')}
                className={`px-5 py-2.5 rounded-xl text-xs font-athletic font-black uppercase tracking-wider transition-all text-white ${
                  selectedPoster === 'rules'
                    ? 'bg-neon-gold shadow-lg shadow-neon-gold/30 border-2 border-white/40'
                    : 'bg-white/15 hover:bg-white/25 border-2 border-white/30'
                }`}
              >
                Rules & Regulations Flyer
              </button>
              <button
                onClick={() => setSelectedPoster('main')}
                className={`px-5 py-2.5 rounded-xl text-xs font-athletic font-black uppercase tracking-wider transition-all text-white ${
                  selectedPoster === 'main'
                    ? 'bg-neon-gold shadow-lg shadow-neon-gold/30 border-2 border-white/40'
                    : 'bg-white/15 hover:bg-white/25 border-2 border-white/30'
                }`}
              >
                Tournament Announcement Flyer
              </button>
            </div>

            <div className="flex flex-col items-center max-w-xl mx-auto">
              <div className="rounded-3xl p-2.5 bg-cyber-900 border-2 border-neon-gold/40 shadow-2xl overflow-hidden mb-4">
                <img
                  src={selectedPoster === 'rules' ? TOURNAMENT_DATA.posters.rulesPoster : TOURNAMENT_DATA.posters.mainPoster}
                  alt="Official Poster"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <a
                href={selectedPoster === 'rules' ? TOURNAMENT_DATA.posters.rulesPoster : TOURNAMENT_DATA.posters.mainPoster}
                download={selectedPoster === 'rules' ? 'Virgin-Mary-FC-Rules-Poster.jpg' : 'Virgin-Mary-FC-Tournament-Poster.jpg'}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-neon-green to-teal-500 text-white font-athletic font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,255,135,0.4)] transition-all hover:scale-105 active:scale-95 border border-white/30"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download {selectedPoster === 'rules' ? 'Rules Flyer (HD)' : 'Tournament Flyer (HD)'}</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
