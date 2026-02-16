import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Video, Phone } from 'lucide-react';

const ChatBubble = ({ text, isUser, delay, inView }: { text: string; isUser: boolean; delay: number; inView: boolean }) => {
  return (
    <div 
      className={`
        max-w-[85%] p-4 rounded-2xl text-sm font-body font-medium shadow-sm mb-3 relative
        transform transition-all duration-700 ease-out
        ${isUser 
          ? 'bg-[#2E0249] text-white ml-auto rounded-br-none' 
          : 'bg-[#E9D5FF] text-black mr-auto rounded-bl-none'}
        ${inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {isUser && <span className="text-[10px] text-gray-300 block mb-1">You</span>}
      {!isUser && <span className="text-[10px] text-gray-600 block mb-1">Satwik</span>}
      {text}
    </div>
  );
};

export const ProblemSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 text-black">
          Don't bail on <br />
          your plans because <br />
          your friends did!
        </h2>
        <p className="text-lg font-body text-gray-600 max-w-2xl">
          We've all been there, plans set, energy high... then the group chat fizzles. We help you still go, meet new people, and keep the hype alive.
        </p>
      </div>

      <div className="flex justify-center w-full" ref={ref}>
        {/* iPhone Frame */}
        <div className="relative w-full max-w-[360px] border-[4px] border-black rounded-[3.5rem] bg-white shadow-neo-lg overflow-hidden h-[600px] flex flex-col">
          
          {/* Status Bar / Dynamic Island */}
          <div className="bg-[#E9D5FF] h-32 w-full pt-4 px-6 flex flex-col shrink-0 border-b border-black/5 relative">
            <div className="absolute top-4 left-0 right-0 mx-auto w-28 h-8 bg-black rounded-full z-20 flex justify-end items-center pr-2">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
            </div>
            
            {/* Header Content */}
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2E0249] flex items-center justify-center text-white font-bold border border-black">
                  
                </div>
                <span className="font-display font-bold text-lg">Friends Forever</span>
              </div>
              <div className="flex gap-4 text-[#2E0249]">
                <Video size={24} strokeWidth={2} />
                <Phone size={22} strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-white p-4 flex flex-col justify-end pb-8">
            <ChatBubble 
              inView={inView} 
              delay={200} 
              isUser={true} 
              text="GUYSSS! Come on yaar this is the 5th time we are canceling 😤" 
            />
            <ChatBubble 
              inView={inView} 
              delay={1000} 
              isUser={false} 
              text="Bro what can I do, the manager is not approving my leave. 🥲" 
            />
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black rounded-full"></div>
        </div>
      </div>
    </section>
  );
};