import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4 border-b border-purple-500/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-xl italic">B</div>
          <span className="text-xl font-bold tracking-tight text-white">ByteAkademi</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-purple-400 transition-colors">Ana Sayfa</a>
          <a href="#features" className="hover:text-purple-400 transition-colors">Neden Biz?</a>
          <a href="#courses" className="hover:text-purple-400 transition-colors">Kurslar</a>
          <a href="#reference" className="hover:text-purple-400 transition-colors">Başarılarımız</a>
        </div>

        <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-purple-500/20 active:scale-95">
          Eğitime Başla
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
