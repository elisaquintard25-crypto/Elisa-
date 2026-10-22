import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À propos', href: '#a-propos' },
    { name: 'Prestations', href: '#prestations' },
    { name: 'Simulateur', href: '#simulateur' },
    { name: 'Contact', href: '#contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#121212]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg shadow-black/40'
            : 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-sm shadow-[#1A1A1A]/5'
          : isDark
          ? 'bg-transparent border-b border-[#D4AF37]/10'
          : 'bg-transparent border-b border-[#D4AF37]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-22 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo & Wordmark */}
        <a
          href="#"
          className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group py-1"
        >
          <img
            src={isDark ? '/assets/aistudio/logo_transparent_white.png' : '/assets/aistudio/logo_transparent.png'}
            alt="Liquid Harmony - Event & Hospitality"
            className="h-12 sm:h-14 lg:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span
              className={`font-serif-luxury text-xl sm:text-2xl tracking-wider font-semibold leading-none transition-colors ${
                isDark ? 'text-[#F9F9F6] group-hover:text-[#D4AF37]' : 'text-[#1A1A1A] group-hover:text-[#C5A059]'
              }`}
            >
              ÉLISA QUINTARD
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#D4AF37] mt-1 font-sans">
              Liquid Harmony
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`whitespace-nowrap shrink-0 transition-colors duration-200 relative group py-1 ${
                isDark
                  ? 'text-neutral-300 hover:text-[#D4AF37]'
                  : 'text-neutral-700 hover:text-[#C5A059]'
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Passer en thème Crème Élégance' : 'Passer en thème Noir Nocturne'}
            title={isDark ? 'Thème Crème Élégance' : 'Thème Noir Nocturne'}
            className={`p-2 rounded-md transition-colors border ${
              isDark
                ? 'border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10'
                : 'border-[#C5A059]/40 text-[#1A1A1A] hover:bg-[#C5A059]/10'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenQuote}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm whitespace-nowrap shrink-0 ${
              isDark
                ? 'bg-[#D4AF37] text-[#121212] hover:bg-[#E5C158] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                : 'bg-[#1A1A1A] text-[#FDFBF7] hover:bg-[#2A2A2A] hover:shadow-md'
            }`}
          >
            <span>Demander un devis</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md border ${
              isDark ? 'border-[#D4AF37]/30 text-[#F9F9F6]' : 'border-neutral-300 text-[#1A1A1A]'
            }`}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-6 py-6 transition-all ${
            isDark
              ? 'bg-[#121212] border-[#D4AF37]/20 text-neutral-200'
              : 'bg-[#FDFBF7] border-[#D4AF37]/25 text-neutral-800'
          }`}
        >
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3 bg-[#D4AF37] text-[#121212] text-xs font-semibold uppercase tracking-wider rounded-sm"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
