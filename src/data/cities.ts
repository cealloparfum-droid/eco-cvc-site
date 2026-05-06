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

export const findCity = (slug: string) => cities.find((c) => c.slug === slug);
