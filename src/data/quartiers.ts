export type Quartier = {
  slug: string;
  name: string;
  citySlug: string; // lien vers la page ville (route /pompe-a-chaleur/{citySlug})
  cityName: string;
  arrondissement?: string;
  postalCodes: string[];
  intro: string;
  habitat: string;
  contraintes: string[];
  solutions: string[];
  prixIndicatif: string;
  faq: { q: string; a: string }[];
};

export const quartiers: Quartier[] = [
  {
    slug: "croix-rousse",
    name: "Croix-Rousse",
    citySlug: "lyon-4e",
    cityName: "Lyon 1er & 4e",
    arrondissement: "1er & 4e",
    postalCodes: ["69001", "69004"],
    intro:
      "Quartier emblématique de Lyon, la Croix-Rousse mêle Pentes (Lyon 1er, secteur sauvegardé UNESCO) et Plateau (Lyon 4e). Les maisons de canuts à hauts plafonds (3,5-4 m) et les immeubles 1850-1900 demandent une approche clim sur-mesure.",
    habitat:
      "Maisons de canuts (XIXᵉ), immeubles haussmanniens, copropriétés familiales sur le Plateau. Hauts plafonds typiques 3,5-4 m, isolation thermique souvent faible, cours intérieures profondes idéales pour l'unité extérieure.",
    contraintes: [
      "Secteur UNESCO + ABF systématique sur les Pentes",
      "Hauts plafonds : majorer la puissance clim de 25-30 %",
      "Vis-à-vis fréquent : étude positionnement minutieuse",
      "Bruit : modèles ≤ 35 dB obligatoires (mode silence nuit)",
    ],
    solutions: [
      "Mono-split 5 kW pour 35-50 m² avec hauts plafonds (vs 3,5 kW standard)",
      "Multi-split avec unité ext. en cour intérieure (non visible)",
      "Cassette encastrée plafond si refus copropriété",
    ],
    prixIndicatif: "1 490 € à 4 990 € selon configuration et nb de pièces",
    faq: [
      {
        q: "ABF obligatoire pour clim aux Pentes Croix-Rousse ?",
        a: "Oui systématique en secteur UNESCO. Nous gérons la déclaration préalable avec photo-montage. Délai instruction : 2 mois.",
      },
      {
        q: "Quelle puissance pour 40 m² avec plafonds canuts ?",
        a: "5 kW recommandé (au lieu de 3,5 kW en plafond standard). Compte tenu du volume d'air, le sur-dimensionnement évite la sur-consommation.",
      },
      {
        q: "Mes voisins seront-ils dérangés par l'unité extérieure ?",
        a: "Non si on choisit un modèle ≤ 35 dB en mode nuit + plots anti-vibrations + emplacement en cour. Mesure d'émergence en limite de propriété possible.",
      },
    ],
  },
  {
    slug: "confluence",
    name: "Confluence",
    citySlug: "lyon-2e",
    cityName: "Lyon 2e",
    arrondissement: "2e",
    postalCodes: ["69002"],
    intro:
      "Quartier neuf de Lyon, Confluence concentre des programmes RE2020 post-2010 avec souvent un pré-équipement clim inclus. La pose y est rapide et sans contrainte ABF, contrairement au reste de Lyon 2e.",
    habitat:
      "Immeubles RE2020 (post-2010), copropriétés modernes, lofts et duplex. Performance thermique élevée d'origine. Pré-équipement clim parfois inclus dès la livraison.",
    contraintes: [
      "Vérifier le règlement de copropriété (souvent souple en post-2010)",
      "Si pré-équipement existant : juste raccordement (pose en demi-journée)",
      "Pas d'ABF (quartier moderne, hors secteur sauvegardé)",
    ],
    solutions: [
      "Mono-split 3,5 kW à 990 € posé : T2-T3 jusqu'à 50 m²",
      "Bi-split à 2 490 € pour T3-T4 (séjour + chambre)",
      "Pose 1 jour, demi-journée si pré-équipement",
    ],
    prixIndicatif: "990 € à 2 990 € selon nb de pièces équipées",
    faq: [
      {
        q: "Pose clim Confluence : ABF nécessaire ?",
        a: "Non, Confluence est un quartier neuf hors secteur sauvegardé. Pose simplifiée, sans démarche urbanisme dans la majorité des cas.",
      },
      {
        q: "Mon appartement a déjà un pré-équipement, ça change le prix ?",
        a: "Oui, on tombe à 690-790 € pour une mise en service rapide (raccordement existant + pose unité ext. + tests). Devis gratuit après visite.",
      },
      {
        q: "Délai entre commande et pose à Confluence ?",
        a: "1 à 2 semaines en saison creuse, 3-4 semaines en juin-août. Pose 1 jour, mise en service immédiate.",
      },
    ],
  },
  {
    slug: "part-dieu",
    name: "Part-Dieu",
    citySlug: "lyon-3e",
    cityName: "Lyon 3e",
    arrondissement: "3e",
    postalCodes: ["69003"],
    intro:
      "Cœur tertiaire de Lyon (gare, tours, centre commercial), Part-Dieu mélange immeubles tertiaires et copropriétés résidentielles 1970-1990. Demande clim massive (effet îlot de chaleur urbain) et tertiaire (VRV multi-zones).",
    habitat:
      "Tours et immeubles 1970-2000, copropriétés résidentielles familiales, bureaux (auditoriums, plateaux open-space). Densité bâtie élevée, climat urbain estival sévère.",
    contraintes: [
      "Copropriétés des années 70-90 : règlement parfois strict sur façade",
      "Hauteurs élevées : nacelle parfois nécessaire pour pose façade",
      "Tertiaire : interventions hors heures de bureau possibles",
    ],
    solutions: [
      "Résidentiel : mono-split 990 €, multi-split 2 490 €",
      "Tertiaire : VRV multi-zones (10-200 kW) avec récupération d'énergie",
      "Cabinets médicaux et professions libérales : split réversible silencieux",
    ],
    prixIndicatif: "Résidentiel : 990 € à 4 990 € · Tertiaire : devis selon surface",
    faq: [
      {
        q: "Vous équipez les bureaux Part-Dieu ?",
        a: "Oui, climatisation tertiaire VRV de 10 à 200 kW, récupération d'énergie, contrat d'entretien annuel + intervention prioritaire. Devis sous 48h.",
      },
      {
        q: "Pose en immeuble de grande hauteur Part-Dieu ?",
        a: "Nacelle ou corde si > 4ᵉ étage en façade. Surcoût 200-600 €. Étude visite gratuite avant devis.",
      },
      {
        q: "Cabinet médical Part-Dieu : équipement adapté ?",
        a: "Modèles silencieux (≤ 30 dB) pour salles de consultation, climatisation centralisée pour cabinets multi-praticiens. Devis 48h.",
      },
    ],
  },
  {
    slug: "vieux-lyon",
    name: "Vieux Lyon",
    citySlug: "lyon-5e",
    cityName: "Lyon 5e",
    arrondissement: "5e",
    postalCodes: ["69005"],
    intro:
      "Quartier Renaissance classé UNESCO, le Vieux Lyon (Saint-Jean, Saint-Paul, Saint-Georges) demande une approche clim ultra-spécifique : ABF strict, traverses étroites, cours intérieures exigües, murs en pierre de 60-80 cm.",
    habitat:
      "Maisons Renaissance (XVᵉ-XVIIᵉ siècles), traboules, immeubles classés monuments historiques. Murs épais en pierre, plafonds bas (2,4-2,7 m), cours intérieures profondes typiques.",
    contraintes: [
      "ABF strict : déclaration préalable obligatoire avec photo-montage",
      "Murs pierre 60-80 cm : carottage spécial pour passage gaines",
      "Cours intérieures : seul emplacement autorisé pour unité ext.",
      "Esthétique : finition gainage avec peinture identique mur",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure (non visible depuis rue)",
      "Cassette encastrée plafond si pas d'accès cour",
      "Gainable invisible si combles accessibles",
    ],
    prixIndicatif: "2 490 € à 6 900 € selon configuration",
    faq: [
      {
        q: "ABF refuse souvent la clim au Vieux Lyon ?",
        a: "Non, refus rare avec dossier bien monté (photo-montage, unité ext. en cour intérieure non visible). Délai instruction : 2 mois.",
      },
      {
        q: "Maison Renaissance avec murs en pierre : c'est faisable ?",
        a: "Oui, carottage avec mèche diamantée. Délicat mais routinier pour notre équipe. Étude technique gratuite avant devis.",
      },
      {
        q: "Plafond bas 2,5 m : pose murale ?",
        a: "Oui, split mural classique fonctionne parfaitement à 2,4-2,7 m. Aucun problème technique.",
      },
    ],
  },
  {
    slug: "tete-d-or",
    name: "Tête d'Or",
    citySlug: "lyon-6e",
    cityName: "Lyon 6e",
    arrondissement: "6e",
    postalCodes: ["69006"],
    intro:
      "Quartier le plus prestigieux de Lyon, Tête d'Or borde le parc éponyme et concentre haussmanniens 1880-1910 et copropriétés cossues. Demande pose haut de gamme et discrète, parfois ABF (proximité parc classé).",
    habitat:
      "Haussmanniens 1880-1910 à hauts plafonds (3,5-4 m), copropriétés bourgeoises, hôtels particuliers. Cours intérieures profondes, parquets et moulures à préserver.",
    contraintes: [
      "ABF parfois requis (proximité parc Tête d'Or classé)",
      "Hauts plafonds : puissance majorée 25-30 %",
      "Patrimoine intérieur (parquets, moulures) : pose ultra-soigneuse",
      "Copropriétés : vote AG article 25, accompagnement syndic",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure",
      "Gainable invisible 6 900 € pour appartements 150 m²+",
      "Cassettes encastrées plafond si gainable impossible",
    ],
    prixIndicatif: "4 990 € à 12 900 € selon configuration et m²",
    faq: [
      {
        q: "Gainable invisible pour appartement 200 m² Tête d'Or ?",
        a: "Oui, gaines en faux-plafond couloir, bouches discrètes plafond. Devis 8 900-12 900 € selon configuration. Aucune unité visible à l'intérieur.",
      },
      {
        q: "Préservation parquet et moulures haussmanniens ?",
        a: "Pose sur-mesure : protection complète sols et murs, passage de gaines en faux-plafond ou colonnes existantes. Aucune dégradation.",
      },
      {
        q: "ABF obligatoire à Tête d'Or ?",
        a: "Selon le secteur (proximité parc classé). Nous vérifions et déposons la DP avec photo-montage si requis.",
      },
    ],
  },
  {
    slug: "brotteaux",
    name: "Brotteaux",
    citySlug: "lyon-6e",
    cityName: "Lyon 6e",
    arrondissement: "6e",
    postalCodes: ["69006"],
    intro:
      "Quartier résidentiel haut de gamme du 6e, Brotteaux combine immeubles 1900-1930 et copropriétés bourgeoises. Pose discrète privilégiée, professions libérales nombreuses (avocats, médecins).",
    habitat:
      "Immeubles 1900-1930 à plafonds 3-3,5 m, copropriétés cossues, cabinets de profession libérale en RDC. Cours intérieures profondes typiques.",
    contraintes: [
      "Copropriétés bourgeoises : vote AG article 25 systématique",
      "Plafonds 3-3,5 m : puissance ajustée +15-20 %",
      "Cabinets libéraux : silence < 30 dB en consultation",
    ],
    solutions: [
      "Multi-split discret avec unité ext. en cour intérieure",
      "Cassette encastrée plafond pour bureaux et cabinets",
      "Gainable invisible 6 900 € pour grands appartements",
    ],
    prixIndicatif: "2 490 € à 9 900 € selon configuration",
    faq: [
      {
        q: "Cabinet d'avocat Brotteaux : équipement silencieux ?",
        a: "Modèles ≤ 28 dB en mode nuit (cassette encastrée ou split mural premium). Confidentialité préservée en consultation.",
      },
      {
        q: "Vote AG copropriété Brotteaux : combien de temps ?",
        a: "AG annuelle ou extraordinaire : 2-6 mois. Nous fournissons photo-montage + devis détaillé pour le dossier syndic.",
      },
      {
        q: "Délai pose à Brotteaux ?",
        a: "Après vote AG : 3-5 semaines. Pose 1 jour pour mono-split, 2 jours multi-split.",
      },
    ],
  },
  {
    slug: "foch",
    name: "Foch",
    citySlug: "lyon-6e",
    cityName: "Lyon 6e",
    arrondissement: "6e",
    postalCodes: ["69006"],
    intro:
      "Avenue Foch et son secteur (entre Tête d'Or et Croix-Rousse) sont parmi les adresses les plus chères de Lyon. Haussmanniens classés, copropriétés exceptionnelles, demande pose ultra-haut de gamme.",
    habitat:
      "Haussmanniens 1880-1910 classés ou inscrits, hôtels particuliers, appartements de standing 200-400 m². Décoration soignée à préserver.",
    contraintes: [
      "ABF systématique sur immeubles inscrits ou classés",
      "Plafonds 3,5-4 m : puissance majorée 25-30 %",
      "Décoration patrimoniale : pose ultra-soigneuse, gainage invisible",
      "Copropriétés ultra-strictes : photo-montage + dossier AG complet",
    ],
    solutions: [
      "Gainable invisible (gaines en faux-plafond couloir)",
      "Multi-split avec unité ext. en cour intérieure",
      "Cassettes encastrées plafond si gainable impossible",
    ],
    prixIndicatif: "6 900 € à 15 900 € selon configuration",
    faq: [
      {
        q: "Gainable pour appartement 300 m² avenue Foch ?",
        a: "Oui, configuration multi-zones avec récupération d'énergie. Devis 12 900-18 900 € selon options. Aucune unité visible.",
      },
      {
        q: "ABF systématique avenue Foch ?",
        a: "Oui sur les immeubles classés/inscrits (vérification cas par cas). Photo-montage et dossier complet inclus dans notre prestation.",
      },
      {
        q: "Vous travaillez sur immeubles 'monuments historiques' ?",
        a: "Oui, dossier ABF + collaboration avec architecte du patrimoine si nécessaire. Pose ultra-soigneuse, protection patrimoniale totale.",
      },
    ],
  },
  {
    slug: "bellecour-ainay",
    name: "Bellecour & Ainay",
    citySlug: "lyon-2e",
    cityName: "Lyon 2e",
    arrondissement: "2e",
    postalCodes: ["69002"],
    intro:
      "Cœur historique de Lyon, Bellecour-Ainay aligne immeubles haussmanniens classés et appartements de standing. ABF systématique, pose haut de gamme uniquement.",
    habitat:
      "Haussmanniens 1850-1900, appartements bourgeois 100-250 m², hôtels particuliers. Hauts plafonds 3,5-4 m, parquets et moulures d'origine.",
    contraintes: [
      "ABF systématique : déclaration préalable obligatoire",
      "Photo-montage requis pour le dossier mairie",
      "Patrimoine intérieur : pose ultra-soigneuse",
      "Cours intérieures : seul emplacement autorisé pour unité ext.",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure",
      "Gainable invisible pour appartements 150 m²+",
      "Cassettes encastrées plafond en alternative",
    ],
    prixIndicatif: "4 990 € à 12 900 € selon configuration",
    faq: [
      {
        q: "Délai total Bellecour entre devis et pose ?",
        a: "Vote AG copropriété : 2-6 mois. ABF : 2 mois. Pose : 1-2 jours. Total moyen : 4-8 mois.",
      },
      {
        q: "Photo-montage : c'est inclus ?",
        a: "Oui, photo-montage haute qualité de l'unité extérieure en place réelle (plusieurs vues), inclus dans la prestation.",
      },
      {
        q: "Appartement classé Bellecour : pose autorisée ?",
        a: "Oui dans 90 % des cas si l'unité ext. est en cour intérieure non visible. Étude au cas par cas avec dossier ABF complet.",
      },
    ],
  },
  {
    slug: "gerland",
    name: "Gerland",
    citySlug: "lyon-7e",
    cityName: "Lyon 7e",
    arrondissement: "7e",
    postalCodes: ["69007"],
    intro:
      "Quartier en mutation, Gerland (Lyon 7e) combine biotech (Biomérieux, Sanofi), résidences modernes post-2000 et tertiaire dynamique. Pose clim simplifiée, sans ABF, copropriétés souples.",
    habitat:
      "Copropriétés modernes RT2005-RE2020 (post-2000), bureaux et laboratoires, équipements sportifs (Halle Tony Garnier). Performance thermique élevée d'origine.",
    contraintes: [
      "Pas d'ABF (quartier moderne)",
      "Copropriétés post-2000 : règlement souvent souple",
      "Tertiaire biotech : ambiances laboratoires (température + hygrométrie strictes)",
    ],
    solutions: [
      "Résidentiel : mono-split 990 €, pose 1 jour",
      "Tertiaire : VRV multi-zones avec récupération d'énergie",
      "Laboratoires : climatisation de précision (température ± 1 °C, hygrométrie contrôlée)",
    ],
    prixIndicatif: "990 € à 4 990 € résidentiel · devis selon m² tertiaire",
    faq: [
      {
        q: "Vous équipez les laboratoires Biomérieux / Sanofi ?",
        a: "Oui, climatisation de précision pour ambiances stériles, salles propres, laboratoires P2/P3. Étude technique sur cahier des charges client.",
      },
      {
        q: "Copropriété récente Gerland : pose simplifiée ?",
        a: "Oui, RT2005-RE2020 ont souvent un règlement plus souple. Pose mono-split 1 jour, devis 990 €. Pas d'ABF.",
      },
      {
        q: "Halle Tony Garnier événements : climatisation grande hauteur ?",
        a: "Devis spécifique sur étude. Notre équipe gère les volumes 5 000-15 000 m³ avec gainables industriels.",
      },
    ],
  },
  {
    slug: "vaise",
    name: "Vaise",
    citySlug: "lyon-9e",
    cityName: "Lyon 9e",
    arrondissement: "9e",
    postalCodes: ["69009"],
    intro:
      "Quartier d'affaires moderne du 9e (Cité Internationale, sièges sociaux), Vaise associe tertiaire dynamique et résidentiel récent. Pose clim simplifiée, sans contrainte ABF.",
    habitat:
      "Bureaux et sièges sociaux post-2000, copropriétés résidentielles modernes, lofts industriels rénovés. Performance thermique correcte.",
    contraintes: [
      "Pas d'ABF (quartier moderne)",
      "Bureaux : interventions hors heures possibles",
      "Lofts industriels : gros volumes, puissance majorée",
    ],
    solutions: [
      "Tertiaire : VRV multi-zones, contrat d'entretien annuel",
      "Résidentiel : mono-split 990 €, multi-split 2 490 €",
      "Lofts : split puissants 5-7 kW pour grands volumes",
    ],
    prixIndicatif: "990 € à 7 900 € résidentiel · devis tertiaire",
    faq: [
      {
        q: "Sièges sociaux Vaise : climatisation centralisée ?",
        a: "Oui, VRV multi-zones de 30-300 kW, récupération d'énergie, GTB possible. Devis selon surface et plateaux.",
      },
      {
        q: "Loft industriel rénové Vaise : quelle puissance ?",
        a: "Pour 80 m² avec plafond 4 m : 5-7 kW (vs 3,5 kW standard). Multi-split parfois nécessaire pour homogénéité.",
      },
      {
        q: "Délai pose Vaise ?",
        a: "Visite 48h, devis 24h, pose 2-4 semaines. Tertiaire : 4-6 semaines selon coordination.",
      },
    ],
  },
  {
    slug: "monplaisir",
    name: "Monplaisir",
    citySlug: "lyon-8e",
    cityName: "Lyon 8e",
    arrondissement: "8e",
    postalCodes: ["69008"],
    intro:
      "Quartier résidentiel familial du 8e, Monplaisir conserve un charme pavillonnaire 1900-1960 unique à Lyon, mêlé à des copropriétés récentes. PAC très demandée pour remplacement gaz.",
    habitat:
      "Pavillons et maisons mitoyennes 1900-1960 sur petits terrains, copropriétés 1960-2000, programmes neufs récents. Mix architectural typique.",
    contraintes: [
      "Pavillons mitoyens : étude positionnement unité ext. en cour ou jardin arrière",
      "Copropriétés 1960-80 : MaPrimeRénov' Copro éligible (avant 2003)",
      "Densité urbaine : voisinage à informer",
    ],
    solutions: [
      "Pavillon : PAC air-eau 7-9 kW + ballon thermodynamique",
      "Appartement : mono-split 990 €, multi-split 2 490 €",
      "Copropriété : étude collective + MaPrimeRénov' Copro",
    ],
    prixIndicatif: "990 € appart · 11 000-13 000 € PAC pavillon",
    faq: [
      {
        q: "Pavillon mitoyen Monplaisir : où mettre la PAC ?",
        a: "Cour arrière ou jardin dans 90 % des cas. Étude positionnement gratuite + photo-montage avant devis. Voisinage informé en amont.",
      },
      {
        q: "Copropriété Monplaisir 1965 : MaPrimeRénov' Copro ?",
        a: "Oui éligible (construite avant 2003). Subvention jusqu'à 35 % pour la copro + aides individuelles cumulables.",
      },
      {
        q: "Délai PAC pavillon Monplaisir ?",
        a: "Visite 48h, devis 24h, pose 3-5 semaines. Pose 2-3 jours sur place.",
      },
    ],
  },
  {
    slug: "bachut",
    name: "Bachut",
    citySlug: "lyon-8e",
    cityName: "Lyon 8e",
    arrondissement: "8e",
    postalCodes: ["69008"],
    intro:
      "Bachut (Lyon 8e) est un secteur de grandes copropriétés des années 1960-1980, en pleine vague de rénovation énergétique avec MaPrimeRénov' Copro. Demande PAC collective et clim individuelle forte.",
    habitat:
      "Grandes copropriétés 1960-1980 au chauffage gaz collectif, immeubles 1970-90, quelques pavillons rares. Structures typiques HLM ou copros privées en rénovation.",
    contraintes: [
      "MaPrimeRénov' Copro éligible (constructions avant 2003)",
      "Vote AG nécessaire pour modification façade",
      "Hauteur : nacelle parfois requise (> 4ᵉ étage)",
    ],
    solutions: [
      "PAC collective : remplacement chaudière gaz par PAC air-eau ou géothermique",
      "Clim individuelle : mono-split 990 €, cassette si refus AG",
      "Accompagnement complet syndic : photo-montage, dossier AG, ANAH",
    ],
    prixIndicatif: "990 € clim individuelle · PAC collective : devis selon nb lots",
    faq: [
      {
        q: "Copropriété Bachut chauffage gaz collectif : passage en PAC ?",
        a: "Oui, étude technique gratuite, accompagnement AG, dossier MaPrimeRénov' Copro. Subvention jusqu'à 35 % du montant pour la copro.",
      },
      {
        q: "Combien coûte une PAC collective pour 50 lots ?",
        a: "Compter 80 000 à 150 000 € selon puissance et configuration. Avec aides cumulées (MaPrimeRénov' Copro + CEE + Éco-rénov' Métropole), reste à charge 30-50 %.",
      },
      {
        q: "Clim individuelle si copropriété refuse façade ?",
        a: "Cassette encastrée plafond (1 990 € posée) ou split avec unité ext. en cour intérieure. Étude au cas par cas.",
      },
    ],
  },
  {
    slug: "mermoz",
    name: "Mermoz",
    citySlug: "lyon-8e",
    cityName: "Lyon 8e",
    arrondissement: "8e",
    postalCodes: ["69008"],
    intro:
      "Mermoz (Lyon 8e) est en plein renouvellement urbain (rénovation ANRU). Copropriétés 1960-1980, bailleurs sociaux et programmes neufs cohabitent. Demande PAC collective massive.",
    habitat:
      "Tours et barres ANRU 1960-1980, copropriétés résidentielles, programmes neufs RE2020 en remplacement de bâtiments démolis.",
    contraintes: [
      "Opérations bailleurs : marchés publics ou prestations directes",
      "MaPrimeRénov' Copro + ANAH renforcée disponibles",
      "Coordination chantier ANRU avec maîtrise d'ouvrage",
    ],
    solutions: [
      "PAC collective : remplacement chauffage gaz, MaPrimeRénov' Copro maximisée",
      "Clim individuelle particulier : mono-split 990 €",
      "Bailleurs sociaux (Lyon Métropole Habitat) : contrat-cadre",
    ],
    prixIndicatif: "990 € clim individuelle · devis bailleurs sur cahier des charges",
    faq: [
      {
        q: "Vous travaillez avec Lyon Métropole Habitat à Mermoz ?",
        a: "Oui, marchés publics ou sous-traitance. Référencés QualiPAC depuis 2018. Étude énergétique amont incluse.",
      },
      {
        q: "Copropriété Mermoz en rénovation ANRU : aides cumulées ?",
        a: "MaPrimeRénov' Copro (35 %) + ANAH renforcée (jusqu'à 50 %) + CEE + Éco-rénov' Métropole = 60-80 % du montant possible.",
      },
      {
        q: "Délai opération Mermoz ?",
        a: "Étude technique 2-4 semaines. Vote AG : 2-6 mois. Pose collective : selon planning chantier ANRU.",
      },
    ],
  },
  {
    slug: "saint-clair",
    name: "Saint-Clair",
    citySlug: "caluire-et-cuire",
    cityName: "Caluire-et-Cuire",
    postalCodes: ["69300"],
    intro:
      "Quartier huppé de Caluire-et-Cuire en bord de Saône, Saint-Clair concentre maisons bourgeoises 1900-1960 et copropriétés cossues. Vue Saône à préserver, ABF parfois requis.",
    habitat:
      "Maisons de maître 1900-1960 sur grands terrains, copropriétés bourgeoises bord de Saône, quelques résidences récentes. Patrimoine architectural à préserver.",
    contraintes: [
      "ABF parfois requis (proximité Saône classée)",
      "Vue panoramique : positionnement unité ext. invisible depuis berges",
      "Patrimoine architectural : façades à préserver",
    ],
    solutions: [
      "PAC air-eau haute température 65 °C (radiateurs fonte conservés)",
      "Multi-split avec unité ext. en cour arrière (non visible Saône)",
      "Géothermie possible sur grands terrains",
    ],
    prixIndicatif: "PAC : 14 000-20 000 € · Clim : 4 990-9 900 €",
    faq: [
      {
        q: "Maison de maître Saint-Clair 200 m² : PAC adaptée ?",
        a: "PAC air-eau haute température, radiateurs fonte conservés. Devis 16-22 k€ posé selon options. Reste à charge selon revenus.",
      },
      {
        q: "ABF systématique à Saint-Clair ?",
        a: "Sur les immeubles ou maisons inscrits, oui. Vérification cas par cas avec photo-montage. Délai instruction 2 mois.",
      },
      {
        q: "Géothermie sur 1 800 m² Saint-Clair ?",
        a: "Possible, sondes verticales 80-100 m. Investissement 24-32 k€, COP > 4, rentabilité 12-18 ans.",
      },
    ],
  },
  {
    slug: "charpennes",
    name: "Charpennes",
    citySlug: "villeurbanne",
    cityName: "Villeurbanne",
    postalCodes: ["69100"],
    intro:
      "Quartier vivant de Villeurbanne (limite Lyon 6e), Charpennes est dense en copropriétés 1900-1970 et programmes récents. Demande clim massive en été (densité urbaine + universités).",
    habitat:
      "Copropriétés 1900-1970, immeubles bourgeois, résidences étudiantes (proximité INSA, universités). Mix dense typique de Villeurbanne.",
    contraintes: [
      "Densité urbaine : voisinage à informer (bruit unité ext.)",
      "Copropriétés anciennes : règlement parfois strict",
      "Hauteur : nacelle parfois requise",
    ],
    solutions: [
      "Mono-split 990 € posé en 1 jour",
      "Multi-split 2 490 € si plusieurs pièces",
      "Cassette encastrée plafond si refus copropriété",
    ],
    prixIndicatif: "990 € à 4 990 € selon configuration",
    faq: [
      {
        q: "Pose mono-split appart Charpennes ?",
        a: "1 jour. Devis 990 € pour 3,5 kW, 1 290 € pour 5 kW. Sans démarche urbanisme dans 80 % des cas.",
      },
      {
        q: "Bruit unité ext. : voisins ?",
        a: "Modèles ≤ 38 dB + plots anti-vibrations + mode silence nuit. Pose en cour intérieure quand possible.",
      },
      {
        q: "Délai Charpennes en saison ?",
        a: "Hors saison (oct-mars) : 1-2 semaines. En juin-août : 4-6 semaines (forte demande).",
      },
    ],
  },
  {
    slug: "gratte-ciel",
    name: "Gratte-Ciel",
    citySlug: "villeurbanne",
    cityName: "Villeurbanne",
    postalCodes: ["69100"],
    intro:
      "Quartier emblématique de Villeurbanne, Gratte-Ciel est un patrimoine Art déco classé 1934. ABF systématique sur les tours et immeubles classés. Demande pose ultra-discrète.",
    habitat:
      "Tours Art déco 1934 (classées Patrimoine du XXᵉ), immeubles 1930-1960, copropriétés bourgeoises. Architecture iconique à préserver.",
    contraintes: [
      "ABF systématique sur immeubles classés Patrimoine du XXᵉ",
      "Façades emblématiques : aucune unité ext. visible autorisée",
      "Plafonds 3-3,5 m : puissance majorée 15-20 %",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure (non visible)",
      "Gainable invisible si combles accessibles",
      "Cassette encastrée plafond si autres options impossibles",
    ],
    prixIndicatif: "2 490 € à 9 900 € selon configuration",
    faq: [
      {
        q: "Tours Gratte-Ciel classées : clim possible ?",
        a: "Oui en cour intérieure uniquement. ABF strict, dossier complet avec photo-montage requis. Refus rare avec dossier bien monté.",
      },
      {
        q: "Hauts plafonds 3,2 m : impact puissance ?",
        a: "Pour 50 m² : passer de 3,5 kW (standard) à 4-5 kW. Compte tenu du volume d'air, dimensionnement ajusté en visite.",
      },
      {
        q: "Délai dossier ABF Gratte-Ciel ?",
        a: "Instruction 2 mois. Vote AG copropriété 2-6 mois en parallèle. Total moyen : 4-7 mois.",
      },
    ],
  },
  {
    slug: "tonkin",
    name: "Tonkin",
    citySlug: "villeurbanne",
    cityName: "Villeurbanne",
    postalCodes: ["69100"],
    intro:
      "Quartier moderne de Villeurbanne (limite Lyon 6e), Tonkin combine programmes récents post-2000 et copropriétés 1970-1990. Pose clim simplifiée, sans ABF.",
    habitat:
      "Programmes neufs RE2020 et copropriétés modernes, mix avec immeubles 1970-1990. Performance thermique correcte d'origine.",
    contraintes: [
      "Pas d'ABF (quartier moderne)",
      "Copropriétés 1970-90 : règlement parfois strict",
      "Densité bâtie élevée : voisinage proche",
    ],
    solutions: [
      "Mono-split 990 € pose 1 jour",
      "Multi-split 2 490 € pour T3-T4",
      "Cassette encastrée si refus copro",
    ],
    prixIndicatif: "990 € à 4 990 € selon configuration",
    faq: [
      {
        q: "Programme neuf Tonkin pré-équipé clim ?",
        a: "Souvent oui. Si pré-équipement : pose 690-790 € (raccordement uniquement). Sinon mono-split 990 € posé.",
      },
      {
        q: "Copropriété Tonkin 1985 : MaPrimeRénov' Copro ?",
        a: "Oui éligible (avant 2003). Étude collective possible avec accompagnement complet syndic.",
      },
      {
        q: "Délai pose Tonkin ?",
        a: "Hors saison : 1-2 semaines. En saison : 4-5 semaines.",
      },
    ],
  },
  {
    slug: "carre-de-soie",
    name: "Carré-de-Soie",
    citySlug: "vaulx-en-velin",
    cityName: "Vaulx-en-Velin",
    postalCodes: ["69120"],
    intro:
      "Écoquartier moderne à cheval sur Vaulx-en-Velin et Villeurbanne, Carré-de-Soie est un terrain rêvé pour la pose clim : programmes RE2020, pré-équipement clim fréquent, pas d'ABF.",
    habitat:
      "Programmes neufs RE2020 et RT2012, lofts d'anciennes usines réhabilitées, bureaux modernes (siège Adidas, etc.). Quartier en pleine expansion.",
    contraintes: [
      "Pas d'ABF (quartier moderne)",
      "Copropriétés post-2010 : règlement très souple",
      "Lofts : grand volume, puissance majorée",
    ],
    solutions: [
      "Mono-split 3,5 kW à 990 € pour appart standard",
      "Lofts : 5-7 kW pour 80-100 m² (plafond 4 m)",
      "Tertiaire : VRV multi-zones",
    ],
    prixIndicatif: "990 € à 6 900 € selon configuration",
    faq: [
      {
        q: "Pose clim Carré-de-Soie : démarches ?",
        a: "Aucune dans 95 % des cas. Pas d'ABF, copros récentes très souples. Pose 1 jour, mono-split 990 €.",
      },
      {
        q: "Loft 90 m² ancienne usine : quelle puissance ?",
        a: "Plafond 4 m + grands volumes : 5-7 kW au lieu de 3,5 kW standard. Multi-split parfois recommandé pour homogénéité.",
      },
      {
        q: "Bureaux siège entreprise Carré-de-Soie ?",
        a: "VRV multi-zones, étude thermique gratuite, contrat d'entretien annuel + dépannage 24h. Devis 48h.",
      },
    ],
  },
  {
    slug: "minguettes",
    name: "Minguettes",
    citySlug: "venissieux",
    cityName: "Vénissieux",
    postalCodes: ["69200"],
    intro:
      "Plateau des Minguettes, à Vénissieux, est en plein renouvellement urbain (ANRU). Tours et barres rénovées, programmes neufs en remplacement, mix bailleurs + copropriétés.",
    habitat:
      "Grand ensemble ANRU 1960-1980 en rénovation, tours rénovées thermiquement, programmes neufs RE2020 en remplacement de bâtiments démolis.",
    contraintes: [
      "Opérations bailleurs (Lyon Métropole Habitat, Alliade Habitat) : marchés publics",
      "MaPrimeRénov' Copro + ANAH renforcée maximisées",
      "Coordination chantier ANRU avec MOA",
    ],
    solutions: [
      "PAC collective : remplacement chauffage gaz, MaPrimeRénov' Copro",
      "Clim individuelle particulier : mono-split 990 €",
      "Bailleurs : contrats-cadres marchés publics",
    ],
    prixIndicatif: "990 € clim individuelle · PAC collective sur étude",
    faq: [
      {
        q: "Vous travaillez avec les bailleurs Minguettes ?",
        a: "Oui, Lyon Métropole Habitat, Alliade Habitat, etc. Marchés publics ou sous-traitance. Référencés QualiPAC.",
      },
      {
        q: "Aides cumulées Minguettes ?",
        a: "MaPrimeRénov' Copro + ANAH renforcée (Quartier Politique de la Ville) + CEE + Éco-rénov' Métropole = jusqu'à 80 % du montant.",
      },
      {
        q: "Clim individuelle dans tour Minguettes : possible ?",
        a: "Oui sous réserve d'autorisation bailleur ou syndic. Mono-split 990 € posé en 1 jour. Cassette si refus façade.",
      },
    ],
  },
  {
    slug: "moulin-a-vent",
    name: "Moulin-à-Vent",
    citySlug: "venissieux",
    cityName: "Vénissieux",
    postalCodes: ["69200"],
    intro:
      "Quartier pavillonnaire ancien de Vénissieux, Moulin-à-Vent conserve un tissu de maisons en bande 1900-1950 typique des zones ouvrières. Demande PAC forte pour remplacer fioul/gaz.",
    habitat:
      "Maisons en bande 1900-1950, pavillonnaire 1960-1990, quelques copropriétés. Habitat ouvrier traditionnel à rénover thermiquement.",
    contraintes: [
      "Maisons mitoyennes : positionnement unité ext. en cour ou jardin arrière",
      "Isolation thermique souvent à reprendre avant pose PAC",
      "Bonus sortie fioul + MaPrimeRénov' Sérénité pour foyers modestes",
    ],
    solutions: [
      "PAC air-eau 7-9 kW + ballon thermodynamique",
      "Aides cumulées maximisées (revenus modestes)",
      "Plancher chauffant rénovation possible",
    ],
    prixIndicatif: "11 000-13 000 € PAC posée, reste à charge 3-5 k€ après aides",
    faq: [
      {
        q: "Maison ouvrière Moulin-à-Vent en pierre : PAC adaptée ?",
        a: "PAC air-eau haute température 65 °C compatible radiateurs fonte d'origine. Pas besoin de tout changer.",
      },
      {
        q: "Aides cumulées Moulin-à-Vent ?",
        a: "MaPrimeRénov' Sérénité (jusqu'à 11 000 €) + bonus sortie fioul (4 000 €) + CEE (4 500 €) + Éco-rénov' (4 000 €). Reste à charge 3-5 k€ pour foyers modestes.",
      },
      {
        q: "Délai sortie fioul Moulin-à-Vent ?",
        a: "Visite 48h, devis 24h, pose 3-5 semaines. Pose 2-3 jours sur place.",
      },
    ],
  },
  {
    slug: "le-meginand",
    name: "Le Méginand",
    citySlug: "tassin-la-demi-lune",
    cityName: "Tassin-la-Demi-Lune",
    postalCodes: ["69160"],
    intro:
      "Secteur résidentiel haut de gamme de Tassin-la-Demi-Lune, Le Méginand concentre villas familiales sur grands terrains arborés. Demande PAC haute performance et géothermie.",
    habitat:
      "Villas 1960-2000 sur terrains 1 000-3 000 m², copropriétés résidentielles cossues. Cadre verdoyant, demande pose discrète et paysagère.",
    contraintes: [
      "Grands terrains : intégration paysagère unité ext. (haie, mur végétal)",
      "Géothermie possible (terrains > 1 500 m²)",
      "Patrimoine arboré : pose respectueuse",
    ],
    solutions: [
      "PAC air-eau 11-14 kW + ballon thermodynamique",
      "Géothermie verticale 80-100 m sur grands terrains",
      "Pack PAC + photovoltaïque + batterie domestique",
    ],
    prixIndicatif: "PAC : 15 000-22 000 € · Géothermie : 24 000-32 000 €",
    faq: [
      {
        q: "Géothermie villa Méginand 2 500 m² ?",
        a: "Sondes verticales 80-100 m. Investissement 24-32 k€, COP > 4, rentabilité 12-18 ans. Aucun impact paysager visible.",
      },
      {
        q: "Pack PAC + PV + batterie villa Méginand ?",
        a: "Étude énergétique globale gratuite. Autoconsommation 70-80 % atteignable. Cumul aides MaPrimeRénov' + Prime CEE + Advenir.",
      },
      {
        q: "Pose discrète unité ext. dans jardin ?",
        a: "Intégration paysagère sur-mesure : derrière haie, mur végétal, ou caisson en bois. Étude visite gratuite.",
      },
    ],
  },
  {
    slug: "plan-du-loup",
    name: "Plan-du-Loup",
    citySlug: "sainte-foy-les-lyon",
    cityName: "Sainte-Foy-lès-Lyon",
    postalCodes: ["69110"],
    intro:
      "Plan-du-Loup, secteur résidentiel haut de gamme de Sainte-Foy-lès-Lyon, mêle villas familiales sur grands terrains et programmes neufs récents. Demande pose haut de gamme.",
    habitat:
      "Villas 1970-2000 sur terrains 800-1 500 m², copropriétés bourgeoises récentes, programmes neufs RT2012/RE2020.",
    contraintes: [
      "Grands terrains : intégration discrète unité ext.",
      "Copropriétés cossues : règlement parfois strict",
      "Géothermie possible",
    ],
    solutions: [
      "PAC air-eau 9-12 kW + ballon thermodynamique",
      "Géothermie sur terrains > 1 500 m²",
      "Multi-split discret avec unité ext. en façade arrière",
    ],
    prixIndicatif: "PAC : 14 000-20 000 € · Multi-split : 4 990-9 900 €",
    faq: [
      {
        q: "PAC villa Plan-du-Loup 180 m² ?",
        a: "PAC air-eau 11-13 kW. Devis 15-20 k€ posé selon options et type de chauffage existant.",
      },
      {
        q: "Clim discrète maison de standing ?",
        a: "Multi-split avec unité ext. en façade arrière (non visible rue) ou gainable invisible si combles accessibles.",
      },
      {
        q: "Aides à Sainte-Foy ?",
        a: "MaPrimeRénov' (selon revenus) + CEE + Éco-rénov' Métropole. Cumul possible. Étude personnalisée gratuite.",
      },
    ],
  },
  {
    slug: "le-perollier",
    name: "Le Pérollier",
    citySlug: "ecully",
    cityName: "Écully",
    postalCodes: ["69130"],
    intro:
      "Quartier résidentiel d'Écully, Le Pérollier accueille villas familiales et copropriétés bourgeoises près du parc de Lacroix-Laval. Demande pose haut de gamme et géothermie.",
    habitat:
      "Villas 1970-2000 sur terrains 800-2 000 m², copropriétés récentes, proximité campus EM Lyon. Cadre verdoyant.",
    contraintes: [
      "Grands terrains : intégration paysagère",
      "Patrimoine arboré : pose respectueuse",
      "Copropriétés bourgeoises : photo-montage AG",
    ],
    solutions: [
      "PAC air-eau 9-12 kW + ballon 200 L",
      "Géothermie horizontale ou verticale possible",
      "Pack PAC + photovoltaïque + borne VE",
    ],
    prixIndicatif: "PAC : 14 000-20 000 € · Géothermie : 22 000-30 000 €",
    faq: [
      {
        q: "Géothermie horizontale Le Pérollier ?",
        a: "Possible sur terrain ≥ 1 800 m² (capteurs sur 1,5 fois la surface chauffée). Investissement 18-25 k€, COP > 4.",
      },
      {
        q: "Pack PAC + PV + borne VE villa Pérollier ?",
        a: "Étude énergétique globale. Autoconsommation 70-80 % + recharge VE en autoconsommation. Cumul aides MaPrimeRénov' + Prime CEE + Advenir.",
      },
      {
        q: "Délai à Écully ?",
        a: "Visite 48h, devis 24h, pose 3-5 semaines. Mise en service immédiate.",
      },
    ],
  },
  {
    slug: "terraillon",
    name: "Terraillon",
    citySlug: "bron",
    cityName: "Bron",
    postalCodes: ["69500"],
    intro:
      "Quartier pavillonnaire dense de Bron, Terraillon mélange maisons mitoyennes 1950-1970 et copropriétés. Demande PAC croissante (sortie fioul/gaz) et clim 990 € en appartement.",
    habitat:
      "Maisons mitoyennes 1950-1970, pavillonnaire dense, copropriétés 1970-1990. Petits terrains, voisinage proche.",
    contraintes: [
      "Maisons mitoyennes : étude positionnement unité ext. minutieuse",
      "Densité urbaine : voisinage à informer",
      "Bruit : modèles ≤ 38 dB obligatoires",
    ],
    solutions: [
      "PAC air-eau 7-9 kW + ballon thermodynamique",
      "Clim mono-split 990 € en appartement",
      "Cassette encastrée si refus AG copropriété",
    ],
    prixIndicatif: "PAC : 11 000-13 000 € · Clim appart : 990 €",
    faq: [
      {
        q: "Maison mitoyenne Terraillon : où mettre la PAC ?",
        a: "Cour arrière ou côté pignon dans 90 % des cas. Étude positionnement gratuite. Pose 2-3 jours.",
      },
      {
        q: "Bonus sortie fioul Terraillon ?",
        a: "Oui jusqu'à 4 000 € + MaPrimeRénov' Sérénité jusqu'à 11 000 €. Reste à charge 3-5 k€ pour foyers modestes.",
      },
      {
        q: "Clim appart Terraillon : pose simple ?",
        a: "Oui dans la majorité des cas. Mono-split 990 € posé en 1 jour. Vérification règlement copro avant.",
      },
    ],
  },
  {
    slug: "manissieux",
    name: "Manissieux",
    citySlug: "saint-priest",
    cityName: "Saint-Priest",
    postalCodes: ["69800"],
    intro:
      "Quartier pavillonnaire de Saint-Priest, Manissieux conserve un tissu rural-urbain avec maisons 1900-1980 sur terrains moyens. Demande PAC sortie fioul/gaz forte.",
    habitat:
      "Pavillonnaire 1900-1980 sur terrains 400-800 m², quelques fermes anciennes rénovées, copropriétés récentes en limite.",
    contraintes: [
      "Maisons anciennes : isolation à valider avant PAC",
      "Sous-sols semi-enterrés : intégration unité intérieure possible",
      "Aides cumulées maximales pour foyers modestes",
    ],
    solutions: [
      "PAC air-eau 7-9 kW + ballon thermodynamique en sous-sol",
      "Plancher chauffant rénovation pour confort optimal",
      "Pack avec photovoltaïque pour autoconsommation",
    ],
    prixIndicatif: "PAC : 11 000-13 000 € posée",
    faq: [
      {
        q: "Pavillon Manissieux 110 m² : PAC adaptée ?",
        a: "PAC air-eau 9-11 kW. Devis 12 500-15 500 € posé. Reste à charge 5-9 k€ après aides selon revenus.",
      },
      {
        q: "Sous-sol semi-enterré : intégration PAC ?",
        a: "Idéal pour loger l'unité intérieure et le ballon thermodynamique. Gain de place et limitation du bruit.",
      },
      {
        q: "Délai dépannage à Manissieux ?",
        a: "Sous 24-48h. Atelier à 30 km, équipe Lyon-Est régulière.",
      },
    ],
  },
  {
    slug: "jean-mace",
    name: "Jean-Macé",
    citySlug: "lyon-7e",
    cityName: "Lyon 7e",
    arrondissement: "7e",
    postalCodes: ["69007"],
    intro:
      "Quartier familial du 7e, Jean-Macé combine copropriétés 1900-1970 et programmes récents. Demande clim forte en été (densité urbaine, étages élevés).",
    habitat:
      "Copropriétés 1900-1970 majoritaires, immeubles bourgeois 1900-1930, programmes neufs récents. Quartier vivant et commerçant.",
    contraintes: [
      "Copropriétés anciennes : règlement parfois strict",
      "Vis-à-vis fréquent : étude positionnement unité ext.",
      "MaPrimeRénov' Copro éligible (avant 2003)",
    ],
    solutions: [
      "Mono-split 990 € posé en 1 jour",
      "Multi-split 2 490 € pour T3-T4",
      "Cassette encastrée si refus AG",
    ],
    prixIndicatif: "990 € à 4 990 € selon configuration",
    faq: [
      {
        q: "Pose clim Jean-Macé : démarches ?",
        a: "Vote AG copropriété si modification façade visible. Sans démarche urbanisme dans 80 % des cas (pas d'ABF).",
      },
      {
        q: "Copropriété Jean-Macé 1965 : aides ?",
        a: "MaPrimeRénov' Copro éligible. Étude collective possible avec accompagnement complet syndic.",
      },
      {
        q: "Délai pose en saison ?",
        a: "Hors saison (oct-mars) : 1-2 semaines. En juin-août : 4-6 semaines (forte demande)." ,
      },
    ],
  },
  {
    slug: "guillotiere",
    name: "Guillotière",
    citySlug: "lyon-7e",
    cityName: "Lyon 7e",
    arrondissement: "7e",
    postalCodes: ["69007"],
    intro:
      "Quartier vivant et multiculturel du 7e, la Guillotière combine immeubles 1900-1970 dense et programmes récents. Demande clim massive (effet îlot urbain).",
    habitat:
      "Copropriétés 1900-1970, immeubles bourgeois rénovés, quelques programmes neufs. Densité bâtie élevée typique.",
    contraintes: [
      "Densité urbaine : voisinage proche, bruit unité ext. à minimiser",
      "Copropriétés anciennes : règlement à vérifier",
      "Vis-à-vis fréquent : positionnement minutieux",
    ],
    solutions: [
      "Mono-split 990 € en 1 jour",
      "Multi-split discret avec unité ext. en cour intérieure",
      "Cassette encastrée si configuration impossible",
    ],
    prixIndicatif: "990 € à 4 990 € selon configuration",
    faq: [
      {
        q: "Bruit unité ext. en zone dense Guillotière ?",
        a: "Modèles ≤ 38 dB obligatoires + plots anti-vibrations + mode silence nuit. Pose en cour intérieure quand possible.",
      },
      {
        q: "Copropriété Guillotière 1925 : MaPrimeRénov' ?",
        a: "MaPrimeRénov' Copro éligible (construction avant 2003). Étude collective possible, accompagnement syndic complet.",
      },
      {
        q: "Délai pose Guillotière ?",
        a: "Hors saison : 1-2 semaines. En saison estivale : 4-6 semaines (forte demande locale).",
      },
    ],
  },
  {
    slug: "saint-just",
    name: "Saint-Just",
    citySlug: "lyon-5e",
    cityName: "Lyon 5e",
    arrondissement: "5e",
    postalCodes: ["69005"],
    intro:
      "Quartier résidentiel du 5e, Saint-Just est plus calme que le Vieux Lyon mais bénéficie d'un cadre patrimonial (basilique Saint-Just, antiquités gallo-romaines). Pose clim modérément contrainte.",
    habitat:
      "Maisons bourgeoises 1900-1960, copropriétés résidentielles, immeubles 1960-1990. Cadre verdoyant typique.",
    contraintes: [
      "ABF parfois requis (proximité antiquités gallo-romaines)",
      "Copropriétés patrimoniales : photo-montage AG",
      "Pavillonnaire mitoyen : étude positionnement",
    ],
    solutions: [
      "PAC air-eau pavillon 7-10 kW + ballon",
      "Multi-split avec unité ext. en cour ou jardin",
      "Mono-split 990 € en appartement",
    ],
    prixIndicatif: "PAC : 11 000-15 000 € · Clim : 990-4 990 €",
    faq: [
      {
        q: "Pavillon Saint-Just 130 m² : PAC adaptée ?",
        a: "PAC air-eau 9-11 kW. Devis 12-14 k€ posé, reste à charge 4-7 k€ après aides selon revenus.",
      },
      {
        q: "ABF systématique Saint-Just ?",
        a: "Selon le secteur (proximité antiquités classées). Vérification cas par cas, photo-montage et DP gérés par nos soins.",
      },
      {
        q: "Délai pose à Saint-Just ?",
        a: "Visite 48h, pose 3-5 semaines en standard. Si ABF : ajouter 2 mois d'instruction.",
      },
    ],
  },
  {
    slug: "point-du-jour",
    name: "Point-du-Jour",
    citySlug: "lyon-5e",
    cityName: "Lyon 5e",
    arrondissement: "5e",
    postalCodes: ["69005"],
    intro:
      "Quartier résidentiel familial du 5e, Point-du-Jour est calme et verdoyant, avec pavillonnaire 1950-2000 et copropriétés modernes. Pose clim simplifiée, sans ABF.",
    habitat:
      "Pavillonnaire 1950-2000, copropriétés 1970-2000, programmes récents. Cadre familial typique de l'ouest lyonnais.",
    contraintes: [
      "Pas d'ABF (quartier moderne)",
      "Pavillonnaire mitoyen : étude positionnement",
      "Copropriétés : règlement souvent souple",
    ],
    solutions: [
      "PAC air-eau pavillon 7-10 kW",
      "Mono-split 990 € en appartement",
      "Multi-split 2 490 € pour T3-T4",
    ],
    prixIndicatif: "PAC : 11 000-14 000 € · Clim : 990-4 990 €",
    faq: [
      {
        q: "Pavillon Point-du-Jour : PAC ou clim réversible ?",
        a: "PAC air-eau si chauffage central existant (gain énergie + ECS). Clim réversible split si chauffage électrique direct ou complément confort été.",
      },
      {
        q: "Copropriété Point-du-Jour : pose simple ?",
        a: "Oui dans la majorité des cas. Vote AG si modification façade. Mono-split 990 € posé en 1 jour.",
      },
      {
        q: "Délai à Point-du-Jour ?",
        a: "Visite 48h, devis 24h, pose 2-4 semaines.",
      },
    ],
  },
  {
    slug: "fourviere",
    name: "Fourvière",
    citySlug: "lyon-5e",
    cityName: "Lyon 5e",
    arrondissement: "5e",
    postalCodes: ["69005"],
    intro:
      "Colline emblématique de Lyon, Fourvière concentre maisons bourgeoises 1900-1960 sur grands terrains et propriétés exceptionnelles avec vue Lyon. ABF parfois, demande pose ultra-discrète.",
    habitat:
      "Maisons de maître 1900-1960, propriétés sur grands terrains, copropriétés bourgeoises. Cadre patrimonial exceptionnel (basilique classée).",
    contraintes: [
      "ABF parfois requis (proximité monuments classés)",
      "Patrimoine architectural : pose discrète obligatoire",
      "Vue Lyon à préserver : positionnement unité ext. côté arrière",
    ],
    solutions: [
      "PAC air-eau haute température pour radiateurs fonte",
      "Multi-split avec unité ext. côté arrière (non visible)",
      "Géothermie possible sur grands terrains",
    ],
    prixIndicatif: "PAC : 14 000-20 000 € · Clim : 4 990-9 900 €",
    faq: [
      {
        q: "Maison de maître Fourvière 200 m² : PAC ?",
        a: "PAC air-eau haute température 65 °C compatible radiateurs fonte. Devis 16-22 k€ posé selon options.",
      },
      {
        q: "ABF Fourvière obligatoire ?",
        a: "Selon le secteur (proximité basilique classée + antiquités). Vérification systématique. Photo-montage et DP inclus.",
      },
      {
        q: "Géothermie sur 2 000 m² Fourvière ?",
        a: "Possible, sondes verticales 80-100 m. Investissement 24-32 k€, COP > 4, rentabilité 12-18 ans.",
      },
    ],
  },
  {
    slug: "preceture-villette",
    name: "Préfecture & Villette",
    citySlug: "lyon-3e",
    cityName: "Lyon 3e",
    arrondissement: "3e",
    postalCodes: ["69003"],
    intro:
      "Cœur administratif et résidentiel du 3e, Préfecture-Villette aligne haussmanniens 1880-1910 et copropriétés bourgeoises. Demande pose haut de gamme.",
    habitat:
      "Haussmanniens 1880-1910 à hauts plafonds 3,5 m, copropriétés résidentielles, immeubles bourgeois rénovés. Patrimoine architectural préservé.",
    contraintes: [
      "ABF parfois requis (immeubles inscrits)",
      "Hauts plafonds : puissance majorée 25-30 %",
      "Copropriétés anciennes : photo-montage AG complet",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure",
      "Cassettes encastrées plafond pour appartements de standing",
      "Gainable invisible si combles accessibles",
    ],
    prixIndicatif: "2 490 € à 9 900 € selon configuration",
    faq: [
      {
        q: "Haussmannien Préfecture : ABF nécessaire ?",
        a: "Selon le statut de l'immeuble (inscrit/classé/banal). Vérification systématique, dossier complet inclus.",
      },
      {
        q: "Hauts plafonds 3,8 m : impact puissance ?",
        a: "Pour 60 m² : passer de 5 kW (standard) à 6,5-7 kW. Compte tenu du volume d'air.",
      },
      {
        q: "Délai pose Préfecture ?",
        a: "Sans ABF : 3-5 semaines après devis. Avec ABF : ajouter 2 mois.",
      },
    ],
  },
  {
    slug: "hauts-de-feuilly",
    name: "Hauts-de-Feuilly",
    citySlug: "saint-priest",
    cityName: "Saint-Priest",
    postalCodes: ["69800"],
    intro:
      "Écoquartier moderne de Saint-Priest, Hauts-de-Feuilly est un programme RE2020 récent. Pose clim ultra-simplifiée (pré-équipement fréquent), pas d'ABF.",
    habitat:
      "Programmes neufs RE2020 (post-2015), maisons individuelles modernes, copropriétés récentes. Performance thermique élevée d'origine.",
    contraintes: [
      "Pas d'ABF (quartier neuf)",
      "Copropriétés post-2015 : règlement très souple",
      "Pré-équipement clim parfois inclus",
    ],
    solutions: [
      "Mono-split 3,5 kW à 990 € posé",
      "Maison individuelle : multi-split 2 490 €",
      "Si pré-équipement : 690-790 € (raccordement)",
    ],
    prixIndicatif: "690 € (raccordement) à 4 990 € (pose neuve)",
    faq: [
      {
        q: "Pré-équipement clim Hauts-de-Feuilly : c'est quoi ?",
        a: "Lignes frigorifiques + alimentation électrique pré-installées dans les murs. Reste à raccorder unités intérieures + extérieures. Pose en demi-journée, devis 690-790 €.",
      },
      {
        q: "Maison individuelle RE2020 : clim utile ?",
        a: "Oui pour le confort estival (RE2020 limite la chaleur passive mais ne refroidit pas activement). Mono ou bi-split selon configuration.",
      },
      {
        q: "Délai à Hauts-de-Feuilly ?",
        a: "Visite 48h, pose 1-2 semaines en saison creuse.",
      },
    ],
  },
  {
    slug: "vassieux",
    name: "Vassieux",
    citySlug: "caluire-et-cuire",
    cityName: "Caluire-et-Cuire",
    postalCodes: ["69300"],
    intro:
      "Quartier résidentiel familial de Caluire, Vassieux mélange pavillons 1950-1990 et copropriétés modernes. Demande PAC sortie gaz et clim 990 € forte.",
    habitat:
      "Pavillonnaire 1950-1990 sur terrains moyens, copropriétés 1970-2000, quelques programmes récents. Cadre familial typique du nord lyonnais.",
    contraintes: [
      "Pavillonnaire dense : étude positionnement unité ext.",
      "Copropriétés 1970-90 : MaPrimeRénov' Copro éligible (avant 2003)",
      "Pas d'ABF (quartier moderne)",
    ],
    solutions: [
      "PAC air-eau 7-10 kW + ballon thermodynamique",
      "Mono-split 990 € en appartement",
      "Bonus sortie gaz + MaPrimeRénov' cumulables",
    ],
    prixIndicatif: "PAC : 11 000-14 000 € · Clim : 990-4 990 €",
    faq: [
      {
        q: "Pavillon Vassieux 120 m² au gaz : PAC adaptée ?",
        a: "PAC air-eau 9-11 kW + ballon thermodynamique. Devis 12-14 k€ posé. Reste à charge 4-7 k€ après aides.",
      },
      {
        q: "Copropriété Vassieux : MaPrimeRénov' Copro ?",
        a: "Oui éligible si construction avant 2003. Étude collective possible, accompagnement syndic complet.",
      },
      {
        q: "Délai à Vassieux ?",
        a: "Visite 48h, pose 3-5 semaines selon planning.",
      },
    ],
  },
  {
    slug: "saint-rambert",
    name: "Saint-Rambert",
    citySlug: "lyon-9e",
    cityName: "Lyon 9e",
    arrondissement: "9e",
    postalCodes: ["69009"],
    intro:
      "Quartier résidentiel calme du 9e en bord de Saône, Saint-Rambert mélange pavillons 1900-1970 et copropriétés modernes. ABF parfois (proximité Île Barbe classée).",
    habitat:
      "Pavillonnaire 1900-1970 sur terrains moyens, copropriétés 1960-1990, quelques propriétés bourgeoises bord de Saône.",
    contraintes: [
      "ABF parfois (proximité Île Barbe classée)",
      "Pavillons mitoyens : étude positionnement unité ext.",
      "Copropriétés bord Saône : photo-montage AG",
    ],
    solutions: [
      "PAC air-eau pavillon 7-10 kW",
      "Multi-split avec unité ext. côté arrière (non visible Saône)",
      "Mono-split 990 € en appartement",
    ],
    prixIndicatif: "PAC : 11 000-15 000 € · Clim : 990-4 990 €",
    faq: [
      {
        q: "ABF Saint-Rambert obligatoire ?",
        a: "Sur les pavillons et copros visibles depuis l'Île Barbe classée, oui. Vérification cas par cas, dossier complet inclus.",
      },
      {
        q: "Pavillon Saint-Rambert 110 m² : PAC ?",
        a: "PAC air-eau 9-11 kW + ballon thermodynamique. Devis 12-14 k€ posé.",
      },
      {
        q: "Délai à Saint-Rambert ?",
        a: "Sans ABF : 3-5 semaines. Avec ABF : ajouter 2 mois.",
      },
    ],
  },
  {
    slug: "la-duchere",
    name: "La Duchère",
    citySlug: "lyon-9e",
    cityName: "Lyon 9e",
    arrondissement: "9e",
    postalCodes: ["69009"],
    intro:
      "Grand ensemble du 9e en pleine rénovation urbaine ANRU, La Duchère est un terrain massif pour la rénovation énergétique. Bailleurs sociaux et copropriétés en transformation.",
    habitat:
      "Tours et barres ANRU 1960-1980 en rénovation thermique, copropriétés résidentielles, programmes neufs RE2020 en remplacement de bâtiments démolis.",
    contraintes: [
      "Opérations bailleurs (Lyon Métropole Habitat, Alliade) : marchés publics",
      "MaPrimeRénov' Copro + ANAH renforcée maximisées",
      "Coordination chantier ANRU avec maîtrise d'ouvrage",
    ],
    solutions: [
      "PAC collective : remplacement chauffage gaz",
      "Clim individuelle particulier : mono-split 990 €",
      "Bailleurs : contrats-cadres marchés publics",
    ],
    prixIndicatif: "990 € clim individuelle · PAC collective sur étude",
    faq: [
      {
        q: "Vous travaillez avec les bailleurs Duchère ?",
        a: "Oui, marchés publics ou sous-traitance. Référencés QualiPAC depuis 2018, expérience opérations ANRU.",
      },
      {
        q: "Aides cumulées Duchère ?",
        a: "MaPrimeRénov' Copro + ANAH renforcée (QPV) + CEE + Éco-rénov' Métropole = jusqu'à 80 % du montant.",
      },
      {
        q: "Délai opération Duchère ?",
        a: "Étude technique 2-4 semaines. Pose collective : selon planning chantier ANRU.",
      },
    ],
  },
  // ─── GRENOBLE — 7 quartiers ──────────────────────────────────────
  {
    slug: "grenoble-hyper-centre",
    name: "Hyper-Centre",
    citySlug: "grenoble",
    cityName: "Grenoble",
    postalCodes: ["38000"],
    intro:
      "Cœur historique de Grenoble (place Grenette, Notre-Dame, Halles Sainte-Claire) avec immeubles haussmanniens et bâtisses XVIIᵉ-XIXᵉ. Secteur ABF actif, copropriétés anciennes exigeantes.",
    habitat:
      "Immeubles 1830-1900 majoritaires, hauts plafonds 3,2-3,8 m, parquets, cheminées. Copropriétés familiales avec règlement souvent contraignant sur les façades visibles.",
    contraintes: [
      "ABF probable en zone Notre-Dame / Halles Sainte-Claire",
      "Hauts plafonds : majorer la puissance clim de +20-25 %",
      "Copro 1900 : passage de gaines délicat (parquet, moulures)",
      "Cours étroites : peu d'emplacements pour unité ext.",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure (non visible rue)",
      "Cassette plafond si refus copro de pose façade",
      "Console basse haute puissance pour pièces 30-50 m² hauts plafonds",
    ],
    prixIndicatif: "1 490 € à 4 990 € selon nb de pièces",
    faq: [
      {
        q: "ABF nécessaire en hyper-centre Grenoble ?",
        a: "Probable autour de Notre-Dame, Halles, place Grenette. Déclaration préalable + photo-montage. Délai 2 mois.",
      },
      {
        q: "Pose en immeuble 1900 hauts plafonds ?",
        a: "Faisable. On adapte les puissances et le passage des gaines (souvent en gaines techniques existantes ou plinthes décoratives).",
      },
      {
        q: "Copro hyper-centre : démarches ?",
        a: "Vote AG obligatoire. Dossier complet fourni : plan, esthétique, niveau sonore, attestation F-Gaz.",
      },
    ],
  },
  {
    slug: "ile-verte",
    name: "Île Verte",
    citySlug: "grenoble",
    cityName: "Grenoble",
    postalCodes: ["38000"],
    intro:
      "Quartier résidentiel 1960-1970 entre l'Isère et le Drac, l'Île Verte est connue pour ses tours emblématiques (Roland-Garros, Mont-Blanc, Belledonne). Demande PAC + clim collective forte.",
    habitat:
      "Tours 1960-1970 jusqu'à 30 étages, copropriétés familiales, petites maisons en bord d'Isère. Performance thermique faible d'origine, programmes de rénovation énergétique en cours.",
    contraintes: [
      "Tours grande hauteur : nacelle obligatoire pour pose façade > 4ᵉ étage",
      "Copro 1960-70 : étude collective rentable (mutualisation)",
      "Bruit : modèle ≤ 35 dB obligatoire (proximité voisins)",
    ],
    solutions: [
      "PAC collective sur toiture pour copropriétés (étude prévisionnelle)",
      "Mono/multi-split mural avec unité ext. balcon (vote AG)",
      "Cassette gainable plafond si refus façade",
    ],
    prixIndicatif: "Mono 990 € · Multi 2 490 € · Étude collective sur devis",
    faq: [
      {
        q: "Pose tour Île Verte > 10ᵉ étage ?",
        a: "Nacelle ou corde obligatoire. Surcoût 300-700 €. Étude visite gratuite avant devis.",
      },
      {
        q: "PAC collective tour Île Verte rentable ?",
        a: "Souvent oui à partir de 30+ logements. ROI 8-12 ans avec MaPrimeRénov' Copro + CEE. Étude technique 1 500 €.",
      },
      {
        q: "Bruit pour les voisins ?",
        a: "Modèles silence nuit ≤ 35 dB + plots anti-vibration. Mesure d'émergence en limite balcon possible.",
      },
    ],
  },
  {
    slug: "berriat-saint-bruno",
    name: "Berriat-Saint-Bruno",
    citySlug: "grenoble",
    cityName: "Grenoble",
    postalCodes: ["38000"],
    intro:
      "Ancien quartier industriel reconverti, Berriat-Saint-Bruno mêle lofts d'usine, immeubles 1900 et programmes neufs. Quartier en pleine gentrification, demande clim/PAC en hausse.",
    habitat:
      "Anciennes usines reconverties en lofts, immeubles 1900-1930, programmes neufs RT2012-RE2020. Mixité forte, copropriétés mixtes (jeunes actifs + familles).",
    contraintes: [
      "Lofts d'usine : très hauts plafonds (4-6 m), volumes complexes",
      "Programmes neufs : pré-équipement clim parfois inclus",
      "ABF possible secteur Saint-Bruno (église classée)",
    ],
    solutions: [
      "Loft : gainable invisible ou cassette plafond grand débit",
      "Neuf : raccordement pré-équipement (demi-journée, 690-790 €)",
      "Multi-split : 1 ext + 2 à 4 splits intérieurs",
    ],
    prixIndicatif: "990 € (neuf pré-équipé) à 6 900 € (loft gainable)",
    faq: [
      {
        q: "Clim pour loft d'usine Berriat ?",
        a: "Gainable invisible (faux-plafond) ou cassette grand débit. Puissance majorée pour volumes 4-6 m. Devis sur étude.",
      },
      {
        q: "Mon programme neuf est-il pré-équipé ?",
        a: "Souvent oui post-2018. Vérification visite : si oui, raccordement 690-790 € en demi-journée.",
      },
      {
        q: "ABF Saint-Bruno ?",
        a: "Possible autour de l'église classée. Déclaration préalable photomontage. Délai 2 mois.",
      },
    ],
  },
  {
    slug: "villeneuve-grenoble",
    name: "Villeneuve",
    citySlug: "grenoble",
    cityName: "Grenoble",
    postalCodes: ["38100"],
    intro:
      "Quartier emblématique des années 1970 (utopie urbaine), Villeneuve est en rénovation ANRU profonde. Copropriétés dégradées en réhabilitation : terrain idéal pour PAC collective et MaPrimeRénov' Copro.",
    habitat:
      "Mégastructures Arlequin et 90 (1972-1980), copropriétés dégradées en plan ANRU. Performance thermique catastrophique d'origine, isolation extérieure en cours.",
    contraintes: [
      "Plan ANRU en cours : interventions coordonnées avec aménageur",
      "Copropriétés en grande difficulté financière",
      "ANAH renforcée + MaPrimeRénov' Copro indispensables",
    ],
    solutions: [
      "PAC collective hybride en remplacement chauffage urbain défaillant",
      "Étude technique éligible ANAH renforcée (cofinancement 100 %)",
      "Mono-split individuel possible après vote AG",
    ],
    prixIndicatif: "Étude collective 1 500 € · Pose individuelle 990 €",
    faq: [
      {
        q: "ANAH renforcée Villeneuve : éligible ?",
        a: "Oui, quartier QPV. Étude éligible 100 % ANAH renforcée. Travaux : MaPrimeRénov' Copro jusqu'à 80 % du montant.",
      },
      {
        q: "PAC collective Arlequin / 90 envisageable ?",
        a: "Oui en hybride avec chauffage urbain existant. Étude technique préalable (1 500 €). ROI 10-15 ans avec aides.",
      },
      {
        q: "Délai action Villeneuve ?",
        a: "Étude 2-4 semaines. Pose collective : aligné sur planning ANRU (souvent 12-24 mois).",
      },
    ],
  },
  {
    slug: "vigny-musset",
    name: "Vigny-Musset",
    citySlug: "grenoble",
    cityName: "Grenoble",
    postalCodes: ["38100"],
    intro:
      "Éco-quartier de Grenoble livré 2009-2018, Vigny-Musset est exemplaire en performance énergétique. Programmes RT2012/RE2020 souvent pré-équipés clim, demande raccordement rapide.",
    habitat:
      "Immeubles RE2020 et BBC 2009-2018, jardins partagés, mixité fonctionnelle. Performance thermique élevée, parfois pré-équipement PAC ou clim.",
    contraintes: [
      "Cahier des charges éco-quartier : modèles haute performance imposés",
      "Esthétique : finition gainage soignée",
      "Pré-équipement parfois inclus : raccordement rapide",
    ],
    solutions: [
      "Mono-split A+++ silencieux (≤ 30 dB) : 990 €",
      "Multi-split haute performance : 2 490 € à 3 990 €",
      "Pré-équipement : raccordement 690-790 €",
    ],
    prixIndicatif: "690 € (raccordement) à 3 990 €",
    faq: [
      {
        q: "Quels modèles compatibles éco-quartier ?",
        a: "A+++ obligatoire, R32 (faible PRG), niveau sonore ≤ 30 dB. Marques : Daikin Stylish, AUX J-Smart, Mitsubishi MSZ-AP.",
      },
      {
        q: "Mon T3 Vigny-Musset est-il pré-équipé ?",
        a: "Souvent oui : visite vérifie présence gaines et tableau électrique dédié. Si oui, raccordement 690-790 € demi-journée.",
      },
      {
        q: "Bruit accepté en éco-quartier ?",
        a: "≤ 30 dB en mode nuit recommandé. Mesure d'émergence possible. Plots anti-vibration systématiques.",
      },
    ],
  },
  {
    slug: "europole",
    name: "Europole",
    citySlug: "grenoble",
    cityName: "Grenoble",
    postalCodes: ["38000"],
    intro:
      "Quartier d'affaires de Grenoble (Centre des Congrès, World Trade Center, Palais de Justice), Europole concentre tertiaire haute densité. Demande clim VRV professionnelle dominante.",
    habitat:
      "Tours et immeubles tertiaires 1990-2020, quelques résidences récentes. Performance thermique élevée, demande clim centralisée.",
    contraintes: [
      "Tertiaire : interventions hors heures bureau",
      "Hauteurs élevées : nacelle pour façade",
      "Cahier des charges des bailleurs (Bouygues, Icade) parfois strict",
    ],
    solutions: [
      "VRV multi-zones (10-200 kW) avec récupération d'énergie",
      "Contrat d'entretien annuel + intervention prioritaire 24h",
      "Résidentiel : split réversible standard 990 € à 2 490 €",
    ],
    prixIndicatif: "Tertiaire : devis selon surface · Résidentiel : 990 € à 2 490 €",
    faq: [
      {
        q: "Vous équipez les bureaux Europole ?",
        a: "Oui, VRV 10-200 kW, récupération d'énergie, contrat entretien + intervention 24h. Devis 48h.",
      },
      {
        q: "Pose hors heures bureau possible ?",
        a: "Oui, soir et week-end pour tertiaire stratégique. Surcoût 15-25 %.",
      },
      {
        q: "PAC pour résidence Europole ?",
        a: "Pré-équipement souvent inclus : raccordement 690-790 €. Sinon multi-split standard 2 490 €.",
      },
    ],
  },
  {
    slug: "notre-dame-grenoble",
    name: "Notre-Dame",
    citySlug: "grenoble",
    cityName: "Grenoble",
    postalCodes: ["38000"],
    intro:
      "Cœur historique et secteur sauvegardé de Grenoble (cathédrale, place Saint-André), Notre-Dame est ABF strict. Bâtisses XVIIᵉ-XIXᵉ, démarches lourdes mais faisables.",
    habitat:
      "Bâtisses XVIIᵉ-XIXᵉ classées ou inscrites, hauts plafonds 3,5-4 m, cours intérieures, murs en pierre 50-70 cm.",
    contraintes: [
      "ABF systématique + dossier illustré exigé",
      "Murs pierre épais : carottage spécial",
      "Cours intérieures : seul emplacement autorisé",
      "Esthétique : peinture identique mur après gainage",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure (invisible rue)",
      "Cassette encastrée plafond si pas d'accès cour",
      "Gainable invisible si combles accessibles",
    ],
    prixIndicatif: "2 490 € à 6 900 € selon configuration ABF",
    faq: [
      {
        q: "Délai ABF Notre-Dame Grenoble ?",
        a: "2 mois minimum. Photo-montage + plan + niveau sonore + matériaux. On gère le dossier complet.",
      },
      {
        q: "Carottage mur pierre épais ?",
        a: "Outil diamant + carotteuse spéciale. Surcoût 200-400 € selon nombre de carottages.",
      },
      {
        q: "Cassette plafond bâtisse classée ?",
        a: "Oui si plafond > 3 m et copro d'accord. Esthétique : grille ton mat blanc cassé. Compatible ABF.",
      },
    ],
  },
  // ─── CHAMBÉRY — 5 quartiers ──────────────────────────────────────
  {
    slug: "chambery-centre",
    name: "Chambéry Centre",
    citySlug: "chambery",
    cityName: "Chambéry",
    postalCodes: ["73000"],
    intro:
      "Cœur historique de Chambéry (Château des Ducs de Savoie, rues Croix-d'Or et Saint-Antoine), zone ABF active. Bâtisses XVIIᵉ-XIXᵉ, copropriétés familiales.",
    habitat:
      "Immeubles 1850-1900, bâtisses anciennes, hauts plafonds 3-3,5 m. Cours intérieures typiques, murs épais.",
    contraintes: [
      "ABF systématique secteur sauvegardé Château",
      "Hauts plafonds : majoration puissance clim +20 %",
      "Cours étroites : optimisation emplacement unité ext.",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure",
      "Cassette plafond si refus copro façade",
      "Gainable invisible si combles disponibles",
    ],
    prixIndicatif: "1 490 € à 4 990 €",
    faq: [
      {
        q: "ABF Chambéry centre obligatoire ?",
        a: "Oui en secteur sauvegardé Château. Déclaration préalable + photomontage. Délai 2 mois.",
      },
      {
        q: "Climat froid Chambéry : modèle adapté ?",
        a: "Modèle -25 °C minimum (Daikin Altherma, Atlantic Alfea). SCOP > 4 pour rendement hiver.",
      },
      {
        q: "Pose copro centre Chambéry ?",
        a: "Vote AG obligatoire. Dossier complet fourni : esthétique, bruit, planning. Acceptation 80 % des cas.",
      },
    ],
  },
  {
    slug: "biollay",
    name: "Biollay",
    citySlug: "chambery",
    cityName: "Chambéry",
    postalCodes: ["73000"],
    intro:
      "Quartier résidentiel années 1960-1970 au nord de Chambéry, Biollay concentre copropriétés familiales en rénovation énergétique. Plan ANRU partiel.",
    habitat:
      "Tours et barres 1960-1970, copropriétés familiales, performance thermique faible d'origine. Programmes ANRU en cours.",
    contraintes: [
      "Copro 1960-70 : règlement strict sur façade",
      "Hauteurs élevées : nacelle parfois nécessaire",
      "MaPrimeRénov' Copro indispensable pour collectif",
    ],
    solutions: [
      "Étude PAC collective avec MaPrimeRénov' Copro",
      "Mono-split individuel après vote AG (cassette plafond souvent imposée)",
      "PAC air-eau collective hybride pour grandes copros",
    ],
    prixIndicatif: "Mono 990 € · Étude collective sur devis",
    faq: [
      {
        q: "PAC collective Biollay rentable ?",
        a: "Souvent oui pour copros 30+ logements. ROI 10-15 ans avec MaPrimeRénov' Copro + CEE.",
      },
      {
        q: "Aides Chambéry Métropole ?",
        a: "Cumulables MaPrimeRénov' + CEE. Voir notre page aides locales Grand Chambéry.",
      },
      {
        q: "Climat froid hiver Biollay ?",
        a: "PAC -25 °C minimum, SCOP > 4. Modèles adaptés Daikin Altherma, Atlantic Alfea Excellia A.I.",
      },
    ],
  },
  {
    slug: "chambery-le-haut",
    name: "Chambéry-le-Haut",
    citySlug: "chambery",
    cityName: "Chambéry",
    postalCodes: ["73000"],
    intro:
      "Grand ensemble 1970 sur le plateau au nord de Chambéry, Chambéry-le-Haut est en plan ANRU profond. Copropriétés à réhabiliter, demande PAC collective forte.",
    habitat:
      "Barres et tours 1970, copropriétés dégradées, performance thermique faible. Plan ANRU en cours, isolation extérieure planifiée.",
    contraintes: [
      "Plan ANRU : coordination avec aménageur",
      "Copropriétés en difficulté financière",
      "ANAH renforcée + MaPrimeRénov' Copro indispensables",
    ],
    solutions: [
      "PAC collective hybride en remplacement chauffage urbain",
      "Étude technique financée ANAH renforcée",
      "Mono-split individuel après vote AG",
    ],
    prixIndicatif: "Étude 1 500 € · Pose individuelle 990 €",
    faq: [
      {
        q: "ANAH renforcée Chambéry-le-Haut ?",
        a: "Oui QPV. Étude éligible 100 % ANAH. Travaux : MaPrimeRénov' Copro jusqu'à 80 % du montant.",
      },
      {
        q: "Climat plateau Chambéry-le-Haut ?",
        a: "Plus froid que centre (350 m altitude). Modèle -25 °C, SCOP > 4 obligatoire.",
      },
      {
        q: "Délai opération Chambéry-le-Haut ?",
        a: "Étude 2-4 semaines, pose collective alignée sur ANRU (12-24 mois souvent).",
      },
    ],
  },
  {
    slug: "mache",
    name: "Mâché",
    citySlug: "chambery",
    cityName: "Chambéry",
    postalCodes: ["73000"],
    intro:
      "Quartier résidentiel pavillonnaire à l'ouest de Chambéry, Mâché concentre maisons individuelles 1980-2010 — terrain idéal pour PAC air-eau standard.",
    habitat:
      "Pavillons 1980-2010 majoritaires, jardins, propriétaires installés. Quelques copros petites.",
    contraintes: [
      "Climat froid hiver : PAC -25 °C obligatoire",
      "Pas d'ABF (hors secteur sauvegardé)",
      "Pose pavillonnaire standard sans gros œuvre",
    ],
    solutions: [
      "PAC air-eau 9-12 kW pour pavillon 110-140 m²",
      "Sortie fioul : aides cumulées jusqu'à 11 000 €",
      "Mono/multi-split clim pour rafraîchir 1-2 pièces",
    ],
    prixIndicatif: "PAC : 13 000 à 18 000 € · Clim : 990 € à 2 490 €",
    faq: [
      {
        q: "PAC pour pavillon Mâché 120 m² ?",
        a: "PAC air-eau 9-11 kW, modèle -25 °C. 13-16 k€ posé. Reste à charge 5-9 k€ après aides.",
      },
      {
        q: "Aides Grand Chambéry Mâché ?",
        a: "Cumul MaPrimeRénov' + CEE Coup de Pouce + aides locales : jusqu'à 12 000 € pour Profil Bleu.",
      },
      {
        q: "Clim 990 € Mâché ?",
        a: "Oui, offre disponible mono-split 3,5 kW pour pièce de 35 m². Pose 1 jour.",
      },
    ],
  },
  {
    slug: "bissy",
    name: "Bissy",
    citySlug: "chambery",
    cityName: "Chambéry",
    postalCodes: ["73000"],
    intro:
      "Bissy, quartier nord-ouest de Chambéry, est résidentiel et tertiaire mixte. Pavillonnaire 80-2010 + zones d'activité (Savoie Technolac proche).",
    habitat:
      "Pavillonnaire dominant, copropriétés modernes, zones d'activité tertiaire. Performance thermique correcte (RT2005-RT2012).",
    contraintes: [
      "Climat froid : modèle -25 °C",
      "Tertiaire : interventions hors heures bureau possibles",
      "Pas d'ABF",
    ],
    solutions: [
      "Pavillon : PAC air-eau 9-11 kW",
      "Tertiaire : VRV multi-zones",
      "Clim 990 € pour résidentiel",
    ],
    prixIndicatif: "Résidentiel : 990 € à 4 990 € · Tertiaire : devis",
    faq: [
      {
        q: "Vous équipez Savoie Technolac ?",
        a: "Oui, climatisation tertiaire VRV (10-200 kW), contrat d'entretien, dépannage 24h.",
      },
      {
        q: "PAC pour pavillon Bissy 130 m² ?",
        a: "PAC air-eau 10-12 kW, modèle -25 °C. 13-17 k€ posé après aides.",
      },
      {
        q: "Délai Bissy ?",
        a: "Visite sous 48h, devis 24h, pose 3-5 semaines selon saison.",
      },
    ],
  },
  // ─── ANNECY — 7 quartiers ────────────────────────────────────────
  {
    slug: "vieille-ville-annecy",
    name: "Vieille Ville",
    citySlug: "annecy",
    cityName: "Annecy",
    postalCodes: ["74000"],
    intro:
      "Cœur médiéval d'Annecy (Palais de l'Isle, canaux du Thiou, rue Sainte-Claire), la Vieille Ville est ABF strict. Bâtisses XIIIᵉ-XVIIIᵉ, attractivité touristique forte.",
    habitat:
      "Bâtisses médiévales et XVIIᵉ-XVIIIᵉ classées, hauts plafonds, murs en pierre de 50-80 cm, canaux à proximité (humidité gérée).",
    contraintes: [
      "ABF systématique + Architecte des Bâtiments de France strict",
      "Murs pierre 60-80 cm : carottage spécial",
      "Activité touristique : poses hors saison estivale recommandées",
      "Esthétique : aucune unité visible depuis canaux",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure (invisible des canaux)",
      "Cassette plafond si pas d'accès cour",
      "Gainable invisible si combles accessibles",
    ],
    prixIndicatif: "2 490 € à 6 900 € selon dossier ABF",
    faq: [
      {
        q: "ABF Vieille Ville Annecy : délai ?",
        a: "2-3 mois. Dossier illustré complet (photo-montage, plan, matériaux, niveau sonore). On gère.",
      },
      {
        q: "Pose hors saison touristique conseillée ?",
        a: "Oui, octobre à mars : moins d'impact sur l'activité commerciale, accès facilité.",
      },
      {
        q: "Mes voisins seront-ils dérangés ?",
        a: "Modèles ≤ 35 dB silence nuit + plots anti-vibration + emplacement cour. Mesure d'émergence possible.",
      },
    ],
  },
  {
    slug: "bonlieu-centre",
    name: "Bonlieu (Centre)",
    citySlug: "annecy",
    cityName: "Annecy",
    postalCodes: ["74000"],
    intro:
      "Cœur moderne d'Annecy (centre Bonlieu, place de la Libération, gare), Bonlieu mêle immeubles 1950-1990 et programmes neufs. Demande clim explosive (été touristique).",
    habitat:
      "Immeubles 1950-1990 majoritaires, copropriétés familiales, programmes neufs RE2020 récents. Performance thermique correcte, demande rénovation forte.",
    contraintes: [
      "Copropriétés 1950-90 : règlement parfois strict façade",
      "Pas d'ABF (hors Vieille Ville)",
      "Climat froid hiver : modèle -25 °C",
    ],
    solutions: [
      "Mono-split 990 € pour T2-T3 jusqu'à 50 m²",
      "Multi-split 2 490 € pour T3-T4",
      "Programme neuf : raccordement pré-équipement 690-790 €",
    ],
    prixIndicatif: "690 € à 3 990 €",
    faq: [
      {
        q: "Mon programme neuf Bonlieu est-il pré-équipé clim ?",
        a: "Souvent oui post-2018. Visite vérifie présence gaines et tableau dédié. Raccordement 690-790 €.",
      },
      {
        q: "Climat froid Annecy : modèle ?",
        a: "PAC -25 °C minimum (Daikin Stylish, Mitsubishi MSZ-LN, Atlantic Alfea Excellia). SCOP > 4.",
      },
      {
        q: "Délai été à Annecy ?",
        a: "Haute saison : 4-8 semaines. Conseil : commande en hiver pour avoir clim avant été.",
      },
    ],
  },
  {
    slug: "les-romains",
    name: "Les Romains",
    citySlug: "annecy",
    cityName: "Annecy",
    postalCodes: ["74000"],
    intro:
      "Quartier résidentiel d'Annecy au pied du Semnoz, Les Romains mêle pavillons et copropriétés. Population de cadres et familles, sensibles aux économies d'énergie.",
    habitat:
      "Pavillons 1970-2010 et copropriétés modernes 1980-2020. Performance thermique correcte. Quelques anciennes maisons en pierre dans le bas du quartier.",
    contraintes: [
      "Climat froid hiver (proximité Semnoz) : -25 °C obligatoire",
      "Pavillons sur pente : étude positionnement unité ext.",
      "Pas d'ABF",
    ],
    solutions: [
      "PAC air-eau 9-11 kW pour pavillon 110-140 m²",
      "Multi-split clim pour rafraîchir 2-3 pièces",
      "Sortie fioul/gaz : aides cumulées jusqu'à 12 000 €",
    ],
    prixIndicatif: "PAC : 13-18 k€ · Clim : 990 € à 4 990 €",
    faq: [
      {
        q: "PAC pour pavillon Les Romains 130 m² ?",
        a: "PAC air-eau 10-12 kW, modèle -25 °C. 14-18 k€ posé. Reste à charge 6-10 k€ après aides.",
      },
      {
        q: "Aides Grand Annecy Les Romains ?",
        a: "Cumulables MaPrimeRénov' + CEE + aides locales jusqu'à 12 000 €. Voir notre page aides Grand Annecy.",
      },
      {
        q: "Pavillon en pente : pose unité ext. ?",
        a: "Faisable, on adapte l'emplacement (terrasse, mur soutien). Plots anti-vibration systématiques.",
      },
    ],
  },
  {
    slug: "novel",
    name: "Novel",
    citySlug: "annecy",
    cityName: "Annecy",
    postalCodes: ["74000"],
    intro:
      "Novel, quartier résidentiel à l'est d'Annecy, est dynamique avec mixité forte (familles, étudiants). Copros 1970-2000, pavillons + immeubles modernes.",
    habitat:
      "Copropriétés 1970-2000, pavillonnaire en périphérie, programmes neufs récents. Performance thermique variable.",
    contraintes: [
      "Copro 1970-2000 : règlement parfois strict",
      "Climat froid hiver : -25 °C",
      "Pas d'ABF",
    ],
    solutions: [
      "Mono-split 990 € pour T2-T3",
      "PAC air-eau pour pavillon 13-17 k€",
      "Étude collective copro pour grandes résidences",
    ],
    prixIndicatif: "990 € à 4 990 €",
    faq: [
      {
        q: "Pose copro Novel Annecy ?",
        a: "Vote AG obligatoire. Dossier fourni : esthétique, bruit, planning. Acceptation ~80 % des cas.",
      },
      {
        q: "Climat froid Novel : modèle ?",
        a: "PAC -25 °C, SCOP > 4 (Daikin Altherma 3 H HT, Atlantic Alfea Extensa Duo).",
      },
      {
        q: "Délai Novel ?",
        a: "Visite 48h, devis 24h, pose 3-6 semaines selon saison.",
      },
    ],
  },
  {
    slug: "annecy-le-vieux",
    name: "Annecy-le-Vieux",
    citySlug: "annecy",
    cityName: "Annecy",
    postalCodes: ["74940"],
    intro:
      "Annecy-le-Vieux, ancienne commune fusionnée à Annecy en 2017, est le quartier résidentiel haut de gamme. Villas avec vue lac, copropriétés modernes.",
    habitat:
      "Villas individuelles haut standing avec vue lac/montagne, copropriétés 1980-2020. Performance thermique élevée, capacité d'investissement forte.",
    contraintes: [
      "Esthétique villa : intégration paysagère unité ext. soignée",
      "Climat froid : -25 °C obligatoire",
      "Cahier des charges copropriétés haut de gamme strict",
    ],
    solutions: [
      "PAC air-eau haute performance + ballon thermo 200-300 L",
      "Géothermie sondes verticales : terrains > 1 500 m²",
      "Multi-split haut de gamme silencieux ≤ 30 dB",
    ],
    prixIndicatif: "PAC : 15-22 k€ · Géothermie : 22-32 k€ · Clim : 1 490 € à 6 900 €",
    faq: [
      {
        q: "Géothermie villa Annecy-le-Vieux ?",
        a: "Oui pour terrains ≥ 1 500 m². Sondes verticales 22-32 k€ posé, COP > 4 toute l'année. Rentabilité 12-18 ans.",
      },
      {
        q: "PAC haute performance vue lac ?",
        a: "Daikin Altherma 3 H HT, Atlantic Alfea Excellia A.I., Stiebel Eltron WPL. Modèles -25 °C, SCOP > 4,5.",
      },
      {
        q: "Pack PAC + PV + borne VE villa ?",
        a: "Oui, étude énergétique globale. Investissement 30-50 k€, autonomie partielle, ROI 12-15 ans avec aides.",
      },
    ],
  },
  {
    slug: "cran-gevrier",
    name: "Cran-Gevrier",
    citySlug: "annecy",
    cityName: "Annecy",
    postalCodes: ["74960"],
    intro:
      "Cran-Gevrier, ancienne commune fusionnée à Annecy en 2017, est résidentiel et industriel mixte (zone Vovray). Copros familiales 1970-2000 et pavillons.",
    habitat:
      "Copropriétés 1970-2000, pavillonnaire en périphérie, zones d'activité. Performance thermique variable, programmes de rénovation en cours.",
    contraintes: [
      "Copro 1970-2000 : règlement strict",
      "Climat froid hiver : -25 °C",
      "Tertiaire Vovray : interventions hors heures bureau",
    ],
    solutions: [
      "Mono-split 990 € pour copro après vote AG",
      "PAC air-eau pour pavillon 13-17 k€",
      "Tertiaire Vovray : VRV multi-zones",
    ],
    prixIndicatif: "990 € à 4 990 € · Tertiaire : devis",
    faq: [
      {
        q: "Vous équipez la zone Vovray ?",
        a: "Oui, tertiaire VRV (10-200 kW), contrat entretien, dépannage 24h.",
      },
      {
        q: "Aides Grand Annecy Cran-Gevrier ?",
        a: "Cumul MaPrimeRénov' + CEE + aides locales : jusqu'à 12 000 € pour Profil Bleu.",
      },
      {
        q: "Délai Cran-Gevrier ?",
        a: "Visite 48h, pose 3-6 semaines selon saison.",
      },
    ],
  },
  {
    slug: "seynod",
    name: "Seynod",
    citySlug: "annecy",
    cityName: "Annecy",
    postalCodes: ["74600"],
    intro:
      "Seynod, ancienne commune fusionnée à Annecy en 2017, est résidentiel calme. Pavillonnaire dominant, faible concurrence locale = SEO rapide.",
    habitat:
      "Pavillons 1970-2010, copropriétés modernes en centre, quelques anciennes fermes en hameaux. Performance thermique variable.",
    contraintes: [
      "Climat froid (550 m altitude) : -25 °C obligatoire",
      "Hameaux ruraux : géothermie possible",
      "Pas d'ABF (hors centre historique)",
    ],
    solutions: [
      "PAC air-eau 9-11 kW pour pavillon",
      "Géothermie pour grandes parcelles ≥ 1 500 m²",
      "Sortie fioul prioritaire (zone rurale) : aides 11 000 €",
    ],
    prixIndicatif: "PAC : 13-18 k€ · Géothermie : 22-32 k€ · Clim : 990 € à 4 990 €",
    faq: [
      {
        q: "PAC sortie fioul Seynod ?",
        a: "PAC air-eau 11-14 kW haute température. 16-22 k€ posé. Aides Profil Bleu jusqu'à 11 000 €.",
      },
      {
        q: "Climat froid Seynod ?",
        a: "550 m altitude : -25 °C obligatoire, SCOP > 4. Modèles Daikin Altherma 3 H HT, Atlantic Alfea Excellia A.I.",
      },
      {
        q: "Géothermie ferme rénovée Seynod ?",
        a: "Oui pour terrains ≥ 1 500 m². Capteurs horizontaux 22-32 k€, COP > 4 toute l'année.",
      },
    ],
  },
  // ─── VIENNE — 4 quartiers ────────────────────────────────────────
  {
    slug: "vieille-ville-vienne",
    name: "Vieille Ville",
    citySlug: "vienne",
    cityName: "Vienne",
    postalCodes: ["38200"],
    intro:
      "Cœur historique de Vienne (Temple d'Auguste, Cathédrale Saint-Maurice, théâtre antique), zone ABF stricte. Vestiges gallo-romains, bâtisses XVᵉ-XIXᵉ.",
    habitat:
      "Bâtisses XVᵉ-XIXᵉ classées ou inscrites, hauts plafonds, murs en pierre. Vestiges archéologiques sous certaines caves (vigilance).",
    contraintes: [
      "ABF systématique + service archéologie pour tout creusement profond",
      "Murs pierre 60-80 cm : carottage spécial",
      "Cours intérieures : seul emplacement autorisé",
    ],
    solutions: [
      "Multi-split avec unité ext. en cour intérieure",
      "Cassette plafond si pas d'accès cour",
      "Pas de carottage extérieur sans accord ABF",
    ],
    prixIndicatif: "2 490 € à 6 900 €",
    faq: [
      {
        q: "ABF Vieille Ville Vienne : délai ?",
        a: "2-3 mois. Dossier illustré complet. Vigilance archéologique pour caves.",
      },
      {
        q: "Aides Vienne Condrieu Agglomération ?",
        a: "Cumulables MaPrimeRénov' + CEE jusqu'à 12 500 € pour Profil Bleu.",
      },
      {
        q: "Climat estival sévère vallée Rhône ?",
        a: "Oui, jusqu'à 38-40 °C en juillet 2024. Clim réversible quasi indispensable.",
      },
    ],
  },
  {
    slug: "estressin",
    name: "Estressin",
    citySlug: "vienne",
    cityName: "Vienne",
    postalCodes: ["38200"],
    intro:
      "Quartier résidentiel au nord de Vienne, Estressin mêle copropriétés 1960-1990 et pavillonnaire récent. Demande PAC + clim forte (vallée du Rhône).",
    habitat:
      "Copropriétés 1960-90, pavillonnaire 1980-2010, quelques programmes neufs. Performance thermique variable.",
    contraintes: [
      "Vallée Rhône : climat estival sévère, demande clim massive",
      "Copro 1960-90 : règlement strict façade",
      "Pas d'ABF (hors Vieille Ville)",
    ],
    solutions: [
      "Mono-split 990 € pour T2-T3 (copro après vote AG)",
      "PAC air-eau pour pavillon 13-17 k€",
      "Multi-split pour grands logements",
    ],
    prixIndicatif: "990 € à 4 990 €",
    faq: [
      {
        q: "Combien de jours > 35 °C Estressin ?",
        a: "En 2024 : 22 jours > 35 °C, 78 jours > 30 °C. Clim quasi-indispensable.",
      },
      {
        q: "Aides Vienne Condrieu Estressin ?",
        a: "Cumul jusqu'à 12 500 € pour Profil Bleu (MaPrimeRénov' + CEE + aides locales).",
      },
      {
        q: "Délai à Estressin ?",
        a: "Visite 48h, pose 2-4 semaines en saison creuse, 4-8 en haute saison.",
      },
    ],
  },
  {
    slug: "saint-romain-en-gal",
    name: "Saint-Romain-en-Gal",
    citySlug: "vienne",
    cityName: "Vienne (Saint-Romain-en-Gal)",
    postalCodes: ["69560"],
    intro:
      "Saint-Romain-en-Gal, rive droite du Rhône face à Vienne, est résidentiel et touristique (musée gallo-romain). Pavillonnaire + maisons anciennes en centre.",
    habitat:
      "Maisons anciennes en pierre dans le centre, pavillonnaire 1980-2010 en périphérie. Quelques programmes neufs.",
    contraintes: [
      "Musée gallo-romain : ABF possible autour du site classé",
      "Climat estival vallée Rhône",
      "Maisons en pierre : haute température recommandée",
    ],
    solutions: [
      "Maison pierre : PAC haute température + isolation préalable",
      "Pavillon : PAC air-eau standard 13-17 k€",
      "Clim 990 € pour rafraîchir pièce de vie",
    ],
    prixIndicatif: "990 € à 6 900 € selon configuration",
    faq: [
      {
        q: "ABF près musée gallo-romain ?",
        a: "Possible. Déclaration préalable photomontage. Délai 2 mois.",
      },
      {
        q: "PAC maison ancienne en pierre Saint-Romain ?",
        a: "PAC haute température 11-14 kW, compatible radiateurs fonte. 16-22 k€ posé après aides.",
      },
      {
        q: "Vallée Rhône clim conseillée ?",
        a: "Oui, jusqu'à 40 °C en été. Mono-split 990 € pour pièce de vie principale recommandé.",
      },
    ],
  },
  {
    slug: "malissol",
    name: "Malissol",
    citySlug: "vienne",
    cityName: "Vienne",
    postalCodes: ["38200"],
    intro:
      "Quartier résidentiel au sud de Vienne, Malissol concentre pavillons 1980-2010 et copropriétés modernes. Demande PAC en sortie de chaudière gaz forte.",
    habitat:
      "Pavillonnaire 1980-2010 dominant, copropriétés modernes, quelques anciennes maisons en pierre. Performance thermique correcte.",
    contraintes: [
      "Climat estival vallée Rhône sévère",
      "Pas d'ABF",
      "Pavillonnaire : pose standard sans gros œuvre",
    ],
    solutions: [
      "PAC air-eau 9-11 kW pour pavillon",
      "Mono/multi-split clim pour rafraîchissement",
      "Aides Vienne Condrieu Agglo cumulables",
    ],
    prixIndicatif: "PAC : 13-17 k€ · Clim : 990 € à 4 990 €",
    faq: [
      {
        q: "PAC pour pavillon Malissol 120 m² ?",
        a: "PAC air-eau 10-11 kW : 13-16 k€ posé. Reste à charge 5-9 k€ après aides Vienne Condrieu Agglo.",
      },
      {
        q: "Sortie chaudière gaz Malissol ?",
        a: "Aides cumulées jusqu'à 12 500 € pour Profil Bleu (MaPrimeRénov' + CEE + aides locales).",
      },
      {
        q: "Délai Malissol ?",
        a: "Visite 48h, pose 3-5 semaines selon saison.",
      },
    ],
  },
];
