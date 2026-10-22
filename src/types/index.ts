export type ThemeMode = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  forWhom: string;
  whatIBring: string[];
  deliverables: string[];
  highlight: string;
  image: string;
}

export interface CocktailCreation {
  id: string;
  name: string;
  category: 'floral' | 'citrus' | 'rich' | 'no-alcohol';
  categoryLabel: string;
  baseSpirit: string;
  aromaticProfile: string;
  notes: string[];
  glassware: string;
  garnish: string;
  story: string;
  image?: string;
}

export interface SimulationState {
  serviceId: string;
  guestCount: number;
  eventType: string;
  location: string;
  durationHours: number;
  options: {
    customMenu: boolean;
    crystalIce: boolean;
    barStation: boolean;
    mocktailPairing: boolean;
    masterclassFlight: boolean;
  };
}
