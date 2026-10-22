import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ThemeMode, ServiceItem } from '../types';
import { ArrowRight, Check, Users, Sparkles, Layers, GlassWater } from 'lucide-react';

interface ServicesSectionProps {
  theme: ThemeMode;
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  theme,
  onSelectServiceForQuote,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const isDark = theme === 'dark';

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="prestations" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            02. Expertises & Prestations
          </div>
          <h2
            className={`font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight ${
              isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
            }`}
          >
            Des solutions sur-mesure pour sublimer vos événements et vos flacons.
          </h2>
          <p className={`mt-4 text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Chaque projet est unique. Sélectionnez une prestation pour découvrir les détails de l’accompagnement.
          </p>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {SERVICES.map((service) => {
            const isCurrent = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-5 text-left border rounded-sm transition-all duration-300 relative ${
                  isCurrent
                    ? isDark
                      ? 'bg-[#181818] border-[#D4AF37] shadow-lg shadow-black/50 text-[#F9F9F6]'
                      : 'bg-white border-[#D4AF37] shadow-md shadow-[#D4AF37]/10 text-[#1A1A1A]'
                    : isDark
                    ? 'bg-[#141414] border-[#262626] text-neutral-400 hover:border-[#D4AF37]/40 hover:text-neutral-200'
                    : 'bg-[#F9F6F0]/80 border-stone-200 text-neutral-600 hover:border-[#C5A059]/40 hover:text-neutral-900'
                }`}
              >
                {/* Active Indicator Line */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#D4AF37]" />
                )}
                <div className="text-xs font-semibold text-[#D4AF37] mb-1 font-serif-luxury tracking-wider">
                  {service.number}
                </div>
                <div className="font-serif-luxury text-lg font-semibold tracking-tight">
                  {service.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div
          className={`rounded-sm border overflow-hidden transition-all duration-300 ${
            isDark
              ? 'bg-[#171717] border-[#2A2A2A]'
              : 'bg-white border-stone-200 shadow-sm'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full bg-stone-900">
              <img
                src={activeService.image}
                alt={activeService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block mb-1">
                  Prestation {activeService.number}
                </span>
                <span className="font-serif-luxury text-xl font-medium">
                  {activeService.tagline}
                </span>
              </div>
            </div>

            {/* Content Details Column */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between space-y-8">
              <div>
                {/* Title */}
                <h3
                  className={`font-serif-luxury text-2xl lg:text-3xl font-normal mb-3 ${
                    isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
                  }`}
                >
                  {activeService.title}
                </h3>

                {/* Pour qui */}
                <div
                  className={`p-4 rounded-sm border mb-6 text-sm flex items-start gap-3 ${
                    isDark
                      ? 'bg-[#1e1e1e] border-[#333] text-neutral-300'
                      : 'bg-[#F9F6F0] border-stone-200 text-neutral-700'
                  }`}
                >
                  <Users className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#D4AF37] font-semibold block mb-0.5 uppercase tracking-wider text-xs">
                      Pour qui :
                    </strong>
                    {activeService.forWhom}
                  </div>
                </div>

                {/* Ce que j'apporte */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37]">
                    Ce que j’apporte au projet :
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.whatIBring.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-dashed border-[#D4AF37]/20">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] mb-3">
                    Livrables & Inclusions :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeService.deliverables.map((deliv, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-sm border ${
                          isDark
                            ? 'bg-[#141414] border-[#2A2A2A] text-neutral-300'
                            : 'bg-[#FDFBF7] border-stone-200 text-neutral-700'
                        }`}
                      >
                        {deliv}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA to simulate/quote */}
              <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#D4AF37] italic font-serif-luxury">
                  {activeService.highlight}
                </span>

                <button
                  onClick={() => onSelectServiceForQuote(activeService.id)}
                  className={`px-6 py-3 text-xs font-semibold tracking-wider uppercase rounded-sm inline-flex items-center gap-2 transition-all ${
                    isDark
                      ? 'bg-[#D4AF37] text-[#121212] hover:bg-[#E5C158]'
                      : 'bg-[#1A1A1A] text-[#FDFBF7] hover:bg-[#2A2A2A]'
                  }`}
                >
                  <span>Configurer cette prestation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Terrain & Brand Ambassador Spotlight with unmodified image */}
        <div
          className={`mt-10 p-6 sm:p-8 rounded-sm border transition-all ${
            isDark ? 'bg-[#181818] border-[#2A2A2A]' : 'bg-white border-stone-200 shadow-sm'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-md w-full max-w-sm bg-stone-900 group">
                <img
                  src="/assets/images/elisa_terrain.jpg"
                  alt="Élisa Quintard - Sur le terrain au bar"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102 block"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs uppercase font-semibold tracking-widest text-[#D4AF37]">
                Sur le terrain · Salons professionnels & Événements
              </div>
              <h3
                className={`font-serif-luxury text-2xl sm:text-3xl font-normal ${
                  isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
                }`}
              >
                Une présence professionnelle pour incarner vos projets
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}
              >
                De la préparation technique en amont jusqu'au coup de feu du service, je vous accompagne avec rigueur, aisance scénique et passion du produit. Disponible pour vos réceptions d'envergure, lancements de marques et tournées de salons professionnels.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Check className="w-3.5 h-3.5" />
                  Posture & Dress code soigné
                </span>
                <span className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Check className="w-3.5 h-3.5" />
                  Sens du contact & storytelling
                </span>
                <span className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Check className="w-3.5 h-3.5" />
                  Gestion de régie de bar autonome
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
