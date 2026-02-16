import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Video, Phone, ChevronLeft, MoreVertical } from 'lucide-react';

const ChatBubble = ({ text, isUser, delay, inView }: { text: string; isUser: boolean; delay: number; inView: boolean }) => {
  return (
    <div 
      className={`
        max-w-[85%] p-4 rounded-2xl text-sm font-body font-medium shadow-sm mb-3 relative
        transform transition-all duration-700 ease-out
        ${isUser 
          ? 'bg-[#4C1D95] text-white ml-auto rounded-br-sm' 
          : 'bg-gray-100 border border-gray-200 text-black mr-auto rounded-bl-sm'}
        ${inView 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-95'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {isUser && <span className="text-[10px] text-gray-300 block mb-1 font-bold tracking-wide">YOU</span>}
      {!isUser && <span className="text-[10px] text-gray-500 block mb-1 font-bold tracking-wide">SATWIK</span>}
      {text}
    </div>
  );
};

export const ProblemSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.9] mb-8 text-black tracking-tight">
            DON'T BAIL <br />
            ON YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] drop-shadow-sm">PLANS</span> <br />
            JUST BECAUSE <br />
            THEY DID.
          </h2>
          <p className="text-xl font-body text-gray-600 max-w-lg leading-relaxed">
            We've all been there: plans set, energy high... then the group chat fizzles out. 
            <br /><br />
            <strong className="text-black">PlusOne</strong> helps you go anyway, meet new people, and keep the hype alive.
          </p>
        </div>

        {/* Phone Mockup */}
        <div className="md:w-1/2 flex justify-center md:justify-end" ref={ref}>
          <div className="relative w-full max-w-[340px] border-[4px] border-black rounded-[3rem] bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden h-[640px] flex flex-col transform transition-transform duration-500 hover:-translate-y-2">
            
            {/* Header */}
            <div className="bg-[#F3E8FF] p-6 pb-4 border-b-2 border-black/5 pt-12 relative z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-2xl"></div>

              <div className="flex items-center justify-between mt-4">
                <ChevronLeft size={24} className="text-black" />
                <div className="flex flex-col items-center">
                   <span className="font-display font-bold text-lg leading-none">Friends Forever</span>
                   <span className="text-[10px] text-gray-500 font-body">4 members</span>
                </div>
                <MoreVertical size={24} className="text-black" />
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-white p-5 flex flex-col justify-end pb-8 gap-2 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
              <ChatBubble 
                inView={inView} 
                delay={200} 
                isUser={true} 
                text="GUYSSS! The gig is tomorrow! We still on? 🎸" 
              />
              <ChatBubble 
                inView={inView} 
                delay={800} 
                isUser={false} 
                text="Ah sorry bro, caught up with work deadlines... 😓" 
              />
               <ChatBubble 
                inView={inView} 
                delay={1600} 
                isUser={false} 
                text="Yeah same, won't make it. Have fun though!" 
              />
               <ChatBubble 
                inView={inView} 
                delay={2400} 
                isUser={true} 
                text="Seriously? This is the 3rd time... 😤" 
              />
            </div>
            
            {/* Input Area Mockup */}
            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="flex-1 h-10 rounded-full bg-white border border-gray-200"></div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black rounded-full z-20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};