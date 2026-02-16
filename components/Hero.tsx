import React from 'react';
import { Button } from './ui/Button';
import { Ticker } from './Ticker';
import { Plane, Guitar, Palette, Ticket, Bike, Gamepad, Map, Music, Coffee, Sun } from 'lucide-react';

const GiantIcon = ({ Icon, top, left, right, bottom, rotate, delay, size = 180 }: any) => (
  <div 
    className="absolute text-[#E9D5FF] opacity-30 animate-float pointer-events-none select-none z-0 mix-blend-multiply"
    style={{ 
      top, left, right, bottom, 
      transform: `rotate(${rotate}deg)`,
      animationDelay: delay 
    }}
  >
    <Icon strokeWidth={1.2} size={size} />
  </div>
);

const BackgroundIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* Abstract composition of giant icons */}
       <GiantIcon Icon={Plane} top="-5%" left="-5%" rotate={15} delay="0s" size={280} />
       <GiantIcon Icon={Guitar} top="15%" right="-8%" rotate={-15} delay="2s" size={300} />
       
       <GiantIcon Icon={Ticket} bottom="10%" left="-5%" rotate={-20} delay="1s" size={240} />
       <GiantIcon Icon={Bike} bottom="-5%" right="10%" rotate={10} delay="3s" size={260} />
       
       <GiantIcon Icon={Coffee} top="40%" left="10%" rotate={-10} delay="4s" size={120} />
       <GiantIcon Icon={Palette} top="25%" right="15%" rotate={20} delay="1.5s" size={140} />
       
       <GiantIcon Icon={Map} bottom="25%" left="20%" rotate={-5} delay="2.5s" size={100} />
       <GiantIcon Icon={Sun} top="10%" left="40%" rotate={0} delay="5s" size={80} />
    </div>
  );
};

export const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 overflow-hidden bg-[#FDFBFF]">
      {/* Subtle Noise Texture overlay */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-overlay"></div>
      
      <BackgroundIcons />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F3E8FF]/60 pointer-events-none"></div>

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center animate-slide-up relative">
        <Ticker />
        
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-display font-black leading-[0.85] tracking-tighter mb-10 text-black drop-shadow-sm select-none mix-blend-darken">
          NO MORE <br />
          CANCELLED <br />
          PLANS
        </h1>

        <div className="relative bg-white/80 backdrop-blur-sm px-8 py-6 rounded-3xl border-2 border-black/5 shadow-sm mb-12 max-w-2xl">
          <p className="text-xl md:text-2xl font-body text-gray-800 font-medium leading-relaxed">
            From treks to cafes to gigs to sports, <br className="hidden md:block" />
            <span className="text-[#9333ea] font-bold">find a buddy</span> for every plan!
          </p>
        </div>

        <Button 
          size="lg" 
          onClick={scrollToWaitlist} 
          className="px-12 py-6 text-2xl rounded-full bg-[#D8B4FE] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all"
        >
          Join the waitlist
        </Button>
      </div>
    </section>
  );
};