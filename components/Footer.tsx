
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-6 max-w-md">
          <div className="text-2xl font-black tracking-tighter">RP.</div>
          <p className="text-gray-400 leading-relaxed">
            Building the future of software with precision and creativity. Available for high-impact collaborations and architectural consultations.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'GitHub', 'LinkedIn', 'Instagram'].map(platform => (
              <a key={platform} href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors">
                {platform}
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Navigation</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Contact</div>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">ritabrata@patra.dev</li>
              <li className="text-gray-400">San Francisco, CA</li>
            </ul>
          </div>
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Newsletter</div>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 w-full" />
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-20 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 gap-4">
        <div>© 2024 Ritabrata Patra. All rights reserved. Built with Gemini 3.0.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
