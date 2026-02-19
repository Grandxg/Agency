import React from 'react';
import { InstagramCard } from './InstagramCard';

export const ProofSection: React.FC = () => {
  return (
    <section className="bg-[#F3E8FF] pt-24 pb-64 px-4 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-black mb-4">
                THE PROOF IS IN THE <span className="text-[#9333ea]">NUMBERS.</span>
            </h2>
            <p className="text-gray-700 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                We turn complex ideas into viral moments.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
            
            {/* Reel 1 */}
            <InstagramCard 
                title="Viral Edit 1"
                url="https://www.instagram.com/manipulation_dark/reel/DRrLd4EATTB/?hl=en"
                views="4.2M"
                growth="+600%"
            />

            {/* Reel 2 */}
            <InstagramCard 
                title="Viral Edit 2"
                url="https://www.instagram.com/manipulation_dark/reel/DQgfnTbCIZ7/?hl=en"
                views="3.8M"
                growth="+450%"
            />

             {/* Reel 3 */}
             <InstagramCard 
                title="Viral Edit 3"
                url="https://www.instagram.com/manipulation_dark/reel/DPrumAcCApF/?hl=en"
                views="2.1M"
                growth="+380%"
            />

            {/* Reel 4 */}
            <InstagramCard 
                title="Viral Edit 4"
                url="https://www.instagram.com/manipulation_dark/reel/DPCf0jmCEDx/?hl=en"
                views="5.5M"
                growth="+720%"
            />

            {/* Reel 5 */}
            <InstagramCard 
                title="Viral Edit 5"
                url="https://www.instagram.com/manipulation_dark/reel/DO3YBDTAbx_/?hl=en"
                views="1.9M"
                growth="+290%"
            />
        </div>
      </div>

      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px]" 
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