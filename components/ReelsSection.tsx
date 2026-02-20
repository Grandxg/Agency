import React from 'react';
import { InstagramCard } from './InstagramCard';
import { YouTubeCard } from './YouTubeCard';

export const ReelsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#FDFBFF] relative border-t-2 border-black/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
            <div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-4">
                    RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6]">EDITS.</span>
                </h2>
                <p className="text-gray-600 font-body text-lg max-w-xl">
                    A curated selection of high-retention reels designed to stop the scroll.
                </p>
            </div>
            <div className="hidden md:block mb-2">
                <a href="#contact-form" className="font-display font-bold text-sm border-b-2 border-black hover:text-[#9333ea] hover:border-[#9333ea] transition-colors pb-0.5">
                    VIEW ALL PROJECTS
                </a>
            </div>
        </div>

        {/* Updated Grid to show all transferred reels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* YouTube Short 1 */}
            <YouTubeCard 
                title="Viral Short 1"
                url="https://www.youtube.com/shorts/ifR5xU33QvE"
                growth="+620%"
            />

            {/* YouTube Short 2 */}
            <YouTubeCard 
                title="Viral Short 2"
                url="https://www.youtube.com/shorts/r0APzj_ZChw"
                growth="+410%"
            />

             {/* YouTube Short 3 */}
             <YouTubeCard 
                title="Viral Short 3"
                url="https://www.youtube.com/shorts/D2izfV2zayk"
                growth="+350%"
            />

            {/* Instagram Reel 1 */}
            <InstagramCard 
                title="Viral Reel 1"
                url="https://www.instagram.com/reel/DRMq8XDDNSh/?igsh=YTl6dGFmMWptcTVk"
                growth="+580%"
            />

            {/* Instagram Reel 2 */}
            <InstagramCard 
                title="Viral Reel 2"
                url="https://www.instagram.com/reel/DSfKce2ktBj/?igsh=bHYwNXc2aHpkZWlm"
                growth="+250%"
            />

            {/* Previous Reel 1 */}
            <InstagramCard 
                title="Manipulation Dark Reel 1"
                url="https://www.instagram.com/manipulation_dark/reel/DN360KNk713/?hl=en"
                growth="+124%"
            />

        </div>
        
        <div className="md:hidden mt-12 text-center">
            <a href="#contact-form" className="font-display font-bold text-sm border-b-2 border-black pb-0.5">
                VIEW ALL PROJECTS
            </a>
        </div>

      </div>
    </section>
  );
};