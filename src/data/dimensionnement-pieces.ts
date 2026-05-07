export type DimensionPiece = {
  slug: string;
  piece: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  emoji: string;
  surface: string;
  intro: string[];
  facteurs: { facteur: string; impact: string }[];
  reco: { surfaceMin: number; surfaceMax: number; puissanceKw: string; type: string; prix: string }[];
  conseils: string[];
  faq: { q: string; a: string }[];
};

export const dimensionnements: DimensionPiece[] = [
  {
    slug: "climatisation-chambre",
    piece: "Chambre",
    emoji: "🛏️",
    surface: "10-20 m²",
    metaTitle: "Climatisation chambre : quelle puissance pour 10-20 m² ? | ECO CVC",
    metaDescription:
      "Quelle puissance de climatisation pour une chambre de 10 à 20 m² ? Calcul précis, modèles silencieux pour le sommeil, prix posé 2026. Guide ECO CVC.",
    h1: "Climatisation chambre : quelle puissance pour bien dormir",
    intro: [
      "La chambre est la pièce la plus exigeante pour climatiser : il faut du froid l'été pour bien dormir, mais sans bruit, sans courant d'air direct, et avec une bonne régulation. Le mauvais choix peut créer des nuits inconfortables.",
      "Voici comment dimensionner précisément, et quels modèles privilégier pour le confort nocturne.",
    ],
    facteurs: [
      { facteur: "Surface au sol", impact: "Base du calcul : 100 W par m² standard" },
      { facteur: "Hauteur sous plafond", impact: "+10% si > 2,7 m" },
      { facteur: "Nombre d'occupants", impact: "+150 W par personne" },
      { facteur: "Exposition fenêtres", impact: "+15-25% si plein sud" },
      { facteur: "Étage (dernier sous toit)", impact: "+15-20% (chaleur accumulée)" },
      { facteur: "Isolation murs", impact: "+25% si murs nord ou pièce non isolée" },
    ],
    reco: [
      { surfaceMin: 8, surfaceMax: 12, puissanceKw: "2,0 kW (7000 BTU)", type: "Mono-split mural classe A+++", prix: "1 600 - 2 200 € posé" },
      { surfaceMin: 12, surfaceMax: 18, puissanceKw: "2,5 kW (9000 BTU)", type: "Mono-split silencieux ≤ 19 dB", prix: "1 900 - 2 600 € posé" },
      { surfaceMin: 18, surfaceMax: 25, puissanceKw: "3,5 kW (12000 BTU)", type: "Mono-split haut de gamme silencieux", prix: "2 300 - 3 000 € posé" },
    ],
    conseils: [
      "Choisir un modèle ≤ 19 dB en mode silence (Daikin Stylish, Mitsubishi Kirigamine)",
      "Positionner la sortie d'air au-dessus de la tête de lit, jamais face au lit",
      "Utiliser le mode 'sommeil' qui ajuste progressivement la température (montée de 1 °C toutes les 1h)",
      "Régler à 26 °C minimum la nuit (santé + sommeil + économies)",
      "Programmer une coupure 1-2h avant le réveil pour faciliter le levé",
      "Privilégier un modèle avec capteur d'humidité (mode déshumidification très utile en climat humide)",
    ],
    faq: [
      { q: "Mon ancien climatiseur fait du bruit, c'est forcément le cas en chambre ?", a: "Non, les modèles modernes haut de gamme descendent à 19 dB en mode silence (presque imperceptible). Bien moins qu'une conversation chuchotée (30 dB)." },
      { q: "Combien coûte la climatisation d'une chambre 15 m² ?", a: "1 900 à 2 600 € posé pour un mono-split silencieux. Aucune aide MaPrimeRénov' (clim air-air non éligible) mais prime CEE possible 250-1 100 €." },
      { q: "Faut-il l'allumer toute la nuit ?", a: "Pas forcément. Démarrer 30 min avant le coucher pour rafraîchir, puis mode sommeil avec montée progressive. Coupure automatique avant le matin = économies sans inconfort." },
    ],
  },
  {
    slug: "climatisation-salon",
    piece: "Salon",
    emoji: "🛋️",
    surface: "20-50 m²",
    metaTitle: "Climatisation salon : quelle puissance pour 20-50 m² ? | ECO CVC",
    metaDescription:
      "Quelle climatisation pour un salon de 20 à 50 m² ? Mono ou multi-split, gainable, console. Calcul puissance, prix 2026, conseils ECO CVC.",
    h1: "Climatisation salon : grandes pièces, plusieurs solutions",
    intro: [
      "Le salon est souvent la pièce centrale : grande surface, ouverture sur cuisine, baies vitrées, occupation variable. Plusieurs solutions techniques selon votre configuration.",
      "Mono-split mural, console au sol, gainable invisible, ou multi-split couvrant aussi les chambres : voici comment décider.",
    ],
    facteurs: [
      { facteur: "Surface (parfois cathédrale)", impact: "Base : 100 W/m² + 15% si plafond > 2,7 m" },
      { facteur: "Baies vitrées sud-ouest", impact: "+20-30% (rayonnement solaire massif)" },
      { facteur: "Cuisine ouverte", impact: "+15% (chaleur cuisson)" },
      { facteur: "TV et appareils", impact: "+200-400 W (apport interne)" },
      { facteur: "Nombre d'occupants pic", impact: "+150 W par personne" },
    ],
    reco: [
      { surfaceMin: 20, surfaceMax: 30, puissanceKw: "3,5 kW (12000 BTU)", type: "Mono-split mural ou console", prix: "2 200 - 2 900 € posé" },
      { surfaceMin: 30, surfaceMax: 40, puissanceKw: "5,0 kW (18000 BTU)", type: "Mono-split haut de gamme ou bi-split", prix: "2 800 - 4 200 € posé" },
      { surfaceMin: 40, surfaceMax: 50, puissanceKw: "6,5-7 kW (24000 BTU)", type: "Console double flux ou gainable partiel", prix: "3 800 - 5 800 € posé" },
    ],
    conseils: [
      "Pour les grandes pièces > 35 m² : envisager 2 unités intérieures plutôt qu'une seule trop puissante",
      "Console au sol idéale si baies vitrées (souffle l'air à hauteur sol/canapés)",
      "Cassette plafond 4 voies pour pièce centrale carrée (diffusion homogène)",
      "Gainable invisible si vous voulez aucun appareil visible (caisson dans faux-plafond)",
      "Choisir un modèle avec mode 'silence' pour les soirées TV ou réception",
    ],
    faq: [
      { q: "Mono-split puissant ou bi-split (salon + 1 chambre) ?", a: "Bi-split souvent plus rentable : économique sur la facture (2 thermostats indépendants), pose équivalente, prix similaire à un seul mono-split haut de gamme." },
      { q: "Cassette plafond ou split mural pour salon ?", a: "Cassette si vous avez un faux-plafond ou pouvez en créer un. Sinon split mural classique. Cassette = plus discrète mais plus cher (+1 000 €)." },
    ],
  },
  {
    slug: "climatisation-bureau",
    piece: "Bureau",
    emoji: "💻",
    surface: "8-15 m²",
    metaTitle: "Climatisation bureau : quelle puissance pour 8-15 m² ? | ECO CVC",
    metaDescription:
      "Quelle climatisation pour un bureau ou pièce de travail de 8-15 m² ? Calcul puissance, modèles silencieux pour télétravail, prix 2026. ECO CVC.",
    h1: "Climatisation bureau : confort et silence pour le télétravail",
    intro: [
      "Avec l'essor du télétravail, le bureau à domicile est devenu une pièce stratégique. Confort thermique, silence absolu (visioconférences), et réactivité (chauffe / refroidit vite) sont les critères clés.",
      "Voici comment bien dimensionner sans surdimensionner.",
    ],
    facteurs: [
      { facteur: "Surface", impact: "100 W/m² standard" },
      { facteur: "Ordinateurs / matériel", impact: "+100-300 W selon configuration" },
      { facteur: "1 occupant prolongé (8h+)", impact: "+150 W" },
      { facteur: "Imprimante laser", impact: "+150-300 W intermittent" },
      { facteur: "Pièce sous toit (combles aménagés)", impact: "+25-30%" },
    ],
    reco: [
      { surfaceMin: 6, surfaceMax: 10, puissanceKw: "2,0 kW (7000 BTU)", type: "Mono-split mural classe A+++", prix: "1 600 - 2 100 € posé" },
      { surfaceMin: 10, surfaceMax: 15, puissanceKw: "2,5 kW (9000 BTU)", type: "Mono-split silencieux ≤ 22 dB", prix: "1 900 - 2 500 € posé" },
    ],
    conseils: [
      "Mode silence indispensable pour les réunions visio (≤ 25 dB)",
      "Privilégier un modèle avec capteur de présence (s'éteint si vous quittez la pièce)",
      "Filtration air anti-poussière utile (ordinateurs = poussière statique)",
      "Pas de courant d'air direct sur le poste de travail",
      "Programmation horaire calée sur vos plages de travail (économies)",
    ],
    faq: [
      { q: "Pour un bureau 12 m², quel modèle ?", a: "Mono-split 2,5 kW silencieux. Daikin Stylish, Mitsubishi Kirigamine ou Atlantic Tahiti excellents pour le télétravail." },
      { q: "La climatisation perturbe-t-elle les visios ?", a: "Pas si le modèle est ≤ 25 dB en mode silence. Au-delà, le micro de l'ordinateur peut capter le souffle. Vérifiez la fiche technique." },
    ],
  },
  {
    slug: "climatisation-cuisine",
    piece: "Cuisine ouverte ou américaine",
    emoji: "🍳",
    surface: "15-30 m²",
    metaTitle: "Climatisation cuisine : faut-il en mettre ? | ECO CVC",
    metaDescription:
      "Climatisation cuisine ouverte ou américaine 15-30 m² : faisabilité, contraintes, modèles adaptés (graisses), prix 2026. Conseils ECO CVC.",
    h1: "Climatisation cuisine : faisable mais avec précautions",
    intro: [
      "Climatiser une cuisine est moins évident qu'une autre pièce : les graisses de cuisson encrassent les filtres rapidement, les odeurs se diffusent, la chaleur des plaques modifie le calcul. Voici comment bien faire.",
    ],
    facteurs: [
      { facteur: "Surface", impact: "100 W/m² standard" },
      { facteur: "Plaques de cuisson", impact: "+500-800 W intermittent (plage haute)" },
      { facteur: "Four en marche", impact: "+200-400 W" },
      { facteur: "Cuisine ouverte sur séjour", impact: "Calcul commun avec le séjour" },
      { facteur: "Lave-vaisselle / lave-linge", impact: "+150-250 W intermittent" },
    ],
    reco: [
      { surfaceMin: 12, surfaceMax: 20, puissanceKw: "3,5 kW (12000 BTU)", type: "Mono-split avec filtres anti-graisse renforcés", prix: "2 200 - 3 000 € posé" },
      { surfaceMin: 20, surfaceMax: 30, puissanceKw: "5,0 kW (18000 BTU)", type: "Console au sol ou cassette plafond", prix: "2 800 - 4 200 € posé" },
    ],
    conseils: [
      "Filtres anti-graisse obligatoires (à nettoyer 1 fois/mois en cuisine)",
      "Ne pas placer l'unité intérieure face aux plaques (graisses + chaleur en direct)",
      "Vérifier la qualité de la hotte aspirante AVANT (une bonne hotte = -50% de besoin clim cuisine)",
      "Cassette plafond très adaptée : loin des plaques, diffusion homogène",
      "Mode 'turbo' utile lors des cuissons longues (rafraîchissement rapide)",
    ],
    faq: [
      { q: "Climatiser ma cuisine ouverte sur le séjour : 1 ou 2 unités ?", a: "Si volume total < 50 m² : 1 seule unité bien dimensionnée. Si > 50 m² ou si la cuisine est très utilisée : 2 unités séparées (meilleure régulation)." },
      { q: "Les graisses vont-elles abimer la climatisation ?", a: "Avec une bonne hotte aspirante et un nettoyage des filtres mensuel, durée de vie identique aux autres pièces. Sans hotte : durée de vie divisée par 2." },
    ],
  },
];

export const findDimension = (slug: string) => dimensionnements.find((d) => d.slug === slug);
