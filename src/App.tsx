/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { EventSimulator } from './components/EventSimulator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [inquiryDetails, setInquiryDetails] = useState<string>('');
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('Événementiel Privé & Sur Mesure');
  const [estimatedGuests, setEstimatedGuests] = useState<number>(40);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenQuote = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('prestations');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    const simulatorEl = document.getElementById('simulateur');
    if (simulatorEl) {
      simulatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyToQuote = (details: string, serviceTitle: string, guestCount: number) => {
    setInquiryDetails(details);
    setSelectedServiceTitle(serviceTitle);
    setEstimatedGuests(guestCount);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans-luxury ${
        isDark
          ? 'bg-[#121212] text-[#F9F9F6]'
          : 'bg-[#FDFBF7] text-[#1A1A1A]'
      }`}
    >
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenQuote={handleOpenQuote}
      />

      <main>
        <Hero
          theme={theme}
          onExploreServices={handleExploreServices}
          onBookService={handleOpenQuote}
        />

        <AboutSection theme={theme} />

        <ServicesSection
          theme={theme}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        <EventSimulator
          theme={theme}
          onApplyToQuote={handleApplyToQuote}
        />

        <ContactSection
          theme={theme}
          inquiryDetails={inquiryDetails}
          selectedServiceTitle={selectedServiceTitle}
          estimatedGuests={estimatedGuests}
        />
      </main>

      <Footer theme={theme} />
    </div>
  );
}
