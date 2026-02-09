
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import Reference from './components/Reference';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-purple-200">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <Navbar isScrolled={isScrolled} />
        <main>
          <Hero />
          <section id="features">
            <Features />
          </section>
          <section id="courses">
            <Courses />
          </section>
          <section id="reference">
            <Reference />
          </section>
        </main>
        <Footer />
      </div>

      <GeminiChat />
    </div>
  );
};

export default App;
