import React, { useRef, useState } from 'react';
import { Play, Loader2, AlertCircle, Instagram, Heart, MessageCircle } from 'lucide-react';

const ShowcaseCard = ({ 
  title, 
  likes, 
  comments, 
  image, 
  videoSrc,
  delay 
}: { 
  title: string; 
  likes: string; 
  comments: string; 
  image: string; 
  videoSrc?: string;
  delay: string; 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleMouseEnter = () => {
    if (videoRef.current && videoSrc && !hasError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {}); // Ignore autoplay errors
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
    // Mobile support: Tap to toggle play
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
      className="group relative h-[600px] w-full rounded-3xl overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-black"
      style={{ animationDelay: delay }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Video Layer */}
      {videoSrc && !hasError && (
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover z-0"
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        />
      )}

      {/* Loading */}
      {isLoading && videoSrc && !hasError && (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gray-900 text-white">
           <Loader2 className="animate-spin" size={24} />
        </div>
      )}

      {/* Cover Image */}
      <div 
        className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-500 ease-in-out bg-black ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
          <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30 shadow-lg transition-transform duration-300 group-hover:scale-110">
             {hasError ? <AlertCircle className="text-red-400" /> : <Play size={32} className="text-white fill-white ml-1" />}
          </div>
      </div>

      {/* Overlay Content */}
      <div className={`absolute bottom-0 left-0 w-full p-6 z-20 pointer-events-none transition-all duration-300 ${isPlaying ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="flex items-center gap-2 mb-2 text-[#FDE047]">
            <Instagram size={18} />
            <span className="font-display font-bold text-xs tracking-widest uppercase">Instagram Reel</span>
          </div>
          <h3 className="text-white font-display font-bold text-3xl leading-tight mb-3 drop-shadow-md">
              {title}
          </h3>
          <div className="flex items-center gap-4 text-white/90 font-medium text-sm">
             <div className="flex items-center gap-1.5"><Heart size={16} className="fill-white/20" /> {likes}</div>
             <div className="flex items-center gap-1.5"><MessageCircle size={16} className="fill-white/20" /> {comments}</div>
          </div>
      </div>
    </div>
  );
};

export const ReelsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#FDFBFF] relative border-t-2 border-black/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
            <div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-4">
                    RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6]">EDITS.</span>
                </h2>
                <p className="text-gray-600 font-body text-lg max-w-xl">
                    A curated selection of high-retention reels designed to stop the scroll.
                </p>
            </div>
            <div className="hidden md:block mb-2">
                <a href="#contact-form" className="font-display font-bold text-sm border-b-2 border-black hover:text-[#9333ea] hover:border-[#9333ea] transition-colors pb-0.5">
                    VIEW ALL PROJECTS
                </a>
            </div>
        </div>

        {/* Updated Grid to 3 columns to fit the provided videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Reel 1: Idro */}
            <ShowcaseCard 
                title="The $100 Edit"
                likes="45.2K"
                comments="892"
                image="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2070"
                videoSrc="/videos/idro.mp4"
                delay="0s"
            />
            
            {/* Reel 2: Kafka */}
            <ShowcaseCard 
                title="Kafka: The Mask"
                likes="32.1K"
                comments="654"
                image="https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&q=80&w=2070"
                videoSrc="/videos/kafka.mp4"
                delay="0.1s"
            />

            {/* Reel 3: Power */}
            <ShowcaseCard 
                title="The Nature of Power"
                likes="89.5K"
                comments="2.1K"
                image="https://images.unsplash.com/photo-1555662703-e83c44247545?auto=format&fit=crop&q=80&w=2070"
                videoSrc="/videos/power.mp4"
                delay="0.2s"
            />
        </div>
        
        <div className="md:hidden mt-12 text-center">
            <a href="#contact-form" className="font-display font-bold text-sm border-b-2 border-black pb-0.5">
                VIEW ALL PROJECTS
            </a>
        </div>

      </div>
    </section>
  );
};