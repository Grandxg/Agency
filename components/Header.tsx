import React from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-6 z-50 w-full px-4 flex justify-center animate-slide-down pointer-events-none">
      <div className="w-full max-w-5xl mx-auto flex justify-center pointer-events-auto">
        
        {/* Unified Pill Container */}
        <div className="bg-white border-2 border-black rounded-full pl-6 pr-1.5 py-1.5 shadow-neo flex items-center justify-between w-full md:w-auto md:min-w-[550px] gap-4">
          
          {/* Logo */}
          <div className="flex flex-col leading-none select-none pl-2 cursor-pointer transition-transform duration-300 ease-out hover:scale-105 origin-center group">
            <img src="/header-logo.svg" alt="GrothView" className="h-12 w-auto object-contain" />
          </div>
          
          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex gap-8 font-display font-bold text-sm text-black">
            <a href="#" className="hover:text-[#D8B4FE] transition-colors">Marketing</a>
            <a href="#" className="hover:text-[#D8B4FE] transition-colors">Development</a>
            <a href="#" className="hover:text-[#D8B4FE] transition-colors">Agency</a>
          </nav>

          {/* Action Button */}
          <Button size="md" onClick={scrollToContact} className="whitespace-nowrap bg-[#D8B4FE] hover:bg-[#cba0f9] text-base py-2.5 px-6">
            Get a Proposal
          </Button>

        </div>
      </div>
    </header>
  );
};