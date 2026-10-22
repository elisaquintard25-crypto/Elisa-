import { ServiceItem, CocktailCreation } from '../types';

export const USER_INFO = {
  name: 'Élisa Quintard',
  title: 'Barmaid Freelance · Brand Ambassador · Brand Consulting',
  email: 'contact.lh@gmail.com',
  location: 'Paris & Déplacements France / International',
  portraitUrl: '/src/assets/images/regenerated_image_1792679294022.png',
  brandLogo: '/assets/aistudio/logo_transparent.png',
  brandLogoWhite: '/assets/aistudio/logo_transparent_white.png',
  heroImages: {
    cocktail: '/src/assets/images/cocktail_signature_craft_1792675501803.jpg',
    masterclass: '/src/assets/images/masterclass_spirits_ritual_1792675517815.jpg',
    brandActivation: '/src/assets/images/brand_activation_ambassador_1792675533261.jpg',
  },
  bio: "Passionnée par l’art de la mixologie depuis mes 18 ans, j’ai façonnée mon savoir-faire au coeur des institutions les plus emblématiques. De l’énergie créative de Bonnie Bar à l’excellence du Bar Bisou, classé parmi les meilleurs au monde, mon parcours est guidé par une quête constante d’équilibre et d’émotion. Aujourd’hui indépendante, je mets mon coeur et mon expertise au service de vos projets pour transformer chaque dégustation en un moment d’exception."
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'evenementiel',
    number: '01',
    title: 'Événementiel Privé & Sur Mesure',
    tagline: 'L’art du cocktail d’auteur pour vos réceptions d’exception',
    forWhom: 'Soirées privées, événements d’entreprise, mariages de prestige, réceptions VIP & lancements exclusifs.',
    whatIBring: [
      "Création d'une carte de cocktails personnalisée selon votre univers, vos goûts et le thème de votre événement.",
      "Service complet et gestion du bar de A à Z : approvisionnement, préparation des cordiaux & sirops artisanaux, logistique et service attentif.",
      "Verrerie soignée, glace pure taillée à la main et garnitures botaniques d'une précision haute couture.",
      "Cadence maîtrisée, hospitalité chaleureuse et discrétion absolue pour vos invités de marque."
    ],
    deliverables: [
      'Carte exclusive de 3 à 5 créations signatures + mocktails haute mixologie',
      'Fiche technique & estimation précise des volumes et spiritueux',
      'Mise en place complète du bar (mobile ou fixe) & verrerie cristal',
      'Service élégant et interactif tout au long de la soirée'
    ],
    highlight: 'Gestion intégrale de A à Z : vous profitez pleinement de vos convives.',
    image: '/src/assets/images/cocktail_signature_craft_1792675501803.jpg'
  },
  {
    id: 'brand-activation',
    number: '02',
    title: 'Brand Activation & Animation de Marque',
    tagline: 'Donner vie à votre esprit de marque auprès du public et des professionnels',
    forWhom: 'Maisons de spiritueux, agences événementielles, salons professionnels (Cocktail Street, Bar Convent Berlin, Dugas Club Expert, etc.).',
    whatIBring: [
      "Incarnation vivante de l'image de marque en tant que Brand Ambassador terrain charismatique et crédible.",
      "Création de recettes signatures inédites valorisant le profil aromatique singulier du spiritueux.",
      "Storytelling de marque captivant, adapté aussi bien au grand public curieux qu'aux barmen et acheteurs exigeants.",
      "Animation de stands professionnels, pop-up bars et tournées promotionnelles avec un haut niveau d'engagement."
    ],
    deliverables: [
      'Création du cocktail vitrine & guide de service (fiches recettes exportables)',
      'Présence terrain active : démonstrations de mixologie & dégustations commentées',
      'Transmission de l’ADN, de l’histoire et du terroir de votre spiritueux',
      'Reporting qualitatif post-événement et retours d’expérience consommateurs'
    ],
    highlight: 'Un pont authentique entre l’héritage de votre distillerie et le consommateur moderne.',
    image: '/assets/images/elisa_terrain.jpg'
  },
  {
    id: 'masterclass',
    number: '03',
    title: 'Masterclass Spiritueux & Ateliers',
    tagline: 'Une immersion sensorielle au coeur des terroirs et des arômes',
    forWhom: 'Professionnels du secteur CHR, lancements de nouveaux millésimes, team buildings de direction ou ateliers privés.',
    whatIBring: [
      "Expérience immersive articulant dégustation guidée et récits captivants autour des produits.",
      "Décryptage des méthodes de distillation, des élevages en fût et des signatures botaniques.",
      "Transmission bienveillante des techniques fondamentales de dégustation et du geste de mixologie.",
      "Création d'ateliers interactifs sur-mesure (whisky, mezcal, gin artisanal, cognac, rhum agricole)."
    ],
    deliverables: [
      'Sélection pointue de flacons rares et fiches de dégustation imprimées',
      'Matériel de dégustation professionnel & arômes de référence',
      'Partage de techniques de mixologie applicables à la maison ou au bar',
      'Format modulable de 6 à 50 personnes (en français ou anglais)'
    ],
    highlight: 'Un voyage gustatif inoubliable mêlant rigueur technique et convivialité.',
    image: '/src/assets/images/masterclass_spirits_ritual_1792675517815.jpg'
  }
];

