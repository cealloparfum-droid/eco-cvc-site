export type DevisConfig = {
  slug: string;
  service: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  promise: string;
  bullets: string[];
  trustBadges: string[];
  whyUs: { icon: "shield" | "clock" | "euro" | "award"; title: string; body: string }[];
  faq: { q: string; a: string }[];
  ctaPhone: string;
  formContext: string;
};

export const devisConfigs: DevisConfig[] = [
  {
    slug: "devis-pompe-a-chaleur",
    service: "Pompe à chaleur",
    title: "Devis pompe à chaleur — gratuit sous 24h",
    metaTitle: "Devis pompe à chaleur gratuit — ECO CVC, RGE QualiPAC Isère",
    metaDescription:
      "Devis pompe à chaleur air-eau ou air-air gratuit sous 24h en Isère et Rhône-Alpes. Artisan RGE QualiPAC, simulation MaPrimeRénov' & CEE incluse. ECO CVC.",
    h1: "Recevez votre devis pompe à chaleur sous 24h",
    promise:
      "Étude personnalisée par un artisan RGE QualiPAC, calcul précis des aides MaPrimeRénov' et prime CEE, devis détaillé sans engagement.",
    bullets: [
      "Visite technique gratuite chez vous",
      "Devis détaillé matériel + pose sous 24h",
      "Calcul de toutes les aides cumulables",
      "Reste à charge clair, pas de surprise",
    ],
    trustBadges: ["RGE QualiPAC", "Attestation F-Gaz", "Devis gratuit", "Sans engagement"],
    whyUs: [
      {
        icon: "shield",
        title: "Artisan RGE certifié",
        body: "Numéro RGE vérifiable, condition obligatoire pour MaPrimeRénov' et CEE.",
      },
      {
        icon: "clock",
        title: "Réactivité réelle",
        body: "Visite technique sous 48h, devis sous 24h après visite. Pas de relance à faire.",
      },
      {
        icon: "euro",
        title: "Aides au plus juste",
        body: "Simulation honnête de MaPrimeRénov' + CEE + aides locales selon votre profil.",
      },
      {
        icon: "award",
        title: "Pose & SAV intégrés",
        body: "Une seule équipe pour la pose, l'entretien et le dépannage. Pas de sous-traitance.",
      },
    ],
    faq: [
      {
        q: "Le devis est-il vraiment gratuit ?",
        a: "Oui, totalement. Visite technique + chiffrage + simulation des aides : aucun frais, aucun engagement.",
      },
      {
        q: "Combien de temps entre la demande et le devis ?",
        a: "Visite technique sous 48h, devis détaillé sous 24h après la visite. Soit environ 3-4 jours total.",
      },
      {
        q: "Vous intervenez dans quelle zone ?",
        a: "Toute la région Rhône-Alpes : Isère, Rhône, Savoie, Haute-Savoie, Loire. Atelier basé à Nivolas-Vermelle (38).",
      },
    ],
    ctaPhone: "+33629634045",
    formContext: "calculateur",
  },
  {
    slug: "devis-climatisation",
    service: "Climatisation réversible",
    title: "Devis climatisation réversible — gratuit sous 24h",
    metaTitle: "Devis climatisation gratuit — ECO CVC Isère, Rhône-Alpes",
    metaDescription:
      "Devis climatisation réversible gratuit sous 24h en Isère, Rhône, Lyon, Grenoble. Mono, multi-split ou gainable. Pose RGE certifiée par ECO CVC.",
    h1: "Devis climatisation réversible sous 24h",
    promise:
      "Mono-split, multi-split ou gainable : recevez un chiffrage clair pour climatiser votre logement, été comme hiver.",
    bullets: [
      "Conseil sur la configuration adaptée à votre logement",
      "Chiffrage matériel + pose tout compris",
      "Modèles silencieux ≤ 38 dB systématiques",
      "Prime CEE incluse dans la simulation",
    ],
    trustBadges: ["F-Gaz", "Devis gratuit", "Modèles silencieux", "Garantie 5 ans"],
    whyUs: [
      {
        icon: "shield",
        title: "Pose dans les règles",
        body: "Tirage au vide, mise en pression, plots anti-vibrations. La qualité de pose conditionne la durée de vie.",
      },
      {
        icon: "clock",
        title: "Pose en 1 à 2 jours",
        body: "Mono-split installé en 1/2 journée, multi-split 4 unités en 1-2 jours. Pas de chantier qui s'éternise.",
      },
      {
        icon: "euro",
        title: "Prime CEE éligible",
        body: "Climatisation réversible = éligible à la prime CEE (250 à 1 100 €). Nous montons le dossier.",
      },
      {
        icon: "award",
        title: "Toutes marques",
        body: "Daikin, Mitsubishi, Atlantic, AUX. On vous conseille selon votre budget et votre projet.",
      },
    ],
    faq: [
      {
        q: "Combien coûte une clim mono-split posée ?",
        a: "Pour 1 pièce de 25-30 m² : 1 800 à 2 800 € posé selon marque et puissance.",
      },
      {
        q: "Faut-il une autorisation en copropriété ?",
        a: "Oui dans la majorité des cas — vote en AG. Nous fournissons le dossier technique pour le syndic.",
      },
      {
        q: "Une clim chauffe-t-elle vraiment l'hiver ?",
        a: "Oui jusqu'à -10/-15 °C selon modèle. C'est même très efficace : 1 kWh consommé = 3 kWh restitués.",
      },
    ],
    ctaPhone: "+33629634045",
    formContext: "clim",
  },
  {
    slug: "devis-vmc",
    service: "Ventilation",
    title: "Devis VMC simple ou double flux — gratuit",
    metaTitle: "Devis VMC double flux gratuit — ECO CVC Isère, Rhône",
    metaDescription:
      "Devis VMC simple flux ou double flux gratuit. Étude en rénovation et neuf, prix posé, aides MaPrimeRénov'. ECO CVC, ventilation en Isère et Rhône-Alpes.",
    h1: "Devis VMC : simple ou double flux, sous 48h",
    promise:
      "Renouveler l'air, économiser sur le chauffage et améliorer la qualité d'air intérieur. Étude technique gratuite.",
    bullets: [
      "Conseil sur le type adapté (simple, double flux, hygro)",
      "Étude des réseaux de gaines en rénovation",
      "MaPrimeRénov' VMC double flux incluse dans la simulation",
      "Prix posé clair, sans extras cachés",
    ],
    trustBadges: ["RGE", "MaPrimeRénov' éligible", "Devis gratuit", "Pose certifiée"],
    whyUs: [
      {
        icon: "shield",
        title: "Étude thermique sérieuse",
        body: "Une VMC double flux mal posée = 80% des bénéfices perdus. Nous testons l'étanchéité avant pose.",
      },
      {
        icon: "clock",
        title: "Pose en 2-4 jours",
        body: "VMC simple flux : 1 jour. Double flux : 2-4 jours selon réseau de gaines.",
      },
      {
        icon: "euro",
        title: "MaPrimeRénov' VMC",
        body: "Jusqu'à 2 500 € pour la VMC double flux selon vos revenus, cumulable avec la prime CEE.",
      },
      {
        icon: "award",
        title: "Marques pro",
        body: "Aldes, Atlantic, Vortice. Filtres haute efficacité, échangeur 80-90% de récupération.",
      },
    ],
    faq: [
      {
        q: "VMC simple ou double flux, comment choisir ?",
        a: "Simple flux suffit en logement bien ventilé. Double flux devient rentable si la maison est isolée et étanche (test infiltrométrie ≤ 1,5 m³/h.m²).",
      },
      {
        q: "Combien coûte une VMC double flux posée ?",
        a: "4 500 à 8 000 € en maison plain-pied, 7 000 à 10 500 € en maison étagée. MaPrimeRénov' couvre 1 500 à 2 500 €.",
      },
    ],
    ctaPhone: "+33629634045",
    formContext: "ventilation",
  },
  {
    slug: "devis-froid-commercial",
    service: "Froid commercial",
    title: "Devis froid commercial — chambre froide & vitrines",
    metaTitle: "Devis froid commercial — chambre froide, vitrines | ECO CVC",
    metaDescription:
      "Devis froid commercial : chambre froide positive ou négative, vitrines réfrigérées, climatisation pro. Boulangerie, restaurant, commerce. ECO CVC, attestation F-Gaz.",
    h1: "Devis froid commercial — pro CHR & commerce",
    promise:
      "Boulangerie, restaurant, supérette, traiteur, fleuriste : équipement froid sur mesure, pose rapide pour ne pas perturber l'activité.",
    bullets: [
      "Étude thermique adaptée à votre métier",
      "Chambre froide, vitrine réfrigérée, climatisation pro",
      "Maintenance préventive incluse en option",
      "Pose en horaires décalés possible",
    ],
    trustBadges: ["F-Gaz", "Maintenance pro", "Devis gratuit", "Intervention rapide"],
    whyUs: [
      {
        icon: "shield",
        title: "Spécialiste métier",
        body: "Nous équipons boulangeries, restaurants, fleuristes, traiteurs depuis plusieurs années en Rhône-Alpes.",
      },
      {
        icon: "clock",
        title: "Continuité d'activité",
        body: "Pose en nuit ou jours de fermeture pour ne pas couper votre activité commerciale.",
      },
      {
        icon: "euro",
        title: "Coût d'usage maîtrisé",
        body: "Dimensionnement précis = consommation optimisée + durée de vie maximale du matériel.",
      },
      {
        icon: "award",
        title: "SAV réactif",
        body: "Contrat maintenance avec intervention sous 24h en panne. Critique en métier alimentaire.",
      },
    ],
    faq: [
      {
        q: "Délai pour installer une chambre froide ?",
        a: "1 à 2 semaines entre validation devis et mise en service, selon disponibilité du matériel sur mesure.",
      },
      {
        q: "Vous gérez la maintenance ?",
        a: "Oui, contrat annuel avec interventions préventives + dépannage prioritaire.",
      },
    ],
    ctaPhone: "+33629634045",
    formContext: "chambre-froide",
  },
];

export const findDevis = (slug: string) => devisConfigs.find((d) => d.slug === slug);
