import React, { useRef, useState, useEffect } from 'react';
import { Eye, TrendingUp, Play, Loader2, AlertCircle } from 'lucide-react';

const ReelCard = ({ 
  platform, 
  title, 
  views, 
  growth, 
  image, 
  videoSrc,
  delay 
}: { 
  platform: string; 
  title: string; 
  views: string; 
  growth: string; 
  image: string; 
  videoSrc?: string;
  delay: string; 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Handle video loading state
  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleVideoError = () => {
    console.warn(`Video not found: ${videoSrc}. Ensure the file exists in public/videos/`);
    setIsLoading(false);
    setHasError(true);
  };

  const handleMouseEnter = () => {
    if (videoRef.current && videoSrc && !hasError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => console.log("Autoplay prevented:", error));
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && videoSrc && !hasError) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    if (videoRef.current && videoSrc && !hasError) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div 
      className="group relative h-[600px] w-full rounded-[2rem] overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-black"
      style={{ animationDelay: delay }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Video Layer - Always rendered, z-0 */}
      {videoSrc && !hasError && (
        <video
          ref={videoRef}
          src={videoSrc}
          className={`absolute inset-0 w-full h-full object-cover z-0`}
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        />
      )}

      {/* Loading Indicator */}
      {isLoading && videoSrc && !hasError && (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gray-900 text-white">
           <Loader2 className="animate-spin" size={32} />
        </div>
      )}

      {/* Static Image Layer - z-10, fades out on play */}
      <div 
        className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-500 ease-in-out bg-black ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
          <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
          
          {/* Play Icon Hint (or Warning if missing) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/40 shadow-xl transition-transform duration-300 group-hover:scale-110">
             {hasError ? (
                <div title="Video file missing in /public/videos/">
                    <AlertCircle size={42} className="text-red-400 fill-red-400/20 ml-1" />
                </div>
             ) : (
                <Play size={42} className="text-white fill-white ml-1" />
             )}
          </div>
      </div>

      {/* Content - z-20, text fades when playing to show full video */}
      <div className={`absolute bottom-0 left-0 w-full p-6 flex flex-col items-start z-20 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          
          <div className="bg-white border-2 border-black text-black px-3 py-1 rounded-md text-[10px] font-display font-bold uppercase tracking-widest mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {platform}
          </div>

          <h3 className="text-white font-display font-bold text-3xl leading-tight mb-2 drop-shadow-lg">
              {title}
          </h3>

          <div className="flex items-center gap-3 w-full pt-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-sm bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                  <Eye size={16} className="text-[#FDE047]" />
                  {views}
              </div>
               <div className="flex items-center gap-1.5 text-[#4ADE80] font-bold text-sm ml-auto bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                  <TrendingUp size={16} />
                  {growth}
              </div>
          </div>
      </div>
      
      {/* Playing state minimal overlay */}
      <div className={`absolute bottom-6 left-6 z-20 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
         <div className="bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20">
            Playing • Sound Off
         </div>
      </div>
    </div>
  );
};

export const ProofSection: React.FC = () => {
  return (
    <section className="bg-[#F3E8FF] pt-24 pb-64 px-4 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-black mb-4">
                THE PROOF IS IN THE <span className="text-[#9333ea]">NUMBERS.</span>
            </h2>
            <p className="text-gray-700 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                We turn complex ideas into viral moments.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
            
            {/* Video 1: Idro Edit */}
            <ReelCard 
                platform="TIKTOK"
                title="The $100 Edit"
                views="2.8M Views"
                growth="+550%"
                image="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2070" 
                videoSrc="/videos/idro.mp4"
                delay="0s"
            />

            {/* Video 2: Kafka */}
            <ReelCard 
                platform="INSTAGRAM"
                title="Kafka: The Mask"
                views="1.5M Views"
                growth="+320%"
                image="https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&q=80&w=2070"
                videoSrc="/videos/kafka.mp4"
                delay="0.1s"
            />

             {/* Video 3: Power */}
             <ReelCard 
                platform="YOUTUBE"
                title="The Nature of Power"
                views="3.2M Views"
                growth="+480%"
                image="https://images.unsplash.com/photo-1555662703-e83c44247545?auto=format&fit=crop&q=80&w=2070"
                videoSrc="/videos/power.mp4"
                delay="0.2s"
            />
        </div>
      </div>

      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
             <path 
                d="M0,120 C320,0 880,0 1200,120 H0 Z" 
                className="fill-white"
            ></path>
        </svg>
      </div>
    </section>
  );
};