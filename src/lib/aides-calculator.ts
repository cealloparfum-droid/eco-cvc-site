/**
 * Calculateur d'aides à la rénovation énergétique 2026.
 *
 * Sources :
 *  - Décrets MaPrimeRénov' 2026 (Anah)
 *  - Barèmes Coup de pouce chauffage (CEE) 2026
 *  - TVA 5,5% travaux énergie
 *
 * Note : tous les montants sont indicatifs. Le calcul exact dépend du
 * dossier et est confirmé après visite technique.
 */

export type Profil = "bleu" | "jaune" | "violet" | "rose";
export type EnergieActuelle = "fioul" | "gaz" | "electrique" | "bois" | "autre";
export type TypePac = "air-eau" | "air-air" | "geothermique" | "hybride";
export type Isolation = "bonne" | "moyenne" | "faible";
export type Logement = "maison" | "appartement";

export interface SimulationInput {
  logement: Logement;
  surface: number; // m²
  isolation: Isolation;
  energieActuelle: EnergieActuelle;
  typePac: TypePac;
  profil: Profil;
  factureAnnuelleActuelle?: number; // €/an (optionnel)
}

export interface SimulationResult {
  puissanceKw: number;
  prixMoyen: { min: number; max: number; moyen: number };
  aides: {
    maPrimeRenov: number;
    bonusSortieFioul: number;
    coupDePouce: number;
    ceeClassique: number;
    tvaReduite: number; // économie liée à la TVA 5,5%
    total: number;
  };
  resteACharge: { min: number; max: number; moyen: number };
  coutAnnuelActuel: number;
  coutAnnuelPac: number;
  economieAnnuelle: number;
  economieDixAns: number;
  amortissementAnnees: number;
  notes: string[];
  eligibleMaPrimeRenov: boolean;
}

// ─── Tranches de revenus indicatives (Île-de-France 2026, 1 personne) ────
// On donne juste une référence, le user pioche son profil directement.
export const PROFILS_LABELS: Record<Profil, { name: string; range: string; color: string }> = {
  bleu: { name: "Très modestes", range: "≤ 23 768 € / an (1 personne)", color: "#3b82f6" },
  jaune: { name: "Modestes", range: "≤ 28 933 € / an (1 personne)", color: "#eab308" },
  violet: { name: "Intermédiaires", range: "≤ 40 404 € / an (1 personne)", color: "#a855f7" },
  rose: { name: "Aisés", range: "> 40 404 € / an (1 personne)", color: "#ec4899" },
};

// ─── MaPrimeRénov' 2026 par type de PAC et profil (€) ────────────────
const MPR_BAREMES: Record<TypePac, Record<Profil, number>> = {
  "air-eau":      { bleu: 5000, jaune: 4000, violet: 3000, rose: 0 },
  "geothermique": { bleu: 11000, jaune: 9000, violet: 6000, rose: 0 },
  "air-air":      { bleu: 0, jaune: 0, violet: 0, rose: 0 },
  "hybride":      { bleu: 4000, jaune: 3000, violet: 2000, rose: 0 },
};

// Bonus sortie de chaudière fioul (s'ajoute à MPR pour Bleu et Jaune)
const BONUS_FIOUL: Record<Profil, number> = {
  bleu: 1000,
  jaune: 1000,
  violet: 0,
  rose: 0,
};

// Coup de pouce CEE 2026 PAC (€)
const COUP_DE_POUCE: Record<TypePac, Record<Profil, number>> = {
  "air-eau":      { bleu: 5000, jaune: 4500, violet: 3000, rose: 2500 },
  "geothermique": { bleu: 6000, jaune: 5500, violet: 4000, rose: 3500 },
  "air-air":      { bleu: 0, jaune: 0, violet: 0, rose: 0 },
  "hybride":      { bleu: 4000, jaune: 3500, violet: 2500, rose: 2000 },
};

// CEE classique pour PAC air-air (€)
const CEE_AIR_AIR: Record<Profil, number> = {
  bleu: 1100,
  jaune: 900,
  violet: 500,
  rose: 250,
};

// Coefficients de besoin chauffage (W / m²)
const ISOLATION_W_M2: Record<Isolation, number> = {
  bonne: 70,
  moyenne: 100,
  faible: 135,
};

// Coût annuel chauffage estimé par énergie (€/m²/an, ordre de grandeur 2026)
const COUT_ENERGIE_M2: Record<EnergieActuelle, number> = {
  fioul: 24,
  gaz: 18,
  electrique: 22,
  bois: 12,
  autre: 18,
};

// Coût annuel avec PAC (€/m²/an, COP moyen 3,8-4,2)
const COUT_PAC_M2: Record<TypePac, number> = {
  "air-eau": 8,
  "geothermique": 6,
  "air-air": 9,
  "hybride": 10,
};

