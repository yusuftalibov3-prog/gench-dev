
import React from 'react';

const Reference: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-purple-600/10 border border-purple-500/20 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <div className="text-9xl font-black">BYTE</div>
          </div>
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-purple-600 text-white text-xs font-bold uppercase tracking-widest">
              Neler Başardım?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">İstanbul El Ele</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
              "Kendi projelerimi hayata geçirme tutkumla 'İstanbul El Ele' platformunu kurdum. 
              Bu proje, sadece kod yazmayı değil, bir fikri nasıl çalışan bir çözüme dönüştüreceğimi öğretti bana. 
              Şu an incelediğin ByteAkademi sitesi de bu tecrübenin canlı bir kanıtı. Ben başardım, sen de yapabilirsin!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
              <div>
                <div className="font-bold">ByteAkademi Kurucusu</div>
                <div className="text-sm text-gray-500">Full Stack Geliştirici (14 Yaş)</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/istanbul/800/600" 
                alt="İstanbul El Ele Project" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="text-white font-bold">İstanbul El Ele - Sosyal Yardımlaşma Platformu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reference;
