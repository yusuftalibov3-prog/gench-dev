import React from 'react';

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
    <div className="w-12 h-12 bg-purple-600/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Neden Bir Öğrenciden Öğrenmelisin?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Yazılım dünyasına giriş yaparken profesyonel ama samimi bir rehbere ihtiyacın var.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🤝"
            title="Aynı Dili Konuşuyoruz"
            description="Sıkıcı akademik terimler yok. Senin geçtiğin yollardan yeni geçmiş, senin zorlandığın yerleri bilen bir eğitmen var."
          />
          <FeatureCard 
            icon="⚡"
            title="Sıkıcı Notlar Yok, Proje Var"
            description="Teoriyle vakit kaybetmiyoruz. İlk günden itibaren çalışan, görebileceğin ve paylaşabileceğin gerçek projeler geliştiriyoruz."
          />
          <FeatureCard 
            icon="🚀"
            title="Geleceğe Bugün Başla"
            description="Yazılım sadece bir meslek değil, bir süper güç. Bu gücü erkenden kazanarak akranlarının çok önüne geçebilirsin."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
