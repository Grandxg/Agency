import React from 'react';
import { Button } from './ui/Button';
import { Ticker } from './Ticker';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-48 overflow-hidden bg-[#FDFBFF]">
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F3E8FF]/60 pointer-events-none"></div>

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center animate-slide-up relative">
        <Ticker />
        
        <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter mb-10 text-black drop-shadow-sm select-none mix-blend-darken">
          ORGANIC <br />
          MARKETING & <br />
          DIGITAL TECH
        </h1>

        <div className="relative bg-white/80 backdrop-blur-sm px-8 py-6 rounded-3xl border-2 border-black/5 shadow-sm mb-12 max-w-2xl">
          <p className="text-xl md:text-2xl font-body text-gray-800 font-medium leading-relaxed">
            From <span className="text-[#9333ea] font-bold">PR & Video Editing</span> to <br className="hidden md:block" />
            <span className="text-[#9333ea] font-bold">Websites & CRMs</span>. We build, we market, we scale.
          </p>
        </div>

        <Button 
          size="lg" 
          onClick={scrollToContact} 
          className="px-12 py-6 text-2xl rounded-full bg-[#D8B4FE] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all"
        >
          Scale Your Business
        </Button>
      </div>

      {/* Unique Smooth Curve Divider (Matches ProofSection Background Color #F3E8FF) */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[180px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
             <path 
                d="M0,120 C320,0 880,0 1200,120 H0 Z" 
                className="fill-white"
            ></path>
        </svg>
      </div>
    </section>
  );
};