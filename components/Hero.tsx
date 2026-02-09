import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-sm font-medium animate-pulse">
          🚀 14 Yaşında Bir Yazılımcıdan Öğren
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8">
          Kodlamayı Bir Gençten Öğren,<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Kendi Dünyanı İnşa Et!
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Selam! Ben 14 yaşındayım ve tıpkı senin gibi merak ederek başladım. 
          Sıkıcı ders notları ve karmaşık terimlerle vakit kaybetme. 
          En güncel teknolojileri, genç bir bakış açısıyla ve gerçek projeler yaparak öğreniyoruz. 
          Seninle aynı dili konuşuyoruz!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#courses" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-purple-500/30 active:scale-95">
            Kursları İncele
          </a>
          <a href="#reference" className="w-full sm:w-auto border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all backdrop-blur-sm">
            Projelerimi Gör
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-xl">#JavaScript</div>
          <div className="flex items-center gap-2 font-bold text-xl">#Python</div>
          <div className="flex items-center gap-2 font-bold text-xl">#React</div>
          <div className="flex items-center gap-2 font-bold text-xl">#Lua</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
