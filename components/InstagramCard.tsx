import React from 'react';

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

  return (
    <div 
      className="group relative h-[750px] w-full min-w-[320px] max-w-[400px] shrink-0 rounded-3xl overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col snap-center"
    >
      {/* Iframe Container */}
      <div className="flex-grow relative bg-black w-full overflow-hidden">
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
      </div>
    </div>
  );
};
