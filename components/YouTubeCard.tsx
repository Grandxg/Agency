import React from 'react';
import { Eye, TrendingUp } from 'lucide-react';

export const YouTubeCard = ({ 
  url, 
  title,
  views,
  growth
}: { 
  url: string; 
  title: string;
  views: string;
  growth: string;
}) => {
  // Extract the video ID from the URL
  // Matches /shorts/ID
  const match = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  const videoId = match ? match[1] : '';
  // YouTube embed URL for Shorts style
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1`;

  return (
    <div 
      className="group relative h-[750px] w-full rounded-3xl overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col"
    >
      {/* Iframe Container */}
      <div className="flex-grow relative bg-black w-full overflow-hidden">
        <iframe 
          src={embedUrl}
          className="w-full h-full absolute inset-0 object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
        />
        {/* Transparent Overlay to prevent clicks/redirects if needed, 
            but YouTube embeds are usually fine to interact with for play/pause.
            Adding overlays to match the "no redirect" request style if desired, 
            but YouTube clicks usually pause/play unless clicking the title.
        */}
        {/* Top Overlay to block title clicks */}
        <div className="absolute top-0 left-0 w-full h-32 z-20 bg-transparent cursor-default" />
        {/* Bottom Overlay to block footer clicks if any */}
        <div className="absolute bottom-0 left-0 w-full h-40 z-20 bg-transparent cursor-default" />
      </div>

      {/* Stats Footer */}
      <div className="h-20 bg-white border-t-[3px] border-black flex items-center justify-between px-6 relative z-20 shrink-0">
        <div className="flex items-center gap-3">
            <div className="bg-[#F3E8FF] p-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Eye size={20} className="text-black" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-black">{views}</span>
                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1">Total Views</span>
            </div>
        </div>
        
        <div className="flex flex-col items-end">
             <div className="flex items-center gap-1.5 text-green-600 bg-green-100 px-2 py-1 rounded-lg border border-green-200 mb-1">
                <TrendingUp size={14} />
                <span className="font-bold text-xs font-mono">{growth}</span>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Engagement</span>
        </div>
      </div>
    </div>
  );
};
