import React from 'react';

export const Ticker: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-white border-2 border-black rounded-full shadow-neo mb-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
      
      {/* Blinking Green Dot */}
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e] border border-black/10"></span>
      </div>

      <span className="font-display font-bold text-sm tracking-widest uppercase text-black">WAITLIST STATUS</span>
      
      {/* Status Text */}
      <div className="flex items-center gap-1 font-display font-bold text-xl text-[#15803d] uppercase">
         OPEN
      </div>
      
      <span className="font-display font-medium text-sm text-gray-500">Global</span>
    </div>
  );
};