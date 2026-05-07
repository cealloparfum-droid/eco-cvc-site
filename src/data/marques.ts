export type Marque = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  origine: string;
  positionnement: "premium" | "milieu" | "entrée";
  intro: string[];
  gammes: { name: string; description: string; prix: string; usage: string }[];
  forces: string[];
  limites: string[];
  garantie: string;
  pourQui: string;
  faq: { q: string; a: string }[];
};

export const marques: Marque[] = [
  {
    slug: "daikin-altherma",
    name: "Daikin Altherma",
    metaTitle: "Daikin Altherma 3 — prix, avis, installation 2026 | ECO CVC Isère",
    metaDescription:
      "Pompe à chaleur Daikin Altherma 3 : gammes, prix posée 2026, avis terrain, garantie. Installation en Isère et Rhône-Alpes par ECO CVC, partenaire Daikin.",
    h1: "Pompe à chaleur Daikin Altherma : la référence haut de gamme",
    tagline: "Marque japonaise leader sur le marché européen, COP record et durée de vie 18-22 ans.",
    origine: "Japon (filiale française à Lyon)",
    positionnement: "premium",
    intro: [
      "Daikin est le leader mondial du chauffage et de la climatisation, et la gamme Altherma 3 (PAC air-eau) est leur produit phare en France. Performance constante, silence, application MyDaikin intuitive : c'est la marque qu'on installe le plus en haut de gamme à ECO CVC.",
      "ECO CVC est partenaire Daikin et dispose de l'outillage de diagnostic spécifique (interface DTA). Nos techniciens sont formés sur les Altherma 3 R et 3 H (haute température jusqu'à 65 °C).",
    ],
    gammes: [
      {
        name: "Altherma 3 R (basse température)",
        description: "PAC air-eau monobloc R32. Idéale pour rénovation avec plancher chauffant ou radiateurs basse température.",
        prix: "12 000 à 16 000 € posée",
        usage: "Maisons RT2005+ avec radiateurs modernes",
      },
      {
        name: "Altherma 3 H (haute température)",
        description: "Jusqu'à 65 °C de départ d'eau. Compatible radiateurs en fonte d'origine sans changement.",
        prix: "13 500 à 17 500 € posée",
        usage: "Maisons anciennes en pierre, conservation des radiateurs",
      },
      {
        name: "Altherma 3 M (monobloc compact)",
        description: "Solution tout-en-un avec ballon thermodynamique intégré 180 ou 230 L.",
        prix: "14 000 à 18 000 € posée",
        usage: "Idéal espace technique réduit",
      },
      {
        name: "Climatisation Stylish / Sensira",
        description: "Splits muraux design Daikin, modèles silencieux ≤ 19 dB.",
        prix: "1 800 à 2 800 € posé (mono-split)",
        usage: "Climatisation premium, intérieurs soignés",
      },
    ],
    forces: [
      "Durée de vie observée 18-22 ans avec entretien (+5 ans vs moyenne marché)",
      "Compresseur Swing (basse usure, silencieux)",
      "Application MyDaikin Cloud très complète, pilotage à distance",
      "SAV France réactif, pièces détachées 48h",
      "Plage de fonctionnement étendue (-25 °C garantis sur Altherma 3 H)",
      "Modèles ≤ 35 dB en mode nuit silence",
    ],
    limites: [
      "Prix d'achat 15-25% supérieur à la moyenne marché",
      "Demande un installateur formé Daikin (pas tous les artisans)",
      "Interface utilisateur peut paraître complexe pour les néophytes",
    ],
    garantie: "5 ans pièces standard, extensible à 10 ans avec entretien partenaire Daikin (proposé par ECO CVC).",
    pourQui: "Propriétaires en logement à long terme (15+ ans), recherchant performance et tranquillité, prêts à investir dans la durée.",
    faq: [
      {
        q: "Daikin ou Mitsubishi : laquelle choisir ?",
        a: "Très proches en performance. Daikin a un léger avantage sur le silence et l'app, Mitsubishi sur la fiabilité en climat très froid (Ecodan Plus). Différence d'environ 5-10% sur la durée de vie réelle observée. À configuration équivalente, Daikin est légèrement plus cher.",
      },
      {
        q: "Combien coûte une Daikin Altherma 3 H pour 130 m² ?",
        a: "PAC air-eau 11 kW haute température : 14 500 à 17 000 € posée. Avec aides MaPrimeRénov' Bleu + Coup de pouce + TVA 5,5% pour sortie fioul : reste à charge typique 4 000 à 7 500 €.",
      },
      {
        q: "Où trouver un installateur Daikin certifié en Isère ?",
        a: "ECO CVC est partenaire Daikin, RGE QualiPAC, intervient en Isère, Rhône, Savoie, Haute-Savoie et Loire. Vérification du n° RGE sur france-renov.gouv.fr.",
      },
      {
        q: "Pièces détachées Daikin disponibles en cas de panne ?",
        a: "Oui, distributeur national avec stock à Lyon. Pièces sous 24-48h en zone rurale. Rares ruptures sur les modèles récents.",
      },
    ],
  },
  {
    slug: "mitsubishi-electric-ecodan",
    name: "Mitsubishi Electric Ecodan",
    metaTitle: "Mitsubishi Electric Ecodan — prix, avis, plage étendue | ECO CVC Isère",
    metaDescription:
      "Pompe à chaleur Mitsubishi Ecodan : gammes (PUHZ, Hydrobox, Ecodan Plus), prix 2026, garantie. Installation en Isère et Rhône-Alpes par ECO CVC.",
    h1: "Pompe à chaleur Mitsubishi Electric Ecodan : la fiabilité japonaise",
    tagline: "Concurrent direct de Daikin, plage étendue garantie -25 °C, application MELCloud.",
    origine: "Japon",
    positionnement: "premium",
    intro: [
      "Mitsubishi Electric est l'un des deux géants japonais du froid avec Daikin. La gamme Ecodan (PAC air-eau) est particulièrement appréciée en zone froide pour sa plage de fonctionnement étendue garantie jusqu'à -25 °C — idéal pour Voiron, Chambéry, Annecy et les hauteurs de l'Isère.",
      "ECO CVC dispose de l'interface MELCloud Mitsubishi pour télémaintenance et diagnostic à distance.",
    ],
    gammes: [
      {
        name: "Ecodan PUHZ-W standard",
        description: "Bibloc air-eau pour rénovation et neuf. R32, modulant inverter.",
        prix: "12 500 à 16 500 € posée",
        usage: "Maisons RT2005+ standards",
      },
      {
        name: "Ecodan Plus (plage étendue)",
        description: "Garanti -25 °C, recommandé pour climat alpin et hauteurs.",
        prix: "13 500 à 17 500 € posée",
        usage: "Voiron, Chambéry, Annecy, hameaux d'altitude",
      },
      {
        name: "Hydrobox split (système flexible)",
        description: "Module hydraulique séparable pour configurations contraintes.",
        prix: "13 000 à 17 000 € posée",
        usage: "Locaux techniques difficiles d'accès",
      },
      {
        name: "Climatisation MSZ et Kirigamine",
        description: "Splits muraux Mitsubishi, gamme premium Kirigamine ultra-silencieuse.",
        prix: "1 800 à 3 200 € posé (mono-split)",
        usage: "Climatisation premium",
      },
    ],
    forces: [
      "Plage de fonctionnement étendue : -25 °C garantis sur Ecodan Plus",
      "Compresseur DC Twin Rotary haute fiabilité",
      "Application MELCloud avec télémaintenance pro",
      "SAV national rapide, partenaires formés sur tout le territoire",
      "Écran d'unité intérieure très intuitif",
      "Excellente fiabilité long terme (20+ ans observés)",
    ],
    limites: [
      "Prix équivalent à Daikin (premium)",
      "Distribution moins étendue que Daikin en zones rurales",
      "Configuration M-NET requiert un installateur formé",
    ],
    garantie: "5 ans pièces standard, jusqu'à 7 ans avec contrat d'entretien Mitsubishi.",
    pourQui: "Maisons en zone climatique froide ou à grande inertie thermique. Propriétaires recherchant fiabilité absolue.",
    faq: [
      {
        q: "Mitsubishi tient vraiment à -25 °C ?",
        a: "Oui sur la gamme Ecodan Plus. À -25 °C, le COP descend à 1,8-2,0 (toujours 2 fois plus efficace qu'un radiateur électrique). En dessous, l'appoint électrique intégré prend le relais.",
      },
      {
        q: "Différence Ecodan standard vs Ecodan Plus ?",
        a: "Plus = compresseur plus puissant, dégivrage optimisé, fluide R32 modifié pour basses températures. Surcoût d'environ 1 000-1 500 €. Recommandé dès -15 °C de température extérieure de base.",
      },
      {
        q: "Vous installez aussi en Haute-Savoie ?",
        a: "Oui, jusqu'à Annecy et Aix-les-Bains. Pour les chantiers d'envergure (3-4 jours+), nous nous déplaçons sans surcoût. Petits dépannages : RDV groupés avec d'autres clients du secteur.",
      },
    ],
  },
  {
    slug: "atlantic-alfea",
    name: "Atlantic Alféa",
    metaTitle: "Atlantic Alféa Excellia — prix, avis 2026 | ECO CVC Isère",
    metaDescription:
      "Pompe à chaleur Atlantic Alféa : gammes (Excellia, Hybrid, Extensa), prix 2026, garanties. Marque française leader, installation par ECO CVC en Isère et Rhône-Alpes.",
    h1: "Pompe à chaleur Atlantic Alféa : le rapport qualité-prix français",
    tagline: "Marque française historique, gamme Alféa Excellia parmi les plus performantes du milieu de gamme.",
    origine: "France (production française et européenne)",
    positionnement: "milieu",
    intro: [
      "Atlantic est la marque française de référence pour les équipements de chauffage. La gamme Alféa (PAC air-eau) offre un excellent compromis prix-performance, particulièrement adaptée à la rénovation française. Une partie de la production reste localisée en France (filiale industrielle).",
      "ECO CVC est partenaire Atlantic Pro et bénéficie des garanties étendues 7 ans.",
    ],
    gammes: [
      {
        name: "Alféa Excellia A.I.",
        description: "Gamme haut de gamme Atlantic, PAC monobloc R32 connectée Cozytouch.",
        prix: "11 500 à 15 000 € posée",
        usage: "Rénovation et neuf, alternative à Daikin/Mitsubishi à prix accessible",
      },
      {
        name: "Alféa Hybrid Duo",
        description: "PAC hybride : bascule auto entre PAC et chaudière condensation gaz selon coût marginal.",
        prix: "14 000 à 18 000 € posée",
        usage: "Grandes maisons mal isolées avec raccordement gaz",
      },
      {
        name: "Alféa Extensa (entrée gamme Atlantic)",
        description: "Modèle plus économique, bonne fiabilité, configurations standards.",
        prix: "10 500 à 13 500 € posée",
        usage: "Maisons isolées 80-130 m²",
      },
    ],
    forces: [
      "Prix 15-20% inférieur à Daikin/Mitsubishi à performance équivalente",
      "Marque française : SAV national très réactif (Atlantic Pro 24h)",
      "Application Cozytouch intuitive, idéale pour utilisateurs grand public",
      "Adaptée aux contraintes de rénovation française (radiateurs anciens, dimensions)",
      "Production en partie française (avantage achat-français)",
    ],
    limites: [
      "Niveau sonore légèrement supérieur à Daikin/Mitsubishi (40-44 dB vs 35-40)",
      "Durée de vie observée 15-18 ans (vs 18-22 chez Daikin/Mitsubishi)",
      "Plage de fonctionnement -20 °C max (suffit pour 95% du territoire)",
    ],
    garantie: "Standard 5 ans pièces, extensible à 7 ans avec contrat d'entretien Atlantic Pro proposé par ECO CVC.",
    pourQui: "Propriétaires recherchant un excellent rapport qualité-prix, projet à 10-15 ans, sensibles à l'achat français.",
    faq: [
      {
        q: "Atlantic est-elle au niveau de Daikin et Mitsubishi ?",
        a: "Très proche en performance pure. Différences sur la durée de vie (~3-5 ans de moins) et le silence (~5 dB de plus). Mais à 15-20% moins cher : très bon rapport qualité-prix.",
      },
      {
        q: "Combien coûte une Alféa Excellia 11 kW ?",
        a: "Environ 13 500 € posée. Avec aides Bleu + sortie fioul : reste à charge ~4 500 €. Excellent point d'entrée pour le haut milieu de gamme.",
      },
      {
        q: "PAC hybride Atlantic Alféa Duo : intéressante ?",
        a: "Oui pour grandes maisons mal isolées avec raccordement gaz : la PAC tourne en saison douce (économies), la chaudière prend le relais en grand froid (puissance). Pour 200 m² mal isolée : c'est souvent la meilleure option.",
      },
    ],
  },
  {
    slug: "aux",
    name: "AUX",
    metaTitle: "Pompe à chaleur AUX — prix bas, avis 2026 | ECO CVC Isère",
    metaDescription:
      "PAC AUX : gammes, prix 2026, fiabilité. Marque entrée de gamme avec excellent rapport qualité-prix. Installation par ECO CVC en Isère et Rhône-Alpes.",
    h1: "Pompe à chaleur AUX : l'entrée de gamme accessible",
    tagline: "Groupe chinois (30 milliards $ de CA), gamme R32 complète, prix imbattable, fiabilité moderne.",
    origine: "Chine (groupe AUX, présent en Europe depuis 2018)",
    positionnement: "entrée",
    intro: [
      "AUX est l'un des plus gros fabricants chinois de climatisation et PAC. Présent en Europe depuis 2018, le groupe propose une gamme complète à des prix 40-60% inférieurs aux marques japonaises premium. ECO CVC distribue AUX comme alternative entrée de gamme.",
      "Note d'honnêteté : AUX n'a pas le retour d'expérience de Daikin (50 ans en Europe). Les premiers modèles français ont 5-7 ans de recul. La fiabilité est bonne mais pas encore prouvée sur la longue durée.",
    ],
    gammes: [
      {
        name: "AUX Climatisation réversible",
        description: "Mono-split et multi-split réversible, R32, modèles silencieux.",
        prix: "1 200 à 2 200 € posé (mono-split)",
        usage: "Climatisation entrée de gamme et milieu de gamme",
      },
      {
        name: "AUX PAC air-eau",
        description: "PAC air-eau monobloc R32, gamme récente en France.",
        prix: "8 500 à 12 500 € posée",
        usage: "Rénovation à budget contraint, maisons standards",
      },
    ],
    forces: [
      "Prix 40-60% inférieur à Daikin/Mitsubishi",
      "Compresseurs souvent sous-traités à des fabricants reconnus (Mitsubishi Heavy Industries, Toshiba)",
      "Gamme R32 complète, conformité européenne CE",
      "Pour climatisation : excellent rapport perf/prix",
      "Investissement locatif : compromis idéal",
    ],
    limites: [
      "SAV France encore en construction (réseau plus restreint)",
      "Durée de vie observée 12-15 ans (vs 18-22 Daikin/Mitsubishi)",
      "Image moins prestigieuse à la revente immobilière",
      "Garantie pièces 3 ans + 5 ans compresseur (vs 5-7 ans premium)",
    ],
    garantie: "3 ans pièces complètes + 5 ans compresseur (extensible avec maintenance ECO CVC).",
    pourQui: "Investisseurs locatifs, propriétaires occupants à budget contraint, projets à 10 ans, complément climatisation.",
    faq: [
      {
        q: "AUX vs Daikin : laquelle choisir vraiment ?",
        a: "Pour locatif (le locataire ne fait pas la différence) ou budget serré : AUX. Pour résidence principale long terme : Daikin/Mitsubishi (durée de vie + 5-8 ans, justifie le surcoût).",
      },
      {
        q: "Climatisation AUX vs marques japonaises : comparable ?",
        a: "Oui pour la climatisation entrée de gamme. Sur les splits réversibles standards, AUX se compare bien à Hisense, Hitachi entrée de gamme. Sur les configurations complexes (gainable haut de gamme), Daikin/Mitsubishi gardent l'avantage.",
      },
      {
        q: "Combien d'AUX ECO CVC installe par an ?",
        a: "Environ 30-40% de notre activité climatisation. Particulièrement adapté aux investisseurs locatifs et aux projets sortie de chauffage électrique direct (gros gain à moindre coût).",
      },
    ],
  },
];

export const findMarque = (slug: string) => marques.find((m) => m.slug === slug);
