import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-zinc-300 relative overflow-hidden">
      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32 relative z-10">
        
        {/* Left Side: Editorial Image */}
        <div className="w-full md:w-5/12 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#14b8a6]/10 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <img 
              src="/bg.png" 
              alt="Sakine Sarıyıldız" 
              className="w-full h-full object-cover filter grayscale-[0.2] contrast-125 transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
            {/* Inner elegant border */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none transition-transform duration-700 group-hover:scale-[0.98]"></div>
          </div>
        </div>

        {/* Right Side: Typography & Content */}
        <div className="w-full md:w-7/12 flex flex-col">
          <span className="text-[#14b8a6] tracking-[0.2em] text-sm uppercase mb-6 font-medium">Über Mich</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-playfair leading-tight text-balance">
            "Gewinnen kann jeder.<br />
            <span className="italic font-light text-zinc-400">Lerne weiter 💯</span>"
          </h2>
          
          <div className="pl-6 md:pl-10 border-l border-[#14b8a6]/30 mb-12">
            <p className="text-zinc-400 text-lg leading-relaxed md:max-w-2xl text-pretty">
              Hallo, ich bin Sakine Sarıyıldız. Mit jahrelanger Erfahrung und einer unerschütterlichen Leidenschaft für Perfektion sorge ich dafür, dass Ihr Zuhause oder Büro nicht nur oberflächlich glänzt, sondern wirklich tiefenrein ist. Vertrauen, Diskretion und Zuverlässigkeit stehen bei meiner Arbeit an erster Stelle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:max-w-2xl">
            {[
              'Langjährige Erfahrung',
              'Absolute Diskretion',
              'Premium Reinigungsmittel',
              'Höchste Präzision'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group cursor-default">
                <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:border-[#14b8a6]/50 transition-colors duration-500">
                  <CheckCircle2 className="text-[#14b8a6] w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-zinc-300 text-base font-medium group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
