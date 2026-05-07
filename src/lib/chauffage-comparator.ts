/**
 * Comparateur de chauffages : PAC air-eau, gaz condensation, fioul,
 * électrique direct, granulés, géothermie.
 *
 * Calcule pour un logement donné :
 *  - Investissement initial (matériel + pose)
 *  - Coût annuel chauffage + ECS
 *  - Émissions CO2 annuelles
 *  - Coût total sur 15 ans (TCO)
 *  - Score "rentabilité" et "écologique"
 */

export type Energie =
  | "pac-air-eau"
  | "pac-geothermique"
  | "gaz-condensation"
  | "fioul"
  | "electrique-direct"
  | "granules"
  | "hybride";

export interface CompareInput {
  surface: number; // m²
  isolation: "bonne" | "moyenne" | "faible";
  ville: "plaine" | "moyenne-altitude" | "haute-altitude";
  occupants: number; // 1-7
}

export interface EnergieDetail {
  key: Energie;
  name: string;
  emoji: string;
  tagline: string;
  // Investissement initial (€)
  investissement: { min: number; max: number };
  // Aides 2026 maxi profil Bleu (sans bonus fioul, juste pour comparer)
  aidesMax: number;
  // €/kWh d'énergie consommée 2026
  prixKwh: number;
  // Rendement (kWh utiles / kWh achetés)
  rendement: number;
  // gCO2 / kWh utile
  co2gParKwh: number;
  // Durée de vie moyenne (ans)
  dureeVie: number;
  // Maintenance annuelle moyenne (€)
  maintenanceAnnuelle: number;
  // Avantages / inconvénients
  pour: string[];
  contre: string[];
}

export const energies: Record<Energie, EnergieDetail> = {
  "pac-air-eau": {
    key: "pac-air-eau",
    name: "Pompe à chaleur air-eau",
    emoji: "❄️",
    tagline: "L'option la plus polyvalente, éligible MaPrimeRénov'",
    investissement: { min: 11000, max: 16000 },
    aidesMax: 9000,
    prixKwh: 0.2516,
    rendement: 4.0, // SCOP moyen
    co2gParKwh: 79, // mix électrique français 2026
    dureeVie: 18,
    maintenanceAnnuelle: 200,
    pour: [
      "MaPrimeRénov' jusqu'à 5 000 €",
      "Conserve les radiateurs existants (haute T°)",
      "Eau chaude sanitaire incluse",
      "Économie 50-70% vs fioul/électrique",
    ],
    contre: [
      "Investissement initial significatif",
      "Dépendant du courant électrique",
      "Légère baisse de COP en grand froid (-10°C+)",
    ],
  },
  "pac-geothermique": {
    key: "pac-geothermique",
    name: "PAC géothermique",
    emoji: "🌍",
    tagline: "Performance maximale, durée de vie 20-25 ans",
    investissement: { min: 18000, max: 28000 },
    aidesMax: 17000, // MPR Bleu géo + Coup de pouce
    prixKwh: 0.2516,
    rendement: 4.7,
    co2gParKwh: 67,
    dureeVie: 22,
    maintenanceAnnuelle: 250,
    pour: [
      "MaPrimeRénov' jusqu'à 11 000 €",
      "Performance constante toute l'année",
      "Durée de vie capteurs/forage : 50 ans+",
      "Indépendant des conditions extérieures",
    ],
    contre: [
      "Investissement initial élevé",
      "Nécessite terrain (capteurs) ou forage",
      "Travaux gros œuvre 1-3 semaines",
    ],
  },
  "gaz-condensation": {
    key: "gaz-condensation",
    name: "Chaudière gaz à condensation",
    emoji: "🔥",
    tagline: "Eligibilité MaPrimeRénov' supprimée en 2026",
    investissement: { min: 4500, max: 8000 },
    aidesMax: 0, // plus éligible MPR depuis 2026
    prixKwh: 0.131, // tarif gaz régulé 2026
    rendement: 1.05,
    co2gParKwh: 234,
    dureeVie: 15,
    maintenanceAnnuelle: 180,
    pour: [
      "Investissement initial bas",
      "Installation simple en remplacement direct",
      "Confort thermique élevé",
    ],
    contre: [
      "Plus aucune aide d'État en 2026",
      "Prix du gaz volatile (+40% depuis 2021)",
      "Émissions CO2 élevées",
      "Énergie fossile en sortie progressive",
    ],
  },
  fioul: {
    key: "fioul",
    name: "Chaudière fioul",
    emoji: "🛢️",
    tagline: "Interdit en neuf depuis juillet 2022",
    investissement: { min: 5500, max: 9500 },
    aidesMax: 0,
    prixKwh: 0.142,
    rendement: 0.92,
    co2gParKwh: 324,
    dureeVie: 20,
    maintenanceAnnuelle: 220,
    pour: [
      "Indépendance vs réseau gaz",
      "Confort thermique stable",
    ],
    contre: [
      "Installation neuve interdite depuis 2022",
      "Aucune aide d'État",
      "Prix du fioul x1,6 depuis 2020",
      "Émissions CO2 maximales",
      "Cuve à entretenir",
    ],
  },
  "electrique-direct": {
    key: "electrique-direct",
    name: "Chauffage électrique direct",
    emoji: "⚡",
    tagline: "Convecteurs, panneaux rayonnants",
    investissement: { min: 1500, max: 4500 },
    aidesMax: 0,
    prixKwh: 0.2516,
    rendement: 1.0,
    co2gParKwh: 79,
    dureeVie: 15,
    maintenanceAnnuelle: 0,
    pour: [
      "Investissement initial très bas",
      "Pas de maintenance",
      "Pas d'émissions directes (mix élec FR)",
    ],
    contre: [
      "Coût d'usage 4x supérieur à une PAC",
      "Aucune aide d'État",
      "Confort thermique inégal",
      "Chocs sur la facture en hiver",
    ],
  },
  granules: {
    key: "granules",
    name: "Chaudière à granulés",
    emoji: "🌲",
    tagline: "Énergie biomasse renouvelable",
    investissement: { min: 12000, max: 22000 },
    aidesMax: 11000, // MPR + CEE
    prixKwh: 0.082,
    rendement: 0.92,
    co2gParKwh: 30, // bilan carbone biomasse
    dureeVie: 18,
    maintenanceAnnuelle: 250,
    pour: [
      "Combustible peu cher (granulés bois)",
      "MaPrimeRénov' jusqu'à 7 000 €",
      "Bilan carbone très favorable",
      "Indépendance énergétique",
    ],
    contre: [
      "Stockage des granulés (5-10 m²)",
      "Entretien plus contraignant",
      "Approvisionnement à anticiper",
      "Bruit léger du brûleur",
    ],
  },
  hybride: {
    key: "hybride",
    name: "PAC hybride (PAC + gaz)",
    emoji: "🔀",
    tagline: "Combine PAC et chaudière condensation",
    investissement: { min: 14000, max: 18000 },
    aidesMax: 6000,
    prixKwh: 0.18, // mix électricité + gaz
    rendement: 2.8, // moyen entre PAC et chaudière
    co2gParKwh: 145,
    dureeVie: 16,
    maintenanceAnnuelle: 230,
    pour: [
      "Bascule auto sur source la moins chère",
      "Idéal pour grandes maisons mal isolées",
      "MaPrimeRénov' applicable",
      "Sécurité du double système",
    ],
    contre: [
      "Investissement plus complexe",
      "Maintenance double",
      "Dépend toujours du réseau gaz",
    ],
  },
};

