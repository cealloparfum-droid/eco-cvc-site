import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Snowflake,
  Calculator,
  Ruler,
  Layers,
  Square,
  Croissant,
  Cookie,
  ArrowRight,
  Phone,
  Sparkles,
  Info,
  Check,
  ShoppingBag,
  ShieldCheck,
  Award,
  Wind,
  Lightbulb,
  Wrench,
  Truck,
  Clock,
  Package,
  Coffee,
  Wheat,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import LeadCaptureCard from "@/components/LeadCaptureCard";
import TestimonialStrip from "@/components/TestimonialStrip";

import heroVitrines from "@/assets/vitrines/hero-marbre-premium.jpg";
import vitrineNeutreLed from "@/assets/vitrines/vitrine-neutre-bois-led.jpg";
import vitrinePainSpecial from "@/assets/vitrines/pain-special-bois.jpg";
import vitrineOrangina from "@/assets/vitrines/installation-orangina-angle.jpg";
import vitrineMokaEnsemble from "@/assets/vitrines/moka-atelier-ensemble.jpg";
import vitrineMokaFacade from "@/assets/vitrines/moka-facade-nuit.jpg";
import vitrineAtelier from "@/assets/vitrines/atelier-vitrine-bois.jpg";
import vitrinePatisserie from "@/assets/vitrines/patisserie-noir-or.jpg";

// ────────────────────────────────────────────────────────────
// CATALOGUE 3A DISTRIBUTION — TARIF 2025 (extrait PDF officiel)
// ────────────────────────────────────────────────────────────

type Plateau = "corian" | "inox";
type Etagere = 0 | 1 | 2;
type Famille =
  | "neutre"
  | "pain-special"
  | "refrigeree-sans-reserve"
  | "refrigeree-avec-reserve"
  | "angle-reserve"
  | "caisse-pmr"
  | "panetiere";

interface VitrineModel {
  ref: string;
  longueurMm: number;
  largeurMm: number;
  hauteurMm: number;
  prixCorian?: number;
  prixInox?: number;
  // Pour vitrines réfrigérées : prix par étage [SE, 1E, 2E]
  prixCorianEtages?: [number, number, number];
  prixInoxEtages?: [number, number, number];
  famille: Famille;
}

const catalogue: VitrineModel[] = [
  // === VITRINES NEUTRES ===
  { ref: "BVNC80",  longueurMm: 800,  largeurMm: 800, hauteurMm: 1550, prixCorian: 2567.20, prixInox: 2467.20, famille: "neutre" },
  { ref: "BVNC100", longueurMm: 1000, largeurMm: 800, hauteurMm: 1550, prixCorian: 2843.20, prixInox: 2743.20, famille: "neutre" },
  { ref: "BVNC130", longueurMm: 1300, largeurMm: 800, hauteurMm: 1550, prixCorian: 3308.00, prixInox: 3308.00, famille: "neutre" },
  { ref: "BVNC150", longueurMm: 1500, largeurMm: 800, hauteurMm: 1550, prixCorian: 3546.40, prixInox: 3446.40, famille: "neutre" },
  { ref: "BVNC255", longueurMm: 2550, largeurMm: 800, hauteurMm: 1550, prixCorian: 3970.00, prixInox: 3870.00, famille: "neutre" },

  // === VITRINES PAINS SPECIAUX ===
  { ref: "BVPSC80",  longueurMm: 800,  largeurMm: 800, hauteurMm: 1550, prixCorian: 3067.20, prixInox: 2967.20, famille: "pain-special" },
  { ref: "BVPSC100", longueurMm: 1000, largeurMm: 800, hauteurMm: 1550, prixCorian: 3343.20, prixInox: 3243.20, famille: "pain-special" },
  { ref: "BVPSC130", longueurMm: 1300, largeurMm: 800, hauteurMm: 1550, prixCorian: 3708.00, prixInox: 3608.00, famille: "pain-special" },

  // === VITRINES REFRIGEREES SANS RESERVE ===
  {
    ref: "BVRC135", longueurMm: 1350, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [4128.48, 4228.48, 4328.48],
    prixInoxEtages:   [4068.48, 4168.48, 4268.48],
    famille: "refrigeree-sans-reserve",
  },
  {
    ref: "BVRC175", longueurMm: 1750, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [4747.80, 4847.80, 4947.80],
    prixInoxEtages:   [4687.80, 4787.80, 4887.80],
    famille: "refrigeree-sans-reserve",
  },
  {
    ref: "BVRC215", longueurMm: 2150, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [5130.00, 5230.00, 5330.00],
    prixInoxEtages:   [5070.00, 5170.00, 5270.00],
    famille: "refrigeree-sans-reserve",
  },
  {
    ref: "BVRC255", longueurMm: 2550, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [5817.96, 5917.96, 6017.96],
    prixInoxEtages:   [5757.96, 5857.96, 5957.96],
    famille: "refrigeree-sans-reserve",
  },

  // === VITRINES REFRIGEREES AVEC RESERVE (droites + angles déport) ===
  {
    ref: "BVAISR-C45", longueurMm: 450, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [4000.08, 4100.08, 4200.08],
    prixInoxEtages:   [3939.60, 4039.60, 4139.60],
    famille: "refrigeree-avec-reserve",
  },
  {
    ref: "BVAISR-C90", longueurMm: 900, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [4923.60, 5023.60, 5123.60],
    prixInoxEtages:   [4863.60, 4963.60, 5063.60],
    famille: "refrigeree-avec-reserve",
  },
  {
    ref: "BVAESR-C90", longueurMm: 900, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [6168.00, 6268.00, 6368.00],
    prixInoxEtages:   [6108.00, 6208.00, 6308.00],
    famille: "refrigeree-avec-reserve",
  },
  {
    ref: "BVADSR-C90", longueurMm: 900, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [5326.80, 5426.80, 5526.80],
    prixInoxEtages:   [5266.80, 5366.80, 5466.80],
    famille: "refrigeree-avec-reserve",
  },

  // === VITRINES REFRIGEREES ANGLES INT/EXT AVEC RESERVE ===
  {
    ref: "BVARC135", longueurMm: 1350, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [5396.54, 5416.54, 5436.54],
    prixInoxEtages:   [5376.54, 5476.54, 5596.54],
    famille: "angle-reserve",
  },
  {
    ref: "BVARC175", longueurMm: 1750, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [6182.22, 6202.22, 6222.22],
    prixInoxEtages:   [6162.22, 6262.22, 6362.22],
    famille: "angle-reserve",
  },
  {
    ref: "BVARC215", longueurMm: 2150, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [6542.32, 6562.32, 6582.32],
    prixInoxEtages:   [6522.32, 6622.32, 6722.32],
    famille: "angle-reserve",
  },
  {
    ref: "BVARC255", longueurMm: 2550, largeurMm: 950, hauteurMm: 1250,
    prixCorianEtages: [7264.36, 7284.36, 7304.36],
    prixInoxEtages:   [5853.93, 5953.93, 6053.93],
    famille: "angle-reserve",
  },

  // === MEUBLES CAISSES PMR ===
  { ref: "BMCC70",  longueurMm: 700,  largeurMm: 800, hauteurMm: 850, prixCorian: 2459.20, prixInox: 2359.20, famille: "caisse-pmr" },
  { ref: "BMCC100", longueurMm: 1000, largeurMm: 800, hauteurMm: 850, prixCorian: 2776.00, prixInox: 2676.00, famille: "caisse-pmr" },
  { ref: "BMCC150", longueurMm: 1500, largeurMm: 800, hauteurMm: 850, prixCorian: 3036.40, prixInox: 2936.40, famille: "caisse-pmr" },

  // === PANETIERES ===
  { ref: "PFB150", longueurMm: 1500, largeurMm: 500, hauteurMm: 1900, prixCorian: 1800.00, prixInox: 1800.00, famille: "panetiere" },
  { ref: "PFB200", longueurMm: 2000, largeurMm: 500, hauteurMm: 1900, prixCorian: 2400.00, prixInox: 2400.00, famille: "panetiere" },
  { ref: "PFB250", longueurMm: 2500, largeurMm: 500, hauteurMm: 1900, prixCorian: 3000.00, prixInox: 3000.00, famille: "panetiere" },
];

