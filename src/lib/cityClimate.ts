/**
 * Génère un contexte climatique unique par ville pour justifier
 * l'intérêt d'une PAC / clim réversible en local.
 *
 * Logique : classifie chaque ville selon sa zone géographique réelle
 * (plaine, cuvette, piémont, montagne, lacustre) à partir de son nom
 * + département. Retourne ensuite un texte SEO unique mentionnant :
 *  - température hiver / été typique
 *  - phénomènes locaux (canicule, brouillard, neige, vent…)
 *  - implications pour le choix PAC (haute vs basse T°, modèles grand froid…)
 */

import type { City } from "@/data/cities";

export type ClimateZone =
  | "plaine-isere"      // Bourgoin, Vienne, L'Isle-d'Abeau...
  | "lyon-metropole"    // Lyon, Villeurbanne, Vénissieux...
  | "lyon-ouest"        // Tassin, Sainte-Foy, Écully (collines)
  | "cuvette-grenoble"  // Grenoble, agglo (effet cuvette, canicule + brouillard)
  | "piemont"           // Voiron, Vif, Le Touvet (entre plaine et montagne)
  | "lac-leman"         // Annecy, Aix-les-Bains (microclimat lacustre)
  | "montagne"          // >800m altitude
  | "rhone-nord"        // Vienne, Roussillon (vallée Rhône)
  | "saone-nord"        // Mâcon, Belleville
  | "loire";            // Saint-Étienne, Roanne

export type ClimateInfo = {
  zone: ClimateZone;
  zoneLabel: string;
  tempHiverMin: number;
  tempEteMax: number;
  phenomenes: string[];
  paragraphe: string;
  recoTypePAC: string;
};

/** Classification par mots-clés dans le nom de la commune ou son slug */
function classifyCity(city: City): ClimateZone {
  const slug = city.slug.toLowerCase();
  const name = city.name.toLowerCase();
  const dept = city.department.toLowerCase();

  // Montagne (avec mots-clés caractéristiques)
  if (
    /chamrousse|villard-de-lans|autrans|m[eé]audre|saint-pierre-de-chartreuse|allemont|huez|ornon|vercors|chartreuse/.test(slug) ||
    name.includes("mont") && /altitude|station|ski/.test(slug)
  ) {
    return "montagne";
  }

  // Lac Léman / Annecy
  if (/annecy|aix-les-bains|sevrier|veyrier|talloires|menthon/.test(slug)) {
    return "lac-leman";
  }

  // Cuvette Grenoble (agglo Grenoble + premières communes)
  if (/grenoble|saint-martin-d-h[eè]res|fontaine|seyssins|seyssinet|echirolles|eybens|gi[eè]res|meylan|saint-egr[eè]ve/.test(slug)) {
    return "cuvette-grenoble";
  }

  // Piémont (entre plaine et montagne)
  if (/voiron|vif|le-touvet|le-grand-lemps|villard-bonnot|crolles|domene|moirans|tullins|coublevie|saint-jean-de-moirans/.test(slug)) {
    return "piemont";
  }

  // Vallée du Rhône (Vienne et alentours sud)
  if (/vienne|roussillon|condrieu|chasse-sur-rhone|saint-romain-en-gal|reventin-vaugris|estrablin|p[oô]nt-[eé]v[eê]que|seyssuel/.test(slug)) {
    return "rhone-nord";
  }

  // Lyon Ouest (collines : Tassin, Sainte-Foy, Écully...)
  if (/tassin|sainte-foy|ecully|francheville|charbonni[eè]res|saint-genis-laval|saint-didier-au-mont-d-or|champagne-au-mont-d-or|saint-cyr-au-mont-d-or/.test(slug)) {
    return "lyon-ouest";
  }

  // Lyon Métropole urbaine (cœur dense + plaine est)
  if (
    /^lyon|villeurbanne|venissieux|vaulx-en-velin|bron|caluire|rillieux|saint-priest|meyzieu|decines-charpieu|givors|oullins-pierre-benite/.test(slug)
  ) {
    return "lyon-metropole";
  }

  // Saône Nord (Mâcon, Belleville, etc.)
  if (/macon|belleville|villefranche|tarare/.test(slug)) {
    return "saone-nord";
  }

  // Loire (Saint-Étienne, Roanne)
  if (/saint-[eé]tienne|roanne|firminy|le-puy-en-velay/.test(slug) || dept.includes("loire (42)")) {
    return "loire";
  }

  // Par défaut : plaine isère (Nord-Isère)
  return "plaine-isere";
}

