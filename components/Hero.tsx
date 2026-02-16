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
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-48 overflow-hidden bg-[#FDFBFF]">
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

      {/* Unique Wave Shape Divider */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[160px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
            <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white"
            ></path>
            {/* Mirroring logic implicitly handled by path shape to fill bottom */}
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
            <path 
               d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
               opacity=".5" 
               className="fill-white"
            ></path>
            {/* Main cover */}
            <path 
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                className="fill-white"
                transform="translate(0, 120) scale(1, -1)" 
            ></path>
        </svg>
      </div>
    </section>
  );
};