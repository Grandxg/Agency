import React from 'react';

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
  // YouTube embed URL for Shorts style with enablejsapi=1. Autoplay is 0 so it doesn't play immediately.
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`;

  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // 1. Pause when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          iframeRef.current?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      },
      { threshold: 0.1 } // Trigger when less than 10% is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // 2. Pause when clicking any button or link
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the click target is a button or link (or inside one)
      if (target.closest('button') || target.closest('a')) {
        iframeRef.current?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
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
          className="w-full h-full absolute inset-0 object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
        />
        {/* Overlays to block title/logo clicks but allow center play click if needed */}
        <div className="absolute top-0 left-0 w-full h-24 z-20 bg-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 z-20 bg-transparent pointer-events-none" />
      </div>
    </div>
  );
};
