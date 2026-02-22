import React from 'react';
import { AestheticThumbnail, ThumbnailVariant } from './AestheticThumbnail';

export const YouTubeCard = ({ 
  url, 
  title,
  growth,
  thumbnail,
  variant
}: { 
  url: string; 
  title: string;
  growth: string;
  thumbnail?: string;
  variant?: ThumbnailVariant;
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);

  // Extract the video ID from the URL
  const match = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  const videoId = match ? match[1] : '';
  // YouTube embed URL for Shorts style
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`;
  // Use provided thumbnail or fallback to YouTube maxresdefault
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div 
      className="group relative h-[750px] w-full rounded-3xl overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col"
    >
      {/* Iframe/Poster Container */}
      <div className="flex-grow relative bg-black w-full overflow-hidden cursor-pointer" onClick={() => setIsLoaded(true)}>
        {!isLoaded ? (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#2E0249]">
            {variant ? (
              <AestheticThumbnail variant={variant} title={title} />
            ) : !imgError ? (
              <>
                <img 
                  src={thumbnailUrl} 
                  alt={title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale-[20%]"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
                {/* Professional Purple Tint Overlay */}
                <div className="absolute inset-0 bg-[#4C1D95]/30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                
                {/* Play Button Overlay for Image Thumbnails */}
                <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                   <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                   </div>
                </div>
              </>
            ) : (
               // Fallback if image fails to load
               <AestheticThumbnail variant="purple-haze" title={title} />
            )}
            
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
            {/* Overlays to block title/logo clicks but allow center play click if needed */}
            <div className="absolute top-0 left-0 w-full h-24 z-20 bg-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 z-20 bg-transparent pointer-events-none" />
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
