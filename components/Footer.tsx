import React from 'react';
import { Star, Sparkles, Mail, ArrowUpRight } from 'lucide-react';

const FooterSectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="inline-flex items-center gap-2 mb-6">
    <div className="bg-[#FDE047] rounded-full p-1.5 text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
      <Icon size={14} strokeWidth={3} />
    </div>
    <span className="text-white font-display font-bold text-lg tracking-wide">{title}</span>
  </div>
);

const FooterLink = ({ text }: { text: string }) => (
  <a href="#" className="group flex items-center justify-between w-full bg-[#4C1D95]/40 border border-white/10 rounded-xl py-3 px-5 text-white/90 font-display font-medium text-sm hover:bg-[#FDE047] hover:text-black hover:border-black transition-all duration-200 mb-3">
    {text}
    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E0249] text-white pt-24 pb-12 px-4 relative z-10 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#4C1D95] rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#8B5CF6] rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Brand Column */}
        <div className="lg:w-1/3">
           <div className="flex flex-col leading-none mb-8 select-none">
            <span className="font-display font-black text-6xl tracking-tighter text-white">PLUS</span>
            <span className="font-display font-black text-6xl tracking-tighter text-white -mt-3">1ONE</span>
          </div>
          <p className="text-white/80 font-body text-base leading-relaxed max-w-sm mb-8">
            Welcoming, fun, and imaginative. A playful space for finding the right companion for real-world experiences.
          </p>
          <div className="inline-block bg-[#FDE047] text-black font-bold font-display px-4 py-1 rounded-full text-xs uppercase tracking-widest border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Beta Access
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <FooterSectionHeader icon={Star} title="Menu" />
            <div className="flex flex-col">
               <FooterLink text="Home" />
               <FooterLink text="About Us" />
               <FooterLink text="Join Waitlist" />
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <FooterSectionHeader icon={Sparkles} title="Social" />
            <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-[#FDE047] transition-colors group">
                    <span className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-[#FDE047] transition-colors"></span>
                    Instagram
                </a>
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-[#FDE047] transition-colors group">
                    <span className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-[#FDE047] transition-colors"></span>
                    Twitter
                </a>
                 <a href="#" className="flex items-center gap-3 text-white/80 hover:text-[#FDE047] transition-colors group">
                    <span className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-[#FDE047] transition-colors"></span>
                    TikTok
                </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
             <FooterSectionHeader icon={Mail} title="Updates" />
             <div className="flex flex-col gap-3">
               <p className="text-xs text-white/60 mb-1">Get early access updates directly.</p>
               <div className="relative">
                <input 
                    type="email" 
                    placeholder="you@email.com"
                    className="w-full pl-4 pr-12 py-3.5 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder-white/30 font-body text-sm outline-none focus:ring-2 focus:ring-[#FDE047] focus:border-transparent transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#FDE047] text-black rounded-lg px-3 hover:bg-white transition-colors flex items-center justify-center">
                    <ArrowUpRight size={18} />
                </button>
               </div>
             </div>
          </div>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-body gap-4">
        <span>© 2026 PlusOne Inc.</span>
        <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};