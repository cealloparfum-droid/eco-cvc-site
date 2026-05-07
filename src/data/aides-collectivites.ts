export type AidesCollectivite = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  region: string;
  population: string;
  intro: string[];
  aidesNationales: { name: string; montant: string; description: string }[];
  aidesLocales: { name: string; montant: string; description: string; conditions?: string }[];
  cumul: string;
  communes: string[];
  faq: { q: string; a: string }[];
};

export const aidesCollectivites: AidesCollectivite[] = [
  {
    slug: "lyon-metropole",
    name: "Métropole de Lyon",
    metaTitle: "Aides PAC Lyon Métropole 2026 — MaPrimeRénov' + Eco-Rénov | ECO CVC",
    metaDescription:
      "Toutes les aides 2026 pour pompe à chaleur sur Lyon Métropole : MaPrimeRénov', Coup de pouce, Eco-Rénov Métropole de Lyon. Cumul, conditions, démarches.",
    h1: "Aides pompe à chaleur 2026 sur Lyon Métropole",
    region: "Auvergne-Rhône-Alpes",
    population: "1,4 million d'habitants (59 communes)",
    intro: [
      "La Métropole de Lyon (59 communes) bénéficie d'un dispositif d'aides locales en plus des aides nationales. Le programme Eco-Rénov complète MaPrimeRénov' pour les rénovations énergétiques d'ampleur. Cumulés, les ménages modestes peuvent voir 70-85% de leur projet PAC pris en charge.",
      "ECO CVC, RGE QualiPAC, intervient sur l'ensemble de la Métropole : Lyon (1er-9e arrondissements), Villeurbanne, Caluire, Bron, Vénissieux, Saint-Priest, Meyzieu, Décines, Vaulx-en-Velin, Oullins…",
    ],
    aidesNationales: [
      {
        name: "MaPrimeRénov' PAC air-eau",
        montant: "Jusqu'à 5 000 €",
        description: "Selon profil de revenus (Bleu/Jaune/Violet/Rose). Bleu : 5 000 € · Jaune : 4 000 € · Violet : 3 000 €.",
      },
      {
        name: "Coup de pouce chauffage CEE",
        montant: "2 500 à 5 000 €",
        description: "Cumulable avec MaPrimeRénov'. Bonus +1 200 € sortie chaudière fioul.",
      },
      {
        name: "TVA réduite à 5,5%",
        montant: "~14% du projet",
        description: "Application automatique par l'artisan RGE.",
      },
      {
        name: "Éco-PTZ",
        montant: "Jusqu'à 50 000 €",
        description: "Prêt à taux zéro sur 20 ans pour étaler le reste à charge.",
      },
    ],
    aidesLocales: [
      {
        name: "Eco-Rénov Lyon Métropole",
        montant: "Jusqu'à 3 500 €",
        description: "Aide complémentaire pour les rénovations énergétiques d'ampleur (gain énergétique > 35%).",
        conditions: "Propriétaire occupant, résidence principale, plafonds de revenus selon ANAH.",
      },
      {
        name: "Aide audit énergétique Métropole",
        montant: "Jusqu'à 600 €",
        description: "Prise en charge partielle d'un audit énergétique préalable.",
      },
      {
        name: "Permanence rénovation gratuite",
        montant: "Service gratuit",
        description: "ALEC Lyon (Agence Locale Énergie Climat) accompagne gratuitement les particuliers dans le montage des dossiers.",
      },
    ],
    cumul:
      "Pour un ménage modeste (Jaune) à Lyon, sortant d'une chaudière fioul pour passer à une PAC air-eau (devis 14 000 €) : MaPrimeRénov' 4 000 € + Coup de pouce 4 500 € + bonus fioul 1 000 € + Eco-Rénov 3 500 € + TVA 5,5% (~2 000 €) = 15 000 € d'aides cumulées. Reste à charge potentiellement nul, et même surplus à régulariser.",
    communes: ["Lyon", "Villeurbanne", "Caluire-et-Cuire", "Bron", "Vénissieux", "Saint-Priest", "Meyzieu", "Décines-Charpieu", "Vaulx-en-Velin", "Oullins", "Pierre-Bénite", "Saint-Fons", "Givors"],
    faq: [
      {
        q: "Comment savoir si je suis éligible Eco-Rénov ?",
        a: "Plafonds de revenus alignés sur l'ANAH (Bleu, Jaune, Violet). Le dépôt se fait via la plateforme métropolitaine ou via un Espace Conseil France Rénov. ECO CVC vous oriente lors de la visite technique.",
      },
      {
        q: "Eco-Rénov est-il cumulable avec MaPrimeRénov' ?",
        a: "Oui, intégralement. Le cumul est même obligatoire pour optimiser le dossier.",
      },
      {
        q: "Quels arrondissements de Lyon couvrez-vous ?",
        a: "Tous : 1er au 9e. Études de faisabilité ABF systématiques pour les zones classées (Vieux Lyon, Presqu'île, Croix-Rousse).",
      },
      {
        q: "Délai pour toucher l'aide Eco-Rénov ?",
        a: "Versement après validation des travaux. Comptez 6-10 semaines après la fin du chantier.",
      },
    ],
  },
  {
    slug: "grenoble-alpes-metropole",
    name: "Grenoble-Alpes-Métropole",
    metaTitle: "Aides PAC Grenoble-Alpes-Métropole 2026 — MurMur + MaPrimeRénov' | ECO CVC",
    metaDescription:
      "Aides 2026 pompe à chaleur sur Grenoble-Alpes-Métropole : MurMur Métropole, MaPrimeRénov', Coup de pouce. Cumul jusqu'à 80% du projet pour ménages modestes.",
    h1: "Aides pompe à chaleur 2026 sur Grenoble-Alpes-Métropole",
    region: "Auvergne-Rhône-Alpes",
    population: "445 000 habitants (49 communes)",
    intro: [
      "Grenoble-Alpes-Métropole propose le dispositif MurMur 2 : un soutien financier à la rénovation énergétique cumulable avec les aides nationales. Pour les ménages aux revenus modestes ou intermédiaires, le dispositif peut couvrir jusqu'à 80% d'un projet PAC.",
      "ECO CVC intervient sur la Métropole grenobloise et son agglomération étendue : Grenoble, Saint-Martin-d'Hères, Échirolles, Fontaine, Saint-Égrève, Meylan, La Tronche, et les communes alentour.",
    ],
    aidesNationales: [
      { name: "MaPrimeRénov' PAC air-eau", montant: "Jusqu'à 5 000 €", description: "Selon profil de revenus." },
      { name: "Coup de pouce chauffage CEE", montant: "2 500 à 5 000 €", description: "+ bonus 1 200 € sortie fioul." },
      { name: "TVA 5,5%", montant: "~14%", description: "Sur l'ensemble du projet (matériel + main d'œuvre)." },
      { name: "Éco-PTZ", montant: "Jusqu'à 50 000 €", description: "Sans intérêts sur 20 ans." },
    ],
    aidesLocales: [
      {
        name: "MurMur 2 — Métropole de Grenoble",
        montant: "Jusqu'à 4 000 €",
        description: "Aide à la rénovation énergétique des logements individuels et collectifs de la Métropole.",
        conditions: "Propriétaire occupant ou bailleur, gain énergétique cible.",
      },
      {
        name: "Accompagnement gratuit ALEC Grenoble",
        montant: "Service gratuit",
        description: "Conseil personnalisé par l'Agence Locale Énergie Climat sur les dispositifs cumulables.",
      },
      {
        name: "Aide rénovation copropriétés",
        montant: "Variable",
        description: "Pour les syndics de copropriétés engagés dans une rénovation globale.",
      },
    ],
    cumul:
      "Ménage Bleu sortant d'une chaudière fioul, PAC air-eau (devis 13 500 €) : MaPrimeRénov' 5 000 € + Coup de pouce 5 000 € + bonus fioul 1 000 € + MurMur 4 000 € + TVA 5,5% (~1 950 €) = 16 950 €. Reste à charge négatif → surplus à régulariser au prorata du devis.",
    communes: ["Grenoble", "Saint-Martin-d'Hères", "Échirolles", "Fontaine", "Saint-Égrève", "Meylan", "La Tronche", "Eybens", "Seyssinet-Pariset", "Pont-de-Claix", "Vif", "Domène"],
    faq: [
      {
        q: "Comment monter un dossier MurMur 2 ?",
        a: "Soit via une plateforme dédiée Métropole, soit via un opérateur agréé qui monte le dossier complet. ECO CVC vous accompagne sur le volet PAC du projet.",
      },
      {
        q: "MurMur s'applique-t-il à la PAC seule ou seulement à la rénovation globale ?",
        a: "Idéalement projet d'ampleur (PAC + isolation), mais des aides existent aussi pour gestes individuels selon profil revenus.",
      },
      {
        q: "Vous travaillez aussi en zone ZFE Grenoble ?",
        a: "Oui. La sortie des énergies fossiles est encouragée dans la ZFE. Notre installation PAC contribue à cet objectif.",
      },
    ],
  },
  {
    slug: "capi-bourgoin",
    name: "CAPI (Bourgoin–L'Isle-d'Abeau)",
    metaTitle: "Aides PAC CAPI 2026 — Bourgoin, L'Isle-d'Abeau | ECO CVC",
    metaDescription:
      "Aides pompe à chaleur 2026 sur la CAPI (Communauté d'Agglomération Porte de l'Isère) : MaPrimeRénov', Coup de pouce, dispositifs locaux. Bourgoin, L'Isle-d'Abeau, Villefontaine.",
    h1: "Aides pompe à chaleur 2026 sur la CAPI (Bourgoin–L'Isle-d'Abeau)",
    region: "Auvergne-Rhône-Alpes",
    population: "108 000 habitants (22 communes)",
    intro: [
      "La CAPI (Communauté d'Agglomération Porte de l'Isère) regroupe 22 communes du Nord-Isère autour de Bourgoin-Jallieu et L'Isle-d'Abeau. Notre atelier ECO CVC est implanté à Nivolas-Vermelle, en plein cœur de la CAPI.",
      "Outre les aides nationales, la CAPI propose ponctuellement des subventions complémentaires sur la rénovation énergétique. Notre proximité (3-7 km de la majorité des communes) permet une réactivité maximale.",
    ],
    aidesNationales: [
      { name: "MaPrimeRénov'", montant: "Jusqu'à 5 000 €", description: "Selon profil revenus, validé par Anah." },
      { name: "Coup de pouce CEE", montant: "2 500 à 5 000 €", description: "Cumulable, bonus fioul +1 000 € si applicable." },
      { name: "TVA 5,5%", montant: "~14%", description: "Application automatique." },
      { name: "Éco-PTZ", montant: "Jusqu'à 50 000 €", description: "Prêt à taux zéro." },
    ],
    aidesLocales: [
      {
        name: "Subvention rénovation CAPI",
        montant: "Variable selon dispositif",
        description: "Aides ponctuelles sur les rénovations d'ampleur. Vérification dossier par dossier.",
        conditions: "Propriétaire occupant, plafonds revenus selon dispositif en cours.",
      },
      {
        name: "Permanence Espace Conseil France Rénov CAPI",
        montant: "Service gratuit",
        description: "Conseil personnalisé sur l'ensemble des dispositifs (national + local).",
      },
    ],
    cumul:
      "Ménage Jaune à L'Isle-d'Abeau, sortie de gaz vers PAC air-eau (devis 13 000 €) : MaPrimeRénov' 4 000 € + Coup de pouce 4 500 € + TVA 5,5% (~1 880 €) + éventuelle aide CAPI ~1 000 € = 11 380 €. Reste à charge environ 1 600 €.",
    communes: ["Bourgoin-Jallieu", "L'Isle-d'Abeau", "Villefontaine", "Saint-Quentin-Fallavier", "Nivolas-Vermelle", "Domarin", "Maubec", "Ruy-Montceau", "Saint-Alban-de-Roche", "Sérézin-de-la-Tour", "Saint-Savin", "Four"],
    faq: [
      {
        q: "Comment vérifier l'aide CAPI applicable à mon dossier ?",
        a: "Lors de la visite technique gratuite, nous identifions tous les dispositifs en cours. Notre atelier est sur la CAPI : nous suivons l'actualité des aides au plus près.",
      },
      {
        q: "ECO CVC intervient dans toutes les communes CAPI ?",
        a: "Oui, sans frais de déplacement. Nous sommes basés à Nivolas-Vermelle, en plein cœur de l'agglomération.",
      },
      {
        q: "Permanence France Rénov CAPI : où ?",
        a: "Permanences à Bourgoin et L'Isle-d'Abeau. Conseillers gratuits, sans engagement, complément utile à notre étude technique.",
      },
    ],
  },
  {
    slug: "grand-chambery",
    name: "Grand Chambéry",
    metaTitle: "Aides PAC Grand Chambéry 2026 — MaPrimeRénov' + métropole | ECO CVC",
    metaDescription:
      "Aides 2026 pompe à chaleur sur Grand Chambéry : MaPrimeRénov', Coup de pouce, dispositifs métropole. Cumul, conditions et démarches par ECO CVC.",
    h1: "Aides pompe à chaleur 2026 sur Grand Chambéry",
    region: "Auvergne-Rhône-Alpes",
    population: "138 000 habitants (38 communes)",
    intro: [
      "Grand Chambéry, métropole savoyarde, propose un soutien à la rénovation énergétique en complément des aides nationales. Le climat plus rigoureux (jusqu'à -15 °C l'hiver) et le bâti ancien rendent la rénovation PAC particulièrement intéressante : économies de chauffage majeures.",
      "ECO CVC intervient sur Chambéry, La Motte-Servolex, Cognin, Bassens, Saint-Alban-Leysse, Barberaz et l'ensemble de la métropole, en privilégiant les modèles 'plage étendue' garantis -20 °C.",
    ],
    aidesNationales: [
      { name: "MaPrimeRénov'", montant: "Jusqu'à 5 000 €", description: "Profils Bleu/Jaune/Violet/Rose." },
      { name: "Coup de pouce CEE", montant: "2 500 à 5 000 €", description: "+ bonus fioul." },
      { name: "TVA 5,5%", montant: "~14%", description: "Travaux d'amélioration." },
      { name: "Éco-PTZ", montant: "Jusqu'à 50 000 €", description: "Prêt à taux zéro." },
    ],
    aidesLocales: [
      {
        name: "Aide rénovation énergétique Grand Chambéry",
        montant: "Variable",
        description: "Subvention complémentaire pour les rénovations performantes (gain énergétique cible).",
        conditions: "Propriétaire, plafonds revenus, audit énergétique recommandé.",
      },
      {
        name: "Espace Conseil France Rénov Chambéry",
        montant: "Service gratuit",
        description: "Accompagnement complet par les conseillers locaux.",
      },
    ],
    cumul:
      "Ménage modeste à Chambéry, PAC géothermique (devis 26 000 €) suite à dépose chaudière fioul : MaPrimeRénov' 11 000 € + Coup de pouce 6 000 € + bonus fioul 1 000 € + aide locale ~2 500 € + TVA 5,5% (~3 770 €) = 24 270 €. Reste à charge ~1 700 € sur projet 26 000 €.",
    communes: ["Chambéry", "La Motte-Servolex", "Cognin", "Bassens", "Saint-Alban-Leysse", "Barberaz", "Vimines", "Jacob-Bellecombette", "Sonnaz"],
    faq: [
      {
        q: "Quelle PAC privilégier vu le climat froid de Chambéry ?",
        a: "PAC plage étendue garantie -20 °C (Daikin Altherma 3 H, Mitsubishi Ecodan Plus, Atlantic Alféa Excellia). Pour grandes maisons, géothermie souvent optimale.",
      },
      {
        q: "Hauteurs (350-450 m d'altitude) : impact sur les aides ?",
        a: "Aides identiques au reste de la France. Mais on dimensionne légèrement plus généreusement (+1-2 kW) pour absorber les pics de froid.",
      },
      {
        q: "Vous intervenez vraiment depuis l'Isère ?",
        a: "Oui, à 70 km de notre atelier. Nous regroupons les RDV sur Chambéry pour optimiser la logistique.",
      },
    ],
  },
  {
    slug: "grand-annecy",
    name: "Grand Annecy",
    metaTitle: "Aides PAC Grand Annecy 2026 — MaPrimeRénov' + métropole | ECO CVC",
    metaDescription:
      "Aides 2026 pompe à chaleur Grand Annecy : MaPrimeRénov', Coup de pouce, dispositifs locaux. Communes : Annecy, Annecy-le-Vieux, Cran-Gevrier, Seynod.",
    h1: "Aides pompe à chaleur 2026 sur Grand Annecy",
    region: "Auvergne-Rhône-Alpes",
    population: "210 000 habitants (34 communes)",
    intro: [
      "Le Grand Annecy regroupe 34 communes de Haute-Savoie autour du lac. Marché de l'immobilier tendu, prix au m² élevés, contraintes patrimoniales et environnementales fortes (lac classé) : la PAC est un investissement rentable mais qui demande une expertise technique pointue.",
      "ECO CVC intervient sur Annecy, Annecy-le-Vieux, Cran-Gevrier, Seynod, Meythet et l'ensemble de l'agglomération sur projet d'envergure (regroupement de RDV vu la distance).",
    ],
    aidesNationales: [
      { name: "MaPrimeRénov'", montant: "Jusqu'à 5 000 €", description: "Profils par revenus." },
      { name: "Coup de pouce CEE", montant: "2 500 à 5 000 €", description: "+ bonus fioul." },
      { name: "TVA 5,5%", montant: "~14%", description: "Sur le projet complet." },
      { name: "Éco-PTZ", montant: "Jusqu'à 50 000 €", description: "0% d'intérêts." },
    ],
    aidesLocales: [
      {
        name: "Aide rénovation Grand Annecy",
        montant: "Variable",
        description: "Subvention pour rénovations énergétiques de logements individuels et copropriétés.",
        conditions: "Conditions de revenus + performance énergétique cible.",
      },
      {
        name: "Conseiller France Rénov Annecy",
        montant: "Service gratuit",
        description: "Permanence physique + téléphone pour orienter dans les dispositifs.",
      },
    ],
    cumul:
      "Famille Violet à Annecy-le-Vieux, PAC air-eau premium 14 kW (devis 18 500 €) : MaPrimeRénov' 3 000 € + Coup de pouce 3 000 € + aide locale ~1 500 € + TVA 5,5% (~2 680 €) = 10 180 €. Reste à charge 8 320 € sur projet 18 500 €.",
    communes: ["Annecy", "Annecy-le-Vieux", "Cran-Gevrier", "Meythet", "Seynod", "Veyrier-du-Lac", "Pringy", "Chavanod"],
    faq: [
      {
        q: "Contraintes acoustiques en bord de lac : comment ça se passe ?",
        a: "Modèles ≤ 35 dB en limite de propriété la nuit. Nous fournissons une mesure acoustique signée si demandée par le voisinage ou l'ABF.",
      },
      {
        q: "Vieille Ville d'Annecy : pose possible ?",
        a: "Oui, avec dossier ABF. Solutions discrètes : unité ext. en cour, masquage par habillage, parfois passage en PAC air-eau invisible depuis la rue.",
      },
      {
        q: "Vous vous déplacez vraiment jusqu'à Annecy ?",
        a: "Oui, sur projet d'envergure (3-4 jours minimum). Pour les petits chantiers, nous regroupons.",
      },
    ],
  },
  {
    slug: "vienne-condrieu-agglomeration",
    name: "Vienne Condrieu Agglomération",
    metaTitle: "Aides PAC Vienne Condrieu 2026 — MaPrimeRénov' + locales | ECO CVC",
    metaDescription:
      "Aides 2026 pompe à chaleur Vienne Condrieu Agglomération : MaPrimeRénov', Coup de pouce, dispositifs locaux. ECO CVC, RGE QualiPAC.",
    h1: "Aides pompe à chaleur 2026 sur Vienne Condrieu Agglomération",
    region: "Auvergne-Rhône-Alpes",
    population: "92 000 habitants (30 communes)",
    intro: [
      "Vienne Condrieu Agglomération regroupe 30 communes du sud lyonnais et du Pilat rhodanien. Le climat micro-régional (étés chauds, vallée du Rhône) et le bâti ancien dans le centre historique de Vienne nécessitent une approche technique adaptée.",
      "ECO CVC intervient sur Vienne, Sainte-Colombe, Saint-Romain-en-Gal, Pont-Évêque, Reventin-Vaugris, Chasse-sur-Rhône, Seyssuel et Condrieu.",
    ],
    aidesNationales: [
      { name: "MaPrimeRénov'", montant: "Jusqu'à 5 000 €", description: "Selon profil revenus." },
      { name: "Coup de pouce CEE", montant: "2 500 à 5 000 €", description: "Cumulable national." },
      { name: "TVA 5,5%", montant: "~14%", description: "Application automatique." },
      { name: "Éco-PTZ", montant: "Jusqu'à 50 000 €", description: "Prêt à taux zéro." },
    ],
    aidesLocales: [
      {
        name: "Aide à la rénovation Vienne Condrieu",
        montant: "Variable",
        description: "Soutien ponctuel à la rénovation énergétique selon dispositifs en cours.",
      },
      {
        name: "Espace Conseil France Rénov Vienne",
        montant: "Service gratuit",
        description: "Conseil personnalisé pour les particuliers et copropriétés.",
      },
    ],
    cumul:
      "Couple modeste à Vienne sortant du fioul, PAC air-eau (devis 14 000 €) : MaPrimeRénov' Jaune 4 000 € + Coup de pouce 4 500 € + bonus fioul 1 000 € + TVA 5,5% (~2 030 €) = 11 530 €. Reste à charge environ 2 470 €.",
    communes: ["Vienne", "Sainte-Colombe", "Saint-Romain-en-Gal", "Reventin-Vaugris", "Pont-Évêque", "Chasse-sur-Rhône", "Seyssuel", "Condrieu", "Estrablin", "Chuzelles"],
    faq: [
      {
        q: "Centre historique de Vienne : pose PAC possible ?",
        a: "Oui, avec déclaration préalable et avis ABF si visible depuis l'espace public. Nous montons le dossier complet.",
      },
      {
        q: "Vous équipez les commerces des Halles de Vienne ?",
        a: "Oui : froid commercial, climatisation, ventilation. Pose en horaires décalés possible.",
      },
      {
        q: "Distance depuis votre atelier ?",
        a: "35 km. Visites techniques sous 5 jours, dépannage sous 48h pour clients sous contrat.",
      },
    ],
  },
];

export const findAides = (slug: string) => aidesCollectivites.find((a) => a.slug === slug);
