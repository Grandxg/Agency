import React, { useRef, useEffect } from 'react';

export const YouTubeCard = ({ 
  url, 
  title,
}: { 
  url: string; 
  title: string;
}) => {
  // Extract the video ID from the URL
  const match = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  const videoId = match ? match[1] : '';
  
  // YouTube embed URL with controls=0 to hide the YouTube UI player controls
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=0&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasBeenVisible = false;
    // Pause when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          hasBeenVisible = true;
        } else if (hasBeenVisible && entry.intersectionRatio < 0.5) {
          iframeRef.current?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
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
        <iframe 
          ref={iframeRef}
          src={embedUrl}
          className="w-full h-full absolute inset-0 object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
        />
        {/* Top overlay to hide any remaining YouTube title text that modestbranding misses */}
        <div className="absolute top-0 left-0 w-full h-24 z-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none flex items-start p-6">
            <h3 className="text-white font-display font-bold text-2xl drop-shadow-md">{title}</h3>
        </div>
        {/* Bottom overlay to hide the YouTube logo */}
        <div className="absolute bottom-0 right-0 w-full h-24 z-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
