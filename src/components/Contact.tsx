import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-zinc-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">Kontaktieren Sie Mich</h2>
        <p className="text-zinc-400 text-lg mb-12">
          Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Rufen Sie mich direkt an!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a 
            href="tel:+4915733783739" 
            className="flex items-center gap-4 bg-teal-500 hover:bg-teal-400 text-zinc-950 px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
          >
            <Phone size={28} />
            JETZT ANRUFEN
          </a>
          <a 
            href="https://wa.me/4915733783739" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 border border-zinc-700"
          >
            WhatsApp
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-800 pt-16">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-zinc-900 rounded-full text-teal-400">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold">Telefon</h4>
              <p className="text-zinc-400">+49 1573 3783739</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-zinc-900 rounded-full text-teal-400">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold">Standort</h4>
              <p className="text-zinc-400">Deutschland</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-zinc-900 rounded-full text-teal-400">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold">E-Mail</h4>
              <p className="text-zinc-400">Auf Anfrage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
