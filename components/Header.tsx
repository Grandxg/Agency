import React from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    const mainContent = document.querySelector('main');
    
    if (!target) return;

    // Custom smooth scroll animation
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500; // 1.5s duration for slower scroll
    let startTime: number | null = null;

    // Apply blur effect
    if (mainContent) {
      (mainContent as HTMLElement).style.transition = 'filter 0.3s ease-out';
      (mainContent as HTMLElement).style.filter = 'blur(4px)';
    }

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      
      // Ease-in-out cubic function for smooth acceleration/deceleration
      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      };

      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Remove blur when done
        if (mainContent) {
          (mainContent as HTMLElement).style.filter = 'none';
        }
      }
    };

    requestAnimationFrame(animation);
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
            <button onClick={() => scrollToSection('reels-section')} className="hover:text-[#D8B4FE] transition-colors">Marketing</button>
            <button onClick={() => scrollToSection('development-section')} className="hover:text-[#D8B4FE] transition-colors">Development</button>
            <button onClick={() => scrollToSection('footer')} className="hover:text-[#D8B4FE] transition-colors">Contact</button>
          </nav>

          {/* Action Button */}
          <Button size="md" onClick={() => scrollToSection('contact-form')} className="whitespace-nowrap bg-[#D8B4FE] hover:bg-[#cba0f9] text-base py-2.5 px-6">
            Get a Proposal
          </Button>

        </div>
      </div>
    </header>
  );
};