import React from 'react';
import { Button } from './ui/Button';
import { Ticker } from './Ticker';
import { Plane, Guitar, Tent, Palette, Trophy, Coffee, Ticket, Music, Camera, Bike, Utensils, Gamepad, Map, Sun } from 'lucide-react';

const FloatingIcon = ({ Icon, top, left, delay, size = 32, rotate = 0 }: any) => (
  <div 
    className="absolute text-[#D8B4FE] opacity-40 animate-float pointer-events-none select-none z-0"
    style={{ 
      top, 
      left, 
      animationDelay: delay,
      transform: `rotate(${rotate}deg)` 
    }}
  >
    <Icon size={size} strokeWidth={1.5} />
  </div>
);

const BackgroundIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* Left Side Distribution */}
       <FloatingIcon Icon={Plane} top="12%" left="4%" delay="0s" rotate={-15} size={36} />
       <FloatingIcon Icon={Guitar} top="32%" left="10%" delay="2s" rotate={10} size={40} />
       <FloatingIcon Icon={Tent} top="55%" left="5%" delay="1s" rotate={-5} size={34} />
       <FloatingIcon Icon={Camera} top="78%" left="12%" delay="3s" rotate={15} size={38} />
       <FloatingIcon Icon={Coffee} top="15%" left="22%" delay="4s" rotate={20} size={30} />
       <FloatingIcon Icon={Ticket} top="45%" left="18%" delay="1.5s" rotate={-10} size={32} />
       <FloatingIcon Icon={Map} top="90%" left="6%" delay="0.5s" rotate={-20} size={36} />

       {/* Right Side Distribution */}
       <FloatingIcon Icon={Palette} top="18%" left="88%" delay="1s" rotate={10} size={38} />
       <FloatingIcon Icon={Trophy} top="40%" left="92%" delay="3s" rotate={-15} size={36} />
       <FloatingIcon Icon={Music} top="68%" left="85%" delay="2s" rotate={5} size={34} />
       <FloatingIcon Icon={Bike} top="8%" left="78%" delay="0.5s" rotate={-20} size={40} />
       <FloatingIcon Icon={Utensils} top="55%" left="75%" delay="4s" rotate={15} size={32} />
       <FloatingIcon Icon={Gamepad} top="85%" left="90%" delay="2.5s" rotate={-5} size={36} />
       <FloatingIcon Icon={Sun} top="88%" left="70%" delay="1.2s" rotate={10} size={38} />
    </div>
  );
};

export const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden bg-[#FDFBFF]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
      <BackgroundIcons />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F3E8FF]/40 pointer-events-none"></div>

      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center animate-slide-up relative">
        <Ticker />
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter mb-8 text-black drop-shadow-sm">
          No <br className="md:hidden"/>
          More <br />
          Cancelled <br />
          Plans
        </h1>

        <p className="text-lg md:text-2xl font-body text-gray-500 max-w-xl mb-12 leading-relaxed font-medium">
          From treks to cafes to gigs to sports, <br className="hidden md:block" />
          find a buddy for every plan!
        </p>

        <Button size="lg" onClick={scrollToWaitlist} className="px-10 py-5 text-xl rounded-full bg-[#D8B4FE] border-2 border-black shadow-neo hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all">
          Join the waitlist
        </Button>
      </div>
    </section>
  );
};