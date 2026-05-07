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
  {
    slug: "sortir-du-fioul-2026",
    title: "Sortir du fioul en 2026 : aides, démarches et solutions de remplacement",
    metaTitle: "Sortir du fioul 2026 — aides, démarches, PAC ou autre [guide complet]",
    metaDescription:
      "Comment remplacer une chaudière fioul en 2026 : pompe à chaleur, biomasse, hybride. Aides MaPrimeRénov' majorées, prime CEE, démarches étape par étape. ECO CVC, RGE QualiPAC en Isère.",
    category: "Aides",
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-28",
    readingMinutes: 9,
    excerpt:
      "Les chaudières fioul sont en sursis. Bonne nouvelle : 2026 reste l'année des aides majorées pour basculer vers une PAC ou une solution biomasse. Mode d'emploi.",
    intro: [
      "Depuis juillet 2022, l'installation d'une chaudière fioul neuve dans un logement est interdite. En 2026, ce qui reste possible : continuer à entretenir l'existant, le remplacer en panne par une chaudière haute performance (très encadrée), ou — le plus rentable — basculer vers une énergie renouvelable.",
      "Voici comment fonctionne le calendrier, quelles aides sont disponibles cette année, et comment ECO CVC accompagne les sorties de fioul en Isère et Rhône-Alpes.",
    ],
    sections: [
      {
        heading: "Le cadre légal en 2026",
        paragraphs: [
          "Contrairement à ce que beaucoup pensent, vous n'êtes pas obligés de retirer votre chaudière fioul aujourd'hui. La loi vous impose simplement de ne plus en installer de neuves, et limite fortement le remplacement à l'identique en cas de panne (seuils d'émissions de CO₂ très restrictifs).",
          "En pratique, à la première grosse panne, votre chauffagiste vous proposera très probablement une bascule vers une PAC ou une chaudière biomasse — c'est le bon moment pour le faire avec les aides au plus haut.",
        ],
      },
      {
        heading: "Pourquoi sortir du fioul est rentable en 2026",
        paragraphs: [
          "Trois raisons concrètes :",
        ],
        list: [
          "Le prix du fioul est passé de 0,80 €/L en 2020 à plus de 1,30 €/L en 2026 — une maison moyenne consomme 1 800 à 2 500 L/an, soit 2 400 à 3 200 €/an de chauffage",
          "MaPrimeRénov' majorée \"sortie de fioul\" : +1 000 € sur les profils Bleu et Jaune (très modestes/modestes)",
          "Coup de pouce chauffage : prime CEE de 4 000 à 5 000 € pour les ménages modestes basculant fioul → PAC",
        ],
        callout: {
          title: "Cas concret traité chez ECO CVC",
          body: "Pavillon 110 m² à Bourgoin-Jallieu, chaudière fioul de 1998 : coût annuel chauffage avant = 2 900 €. Après PAC air-eau 11 kW (devis 14 200 €, reste à charge 4 800 € après aides) : coût annuel = 850 €. Économie cumulée 5 ans : 10 250 € — la PAC est amortie en 2,3 ans.",
        },
      },
      {
        heading: "Quelle solution choisir pour remplacer le fioul ?",
        paragraphs: [
          "Trois alternatives sérieuses selon votre logement :",
        ],
        list: [
          "PAC air-eau : la plus universelle, garde vos radiateurs, éligible MaPrimeRénov' + CEE — recommandée dans 80% des cas",
          "Chaudière biomasse (granulés ou bûches) : plus chère à l'achat (15 000-22 000 €) mais coût combustible bas, idéale en zone forestière (Voironnais, Chartreuse)",
          "PAC hybride (PAC + chaudière condensation gaz) : si raccordement gaz disponible, très bon compromis pour grandes maisons mal isolées",
        ],
      },
      {
        heading: "La cuve à fioul : que faire ?",
        paragraphs: [
          "Une fois la chaudière déposée, il faut traiter la cuve — souvent enterrée ou en sous-sol. Trois options :",
        ],
        list: [
          "Dégazage et neutralisation par sablage (cuve laissée sur place, inertée) : 600 à 1 200 €",
          "Dégazage et enlèvement complet : 1 200 à 2 500 € selon accès",
          "Conservation pour stocker eau de pluie (rare, mais possible si cuve métal) : 200 € de neutralisation",
        ],
        callout: {
          title: "Bon à savoir",
          body: "Cette dépose peut entrer dans le périmètre du chantier global pour bénéficier de la TVA à 5,5%. Nous coordonnons avec un partenaire agréé certifié pour gérer ça simplement.",
        },
      },
      {
        heading: "Les aides 2026 cumulées",
        paragraphs: [
          "Pour une bascule fioul → PAC air-eau, voici ce que vous pouvez espérer cumuler :",
        ],
        list: [
          "MaPrimeRénov' : 3 000 à 5 000 € selon revenus",
          "Bonus sortie de fioul : +1 000 € pour Bleu/Jaune",
          "Prime CEE Coup de pouce : 2 500 à 5 000 €",
          "TVA réduite à 5,5%",
          "Éco-PTZ jusqu'à 50 000 € pour étaler le reste à charge sans intérêts",
          "Aides locales (selon collectivité, jusqu'à 2 500 €)",
        ],
      },
      {
        heading: "La démarche concrète avec ECO CVC",
        paragraphs: [
          "Voici comment se déroule une sortie de fioul que nous traitons :",
        ],
        list: [
          "Visite technique gratuite — étude de votre installation, isolation, dimensionnement PAC",
          "Devis détaillé sous 48h avec simulation de toutes les aides cumulables",
          "Aide au dépôt MaPrimeRénov' et CEE avant signature",
          "Pose de la PAC (2-3 jours), dépose chaudière, neutralisation cuve",
          "Mise en service, remise carnet d'entretien et certificats RGE",
          "Constitution dossier MaPrimeRénov' final pour déclencher le paiement",
        ],
      },
    ],
    faq: [
      {
        q: "Vais-je être obligé de retirer ma chaudière fioul ?",
        a: "Non, pas de date d'obligation. Mais le remplacement à l'identique sera quasi-impossible aux prochaines pannes, et le fioul devient économiquement intenable. Mieux vaut anticiper.",
      },
      {
        q: "Et si ma chaudière tombe en panne en plein hiver ?",
        a: "Nous mettons en place une solution de chauffage temporaire (radiateurs électriques mobiles ou réparation provisoire) le temps de poser la PAC. Pour les contrats d'entretien, nous garantissons une intervention sous 24h.",
      },
      {
        q: "Le fioul que j'ai dans ma cuve, je peux le revendre ?",
        a: "Oui, certains revendeurs reprennent du fioul propre. Nous vous mettons en relation. À défaut, le partenaire de dépose peut récupérer le résidu pour traitement.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "vienne", "morestel", "voiron"],
    relatedServices: [
      { href: "/installation", label: "Installation pompe à chaleur" },
      { href: "/calculateur", label: "Calculer mes aides" },
    ],
  },
  {
    slug: "pompe-a-chaleur-vs-poele-a-granules",
    title: "Pompe à chaleur ou poêle à granulés : que choisir en 2026 ?",
    metaTitle: "PAC ou poêle à granulés ? Comparatif 2026 — guide ECO CVC",
    metaDescription:
      "Pompe à chaleur ou poêle à granulés : comparatif complet 2026 (prix, confort, aides, coût d'usage). Notre conseil objectif d'artisan RGE en Isère et Rhône-Alpes.",
    category: "Choisir sa PAC",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-28",
    readingMinutes: 8,
    excerpt:
      "Les deux solutions sont éligibles à MaPrimeRénov' et représentent les alternatives les plus crédibles au gaz et au fioul. Voici comment trancher selon votre maison, votre budget et vos habitudes.",
    intro: [
      "Pompe à chaleur ou poêle à granulés ? C'est probablement la deuxième question la plus posée par nos clients (après \"air-air ou air-eau\"). Les deux ont leurs forces et leurs limites — et parfois, c'est le combo des deux qui s'impose.",
    ],
    sections: [
      {
        heading: "Le poêle à granulés : autonomie et chaleur radiante",
        paragraphs: [
          "Un poêle à granulés brûle des pellets (sciures compressées) pour chauffer une pièce principale ou — avec hydraulique — l'ensemble de la maison via un réseau de radiateurs.",
          "Avantages : prix d'achat raisonnable (3 500 à 8 500 € posé), chaleur très agréable (rayonnement), indépendant du réseau électrique en cas de coupure (modèles à convection naturelle), autonomie de 1 à 5 jours selon le réservoir.",
          "Limites : nécessite stockage des sacs de granulés (5-10 m² de local sec), entretien plus contraignant (vidange du cendrier 1 fois/semaine, ramonage 2 fois/an), bruit léger du brûleur, ne refroidit pas en été.",
        ],
      },
      {
        heading: "La pompe à chaleur : la solution complète et automatique",
        paragraphs: [
          "Comme on l'a vu dans nos autres guides, la PAC (air-eau ou air-air) capte les calories de l'air pour chauffer (et parfois rafraîchir).",
          "Avantages : couvre 100% des besoins de chauffage et eau chaude, automatique sans intervention manuelle, programmation à distance, peut rafraîchir l'été, durée de vie 17-20 ans.",
          "Limites : prix plus élevé (11 000 à 19 000 € pour PAC air-eau), dépendant du courant électrique, légère baisse de COP en grand froid, unité extérieure visible.",
        ],
      },
      {
        heading: "Le tableau comparatif",
        paragraphs: [
          "Pour comparer objectivement, voici les chiffres 2026 sur une maison de 110 m² en Isère :",
        ],
        list: [
          "Investissement initial : Poêle hydraulique 9 000 € | PAC air-eau 13 500 €",
          "Reste à charge après aides (revenus modestes) : Poêle 4 500 € | PAC 4 200 €",
          "Coût annuel chauffage + ECS : Poêle 850 € (granulés + élec) | PAC 1 050 € (élec uniquement)",
          "Confort : Poêle = chaleur radiante très agréable mais inégale | PAC = température homogène, programmable",
          "Effort : Poêle = recharger et nettoyer | PAC = aucun (entretien annuel par pro)",
          "Été : Poêle = inutile | PAC réversible = climatise",
        ],
      },
      {
        heading: "Le combo qu'on recommande souvent",
        paragraphs: [
          "Pour les maisons isolées en zone forestière (Voironnais, Chartreuse, Bauges) ou pour les amateurs de feu de bois, nous recommandons souvent un combo : PAC air-eau pour le chauffage central + poêle à granulés (ou bûches) en appoint dans le séjour.",
          "Avantages : redondance énergétique (si une source manque, l'autre prend le relais), confort rayonnant dans la pièce de vie, économies sur la pointe d'hiver (la PAC peut être pilotée pour s'effacer quand le poêle tourne).",
        ],
      },
      {
        heading: "Notre conseil par profil",
        paragraphs: [
          "Voici comment nous orientons nos clients :",
        ],
        list: [
          "Maison < 100 m² bien isolée, propriétaire absent en journée : PAC air-eau seule",
          "Maison 100-150 m² avec séjour cathédrale, présence en journée : PAC + poêle d'appoint",
          "Maison > 150 m² mal isolée, zone forestière, autonomie recherchée : poêle hydraulique principal",
          "Besoin de climatisation en été : PAC obligatoirement",
          "Coupures électriques fréquentes : poêle à convection naturelle en sécurité",
        ],
      },
    ],
    faq: [
      {
        q: "Le poêle à granulés est-il aussi bien aidé que la PAC ?",
        a: "Quasiment : MaPrimeRénov' jusqu'à 4 000 € pour le poêle hydraulique, plus la prime CEE. La PAC reçoit un peu plus en cas de sortie de fioul.",
      },
      {
        q: "Peut-on chauffer toute la maison avec un seul poêle ?",
        a: "Oui mais sous conditions : maison ouverte (pas de cloisons), surface < 80 m² ou poêle hydraulique relié aux radiateurs. Sinon les pièces éloignées resteront froides.",
      },
      {
        q: "Vous installez aussi des poêles à granulés ?",
        a: "ECO CVC est spécialisé PAC et CVC ; pour les poêles, nous travaillons avec des partenaires de confiance et coordonnons les chantiers combinés PAC + poêle.",
      },
    ],
    relatedCities: ["voiron", "chambery", "morestel", "la-tour-du-pin"],
    relatedServices: [
      { href: "/installation", label: "Installation pompe à chaleur" },
      { href: "/contact", label: "Demander conseil" },
    ],
  },
  {
    slug: "climatisation-appartement-copropriete",
    title: "Climatisation en appartement : démarches en copropriété (2026)",
    metaTitle: "Climatisation appartement copropriété — accord syndic, démarches",
    metaDescription:
      "Installer une climatisation en appartement copropriété : ce que la loi autorise, les démarches en AG, les solutions sans accord syndic. Guide ECO CVC pour Lyon, Grenoble, Vienne et Rhône-Alpes.",
    category: "Pratique",
    publishedAt: "2026-03-28",
    updatedAt: "2026-04-28",
    readingMinutes: 7,
    excerpt:
      "Avant de signer un devis pour climatiser votre appartement, il y a un détour obligé : l'assemblée générale de copropriété. Voici ce qui est faisable, ce qui demande accord, et les solutions légales sans rien demander.",
    intro: [
      "À Lyon, Grenoble, Villeurbanne, Vienne — les demandes de climatisation en appartement explosent depuis les canicules de 2022 et 2024. Mais une majorité de prospects qui nous appellent ne savent pas qu'il faut presque toujours passer par l'assemblée générale du syndicat des copropriétaires. Voici les règles 2026.",
    ],
    sections: [
      {
        heading: "Pourquoi la copropriété a son mot à dire",
        paragraphs: [
          "Une climatisation split classique nécessite une unité extérieure posée sur la façade, le balcon, la terrasse ou en toiture. Or, l'aspect extérieur du bâtiment est un élément collectif : toute modification visible relève du règlement de copropriété et doit être votée en AG.",
          "C'est l'article 25 (et parfois 26) de la loi du 10 juillet 1965 qui s'applique : majorité simple ou majorité absolue selon la nature des travaux et les termes du règlement.",
        ],
      },
      {
        heading: "Le processus en AG",
        paragraphs: [
          "Concrètement, voici comment se passe une demande de pose en copropriété :",
        ],
        list: [
          "Étape 1 — Demande au syndic d'inscrire le point à l'ordre du jour de la prochaine AG (au moins 2 mois avant)",
          "Étape 2 — Joindre un dossier technique : plans 2D de l'emplacement, fiche technique du matériel, mesure du niveau sonore, photo simulée",
          "Étape 3 — Vote en AG (majorité simple si simple aspect, majorité absolue si modification de gros œuvre)",
          "Étape 4 — Procès-verbal d'AG = autorisation officielle, à conserver",
          "Étape 5 — Pose par artisan (qui doit respecter strictement les conditions votées)",
        ],
        callout: {
          title: "Notre service inclus",
          body: "ECO CVC fournit à tous ses prospects en copropriété un dossier complet \"prêt pour AG\" : plans, mesures acoustiques, fiches techniques, exemple de résolution. C'est ce qui fait la différence entre un vote accepté du premier coup et une demande recalée.",
        },
      },
      {
        heading: "Les arguments qui font passer le vote",
        paragraphs: [
          "Pour maximiser les chances de validation :",
        ],
        list: [
          "Choisir une unité extérieure < 38 dB (modèle silencieux) : les voisins ne peuvent plus dire \"ça va faire du bruit\"",
          "Proposer un emplacement non visible depuis la rue (cour intérieure, balcon arrière)",
          "Si possible, masquage par claustra bois ou habillage RAL teinté",
          "Engagement écrit de remise en état en cas de revente",
          "Citer l'article L.111-7-1 du Code de la construction (droit à un logement décent face à la chaleur)",
        ],
      },
      {
        heading: "Les solutions sans accord syndic",
        paragraphs: [
          "Si votre AG refuse, ou si vous voulez éviter toute la procédure, voici les options légales :",
        ],
        list: [
          "Climatisation mobile à roulettes (avec gaine d'évacuation par la fenêtre) — efficacité limitée mais 100% libre",
          "Climatisation monobloc fenêtre (un seul bloc encastré dans une baie) — autorisée si \"sans modification de l'aspect extérieur\"",
          "Brasseur d'air plafond — efficace en été, aucune autorisation nécessaire",
          "Rafraîchisseur d'air par évaporation — utile mais peu performant en climat humide",
        ],
      },
      {
        heading: "Cas particulier des immeubles classés",
        paragraphs: [
          "À Lyon Vieux Lyon, Presqu'île, ou dans les centres anciens de Vienne, Grenoble — la zone ABF (Architecte des Bâtiments de France) ajoute une couche : déclaration préalable obligatoire en plus de l'accord copropriété.",
          "Délai supplémentaire : 1-2 mois. Mais 80% des dossiers passent si l'unité extérieure est invisible depuis l'espace public.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps faut-il entre la demande et l'installation ?",
        a: "Comptez 4 à 8 mois en copropriété : 2 mois avant l'AG (envoi de la demande), 2-4 mois après le vote pour les délais administratifs et la pose. Hors période chaude, c'est moins tendu.",
      },
      {
        q: "Mon syndic refuse de mettre la question à l'ordre du jour ?",
        a: "Il y est obligé sur demande écrite. Envoyez votre demande en LRAR, c'est légalement opposable.",
      },
      {
        q: "Et si je suis le seul propriétaire à vouloir une clim, ça passe ?",
        a: "Statistiquement, dans 70% des cas oui — les copropriétaires votent en pensant qu'ils en voudront aussi un jour. Notre dossier technique aide énormément.",
      },
    ],
    relatedCities: ["lyon", "villeurbanne", "grenoble", "vienne"],
    relatedServices: [
      { href: "/installation", label: "Installation climatisation" },
      { href: "/contact", label: "Demander conseil copropriété" },
    ],
  },
  {
    slug: "vmc-double-flux-2026",
    title: "VMC double flux : prix, avantages et aides en 2026",
    metaTitle: "VMC double flux 2026 — prix, avantages, MaPrimeRénov' [guide]",
    metaDescription:
      "Tout savoir sur la VMC double flux en 2026 : principe, économies de chauffage, prix posé, aides MaPrimeRénov' et CEE. Guide ECO CVC, installateur ventilation en Isère.",
    category: "Choisir sa PAC",
    publishedAt: "2026-03-15",
    updatedAt: "2026-04-28",
    readingMinutes: 7,
    excerpt:
      "La VMC double flux est l'investissement caché qui fait baisser de 15-25% la facture de chauffage d'une maison rénovée. Encore faut-il qu'elle soit bien dimensionnée et bien posée.",
    intro: [
      "On en parle moins que des PAC, mais la VMC double flux est l'un des leviers les plus rentables d'une rénovation énergétique sérieuse. Le principe : récupérer 80-90% de la chaleur de l'air sortant pour préchauffer l'air entrant, sans courant d'air ni perte d'énergie.",
    ],
    sections: [
      {
        heading: "Différence VMC simple flux vs double flux",
        paragraphs: [
          "Une VMC simple flux extrait l'air vicié des pièces humides (cuisine, salle de bain, WC) et laisse l'air frais entrer par des grilles dans les chambres et le séjour. Simple, peu coûteux, mais on perd toute la chaleur de l'air rejeté.",
          "Une VMC double flux fonctionne en circuit fermé : l'air sortant traverse un échangeur thermique qui récupère sa chaleur pour la transférer à l'air entrant filtré. Le résultat : air neuf à ~18 °C en hiver au lieu de 0-5 °C.",
        ],
      },
      {
        heading: "Combien ça coûte en 2026",
        paragraphs: [
          "Les prix posé d'une VMC double flux dépendent surtout de la complexité du réseau de gaines :",
        ],
        list: [
          "VMC double flux maison neuve (gaines en attente) : 4 500 à 6 500 € posé",
          "VMC double flux rénovation maison plain-pied : 5 500 à 8 000 € posé",
          "VMC double flux rénovation maison étagée : 7 000 à 10 500 € posé",
          "VMC double flux thermodynamique (avec mini-PAC intégrée) : 8 000 à 12 000 € posé",
        ],
      },
      {
        heading: "Aides 2026 pour une VMC double flux",
        paragraphs: [
          "Bonne nouvelle, la VMC double flux est éligible à plusieurs dispositifs :",
        ],
        list: [
          "MaPrimeRénov' : 2 500 € (Bleu), 2 000 € (Jaune), 1 500 € (Violet) — non éligible Rose hors parcours accompagné",
          "Prime CEE : 200 à 800 € selon revenus et zone climatique",
          "TVA réduite à 5,5% sur le matériel et la main d'œuvre",
          "Éco-PTZ inclus si combiné avec un autre geste de rénovation",
        ],
      },
      {
        heading: "Quand c'est rentable",
        paragraphs: [
          "Une VMC double flux est particulièrement rentable si :",
        ],
        list: [
          "Vous rénovez l'isolation (sinon les pertes par défaut d'étanchéité annulent les gains)",
          "Votre maison est étanche à l'air (test infiltrométrie < 1,5 m³/h.m²)",
          "Vous restez 5+ ans dans le logement (amortissement 6-10 ans)",
          "Vous êtes sensible à la qualité de l'air (allergies, pollution urbaine)",
          "Vous combinez avec PAC : la VMC double flux thermodynamique récupère encore plus d'énergie",
        ],
      },
      {
        heading: "Limites et attention",
        paragraphs: [
          "Une VMC double flux mal posée perd 80% de son intérêt. Les pièges fréquents :",
        ],
        list: [
          "Maison non étanche : l'air entre par des fuites au lieu de passer par l'échangeur",
          "Gaines mal isolées : récupération de chaleur diminuée",
          "Filtres non remplacés (tous les 6-12 mois) : débit d'air et qualité dégradés",
          "Caisson placé en zone non chauffée (combles non isolés) : pertes",
        ],
      },
    ],
    faq: [
      {
        q: "VMC double flux ou puits canadien ?",
        a: "Le puits canadien préchauffe l'air par le sol (10-15 °C constants). Combiné à une VMC double flux, c'est la solution ultime — mais 5 000 à 10 000 € de plus, rentabilisé sur 15-20 ans.",
      },
      {
        q: "Le bruit, c'est gênant ?",
        a: "Une VMC double flux moderne tourne à 25-30 dB en débit normal. Le caisson est généralement placé dans les combles ou un local technique, donc imperceptible dans les pièces.",
      },
      {
        q: "Faut-il l'arrêter en été ?",
        a: "Non, surtout pas. Beaucoup de modèles ont un bypass été qui désactive l'échange thermique pour rafraîchir la maison la nuit. C'est un avantage net.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "grenoble", "voiron"],
    relatedServices: [
      { href: "/ventilation", label: "Notre service ventilation" },
      { href: "/contact", label: "Devis VMC double flux" },
    ],
  },
  {
    slug: "bruit-pompe-a-chaleur",
    title: "Bruit d'une pompe à chaleur : règles 2026 et solutions concrètes",
    metaTitle: "Bruit pompe à chaleur — réglementation, dB, solutions [2026]",
    metaDescription:
      "Niveau sonore d'une pompe à chaleur : réglementation, dB par modèle, distance aux voisins, solutions anti-bruit (plots, écran, emplacement). Guide ECO CVC.",
    category: "Pratique",
    publishedAt: "2026-02-25",
    updatedAt: "2026-04-28",
    readingMinutes: 6,
    excerpt:
      "L'inquiétude n°1 des prospects PAC : et le bruit pour les voisins ? Voici la vérité technique, la loi, et les vraies solutions qui marchent.",
    intro: [
      "Sur 10 prospects PAC, 7 nous posent la question du bruit dès la première visite. C'est légitime : il y a eu des installations bâclées par le passé qui ont créé des conflits de voisinage. Avec un matériel moderne et une pose soignée, le problème est résolu en 2026 — voici comment.",
    ],
    sections: [
      {
        heading: "Ce que dit la réglementation",
        paragraphs: [
          "L'arrêté du 5 décembre 2006 et le Code de la santé publique (article R.1334-30) imposent des seuils précis pour les bruits de voisinage. En zone résidentielle, l'émergence sonore (différence entre bruit de fond et bruit avec PAC en marche) ne doit pas dépasser :",
        ],
        list: [
          "Période diurne (7h-22h) : +5 dB par rapport au bruit ambiant",
          "Période nocturne (22h-7h) : +3 dB seulement",
          "Mesure prise en limite de propriété, fenêtre du voisin la plus exposée",
        ],
        callout: {
          title: "À retenir",
          body: "+3 dB la nuit, c'est très restrictif. C'est pour cela que choisir une PAC moderne ≤ 38 dB et bien la positionner est crucial. Un mauvais choix peut devenir un cauchemar juridique.",
        },
      },
      {
        heading: "Niveau sonore des PAC modernes",
        paragraphs: [
          "Les PAC haut de gamme 2026 ont fait d'énormes progrès. Voici les ordres de grandeur à 1 m de l'unité extérieure :",
        ],
        list: [
          "PAC air-eau silencieuses (Daikin Altherma, Mitsubishi Ecodan) : 35-40 dB en mode silence nuit",
          "PAC air-eau standard : 45-55 dB",
          "PAC air-air monosplit moderne : 38-44 dB unité ext.",
          "Pour comparer : une conversation normale = 60 dB, un réfrigérateur = 40 dB, une chambre la nuit = 30 dB",
        ],
      },
      {
        heading: "Les 6 règles d'or pour une PAC silencieuse",
        paragraphs: [
          "Notre check-list lors de chaque pose :",
        ],
        list: [
          "Choisir un modèle ≤ 40 dB en mode \"silence\" (vérifier la fiche technique sous régime nominal, pas en mode silencieux temporaire)",
          "Distance ≥ 3 m de la fenêtre du voisin la plus proche (gros confort, mais 1,5 m peut suffire avec écran)",
          "Pose sur plots anti-vibrations (caoutchouc ou ressorts) — jamais directement au sol",
          "Éviter les coins et angles de mur qui créent un effet de réflexion sonore",
          "Activer le mode \"nuit silencieux\" automatique de 22h à 7h (toutes les PAC modernes l'ont)",
          "Installer un écran acoustique (panneau bois ou métal absorbant) si distance < 2 m du voisin",
        ],
      },
      {
        heading: "Solutions si la PAC est déjà installée et bruyante",
        paragraphs: [
          "Si vous nous appelez avec une PAC d'un autre installateur qui crée du bruit, voici les leviers :",
        ],
        list: [
          "Reposer sur plots anti-vibrations si ce n'est pas le cas (200 à 400 €)",
          "Installer un caisson acoustique autour de l'unité ext. (600 à 1 200 €)",
          "Remplacer le ventilateur par un modèle EC silencieux (à voir avec le constructeur)",
          "En dernier recours : déplacement de l'unité (1 500 à 3 000 €)",
        ],
      },
      {
        heading: "Que faire si un voisin se plaint",
        paragraphs: [
          "La marche à suivre raisonnable :",
        ],
        list: [
          "Faire mesurer objectivement par un acousticien indépendant (300-500 €)",
          "Si dépassement réel des seuils : agir techniquement (plots, écran, mode silence)",
          "Si conformité prouvée : la plainte n'a pas de base juridique, mais autant arranger le voisinage si possible",
          "Médiation locale (mairie, conciliateur de justice) avant tribunal",
        ],
      },
    ],
    faq: [
      {
        q: "Mon voisin a installé une PAC bruyante, que faire ?",
        a: "Demandez une mesure acoustique. Si l'émergence dépasse +5 dB jour ou +3 dB nuit, vous pouvez exiger une mise en conformité. La mairie a un pouvoir de police en bruit de voisinage.",
      },
      {
        q: "La PAC est-elle plus bruyante en hiver ?",
        a: "Légèrement, oui — quand la PAC dégivre (cycles courts en grand froid), le ventilateur tourne plus fort. Mais cela reste dans les limites réglementaires si l'installation est conforme.",
      },
      {
        q: "Vous mesurez le bruit avant pose ?",
        a: "Pour les cas sensibles (mitoyenneté, copropriété, ABF), oui — nous fournissons une étude acoustique prévisionnelle. C'est ce qui sécurise les dossiers d'AG.",
      },
    ],
    relatedCities: ["lyon", "villeurbanne", "grenoble", "vienne"],
    relatedServices: [
      { href: "/installation", label: "Installation pompe à chaleur" },
      { href: "/maintenance", label: "Service maintenance" },
    ],
  },
  {
    slug: "pompe-a-chaleur-piscine",
    title: "Pompe à chaleur piscine : prix, choix et installation en 2026",
    metaTitle: "Pompe à chaleur piscine 2026 — prix, COP, choix [guide ECO CVC]",
    metaDescription:
      "PAC piscine 2026 : prix, calcul de la puissance selon le volume, COP, modèles inverter, installation. Guide pour piscines en Isère et Rhône-Alpes par ECO CVC.",
    category: "Choisir sa PAC",
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-28",
    readingMinutes: 7,
    excerpt:
      "Allonger la saison de baignade de 2 à 4 mois sans exploser sa facture : c'est ce que permet une pompe à chaleur piscine bien dimensionnée. Voici comment choisir.",
    intro: [
      "À partir de mai, le téléphone d'ECO CVC sonne pour les PAC piscine. Le timing est bon : posée en mai, la PAC est rentable dès la première saison. Mais entre les modèles à 600 € qu'on trouve sur Internet et les unités professionnelles à 6 000 €, il y a un monde — et un mauvais choix se paie en consommation électrique.",
    ],
    sections: [
      {
        heading: "Comment fonctionne une PAC piscine",
        paragraphs: [
          "Le principe est identique à une PAC chauffage : capter les calories de l'air ambiant pour les transférer à l'eau de la piscine via un échangeur titane (résistant au chlore et sel).",
          "À la différence d'une PAC chauffage maison, la PAC piscine fonctionne sur des écarts de température faibles (passer de 18 °C à 28 °C) et peut donc afficher des COP exceptionnels — souvent 5 à 7 contre 3-4 pour une PAC chauffage.",
        ],
      },
      {
        heading: "Calculer la puissance nécessaire",
        paragraphs: [
          "La règle simplifiée : 0,2 kW de PAC par m³ d'eau pour une montée en température raisonnable (1 °C/jour). Pour des montées plus rapides ou des bassins exposés au vent, monter à 0,3 kW/m³.",
        ],
        list: [
          "Piscine 30 m³ (5 × 3 × 1,5 m) : PAC 6 à 9 kW, prix posé 1 800 à 2 800 €",
          "Piscine 50 m³ (8 × 4 × 1,5 m) : PAC 10 à 15 kW, prix posé 2 600 à 4 200 €",
          "Piscine 75 m³ (10 × 5 × 1,5 m) : PAC 16 à 21 kW, prix posé 3 800 à 5 800 €",
          "Piscine 100 m³+ : PAC 21 kW+ ou solution multi-PAC, sur devis",
        ],
        callout: {
          title: "Bonus inverter",
          body: "Privilégier une PAC inverter (à puissance variable) plutôt qu'on/off : 30 à 40% d'économies électriques, fonctionnement silencieux, durée de vie supérieure. Surcoût d'achat amorti en 1-2 saisons.",
        },
      },
      {
        heading: "Les 4 critères qui changent tout",
        paragraphs: [
          "Au-delà de la puissance brute, voici ce qu'il faut regarder :",
        ],
        list: [
          "COP à 15 °C / 24 °C eau : doit être ≥ 5 pour une PAC moderne. Méfiance des fiches techniques qui n'indiquent que le COP à 28 °C (mensonger)",
          "Plage de fonctionnement : tient-elle jusqu'à 5 °C ? 0 °C ? Important pour étendre la saison à mai et septembre",
          "Niveau sonore : ≤ 40 dB à 10 m est souhaitable (sinon nuisance pour les voisins et les soirées piscine)",
          "Échangeur titane (pas inox) : obligatoire pour piscines au sel ou avec traitement chlore intensif",
        ],
      },
      {
        heading: "Installation : ce qui se passe sur site",
        paragraphs: [
          "Une PAC piscine s'installe en 1/2 à 1 journée :",
        ],
        list: [
          "Pose sur dalle béton à proximité du local technique (5 à 15 m max idéalement)",
          "Raccordement hydraulique : départ et retour vers le filtre via vannes 3 voies (la PAC ne tourne pas H24)",
          "Raccordement électrique 230V monophasé pour les petites, 400V triphasé pour les grosses",
          "Programmation horaire pour optimiser tarifs heures creuses",
          "Mise en service avec contrôle pression et calibrage thermostat",
        ],
      },
      {
        heading: "Coût d'usage réel",
        paragraphs: [
          "Pour une piscine 50 m³ chauffée à 28 °C de mai à septembre en Isère, avec une PAC inverter de 12 kW (COP moyen 6) :",
        ],
        list: [
          "Consommation saison : ~1 200 à 1 800 kWh",
          "Coût annuel : 240 à 360 € (tarif réglementé 0,20 €/kWh 2026)",
          "Vs réchauffeur électrique direct : 6x plus cher (≈ 1 500 € la même saison)",
          "Vs absence de chauffage : saison utile passe de 2 mois à 5 mois",
        ],
      },
    ],
    faq: [
      {
        q: "Quand allumer la PAC piscine en début de saison ?",
        a: "Dès que l'eau dépasse 12 °C (généralement fin avril en Isère). En dessous, la PAC s'use plus vite. Combinez avec une bâche à bulles pour limiter les pertes nocturnes.",
      },
      {
        q: "Bâche à bulles : indispensable ?",
        a: "Oui, c'est l'investissement le plus rentable de tous. Une bâche à bulles divise par 2 les besoins de chauffage (les pertes par évaporation sont énormes). 200 € qui économisent 200 €/an sur l'élec.",
      },
      {
        q: "PAC piscine ou réchauffeur électrique ?",
        a: "PAC : 6 fois moins cher à l'usage, mais 4 fois plus cher à l'achat. Rentable en 2-3 saisons d'utilisation normale.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne", "morestel", "meyzieu"],
    relatedServices: [{ href: "/contact", label: "Devis PAC piscine" }],
  },
  {
    slug: "entretien-pompe-a-chaleur-obligatoire",
    title: "Entretien d'une pompe à chaleur : obligatoire, prix, ce qui est contrôlé",
    metaTitle: "Entretien pompe à chaleur — obligatoire, prix, ce qui est contrôlé",
    metaDescription:
      "Entretien annuel d'une pompe à chaleur : obligatoire ou non, ce qui est contrôlé, prix 2026, sanctions. Service maintenance ECO CVC, RGE QualiPAC en Isère et Rhône-Alpes.",
    category: "Pratique",
    publishedAt: "2026-03-30",
    updatedAt: "2026-04-28",
    readingMinutes: 5,
    excerpt:
      "Depuis le décret 2020-912, l'entretien des PAC > 4 kW est obligatoire tous les 2 ans. Ce qui est vérifié, le coût, et ce qu'on risque à ne pas le faire.",
    intro: [
      "C'est une question qu'on nous pose à chaque appel SAV : \"l'entretien, c'est vraiment obligatoire ?\". Réponse courte : oui, depuis 2020. Voici la réponse longue.",
    ],
    sections: [
      {
        heading: "Ce que dit la loi (décret 2020-912)",
        paragraphs: [
          "Le décret du 28 juillet 2020 impose un entretien des pompes à chaleur de puissance > 4 kW et < 70 kW, par un professionnel qualifié, **tous les 2 ans**. Cela couvre la quasi-totalité des PAC résidentielles : air-air, air-eau, géothermique.",
          "Le professionnel doit remettre une attestation d'entretien que vous devez conserver 2 ans. Cette attestation est à présenter en cas de contrôle ou de revente du logement.",
        ],
      },
      {
        heading: "Ce qui est contrôlé pendant l'entretien",
        paragraphs: [
          "Une visite d'entretien dure 1 à 2h selon le matériel. Les points obligatoires :",
        ],
        list: [
          "Vérification de l'étanchéité du circuit frigorifique (pas de fuite de fluide frigorigène)",
          "Mesure des performances thermodynamiques (COP en marche)",
          "Nettoyage des échangeurs intérieur et extérieur",
          "Contrôle du débit d'air (filtres, ventilateur)",
          "Vérification des protections électriques",
          "Contrôle du circuit hydraulique (PAC air-eau) : pression, vase d'expansion, soupapes",
          "Conseils d'utilisation et bonnes pratiques",
        ],
      },
      {
        heading: "Prix 2026 d'un entretien PAC",
        paragraphs: [
          "Les fourchettes constatées sur le marché en Isère et Rhône-Alpes :",
        ],
        list: [
          "Visite ponctuelle PAC air-eau ≤ 16 kW : 150 à 250 € TTC",
          "Visite ponctuelle PAC air-air mono ou bi-split : 130 à 200 € TTC",
          "Visite ponctuelle PAC air-air multi-split (≥ 4 unités) : 200 à 320 € TTC",
          "Contrat d'entretien annuel (1 visite + dépannages prioritaires) : 180 à 280 €/an",
          "Contrat 2 ans (1 visite annuelle + main d'œuvre dépannage incluse) : 350 à 480 €",
        ],
      },
      {
        heading: "Pourquoi le contrat d'entretien vaut le coup",
        paragraphs: [
          "Au-delà de la conformité légale :",
        ],
        list: [
          "Garantie constructeur préservée : la plupart des marques exigent une preuve d'entretien annuel pour appliquer la garantie pièces (5-10 ans)",
          "Performances maintenues : un échangeur sale = 15-25% de surconsommation invisible sur la facture",
          "Détection précoce de pannes : une fuite de fluide d'1 g par jour devient une panne grave en 2 ans, une révision la repère immédiatement",
          "Priorité dépannage : nos clients sous contrat sont vus sous 24-48h, hors contrat 5-10 jours en saison",
        ],
      },
      {
        heading: "Que se passe-t-il si on ne le fait pas ?",
        paragraphs: [
          "Pas de contrôle systématique aujourd'hui, mais plusieurs risques concrets :",
        ],
        list: [
          "Refus de prise en charge constructeur en cas de panne (garantie annulée)",
          "Refus assureur en cas de sinistre lié (incendie, dégât des eaux)",
          "Sanction en cas de contrôle DGCCRF : amende jusqu'à 750 €",
          "Risque revente : un acquéreur peut exiger l'attestation, faute de quoi le prix baisse ou la vente échoue",
        ],
      },
    ],
    faq: [
      {
        q: "L'entretien d'une PAC inférieure à 4 kW est-il obligatoire ?",
        a: "Légalement non. Mais la garantie constructeur l'impose souvent. Et techniquement, la PAC perd quand même en performance sans entretien.",
      },
      {
        q: "Puis-je faire l'entretien moi-même ?",
        a: "Non — l'attestation doit être délivrée par un pro qualifié, et toute manipulation du fluide frigorigène est réservée aux titulaires d'une attestation F-Gaz (que nous avons).",
      },
      {
        q: "Quand prendre rendez-vous ?",
        a: "Idéalement en mars-avril pour les PAC réversibles (avant la saison clim) ou octobre-novembre pour les PAC chauffage. Cela évite les rushs de saison.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne", "saint-priest"],
    relatedServices: [
      { href: "/maintenance", label: "Notre service maintenance" },
      { href: "/contact", label: "Demander un contrat" },
    ],
  },
  {
    slug: "daikin-mitsubishi-atlantic-quelle-marque-pac",
    title: "Daikin, Mitsubishi, Atlantic : quelle marque de pompe à chaleur en 2026",
    metaTitle: "Daikin vs Mitsubishi vs Atlantic : quelle PAC choisir en 2026",
    metaDescription:
      "Comparatif marques de pompe à chaleur 2026 : Daikin, Mitsubishi Electric, Atlantic, AUX. Forces, prix, garanties, retours d'expérience artisan ECO CVC en Isère.",
    category: "Choisir sa PAC",
    publishedAt: "2026-03-12",
    updatedAt: "2026-04-28",
    readingMinutes: 8,
    excerpt:
      "On nous demande sans arrêt \"quelle marque vous recommandez ?\". Voici notre vrai avis terrain — sans clientélisme — sur les 4 marques que nous installons le plus.",
    intro: [
      "La fiche technique d'une PAC de 12 kW chez Daikin ressemble à celle d'une Mitsubishi : COP, ETAS, plage de fonctionnement… presque identique sur le papier. Mais sur 10 ans d'usage, les différences réelles apparaissent : fiabilité, SAV, pièces détachées, durabilité. Voici ce que nous voyons sur le terrain.",
    ],
    sections: [
      {
        heading: "Daikin : la référence haut de gamme",
        paragraphs: [
          "Marque japonaise qui domine le marché européen de la PAC haut de gamme. Leur gamme Altherma (air-eau) et leurs splits réversibles sont chez nous les plus demandés.",
          "Forces : performance constante sur 15-20 ans, SAV réactif (pièces sous 48h en France), interface utilisateur claire, modèles très silencieux (≤ 35 dB en mode nuit).",
          "Limites : prix d'achat 15-25% plus élevé que la moyenne, certains modèles complexes nécessitent un installateur formé (pas tous les artisans).",
        ],
      },
      {
        heading: "Mitsubishi Electric : l'alternative équivalente",
        paragraphs: [
          "Concurrent direct de Daikin sur le créneau premium. Leurs gammes Ecodan (air-eau) et Multi-split sont au coude à coude.",
          "Forces : excellente fiabilité, plage de fonctionnement étendue (-20 °C garantis), garantie constructeur 5 à 7 ans selon modèle, application MELCloud très complète.",
          "Limites : tarif équivalent à Daikin (premium), distribution réseau plus serrée — moins d'artisans formés en zone rurale.",
        ],
      },
      {
        heading: "Atlantic : la marque française grand public",
        paragraphs: [
          "Marque française historique (chauffe-eau Atlantic) qui a gagné le marché PAC. Très bon rapport qualité-prix sur le milieu de gamme.",
          "Forces : prix 20-30% inférieurs à Daikin/Mitsubishi à performance équivalente, SAV national rapide, gamme adaptée à la rénovation française.",
          "Limites : niveau sonore légèrement supérieur, durabilité observée 12-15 ans contre 17-20 ans chez les japonais sur des cas comparables.",
        ],
      },
      {
        heading: "AUX : le challenger qui monte",
        paragraphs: [
          "Marque chinoise (groupe AUX, 30 milliards de dollars de CA) très présente sur le marché européen depuis 2020. Notre revendeur principal en climatisation.",
          "Forces : tarif imbattable (50-60% du prix Daikin), fiabilité moderne (compresseurs Mitsubishi sous-traités), gamme R32 complète.",
          "Limites : SAV réseau encore en construction, image moins prestigieuse à la revente immobilière, garantie 3-5 ans plus courte.",
        ],
        callout: {
          title: "Notre offre AUX",
          body: "ECO CVC propose AUX en première gamme accessible, et Daikin/Mitsubishi en montée de gamme. Le client choisit le compromis prix/durabilité qui lui convient — nous installons les deux mondes avec la même rigueur.",
        },
      },
      {
        heading: "Comment choisir vraiment",
        paragraphs: [
          "Notre méthode pour orienter nos prospects :",
        ],
        list: [
          "Si projet à 5 ans (revente prévue) : Atlantic ou AUX — pas la peine de surinvestir",
          "Si projet 15-20 ans (résidence principale long terme) : Daikin ou Mitsubishi, l'écart de prix se rentabilise sur la durée",
          "Si zone climatique froide (Voiron, Chambéry, Annecy) : Mitsubishi Ecodan plage étendue ou Daikin Altherma 3 H HT",
          "Si budget serré et besoin urgent : AUX en multi-split réversible, on installe en 1 jour",
          "Si esthétique premium intérieur : Daikin Stylish ou Mitsubishi Kirigamine, design plus soigné",
        ],
      },
    ],
    faq: [
      {
        q: "Toshiba, Panasonic, Hitachi : pourquoi vous n'en parlez pas ?",
        a: "On les installe à la demande, mais elles sont moins fréquentes en rénovation française. Leurs gammes air-eau sont bonnes mais leur réseau de pièces détachées est plus difficile en zone rurale.",
      },
      {
        q: "Une PAC 'no-name' à 50% du prix, mauvaise idée ?",
        a: "Oui dans la plupart des cas. Pas pour la performance première année (souvent OK), mais pour la durabilité, le SAV, et les pièces 5-10 ans après. Une PAC qui doit être remplacée à 8 ans coûte plus cher au final.",
      },
      {
        q: "AUX ou Daikin pour un investissement locatif ?",
        a: "AUX. Le locataire ne fait pas la différence, vous gardez 4 000-6 000 € de marge sur un T3 par exemple. Mais comptez un remplacement à 12-15 ans plutôt que 18-20.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne"],
    relatedServices: [
      { href: "/produits", label: "Voir notre gamme AUX" },
      { href: "/installation", label: "Devis installation" },
    ],
  },
  {
    slug: "coup-de-pouce-chauffage-2026",
    title: "Coup de pouce chauffage 2026 : montants, conditions, cumul aides",
    metaTitle: "Coup de pouce chauffage 2026 — PAC, montants, conditions",
    metaDescription:
      "Coup de pouce chauffage 2026 (Certificats d'Économies d'Énergie) : montants pour PAC air-eau et géothermique, conditions, cumul MaPrimeRénov'. Guide ECO CVC.",
    category: "Aides",
    publishedAt: "2026-02-05",
    updatedAt: "2026-04-28",
    readingMinutes: 5,
    excerpt:
      "Le Coup de pouce chauffage est une déclinaison \"musclée\" de la prime CEE. Pour un remplacement de chaudière par une PAC, il peut atteindre 5 000 € — cumulables avec MaPrimeRénov'.",
    intro: [
      "Le \"Coup de pouce chauffage\" est un dispositif spécifique aux Certificats d'Économies d'Énergie qui majore les primes pour certains gestes prioritaires : remplacer une chaudière fossile par une PAC ou par une chaudière biomasse. Il est reconduit en 2026 avec quelques ajustements.",
    ],
    sections: [
      {
        heading: "Qui peut en bénéficier en 2026",
        paragraphs: [
          "Le Coup de pouce s'adresse à tous les ménages, propriétaires occupants ou bailleurs, dans une résidence principale construite depuis plus de 2 ans. Aucune exclusion par revenus — mais le montant varie.",
          "Le seul critère technique : remplacer une chaudière au charbon, fioul, ou gaz (sauf à condensation < 25 ans), par une PAC air-eau, géothermique, ou un système solaire combiné.",
        ],
      },
      {
        heading: "Les montants 2026",
        paragraphs: [
          "Pour le remplacement d'une chaudière par une PAC :",
        ],
        list: [
          "PAC air-eau, ménages très modestes (Bleu) : 5 000 €",
          "PAC air-eau, ménages modestes (Jaune) : 4 500 €",
          "PAC air-eau, ménages classiques (Violet) : 3 000 €",
          "PAC air-eau, ménages aisés (Rose) : 2 500 €",
          "PAC géothermique : ajout de 1 000 € sur ces montants",
          "Sortie de chaudière fioul : ajout de 1 200 € forfaitaire",
        ],
        callout: {
          title: "Cas le plus avantageux",
          body: "Ménage très modeste, sortie de fioul vers PAC géothermique : 5 000 + 1 000 + 1 200 = 7 200 € de Coup de pouce. + MaPrimeRénov' Bleu géothermique 11 000 €. Soit jusqu'à 18 200 € d'aides cumulées.",
        },
      },
      {
        heading: "Comment l'obtenir",
        paragraphs: [
          "Le Coup de pouce s'obtient via les mandataires CEE — les mêmes que pour la prime CEE classique :",
        ],
        list: [
          "Étape 1 : choisir un mandataire (EDF Prime Énergie, TotalEnergies, Engie…)",
          "Étape 2 : déposer le devis non signé d'un artisan RGE QualiPAC",
          "Étape 3 : recevoir l'attestation Coup de pouce (24-72h)",
          "Étape 4 : signer le devis et faire poser",
          "Étape 5 : envoyer la facture acquittée + attestation",
          "Étape 6 : virement sous 3-6 semaines",
        ],
      },
      {
        heading: "Cumul avec MaPrimeRénov'",
        paragraphs: [
          "Le cumul est total : Coup de pouce + MaPrimeRénov' s'additionnent intégralement, dans la limite de 100% du coût des travaux. En pratique, on n'atteint jamais ce plafond — les aides cumulées plafonnent en général à 50-80% du projet selon le profil.",
        ],
      },
    ],
    faq: [
      {
        q: "Coup de pouce et prime CEE classique : c'est la même chose ?",
        a: "Le Coup de pouce est une catégorie spéciale de la prime CEE, avec montants majorés pour certains gestes. Le mandataire applique automatiquement le bonus si vous êtes éligible.",
      },
      {
        q: "Et si j'ai déjà une PAC, le Coup de pouce s'applique ?",
        a: "Non. Le Coup de pouce ne couvre que le remplacement d'une chaudière fossile par une PAC. Le simple ajout d'une PAC en complément n'est pas éligible.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "morestel", "vienne", "voiron"],
    relatedServices: [
      { href: "/calculateur", label: "Estimer toutes les aides" },
      { href: "/installation", label: "Demander un devis PAC" },
    ],
  },
  {
    slug: "climatisation-gainable",
    title: "Climatisation gainable : prix, avantages et installation en 2026",
    metaTitle: "Climatisation gainable 2026 — prix, installation, choix",
    metaDescription:
      "Climatisation gainable 2026 : prix posé, avantages, contraintes d'installation, choix des grilles. Guide ECO CVC pour maisons individuelles en Isère et Rhône-Alpes.",
    category: "Choisir sa PAC",
    publishedAt: "2026-01-25",
    updatedAt: "2026-04-28",
    readingMinutes: 7,
    excerpt:
      "Invisible, silencieuse, intégrée — la climatisation gainable est la solution premium pour climatiser une maison sans compromis esthétique. À quel prix ?",
    intro: [
      "Quand un client veut climatiser toute une maison sans voir un seul split mural, la réponse est simple : gainable. C'est plus cher, plus contraignant à l'installation, mais c'est aussi le must absolu en confort. Voici ce qu'il faut savoir avant de signer.",
    ],
    sections: [
      {
        heading: "Le principe en 1 paragraphe",
        paragraphs: [
          "Une climatisation gainable est composée d'une unité extérieure (comme un split classique) reliée à un caisson intérieur (placé dans les combles ou un faux-plafond), qui distribue l'air conditionné dans toutes les pièces via un réseau de gaines isolées et de grilles discrètes au plafond.",
        ],
      },
      {
        heading: "Avantages : pourquoi c'est la solution premium",
        paragraphs: [
          "Pour les clients qui peuvent se le permettre :",
        ],
        list: [
          "Discrétion totale : aucun appareil visible dans les pièces, juste des grilles plates au plafond",
          "Confort acoustique : pas de bruit de ventilateur dans la pièce (le caisson est dans les combles)",
          "Diffusion homogène : pas d'effet \"jet d'air froid\" comme avec un split mural",
          "Multi-zones possible : pilotage indépendant pièce par pièce avec registres motorisés",
          "Réversible : chauffage et rafraîchissement avec le même équipement",
        ],
      },
      {
        heading: "Contraintes : pour qui ce n'est pas adapté",
        paragraphs: [
          "Le gainable demande des conditions précises :",
        ],
        list: [
          "Combles accessibles d'au moins 1,2 m de hauteur (sinon impossible de poser le caisson)",
          "Si pas de combles : faux-plafond à créer (perte 25-30 cm de hauteur sous plafond)",
          "Réseau de gaines à passer dans toute la maison — gros chantier en rénovation",
          "Budget : 8 000 à 14 000 € posé pour 100 m², soit le double d'un multi-split équivalent",
        ],
      },
      {
        heading: "Prix 2026 et facteurs de variation",
        paragraphs: [
          "Voici les fourchettes constatées chez ECO CVC :",
        ],
        list: [
          "Maison 80 m² (3 chambres) gainable simple zone : 7 500 à 9 500 € posé",
          "Maison 100 m² (4 chambres) multi-zone (2 zones) : 9 500 à 12 500 € posé",
          "Maison 130 m² (5 chambres) multi-zone (3 zones) : 11 500 à 14 500 € posé",
          "Maison > 150 m² ou en étage : sur devis, généralement 14 000 à 18 000 €",
        ],
        callout: {
          title: "Ce qui fait varier",
          body: "Longueur des gaines (plus la maison est longue, plus c'est cher), nombre de zones de pilotage (chaque zone = un registre motorisé + thermostat), accessibilité des combles, choix des grilles (linéaires luxe vs plafonnières standard).",
        },
      },
      {
        heading: "Le déroulement type d'un chantier gainable",
        paragraphs: [
          "Compter 3 à 5 jours de travaux selon configuration :",
        ],
        list: [
          "Jour 1 : pose de l'unité extérieure et du caisson dans les combles",
          "Jour 2-3 : passage des gaines isolées vers chaque pièce + percement des plafonds",
          "Jour 4 : pose des grilles, raccordement électrique, mise en pression frigo",
          "Jour 5 : mise en service, calibrage, formation à l'application mobile",
        ],
      },
    ],
    faq: [
      {
        q: "Le gainable est-il éligible MaPrimeRénov' ?",
        a: "Non, comme tous les systèmes air-air. Mais éligible à la prime CEE : 250 à 1 100 € selon revenus.",
      },
      {
        q: "Peut-on installer du gainable en rénovation, en appartement ?",
        a: "Très rarement. Cela demande des combles ou un faux-plafond, conditions presque jamais réunies en appartement. Sauf grand duplex de standing avec faux-plafond préexistant.",
      },
      {
        q: "Bruit du caisson dans les combles, gênant ?",
        a: "Avec un caisson moderne bien isolé acoustiquement, ≤ 30 dB perçus en pièce de vie. C'est moins qu'un réfrigérateur. Aucune gêne en pratique.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "l-isle-d-abeau", "lyon", "meyzieu", "annecy"],
    relatedServices: [
      { href: "/installation", label: "Notre service installation" },
      { href: "/contact", label: "Demander un devis gainable" },
    ],
  },
  {
    slug: "plafonds-revenus-maprimerenov-2026",
    title: "Plafonds de revenus MaPrimeRénov' 2026 : à quel profil appartenez-vous ?",
    metaTitle: "Plafonds revenus MaPrimeRénov' 2026 — Bleu, Jaune, Violet, Rose",
    metaDescription:
      "Plafonds de revenus MaPrimeRénov' 2026 par profil (Bleu, Jaune, Violet, Rose) et par composition de foyer. Île-de-France et hors Île-de-France. Mise à jour officielle Anah.",
    category: "Aides",
    publishedAt: "2026-04-30",
    updatedAt: "2026-05-06",
    readingMinutes: 6,
    excerpt:
      "MaPrimeRénov' fonctionne par tranches de revenus : Bleu (très modestes), Jaune (modestes), Violet (intermédiaires), Rose (aisés). Voici les plafonds exacts 2026.",
    intro: [
      "Avant de prétendre à MaPrimeRénov', encore faut-il savoir dans quelle tranche on est. L'Anah classe les ménages en 4 profils colorés selon leur revenu fiscal de référence (RFR) et la composition du foyer. Voici les plafonds officiels 2026, hors Île-de-France et IDF.",
    ],
    sections: [
      {
        heading: "Comment se situer rapidement",
        paragraphs: [
          "Prenez votre dernier avis d'imposition. Le revenu fiscal de référence (RFR) figure en haut à gauche. Comptez ensuite combien de personnes vivent dans votre foyer (vous + conjoint + enfants à charge). Croisez avec le tableau ci-dessous pour identifier votre profil.",
        ],
      },
      {
        heading: "Plafonds 2026 — hors Île-de-France",
        paragraphs: ["Pour les départements hors IDF (Isère, Rhône, Savoie, Haute-Savoie, Loire…) :"],
        list: [
          "1 personne — Bleu : ≤ 17 173 € | Jaune : ≤ 22 015 € | Violet : ≤ 30 844 € | Rose : > 30 844 €",
          "2 personnes — Bleu : ≤ 25 115 € | Jaune : ≤ 32 197 € | Violet : ≤ 45 340 € | Rose : > 45 340 €",
          "3 personnes — Bleu : ≤ 30 206 € | Jaune : ≤ 38 719 € | Violet : ≤ 54 592 € | Rose : > 54 592 €",
          "4 personnes — Bleu : ≤ 35 285 € | Jaune : ≤ 45 234 € | Violet : ≤ 63 844 € | Rose : > 63 844 €",
          "5 personnes — Bleu : ≤ 40 388 € | Jaune : ≤ 51 775 € | Violet : ≤ 73 098 € | Rose : > 73 098 €",
          "+1 personne supplémentaire : +5 094 € (Bleu), +6 525 € (Jaune), +9 250 € (Violet)",
        ],
        callout: {
          title: "Profil = montant",
          body: "Bleu = aides maximales (jusqu'à 5 000 € PAC air-eau, 11 000 € géothermie). Jaune = -20%. Violet = -40%. Rose = non éligible PAC air-eau simple en 2026 (sauf rénovation globale parcours accompagné).",
        },
      },
      {
        heading: "Plafonds 2026 — Île-de-France (régime majoré)",
        paragraphs: ["L'Anah applique des plafonds plus élevés en IDF (coût de la vie) :"],
        list: [
          "1 personne — Bleu : ≤ 23 768 € | Jaune : ≤ 28 933 € | Violet : ≤ 40 404 €",
          "2 personnes — Bleu : ≤ 34 884 € | Jaune : ≤ 42 463 € | Violet : ≤ 59 394 €",
          "3 personnes — Bleu : ≤ 41 893 € | Jaune : ≤ 51 000 € | Violet : ≤ 71 060 €",
          "4 personnes — Bleu : ≤ 48 914 € | Jaune : ≤ 59 549 € | Violet : ≤ 83 637 €",
          "+1 personne suppl. : +7 028 € (Bleu), +8 551 € (Jaune), +12 156 € (Violet)",
        ],
      },
      {
        heading: "Comment optimiser son dossier",
        paragraphs: [
          "Plusieurs astuces légales pour maximiser vos aides :",
        ],
        list: [
          "Utiliser le RFR de l'année N-1 ou N-2 (le plus avantageux pour vous est accepté)",
          "Si revenus en baisse récente : justifier (chômage, retraite) pour basculer dans une tranche plus aidée",
          "Couples : déposer le dossier au nom du conjoint avec le RFR le plus bas si déclaration séparée",
          "Cumul avec Coup de pouce CEE : tous profils éligibles, donc même les Roses touchent la prime CEE",
        ],
      },
    ],
    faq: [
      {
        q: "Mon profil va-t-il changer entre 2026 et 2027 ?",
        a: "Les plafonds sont actualisés chaque année (~+2-3% indexés sur l'inflation). Pour un dossier 2026, c'est le RFR 2024 ou 2025 qui compte.",
      },
      {
        q: "Je suis propriétaire bailleur, suis-je éligible ?",
        a: "Oui, depuis 2021, sous condition de mise en location au tarif normal pendant 6 ans. Les plafonds bailleur sont les mêmes que pour les propriétaires occupants.",
      },
      {
        q: "Que se passe-t-il si mon profil change après dépôt du dossier ?",
        a: "Le profil est figé à la date de dépôt. Une amélioration de revenus après ne fait pas baisser votre prime.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne"],
    relatedServices: [
      { href: "/simulateur-aides", label: "Simuler vos aides personnalisées" },
      { href: "/blog/maprimerenov-2026-pompe-a-chaleur", label: "Tout sur MaPrimeRénov' 2026" },
    ],
  },
  {
    slug: "quelle-pac-pour-grande-maison-200m2",
    title: "Quelle pompe à chaleur pour une grande maison de 200 m² ?",
    metaTitle: "PAC pour maison 200 m² : puissance, choix, prix 2026 | ECO CVC",
    metaDescription:
      "Pompe à chaleur pour maison de 200 m² : puissance recommandée, types adaptés (haute température, géothermie), prix 2026. Guide ECO CVC, RGE QualiPAC en Isère.",
    category: "Choisir sa PAC",
    publishedAt: "2026-04-25",
    updatedAt: "2026-05-06",
    readingMinutes: 8,
    excerpt:
      "200 m² = 16-22 kW de puissance, des contraintes spécifiques et des choix techniques particuliers. Voici comment dimensionner et choisir sans se tromper.",
    intro: [
      "Une grande maison de 200 m² a des besoins de chauffage massifs : 16 à 22 kW de puissance, eau chaude pour 5-7 personnes, parfois piscine. À cette échelle, les choix techniques que vous faites déterminent 5 000 à 15 000 € de différence sur 10 ans en consommation. Voici comment décider.",
    ],
    sections: [
      {
        heading: "Calcul de la puissance pour 200 m²",
        paragraphs: ["Selon l'isolation et la zone climatique :"],
        list: [
          "Maison RT2012+ bien isolée, plaine isère : 14 à 16 kW",
          "Maison années 2000 isolée standard : 16 à 18 kW",
          "Maison années 80 rénovée partiellement : 18 à 20 kW",
          "Maison ancienne non rénovée : 20 à 24 kW (mais isolation prioritaire avant pose !)",
          "+1 kW si zone froide (Voiron, Chambéry, Annecy) ou hauts plafonds",
        ],
        callout: {
          title: "Erreur fréquente",
          body: "Sur-dimensionner pour 'avoir de la marge' = catastrophe. Une PAC trop puissante fait de courts cycles, s'use 2x plus vite et consomme + 15-20%. Le bon dimensionnement n'est ni trop gros ni trop petit.",
        },
      },
      {
        heading: "Quel type de PAC pour 200 m²",
        paragraphs: ["Trois options sérieuses selon votre projet :"],
        list: [
          "PAC air-eau monobloc 16-22 kW : solution la plus universelle, 17 000 à 22 000 € posée. Compatible radiateurs existants si haute température.",
          "PAC géothermique 14-18 kW : meilleur COP toute l'année (>4), 22 000 à 32 000 € posée. Rentable sur 15-20 ans si grande propriété (capteurs horizontaux ≥ 300 m²).",
          "PAC hybride (PAC + chaudière condensation gaz) : si raccordement gaz, 18 000 à 24 000 € posée. La PAC tourne en saison douce, la chaudière prend le relais en grand froid. Idéale pour grandes maisons mal isolées.",
        ],
      },
      {
        heading: "Eau chaude sanitaire pour 5-7 personnes",
        paragraphs: ["Avec autant d'occupants, l'ECS devient un vrai poste :"],
        list: [
          "Ballon thermodynamique 300-400 L (intégré ou séparé) : couvre 90% des besoins via la PAC",
          "Cumulus électrique de secours 200 L : appoint en pic de consommation",
          "Solaire thermique en complément : si toiture bien orientée, divise encore la conso ECS par 2",
        ],
      },
      {
        heading: "Diffusion : radiateurs ou plancher chauffant ?",
        paragraphs: ["À 200 m², le plancher chauffant a un avantage majeur : régularité de la chaleur sur grande surface."],
        list: [
          "Plancher chauffant + PAC basse température : COP optimal (4+), confort homogène. Investissement gros œuvre 100-180 €/m² en rénovation lourde.",
          "Radiateurs basse température (modèles modernes) + PAC basse température : compromis intermédiaire, pas de gros œuvre.",
          "Radiateurs fonte d'origine + PAC haute température : conserve l'existant, COP un peu inférieur (3,5).",
          "Mix plancher chauffant RDC + radiateurs étage : courant en rénovation, fonctionne très bien.",
        ],
      },
      {
        heading: "Coût annuel et amortissement",
        paragraphs: ["Pour 200 m² bien isolée, climat plaine isère, 5 occupants :"],
        list: [
          "PAC air-eau : 1 600 à 2 200 €/an de chauffage + ECS",
          "PAC géothermique : 1 200 à 1 700 €/an",
          "PAC hybride : 1 800 à 2 400 €/an (mix gaz + élec)",
          "Vs ancienne chaudière fioul : économie 2 500 à 3 800 €/an",
          "Amortissement typique : 5 à 9 ans selon profil aides + énergie remplacée",
        ],
      },
    ],
    faq: [
      {
        q: "Une seule PAC suffit-elle pour 200 m² ?",
        a: "Oui dans la quasi-totalité des cas. Les modèles 16-22 kW sont conçus pour ces volumes. Au-delà de 250 m², on commence à envisager 2 PAC en cascade.",
      },
      {
        q: "Géothermie : combien d'aides pour 200 m² ?",
        a: "MaPrimeRénov' Bleu : 11 000 € + Coup de pouce 6 000 € + bonus fioul 1 000 € = 18 000 € + TVA 5,5% (~3 800 € d'économie). Sur projet 28 000 € : reste à charge ~6 200 €.",
      },
      {
        q: "Faut-il refaire toute l'isolation avant pose ?",
        a: "Si maison RT2005-RT2012+ : non, la PAC fonctionne bien. Si antérieure non rénovée : isoler combles + murs avant ou en parallèle est indispensable, sinon la PAC tournera en mode appoint électrique = factures explosées.",
      },
      {
        q: "Combien de temps de chantier pour 200 m² ?",
        a: "PAC air-eau classique : 3-4 jours. Avec dépose chaudière fioul + cuve : 4-5 jours. Géothermie avec capteurs horizontaux : 1-2 semaines. Avec forage vertical : 2-3 semaines.",
      },
    ],
    relatedCities: ["voiron", "chambery", "morestel", "vienne"],
    relatedServices: [
      { href: "/simulateur-aides", label: "Simuler les aides pour 200 m²" },
      { href: "/installation", label: "Installation PAC haute puissance" },
    ],
  },
  {
    slug: "pompe-a-chaleur-en-hiver-performance-reelle",
    title: "Pompe à chaleur en hiver : performance réelle quand il fait froid",
    metaTitle: "PAC en hiver : performance par grand froid (-10, -15, -20 °C) | ECO CVC",
    metaDescription:
      "Performance réelle d'une pompe à chaleur en hiver et grand froid (-10, -15, -20 °C). COP réel, dégivrage, appoint électrique. Témoignages terrain ECO CVC en Isère et Rhône-Alpes.",
    category: "Choisir sa PAC",
    publishedAt: "2026-04-18",
    updatedAt: "2026-05-06",
    readingMinutes: 7,
    excerpt:
      "Le grand mythe : 'la PAC ne marche pas en hiver'. Faux. Mais le COP varie selon la température extérieure. Voici la vraie performance par grand froid en Isère et Rhône-Alpes.",
    intro: [
      "C'est la question que nous posent 90% de nos prospects : 'Et quand il fait -10 °C, ça marche encore ?' Réponse courte : oui. Réponse complète : ça dépend du modèle, de l'isolation et de la zone géographique. Voici la vérité technique avec des chiffres réels.",
    ],
    sections: [
      {
        heading: "Le COP réel selon la température extérieure",
        paragraphs: ["Le COP (coefficient de performance) baisse logiquement quand il fait froid dehors. Voici les ordres de grandeur sur une PAC moderne (Daikin Altherma 3, Mitsubishi Ecodan, Atlantic Alféa) :"],
        list: [
          "+15 °C extérieur : COP 5,0 (1 kWh élec → 5 kWh chaleur). Idéal demi-saison.",
          "+7 °C extérieur (température nominale) : COP 4,2",
          "0 °C extérieur : COP 3,5",
          "-5 °C extérieur : COP 2,8",
          "-10 °C extérieur : COP 2,2 — toujours 2 fois plus efficace qu'un radiateur électrique",
          "-15 °C extérieur : COP 1,8 sur les meilleurs modèles, l'appoint commence à se déclencher",
          "-20 °C extérieur : appoint électrique majoritaire, COP global ~1,3",
        ],
        callout: {
          title: "Conclusion chiffrée",
          body: "Sur une saison entière en Isère du Nord (moyenne 200 jours de chauffe), le SCOP (COP saisonnier) d'une PAC bien dimensionnée tourne autour de 3,8-4,2. Donc 1 kWh élec = 4 kWh chaleur en moyenne annuelle.",
        },
      },
      {
        heading: "Le rôle de l'appoint électrique",
        paragraphs: ["Toutes les PAC modernes intègrent une résistance électrique d'appoint qui se déclenche automatiquement quand la PAC ne suffit plus."],
        list: [
          "À -15 °C ou en-dessous, l'appoint complète la PAC pour atteindre la consigne",
          "Sur une saison normale en Isère, l'appoint représente 5-15% de la conso totale",
          "Sur une vague de froid exceptionnelle (10 jours à -15 °C), peut grimper à 25%",
          "L'appoint coûte plus cher (COP 1) mais sa contribution annuelle reste minoritaire",
        ],
      },
      {
        heading: "Le dégivrage automatique",
        paragraphs: ["Quand l'humidité de l'air gèle sur l'unité extérieure, la PAC bascule en mode dégivrage : elle inverse temporairement son cycle pour faire fondre le givre."],
        list: [
          "Cycle dégivrage : 5-10 min toutes les 30-60 min selon humidité et froid",
          "Pendant ce cycle, la PAC ne chauffe pas la maison (mais l'inertie compense)",
          "Une PAC qui dégivre = c'est normal. Inquiétez-vous seulement si elle reste givrée > 2h.",
          "Les modèles haut de gamme (Daikin, Mitsubishi) ont un dégivrage 'reverse-cycle' plus efficace que les modèles bas de gamme.",
        ],
      },
      {
        heading: "Choix du modèle selon votre zone",
        paragraphs: ["En Rhône-Alpes, voici nos recommandations selon le froid moyen :"],
        list: [
          "Plaine Isère du Nord (-8 °C max), Lyon, Vienne : tout modèle moderne fait l'affaire",
          "Voiron, La Tour-du-Pin (-12 °C max), bassin Annécien : modèle 'plage étendue' garanti -20 °C (Daikin Altherma 3 H, Mitsubishi Ecodan Plus)",
          "Chambéry, Aix-les-Bains, hauts d'Annecy (-15 à -18 °C max) : modèle plage étendue OBLIGATOIRE + résistance d'appoint dimensionnée",
          "Hameaux d'altitude > 600 m : géothermie souvent préférable (T° du sol stable à 10-12 °C)",
        ],
      },
      {
        heading: "Témoignages terrain",
        paragraphs: ["Nos clients dans les zones froides nous remontent ces chiffres :"],
        list: [
          "Maison 130 m² à Voiron, PAC air-eau 12 kW Mitsubishi Ecodan : facture annuelle 950 € (vs 2 600 € avec ancien fioul)",
          "Maison 110 m² à Coublevie (550 m d'altitude), PAC plage étendue : confort identique à l'ancienne chaudière même par -12 °C",
          "Maison 180 m² à Saint-Étienne-de-Crossey, PAC géothermique : COP annuel 4,1 mesuré par compteur",
        ],
      },
    ],
    faq: [
      {
        q: "Et si la PAC n'arrive pas à chauffer assez ?",
        a: "Cela arrive quand : 1) PAC sous-dimensionnée (erreur d'installation), 2) maison mal isolée. Solution : améliorer isolation OU ajouter un poêle en appoint pour les pics. Sur une PAC bien dimensionnée et une maison correctement isolée, c'est très rare.",
      },
      {
        q: "Le COP affiché par le constructeur correspond-il à la réalité ?",
        a: "Le COP nominal (à +7 °C) est testé en laboratoire et fiable. Le SCOP (saisonnier) prend en compte les variations annuelles, plus proche de la réalité. Vérifiez toujours le SCOP, pas le COP nominal.",
      },
      {
        q: "Faut-il prévoir un système d'appoint complémentaire (poêle) ?",
        a: "Pas obligatoire mais agréable. Sur 200 jours de chauffe en Isère, votre PAC seule fait 95% du travail. Un poêle dans le séjour apporte le confort radiant et sécurise les coupures électriques (5-10% des cas).",
      },
      {
        q: "Mes voisins disent que leur PAC ne tient pas le froid : pourquoi ?",
        a: "3 raisons typiques : 1) modèle bas de gamme acheté pour le prix, 2) PAC sous-dimensionnée par un installateur peu sérieux, 3) isolation maison défaillante. Aucune de ces causes ne remet en question la technologie elle-même.",
      },
    ],
    relatedCities: ["voiron", "chambery", "annecy", "morestel"],
    relatedServices: [
      { href: "/installation", label: "Installation PAC plage étendue" },
      { href: "/simulateur-aides", label: "Simuler aides PAC" },
    ],
  },
  {
    slug: "consommation-electrique-pompe-a-chaleur",
    title: "Consommation électrique d'une pompe à chaleur : combien ça coûte vraiment ?",
    metaTitle: "Consommation électrique PAC : kWh/an et coût annuel 2026 | ECO CVC",
    metaDescription:
      "Combien consomme une pompe à chaleur en kWh/an et en € sur la facture ? Estimation par surface et par type de PAC. Comparaison avec gaz, fioul et électrique direct. Guide ECO CVC.",
    category: "Tarifs",
    publishedAt: "2026-04-10",
    updatedAt: "2026-05-06",
    readingMinutes: 6,
    excerpt:
      "Avant de signer pour une PAC, beaucoup veulent savoir : 'Combien ça va vraiment me coûter en électricité ?' Voici les chiffres réels 2026 par surface et type d'équipement.",
    intro: [
      "L'argument économique est le n°1 pour passer à la pompe à chaleur. Mais les chiffres marketing ('jusqu'à 70% d'économies !') sont parfois trompeurs. Voici la consommation électrique réelle d'une PAC en France en 2026, basée sur des compteurs de nos clients.",
    ],
    sections: [
      {
        heading: "Consommation moyenne en kWh/an selon surface et isolation",
        paragraphs: ["Pour une maison française moyenne en Auvergne-Rhône-Alpes :"],
        list: [
          "Maison 80 m² bien isolée (RT2012+) : 2 500 à 3 200 kWh/an de chauffage + ECS",
          "Maison 100 m² isolée standard : 3 200 à 4 500 kWh/an",
          "Maison 130 m² années 2000 : 4 500 à 6 000 kWh/an",
          "Maison 150 m² années 80 partiellement rénovée : 6 000 à 8 000 kWh/an",
          "Maison 200 m² : 7 500 à 10 500 kWh/an",
        ],
      },
      {
        heading: "Coût annuel électrique 2026",
        paragraphs: ["Au tarif réglementé EDF 2026 (~0,2516 €/kWh option base) :"],
        list: [
          "Maison 80 m² : 630 à 805 €/an de chauffage + ECS",
          "Maison 100 m² : 805 à 1 130 €/an",
          "Maison 130 m² : 1 130 à 1 510 €/an",
          "Maison 150 m² : 1 510 à 2 010 €/an",
          "Maison 200 m² : 1 890 à 2 640 €/an",
        ],
        callout: {
          title: "Astuce tarif",
          body: "Les options Tempo (rouge/blanc/bleu) permettent d'économiser 30-40% supplémentaires si vous programmez votre PAC pour réduire pendant les jours rouges (max 22/an). Couplé à un poêle d'appoint, c'est ultra-efficace.",
        },
      },
      {
        heading: "Comparaison avec les autres énergies (même maison 130 m²)",
        paragraphs: ["Pour une maison 130 m² isolée standard, voici la facture annuelle 2026 par énergie :"],
        list: [
          "Pompe à chaleur air-eau (notre cible) : 1 130 à 1 510 €/an",
          "Pompe à chaleur géothermique : 850 à 1 200 €/an (-25 à -30%)",
          "Chaudière gaz condensation moderne : 1 800 à 2 200 €/an",
          "Chaudière fioul ancienne : 2 500 à 3 200 €/an",
          "Chauffage électrique direct (convecteurs) : 3 000 à 4 200 €/an",
          "Chaudière granulés : 1 200 à 1 600 €/an (combustible + élec auxiliaire)",
        ],
      },
      {
        heading: "Ce qui fait varier la consommation réelle",
        paragraphs: ["Sur un même équipement, la consommation peut varier du simple au double selon :"],
        list: [
          "Qualité de l'isolation (combles, murs, fenêtres)",
          "Température de consigne (chaque +1 °C = +7% de conso)",
          "Programmation horaire (pas de chauffe nuit/absence = -15 à -25%)",
          "Réglage de la loi d'eau (PAC air-eau)",
          "Nombre d'occupants (impact eau chaude sanitaire)",
          "Localisation (Lyon vs Annecy : -5 à +15% selon climat)",
        ],
      },
      {
        heading: "Optimiser la consommation",
        paragraphs: ["Quelques gestes simples qui font baisser la facture :"],
        list: [
          "Programmer une baisse de 2-3 °C la nuit et en absence",
          "Maintenir consigne 19-20 °C (au lieu de 22 °C) : -10 à -20%",
          "Entretien annuel (filtres, pression eau) : préserve le COP de la PAC",
          "Remplacer un thermostat ancien par un thermostat connecté apprenant",
          "Coupler avec un poêle pour les pointes de froid (dépend du logement)",
        ],
      },
    ],
    faq: [
      {
        q: "Comment savoir précisément combien je consommerai ?",
        a: "Demandez un calcul thermique pendant la visite technique. Nous vous donnons une estimation à ±10% basée sur votre logement réel. C'est gratuit et sans engagement.",
      },
      {
        q: "Faut-il changer mon abonnement EDF ?",
        a: "Souvent oui. Une PAC tirée à pleine puissance demande 5-9 kVA. Vérifiez votre puissance actuelle (sur facture EDF). Si insuffisant, vous risquez de disjoncter en pic de chauffe.",
      },
      {
        q: "Puis-je revendre l'électricité d'un panneau solaire pour rentabiliser ma PAC ?",
        a: "Oui, autoconsommation solaire + PAC = combo gagnant. Un kit 3 kWc (~7 000 € posé) couvre 30-50% des besoins annuels d'une PAC. Amortissement 6-10 ans.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "vienne", "voiron"],
    relatedServices: [
      { href: "/simulateur-aides", label: "Simulateur d'aides" },
      { href: "/blog/prix-pompe-a-chaleur-2026", label: "Prix d'une PAC en 2026" },
    ],
  },
  {
    slug: "pompe-a-chaleur-geothermique-prix-installation",
    title: "Pompe à chaleur géothermique : prix, principe, installation 2026",
    metaTitle: "PAC géothermique 2026 — prix, capteurs, forage [guide complet] | ECO CVC",
    metaDescription:
      "Pompe à chaleur géothermique : principe, types (capteurs horizontaux, forage vertical, eau-eau), prix posée 2026, aides, COP. Guide ECO CVC, RGE QualiPAC en Isère et Rhône-Alpes.",
    category: "Choisir sa PAC",
    publishedAt: "2026-04-02",
    updatedAt: "2026-05-06",
    readingMinutes: 9,
    excerpt:
      "La géothermie reste la PAC la plus performante (COP > 4 toute l'année), mais son installation demande des conditions précises. Voici si c'est fait pour vous, et combien ça coûte vraiment.",
    intro: [
      "La pompe à chaleur géothermique exploite la chaleur stable du sol (10-15 °C en profondeur, été comme hiver) pour chauffer votre maison. Performance imbattable, coût initial élevé : voici quand ça vaut le coup, et tous les chiffres 2026.",
    ],
    sections: [
      {
        heading: "Les 3 technologies géothermiques",
        paragraphs: ["Selon votre terrain et votre budget, 3 options techniques :"],
        list: [
          "Capteurs horizontaux : tubes en spirale enterrés à 80 cm, sur une surface ≥ 1,5x la surface chauffée. Le plus économique mais demande un grand jardin.",
          "Forage vertical : sondes plongées à 80-150 m. Convient à toutes les parcelles, plus cher (forage = 80-130 €/mètre).",
          "Eau-eau (sur nappe phréatique) : pompage de l'eau souterraine. Excellent rendement, mais autorisations préfectorales et étude hydrogéologique nécessaires.",
        ],
        callout: {
          title: "Quelle option choisir",
          body: "80% de nos chantiers géothermiques en Isère/Rhône-Alpes sont en capteurs horizontaux (parcelles dégagées). Le forage vertical est privilégié pour les petits terrains ou maisons mitoyennes.",
        },
      },
      {
        heading: "Performance : pourquoi le COP est exceptionnel",
        paragraphs: ["Contrairement à la PAC air-eau qui dépend de la T° extérieure (variable), la géothermie pioche dans une source stable :"],
        list: [
          "À 1-2 m de profondeur : sol entre 8 et 15 °C toute l'année",
          "À 50-150 m : sol stable à 10-13 °C",
          "Conséquence : COP de la PAC entre 4 et 5,5 toute l'année (vs 2,5-4 pour l'air-eau selon saison)",
          "SCOP saisonnier moyen : 4,2 à 4,8 (vs 3,5-4 pour air-eau)",
          "Économie 25-35% sur la facture vs PAC air-eau, à isolation égale",
        ],
      },
      {
        heading: "Prix posée 2026 (matériel + travaux complets)",
        paragraphs: ["Voici les fourchettes constatées chez ECO CVC pour une maison 130-150 m² :"],
        list: [
          "Capteurs horizontaux + PAC 12 kW : 18 000 à 23 000 € posée (forage exclu)",
          "Forage vertical (2 sondes 100 m) + PAC 12 kW : 24 000 à 30 000 €",
          "Eau-eau sur nappe (rare en Isère du Nord) : 19 000 à 26 000 € + autorisations",
          "Pour grandes maisons 200-300 m² : 28 000 à 40 000 €",
        ],
      },
      {
        heading: "Aides 2026 majorées pour la géothermie",
        paragraphs: ["L'État incite particulièrement à la géothermie :"],
        list: [
          "MaPrimeRénov' Bleu : 11 000 € (vs 5 000 € pour air-eau) — DOUBLE",
          "MaPrimeRénov' Jaune : 9 000 €",
          "MaPrimeRénov' Violet : 6 000 €",
          "Coup de pouce CEE géothermie : 6 000 € (Bleu) à 3 500 € (Rose)",
          "Bonus sortie fioul Bleu/Jaune : +1 000 €",
          "TVA 5,5% : ~3 800 € d'économie sur projet 25 000 €",
          "Total cumulé pour profil Bleu sortant du fioul : jusqu'à 22 000 €",
        ],
      },
      {
        heading: "Conditions et contraintes à anticiper",
        paragraphs: ["Avant de signer :"],
        list: [
          "Terrain dégagé ≥ 200-300 m² disponible (capteurs horizontaux)",
          "Permis de construire ou déclaration préalable selon profondeur de forage",
          "Études géotechnique conseillée (300-800 €) pour le forage vertical",
          "Pose : 1-3 semaines selon configuration (vs 3-4 jours pour air-eau)",
          "Pas de plantation d'arbres au-dessus des capteurs (racines profondes)",
          "Maison existante : peu d'aménagements paysagers récents si on doit creuser le terrain",
        ],
      },
      {
        heading: "Pour qui c'est rentable",
        paragraphs: ["La géothermie est particulièrement intéressante si :"],
        list: [
          "Maison ≥ 130 m² avec terrain disponible",
          "Logement à long terme (≥ 15 ans)",
          "Climat froid (Voiron, Chambéry, Annecy, hauts d'Isère)",
          "Sortie de chaudière fioul (aides cumulées maximales)",
          "Profil Bleu ou Jaune : reste à charge final souvent < 8 000 € sur projet 25 000 €",
        ],
      },
    ],
    faq: [
      {
        q: "Combien d'années pour amortir une PAC géothermique ?",
        a: "Avec aides maximales (profil Bleu) et sortie fioul : 4-7 ans. Profil Violet : 9-13 ans. Profil Rose : souvent non rentable, on conseille plutôt l'air-eau.",
      },
      {
        q: "Le forage vertical perturbe-t-il les fondations ?",
        a: "Non, à condition de respecter une distance de sécurité (3-5 m de la maison). L'étude géotechnique vérifie ça avant validation.",
      },
      {
        q: "Et si je vends ma maison plus tard ?",
        a: "La géothermie est un atout réel à la revente : étiquette DPE A ou B, factures basses prouvées. Plus-value immobilière estimée 5-10% selon zone.",
      },
      {
        q: "Durée de vie des capteurs/forage ?",
        a: "Capteurs et forage : durée de vie 50+ ans (matière inerte). Compresseur PAC : 20-25 ans. Vous renouvelez juste la PAC à la fin, pas le captage.",
      },
    ],
    relatedCities: ["voiron", "chambery", "annecy", "morestel"],
    relatedServices: [
      { href: "/simulateur-aides", label: "Simuler aides géothermie" },
      { href: "/installation", label: "Installation pompe à chaleur" },
    ],
  },
  {
    slug: "duree-de-vie-pompe-a-chaleur",
    title: "Combien de temps dure une pompe à chaleur ?",
    metaTitle: "Durée de vie pompe à chaleur 2026 — air-air, air-eau, géothermique | ECO CVC",
    metaDescription:
      "Durée de vie d'une pompe à chaleur 2026 : air-air, air-eau, géothermique. Facteurs d'usure, signes de fin de vie, garanties constructeurs, retours terrain ECO CVC.",
    category: "Pratique",
    publishedAt: "2026-03-25",
    updatedAt: "2026-05-06",
    readingMinutes: 6,
    excerpt:
      "Une PAC dure typiquement 15-20 ans, mais ça dépend énormément du type, de l'entretien et de la marque. Voici les vrais chiffres terrain et comment maximiser la durée de vie.",
    intro: [
      "Avant d'investir 12 000 à 25 000 € dans une pompe à chaleur, on veut savoir combien de temps elle va durer. Voici les chiffres réels constatés sur les milliers d'installations passées en France et chez nos clients en Isère/Rhône-Alpes.",
    ],
    sections: [
      {
        heading: "Durée de vie moyenne par type de PAC",
        paragraphs: ["Selon les données constructeurs et nos retours terrain :"],
        list: [
          "PAC air-air (climatisation réversible) : 12 à 15 ans en moyenne",
          "PAC air-eau : 17 à 20 ans",
          "PAC géothermique : 20 à 25 ans (compresseur), capteurs/forage 50 ans+",
          "PAC hybride (PAC + chaudière condensation) : 15-18 ans",
        ],
        callout: {
          title: "Différence majeure",
          body: "L'air-air souffre du fonctionnement été+hiver et de cycles fréquents (allumage/extinction). L'air-eau tourne plus régulièrement, durée de vie plus longue. La géothermie travaille dans des conditions stables = durée de vie maximale.",
        },
      },
      {
        heading: "Facteurs qui réduisent la durée de vie",
        paragraphs: ["Une PAC peut tomber en panne au bout de 8-10 ans si :"],
        list: [
          "Pas d'entretien annuel (filtres sales, fluide en charge limite)",
          "Sur-dimensionnement : courts cycles d'allumage/extinction qui usent le compresseur",
          "Sous-dimensionnement : appoint électrique sollicité en permanence, surchauffe",
          "Marque bas de gamme avec composants moins durables",
          "Installation bâclée par installateur non certifié",
          "Climat très froid (au-delà des spécifications du modèle)",
          "Bord de mer (corrosion saline accélérée — pas concerné en Rhône-Alpes intérieur)",
        ],
      },
      {
        heading: "Facteurs qui prolongent la durée de vie",
        paragraphs: ["Pour atteindre 20+ ans :"],
        list: [
          "Entretien annuel par pro RGE certifié (obligatoire de toute façon)",
          "Dimensionnement précis basé sur calcul thermique (pas la règle empirique 100 W/m²)",
          "Marque haut de gamme (Daikin Altherma, Mitsubishi Ecodan, Atlantic Alféa Excellia)",
          "Installation soignée : tirage au vide, plots anti-vibrations, mise en service correcte",
          "Fonctionnement modulant (technologie inverter) plutôt qu'on/off",
          "Programmation horaire intelligente (pas de surcharge)",
        ],
      },
      {
        heading: "Garanties constructeur en 2026",
        paragraphs: ["Comparaison des principales marques :"],
        list: [
          "Daikin Altherma 3 : 5 ans pièces (extension à 10 ans avec entretien partenaire)",
          "Mitsubishi Ecodan : 5 ans pièces standard",
          "Atlantic Alféa : 7 ans pièces avec entretien Atlantic Pro",
          "AUX : 3 ans pièces et 5 ans compresseur",
          "Garantie biennale légale : 2 ans toutes marques (UE)",
          "Décennale installateur : 10 ans sur la pose elle-même (pas le matériel)",
        ],
      },
      {
        heading: "Quand remplacer ?",
        paragraphs: ["Signes que votre PAC arrive en fin de vie :"],
        list: [
          "Consommation électrique qui monte de 20-30% sans changement d'usage",
          "Pannes répétitives (3+ pannes en 12 mois)",
          "COP réel mesuré < 2,5 même en demi-saison",
          "Bruit anormal (sifflements, vibrations) qui ne passe pas après réparation",
          "Coût des réparations cumulées > 50% du prix d'une PAC neuve",
          "Fluide frigorigène en obsolescence (R410A interdit en neuf depuis 2025)",
        ],
        callout: {
          title: "Notre conseil",
          body: "Quand votre PAC dépasse 15 ans, surveillez les indicateurs. Une PAC neuve avec aides + meilleur COP s'amortit en 5-8 ans face aux pannes d'une vieille machine. Faites le calcul.",
        },
      },
    ],
    faq: [
      {
        q: "Ma PAC a 12 ans, dois-je commencer à la remplacer ?",
        a: "Pas nécessairement. Si elle fonctionne bien et que l'entretien annuel ne révèle rien d'anormal, gardez-la. Mais commencez à anticiper le remplacement futur en provisionnant ~12-15 k€.",
      },
      {
        q: "Le compresseur est la pièce qui tombe en panne en premier ?",
        a: "Oui dans 60% des cas. C'est le 'cœur' de la PAC. Les capteurs/cartes électroniques sont la 2ᵉ cause (~25%). Évacuation/filtres/petites pièces : 15%.",
      },
      {
        q: "Faut-il prévoir une enveloppe d'entretien ?",
        a: "Oui : 200-300 €/an pour le contrat d'entretien + 200-500 € pour réparations imprévues sur 20 ans. Total amortissement : ~5 000-7 000 € sur la durée de vie.",
      },
      {
        q: "Une PAC peut-elle durer 25 ans ?",
        a: "Oui, on a vu des Daikin Altherma de 1ère génération encore fonctionnelles à 22-23 ans avec entretien rigoureux. Mais c'est l'exception, pas la règle.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne"],
    relatedServices: [
      { href: "/maintenance", label: "Notre service entretien" },
      { href: "/installation", label: "Remplacement de PAC" },
    ],
  },
  {
    slug: "pac-a-1-euro-arnaque-ou-vraie-offre",
    title: "PAC à 1 € : grosse arnaque ou vraie offre ?",
    metaTitle: "PAC à 1 € — arnaque ou réalité ? La vérité 2026 | ECO CVC",
    metaDescription:
      "Pompe à chaleur à 1 € : on vous explique honnêtement si c'est une arnaque, ce qui se cache derrière, et ce qui existe vraiment en 2026 (Coup de pouce, MaPrimeRénov').",
    category: "Aides",
    publishedAt: "2026-04-22",
    updatedAt: "2026-05-07",
    readingMinutes: 7,
    excerpt:
      "Démarchage téléphonique, publicités Facebook, flyers : la PAC à 1 € est partout. Spoiler : ça n'existe plus depuis 2021. Voici ce que ces 'offres' cachent vraiment, et la vraie aide en 2026.",
    intro: [
      "Si vous recevez encore des appels ou pubs proposant une 'pompe à chaleur à 1 €', il y a 95% de chances que ce soit une arnaque ou un démarchage abusif. Ce dispositif n'existe officiellement plus depuis juillet 2021. Voici la vraie histoire et ce qui existe à la place en 2026.",
    ],
    sections: [
      {
        heading: "L'origine du 'PAC à 1 €'",
        paragraphs: [
          "Entre 2018 et 2021, le Coup de pouce chauffage CEE permettait pour les ménages très modestes de financer une installation PAC quasi-intégralement (reste à charge symbolique de 1 €). Cette offre attirait beaucoup de fraudeurs.",
          "En juillet 2021, suite à des centaines de plaintes pour démarchage agressif, malfaçons et installations bâclées, le gouvernement a supprimé l'offre. Le démarchage téléphonique pour la rénovation énergétique a aussi été interdit (loi du 24 juillet 2020).",
        ],
      },
      {
        heading: "Pourquoi ces offres reviennent encore en 2026",
        paragraphs: [
          "Malgré l'interdiction, des sociétés peu scrupuleuses continuent à utiliser ce slogan trompeur. Voici les pièges classiques :",
        ],
        list: [
          "Démarchage téléphonique illégal : interdit depuis 2020, mais toujours pratiqué par des call-centers à l'étranger",
          "Pub Facebook avec 'PAC à 1 €' suivie d'un formulaire : récupération de données personnelles puis revente",
          "Flyer dans la boîte aux lettres : prétexte pour entrer chez vous et faire signer un devis sur un coin de table",
          "'Audit gratuit' qui se transforme en bon de commande non rétractable",
        ],
        callout: {
          title: "Que faire si on vous contacte",
          body: "Raccrocher tout démarchage téléphonique pour la rénovation énergétique. C'est INTERDIT depuis 2020. Tout artisan qui démarche n'est pas crédible. Les vrais pros (RGE QualiPAC) ne démarchent JAMAIS.",
        },
      },
      {
        heading: "Ce qui existe RÉELLEMENT en 2026",
        paragraphs: [
          "Voici les vraies aides cumulables en 2026, qui peuvent réduire votre reste à charge à un minimum :",
        ],
        list: [
          "MaPrimeRénov' : jusqu'à 5 000 € pour PAC air-eau, 11 000 € géothermie (selon profil revenus)",
          "Coup de pouce chauffage CEE : 2 500 à 5 000 € selon profil",
          "Bonus sortie fioul : +1 000 € pour Bleu/Jaune",
          "TVA réduite à 5,5% : ~14% d'économie sur le projet",
          "Éco-PTZ : prêt à 0% jusqu'à 50 000 € pour étaler le reste à charge",
          "Aides locales (métropoles, communautés d'agglo) : variables",
        ],
        callout: {
          title: "Cas concret",
          body: "Pour un ménage très modeste sortant d'une chaudière fioul vers une PAC air-eau (devis 14 000 €) : MaPrimeRénov' 5 000 € + Coup de pouce 5 000 € + bonus fioul 1 000 € + TVA réduite ~2 030 € = 13 030 € d'aides. Reste à charge réel : ~970 €. PROCHE DE 1 €, mais légal et certifié.",
        },
      },
      {
        heading: "Comment éviter les arnaques en 2026",
        paragraphs: ["5 règles d'or :"],
        list: [
          "Vérifier le numéro RGE QualiPAC sur france-renov.gouv.fr AVANT signature",
          "Refuser tout démarchage à domicile non sollicité (interdit pour la rénovation énergétique)",
          "Ne jamais signer un devis sans visite technique sérieuse (étude thermique)",
          "Comparer 2-3 devis d'artisans locaux différents",
          "Demander des références locales (clients à proximité)",
        ],
      },
    ],
    faq: [
      {
        q: "Est-ce que la PAC à 1 € existe encore légalement ?",
        a: "Non, depuis juillet 2021. Tout argument commercial 'PAC à 1 €' en 2026 est trompeur. Mais les aides cumulées peuvent rendre le reste à charge presque nul pour les ménages très modestes.",
      },
      {
        q: "Comment vérifier si une entreprise est sérieuse ?",
        a: "1) Vérifier le numéro RGE sur france-renov.gouv.fr. 2) Vérifier le SIRET sur societe.com. 3) Lire les avis Google. 4) Demander 2-3 références clients locaux. 5) Refuser de signer hors visite technique sérieuse.",
      },
      {
        q: "Que faire si j'ai signé sous pression ?",
        a: "Vous avez 14 jours de rétractation pour tout démarchage à domicile. Envoyer LRAR au siège de la société. En cas de difficulté, contacter la DGCCRF (signal.conso.gouv.fr).",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne"],
    relatedServices: [
      { href: "/simulateur-aides", label: "Calculer mes vraies aides 2026" },
      { href: "/blog/coup-de-pouce-chauffage-2026", label: "Tout sur le Coup de pouce 2026" },
    ],
  },
  {
    slug: "5-erreurs-a-eviter-pompe-a-chaleur",
    title: "5 erreurs à éviter avec une pompe à chaleur",
    metaTitle: "5 erreurs à éviter avec une PAC : conseils ECO CVC | RGE QualiPAC",
    metaDescription:
      "Les 5 erreurs les plus fréquentes lors de l'installation d'une pompe à chaleur : sous-dimensionnement, mauvaise marque, négligence isolation, etc. Conseils RGE QualiPAC ECO CVC.",
    category: "Pratique",
    publishedAt: "2026-04-15",
    updatedAt: "2026-05-07",
    readingMinutes: 6,
    excerpt:
      "Sur 10 PAC mal installées que nous reprenons, 9 ont fait au moins une de ces 5 erreurs. Voici comment les éviter avant de signer un devis.",
    intro: [
      "On nous appelle régulièrement pour reprendre des installations PAC qui marchent mal : factures qui explosent, maison toujours froide, pannes répétitives. Dans 90% des cas, l'origine du problème est une de ces 5 erreurs commises au moment de l'installation. Voici lesquelles, et comment les éviter chez vous.",
    ],
    sections: [
      {
        heading: "Erreur n°1 : Mauvais dimensionnement",
        paragraphs: [
          "L'erreur la plus fréquente. Soit la PAC est trop petite (l'appoint électrique tourne en permanence, factures 2x plus élevées que prévu), soit trop grande (cycles courts, usure prématurée du compresseur).",
          "Bon réflexe : exiger un calcul thermique précis lors de la visite technique (logiciel de simulation, pas la règle empirique '100 W/m²'). Demander à voir le rapport.",
        ],
        callout: {
          title: "Cas vécu",
          body: "Pavillon 130 m² à L'Isle-d'Abeau : PAC 8 kW posée par un autre artisan. Factures EDF 2 800 €/an au lieu des 1 200 € promis. Diagnostic : sous-dimensionnement (il fallait 11 kW). Remplacement = 5 000 € de plus, en plus de l'investissement initial.",
        },
      },
      {
        heading: "Erreur n°2 : Négliger l'isolation",
        paragraphs: [
          "Une PAC posée sur une maison passoire ne fera jamais d'économies. La PAC tournera en permanence à plein régime ou basculera sur l'appoint électrique : effet inverse de l'objectif.",
          "Bon réflexe : si votre maison date d'avant 1990 sans rénovation isolation, isoler les combles AVANT ou EN MÊME TEMPS que la PAC. C'est non négociable.",
        ],
      },
      {
        heading: "Erreur n°3 : Choisir uniquement sur le prix",
        paragraphs: [
          "Un devis 30% moins cher que les autres cache souvent : matériel d'entrée de gamme (durée de vie 10 ans au lieu de 18), pose bâclée (pas de tirage au vide complet, mauvais raccordements frigorifiques), absence de garantie pièces.",
          "Bon réflexe : comparer 2-3 devis d'artisans RGE locaux. Les écarts s'expliquent par la marque, le calibre du compresseur, la qualité de pose, le SAV. Le moins cher = souvent le plus cher sur 15 ans.",
        ],
      },
      {
        heading: "Erreur n°4 : Mauvais emplacement de l'unité extérieure",
        paragraphs: [
          "Trop près du mur des voisins (bruit), exposé plein nord (givrage excessif), enfouie dans un creux (recyclage de l'air froid déjà refroidi), trop loin de la maison (longues liaisons frigo qui dégradent le COP).",
          "Bon réflexe : l'emplacement doit être étudié avec l'artisan en visite technique. Distance minimum aux voisins (3 m), exposition sud-est ou sud, dégagement avant et au-dessus.",
        ],
      },
      {
        heading: "Erreur n°5 : Pas de programmation horaire",
        paragraphs: [
          "Une PAC qui chauffe toute la maison à 21 °C en permanence consomme 25-40% de plus qu'une PAC bien programmée (réduction nuit, mode absence). Beaucoup d'utilisateurs ne configurent JAMAIS les programmes après la pose.",
          "Bon réflexe : demander à l'installateur de configurer la programmation pendant la mise en service, et de vous expliquer en détail. Refusez la mise en service 'en 5 minutes' où on vous donne juste les codes.",
        ],
      },
    ],
    faq: [
      {
        q: "Mon installateur précédent a fait l'une de ces erreurs : que faire ?",
        a: "Contacter d'abord l'installateur (garantie biennale légale 2 ans, décennale sur la pose 10 ans). Si pas de réponse satisfaisante : médiation Direction Générale de la Concurrence. En parallèle, on peut faire un audit pour confirmer le problème.",
      },
      {
        q: "Comment vérifier le bon dimensionnement avant signature ?",
        a: "Demander le rapport de calcul thermique (logiciel pro). Surface m² + isolation + zone climatique → puissance nominale en kW. Si l'artisan ne sait pas vous le montrer = signal d'alerte.",
      },
      {
        q: "Combien coûte une étude thermique pro ?",
        a: "Gratuit chez ECO CVC lors de la visite technique. Chez certains, 200-400 €. Méfiance des 'études express' qui se font au téléphone : impossible techniquement.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "vienne", "voiron"],
    relatedServices: [
      { href: "/installation", label: "Installation par RGE QualiPAC" },
      { href: "/depannage", label: "Reprendre une installation défectueuse" },
    ],
  },
  {
    slug: "ce-que-les-installateurs-ne-vous-disent-pas",
    title: "Pompe à chaleur : ce que les installateurs ne vous disent pas toujours",
    metaTitle: "PAC : 7 vérités que les installateurs ne disent pas | ECO CVC",
    metaDescription:
      "7 vérités peu dites sur la pompe à chaleur en 2026 : marges réelles, durée de vie, performance hivernale, marques à privilégier. Article transparence ECO CVC, RGE QualiPAC.",
    category: "Pratique",
    publishedAt: "2026-04-08",
    updatedAt: "2026-05-07",
    readingMinutes: 8,
    excerpt:
      "Les pubs PAC vendent du rêve. Voici 7 vérités que peu d'artisans osent dire à leurs clients — mais qui font la différence entre une bonne et une mauvaise expérience.",
    intro: [
      "Vendre une PAC, c'est facile. La poser correctement, beaucoup moins. Voici 7 vérités importantes que les installateurs ne mettent pas en avant pendant les visites commerciales — par habitude, négligence, ou parfois pour vendre plus facilement. Article écrit en transparence par ECO CVC, RGE QualiPAC.",
    ],
    sections: [
      {
        heading: "Vérité n°1 : Le COP marketing n'est pas le COP réel",
        paragraphs: [
          "Le COP nominal affiché sur les fiches produits est mesuré en laboratoire à +7 °C extérieur. Dans la vraie vie en hiver français, le COP descend à 2,5-3 quand il fait 0 °C, et 1,8-2,2 à -10 °C.",
          "Ce qui compte vraiment : le SCOP (saisonnier), qui prend en compte les variations annuelles. Demandez TOUJOURS le SCOP, pas le COP nominal.",
        ],
      },
      {
        heading: "Vérité n°2 : L'appoint électrique, on n'en parle pas",
        paragraphs: [
          "Toutes les PAC ont une résistance électrique d'appoint qui se déclenche en grand froid. C'est NORMAL et nécessaire. Mais quand on vous vend des économies '70%', on suppose que l'appoint ne tourne JAMAIS — ce qui est faux.",
          "Sur une saison normale en Isère, l'appoint pèse 5-15% de la conso totale. Sur une vague de froid, ça monte à 25-30% temporairement.",
        ],
      },
      {
        heading: "Vérité n°3 : Toutes les marques ne se valent pas",
        paragraphs: [
          "Différence en durée de vie réelle observée :",
        ],
        list: [
          "Daikin Altherma 3, Mitsubishi Ecodan : 18-22 ans avec entretien",
          "Atlantic Alféa Excellia : 15-18 ans",
          "Marques milieu de gamme (AUX, Hisense) : 12-15 ans",
          "Marques bas de gamme '2x moins cher' : souvent 8-12 ans",
        ],
        callout: {
          title: "Notre conseil",
          body: "Sur 20 ans, une PAC haut de gamme à 14 000 € qui tient 20 ans = 700 €/an. Une PAC bas de gamme à 9 000 € qui tient 10 ans = 900 €/an, plus le coût de remplacement. Le 'pas cher' est souvent une fausse économie.",
        },
      },
      {
        heading: "Vérité n°4 : La marge est élevée sur le matériel",
        paragraphs: [
          "Marge artisan moyenne sur le matériel : 30-50%. C'est NORMAL (transport, stockage, garantie, services). Mais ça explique pourquoi 2 devis similaires peuvent varier de 2 000-4 000 €.",
          "Demandez le coût matériel séparé du coût main d'œuvre. Un artisan transparent ne devrait pas refuser.",
        ],
      },
      {
        heading: "Vérité n°5 : Le SAV en panne hivernale, c'est compliqué",
        paragraphs: [
          "Quand votre PAC tombe en panne le 15 décembre, tous les artisans sont saturés. Délai d'intervention typique : 5-10 jours hors contrat de maintenance. Vous chauffez à l'électrique direct entretemps = facture qui explose.",
          "Conseil : prendre un contrat d'entretien annuel (180-280 €/an) qui inclut la priorité dépannage sous 24-48h. Ce qu'on vend rarement parce que ça réduit notre marge sur les nouvelles installations.",
        ],
      },
      {
        heading: "Vérité n°6 : Les aides ne couvrent pas tout, jamais 100%",
        paragraphs: [
          "Même pour un ménage Bleu sortant du fioul, les aides cumulées plafonnent à environ 70-90% du devis matériel + pose. Reste 1 500-3 000 € minimum à régler.",
          "Méfiance des artisans qui promettent 'reste à charge zéro' : c'est rarement vrai, et c'est un signal d'alerte pour la qualité.",
        ],
      },
      {
        heading: "Vérité n°7 : L'isolation passe AVANT la PAC",
        paragraphs: [
          "Une PAC sur une maison mal isolée = factures qui ne baissent jamais comme prévu. Mais un artisan PAC qui vous conseille d'isoler d'abord 'perd' la vente immédiate.",
          "Chez ECO CVC, on refuse régulièrement de poser une PAC quand l'isolation est trop faible. Mieux vaut perdre un chantier qu'un client mécontent dans 2 ans.",
        ],
      },
    ],
    faq: [
      {
        q: "Vous êtes installateur, pourquoi écrire ça ?",
        a: "Parce que les clients informés sont des meilleurs clients. Ils choisissent mieux, ils sont satisfaits plus longtemps, et ils nous recommandent. La transparence est notre stratégie commerciale.",
      },
      {
        q: "Comment savoir si je peux faire confiance à un artisan ?",
        a: "5 critères : 1) RGE QualiPAC vérifiable, 2) entreprise > 5 ans d'ancienneté, 3) avis Google publics, 4) répond à TOUTES vos questions sans esquiver, 5) ne fait pas de pression à signer.",
      },
      {
        q: "Faut-il toujours préférer un artisan local à une grande enseigne ?",
        a: "Pas forcément. L'artisan local connaît mieux le climat et les contraintes locales. Une grande enseigne a parfois plus de moyens pour le SAV. À évaluer au cas par cas selon les avis et la confiance.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne"],
    relatedServices: [
      { href: "/blog/5-erreurs-a-eviter-pompe-a-chaleur", label: "5 erreurs à éviter avec une PAC" },
      { href: "/avis", label: "Nos avis clients" },
    ],
  },
  {
    slug: "pompe-a-chaleur-en-location-qui-paye",
    title: "Pompe à chaleur en location : qui paye, propriétaire ou locataire ?",
    metaTitle: "PAC en location : qui paye ? Propriétaire ou locataire | ECO CVC",
    metaDescription:
      "Pompe à chaleur en logement loué : qui paye l'achat, l'entretien, les réparations ? Loi Pinel, décence, MaPrimeRénov' bailleur. Guide ECO CVC 2026.",
    category: "Pratique",
    publishedAt: "2026-04-30",
    updatedAt: "2026-05-07",
    readingMinutes: 6,
    excerpt:
      "Locataire qui veut une PAC, propriétaire qui hésite à investir : qui paye quoi ? Le cadre légal 2026 et nos conseils pratiques.",
    intro: [
      "C'est une question récurrente : dans un logement loué, qui paye l'installation de la PAC, et qui paye l'entretien ? Le Code civil et la loi du 6 juillet 1989 cadrent les rôles, mais beaucoup d'arrangements pratiques existent. Voici les règles claires en 2026.",
    ],
    sections: [
      {
        heading: "Installation : c'est le propriétaire",
        paragraphs: [
          "Le remplacement d'un système de chauffage est une amélioration du logement, donc à la charge du propriétaire bailleur. Le locataire n'a aucune obligation de financer une PAC, même si elle bénéficie aussi à lui en réduisant ses factures.",
          "Le propriétaire peut bénéficier de MaPrimeRénov' bailleur, sous condition de louer le logement en résidence principale pendant 6 ans après les travaux. Plafonds de revenus : ceux du propriétaire (pas du locataire).",
        ],
      },
      {
        heading: "Entretien annuel : c'est le locataire",
        paragraphs: [
          "L'entretien courant (visite annuelle obligatoire pour PAC > 4 kW, décret 2020-912) est à la charge du locataire selon le décret du 26 août 1987. Coût : 180-280 €/an pour un contrat d'entretien classique.",
          "Le locataire est tenu de fournir l'attestation d'entretien annuel sur demande du propriétaire (souvent à la sortie du bail).",
        ],
      },
      {
        heading: "Réparations : règle des 'menues réparations'",
        paragraphs: [
          "Les petites réparations (filtres, télécommande, joints standards) sont à la charge du locataire. Les pannes structurelles (compresseur, carte électronique, fluide frigorigène) sont à la charge du propriétaire.",
          "En pratique : vétusté = bailleur, négligence locataire = locataire, panne accidentelle = bailleur. Tout litige relève du tribunal d'instance.",
        ],
      },
      {
        heading: "Cas où le locataire veut faire poser une PAC",
        paragraphs: [
          "Si le locataire souhaite une PAC alors que le propriétaire n'en veut pas : autorisation écrite préalable indispensable. Le propriétaire peut refuser. S'il accepte, le locataire paye et garde le matériel à la sortie du bail (ou négocie un rachat).",
          "Solution alternative : split mural mobile (clim mobile à roulettes) qui n'engage pas le bâti — pas besoin d'accord bailleur.",
        ],
      },
      {
        heading: "Décence du logement et obligation 2025-2034",
        paragraphs: [
          "Depuis 2023, les logements classés G en DPE ne peuvent plus être loués à de nouveaux locataires. F en 2028, E en 2034. Pour de nombreux propriétaires, installer une PAC fait passer un logement de F à C ou D, et permet de continuer à louer.",
          "Argument de poids pour les bailleurs : MaPrimeRénov' couvre une bonne partie de l'investissement, et le bien gagne 5-15% en valeur immobilière à la revente.",
        ],
      },
    ],
    faq: [
      {
        q: "Mon propriétaire refuse de poser une PAC alors que la chaudière est HS, je fais quoi ?",
        a: "Le propriétaire est tenu de fournir un système de chauffage en bon état (logement décent, art. 6 loi 1989). Mise en demeure par LRAR. À défaut, saisie de la commission départementale de conciliation puis tribunal.",
      },
      {
        q: "Si je suis bailleur, MaPrimeRénov' = quel montant ?",
        a: "Mêmes barèmes que pour propriétaire occupant (selon revenus du propriétaire). Mais engagement de location pendant 6 ans en résidence principale au tarif normal.",
      },
      {
        q: "Le locataire peut-il refuser l'entretien annuel obligatoire ?",
        a: "Non. Sans entretien : garantie constructeur annulée, propriétaire peut demander dédommagement à la sortie du bail. Le locataire signe son bail en connaissant cette obligation.",
      },
    ],
    relatedCities: ["lyon", "bourgoin-jallieu", "vienne"],
    relatedServices: [
      { href: "/devis-pompe-a-chaleur", label: "Devis PAC bailleur" },
      { href: "/blog/maprimerenov-2026-pompe-a-chaleur", label: "MaPrimeRénov' 2026 complet" },
    ],
  },
  {
    slug: "ballon-thermodynamique-prix-avis",
    title: "Ballon thermodynamique : prix, fonctionnement, choix 2026",
    metaTitle: "Ballon thermodynamique 2026 : prix, COP, modèles | ECO CVC Isère",
    metaDescription:
      "Ballon d'eau chaude thermodynamique 2026 : principe, prix posé, COP, marques (Atlantic, Thermor, Ariston). Aides MaPrimeRénov'. Installation par ECO CVC.",
    category: "Choisir sa PAC",
    publishedAt: "2026-04-12",
    updatedAt: "2026-05-07",
    readingMinutes: 6,
    excerpt:
      "Un ballon thermodynamique consomme 70% de moins qu'un cumulus électrique. C'est l'investissement le plus rentable d'une rénovation énergétique. Voici tout ce qu'il faut savoir.",
    intro: [
      "Le ballon thermodynamique (ECS — eau chaude sanitaire — par PAC dédiée) est l'un des dispositifs les plus rentables d'une rénovation. Investissement modéré, économies massives, aides MaPrimeRénov' applicables. Voici le guide complet 2026.",
    ],
    sections: [
      {
        heading: "Comment ça marche",
        paragraphs: [
          "Un ballon thermodynamique combine un ballon d'eau chaude classique (200, 250 ou 300 L) et une mini-PAC air/eau intégrée qui pioche les calories de l'air ambiant (souvent dans un local non chauffé : garage, buanderie, sous-sol).",
          "COP moyen 3 à 3,5 : 1 kWh d'électricité produit 3 à 3,5 kWh de chaleur dans l'eau. Vs un cumulus électrique classique COP 1 = 70% d'économies sur le poste ECS.",
        ],
      },
      {
        heading: "Prix posée 2026",
        paragraphs: ["Selon volume et marque :"],
        list: [
          "Ballon 200 L (1-2 personnes) : 2 800 à 4 000 € posé",
          "Ballon 250 L (3-4 personnes) : 3 200 à 4 800 € posé",
          "Ballon 300 L (5+ personnes) : 3 800 à 5 500 € posé",
          "Modèles haut de gamme connectés (Atlantic Egeo, Thermor) : +500-1 000 €",
        ],
      },
      {
        heading: "Aides 2026",
        paragraphs: ["Le ballon thermodynamique est éligible :"],
        list: [
          "MaPrimeRénov' : 1 200 € (Bleu), 800 € (Jaune), 400 € (Violet)",
          "Coup de pouce CEE : 200 à 500 € selon profil",
          "TVA 5,5% : ~500 € d'économie",
          "Total aides typiques : 1 200 à 2 200 €. Reste à charge moyen 1 800-3 500 €",
        ],
        callout: {
          title: "Très bon ROI",
          body: "Économies typiques : 250-400 €/an sur la facture EDF. Amortissement 5-10 ans. Sur 15 ans (durée de vie) : économie nette 2 000-4 500 €.",
        },
      },
      {
        heading: "Marques principales",
        paragraphs: ["Notre comparatif terrain :"],
        list: [
          "Atlantic Egeo / Calypso : marque française, app mobile, fiabilité 15+ ans observée",
          "Thermor Aeromax / Airlis : aussi groupe Atlantic, gammes proches",
          "Ariston Nuos / Velis : alternative italienne, légèrement moins cher",
          "Daikin Altherma EKHWS : haut de gamme, intégrable avec PAC chauffage",
        ],
      },
      {
        heading: "Conditions d'installation",
        paragraphs: ["Pour bien fonctionner :"],
        list: [
          "Local de pose ≥ 10-15 m³ d'air disponible (garage, buanderie, cellier)",
          "Local non chauffé (l'air capté refroidit la pièce — pas dans le séjour)",
          "Évacuation des condensats vers le tout-à-l'égout ou un puits perdu",
          "Alimentation 230V monophasé 16A",
          "Espace suffisant pour la maintenance (50 cm devant)",
        ],
      },
    ],
    faq: [
      {
        q: "Ballon thermodynamique vs solaire thermique : quel est le meilleur ?",
        a: "Solaire = encore plus rentable mais demande toiture orientée sud + investissement initial 5 000-9 000 €. Combinable : solaire en été, thermo en hiver. Le ballon thermo seul reste plus simple à poser.",
      },
      {
        q: "Combien de temps pour la pose ?",
        a: "1 journée en remplacement d'un ancien cumulus. 1-2 jours en installation neuve avec création des évacuations.",
      },
      {
        q: "Mon ancien cumulus électrique a 8 ans, je le change ?",
        a: "Si la résistance ne saute pas et qu'il fonctionne bien, attendez 2-3 ans. Mais à la première panne sérieuse, basculez sur thermodynamique : amortissement plus rapide.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne"],
    relatedServices: [
      { href: "/installation", label: "Installation PAC + ECS" },
      { href: "/simulateur-aides", label: "Calculer mes aides" },
    ],
  },
  {
    slug: "pompe-a-chaleur-pour-appartement",
    title: "Pompe à chaleur en appartement : faisabilité, prix, démarches",
    metaTitle: "PAC en appartement 2026 : air-eau, air-air, syndic | ECO CVC",
    metaDescription:
      "Pompe à chaleur en appartement : faisabilité technique, accord syndic, prix posé, aides MaPrimeRénov' copropriété. Guide ECO CVC pour Lyon, Grenoble.",
    category: "Pratique",
    publishedAt: "2026-04-05",
    updatedAt: "2026-05-07",
    readingMinutes: 6,
    excerpt:
      "Beaucoup pensent que la PAC est réservée aux maisons. Faux : elle est faisable en appartement dans 80% des cas, à condition de respecter quelques règles techniques et juridiques.",
    intro: [
      "Avec les canicules récurrentes et la hausse du gaz, la PAC en appartement explose dans les centres-villes. Lyon, Grenoble, Annecy, Chambéry : nous équipons régulièrement des copropriétés. Voici comment ça se passe en pratique.",
    ],
    sections: [
      {
        heading: "PAC air-air vs air-eau en appartement",
        paragraphs: ["Les 2 options sont possibles, avec des contraintes différentes :"],
        list: [
          "PAC air-air (climatisation réversible) : 95% des cas en appartement. Splits muraux + 1 unité extérieure sur balcon ou en façade.",
          "PAC air-eau : possible si la copropriété a chauffage individuel et un emplacement pour l'unité extérieure. Plus rare car nécessite circuit hydraulique.",
          "Pas envisageable : géothermie (besoin de terrain), gainable (besoin de combles).",
        ],
      },
      {
        heading: "Démarches en copropriété",
        paragraphs: ["L'unité extérieure modifie l'aspect du bâtiment = accord syndic obligatoire :"],
        list: [
          "Demande inscrite à l'ordre du jour de l'AG (au moins 2 mois avant)",
          "Dossier technique : plan d'implantation, fiche acoustique, photo simulée",
          "Vote en AG : majorité simple (art. 25 loi 1965) si simple aspect, majorité absolue (art. 26) si gros œuvre",
          "Délai global : 4 à 8 mois entre demande et installation",
        ],
        callout: {
          title: "Notre service inclus",
          body: "ECO CVC fournit à tous ses prospects en copropriété un dossier 'prêt pour AG' : plans 2D, fiche technique, mesure acoustique signée, exemple de résolution. Taux d'acceptation typique : 80%+.",
        },
      },
      {
        heading: "Prix posée 2026 en appartement",
        paragraphs: ["Configurations courantes :"],
        list: [
          "Mono-split T2 (séjour 25 m²) : 1 800 à 2 800 € posé",
          "Bi-split T3 (séjour + chambre) : 3 500 à 4 800 € posé",
          "Tri-split T4 (séjour + 2 chambres) : 5 200 à 6 800 € posé",
          "Quadri-split T5 (4 pièces) : 6 500 à 8 500 € posé",
        ],
      },
      {
        heading: "Aides applicables en appartement",
        paragraphs: ["MaPrimeRénov' fonctionne aussi en copropriété :"],
        list: [
          "MaPrimeRénov' Copropriété : pour rénovations d'ampleur de l'immeuble",
          "MaPrimeRénov' individuelle : applicable au lot privatif",
          "Coup de pouce CEE : 250 à 1 100 € selon revenus pour clim air-air",
          "TVA 5,5%, éco-PTZ disponibles",
          "Aides locales (Lyon Métropole Eco-Rénov, Grenoble MurMur 2)",
        ],
      },
      {
        heading: "Pièges à éviter",
        paragraphs: ["Les 3 erreurs classiques en appartement :"],
        list: [
          "Signer un devis avant accord syndic — risque de refus en AG = perte de l'acompte",
          "Choisir un modèle bruyant — voisinage difficile, plaintes possibles",
          "Sous-estimer l'emplacement de l'unité ext. — distances aux voisins, accessibilité maintenance",
        ],
      },
    ],
    faq: [
      {
        q: "Mon syndic refuse en AG, je peux faire quoi ?",
        a: "Vous pouvez ré-essayer l'AG suivante avec un dossier amélioré. Vous pouvez aussi opter pour une climatisation mobile (sans modification extérieure) qui ne nécessite pas d'accord.",
      },
      {
        q: "Combien de temps pour avoir un accord syndic ?",
        a: "AG annuelle obligatoire (printemps en général). Demande à inscrire 2 mois avant. Si refusé : nouvelle AG l'année suivante (12 mois). Si validé : pose dans les 2-4 mois.",
      },
      {
        q: "Lyon Vieux Lyon ou centre Annecy : faisable malgré ABF ?",
        a: "Souvent oui. Solutions : unité ext. sur balcon arrière (non visible rue), masquage par claustra, parfois passage en clim monobloc fenêtre (sans unité ext. visible).",
      },
    ],
    relatedCities: ["lyon", "villeurbanne", "grenoble", "vienne"],
    relatedServices: [
      { href: "/devis-climatisation", label: "Devis climatisation appartement" },
      { href: "/blog/climatisation-appartement-copropriete", label: "Démarches copropriété en détail" },
    ],
  },
  {
    slug: "pose-pompe-a-chaleur-en-juillet-aout",
    title: "Faire poser une pompe à chaleur en juillet-août : bonne idée ?",
    metaTitle: "Pose PAC en juillet-août : avantages et délais | ECO CVC",
    metaDescription:
      "Pose pompe à chaleur en juillet-août : meilleurs délais, tarifs, avantages. Profitez de la basse saison artisans pour préparer l'hiver. ECO CVC en Isère.",
    category: "Pratique",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-07",
    readingMinutes: 4,
    excerpt:
      "Beaucoup attendent l'automne pour faire poser leur PAC… et se retrouvent saturés. Le meilleur moment pour poser, c'est juillet-août. Voici pourquoi.",
    intro: [
      "Septembre-novembre, c'est le pic de demande PAC : tout le monde panique avant l'hiver. Délais qui s'allongent, plannings qui débordent, prix parfois plus tendus. Juillet-août est, paradoxalement, le moment idéal pour faire poser. Voici les 5 raisons.",
    ],
    sections: [
      {
        heading: "1. Délais ultra-courts",
        paragraphs: [
          "En juillet-août, les délais d'intervention chutent. Une visite technique sous 48-72h (vs 2-3 semaines en automne), pose programmée 2-3 semaines plus tard (vs 6-10 semaines).",
          "Si tu commences en juillet, ton chantier peut être bouclé fin août. En partant en septembre, tu vises plus probablement octobre-novembre, parfois décembre.",
        ],
      },
      {
        heading: "2. Aides 2026 toujours valables",
        paragraphs: [
          "MaPrimeRénov', Coup de pouce CEE, TVA 5,5% : toutes les aides s'appliquent à la date de signature du devis. En signant en juillet, vous bénéficiez des barèmes 2026 actuels.",
          "Attention : les barèmes peuvent évoluer en cours d'année (généralement à la baisse). Sécuriser le dossier en juillet protège du risque de baisse en septembre/octobre.",
        ],
      },
      {
        heading: "3. Préparation hiver sereine",
        paragraphs: [
          "PAC posée et mise en service en août : vous avez 2-3 mois pour la prendre en main, ajuster la programmation horaire, repérer la consommation à températures douces. Quand le froid arrive, l'installation est rodée.",
          "Vs pose en novembre : urgence, pas le temps d'optimiser, premier hiver chaotique.",
        ],
      },
      {
        heading: "4. Confort climatisation immédiat (PAC réversible)",
        paragraphs: [
          "Pour les PAC réversibles (air-air, ou air-eau avec plancher rafraîchissant), la pose en juillet vous permet de profiter du rafraîchissement dès la fin du chantier. Bonus appréciable en pleine canicule.",
        ],
      },
      {
        heading: "5. Tarifs souvent négociables",
        paragraphs: [
          "Les artisans CVC ont moins de demande en été : plus enclins à négocier, à proposer des extras (extension de garantie, contrat d'entretien à tarif réduit).",
          "Sans tomber dans le marchandage agressif, demander un geste commercial est fréquemment accepté en juillet-août.",
        ],
      },
    ],
    faq: [
      {
        q: "Pas de risque de surchauffe pendant la pose en plein été ?",
        a: "Non. Nos techniciens travaillent en tenue technique adaptée. Les unités extérieures et intérieures se posent à température ambiante. Aucun impact qualité.",
      },
      {
        q: "ECO CVC est en congés en août ?",
        a: "Pas tout l'été. Nous gardons une équipe minimum en astreinte pour les dépannages urgents et plannifions les nouvelles installations en juillet et fin août. Demande de devis acceptée toute l'année.",
      },
      {
        q: "Faut-il être présent pendant la pose ?",
        a: "Oui pour le 1er jour (étude technique sur site, validation positionnement) et le dernier (mise en service, formation à l'utilisation). Entre-temps, présence non obligatoire si l'artisan a accès au logement.",
      },
    ],
    relatedCities: ["bourgoin-jallieu", "lyon", "vienne", "voiron"],
    relatedServices: [
      { href: "/devis-pompe-a-chaleur", label: "Devis PAC sous 24h" },
      { href: "/contact", label: "Prendre RDV technique" },
    ],
  },
];

export const findArticle = (slug: string) => articles.find((a) => a.slug === slug);
