import React from 'react';
import { USER_INFO } from '../data/content';
import { ThemeMode } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t transition-colors ${
        isDark ? 'bg-[#0f0f0f] border-[#222] text-neutral-400' : 'bg-[#F9F6F0] border-stone-200 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#D4AF37]/15">
          {/* Brand mark */}
          <div className="flex items-center gap-4">
            <img
              src={isDark ? '/assets/aistudio/logo_transparent_white.png' : '/assets/aistudio/logo_transparent.png'}
              alt="Liquid Harmony"
              className="h-12 w-auto object-contain"
            />
            <div>
              <div
                className={`font-serif-luxury text-xl font-semibold tracking-wider ${
                  isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
                }`}
              >
                LIQUID HARMONY
              </div>
              <p className="text-xs text-[#D4AF37] mt-0.5 font-serif-luxury italic">
                Élisa Quintard · Haute Mixologie & Consulting
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#a-propos" className="hover:text-[#D4AF37] transition-colors">
              À propos
            </a>
            <a href="#prestations" className="hover:text-[#D4AF37] transition-colors">
              Prestations
            </a>
            <a href="#simulateur" className="hover:text-[#D4AF37] transition-colors">
              Simulateur
            </a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className={`p-2.5 rounded-sm border transition-colors flex items-center gap-1.5 text-xs ${
              isDark ? 'border-[#333] hover:border-[#D4AF37] text-neutral-300' : 'border-stone-300 hover:border-[#C5A059] text-stone-700'
            }`}
            aria-label="Retour en haut"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Élisa Quintard. Tous droits réservés. L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Paris</span>
            <span aria-hidden="true">·</span>
            <span>France</span>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${USER_INFO.email}`} className="text-[#D4AF37] hover:underline">
              {USER_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
