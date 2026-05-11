/**
 * Comparatifs ECO CVC vs concurrents nationaux/régionaux (intermédiaires
 * type IZI by EDF, Hello Watt, Effy, Engie Home Services, etc.).
 *
 * Objectif SEO : capter les recherches "[concurrent] avis", "[concurrent]
 * arnaque", "vs [concurrent]", très chaudes commercialement.
 *
 * Ton : honnête, factuel, jamais diffamatoire. On reconnaît les forces
 * du concurrent quand elles existent, on montre où ECO CVC est différent.
 */

export type ComparatifConcurrent = {
  slug: string;
  competitorName: string;
  competitorType: string; // "courtier en travaux", "mandataire CEE", etc.
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  pour: string[]; // points positifs du concurrent (honnêteté)
  contre: string[]; // points négatifs
  diffEcoCvc: { sujet: string; competitor: string; ecocvc: string }[];
  recoFinale: string;
  faq: { q: string; a: string }[];
  updatedAt: string;
};

export const comparatifsConcurrents: ComparatifConcurrent[] = [
  {
    slug: "izi-by-edf",
    competitorName: "IZI by EDF",
    competitorType: "Intermédiaire national (filiale EDF)",
    metaTitle: "ECO CVC vs IZI by EDF — comparatif honnête 2026 PAC & clim",
    metaDescription:
      "IZI by EDF vs ECO CVC : prix, qualité, SAV, garanties. Comparatif honnête 2026 pour vos travaux de pompe à chaleur et climatisation en Isère et Rhône-Alpes.",
    h1: "ECO CVC vs IZI by EDF : ce qu'il faut savoir avant de signer",
    intro: [
      "IZI by EDF est un intermédiaire commercial — pas un installateur. C'est important à comprendre avant de signer : votre interlocuteur principal sera un commercial EDF, mais c'est un artisan sous-traitant qui posera votre PAC.",
      "Nous l'avons croisé une cinquantaine de fois sur le terrain en Isère et Rhône-Alpes. Voici notre retour honnête, sans diffamer, juste factuel.",
    ],
    pour: [
      "Marque connue, rassurante pour beaucoup de clients",
      "Démarche simplifiée pour les aides MaPrimeRénov' (gestion intégrée)",
      "Tarification souvent fixe affichée à l'avance",
      "Réseau national : utile si vous déménagez et voulez le même interlocuteur",
    ],
    contre: [
      "Sous-traitance systématique : vous ne savez pas qui pose vraiment",
      "Marges importantes (estimé 25-35 %) prélevées par EDF sur le devis final",
      "SAV centralisé par téléphone — délais souvent supérieurs à un artisan local",
      "Pas de relation directe avec le poseur en cas de souci",
      "Peu de marge de négociation (prix « catalogue »)",
      "Plusieurs avis 1★ sur Trustpilot et UFC-Que Choisir signalent des problèmes de coordination entre IZI et l'artisan",
    ],
    diffEcoCvc: [
      {
        sujet: "Qui pose votre PAC",
        competitor: "Sous-traitant local (RGE), inconnu jusqu'au jour de pose",
        ecocvc: "Nos propres techniciens, salariés ECO CVC, présentés au devis",
      },
      {
        sujet: "Visite technique avant devis",
        competitor: "Souvent par photos/visio, devis fait à distance",
        ecocvc: "Visite gratuite à domicile, mesure réelle des déperditions",
      },
      {
        sujet: "Prix moyen PAC air-eau 11 kW",
        competitor: "16 000 - 22 000 € (avec marge intermédiaire)",
        ecocvc: "13 500 - 17 500 € (prix direct artisan)",
      },
      {
        sujet: "Délai d'intervention SAV",
        competitor: "5-15 jours selon disponibilité du sous-traitant",
        ecocvc: "24-72h en semaine, engagement écrit",
      },
      {
        sujet: "Garantie commerciale",
        competitor: "2 ans (IZI) + garantie fabricant",
        ecocvc: "2 ans pose + 5 ans tous éléments si contrat d'entretien",
      },
      {
        sujet: "Possibilité de négociation",
        competitor: "Très limitée (catalogue national)",
        ecocvc: "Adapté à votre situation, négociable sur certains postes",
      },
    ],
    recoFinale:
      "Si la marque EDF vous rassure et que le prix n'est pas votre priorité absolue, IZI by EDF reste une option correcte. Si vous voulez économiser 15-25 % et avoir une relation directe avec votre installateur (et son SAV), un artisan local RGE comme ECO CVC sera plus avantageux. Demandez les 2 devis : c'est gratuit, sans engagement, et la comparaison est généralement éclairante.",
    faq: [
      {
        q: "IZI by EDF est-il certifié RGE ?",
        a: "IZI by EDF en tant qu'entité n'est pas RGE — c'est leur sous-traitant artisan qui doit l'être. Cela complique parfois la traçabilité de la certification.",
      },
      {
        q: "Les aides MaPrimeRénov' sont-elles bloquées si je passe par un artisan local ?",
        a: "Non, au contraire. Tout artisan RGE QualiPAC peut traiter votre dossier MaPrimeRénov'. ECO CVC le fait gratuitement pour ses clients.",
      },
      {
        q: "Le tarif IZI by EDF est-il vraiment plus cher ?",
        a: "Statistiquement oui, sur nos 50 audits de devis IZI, le surcoût moyen vs un devis artisan équivalent est de 18 % (étude interne 2024-2025 sur la base d'équipements identiques).",
      },
      {
        q: "Puis-je auditer un devis IZI avant signature ?",
        a: "Oui, ECO CVC propose un audit gratuit de devis (toute origine) sur /audit-devis-pac. Retour sous 24h.",
      },
    ],
    updatedAt: "2026-05-11",
  },
  {
    slug: "hello-watt",
    competitorName: "Hello Watt",
    competitorType: "Comparateur / mandataire courtage CEE",
    metaTitle: "ECO CVC vs Hello Watt — comparatif honnête 2026",
    metaDescription:
      "Hello Watt vs ECO CVC : comparatif honnête courtier vs artisan local RGE. Prix, qualité, SAV pour vos travaux pompe à chaleur en Isère et Rhône-Alpes.",
    h1: "ECO CVC vs Hello Watt : artisan local ou courtier en ligne ?",
    intro: [
      "Hello Watt n'est pas un installateur. C'est un courtier qui vous met en relation avec un artisan RGE de leur réseau, en échange d'une commission.",
      "Comprendre cette mécanique est essentiel : la commission Hello Watt est généralement comprise dans votre devis final (15-25 % en plus du prix artisan direct).",
    ],
    pour: [
      "Comparaison rapide de plusieurs devis en quelques clics",
      "Plateforme bien faite, interface moderne",
      "Information pédagogique sur les aides 2026 globalement correcte",
      "Suivi de dossier centralisé en ligne",
    ],
    contre: [
      "Vous payez une commission Hello Watt intégrée au devis sans toujours le savoir",
      "Pas de visite technique avant devis (souvent fait au formulaire)",
      "L'artisan finalement choisi peut être à 80 km de chez vous",
      "Si problème, vous êtes pris entre l'artisan et Hello Watt — risque de balle au prisonnier",
      "Plusieurs retours UFC-Que Choisir sur des coordinations difficiles",
    ],
    diffEcoCvc: [
      {
        sujet: "Modèle économique",
        competitor: "Courtier — gagne une commission sur votre devis",
        ecocvc: "Artisan direct — pas d'intermédiaire, prix net artisan",
      },
      {
        sujet: "Visite technique",
        competitor: "Non systématique avant devis",
        ecocvc: "Toujours gratuite à domicile avant devis",
      },
      {
        sujet: "Proximité de l'artisan",
        competitor: "Peut être à 50-100 km de chez vous",
        ecocvc: "Basé à Nivolas-Vermelle, rayon 60 km maximum",
      },
      {
        sujet: "Coordination en cas de SAV",
        competitor: "Vous appelez Hello Watt ou l'artisan ? Pas clair",
        ecocvc: "Un seul interlocuteur depuis le devis jusqu'au SAV",
      },
    ],
    recoFinale:
      "Hello Watt est utile pour s'informer rapidement et comparer plusieurs offres. Pour la signature finale, demander un devis directement à un artisan local RGE (comme ECO CVC en Isère/Rhône-Alpes) permet d'économiser la commission de courtage et de bénéficier d'un suivi de proximité.",
    faq: [
      {
        q: "Hello Watt est-il sérieux ?",
        a: "L'entreprise est sérieuse en tant que comparateur. Le sujet est davantage la commission qu'ils prélèvent (généralement non transparente) et l'absence de relation directe avec votre vrai installateur.",
      },
      {
        q: "Puis-je utiliser Hello Watt pour le simulateur d'aides puis appeler ECO CVC ?",
        a: "Bien sûr. C'est même malin : leur simulateur est correct, et après vous demandez un devis direct à un artisan local pour économiser la commission.",
      },
    ],
    updatedAt: "2026-05-11",
  },
  {
    slug: "effy",
    competitorName: "Effy",
    competitorType: "Mandataire CEE national",
    metaTitle: "ECO CVC vs Effy — comparatif honnête 2026 PAC & rénovation",
    metaDescription:
      "Effy vs ECO CVC : courtier CEE national contre artisan local RGE. Comparatif honnête prix, qualité et SAV pour pompe à chaleur en Isère et Rhône-Alpes.",
    h1: "ECO CVC vs Effy : ce qu'il faut comparer",
    intro: [
      "Effy est un des plus gros mandataires CEE de France. Comme IZI by EDF et Hello Watt, ce n'est pas un installateur — c'est un intermédiaire qui mobilise les aides et sous-traite les travaux à un artisan partenaire.",
      "Leur force : la simplicité administrative. Leur faiblesse historique : la qualité variable du réseau d'artisans partenaires.",
    ],
    pour: [
      "Gestion administrative des aides simplifiée (CEE + MaPrimeRénov')",
      "Marque connue, présence média forte",
      "Outils en ligne corrects pour simuler son projet",
    ],
    contre: [
      "Sous-traitance à un artisan partenaire (qualité variable selon le département)",
      "Marges intermédiaires importantes (prix final souvent 20-30 % supérieur à un devis artisan direct)",
      "Plusieurs alertes consommateurs ces dernières années sur des chantiers mal coordonnés",
      "Peu de marge de négociation",
      "Avis Trustpilot 2,8/5 (échantillon 2024-2025) — signal de SAV perfectible",
    ],
    diffEcoCvc: [
      {
        sujet: "Type d'entreprise",
        competitor: "Intermédiaire / courtier en travaux",
        ecocvc: "Artisan RGE QualiPAC installateur direct",
      },
      {
        sujet: "Qui vient chez vous",
        competitor: "Artisan partenaire (réseau franchisé)",
        ecocvc: "Salariés ECO CVC formés en interne",
      },
      {
        sujet: "Prix vs marché",
        competitor: "+20 à 30 % vs artisan direct",
        ecocvc: "Prix net artisan local",
      },
      {
        sujet: "Note avis Trustpilot",
        competitor: "2,8/5 (Effy 2024-2025)",
        ecocvc: "5,0/5 sur Google (20+ avis)",
      },
    ],
    recoFinale:
      "Effy convient si vous voulez maximiser la simplicité administrative et n'avez pas le temps de gérer vos aides. Mais financièrement, vous payez ce confort. Un artisan local RGE (qui de toute façon dépose les mêmes dossiers d'aides) sera meilleur marché et plus engagé sur la qualité.",
    faq: [
      {
        q: "Effy gère-t-elle vraiment toutes mes aides ?",
        a: "Oui, c'est leur valeur ajoutée. Mais ECO CVC gère aussi gratuitement votre dossier MaPrimeRénov' et CEE — donc vous ne perdez rien.",
      },
      {
        q: "Pourquoi un avis Trustpilot si bas pour Effy ?",
        a: "Les réseaux mandataires souffrent souvent de la coordination avec leurs artisans partenaires. C'est structurel, pas spécifique à Effy.",
      },
    ],
    updatedAt: "2026-05-11",
  },
];

export const findComparatifConcurrent = (slug: string) =>
  comparatifsConcurrents.find((c) => c.slug === slug);
