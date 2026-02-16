import React from 'react';
import { Star, Sparkles, Mail } from 'lucide-react';

const FooterSectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="inline-flex items-center gap-2 bg-[#4C1D95] border border-black/20 rounded-full px-4 py-1.5 mb-6 shadow-sm">
    <div className="bg-[#FDE047] rounded-full p-1 text-black">
      <Icon size={12} strokeWidth={3} />
    </div>
    <span className="text-white font-display font-bold text-sm tracking-wide">{title}</span>
  </div>
);

const FooterLink = ({ text }: { text: string }) => (
  <a href="#" className="block w-full bg-[#4C1D95]/50 border border-white/10 rounded-full py-2 px-6 text-center text-white/90 font-display font-medium text-sm hover:bg-[#FDE047] hover:text-black hover:border-black transition-all duration-200 mb-3">
    {text}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E0249] text-white pt-20 pb-8 px-4 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Brand Column */}
        <div className="md:w-1/3">
           <div className="flex flex-col leading-none mb-6">
            <span className="font-display font-black text-4xl tracking-tighter text-white">PLUS</span>
            <span className="font-display font-black text-4xl tracking-tighter text-white -mt-2">1ONE</span>
          </div>
          <p className="text-white/80 font-body text-sm leading-relaxed max-w-xs">
            Welcoming, fun, imaginative a playful space for finding the right companion for real-world experiences.
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <FooterSectionHeader icon={Star} title="Quick Links" />
            <div className="grid grid-cols-2 gap-x-4">
               <FooterLink text="Home" />
               <FooterLink text="About" />
               <FooterLink text="Waitlist" />
               <FooterLink text="Privacy" />
               <FooterLink text="Plus one" />
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <FooterSectionHeader icon={Sparkles} title="Social" />
            <a href="#" className="inline-flex items-center justify-center bg-white text-black border-2 border-black rounded-full py-2 px-6 font-display font-bold text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:transform hover:-translate-y-1 transition-transform">
              Instagram
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
             <FooterSectionHeader icon={Mail} title="Newsletter" />
             <div className="flex flex-col gap-3">
               <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-full border-2 border-black bg-white text-black placeholder-gray-500 font-body text-sm outline-none focus:ring-2 focus:ring-[#FDE047]"
               />
               <button className="w-full bg-[#FDE047] text-black font-display font-bold py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Subscribe
               </button>
             </div>
          </div>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-xs text-white/40 font-body">
        © 2026 PlusOne. All rights reserved.
      </div>
    </footer>
  );
};