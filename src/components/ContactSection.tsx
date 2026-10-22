import React, { useState, useEffect } from 'react';
import { USER_INFO, SERVICES } from '../data/content';
import { ThemeMode } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, Clock, Calendar, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  theme: ThemeMode;
  inquiryDetails: string;
  selectedServiceTitle: string;
  estimatedGuests: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  theme,
  inquiryDetails,
  selectedServiceTitle,
  estimatedGuests,
}) => {
  const isDark = theme === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState(selectedServiceTitle || SERVICES[0].title);
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update when transferred from simulator
  useEffect(() => {
    if (inquiryDetails) {
      setMessage((prev) => (prev ? `${prev}\n\n${inquiryDetails}` : inquiryDetails));
    }
  }, [inquiryDetails]);

  useEffect(() => {
    if (selectedServiceTitle) {
      setService(selectedServiceTitle);
    }
  }, [selectedServiceTitle]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Veuillez renseigner au minimum votre nom et votre adresse email.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Demande de Devis Mixologie - ${name || 'Nouveau Projet'}`);
    const body = encodeURIComponent(
      `Nom/Société: ${name}
Email: ${email}
Téléphone: ${phone}
Prestation: ${service}
Date souhaitée: ${date || 'À définir'}
Lieu: ${location || 'Paris / IDF'}

Détails du projet:
${message}`
    );
    return `mailto:${USER_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            04. Contact & Réservations
          </div>
          <h2
            className={`font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight ${
              isDark ? 'text-[#F9F9F6]' : 'text-[#1A1A1A]'
            }`}
          >
            Donnons vie à votre projet d’exception.
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Que ce soit pour une soirée privée intimiste, un mariage prestigieux ou une activation de marque d’envergure, je réponds sous 24h avec une proposition sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div
              className={`p-8 rounded-sm border ${
                isDark ? 'bg-[#181818] border-[#2A2A2A]' : 'bg-[#F9F6F0] border-stone-200'
              }`}
            >
              <h3 className="font-serif-luxury text-2xl font-normal mb-6 text-[#D4AF37]">
                Coordonnées Directes
              </h3>

              <div className="space-y-6 text-sm">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37] bg-[#D4AF37]/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-0.5">
                      Email professionnel
                    </span>
                    <a
                      href={`mailto:${USER_INFO.email}`}
                      className="font-medium hover:text-[#D4AF37] transition-colors break-all"
                    >
                      {USER_INFO.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="mt-1 flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Adresse copiée !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copier l’adresse</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37] bg-[#D4AF37]/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-0.5">
                      Zone d’intervention
                    </span>
                    <div className="font-medium">
                      Paris, Île-de-France & Déplacements
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Disponible en France et à l’international sur demande
                    </div>
                  </div>
                </div>

                {/* Responsiveness Notice */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37] bg-[#D4AF37]/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-0.5">
                      Délai de réponse
                    </span>
                    <div className="font-medium">Sous 24 heures ouvrées</div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Devis clair, transparent et sans engagement
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Mailto shortcut button */}
            <a
              href={`mailto:${USER_INFO.email}?subject=Demande de prestation mixologie`}
              className={`p-5 rounded-sm border block text-center transition-colors text-xs font-semibold uppercase tracking-wider ${
                isDark
                  ? 'border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10'
                  : 'border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
              }`}
            >
              Envoyer directement un email classique
            </a>
          </div>

          {/* Right Form Column */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 rounded-sm border ${
              isDark ? 'bg-[#181818] border-[#2A2A2A]' : 'bg-white border-stone-200 shadow-sm'
            }`}
          >
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-3xl font-semibold">
                  Votre demande a été préparée avec succès
                </h3>
                <p className="text-sm max-w-md mx-auto leading-relaxed text-neutral-400">
                  Merci <strong className="text-white">{name}</strong>. Afin d’assurer une transmission directe sans risque de filtre anti-spam, vous pouvez ouvrir votre messagerie habituelle en un clic ou réinitialiser le formulaire.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={getMailtoLink()}
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#D4AF37] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#E5C158] transition-colors"
                  >
                    Ouvrir mon application email
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 border border-neutral-600 text-xs font-medium uppercase tracking-wider rounded-sm hover:bg-neutral-800 transition-colors"
                  >
                    Nouvelle demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold block mb-2 text-neutral-400">
                      Nom / Prénom ou Société *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Alexandre de Montmartre / Agence Vesper"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full p-3 rounded-sm border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-[#141414] border-[#333] text-white focus:border-[#D4AF37]'
                          : 'bg-[#FDFBF7] border-stone-300 text-stone-900 focus:border-[#C5A059]'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold block mb-2 text-neutral-400">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="votre-email@domaine.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full p-3 rounded-sm border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-[#141414] border-[#333] text-white focus:border-[#D4AF37]'
                          : 'bg-[#FDFBF7] border-stone-300 text-stone-900 focus:border-[#C5A059]'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold block mb-2 text-neutral-400">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+33 6 00 00 00 00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full p-3 rounded-sm border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-[#141414] border-[#333] text-white focus:border-[#D4AF37]'
                          : 'bg-[#FDFBF7] border-stone-300 text-stone-900 focus:border-[#C5A059]'
                      }`}
                    />
                  </div>

                  {/* Prestation */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold block mb-2 text-neutral-400">
                      Prestation visée
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={`w-full p-3 rounded-sm border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-[#141414] border-[#333] text-white focus:border-[#D4AF37]'
                          : 'bg-[#FDFBF7] border-stone-300 text-stone-900 focus:border-[#C5A059]'
                      }`}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Consulting en création de carte de bar">Consulting en création de carte de bar</option>
                      <option value="Autre demande sur-mesure">Autre demande sur-mesure</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold block mb-2 text-neutral-400">
                      Date envisagée
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Printemps 2027 / 14 Juillet..."
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`w-full p-3 rounded-sm border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-[#141414] border-[#333] text-white focus:border-[#D4AF37]'
                          : 'bg-[#FDFBF7] border-stone-300 text-stone-900 focus:border-[#C5A059]'
                      }`}
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold block mb-2 text-neutral-400">
                      Lieu / Ville
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Paris 8e, Domaine en Provence, etc."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className={`w-full p-3 rounded-sm border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-[#141414] border-[#333] text-white focus:border-[#D4AF37]'
                          : 'bg-[#FDFBF7] border-stone-300 text-stone-900 focus:border-[#C5A059]'
                      }`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold block mb-2 text-neutral-400">
                    Détails du projet & vos attentes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ambiance souhaitée, spiritueux de prédilection, nombre approximatif d'invités..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full p-3 rounded-sm border text-sm outline-none transition-colors ${
                      isDark
                        ? 'bg-[#141414] border-[#333] text-white focus:border-[#D4AF37]'
                        : 'bg-[#FDFBF7] border-stone-300 text-stone-900 focus:border-[#C5A059]'
                    }`}
                  />
                </div>

                {errorMsg && (
                  <div className="text-xs text-rose-500 font-medium">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  className={`w-full py-4 text-xs font-semibold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 transition-all ${
                    isDark
                      ? 'bg-[#D4AF37] text-[#121212] hover:bg-[#E5C158] shadow-md'
                      : 'bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] shadow-md'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmettre ma demande de devis</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
