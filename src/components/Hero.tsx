import React from 'react';
import { ArrowRight, Award, GlassWater, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { USER_INFO } from '../data/content';
import { ThemeMode } from '../types';
import heroPortrait from '../assets/images/regenerated_image_1792679294022.png';

interface HeroProps {
  theme: ThemeMode;
  onExploreServices: () => void;
  onBookService: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onExploreServices, onBookService }) => {
  const isDark = theme === 'dark';

  return (
    <section className="relative pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle ambient luxury backdrop glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #D4AF37 0%, transparent 70%)'
            : 'radial-gradient(circle, #C5A059 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Editorial Engine */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Liquid Harmony Emblem */}
            <div className="mb-6">
              <img
                src={isDark ? '/assets/aistudio/logo_transparent_white.png' : '/assets/aistudio/logo_transparent.png'}
                alt="Liquid Harmony - Event & Hospitality"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>

            {/* Clean Unboxed Kicker (No Pill Enclosure!) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-5 text-[#D4AF37]">
              <span>Barmaid Freelance</span>
              <span aria-hidden="true" className="opacity-60">·</span>
              <span>Brand Ambassador</span>
              <span aria-hidden="true" className="opacity-60">·</span>
              <span>Brand Consulting</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1
              className={`font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight mb-6 ${
                isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
              }`}
              style={{ textWrap: 'balance' }}
            >
              L’art du cocktail d’exception, entre{' '}
              <span className="italic font-normal text-[#D4AF37]">équilibre</span> et{' '}
              <span className="italic font-normal text-[#D4AF37]">émotion</span>.
            </h1>

            {/* Lead Narrative */}
            <p
              className={`text-base lg:text-lg leading-relaxed mb-8 max-w-2xl font-light ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              Passionnée par l’art de la mixologie depuis mes 18 ans, j’ai façonné mon savoir-faire au coeur des institutions les plus emblématiques de la capitale — de l’énergie créative de <strong className="font-semibold text-[#D4AF37]">Bonnie Bar</strong> à l’excellence du <strong className="font-semibold text-[#D4AF37]">Bar Bisou</strong>, classé parmi les meilleurs au monde. Aujourd’hui indépendante, je mets mon expertise au service de vos réceptions et de vos marques.
            </p>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onBookService}
                className={`px-7 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm inline-flex items-center gap-2.5 shadow-md ${
                  isDark
                    ? 'bg-[#D4AF37] text-[#121212] hover:bg-[#E5C158] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                    : 'bg-[#1A1A1A] text-[#FDFBF7] hover:bg-[#2A2A2A] hover:shadow-lg'
                }`}
              >
                <span>Réserver une prestation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className={`px-6 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors rounded-sm border inline-flex items-center gap-2 ${
                  isDark
                    ? 'border-[#D4AF37]/40 text-[#F9F9F6] hover:bg-[#D4AF37]/10'
                    : 'border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                }`}
              >
                <span>Découvrir mes prestations</span>
              </button>
            </div>

            {/* Quiet Contact Link adjacency */}
            <div className="flex items-center gap-3 text-xs tracking-wide">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
                Contact direct :
              </span>
              <a
                href={`mailto:${USER_INFO.email}`}
                className="font-medium text-[#D4AF37] hover:underline underline-offset-4"
              >
                {USER_INFO.email}
              </a>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
                Paris & Déplacements
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Photo Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Luxury Frame Accents */}
              <div
                className="absolute -inset-2 rounded-sm border border-[#D4AF37]/30 pointer-events-none transform -rotate-1 hidden sm:block"
                aria-hidden="true"
              />
              <div
                className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Main Photo Container */}
              <div
                className={`relative overflow-hidden rounded-sm border shadow-2xl transition-all duration-500 group ${
                  isDark
                    ? 'bg-[#1a1a1a] border-[#D4AF37]/40 shadow-black/80'
                    : 'bg-[#F9F6F0] border-[#D4AF37]/35 shadow-[#1A1A1A]/10'
                }`}
              >
                <img
                  src={heroPortrait}
                  alt="Élisa Quintard - Barmaid Freelance, Brand Ambassador & Mixology Consulting"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top filter brightness-[1.02] contrast-[1.04] group-hover:scale-102 transition-transform duration-700"
                />

                {/* Editorial Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-center">
                  <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#F9F9F6]">
                    hospitalité - brand activation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Prestige Strip Below Split */}
        <div
          className={`mt-16 lg:mt-24 pt-8 pb-4 border-t border-b grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 ${
            isDark
              ? 'border-[#D4AF37]/20 bg-[#161616]/40'
              : 'border-[#D4AF37]/25 bg-[#F9F6F0]/60'
          } rounded-sm px-6`}
        >
          <div className="flex flex-col">
            <span className="font-serif-luxury text-2xl lg:text-3xl font-semibold text-[#D4AF37]">
              Bar Bisou
            </span>
            <span className={`text-xs mt-1 leading-snug ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              World’s 50 Best Bars · Excellence & Créativité
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-serif-luxury text-2xl lg:text-3xl font-semibold text-[#D4AF37]">
              Bonnie Bar
            </span>
            <span className={`text-xs mt-1 leading-snug ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Institution parisienne · Énergie & Rythme
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-serif-luxury text-2xl lg:text-3xl font-semibold text-[#D4AF37]">
              100% Sur-Mesure
            </span>
            <span className={`text-xs mt-1 leading-snug ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Cartes exclusives & Cordiaux artisanaux
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-serif-luxury text-2xl lg:text-3xl font-semibold text-[#D4AF37]">
              Brand Ambassador
            </span>
            <span className={`text-xs mt-1 leading-snug ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Salons pro, Masterclasses & Événements VIP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
