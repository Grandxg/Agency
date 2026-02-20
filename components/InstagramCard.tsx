import React from 'react';
import { Eye, TrendingUp } from 'lucide-react';

export const InstagramCard = ({ 
  url, 
  title,
  growth
}: { 
  url: string; 
  title: string;
  growth: string;
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  // Extract the reel ID from the URL
  const match = url.match(/\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
  const reelId = match ? match[1] : '';
  const embedUrl = `https://www.instagram.com/reel/${reelId}/embed/?autoplay=1&muted=0`;
  const thumbnailUrl = `https://www.instagram.com/p/${reelId}/media/?size=l`;

  return (
    <div 
      className="group relative h-[750px] w-full rounded-3xl overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col"
    >
      {/* Iframe/Poster Container */}
      <div className="flex-grow relative bg-black w-full overflow-hidden cursor-pointer" onClick={() => setIsLoaded(true)}>
        {!isLoaded ? (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <img 
              src={thumbnailUrl} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-40 bg-white/90 p-5 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1" />
            </div>
            {/* Overlay to prevent any hover info from iframe if it were there */}
            <div className="absolute inset-0 z-30 bg-transparent" />
          </div>
        ) : (
          <>
            <iframe 
              src={embedUrl}
              className="w-full h-[calc(100%+250px)] absolute top-0 left-0"
              frameBorder="0"
              scrolling="no"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={title}
            />
            {/* Extremely aggressive overlays to block redirects */}
            <div className="absolute top-0 left-0 w-full h-40 z-20 bg-transparent cursor-default" />
            <div className="absolute bottom-0 left-0 w-full h-48 z-20 bg-transparent cursor-default" />
          </>
        )}
      </div>

      {/* Stats Footer */}
      <div className="h-20 bg-white border-t-[3px] border-black flex items-center justify-center px-6 relative z-20 shrink-0">
        <div className="flex flex-col items-center">
             <div className="flex items-center gap-1.5 text-green-600 bg-green-100 px-3 py-1.5 rounded-lg border border-green-200 mb-1">
                <TrendingUp size={16} />
                <span className="font-bold text-sm font-mono">{growth}</span>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Engagement Growth</span>
        </div>
      </div>
    </div>
  );
};
