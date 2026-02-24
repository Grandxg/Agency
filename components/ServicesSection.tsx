import React from 'react';
import { Megaphone, Code, Scissors, Newspaper, ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group relative bg-white border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
      
      {/* Background Accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`}></div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 bg-${color}-100 border-2 border-black rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
          <Icon size={28} className="text-black" />
        </div>
        
        <h3 className="text-2xl font-display font-black mb-3 uppercase tracking-tight">{title}</h3>
        <p className="text-gray-600 font-body text-base leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      <button onClick={scrollToContact} className="relative z-10 flex items-center gap-2 font-bold text-sm border-b-2 border-transparent group-hover:border-black w-fit pb-0.5 transition-all cursor-pointer">
        LEARN MORE <ArrowUpRight size={16} />
      </button>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white relative overflow-visible z-20">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black text-black mb-6">
            WE DON'T JUST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6]">POST.</span> WE BUILD.
          </h2>
          <p className="text-xl font-body text-gray-600 max-w-2xl mx-auto">
            A full-stack growth agency. From the first line of code to the final viral edit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <ServiceCard 
            icon={Megaphone}
            title="Organic Marketing"
            description="Data-driven content strategies that build real communities. We don't guess; we execute based on what works."
            color="purple"
          />

          <ServiceCard 
            icon={Code}
            title="Web & App Dev"
            description="Custom CRMs, SaaS platforms, and high-converting landing pages. Built for speed, scale, and sales."
            color="green"
          />

          <ServiceCard 
            icon={Scissors}
            title="Video Editing"
            description="High-retention editing styles (Hormozi, Iman Gadzhi, etc.) designed to maximize watch time and engagement."
            color="yellow"
          />

          <ServiceCard 
            icon={Newspaper}
            title="PR & Branding"
            description="Authority building through strategic press placement and cohesive brand identity design."
            color="blue"
          />

        </div>
      </div>
    </section>
  );
};
