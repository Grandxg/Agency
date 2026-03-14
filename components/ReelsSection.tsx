import React, { useRef } from 'react';
import { InstagramCard } from './InstagramCard';
import { YouTubeCard } from './YouTubeCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ReelsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="reels-section" className="py-24 px-4 bg-[#F3E8FF] relative border-t-[3px] border-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10 px-4 md:px-12">
            <div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-4">
                    RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6]">EDITS.</span>
                </h2>
                <p className="text-gray-600 font-body text-lg max-w-xl">
                    A curated selection of high-retention reels designed to stop the scroll.
                </p>
            </div>
        </div>

        {/* Carousel Wrapper with Side Buttons */}
        <div className="relative group/carousel">
            
            {/* Left Navigation Arrow */}
            <button 
              onClick={scrollLeft}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-white border-[3px] border-black rounded-full p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-[calc(50%+4px)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8),_4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0_0_30px_rgba(168,85,247,1),_0px_0px_0px_0px_rgba(0,0,0,1)] active:-translate-y-1/2 active:translate-x-1 focus:outline-none focus:shadow-[0_0_30px_rgba(168,85,247,1),_4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-[#9333ea]"
              aria-label="Scroll left"
            >
              <ChevronLeft size={32} className="text-black" />
            </button>

            {/* Right Navigation Arrow */}
            <button 
              onClick={scrollRight}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-white border-[3px] border-black rounded-full p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-[calc(50%+4px)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8),_4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0_0_30px_rgba(168,85,247,1),_0px_0px_0px_0px_rgba(0,0,0,1)] active:-translate-y-1/2 active:-translate-x-1 focus:outline-none focus:shadow-[0_0_30px_rgba(168,85,247,1),_4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-[#9333ea]"
              aria-label="Scroll right"
            >
              <ChevronRight size={32} className="text-black" />
            </button>

            {/* Horizontal Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-12 pt-4 px-4 md:px-20 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                
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
        </div>
        
        {/* Mobile Navigation Arrows (Visible only on small screens) */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-4 mb-8">
            <button 
              onClick={scrollLeft}
              className="bg-white border-[3px] border-black rounded-full p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0_0_20px_rgba(168,85,247,1),_0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 focus:outline-none focus:shadow-[0_0_20px_rgba(168,85,247,1),_4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} className="text-black" />
            </button>
            <button 
              onClick={scrollRight}
              className="bg-white border-[3px] border-black rounded-full p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0_0_20px_rgba(168,85,247,1),_0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:-translate-x-1 focus:outline-none focus:shadow-[0_0_20px_rgba(168,85,247,1),_4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Scroll right"
            >
              <ChevronRight size={28} className="text-black" />
            </button>
        </div>
        
        <div className="mt-4 text-center">
            <a href="#contact-form" className="font-display font-bold text-sm border-b-2 border-black hover:text-[#9333ea] hover:border-[#9333ea] transition-colors pb-0.5">
                VIEW ALL PROJECTS
            </a>
        </div>

      </div>
    </section>
  );
};