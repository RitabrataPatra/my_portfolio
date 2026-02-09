
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="text-magenta-500 mono text-xs tracking-[0.4em] uppercase">Archive_01</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Artifacts & <span className="text-gradient">Logic</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md mono text-sm leading-relaxed border-l-2 border-cyan-500/30 pl-6">
            A selective archive of engineering feats. Each project represents a boundary pushed, a complexity tamed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="group relative overflow-hidden bg-black border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay UI elements */}
                <div className="absolute top-4 left-4 flex gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] mono bg-black/80 border border-white/20 text-white px-2 py-0.5 uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
              
              <div className="p-10 space-y-6 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black italic select-none">0{i+1}</div>
                <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mono text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <a href={project.link} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-6 transition-all text-cyan-500">
                    Decrypt Details <div className="h-[1px] w-8 bg-cyan-500"></div>
                  </a>
                  <div className="text-[10px] text-gray-600 mono">PROTO_ID: {project.id}</div>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500 group-hover:w-4 group-hover:h-4 transition-all"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500 group-hover:w-4 group-hover:h-4 transition-all"></div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center pt-10">
            <button className="text-xs mono uppercase border border-white/10 px-8 py-4 hover:bg-white hover:text-black transition-all tracking-[0.5em]">
                Access Full Log
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
