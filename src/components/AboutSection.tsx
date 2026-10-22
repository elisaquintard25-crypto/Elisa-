import React from 'react';
import { INSTITUTIONS_TIMELINE, PRESTIGE_PILLARS, USER_INFO } from '../data/content';
import { ThemeMode } from '../types';
import { Quote, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  theme: ThemeMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
  return (
    <section id="a-propos" className="py-20 lg:py-28 relative bg-[#F9F6F0] text-black border-y border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-black">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-black mb-3">
            01. Philosophie & Parcours
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-black">
            L’exigence du goût, la rigueur du geste.
          </h2>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Manifesto / User Story */}
          <div className="lg:col-span-7 space-y-6">
            {/* Direct Quote styling */}
            <div className="p-8 lg:p-10 rounded-sm border border-[#D4AF37]/40 bg-white shadow-sm relative text-black">
              <Quote className="w-10 h-10 text-black/25 mb-4" />
              <p className="font-serif-luxury text-xl sm:text-2xl italic leading-relaxed text-black">
                « {USER_INFO.bio} »
              </p>
              <div className="mt-6 pt-6 border-t border-black/10 flex items-center justify-between">
                <div>
                  <div className="font-serif-luxury text-lg font-semibold tracking-wide text-black">
                    Élisa Quintard
                  </div>
                  <div className="text-xs uppercase tracking-wider text-black font-medium">
                    Barmaid & Consultante Spiritueux
                  </div>
                </div>
                <div className="text-xs tracking-widest text-black font-serif-luxury italic">
                  Paris, France
                </div>
              </div>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {PRESTIGE_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 rounded-sm border border-stone-200/90 bg-white shadow-xs text-black"
                >
                  <h3 className="font-serif-luxury text-lg font-semibold mb-2 text-black">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Institutions & Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-sm border border-stone-200 bg-white shadow-sm text-black">
              <h3 className="font-serif-luxury text-2xl font-normal mb-6 text-black">
                Parcours & Institutions
              </h3>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-black/20">
                {INSTITUTIONS_TIMELINE.map((item) => (
                  <div key={item.name} className="relative pl-8">
                    {/* Black dot */}
                    <div className="absolute left-[9px] top-1.5 w-2 h-2 rounded-full bg-black transform -translate-x-1/2 ring-4 ring-black/10" />
                    <div className="text-xs font-semibold tracking-wider uppercase text-black mb-1">
                      {item.year}
                    </div>
                    <div className="text-base font-semibold tracking-tight text-black">
                      {item.name}
                    </div>
                    <div className="text-sm mt-1 leading-relaxed text-black">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credibility card */}
            <div className="p-6 rounded-sm border border-stone-200 bg-white text-black flex items-center gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-sm border border-black/30 flex items-center justify-center shrink-0 text-black bg-stone-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs leading-relaxed text-black">
                <span className="font-semibold text-black block mb-0.5 text-sm font-serif-luxury">
                  Indépendance & Rigueur Professionnelle
                </span>
                Assurance RC Pro événementielle, respect scrupuleux des normes d’hygiène HACCP et adaptabilité logistique totale.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
