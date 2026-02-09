import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const dot = document.getElementById('custom-cursor-dot');

    let mouseX = 0;
    let mouseY = 0;

    // ✅ Move cursor
    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursor && dot) {
        cursor.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`;
        dot.style.transform = `translate3d(${mouseX - 2}px, ${mouseY - 2}px, 0)`;
      }
    };

    // ✅ Click animation (NO transform override)
    const handleMouseDown = () => {
      cursor?.classList.add('cursor-click');
    };

    const handleMouseUp = () => {
      cursor?.classList.remove('cursor-click');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // ✅ Smooth scroll
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleAnchorClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();

      const targetId = this.getAttribute('href');

      if (targetId) {
        document.querySelector(targetId)?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    anchors.forEach(anchor =>
      anchor.addEventListener('click', handleAnchorClick)
    );

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      anchors.forEach(anchor =>
        anchor.removeEventListener('click', handleAnchorClick)
      );
    };
  }, []);

  return (
    <main className="relative selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <div className="space-y-48">
        <Hero />

        <section
          id="about"
          className="px-6 md:px-20 max-w-6xl mx-auto space-y-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative glass p-2 rounded-full">
                <img
                  src="https://picsum.photos/seed/ritabrata/300/300"
                  alt="Ritabrata Patra"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-black border border-cyan-500 text-cyan-500 px-4 py-1 text-xs mono font-bold tracking-widest uppercase animate-pulse">
                Level 99 Eng
              </div>
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight uppercase">
                Decoding <span className="text-cyan-400">Future</span> <br />
                Encoding{' '}
                <span className="text-magenta-500 neon-text-magenta">
                  Reality
                </span>
                .
              </h2>

              <p className="text-gray-400 text-lg md:text-xl font-medium mono leading-relaxed">
                [STATUS: ONLINE]
                <br />I am a digital architect specializing in high-frequency
                distributed systems and hyper-reactive user interfaces. My
                philosophy: if it's not scalable, it's obsolete.
              </p>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <AiAssistant />
      </div>

      <Footer />
    </main>
  );
};

export default App;