const familleMeta: Record<Famille, {
  label: string;
  short: string;
  icon: typeof Snowflake;
  color: string;
  refrigerated: boolean;
  hasEtages: boolean;
  description: string;
}> = {
  "neutre": {
    label: "Vitrine neutre",
    short: "Neutre",
    icon: Cookie,
    color: "amber",
    refrigerated: false,
    hasEtages: false,
    description: "Comptoir d'exposition non réfrigéré pour viennoiseries, pains, gâteaux secs.",
  },
  "pain-special": {
    label: "Vitrine pains spéciaux",
    short: "Pains spéciaux",
    icon: Wheat,
    color: "amber",
    refrigerated: false,
    hasEtages: false,
    description: "Présentoir bois pour pains spéciaux et grosses pièces — option trancheuse intégrée.",
  },
  "refrigeree-sans-reserve": {
    label: "Vitrine réfrigérée sans réserve",
    short: "Réfrigérée droite",
    icon: Snowflake,
    color: "sky",
    refrigerated: true,
    hasEtages: true,
    description: "Froid ventilé +2 °C / +8 °C pour pâtisseries, charcuterie, fromages, traiteur. Groupe coulissant.",
  },
  "refrigeree-avec-reserve": {
    label: "Vitrine réfrigérée avec réserve",
    short: "Réfrigérée + réserve",
    icon: Package,
    color: "sky",
    refrigerated: true,
    hasEtages: true,
    description: "Froid ventilé avec réserve arrière (intérieure ou extérieure) — gain de place et de stock.",
  },
  "angle-reserve": {
    label: "Vitrine d'angle réfrigérée",
    short: "Angle réfrigéré",
    icon: Layers,
    color: "sky",
    refrigerated: true,
    hasEtages: true,
    description: "Solution d'angle intérieur ou extérieur avec réserve — pour configurations en L ou en U.",
  },
  "caisse-pmr": {
    label: "Meuble caisse PMR",
    short: "Caisse PMR",
    icon: ShoppingBag,
    color: "amber",
    refrigerated: false,
    hasEtages: false,
    description: "Comptoir caisse aux normes accessibilité — plateau bas, encastrement balance et terminal.",
  },
  "panetiere": {
    label: "Panetière",
    short: "Panetière",
    icon: Croissant,
    color: "amber",
    refrigerated: false,
    hasEtages: false,
    description: "Panetière en fer forgé et bois, version droite ou d'angle sur mesure. Hauteur 1900 mm.",
  },
};

// ────────────────────────────────────────────────────────────
// CALCULATEUR — sélection vitrine la plus proche du linéaire
// ────────────────────────────────────────────────────────────

interface Estimation {
  model: VitrineModel | null;
  prix: number | null;
  prixUniteHt: number | null;
  message: string;
  surMesure: boolean;
}

const computePrice = (
  model: VitrineModel,
  plateau: Plateau,
  etagere: Etagere
): number | null => {
  if (model.prixCorianEtages && model.prixInoxEtages) {
    const grid = plateau === "corian" ? model.prixCorianEtages : model.prixInoxEtages;
    return grid[etagere];
  }
  if (plateau === "corian" && model.prixCorian !== undefined) return model.prixCorian;
  if (plateau === "inox" && model.prixInox !== undefined) return model.prixInox;
  return null;
};