// Prix moyens PAC posé selon puissance et type (€)
function prixMoyen(puissanceKw: number, type: TypePac): { min: number; max: number; moyen: number } {
  if (type === "geothermique") {
    // Géothermie plus chère, dépend du captage
    const min = 18000 + (puissanceKw - 8) * 1200;
    const max = 28000 + (puissanceKw - 8) * 1500;
    return { min, max, moyen: Math.round((min + max) / 2) };
  }
  if (type === "air-air") {
    // Multi-split posé
    const min = 3500 + Math.max(0, puissanceKw - 5) * 600;
    const max = 7500 + Math.max(0, puissanceKw - 5) * 800;
    return { min, max, moyen: Math.round((min + max) / 2) };
  }
  if (type === "hybride") {
    return { min: 14000, max: 18000, moyen: 16000 };
  }
  // air-eau
  const baseMin = 11000;
  const baseMax = 14000;
  const factor = puissanceKw / 8;
  const min = Math.round(baseMin * factor);
  const max = Math.round(baseMax * factor);
  return { min, max, moyen: Math.round((min + max) / 2) };
}

export function simuler(input: SimulationInput): SimulationResult {
  const { surface, isolation, energieActuelle, typePac, profil, factureAnnuelleActuelle } = input;

  // 1. Puissance recommandée (W/m² × surface, arrondi par tranches de 1 kW)
  const wParM2 = ISOLATION_W_M2[isolation];
  const wTotal = wParM2 * surface;
  let puissanceKw = Math.ceil(wTotal / 1000);
  // Borner [4, 25] kW pour rester réaliste
  puissanceKw = Math.max(4, Math.min(25, puissanceKw));

  // 2. Prix moyen
  const prix = prixMoyen(puissanceKw, typePac);

  // 3. Aides
  const eligibleMpr = typePac !== "air-air" && profil !== "rose";
  const mpr = MPR_BAREMES[typePac][profil];
  const bonusFioul = energieActuelle === "fioul" ? BONUS_FIOUL[profil] : 0;
  const coupDePouce = COUP_DE_POUCE[typePac][profil];
  const ceeAirAir = typePac === "air-air" ? CEE_AIR_AIR[profil] : 0;

  // TVA réduite : économie indirecte = (20% - 5,5%) sur le matériel/MO
  // estimée à 14,5% du prix moyen
  const tvaReduite = Math.round(prix.moyen * 0.145);

  const totalAides = mpr + bonusFioul + coupDePouce + ceeAirAir + tvaReduite;

  // 4. Reste à charge (sur prix moyen — fourchettes basée sur min/max)
  const resteMin = Math.max(0, prix.min - totalAides);
  const resteMax = Math.max(0, prix.max - totalAides);
  const resteMoyen = Math.max(0, prix.moyen - totalAides);

  // 5. Coût annuel actuel et avec PAC
  const coutActuelEstime = factureAnnuelleActuelle && factureAnnuelleActuelle > 0
    ? factureAnnuelleActuelle
    : Math.round(surface * COUT_ENERGIE_M2[energieActuelle]);
  const coutPac = Math.round(surface * COUT_PAC_M2[typePac]);
  const economie = Math.max(0, coutActuelEstime - coutPac);
  const economieDixAns = economie * 10;

  // 6. Amortissement
  const amortissement = economie > 0 ? Math.round((resteMoyen / economie) * 10) / 10 : 99;

  // 7. Notes contextuelles
  const notes: string[] = [];
  if (typePac === "air-air") {
    notes.push("La PAC air-air n'est pas éligible MaPrimeRénov'. Vous pouvez bénéficier de la prime CEE classique.");
  }
  if (profil === "rose") {
    notes.push("Profil aisé : non éligible MaPrimeRénov' simple en 2026. Reste éligible à la prime CEE et au Coup de pouce.");
  }
  if (energieActuelle === "fioul" && (profil === "bleu" || profil === "jaune")) {
    notes.push("Sortie de fioul détectée — bonus de 1 000 € appliqué sur MaPrimeRénov'.");
  }
  if (isolation === "faible") {
    notes.push("Isolation faible : nous recommandons de prévoir une amélioration (combles + murs) avant ou en parallèle de la pose, sinon le rendement réel sera moindre que ce calcul.");
  }
  if (factureAnnuelleActuelle && factureAnnuelleActuelle > coutActuelEstime * 1.5) {
    notes.push("Votre facture actuelle est sensiblement plus élevée que la moyenne pour ce type de logement : potentiel d'économie encore plus important.");
  }

  return {
    puissanceKw,
    prixMoyen: prix,
    aides: {
      maPrimeRenov: mpr,
      bonusSortieFioul: bonusFioul,
      coupDePouce,
      ceeClassique: ceeAirAir,
      tvaReduite,
      total: totalAides,
    },
    resteACharge: { min: resteMin, max: resteMax, moyen: resteMoyen },
    coutAnnuelActuel: coutActuelEstime,
    coutAnnuelPac: coutPac,
    economieAnnuelle: economie,
    economieDixAns,
    amortissementAnnees: amortissement,
    notes,
    eligibleMaPrimeRenov: eligibleMpr,
  };
}

export function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 }) + " €";
}
