
import React from 'react';

interface CourseProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

const CourseCard: React.FC<CourseProps> = ({ title, description, price, image, tags }) => (
  <div className="flex flex-col bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:translate-y-[-8px] transition-all duration-300 group">
    <div className="relative h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-4 left-4 flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold text-purple-300 border border-purple-500/30">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-8 flex-grow leading-relaxed italic">"{description}"</p>
      <div className="flex items-center justify-between mt-auto">
        <div className="text-2xl font-black text-white">
          {price} <span className="text-sm font-normal text-gray-500">TL</span>
        </div>
        <button className="bg-white text-black hover:bg-purple-500 hover:text-white px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95">
          Satın Al
        </button>
      </div>
    </div>
  </div>
);

const Courses: React.FC = () => {
  const courses: CourseProps[] = [
    {
      id: '1',
      title: 'HTML/CSS ile Web Tasarımı',
      description: 'Sıfırdan kendi siteni kur.',
      price: '299',
      image: 'https://picsum.photos/seed/web/800/600',
      tags: ['Başlangıç', 'Tasarım']
    },
    {
      id: '2',
      title: 'Roblox Oyun Geliştirme',
      description: 'Hayalindeki oyunu kodla ve binlerce kişiye oynat.',
      price: '499',
      image: 'https://picsum.photos/seed/roblox/800/600',
      tags: ['Oyun', 'Lua']
    },
    {
      id: '3',
      title: 'Discord Bot Geliştirme',
      description: 'Kendi sunucunu yönetecek akıllı botlar yap.',
      price: '399',
      image: 'https://picsum.photos/seed/discord/800/600',
      tags: ['Bot', 'JavaScript']
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Eğitim Paketlerimiz</h2>
            <p className="text-gray-400 text-lg">Seviyene ve hedeflerine en uygun olanı seç.</p>
          </div>
          <div className="flex gap-2">
            <span className="text-sm text-gray-500">* Tüm kurslarda ömür boyu erişim ve Discord desteği dahildir.</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
