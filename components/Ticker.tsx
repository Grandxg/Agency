import React, { useEffect, useState } from 'react';
import { getWaitlistCount } from '../services/api';

export const Ticker: React.FC = () => {
  const [count, setCount] = useState(2400);
  const [target, setTarget] = useState(2469);

  useEffect(() => {
    getWaitlistCount().then(setTarget);
  }, []);

  useEffect(() => {
    if (count >= target) return;
    const diff = target - count;
    const step = Math.ceil(diff / 50); 
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev + step >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + step;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [target, count]);

  // Add spaces for ticker effect
  const countStr = count.toLocaleString().replace(/,/g, '');

  return (
    <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-white border-2 border-black rounded-full shadow-neo mb-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
      
      {/* Blinking Green Dot */}
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e] border border-black/10"></span>
      </div>

      <span className="font-display font-bold text-sm tracking-widest uppercase text-black">WAITLIST</span>
      
      {/* Green Number with distinct spacing */}
      <div className="flex items-center gap-1 font-display font-bold text-xl text-[#15803d]">
         {countStr.split('').map((char, i) => (
            <span key={i} className="inline-block w-4 text-center">{char}</span>
         ))}
      </div>
      
      <span className="font-display font-medium text-sm text-gray-500">people joined</span>
    </div>
  );
};