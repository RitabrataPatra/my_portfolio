
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 relative">
      <div className="absolute inset-0 bg-cyan-500/5 -skew-y-3 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                  Core <span className="text-cyan-400">Capabilities</span>
                </h2>
                <div className="h-1 w-24 bg-magenta-500 shadow-[0_0_10px_#ff00ff]"></div>
            </div>
            
            <p className="text-gray-400 text-lg mono">
              Engineered for precision. My tech stack is an evolving ecosystem of performance-first tools.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((skill, i) => (
                <div key={skill.name} className="glass p-5 group hover:border-cyan-500 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[10px] mono text-cyan-500/50">{skill.value}%</div>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500 transition-all duration-1000 group-hover:scale-x-105 origin-left"
                      style={{ width: `${skill.value}%`, transitionDelay: `${i * 100}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="h-[500px] lg:h-[600px] glass rounded-2xl border-2 border-white/5 relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-4 left-4 text-[10px] mono text-cyan-500/30">RADAR_INIT()</div>
                    <div className="absolute bottom-4 right-4 text-[10px] mono text-cyan-500/30">SCANNING_ACTIVE</div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS}>
                    <PolarGrid stroke="#00f2ff33" />
                    <PolarAngleAxis dataKey="name" tick={{ fill: '#00f2ff', fontSize: 10, fontWeight: 'bold' }} />
                    <Radar
                      name="Proficiency"
                      dataKey="value"
                      stroke="#00f2ff"
                      fill="#00f2ff"
                      fillOpacity={0.2}
                      className="transition-all duration-700 hover:fill-opacity-50"
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#000', border: '1px solid #00f2ff', borderRadius: '0', color: '#00f2ff' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