const findBestModel = (
  famille: Famille,
  lineaireM: number,
  plateau: Plateau,
  etagere: Etagere
): Estimation => {
  const lineaireMm = lineaireM * 1000;
  const family = catalogue.filter((m) => m.famille === famille);

  if (family.length === 0) {
    return {
      model: null,
      prix: null,
      prixUniteHt: null,
      message: "Configuration non disponible — sur mesure.",
      surMesure: true,
    };
  }

  // Si le linéaire dépasse le plus grand modèle : combinaison/sur-mesure
  const maxLength = Math.max(...family.map((m) => m.longueurMm));
  const minLength = Math.min(...family.map((m) => m.longueurMm));

  if (lineaireMm > maxLength * 1.05) {
    // Combinaison : on suggère le plus grand × le nombre nécessaire
    const biggest = family.find((m) => m.longueurMm === maxLength)!;
    const nb = Math.ceil(lineaireMm / maxLength);
    const prixUnite = computePrice(biggest, plateau, etagere);
    return {
      model: biggest,
      prix: prixUnite ? prixUnite * nb : null,
      prixUniteHt: prixUnite,
      message: `Combinaison de ${nb} × ${biggest.ref} pour atteindre ${lineaireM.toFixed(2)} m linéaire — sur mesure recommandé pour finition seamless.`,
      surMesure: true,
    };
  }

  if (lineaireMm < minLength * 0.95) {
    return {
      model: null,
      prix: null,
      prixUniteHt: null,
      message: `Linéaire trop court (min. ${(minLength / 1000).toFixed(2)} m pour cette famille). Solution sur mesure 3A Distribution disponible.`,
      surMesure: true,
    };
  }

  // Trouve le modèle dont la longueur est la plus proche
  let best = family[0];
  let bestDiff = Math.abs(family[0].longueurMm - lineaireMm);
  for (const m of family) {
    const diff = Math.abs(m.longueurMm - lineaireMm);
    if (diff < bestDiff) {
      best = m;
      bestDiff = diff;
    }
  }

  const prix = computePrice(best, plateau, etagere);
  if (prix === null) {
    return {
      model: best,
      prix: null,
      prixUniteHt: null,
      message: "Combinaison plateau/étagère non disponible pour cette famille.",
      surMesure: true,
    };
  }

  return {
    model: best,
    prix,
    prixUniteHt: prix,
    message: `Réf. ${best.ref} — ${(best.longueurMm / 1000).toFixed(2)} m linéaire`,
    surMesure: false,
  };
};

const formatEur = (v: number) =>
  v.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

// ────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────

