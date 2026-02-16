import React from 'react';
import { Eye, TrendingUp } from 'lucide-react';

const ReelCard = ({ 
  platform, 
  title, 
  views, 
  growth, 
  image, 
  delay 
}: { 
  platform: string; 
  title: string; 
  views: string; 
  growth: string; 
  image: string; 
  delay: string; 
}) => (
  <div 
    className="group relative h-[340px] w-full rounded-[2rem] overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-white"
    style={{ animationDelay: delay }}
  >
    {/* Background Image with Zoom Effect */}
    <div className="absolute inset-0 w-full h-full">
        <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-95"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/80"></div>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col items-start z-10">
        
        {/* Platform Tag */}
        <div className="bg-white border-2 border-black text-black px-2.5 py-1 rounded-md text-[10px] font-display font-bold uppercase tracking-widest mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {platform}
        </div>

        {/* Title */}
        <h3 className="text-white font-display font-bold text-xl leading-tight mb-3 drop-shadow-md">
            {title}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-3 w-full border-t border-white/30 pt-3">
            <div className="flex items-center gap-1.5 text-white font-bold text-xs bg-black/40 px-2 py-1 rounded-lg backdrop-blur-sm">
                <Eye size={14} className="text-[#FDE047]" />
                {views}
            </div>
            <div className="flex items-center gap-1.5 text-[#4ADE80] font-bold text-xs ml-auto bg-black/40 px-2 py-1 rounded-lg backdrop-blur-sm">
                <TrendingUp size={14} />
                {growth}
            </div>
        </div>
    </div>
  </div>
);

export const ProofSection: React.FC = () => {
  return (
    <section className="bg-[#F3E8FF] pt-24 pb-64 px-4 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-black mb-4">
                THE PROOF IS IN THE <span className="text-[#9333ea]">NUMBERS.</span>
            </h2>
            <p className="text-gray-700 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                From zero to millions. We've helped niche businesses become household names.
            </p>
        </div>

        {/* Grid - Cards made smaller by adjusting the grid col count or max-width if needed, 
            but changing height in ReelCard component handles the "smaller cutout" request. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ReelCard 
                platform="TIKTOK"
                title="E-com Brand Growth"
                views="1.2M Views"
                growth="+420%"
                image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
                delay="0s"
            />
            <ReelCard 
                platform="INSTAGRAM REELS"
                title="Local Gym Viral"
                views="850K Views"
                growth="+420%"
                image="https://images.unsplash.com/photo-1519681393784-d8e5b56524dd?q=80&w=2070&auto=format&fit=crop"
                delay="0.1s"
            />
             <ReelCard 
                platform="YOUTUBE SHORTS"
                title="Tech Startup Launch"
                views="2.4M Views"
                growth="+420%"
                image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
                delay="0.2s"
            />
             <ReelCard 
                platform="TIKTOK"
                title="Fashion Drop"
                views="4.1M Views"
                growth="+420%"
                image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
                delay="0.3s"
            />
        </div>
      </div>

      {/* Unique Smooth Curve Divider (Matches Next Section Color: White) */}
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