export interface CompareResult {
  energie: Energie;
  detail: EnergieDetail;
  besoinsKwh: number; // kWh utiles / an
  consoEnergetique: number; // kWh achetés / an
  coutAnnuelEnergie: number;
  coutAnnuelTotal: number; // énergie + maintenance
  investissementMoyen: number;
  resteACharge: number; // après aides max
  emissionsCO2KgAn: number;
  coutTotal15Ans: number; // tout compris
  scoreEcono: number; // 0-100
  scoreEcolo: number; // 0-100
}

const ISOL_W = { bonne: 70, moyenne: 100, faible: 135 };
const VILLE_FACTOR = { plaine: 1.0, "moyenne-altitude": 1.12, "haute-altitude": 1.25 };

export function compareAll(input: CompareInput): CompareResult[] {
  const wParM2 = ISOL_W[input.isolation];
  const localisation = VILLE_FACTOR[input.ville];

  // Heures équivalent pleine charge moyennes par an
  const heuresChauffe = 1900;
  const besoinsBaseChauffage = wParM2 * input.surface * heuresChauffe * localisation / 1000; // kWh utiles/an
  const besoinsEcs = input.occupants * 800; // ~800 kWh/personne/an
  const besoinsKwh = Math.round(besoinsBaseChauffage + besoinsEcs);

  return Object.values(energies).map((det) => {
    const consoEnergetique = Math.round(besoinsKwh / det.rendement);
    const coutAnnuelEnergie = Math.round(consoEnergetique * det.prixKwh);
    const coutAnnuelTotal = coutAnnuelEnergie + det.maintenanceAnnuelle;
    const investissementMoyen = (det.investissement.min + det.investissement.max) / 2;
    const resteACharge = Math.max(0, investissementMoyen - det.aidesMax);
    const emissionsCO2KgAn = Math.round((consoEnergetique * det.co2gParKwh) / 1000);
    const coutTotal15Ans = Math.round(resteACharge + coutAnnuelTotal * 15);

    return {
      energie: det.key,
      detail: det,
      besoinsKwh,
      consoEnergetique,
      coutAnnuelEnergie,
      coutAnnuelTotal,
      investissementMoyen,
      resteACharge,
      emissionsCO2KgAn,
      coutTotal15Ans,
      scoreEcono: 0, // calculé après
      scoreEcolo: 0,
    };
  }).map((r, _, arr) => {
    // Scores normalisés 0-100 (100 = meilleur)
    const minTCO = Math.min(...arr.map((x) => x.coutTotal15Ans));
    const maxTCO = Math.max(...arr.map((x) => x.coutTotal15Ans));
    const minCO2 = Math.min(...arr.map((x) => x.emissionsCO2KgAn));
    const maxCO2 = Math.max(...arr.map((x) => x.emissionsCO2KgAn));

    return {
      ...r,
      scoreEcono: Math.round(100 - ((r.coutTotal15Ans - minTCO) / (maxTCO - minTCO || 1)) * 100),
      scoreEcolo: Math.round(100 - ((r.emissionsCO2KgAn - minCO2) / (maxCO2 - minCO2 || 1)) * 100),
    };
  }).sort((a, b) => a.coutTotal15Ans - b.coutTotal15Ans);
}

export const formatEuro = (n: number) =>
  n.toLocaleString("fr-FR", { maximumFractionDigits: 0 }) + " €";
