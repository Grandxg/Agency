import React from 'react';
import { AestheticThumbnail, ThumbnailVariant } from './AestheticThumbnail';

export const InstagramCard = ({ 
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
  
  // Extract the reel ID from the URL
  const match = url.match(/\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
  const reelId = match ? match[1] : '';
  const embedUrl = `https://www.instagram.com/reel/${reelId}/embed/?autoplay=1&muted=0`;
  // Use provided thumbnail or fallback to Instagram media URL
  const thumbnailUrl = thumbnail || `https://www.instagram.com/p/${reelId}/media/?size=l`;

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isLoaded) return;

    // 1. Reset (Pause) when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsLoaded(false); // Unmount iframe to stop playback
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // 2. Reset (Pause) when clicking any button or link
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) {
        setIsLoaded(false);
      }
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      observer.disconnect();
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [isLoaded]);

  return (
    <div 
      ref={containerRef}
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
              className="w-full h-[calc(100%+250px)] absolute top-0 left-0"
              frameBorder="0"
              scrolling="no"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={title}
            />
            {/* Overlays to block redirects but allow center play click if needed */}
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
