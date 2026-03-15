import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export const SolutionSection: React.FC = () => {
  return (
    <section 
      id="contact-form" 
      className="relative pt-32 pb-32 md:pb-48 px-4 overflow-hidden bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF] z-20 mt-[-60px] md:mt-[-120px]"
      style={{ borderTopLeftRadius: '50% 60px', borderTopRightRadius: '50% 60px' }}
    >
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
    </section>
  );
};