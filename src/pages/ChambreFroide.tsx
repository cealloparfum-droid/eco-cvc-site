import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Snowflake,
  Thermometer,
  Box,
  Calculator,
  Ruler,
  Building,
  DoorOpen,
  Apple,
  Beef,
  Milk,
  IceCream,
  Wine,
  Leaf,
  ShieldCheck,
  Award,
  ArrowRight,
  Phone,
  Sparkles,
  Info,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import LeadCaptureCard from "@/components/LeadCaptureCard";
import TestimonialStrip from "@/components/TestimonialStrip";

import heroLifestyle from "@/assets/cold-room/hero-cold-room-chic.jpg";
import panasonicLifestyle from "@/assets/cold-room/brand-panasonic-cr-range.jpg";
import emersonLifestyle from "@/assets/cold-room/brand-emerson-copeland.jpg";
import panasonicShowcase from "@/assets/cold-room/panasonic-showcase-gourmet.jpg";
import paciNxLifestyle from "@/assets/cold-room/paci-nx-wine-cellar.jpg";
import emersonMtPhoto from "@/assets/cold-room/lifestyle-butcher.jpg";
import emersonLtPhoto from "@/assets/cold-room/products/emerson-zxle-lt.jpg";
import emersonDigitalPhoto from "@/assets/cold-room/products/emerson-zxde-digital.jpg";
import danfossLifestyle from "@/assets/cold-room/brand-danfoss-family.jpg";
import tecumsehLifestyle from "@/assets/cold-room/brand-tecumseh-silensys.jpg";
import danfossPlusPhoto from "@/assets/cold-room/products/danfoss-plus-p00.jpg";
import danfossSlimW05Photo from "@/assets/cold-room/products/danfoss-slim-w05.jpg";
import danfossSlimW09Photo from "@/assets/cold-room/products/danfoss-slim-w09.jpg";
import tecumsehSilensysPhoto from "@/assets/cold-room/products/tecumseh-silensys.jpg";
import tecumsehSilensysInvPhoto from "@/assets/cold-room/products/tecumseh-silensys-inverter.jpg";
import tecumsehWintsysPhoto from "@/assets/cold-room/products/tecumseh-wintsys.jpg";
import tecumsehTradPhoto from "@/assets/cold-room/products/tecumseh-traditionnel.jpg";

type ColdType = "positif-frais" | "positif-frigo" | "negatif-surgele" | "negatif-glace";
type Insulation = "standard" | "renforcee";
type Product = "viande" | "fruits-legumes" | "laitiers" | "surgeles" | "boissons" | "autre";

interface PanasonicSerie {
  code: string;
  reference: string;
  power: string;
  type: string;
  description: string;
  volume: string;
}

const panasonicSeries: PanasonicSerie[] = [
  {
    code: "CR 200",
    reference: "OCU-CR200VF5A",
    power: "4 kW MT / 2 kW LT",
    type: "Froid positif & négatif",
    description: "Petite unité monophasée pour les commerces de proximité, supermarchés de quartier, restaurants. Réfrigérant CO₂ naturel R744.",
    volume: "≈ 40 m³ MT / 10 m³ LT",
  },
  {
    code: "CR 400",
    reference: "OCU-CR400VF8",
    power: "7,5 kW MT",
    type: "Froid positif",
    description: "Triphasée moyenne température. Conserve viandes, légumes, produits laitiers entre +2 °C et +8 °C.",
    volume: "≈ 80 m³",
  },
  {
    code: "CR 400 A",
    reference: "OCU-CR400VF8A",
    power: "8 kW MT / 4 kW LT",
    type: "Froid positif & négatif",
    description: "Bi-fonction MT/LT — bascule positif/négatif via commutateur rotatif. Cycle partagé pour rendement supérieur.",
    volume: "≈ 80 m³ MT / 20 m³ LT",
  },
  {
    code: "CR 1000",
    reference: "OCU-CR1000VF8",
    power: "15 kW MT",
    type: "Froid positif",
    description: "Grande puissance positive — chambres froides supermarché, vitrines multiples. Tuyauterie jusqu'à 100 m.",
    volume: "≈ 200 m³",
  },
  {
    code: "CR 1000 A",
    reference: "OCU-CR1000VF8A",
    power: "16 kW MT / 8 kW LT",
    type: "Froid positif & négatif",
    description: "Modèle phare, double fonction MT/LT haute puissance. Compresseur rotatif bi-étagé. Récupération de chaleur intégrée.",
    volume: "≈ 200 m³ MT / 50 m³ LT",
  },
];

