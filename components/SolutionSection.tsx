import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export const SolutionSection: React.FC = () => {
  return (
    <section id="waitlist-form" className="relative pt-24 pb-0 px-4 overflow-hidden bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF]">
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-12 text-center mb-48">
        
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

      {/* Hills Illustration */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] z-0 pointer-events-none">
         {/* Back Hill */}
         <div className="absolute bottom-0 left-0 w-full h-[250px] bg-[#9F7AEA] opacity-80 rounded-t-[100%] scale-x-150 translate-y-20"></div>
         
         {/* Front Hill Left */}
         <div className="absolute bottom-0 left-[-20%] w-[80%] h-[200px] bg-[#805AD5] opacity-90 rounded-tr-[100%] rounded-tl-[30%]"></div>
         
         {/* Front Hill Right */}
         <div className="absolute bottom-0 right-[-10%] w-[70%] h-[280px] bg-[#6B46C1] rounded-tl-[100%]"></div>
         
         {/* Trees */}
         <div className="absolute bottom-10 left-[10%] w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[80px] border-b-[#2E0249]"></div>
         <div className="absolute bottom-[-10px] left-[10%] w-[10px] h-[20px] bg-black"></div>

         <div className="absolute bottom-20 left-[25%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[50px] border-b-[#2E0249]"></div>
         
         <div className="absolute bottom-16 right-[20%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[70px] border-b-[#2E0249]"></div>

         <div className="absolute bottom-8 right-[5%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[100px] border-b-[#2E0249]"></div>
         <div className="absolute bottom-[-10px] right-[5%] w-[12px] h-[20px] bg-black"></div>
      </div>
    </section>
  );
};