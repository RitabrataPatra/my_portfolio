
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-magenta-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse [animation-delay:2s]"></div>
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent absolute top-1/2 -translate-y-1/2"></div>
            <div className="h-[80%] w-[1px] bg-gradient-to-b from-transparent via-magenta-500 to-transparent absolute left-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      <div className="relative z-10 space-y-8">
        <div className="overflow-hidden">
            <h2 className="text-cyan-400 mono tracking-[0.5em] text-sm uppercase animate-slide-up">
                Initiating System... Ritual Verified
            </h2>
        </div>
        
        <div className="space-y-2">
            <div className="overflow-hidden">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none animate-slide-up [animation-delay:0.2s]">
                  RITABRATA
                </h1>
            </div>
            <div className="overflow-hidden">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-transparent border-t border-b border-cyan-500/30 bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-500 glitch animate-slide-up [animation-delay:0.4s]">
                  PATRA
                </h1>
            </div>
        </div>

        <div className="overflow-hidden">
            <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium mono animate-slide-up [animation-delay:0.6s]">
              Software Engineer // Distributed Systems Expert <br />
              Creating the backbone of the next-gen web.
            </p>
        </div>

        <div className="pt-8 flex flex-wrap justify-center gap-6 animate-slide-up [animation-delay:0.8s]">
          <button className="group relative bg-cyan-600 hover:bg-cyan-500 text-black px-10 py-5 font-black text-xl tracking-tighter transition-all skew-x-[-12deg] hover:skew-x-0 overflow-hidden">
            <span className="relative z-10 uppercase">
              <a href="#projects">Access Projects</a></span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <button className="glass border border-magenta-500 text-magenta-500 px-10 py-5 font-black text-xl tracking-tighter skew-x-[-12deg] hover:skew-x-0 hover:bg-magenta-500 hover:text-white transition-all uppercase">
            <a href="#contact"> Contact</a>
           
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-left opacity-30 hidden md:block">
        <div className="text-[10px] mono uppercase tracking-widest leading-loose">
          Lat: 37.7749<br/>
          Long: -122.4194<br/>
          Core: Quantum-1
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 text-right opacity-30 hidden md:block">
        <div className="text-[10px] mono uppercase tracking-widest leading-loose">
          Version: 4.0.2-Beta<br/>
          Uptime: 99.999%<br/>
          System: Optimal
        </div>
      </div>
    </section>
  );
};

export default Hero;
