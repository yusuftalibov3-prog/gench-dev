
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-xl italic">B</div>
              <span className="text-2xl font-bold tracking-tight text-white">ByteAkademi</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Gençlerin potansiyelini keşfetmelerine yardımcı olmak için kurulmuş, modern yazılım eğitim platformu. Kendi dünyanı inşa etmeye bugün başla.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Hızlı Linkler</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Ana Sayfa</a></li>
              <li><a href="#courses" className="hover:text-purple-400 transition-colors">Kurslar</a></li>
              <li><a href="#reference" className="hover:text-purple-400 transition-colors">Başarılar</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sıkça Sorulan Sorular</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Takip Et</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="sr-only">Instagram</span>
                📸
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="sr-only">Discord</span>
                💬
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 ByteAkademi. Tüm hakları saklıdır.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
