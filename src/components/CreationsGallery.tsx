import React, { useState } from 'react';
import { SIGNATURE_COCKTAILS } from '../data/content';
import { CocktailCreation, ThemeMode } from '../types';
import { Sparkles, X, Wine, Info, Compass } from 'lucide-react';

interface CreationsGalleryProps {
  theme: ThemeMode;
}

export const CreationsGallery: React.FC<CreationsGalleryProps> = ({ theme }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalCocktail, setActiveModalCocktail] = useState<CocktailCreation | null>(null);

  const isDark = theme === 'dark';

  const filterTabs = [
    { id: 'all', label: 'Toutes les créations' },
    { id: 'floral', label: 'Floraux & Délicats' },
    { id: 'citrus', label: 'Vifs & Botaniques' },
    { id: 'rich', label: 'Boisés & Ambrés' },
    { id: 'no-alcohol', label: 'Sans Alcool Gastronomique' },
  ];

  const filteredCocktails =
    selectedFilter === 'all'
      ? SIGNATURE_COCKTAILS
      : SIGNATURE_COCKTAILS.filter((c) => c.category === selectedFilter);

  return (
    <section id="creations" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
              03. Univers & Signatures
            </div>
            <h2
              className={`font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight ${
                isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
              }`}
            >
              Échantillon de créations d’auteur
            </h2>
            <p className={`mt-3 text-sm lg:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Chaque carte événementielle est conçue sur mesure. Voici un aperçu de mon univers sensoriel et de mes équilibres de prédilection.
            </p>
          </div>

          {/* Interactive Filter Buttons (segmented filter bar complying with skill) */}
          <div
            className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-sm border ${
              isDark ? 'bg-[#181818] border-[#2A2A2A]' : 'bg-[#F9F6F0] border-stone-200'
            }`}
          >
            {filterTabs.map((tab) => {
              const active = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? isDark
                        ? 'bg-[#D4AF37] text-[#121212] font-semibold shadow-sm'
                        : 'bg-[#1A1A1A] text-white font-semibold shadow-sm'
                      : isDark
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cocktails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCocktails.map((cocktail) => (
            <div
              key={cocktail.id}
              onClick={() => setActiveModalCocktail(cocktail)}
              className={`group cursor-pointer rounded-sm border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'bg-[#161616] border-[#282828] hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-black/60'
                  : 'bg-white border-stone-200 hover:border-[#C5A059]/60 hover:shadow-lg'
              }`}
            >
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden bg-stone-900">
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-black/70 backdrop-blur-sm text-[#D4AF37] border border-[#D4AF37]/30">
                  {cocktail.categoryLabel}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-serif-luxury text-xl font-medium tracking-wide">
                    {cocktail.name}
                  </div>
                  <div className="text-xs text-neutral-300 font-light truncate">
                    {cocktail.baseSpirit}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p
                  className={`text-xs leading-relaxed line-clamp-3 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  {cocktail.aromaticProfile}
                </p>

                {/* Footer metadata unboxed */}
                <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-[11px] text-[#D4AF37]">
                  <span className="font-medium truncate">{cocktail.glassware}</span>
                  <span className="underline underline-offset-2 shrink-0">Voir recette & notes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalCocktail && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModalCocktail(null)}
        >
          <div
            className={`relative max-w-xl w-full rounded-sm border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-[#181818] border-[#D4AF37]/40 text-neutral-200' : 'bg-[#FDFBF7] border-[#C5A059]/40 text-neutral-800'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCocktail(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="text-xs uppercase font-mono tracking-wider text-[#D4AF37] mb-1">
              Fiche Dégustation Signature · {activeModalCocktail.categoryLabel}
            </div>
            <h3 className="font-serif-luxury text-3xl font-semibold mb-2">
              {activeModalCocktail.name}
            </h3>
            <p className="text-sm font-medium text-[#D4AF37] mb-6">
              Base spiritueux : {activeModalCocktail.baseSpirit}
            </p>

            {/* Image banner inside modal */}
            {activeModalCocktail.image && (
              <div className="mb-6 rounded-sm overflow-hidden h-48 border border-[#D4AF37]/20">
                <img
                  src={activeModalCocktail.image}
                  alt={activeModalCocktail.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Profile */}
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-1">
                  Architecture Aromatique :
                </span>
                <p className="text-sm leading-relaxed">{activeModalCocktail.aromaticProfile}</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-1">
                  Notes de Dégustation :
                </span>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {activeModalCocktail.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div
                  className={`p-3 rounded-sm border ${
                    isDark ? 'bg-[#141414] border-[#2A2A2A]' : 'bg-[#F9F6F0] border-stone-200'
                  }`}
                >
                  <span className="text-neutral-400 block mb-1">Verrerie Recommandée :</span>
                  <span className="font-medium text-[#D4AF37]">{activeModalCocktail.glassware}</span>
                </div>
                <div
                  className={`p-3 rounded-sm border ${
                    isDark ? 'bg-[#141414] border-[#2A2A2A]' : 'bg-[#F9F6F0] border-stone-200'
                  }`}
                >
                  <span className="text-neutral-400 block mb-1">Garniture & Geste :</span>
                  <span className="font-medium text-[#D4AF37]">{activeModalCocktail.garnish}</span>
                </div>
              </div>

              {/* Story */}
              <div className="p-4 rounded-sm border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-xs italic">
                « {activeModalCocktail.story} »
              </div>
            </div>

            <button
              onClick={() => setActiveModalCocktail(null)}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] text-[#121212] rounded-sm hover:bg-[#E5C158] transition-colors"
            >
              Fermer la fiche
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
