export type City = {
  slug: string;
  name: string;
  postalCode: string;
  department: string; // "Isère (38)"
  region: string; // "Auvergne-Rhône-Alpes"
  population: string;
  distanceKm: number;
  intro: string;
  localContext: string;
  habitatNotes: string;
  /** Quartiers / secteurs réels couverts dans la ville. */
  quartiers?: string[];
  communesVoisines: string[];
  specificites: string[];
  faq: { q: string; a: string }[];
  variant: "A" | "B" | "C";
};

export const cities: City[] = [
  {
    slug: "bourgoin-jallieu",
    name: "Bourgoin-Jallieu",
    postalCode: "38300",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "28 000 habitants",
    distanceKm: 5,
    intro:
      "Sous-préfecture du Nord-Isère, Bourgoin-Jallieu concentre une demande forte en pompes à chaleur depuis le tournant énergétique de 2022. Notre atelier ECO CVC se trouve à 5 km du centre-ville, ce qui nous permet d'intervenir le jour même pour un dépannage et de visiter votre logement sous 48h pour un devis.",
    localContext:
      "Le tissu pavillonnaire de Bourgoin (Champaret, Pré-Pommier, Champ-Fleuri) mélange maisons des années 70-90 souvent encore chauffées au fioul ou à l'électrique direct, et résidences récentes RT2012/RE2020. Dans les deux cas, la pompe à chaleur air-eau ou air-air est aujourd'hui la solution la plus rentable.",
    habitatNotes:
      "Les maisons mitoyennes du centre ancien (rue de la République, secteur gare) demandent une attention particulière sur l'emplacement de l'unité extérieure : copropriété, vis-à-vis et règles d'urbanisme local.",
    quartiers: ["Champaret", "Pré-Pommier", "Champ-Fleuri", "Funas", "Mozas", "La Folatière", "Centre historique", "Boussieu"],
    communesVoisines: ["Ruy-Montceau", "Maubec", "Domarin", "Saint-Alban-de-Roche", "Four", "Sérézin-de-la-Tour"],
    specificites: [
      "Climat semi-continental : -8 °C possibles en janvier, 35 °C en été — la PAC réversible se justifie pleinement",
      "Tarif moyen pose PAC air-eau 8 kW : 12 000 à 16 000 € avant aides, soit 4 000 à 8 000 € restant après MaPrimeRénov + CEE selon revenus",
      "Subvention complémentaire possible via l'agglomération CAPI sur certains projets de rénovation énergétique",
      "Eau de chauffage de 35 à 55 °C selon le type de radiateur — nous adaptons le modèle PAC précisément",
      "Carrelage froid au sol fréquent dans les pavillons des années 80 : le plancher chauffant en rénovation est rentable sur 15 ans",
    ],
    faq: [
      {
        q: "Combien de temps pour installer une PAC à Bourgoin-Jallieu ?",
        a: "Comptez 3 à 5 jours ouvrés entre la signature du devis et la mise en service. La pose elle-même prend 1 à 2 jours en maison individuelle.",
      },
      {
        q: "Mon logement est en zone protégée près du centre, est-ce un problème ?",
        a: "Non, mais l'unité extérieure doit être positionnée discrètement. Nous gérons les déclarations préalables si nécessaire.",
      },
      {
        q: "Vous intervenez aussi à Ruy ou Maubec ?",
        a: "Oui, toute l'agglomération CAPI est dans notre zone d'intervention quotidienne sans surcoût de déplacement.",
      },
      {
        q: "Combien coûte une PAC air-eau à Bourgoin-Jallieu en 2026 ?",
        a: "Pour une maison de 100 m² isolée RT2005+ : 11 500 à 13 500 € posé. Pour une maison plus ancienne non rénovée : 13 000 à 16 500 €. Aides MaPrimeRénov' + CEE peuvent couvrir 6 000 à 9 500 € pour les ménages modestes.",
      },
      {
        q: "Vous faites aussi l'entretien annuel à Bourgoin ?",
        a: "Oui, contrats d'entretien à 180-280 €/an avec visite annuelle + dépannages prioritaires. Nos techniciens passent à Bourgoin chaque semaine.",
      },
      {
        q: "Quelle marque de PAC est la mieux adaptée au climat de Bourgoin ?",
        a: "Daikin Altherma 3 H ou Mitsubishi Ecodan pour le haut de gamme. AUX en milieu de gamme. Tous tiennent largement les températures locales (-8 °C garantis).",
      },
      {
        q: "Comment se passe un dépannage urgent en période froide ?",
        a: "Pour nos clients sous contrat : intervention sous 24h. Hors contrat : 48-72h en saison. Nous mettons en place une solution de chauffage temporaire si la panne se prolonge.",
      },
    ],
    variant: "A",
  },
  {
    slug: "l-isle-d-abeau",
    name: "L'Isle-d'Abeau",
    postalCode: "38080",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "15 000 habitants",
    distanceKm: 3,
    intro:
      "Ville nouvelle des années 70 devenue un pôle résidentiel majeur du Nord-Isère, L'Isle-d'Abeau présente un parc immobilier homogène : maisons et lotissements largement bâtis entre 1985 et 2010, idéaux pour la rénovation énergétique. ECO CVC est implantée à seulement 3 km, à Nivolas-Vermelle.",
    localContext:
      "La majorité des pavillons sont équipés d'origine en convecteurs électriques ou en chaudière gaz vieillissante. Le passage à la pompe à chaleur air-eau (avec radiateurs basse température) ou air-air (split réversible) divise la facture par 2 à 3 dans 90% des cas que nous traitons.",
    habitatNotes:
      "Les copropriétés horizontales du Triforium et du Vellein imposent souvent un accord du syndic pour la pose d'unité extérieure — nous vous fournissons le dossier technique prêt à présenter.",
    quartiers: ["Le Triforium", "Le Vellein", "Champoulant", "Saint-Hubert", "Les Sayes", "Les Marais", "Pierre-Louve"],
    communesVoisines: ["Villefontaine", "Vaulx-Milieu", "Saint-Quentin-Fallavier", "Four", "Nivolas-Vermelle"],
    specificites: [
      "Lotissements avec contraintes esthétiques : nous proposons des unités extérieures coloris RAL ou habillages bois sur mesure",
      "Réseau gaz très présent : opportunité de basculer en PAC hybride (PAC + chaudière condensation) pour les grandes maisons",
      "RGE QualiPAC obligatoire pour MaPrimeRénov — nous le sommes",
      "Pavillonnaire dense : choix d'unités extérieures ≤ 38 dB pour respecter le voisinage immédiat",
      "Aides locales CAPI cumulables avec MaPrimeRénov' sur dossiers de rénovation globale",
    ],
    faq: [
      {
        q: "Je suis en copropriété au Triforium, ai-je le droit d'installer une PAC ?",
        a: "Oui, sous réserve de l'accord du syndic en assemblée générale. Nous fournissons les plans, fiches techniques et certificats acoustiques nécessaires au vote.",
      },
      {
        q: "Quelle puissance pour ma maison de 110 m² à L'Isle-d'Abeau ?",
        a: "En général 8 kW pour une maison RT2005 bien isolée, 11 kW pour une maison antérieure non rénovée. Nous le confirmons au m² près lors de la visite technique.",
      },
      {
        q: "Combien coûte une climatisation réversible 3 chambres à L'Isle-d'Abeau ?",
        a: "Multi-split 4 unités (séjour + 3 chambres) : 6 500 à 8 500 € posé selon marque. Délai de pose 1-2 jours.",
      },
      {
        q: "Quel délai pour un devis à L'Isle-d'Abeau ?",
        a: "Visite technique chez vous sous 48h, devis détaillé sous 24h après. Soit 3-4 jours total. Notre atelier est à 3 km, c'est rapide.",
      },
      {
        q: "Puis-je conserver mon ballon d'eau chaude existant ?",
        a: "Souvent oui pendant 3-5 ans. Au-delà, le couplage avec un ballon thermodynamique récupérant la chaleur de la PAC est très rentable (gain 70% sur l'ECS).",
      },
      {
        q: "Vous équipez aussi les commerces de la zone Vellein ?",
        a: "Oui : restaurants, fleuristes, boulangeries — froid commercial, climatisation tertiaire, vitrines réfrigérées. Voir notre page froid commercial.",
      },
      {
        q: "Le bruit de la PAC dérangera-t-il mes voisins en lotissement ?",
        a: "Non si on choisit le bon modèle. Nous installons systématiquement des PAC ≤ 38 dB en limite de propriété, plots anti-vibrations, mode silence nuit auto.",
      },
    ],
    variant: "B",
  },
  {
    slug: "la-verpilliere",
    name: "La Verpillière",
    postalCode: "38290",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "8 000 habitants",
    distanceKm: 7,
    intro:
      "Située sur l'axe Lyon–Grenoble, La Verpillière mêle zones pavillonnaires anciennes et constructions récentes le long de la RD 1006. Les ménages que nous accompagnons cherchent surtout à sortir du fioul ou du tout-électrique, deux postes énergétiques particulièrement coûteux dans le secteur.",
    localContext:
      "Beaucoup de maisons d'avant 1990 mal isolées : avant de poser une PAC, nous évaluons systématiquement si une remise à niveau de l'isolation des combles est nécessaire pour garantir le rendement promis.",
    habitatNotes:
      "Le centre historique impose parfois des contraintes ABF (architecte des Bâtiments de France) pour les unités extérieures visibles depuis la rue — nous gérons les déclarations.",
    quartiers: ["Centre historique", "Bayet", "La Combe", "Les Calles", "Chamagnieu (limitrophe)", "Pré du Roi"],
    communesVoisines: ["Saint-Quentin-Fallavier", "Heyrieux", "Bonnefamille", "Grenay", "Satolas-et-Bonce"],
    specificites: [
      "Sortie du fioul : aide MaPrimeRénov majorée, jusqu'à 5 000 € pour les ménages très modestes",
      "Distance courte depuis notre siège (15 min) : interventions de dépannage souvent le jour même",
      "Bruit unité extérieure : nous installons systématiquement des plots anti-vibrations et choisissons des modèles ≤ 38 dB",
      "Pavillonnaire 70-90 dominant : besoin fréquent de mise à niveau isolation combles avant pose PAC",
      "Quelques copropriétés : dossier syndic prêt à présenter inclus dans nos devis",
    ],
    faq: [
      {
        q: "Je suis chauffé au fioul, est-ce le bon moment pour basculer ?",
        a: "Oui — le fioul est plus cher chaque année, et MaPrimeRénov est majorée pour les sorties de fioul. Sur 10 ans, l'économie atteint souvent 15 000 à 25 000 €.",
      },
      {
        q: "Quels délais pour un dépannage à La Verpillière ?",
        a: "En période froide, nous intervenons sous 24 à 48h. Nos clients sous contrat d'entretien sont prioritaires.",
      },
      {
        q: "Combien coûte une PAC air-eau à La Verpillière ?",
        a: "Pour une maison 100 m² : 11 500 à 14 000 € posé. Si sortie de fioul : 1 200 € de bonus CEE supplémentaires + 1 000 € MaPrimeRénov' selon revenus.",
      },
      {
        q: "Vous équipez aussi les zones d'activités de la Verpillière ?",
        a: "Oui : climatisation tertiaire, froid commercial, ventilation pour entrepôts et bureaux. Devis gratuit en 48h.",
      },
      {
        q: "Quel délai de prise de RDV pour un devis ?",
        a: "Sous 48h à La Verpillière, parfois le lendemain. Notre atelier est à 15 min en voiture.",
      },
      {
        q: "Je vis en lotissement, le bruit posera-t-il problème ?",
        a: "Non : modèles ≤ 38 dB, plots anti-vibrations, mode silence nocturne automatique. Mesure acoustique disponible si besoin pour rassurer le voisinage.",
      },
      {
        q: "Quelle puissance pour ma maison de 130 m² à La Verpillière ?",
        a: "Généralement 11-12 kW pour une maison RT2005, jusqu'à 14 kW si non rénovée. Calcul thermique précis lors de la visite gratuite.",
      },
    ],
    variant: "C",
  },
  {
    slug: "la-tour-du-pin",
    name: "La Tour-du-Pin",
    postalCode: "38110",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "8 500 habitants",
    distanceKm: 15,
    intro:
      "Sous-préfecture historique du Nord-Isère, La Tour-du-Pin présente un patrimoine bâti hétérogène : maisons de bourg en pierre, fermes rénovées des hameaux alentour, et lotissements récents. Chaque cas demande une approche différente — c'est exactement ce que nous faisons depuis l'atelier de Nivolas-Vermelle, à 15 km.",
    localContext:
      "Les bâtisses anciennes en pierre demandent souvent une PAC air-eau haute température (jusqu'à 65 °C de départ) pour conserver les radiateurs en fonte d'origine. Nous équipons régulièrement ce type de logement avec d'excellents retours.",
    habitatNotes:
      "Les fermes isolées des hameaux (Saint-Didier, Rochetoirin, Cessieu) cumulent souvent surface > 150 m² et isolation moyenne : étude thermique indispensable avant chiffrage.",
    quartiers: ["Centre-ville", "Le Bourg", "Plat", "La Salle", "Champ Fleuri", "Quartier de la Gare"],
    communesVoisines: ["Saint-Clair-de-la-Tour", "Cessieu", "Rochetoirin", "Saint-Jean-de-Soudain", "Faverges-de-la-Tour", "Saint-Didier-de-la-Tour"],
    specificites: [
      "Habitat ancien : PAC air-eau haute température (compatibles radiateurs existants) recommandée",
      "Hivers plus rigoureux qu'en plaine : modèles à dégivrage automatique et résistance d'appoint intégrée",
      "Chauffage piscine : possibilité d'ajouter un module pour chauffer la piscine en intersaison",
      "Beaucoup de fermes rénovées (>150 m²) : PAC haute puissance + plancher chauffant en RDC",
      "Centre-ville en zone protégée : ABF parfois requis pour la pose unité ext. visible",
    ],
    faq: [
      {
        q: "Une PAC fonctionne-t-elle vraiment quand il fait -10 °C à La Tour-du-Pin ?",
        a: "Oui, les modèles modernes gardent un COP > 2 jusqu'à -15 °C. En dessous, l'appoint électrique intégré prend le relais quelques heures par an.",
      },
      {
        q: "Puis-je garder mes radiateurs en fonte ?",
        a: "Oui dans la majorité des cas avec une PAC haute température. Nous le validons par calcul thermique pour garantir le confort.",
      },
      {
        q: "Combien coûte une PAC pour ma ferme rénovée de 180 m² ?",
        a: "Comptez 17 000 à 22 000 € posé selon configuration (PAC 14-16 kW + ballon thermodynamique). Aides cumulées peuvent atteindre 8 000 à 12 000 €.",
      },
      {
        q: "Vous chauffez aussi les piscines extérieures à La Tour-du-Pin ?",
        a: "Oui, PAC piscine dimensionnée selon volume du bassin. Saison utile passe de 2 mois à 5 mois avec une PAC bien choisie.",
      },
      {
        q: "Délai de dépannage en hiver à La Tour-du-Pin ?",
        a: "Sous 48h pour clients sous contrat, 72h hors contrat. Notre atelier est à 15 min.",
      },
      {
        q: "Quelles aides MaPrimeRénov' à La Tour-du-Pin ?",
        a: "Le barème national s'applique. Sortie de fioul = bonus jusqu'à 1 000 €. Couplage avec ballon thermodynamique = aide additionnelle.",
      },
      {
        q: "Vous travaillez aussi à Cessieu, Rochetoirin, Saint-Didier ?",
        a: "Oui, toutes les communes du bassin de La Tour-du-Pin. Pas de surcoût de déplacement.",
      },
    ],
    variant: "A",
  },
  {
    slug: "vienne",
    name: "Vienne",
    postalCode: "38200",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "29 000 habitants",
    distanceKm: 35,
    intro:
      "Ville d'art et d'histoire au sud de Lyon, Vienne combine un centre patrimonial dense (zone ABF) et des coteaux résidentiels en pleine rénovation. ECO CVC intervient sur tout le bassin viennois pour l'installation, l'entretien et le dépannage de pompes à chaleur et climatisations.",
    localContext:
      "Le centre ancien de Vienne (cathédrale Saint-Maurice, théâtre romain) est en zone Architecte des Bâtiments de France : la pose d'une unité extérieure visible y est encadrée. Nous proposons systématiquement des solutions discrètes ou des PAC air-eau avec unité positionnée en cour intérieure.",
    habitatNotes:
      "Sur les coteaux d'Estressin et de Sainte-Colombe (Rhône, mais bassin de vie commun), beaucoup de villas années 60-80 idéales pour la rénovation lourde avec PAC + isolation.",
    quartiers: ["Centre historique", "Estressin", "Malissol", "Saint-Martin", "Pipet", "Charlemagne", "Beauregard", "Vallée de Gère"],
    communesVoisines: ["Sainte-Colombe", "Saint-Romain-en-Gal", "Reventin-Vaugris", "Pont-Évêque", "Chasse-sur-Rhône", "Seyssuel"],
    specificites: [
      "Zone ABF en centre-ville : déclaration préalable obligatoire, nous gérons le dossier",
      "Étés chauds (microclimat vallée du Rhône, jusqu'à 38 °C) : la climatisation devient indispensable, pas un luxe",
      "Eau chaude sanitaire : possibilité de coupler PAC avec ballon thermodynamique pour optimiser MaPrimeRénov",
      "Coteaux d'Estressin et Pipet : maisons individuelles 60-80, idéales pour rénovation lourde PAC + isolation",
      "Vieille ville : fonte des radiateurs souvent conservés avec PAC haute température (jusqu'à 65 °C)",
    ],
    faq: [
      {
        q: "Comment installer une PAC en centre historique de Vienne ?",
        a: "Nous étudions chaque cas avec l'ABF : positionnement en cour, masquage par claustra bois, ou passage en PAC air-eau avec unité extérieure non visible depuis la rue.",
      },
      {
        q: "Une clim réversible est-elle vraiment utile à Vienne en été ?",
        a: "Oui, plus que jamais. Nous mesurons régulièrement 35-38 °C en juillet-août sur les coteaux. La clim réversible chauffe l'hiver et rafraîchit l'été avec le même appareil.",
      },
      {
        q: "Quel coût pour climatiser un appartement viennois de 70 m² ?",
        a: "Bi-split 5 kW (séjour + chambre) : 3 500 à 4 500 € posé. Tri-split si pièces multiples : 5 500 à 6 800 €.",
      },
      {
        q: "Vous travaillez avec quels syndics à Vienne ?",
        a: "Tous les principaux du bassin viennois. Nous fournissons un dossier syndic clés en main pour le vote en AG des copropriétaires.",
      },
      {
        q: "Puis-je conserver mes radiateurs en fonte d'origine ?",
        a: "Oui dans la majorité des cas avec une PAC haute température. Validation par calcul thermique pendant la visite technique.",
      },
      {
        q: "Les aides MaPrimeRénov' sont-elles différentes à Vienne ?",
        a: "Le barème national est le même partout en France. Mais Vienne Condrieu Agglomération propose ponctuellement des aides locales complémentaires que nous identifions pour vous.",
      },
      {
        q: "Vous équipez aussi les restaurants des Halles de Vienne ?",
        a: "Oui : froid commercial (chambre froide, vitrines), climatisation salle, ventilation cuisine pro. Pose en horaires décalés possible.",
      },
    ],
    variant: "B",
  },
  {
    slug: "voiron",
    name: "Voiron",
    postalCode: "38500",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "20 000 habitants",
    distanceKm: 50,
    intro:
      "Capitale du Pays voironnais aux portes de la Chartreuse, Voiron présente un climat plus alpin que le reste de l'Isère du Nord : hivers plus longs, neige fréquente, étés tempérés. La pompe à chaleur y est particulièrement rentable car elle remplace souvent du chauffage électrique très énergivore.",
    localContext:
      "Le bâti est varié : centre ancien dense, faubourgs ouvriers du XIXᵉ, lotissements années 80-2000 sur les hauteurs. Nous adaptons systématiquement le dimensionnement à l'altitude (Voiron 290 m, hameaux jusqu'à 600 m).",
    habitatNotes:
      "Les maisons des hauteurs (Saint-Étienne-de-Crossey, Coublevie) demandent une PAC dimensionnée pour -12 °C minimum garanti, plus une résistance d'appoint pour les pics froids.",
    quartiers: ["Centre-ville", "Charmettes", "La Brunerie", "Sermorens", "Saint-Bruno", "Brunetière", "Plan Menu"],
    communesVoisines: ["Coublevie", "Saint-Étienne-de-Crossey", "Saint-Jean-de-Moirans", "Moirans", "La Murette", "Saint-Cassien"],
    specificites: [
      "Climat plus rigoureux : choix de PAC à plage de fonctionnement étendue (-20 °C garantis)",
      "Possibilité de couplage avec poêle à granulés en relève pour optimiser le confort",
      "Aides locales : Pays Voironnais propose ponctuellement des subventions complémentaires sur la rénovation",
      "Tarif gaz peu compétitif sur Voiron : la bascule PAC est souvent rentable dès la 5e année",
      "Hameaux d'altitude (≥ 500 m) : choix exclusif de modèles plage étendue + appoint électrique intégré",
    ],
    faq: [
      {
        q: "Une PAC tient-elle le coup à 600 m d'altitude vers Coublevie ?",
        a: "Oui avec un modèle adapté. Nous installons des PAC garanties jusqu'à -20 °C dans les hameaux d'altitude, avec résistance d'appoint pour les épisodes les plus froids.",
      },
      {
        q: "Quel temps de trajet pour un dépannage à Voiron ?",
        a: "50 minutes depuis notre atelier. Pour les contrats d'entretien, nous garantissons une intervention sous 48h en hiver.",
      },
      {
        q: "Combien coûte une PAC air-eau dans le Voironnais ?",
        a: "Pour une maison 110 m² : 13 500 à 16 500 € posé (légèrement plus que la plaine, vu les modèles à plage étendue requis). Aides identiques au reste de l'Isère.",
      },
      {
        q: "Vous proposez du couplage PAC + poêle à granulés ?",
        a: "Oui, c'est même fréquent dans le Voironnais où les hivers sont longs. Nous coordonnons avec un partenaire poêliste de confiance pour le chantier global.",
      },
      {
        q: "Y a-t-il des aides spécifiques au Pays Voironnais ?",
        a: "Pays Voironnais a proposé des aides ponctuelles sur la rénovation thermique. Nous vérifions l'éligibilité de votre dossier en visite technique.",
      },
      {
        q: "Quelle marque pour un climat alpin à Voiron ?",
        a: "Mitsubishi Ecodan plage étendue, Daikin Altherma 3 H, ou Atlantic Alféa Excellia. Tous tiennent jusqu'à -20 °C avec dégivrage intelligent.",
      },
      {
        q: "Mon chauffage actuel est électrique direct (convecteurs) — passer en PAC est-il rentable ?",
        a: "Oui, c'est même le cas le plus rentable : économies de 60-75% sur la facture en passant en PAC air-air ou air-eau. Amortissement 4-7 ans selon configuration.",
      },
    ],
    variant: "C",
  },
  {
    slug: "pont-de-cheruy",
    name: "Pont-de-Chéruy",
    postalCode: "38230",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "5 500 habitants",
    distanceKm: 20,
    intro:
      "Ancienne cité industrielle des bords du Rhône, Pont-de-Chéruy a vu son tissu pavillonnaire se développer fortement depuis 2000. Le secteur cumule logements ouvriers anciens à rénover et lotissements récents prêts pour la pompe à chaleur.",
    localContext:
      "Beaucoup de maisons des cités ouvrières sont mal isolées et chauffées à l'électrique direct. Le passage à la PAC air-air (split réversible) est la solution la plus rapide et la moins coûteuse en première étape : 3 000 à 5 000 € posé pour un mono-split chambre + séjour.",
    habitatNotes:
      "Les zones plus récentes (Tignieu-Jameyzieu, Charvieu) accueillent des maisons RT2005-RT2012 où la PAC air-eau est prioritaire.",
    quartiers: ["Centre", "Montignier", "Le Brotteau", "Quartier de la gare", "Le Vernay"],
    communesVoisines: ["Tignieu-Jameyzieu", "Charvieu-Chavagneux", "Anthon", "Chavanoz", "Janneyrias"],
    specificites: [
      "Beaucoup de ménages éligibles MaPrimeRénov bleu et jaune (revenus modestes) : reste à charge minimal après aides",
      "Multi-split 3 ou 4 unités intérieures : solution idéale pour passer toute une maison en PAC sans gros chantier",
      "Bruit en zone résidentielle dense : modèles silencieux ≤ 38 dB systématiques",
      "Pavillonnaire récent (Tignieu, Charvieu) : PAC air-eau directe sans gros œuvre",
      "Maisons cités ouvrières mal isolées : conseil systématique d'isolation combles avant pose PAC",
    ],
    faq: [
      {
        q: "Combien coûte un split réversible à Pont-de-Chéruy ?",
        a: "Un mono-split mural posé : 1 800 à 2 800 € selon puissance. Multi-split 3 unités : 5 500 à 7 500 €. Ces prix incluent la pose et la mise en service.",
      },
      {
        q: "Suis-je éligible à MaPrimeRénov ?",
        a: "Si vous êtes propriétaire occupant et que votre logement a plus de 15 ans, oui. Le montant dépend de vos revenus — nous le calculons gratuitement lors de la visite.",
      },
      {
        q: "Vous proposez le paiement échelonné après aides ?",
        a: "Oui via éco-PTZ jusqu'à 50 000 € sans intérêts. Cumulable avec MaPrimeRénov' et CEE pour étaler le reste à charge.",
      },
      {
        q: "Délais d'intervention à Pont-de-Chéruy ?",
        a: "Visite technique sous 48h. Pose PAC 1-3 jours selon configuration. Délai global devis-installation : 3-5 semaines.",
      },
      {
        q: "Vous équipez aussi les commerces de Tignieu-Jameyzieu ?",
        a: "Oui : froid commercial (boucherie, fromagerie, traiteur), climatisation, ventilation pro. Pose en horaires décalés possible.",
      },
      {
        q: "Quelle puissance PAC pour ma maison de 90 m² à Pont-de-Chéruy ?",
        a: "Typiquement 8 kW si isolée, 9-10 kW sinon. Calcul précis lors de la visite gratuite.",
      },
      {
        q: "Mon chauffage est tout-électrique : vraie économie possible ?",
        a: "Oui, économies de 60-75% en passant en PAC air-air (multi-split) ou air-eau. Amortissement de la PAC en 4-7 ans selon profil.",
      },
    ],
    variant: "A",
  },
  {
    slug: "cremieu",
    name: "Crémieu",
    postalCode: "38460",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "3 500 habitants",
    distanceKm: 25,
    intro:
      "Cité médiévale classée des Balcons du Dauphiné, Crémieu impose un cahier des charges patrimonial strict pour toute installation extérieure. Notre expérience des dossiers ABF et notre proximité (25 km) en font un partenaire naturel pour les habitants du secteur.",
    localContext:
      "Beaucoup de maisons en pierre du centre ancien : la PAC air-eau haute température est la solution privilégiée pour conserver radiateurs et caractère du logement. Sur le plateau et les hameaux, le pavillonnaire récent appelle plutôt des solutions split réversibles.",
    habitatNotes:
      "Bâti ancien souvent classé : déclaration préalable systématique, voire permis de construire selon emplacement. Nous prenons en charge le montage du dossier.",
    quartiers: ["Centre médiéval", "La Plaine", "Buisson Rond", "Le Bourg", "Saint-Hippolyte"],
    communesVoisines: ["Villemoirieu", "Optevoz", "Annoisin-Chatelans", "Hières-sur-Amby", "Saint-Romain-de-Jalionas"],
    specificites: [
      "Zone ABF étendue au cœur historique : positionnement et habillage de l'unité extérieure étudiés au cas par cas",
      "PAC air-eau haute température : compatible avec radiateurs en fonte d'origine",
      "Maisons de campagne (résidence secondaire) : installation pilotée à distance via app",
      "Beaucoup de logements en pierre apparente : conseil isolation intérieure recommandé",
      "Hivers parfois rigoureux sur le plateau : modèles plage étendue jusqu'à -15 °C",
    ],
    faq: [
      {
        q: "Puis-je installer une PAC dans une maison classée à Crémieu ?",
        a: "Oui, mais l'emplacement de l'unité extérieure doit être validé par l'ABF. Nous accompagnons toute la procédure.",
      },
      {
        q: "Vous gérez le pilotage à distance pour ma résidence secondaire ?",
        a: "Oui, toutes les PAC modernes que nous installons disposent d'une app pour piloter chauffage et alertes pannes à distance.",
      },
      {
        q: "Délai pour un devis à Crémieu ?",
        a: "Visite technique sous 72h (zone ABF demande plus de préparation), devis détaillé sous 24h après.",
      },
      {
        q: "Combien coûte une PAC pour maison de bourg en pierre ?",
        a: "PAC haute température 11-14 kW : 14 000 à 18 000 € posé. Compte tenu des aides, reste à charge 6 000 à 11 000 € selon revenus.",
      },
      {
        q: "Vous travaillez aussi à Optevoz, Hières-sur-Amby ?",
        a: "Oui, tous les Balcons du Dauphiné sont dans notre zone régulière. Pas de surcoût.",
      },
      {
        q: "Mode hors-gel pour ma résidence secondaire ?",
        a: "Oui, programmation automatique : la PAC maintient 5-8 °C en absence pour protéger les canalisations sans gaspiller.",
      },
      {
        q: "Quelles autorisations en zone classée à Crémieu ?",
        a: "Déclaration préalable systématique. Si l'unité ext. est visible depuis l'espace public : avis ABF requis. Délai 1-2 mois supplémentaires que nous gérons pour vous.",
      },
    ],
    variant: "B",
  },
  {
    slug: "morestel",
    name: "Morestel",
    postalCode: "38510",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "4 500 habitants",
    distanceKm: 25,
    intro:
      "Cité des peintres en plein cœur du Nord-Isère rural, Morestel et ses environs comptent beaucoup de maisons individuelles isolées, souvent grandes (>120 m²) et anciennement chauffées au fioul. C'est précisément le cas de figure où la pompe à chaleur génère les plus grosses économies.",
    localContext:
      "Les fermes rénovées et longères du secteur ont des besoins spécifiques : grande surface à chauffer, eau chaude sanitaire abondante, parfois piscine. Nous proposons des PAC air-eau de 11 à 16 kW couplées à un ballon thermodynamique haute capacité.",
    habitatNotes:
      "Faible densité : nous regroupons nos interventions dans le secteur pour rester compétitifs en délai et tarif.",
    quartiers: ["Centre", "Curtille", "Nivolas-de-Morestel (limitrophe)", "Champ Communal", "Le Bourg"],
    communesVoisines: ["Vézeronce-Curtin", "Passins", "Sermérieu", "Brangues", "Le Bouchage", "Arandon-Passins"],
    specificites: [
      "Sortie fioul : MaPrimeRénov + CEE peuvent couvrir 50 à 70% du projet pour les ménages modestes",
      "Grandes surfaces : PAC haute puissance avec planchers chauffants ou radiateurs basse température",
      "Piscine : module additionnel pour chauffer la piscine en intersaison sans surcoût électrique",
      "Faible densité : nous regroupons les chantiers du secteur pour rester compétitifs",
      "Maisons isolées en pierre : étude thermique systématique avant chiffrage",
    ],
    faq: [
      {
        q: "Ma cuve à fioul, qui s'en occupe ?",
        a: "Nous coordonnons avec un partenaire agréé pour le dégazage et l'enlèvement de la cuve dans le cadre du chantier global.",
      },
      {
        q: "Quel budget pour passer une longère de 180 m² en PAC ?",
        a: "Entre 16 000 et 22 000 € posé selon configuration, avec souvent 7 000 à 12 000 € d'aides cumulables. Devis détaillé après visite technique.",
      },
      {
        q: "Combien d'économies sur ma facture en sortant du fioul ?",
        a: "Pour 180 m² : passage d'environ 3 200 €/an (fioul) à 1 200 €/an (PAC). Économies 2 000 €/an = 20 000 € sur 10 ans.",
      },
      {
        q: "Vous installez aussi en hameau isolé autour de Morestel ?",
        a: "Oui, sans surcoût dans tout le bassin morestelois. Brangues, Passins, Le Bouchage, Arandon : zone régulière.",
      },
      {
        q: "Délai pour démontage de l'ancienne chaudière fioul ?",
        a: "Inclus dans le chantier. Pose nouvelle PAC + dépose ancienne : 3-4 jours. Cuve fioul : neutralisation 1-2 jours supplémentaires.",
      },
      {
        q: "Pilotage à distance possible pour ma maison ?",
        a: "Oui, toutes nos PAC sont connectées (app Daikin/Mitsubishi/Atlantic). Vous suivez consommation et températures depuis votre smartphone.",
      },
      {
        q: "Quelles aides spécifiques sortie de fioul à Morestel ?",
        a: "Coup de pouce chauffage CEE majoré (jusqu'à 5 000 €), bonus MaPrimeRénov' (+1 000 € pour Bleu/Jaune), TVA 5,5%.",
      },
    ],
    variant: "C",
  },
  {
    slug: "grenoble",
    name: "Grenoble",
    postalCode: "38000",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "158 000 habitants",
    distanceKm: 60,
    intro:
      "Capitale alpine, Grenoble cumule pollution atmosphérique en hiver (inversions thermiques) et étés caniculaires en pleine cuvette. La pompe à chaleur réversible est la réponse technique idéale : elle remplace les chaudières gaz/fioul (impact qualité de l'air) et apporte le rafraîchissement en été.",
    localContext:
      "Grenoble est dense : beaucoup de copropriétés des années 60-70 où la pose d'unité extérieure demande accord du syndic et plan acoustique. Sur les hauteurs (Bastille, Saint-Martin-le-Vinoux), maisons individuelles plus classiques.",
    habitatNotes:
      "La métropole grenobloise (Grenoble-Alpes-Métropole) propose des aides locales rénovation cumulables avec MaPrimeRénov — nous vous aidons à monter les dossiers.",
    quartiers: ["Centre-ville", "Chorier-Berriat", "Vieux Temple", "Hoche", "Notre-Dame", "Île Verte", "Mistral", "Eaux-Claires", "Bastille", "Bouchayer-Viallet"],
    communesVoisines: ["Saint-Martin-d'Hères", "Échirolles", "Fontaine", "Saint-Égrève", "Meylan", "La Tronche"],
    specificites: [
      "Copropriétés grenobloises : dossier syndic clés en main (plans, fiches techniques, attestation acoustique)",
      "Aides Grenoble-Alpes-Métropole cumulables avec MaPrimeRénov (jusqu'à 2 500 € supplémentaires selon éligibilité)",
      "Zone ZFE (zone à faibles émissions) : sortir des énergies fossiles devient un enjeu de revente immobilière",
      "Pollution hivernale (inversions thermiques) : passer du fioul à la PAC améliore la qualité de l'air local",
      "Étés très chauds en cuvette (jusqu'à 39 °C) : la PAC réversible devient un argument de vente immobilier",
    ],
    faq: [
      {
        q: "Vous intervenez vraiment jusqu'à Grenoble ?",
        a: "Oui, sur projet d'installation. Pour le dépannage, nous privilégions un délai sous 72h avec passage groupé. Distance : 60 km, soit 1h.",
      },
      {
        q: "Mon immeuble est en copropriété rue Lesdiguières, c'est faisable ?",
        a: "Oui dans 95% des cas. Nous fournissons le dossier complet pour le vote en AG. Délai global : 4 à 8 mois entre demande et installation.",
      },
      {
        q: "Quel coût pour climatiser un appartement T3 Grenoble Centre ?",
        a: "Bi-split moderne : 3 500 à 4 800 € posé. Si configuration avec balcon facilement utilisable, c'est plus rapide. Sinon, étude de faisabilité gratuite.",
      },
      {
        q: "Quelles aides locales à Grenoble-Alpes-Métropole en 2026 ?",
        a: "Aide rénovation Métropole jusqu'à 2 500 € selon revenus, cumulable avec MaPrimeRénov' et CEE. Nous montons les dossiers à votre place.",
      },
      {
        q: "Quels quartiers grenoblois sont éligibles à votre service ?",
        a: "Tous : centre-ville, Chorier-Berriat, Hoche, Île Verte, Bastille, Eaux-Claires. Plus la métropole : Saint-Martin-d'Hères, Échirolles, Meylan, Fontaine.",
      },
      {
        q: "Mon chauffage urbain peut-il être complété par une PAC ?",
        a: "Oui, certains immeubles en chauffage urbain ajoutent une climatisation réversible pour le confort été. C'est faisable techniquement, sous réserve d'accord syndic.",
      },
      {
        q: "Combien de temps pour passer du gaz à la PAC à Grenoble ?",
        a: "3 à 5 jours de chantier en maison individuelle. En copropriété : 4-8 mois selon délais d'AG.",
      },
    ],
    variant: "A",
  },
  {
    slug: "lyon",
    name: "Lyon",
    postalCode: "69000",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "520 000 habitants",
    distanceKm: 40,
    intro:
      "Métropole de plus d'un million d'habitants en aire urbaine, Lyon est notre principal marché hors Isère. Étés étouffants (cuvette + îlot de chaleur urbain), hivers humides : la climatisation réversible est devenue un standard, et la pompe à chaleur la solution de rénovation énergétique numéro 1.",
    localContext:
      "Lyon mélange immeubles haussmanniens (Presqu'île, 6ᵉ), copropriétés modernes (Confluence, Gerland), pavillonnaire dense (Mont d'Or, Vaise, La Mulatière). Chaque typologie demande une approche distincte.",
    habitatNotes:
      "Pour les immeubles du centre, l'unité extérieure doit souvent être posée sur balcon ou cour intérieure — masquage et acoustique sont des priorités. Nous travaillons régulièrement avec les syndics pour les dossiers d'AG.",
    quartiers: ["Presqu'île", "Vieux Lyon", "Croix-Rousse", "Confluence", "Gerland", "Part-Dieu", "Brotteaux", "Monplaisir", "Vaise", "Sainte-Foy", "Mont d'Or", "La Mulatière"],
    communesVoisines: ["Villeurbanne", "Caluire-et-Cuire", "Vénissieux", "Saint-Priest", "Bron", "Oullins"],
    specificites: [
      "Zone ABF étendue (Vieux Lyon, Presqu'île) : dossier ABF systématique, expertise nécessaire",
      "Copropriétés haussmanniennes : faisabilité étudiée au cas par cas, parfois solution PAC air-eau invisible",
      "Climatisation tertiaire : bureaux, commerces, restaurants — nous équipons aussi les pros",
      "ZFE (zone à faibles émissions) : pression réglementaire pour sortir du fioul/gaz, fenêtre d'aides ouverte",
      "Toits-terrasses fréquents en Lyon 6e/7e : possibilité d'intégrer l'unité ext. en toiture (ABF nécessaire)",
    ],
    faq: [
      {
        q: "J'habite Lyon 2ᵉ Presqu'île, puis-je installer une PAC ?",
        a: "Souvent oui mais c'est complexe : ABF, copropriété, voisinage, acoustique. Nous faisons une étude de faisabilité complète avant de chiffrer.",
      },
      {
        q: "Vous équipez aussi mon restaurant à Lyon ?",
        a: "Oui — installation, entretien et dépannage de cuisines, salles, vitrines réfrigérées et chambres froides. Voir notre page dédiée au froid commercial.",
      },
      {
        q: "Climatisation appartement Lyon 6e Brotteaux : prix ?",
        a: "T3 typique : 4 500 à 6 500 € posé pour un bi-split moderne silencieux. Démarches AG en sus (2-4 mois).",
      },
      {
        q: "Quelles aides à Lyon Métropole en 2026 ?",
        a: "MaPrimeRénov' nationale + CEE classique. Lyon Métropole propose ponctuellement des aides Eco-Rénov sur les rénovations globales. Nous identifions ce qui s'applique à votre dossier.",
      },
      {
        q: "Vous travaillez aussi à Mont d'Or, Sainte-Foy, La Mulatière ?",
        a: "Oui, toute l'aire urbaine lyonnaise. Notre atelier de Nivolas-Vermelle est à 40 min de Lyon par l'A43.",
      },
      {
        q: "Comment éviter le bruit pour les voisins en immeuble ?",
        a: "Choix d'unités ≤ 38 dB en mode silence, plots anti-vibrations, écran acoustique si nécessaire. Mesure acoustique signée fournie pour le dossier d'AG.",
      },
      {
        q: "Vous équipez les pharmacies, fleuristes, primeurs lyonnais ?",
        a: "Oui : froid commercial sur mesure, climatisation tertiaire, ventilation cuisine pro. Nos clients pros sont prioritaires en SAV (intervention sous 24h en panne).",
      },
    ],
    variant: "B",
  },
  {
    slug: "villeurbanne",
    name: "Villeurbanne",
    postalCode: "69100",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "155 000 habitants",
    distanceKm: 45,
    intro:
      "Deuxième ville du Rhône, Villeurbanne est dominée par les copropriétés des années 50-70 (Gratte-Ciel, Charpennes, Cusset) et les programmes neufs récents. Notre expertise des AG de copropriété et de l'acoustique en milieu dense fait la différence.",
    localContext:
      "Le secteur des Gratte-Ciel (immeubles classés) appelle des solutions discrètes — souvent PAC air-eau avec unité extérieure sur toiture-terrasse ou cour. À l'inverse, les programmes Carré-de-Soie et La Soie acceptent facilement les splits muraux.",
    habitatNotes:
      "Acoustique : la jurisprudence récente a renforcé les obligations vis-à-vis des voisins. Nous mesurons systématiquement le bruit perçu en limite de propriété.",
    quartiers: ["Gratte-Ciel", "Charpennes", "Cusset", "Tonkin", "La Doua", "Bel Air", "Les Brosses", "Saint-Jean", "Carré-de-Soie"],
    communesVoisines: ["Lyon 3ᵉ", "Lyon 6ᵉ", "Caluire-et-Cuire", "Bron", "Vaulx-en-Velin"],
    specificites: [
      "Très forte densité : pose en limite de propriété encadrée par le règlement sanitaire",
      "Copropriétés : nous fournissons un dossier complet pour le vote en AG",
      "Programmes neufs : compatibilité avec les VRD et locaux techniques prévus à la livraison",
      "Gratte-Ciel : immeubles classés, ABF systématique pour toute pose visible",
      "Quartier La Doua / La Soie : programmes neufs avec contraintes techniques précises",
    ],
    faq: [
      {
        q: "Mon voisin se plaint déjà de bruit, puis-je quand même installer une PAC ?",
        a: "Oui à condition de choisir un modèle silencieux et d'optimiser l'emplacement. Nous fournissons une étude acoustique signée si besoin.",
      },
      {
        q: "Climatisation appartement Villeurbanne T3 : prix ?",
        a: "Bi-split 5 kW : 3 500 à 4 800 € posé. Démarches AG copro à anticiper (2-4 mois) avant le chantier.",
      },
      {
        q: "Vous équipez les commerces de la Cours Émile-Zola ?",
        a: "Oui : restaurants, boulangeries, pharmacies, salons. Climatisation tertiaire et froid commercial. Pose en horaires décalés.",
      },
      {
        q: "Quelles aides à Villeurbanne en 2026 ?",
        a: "MaPrimeRénov' nationale + CEE classique. Lyon Métropole propose ponctuellement des aides Eco-Rénov supplémentaires que nous identifions.",
      },
      {
        q: "Délais devis et installation à Villeurbanne ?",
        a: "Devis sous 24h après visite technique. Installation 4-8 semaines pour appartement (délais syndic), 2-4 semaines pour maison.",
      },
      {
        q: "Vous travaillez aussi à Charpennes, Tonkin, Cusset ?",
        a: "Oui, tout Villeurbanne et la périphérie immédiate. Notre atelier de Nivolas-Vermelle est à 45 min via A43.",
      },
      {
        q: "Combien dB max en limite de propriété la nuit ?",
        a: "+3 dB d'émergence par rapport au bruit ambiant (arrêté du 5 décembre 2006). Nos modèles silencieux respectent largement cette norme.",
      },
    ],
    variant: "C",
  },
  {
    slug: "saint-priest",
    name: "Saint-Priest",
    postalCode: "69800",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "45 000 habitants",
    distanceKm: 30,
    intro:
      "Commune de l'Est lyonnais en pleine mutation, Saint-Priest combine zones pavillonnaires anciennes, programmes neufs et activité tertiaire. Sa proximité avec notre atelier (30 km) en fait un secteur où nous intervenons toutes les semaines.",
    localContext:
      "Le centre historique compte beaucoup de pavillons des années 60-80 : passage du gaz à la PAC air-eau sans changer les radiateurs dans la majorité des cas.",
    habitatNotes:
      "Beaucoup de maisons avec sous-sol semi-enterré : possibilité d'y loger l'unité intérieure de la PAC pour gagner de la place et limiter le bruit.",
    quartiers: ["Centre-ville", "Bel Air", "Manissieux", "Hauts de Feuilly", "Revaison", "Berliet", "Mi-Plaine"],
    communesVoisines: ["Mions", "Bron", "Vénissieux", "Corbas", "Genas", "Saint-Bonnet-de-Mure"],
    specificites: [
      "Bascule gaz → PAC : conservation des radiateurs existants dans 80% des cas",
      "Sous-sols semi-enterrés : intégration discrète de l'unité intérieure",
      "Maisons RT2012 récentes : ajout de splits réversibles pour le confort d'été",
      "Pavillonnaire dense année 70-90 : isolation combles à valider avant pose PAC",
      "Zone d'activités Mi-Plaine : nous équipons aussi les pros (climatisation tertiaire, froid)",
    ],
    faq: [
      {
        q: "Faut-il changer mes radiateurs en passant à la PAC ?",
        a: "Pas forcément. Une PAC moyenne ou haute température fonctionne avec la plupart des radiateurs. Nous le validons par calcul thermique.",
      },
      {
        q: "Combien coûte une PAC à Saint-Priest pour 110 m² ?",
        a: "PAC air-eau 9-11 kW : 12 500 à 15 500 € posé. Reste à charge typique après aides : 5 000 à 9 000 € selon revenus.",
      },
      {
        q: "Vous équipez les bureaux de la zone Mi-Plaine / Berliet ?",
        a: "Oui, climatisation tertiaire (VRV multi-zone), froid commercial pour PME et commerces. Devis gratuit en 48h.",
      },
      {
        q: "Quel délai d'intervention dépannage à Saint-Priest ?",
        a: "Sous 24-48h selon type de panne. Notre atelier est à 30 km — passage régulier dans la zone.",
      },
      {
        q: "Vous travaillez aussi à Bron, Vénissieux, Corbas ?",
        a: "Oui, toute la périphérie est lyonnaise est dans notre zone régulière. Pas de surcoût de déplacement.",
      },
      {
        q: "Mes voisins en lotissement : risque de plainte sur le bruit ?",
        a: "Modèles ≤ 38 dB systématiques + plots anti-vibrations + mode silence nuit. Nous mesurons l'émergence en limite de propriété si demandé.",
      },
      {
        q: "Vous prenez en charge les démarches MaPrimeRénov' ?",
        a: "Oui, dépôt du dossier sur maprimerenov.gouv.fr inclus dans nos prestations. Vous n'avez qu'à signer.",
      },
    ],
    variant: "A",
  },
  {
    slug: "meyzieu",
    name: "Meyzieu",
    postalCode: "69330",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "33 000 habitants",
    distanceKm: 30,
    intro:
      "Sur l'axe Lyon–Genève, Meyzieu est un pôle pavillonnaire dynamique où les demandes de pompe à chaleur explosent depuis 2023. Bonne desserte routière depuis Nivolas-Vermelle (30 minutes), nous intervenons fréquemment sur la commune et alentours.",
    localContext:
      "Le tissu pavillonnaire de Meyzieu (Pampaillou, Les Plantées) est largement composé de maisons des années 80-2000 — exactement la cible idéale pour une rénovation PAC avec excellent retour sur investissement.",
    habitatNotes:
      "Plusieurs lotissements avec piscine : possibilité de coupler PAC chauffage maison + chauffage piscine en intersaison.",
    quartiers: ["Centre", "Pampaillou", "Les Plantées", "Charvas", "Le Carreau", "Pré-d'Ail", "Le Clos", "Le Mathiolan"],
    communesVoisines: ["Décines-Charpieu", "Jonage", "Pusignan", "Genas", "Vaulx-en-Velin"],
    specificites: [
      "Maisons 90s avec radiateurs : PAC air-eau directe, pas de gros œuvre",
      "Couplage PAC + piscine : extension de saison de baignade sans coût supplémentaire",
      "Climatisation réversible : enjeu fort sur les pavillons récents souvent surchauffés en été",
      "Pavillonnaire homogène : effet vague — quand un voisin installe, le reste suit",
      "Beaucoup de propriétaires occupants éligibles MaPrimeRénov' Jaune ou Violet",
    ],
    faq: [
      {
        q: "Combien d'économies sur ma facture de chauffage à Meyzieu ?",
        a: "En passant d'une chaudière gaz vieille de 20 ans à une PAC air-eau moderne : -50 à -70% sur le poste chauffage. Calcul personnalisé lors de la visite.",
      },
      {
        q: "Combien coûte une PAC à Meyzieu pour 120 m² ?",
        a: "PAC air-eau 11 kW : 13 000 à 16 000 € posé. Reste à charge après aides : 5 500 à 10 000 € selon profil revenus.",
      },
      {
        q: "Vous chauffez aussi les piscines à Meyzieu ?",
        a: "Oui, PAC piscine inverter dimensionnée selon volume. Saison de baignade utile 5 mois/an avec une PAC bien choisie.",
      },
      {
        q: "Délai pour un devis à Meyzieu ?",
        a: "Visite technique sous 48h, devis sous 24h après. Installation possible 2-4 semaines plus tard selon planning.",
      },
      {
        q: "Vous équipez aussi les commerces du Grand Large ?",
        a: "Oui : restaurants, boutiques, salons. Climatisation tertiaire, froid commercial. Pose en horaires décalés possible.",
      },
      {
        q: "Quelles marques recommandez-vous à Meyzieu ?",
        a: "Daikin, Mitsubishi, Atlantic en milieu/haut de gamme. AUX en entrée de gamme avec très bon rapport qualité-prix.",
      },
      {
        q: "Vous travaillez à Jonage, Pusignan, Genas ?",
        a: "Oui, toute l'aire de Meyzieu est dans notre zone régulière. Pas de surcoût.",
      },
    ],
    variant: "B",
  },
  {
    slug: "decines-charpieu",
    name: "Décines-Charpieu",
    postalCode: "69150",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "27 000 habitants",
    distanceKm: 35,
    intro:
      "Limitrophe de Meyzieu et Villeurbanne, Décines-Charpieu présente un mix entre pavillonnaire ancien (centre, Le Carreau) et programmes neufs (OL Vallée, secteur du Grand Stade). Deux marchés différents, deux approches techniques distinctes que nous maîtrisons.",
    localContext:
      "Les programmes récents autour du Groupama Stadium sont équipés en VMC double flux et chauffage urbain ou collectif. La climatisation réversible y est l'enjeu principal — moins l'installation de PAC.",
    habitatNotes:
      "Le centre ancien et les hameaux compatibles avec PAC air-eau classique ou hybride pour les grandes maisons.",
    quartiers: ["Centre-ville", "OL Vallée", "Le Carreau", "Le Grand Large", "Bourg de Charpieu", "La Soie"],
    communesVoisines: ["Meyzieu", "Vaulx-en-Velin", "Bron", "Chassieu", "Jonage"],
    specificites: [
      "Programmes OL Vallée : focus sur la climatisation réversible silencieuse en appartements",
      "Hameaux et centre ancien : PAC air-eau classique",
      "Tertiaire : bureaux et commerces autour du stade — solutions VRV multi-zone",
      "Programme La Soie / Carré-de-Soie : neufs RT2012 nécessitant rafraîchissement été",
      "Mix copropriétés et pavillonnaire : approche techniquement variée selon secteur",
    ],
    faq: [
      {
        q: "Mon appartement neuf à OL Vallée n'a pas de clim, est-ce ajoutable ?",
        a: "Oui, sous réserve d'autorisation du syndic et d'un emplacement validé pour l'unité extérieure (souvent balcon ou loggia).",
      },
      {
        q: "Combien coûte une clim réversible appartement T3 à Décines ?",
        a: "Bi-split silencieux : 3 800 à 5 200 € posé selon marque. Démarches syndic à anticiper en amont.",
      },
      {
        q: "Vous équipez les bureaux autour du Groupama Stadium ?",
        a: "Oui, climatisation tertiaire VRV multi-zone pour PME. Étude énergétique gratuite avec calcul rentabilité.",
      },
      {
        q: "Délai installation à Décines-Charpieu ?",
        a: "Visite sous 48h, devis 24h après. Pose 1-3 jours en appartement, 2-4 jours en maison. Délai global 3-6 semaines après accord.",
      },
      {
        q: "Vous proposez la maintenance annuelle ?",
        a: "Oui, contrats à 180-280 €/an avec visite annuelle + dépannages prioritaires. Indispensable pour préserver garantie constructeur.",
      },
      {
        q: "Quelle aide possible à Décines en 2026 ?",
        a: "MaPrimeRénov' nationale + CEE. Lyon Métropole propose ponctuellement des aides Eco-Rénov complémentaires.",
      },
      {
        q: "Vous travaillez aussi à Chassieu, Jonage, Vaulx-en-Velin ?",
        a: "Oui, toute la couronne est lyonnaise. Pas de surcoût de déplacement, intervention groupée possible.",
      },
    ],
    variant: "C",
  },
  {
    slug: "chambery",
    name: "Chambéry",
    postalCode: "73000",
    department: "Savoie (73)",
    region: "Auvergne-Rhône-Alpes",
    population: "60 000 habitants",
    distanceKm: 70,
    intro:
      "Préfecture de la Savoie au pied du massif des Bauges, Chambéry impose des contraintes climatiques (hivers longs, neige) et patrimoniales (centre historique classé). Nous y intervenons régulièrement, en particulier pour les rénovations énergétiques de logements anciens.",
    localContext:
      "Beaucoup de maisons savoyardes avec gros volumes, hauts plafonds et inertie pierre. La PAC air-eau dimensionnée généreusement (souvent 14 kW+) est nécessaire pour atteindre le confort attendu.",
    habitatNotes:
      "Hivers fréquents à -10/-15 °C : choix exclusif de PAC plage étendue et résistance d'appoint intégrée. Pas de compromis sur le matériel.",
    quartiers: ["Centre-ville", "Chambéry-le-Vieux", "Bissy", "Mérande", "Maché", "Chantemerle", "Les Combes", "Les Hauts de Chambéry"],
    communesVoisines: ["La Motte-Servolex", "Cognin", "Bassens", "Saint-Alban-Leysse", "Barberaz"],
    specificites: [
      "Climat froid : PAC garanties -20 °C, appoint intégré, dégivrage reverse-cycle",
      "Bâti savoyard ancien : étude thermique systématique, parfois préconisation isolation préalable",
      "Aides locales : Métropole Grand Chambéry propose des subventions complémentaires",
      "Hauteurs : altitude 270-450 m, modèles plage étendue obligatoires",
      "Centre patrimonial classé : ABF systématique pour façades visibles depuis l'espace public",
    ],
    faq: [
      {
        q: "Une PAC est-elle vraiment adaptée au climat de Chambéry ?",
        a: "Oui, à condition de choisir un modèle prévu pour climat froid (R32, plage de fonctionnement étendue, appoint intégré). Nous installons exclusivement ce type de matériel à 70 km de notre siège.",
      },
      {
        q: "Combien coûte une PAC à Chambéry pour 130 m² ?",
        a: "PAC air-eau 14 kW plage étendue : 15 000 à 19 000 € posé. Aides MaPrimeRénov' + CEE : 6 500 à 12 500 € selon profil. Reste à charge typique 5 000 à 10 500 €.",
      },
      {
        q: "Vous chauffez aussi des grandes maisons savoyardes ?",
        a: "Oui : grosses bâtisses jusqu'à 300 m². Souvent PAC haute puissance (16-20 kW) ou couplage PAC + poêle à granulés/bûches.",
      },
      {
        q: "Délai pour un devis à Chambéry ?",
        a: "Visite technique sous 5 jours (distance 70 km), devis sous 24h après. Pour optimiser, nous regroupons plusieurs RDV sur Chambéry-Aix.",
      },
      {
        q: "Quelles aides Métropole Grand Chambéry ?",
        a: "La métropole propose ponctuellement des aides à la rénovation énergétique, cumulables avec MaPrimeRénov'. Vérification éligibilité incluse dans nos devis.",
      },
      {
        q: "Pose en zone classée centre historique : faisable ?",
        a: "Oui avec dossier ABF. Solutions discrètes : unité ext. en cour, masquage par habillage bois, parfois passage en PAC air-eau invisible depuis la rue.",
      },
      {
        q: "Vous travaillez à La Motte-Servolex, Cognin, Bassens ?",
        a: "Oui, toute la couronne chambérienne. Intervention sur RDV regroupés.",
      },
    ],
    variant: "A",
  },
  {
    slug: "aix-les-bains",
    name: "Aix-les-Bains",
    postalCode: "73100",
    department: "Savoie (73)",
    region: "Auvergne-Rhône-Alpes",
    population: "30 000 habitants",
    distanceKm: 80,
    intro:
      "Station thermale au bord du lac du Bourget, Aix-les-Bains compte beaucoup de résidences secondaires et locations saisonnières. Le pilotage à distance des PAC et la fiabilité hivernale (gel des canalisations) sont des enjeux quotidiens pour nos clients.",
    localContext:
      "Climat plus doux qu'à Chambéry grâce au lac, mais étés chauds et humides. La climatisation réversible y prend tout son sens, notamment pour les locations meublées qui doivent garantir le confort.",
    habitatNotes:
      "Beaucoup d'appartements résidentiels en bord de lac : copropriétés, contraintes esthétiques, dossiers AG.",
    quartiers: ["Centre-ville", "Lac", "Hauts d'Aix", "Marlioz", "Choudy", "Le Revard", "Boncelin", "Franklin"],
    communesVoisines: ["Grésy-sur-Aix", "Tresserve", "Drumettaz-Clarafond", "Brison-Saint-Innocent", "Mouxy"],
    specificites: [
      "Pilotage app à distance : indispensable pour résidences secondaires et locations",
      "Mode hors-gel automatique : protection contre le gel canalisations en absence prolongée",
      "Climatisation locations saisonnières : argument commercial fort pour propriétaires Airbnb",
      "Quartier thermal Marlioz : nombreux appartements en copropriété, dossiers AG fréquents",
      "Centre-ville bord de lac : ABF requis pour pose façade visible",
    ],
    faq: [
      {
        q: "Je loue mon appartement sur Airbnb, faut-il la clim ?",
        a: "De plus en plus, oui — c'est un critère premier sur les recherches estivales. Une clim réversible justifie 15 à 30 €/nuit supplémentaires en haute saison.",
      },
      {
        q: "Combien coûte une clim T3 à Aix-les-Bains ?",
        a: "Bi-split moderne silencieux : 3 800 à 5 200 € posé. Tri-split : 5 500 à 7 000 € si pièces multiples.",
      },
      {
        q: "Mode hors-gel pour ma résidence secondaire à Aix ?",
        a: "Oui, programmation auto qui maintient 5-8 °C en absence prolongée. Protège canalisations et meubles. Pilotage à distance via app.",
      },
      {
        q: "Vous équipez aussi les hôtels et restaurants thermaux ?",
        a: "Oui : climatisation tertiaire, ventilation cuisine pro, froid commercial. Pose en intersaison pour minimiser la gêne client.",
      },
      {
        q: "Quel délai pour un devis à Aix-les-Bains ?",
        a: "Visite technique sous 5 jours, devis sous 24h après. RDV groupés avec Chambéry pour optimiser la logistique.",
      },
      {
        q: "Quelle marque pour location saisonnière haut de gamme ?",
        a: "Daikin Stylish ou Mitsubishi Kirigamine : design soigné, silencieux, application client. Argument premium pour Airbnb haut de gamme.",
      },
      {
        q: "Vous travaillez à Grésy-sur-Aix, Tresserve ?",
        a: "Oui, toute la couronne aixoise. RDV groupés possibles avec d'autres clients de la zone.",
      },
    ],
    variant: "B",
  },
  {
    slug: "annecy",
    name: "Annecy",
    postalCode: "74000",
    department: "Haute-Savoie (74)",
    region: "Auvergne-Rhône-Alpes",
    population: "130 000 habitants",
    distanceKm: 110,
    intro:
      "Annecy combine attractivité touristique majeure, prix de l'immobilier élevés et exigences patrimoniales fortes (vieille ville, lac classé). Nous intervenons sur Annecy et sa périphérie sur projet, en privilégiant les chantiers d'envergure pour optimiser les déplacements.",
    localContext:
      "Beaucoup de propriétaires investisseurs et de résidences secondaires haut de gamme. Le matériel installé est généralement premium (Daikin, Mitsubishi Electric, AUX, AtlanticMaradja) — nous proposons toutes les marques.",
    habitatNotes:
      "Réglementation acoustique stricte autour du lac. Préconisation systématique d'unités < 35 dB en limite de propriété.",
    quartiers: ["Vieille Ville", "Bonlieu", "Les Romains", "Loverchy", "Novel", "Annecy-le-Vieux (limitrophe)", "Cran-Gevrier (limitrophe)", "Albigny"],
    communesVoisines: ["Seynod", "Cran-Gevrier", "Meythet", "Annecy-le-Vieux", "Veyrier-du-Lac"],
    specificites: [
      "Distance : nous regroupons les chantiers Annecy pour rester compétitifs",
      "Haut de gamme : matériel premium, finitions soignées, dossiers ABF complets",
      "Locations saisonnières : valorisation du bien par climatisation discrète",
      "Bord de lac : règlementation acoustique stricte, modèles ≤ 35 dB exigés",
      "Vieille Ville zone classée : pose ABF obligatoire avec dossier complet",
    ],
    faq: [
      {
        q: "Vous vous déplacez vraiment jusqu'à Annecy ?",
        a: "Oui pour des installations complètes ou des chantiers de plusieurs jours. Pour de petites interventions ponctuelles, nous regroupons avec d'autres clients du secteur pour mutualiser les frais de route.",
      },
      {
        q: "Combien coûte une PAC haut de gamme à Annecy ?",
        a: "Pour une maison 140 m² premium : 17 000 à 22 000 € posé en Daikin/Mitsubishi haut de gamme avec finitions soignées. Aides MaPrimeRénov' + CEE applicables.",
      },
      {
        q: "Climatisation pour résidence secondaire bord de lac ?",
        a: "Oui : modèles ≤ 35 dB, pilotage app, mode hors-gel. Important pour rentabiliser une location saisonnière haut de gamme.",
      },
      {
        q: "Délai installation à Annecy ?",
        a: "3-6 semaines entre devis et installation, selon disponibilités matériel et autorisations (ABF, copro). Visite technique sous 7 jours (distance 110 km).",
      },
      {
        q: "Vous équipez les hôtels et restaurants annéciens ?",
        a: "Oui pour les chantiers d'envergure : climatisation tertiaire, ventilation cuisine, froid commercial. Sur petits projets, nous orientons vers nos partenaires haut-savoyards.",
      },
      {
        q: "Quelles aides Grand Annecy en 2026 ?",
        a: "MaPrimeRénov' + CEE classique. Grand Annecy a proposé ponctuellement des aides locales rénovation. Vérification de votre éligibilité incluse.",
      },
      {
        q: "Le bruit en bord de lac : règlementation stricte ?",
        a: "Oui, +3 dB max d'émergence en limite de propriété la nuit. Nos modèles silencieux respectent largement ces normes.",
      },
    ],
    variant: "C",
  },
];

