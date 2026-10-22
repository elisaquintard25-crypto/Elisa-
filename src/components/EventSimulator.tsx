import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ThemeMode, SimulationState } from '../types';
import { Calculator, Check, ArrowRight, Sparkles, Sliders, Calendar, Users, Clock } from 'lucide-react';

interface EventSimulatorProps {
  theme: ThemeMode;
  initialServiceId?: string;
  onApplyToQuote: (details: string, serviceTitle: string, guestCount: number) => void;
}

export const EventSimulator: React.FC<EventSimulatorProps> = ({
  theme,
  initialServiceId,
  onApplyToQuote,
}) => {
  const isDark = theme === 'dark';

  const [serviceId, setServiceId] = useState<string>(initialServiceId || SERVICES[0].id);
  const [guestCount, setGuestCount] = useState<number>(40);
  const [durationHours, setDurationHours] = useState<number>(4);
  const [eventType, setEventType] = useState<string>('Soirée Privée / Cocktail');
  const [options, setOptions] = useState({
    customMenu: true,
    crystalIce: true,
    barStation: false,
    mocktailPairing: true,
    masterclassFlight: false,
  });

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const handleOptionToggle = (key: keyof typeof options) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleTransfer = () => {
    const selectedOptionsList: string[] = [];
    if (options.customMenu) selectedOptionsList.push('Carte de cocktails personnalisée selon thème');
    if (options.crystalIce) selectedOptionsList.push('Glace pure taillée à la main');
    if (options.barStation) selectedOptionsList.push('Poste de bar nomade d’apparat');
    if (options.mocktailPairing) selectedOptionsList.push('Volet Mocktails gastronomiques sans alcool');
    if (options.masterclassFlight) selectedOptionsList.push('Sélection flacons rares & fiches dégustation');

    const recapText = `Projet configuré via le simulateur :
- Prestation : ${currentService.title}
- Type d'événement : ${eventType}
- Nombre d'invités estimé : ~${guestCount} personnes
- Durée prévisionnelle : ${durationHours} heures
- Options sélectionnées : ${selectedOptionsList.length > 0 ? selectedOptionsList.join(', ') : 'Formule standard'}`;

    onApplyToQuote(recapText, currentService.title, guestCount);
  };

  return (
    <section id="simulateur" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            03. Simulateur & Configuration
          </div>
          <h2
            className={`font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight ${
              isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
            }`}
          >
            Estimez le format idéal pour votre projet
          </h2>
          <p className={`mt-3 text-sm lg:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Ajustez les paramètres de votre événement ou activation pour générer un récapitulatif détaillé directement transmissible.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-sm border ${
              isDark ? 'bg-[#161616] border-[#2A2A2A]' : 'bg-white border-stone-200 shadow-sm'
            }`}
          >
            {/* Step 1: Prestation */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] block mb-3">
                1. Choisissez la typologie de prestation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setServiceId(s.id)}
                    className={`p-3 text-left border rounded-sm transition-all text-xs ${
                      serviceId === s.id
                        ? isDark
                          ? 'bg-[#222] border-[#D4AF37] text-white font-semibold'
                          : 'bg-[#F9F6F0] border-[#D4AF37] text-stone-900 font-semibold'
                        : isDark
                        ? 'border-[#282828] text-neutral-400 hover:border-[#444]'
                        : 'border-stone-200 text-neutral-600 hover:border-stone-300'
                    }`}
                  >
                    <span className="text-[#D4AF37] font-serif-luxury block text-sm font-semibold mb-0.5">
                      {s.number}
                    </span>
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Event Type */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] block mb-3">
                2. Nature de l'événement
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className={`w-full p-3 rounded-sm border text-sm outline-none transition-colors ${
                  isDark
                    ? 'bg-[#1c1c1c] border-[#333] text-white focus:border-[#D4AF37]'
                    : 'bg-[#FDFBF7] border-stone-300 text-stone-900 focus:border-[#C5A059]'
                }`}
              >
                <option value="Soirée Privée / Anniversaire VIP">Soirée Privée / Anniversaire VIP</option>
                <option value="Mariage de Prestige">Mariage de Prestige</option>
                <option value="Événement Corporate / Cocktail d'Entreprise">Événement Corporate / Cocktail d'Entreprise</option>
                <option value="Activation de Marque / Salon Professionnel (BCB, etc.)">Activation de Marque / Salon Pro (Cocktail Street, BCB...)</option>
                <option value="Lancement de Spiritueux / Pop-up Bar">Lancement de Spiritueux / Pop-up Bar</option>
                <option value="Masterclass Privée / Team Building Dégustation">Masterclass Privée / Team Building Dégustation</option>
              </select>
            </div>

            {/* Step 3: Sliders (Guests & Duration) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Guests */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                    Nombre de convives :
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#D4AF37] tabular-nums">
                    {guestCount} personnes
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>5 (Intimiste)</span>
                  <span>100</span>
                  <span>250+ (Grande réception)</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                    Durée de service estimée :
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#D4AF37] tabular-nums">
                    {durationHours} heures
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="1"
                  value={durationHours}
                  onChange={(e) => setDurationHours(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>2h</span>
                  <span>4h</span>
                  <span>8h (Journée / Longue soirée)</span>
                </div>
              </div>
            </div>

            {/* Step 4: Custom Options */}
            <div>
              <label className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] block mb-3">
                3. Options & Raffinements souhaités
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    key: 'customMenu' as const,
                    label: 'Carte de cocktails personnalisée',
                    desc: 'Création de recettes signatures alignées sur votre thème et vos spiritueux favoris',
                  },
                  {
                    key: 'crystalIce' as const,
                    label: 'Glace pure taillée à la main',
                    desc: 'Blocs cristallins sculptés pour une dilution ultra-lente et une esthétique incomparable',
                  },
                  {
                    key: 'barStation' as const,
                    label: 'Poste de bar mobile autonome',
                    desc: 'Installation complète du bar d’apparat si le lieu ne dispose pas d’infrastructure',
                  },
                  {
                    key: 'mocktailPairing' as const,
                    label: 'Créations sans alcool haute mixologie',
                    desc: 'Hydrolats, cordiaux gastronomiques et distillats botaniques sans compromis',
                  },
                  {
                    key: 'masterclassFlight' as const,
                    label: 'Volée de dégustation flacons d’exception',
                    desc: 'Flacons rares commentés et fiches olfactives imprimées pour les convives',
                  },
                ].map((opt) => (
                  <div
                    key={opt.key}
                    onClick={() => handleOptionToggle(opt.key)}
                    className={`p-3 rounded-sm border cursor-pointer flex items-start gap-3 transition-colors ${
                      options[opt.key]
                        ? isDark
                          ? 'bg-[#1e1e1e] border-[#D4AF37]/50 text-neutral-200'
                          : 'bg-[#F9F6F0] border-[#D4AF37]/60 text-stone-900'
                        : isDark
                        ? 'border-[#262626] text-neutral-500 hover:border-[#333]'
                        : 'border-stone-200 text-neutral-500 hover:border-stone-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-xs border mt-0.5 flex items-center justify-center shrink-0 ${
                        options[opt.key]
                          ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                          : 'border-neutral-500'
                      }`}
                    >
                      {options[opt.key] && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold">{opt.label}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">{opt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specification Recap Card */}
          <div
            className={`lg:col-span-5 p-6 sm:p-8 rounded-sm border sticky top-28 ${
              isDark ? 'bg-[#181818] border-[#D4AF37]/40' : 'bg-[#FDFBF7] border-[#C5A059]/40 shadow-md'
            }`}
          >
            <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#D4AF37] mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Cahier des charges estimatif</span>
            </div>
            <h3
              className={`font-serif-luxury text-2xl font-normal mb-6 ${
                isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
              }`}
            >
              Votre configuration sur-mesure
            </h3>

            <div className="space-y-4 text-xs mb-8">
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-neutral-400">Prestation :</span>
                <span className="font-semibold text-right">{currentService.title}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-neutral-400">Typologie :</span>
                <span className="font-semibold text-right">{eventType}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-neutral-400">Jauge convives :</span>
                <span className="font-mono text-[#D4AF37] font-semibold">{guestCount} personnes</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-neutral-400">Temps de service :</span>
                <span className="font-mono text-[#D4AF37] font-semibold">{durationHours}h de présence active</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-neutral-400">Staffing recommandé :</span>
                <span className="font-semibold text-right">
                  {guestCount <= 50 ? '1 Barmaid dédiée (Élisa)' : 'Élisa + 1 Barback / renfort'}
                </span>
              </div>
            </div>

            {/* Note on bespoke pricing */}
            <div
              className={`p-4 rounded-sm border text-[11px] leading-relaxed mb-6 ${
                isDark
                  ? 'bg-[#141414] border-[#2A2A2A] text-neutral-400'
                  : 'bg-[#F9F6F0] border-stone-200 text-neutral-600'
              }`}
            >
              <strong className="text-[#D4AF37] block mb-1">Approche tarifaire haute couture :</strong>
              Chaque devis est personnalisé en fonction de vos volumes, du lieu (Paris ou province) et des spiritueux sélectionnés. Aucun frais caché.
            </div>

            {/* Apply button */}
            <button
              onClick={handleTransfer}
              className={`w-full py-3.5 text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-all ${
                isDark
                  ? 'bg-[#D4AF37] text-[#121212] hover:bg-[#E5C158]'
                  : 'bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]'
              }`}
            >
              <span>Transférer dans le devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
