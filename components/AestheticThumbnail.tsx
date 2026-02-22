import React from 'react';
import { Play } from 'lucide-react';

export type ThumbnailVariant = 'purple-haze' | 'cyber-grid' | 'neo-pop' | 'soft-mesh' | 'dark-matter' | 'retro-wave';

export const AestheticThumbnail = ({ variant, title }: { variant: ThumbnailVariant, title: string }) => {
  
  const renderBackground = () => {
    switch (variant) {
      case 'purple-haze':
        return (
          <div className="w-full h-full bg-[#2E0249] relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-[#4C1D95] via-[#2E0249] to-black opacity-100" />
            <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-[#FDE047] rounded-full blur-[100px] opacity-20 mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-[#8B5CF6] rounded-full blur-[120px] opacity-30 mix-blend-screen" />
          </div>
        );
      case 'cyber-grid':
        return (
          <div className="w-full h-full bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4C1D9520_1px,transparent_1px),linear-gradient(to_bottom,#4C1D9520_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,transparent_0%,#000_70%)]" />
          </div>
        );
      case 'neo-pop':
        return (
          <div className="w-full h-full bg-[#FDE047] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#000_10%,transparent_10.5%)] bg-[size:40px_40px] opacity-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2E0249] rounded-full blur-3xl opacity-20" />
            <div className="absolute top-10 right-10 w-32 h-32 border-8 border-black rounded-full opacity-10" />
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-black rotate-45 opacity-10" />
          </div>
        );
      case 'soft-mesh':
        return (
          <div className="w-full h-full bg-white relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-[#E9D5FF] via-[#F3E8FF] to-white" />
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,#D8B4FE_0%,transparent_50%)] opacity-60" />
             <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,#FDE047_0%,transparent_50%)] opacity-40" />
          </div>
        );
      case 'dark-matter':
        return (
          <div className="w-full h-full bg-[#0F0F0F] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-[#2E0249]/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-[80px] opacity-10" />
          </div>
        );
      case 'retro-wave':
        return (
           <div className="w-full h-full bg-[#1a1a2e] relative overflow-hidden flex flex-col items-center justify-end">
              <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#16213e] to-[#0f3460]" />
              <div className="w-full h-1/2 bg-gradient-to-t from-[#e94560]/20 to-transparent relative z-10 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-x-4 [perspective:500px] [transform-style:preserve-3d]">
                 {/* Grid lines simulation */}
                 <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#e9456040_1px,transparent_1px)] bg-[size:100%_40px] [transform:rotateX(60deg)_scale(2)] origin-bottom" />
              </div>
              <div className="absolute top-[20%] w-32 h-32 rounded-full bg-gradient-to-t from-[#fcd34d] to-[#fbbf24] blur-md shadow-[0_0_40px_#fbbf24]" />
           </div>
        );
      default:
        return <div className="w-full h-full bg-gray-900" />;
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      {renderBackground()}
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Play size={32} className="text-white fill-white ml-1" />
        </div>
        
        <h3 className="font-display font-black text-3xl text-white text-center uppercase tracking-tighter leading-none drop-shadow-lg max-w-[80%]">
          {title}
        </h3>
        
        <div className="mt-4 h-1 w-12 bg-[#FDE047] rounded-full" />
      </div>
    </div>
  );
};
