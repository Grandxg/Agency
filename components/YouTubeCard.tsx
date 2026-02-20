import React from 'react';
import { Eye, TrendingUp } from 'lucide-react';

export const YouTubeCard = ({ 
  url, 
  title,
  growth
}: { 
  url: string; 
  title: string;
  growth: string;
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Extract the video ID from the URL
  const match = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  const videoId = match ? match[1] : '';
  // YouTube embed URL for Shorts style
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

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
              className="w-full h-full absolute inset-0 object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title={title}
            />
            {/* Aggressive overlays to block title/logo clicks */}
            <div className="absolute top-0 left-0 w-full h-32 z-20 bg-transparent cursor-default" />
            <div className="absolute bottom-0 left-0 w-full h-40 z-20 bg-transparent cursor-default" />
          </>
        )}
      </div>

      {/* Stats Footer */}
      <div className="h-20 bg-white border-t-[3px] border-black flex items-center justify-center px-6 relative z-20 shrink-0">
        <div className="flex flex-col items-center">
             <div className="flex items-center gap-1.5 text-green-600 bg-green-100 px-3 py-1.5 rounded-lg border border-green-200 mb-1">
                <span className="font-bold text-sm font-mono">{growth}</span>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Engagement Growth</span>
        </div>
      </div>
    </div>
  );
};