const emersonSeries = [
  {
    code: "ZXME",
    name: "ZX Standard — Moyenne température",
    image: emersonMtPhoto,
    description:
      "Groupe extérieur scroll Copeland, conçu pour les chambres froides positives (+2 °C / +8 °C). Idéal pour boucherie, charcuterie, fruitier, traiteur.",
    powerRange: "3,6 → 11,9 kW (R404A)",
    models: ["ZXME-020E", "ZXME-025E", "ZXME-030E", "ZXME-040E", "ZXME-050E", "ZXME-060E", "ZXME-075E"],
    badge: "Froid positif",
  },
  {
    code: "ZXLE",
    name: "ZX Standard — Basse température",
    image: emersonLtPhoto,
    description:
      "Variante basse température pour congélation et surgelés (−18 °C / −25 °C). Injection de vapeur, séparateur d'huile, anti-coups de liquide. Intégration toiture facile.",
    powerRange: "1,7 → 6,5 kW (R404A)",
    models: ["ZXLE-020E", "ZXLE-025E", "ZXLE-030E", "ZXLE-040E", "ZXLE-050E", "ZXLE-060E", "ZXLE-075E"],
    badge: "Froid négatif",
  },
  {
    code: "ZXDE",
    name: "ZX Digital — Modulation continue",
    image: emersonDigitalPhoto,
    description:
      "Haut de gamme avec compresseur Copeland Scroll Digital : modulation 10–100 % en continu. Pour restauration collective, vitrines + chambre, charges variables.",
    powerRange: "7,6 → 11,9 kW (R404A)",
    models: ["ZXDE-040E", "ZXDE-050E", "ZXDE-060E", "ZXDE-075E"],
    badge: "Modulation digitale",
  },
];

const danfossSeries = [
  {
    code: "Optyma Plus",
    name: "Optyma Plus — IP54 outdoor",
    image: danfossPlusPhoto,
    description:
      "Groupe condenseur extérieur tout-en-un, carrosserie aluminium IP54. Compresseur scroll ou alternatif intégré, condenseur, ventilateur EC, pressostats, voyant liquide. Plug & play.",
    powerRange: "1,5 → 22 kW (MT) · 0,5 → 10 kW (LT)",
    models: ["OP-MPYM034", "OP-MPYM048", "OP-MPYM068", "OP-MPYM086", "OP-LPQM048", "OP-LPQM067"],
    badge: "IP54 extérieur",
  },
  {
    code: "Optyma Slim Pack W05",
    name: "Optyma Slim Pack — Format compact",
    image: danfossSlimW05Photo,
    description:
      "Encombrement réduit (épaisseur 35 cm) pour intégration urbaine, façades, courettes. Niveau sonore < 50 dB(A) à 10 m. Idéal commerces de proximité.",
    powerRange: "0,9 → 6 kW",
    models: ["OP-MSXM034", "OP-MSXM044", "OP-MSXM057", "OP-MSXM068", "OP-LSQM034"],
    badge: "Slim · silencieux",
  },
  {
    code: "Optyma Slim Pack W09",
    name: "Optyma Slim Pack — Grand format",
    image: danfossSlimW09Photo,
    description:
      "Variante haute puissance du Slim Pack pour grandes chambres ou multi-postes. Ventilateurs EC modulants, capot insonorisé. Jusqu'à 12 kW MT.",
    powerRange: "5 → 12 kW",
    models: ["OP-MSXM086", "OP-MSXM108", "OP-MSXM125", "OP-LSQM067", "OP-LSQM086"],
    badge: "Haute puissance",
  },
];

interface TecumsehSerie {
  code: string;
  name: string;
  image: string;
  description: string;
  powerRange: string;
  models: string[];
  badge: string;
}

const tecumsehSeries: TecumsehSerie[] = [
  {
    code: "SILENSYS®",
    name: "Silensys — La référence acoustique",
    image: tecumsehSilensysPhoto,
    description:
      "Groupe extérieur insonorisé pour milieux urbains. Coffret double paroi, ventilateurs EC, sécurité électrique renforcée. Made in France · Tecumseh Europe.",
    powerRange: "0,5 → 6,1 kW (LT) · 0,7 → 17 kW (MT)",
    models: ["SILAJ4476Z", "SILAJ4492Y", "SILAG4546Z", "SILFH4540Z", "SILFH4568Z"],
    badge: "Silencieux urbain",
  },
  {
    code: "SILENSYS® INVERTER",
    name: "Silensys Inverter — Variation continue",
    image: tecumsehSilensysInvPhoto,
    description:
      "Variation de capacité par compresseur Tecumseh Inverter. Idéal multi-postes et fortes variations de charge thermique. Câblage et paramétrage usine.",
    powerRange: "0,7 → 17,3 kW (MT)",
    models: ["SILAJI9480Z", "SILFHI9540Z", "SILFHI9560Z", "SILAGI9546Z"],
    badge: "Inverter",
  },
  {
    code: "WINTSYS®",
    name: "Wintsys — Plug & Play robuste",
    image: tecumsehWintsysPhoto,
    description:
      "Solution pré-équipée plug & play pour conditions extérieures exigeantes (climat froid, humide). Compétitif, facile à installer en une demi-journée.",
    powerRange: "0,4 → 1,6 kW (LT) · 0,7 → 4,4 kW (MT)",
    models: ["WIN AE4440Y", "WIN AE4448Y", "WIN AJ4492Y", "WIN AJ45113Y"],
    badge: "Plug & Play",
  },
  {
    code: "Traditionnels",
    name: "Groupes traditionnels — Étagement large",
    image: tecumsehTradPhoto,
    description:
      "Gamme historique CAJT, CAJN, AET, FH, AG, HGA. Compacts, fiables, étagement de puissance fin. Idéal local technique fermé ou intégration cellule.",
    powerRange: "0,2 → 5,9 kW (LT) · 0,1 → 17 kW (MT)",
    models: ["CAJT2432Z", "CAJN2440Z", "AET2420Z", "FHT2480Z", "TAGT2513Z"],
    badge: "Local technique",
  },
];

