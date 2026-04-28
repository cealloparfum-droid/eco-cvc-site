export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  callout?: { title: string; body: string };
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Aides" | "Tarifs" | "Choisir sa PAC" | "Pratique";
  publishedAt: string; // ISO
  updatedAt: string;
  readingMinutes: number;
  excerpt: string;
  intro: string[];
  sections: ArticleSection[];
  faq: { q: string; a: string }[];
  relatedCities?: string[]; // slugs
  relatedServices?: { href: string; label: string }[];
};

export const articles: Article[] = [
  {
    slug: "maprimerenov-2026-pompe-a-chaleur",
    title: "MaPrimeRénov' 2026 : montants, conditions et démarches pour une pompe à chaleur",
    metaTitle: "MaPrimeRénov' 2026 pompe à chaleur — montants, conditions, démarches",
    metaDescription:
      "Tout savoir sur MaPrimeRénov' 2026 pour installer une pompe à chaleur en Isère et Rhône-Alpes : barèmes par revenus, plafonds, conditions RGE QualiPAC, démarches étape par étape.",
    category: "Aides",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-28",
    readingMinutes: 8,
    excerpt:
      "MaPrimeRénov' reste en 2026 l'aide phare pour basculer vers une pompe à chaleur. Voici les montants exacts par profil de revenus, les conditions RGE QualiPAC, et la procédure pour ne pas se faire recaler.",
    intro: [
      "MaPrimeRénov' a été reconduite en 2026 avec quelques ajustements significatifs : montants revus à la baisse pour les ménages aisés, mais maintien d'un soutien fort pour les revenus modestes et très modestes. Pour une pompe à chaleur installée en Isère ou en Rhône-Alpes, l'aide reste indispensable au montage du financement.",
      "Voici, en 2026, ce qu'il faut savoir avant de signer un devis : le barème exact, les conditions, les pièges classiques, et la procédure étape par étape.",
    ],
    sections: [
      {
        heading: "Qui peut bénéficier de MaPrimeRénov' 2026 ?",
        paragraphs: [
          "MaPrimeRénov' est ouverte aux propriétaires occupants et bailleurs (sous conditions) d'un logement de plus de 15 ans utilisé en résidence principale. La démarche est strictement liée à un artisan certifié RGE — sans cette certification, aucun versement n'est possible.",
          "Pour une pompe à chaleur (air-eau, géothermique, ou solaire thermique couplé), il faut spécifiquement un installateur RGE QualiPAC. Pour la PAC air-air, MaPrimeRénov' ne s'applique pas — c'est uniquement la prime CEE qui peut alors être mobilisée.",
        ],
        callout: {
          title: "À retenir",
          body: "ECO CVC est certifié RGE QualiPAC : nos clients sont éligibles à MaPrimeRénov' pour leurs PAC air-eau, et à la prime CEE pour leurs PAC air-air et climatisations réversibles.",
        },
      },
      {
        heading: "Les 4 profils de revenus en 2026",
        paragraphs: [
          "MaPrimeRénov' fonctionne par profils colorés selon les revenus du foyer : Bleu (très modestes), Jaune (modestes), Violet (intermédiaires), Rose (aisés). En 2026, les ménages Roses ne sont plus éligibles à l'aide pour la PAC air-eau.",
        ],
        list: [
          "Bleu (très modestes) : jusqu'à 5 000 € pour une PAC air-eau, 11 000 € pour une PAC géothermique",
          "Jaune (modestes) : jusqu'à 4 000 € pour une PAC air-eau, 9 000 € géothermique",
          "Violet (intermédiaires) : jusqu'à 3 000 € pour une PAC air-eau, 6 000 € géothermique",
          "Rose (aisés) : non éligible PAC air-eau en 2026, sauf rénovation globale (parcours accompagné)",
        ],
        callout: {
          title: "Cas particulier sortie de fioul",
          body: "Si vous remplacez une chaudière au fioul, une majoration de 1 000 € s'ajoute pour les profils Bleu et Jaune. C'est l'occasion idéale pour basculer.",
        },
      },
      {
        heading: "Conditions techniques et plafonds",
        paragraphs: [
          "Au-delà du profil de revenus, la PAC doit respecter des critères de performance : ETAS ≥ 126% pour PAC basse température, ETAS ≥ 111% pour haute température, COP ≥ 3,9 pour la géothermie. Tous les modèles que nous proposons à ECO CVC respectent ces seuils.",
          "Le plafond de dépenses pris en compte est de 18 000 € pour une PAC air-eau, 18 000 € pour une géothermique. Au-delà, c'est à votre charge.",
        ],
      },
      {
        heading: "La démarche étape par étape",
        paragraphs: [
          "L'erreur la plus fréquente : signer le devis avant la demande MaPrimeRénov'. Le devis doit être signé après l'attribution de l'aide, sinon vous perdez tout.",
        ],
        list: [
          "Étape 1 — Étude technique gratuite par un artisan RGE QualiPAC (nous le faisons à domicile en Isère et Rhône-Alpes)",
          "Étape 2 — Devis détaillé mentionnant le numéro RGE, la marque/modèle, l'ETAS et le COP",
          "Étape 3 — Création du compte sur maprimerenov.gouv.fr et dépôt de la demande avec le devis non signé",
          "Étape 4 — Réception de la notification d'attribution (1 à 3 semaines)",
          "Étape 5 — Signature du devis et lancement des travaux",
          "Étape 6 — Envoi de la facture sur le portail pour déclencher le paiement",
        ],
      },
      {
        heading: "Cumul avec d'autres aides",
        paragraphs: [
          "MaPrimeRénov' est cumulable avec la prime CEE (Coup de pouce chauffage), l'éco-PTZ, la TVA à 5,5%, et les aides locales (certaines collectivités d'Isère et Rhône-Alpes proposent des subventions complémentaires).",
          "Le cumul peut atteindre 70 à 90% du coût de l'installation pour les ménages très modestes — un cas concret traité récemment chez nous : passage de fioul à PAC air-eau, devis 14 800 €, reste à charge final 2 100 €.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il avancer l'argent avant de toucher MaPrimeRénov' ?",
        a: "Pour les ménages Bleus et Jaunes, une avance de 70% peut être demandée à la signature de la notification. Pour les autres profils, vous payez l'artisan puis êtes remboursé sous 4-6 semaines.",
      },
      {
        q: "Combien de temps faut-il pour toucher l'aide ?",
        a: "Entre la fin des travaux et le versement : compter 4 à 8 semaines en moyenne. Nous fournissons toutes les pièces justificatives nécessaires.",
      },
      {
        q: "Et si je suis propriétaire bailleur ?",
        a: "C'est possible depuis 2021 : le bailleur peut demander MaPrimeRénov' s'il s'engage à louer le logement en résidence principale pendant 6 ans après les travaux.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne", "grenoble"],
    relatedServices: [
      { href: "/calculateur", label: "Calculateur d'aides personnalisé" },
      { href: "/installation", label: "Installation pompe à chaleur" },
      { href: "/certifications", label: "Nos certifications RGE" },
    ],
  },
  {
    slug: "prix-pompe-a-chaleur-2026",
    title: "Prix d'une pompe à chaleur en 2026 : air-air, air-eau, géothermique",
    metaTitle: "Prix pompe à chaleur 2026 — air-air, air-eau, géothermique [guide complet]",
    metaDescription:
      "Combien coûte une pompe à chaleur en 2026 ? Tarifs détaillés par technologie (air-air, air-eau, géothermique), main d'œuvre, aides déductibles. Guide ECO CVC pour l'Isère et Rhône-Alpes.",
    category: "Tarifs",
    publishedAt: "2026-03-22",
    updatedAt: "2026-04-28",
    readingMinutes: 10,
    excerpt:
      "Le prix d'une pompe à chaleur dépend de quatre facteurs : la technologie, la puissance, la complexité de la pose et la marque. Voici les fourchettes 2026 réelles, hors marketing.",
    intro: [
      "Quand un client nous demande \"combien ça coûte une PAC\", la réponse honnête est : ça dépend. Mais nous avons les prix de marché 2026 à jour, alors voici les vraies fourchettes — sans tableau bidon de site comparateur.",
    ],
    sections: [
      {
        heading: "Pompe à chaleur air-air (climatisation réversible)",
        paragraphs: [
          "C'est la solution la plus économique. L'unité extérieure capte les calories de l'air, et un ou plusieurs splits intérieurs diffusent l'air chauffé ou rafraîchi.",
        ],
        list: [
          "Mono-split (1 pièce, 2,5 à 5 kW) : 1 800 à 2 800 € posé",
          "Bi-split (2 pièces, 5 à 7 kW) : 3 500 à 4 800 € posé",
          "Tri-split (3 pièces, 6 à 9 kW) : 5 200 à 6 800 € posé",
          "Quadri-split (4 pièces) : 6 500 à 8 500 € posé",
          "Gainable (réseau dans combles, toute la maison) : 8 000 à 14 000 € posé",
        ],
        callout: {
          title: "Aides PAC air-air",
          body: "Pas d'éligibilité MaPrimeRénov', mais éligibilité à la prime CEE (Certificats d'Économies d'Énergie) — entre 250 et 1 100 € selon revenus.",
        },
      },
      {
        heading: "Pompe à chaleur air-eau",
        paragraphs: [
          "La PAC air-eau remplace une chaudière (gaz, fioul, électrique) et alimente vos radiateurs ou plancher chauffant existants. C'est la rénovation énergétique reine.",
        ],
        list: [
          "PAC air-eau 8 kW (maison 80-100 m²) : 11 000 à 14 000 € posé",
          "PAC air-eau 11 kW (maison 100-130 m²) : 13 000 à 16 500 € posé",
          "PAC air-eau 14 kW (maison 130-180 m²) : 15 000 à 19 000 € posé",
          "PAC haute température (compatible radiateurs anciens) : majoration de 1 500 à 3 000 €",
          "PAC hybride (PAC + chaudière condensation) : 14 000 à 18 000 € posé",
        ],
        callout: {
          title: "Aides PAC air-eau",
          body: "MaPrimeRénov' (jusqu'à 5 000 €) + prime CEE (jusqu'à 5 000 €) cumulables. Reste à charge fréquent : 4 000 à 9 000 €.",
        },
      },
      {
        heading: "Pompe à chaleur géothermique",
        paragraphs: [
          "Excellente performance (COP > 4 toute l'année), mais investissement initial nettement plus lourd à cause des travaux de captage (forage vertical ou capteurs horizontaux).",
        ],
        list: [
          "PAC sol-eau capteurs horizontaux : 18 000 à 26 000 € posé (terrain ≥ 1,5x surface chauffée nécessaire)",
          "PAC sol-eau forage vertical : 22 000 à 32 000 € posé",
          "PAC eau-eau (nappe phréatique) : 19 000 à 28 000 € posé selon profondeur",
        ],
        callout: {
          title: "Pour qui c'est rentable",
          body: "Maisons > 150 m² avec terrain disponible, hivers rigoureux (Voiron, Chambéry, Annecy) : la géothermie devient la solution la plus rentable sur 20 ans.",
        },
      },
      {
        heading: "Ce qui fait varier le prix",
        paragraphs: [
          "Au-delà de la technologie, plusieurs facteurs influencent le devis :",
        ],
        list: [
          "Marque : Daikin, Mitsubishi Electric, Atlantic (premium) sont 15-25% plus chers que des marques sérieuses moins connues",
          "Distance unité ext. / unité int. (longueur des liaisons frigorifiques)",
          "Accessibilité du chantier (toiture, étage, copropriété)",
          "Travaux annexes : passage en gaine, modification du tableau électrique, raccordement plomberie",
          "Désinstallation de l'ancien système (chaudière fioul, citerne)",
        ],
      },
      {
        heading: "Comment payer le juste prix",
        paragraphs: [
          "Trois conseils que nous donnons à tous nos prospects :",
        ],
        list: [
          "Demandez 2-3 devis à des artisans RGE QualiPAC locaux. Si un devis est 30% en dessous des autres, méfiez-vous : matériel inférieur ou simulation des aides falsifiée",
          "Refusez tout démarchage à domicile non sollicité — c'est un signal de fraude classique en CVC",
          "Vérifiez le numéro RGE en ligne sur france-renov.gouv.fr avant de signer",
        ],
      },
    ],
    faq: [
      {
        q: "Pourquoi y a-t-il autant de différence entre les devis ?",
        a: "Marque du matériel, performance (ETAS), garanties (5 ans pièces vs 10 ans), main d'œuvre incluse ou non, et compétence de l'artisan. Comparez les fiches techniques, pas seulement les totaux.",
      },
      {
        q: "Combien coûte l'entretien annuel ?",
        a: "Entre 150 et 250 € TTC par an pour une PAC air-eau ou air-air. C'est obligatoire (décret 2020) et nécessaire pour préserver la garantie constructeur.",
      },
      {
        q: "Quelle durée de vie pour amortir l'investissement ?",
        a: "PAC air-air : 12-15 ans. PAC air-eau : 17-20 ans. PAC géothermique : 20-25 ans (capteurs et forage durent 50 ans). L'amortissement se fait généralement entre 6 et 12 ans.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "vienne", "lyon", "voiron", "chambery"],
    relatedServices: [
      { href: "/installation", label: "Installation détaillée" },
      { href: "/calculateur", label: "Calculer mes aides" },
      { href: "/contact", label: "Demander un devis" },
    ],
  },
  {
    slug: "pompe-a-chaleur-air-air-vs-air-eau",
    title: "Pompe à chaleur air-air ou air-eau : comment choisir en 2026",
    metaTitle: "PAC air-air vs air-eau : comparatif 2026 — guide ECO CVC",
    metaDescription:
      "Pompe à chaleur air-air ou air-eau : différences techniques, prix, aides, performances et cas d'usage. Notre comparatif honnête pour bien choisir en 2026.",
    category: "Choisir sa PAC",
    publishedAt: "2026-02-10",
    updatedAt: "2026-04-28",
    readingMinutes: 7,
    excerpt:
      "Air-air ou air-eau ? La question revient sur 80% de nos visites techniques. La réponse dépend de votre logement, de votre installation actuelle et de votre budget. Voici comment trancher.",
    intro: [
      "Air-air et air-eau partagent le même principe physique : extraire des calories de l'air extérieur pour chauffer (ou rafraîchir). Mais leur usage est radicalement différent. Voici comment savoir laquelle est faite pour vous.",
    ],
    sections: [
      {
        heading: "PAC air-air : le confort rapide et abordable",
        paragraphs: [
          "L'air capté est directement soufflé dans les pièces via des splits muraux, consoles ou cassettes. C'est la même technologie qu'une climatisation classique, sauf que la fonction réversible permet aussi de chauffer.",
          "Avantages : prix d'achat bas (1 800 à 8 500 €), installation rapide (1 jour), réversible été comme hiver, contrôle pièce par pièce.",
          "Limites : ne produit pas l'eau chaude sanitaire, moins efficace en très grand froid (-10 °C et en dessous), moins de subventions (pas MaPrimeRénov').",
        ],
      },
      {
        heading: "PAC air-eau : la rénovation énergétique complète",
        paragraphs: [
          "L'air capté chauffe de l'eau qui circule dans vos radiateurs ou votre plancher chauffant. La PAC air-eau peut aussi produire l'eau chaude sanitaire (avec ballon thermodynamique intégré ou séparé).",
          "Avantages : éligible MaPrimeRénov', remplace une chaudière fossile sans changer les radiateurs (modèles haute température), peut chauffer l'eau sanitaire, économies de 50-70% sur la facture chauffage.",
          "Limites : prix plus élevé (11 000 à 19 000 €), pas de fonction rafraîchissement (sauf modèles réversibles spécifiques avec plancher chauffant-rafraîchissant), travaux plus longs (2-4 jours).",
        ],
      },
      {
        heading: "Le tableau de décision",
        paragraphs: [
          "Pour trancher, posez-vous ces 4 questions :",
        ],
        list: [
          "Avez-vous une chaudière (gaz, fioul, électrique) à remplacer ? → air-eau prioritaire",
          "Voulez-vous le rafraîchissement en été ? → air-air ou couplage (PAC air-eau + clim sur 1-2 pièces)",
          "Êtes-vous éligible MaPrimeRénov' (revenus modestes/intermédiaires + maison > 15 ans) ? → air-eau pour profiter de l'aide",
          "Budget serré et besoin urgent de chauffer ? → air-air en 1ère étape, air-eau plus tard",
        ],
      },
      {
        heading: "Les solutions hybrides qu'on installe souvent",
        paragraphs: [
          "Sur 30% de nos chantiers, nous combinons les deux : PAC air-eau pour le chauffage principal et l'eau chaude, plus 1 ou 2 splits réversibles pour rafraîchir le séjour et la chambre principale en été.",
          "C'est plus cher au global mais c'est la solution complète : MaPrimeRénov' pour la PAC air-eau, prime CEE pour les splits, économies d'énergie hiver ET confort été.",
        ],
      },
    ],
    faq: [
      {
        q: "Une PAC air-air peut-elle remplacer ma chaudière ?",
        a: "Techniquement oui, mais elle ne produira pas l'eau chaude sanitaire et ne sera pas reliée à vos radiateurs existants. Pour une vraie rénovation chauffage, l'air-eau est plus adaptée.",
      },
      {
        q: "Quelle est la plus économique à l'usage ?",
        a: "À surface équivalente, la PAC air-eau a un meilleur COP en moyenne annuelle (3,5-4 vs 3-3,5 pour l'air-air), donc consomme moins. Mais l'air-air a moins de pertes par les radiateurs.",
      },
      {
        q: "Et le bruit, alors ?",
        a: "Les deux ont une unité extérieure. Niveau intérieur : la PAC air-eau est totalement silencieuse (juste le module hydraulique discret), la PAC air-air a un léger souffle des splits (≈ 25-30 dB en mode silencieux).",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne", "saint-priest"],
    relatedServices: [
      { href: "/installation", label: "Installation des deux technologies" },
      { href: "/calculateur", label: "Estimer mes aides" },
    ],
  },
  {
    slug: "aides-cee-pompe-a-chaleur-2026",
    title: "Prime CEE 2026 : montants, conditions et démarche pour une PAC ou clim réversible",
    metaTitle: "Prime CEE 2026 pompe à chaleur — montants, conditions, démarche",
    metaDescription:
      "Prime CEE 2026 (Certificats d'Économies d'Énergie) pour la pompe à chaleur et la climatisation réversible : barèmes, conditions, démarches. Cumulable avec MaPrimeRénov'.",
    category: "Aides",
    publishedAt: "2026-01-18",
    updatedAt: "2026-04-28",
    readingMinutes: 6,
    excerpt:
      "Souvent oubliée à côté de MaPrimeRénov', la prime CEE peut représenter jusqu'à 5 000 € sur votre projet PAC. Cumulable, elle est accessible à tous les revenus.",
    intro: [
      "La prime CEE — pour Certificats d'Économies d'Énergie — est financée par les fournisseurs d'énergie (EDF, TotalEnergies, Engie…) qui ont obligation de prouver qu'ils aident leurs clients à économiser. Concrètement, ils vous versent une prime pour vos travaux d'efficacité énergétique.",
      "Contrairement à MaPrimeRénov', la prime CEE est ouverte à tous les revenus, et elle s'applique aussi à la climatisation réversible (PAC air-air) — un point souvent oublié.",
    ],
    sections: [
      {
        heading: "Combien pour une pompe à chaleur en 2026 ?",
        paragraphs: [
          "Les montants varient selon le profil de revenus et le type d'équipement :",
        ],
        list: [
          "PAC air-eau (Coup de pouce chauffage) : 4 000 à 5 000 € pour ménages modestes/très modestes, 2 500 à 3 500 € pour les autres",
          "PAC air-air : 250 à 1 100 € selon revenus et zone climatique (H1, H2, H3)",
          "PAC géothermique : 4 000 à 5 000 € pour ménages modestes, 2 500 à 4 000 € sinon",
          "Sortie de chaudière fioul : majoration de 1 200 € sur le Coup de pouce",
        ],
      },
      {
        heading: "Conditions d'éligibilité",
        paragraphs: [
          "Pour bénéficier de la prime CEE, votre projet doit respecter :",
        ],
        list: [
          "Logement de plus de 2 ans (résidence principale ou secondaire)",
          "Installateur certifié RGE (QualiPAC pour les PAC, QualiClim ou équivalent pour la clim)",
          "Performance minimale du matériel : ETAS ≥ 126% PAC basse température, COP ≥ 3,9 géothermique",
          "Demande déposée AVANT signature du devis (comme MaPrimeRénov')",
        ],
      },
      {
        heading: "La démarche pas à pas",
        paragraphs: [
          "La procédure peut sembler complexe, mais elle est en réalité plus rapide que MaPrimeRénov' :",
        ],
        list: [
          "Étape 1 — Choisir un partenaire CEE (mandataire). Plusieurs options : EDF Prime Énergie, TotalEnergies, Effy, La Prime des Énergies",
          "Étape 2 — Faire une demande en ligne avec le devis non signé d'un artisan RGE",
          "Étape 3 — Recevoir l'attestation d'attribution (24-72h)",
          "Étape 4 — Signer le devis et faire poser",
          "Étape 5 — Envoyer la facture acquittée + attestation sur l'honneur",
          "Étape 6 — Recevoir le virement (3-6 semaines après envoi des justificatifs)",
        ],
        callout: {
          title: "Cumul CEE + MaPrimeRénov'",
          body: "La prime CEE se cumule intégralement avec MaPrimeRénov' sur les PAC air-eau et géothermiques. C'est ce cumul qui permet aux ménages très modestes d'atteindre 70-80% de couverture du projet.",
        },
      },
      {
        heading: "Les pièges à éviter",
        paragraphs: [
          "Plusieurs alertes que nous voyons régulièrement chez nos clients :",
        ],
        list: [
          "Démarchage téléphonique \"PAC à 1 €\" : c'est de l'arnaque — la prime ne couvre jamais 100% du projet",
          "Promesse de prime \"clé en main\" sans visite technique : illégal, car le matériel doit être dimensionné",
          "Mandataire CEE qui demande de payer avant les travaux : refusez, le mandataire se rémunère sur la prime, pas sur vous",
        ],
      },
    ],
    faq: [
      {
        q: "Puis-je toucher la prime CEE pour une simple climatisation réversible ?",
        a: "Oui, à condition que l'équipement respecte les seuils de performance et que l'artisan soit RGE. Montant variable de 250 à 1 100 €.",
      },
      {
        q: "Quel mandataire CEE choisir ?",
        a: "Les montants varient peu (~5-10%). Choisissez un acteur établi : EDF Prime Énergie, TotalEnergies, Engie. Méfiez-vous des nouveaux acteurs avec promesses irréalistes.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne", "saint-priest", "meyzieu"],
    relatedServices: [
      { href: "/calculateur", label: "Calculer toutes les aides" },
      { href: "/installation", label: "Voir nos installations" },
    ],
  },
  {
    slug: "quelle-pac-pour-maison-100m2",
    title: "Quelle pompe à chaleur pour une maison de 100 m² ?",
    metaTitle: "Quelle PAC pour 100 m² ? Puissance, prix, choix — guide ECO CVC",
    metaDescription:
      "Pompe à chaleur pour maison de 100 m² : quelle puissance, quelle technologie, quel budget en 2026 ? Conseils concrets ECO CVC en Isère et Rhône-Alpes.",
    category: "Choisir sa PAC",
    publishedAt: "2026-03-05",
    updatedAt: "2026-04-28",
    readingMinutes: 6,
    excerpt:
      "100 m², c'est la maison française médiane. Voici comment dimensionner et choisir la PAC adaptée — sans tomber dans le surdimensionnement classique des grandes enseignes.",
    intro: [
      "Une maison de 100 m² est le cas que nous traitons le plus à ECO CVC. Pavillons des années 70-90 du Nord-Isère, maisons RT2005 de l'Isle-d'Abeau, longères du Voironnais : les besoins de puissance varient du simple au double selon l'isolation.",
    ],
    sections: [
      {
        heading: "Calculer la puissance nécessaire (vraie méthode)",
        paragraphs: [
          "La règle empirique \"100 W/m²\" est dépassée. La méthode professionnelle prend en compte 6 facteurs :",
        ],
        list: [
          "Isolation des murs (vide d'air, laine, polystyrène, brique seule…)",
          "Isolation toiture (≥ 30 cm laine en RT2012, ≤ 10 cm en non rénové)",
          "Isolation plancher / vide sanitaire",
          "Surface vitrée et qualité (simple, double, triple vitrage)",
          "Hauteur sous plafond (impact sur le volume à chauffer)",
          "Zone climatique (température extérieure de base : -8 °C en plaine isère, -12 °C à Voiron, -15 °C à Chambéry)",
        ],
        callout: {
          title: "Notre approche",
          body: "Nous calculons la puissance avec un logiciel d'étude thermique pendant la visite gratuite. Cela évite le surdimensionnement (PAC trop puissante = courts cycles = panne précoce) et le sous-dimensionnement (inconfort en grand froid).",
        },
      },
      {
        heading: "Cas n°1 : maison RT2005-RT2012 bien isolée",
        paragraphs: [
          "Maisons construites entre 2006 et 2020, isolation conforme aux normes : besoin de chauffage moyen 70-90 W/m².",
        ],
        list: [
          "Puissance recommandée : PAC air-eau 7 à 8 kW",
          "Prix moyen : 11 500 à 13 500 € posé",
          "Consommation annuelle estimée : 2 800 à 3 500 kWh chauffage + ECS",
          "Économie vs ancienne chaudière gaz : 600 à 900 € / an",
        ],
      },
      {
        heading: "Cas n°2 : maison années 80-90 avec rénovation partielle",
        paragraphs: [
          "Combles isolés mais murs d'origine, double vitrage installé à 70%. Cas le plus fréquent en Isère du Nord.",
        ],
        list: [
          "Puissance recommandée : PAC air-eau 9 à 11 kW",
          "Prix moyen : 13 000 à 16 000 € posé",
          "Avant d'installer : conseil d'ajouter 10-15 cm de ouate sur les combles existantes (~1 500 €) pour garantir le rendement",
          "Économie vs chaudière fioul : 1 800 à 2 500 € / an",
        ],
      },
      {
        heading: "Cas n°3 : maison années 60-70 non rénovée",
        paragraphs: [
          "Murs en parpaing seul, simple vitrage par endroits, combles peu ou pas isolés. Besoin de chauffage : 130-180 W/m².",
        ],
        list: [
          "Approche recommandée : isoler d'abord (combles + murs si possible), PAC ensuite",
          "Si PAC quand même : 12 à 14 kW haute température, 16 000 à 19 000 € posé",
          "Sans isolation préalable, la PAC fonctionnera plus souvent en mode appoint électrique → économies divisées par 2",
        ],
        callout: {
          title: "Notre conseil",
          body: "Nous refusons régulièrement de poser une PAC sans isolation préalable quand le retour sur investissement est négatif. Mieux vaut perdre un chantier qu'un client.",
        },
      },
      {
        heading: "Air-air ou air-eau pour 100 m² ?",
        paragraphs: [
          "Pour 100 m², le critère de choix dépend de l'installation existante :",
        ],
        list: [
          "Vous avez radiateurs ou plancher chauffant : PAC air-eau (remplacement direct de la chaudière)",
          "Vous chauffez à l'électrique direct (convecteurs) : PAC air-air multi-split (3-4 unités) en première étape, ou PAC air-eau + nouveau circuit chauffage central en grande rénovation",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de splits pour 100 m² ?",
        a: "Généralement 4 splits : séjour (3-4 kW), 3 chambres (2-2,5 kW chacune). Soit un quadri-split de 8-10 kW total, environ 7 000 à 8 500 € posé.",
      },
      {
        q: "PAC air-eau 8 kW ou 11 kW ?",
        a: "Si votre maison est isolée RT2005+, 8 kW suffit. Si elle date d'avant et n'a pas été rénovée, 11 kW est plus prudent. La visite technique tranche au kW près.",
      },
      {
        q: "Faut-il un ballon d'eau chaude séparé ?",
        a: "Si vous êtes 4 personnes ou plus, oui — ballon thermodynamique 200-250 L. Pour 1-3 personnes, un module ECS intégré à la PAC suffit.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "l-isle-d-abeau", "vienne", "saint-priest"],
    relatedServices: [
      { href: "/installation", label: "Installation détaillée" },
      { href: "/calculateur", label: "Estimer aides + budget" },
    ],
  },
];

export const findArticle = (slug: string) => articles.find((a) => a.slug === slug);
