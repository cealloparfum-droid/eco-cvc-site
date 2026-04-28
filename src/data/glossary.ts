export type GlossaryTerm = {
  term: string;
  short: string; // 1 phrase
  full: string; // paragraphe
  related?: { href: string; label: string }[];
};

export const glossary: GlossaryTerm[] = [
  {
    term: "COP",
    short: "Coefficient de performance — rapport entre énergie restituée et électricité consommée.",
    full: "Le COP (Coefficient de Performance) mesure l'efficacité d'une pompe à chaleur. Un COP de 4 signifie que pour 1 kWh d'électricité consommé, la PAC restitue 4 kWh de chaleur. Plus le COP est élevé, plus la PAC est performante. Les PAC modernes affichent des COP de 3,5 à 5 selon les conditions.",
    related: [{ href: "/blog/prix-pompe-a-chaleur-2026", label: "Prix des PAC 2026" }],
  },
  {
    term: "ETAS",
    short: "Efficacité énergétique saisonnière — performance moyenne sur toute une saison.",
    full: "L'ETAS (Efficacité Énergétique Saisonnière) est une mesure plus réaliste que le COP car elle prend en compte les variations de température sur toute la saison de chauffe. Pour bénéficier de MaPrimeRénov', l'ETAS doit être ≥ 126% pour une PAC basse température, ≥ 111% pour une haute température.",
    related: [{ href: "/blog/maprimerenov-2026-pompe-a-chaleur", label: "MaPrimeRénov' 2026" }],
  },
  {
    term: "SCOP",
    short: "COP saisonnier — performance moyenne du chauffage sur l'année.",
    full: "Le SCOP (Seasonal Coefficient of Performance) est le COP moyen pondéré sur l'ensemble de la saison de chauffe. Indicateur le plus pertinent pour comparer des PAC entre elles. SCOP 4 = excellente performance, SCOP 3 = correct, SCOP < 2,5 = à éviter.",
  },
  {
    term: "SEER",
    short: "Efficacité saisonnière en mode froid — équivalent du SCOP pour le rafraîchissement.",
    full: "Le SEER (Seasonal Energy Efficiency Ratio) mesure l'efficacité d'une climatisation ou PAC réversible en mode rafraîchissement, sur toute la saison estivale. Un SEER de 7 signifie 7 kWh restitués pour 1 kWh consommé. C'est une donnée clé pour les PAC réversibles et les climatisations.",
  },
  {
    term: "RGE",
    short: "Reconnu Garant de l'Environnement — label obligatoire pour les aides énergétiques.",
    full: "RGE est un label délivré par l'État aux artisans qualifiés pour les travaux d'économie d'énergie. Pour bénéficier de MaPrimeRénov', de la prime CEE et de l'éco-PTZ, l'artisan doit être RGE dans la spécialité concernée. ECO CVC est RGE QualiPAC pour les pompes à chaleur.",
    related: [{ href: "/certifications", label: "Nos certifications" }],
  },
  {
    term: "QualiPAC",
    short: "Mention RGE spécifique aux installateurs de pompe à chaleur.",
    full: "QualiPAC est la qualification RGE délivrée aux artisans formés et audités sur l'installation de pompes à chaleur (air-eau, géothermique, sanitaire). C'est la condition obligatoire pour que vos travaux PAC soient éligibles à MaPrimeRénov'. Vérifiable sur france-renov.gouv.fr.",
  },
  {
    term: "MaPrimeRénov'",
    short: "Aide d'État principale pour les rénovations énergétiques en France.",
    full: "MaPrimeRénov' est une aide forfaitaire de l'Anah versée aux propriétaires (occupants ou bailleurs) pour des travaux d'économie d'énergie : isolation, chauffage, ventilation. Le montant dépend des revenus (4 profils : Bleu, Jaune, Violet, Rose) et du geste de travaux.",
    related: [{ href: "/blog/maprimerenov-2026-pompe-a-chaleur", label: "MaPrimeRénov' 2026 PAC" }],
  },
  {
    term: "CEE",
    short: "Certificats d'Économies d'Énergie — primes versées par les fournisseurs d'énergie.",
    full: "La prime CEE est financée par les obligés (fournisseurs d'énergie comme EDF, TotalEnergies). Elle complète MaPrimeRénov' et est ouverte à tous les revenus. Pour une PAC, elle peut atteindre 4 000 à 5 000 € pour les ménages modestes.",
    related: [{ href: "/blog/aides-cee-pompe-a-chaleur-2026", label: "Prime CEE 2026" }],
  },
  {
    term: "Coup de pouce chauffage",
    short: "Prime CEE majorée pour le remplacement d'une chaudière par une énergie renouvelable.",
    full: "Le Coup de pouce chauffage est une catégorie spéciale de la prime CEE qui majore le montant pour certains gestes prioritaires : remplacer une chaudière fossile par une PAC ou de la biomasse. Jusqu'à 5 000 € pour les ménages très modestes.",
    related: [{ href: "/blog/coup-de-pouce-chauffage-2026", label: "Coup de pouce 2026" }],
  },
  {
    term: "F-Gaz",
    short: "Attestation pour manipuler les fluides frigorigènes — obligatoire en CVC.",
    full: "L'attestation F-Gaz (ou Catégorie I) est délivrée à un technicien après formation et examen. Elle l'autorise à charger, décharger ou récupérer les fluides frigorigènes (R32, R410A…). Sans elle, toute intervention sur le circuit frigorifique d'une PAC est illégale.",
  },
  {
    term: "Fluide frigorigène",
    short: "Gaz qui circule dans une PAC pour transporter la chaleur.",
    full: "Le fluide frigorigène (R32, R410A, R290 propane…) est le \"sang\" d'une pompe à chaleur. Il change d'état (gaz/liquide) en absorbant et restituant des calories. Le R32 est le standard moderne (faible PRG). Le R410A est interdit en neuf depuis 2025. Le R290 (propane) est le plus écologique mais inflammable.",
  },
  {
    term: "PRG",
    short: "Pouvoir de Réchauffement Global — impact climatique d'un fluide frigorigène.",
    full: "Le PRG (ou GWP en anglais) compare l'effet de serre d'un gaz au CO₂. R410A : PRG 2 088. R32 : PRG 675. R290 : PRG 3. C'est pourquoi le R410A est progressivement interdit et remplacé par le R32, voire le R290.",
  },
  {
    term: "Multi-split",
    short: "Climatisation avec une seule unité extérieure et plusieurs unités intérieures.",
    full: "Un multi-split permet de climatiser plusieurs pièces avec une seule unité extérieure. Bi-split = 2 unités int., tri-split = 3, quadri-split = 4, jusqu'à 5-6 selon constructeurs. Plus économique en place et en esthétique qu'autant de mono-splits.",
  },
  {
    term: "Mono-split",
    short: "Climatisation avec une unité extérieure et une unité intérieure dans une seule pièce.",
    full: "Solution la plus simple pour climatiser une pièce. Coût d'installation 1 800-2 800 € posé pour une pièce de 25-30 m². Idéale pour le séjour ou une chambre principale. Si plusieurs pièces, le multi-split devient plus rentable.",
  },
  {
    term: "Gainable",
    short: "Climatisation invisible avec un caisson dans les combles et des grilles au plafond.",
    full: "La climatisation gainable est composée d'une unité extérieure, d'un caisson en combles ou faux-plafond, et d'un réseau de gaines distribuant l'air via des grilles discrètes. Solution premium : aucun appareil visible, confort homogène. Coût : 8 000 à 14 000 € posé pour 100 m².",
    related: [{ href: "/blog/climatisation-gainable", label: "Climatisation gainable" }],
  },
  {
    term: "VMC",
    short: "Ventilation Mécanique Contrôlée — renouvellement d'air obligatoire en logement.",
    full: "La VMC est un système de ventilation extrayant l'air vicié des pièces humides (cuisine, SDB, WC) pour le remplacer par de l'air neuf. Obligatoire en logement neuf depuis 1982. Deux types : simple flux (extraction seule) et double flux (avec récupération de chaleur).",
  },
  {
    term: "VMC double flux",
    short: "VMC avec récupération de chaleur sur l'air sortant — économie chauffage 15-25%.",
    full: "Une VMC double flux récupère 80-90% de la chaleur de l'air rejeté pour préchauffer l'air entrant. Investissement 4 500 à 10 500 € posé, mais 15 à 25% d'économies sur le chauffage à long terme. Éligible MaPrimeRénov' (jusqu'à 2 500 €).",
    related: [{ href: "/blog/vmc-double-flux-2026", label: "VMC double flux 2026" }],
  },
  {
    term: "Plancher chauffant",
    short: "Système de chauffage par circulation d'eau chaude dans des tuyaux noyés au sol.",
    full: "Le plancher chauffant est le mode de diffusion idéal pour une PAC air-eau : eau à basse température (35-40 °C), confort radiant homogène, pas d'encombrement mural. En neuf, c'est presque systématique. En rénovation, possible avec un plancher chauffant sec (peu d'épaisseur).",
  },
  {
    term: "PAC haute température",
    short: "Pompe à chaleur compatible avec les radiateurs en fonte d'origine (jusqu'à 65 °C).",
    full: "Une PAC haute température peut produire de l'eau jusqu'à 65 °C, ce qui permet de la raccorder à un circuit de radiateurs existant sans changer les radiateurs. Solution idéale pour la rénovation de maisons anciennes en pierre. Surcoût de 1 500 à 3 000 € vs PAC standard.",
  },
  {
    term: "PAC hybride",
    short: "Combinaison PAC + chaudière à condensation gaz — bascule automatique selon climat.",
    full: "La PAC hybride associe une PAC air-eau et une chaudière à condensation gaz dans un même système. Le régulateur choisit automatiquement la source la moins chère selon la température extérieure. Idéale pour les grandes maisons mal isolées en zone gaz disponible.",
  },
  {
    term: "Géothermie",
    short: "PAC qui capte l'énergie du sol via des capteurs horizontaux ou un forage vertical.",
    full: "La PAC géothermique exploite la chaleur stable du sol (10-15 °C en profondeur). Capteurs horizontaux : enterrés à 80 cm sur grande surface. Forage vertical : sondes à 80-150 m de profondeur. Investissement 18 000 à 32 000 € posé, mais COP > 4 toute l'année.",
  },
  {
    term: "Aérothermie",
    short: "Famille des PAC qui captent les calories de l'air (par opposition à la géothermie).",
    full: "L'aérothermie regroupe les PAC air-air, air-eau et air-sol (rare). C'est la technologie la plus répandue car la moins chère à installer (pas de captage). Performance variable selon température extérieure, mais excellente jusqu'à 0 °C avec les modèles modernes.",
  },
  {
    term: "Inverter",
    short: "Technologie de modulation continue de la puissance — économies et silence.",
    full: "Une PAC ou clim inverter ajuste continuellement sa puissance au besoin réel, contrairement aux modèles on/off (tout ou rien). Avantages : 30-40% d'économie d'énergie, silence (compresseur tourne à vitesse réduite), durée de vie prolongée. Standard sur les modèles modernes.",
  },
  {
    term: "Échangeur thermique",
    short: "Pièce qui transfère la chaleur entre deux fluides sans qu'ils se mélangent.",
    full: "L'échangeur thermique est le cœur d'une PAC. Il existe plusieurs types : ailettes (PAC air-eau), titane (PAC piscine, résistant au chlore), à plaques (industriel). Sa propreté conditionne directement le rendement — d'où l'importance de l'entretien annuel.",
  },
  {
    term: "Chambre froide positive",
    short: "Chambre froide entre 0 et 8 °C pour fruits, légumes, produits laitiers.",
    full: "Chambre froide positive : température de service 0 à 8 °C. Utilisée pour la plupart des produits alimentaires non surgelés. Coût d'installation 6 000 à 18 000 € selon volume et configuration.",
  },
  {
    term: "Chambre froide négative",
    short: "Chambre froide entre -18 et -25 °C pour congélation et surgelés.",
    full: "Chambre froide négative : température -18 à -25 °C. Pour viandes, glaces, plats préparés surgelés. Plus coûteuse que la positive (isolation renforcée, groupe froid plus puissant). Comptez 9 000 à 25 000 € selon volume.",
  },
  {
    term: "Bilan thermique",
    short: "Calcul de la puissance de chauffage/refroidissement nécessaire à un local.",
    full: "Un bilan thermique professionnel prend en compte : volume du local, isolation murs/toiture/sol, surface vitrée, orientation, climat local, occupation. C'est l'étape indispensable avant de dimensionner une PAC, climatisation ou chambre froide. ECO CVC le réalise gratuitement lors de la visite.",
  },
  {
    term: "Frigorigène R32",
    short: "Fluide frigorigène standard 2026 — faible PRG, performant et éco-responsable.",
    full: "Le R32 est le fluide frigorigène le plus utilisé en 2026 sur les PAC et climatisations résidentielles. Avantages : PRG 675 (3x moins que R410A), excellent rendement, peu de quantité nécessaire. Inflammable A2L : exige une formation spécifique des installateurs.",
  },
  {
    term: "Délestage",
    short: "Coupure temporaire d'une installation pour économiser l'énergie en heures de pointe.",
    full: "Certaines PAC modernes peuvent être pilotées par un signal de délestage du réseau électrique (heures pleines/creuses, EJP, Tempo). Elles s'effacent automatiquement aux pics de consommation, avec relais par appoint électrique court. Économies notables sur les abonnements à pointe mobile.",
  },
  {
    term: "ABF",
    short: "Architecte des Bâtiments de France — encadre les modifications en zone protégée.",
    full: "L'ABF intervient dans les zones de protection patrimoniale (centres anciens, monuments historiques). Toute pose d'unité extérieure (PAC, clim) en zone ABF demande une déclaration préalable. Délai 1-2 mois supplémentaires. ECO CVC monte les dossiers à votre place.",
  },
];
