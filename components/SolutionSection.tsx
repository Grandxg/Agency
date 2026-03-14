import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export const SolutionSection: React.FC = () => {
  return (
    <section id="contact-form" className="relative pt-24 pb-48 px-4 overflow-hidden bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF]">
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-12 text-center mb-12">
        
        <div>
           <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-black">
            Your All-In-One <br />
            Growth Partner
          </h2>
          <p className="text-lg font-body text-gray-700 max-w-lg mx-auto leading-relaxed">
            Organic Marketing. Video Editing. Website Building. Custom CRM Development.
            <br />
            <span className="font-bold text-[#2E0249]">We execute, you grow.</span>
          </p>
        </div>

        <div className="w-full">
            <h3 className="text-3xl font-display font-bold mb-4 text-[#2E0249]">Start Your Project</h3>
            <p className="text-sm font-body text-gray-600 mb-8 max-w-md mx-auto">
                Tell us what you need. We'll get back to you with a strategy within 24 hours.
            </p>
            <WaitlistForm />
        </div>
      </div>

      {/* Unique Smooth Curve Divider (Opposite: Hill rising up) */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[180px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="footerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4C1D95" />
                    <stop offset="100%" stopColor="#2E0249" />
                </linearGradient>
            </defs>
             <path 
                d="M0,120 C320,0 880,0 1200,120 H0 Z" 
                fill="url(#footerGradient)"
            ></path>
        </svg>
      </div>
    </section>
  );
};