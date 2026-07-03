import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-900 text-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-500/20 blur-xl rounded-full"></div>
            <img 
              src="/bg.png" 
              alt="Sakine Sarıyıldız" 
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-zinc-700"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">Über Mich</h2>
          <h3 className="text-xl text-teal-400 font-medium mb-6">"Gewinnen kann jeder. Lerne weiter 💯"</h3>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Hallo, ich bin Sakine Sarıyıldız. Mit jahrelanger Erfahrung und einer Leidenschaft für Perfektion sorge ich dafür, dass Ihr Zuhause oder Büro nicht nur oberflächlich glänzt, sondern wirklich tiefenrein ist. Vertrauen, Diskretion und Zuverlässigkeit stehen bei meiner Arbeit an erster Stelle.
          </p>
          <ul className="space-y-4">
            {[
              'Langjährige Reinigungserfahrung',
              'Zuverlässig & Pünktlich',
              'Beste Reinigungsmittel',
              '100% Kundenzufriedenheit'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-teal-500 w-6 h-6" />
                <span className="text-zinc-300 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