export const SIGNATURE_COCKTAILS: CocktailCreation[] = [
  {
    id: 'bisou-poetique',
    name: 'Bisou Poétique',
    category: 'floral',
    categoryLabel: 'Floral & Délicat',
    baseSpirit: 'Gin Artisanal de Grasse',
    aromaticProfile: 'Infusion de baies roses, cordial de fleur de sureau maison, verveine fraîche & brume florale',
    notes: ['Notes fraîches d’agrumes doux', 'Longueur florale aérienne', 'Finale poivrée délicate'],
    glassware: 'Coupe en cristal vintage',
    garnish: 'Bouton de rose sauvage & zeste de pamplemousse givré',
    story: 'Inspiré de l’excellence créative du Bar Bisou : une création sans compromis sur la finesse et l’élégance végétale.',
    image: '/src/assets/images/cocktail_signature_craft_1792675501803.jpg'
  },
  {
    id: 'bonnie-glow',
    name: 'Nocturne Bonnie',
    category: 'rich',
    categoryLabel: 'Boisé & Ambré',
    baseSpirit: 'Bourbon affiné en fût de Sherry',
    aromaticProfile: 'Bitter chocolat d’origine torréfié, sirop de figue rôtie au thym sauvage, zeste d’orange brûlé',
    notes: ['Attaque ronde et toastée', 'Notes de fruits noirs confits', 'Fumée subtile en rétro-olfaction'],
    glassware: 'Old Fashioned lourd à facettes',
    garnish: 'Glaçon cristal estampillé & branche de romarin toastée',
    story: 'Écho vibrant à l’énergie des soirées parisiennes au Bonnie Bar, où le cocktail devient un bijou crépusculaire.',
    image: '/src/assets/images/masterclass_spirits_ritual_1792675517815.jpg'
  },
  {
    id: 'or-vegetal',
    name: 'Or Végétal',
    category: 'citrus',
    categoryLabel: 'Vif & Botanique',
    baseSpirit: 'Mezcal Artisanal & Tequila Blanco',
    aromaticProfile: 'Cordial verjus de Bourgogne & yuzu japonais, sel fumé au bois de pommier, huile essentielle de cardamome verte',
    notes: ['Acidité saline tranchante', 'Minéralité fumée du mezcal', 'Fraîcheur vivifiante du yuzu'],
    glassware: 'Verre Nick & Nora bordé d’or',
    garnish: 'Bordure de sel fumé & feuille de sauge cristallisée',
    story: 'Une recherche obsessionnelle de l’équilibre entre minéralité fumée et acidité gastronomique.',
    image: '/src/assets/images/brand_activation_ambassador_1792675533261.jpg'
  },
  {
    id: 'elixir-botanique',
    name: 'L’Élixir Abstrait (N/A)',
    category: 'no-alcohol',
    categoryLabel: 'Sans Alcool Gastronomique',
    baseSpirit: 'Distillat botanique sans alcool à base de genévrier et coriandre',
    aromaticProfile: 'Hydrolat de concombre frais, réduction de rhubarbe acidulée, tonic artisanal aux écorces amères',
    notes: ['Vivacité croquante', 'Complexité aromatique sans sucrosité superflue', 'Tension rafraîchissante'],
    glassware: 'Highball cannelé sur glace pure taillée',
    garnish: 'Ruban de concombre marin au poivre de Sichuan',
    story: 'Pour que l’abstinence d’alcool rime avec haute gastronomie et émotion sensorielle absolue.',
    image: '/src/assets/images/cocktail_signature_craft_1792675501803.jpg'
  }
];

export const PRESTIGE_PILLARS = [
  {
    title: 'Équilibre & Précision',
    description: 'Chaque gramme, chaque goutte de bitter et chaque seconde de dilution sont mesurés avec une rigueur d’orfèvre.'
  },
  {
    title: 'Hospitalité',
    description: 'Le cocktail est un vecteur d’émotion : sourire attentif, sens de l’écoute et discrétion raffinée auprès de vos convives.'
  },
  {
    title: 'Matières Premières Nobles',
    description: 'Cordiaux cuisinés minute, agrumes non traités, herbes fraîches du jour et spiritueux choisis pour leur authenticité.'
  },
  {
    title: 'Culture de Marque & Récits',
    description: 'Plus qu’une recette, je partage l’âme des terroirs, l’histoire des distillateurs et le secret des alambics.'
  }
];

export const INSTITUTIONS_TIMELINE = [
  {
    year: 'Depuis 2022',
    name: 'La Révélation du Bar',
    detail: 'Une passion immédiate pour la mixologie, le travail du goût et l’art du service d’excellence.'
  },
  {
    year: 'Institution Parisienne',
    name: 'Bonnie Bar Paris',
    detail: 'Plongée dans l’énergie créative et le rythme effréné d’une des adresses les plus courues de la capitale.'
  },
  {
    year: 'World’s Best Bars',
    name: 'Bar Bisou Paris',
    detail: 'Perfectionnement au sein d’un bar classé parmi les 50 meilleurs au monde : travail du sur-mesure sans carte fixe et créativité sans borne.'
  },
  {
    year: 'Aujourd’hui',
    name: 'Pratique Indépendante',
    detail: 'Mise à disposition de cette double exigence pour des marques de spiritueux prestigieuses et des réceptions privées d’exception.'
  }
];
