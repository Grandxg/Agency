import React, { useRef, useEffect } from 'react';

export const VideoCard = ({ 
  src, 
  title,
}: { 
  src: string; 
  title: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasBeenVisible = false;
    // Pause when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          hasBeenVisible = true;
        } else if (hasBeenVisible && entry.intersectionRatio < 0.5) {
          videoRef.current?.pause();
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
      <div className="flex-grow relative bg-black w-full overflow-hidden">
        <video 
          ref={videoRef}
          src={src}
          className="w-full h-full absolute inset-0 object-cover"
          controls
          playsInline
          loop
          muted
          preload="metadata"
          title={title}
        />
        
        {/* Custom Title Overlay */}
        <div className="absolute top-0 left-0 w-full h-24 z-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none flex items-start p-6">
            <h3 className="text-white font-display font-bold text-2xl drop-shadow-md">{title}</h3>
        </div>
      </div>
    </div>
  );
};
