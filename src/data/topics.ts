/**
 * Topics / Tags transverses pour le maillage SEO.
 * Chaque topic regroupe les articles + villes + outils liés.
 */

export type Topic = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Mots-clés présents dans les titres d'articles pour filtrage auto */
  keywords: string[];
  /** Slugs d'articles ajoutés manuellement (en plus du filtre auto) */
  pinnedArticles?: string[];
  /** Slugs de villes en lien direct */
  pinnedCities?: string[];
  /** Liens vers les outils gratuits associés */
  tools?: { href: string; label: string }[];
};

export const topics: Topic[] = [
  {
    slug: "maprimerenov",
    title: "MaPrimeRénov'",
    metaTitle: "MaPrimeRénov' 2026 — Tous nos guides + simulateur | ECO CVC",
    metaDescription:
      "Tous les articles ECO CVC sur MaPrimeRénov' 2026 : montants exacts, conditions, démarches, profils Bleu/Jaune/Violet/Rose. Simulateur d'aides gratuit.",
    h1: "MaPrimeRénov' 2026 : tout ce qu'il faut savoir",
    intro:
      "MaPrimeRénov' reste en 2026 l'aide principale pour basculer en pompe à chaleur. Voici tous nos articles experts sur le sujet : montants par profil, conditions techniques, démarches étape par étape, et notre simulateur gratuit pour calculer vos aides exactes.",
    keywords: ["maprimerenov", "ma prime renov", "ma-prime-renov", "prime rénov"],
    pinnedArticles: ["maprimerenov-2026-pompe-a-chaleur", "plafonds-revenus-maprimerenov-2026", "aides-pompe-a-chaleur-2026-resume-rapide"],
    tools: [
      { href: "/simulateur-aides", label: "Simulateur d'aides 2026" },
      { href: "/eligibilite-maprimerenov", label: "Quiz éligibilité" },
      { href: "/calendrier-aides-2026", label: "Calendrier des aides" },
    ],
  },
  {
    slug: "installation-pac",
    title: "Installation pompe à chaleur",
    metaTitle: "Installation pompe à chaleur — Guides ECO CVC Isère & Rhône-Alpes",
    metaDescription:
      "Tout sur l'installation d'une pompe à chaleur : choix du modèle, prix, durée du chantier, dimensionnement, marques. Guides experts ECO CVC.",
    h1: "Installation pompe à chaleur : tous nos guides",
    intro:
      "L'installation d'une PAC engage votre confort pour 15-20 ans. Voici nos guides honnêtes : choix du modèle, dimensionnement, prix réels, marques fiables et installateur à privilégier.",
    keywords: ["installation", "installateur", "pose"],
    pinnedArticles: ["installateur-pac-rge-comment-choisir", "pompe-a-chaleur-temps-installation", "pose-pompe-a-chaleur-en-hiver"],
    tools: [
      { href: "/calculateur", label: "Calculateur de puissance" },
      { href: "/audit-devis-pac", label: "Auditer un devis" },
    ],
  },
  {
    slug: "aides-2026",
    title: "Aides 2026",
    metaTitle: "Toutes les aides 2026 pour pompe à chaleur | ECO CVC",
    metaDescription:
      "MaPrimeRénov', CEE, TVA 5,5 %, éco-PTZ, aides locales : tout sur les aides 2026 cumulables pour une PAC en Isère et Rhône-Alpes. Jusqu'à 14 000 € cumulés.",
    h1: "Aides 2026 pour pompe à chaleur — Guide cumul complet",
    intro:
      "Les aides 2026 cumulables peuvent couvrir 60 à 90 % du coût d'installation d'une PAC. Voici tous nos guides pour comprendre, simuler et obtenir l'intégralité de votre droit aux aides.",
    keywords: ["aide", "cee", "coup de pouce", "tva", "eco-ptz", "subvention"],
    pinnedArticles: ["aides-cee-pompe-a-chaleur-2026", "coup-de-pouce-chauffage-2026", "aides-pompe-a-chaleur-2026-resume-rapide"],
    tools: [
      { href: "/simulateur-aides", label: "Simulateur d'aides 2026" },
      { href: "/calendrier-aides-2026", label: "Calendrier des aides" },
    ],
  },
  {
    slug: "prix-tarifs",
    title: "Prix & tarifs",
    metaTitle: "Prix pompe à chaleur 2026 — Fourchettes honnêtes | ECO CVC",
    metaDescription:
      "Tous les tarifs 2026 pour pompe à chaleur, climatisation, VMC, entretien et dépannage. Fourchettes réelles basées sur 200+ chantiers en Isère et Rhône-Alpes.",
    h1: "Prix & tarifs 2026 : nos fourchettes honnêtes",
    intro:
      "Les prix annoncés par les commerciaux sont souvent trompeurs (prix d'appel, surcoûts cachés). Voici nos fourchettes RÉELLES, basées sur 200+ chantiers locaux, par type de PAC et taille de maison.",
    keywords: ["prix", "tarif", "coût", "amortissement", "cout"],
    pinnedArticles: ["prix-pompe-a-chaleur-2026", "prix-pompe-a-chaleur-isere-2026", "amortissement-pompe-a-chaleur-2026"],
    tools: [
      { href: "/comparateur-chauffages", label: "Comparateur tous chauffages" },
      { href: "/audit-devis-pac", label: "Audit devis gratuit" },
    ],
  },
  {
    slug: "sortir-du-fioul",
    title: "Sortir du fioul",
    metaTitle: "Sortir du fioul en 2026 — Guide complet aides + PAC | ECO CVC",
    metaDescription:
      "Sortie de chaudière fioul 2026 : bonus 1 000 €, aides MaPrimeRénov' jusqu'à 9 000 €, retour terrain ECO CVC. Tout pour basculer vers une PAC sereinement.",
    h1: "Sortir du fioul en 2026 : guide complet",
    intro:
      "La chaudière fioul est en sursis : interdite à neuf depuis 2022, fortement subventionnée pour la remplacer. Voici comment basculer en PAC avec les aides 2026 (bonus sortie fioul +1 000 €).",
    keywords: ["fioul", "remplacement", "chaudière fioul"],
    pinnedArticles: ["sortir-du-fioul-2026"],
    tools: [
      { href: "/remplacement-chaudiere-fioul", label: "Sortie fioul dédiée" },
      { href: "/simulateur-aides", label: "Simulateur aides sortie fioul" },
    ],
  },
  {
    slug: "climatisation",
    title: "Climatisation",
    metaTitle: "Climatisation réversible 2026 — Guides + tarifs | ECO CVC",
    metaDescription:
      "Tout sur la climatisation réversible : mono-split, multi-split, gainable, prix 990 €, bruit, copropriété. Guides ECO CVC pour bien choisir en 2026.",
    h1: "Climatisation réversible : tous nos guides 2026",
    intro:
      "La climatisation réversible (PAC air-air) est la solution la moins chère pour chauffer + rafraîchir. Voici tous nos guides pour bien choisir : modèle, puissance, copropriété, gîte, etc.",
    keywords: ["climatisation", "clim", "réversible", "split", "multi-split", "gainable"],
    pinnedArticles: ["climatisation-appartement-copropriete", "climatisation-gainable", "climatisation-reversible-vraie-performance-chauffage"],
    tools: [
      { href: "/calculateur", label: "Calculateur de puissance" },
      { href: "/climatisation-reversible-990-euros", label: "Offre 990 €" },
    ],
  },
  {
    slug: "lyon",
    title: "Lyon & Métropole",
    metaTitle: "Pompe à chaleur & clim à Lyon Métropole | ECO CVC",
    metaDescription:
      "ECO CVC intervient sur Lyon et toute la métropole : 9 arrondissements, Villeurbanne, Vénissieux, Bron, Caluire, Tassin... PAC, climatisation, maintenance.",
    h1: "PAC & climatisation à Lyon et sa métropole",
    intro:
      "Lyon Métropole compte 59 communes que nous couvrons toutes pour la pompe à chaleur, la climatisation et le dépannage urgent. Voici notre hub Lyon.",
    keywords: ["lyon", "villeurbanne", "métropole"],
    pinnedCities: ["lyon", "villeurbanne", "saint-priest", "meyzieu", "decines-charpieu", "venissieux", "vaulx-en-velin", "bron", "caluire-et-cuire"],
  },
  {
    slug: "bourgoin-isere",
    title: "Nord-Isère",
    metaTitle: "PAC, clim, maintenance Nord-Isère | ECO CVC Bourgoin-Jallieu",
    metaDescription:
      "ECO CVC basé à Nivolas-Vermelle intervient dans tout le Nord-Isère : Bourgoin-Jallieu, La Verpillière, L'Isle-d'Abeau, Villefontaine, La Tour-du-Pin, Vienne.",
    h1: "PAC & climatisation en Nord-Isère",
    intro:
      "Notre cœur de zone d'intervention. ECO CVC est basé à Nivolas-Vermelle, ce qui nous permet d'intervenir sous 24h en Nord-Isère pour devis ou dépannage.",
    keywords: ["nord-isère", "bourgoin", "nivolas"],
    pinnedCities: ["bourgoin-jallieu", "nivolas-vermelle", "la-verpilliere", "l-isle-d-abeau", "villefontaine", "la-tour-du-pin", "vienne"],
  },
  {
    slug: "depannage",
    title: "Dépannage urgent",
    metaTitle: "Dépannage PAC & climatisation 24h | ECO CVC Isère & Rhône-Alpes",
    metaDescription:
      "Dépannage urgent pompe à chaleur et climatisation 24h en Isère, Rhône, Lyon. Intervention F-Gaz, diagnostic gratuit, tarifs transparents. ECO CVC.",
    h1: "Dépannage PAC & climatisation 24h",
    intro:
      "PAC ou clim en panne ? On intervient sous 24h en semaine, 48h le week-end. Diagnostic gratuit, devis transparent, technicien F-Gaz qualifié.",
    keywords: ["dépannage", "panne", "réparation", "code erreur"],
    pinnedArticles: ["depannage-pac-urgence-24h", "panne-pac-sous-garantie", "pose-pompe-a-chaleur-en-hiver"],
    tools: [
      { href: "/depannage-photo", label: "Pré-diagnostic photo" },
      { href: "/depannage", label: "Service dépannage" },
    ],
  },
  {
    slug: "marques-pac",
    title: "Marques PAC",
    metaTitle: "Marques de pompes à chaleur 2026 : Daikin, Atlantic, Mitsubishi… | ECO CVC",
    metaDescription:
      "Comparatif honnête des marques de pompes à chaleur 2026 : Daikin, Atlantic, Mitsubishi, Bosch, Hitachi, Saunier Duval. Avis terrain ECO CVC.",
    h1: "Marques de pompes à chaleur en 2026",
    intro:
      "Le choix de la marque compte moins que la qualité d'installation, mais certaines marques sont objectivement plus fiables. Voici nos retours terrain.",
    keywords: ["daikin", "atlantic", "mitsubishi", "bosch", "hitachi", "saunier duval", "marque"],
    pinnedArticles: ["daikin-mitsubishi-atlantic-quelle-marque-pac", "pac-air-eau-meilleure-marque-2026"],
  },
];

export const findTopic = (slug: string) => topics.find((t) => t.slug === slug);