const VitrinesRefrigerees = () => {
  const [famille, setFamille] = useState<Famille>("refrigeree-sans-reserve");
  const [lineaire, setLineaire] = useState(1.75);
  const [plateau, setPlateau] = useState<Plateau>("corian");
  const [etagere, setEtagere] = useState<Etagere>(1);

  const meta = familleMeta[famille];

  const result = useMemo(() => {
    return findBestModel(famille, lineaire, plateau, etagere);
  }, [famille, lineaire, plateau, etagere]);

  // Quand on bascule vers une famille sans étages, force etagere = 0
  const effectiveEtagere = meta.hasEtages ? etagere : 0;
  const resultEffective = useMemo(() => {
    return findBestModel(famille, lineaire, plateau, effectiveEtagere);
  }, [famille, lineaire, plateau, effectiveEtagere]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Vitrines réfrigérées sur mesure"
          title={
            <>
              <span className="text-gradient-brand">Vitrines & comptoirs</span> haute couture · 3A Distribution
            </>
          }
          subtitle="Atelier français spécialiste des vitrines pâtisserie, boulangerie, charcuterie, fromagerie et caisses PMR. Plateau CORIAN ou inox, façade en stratifié bois ou couleur, vitre frontale basculante anti-buée 100 mm, éclairage LED tous niveaux. eco cvc assure la conception, l'installation et le raccordement frigorifique de votre vitrine en Rhône-Alpes."
          breadcrumb={[{ label: "Vitrines réfrigérées" }]}
          heroImage={{
            src: heroVitrines,
            alt: "Vitrine réfrigérée premium avec finition marbre Calacatta — réalisation 3A Distribution × eco cvc",
            caption: "Réalisation premium · Finition marbre Calacatta",
            badge: "Boulangerie · Pâtisserie · Traiteur",
          }}
        />

        {/* Partner intro — 3A Distribution */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Notre partenaire fabricant"
              title={
                <>
                  3A Distribution · <span className="text-gradient-brand">vitrines made in Île-de-France</span>.
                </>
              }
              subtitle="Atelier d'Alfortville (94) spécialisé dans la conception et la fabrication de vitrines réfrigérées et neutres pour les commerces de bouche. Sept familles produits, des dimensions standards 0,7 m → 2,55 m et toutes les configurations sur mesure : angles, ensembles en L ou U, marquages spécifiques."
            />
            <div className="grid md:grid-cols-2 gap-6 mt-14">
              <div className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-shadow group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img loading="lazy" decoding="async"
                    src={vitrineAtelier}
                    alt="Atelier 3A Distribution à Alfortville — chaîne de fabrication d'une vitrine boulangerie sur mesure, façade bois et plateau CORIAN"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                    Atelier · Alfortville
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">3A Distribution</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-blue">71 Rue Etienne Dolet</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Fabricant français de <strong className="text-foreground">vitrines neutres et réfrigérées</strong>, panetières, meubles caisses et ensembles d'angle. Stratifié bois ou couleur au choix, plateau CORIAN ou inox, vitre basculante anti-buée 100 mm, alimentation 230V / 50 Hz.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Made in France", "CORIAN · Inox", "Sur mesure", "Tarif 2025"].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent text-brand-bluedark">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-shadow group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img loading="lazy" decoding="async"
                    src={vitrineMokaFacade}
                    alt="Boulangerie Moka Artisan-Boulanger en façade — installation vitrines 3A Distribution × eco cvc, éclairage LED façade"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                    Réalisation · Boulangerie Moka
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">eco cvc · Pose & SAV</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-red">Rhône-Alpes</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Nous prenons en charge la <strong className="text-foreground">livraison, l'installation et le raccordement frigorifique</strong> (groupe extérieur, réseau frigo, mise en service) de votre vitrine 3A Distribution. Coordination avec votre menuisier ou architecte pour intégration parfaite.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["F-Gaz cat. 1", "Mise en service", "Maintenance 7j/7", "Garantie 2 ans"].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Étude tarifaire en ligne"
              title={
                <>
                  Configurez votre vitrine, <span className="text-gradient-brand">obtenez un ordre de prix</span>.
                </>
              }
              subtitle="Sélectionnez le type de vitrine, le linéaire en mètres, le plateau et le nombre d'étagères : nous identifions la référence 3A Distribution la plus proche et donnons le tarif catalogue 2025 HT. Un devis ferme inclura la pose, le groupe frigorifique et la mise en service."
            />

            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8 lg:gap-12 mt-14">
              {/* Form */}
              <div className="bg-white rounded-3xl border border-border shadow-soft p-6 md:p-9">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Configuration vitrine</h3>
                    <p className="text-sm text-muted-foreground">Tarif catalogue 3A Distribution 2025 · pose et groupe non inclus</p>
                  </div>
                </div>

                <Field icon={Layers} label="Famille de vitrine">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(Object.keys(familleMeta) as Famille[]).map((f) => {
                      const m = familleMeta[f];
                      const Icon = m.icon;
                      const active = famille === f;
                      return (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setFamille(f)}
                          className={`text-left px-3 py-3 rounded-xl border-2 transition-all ${
                            active
                              ? "bg-accent border-brand-blue shadow-soft"
                              : "bg-white border-border hover:border-brand-blue/40"
                          }`}
                        >
                          <Icon className={`w-4 h-4 mb-1.5 ${active ? "text-brand-blue" : "text-muted-foreground"}`} />
                          <div className={`text-sm font-bold leading-tight ${active ? "text-brand-bluedark" : "text-foreground"}`}>
                            {m.short}
                          </div>
                          {m.refrigerated && (
                            <div className="text-[10px] text-brand-sky mt-0.5 font-bold tracking-wider uppercase">Froid ventilé</div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{meta.description}</p>
                </Field>

                <Field icon={Ruler} label="Linéaire (longueur de vitrine)" hint={`${lineaire.toFixed(2)} m`}>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={0.45}
                      max={3.0}
                      step={0.05}
                      value={lineaire}
                      onChange={(e) => setLineaire(Number(e.target.value))}
                      className="flex-1 accent-brand-blue h-2"
                    />
                    <input
                      type="number"
                      min={0.45}
                      max={10}
                      step={0.05}
                      value={lineaire}
                      onChange={(e) => setLineaire(Math.max(0.45, Math.min(10, Number(e.target.value) || 1.75)))}
                      className="w-24 px-3 py-2 rounded-lg border border-border text-center font-semibold focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5">
                    <span>0,45 m</span>
                    <span>1,75 m</span>
                    <span>3 m+</span>
                  </div>
                </Field>

                <Field icon={Square} label="Plateau d'exposition">
                  <ButtonGroup
                    value={plateau}
                    onChange={(v) => setPlateau(v as Plateau)}
                    options={[
                      { value: "corian", label: "CORIAN", sub: "Surface massive haut de gamme" },
                      { value: "inox", label: "Inox", sub: "Hygiénique · facile d'entretien" },
                    ]}
                  />
                </Field>

                {meta.hasEtages && (
                  <Field
                    icon={Layers}
                    label="Nombre d'étagères réfrigérées"
                    description="Plus d'étagères = plus de surface d'exposition, mais davantage de pertes thermiques. Le froid ventilé homogène 3A garantit la chaîne du froid sur tous les niveaux."
                  >
                    <ButtonGroup
                      value={String(etagere)}
                      onChange={(v) => setEtagere(Number(v) as Etagere)}
                      options={[
                        { value: "0", label: "Sans étagère", sub: "1 niveau d'expo" },
                        { value: "1", label: "1 étage", sub: "2 niveaux d'expo" },
                        { value: "2", label: "2 étages", sub: "3 niveaux d'expo" },
                      ]}
                    />
                  </Field>
                )}

                <div className="flex items-start gap-2 mt-2 text-xs text-muted-foreground bg-slate-50 rounded-lg p-3 border border-border">
                  <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>
                    Tarifs <strong>HT catalogue 3A Distribution 2025</strong>. La pose, le groupe frigorifique extérieur,
                    le réseau frigo et la mise en service par eco cvc font l'objet d'un devis dédié
                    (sur visite technique gratuite). Décor sur mesure, marquages logos et formes spécifiques en option.
                  </span>
                </div>
              </div>

              {/* Result */}
              <div>
                <motion.div
                  layout
                  className="sticky top-32 bg-gradient-to-br from-slate-900 via-brand-bluedark to-brand-blue rounded-3xl text-white p-7 md:p-8 shadow-lifted overflow-hidden relative"
                >
                  <motion.div
                    className="absolute inset-0 opacity-40"
                    animate={{
                      background: [
                        "radial-gradient(400px circle at 0% 0%, rgba(43,136,216,0.30), transparent 60%)",
                        "radial-gradient(400px circle at 100% 100%, rgba(232,52,59,0.20), transparent 60%)",
                        "radial-gradient(400px circle at 0% 0%, rgba(43,136,216,0.30), transparent 60%)",
                      ],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase mb-5">
                      <Sparkles className="w-3 h-3" />
                      Estimation eco cvc × 3A
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-[11px] tracking-widest uppercase text-white/60 mb-1">Linéaire</div>
                        <div className="text-3xl font-extrabold">{lineaire.toFixed(2)} <span className="text-lg text-white/70">m</span></div>
                      </div>
                      <div>
                        <div className="text-[11px] tracking-widest uppercase text-white/60 mb-1">Famille</div>
                        <motion.div
                          key={famille}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-base font-extrabold leading-tight"
                        >
                          {meta.short}
                        </motion.div>
                      </div>
                    </div>

                    <div className="rounded-2xl border-2 border-white/15 bg-white/5 backdrop-blur-md p-5">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-brand-sky">
                          3A Distribution
                        </span>
                        {resultEffective.surMesure ? (
                          <span className="bg-amber-500 text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full shadow-lifted">
                            Sur mesure
                          </span>
                        ) : (
                          <span className="bg-brand-red text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full shadow-lifted">
                            Catalogue 2025
                          </span>
                        )}
                      </div>
                      <div className="text-lg font-extrabold leading-tight mb-1">
                        {resultEffective.model ? `Réf. ${resultEffective.model.ref}` : "Configuration sur mesure"}
                      </div>
                      <div className="text-[11px] text-white/70 mb-3 font-mono">
                        {resultEffective.model
                          ? `${resultEffective.model.longueurMm} × ${resultEffective.model.largeurMm} × ${resultEffective.model.hauteurMm} mm`
                          : "Dimensions à définir avec notre bureau d'études"}
                      </div>
                      <p className="text-xs text-white/85 leading-relaxed mb-4">{resultEffective.message}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-white/15 px-2 py-0.5 rounded-full">
                          Plateau {plateau === "corian" ? "CORIAN" : "Inox"}
                        </span>
                        {meta.hasEtages && (
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-white/15 px-2 py-0.5 rounded-full">
                            {etagere === 0 ? "Sans étagère" : `${etagere} étage${etagere > 1 ? "s" : ""}`}
                          </span>
                        )}
                        {meta.refrigerated && (
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-brand-sky/30 px-2 py-0.5 rounded-full">
                            Froid ventilé
                          </span>
                        )}
                      </div>
                      <div className="text-base font-bold text-white pt-3 border-t border-white/10">
                        {resultEffective.prix !== null ? (
                          <>
                            💰 {formatEur(resultEffective.prix)} HT
                            {resultEffective.surMesure && resultEffective.prixUniteHt !== null && (
                              <div className="text-[11px] font-normal text-white/70 mt-1">
                                ({formatEur(resultEffective.prixUniteHt)} × n unités)
                              </div>
                            )}
                          </>
                        ) : (
                          <>📐 Devis sur mesure</>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition-all shadow-lifted hover:-translate-y-0.5 text-sm"
                      >
                        Devis vitrine + pose
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <a
                        href="tel:+33629634045"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        06 29 63 40 45
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-10 max-w-5xl mx-auto">
              <LeadCaptureCard
                context="vitrines"
                summary={`${meta.label} · ${lineaire.toFixed(2)} m linéaire · ${resultEffective.modele?.code ?? "Sur mesure"}`}
                extraData={{
                  famille,
                  lineaire_m: lineaire,
                  plateau,
                  etagere: effectiveEtagere,
                  modele_recommande: resultEffective.modele?.code ?? "sur-mesure",
                }}
              />
            </div>
          </div>
        </section>

        {/* Caractéristiques techniques */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Caractéristiques standards"
              title={
                <>
                  Une vitrine 3A, <span className="text-gradient-brand">c'est pensé pour durer</span>.
                </>
              }
              subtitle="Toutes les vitrines 3A Distribution sont conçues sur la même base technique : matériaux nobles, frigorigène homogène, ergonomie pour les utilisateurs et les clients. Voici l'équipement standard livré avec chaque modèle."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
              {[
                { icon: Wind, title: "Froid ventilé homogène", desc: "Température uniforme +2 °C / +8 °C sur tous les niveaux. Évaporateur à dégivrage naturel pour conservation longue." },
                { icon: Wrench, title: "Groupe coulissant", desc: "Accès facile au groupe frigorifique pour la maintenance — sans démontage de la vitrine." },
                { icon: Snowflake, title: "Système antibuée", desc: "Vitre frontale basculante 100 mm avec remontée anti-buée chauffante : visibilité parfaite des produits." },
                { icon: Lightbulb, title: "Éclairage LED tous niveaux", desc: "Bandeaux LED chaud sur chaque étage et sous-bandeau de façade. Mise en valeur des couleurs des produits." },
                { icon: Layers, title: "Étagères 500 mm", desc: "2 étagères standards de 500 mm de profondeur (vitrines neutres). Plateaux démontables côté refroidi." },
                { icon: Square, title: "Plateau CORIAN ou inox", desc: "CORIAN massif (surface lisse, sans joint) ou inox brossé alimentaire. Décors et joues en bois laqué." },
                { icon: Award, title: "Vitre frontale basculante", desc: "Verre trempé sécurit, ouverture vers le haut pour service rapide et nettoyage facile." },
                { icon: ShieldCheck, title: "Alimentation 230V / 50Hz", desc: "Branchement standard sur prise dédiée. Pieds réglables, roulettes en option (vitrines réfrigérées)." },
                { icon: Sparkles, title: "Sur mesure & marquage", desc: "Couleurs, formes, dimensions et logos personnalisés sur devis. Coordination avec votre architecte." },
              ].map((c) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-border p-6 hover:shadow-lifted hover:border-brand-blue/40 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-1.5 leading-tight">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vitrines neutres + Pains spéciaux side by side */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Vitrines neutres & pains spéciaux"
              title={
                <>
                  Présentoir non réfrigéré <span className="text-gradient-brand">pour la boulangerie</span>.
                </>
              }
              subtitle="Les vitrines neutres et pains spéciaux mettent en valeur viennoiseries, gâteaux secs, pains et grosses pièces sans contrainte de chaîne du froid. Plateau CORIAN ou inox, façade en stratifié bois ou couleur."
            />

            <div className="grid lg:grid-cols-2 gap-6 mt-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img loading="lazy" decoding="async"
                    src={vitrineNeutreLed}
                    alt="Vitrine neutre 3A Distribution avec façade bois clair et éclairage LED bandeau bas — modèle BVNC"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-amber-500 text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                    Famille BVN · Neutre
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">Vitrines neutres BVN</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    5 longueurs standards (800 → 2550 mm), 2 étagères 500 mm, plateau CORIAN ou inox. Idéales pour viennoiseries, gâteaux secs, chocolats et exposition de pains.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border text-muted-foreground">
                          <th className="text-left py-2 font-bold">Réf.</th>
                          <th className="text-left py-2 font-bold">Dimensions</th>
                          <th className="text-right py-2 font-bold">CORIAN</th>
                          <th className="text-right py-2 font-bold">Inox</th>
                        </tr>
                      </thead>
                      <tbody>
                        {catalogue.filter((m) => m.famille === "neutre").map((m) => (
                          <tr key={m.ref} className="border-b border-border/50 text-foreground">
                            <td className="py-2 font-mono font-bold">{m.ref}</td>
                            <td className="py-2 text-muted-foreground">{m.longueurMm}×{m.largeurMm}×{m.hauteurMm}</td>
                            <td className="py-2 text-right font-bold">{m.prixCorian ? formatEur(m.prixCorian) : "—"}</td>
                            <td className="py-2 text-right">{m.prixInox ? formatEur(m.prixInox) : "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img loading="lazy" decoding="async"
                    src={vitrinePainSpecial}
                    alt="Vitrine pains spéciaux 3A Distribution avec étagères bois lattés sur fond brique — modèle BVPS"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-amber-700 text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                    Famille BVPS · Pains spéciaux
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">Vitrines pains spéciaux BVPS</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Présentoir bois pour pains spéciaux, baguettes et grosses pièces. Tableau ramasse-miette intégré, option <strong>trancheuse électrique</strong> pour service en boulangerie.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border text-muted-foreground">
                          <th className="text-left py-2 font-bold">Réf.</th>
                          <th className="text-left py-2 font-bold">Dimensions</th>
                          <th className="text-right py-2 font-bold">CORIAN</th>
                          <th className="text-right py-2 font-bold">Inox</th>
                        </tr>
                      </thead>
                      <tbody>
                        {catalogue.filter((m) => m.famille === "pain-special").map((m) => (
                          <tr key={m.ref} className="border-b border-border/50 text-foreground">
                            <td className="py-2 font-mono font-bold">{m.ref}</td>
                            <td className="py-2 text-muted-foreground">{m.longueurMm}×{m.largeurMm}×{m.hauteurMm}</td>
                            <td className="py-2 text-right font-bold">{m.prixCorian ? formatEur(m.prixCorian) : "—"}</td>
                            <td className="py-2 text-right">{m.prixInox ? formatEur(m.prixInox) : "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vitrines réfrigérées showcase */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Vitrines réfrigérées · cœur de gamme"
              title={
                <>
                  Froid ventilé +2 °C → +8 °C, <span className="text-gradient-brand">homogène et silencieux</span>.
                </>
              }
              subtitle="Les vitrines réfrigérées BVR (sans réserve), BVAISR / BVAESR / BVADSR (avec réserve) et BVAR (angles) couvrent les besoins de la pâtisserie, charcuterie, fromagerie, traiteur. Quatre longueurs standards 1350 → 2550 mm, configurables 0, 1 ou 2 étages."
            />

            <div className="grid lg:grid-cols-3 gap-6 mt-14">
              {/* Sans réserve */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted hover:border-brand-blue/40 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-50">
                  <img loading="lazy" decoding="async"
                    src={vitrinePatisserie}
                    alt="Vitrine réfrigérée pâtisserie BVR sans réserve — installation noir et or, éclairage LED haut de gamme"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-sky text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                    BVR · Sans réserve
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">Réfrigérée droite — sans réserve</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Configuration la plus compacte. Idéale en boulangerie-pâtisserie : pas de stock arrière nécessaire, rotation rapide des produits.
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground/85 mb-4">
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> Profondeur 950 mm · hauteur 1250 mm</li>
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> 4 longueurs · 1350 → 2550 mm</li>
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> 0 / 1 / 2 étages réfrigérés</li>
                  </ul>
                  <div className="text-sm font-extrabold text-brand-bluedark border-t border-border pt-3">
                    À partir de 4 068,48 € HT (BVRI135 · 1 étage)
                  </div>
                </div>
              </motion.div>

              {/* Avec réserve */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted hover:border-brand-blue/40 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-50">
                  <img loading="lazy" decoding="async"
                    src={vitrineMokaEnsemble}
                    alt="Ensemble vitrines réfrigérées avec réserve — boulangerie Moka, configuration U avec marquage logo et éclairage LED"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-blue text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                    BVAISR · Avec réserve
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">Réfrigérée droite — avec réserve</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Réserve arrière intérieure (BVAISR) ou extérieure (BVAESR), version déport (BVADSR). Tablette de service démontable, fermetures arrière en plexiglass.
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground/85 mb-4">
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> Réserve int. / ext. / déport</li>
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> Plateau CORIAN ou inox</li>
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> Roulettes et système antibuée</li>
                  </ul>
                  <div className="text-sm font-extrabold text-brand-bluedark border-t border-border pt-3">
                    À partir de 3 939,60 € HT (BVAISR-I45 · sans étage)
                  </div>
                </div>
              </motion.div>

              {/* Angle réserve */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted hover:border-brand-blue/40 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-50">
                  <img loading="lazy" decoding="async"
                    src={vitrineOrangina}
                    alt="Vitrine réfrigérée d'angle BVAR avec réserve — installation boulangerie ORANGINA, marbre noir et angles intérieur/extérieur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-bluedark text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                    BVAR · Angles
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">Angles intérieurs & extérieurs</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Solutions d'angle avec réserve pour configuration en L ou en U. Permettent un linéaire continu sans interruption visuelle, idéal pour les boulangeries de centre-ville.
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground/85 mb-4">
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> Angle intérieur ou extérieur</li>
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> Continuité du froid sur l'angle</li>
                    <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" /> Combinable avec vitrines droites</li>
                  </ul>
                  <div className="text-sm font-extrabold text-brand-bluedark border-t border-border pt-3">
                    À partir de 5 376,54 € HT (BVARI135 · sans étage)
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Tableau prix complet — réfrigérées sans réserve */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-white rounded-3xl border border-border overflow-hidden shadow-soft"
            >
              <div className="px-6 py-5 border-b border-border bg-slate-50/60 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900">Grille tarifaire 2025 · Vitrines réfrigérées sans réserve (BVR)</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Prix HT catalogue · plateau CORIAN ou inox · 0 / 1 / 2 étages</p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-bluedark">
                  <Snowflake className="w-3 h-3" /> Froid ventilé
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-white text-[11px] tracking-widest uppercase text-muted-foreground">
                      <th className="text-left py-3 px-4 font-bold">Réf.</th>
                      <th className="text-left py-3 px-4 font-bold">Dimensions (mm)</th>
                      <th className="text-right py-3 px-4 font-bold">SE</th>
                      <th className="text-right py-3 px-4 font-bold">1.E</th>
                      <th className="text-right py-3 px-4 font-bold">2.E</th>
                      <th className="text-left py-3 px-4 font-bold">Plateau</th>
                    </tr>
                  </thead>
                  <tbody>
                    {catalogue
                      .filter((m) => m.famille === "refrigeree-sans-reserve")
                      .flatMap((m) => [
                        { m, plateau: "CORIAN" as const, prices: m.prixCorianEtages! },
                        { m, plateau: "Inox" as const, prices: m.prixInoxEtages! },
                      ])
                      .map(({ m, plateau, prices }) => (
                        <tr key={`${m.ref}-${plateau}`} className="border-b border-border/40 hover:bg-slate-50/40 transition-colors">
                          <td className="py-2.5 px-4 font-mono font-bold text-foreground">
                            {plateau === "Inox" ? m.ref.replace("RC", "RI") : m.ref}
                          </td>
                          <td className="py-2.5 px-4 text-muted-foreground text-xs">{m.longueurMm}×{m.largeurMm}×{m.hauteurMm}</td>
                          <td className="py-2.5 px-4 text-right font-semibold">{formatEur(prices[0])}</td>
                          <td className="py-2.5 px-4 text-right font-semibold">{formatEur(prices[1])}</td>
                          <td className="py-2.5 px-4 text-right font-semibold">{formatEur(prices[2])}</td>
                          <td className="py-2.5 px-4">
                            <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                              plateau === "CORIAN" ? "bg-accent text-brand-bluedark" : "bg-slate-100 text-slate-700"
                            }`}>
                              {plateau}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Caisse PMR + Panetières */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Caisses & panetières"
              title={
                <>
                  Compléter votre boutique <span className="text-gradient-brand">de A à Z</span>.
                </>
              }
              subtitle="Au-delà des vitrines, 3A Distribution fabrique aussi les meubles caisses (aux normes PMR) et les panetières en fer forgé et bois — pour un agencement complet et harmonieux de votre commerce."
            />
            <div className="grid lg:grid-cols-2 gap-6 mt-14">
              <div className="bg-white rounded-3xl border border-border p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-700">Famille BMC</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Meubles caisses PMR</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Comptoir caisse aux normes accessibilité PMR. Plateau bas pour clients en fauteuil, encastrement balance et terminal de paiement, façade harmonisée avec vos vitrines.
                </p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground">
                      <th className="text-left py-2 font-bold">Réf.</th>
                      <th className="text-left py-2 font-bold">Dimensions</th>
                      <th className="text-right py-2 font-bold">CORIAN</th>
                      <th className="text-right py-2 font-bold">Inox</th>
                    </tr>
                  </thead>
                  <tbody>
                    {catalogue.filter((m) => m.famille === "caisse-pmr").map((m) => (
                      <tr key={m.ref} className="border-b border-border/50">
                        <td className="py-2 font-mono font-bold">{m.ref}</td>
                        <td className="py-2 text-muted-foreground">{m.longueurMm}×{m.largeurMm}×{m.hauteurMm}</td>
                        <td className="py-2 text-right font-bold">{m.prixCorian ? formatEur(m.prixCorian) : "—"}</td>
                        <td className="py-2 text-right">{m.prixInox ? formatEur(m.prixInox) : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-3xl border border-border p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                    <Croissant className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-700">Famille PFB</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Panetières fer forgé & bois</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Hauteur 1900 mm, profondeur 500 mm. Trois longueurs standards (1500, 2000, 2500 mm) — version droite catalogue ou panetière d'angle entièrement sur mesure.
                </p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground">
                      <th className="text-left py-2 font-bold">Réf.</th>
                      <th className="text-left py-2 font-bold">Dimensions</th>
                      <th className="text-right py-2 font-bold">Prix HT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {catalogue.filter((m) => m.famille === "panetiere").map((m) => (
                      <tr key={m.ref} className="border-b border-border/50">
                        <td className="py-2 font-mono font-bold">{m.ref}</td>
                        <td className="py-2 text-muted-foreground">{m.longueurMm}×{m.largeurMm}×{m.hauteurMm}</td>
                        <td className="py-2 text-right font-bold">{m.prixCorian ? formatEur(m.prixCorian) : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases / métiers */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Pour qui"
              title={<>Des vitrines pour <span className="text-gradient-brand">tous vos métiers</span>.</>}
              subtitle="Boulangers, pâtissiers, traiteurs, fromagers, charcutiers, glaciers ou épiciers fins : nous concevons votre vitrine sur la base du catalogue 3A Distribution ou en sur-mesure intégral."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {[
                { icon: Croissant, label: "Boulangerie · Viennoiserie" },
                { icon: Cookie, label: "Pâtisserie · Chocolaterie" },
                { icon: Wheat, label: "Pains spéciaux · Bio" },
                { icon: Coffee, label: "Salons de thé · Cafés" },
                { icon: Package, label: "Charcuterie · Traiteur" },
                { icon: Award, label: "Fromagerie · Crèmerie" },
                { icon: ShoppingBag, label: "Épicerie fine · Cavistes" },
                { icon: ShieldCheck, label: "Glacerie · Sorbets" },
              ].map((u) => (
                <div key={u.label} className="bg-white rounded-2xl border border-border p-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <u.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{u.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process eco cvc */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Le processus eco cvc"
                  title={<>De la mesure à la <span className="text-gradient-brand">mise en route</span>.</>}
                  subtitle="Nous coordonnons le projet de A à Z avec 3A Distribution : visite de prise de cotes, validation du plan d'implantation, fabrication, livraison, installation et raccordement frigorifique."
                />
                <ul className="mt-8 space-y-4">
                  {[
                    { num: "01", title: "Visite & relevé sur site", desc: "Mesures précises, validation des accès, repérage des points de raccordement frigo et électrique." },
                    { num: "02", title: "Plan d'implantation 2D/3D", desc: "Plan d'agencement et choix des références (catalogue ou sur-mesure). Validation du devis ferme." },
                    { num: "03", title: "Fabrication 3A · 3 à 6 semaines", desc: "Atelier d'Alfortville. Suivi photographique de la fabrication et préparation du chantier en parallèle." },
                    { num: "04", title: "Livraison & pose", desc: "Livraison en camion-grue, installation eco cvc, raccordement frigo, mise en service et formation utilisateur." },
                  ].map((step) => (
                    <li key={step.num} className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-bluedark flex items-center justify-center text-white font-extrabold text-sm shadow-soft">
                        {step.num}
                      </div>
                      <div>
                        <div className="font-extrabold text-slate-900 mb-1">{step.title}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{step.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative bg-gradient-to-br from-brand-bluedark to-brand-blue rounded-3xl p-9 text-white overflow-hidden shadow-lifted"
              >
                <div className="absolute inset-0 bg-grid opacity-[0.06]" />
                <div className="relative">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-brand-sky/80 mb-3">Engagement eco cvc</div>
                  <Truck className="w-10 h-10 mb-5 text-brand-sky" />
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                    Un agencement <span className="text-gradient-hot">clé en main</span>.
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm mb-6">
                    Nous coordonnons fabricant, transporteur, électricien et frigoriste pour vous livrer
                    une boutique opérationnelle au jour J. Mise en service supervisée et formation à l'usage.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="text-3xl font-extrabold text-brand-sky">3-6</div>
                      <div className="text-[10px] text-white/70 uppercase tracking-wider">Semaines de délai</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="text-3xl font-extrabold text-brand-sky">
                        <Clock className="w-7 h-7 inline" />
                      </div>
                      <div className="text-[10px] text-white/70 uppercase tracking-wider">Mise en service J+1</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TestimonialStrip
          context="froid"
          title="Vitrines posées, commerces transformés"
          className="bg-slate-50/60 border-y border-border"
        />

        <CTABand variant="vitrines" />
        <Footer />
      </div>
    </PageTransition>
  );
};

// ────────────────────────────────────────────────────────────
// Sub-components (mêmes que ChambreFroide.tsx)
// ────────────────────────────────────────────────────────────

const Field = ({
  icon: Icon,
  label,
  hint,
  description,
  children,
}: {
  icon: typeof Ruler;
  label: string;
  hint?: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div className="mb-7">
    <div className="flex items-baseline justify-between mb-3">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-brand-blue" />
        <label className="text-sm font-bold text-slate-900">{label}</label>
      </div>
      {hint && <span className="text-sm font-extrabold text-brand-blue">{hint}</span>}
    </div>
    {description && <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{description}</p>}
    {children}
  </div>
);

const ButtonGroup = ({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string; sub?: string }[];
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
    {options.map((opt) => {
      const active = value === opt.value;
      return (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`text-left px-3 py-2.5 rounded-xl border-2 transition-all ${
            active
              ? "bg-accent border-brand-blue shadow-soft"
              : "bg-white border-border hover:border-brand-blue/40"
          }`}
        >
          <div className={`text-sm font-bold leading-tight ${active ? "text-brand-bluedark" : "text-foreground"}`}>
            {opt.label}
          </div>
          {opt.sub && <div className="text-[10px] text-muted-foreground mt-0.5">{opt.sub}</div>}
        </button>
      );
    })}
  </div>
);

export default VitrinesRefrigerees;
