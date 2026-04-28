export type FaqItem = {
  q: string;
  a: string;
};

export type FaqGroup = {
  category: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    category: "Pompe à chaleur — fonctionnement",
    items: [
      {
        q: "Comment fonctionne une pompe à chaleur ?",
        a: "Une PAC capte les calories présentes dans l'air, le sol ou l'eau, les comprime pour augmenter leur température, puis les transfère à votre intérieur (chauffage) ou à l'eau de votre installation. Avec 1 kWh d'électricité, elle restitue 3 à 5 kWh de chaleur — c'est le COP (coefficient de performance).",
      },
      {
        q: "Une PAC fonctionne-t-elle en hiver, par grand froid ?",
        a: "Oui. Les PAC modernes garantissent un fonctionnement jusqu'à -20 °C pour les modèles \"plage étendue\". À très basse température, le COP baisse mais reste > 2 (deux fois plus efficace qu'un radiateur électrique). Une résistance d'appoint intégrée prend le relais en cas de pic de froid extrême.",
      },
      {
        q: "Quelle est la différence entre PAC air-air et air-eau ?",
        a: "PAC air-air : souffle directement de l'air chauffé/refroidi via des splits muraux. PAC air-eau : chauffe de l'eau qui circule dans vos radiateurs ou plancher chauffant et peut alimenter le ballon d'eau chaude. Air-eau remplace une chaudière, air-air remplace ou complète un chauffage électrique.",
      },
      {
        q: "Combien de temps dure une pompe à chaleur ?",
        a: "PAC air-air : 12-15 ans en moyenne. PAC air-eau : 17-20 ans. PAC géothermique : 20-25 ans (les capteurs et le forage durent 50 ans). Avec entretien régulier, certaines installations dépassent ces durées.",
      },
      {
        q: "La pompe à chaleur consomme-t-elle beaucoup d'électricité ?",
        a: "Pour une maison de 100 m² bien isolée : 2 500 à 4 000 kWh/an de chauffage + ECS, soit 500 à 800 €/an au tarif réglementé 2026. C'est 2 à 4 fois moins qu'un chauffage électrique direct, et souvent moins qu'une chaudière fioul.",
      },
    ],
  },
  {
    category: "Aides et financement",
    items: [
      {
        q: "Suis-je éligible à MaPrimeRénov' pour une pompe à chaleur ?",
        a: "Si vous êtes propriétaire (occupant ou bailleur) d'un logement de plus de 15 ans en résidence principale, et que vous installez une PAC air-eau ou géothermique avec un artisan RGE QualiPAC : oui. Le montant dépend de vos revenus (4 profils : Bleu, Jaune, Violet, Rose).",
      },
      {
        q: "Peut-on cumuler MaPrimeRénov' et la prime CEE ?",
        a: "Oui, intégralement. Pour une PAC air-eau, le cumul peut atteindre 8 000 à 10 000 € pour les ménages très modestes (5 000 € MaPrimeRénov' + 5 000 € Coup de pouce CEE).",
      },
      {
        q: "L'éco-PTZ existe-t-il toujours en 2026 ?",
        a: "Oui, jusqu'à 50 000 € pour une rénovation globale, sans intérêts à payer (l'État prend en charge les intérêts). Cumulable avec toutes les autres aides.",
      },
      {
        q: "Quel reste à charge moyen pour une PAC air-eau ?",
        a: "Pour un projet de 13 000 € : ménage Bleu = 4 000 € reste à charge, Jaune = 5 500 €, Violet = 7 500 €, Rose = 9 500 € (non éligible MaPrimeRénov' simple). Estimation à affiner par calcul personnalisé.",
      },
      {
        q: "Faut-il avancer l'argent à l'installateur ?",
        a: "Oui dans la plupart des cas, sauf pour les ménages Bleus et Jaunes qui peuvent demander une avance MaPrimeRénov' de 70%. Sinon : règlement à l'artisan, puis remboursement par les organismes en 4-8 semaines.",
      },
    ],
  },
  {
    category: "Installation et chantier",
    items: [
      {
        q: "Combien de temps dure une installation de PAC ?",
        a: "PAC air-air mono-split : 1/2 journée. Multi-split (3-4 unités) : 1-2 jours. PAC air-eau classique : 2-3 jours. PAC air-eau avec dépose chaudière fioul + cuve : 3-4 jours. PAC géothermique avec forage : 1-2 semaines.",
      },
      {
        q: "Faut-il faire des travaux pour passer du gaz à la PAC ?",
        a: "Dans 80% des cas, non — vos radiateurs et votre circuit hydraulique restent en place. Une PAC moyenne ou haute température est compatible. Sur les maisons très anciennes, on valide par calcul thermique avant de chiffrer.",
      },
      {
        q: "Mon installation électrique est-elle compatible ?",
        a: "Une PAC moderne demande une ligne dédiée 16-32 A selon puissance. Si votre tableau est récent, c'est rarement un problème. Si tableau d'origine 30 ans, on prévoit une mise à niveau (300 à 700 €).",
      },
      {
        q: "Puis-je installer une PAC moi-même ?",
        a: "Non. La manipulation du fluide frigorigène nécessite une attestation F-Gaz (formation + certification). Les aides type MaPrimeRénov' exigent un artisan RGE. Et la garantie constructeur s'annule sans installateur certifié.",
      },
      {
        q: "Quelle saison est la meilleure pour faire installer ?",
        a: "Mars-mai et septembre-octobre. Pas en pleine canicule (PAC air-air demandées en urgence) ni en plein hiver (PAC air-eau saturées). Les délais y sont meilleurs et les artisans plus disponibles.",
      },
    ],
  },
  {
    category: "Entretien et durée de vie",
    items: [
      {
        q: "L'entretien annuel est-il vraiment obligatoire ?",
        a: "Oui pour les PAC > 4 kW, depuis le décret 2020-912. Tous les 2 ans minimum, par un professionnel qualifié. Sans cela : garantie annulée, risque assurance, sanction DGCCRF possible.",
      },
      {
        q: "Quel coût pour l'entretien annuel ?",
        a: "Visite ponctuelle : 130 à 250 € selon type. Contrat d'entretien annuel ECO CVC : 180 à 280 € (inclut visite + dépannages prioritaires). Le contrat est généralement plus rentable et plus rassurant.",
      },
      {
        q: "Ma PAC givre en hiver, c'est normal ?",
        a: "Oui, totalement. Quand la PAC capte l'humidité de l'air en froid, elle givre. Elle entre en mode dégivrage automatique tous les 30-60 min selon conditions. Si le givrage est permanent ou bloque la PAC, appelez votre installateur.",
      },
      {
        q: "Que faire si ma PAC tombe en panne en plein hiver ?",
        a: "Appelez immédiatement votre installateur — chez ECO CVC, intervention sous 24h pour nos clients sous contrat, 48-72h hors contrat. En attendant, basculez sur le mode \"appoint électrique\" (résistance intégrée) pour ne pas geler.",
      },
    ],
  },
  {
    category: "Bruit et voisinage",
    items: [
      {
        q: "Une PAC est-elle bruyante ?",
        a: "Les PAC modernes sont à 35-45 dB à 1 m de l'unité extérieure. C'est entre un réfrigérateur et une conversation. Inaudible à 5 m si bien posée (plots anti-vibrations, emplacement dégagé).",
      },
      {
        q: "Quelle est la réglementation sur le bruit en limite de propriété ?",
        a: "L'arrêté du 5 décembre 2006 impose +5 dB max d'émergence en journée et +3 dB la nuit (par rapport au bruit ambiant), mesurés en limite de propriété. Une PAC bien dimensionnée et bien posée respecte largement ces seuils.",
      },
      {
        q: "Mon voisin se plaint, que faire ?",
        a: "Demandez une mesure acoustique pro (300-500 €). Si l'émergence dépasse les seuils légaux : repose sur plots anti-vibrations, écran acoustique, ou déplacement. Si conformité prouvée : la plainte n'a pas de base juridique, mais médiez si possible.",
      },
    ],
  },
  {
    category: "Climatisation",
    items: [
      {
        q: "Une climatisation réversible peut-elle remplacer ma chaudière ?",
        a: "Pour un appartement bien isolé, souvent oui. Pour une maison, c'est plus rare : la clim air-air ne produit pas l'eau chaude sanitaire et est moins efficace en très grand froid. Combo possible : chaudière conservée + clim pour le rafraîchissement et l'appoint chauffage.",
      },
      {
        q: "Puis-je installer une clim en appartement en copropriété ?",
        a: "Oui dans la majorité des cas, sous réserve de l'accord du syndic en assemblée générale (loi 1965 art. 25). ECO CVC fournit le dossier technique complet pour le vote en AG.",
      },
      {
        q: "Combien coûte une clim mono-split posée ?",
        a: "Pour 1 pièce de 25-30 m² : 1 800 à 2 800 € posé selon marque et puissance. Délai d'installation : 1/2 journée à 1 journée.",
      },
      {
        q: "La clim mobile est-elle vraiment efficace ?",
        a: "Limitée. Une clim mobile à roulettes refroidit modestement une seule pièce et consomme 2 à 3 fois plus qu'un split fixe à puissance équivalente. Solution dépannage, pas équipement durable.",
      },
    ],
  },
  {
    category: "Spécificités locales (Isère, Rhône-Alpes)",
    items: [
      {
        q: "Vous intervenez dans toute la région Rhône-Alpes ?",
        a: "Oui : Isère (Bourgoin-Jallieu, Vienne, Voiron, Grenoble, La Tour-du-Pin…), Rhône (Lyon, Villeurbanne, Saint-Priest, Meyzieu…), Savoie (Chambéry, Aix-les-Bains), Haute-Savoie (Annecy). Atelier basé à Nivolas-Vermelle (38).",
      },
      {
        q: "Une PAC tient-elle en altitude (Voiron, Chambéry, Annecy) ?",
        a: "Oui, à condition de choisir un modèle \"plage étendue\" garanti -20 °C ou plus. Nous installons exclusivement ce type de matériel sur les communes au-dessus de 400 m d'altitude.",
      },
      {
        q: "Y a-t-il des aides locales en plus de MaPrimeRénov' ?",
        a: "Oui : Grenoble-Alpes-Métropole, agglomération CAPI (Bourgoin-L'Isle-d'Abeau), Métropole Grand Chambéry, Pays Voironnais — chacune propose ponctuellement des subventions complémentaires sur la rénovation énergétique. Nous vérifions votre éligibilité au cas par cas.",
      },
      {
        q: "ECO CVC est-il vraiment certifié RGE ?",
        a: "Oui. Notre numéro RGE QualiPAC est vérifiable sur france-renov.gouv.fr. Cette certification est obligatoire pour que vos travaux soient éligibles à MaPrimeRénov' et à la prime CEE.",
      },
    ],
  },
];
