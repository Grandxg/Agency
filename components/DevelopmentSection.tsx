import React from 'react';
import { ArrowUpRight, Code, Database } from 'lucide-react';

const ProjectCard = ({ title, description, url, image, tags }: { title: string, description: string, url: string, image: string, tags: string[] }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="group relative block bg-white rounded-3xl border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[0_0_20px_rgba(168,85,247,0.3),_12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
    <div className="aspect-video w-full overflow-hidden border-b-2 border-black relative">
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4 z-20 bg-white border-2 border-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
        <ArrowUpRight size={20} className="text-black" />
      </div>
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-[#F3E8FF] border border-black rounded-full text-xs font-bold font-mono uppercase tracking-wide">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-display font-black mb-2 leading-tight group-hover:text-[#7C3AED] transition-colors">{title}</h3>
      <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">{description}</p>
      <div className="font-bold text-sm underline decoration-2 underline-offset-4 decoration-[#D8B4FE] group-hover:decoration-[#7C3AED] transition-all">
        View Live Project
      </div>
    </div>
  </a>
);

export const DevelopmentSection: React.FC = () => {
  return (
    <section 
      id="development-section" 
      className="pt-32 pb-32 md:pb-48 px-4 bg-white relative overflow-hidden z-20 mt-[-60px] md:mt-[-120px]"
      style={{ borderTopLeftRadius: '50% 60px', borderTopRightRadius: '50% 60px' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-4">
              CUSTOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6]">DEV.</span>
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-xl">
              High-performance web applications built for scale. From CRMs to real-time communication tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ProjectCard 
            title="Real Estate CRM"
            description="A comprehensive Customer Relationship Management system tailored for real estate professionals. Features lead tracking, property management, and automated follow-ups."
            url="https://rpmlp.vercel.app"
            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            tags={['React', 'CRM', 'Dashboard', 'Real Estate']}
          />
          
          <ProjectCard 
            title="Random Video Call App"
            description="A real-time video communication platform connecting users randomly. Built with WebRTC for low-latency streaming and seamless peer-to-peer connection."
            url="https://widely-nu.vercel.app"
            image="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            tags={['WebRTC', 'Video Streaming', 'Social', 'Real-time']}
          />
        </div>
      </div>
    </section>
  );
};
