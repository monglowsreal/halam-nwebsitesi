import React from 'react';
import { Sparkles, Home, Box } from 'lucide-react';

const services = [
  {
    title: 'Standard Reinigung',
    description: 'Regelmäßige Unterhaltsreinigung für ein stets gepflegtes und sauberes Zuhause.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    icon: <Home className="w-6 h-6 text-teal-400" />
  },
  {
    title: 'Grundreinigung',
    description: 'Eine tiefgehende, intensive Reinigung, die selbst schwer erreichbare Stellen erstrahlen lässt.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    icon: <Sparkles className="w-6 h-6 text-teal-400" />
  },
  {
    title: 'Umzugsreinigung',
    description: 'Endreinigung bei Ein- oder Auszug mit Abgabegarantie für Vermieter.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop',
    icon: <Box className="w-6 h-6 text-teal-400" />
  }
];

export const Services = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-zinc-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Unsere Dienstleistungen</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Professionelle Reinigungslösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-teal-500/50 transition-colors duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-500/10 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
