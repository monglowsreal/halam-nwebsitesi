import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] text-zinc-300 relative overflow-hidden flex flex-col items-center border-t border-zinc-900">
      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[#14b8a6] tracking-[0.2em] text-sm uppercase mb-6 font-medium block">Kontakt</span>
          <h2 className="text-4xl md:text-7xl font-bold font-playfair mb-6 text-white text-balance leading-tight">
            Bereit für perfekte Sauberkeit?
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Diskretion und höchste Qualitätsstandards sind nur einen Anruf entfernt. Lassen Sie uns über Ihre Wünsche sprechen.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-32 w-full sm:w-auto">
          <a 
            href="tel:+4915733783739" 
            className="group relative w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 font-medium text-lg transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#14b8a6] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
            <Phone size={22} className="relative z-10 group-hover:text-white transition-colors duration-500" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 uppercase tracking-widest text-sm">Jetzt Anrufen</span>
          </a>
          
          <a 
            href="https://wa.me/4915733783739" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-4 bg-transparent border border-zinc-700 text-white px-10 py-5 font-medium text-lg transition-all duration-500 hover:border-zinc-400 hover:bg-zinc-900 active:scale-[0.98] uppercase tracking-widest text-sm"
          >
            WhatsApp
          </a>
        </div>
        
        {/* Minimalist Info Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-16 border-t border-zinc-900/50">
          <div className="flex flex-col items-center text-center gap-4 group">
            <Phone size={20} className="text-zinc-600 group-hover:text-[#14b8a6] transition-colors duration-500" />
            <div>
              <p className="text-white font-medium mb-1">Telefon</p>
              <p className="text-zinc-500 text-sm tracking-wide">+49 1573 3783739</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 group">
            <MapPin size={20} className="text-zinc-600 group-hover:text-[#14b8a6] transition-colors duration-500" />
            <div>
              <p className="text-white font-medium mb-1">Standort</p>
              <p className="text-zinc-500 text-sm tracking-wide">Deutschland</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 group">
            <Mail size={20} className="text-zinc-600 group-hover:text-[#14b8a6] transition-colors duration-500" />
            <div>
              <p className="text-white font-medium mb-1">E-Mail</p>
              <p className="text-zinc-500 text-sm tracking-wide">Auf Anfrage</p>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Absolute Legal Footer */}
      <div className="w-full mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 max-w-7xl mx-auto z-10">
        <p>© {new Date().getFullYear()} Sakine Reinigung. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-300 transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Impressum</a>
        </div>
      </div>
    </section>
  );
};