const ZONE_DATA: Record<ClimateZone, Omit<ClimateInfo, "zone" | "paragraphe"> & {
  paragraphes: (cityName: string) => string;
}> = {
  "plaine-isere": {
    zoneLabel: "Plaine du Nord-Isère",
    tempHiverMin: -8,
    tempEteMax: 35,
    phenomenes: [
      "Hivers tempérés avec quelques épisodes à −5/−8 °C en janvier",
      "Étés chauds : pointes à 35 °C voire 38 °C en pleine canicule",
      "Brouillards matinaux d'automne (zone bocagère)",
      "Pluies réparties sur l'année — pas de sécheresse marquée",
    ],
    recoTypePAC:
      "Une PAC air-eau standard suffit largement ; pas besoin de modèle « grand froid ». Pour la clim réversible, n'importe quel inverter milieu de gamme tient l'été.",
    paragraphes: (n) =>
      `À ${n}, le climat est continental tempéré : hivers doux (rarement sous −8 °C même en pleine vague de froid) et étés chauds (35 °C lors des canicules estivales). Cette amplitude justifie pleinement le choix d'une PAC réversible : on chauffe en hiver et on rafraîchit en été avec un seul équipement. Les PAC air-eau classiques (Daikin Altherma 3, Atlantic Alféa) tiennent les conditions locales sans souci, COP saisonnier 3,5-4,0.`,
  },
  "lyon-metropole": {
    zoneLabel: "Lyon Métropole urbaine",
    tempHiverMin: -6,
    tempEteMax: 37,
    phenomenes: [
      "Îlot de chaleur urbain — +3 à 5 °C de plus que la campagne en été",
      "Vagues de canicule à répétition (étés 2022-2024)",
      "Hivers plutôt doux (rarement sous −5 °C)",
      "Effet vent du Mistral en hiver remontant la vallée du Rhône",
    ],
    recoTypePAC:
      "La climatisation réversible est devenue quasi indispensable. Privilégier les modèles silencieux (≤ 38 dB) pour respecter le voisinage en zone urbaine dense.",
    paragraphes: (n) =>
      `À ${n}, l'îlot de chaleur urbain de la métropole lyonnaise fait grimper les températures de 3 à 5 °C par rapport à la campagne environnante. Avec des canicules désormais récurrentes (37 °C atteints chaque été 2022-2024), la climatisation réversible n'est plus un luxe mais une nécessité. Les hivers sont doux (rarement sous −5 °C), donc une PAC air-air ou air-eau standard suffit. Attention au choix d'unité extérieure : copropriétés et mitoyenneté imposent du silencieux (≤ 38 dB à 1 m).`,
  },
  "lyon-ouest": {
    zoneLabel: "Collines de l'Ouest lyonnais",
    tempHiverMin: -7,
    tempEteMax: 35,
    phenomenes: [
      "Collines (200-400 m d'altitude) : hivers légèrement plus frais qu'en plaine lyonnaise",
      "Brises descendantes des Monts du Lyonnais",
      "Étés moins étouffants que centre Lyon (effet altitude + couvert végétal)",
      "Quelques épisodes de neige tous les 2-3 ans",
    ],
    recoTypePAC:
      "PAC air-eau idéale pour les pavillons en pierre dorée typiques de la zone. Vérifier le dimensionnement (les maisons anciennes ont plus de déperditions).",
    paragraphes: (n) =>
      `À ${n}, les collines de l'Ouest lyonnais offrent un climat un peu plus frais qu'au cœur de la métropole : 1-2 °C en moins en moyenne, étés moins étouffants grâce au couvert végétal des Monts du Lyonnais. Les maisons en pierre dorée typiques de la zone ont une bonne inertie thermique mais peuvent être déperditives — un calcul de puissance précis est essentiel avant de poser une PAC.`,
  },
  "cuvette-grenoble": {
    zoneLabel: "Cuvette grenobloise",
    tempHiverMin: -10,
    tempEteMax: 38,
    phenomenes: [
      "Effet cuvette : pollution + brouillard accumulés en hiver",
      "Canicules sévères en été (jusqu'à 38 °C, peu de vent)",
      "Hivers froids avec inversion thermique fréquente",
      "Neige possible (Belledonne, Chartreuse, Vercors à proximité)",
    ],
    recoTypePAC:
      "Modèles silencieux et performants par grand froid recommandés. Filtration F7 minimum sur la clim pour la qualité de l'air dégradée en pic de pollution.",
    paragraphes: (n) =>
      `À ${n}, la cuvette grenobloise crée un climat très particulier : étés caniculaires (38 °C atteints, peu de vent pour rafraîchir) et hivers marqués par l'inversion thermique (brouillards persistants, pollution accumulée, −8/−10 °C possibles). La PAC air-eau est très pertinente, surtout avec un appoint pour les pics de froid. Pour la clim, on recommande systématiquement des filtres F7 ou ePM1 vu la qualité de l'air parfois dégradée en hiver.`,
  },
  "piemont": {
    zoneLabel: "Piémont alpin",
    tempHiverMin: -12,
    tempEteMax: 33,
    phenomenes: [
      "Hivers plus rigoureux que la plaine (−12 °C possibles)",
      "Neige plusieurs jours par hiver (1-3 épisodes)",
      "Étés tempérés (rarement au-dessus de 33 °C, nuits fraîches)",
      "Vents de vallée parfois forts",
    ],
    recoTypePAC:
      "PAC haute température OU hybride (PAC + chaudière relève) à étudier pour les maisons anciennes. Modèle inverter R290 pour les performances par grand froid.",
    paragraphes: (n) =>
      `À ${n}, le climat de piémont apporte des hivers plus marqués qu'en plaine : neige plusieurs jours par an, températures pouvant descendre à −10/−12 °C lors des vagues de froid. Pour les maisons anciennes en pierre, on recommande systématiquement une PAC haute température ou une configuration hybride (PAC + chaudière en relève) pour passer sereinement les épisodes les plus rigoureux. Les étés restent agréables (33 °C en pointe, nuits fraîches grâce à l'altitude).`,
  },
  "lac-leman": {
    zoneLabel: "Microclimat lacustre (Annecy / Bourget)",
    tempHiverMin: -8,
    tempEteMax: 34,
    phenomenes: [
      "Effet régulateur des grands lacs (étés moins chauds, hivers moins froids)",
      "Brises lacustres rafraîchissantes en été",
      "Brumes matinales fréquentes sur les rives",
      "Forte humidité ambiante (>70 % en moyenne annuelle)",
    ],
    recoTypePAC:
      "Bien dimensionner la déshumidification de la clim (humidité ambiante élevée). Penser aux PAC piscine pour les propriétés en bord de lac.",
    paragraphes: (n) =>
      `À ${n}, le microclimat lacustre adoucit les extrêmes : les étés sont moins étouffants qu'à Lyon (rarement au-dessus de 34 °C), les hivers sont plus doux que la plaine alpine. En revanche, l'humidité ambiante reste élevée toute l'année (>70 % en moyenne) — un point crucial pour le choix de la climatisation, qui doit assurer une bonne déshumidification l'été.`,
  },
  "montagne": {
    zoneLabel: "Montagne (> 800 m d'altitude)",
    tempHiverMin: -20,
    tempEteMax: 28,
    phenomenes: [
      "Hivers très froids : −15 à −20 °C possibles",
      "Enneigement plusieurs mois par an",
      "Étés courts mais doux (rarement plus de 28 °C)",
      "Risque de gel jusqu'en mai/juin",
    ],
    recoTypePAC:
      "PAC « grand froid » obligatoire (Mitsubishi Hyper Heating, Daikin H/C 80) avec appoint chauffage. PAC géothermique souvent meilleure en altitude.",
    paragraphes: (n) =>
      `À ${n}, le climat de montagne impose des contraintes fortes : hivers très rigoureux (−15 à −20 °C possibles), enneigement plusieurs mois par an, risque de gel tardif. Une PAC air-air classique perdrait l'essentiel de son efficacité en pleine vague de froid. On recommande systématiquement des modèles « grand froid » (Mitsubishi Hyper Heating, Daikin H/C 80) avec appoint électrique de relève, ou mieux : une PAC géothermique sur sonde verticale, beaucoup plus stable.`,
  },
  "rhone-nord": {
    zoneLabel: "Vallée du Rhône (Vienne et sud-Isère)",
    tempHiverMin: -7,
    tempEteMax: 38,
    phenomenes: [
      "Couloir rhodanien : étés très chauds (38 °C en canicule)",
      "Effet Mistral en hiver (vent froid descendant)",
      "Hivers doux mais venteux",
      "Pluies orageuses en été",
    ],
    recoTypePAC:
      "Climatisation réversible quasi indispensable. Bien positionner l'unité extérieure à l'abri du Mistral (côté est ou sud de la maison).",
    paragraphes: (n) =>
      `À ${n}, la vallée du Rhône fait remonter la chaleur du sud : étés très chauds (38 °C atteints en canicule), hivers doux mais marqués par le Mistral qui peut faire chuter la température ressentie. La climatisation réversible est devenue très demandée. Pour la pose, on évite d'exposer l'unité extérieure au Mistral (orientation est ou sud privilégiée pour préserver l'efficacité du dégivrage).`,
  },
  "saone-nord": {
    zoneLabel: "Vallée de la Saône",
    tempHiverMin: -8,
    tempEteMax: 36,
    phenomenes: [
      "Brouillards d'automne et d'hiver très fréquents",
      "Étés chauds (36 °C en pointe)",
      "Humidité élevée",
      "Hivers froids mais courts",
    ],
    recoTypePAC: "PAC air-eau idéale pour les maisons bourguignonnes. Bien gérer la déshumidification.",
    paragraphes: (n) =>
      `À ${n}, le climat de la vallée de la Saône combine étés chauds (36 °C atteints), hivers humides et brouillards persistants d'automne. Pour les maisons bourguignonnes en pierre, une PAC air-eau bien dimensionnée est l'option la plus économique. La gestion de l'humidité est un point clé en été.`,
  },
  "loire": {
    zoneLabel: "Loire (Saint-Étienne et alentours)",
    tempHiverMin: -10,
    tempEteMax: 34,
    phenomenes: [
      "Climat plus continental que Lyon (altitude 500-700 m)",
      "Hivers plus froids (−10 °C possibles)",
      "Étés tempérés (rarement plus de 34 °C)",
      "Pluies abondantes (Monts du Forez)",
    ],
    recoTypePAC: "PAC haute température ou hybride pour les maisons anciennes mal isolées. Modèles fiables par −10 °C.",
    paragraphes: (n) =>
      `À ${n}, l'altitude (500-700 m) rend le climat plus rigoureux qu'à Lyon : hivers froids (−10 °C lors des vagues de froid), étés tempérés. Les maisons anciennes type minières ou ouvrières sont souvent peu isolées et chauffées au gaz/fioul. Une PAC haute température bien dimensionnée, parfois en configuration hybride, est la solution la plus durable.`,
  },
};

export function getCityClimate(city: City): ClimateInfo {
  const zone = classifyCity(city);
  const data = ZONE_DATA[zone];
  return {
    zone,
    zoneLabel: data.zoneLabel,
    tempHiverMin: data.tempHiverMin,
    tempEteMax: data.tempEteMax,
    phenomenes: data.phenomenes,
    recoTypePAC: data.recoTypePAC,
    paragraphe: data.paragraphes(city.name),
  };
}
