import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Who is eligible to participate in this tournament?",
      a: "This is an Open Catholic Tournament exclusively for players from Karnataka. All squad members (except the 1 designated Icon Player) must belong to Catholic parishes within Karnataka state."
    },
    {
      q: "How does the '1 Icon Player' rule work?",
      a: "Each 8-member squad is allowed 1 'Icon Player' who can be from ANY parish or background. This gives every team captain the freedom to invite a marquee player or friend without parish restrictions."
    },
    {
      q: "What is the squad size and match format?",
      a: "Each team registers a total of 8 players: 6 on-field players (including the goalkeeper) and 2 rolling substitutes. Rolling substitutions can be made at stoppages with the referee's consent."
    },
    {
      q: "How do we pay the ₹2,000 entry fee and confirm our slot?",
      a: "Contact any of our 4 official coordinators (Kevin, Krinson, Ronaldo, or Harris) on WhatsApp. They will provide the official Virgin Mary FC UPI QR code / UPI ID. Once you send the transaction screenshot, your team slot will be officially locked in."
    },
    {
      q: "What are the match timings for Day & Night games?",
      a: "The tournament kicks off at 10:00 AM in the morning on November 14, 2026. Matches will run right through the day and under high-powered stadium floodlights through the evening, culminating in the Grand Finale before 11:00 PM."
    },
    {
      q: "What footwear and kit should players bring?",
      a: "Standard turf football shoes or studs suitable for grass/turf ground are permitted. Shin guards are strongly encouraged for player safety. All squad members should wear matching color jerseys with distinct numbers."
    },
    {
      q: "Is there a registration deadline?",
      a: "Team slots are strictly limited and filled on a first-come, first-served basis upon receipt of the entry fee. Registrations close as soon as tournament brackets are full. We advise registering early to avoid missing out!"
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-athletic uppercase text-white tracking-tight">
            FREQUENTLY ASKED <span className="gold-gradient-text">QUESTIONS</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Everything you need to know about team registration, icon players, and tournament rules.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-stadium-700/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-stadium-850/60 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-100 font-athletic tracking-wide">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-stadium-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-500/20 text-amber-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-stadium-800 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
