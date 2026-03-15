import React from 'react';
import { Star, Sparkles, Mail, ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

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
    <footer 
      className="bg-gradient-to-b from-[#2E0249] to-[#11001C] text-white pt-32 pb-12 px-4 relative z-20 overflow-hidden mt-[-60px] md:mt-[-120px]"
      style={{ borderTopLeftRadius: '50% 60px', borderTopRightRadius: '50% 60px' }}
    >
      {/* Decorative Circles */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#4C1D95] rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#8B5CF6] rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Brand Column */}
        <div className="lg:w-1/3">
           <div className="flex flex-col leading-none mb-8 select-none">
            <img src="/footer-logo.svg" alt="GrowthView" className="h-24 w-auto object-contain mb-4" />
          </div>
          <p className="text-white/80 font-body text-base leading-relaxed max-w-sm mb-8">
            Your partner for Organic Marketing, PR, Video Editing, and High-Performance Web & App Development.
          </p>
          <div className="inline-block bg-[#FDE047] text-black font-bold font-display px-4 py-1 rounded-full text-xs uppercase tracking-widest border border-black shadow-[0_0_10px_rgba(253,224,71,0.5),_3px_3px_0px_0px_rgba(0,0,0,1)]">
            Open for Business
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <FooterSectionHeader icon={Star} title="Services" />
            <div className="flex flex-col">
               <FooterLink text="Web Development" />
               <FooterLink text="Custom CRM Software" />
               <FooterLink text="Web Application" />
               <FooterLink text="Video Editing" />
               <FooterLink text="Marketing PR Team" />
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <FooterSectionHeader icon={Sparkles} title="Follow Us" />
            <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-[#FDE047] transition-colors group">
                    <Instagram size={20} className="group-hover:text-black" />
                    Instagram
                </a>
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-[#FDE047] transition-colors group">
                    <Linkedin size={20} className="group-hover:text-black" />
                    LinkedIn
                </a>
                 <a href="#" className="flex items-center gap-3 text-white/80 hover:text-[#FDE047] transition-colors group">
                    <Twitter size={20} className="group-hover:text-black" />
                    Twitter
                </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
             <FooterSectionHeader icon={Mail} title="Get in touch" />
             <div className="flex flex-col gap-3">
               <a href="mailto:srujanmahankar@gmail.com" className="text-sm text-white/60 mb-1 hover:text-[#FDE047] transition-colors">srujanmahankar@gmail.com</a>
               <a href="tel:+918888701750" className="text-sm text-white/60 hover:text-[#FDE047] transition-colors">+91 88887 01750</a>
             </div>
          </div>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-body gap-4">
        <span>© 2026 GrothView Agency.</span>
        <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};