import React, { useRef, useEffect } from 'react';

export const InstagramCard = ({ 
  url, 
  title,
}: { 
  url: string; 
  title: string;
}) => {
  // Extract the reel ID from the URL
  const match = url.match(/\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
  const reelId = match ? match[1] : '';
  const embedUrl = `https://www.instagram.com/reel/${reelId}/embed/?autoplay=0&muted=0`;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasBeenVisible = false;
    // Pause (by reloading iframe) when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          hasBeenVisible = true;
        } else if (hasBeenVisible && entry.intersectionRatio < 0.5) {
          if (iframeRef.current) {
            const currentSrc = iframeRef.current.src;
            iframeRef.current.src = currentSrc;
          }
          hasBeenVisible = false;
        }
      },
      { threshold: [0.5] } // Trigger when crossing 50% visibility
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="group relative h-[750px] w-full min-w-[320px] max-w-[400px] shrink-0 rounded-3xl overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-black transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col snap-center"
    >
      {/* Iframe Container */}
      <div className="flex-grow relative bg-black w-full overflow-hidden">
        {/* We scale and shift the iframe to crop out the Instagram header and footer UI */}
        <iframe 
          ref={iframeRef}
          src={embedUrl}
          className="w-[102%] h-[calc(100%+180px)] absolute top-[-90px] left-[-1%]"
          frameBorder="0"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title={title}
        />
        
        {/* Custom Title Overlay */}
        <div className="absolute top-0 left-0 w-full h-24 z-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none flex items-start p-6">
            <h3 className="text-white font-display font-bold text-2xl drop-shadow-md">{title}</h3>
        </div>
        
        {/* Bottom gradient overlay to hide any remaining IG UI */}
        <div className="absolute bottom-0 left-0 w-full h-24 z-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
