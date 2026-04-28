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
    communesVoisines: ["Ruy-Montceau", "Maubec", "Domarin", "Saint-Alban-de-Roche", "Four", "Sérézin-de-la-Tour"],
    specificites: [
      "Climat semi-continental : -8 °C possibles en janvier, 35 °C en été — la PAC réversible se justifie pleinement",
      "Tarif moyen pose PAC air-eau 8 kW : 12 000 à 16 000 € avant aides, soit 4 000 à 8 000 € restant après MaPrimeRénov + CEE selon revenus",
      "Subvention complémentaire possible via l'agglomération CAPI sur certains projets de rénovation énergétique",
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
    communesVoisines: ["Villefontaine", "Vaulx-Milieu", "Saint-Quentin-Fallavier", "Four", "Nivolas-Vermelle"],
    specificites: [
      "Lotissements avec contraintes esthétiques : nous proposons des unités extérieures coloris RAL ou habillages bois sur mesure",
      "Réseau gaz très présent : opportunité de basculer en PAC hybride (PAC + chaudière condensation) pour les grandes maisons",
      "RGE QualiPAC obligatoire pour MaPrimeRénov — nous le sommes",
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
    communesVoisines: ["Saint-Quentin-Fallavier", "Heyrieux", "Bonnefamille", "Grenay", "Satolas-et-Bonce"],
    specificites: [
      "Sortie du fioul : aide MaPrimeRénov majorée, jusqu'à 5 000 € pour les ménages très modestes",
      "Distance courte depuis notre siège (15 min) : interventions de dépannage souvent le jour même",
      "Bruit unité extérieure : nous installons systématiquement des plots anti-vibrations et choisissons des modèles ≤ 38 dB",
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
    communesVoisines: ["Saint-Clair-de-la-Tour", "Cessieu", "Rochetoirin", "Saint-Jean-de-Soudain", "Faverges-de-la-Tour", "Saint-Didier-de-la-Tour"],
    specificites: [
      "Habitat ancien : PAC air-eau haute température (compatibles radiateurs existants) recommandée",
      "Hivers plus rigoureux qu'en plaine : modèles à dégivrage automatique et résistance d'appoint intégrée",
      "Chauffage piscine : possibilité d'ajouter un module pour chauffer la piscine en intersaison",
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
    communesVoisines: ["Sainte-Colombe", "Saint-Romain-en-Gal", "Reventin-Vaugris", "Pont-Évêque", "Chasse-sur-Rhône", "Seyssuel"],
    specificites: [
      "Zone ABF en centre-ville : déclaration préalable obligatoire, nous gérons le dossier",
      "Étés chauds (microclimat vallée du Rhône, jusqu'à 38 °C) : la climatisation devient indispensable, pas un luxe",
      "Eau chaude sanitaire : possibilité de coupler PAC avec ballon thermodynamique pour optimiser MaPrimeRénov",
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
    communesVoisines: ["Coublevie", "Saint-Étienne-de-Crossey", "Saint-Jean-de-Moirans", "Moirans", "La Murette", "Saint-Cassien"],
    specificites: [
      "Climat plus rigoureux : choix de PAC à plage de fonctionnement étendue (-20 °C garantis)",
      "Possibilité de couplage avec poêle à granulés en relève pour optimiser le confort",
      "Aides locales : Pays Voironnais propose ponctuellement des subventions complémentaires sur la rénovation",
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
    communesVoisines: ["Tignieu-Jameyzieu", "Charvieu-Chavagneux", "Anthon", "Chavanoz", "Janneyrias"],
    specificites: [
      "Beaucoup de ménages éligibles MaPrimeRénov bleu et jaune (revenus modestes) : reste à charge minimal après aides",
      "Multi-split 3 ou 4 unités intérieures : solution idéale pour passer toute une maison en PAC sans gros chantier",
      "Bruit en zone résidentielle dense : modèles silencieux ≤ 38 dB systématiques",
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
    communesVoisines: ["Villemoirieu", "Optevoz", "Annoisin-Chatelans", "Hières-sur-Amby", "Saint-Romain-de-Jalionas"],
    specificites: [
      "Zone ABF étendue au cœur historique : positionnement et habillage de l'unité extérieure étudiés au cas par cas",
      "PAC air-eau haute température : compatible avec radiateurs en fonte d'origine",
      "Maisons de campagne (résidence secondaire) : installation pilotée à distance via app",
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
    communesVoisines: ["Vézeronce-Curtin", "Passins", "Sermérieu", "Brangues", "Le Bouchage", "Arandon-Passins"],
    specificites: [
      "Sortie fioul : MaPrimeRénov + CEE peuvent couvrir 50 à 70% du projet pour les ménages modestes",
      "Grandes surfaces : PAC haute puissance avec planchers chauffants ou radiateurs basse température",
      "Piscine : module additionnel pour chauffer la piscine en intersaison sans surcoût électrique",
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
    communesVoisines: ["Saint-Martin-d'Hères", "Échirolles", "Fontaine", "Saint-Égrève", "Meylan", "La Tronche"],
    specificites: [
      "Copropriétés grenobloises : dossier syndic clés en main (plans, fiches techniques, attestation acoustique)",
      "Aides Grenoble-Alpes-Métropole cumulables avec MaPrimeRénov (jusqu'à 2 500 € supplémentaires selon éligibilité)",
      "Zone ZFE (zone à faibles émissions) : sortir des énergies fossiles devient un enjeu de revente immobilière",
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
    communesVoisines: ["Villeurbanne", "Caluire-et-Cuire", "Vénissieux", "Saint-Priest", "Bron", "Oullins"],
    specificites: [
      "Zone ABF étendue (Vieux Lyon, Presqu'île) : dossier ABF systématique, expertise nécessaire",
      "Copropriétés haussmanniennes : faisabilité étudiée au cas par cas, parfois solution PAC air-eau invisible",
      "Climatisation tertiaire : bureaux, commerces, restaurants — nous équipons aussi les pros",
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
    communesVoisines: ["Lyon 3ᵉ", "Lyon 6ᵉ", "Caluire-et-Cuire", "Bron", "Vaulx-en-Velin"],
    specificites: [
      "Très forte densité : pose en limite de propriété encadrée par le règlement sanitaire",
      "Copropriétés : nous fournissons un dossier complet pour le vote en AG",
      "Programmes neufs : compatibilité avec les VRD et locaux techniques prévus à la livraison",
    ],
    faq: [
      {
        q: "Mon voisin se plaint déjà de bruit, puis-je quand même installer une PAC ?",
        a: "Oui à condition de choisir un modèle silencieux et d'optimiser l'emplacement. Nous fournissons une étude acoustique signée si besoin.",
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
    communesVoisines: ["Mions", "Bron", "Vénissieux", "Corbas", "Genas", "Saint-Bonnet-de-Mure"],
    specificites: [
      "Bascule gaz → PAC : conservation des radiateurs existants dans 80% des cas",
      "Sous-sols semi-enterrés : intégration discrète de l'unité intérieure",
      "Maisons RT2012 récentes : ajout de splits réversibles pour le confort d'été",
    ],
    faq: [
      {
        q: "Faut-il changer mes radiateurs en passant à la PAC ?",
        a: "Pas forcément. Une PAC moyenne ou haute température fonctionne avec la plupart des radiateurs. Nous le validons par calcul thermique.",
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
    communesVoisines: ["Décines-Charpieu", "Jonage", "Pusignan", "Genas", "Vaulx-en-Velin"],
    specificites: [
      "Maisons 90s avec radiateurs : PAC air-eau directe, pas de gros œuvre",
      "Couplage PAC + piscine : extension de saison de baignade sans coût supplémentaire",
      "Climatisation réversible : enjeu fort sur les pavillons récents souvent surchauffés en été",
    ],
    faq: [
      {
        q: "Combien d'économies sur ma facture de chauffage à Meyzieu ?",
        a: "En passant d'une chaudière gaz vieille de 20 ans à une PAC air-eau moderne : -50 à -70% sur le poste chauffage. Calcul personnalisé lors de la visite.",
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
    communesVoisines: ["Meyzieu", "Vaulx-en-Velin", "Bron", "Chassieu", "Jonage"],
    specificites: [
      "Programmes OL Vallée : focus sur la climatisation réversible silencieuse en appartements",
      "Hameaux et centre ancien : PAC air-eau classique",
      "Tertiaire : bureaux et commerces autour du stade — solutions VRV multi-zone",
    ],
    faq: [
      {
        q: "Mon appartement neuf à OL Vallée n'a pas de clim, est-ce ajoutable ?",
        a: "Oui, sous réserve d'autorisation du syndic et d'un emplacement validé pour l'unité extérieure (souvent balcon ou loggia).",
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
    communesVoisines: ["La Motte-Servolex", "Cognin", "Bassens", "Saint-Alban-Leysse", "Barberaz"],
    specificites: [
      "Climat froid : PAC garanties -20 °C, appoint intégré, dégivrage reverse-cycle",
      "Bâti savoyard ancien : étude thermique systématique, parfois préconisation isolation préalable",
      "Aides locales : Métropole Grand Chambéry propose des subventions complémentaires",
    ],
    faq: [
      {
        q: "Une PAC est-elle vraiment adaptée au climat de Chambéry ?",
        a: "Oui, à condition de choisir un modèle prévu pour climat froid (R32, plage de fonctionnement étendue, appoint intégré). Nous installons exclusivement ce type de matériel à 70 km de notre siège.",
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
    communesVoisines: ["Grésy-sur-Aix", "Tresserve", "Drumettaz-Clarafond", "Brison-Saint-Innocent", "Mouxy"],
    specificites: [
      "Pilotage app à distance : indispensable pour résidences secondaires et locations",
      "Mode hors-gel automatique : protection contre le gel canalisations en absence prolongée",
      "Climatisation locations saisonnières : argument commercial fort pour propriétaires Airbnb",
    ],
    faq: [
      {
        q: "Je loue mon appartement sur Airbnb, faut-il la clim ?",
        a: "De plus en plus, oui — c'est un critère premier sur les recherches estivales. Une clim réversible justifie 15 à 30 €/nuit supplémentaires en haute saison.",
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
    communesVoisines: ["Seynod", "Cran-Gevrier", "Meythet", "Annecy-le-Vieux", "Veyrier-du-Lac"],
    specificites: [
      "Distance : nous regroupons les chantiers Annecy pour rester compétitifs",
      "Haut de gamme : matériel premium, finitions soignées, dossiers ABF complets",
      "Locations saisonnières : valorisation du bien par climatisation discrète",
    ],
    faq: [
      {
        q: "Vous vous déplacez vraiment jusqu'à Annecy ?",
        a: "Oui pour des installations complètes ou des chantiers de plusieurs jours. Pour de petites interventions ponctuelles, nous regroupons avec d'autres clients du secteur pour mutualiser les frais de route.",
      },
    ],
    variant: "C",
  },
];

export const findCity = (slug: string) => cities.find((c) => c.slug === slug);
