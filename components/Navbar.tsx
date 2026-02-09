
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-8">
      <div className="glass px-10 py-4 rounded-none border border-cyan-500/30 flex items-center gap-16 relative">
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-cyan-500 shadow-[0_0_5px_#00f2ff]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-cyan-500 shadow-[0_0_5px_#00f2ff]"></div>
        
        <div className="text-2xl font-black tracking-tighter neon-text-cyan cursor-pointer glitch">RP.</div>
        
        <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-[0.3em] text-gray-500 mono">
          <a href="#about" className="hover:text-cyan-400 transition-all relative group">
            About
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-all relative group">
            Tech
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-all relative group">
            Archive
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-all relative group">
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </div>
        
        <a href="#ai-assistant" className="mono text-[10px] font-bold border border-cyan-500 px-4 py-2 hover:bg-cyan-500 hover:text-black transition-all uppercase tracking-widest animate-pulse">
          Neural_Link
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
