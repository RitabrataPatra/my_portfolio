
import React, { useState, useRef, useEffect } from 'react';
import { chatWithRitabrataAI } from '../services/geminiService';
import { Message } from '../types';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "SYSTEM_ACCESS: GRANTED. Hello agent. I am RP_CORE. Ask me anything about my operational history." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await chatWithRitabrataAI(input, messages);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', text: response || 'FATAL_ERROR: CONNECTION_LOST' }]);
  };

  return (
    <section id="ai-assistant" className="py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(0,242,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <div className="space-y-4">
          <div className="text-cyan-500 mono text-xs tracking-[0.5em] uppercase">Neural_Link</div>
          <h2 className="text-4xl md:text-6xl font-black uppercase">Cognitive <span className="text-magenta-500">Interface</span></h2>
        </div>

        <div className="bg-black border-2 border-cyan-500/30 rounded-lg overflow-hidden flex flex-col h-[700px] shadow-[0_0_50px_rgba(0,242,255,0.1)] relative">
          {/* CRT Scanline effect on terminal */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%] opacity-20"></div>

          <div className="bg-cyan-500/10 p-4 border-b border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="text-[10px] mono text-cyan-400 font-bold uppercase tracking-widest">
                Terminal://RP_CORE_V4
              </div>
            </div>
            <div className="text-[10px] mono text-cyan-400/50 animate-pulse">ENCRYPTION: AES-256-GCM</div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 mono scroll-smooth relative">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className="text-[10px] mb-2 opacity-30 uppercase tracking-widest">
                  {m.role === 'user' ? '> LOCAL_USER' : '> RP_SYSTEM'}
                </div>
                <div className={`max-w-[85%] p-5 text-sm leading-relaxed border ${
                  m.role === 'user' 
                  ? 'border-magenta-500 bg-magenta-500/5 text-magenta-100' 
                  : 'border-cyan-500/30 bg-cyan-500/5 text-cyan-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="text-[10px] mb-2 opacity-30 uppercase tracking-widest"> RP_SYSTEM</div>
                <div className="text-cyan-400 animate-pulse text-sm">Processing command...</div>
              </div>
            )}
          </div>

          <div className="p-8 bg-cyan-500/5 border-t border-cyan-500/30">
            <div className="relative flex items-center">
              <span className="absolute left-4 text-cyan-500 font-bold mono"></span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type command..."
                className="w-full bg-transparent border border-cyan-500/30 rounded-none px-10 py-5 focus:outline-none focus:border-cyan-400 transition-all text-sm text-cyan-100 mono"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="absolute right-4 text-cyan-500 hover:text-cyan-300 transition-colors uppercase text-xs font-bold mono"
              >
                Execute
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
