import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import FootballPitchBackground from './components/FootballPitchBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Prizes from './components/Prizes';
import Rules from './components/Rules';
import PosterViewer from './components/PosterViewer';
import Coordinators from './components/Coordinators';
import VenueLocation from './components/VenueLocation';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsAppDrawerModal from './components/WhatsAppDrawerModal';
import MobileQuickBar from './components/MobileQuickBar';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const triggerConfetti = () => {
    const count = 150;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 30,
      startVelocity: 55,
      colors: ['#f59e0b', '#fbbf24', '#ffffff']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#10b981', '#34d399', '#ffffff']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.92,
      scalar: 0.8,
      colors: ['#f59e0b', '#10b981', '#38bdf8']
    });
  };

  return (
    <div className="min-h-screen bg-stadium-950 text-slate-100 flex flex-col selection:bg-emerald-600 selection:text-white relative">
      
      {/* Subtle, Soothing Animated Football Pitch & Particle Background */}
      <FootballPitchBackground />

      {/* Navigation Bar */}
      <Navbar onOpenRegisterModal={() => setIsRegisterModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero with Floodlit Stadium, Badges, Aesthetic Countdown */}
        <Hero 
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
          onTriggerConfetti={triggerConfetti}
        />

        {/* Mega ₹50,000 Prize Pool Showcase */}
        <Prizes 
          onTriggerConfetti={triggerConfetti}
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        />

        {/* Official 19 Rules & Regulations (Bento + Complete List + Dual Flyers) */}
        <Rules />

        {/* Official Poster HD Showcase & Download */}
        <PosterViewer />

        {/* Coordinators Contact Cards & Direct WhatsApp Redirection */}
        <Coordinators />

        {/* Venue, Stadium Facilities & Google Maps */}
        <VenueLocation />

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Dock for Mobile */}
      <MobileQuickBar onOpenRegisterModal={() => setIsRegisterModalOpen(true)} />

      {/* Direct WhatsApp Redirection Modal (No forms, 1-tap links only) */}
      <WhatsAppDrawerModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

    </div>
  );
}
