import React from 'react';
import { InstagramCard } from './InstagramCard';
import { YouTubeCard } from './YouTubeCard';

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
            
            {/* YouTube Short 1 */}
            <YouTubeCard 
                title="Viral Short 1"
                url="https://www.youtube.com/shorts/ifR5xU33QvE"
                views="5.1M"
                growth="+620%"
            />

            {/* YouTube Short 2 */}
            <YouTubeCard 
                title="Viral Short 2"
                url="https://www.youtube.com/shorts/r0APzj_ZChw"
                views="3.4M"
                growth="+410%"
            />

             {/* YouTube Short 3 */}
             <YouTubeCard 
                title="Viral Short 3"
                url="https://www.youtube.com/shorts/D2izfV2zayk"
                views="2.9M"
                growth="+350%"
            />

            {/* Instagram Reel 1 */}
            <InstagramCard 
                title="Viral Reel 1"
                url="https://www.instagram.com/reel/DRMq8XDDNSh/?igsh=YTl6dGFmMWptcTVk"
                views="4.8M"
                growth="+580%"
            />

            {/* Instagram Reel 2 */}
            <InstagramCard 
                title="Viral Reel 2"
                url="https://www.instagram.com/reel/DSfKce2ktBj/?igsh=bHYwNXc2aHpkZWlm"
                views="1.7M"
                growth="+250%"
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