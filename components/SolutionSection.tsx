import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export const SolutionSection: React.FC = () => {
  return (
    <section id="waitlist-form" className="relative pt-24 pb-48 px-4 overflow-hidden bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF]">
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-12 text-center mb-12">
        
        <div>
           <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-black">
            Never Go <br />
            Solo Again
          </h2>
          <p className="text-lg font-body text-gray-700 max-w-lg mx-auto leading-relaxed">
            Whether it's grabbing coffee, watching a movie, or exploring a new hotspot, 
            PlusOne ensures your plans never fall through.
          </p>
        </div>

        <div className="w-full">
            <h3 className="text-3xl font-display font-bold mb-4 text-[#2E0249]">Join the PlusOne Waitlist</h3>
            <p className="text-sm font-body text-gray-600 mb-8 max-w-md mx-auto">
                Be first to know when we launch. Help us match you better by sharing a few details.
            </p>
            <WaitlistForm />
        </div>
      </div>

      {/* Unique Smooth Curve Divider (Matches Footer Color #2E0249) */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[180px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
             <path 
                d="M0,0 C300,100 900,100 1200,0 V120 H0 V0 Z" 
                className="fill-[#2E0249]"
            ></path>
        </svg>
      </div>
    </section>
  );
};