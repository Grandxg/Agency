import React from 'react';

export const InstagramCard = ({ 
  url, 
  title,
  growth,
}: { 
  url: string; 
  title: string;
  growth: string;
}) => {
  // Extract the reel ID from the URL
  const match = url.match(/\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
  const reelId = match ? match[1] : '';
  const embedUrl = `https://www.instagram.com/reel/${reelId}/embed/?autoplay=0&muted=0`;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    // 1. Reset (Pause) when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && iframeRef.current) {
          // Reload iframe to stop video
          const currentSrc = iframeRef.current.src;
          iframeRef.current.src = currentSrc;
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
      if ((target.closest('button') || target.closest('a')) && iframeRef.current) {
        const currentSrc = iframeRef.current.src;
        iframeRef.current.src = currentSrc;
      }
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      observer.disconnect();
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="group relative h-[750px] w-full min-w-[320px] max-w-[400px] shrink-0 rounded-3xl overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col snap-center"
    >
      {/* Iframe Container */}
      <div className="flex-grow relative bg-black w-full overflow-hidden">
        <iframe 
          ref={iframeRef}
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
