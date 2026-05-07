export type MetierPro = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string[];
  problemes: string[];
  equipments: { name: string; description: string; priceRange: string }[];
  contraintes: string[];
  whyEcoCvc: string[];
  faq: { q: string; a: string }[];
  emoji: string; // pictogramme métier
};

export const metiers: MetierPro[] = [
  {
    slug: "boulangerie-patisserie",
    name: "Boulangerie & pâtisserie",
    metaTitle: "Frigoriste boulangerie & pâtisserie — chambre froide, vitrines | ECO CVC Isère",
    metaDescription:
      "Frigoriste pour boulangerie et pâtisserie en Isère et Rhône-Alpes : chambres froides positives/négatives, vitrines réfrigérées, climatisation laboratoire. Installation, maintenance 7j/7. ECO CVC.",
    h1: "Frigoriste pour boulangerie & pâtisserie",
    tagline: "Chambres froides, vitrines, clim laboratoire — installation et maintenance pour artisans boulangers en Isère et Rhône-Alpes.",
    intro: [
      "Une boulangerie performante repose sur un froid maîtrisé : pousse contrôlée des pâtes, conservation des produits frais, présentation impeccable des vitrines, climatisation du laboratoire pour la qualité du tour. ECO CVC accompagne les boulangers du Nord-Isère et de la région lyonnaise depuis l'étude jusqu'à la maintenance préventive.",
      "Notre force : un seul interlocuteur pour tous vos équipements (chambre froide, vitrines, clim, ventilation), des interventions rapides en cas de panne (sous 24h pour les contrats), et une connaissance des contraintes spécifiques au métier (température, hygrométrie, normes alimentaires).",
    ],
    problemes: [
      "Panne de chambre froide en pleine journée : risque de perte de stock pour des milliers d'euros",
      "Pousse contrôlée mal régulée : pâtes inégales, pertes de production",
      "Vitrines mal dimensionnées : les pâtisseries ramollissent en heures de pointe",
      "Laboratoire surchauffé en été : difficulté à travailler le beurre, qualité du tour qui chute",
      "Maintenance bâclée par le précédent prestataire : pannes répétitives",
    ],
    equipments: [
      {
        name: "Chambre froide positive (0 à 8 °C)",
        description: "Pour viennoiseries, crèmes, garnitures fraîches, fromages, charcuterie. Volume sur mesure de 4 à 30 m³.",
        priceRange: "6 000 à 18 000 € posée",
      },
      {
        name: "Chambre froide négative (-18 à -25 °C)",
        description: "Pour stockage long de pâtes feuilletées, pré-cuit, glaces. Isolation renforcée, alarme température.",
        priceRange: "9 000 à 25 000 € posée",
      },
      {
        name: "Pousse contrôlée (température + hygro)",
        description: "Régulation précise pour la fermentation maîtrisée : production cadencée et qualité constante.",
        priceRange: "Sur devis",
      },
      {
        name: "Vitrines réfrigérées",
        description: "Présentation pâtisseries (4-7 °C), viennoiseries, sandwichs. Modèles ventilés ou statiques selon produit.",
        priceRange: "3 500 à 12 000 € selon longueur",
      },
      {
        name: "Climatisation laboratoire & boutique",
        description: "Indispensable l'été pour le travail du beurre et le confort client. Cassettes plafond ou gainable discret.",
        priceRange: "5 000 à 14 000 €",
      },
    ],
    contraintes: [
      "Normes HACCP : traçabilité de la température en continu (sondes + alarme)",
      "Décret entretien obligatoire pour les installations frigo > 4 kW",
      "Fluide frigorigène : passage progressif au R290 ou R744 (CO₂) sur les nouvelles installations",
      "Bruit groupe extérieur : règlementation voisinage stricte en centre-ville",
    ],
    whyEcoCvc: [
      "Intervention urgente sous 24h pour les clients sous contrat — critique pour ne pas perdre votre stock",
      "Contrat de maintenance préventive avec visite trimestrielle ou semestrielle selon votre activité",
      "Pose en horaires décalés ou jours de fermeture — pas de coupure d'activité",
      "Tous fluides maîtrisés : R32, R134a, R290, R744 (formation F-Gaz à jour)",
    ],
    faq: [
      {
        q: "Combien de temps pour installer une chambre froide en boulangerie ?",
        o: "",
        a: "Entre 7 et 14 jours après commande. La pose elle-même prend 2-3 jours selon la configuration et l'accès au local.",
      },
      {
        q: "Vous intervenez aussi en panne le dimanche ou en pleine production ?",
        a: "Pour nos clients sous contrat, oui — astreinte 7j/7. Hors contrat : nous priorisons selon la gravité et nos disponibilités.",
      },
      {
        q: "Combien coûte un contrat d'entretien chambre froide + vitrine ?",
        a: "À partir de 480 €/an pour une boulangerie standard (chambre froide + 2-3 vitrines), avec visites + intervention prioritaire en panne.",
      },
      {
        q: "Quelles aides pour rénover le froid en boulangerie ?",
        a: "Prime CEE BAT-TH-156 pour les fluides naturels et ECO BAT pour les bâtiments tertiaires. Selon vos travaux : 500 à 5 000 € possibles.",
      },
      {
        q: "Vous équipez aussi les nouveaux bâtiments en construction ?",
        a: "Oui, étude technique au stade plan (avec votre architecte) pour intégrer chambres froides, vitrines, ventilation et climatisation au mieux.",
      },
      {
        q: "Sondes de température connectées : possible ?",
        a: "Oui, sondes IoT avec alerte SMS en cas de dépassement de température. Indispensable pour respecter HACCP sans surveillance manuelle.",
      },
    ].map((f) => ({ q: f.q, a: f.a })),
    emoji: "🥖",
  },
  {
    slug: "restaurant-brasserie",
    name: "Restaurant & brasserie",
    metaTitle: "Frigoriste restaurant — chambre froide, climatisation, ventilation cuisine | ECO CVC",
    metaDescription:
      "Frigoriste pour restaurant et brasserie en Isère et Rhône-Alpes. Chambre froide, vitrine, climatisation salle, hotte cuisine, ventilation. Installation, maintenance 7j/7.",
    h1: "Frigoriste pour restaurant & brasserie",
    tagline: "Cuisine, salle, cave : équipement froid et clim complet pour la restauration en Isère et Rhône-Alpes.",
    intro: [
      "Un restaurant performant doit gérer 4 zones thermiques distinctes : la chambre froide pour le stock, la cuisine pour le service, la salle pour les clients, et parfois la cave pour les vins. ECO CVC est l'interlocuteur unique pour tous ces équipements depuis l'étude jusqu'à la maintenance.",
      "Nous équipons les restaurants traditionnels, brasseries, restaurants de chaîne et foodtrucks dans le Nord-Isère, à Lyon et alentours. Pose en horaires de fermeture, maintenance préventive trimestrielle, intervention sous 24h en cas de panne pour les clients sous contrat.",
    ],
    problemes: [
      "Chambre froide en panne en plein service : risque de perte du stock viande/poisson",
      "Salle qui chauffe à 30 °C en été : clients qui ne reviennent pas",
      "Hotte aspirante sous-dimensionnée : graisse partout, risque incendie",
      "Vitrine à desserts qui décroche : pâtisseries tombent à 12 °C, hygiène HACCP en jeu",
      "Cave à vins mal régulée : variations qui altèrent les grands crus",
    ],
    equipments: [
      {
        name: "Chambre froide cuisine (positive)",
        description: "Volume 4 à 15 m³, accès direct depuis la cuisine, sondes HACCP intégrées.",
        priceRange: "6 500 à 18 000 €",
      },
      {
        name: "Chambre froide négative",
        description: "Pour viandes, glaces, surgelés. Isolation 100 mm, alarme température.",
        priceRange: "9 000 à 22 000 €",
      },
      {
        name: "Climatisation salle",
        description: "Cassettes plafond 4 voies pour distribution homogène. Multi-zones selon plan.",
        priceRange: "7 000 à 18 000 €",
      },
      {
        name: "Hotte cuisine + ventilation",
        description: "Aspiration adaptée à votre puissance feu, filtres charbon actif, désenfumage.",
        priceRange: "Sur devis selon configuration",
      },
      {
        name: "Cave à vins climatisée",
        description: "Régulation précise (12-14 °C, 70% HR) pour conservation longue durée.",
        priceRange: "4 500 à 12 000 €",
      },
      {
        name: "Vitrine réfrigérée desserts / fromages",
        description: "Présentation client avec température adaptée par produit.",
        priceRange: "3 000 à 10 000 €",
      },
    ],
    contraintes: [
      "HACCP : traçabilité température + hygiène, contrôles DDPP réguliers",
      "Sécurité incendie cuisine : nettoyage hotte tous les 6 mois (obligation légale)",
      "Bruit en limite voisinage : règlementation en zone urbaine",
      "Récupération de chaleur : obligation pour les nouvelles installations > 8 kW (RT2020)",
    ],
    whyEcoCvc: [
      "Pose en heures fermées (nuit ou lundi) pour ne pas couper votre activité",
      "Astreinte 24/7 pour clients sous contrat : intervention dans la nuit en cas de panne critique",
      "Coordination avec votre architecte ou cuisiniste sur les nouvelles ouvertures",
      "Maintenance trimestrielle pour respecter HACCP et préserver vos garanties matériel",
    ],
    faq: [
      {
        q: "Délai pour équiper un restaurant en construction ?",
        a: "8 à 16 semaines selon ampleur. Étude au stade plan, fabrication chambre froide sur mesure (4-6 semaines), pose 1-2 semaines.",
      },
      {
        q: "Vous gérez aussi le nettoyage de la hotte aspirante ?",
        a: "Oui, intégré au contrat de maintenance. Conformité obligation légale (6 mois) + certificat délivré.",
      },
      {
        q: "Coupure de courant : que faire pour la chambre froide ?",
        a: "Toutes nos chambres froides ont alarme température + sonde indépendante. Sur option, batterie de secours pour 24h d'autonomie.",
      },
      {
        q: "Climatisation salle bruyante : possible de remplacer ?",
        a: "Oui, modèles modernes ≤ 35 dB en mode silence. Remplacement en 1-2 jours selon installation existante.",
      },
      {
        q: "Quelles aides pour rénover le froid commercial ?",
        a: "Prime CEE pour fluides naturels (R290, R744) et bâtiments tertiaires. 1 000 à 5 000 € selon projet.",
      },
      {
        q: "Foodtruck : vous équipez aussi ?",
        a: "Oui, équipements compacts adaptés au volume restreint et aux contraintes électriques (alimentation 220V monophasé).",
      },
    ],
    emoji: "🍽️",
  },
  {
    slug: "pharmacie",
    name: "Pharmacie",
    metaTitle: "Frigoriste pharmacie — armoire vaccins, climatisation officine | ECO CVC",
    metaDescription:
      "Frigoriste pour pharmacie en Isère et Rhône-Alpes : armoires réfrigérées vaccins (2-8 °C), climatisation officine, sondes IoT. Installation, maintenance et conformité ARS.",
    h1: "Frigoriste pour pharmacie",
    tagline: "Armoires vaccins, climatisation officine, monitoring HACCP — pour pharmacies d'officine en Isère et Rhône-Alpes.",
    intro: [
      "Les pharmacies ont des exigences uniques : conservation stricte des vaccins entre 2 et 8 °C, traçabilité continue de la température, climatisation officine pour le confort des patients et la conservation de certains produits sensibles. Une rupture de chaîne du froid = stock entièrement à jeter (parfois plusieurs milliers d'euros) et risque sanitaire.",
      "ECO CVC équipe les pharmacies du Nord-Isère et de l'agglomération lyonnaise avec des armoires médicales certifiées, des systèmes de monitoring connecté, et un service d'astreinte critique en cas de panne.",
    ],
    problemes: [
      "Panne d'armoire vaccins le week-end : 5 000 à 20 000 € de stock perdu",
      "Sonde non calibrée : non-conformité ARS lors d'un contrôle",
      "Climatisation officine bruyante : gêne pour les patients en consultation",
      "Pas d'alarme connectée : pas de réaction possible avant ouverture lundi matin",
      "Armoire trop petite après ajout de nouveaux vaccins (Covid, grippe…) : produits stockés en dehors de la zone froide certifiée",
    ],
    equipments: [
      {
        name: "Armoire réfrigérée médicale (2-8 °C)",
        description: "Volumes de 60 L à 1 500 L. Régulation ±0,5 °C, ventilation forcée, double porte vitrée option, alarmes sonore + visuelle.",
        priceRange: "1 500 à 8 000 € selon volume",
      },
      {
        name: "Système de monitoring connecté",
        description: "Sondes étalonnées avec alerte SMS / email en cas de dépassement. Historique téléchargeable pour ARS.",
        priceRange: "600 à 2 000 € + 15-30 €/mois",
      },
      {
        name: "Climatisation officine",
        description: "Cassettes plafond ou gainable invisible. Modèles silencieux ≤ 32 dB pour le confort patient.",
        priceRange: "5 000 à 12 000 €",
      },
      {
        name: "Armoire négative (-20 °C)",
        description: "Pour certains vaccins ou échantillons. Volumes 100 à 500 L.",
        priceRange: "3 000 à 7 500 €",
      },
    ],
    contraintes: [
      "Conformité ARS : traçabilité température continue, registre 2 ans minimum, sondes étalonnées",
      "Bonnes Pratiques de Distribution (BPD) : 2-8 °C strict pour vaccins, hors plage = lot à détruire",
      "Confidentialité patient : climatisation suffisamment silencieuse pour préserver intimité au comptoir",
      "Sécurité : armoires verrouillables si stockage de produits sensibles (stupéfiants en sus)",
    ],
    whyEcoCvc: [
      "Astreinte 24/7 critique : intervention sous 4h pour panne armoire (clients sous contrat)",
      "Sondes étalonnées et certificats fournis pour ARS",
      "Monitoring connecté avec interface accessible à l'équipe pharmaceutique",
      "Maintenance annuelle avec test alarmes et calibration sondes",
    ],
    faq: [
      {
        q: "Quel volume d'armoire réfrigérée pour ma pharmacie ?",
        a: "Pour une officine 100-150 m² : 400 à 700 L typique. Nous calculons précisément selon votre catalogue (vaccins, insulines, biologiques).",
      },
      {
        q: "Délai d'intervention en panne ?",
        a: "Sous 4h pour clients sous contrat critique, 24h sinon. Solution de secours fournie pour préserver le stock.",
      },
      {
        q: "Coût d'un contrat de maintenance pharmacie ?",
        a: "À partir de 600 €/an : visite annuelle + calibration sondes + astreinte 24/7 + intervention prioritaire.",
      },
      {
        q: "Comment justifier la conformité chaîne du froid à l'ARS ?",
        a: "Nous fournissons certificat d'étalonnage, registre températures sur 2 ans, et documentation technique des armoires.",
      },
      {
        q: "Climatisation discrète possible en officine ?",
        a: "Oui, gainable invisible avec grilles plafond + caisson dans faux plafond. Aucun appareil visible en zone client.",
      },
      {
        q: "Quelle aide pour s'équiper en pharmacie ?",
        a: "Prime CEE BAT-TH selon équipement, plus possibilités spécifiques URPS pharmaciens dans certaines régions.",
      },
    ],
    emoji: "💊",
  },
  {
    slug: "boucherie-charcuterie",
    name: "Boucherie & charcuterie",
    metaTitle: "Frigoriste boucherie & charcuterie — vitrines, chambre froide | ECO CVC Isère",
    metaDescription:
      "Frigoriste pour boucherie et charcuterie en Isère et Rhône-Alpes : vitrines réfrigérées, chambres froides, salle de découpe climatisée. Installation, maintenance HACCP.",
    h1: "Frigoriste pour boucherie & charcuterie",
    tagline: "Vitrines, chambre froide, salle de découpe — équipement complet pour artisans bouchers en Isère et Rhône-Alpes.",
    intro: [
      "La boucherie-charcuterie a des exigences strictes : viande à 0-3 °C en vitrine, chambre froide à 0-4 °C pour le stock, salle de découpe climatisée à 12-14 °C pour la sécurité du travail et la qualité des produits. La moindre dérive = perte de marchandise et risque sanitaire.",
      "ECO CVC équipe les boucheries traditionnelles et boutiques de chaîne dans le Nord-Isère et la région lyonnaise. Du dimensionnement initial au contrat de maintenance trimestrielle, nous garantissons la conformité HACCP et la performance énergétique.",
    ],
    problemes: [
      "Vitrine viande qui dépasse 4 °C : non-conformité immédiate, risque sanitaire",
      "Salle de découpe trop chaude : difficile de respecter les normes hygiène + fatigue des employés",
      "Chambre froide qui consomme trop : facture électrique qui explose",
      "Pas de surveillance température hors heures ouvrées : pertes au lundi matin",
      "Givre dans la chambre froide : signe de joint usé ou panne de dégivrage imminente",
    ],
    equipments: [
      {
        name: "Vitrine réfrigérée viande (0-3 °C)",
        description: "Présentation client avec affichage prix, dégivrage automatique, éclairage LED basse chaleur.",
        priceRange: "5 000 à 15 000 € selon longueur",
      },
      {
        name: "Vitrine charcuterie (2-6 °C)",
        description: "Affichage des produits transformés, jambons, terrines. Statique ou ventilée selon configuration.",
        priceRange: "4 000 à 12 000 €",
      },
      {
        name: "Chambre froide stockage (0-4 °C)",
        description: "Volume 6 à 25 m³ selon flux. Crochets de boucherie sur rail si demandé.",
        priceRange: "8 000 à 22 000 €",
      },
      {
        name: "Climatisation salle de découpe",
        description: "Maintien 12-14 °C maximum pour la sécurité et la qualité. Cassette plafond ou split mural pro.",
        priceRange: "4 000 à 9 000 €",
      },
      {
        name: "Cellule de refroidissement rapide",
        description: "Pour produits cuisinés. Refroidissement +63 °C → +10 °C en moins de 2h selon HACCP.",
        priceRange: "6 000 à 15 000 €",
      },
    ],
    contraintes: [
      "HACCP : viandes à ≤ 4 °C strict, traçabilité 2 ans",
      "Salle de découpe ≤ 12-14 °C selon protocole sanitaire",
      "Crochets et rails inox certifiés agroalimentaires",
      "Sols et écoulements adaptés (lavage haute pression)",
    ],
    whyEcoCvc: [
      "Pose en jours de fermeture (lundi) ou nuit pour ne pas perturber les ventes",
      "Maintenance trimestrielle : conformité HACCP préservée + détection précoce des pannes",
      "Astreinte 7j/7 pour les clients sous contrat — intervention sous 24h",
      "Vitrines toutes marques : Friginox, Coreco, Costan, Mafirol, etc.",
    ],
    faq: [
      {
        q: "Combien de mètres linéaires de vitrine pour ma boucherie ?",
        a: "Selon votre chiffre d'affaires journalier : 2 m linéaires pour < 1 500 € CA/jour, 4 m pour 1 500-3 000 €, 6 m+ au-delà.",
      },
      {
        q: "Coût de fonctionnement annuel d'une chambre froide moderne ?",
        a: "Pour 12 m³ : 800 à 1 200 €/an d'électricité avec compresseur inverter récent. 2x plus avec un vieux groupe à remplacer.",
      },
      {
        q: "Vous installez les sols et carrelages ?",
        a: "Non, mais nous coordonnons avec votre maçon pour respecter les contraintes techniques (pente écoulements, isolation au sol de la chambre froide).",
      },
      {
        q: "Quelle aide pour rénover en boucherie ?",
        a: "Prime CEE pour les fluides naturels, plus aides spécifiques de la chambre des métiers selon la région.",
      },
      {
        q: "Vitrine en panne en pleine activité : que faire ?",
        a: "Nous déplaçons rapidement vos produits dans une chambre froide tampon le temps de l'intervention. Astreinte 24h pour clients sous contrat.",
      },
    ],
    emoji: "🥩",
  },
  {
    slug: "fromager-cremerie",
    name: "Fromager & crémerie",
    metaTitle: "Frigoriste fromager & crémerie — vitrines spécialisées | ECO CVC Isère",
    metaDescription:
      "Frigoriste pour fromager et crémerie en Isère et Rhône-Alpes : vitrines à fromages avec hygrométrie contrôlée, cave d'affinage, chambre froide. Installation et maintenance.",
    h1: "Frigoriste pour fromager & crémerie",
    tagline: "Vitrines fromages, cave d'affinage, chambre froide — équipement complet pour fromagers en Isère et Rhône-Alpes.",
    intro: [
      "Le fromage est l'un des produits les plus exigeants en froid commercial : température entre 4 et 12 °C selon le type, hygrométrie 85-95% pour les pâtes molles, conditions stables pour les pâtes pressées et les bleus. Une vitrine mal réglée = goût altéré, produit non vendable.",
      "ECO CVC équipe les fromagers traditionnels, crémeries et boutiques spécialisées dans le Nord-Isère et la région Rhône-Alpes. Notre expérience couvre les vitrines à hygrométrie contrôlée, les caves d'affinage sur mesure, et la maintenance préventive critique pour ce métier.",
    ],
    problemes: [
      "Vitrine trop sèche : croûtes qui craquent, pâtes molles qui se ratatinent",
      "Vitrine trop humide : moisissures indésirables, produits invendables",
      "Cave d'affinage dérégulée : retard sur le calendrier d'affinage, pertes financières",
      "Chambre froide partagée fromages/charcuterie : transfert d'odeurs, qualité gustative dégradée",
      "Maintenance bâclée : variations imperceptibles qui altèrent les produits sur la durée",
    ],
    equipments: [
      {
        name: "Vitrine à fromages avec hygrométrie",
        description: "Régulation T° + HR séparée. Modèles spécifiques pâtes molles (95% HR) ou pressées (80% HR).",
        priceRange: "6 000 à 15 000 €",
      },
      {
        name: "Cave d'affinage sur mesure",
        description: "Volume et conditions adaptés à votre production : pâtes molles, pressées, persillés, lactiques.",
        priceRange: "12 000 à 35 000 €",
      },
      {
        name: "Chambre froide stockage",
        description: "Spécifique fromages, séparée des autres produits pour éviter les transferts d'odeurs.",
        priceRange: "7 000 à 18 000 €",
      },
      {
        name: "Cellule de tempérage",
        description: "Pour faire monter en température progressive avant la vente — conserve la qualité aromatique.",
        priceRange: "Sur devis",
      },
    ],
    contraintes: [
      "HACCP fromages : 4-12 °C selon type, traçabilité 2 ans",
      "Hygrométrie spécifique : 85-95% selon famille de fromages",
      "Séparation aromatique : ne pas stocker fromages forts et neutres ensemble",
      "Bois traités spécifiques pour caves d'affinage (épicéa non résineux)",
    ],
    whyEcoCvc: [
      "Connaissance fine des familles de fromages et de leurs besoins thermiques",
      "Maintenance préventive trimestrielle : détection des dérives avant impact produit",
      "Caves d'affinage sur mesure : étude conjointe avec votre maître affineur",
      "Coordination avec menuisier pour les bois et étagères en cave",
    ],
    faq: [
      {
        q: "Quelle hygrométrie pour ma vitrine de comté ou beaufort ?",
        a: "Pâtes pressées cuites : 75-80% HR à 6-10 °C. Trop sec, la croûte craque. Trop humide, l'extérieur ramollit.",
      },
      {
        q: "Vitrine multi-zones possible ?",
        a: "Oui : 1 vitrine avec 2 ou 3 zones aux conditions différentes (frais, semi-affiné, lactiques). Permet de tout présenter sans compromis.",
      },
      {
        q: "Combien coûte une cave d'affinage 10 m² ?",
        a: "Comptez 18 000 à 28 000 € posée selon spécifications (cloisons, étagères bois, régulation, sondes).",
      },
      {
        q: "Vous installez aussi en marché couvert ou foire ?",
        a: "Oui, vitrines mobiles ou semi-fixes pour étals professionnels. Conformité HACCP même en environnement non climatisé.",
      },
    ],
    emoji: "🧀",
  },
  {
    slug: "fleuriste",
    name: "Fleuriste",
    metaTitle: "Frigoriste fleuriste — chambre froide fleurs, vitrine | ECO CVC Isère",
    metaDescription:
      "Frigoriste pour fleuriste en Isère et Rhône-Alpes : chambres froides fleurs (4-8 °C), vitrines réfrigérées, climatisation boutique. Installation et maintenance.",
    h1: "Frigoriste pour fleuriste",
    tagline: "Chambre froide fleurs, vitrine et climatisation boutique — pour fleuristes en Isère et Rhône-Alpes.",
    intro: [
      "Les fleurs coupées ont une durée de vie courte qui se prolonge significativement avec un froid maîtrisé : 4-8 °C en chambre froide fleurs, hygrométrie élevée, ventilation douce. Une bonne installation peut tripler la durée commerciale de votre stock — donc multiplier votre marge.",
      "ECO CVC équipe les fleuristes du Nord-Isère et de la région lyonnaise avec des chambres froides spécifiques fleurs (très différentes des chambres alimentaires) et des vitrines vitrées qui mettent en valeur vos compositions.",
    ],
    problemes: [
      "Chambre froide alimentaire transformée : ventilation trop forte qui dessèche les fleurs",
      "Pas de chambre froide : fleurs qui fanent en 2 jours au lieu de 6, marge divisée par 3",
      "Boutique surchauffée en été : clients qui ne s'attardent pas, chiffre d'affaires en baisse",
      "Vitrine en panne en plein week-end : compositions ratées pour les mariages",
    ],
    equipments: [
      {
        name: "Chambre froide fleurs spécifique",
        description: "4-8 °C avec ventilation douce et HR contrôlée. Vitrage option pour vente directe sans ouverture.",
        priceRange: "6 000 à 16 000 €",
      },
      {
        name: "Vitrine réfrigérée fleurs",
        description: "Présentation client devant la boutique. Vitrage anti-buée, éclairage LED.",
        priceRange: "3 500 à 9 000 €",
      },
      {
        name: "Climatisation boutique",
        description: "Modèle silencieux pour le confort des clients et la conservation des compositions exposées.",
        priceRange: "4 000 à 10 000 €",
      },
    ],
    contraintes: [
      "Pas de courant d'air direct sur les fleurs (ventilation douce, pas frontale)",
      "Hygrométrie 80-90% à maintenir",
      "Étagères ajustables pour différentes hauteurs de bouquets",
      "Vitrine extérieure protégée du soleil direct",
    ],
    whyEcoCvc: [
      "Spécialisation fleuristes : ventilation et HR adaptées (pas alimentaire détourné)",
      "Maintenance trimestrielle pour préserver la performance",
      "Pose en lundi (jour de fermeture habituel) pour ne pas perdre de chiffre",
      "Conseil sur l'agencement pour optimiser la durée de vie de chaque famille de fleurs",
    ],
    faq: [
      {
        q: "Quelle taille de chambre froide pour une boutique 60 m² ?",
        a: "Typiquement 4-6 m³, selon votre rotation de stock. Nous dimensionnons précisément lors de la visite.",
      },
      {
        q: "Combien de fois ma marge est multipliée avec une chambre froide ?",
        a: "En moyenne x2 à x3 sur les fleurs sensibles (roses, lys, gerberas). Amortissement sur 18-30 mois.",
      },
      {
        q: "Coût d'usage électrique annuel ?",
        a: "Chambre froide 6 m³ moderne : 400 à 700 €/an. Compresseur inverter récent indispensable.",
      },
      {
        q: "Vous équipez aussi les pompes funèbres pour fleurs deuil ?",
        a: "Oui, mêmes contraintes techniques + dimensionnement adapté à votre flux.",
      },
    ],
    emoji: "💐",
  },
  {
    slug: "traiteur",
    name: "Traiteur",
    metaTitle: "Frigoriste traiteur — chambre froide, cellule, vitrine | ECO CVC Isère",
    metaDescription:
      "Frigoriste pour traiteur en Isère et Rhône-Alpes : chambres froides positives et négatives, cellule de refroidissement rapide, vitrines, climatisation labo. Installation pro.",
    h1: "Frigoriste pour traiteur",
    tagline: "Chambres froides, cellule de refroidissement rapide, climatisation laboratoire — équipement complet pour traiteurs.",
    intro: [
      "Le métier de traiteur exige des équipements froids puissants et conformes HACCP : refroidissement rapide post-cuisson, stockage à plusieurs températures, transport thermique pour les livraisons. Une rupture = sécurité alimentaire compromise et événement gâché pour le client final.",
      "ECO CVC équipe les traiteurs traditionnels, événementiels et industriels dans le Nord-Isère et la région lyonnaise. Du laboratoire central aux véhicules réfrigérés en passant par les vitrines magasin, nous gérons l'ensemble.",
    ],
    problemes: [
      "Cellule de refroidissement absente : non-conformité HACCP sur les produits cuisinés",
      "Chambre froide saturée en pic d'activité (mariages, fêtes) : clients livrés en retard",
      "Climatisation labo insuffisante en été : tâches reportées, qualité produits compromise",
      "Variations température dans la chambre froide : risques bactériens, lots à jeter",
    ],
    equipments: [
      {
        name: "Cellule de refroidissement rapide",
        description: "Refroidissement +63 °C → +10 °C en moins de 2h conformément à HACCP. Capacités 30 à 200 kg.",
        priceRange: "6 000 à 18 000 €",
      },
      {
        name: "Chambre froide laboratoire",
        description: "Volume adapté à votre activité, accès direct, sondes IoT pour traçabilité continue.",
        priceRange: "8 000 à 25 000 €",
      },
      {
        name: "Chambre froide négative",
        description: "Pour produits surgelés, glaces, prêt-à-cuire. Capacités importantes pour les pics.",
        priceRange: "10 000 à 28 000 €",
      },
      {
        name: "Vitrine présentation magasin",
        description: "Si vous avez une boutique pour la vente directe : présentation traiteur, salades composées, plats du jour.",
        priceRange: "4 000 à 12 000 €",
      },
      {
        name: "Climatisation laboratoire",
        description: "Maintien 16-20 °C maximum dans le labo de production pour la qualité et le confort de l'équipe.",
        priceRange: "5 000 à 14 000 €",
      },
    ],
    contraintes: [
      "HACCP : refroidissement rapide obligatoire pour produits chauds, traçabilité",
      "Séparation strict produits crus / cuits / prêts à servir",
      "Conformité véhicules réfrigérés (température et hygiène)",
      "Hauteur sous plafond et accès chariots élévateurs si volumes importants",
    ],
    whyEcoCvc: [
      "Dimensionnement basé sur vos pics d'activité (pas sur la moyenne) — pas de saturation aux moments critiques",
      "Maintenance préventive avec calibration sondes pour rester conforme HACCP",
      "Astreinte 24/7 pour les périodes critiques (week-ends événementiels, fêtes)",
      "Coordination avec votre prestataire véhicule pour le froid embarqué",
    ],
    faq: [
      {
        q: "Cellule de refroidissement : obligatoire pour traiteur ?",
        a: "Oui dès que vous cuisinez à chaud puis stockez : HACCP impose refroidissement rapide. Sans cellule : non-conformité au moindre contrôle.",
      },
      {
        q: "Volume de chambre froide pour un traiteur événementiel ?",
        a: "Très variable selon vos pics. Pour un traiteur 10-15 prestations/mois : 15-25 m³ typiques + chambre négative 6-10 m³.",
      },
      {
        q: "Vous équipez aussi les véhicules de livraison ?",
        a: "Pas directement (carrosserie spécialisée), mais nous coordonnons et nous occupons de la maintenance des groupes embarqués.",
      },
      {
        q: "Coût annuel maintenance traiteur ?",
        a: "Contrat traiteur 30+ m³ équipement : 1 200 à 2 200 €/an avec visites trimestrielles + astreinte.",
      },
    ],
    emoji: "🥗",
  },
  {
    slug: "supérette-épicerie",
    name: "Supérette & épicerie",
    metaTitle: "Frigoriste supérette & épicerie — meubles linéaires, chambre froide | ECO CVC",
    metaDescription:
      "Frigoriste pour supérette et épicerie en Isère et Rhône-Alpes : meubles linéaires froid positif/négatif, chambres froides, climatisation magasin. Installation et SAV.",
    h1: "Frigoriste pour supérette & épicerie",
    tagline: "Linéaires froid, chambre froide, climatisation magasin — pour supérettes et épiceries en Isère et Rhône-Alpes.",
    intro: [
      "Une supérette ou épicerie performante repose sur la fiabilité de son matériel froid : pannes = perte de chiffre direct (clients qui ne reviennent pas + stock perdu). ECO CVC accompagne les commerces de proximité du Nord-Isère et de la région lyonnaise depuis l'installation jusqu'à la maintenance préventive.",
      "Que vous soyez en franchise (Carrefour Express, Coccinelle, Vival, Spar…) ou en indépendant, nous équipons votre magasin avec le matériel adapté à votre flux et votre surface.",
    ],
    problemes: [
      "Linéaires froid en panne : clients qui voient des produits non frais, image dégradée",
      "Chambre froide saturée le vendredi : impossible de stocker la livraison",
      "Magasin trop chaud en été : visiteurs qui repartent vite, panier moyen en chute",
      "Consommation électrique excessive : groupes anciens à remplacer mais quel modèle ?",
      "Bruit groupe extérieur : plaintes voisinage en zone résidentielle",
    ],
    equipments: [
      {
        name: "Linéaire froid positif (frais)",
        description: "Yaourts, jambon, fromages, charcuterie, plats préparés. Modèles muraux ou îlots ouverts/fermés.",
        priceRange: "3 500 à 8 000 €/m linéaire",
      },
      {
        name: "Linéaire froid négatif (surgelés)",
        description: "Coffres ou armoires verticales. Couvercle vitré pour économie d'énergie.",
        priceRange: "3 000 à 7 000 €/m linéaire",
      },
      {
        name: "Chambre froide réserve",
        description: "Stockage des produits avant mise en linéaire. Volume selon flux hebdomadaire.",
        priceRange: "8 000 à 22 000 €",
      },
      {
        name: "Climatisation magasin",
        description: "Cassettes plafond ou gainable. Calcul thermique précis vu les meubles froid qui dégagent de la chaleur.",
        priceRange: "6 000 à 14 000 €",
      },
    ],
    contraintes: [
      "HACCP : températures conformes selon produits (yaourt ≤ 6 °C, charcuterie ≤ 4 °C, surgelés ≤ -18 °C)",
      "Récupération chaleur des groupes : possible pour pré-chauffer eau sanitaire (bonus aides)",
      "Bruit groupe extérieur : ≤ 38 dB en limite de propriété la nuit",
      "Affichage prix obligatoire sur chaque produit en linéaire ouvert",
    ],
    whyEcoCvc: [
      "Vision globale : meubles + chambre froide + clim avec un seul interlocuteur",
      "Optimisation énergétique : remplacement groupes anciens par inverter récents (économies 30-40%)",
      "Maintenance préventive trimestrielle pour éviter les pannes en pleine activité",
      "Astreinte 7j/7 pour les commerces ouverts week-end et jours fériés",
    ],
    faq: [
      {
        q: "Combien de mètres linéaires pour une supérette 100 m² ?",
        a: "Typiquement 8-12 m positifs + 3-5 m négatifs. Adapté selon votre offre (proximité simple vs. supérette complète).",
      },
      {
        q: "Coût électrique mensuel des linéaires froid ?",
        a: "Pour 10 m linéaires modernes : 200 à 350 €/mois. 2x plus avec du matériel ancien à remplacer.",
      },
      {
        q: "Aide CEE pour rénover en supérette ?",
        a: "Oui, prime BAT-TH spécifique froid commercial : jusqu'à 5 000 € selon projet et fluide utilisé (R290, R744).",
      },
      {
        q: "Récupération de chaleur sur groupes : intéressant ?",
        a: "Oui, peut couvrir 70-80% de l'eau chaude sanitaire du magasin. Surcoût 1 500-3 000 €, amortissement 3-5 ans.",
      },
    ],
    emoji: "🛒",
  },
];

export const findMetier = (slug: string) => metiers.find((m) => m.slug === slug);