// Product coefficients (W/m³ at +5°C, base coefficient before insulation/exposition)
const baseCoefByType: Record<ColdType, number> = {
  "positif-frais": 50, // +6°C / +8°C — caves à vin, fleurs
  "positif-frigo": 70, // +2°C / +5°C — frais
  "negatif-surgele": 130, // -18°C — surgelés
  "negatif-glace": 170, // -25°C / -30°C — glaces, abats
};

const productCoef: Record<Product, number> = {
  "viande": 1.15,
  "fruits-legumes": 1.10,
  "laitiers": 1.0,
  "surgeles": 1.0,
  "boissons": 0.9,
  "autre": 1.0,
};

const insulationCoef: Record<Insulation, number> = {
  standard: 1.15,
  renforcee: 1.0,
};

interface Reco {
  brand: "Panasonic" | "Emerson" | "Danfoss" | "Tecumseh";
  name: string;
  reference: string;
  power: string;
  description: string;
  estimatedPrice: string;
  badge?: string;
}

const computeReco = (kw: number, isNegative: boolean): Reco => {
  // Très petites puissances négatives — Tecumseh Wintsys (plug & play, économique)
  if (kw <= 1.5 && isNegative) {
    return {
      brand: "Tecumseh",
      name: "Wintsys — Froid négatif compact",
      reference: "WIN AE4440Y",
      power: "0,9 kW LT (R452A)",
      description: "Plug & play français, parfait pour une petite chambre négative (cuisine pro, traiteur). Robuste sous climat exigeant.",
      estimatedPrice: "à partir de 4 200 € HT posé",
      badge: "Économique",
    };
  }
  // Très petites puissances positives — Tecumseh Silensys (silencieux, urbain)
  if (kw <= 2 && !isNegative) {
    return {
      brand: "Tecumseh",
      name: "Silensys — Petit format silencieux",
      reference: "SILAJ4476Z",
      power: "1,5 kW MT (R452A)",
      description: "La référence acoustique du marché pour les commerces de proximité, restaurants en centre-ville. Made in France.",
      estimatedPrice: "à partir de 5 200 € HT posé",
      badge: "Silencieux",
    };
  }
  // Petites/moyennes puissances — Danfoss Optyma Slim (intégration urbaine compacte)
  if (kw <= 4 && !isNegative) {
    return {
      brand: "Danfoss",
      name: "Optyma Slim Pack W05",
      reference: "OP-MSXM044",
      power: "3,5 kW MT (R452A)",
      description: "Format compact (35 cm) pour façade, courette ou local technique étroit. < 50 dB(A) à 10 m.",
      estimatedPrice: "à partir de 6 800 € HT posé",
    };
  }
  if (kw <= 4 && isNegative) {
    return {
      brand: "Panasonic",
      name: "CR 200 — Froid négatif CO₂",
      reference: "OCU-CR200VF5A",
      power: "2 kW LT",
      description: "Solution CO₂ naturel (R744) pour chambre négative jusqu'à 10 m³ — surgelés, glaces, abats. Aucune taxe F-Gaz.",
      estimatedPrice: "à partir de 7 500 € HT posé",
      badge: "CO₂ naturel",
    };
  }
  // Moyenne puissance — Danfoss Optyma Plus (IP54 plug & play)
  if (kw <= 6 && !isNegative) {
    return {
      brand: "Danfoss",
      name: "Optyma Plus IP54",
      reference: "OP-MPYM068",
      power: "5,5 kW MT (R452A)",
      description: "Groupe extérieur tout-en-un IP54. Compresseur scroll Danfoss, condenseur, ventilateurs EC, pressostats. Pose rapide.",
      estimatedPrice: "à partir de 8 900 € HT posé",
      badge: "Plug & Play",
    };
  }
  // Moyenne puissance négatif — Danfoss Optyma Plus LT
  if (kw <= 6 && isNegative) {
    return {
      brand: "Danfoss",
      name: "Optyma Plus — Basse température",
      reference: "OP-LPQM067",
      power: "5 kW LT (R452A)",
      description: "Variante basse température du Optyma Plus pour congélation et surgelés. Carrosserie alu IP54.",
      estimatedPrice: "à partir de 10 200 € HT posé",
    };
  }
  // 5-8 kW — Emerson EazyCool ZX MT (scroll robuste)
  if (kw <= 8 && !isNegative) {
    return {
      brand: "Emerson",
      name: "EazyCool ZX — Moyenne température",
      reference: "ZXME-050E",
      power: "7,2 kW (R404A)",
      description: "Groupe scroll Copeland compact pour chambre positive moyenne (boucher, traiteur, fruitier).",
      estimatedPrice: "à partir de 11 200 € HT posé",
    };
  }
  // 6-8 kW négatif — Panasonic CR 400 A bi-fonction
  if (kw <= 8 && isNegative) {
    return {
      brand: "Panasonic",
      name: "Unité CO₂ — CR 400 A",
      reference: "OCU-CR400VF8A",
      power: "8 kW MT / 4 kW LT",
      description: "Bi-fonction MT/LT, idéale pour un combiné froid positif + négatif. Compresseur rotatif bi-étagé.",
      estimatedPrice: "à partir de 13 500 € HT posé",
      badge: "Best-seller",
    };
  }
  // 8-12 kW — Tecumseh Silensys Inverter (modulation, charges variables)
  if (kw <= 12) {
    return {
      brand: "Tecumseh",
      name: "Silensys Inverter — Modulation",
      reference: "SILFHI9540Z",
      power: "10 kW MT (R452A)",
      description: "Variation de capacité continue pour multi-postes et fortes variations de charge. Câblage et paramétrage usine.",
      estimatedPrice: "à partir de 15 800 € HT posé",
      badge: "Inverter",
    };
  }
  // 12-16 kW — Emerson Digital
  if (kw <= 16 && !isNegative) {
    return {
      brand: "Emerson",
      name: "EazyCool ZX Digital — Modulation",
      reference: "ZXDE-075E",
      power: "11,9 kW (R404A)",
      description: "Modulation continue 10-100 %. Pour charges variables (vitrines + chambre, restauration collective).",
      estimatedPrice: "à partir de 18 500 € HT posé",
    };
  }
  // Grande puissance — Panasonic CR 1000 A bi-fonction CO₂
  return {
    brand: "Panasonic",
    name: "Unité CO₂ — CR 1000 A",
    reference: "OCU-CR1000VF8A",
    power: "16 kW MT / 8 kW LT",
    description: "Modèle phare. Bi-fonction MT/LT, jusqu'à 100 m de tuyauterie, récupération de chaleur intégrée. Pour supermarchés et entrepôts.",
    estimatedPrice: "à partir de 24 500 € HT posé",
    badge: "Grande puissance",
  };
};

