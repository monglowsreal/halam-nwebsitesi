import React from 'react';

const services = [
  {
    title: 'Standard Reinigung',
    description: 'Die Essenz eines perfekten Zuhauses. Regelmäßige, diskrete Pflege, die Ihre Räume stets in makellosem Zustand hält. Wir widmen uns den Details, damit Sie sich auf das Wesentliche konzentrieren können.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    number: '01'
  },
  {
    title: 'Grundreinigung',
    description: 'Eine kompromisslose Tiefenreinigung. Jeder Winkel, jede Oberfläche wird mit höchster Präzision behandelt. Ideal für den Neuanfang oder den jährlichen Frühlingsputz.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    number: '02'
  },
  {
    title: 'Umzugsreinigung',
    description: 'Verlassen Sie Ihr altes Zuhause mit makelloser Übergabegarantie. Eine intensive Endreinigung, die höchsten Standards von Vermietern und Eigentümern gerecht wird.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop',
    number: '03'
  }
];

export const Services = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-zinc-300 relative overflow-hidden">
      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 md:mb-32">
          <p className="text-[#14b8a6] tracking-[0.2em] text-sm uppercase mb-6 font-medium">Exzellenz in Detail</p>
          <h2 className="text-4xl md:text-7xl font-bold text-white max-w-3xl leading-tight font-playfair text-balance">
            Dienstleistungen auf höchstem Niveau.
          </h2>
        </div>

        <div className="space-y-32 md:space-y-48">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 group`}>
              
              <div className="w-full md:w-3/5 relative">
                {/* Decorative Accent Behind Image */}
                <div className="absolute -inset-4 bg-[#14b8a6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-sm"></div>
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-[16/10]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[0.2]"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="text-[#14b8a6]/40 font-playfair text-6xl md:text-8xl mb-6">{service.number}</span>
                <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 tracking-tight text-balance">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed md:max-w-md">
                  {service.description}
                </p>
                <div className="mt-10 h-[1px] w-0 bg-[#14b8a6]/50 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