// ─── Petites communes Nord-Isère (zone d'intervention quotidienne) ────
// Concurrence Google quasi nulle = ranking rapide en 4-8 semaines
cities.push(
  {
    slug: "villefontaine",
    name: "Villefontaine",
    postalCode: "38090",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "18 500 habitants",
    distanceKm: 5,
    intro:
      "Ville nouvelle limitrophe de L'Isle-d'Abeau, Villefontaine concentre une demande croissante en pompes à chaleur. Beaucoup de pavillons et copropriétés horizontales 80-2000 idéaux pour la rénovation énergétique. ECO CVC est à 5 km, intervention quotidienne.",
    localContext:
      "Le tissu pavillonnaire de Villefontaine est largement RT2005-RT2012, avec parfois encore du chauffage gaz à remplacer. La PAC air-eau y est l'option n°1, avec MaPrimeRénov' et CEE qui couvrent 50-70% du projet pour la majorité des ménages.",
    habitatNotes:
      "Les copropriétés horizontales (Servenoble, Les Roches) demandent l'accord du syndic — nous fournissons systématiquement le dossier complet pour le vote en AG.",
    quartiers: ["Servenoble", "Les Roches", "Les Sayes", "Saint-Bonnet", "Roche", "Centre Simone-Veil"],
    communesVoisines: ["L'Isle-d'Abeau", "Saint-Quentin-Fallavier", "Vaulx-Milieu", "Four", "La Verpillière"],
    specificites: [
      "Atelier ECO CVC à 5 km — interventions de dépannage souvent le jour même",
      "Aides locales CAPI cumulables avec MaPrimeRénov'",
      "Pavillonnaire récent : pose PAC air-eau directe sans gros œuvre dans 80% des cas",
      "Bruit voisinage : modèles ≤ 38 dB systématiques en lotissement dense",
    ],
    faq: [
      { q: "Combien coûte une PAC à Villefontaine pour 100 m² ?", a: "PAC air-eau 8-10 kW : 12 000 à 15 000 € posé. Reste à charge typique après aides : 5 000 à 9 500 € selon profil de revenus." },
      { q: "Vous intervenez aussi à Saint-Quentin-Fallavier ?", a: "Oui, toute la zone CAPI est dans notre périmètre quotidien. Pas de surcoût de déplacement." },
      { q: "Délai pour un devis à Villefontaine ?", a: "Visite technique sous 48h, devis détaillé sous 24h après. Soit 3-4 jours total." },
      { q: "Aides locales CAPI en 2026 ?", a: "L'agglomération CAPI propose ponctuellement des subventions complémentaires sur la rénovation énergétique. Vérification incluse dans nos devis." },
      { q: "Climatisation appartement copropriété : faisable à Villefontaine ?", a: "Oui dans 95% des cas avec accord syndic. Nous fournissons le dossier technique complet pour le vote." },
    ],
    variant: "A",
  },
  {
    slug: "saint-quentin-fallavier",
    name: "Saint-Quentin-Fallavier",
    postalCode: "38070",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "6 200 habitants",
    distanceKm: 8,
    intro:
      "Pôle économique majeur du Nord-Isère grâce à la zone industrielle Chesnes, Saint-Quentin-Fallavier mêle pavillonnaire résidentiel et bâtiments tertiaires/logistiques. ECO CVC équipe particuliers et entreprises de la zone.",
    localContext:
      "Côté résidentiel : maisons des années 80-2000 idéales pour PAC air-eau. Côté tertiaire/industriel : climatisation des bureaux, ventilation entrepôts, froid commercial pour les sociétés de la zone Chesnes.",
    habitatNotes:
      "Lotissements pavillonnaires à proximité du château de Fallavier, construction 90-2010. Bonne base pour rénovation énergétique simple.",
    quartiers: ["Centre", "Le Château", "Heyrieux (limitrophe)", "Chesnes", "Les Marais"],
    communesVoisines: ["Villefontaine", "L'Isle-d'Abeau", "Heyrieux", "Grenay", "Satolas-et-Bonce"],
    specificites: [
      "Zone industrielle Chesnes : nous équipons aussi les pros (climatisation tertiaire, froid commercial)",
      "Pavillonnaire 90-2010 : passage gaz → PAC air-eau sans changement radiateurs",
      "Atelier ECO CVC à 8 km — interventions rapides",
    ],
    faq: [
      { q: "Vous équipez les bureaux de la zone Chesnes ?", a: "Oui, climatisation tertiaire VRV multi-zone, froid commercial pour PME et entrepôts logistiques. Devis gratuit." },
      { q: "Combien coûte une PAC particulier à Saint-Quentin-Fallavier ?", a: "PAC air-eau 110 m² : 12 500 à 15 500 € posé. Reste à charge moyen 5 000 à 9 000 €." },
      { q: "Délai d'installation à Saint-Quentin ?", a: "Visite sous 48h, pose 2-4 semaines plus tard selon planning." },
      { q: "Vous proposez aussi la maintenance entrepôts industriels ?", a: "Oui, contrats de maintenance avec visites trimestrielles ou semestrielles selon volume d'équipement." },
    ],
    variant: "B",
  },
  {
    slug: "heyrieux",
    name: "Heyrieux",
    postalCode: "38540",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "5 200 habitants",
    distanceKm: 18,
    intro:
      "Sur l'axe Lyon-Bourgoin, Heyrieux est un bourg dynamique en pleine extension pavillonnaire. Beaucoup de jeunes propriétaires en accession 2015-2025 qui équipent leur première maison.",
    localContext:
      "Maisons RT2012-RE2020 dominantes en lotissements récents. La PAC air-eau ou multi-split réversible est demandée dès la construction, mais nombreux propriétaires viennent nous voir pour ajouter de la climatisation 2-3 ans après emménagement.",
    habitatNotes:
      "Lotissements pavillonnaires homogènes : effet vague — quand un voisin installe, le reste suit dans les 12-24 mois.",
    quartiers: ["Centre", "Charantin", "La Combe", "Le Bord", "Bonnefamille (limitrophe)"],
    communesVoisines: ["Saint-Quentin-Fallavier", "Bonnefamille", "Grenay", "Diémoz", "Villefontaine"],
    specificites: [
      "Pavillonnaire récent : climatisation réversible souvent ajoutée 2-3 ans après emménagement",
      "Aides MaPrimeRénov' réservées aux logements > 15 ans : peu applicable au neuf, mais CEE OK",
      "Atelier ECO CVC à 18 km",
    ],
    faq: [
      { q: "Maison neuve : aides PAC possibles à Heyrieux ?", a: "MaPrimeRénov' s'applique uniquement aux logements > 15 ans. Pour un neuf, le CEE et la TVA 5,5% restent applicables." },
      { q: "Climatisation réversible 4 pièces à Heyrieux : prix ?", a: "Quadri-split moderne : 6 500 à 8 500 € posé. Délai 1-2 jours." },
      { q: "Vous intervenez à Bonnefamille ?", a: "Oui, toutes les communes voisines de Heyrieux sont dans notre zone quotidienne." },
      { q: "Délai pour un devis ?", a: "Visite sous 48-72h, devis sous 24h après." },
    ],
    variant: "C",
  },
  {
    slug: "tignieu-jameyzieu",
    name: "Tignieu-Jameyzieu",
    postalCode: "38230",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "8 500 habitants",
    distanceKm: 22,
    intro:
      "Limitrophe de Pont-de-Chéruy, Tignieu-Jameyzieu présente un mix entre maisons anciennes du village et pavillons récents. Très active en rénovation énergétique depuis 2022.",
    localContext:
      "Mélange de cités ouvrières mal isolées (à rénover en priorité) et de lotissements 90-2010 pour PAC air-eau directe. Beaucoup de propriétaires Bleus/Jaunes éligibles aux aides maximales.",
    habitatNotes:
      "Centre village ancien : pose plus contraignante, parfois zone protégée. Hameaux et pavillons récents : pose simple en 1-2 jours.",
    quartiers: ["Tignieu centre", "Jameyzieu centre", "Le Lavoir", "Le Marais", "Bourg"],
    communesVoisines: ["Pont-de-Chéruy", "Charvieu-Chavagneux", "Anthon", "Chavanoz", "Janneyrias"],
    specificites: [
      "Beaucoup de ménages Bleus/Jaunes : reste à charge minimal après aides cumulées",
      "Sortie de fioul fréquente : bonus MaPrimeRénov' + Coup de pouce",
      "Maintenance trimestrielle proposée pour les contrats secteur",
    ],
    faq: [
      { q: "Sortie de fioul à Tignieu : combien d'aides ?", a: "Pour profil Bleu : MaPrimeRénov' 5 000 € + bonus 1 000 € + Coup de pouce 5 000 € = 11 000 € + TVA réduite. Reste à charge typique : 3 000 à 5 000 €." },
      { q: "Combien coûte une PAC pour 110 m² ?", a: "PAC air-eau : 12 500 à 15 500 € posé. Aides cumulées 6 000 à 11 000 € selon profil." },
      { q: "Vous intervenez à Pont-de-Chéruy aussi ?", a: "Oui, tout le bassin Pont-de-Chéruy / Tignieu / Charvieu est dans notre zone." },
      { q: "Délai dépannage hiver ?", a: "Sous 24-48h pour clients sous contrat, 72h hors contrat." },
    ],
    variant: "A",
  },
  {
    slug: "charvieu-chavagneux",
    name: "Charvieu-Chavagneux",
    postalCode: "38230",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "10 000 habitants",
    distanceKm: 23,
    intro:
      "Bordant le Rhône au nord du département, Charvieu-Chavagneux mélange tissu pavillonnaire dense et bâti industriel/commercial. Demande croissante en climatisation réversible depuis les canicules.",
    localContext:
      "Maisons mitoyennes du centre, pavillons individuels en périphérie, plus quelques copropriétés récentes. Mélange technique : nous adaptons selon configuration.",
    habitatNotes:
      "Bord du Rhône : étés chauds (microclimat vallée), la clim réversible devient un argument de revente immobilière.",
    quartiers: ["Centre Charvieu", "Centre Chavagneux", "Le Bourg", "Les Plates", "Le Carreau"],
    communesVoisines: ["Tignieu-Jameyzieu", "Pont-de-Chéruy", "Anthon", "Janneyrias", "Saint-Romain-de-Jalionas"],
    specificites: [
      "Microclimat vallée du Rhône : étés très chauds, la clim devient prioritaire",
      "Tissu pavillonnaire dense : modèles silencieux ≤ 38 dB",
      "Quelques copropriétés : dossier syndic clés en main fourni",
    ],
    faq: [
      { q: "Climatisation pavillon mitoyen à Charvieu : possible ?", a: "Oui, attention au positionnement de l'unité ext. (≥ 1,5 m du voisin), modèle silencieux, plots anti-vibrations. Faisabilité étudiée en visite." },
      { q: "Combien coûte un multi-split 4 unités ?", a: "6 500 à 8 500 € posé selon marque. Tri-split (3 unités) : 5 200 à 6 800 €." },
      { q: "Délai à Charvieu-Chavagneux ?", a: "Visite sous 72h, pose sous 2-4 semaines." },
      { q: "Vous équipez aussi les commerces du Brotteau ?", a: "Oui, climatisation tertiaire et froid commercial. Pose en horaires décalés." },
    ],
    variant: "B",
  },
  {
    slug: "ruy-montceau",
    name: "Ruy-Montceau",
    postalCode: "38300",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "4 000 habitants",
    distanceKm: 4,
    intro:
      "Commune limitrophe de Bourgoin-Jallieu, Ruy-Montceau est notre zone d'intervention la plus proche après Nivolas-Vermelle. Maisons pavillonnaires individuelles en grande majorité, idéales pour la rénovation énergétique.",
    localContext:
      "Tissu pavillonnaire 80-2010 dominant. Beaucoup de propriétaires en accession ayant fini de rembourser leur prêt — moment idéal pour investir dans la rénovation énergétique avec financement étalé.",
    habitatNotes:
      "Hameaux et zones agricoles autour du bourg : grandes maisons rurales parfois > 150 m², PAC haute puissance et plancher chauffant en rénovation.",
    quartiers: ["Ruy centre", "Montceau", "Le Marais", "Les Grangettes", "Boulieu"],
    communesVoisines: ["Bourgoin-Jallieu", "Nivolas-Vermelle", "Maubec", "Sérézin-de-la-Tour", "Saint-Savin"],
    specificites: [
      "Atelier ECO CVC à 4 km — intervention dépannage souvent le jour même",
      "Maisons rurales : possibilité de PAC haute puissance + plancher chauffant en rénovation lourde",
      "CAPI : aides locales cumulables avec MaPrimeRénov'",
    ],
    faq: [
      { q: "Délai dépannage à Ruy-Montceau ?", a: "Souvent le jour même, jamais plus de 24h. Notre atelier est à 4 km." },
      { q: "Combien coûte une PAC pour grande maison rurale 180 m² ?", a: "PAC air-eau 14-16 kW haute puissance : 17 000 à 22 000 € posé. Aides 7 000 à 12 000 € selon profil." },
      { q: "Vous équipez aussi les exploitations agricoles ?", a: "Oui, climatisation tertiaire, ventilation locaux pro, froid pour activités annexes (vente directe, transformation)." },
      { q: "Aides CAPI à Ruy-Montceau ?", a: "Cumulables avec MaPrimeRénov'. Vérification dans nos devis." },
    ],
    variant: "C",
  },
  {
    slug: "domarin",
    name: "Domarin",
    postalCode: "38300",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "2 200 habitants",
    distanceKm: 3,
    intro:
      "Petite commune jouxtant Bourgoin-Jallieu, Domarin est essentiellement résidentielle. Pavillonnaire 80-2010 dominant. Notre proximité (3 km) permet des interventions ultra-rapides.",
    localContext:
      "Lotissements pavillonnaires homogènes — quand un voisin installe une PAC, plusieurs autres suivent dans l'année. Peu de copropriétés.",
    habitatNotes: "Maisons individuelles 100-130 m², chauffage gaz ou électrique direct dominant.",
    quartiers: ["Domarin centre", "Le Bourg", "Les Crêts", "Pré-Pommier (limitrophe Bourgoin)"],
    communesVoisines: ["Bourgoin-Jallieu", "Nivolas-Vermelle", "Maubec", "Ruy-Montceau"],
    specificites: [
      "Atelier ECO CVC à 3 km — intervention souvent dans l'heure pour urgences",
      "Pavillonnaire récent : pose PAC air-eau directe sans gros œuvre",
      "Effet vague communal : multiples chantiers groupés dans le même lotissement",
    ],
    faq: [
      { q: "Combien coûte une PAC à Domarin ?", a: "Pour 110 m² : 12 500 à 15 500 € posé. Reste à charge 5 000 à 9 000 € après aides." },
      { q: "Délai d'intervention à Domarin ?", a: "Souvent le jour même pour dépannage, sous 48h pour visite technique. 3 km depuis notre atelier." },
      { q: "Mes voisins ont-ils déjà fait appel à vous ?", a: "Probablement — nous intervenons régulièrement à Domarin. N'hésitez pas à demander des références locales en visite." },
    ],
    variant: "A",
  },
  {
    slug: "maubec",
    name: "Maubec",
    postalCode: "38300",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "3 000 habitants",
    distanceKm: 7,
    intro:
      "Commune résidentielle au sud de Bourgoin-Jallieu, Maubec mélange village ancien et pavillons récents. Activité économique avec quelques zones artisanales en bordure.",
    localContext:
      "Centre ancien : maisons en pierre nécessitant PAC haute température + isolation préalable. Périphérie : pavillonnaire 80-2010 standard pour PAC air-eau directe.",
    habitatNotes: "Hameaux ruraux : grandes parcelles, possibilité géothermie pour les budgets confortables.",
    quartiers: ["Maubec centre", "Le Bourg", "La Praille", "Champ Communal"],
    communesVoisines: ["Bourgoin-Jallieu", "Domarin", "Ruy-Montceau", "Sérézin-de-la-Tour"],
    specificites: [
      "Centre ancien en pierre : PAC haute température (jusqu'à 65 °C) compatible avec radiateurs en fonte",
      "Hameaux ruraux : possibilité géothermie capteurs horizontaux",
      "Atelier ECO CVC à 7 km",
    ],
    faq: [
      { q: "PAC pour maison ancienne en pierre à Maubec ?", a: "PAC air-eau haute température recommandée : conserve les radiateurs existants, fonctionne jusqu'à 65 °C de départ d'eau." },
      { q: "Géothermie envisageable à Maubec ?", a: "Oui pour les grandes parcelles (≥ 1,5x surface chauffée). Investissement plus lourd (18-28k€) mais COP > 4 toute l'année." },
      { q: "Combien d'aides pour sortie de fioul à Maubec ?", a: "Profil Bleu : jusqu'à 11 000 € cumulés. Profil Jaune : 9 500 €. Profil Violet : 6 000 €." },
    ],
    variant: "B",
  },
  {
    slug: "saint-alban-de-roche",
    name: "Saint-Alban-de-Roche",
    postalCode: "38300",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "1 200 habitants",
    distanceKm: 4,
    intro:
      "Petite commune au sud immédiat de Bourgoin-Jallieu, Saint-Alban-de-Roche est principalement pavillonnaire. Notre proximité (4 km) permet des interventions ultra-rapides et des chantiers groupés.",
    localContext:
      "Pavillonnaire 90-2010 dominant, peu de logement collectif. Habitants jeunes propriétaires souvent en deuxième achat — bons candidats pour la rénovation énergétique.",
    habitatNotes: "Maisons 100-130 m² avec terrains dégagés : pose unité extérieure facile.",
    quartiers: ["Saint-Alban centre", "Le Bourg", "Le Verdoyant"],
    communesVoisines: ["Bourgoin-Jallieu", "Domarin", "Nivolas-Vermelle", "Ruy-Montceau"],
    specificites: [
      "Atelier ECO CVC à 4 km",
      "Pavillonnaire récent : PAC air-eau pose directe",
      "Aides CAPI cumulables MaPrimeRénov'",
    ],
    faq: [
      { q: "Délai d'intervention à Saint-Alban-de-Roche ?", a: "Souvent le jour même, jamais plus de 24h. 4 km depuis notre atelier." },
      { q: "Combien coûte une PAC à Saint-Alban ?", a: "PAC air-eau 100 m² : 11 500 à 14 500 € posé." },
      { q: "Aides cumulées en sortie de gaz à Saint-Alban ?", a: "Selon profil de revenus : 5 000 à 10 000 € d'aides. Vérification dans nos devis gratuits." },
    ],
    variant: "C",
  },
  {
    slug: "saint-savin",
    name: "Saint-Savin",
    postalCode: "38300",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "3 200 habitants",
    distanceKm: 8,
    intro:
      "Bourg rural au sud-est de Bourgoin-Jallieu, Saint-Savin présente un habitat pavillonnaire avec quelques maisons rurales anciennes. Zone d'intervention quotidienne pour ECO CVC.",
    localContext:
      "Mélange village ancien (PAC haute température conseillée) et lotissements récents (PAC air-eau standard). Beaucoup de sorties de fioul en cours.",
    habitatNotes: "Hameaux ruraux : maisons grandes parcelles, intérêt potentiel pour la géothermie.",
    quartiers: ["Saint-Savin centre", "Le Bourg", "Le Mottier", "La Plaine"],
    communesVoisines: ["Bourgoin-Jallieu", "Demptézieu", "Sérézin-de-la-Tour", "Saint-Chef"],
    specificites: [
      "Sortie de fioul fréquente — Coup de pouce CEE majoré",
      "Hameaux ruraux : géothermie intéressante sur grandes parcelles",
      "Atelier ECO CVC à 8 km — intervention rapide",
    ],
    faq: [
      { q: "Sortie de fioul à Saint-Savin ?", a: "Profil Bleu : jusqu'à 11 000 € cumulés (MaPrimeRénov' + bonus + Coup de pouce + TVA). Reste à charge typique 3 500 à 6 500 €." },
      { q: "Maison ancienne en pierre à Saint-Savin : quelle PAC ?", a: "PAC air-eau haute température compatible radiateurs fonte d'origine. Calcul thermique en visite gratuite." },
      { q: "Délai dépannage à Saint-Savin ?", a: "24-48h selon saison, 24h pour clients sous contrat." },
    ],
    variant: "A",
  },
  {
    slug: "serezin-de-la-tour",
    name: "Sérézin-de-la-Tour",
    postalCode: "38300",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "2 100 habitants",
    distanceKm: 6,
    intro:
      "Petite commune à l'est de Bourgoin-Jallieu, Sérézin-de-la-Tour combine bourg ancien et lotissements pavillonnaires récents. ECO CVC y intervient régulièrement.",
    localContext:
      "Centre village avec quelques maisons en pierre, périphérie pavillonnaire 90-2010. Zones rurales en hameaux pour les amateurs de calme.",
    habitatNotes: "Hameaux d'altitude modérée (300-400 m) : modèles PAC plage étendue préférables.",
    quartiers: ["Sérézin centre", "Le Bourg", "La Combe", "Hameau du Plat"],
    communesVoisines: ["Bourgoin-Jallieu", "Saint-Savin", "Saint-Chef", "Ruy-Montceau"],
    specificites: [
      "Atelier ECO CVC à 6 km",
      "Hameaux d'altitude : modèles plage étendue (-15 °C garantis)",
      "Aides CAPI cumulables MaPrimeRénov'",
    ],
    faq: [
      { q: "Combien coûte une PAC à Sérézin ?", a: "PAC air-eau 100 m² : 12 000 à 14 500 € posé. Reste à charge moyen 5 000 à 8 500 €." },
      { q: "PAC adaptée aux hivers de Sérézin ?", a: "Modèle plage étendue garanti -15 °C avec dégivrage automatique. Standard chez nous pour cette zone." },
      { q: "Délai d'intervention à Sérézin ?", a: "Visite sous 48h, pose sous 2-3 semaines." },
    ],
    variant: "B",
  },
  {
    slug: "saint-chef",
    name: "Saint-Chef",
    postalCode: "38890",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "3 500 habitants",
    distanceKm: 18,
    intro:
      "Bourg rural à mi-chemin entre Bourgoin et La Tour-du-Pin, Saint-Chef est dominé par son église romane classée. Habitat ancien important + extensions pavillonnaires récentes.",
    localContext:
      "Centre ancien classé partiellement ABF — pose unité ext. demande étude. Pavillons récents en périphérie pour pose PAC air-eau standard.",
    habitatNotes: "Maisons en pierre du bourg : PAC haute température + isolation à valider avant pose.",
    quartiers: ["Saint-Chef centre", "Le Bourg", "Le Vivier", "La Plaine"],
    communesVoisines: ["La Tour-du-Pin", "Saint-Savin", "Sérézin-de-la-Tour", "Vénérieu", "Trept"],
    specificites: [
      "Centre classé : zone ABF partielle, dossier à monter",
      "Maisons en pierre : PAC haute température conseillée",
      "Hameaux ruraux : géothermie possible sur grandes parcelles",
    ],
    faq: [
      { q: "Pose PAC en zone ABF à Saint-Chef ?", a: "Oui, avec déclaration préalable. Nous gérons le dossier et privilégions les emplacements non visibles depuis l'espace public." },
      { q: "Maison rurale ancienne 200 m² : quelle PAC ?", a: "PAC haute température 14-16 kW avec étude isolation préalable. Devis 17 000 à 22 000 € posé, aides 7 000 à 12 000 €." },
      { q: "Délai à Saint-Chef ?", a: "Visite sous 5 jours, pose sous 3-4 semaines." },
    ],
    variant: "C",
  },
  {
    slug: "cessieu",
    name: "Cessieu",
    postalCode: "38110",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "3 200 habitants",
    distanceKm: 14,
    intro:
      "Commune limitrophe de La Tour-du-Pin, Cessieu mélange tissu pavillonnaire et zones rurales. Habitat principalement individuel, quelques copropriétés horizontales récentes.",
    localContext:
      "Pavillons 80-2010 + hameaux. Beaucoup de sorties de fioul en cours, profils éligibles aux aides maximales.",
    habitatNotes: "Hameaux à 350-450 m d'altitude : modèles PAC plage étendue préférables.",
    quartiers: ["Cessieu centre", "Le Bourg", "Le Pré", "Hameau de Curtille"],
    communesVoisines: ["La Tour-du-Pin", "Saint-Clair-de-la-Tour", "Saint-Didier-de-la-Tour", "Saint-Jean-de-Soudain"],
    specificites: [
      "Sorties de fioul fréquentes : Coup de pouce maximal applicable",
      "Hameaux d'altitude : PAC plage étendue (-15 °C garantis)",
      "Atelier ECO CVC à 14 km",
    ],
    faq: [
      { q: "Coût PAC à Cessieu pour 130 m² ?", a: "PAC air-eau 11 kW plage étendue : 14 000 à 17 000 € posé. Reste à charge 5 500 à 10 000 € selon profil." },
      { q: "Sortie de fioul aides cumulées ?", a: "Profil Bleu : 11 000 € + 2 600 € de TVA réduite ≈ 13 600 € total. Reste à charge typique 3 500 à 5 500 €." },
      { q: "Délai à Cessieu ?", a: "Visite sous 4-5 jours, pose sous 3 semaines." },
    ],
    variant: "A",
  },
  {
    slug: "saint-didier-de-la-tour",
    name: "Saint-Didier-de-la-Tour",
    postalCode: "38110",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "1 800 habitants",
    distanceKm: 16,
    intro:
      "Bourg en bordure du lac de Saint-Didier, Saint-Didier-de-la-Tour combine habitat rural et résidences en bord de lac. Demande croissante depuis les canicules pour climatisation réversible.",
    localContext:
      "Maisons rurales et pavillons. Quelques résidences secondaires bord de lac où le pilotage à distance est apprécié (mode hors-gel automatique).",
    habitatNotes: "Hivers moyennement rigoureux, étés chauds : la PAC réversible est idéale.",
    quartiers: ["Saint-Didier centre", "Bord de lac", "Le Bourg", "Hameau de Pré-Drouet"],
    communesVoisines: ["La Tour-du-Pin", "Cessieu", "Saint-Clair-de-la-Tour", "Faverges-de-la-Tour"],
    specificites: [
      "Résidences secondaires : pilotage app à distance + mode hors-gel",
      "PAC réversible : argument fort vu la chaleur estivale du bassin",
      "Lac : règlementation environnementale standard, pas de contrainte spécifique",
    ],
    faq: [
      { q: "Pilotage à distance pour résidence secondaire ?", a: "Oui, toutes nos PAC modernes ont une app de pilotage. Mode hors-gel automatique pour absences prolongées." },
      { q: "Coût PAC à Saint-Didier-de-la-Tour ?", a: "PAC air-eau 100 m² : 12 500 à 15 000 € posé." },
      { q: "Délai à Saint-Didier ?", a: "Visite sous 5 jours, pose sous 3-4 semaines." },
    ],
    variant: "B",
  },
  {
    slug: "trept",
    name: "Trept",
    postalCode: "38460",
    department: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "1 900 habitants",
    distanceKm: 22,
    intro:
      "Bourg rural des Balcons du Dauphiné au nord-est de Bourgoin-Jallieu, Trept présente un habitat majoritairement ancien (maisons en pierre) avec extensions pavillonnaires récentes.",
    localContext:
      "Maisons en pierre du centre : PAC haute température obligatoire pour conserver les radiateurs en fonte. Périphérie pavillonnaire pour PAC air-eau standard.",
    habitatNotes: "Hameaux et zones agricoles : grandes parcelles propices à la géothermie.",
    quartiers: ["Trept centre", "Le Bourg", "La Plaine", "Hameau de Salagnon"],
    communesVoisines: ["Crémieu", "Optevoz", "Soleymieu", "Salagnon"],
    specificites: [
      "Maisons en pierre : PAC haute température + radiateurs fonte conservés",
      "Hameaux ruraux : géothermie intéressante",
      "Distance 22 km — RDV groupés possibles avec autres clients du secteur",
    ],
    faq: [
      { q: "PAC pour maison en pierre à Trept ?", a: "PAC air-eau haute température (jusqu'à 65 °C) compatible avec radiateurs fonte d'origine. Pas besoin de tout changer." },
      { q: "Géothermie possible à Trept ?", a: "Oui sur grandes parcelles (≥ 1,5x surface). Investissement 18-28 k€ mais COP > 4 toute l'année — rentable sur > 15 ans." },
      { q: "Délai à Trept ?", a: "Visite sous 1 semaine, pose sous 4-6 semaines selon planning." },
    ],
    variant: "C",
  },
  {
    slug: "venissieux",
    name: "Vénissieux",
    postalCode: "69200",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "66 000 habitants",
    distanceKm: 35,
    intro:
      "3ᵉ ville du Rhône, Vénissieux est un terrain SEO majeur pour la rénovation énergétique : pavillonnaire ancien des Minguettes, copropriétés des années 60-70 et programmes neufs côté Parilly. ECO CVC intervient à Vénissieux toutes les semaines.",
    localContext:
      "La ville cumule deux profils : copropriétés HLM ou privées chauffées au gaz collectif (à basculer en PAC collective ou en clim individuelle) et pavillons des années 50-80 souvent encore au fioul ou électrique direct. Dans les deux cas, MaPrimeRénov' Copro et CEE ouvrent des aides massives.",
    habitatNotes:
      "Maisons en bande du Moulin-à-Vent, pavillons des Minguettes (rénovation ANRU), copropriétés tour Parilly : chaque secteur demande un traitement différent. Visite technique gratuite avant chaque devis.",
    quartiers: ["Minguettes", "Parilly", "Moulin-à-Vent", "Centre", "Charréard", "Max-Barel", "Léo-Lagrange"],
    communesVoisines: ["Saint-Fons", "Feyzin", "Corbas", "Saint-Priest", "Lyon 8e", "Bron"],
    specificites: [
      "Copropriétés gaz collectif des années 60-70 : nous accompagnons les syndics du dossier AG à la pose PAC collective",
      "Pavillonnaire Minguettes / Moulin-à-Vent : PAC air-eau 8-10 kW, reste à charge < 6 000 € pour foyers modestes après MaPrimeRénov'",
      "Clim réversible 990 € très demandée en appartement (été > 35 °C en plein cœur urbain)",
      "Zone industrielle Lyon-Sud / Vénissieux : froid commercial, climatisation entrepôts, dépannage 24/48h",
      "Aides Métropole de Lyon Éco-rénov' cumulables avec MaPrimeRénov' (jusqu'à 4 000 € supplémentaires)",
    ],
    faq: [
      { q: "Vous intervenez sur les copropriétés de Vénissieux ?", a: "Oui : étude technique, dossier AG (article 25), déclaration préalable mairie, pose coordonnée. Voir notre page dédiée copropriété." },
      { q: "Combien coûte une clim réversible à Vénissieux ?", a: "Mono-split à partir de 990 € TTC posé. Bi-split 2 490 €. En appartement, comptez 1 jour de pose, sans démarche urbanisme dans la majorité des cas." },
      { q: "Quel délai d'intervention dépannage ?", a: "Sous 24-48h en chauffe ou clim. Atelier à 35 km, équipe sur Lyon-Sud quasi quotidiennement." },
      { q: "Aides Métropole de Lyon disponibles ?", a: "Oui : Éco-rénov' jusqu'à 4 000 €, cumulable avec MaPrimeRénov' et CEE. Nous montons le dossier." },
      { q: "Maison fioul à passer en PAC à Vénissieux ?", a: "Bonus sortie fioul + MaPrimeRénov' Sérénité = jusqu'à 11 000 € d'aides. Reste à charge typique : 4 000 à 6 000 € pour 100 m²." },
    ],
    variant: "A",
  },
  {
    slug: "vaulx-en-velin",
    name: "Vaulx-en-Velin",
    postalCode: "69120",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "53 000 habitants",
    distanceKm: 30,
    intro:
      "Voisine immédiate de Villeurbanne, Vaulx-en-Velin connaît une vague de rénovation énergétique massive (programme ANRU + écoquartier du Carré-de-Soie). ECO CVC y intervient régulièrement, en pavillonnaire comme en copropriété.",
    localContext:
      "Mix entre Mas-du-Taureau / Grappinière (rénovation lourde, PAC collective éligible MaPrimeRénov' Copro), pavillonnaire du Village et Vernay, et programmes neufs RE2020 du Carré-de-Soie où la clim réversible 3,5 kW à 990 € fait fureur.",
    habitatNotes:
      "Beaucoup de logements anciens à isoler avant pose PAC : nous validons toujours l'isolation combles et menuiseries lors de la visite technique gratuite.",
    quartiers: ["Village", "Vernay", "Mas-du-Taureau", "Grappinière", "Carré-de-Soie", "La Côte", "Pont-des-Planches"],
    communesVoisines: ["Villeurbanne", "Décines-Charpieu", "Bron", "Lyon 3e", "Meyzieu", "Rillieux-la-Pape"],
    specificites: [
      "Programmes neufs Carré-de-Soie : clim réversible 990 € installable en 1 jour (mono-split T3-T4)",
      "Pavillons du Village / Vernay : PAC air-eau 7-9 kW, ballon thermodynamique pour ECS",
      "Copropriétés en rénovation ANRU : chauffage collectif gaz à basculer en PAC géothermique ou aérothermique collective",
      "Aides Métropole de Lyon Éco-rénov' + ANAH renforcée sur certains secteurs",
      "Centre de formation aux métiers de l'énergie ENTPE : nous accueillons régulièrement des stagiaires",
    ],
    faq: [
      { q: "Clim réversible appartement neuf Carré-de-Soie ?", a: "Oui, mono-split 3,5 kW à 990 € TTC posé. Pose en 1 journée, sans démarche urbanisme si l'unité ext. est sur le balcon prévu." },
      { q: "PAC pour pavillon au Vernay ?", a: "PAC air-eau 7-9 kW. Devis 12-15 k€ posé, reste à charge 4-7 k€ après aides selon revenus." },
      { q: "Vous travaillez avec les bailleurs sociaux ?", a: "Oui, marché public ou prestation directe. Étude énergétique amont incluse." },
      { q: "Bruit unité ext. en zone dense ?", a: "Modèles ≤ 38 dB + plots anti-vibrations + mode nuit silencieux. Conforme à l'arrêté préfectoral en limite de propriété." },
    ],
    variant: "B",
  },
  {
    slug: "bron",
    name: "Bron",
    postalCode: "69500",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "41 000 habitants",
    distanceKm: 32,
    intro:
      "Située à l'Est de Lyon, Bron est un secteur résidentiel et tertiaire dense (hôpital Édouard-Herriot voisin, université Lyon-2 Bron, zone aéroport). ECO CVC y équipe maisons individuelles, copropriétés et bureaux.",
    localContext:
      "Pavillonnaire des années 50-80 dominant (secteurs Terraillon, Parilly, Genas), avec programmes neufs RE2020 vers Bron-Parilly. Demande forte pour la clim réversible en été (îlot de chaleur urbain) et la PAC en remplacement de chaudières gaz vétustes.",
    habitatNotes:
      "Zone aéroport : nuisance sonore extérieure existante, ce qui rend la pose PAC moins contraignante côté voisinage. Les maisons mitoyennes du Terraillon demandent une étude d'emplacement précise.",
    quartiers: ["Terraillon", "Parilly", "Centre", "Le Fort", "Les Genêts", "Caravelle"],
    communesVoisines: ["Vénissieux", "Saint-Priest", "Décines-Charpieu", "Vaulx-en-Velin", "Lyon 8e", "Lyon 3e"],
    specificites: [
      "Pavillonnaire dense Terraillon / Genêts : PAC air-eau 7-9 kW, ballon thermodynamique en sous-sol",
      "Copropriétés des années 70 : passage gaz collectif → PAC collective ou individuelle selon configuration",
      "Programmes neufs Bron-Parilly : pré-câblage clim réversible inclus dans la majorité des appartements",
      "Aides Métropole de Lyon Éco-rénov' + MaPrimeRénov' cumulables",
      "Climatisation tertiaire (cabinets médicaux, bureaux Bron-Parilly) : VRV multi-zones, devis sous 48h",
    ],
    faq: [
      { q: "Clim réversible à Bron pour appartement ?", a: "Mono-split 3,5 kW à 990 € TTC posé. Bi-split 2 490 €. Pose 1 jour, intervention sans gros œuvre." },
      { q: "Délai PAC à Bron ?", a: "Visite sous 48h, devis 24h, pose 3-5 semaines selon disponibilité. Mise en service immédiate." },
      { q: "Vous équipez les cabinets médicaux du secteur Édouard-Herriot ?", a: "Oui, climatisation tertiaire, VRV multi-zones, contrats d'entretien annuels. Devis gratuit." },
      { q: "Maison ancienne au Terraillon : PAC adaptée ?", a: "Oui, PAC moyenne ou haute température compatible radiateurs fonte. Validation par calcul thermique en visite." },
    ],
    variant: "A",
  },
  {
    slug: "caluire-et-cuire",
    name: "Caluire-et-Cuire",
    postalCode: "69300",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "43 000 habitants",
    distanceKm: 38,
    intro:
      "Au nord immédiat de Lyon, Caluire-et-Cuire est un secteur résidentiel cossu (Saint-Clair, Vassieux, plateau) avec un fort pouvoir d'achat. La clim réversible et la PAC y sont en demande croissante, autant pour le confort que pour valoriser le patrimoine immobilier.",
    localContext:
      "Maisons des années 1900-1960 sur le plateau, pavillonnaire 70-90 vers Bissardon et Cuire-le-Bas, copropriétés bourgeoises en bord de Saône. Beaucoup de chaudières gaz à remplacer avant 2030 (objectif RE2020).",
    habitatNotes:
      "Maisons anciennes en pierre : PAC haute température (jusqu'à 65 °C) compatible radiateurs fonte. Combles souvent à isoler avant pose pour optimiser le COP.",
    quartiers: ["Saint-Clair", "Vassieux", "Plateau", "Bissardon", "Cuire-le-Haut", "Cuire-le-Bas", "Montessuy"],
    communesVoisines: ["Lyon 4e", "Rillieux-la-Pape", "Sathonay-Camp", "Fontaines-sur-Saône", "Cailloux-sur-Fontaines"],
    specificites: [
      "Maisons en pierre 1900-1950 : PAC haute température, radiateurs fonte conservés",
      "Pavillonnaire Bissardon / Cuire : PAC air-eau 9-12 kW, plancher chauffant rénovation possible",
      "Copropriétés bord de Saône : étude impact unité ext. en façade Saône, ABF parfois requis",
      "Bornes de recharge VE + PAC + photovoltaïque : projet global énergétique fréquent",
      "Aides Métropole de Lyon Éco-rénov' cumulables avec MaPrimeRénov'",
    ],
    faq: [
      { q: "ABF nécessaire à Caluire pour clim ?", a: "Selon le secteur (proximité Saône classée). Nous vérifions et déposons la déclaration préalable si requise." },
      { q: "PAC pour maison de maître à Saint-Clair ?", a: "PAC air-eau haute température, radiateurs fonte conservés. Devis 14-18 k€ pour 150-200 m², reste à charge selon revenus." },
      { q: "Pack PAC + photovoltaïque + borne VE ?", a: "Oui, étude énergétique globale gratuite. Cumul aides MaPrimeRénov' + Prime CEE + Advenir VE." },
      { q: "Délai à Caluire ?", a: "Visite 48h, pose sous 4-6 semaines en saison." },
    ],
    variant: "B",
  },
  {
    slug: "rillieux-la-pape",
    name: "Rillieux-la-Pape",
    postalCode: "69140",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "30 000 habitants",
    distanceKm: 36,
    intro:
      "Au nord-est de Lyon, Rillieux-la-Pape combine programmes ANRU (rénovation copropriétés Ville-Nouvelle) et pavillonnaire ancien des Vorgines, Crépieux-la-Pape, Bottet. ECO CVC y équipe particuliers et bailleurs.",
    localContext:
      "La Ville-Nouvelle (années 60-70) est en pleine rénovation énergétique avec MaPrimeRénov' Copro. Pavillonnaire de Crépieux et Bottet : remplacement chaudières gaz et fioul par PAC air-eau.",
    habitatNotes:
      "Logements collectifs nombreux : nous accompagnons les syndics et bailleurs pour les PAC collectives. Pavillonnaire de Crépieux : sous-sols semi-enterrés idéaux pour intégration unité intérieure.",
    quartiers: ["Ville-Nouvelle", "Crépieux-la-Pape", "Vancia", "Bottet", "Les Vorgines", "Le Loup-Pendu"],
    communesVoisines: ["Caluire-et-Cuire", "Sathonay-Camp", "Fontaines-Saint-Martin", "Miribel", "Vaulx-en-Velin"],
    specificites: [
      "Copropriétés Ville-Nouvelle : MaPrimeRénov' Copro + CEE + ANAH renforcée, dossier monté avec syndic",
      "Pavillons Crépieux : PAC air-eau + ballon thermodynamique, intégration sous-sol",
      "Bailleurs sociaux (Lyon Métropole Habitat) : marchés publics ou prestations directes",
      "Climatisation réversible 990 € très demandée en logements collectifs (été chaud, étages élevés)",
      "Aides cumulées : MaPrimeRénov' + CEE + Éco-rénov' Métropole jusqu'à 70 % du montant",
    ],
    faq: [
      { q: "Copropriété Ville-Nouvelle : on peut basculer en PAC collective ?", a: "Oui, étude technique gratuite, accompagnement AG, montage MaPrimeRénov' Copro. Subvention jusqu'à 35 % pour la copro + aides individuelles cumulables." },
      { q: "Combien de temps de pose en pavillon Crépieux ?", a: "1 à 2 jours pour la PAC air-eau + 1 jour pour le ballon thermodynamique. Total : 2-3 jours d'intervention." },
      { q: "Vous travaillez avec Lyon Métropole Habitat ?", a: "Oui, soit en marché public, soit en sous-traitance. Référencés QualiPAC depuis 2018." },
      { q: "Délai dépannage à Rillieux ?", a: "Sous 24-48h. Atelier à 36 km, intervention dans la journée si appel matin." },
    ],
    variant: "C",
  },
  {
    slug: "tassin-la-demi-lune",
    name: "Tassin-la-Demi-Lune",
    postalCode: "69160",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "23 000 habitants",
    distanceKm: 42,
    intro:
      "À l'ouest de Lyon, Tassin-la-Demi-Lune est un secteur résidentiel haut de gamme (Le Méginand, Alaï, centre) avec demande forte en PAC haute performance et clim discrète. ECO CVC intervient sur tout l'ouest lyonnais.",
    localContext:
      "Maisons bourgeoises 1900-1970 sur grands terrains, pavillonnaire 80-2000, copropriétés récentes. Beaucoup de propriétaires aisés cherchent une solution haut de gamme : Daikin Altherma 3, PAC géothermique, gainable invisible.",
    habitatNotes:
      "Grands terrains permettent l'intégration paysagère discrète de l'unité extérieure. Géothermie possible sur certaines parcelles ≥ 1 500 m². Sur les copropriétés, ABF parfois nécessaire (proximité monuments).",
    quartiers: ["Le Méginand", "Alaï", "Centre", "Gorge-de-Loup", "Les Verrières", "La Raude"],
    communesVoisines: ["Lyon 5e", "Lyon 9e", "Sainte-Foy-lès-Lyon", "Écully", "Charbonnières-les-Bains", "Francheville"],
    specificites: [
      "Maisons de maître : PAC haute température + radiateurs fonte ou plancher chauffant rénovation",
      "Géothermie sur grands terrains : COP > 4 toute l'année, rentabilité longue durée",
      "Gainable invisible : aucune unité visible, idéal pour patrimoine architectural préservé",
      "Pack PAC + photovoltaïque + batterie domestique : autoconsommation 70 % atteignable",
      "ABF parfois requis : nous gérons la déclaration préalable mairie",
    ],
    faq: [
      { q: "PAC géothermique à Tassin sur 2 000 m² ?", a: "Oui, sondes verticales ou capteurs horizontaux selon nappe. Investissement 22-28 k€, COP > 4, rentable sur 15-20 ans." },
      { q: "Clim réversible discrète pour maison de maître ?", a: "Gainable invisible (bouches plafond) ou cassette encastrée. Devis 6 900 € gainable / 1 990 € cassette par pièce." },
      { q: "Aides MaPrimeRénov' à Tassin ?", a: "Oui mais souvent secteur 'intermédiaire' ou 'supérieur' (revenus). Cumul possible avec CEE et Éco-rénov' Métropole." },
      { q: "Vous équipez les bureaux d'Alaï ?", a: "Oui, climatisation tertiaire VRV, contrat d'entretien annuel, dépannage sous 24h." },
    ],
    variant: "B",
  },
  {
    slug: "givors",
    name: "Givors",
    postalCode: "69700",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "20 000 habitants",
    distanceKm: 38,
    intro:
      "Au sud de la Métropole de Lyon, Givors est en pleine reconversion énergétique (Plan ANRU, écoquartier des Vernes). Pavillonnaire ancien et copropriétés à rénover : terrain de rénovation énergétique massif.",
    localContext:
      "Mix entre maisons ouvrières des années 1900-1960 (ancien bassin sidérurgique), copropriétés des années 60-70, et programmes neufs RE2020 vers les Vernes. Forte demande PAC pour remplacement fioul/gaz et clim réversible 990 € en appartement.",
    habitatNotes:
      "Maisons en pierre du centre ancien : PAC haute température. Copropriétés des Vernes : étude collective possible avec syndic, MaPrimeRénov' Copro éligible.",
    quartiers: ["Centre", "Les Vernes", "Bans", "Canal", "Freydière", "Combe Robert"],
    communesVoisines: ["Grigny", "Loire-sur-Rhône", "Saint-Romain-en-Gier", "Chasse-sur-Rhône", "Ternay", "Communay"],
    specificites: [
      "Maisons ouvrières en pierre : PAC air-eau haute température 65 °C, radiateurs fonte conservés",
      "Copropriétés Vernes : MaPrimeRénov' Copro + ANAH + aides Métropole = 60-70 % du montant",
      "Climat plus chaud que Lyon nord (effet vallée) : clim réversible très demandée",
      "Bonus sortie fioul jusqu'à 4 000 € + MaPrimeRénov' Sérénité pour foyers modestes",
      "Bornes de recharge VE en complément PAC : pack global Advenir + CEE",
    ],
    faq: [
      { q: "PAC pour maison ouvrière en pierre à Givors ?", a: "PAC air-eau haute température, radiateurs fonte d'origine conservés. Devis 11-13 k€, reste à charge 3-5 k€ pour foyers modestes." },
      { q: "Aides cumulées maximales à Givors ?", a: "MaPrimeRénov' Sérénité (jusqu'à 11 000 €) + CEE (jusqu'à 4 500 €) + Éco-rénov' Métropole (4 000 €) = 19 500 € possibles." },
      { q: "Clim réversible appartement aux Vernes ?", a: "Mono-split 990 € posé. Si copropriété refuse mur extérieur visible : cassette encastrée 1 990 € /pièce." },
      { q: "Délai dépannage Givors ?", a: "Sous 48h. Atelier à 38 km, équipe sur Lyon-Sud très souvent." },
    ],
    variant: "C",
  },
  {
    slug: "oullins-pierre-benite",
    name: "Oullins-Pierre-Bénite",
    postalCode: "69600",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "37 000 habitants",
    distanceKm: 36,
    intro:
      "Au sud immédiat de Lyon, la commune nouvelle Oullins-Pierre-Bénite combine secteur résidentiel ancien (centre Oullins, La Saulaie) et zones industrielles en mutation (Pierre-Bénite). ECO CVC y intervient PAC, clim et froid commercial.",
    localContext:
      "Pavillonnaire 1900-1970 dominant côté Oullins, copropriétés années 60-80 vers La Saulaie, zone industrielle Pierre-Bénite (Total, Arkema) avec demande froid industriel. Demande croissante PAC pour remplacement chaudières fioul/gaz.",
    habitatNotes:
      "Centre ancien Oullins : maisons mitoyennes en pierre, attention emplacement unité ext. en cour. Copropriétés Saulaie : montage dossier AG inclus.",
    quartiers: ["Centre Oullins", "La Saulaie", "Les Bouddhas", "Le Bac", "Pierre-Bénite Centre", "Hauts de Pierre-Bénite"],
    communesVoisines: ["Lyon 5e", "Lyon 7e", "Sainte-Foy-lès-Lyon", "Saint-Genis-Laval", "Irigny", "La Mulatière"],
    specificites: [
      "Maisons mitoyennes en pierre Oullins centre : PAC haute température, étude emplacement cour intérieure",
      "Copropriétés Saulaie : dossier AG + déclaration préalable inclus, MaPrimeRénov' Copro éligible",
      "Zone industrielle Pierre-Bénite : froid commercial, climatisation entrepôts, dépannage 24/48h",
      "Climat plus chaud (vallée du Rhône) : clim réversible très rentable été",
      "Aides Métropole de Lyon Éco-rénov' cumulables MaPrimeRénov' + CEE",
    ],
    faq: [
      { q: "Maison mitoyenne Oullins centre : où mettre l'unité ext. ?", a: "Cour intérieure côté arrière dans 90 % des cas. Étude technique gratuite + photo-montage avant devis." },
      { q: "Vous équipez les industriels de Pierre-Bénite ?", a: "Oui, froid industriel, climatisation tertiaire, contrat d'entretien et astreinte 24h. Devis sous 48h." },
      { q: "Aides cumulées à Oullins ?", a: "MaPrimeRénov' + CEE + Éco-rénov' Métropole. Jusqu'à 60-70 % du montant pour foyers modestes en passage fioul → PAC." },
      { q: "Délai pose en copro Saulaie ?", a: "AG : 2-6 mois. Pose après vote : 1 jour. Total moyen : 3-7 mois selon calendrier syndic." },
    ],
    variant: "A",
  },
  {
    slug: "sainte-foy-les-lyon",
    name: "Sainte-Foy-lès-Lyon",
    postalCode: "69110",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "22 000 habitants",
    distanceKm: 40,
    intro:
      "Banlieue cossue à l'ouest de Lyon, Sainte-Foy-lès-Lyon est un secteur de villas et grands appartements où la qualité de l'installation prime sur le prix. ECO CVC y propose des solutions premium : Daikin Altherma 3, gainable invisible, géothermie.",
    localContext:
      "Villas 1900-1970 sur grands terrains, copropriétés haut de gamme du Plateau, pavillonnaire récent vers le Plan-du-Loup. Patrimoine architectural à préserver : ABF parfois requis.",
    habitatNotes:
      "Grandes parcelles propices à la géothermie. Villas anciennes : PAC haute température + radiateurs fonte. Copropriétés du Plateau : étude collective avec syndic.",
    quartiers: ["Centre", "Plateau", "Plan-du-Loup", "Beaunant", "La Gravière", "Saint-Luc"],
    communesVoisines: ["Lyon 5e", "Tassin-la-Demi-Lune", "Francheville", "Oullins", "La Mulatière"],
    specificites: [
      "Villas bourgeoises 1900-1960 : PAC haute température + radiateurs fonte conservés, ou plancher chauffant rénovation",
      "Géothermie possible sur terrains ≥ 1 500 m² : COP > 4 toute l'année",
      "Gainable invisible : aucune unité visible, préservation patrimoine architectural",
      "Pack PAC + photovoltaïque + batterie : autoconsommation 70-80 % atteignable",
      "ABF parfois requis pour façades classées : déclaration préalable gérée par nos soins",
    ],
    faq: [
      { q: "Villa 200 m² Sainte-Foy : PAC adaptée ?", a: "PAC air-eau 12-14 kW haute température. Devis 16-22 k€ posé selon options. Reste à charge selon revenus." },
      { q: "Géothermie sur 2 500 m² ?", a: "Oui, sondes verticales 80-100 m. Investissement 24-32 k€, COP 4-4.5, rentabilité 12-18 ans." },
      { q: "Gainable invisible : ça marche en rénovation ?", a: "Oui si on a accès aux combles ou faux-plafonds. Étude technique gratuite avant devis." },
      { q: "ABF obligatoire à Sainte-Foy ?", a: "Selon le secteur (proximité monuments classés Lyon 5e). Nous vérifions et déposons la DP avec photo-montage." },
    ],
    variant: "B",
  },
  {
    slug: "ecully",
    name: "Écully",
    postalCode: "69130",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "18 500 habitants",
    distanceKm: 42,
    intro:
      "Commune résidentielle haut de gamme à l'ouest de Lyon (EM Lyon, Centrale Lyon), Écully concentre villas familiales, copropriétés bourgeoises et bureaux d'études. Demande forte en PAC haute performance et clim discrète.",
    localContext:
      "Maisons 1950-2000 sur grands terrains arborés, copropriétés récentes vers le Pérollier, secteur tertiaire dense (Bel-Air Camp, écoles). Beaucoup de propriétaires renouvellent chaudières gaz par PAC dans une démarche RE2020 anticipée.",
    habitatNotes:
      "Grands terrains permettent intégration paysagère unité ext. ou géothermie. Copropriétés bourgeoises : étude collective fréquente. Tertiaire : VRV multi-zones, devis sous 48h.",
    quartiers: ["Centre", "Le Pérollier", "Bel-Air Camp", "Charrière-Blanche", "La Sablière", "Les Cuvettes"],
    communesVoisines: ["Tassin-la-Demi-Lune", "Lyon 9e", "Champagne-au-Mont-d'Or", "Dardilly", "Charbonnières-les-Bains"],
    specificites: [
      "Villas familiales : PAC air-eau 9-12 kW + ballon thermodynamique 200 L pour ECS",
      "Géothermie possible : grands terrains, COP > 4, rentabilité longue durée",
      "Pack PAC + photovoltaïque + borne VE : étude énergétique globale gratuite",
      "Tertiaire (EM Lyon, écoles) : climatisation VRV, contrat d'entretien annuel, dépannage 24h",
      "Aides Métropole de Lyon Éco-rénov' jusqu'à 4 000 € cumulables MaPrimeRénov'",
    ],
    faq: [
      { q: "PAC pour villa 180 m² Écully ?", a: "PAC air-eau 11-13 kW. Devis 15-20 k€ posé selon options et radiateurs. Reste à charge selon revenus." },
      { q: "Vous équipez les bureaux de Bel-Air Camp ?", a: "Oui, VRV multi-zones, contrat d'entretien, dépannage sous 24h. Devis gratuit." },
      { q: "Clim réversible discrète Écully ?", a: "Gainable invisible (bouches plafond) ou multi-split avec unité ext. en façade arrière. Devis 2 490-6 900 €." },
      { q: "Délai pose à Écully ?", a: "Visite 48h, devis 24h, pose 3-5 semaines. Mise en service immédiate." },
    ],
    variant: "C",
  },
  {
    slug: "lyon-1er",
    name: "Lyon 1er",
    postalCode: "69001",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "30 000 habitants",
    distanceKm: 38,
    intro:
      "Au cœur de Lyon, le 1er arrondissement (Terreaux, Pentes de la Croix-Rousse, Hôtel-de-Ville) concentre des immeubles haussmanniens et bâtiments XVIIIᵉ inscrits ou classés. La pose de clim y demande une étude ABF systématique, mais reste très demandée pour combattre la chaleur urbaine estivale.",
    localContext:
      "Pentes de la Croix-Rousse en secteur sauvegardé UNESCO : architecte des Bâtiments de France obligatoire. Solutions privilégiées : multi-split avec unité ext. en cour intérieure (non visible), ou cassette encastrée sans unité ext. apparente.",
    habitatNotes:
      "Immeubles 1850-1900 à hauts plafonds, isolation thermique souvent médiocre : split réversible 3,5-5 kW recommandé pour bien refroidir/chauffer en été comme en hiver.",
    quartiers: ["Terreaux", "Pentes Croix-Rousse", "Hôtel-de-Ville", "Place Sathonay", "Place des Capucins"],
    communesVoisines: ["Lyon 4e", "Lyon 2e", "Lyon 6e", "Caluire-et-Cuire"],
    specificites: [
      "Secteur UNESCO + ABF : déclaration préalable obligatoire avec photo-montage, instruction 2 mois",
      "Cours intérieures : emplacement privilégié pour unité ext. (non visible depuis rue)",
      "Hauts plafonds 3,5-4 m : majorer puissance clim de 20-30 % vs surface au sol",
      "Copropriétés anciennes : vote AG article 25, accompagnement ECO CVC du dossier au chantier",
      "Pose mono-split appartement : 1 jour, 990 € TTC pour 3,5 kW",
    ],
    faq: [
      { q: "ABF obligatoire en Lyon 1er ?", a: "Oui, secteur sauvegardé UNESCO : ABF systématique. Nous gérons la déclaration préalable et le photo-montage." },
      { q: "Mon immeuble est inscrit MH, je peux mettre la clim ?", a: "Oui dans 90 % des cas si l'unité ext. est en cour intérieure. Étude au cas par cas, refus rare avec un dossier bien monté." },
      { q: "Délai total Lyon 1er entre devis et pose ?", a: "Vote AG : 2-6 mois. ABF : 2 mois. Pose : 1 jour. Total moyen : 4-8 mois." },
      { q: "Bruit dans cour intérieure (résonance) ?", a: "Modèles ≤ 35 dB en mode nuit + plots anti-vibrations. Mesure d'émergence en limite de propriété possible." },
    ],
    variant: "B",
  },
  {
    slug: "lyon-2e",
    name: "Lyon 2e",
    postalCode: "69002",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "32 000 habitants",
    distanceKm: 38,
    intro:
      "Lyon 2e (Bellecour, Perrache, Confluence) mélange immeubles haussmanniens classés et programmes neufs RE2020 du quartier Confluence. La demande clim est massive en été et la pose haut de gamme y prime sur le prix.",
    localContext:
      "Confluence : programmes neufs avec pré-équipement clim, pose mono/multi-split rapide. Centre Bellecour-Perrache : ABF systématique, multi-split avec unité ext. en cour intérieure ou toit-terrasse.",
    habitatNotes:
      "Confluence (post-2010) : performances thermiques RE2020, clim réversible 3,5 kW suffisante pour 50 m². Bellecour-Ainay : appartements de standing 100-200 m², gainable invisible souvent demandé.",
    quartiers: ["Bellecour", "Ainay", "Perrache", "Confluence", "Place des Jacobins", "Cordeliers"],
    communesVoisines: ["Lyon 1er", "Lyon 7e", "Lyon 5e", "La Mulatière"],
    specificites: [
      "Confluence neuf : pré-équipement clim souvent inclus, pose 1 jour, 990 €",
      "Bellecour-Ainay : ABF + photo-montage requis, pose multi-split discret",
      "Appartements standing 150-200 m² : gainable invisible 6 900 €, aucune unité visible",
      "Copropriétés bourgeoises : vote AG article 25, accompagnement complet syndic",
      "Bureaux secteur Cordeliers / Bellecour : VRV tertiaire, contrat d'entretien",
    ],
    faq: [
      { q: "Clim appartement neuf Confluence ?", a: "Mono-split 3,5 kW à 990 € posé. Si pré-équipement existant, pose en demi-journée." },
      { q: "Gainable pour appartement Ainay 150 m² ?", a: "Oui si combles ou faux-plafonds accessibles. Devis 6 900-8 900 € selon configuration. Aucune unité visible." },
      { q: "ABF en Lyon 2e ?", a: "Systématique en Bellecour-Ainay-Perrache. Confluence post-2010 : moins contraignant, parfois sans ABF." },
      { q: "Bureaux Cordeliers : climatisation tertiaire ?", a: "Oui, VRV multi-zones, étude thermique gratuite, contrat d'entretien annuel." },
    ],
    variant: "A",
  },
  {
    slug: "lyon-3e",
    name: "Lyon 3e",
    postalCode: "69003",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "104 000 habitants",
    distanceKm: 38,
    intro:
      "Plus grand arrondissement de Lyon, le 3e (Part-Dieu, Préfecture, Villette, Montchat) concentre tertiaire massif et habitat dense (immeubles 1900-1970). La clim réversible 990 € y est demandée massivement en été.",
    localContext:
      "Part-Dieu : tours tertiaires (climatisation centralisée). Préfecture-Villette : immeubles 1900-1930 souvent rénovés. Montchat : pavillonnaire 1900-1960 sur petits terrains, demande PAC croissante.",
    habitatNotes:
      "Immeubles haussmanniens Préfecture : ABF parfois requis. Pavillons Montchat : PAC air-eau possible si jardin, sinon clim réversible. Part-Dieu : copropriétés modernes, pose facilitée.",
    quartiers: ["Part-Dieu", "Préfecture", "Villette-Paul-Bert", "Montchat", "Sans-Souci", "Dauphiné", "Bir-Hakeim"],
    communesVoisines: ["Lyon 6e", "Lyon 7e", "Lyon 8e", "Villeurbanne", "Bron"],
    specificites: [
      "Pavillonnaire Montchat : PAC air-eau 7-9 kW, pose en 2 jours",
      "Copropriétés Part-Dieu : pose clim multi-split 1 jour, devis 2 490-3 990 €",
      "Tertiaire Part-Dieu : VRV, climatisation centralisée, contrat maintenance",
      "Immeubles 1900-1930 Préfecture : ABF parfois requis, multi-split en cour",
      "Hôpital Édouard-Herriot : nous équipons cabinets médicaux et professions libérales du quartier",
    ],
    faq: [
      { q: "Clim réversible Lyon 3e Part-Dieu ?", a: "Mono-split 990 € posé en 1 jour pour appartement standard. Multi-split 2 490 € pour T3-T4." },
      { q: "PAC pour pavillon Montchat ?", a: "PAC air-eau 7-9 kW + ballon thermodynamique. Devis 11-13 k€ posé, reste à charge 4-7 k€ après aides." },
      { q: "Cabinet médical secteur Édouard-Herriot ?", a: "Climatisation tertiaire, contrat d'entretien, intervention prioritaire. Devis 48h." },
      { q: "Délai pose Lyon 3e ?", a: "Visite 48h, devis 24h, pose 2-4 semaines. Plus court qu'en copro avec AG." },
    ],
    variant: "C",
  },
  {
    slug: "lyon-4e",
    name: "Lyon 4e",
    postalCode: "69004",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "37 000 habitants",
    distanceKm: 39,
    intro:
      "Lyon 4e (plateau de la Croix-Rousse) est un secteur résidentiel familial avec immeubles canuts et copropriétés bourgeoises. Demande clim forte en été (plateau exposé) et copropriétés en cours de rénovation énergétique.",
    localContext:
      "Plateau Croix-Rousse en secteur sauvegardé UNESCO : ABF obligatoire. Maisons de canuts à hauts plafonds (4 m) : split réversible plus puissant que la moyenne. Quartier familial avec demande pose discrète et silencieuse.",
    habitatNotes:
      "Hauts plafonds 3,5-4 m typiques : majorer la puissance de 25 %. Cours intérieures pour unité ext. Vis-à-vis fréquent : étude positionnement minutieuse.",
    quartiers: ["Plateau", "Gros-Caillou", "Boulevard de la Croix-Rousse", "Place de la Croix-Rousse", "Henon"],
    communesVoisines: ["Lyon 1er", "Lyon 9e", "Caluire-et-Cuire"],
    specificites: [
      "Secteur UNESCO + ABF : déclaration préalable systématique",
      "Hauts plafonds canuts : 4-5 kW recommandé pour 30-40 m², 6-7 kW pour 50 m²",
      "Cours intérieures profondes : emplacement unité ext. discret",
      "Copropriétés familiales : pose en intersaison (octobre-mars) pour ne pas déranger résidents",
      "Bruit voisinage : modèles ≤ 35 dB obligatoires, mode silence nuit",
    ],
    faq: [
      { q: "Clim canut hauts plafonds Croix-Rousse ?", a: "Modèle 5 kW recommandé pour 35-50 m² (vs 3,5 kW en plafond standard). Devis 1 490 € posé." },
      { q: "ABF plateau Croix-Rousse ?", a: "Oui systématique. Nous gérons la DP avec photo-montage. Délai 2 mois d'instruction." },
      { q: "Vis-à-vis : où mettre l'unité ext. ?", a: "Cour intérieure dans 90 % des cas, parfois toit-terrasse. Étude visite gratuite avant devis." },
      { q: "Pose en immeuble habité : nuisances ?", a: "Pose 1 jour, perceuse 30 min max. Information voisinage en amont. Pas de nuit blanche." },
    ],
    variant: "B",
  },
  {
    slug: "lyon-5e",
    name: "Lyon 5e",
    postalCode: "69005",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "47 000 habitants",
    distanceKm: 39,
    intro:
      "Lyon 5e (Vieux Lyon, Fourvière, Saint-Just, Point-du-Jour) est un secteur de patrimoine UNESCO mêlant maisons Renaissance et programmes récents Point-du-Jour. ABF systématique en Vieux Lyon.",
    localContext:
      "Vieux Lyon : ABF strict, traverses étroites, cours intérieures exigües. Saint-Just / Point-du-Jour : pavillonnaire 1950-2000, pose plus souple. Fourvière : maisons bourgeoises sur grands terrains.",
    habitatNotes:
      "Vieux Lyon : épaisseur des murs en pierre (60-80 cm) et plafonds bas, défi pour passage gaines. Point-du-Jour : maisons modernes, intervention standard.",
    quartiers: ["Vieux Lyon", "Saint-Just", "Saint-Irénée", "Point-du-Jour", "Fourvière", "Champvert", "Ménival"],
    communesVoisines: ["Lyon 9e", "Tassin-la-Demi-Lune", "Sainte-Foy-lès-Lyon", "Oullins"],
    specificites: [
      "Vieux Lyon UNESCO : ABF strict, multi-split avec unité ext. en cour intérieure obligatoire",
      "Maisons Renaissance : passage gaines délicat, gainage apparent parfois nécessaire",
      "Saint-Just / Point-du-Jour : maisons RE2020 ou rénovées, pose facile",
      "Fourvière : villas sur terrain, géothermie possible",
      "Universités Lyon-2 / Lyon-3 : tertiaire et résidence étudiante équipés",
    ],
    faq: [
      { q: "Clim Vieux Lyon : ABF refuse souvent ?", a: "Non, refus rare avec dossier bien monté (photo-montage, unité ext. en cour). Délai instruction 2 mois." },
      { q: "Maison Renaissance : passage gaines ?", a: "Délicat mais faisable. Gainage apparent parfois nécessaire (peinture identique mur). Étude technique avant devis." },
      { q: "PAC pour villa Fourvière 200 m² ?", a: "PAC air-eau 12-14 kW haute température + ballon. Devis 16-20 k€, reste à charge selon revenus." },
      { q: "Délai pose Lyon 5e ?", a: "Vieux Lyon : 4-6 mois (ABF). Saint-Just / Point-du-Jour : 3-5 semaines après devis." },
    ],
    variant: "A",
  },
  {
    slug: "lyon-6e",
    name: "Lyon 6e",
    postalCode: "69006",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "51 000 habitants",
    distanceKm: 39,
    intro:
      "Lyon 6e (Foch, Tête d'Or, Brotteaux, Masséna) est l'arrondissement le plus aisé de Lyon : haussmanniens classés, copropriétés cossues. Demande forte pour pose haut de gamme et discrète.",
    localContext:
      "Foch / Tête d'Or : haussmanniens 1880-1910, ABF parfois (proximité parc Tête d'Or classé). Brotteaux : immeubles 1900-1930. Masséna : moderne 1960-1990.",
    habitatNotes:
      "Hauts plafonds 3,5-4 m haussmanniens. Cours intérieures profondes : emplacement unité ext. idéal. Patrimoine architectural à préserver.",
    quartiers: ["Foch", "Tête d'Or", "Brotteaux", "Masséna", "Saxe", "Vauban"],
    communesVoisines: ["Lyon 3e", "Lyon 1er", "Lyon 4e", "Caluire-et-Cuire", "Villeurbanne"],
    specificites: [
      "Haussmanniens Foch : ABF parfois, multi-split en cour intérieure",
      "Hauts plafonds 4 m : puissance majorée 25-30 %",
      "Copropriétés bourgeoises : vote AG article 25, accompagnement syndic complet",
      "Gainable invisible : appartements 150-250 m², 6 900-9 900 €",
      "Tertiaire Brotteaux / Foch : cabinets, professions libérales, VRV",
    ],
    faq: [
      { q: "Clim discrète appart haussmannien Foch ?", a: "Multi-split avec unité ext. cour intérieure + cassettes encastrées plafond. Devis 4 990-6 900 € selon nb pièces." },
      { q: "Gainable invisible 200 m² Tête d'Or ?", a: "Oui, gaines en faux-plafond couloir. Devis 8 900-12 900 € selon configuration." },
      { q: "ABF Lyon 6e ?", a: "Parfois, surtout proximité parc Tête d'Or classé. Étude au cas par cas." },
      { q: "Cabinet médical Brotteaux ?", a: "Climatisation tertiaire VRV, contrat d'entretien annuel, dépannage 24h. Devis 48h." },
    ],
    variant: "C",
  },
  {
    slug: "lyon-7e",
    name: "Lyon 7e",
    postalCode: "69007",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "85 000 habitants",
    distanceKm: 38,
    intro:
      "Lyon 7e (Guillotière, Jean-Macé, Gerland, Université) est un arrondissement très varié : étudiant, familial, tertiaire. Demande clim massive en été et copropriétés en rénovation énergétique.",
    localContext:
      "Guillotière : immeubles 1900-1970 denses. Jean-Macé : familial, copropriétés 1950-1980. Gerland : zone tertiaire et résidentielle moderne (post-2000). Université Lyon-1 / ENS : résidences étudiantes.",
    habitatNotes:
      "Mix immeubles anciens / récents : pose adaptée selon époque. Gerland : copropriétés modernes RT2005-RE2020, pose facilitée.",
    quartiers: ["Guillotière", "Jean-Macé", "Gerland", "Université", "Saxe-Gambetta", "Jean-Jaurès"],
    communesVoisines: ["Lyon 2e", "Lyon 3e", "Lyon 8e", "La Mulatière", "Vénissieux"],
    specificites: [
      "Copropriétés Jean-Macé / Saxe : MaPrimeRénov' Copro éligible, accompagnement syndic",
      "Gerland post-2000 : pose clim 1 jour, sans démarche urbanisme dans 80 % des cas",
      "Résidences étudiantes Université : équipement collectif, contrat global",
      "Pavillons rares mais existants Jean-Macé : PAC air-eau possible",
      "Tertiaire Gerland (biotech, sciences) : VRV, contrat d'entretien",
    ],
    faq: [
      { q: "Clim appartement Jean-Macé ?", a: "Mono-split 990 € si copropriété accepte unité ext. Sinon cassette encastrée 1 990 €." },
      { q: "Gerland post-2000 : pose simple ?", a: "Oui, copropriétés récentes ont souvent un règlement plus souple. Pose 1 jour, devis 990-2 490 €." },
      { q: "Tertiaire Gerland Biopôle ?", a: "Climatisation VRV multi-zones, ambiances laboratoires/bureaux, contrat d'entretien. Devis 48h." },
      { q: "Aides MaPrimeRénov' Copro Lyon 7e ?", a: "Éligible si copro construite avant 2003. Accompagnement complet ECO CVC + syndic + ANAH." },
    ],
    variant: "B",
  },
  {
    slug: "lyon-8e",
    name: "Lyon 8e",
    postalCode: "69008",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "85 000 habitants",
    distanceKm: 36,
    intro:
      "Lyon 8e (Monplaisir, Bachut, Mermoz, États-Unis) est un arrondissement résidentiel familial avec mix copropriétés 1960-80 et pavillonnaire ancien. Demande PAC croissante (remplacement gaz) et clim 990 € forte en appartement.",
    localContext:
      "Monplaisir : pavillonnaire 1900-1960 + copros récentes. Bachut / Mermoz : copropriétés 1960-1980 (MaPrimeRénov' Copro éligible). États-Unis : grand ensemble en rénovation ANRU.",
    habitatNotes:
      "Copropriétés Mermoz / Bachut : passage gaz collectif → PAC collective ou clim individuelle. Pavillons Monplaisir : PAC air-eau standard.",
    quartiers: ["Monplaisir", "Bachut", "Mermoz", "États-Unis", "Grand Trou", "Sans-Souci"],
    communesVoisines: ["Lyon 3e", "Lyon 7e", "Vénissieux", "Bron", "Saint-Priest"],
    specificites: [
      "Copropriétés Mermoz / Bachut : MaPrimeRénov' Copro éligible, dossier syndic complet",
      "Pavillons Monplaisir : PAC air-eau 7-9 kW + ballon thermodynamique",
      "ANRU États-Unis : opérations bailleurs, marchés publics ou prestations directes",
      "Clim réversible 990 € très demandée copropriétés (étages élevés, été chaud)",
      "Aides cumulées : MaPrimeRénov' + CEE + Éco-rénov' Métropole",
    ],
    faq: [
      { q: "Pavillon Monplaisir : PAC adaptée ?", a: "PAC air-eau 7-9 kW. Devis 11-13 k€ posé, reste à charge 4-7 k€ après aides." },
      { q: "Copropriété Mermoz : MaPrimeRénov' Copro ?", a: "Oui si construite avant 2003. Subvention jusqu'à 35 % pour la copro + aides individuelles cumulables." },
      { q: "Clim appart Bachut ?", a: "Mono-split 990 € si AG validée. Cassette 1 990 € si refus unité ext. visible." },
      { q: "Délai à Lyon 8e ?", a: "Pose appartement 1 jour, pavillon 2-3 jours. Vote AG copro 2-6 mois." },
    ],
    variant: "A",
  },
  {
    slug: "lyon-9e",
    name: "Lyon 9e",
    postalCode: "69009",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "51 000 habitants",
    distanceKm: 40,
    intro:
      "Lyon 9e (Vaise, Gorge-de-Loup, La Duchère, Saint-Rambert) combine quartier d'affaires moderne (Vaise) et grand ensemble en rénovation (La Duchère). Demande mixte : copros ANRU + tertiaire récent.",
    localContext:
      "Vaise : tertiaire moderne (post-2000) et résidentiel récent. Gorge-de-Loup : copropriétés 1960-80. La Duchère : grand ensemble en rénovation ANRU. Saint-Rambert : pavillonnaire.",
    habitatNotes:
      "Vaise post-2000 : pose clim simplifiée. La Duchère : opérations bailleurs en cours, MaPrimeRénov' Copro et ANAH activées.",
    quartiers: ["Vaise", "Gorge-de-Loup", "La Duchère", "Saint-Rambert", "L'Industrie"],
    communesVoisines: ["Lyon 5e", "Lyon 4e", "Écully", "Champagne-au-Mont-d'Or", "Tassin-la-Demi-Lune"],
    specificites: [
      "Vaise post-2000 : copros récentes, pose clim simplifiée, devis 1 jour",
      "La Duchère ANRU : marchés bailleurs, MaPrimeRénov' Copro maximisée",
      "Tertiaire Vaise (biotech, médias) : VRV multi-zones",
      "Pavillons Saint-Rambert : PAC air-eau standard",
      "Aides Métropole de Lyon Éco-rénov' cumulables",
    ],
    faq: [
      { q: "Clim copropriété récente Vaise ?", a: "Pose 1 jour, mono-split 990 € posé. Souvent règlement copro plus souple en post-2000." },
      { q: "La Duchère : aides bailleur ?", a: "MaPrimeRénov' Copro + ANAH renforcée. ECO CVC référencé QualiPAC pour marchés publics et bailleurs." },
      { q: "Tertiaire Vaise ?", a: "Climatisation VRV, étude thermique gratuite, contrat d'entretien. Devis 48h." },
      { q: "PAC pavillon Saint-Rambert ?", a: "PAC air-eau 7-9 kW, ballon thermodynamique. Devis 11-13 k€, aides cumulées 4-9 k€ selon revenus." },
    ],
    variant: "C",
  },
  {
    slug: "saint-genis-laval",
    name: "Saint-Genis-Laval",
    postalCode: "69230",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "21 000 habitants",
    distanceKm: 38,
    intro:
      "Au sud-ouest de Lyon, Saint-Genis-Laval est un secteur résidentiel familial (CHU Lyon-Sud, Observatoire). Pavillonnaire dominant, copropriétés récentes et programmes neufs.",
    localContext:
      "Pavillonnaire 1970-2000 dominant, copropriétés récentes vers Beauversant, programmes neufs RT2012/RE2020. Demande PAC pour remplacement gaz et clim 990 € en appartement.",
    habitatNotes:
      "Maisons sur petits/moyens terrains : intégration unité ext. en façade arrière ou jardin. CHU Lyon-Sud : tertiaire santé important.",
    quartiers: ["Centre", "Beauversant", "Le Beal", "La Mouche", "Les Collonges"],
    communesVoisines: ["Oullins-Pierre-Bénite", "Brignais", "Irigny", "Vourles", "Charly"],
    specificites: [
      "Pavillons 1970-2000 : PAC air-eau 7-10 kW + ballon thermodynamique",
      "Copropriétés Beauversant : pose clim 1 jour, 990-2 490 €",
      "Tertiaire CHU Lyon-Sud : cabinets médicaux, professions libérales équipés",
      "Aides Métropole de Lyon Éco-rénov' cumulables MaPrimeRénov' + CEE",
      "Climat plus chaud (vallée du Rhône) : clim réversible très rentable été",
    ],
    faq: [
      { q: "PAC pavillon Saint-Genis 130 m² ?", a: "PAC air-eau 9-11 kW. Devis 12-14 k€ posé, reste à charge 4-7 k€ après aides." },
      { q: "Cabinet CHU Lyon-Sud ?", a: "Climatisation tertiaire, contrat d'entretien, dépannage 24h. Devis 48h." },
      { q: "Délai à Saint-Genis ?", a: "Visite 48h, devis 24h, pose 3-5 semaines." },
      { q: "Clim appartement Beauversant ?", a: "Mono-split 990 € posé. Bi-split 2 490 €. Pose 1 jour." },
    ],
    variant: "B",
  },
  {
    slug: "brignais",
    name: "Brignais",
    postalCode: "69530",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "12 500 habitants",
    distanceKm: 40,
    intro:
      "Brignais, au sud-ouest de Lyon, est une commune dynamique (Techlid, technopôle, ZAC Sacuny). Pavillonnaire 1970-2010 et programmes neufs en cours.",
    localContext:
      "Pavillonnaire dominant 1970-2010, programmes neufs RE2020 ZAC Sacuny, zone d'activité Techlid (tertiaire). Beaucoup de remplacement chaudières fioul/gaz par PAC.",
    habitatNotes:
      "Maisons sur terrains 400-800 m² : intégration unité ext. facile. Programmes neufs : pré-équipement clim parfois inclus.",
    quartiers: ["Centre", "ZAC Sacuny", "Le Garon", "La Giraudière", "Techlid"],
    communesVoisines: ["Saint-Genis-Laval", "Mornant", "Soucieu-en-Jarrest", "Chaponost", "Vourles"],
    specificites: [
      "Pavillons 1970-2010 : PAC air-eau 8-10 kW, bonus sortie fioul jusqu'à 4 000 €",
      "ZAC Sacuny RE2020 : pré-équipement clim fréquent, pose simplifiée",
      "Techlid tertiaire : VRV multi-zones, contrats d'entretien PME",
      "Aides Métropole + MaPrimeRénov' + CEE = jusqu'à 60-70 % du montant",
      "Climat tempéré : PAC très efficace toute l'année (peu de jours < -7 °C)",
    ],
    faq: [
      { q: "PAC pour pavillon Brignais ?", a: "PAC air-eau 8-10 kW. Devis 12-14 k€ posé, reste à charge 4-8 k€ après aides." },
      { q: "Vous équipez les bureaux Techlid ?", a: "Oui, climatisation tertiaire VRV, contrat d'entretien annuel, dépannage 24h." },
      { q: "Bonus sortie fioul à Brignais ?", a: "Oui, jusqu'à 4 000 € + MaPrimeRénov' Sérénité jusqu'à 11 000 € pour foyers modestes." },
      { q: "Délai pose Brignais ?", a: "Visite 48h, pose 3-5 semaines selon planning." },
    ],
    variant: "A",
  },
  {
    slug: "mions",
    name: "Mions",
    postalCode: "69780",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "14 500 habitants",
    distanceKm: 33,
    intro:
      "À l'est de Lyon, Mions est une commune résidentielle dynamique avec pavillonnaire 1970-2010 et programmes neufs récents. Voisine de Saint-Priest et Corbas.",
    localContext:
      "Pavillonnaire 1970-2010 dominant, programmes neufs RT2012/RE2020 vers le centre, zone d'activité au nord. Remplacement gaz/fioul par PAC en croissance.",
    habitatNotes:
      "Maisons sur terrains 500-800 m² : intégration unité ext. facile. Programmes neufs : pré-équipement clim souvent inclus.",
    quartiers: ["Centre", "Charvas", "La Tournelle", "Le Bourg", "Le Cottage"],
    communesVoisines: ["Saint-Priest", "Corbas", "Heyrieux", "Toussieu", "Marennes"],
    specificites: [
      "Pavillons 1970-2010 : PAC air-eau 8-10 kW + ballon thermodynamique",
      "Programmes neufs RE2020 : pré-équipement clim, pose simplifiée",
      "Climat continental : -8 °C possibles janvier, 35 °C été — PAC réversible justifiée",
      "Aides Métropole de Lyon Éco-rénov' jusqu'à 4 000 € cumulables",
      "Distance 33 km : intervention équipe est lyonnais quasi quotidienne",
    ],
    faq: [
      { q: "PAC pavillon Mions ?", a: "PAC air-eau 8-10 kW. Devis 11-13 k€ posé, reste à charge 4-7 k€ selon revenus." },
      { q: "Clim appart neuf Charvas ?", a: "Mono-split 990 € posé en 1 jour si pré-équipement. Bi-split 2 490 €." },
      { q: "Délai dépannage Mions ?", a: "Sous 24-48h. Atelier à 33 km, équipe sur Lyon-Est presque chaque jour." },
      { q: "Vous travaillez avec promoteurs neuf Mions ?", a: "Oui, pré-équipement clim ou pose après livraison. Devis lot ou unitaire." },
    ],
    variant: "C",
  },
  {
    slug: "chassieu",
    name: "Chassieu",
    postalCode: "69680",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "11 000 habitants",
    distanceKm: 30,
    intro:
      "Chassieu, à l'est de Lyon, combine pavillonnaire familial et grande zone d'activité Eurexpo (entreprises, salons). Demande mixte particuliers + tertiaire.",
    localContext:
      "Pavillonnaire 1970-2010 dominant, copropriétés récentes vers le centre, immense zone d'activité Eurexpo (B2B). Beaucoup de PAC pour remplacement gaz/fioul.",
    habitatNotes:
      "Maisons sur terrains moyens 500-700 m² : intégration unité ext. simple. Eurexpo : entrepôts, bureaux, restaurants — climatisation et froid commercial.",
    quartiers: ["Centre", "Eurexpo", "La Plaine", "Le Pélossier", "Genas-est"],
    communesVoisines: ["Décines-Charpieu", "Genas", "Saint-Priest", "Vaulx-en-Velin", "Bron"],
    specificites: [
      "Pavillons 1970-2010 : PAC air-eau 8-10 kW + ballon thermodynamique",
      "Eurexpo : climatisation tertiaire (entrepôts, bureaux), froid commercial restaurants",
      "Aides Métropole de Lyon Éco-rénov' jusqu'à 4 000 € + MaPrimeRénov' + CEE",
      "Distance 30 km : passage régulier équipe ECO CVC",
      "Clim réversible 990 € appart neuf : pose 1 jour",
    ],
    faq: [
      { q: "PAC pavillon Chassieu ?", a: "PAC air-eau 8-10 kW. Devis 11-13 k€ posé, reste à charge 4-7 k€ après aides." },
      { q: "Vous équipez les pros Eurexpo ?", a: "Oui : entrepôts (climatisation industrielle), bureaux (VRV), restaurants (froid commercial)." },
      { q: "Délai à Chassieu ?", a: "Visite 48h, devis 24h, pose 3-5 semaines particulier / 4-6 semaines tertiaire." },
      { q: "Bonus sortie fioul à Chassieu ?", a: "Oui jusqu'à 4 000 € + MaPrimeRénov' Sérénité. Reste à charge possible 3-5 k€ pour foyers modestes." },
    ],
    variant: "A",
  },
  {
    slug: "feyzin",
    name: "Feyzin",
    postalCode: "69320",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "10 500 habitants",
    distanceKm: 35,
    intro:
      "Feyzin, au sud de Lyon, est marquée par la raffinerie Total mais aussi un pavillonnaire familial actif. Plan de Prévention des Risques Technologiques (PPRT) à connaître pour certaines zones.",
    localContext:
      "Pavillonnaire 1960-2000 dominant, copropriétés vers le centre, zone industrielle (Total + sous-traitants). PPRT en zones proches site Seveso.",
    habitatNotes:
      "Pavillons standard : pose PAC simple. Zones PPRT : étude technique réglementaire avant travaux.",
    quartiers: ["Centre", "Les Razes", "Plateau", "Le Béthier", "Vignettes"],
    communesVoisines: ["Saint-Fons", "Solaize", "Vénissieux", "Corbas", "Sérézin-du-Rhône"],
    specificites: [
      "Pavillons 1960-2000 : PAC air-eau 7-10 kW + ballon thermodynamique",
      "PPRT : vérification réglementaire avant pose en zone proche raffinerie",
      "Aides Métropole de Lyon Éco-rénov' + MaPrimeRénov' + CEE cumulables",
      "Climat plus chaud (vallée du Rhône) : clim réversible très efficace été",
      "Distance 35 km : équipe Lyon-Sud quotidienne",
    ],
    faq: [
      { q: "PAC en zone PPRT Feyzin ?", a: "Vérification réglementaire systématique. Pose autorisée dans la majorité des cas, parfois avec contraintes spécifiques." },
      { q: "Clim appartement Feyzin ?", a: "Mono-split 990 € posé. Pose 1 jour, sans démarche urbanisme dans 90 % des cas." },
      { q: "Délai pose Feyzin ?", a: "Visite 48h, devis 24h, pose 3-5 semaines." },
      { q: "Aides à Feyzin ?", a: "MaPrimeRénov' + CEE + Éco-rénov' Métropole. Bonus sortie fioul jusqu'à 4 000 €." },
    ],
    variant: "C",
  },
  {
    slug: "francheville",
    name: "Francheville",
    postalCode: "69340",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "14 500 habitants",
    distanceKm: 41,
    intro:
      "Francheville, à l'ouest de Lyon, est une commune résidentielle haut de gamme avec villas et pavillons sur grands terrains arborés.",
    localContext:
      "Pavillonnaire 1950-2000 sur terrains 800-2000 m², copropriétés bourgeoises récentes, zones boisées à préserver. Demande PAC haute performance et clim discrète.",
    habitatNotes:
      "Grands terrains : intégration paysagère unité ext. discrète, géothermie possible sur certaines parcelles ≥ 1 500 m².",
    quartiers: ["Centre", "Le Bourg", "Bel-Air", "Taffignon", "Le Châter"],
    communesVoisines: ["Tassin-la-Demi-Lune", "Sainte-Foy-lès-Lyon", "Charbonnières-les-Bains", "Lyon 5e", "Chaponost"],
    specificites: [
      "Pavillons sur grands terrains : PAC air-eau 9-12 kW, intégration paysagère discrète",
      "Géothermie possible : terrains ≥ 1 500 m², COP > 4, rentabilité longue durée",
      "Pack PAC + photovoltaïque + batterie : autoconsommation 70-80 %",
      "Aides Métropole de Lyon Éco-rénov' cumulables MaPrimeRénov'",
      "Climat tempéré ouest lyonnais : PAC très efficace toute l'année",
    ],
    faq: [
      { q: "PAC villa 200 m² Francheville ?", a: "PAC air-eau 12-14 kW haute température. Devis 16-22 k€ posé selon options." },
      { q: "Géothermie Francheville ?", a: "Possible sur terrains ≥ 1 500 m². Sondes verticales 80-100 m. Investissement 24-32 k€, COP 4-4,5." },
      { q: "Clim discrète maison de standing ?", a: "Gainable invisible 6 900-9 900 € ou multi-split unité ext. arrière. Étude technique gratuite." },
      { q: "Délai à Francheville ?", a: "Visite 48h, pose 3-5 semaines. Mise en service immédiate." },
    ],
    variant: "B",
  },
  {
    slug: "dardilly",
    name: "Dardilly",
    postalCode: "69570",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "8 800 habitants",
    distanceKm: 44,
    intro:
      "Dardilly, au nord-ouest de Lyon, est une commune résidentielle prisée (proximité parc de Lacroix-Laval, technopôle Techlid). Villas et pavillons familiaux dominants.",
    localContext:
      "Pavillonnaire 1970-2010 sur grands terrains, villas récentes, technopôle de Lyon (entreprises). Demande PAC haute performance et tertiaire.",
    habitatNotes:
      "Grands terrains arborés : intégration unité ext. paysagère facile, géothermie sur les plus grandes parcelles.",
    quartiers: ["Centre", "Bois-Dieu", "La Beffe", "Le Paillet", "Limonest-frontière"],
    communesVoisines: ["Limonest", "Champagne-au-Mont-d'Or", "Écully", "Saint-Didier-au-Mont-d'Or", "La Tour-de-Salvagny"],
    specificites: [
      "Pavillons 1970-2010 : PAC air-eau 9-11 kW + ballon thermodynamique 200 L",
      "Géothermie possible : terrains > 1 500 m², COP > 4",
      "Tertiaire Techlid Dardilly : VRV, contrats d'entretien PME",
      "Pack PAC + PV + borne VE : étude énergétique globale",
      "Aides Métropole de Lyon Éco-rénov' jusqu'à 4 000 €",
    ],
    faq: [
      { q: "PAC pour villa Dardilly 180 m² ?", a: "PAC air-eau 11-13 kW. Devis 15-20 k€ posé selon options et radiateurs." },
      { q: "Vous travaillez sur Techlid ?", a: "Oui, climatisation tertiaire VRV, contrat d'entretien, dépannage 24h." },
      { q: "Géothermie 2 000 m² Dardilly ?", a: "Oui, sondes verticales. Investissement 24-32 k€, COP 4-4,5, rentabilité 12-18 ans." },
      { q: "Délai à Dardilly ?", a: "Visite 48h, devis 24h, pose 3-5 semaines." },
    ],
    variant: "C",
  },
);

export const findCity = (slug: string) => cities.find((c) => c.slug === slug);