const ChambreFroide = () => {
  const [surface, setSurface] = useState(12);
  const [hauteur, setHauteur] = useState(2.4);
  const [coldType, setColdType] = useState<ColdType>("positif-frigo");
  const [product, setProduct] = useState<Product>("viande");
  const [insulation, setInsulation] = useState<Insulation>("standard");
  const [doorOpenings, setDoorOpenings] = useState(20);

  const result = useMemo(() => {
    const volume = surface * hauteur;
    const baseCoef = baseCoefByType[coldType];
    const isNegative = coldType.startsWith("negatif");

    let totalW =
      volume *
      baseCoef *
      productCoef[product] *
      insulationCoef[insulation];

    // Door openings: +0.5% per opening per day (small impact, can change layout)
    totalW *= 1 + Math.min(0.30, doorOpenings * 0.005);

    const kw = Math.ceil(totalW / 100) / 10;
    const reco = computeReco(kw, isNegative);
    return { kw, volume: Math.round(volume * 10) / 10, reco, isNegative };
  }, [surface, hauteur, coldType, product, insulation, doorOpenings]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Chambre froide professionnelle"
          title={
            <>
              <span className="text-gradient-brand">Chambres froides</span> Panasonic, Emerson, Danfoss & Tecumseh
            </>
          }
          subtitle="Conception, installation et maintenance de chambres froides positives et négatives pour restaurateurs, bouchers, traiteurs, fleuristes, supermarchés et professions de santé. Quatre marques de référence couvrant toutes les puissances et tous les usages : CO₂ naturel Panasonic (R744), scroll Copeland Emerson, plug & play IP54 Danfoss Optyma, et solutions silencieuses Tecumseh Made in France (Silensys, Wintsys, Inverter)."
          breadcrumb={[{ label: "Chambre froide" }]}
          heroImage={{
            src: heroLifestyle,
            alt: "Chambre froide haut de gamme avec cave à vin intégrée et présentoir alimentaire — réalisation eco cvc",
            caption: "Réalisation premium · Rhône-Alpes",
            badge: "Pro · Restaurant · Retail",
          }}
        />

        {/* Brands intro */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Nos partenaires"
              title={
                <>
                  Quatre marques de référence, <span className="text-gradient-brand">une seule expertise</span>.
                </>
              }
              subtitle="Nous installons et maintenons les solutions Panasonic (CO₂ R744 naturel), Emerson Copeland Scroll, Danfoss Optyma et Tecumseh (Made in France). Choix du système selon votre usage, votre volume et votre contrainte d'intégration."
            />
            <div className="grid md:grid-cols-2 gap-6 mt-14">
              <div className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-shadow group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img loading="lazy" decoding="async"
                    src={panasonicLifestyle}
                    alt="Gamme Panasonic CR — groupes extérieurs CO₂ R744 ET41, ET54 et ET44 pour chambre froide positive"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                    Gamme CR · CO₂ R744
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">Panasonic</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-blue">CO₂ · R744 naturel</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Gamme <strong className="text-foreground">CR</strong> (4 → 16 kW) au CO₂ naturel et gamme <strong className="text-foreground">PACi NX Elite</strong> (R32, +8 °C à +24 °C).
                    Garantie 5 ans compresseur. Made in Japan.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["R744 (CO₂)", "Bi-étagé", "−45 °C → −5 °C", "Récup. chaleur"].map((tag) => (
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
                    src={emersonLifestyle}
                    alt="Groupes Emerson Copeland Scroll en façade — intégration architecturale haut de gamme"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                    Copeland Scroll · Façade
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">Emerson Copeland</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-red">EazyCool ZX</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Groupes de condensation extérieurs scroll EazyCool ZX. <strong className="text-foreground">ZX, ZX Digital</strong> — moyenne et basse température. Compacts, silencieux, modulables.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["R404A · R134a", "R407A · R407F", "Modulation 10–100%", "Anti-bruit"].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-shadow group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img loading="lazy" decoding="async"
                    src={danfossLifestyle}
                    alt="Gamme Danfoss — Optyma Plus IP54 outdoor + Optyma Slim Pack compact + groupes Maneurop pour chambre froide"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                    Spécial congélation · -25 °C
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">Danfoss</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-blue">Optyma · LBP</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Spécialiste <strong className="text-foreground">congélation négatif</strong> : <strong className="text-foreground">Optyma Plus</strong> (IP54 outdoor 1,5 → 22 kW) et <strong className="text-foreground">Optyma Slim Pack</strong> (compact urbain) en LBP -25 °C. Tout-en-un, prêt à raccorder.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["LBP -25 °C", "IP54", "R452A · R290", "EC ventilateurs"].map((tag) => (
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
                    src={tecumsehLifestyle}
                    alt="Tecumseh Silensys Outdoor Condensing Unit — groupe de condensation extérieur silencieux Made in France"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                    Silensys · Made in France
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">Tecumseh</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-red">Silensys · Wintsys</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Gammes <strong className="text-foreground">Silensys</strong> (référence acoustique urbaine), <strong className="text-foreground">Silensys Inverter</strong> (modulation) et <strong className="text-foreground">Wintsys</strong> (plug & play robuste).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Made in France", "Inverter", "R290 · R452A", "Plug & Play"].map((tag) => (
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
              eyebrow="Calculateur dédié"
              title={
                <>
                  Estimez la <span className="text-gradient-brand">puissance frigorifique</span> nécessaire à votre chambre froide.
                </>
              }
              subtitle="Volume, type de produits, niveau d'isolation, fréquence d'ouverture des portes : notre outil vous oriente vers le modèle Panasonic ou Emerson le plus adapté, et donne une fourchette de prix indicative."
            />

            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8 lg:gap-12 mt-14">
              {/* Form */}
              <div className="bg-white rounded-3xl border border-border shadow-soft p-6 md:p-9">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Vos paramètres</h3>
                    <p className="text-sm text-muted-foreground">Estimation indicative · validation par bilan thermique sur site</p>
                  </div>
                </div>

                <Field icon={Snowflake} label="Type de chambre froide">
                  <ButtonGroup
                    value={coldType}
                    onChange={(v) => setColdType(v as ColdType)}
                    options={[
                      { value: "positif-frais", label: "Positif +6 °C / +8 °C", sub: "Cave à vin, fleurs" },
                      { value: "positif-frigo", label: "Positif +2 °C / +5 °C", sub: "Frais — viande, légumes" },
                      { value: "negatif-surgele", label: "Négatif −18 °C", sub: "Surgelés" },
                      { value: "negatif-glace", label: "Négatif −25 °C", sub: "Glaces, abats" },
                    ]}
                  />
                </Field>

                <Field icon={Ruler} label="Surface au sol" hint={`${surface} m²`}>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={3}
                      max={80}
                      value={surface}
                      onChange={(e) => setSurface(Number(e.target.value))}
                      className="flex-1 accent-brand-blue h-2"
                    />
                    <input
                      type="number"
                      min={2}
                      max={300}
                      value={surface}
                      onChange={(e) => setSurface(Math.max(2, Math.min(300, Number(e.target.value) || 0)))}
                      className="w-20 px-3 py-2 rounded-lg border border-border text-center font-semibold focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </Field>

                <Field icon={Building} label="Hauteur sous plafond" hint={`${hauteur.toFixed(2)} m`}>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={2.2}
                      max={4.5}
                      step={0.1}
                      value={hauteur}
                      onChange={(e) => setHauteur(Number(e.target.value))}
                      className="flex-1 accent-brand-blue h-2"
                    />
                    <input
                      type="number"
                      min={2}
                      max={6}
                      step={0.1}
                      value={hauteur}
                      onChange={(e) => setHauteur(Math.max(2, Math.min(6, Number(e.target.value) || 2.4)))}
                      className="w-20 px-3 py-2 rounded-lg border border-border text-center font-semibold focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </Field>

                <Field icon={Box} label="Type de produits stockés">
                  <ButtonGroup
                    value={product}
                    onChange={(v) => setProduct(v as Product)}
                    options={[
                      { value: "viande", label: "Viande / poisson" },
                      { value: "fruits-legumes", label: "Fruits & légumes" },
                      { value: "laitiers", label: "Produits laitiers" },
                      { value: "surgeles", label: "Surgelés" },
                      { value: "boissons", label: "Boissons" },
                      { value: "autre", label: "Autres" },
                    ]}
                  />
                </Field>

                <Field
                  icon={ShieldCheck}
                  label="Isolation des panneaux"
                  description="Standard : panneaux 80 mm. Renforcée : 100-150 mm pour froid négatif ou contraintes énergétiques."
                >
                  <ButtonGroup
                    value={insulation}
                    onChange={(v) => setInsulation(v as Insulation)}
                    options={[
                      { value: "standard", label: "Standard 80 mm" },
                      { value: "renforcee", label: "Renforcée 100–150 mm" },
                    ]}
                  />
                </Field>

                <Field
                  icon={DoorOpen}
                  label="Ouvertures de porte par jour"
                  hint={`${doorOpenings} ouvertures`}
                  description="Chaque ouverture introduit de l'air chaud — impact direct sur la puissance nécessaire."
                >
                  <input
                    type="range"
                    min={5}
                    max={100}
                    step={5}
                    value={doorOpenings}
                    onChange={(e) => setDoorOpenings(Number(e.target.value))}
                    className="w-full accent-brand-blue h-2"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5">
                    <span>5</span>
                    <span>50</span>
                    <span>100+</span>
                  </div>
                </Field>

                <div className="flex items-start gap-2 mt-2 text-xs text-muted-foreground bg-slate-50 rounded-lg p-3 border border-border">
                  <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>
                    Les prix sont des fourchettes indicatives <strong>HT</strong> incluant le groupe extérieur, l'évaporateur,
                    la pose et la mise en service standard. Les panneaux frigorifiques (cellule)
                    et l'éclairage LED ne sont pas inclus. Devis ferme après visite technique gratuite.
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
                      Recommandation eco cvc
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-[11px] tracking-widest uppercase text-white/60 mb-1">Volume</div>
                        <div className="text-3xl font-extrabold">{result.volume} <span className="text-lg text-white/70">m³</span></div>
                      </div>
                      <div>
                        <div className="text-[11px] tracking-widest uppercase text-white/60 mb-1">Puissance</div>
                        <motion.div
                          key={result.kw}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-3xl font-extrabold"
                        >
                          {result.kw.toFixed(1)} <span className="text-lg text-white/70">kW</span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="rounded-2xl border-2 border-white/15 bg-white/5 backdrop-blur-md p-5">
                      <div className="flex items-baseline justify-between mb-1">
                        <span
                          className={`text-[10px] font-bold tracking-widest uppercase ${
                            result.reco.brand === "Panasonic"
                              ? "text-brand-sky"
                              : result.reco.brand === "Emerson"
                              ? "text-orange-300"
                              : result.reco.brand === "Danfoss"
                              ? "text-emerald-300"
                              : "text-amber-300"
                          }`}
                        >
                          {result.reco.brand}
                        </span>
                        {result.reco.badge && (
                          <span className="bg-brand-red text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full shadow-lifted">
                            {result.reco.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-lg font-extrabold leading-tight mb-1">{result.reco.name}</div>
                      <div className="text-[11px] text-white/70 mb-3 font-mono">Réf : {result.reco.reference}</div>
                      <p className="text-xs text-white/85 leading-relaxed mb-4">{result.reco.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-white/15 px-2 py-0.5 rounded-full">
                          {result.reco.power}
                        </span>
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-white/15 px-2 py-0.5 rounded-full">
                          {result.isNegative ? "Froid négatif" : "Froid positif"}
                        </span>
                      </div>
                      <div className="text-base font-bold text-white pt-3 border-t border-white/10">
                        💰 {result.reco.estimatedPrice}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition-all shadow-lifted hover:-translate-y-0.5 text-sm"
                      >
                        Devis personnalisé chambre froide
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
                context="chambre-froide"
                summary={`${result.volume} m³ · ${result.kw.toFixed(1)} kW · ${result.reco.brand} ${result.reco.name}`}
                extraData={{
                  surface_m2: surface,
                  hauteur_m: hauteur,
                  volume_m3: result.volume,
                  type_chambre: coldType,
                  produits: product,
                  isolation: insulation,
                  ouvertures: doorOpenings,
                  modele_recommande: `${result.reco.brand} ${result.reco.name}`,
                  reference: result.reco.reference,
                }}
              />
            </div>
          </div>
        </section>

        {/* Panasonic series */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Gamme Panasonic CR · CO₂ naturel"
              title={
                <>
                  Cinq modèles, <span className="text-gradient-brand">de 4 à 16 kW</span>, pour chaque besoin.
                </>
              }
              subtitle="Réfrigérant CO₂ (R744) — ODP = 0, PRG = 1. Compresseur rotatif bi-étagé Made in Japan, garantie 5 ans. Compatible Modbus (CAREL, Eliwell, Danfoss, RDM)."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {panasonicSeries.map((s, i) => (
                <motion.div
                  key={s.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-border p-6 hover:shadow-lifted hover:border-brand-blue/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="px-2.5 py-1 rounded-full bg-accent text-brand-bluedark text-[10px] font-bold tracking-widest uppercase">
                      {s.code}
                    </div>
                    <Snowflake className="w-5 h-5 text-brand-sky" />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mb-2">{s.reference}</div>
                  <div className="text-[11px] font-bold tracking-widest uppercase text-brand-red mb-2">{s.type}</div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight">{s.power}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                  <div className="text-xs text-foreground/85 pt-4 border-t border-border">
                    <span className="font-bold">Volume conseillé :</span> {s.volume}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-14 relative rounded-3xl overflow-hidden border border-border shadow-lifted aspect-[21/9]"
            >
              <img loading="lazy" decoding="async"
                src={panasonicShowcase}
                alt="Épicerie fine Gourmet Provisions — chambre froide inox, vitrine produits frais et comptoir, chaîne du froid Panasonic intégrée"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/40 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex items-center max-w-md p-8 md:p-12">
                <div className="text-white">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-brand-sky mb-3">Cas d'usage</div>
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
                    Vitrines, comptoirs, chambres froides : <span className="text-gradient-hot">tout connecté</span>.
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    Une seule unité Panasonic CO₂ alimente plusieurs évaporateurs : vitrine charcuterie, vitrine fromages,
                    chambre positive, chambre négative. Jusqu'à 100 m de tuyauterie.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PACi NX Elite — for positive only */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden border border-border shadow-lifted aspect-[4/5]"
              >
                <img loading="lazy" decoding="async"
                  src={paciNxLifestyle}
                  alt="Cave à vin équipée Panasonic PACi NX Elite R32 — mural, cassette 4 voies et gainable, +12 °C TH, plage 2,1 → 23,2 kW"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase mb-3 shadow-lifted">
                    Cave à vin · +12 °C TH
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Une solution clé en main pour les caves à vin, fleuristes ou stockage léger entre +8 °C et +24 °C TH.
                  </p>
                </div>
              </motion.div>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Panasonic PACi NX Elite"
                  title={<>L'option <span className="text-gradient-brand">R32</span> pour le froid positif modéré.</>}
                  subtitle="Pour les caves à vin, fleuristes, supermarchés ou silos à grains entre +8 °C et +24 °C TH. Plage 2,1 → 23,2 kW. 4 formats : mural, cassette 4 voies, plafonnier, gainable adaptatif."
                />
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {[
                    { icon: Wine, label: "Caves à vin" },
                    { icon: Apple, label: "Fruits & légumes" },
                    { icon: Leaf, label: "Fleuristes" },
                    { icon: Box, label: "Stockage léger" },
                  ].map((u) => (
                    <div key={u.label} className="bg-white rounded-xl border border-border p-3 flex items-center gap-2.5">
                      <u.icon className="w-4 h-4 text-brand-blue shrink-0" />
                      <span className="text-sm font-semibold text-foreground">{u.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emerson series */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Gamme Emerson Copeland EazyCool ZX"
              title={
                <>
                  Groupes scroll <span className="text-gradient-hot">compacts et silencieux</span>.
                </>
              }
              subtitle="Trois variantes — ZX moyenne, ZX basse température, ZX Digital à modulation continue. Réfrigérants R404A / R134a / R407A / R407F. Pour intégration urbaine et toiture."
            />
            <div className="grid lg:grid-cols-3 gap-6 mt-14">
              {emersonSeries.map((s, i) => (
                <motion.div
                  key={s.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-50 relative">
                    <img loading="lazy" decoding="async"
                      src={s.image}
                      alt={`Emerson ${s.code} — application métier`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                      {s.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-brand-red mb-1">EMERSON · {s.code}</div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{s.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                    <div className="text-sm font-bold text-foreground mb-3">Puissance : {s.powerRange}</div>
                    <div className="flex flex-wrap gap-1">
                      {s.models.slice(0, 5).map((m) => (
                        <span key={m} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-foreground/85">{m}</span>
                      ))}
                      {s.models.length > 5 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-muted-foreground">+{s.models.length - 5}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Danfoss series */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Gamme Danfoss Optyma"
              title={
                <>
                  Le <span className="text-gradient-brand">tout-en-un IP54</span> qui se pose en quelques heures.
                </>
              }
              subtitle="Carrosserie aluminium IP54, compresseur scroll Danfoss, condenseur micro-canal, ventilateurs EC modulants, pressostats, voyant liquide. Plage 0,5 → 22 kW. Réfrigérants R452A, R290 et R134a."
            />
            <div className="grid lg:grid-cols-3 gap-6 mt-14">
              {danfossSeries.map((s, i) => (
                <motion.div
                  key={s.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-50 relative">
                    <img loading="lazy" decoding="async"
                      src={s.image}
                      alt={`Danfoss ${s.code} — produit`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                      {s.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-700 mb-1">DANFOSS · {s.code}</div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{s.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                    <div className="text-sm font-bold text-foreground mb-3">Puissance : {s.powerRange}</div>
                    <div className="flex flex-wrap gap-1">
                      {s.models.slice(0, 5).map((m) => (
                        <span key={m} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-foreground/85">{m}</span>
                      ))}
                      {s.models.length > 5 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-muted-foreground">+{s.models.length - 5}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tecumseh series */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Gamme Tecumseh — Made in France"
              title={
                <>
                  De la solution la plus simple <span className="text-gradient-hot">à la plus équipée</span>.
                </>
              }
              subtitle="Tecumseh Europe — 85 ans d'expertise française dans la réfrigération commerciale. Quatre familles : groupes traditionnels (étagement le plus large du marché), Wintsys plug & play, Silensys silencieux et Silensys Inverter à modulation continue."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
              {tecumsehSeries.map((s, i) => (
                <motion.div
                  key={s.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-50 relative">
                    <img loading="lazy" decoding="async"
                      src={s.image}
                      alt={`Tecumseh ${s.code} — produit`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-600 text-white text-[9px] font-bold tracking-widest uppercase shadow-lifted">
                      {s.badge}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-amber-700 mb-1">TECUMSEH · {s.code}</div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-tight">{s.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.description}</p>
                    <div className="text-xs font-bold text-foreground mb-3">{s.powerRange}</div>
                    <div className="flex flex-wrap gap-1">
                      {s.models.slice(0, 3).map((m) => (
                        <span key={m} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-foreground/85">{m}</span>
                      ))}
                      {s.models.length > 3 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-muted-foreground">+{s.models.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tecumseh fluids info bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 bg-white rounded-2xl border border-border p-6 md:p-7 grid md:grid-cols-[auto,1fr,auto] gap-6 items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 mb-1">Réfrigérants nouvelle génération</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Les groupes Tecumseh sont disponibles en <strong className="text-foreground">R290</strong> (propane naturel, PRG = 3),
                  <strong className="text-foreground"> R452A</strong> (PRG &lt; 2 200, conforme F-Gaz 2024),
                  <strong className="text-foreground"> R513A</strong> et <strong className="text-foreground">R134a</strong>.
                  Anticipez les futures restrictions F-Gaz avec la bonne combinaison fluide-application.
                </p>
              </div>
              <Link
                to="/contact"
                className="hidden md:inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600 text-white text-sm font-bold hover:bg-amber-700 transition-colors"
              >
                Conseil fluide
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Pour qui"
              title={<>Vos métiers, <span className="text-gradient-brand">notre expertise</span>.</>}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {[
                { icon: Beef, label: "Bouchers · charcutiers" },
                { icon: Apple, label: "Fruitiers · primeurs" },
                { icon: Milk, label: "Crémiers · fromagers" },
                { icon: IceCream, label: "Glaciers · pâtissiers" },
                { icon: Wine, label: "Caves à vin" },
                { icon: Leaf, label: "Fleuristes" },
                { icon: Award, label: "Restauration & traiteur" },
                { icon: ShieldCheck, label: "Pharmacies · santé" },
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

        {/* Why eco cvc */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Pourquoi eco cvc"
                  title={<>Une chambre froide, <span className="text-gradient-brand">un partenaire pérenne</span>.</>}
                  subtitle="Au-delà de l'installation, vous bénéficiez de notre service maintenance, de notre dépannage 7j/7, et de notre attestation F-Gaz catégorie 1 qui couvre toutes les manipulations frigorifiques sans limite de charge."
                />
                <ul className="mt-8 space-y-3">
                  {[
                    "Bilan thermique gratuit chez vous (calcul charge froid)",
                    "Devis transparent sous 48h, panneaux + groupe + évaporateur",
                    "Pose en 2 à 5 jours selon configuration",
                    "Contrat d'entretien annuel + dépannage 7j/7",
                    "Attestation F-Gaz catégorie 1 (sans limite de charge)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand-green" strokeWidth={3} />
                      </div>
                      <span className="text-foreground/85 text-sm">{item}</span>
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
                  <Thermometer className="w-10 h-10 mb-5 text-brand-sky" />
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                    Une chaîne du froid <span className="text-gradient-hot">jamais rompue</span>.
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm mb-6">
                    Une panne en pleine canicule peut signifier des centaines, voire des milliers d'euros de marchandise perdue.
                    Nos contrats incluent une astreinte 7j/7 et un suivi à distance des paramètres critiques.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="text-3xl font-extrabold text-brand-sky">7j/7</div>
                      <div className="text-[10px] text-white/70 uppercase tracking-wider">Astreinte dépannage</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="text-3xl font-extrabold text-brand-sky">24h</div>
                      <div className="text-[10px] text-white/70 uppercase tracking-wider">Délai d'intervention</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TestimonialStrip
          context="froid"
          title="Des artisans du froid satisfaits"
          className="bg-slate-50/60 border-y border-border"
        />

        <CTABand variant="chambre-froide" />
        <Footer />
      </div>
    </PageTransition>
  );
};

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

export default ChambreFroide;
