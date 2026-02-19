import React from 'react';
import { InstagramCard } from './InstagramCard';

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

        {/* Updated Grid to 2 columns for the 2 provided reels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Reel 1 */}
            <InstagramCard 
                title="Manipulation Dark Reel 1"
                url="https://www.instagram.com/manipulation_dark/reel/DN360KNk713/?hl=en"
                views="1.2M"
                growth="+124%"
            />
            
            {/* Reel 2 */}
            <InstagramCard 
                title="Manipulation Dark Reel 2"
                url="https://www.instagram.com/manipulation_dark/reel/DPGqgKviMF7/?hl=en"
                views="850K"
                growth="+89%"
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