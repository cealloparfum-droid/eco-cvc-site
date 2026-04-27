import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wind,
  Cog,
  Filter,
  Settings,
  Zap,
  ShieldCheck,
  Award,
  ArrowRight,
  Phone,
  Sparkles,
  Check,
  Info,
  Wrench,
  Truck,
  Package,
  ChefHat,
  AlertTriangle,
  Layers,
  Plus,
  Minus,
  Trash2,
  Calculator,
  Send,
  ShoppingCart,
  Mail,
  X,
  Ruler,
  Flame,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

import heroImg from "@/assets/ventilation/hero-cuisine-pro.jpg";
import hotteDynamique from "@/assets/ventilation/hotte-dynamique-trapezoidale.jpg";
import hotteStatique from "@/assets/ventilation/hotte-statique-trapezoidale.jpg";
import hotteCubique from "@/assets/ventilation/hotte-cubique.jpg";
import hotteCubiqueDetail from "@/assets/ventilation/hotte-cubique-detail.jpg";
import variateurAlvene from "@/assets/ventilation/variateur-alvene.jpg";
import variateurSenseo from "@/assets/ventilation/variateur-senseo-drive.jpg";
import moteurDirect from "@/assets/ventilation/moteur-direct-tmd.jpg";
import caissonTbd from "@/assets/ventilation/caisson-tbd.jpg";
import caissonCeb from "@/assets/ventilation/caisson-ceb-400.jpg";
import caissonTbs from "@/assets/ventilation/caisson-tbs.jpg";
import tourelleEmmos from "@/assets/ventilation/tourelle-emmos.jpg";
import tourelleSimoun from "@/assets/ventilation/tourelle-simoun.jpg";
import pyralA from "@/assets/ventilation/caisson-pyral-a.jpg";
import pyralR from "@/assets/ventilation/caisson-pyral-r.jpg";
import alvyral from "@/assets/ventilation/caisson-alvyral.jpg";
import alvicarbAd from "@/assets/ventilation/alvicarb-ad.jpg";
import alvicarbS from "@/assets/ventilation/alvicarb-s.jpg";
import alvicarbAs from "@/assets/ventilation/alvicarb-as.jpg";
import alvicarbAt from "@/assets/ventilation/alvicarb-at.jpg";

const formatEur = (n: number) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " € HT";

/* ------------------------------------------------------------------ */
/*  CATALOGUE                                                          */
/* ------------------------------------------------------------------ */

interface HotteRow {
  ref: string;
  dim: string;
  filtres: number;
  puissance?: string;
  ventilateur?: string;
  prix: number;
}

const hottesDynP900: HotteRow[] = [
  { ref: "HTD-900-1",   dim: "1000 x 900 x 550", filtres: 2, puissance: "300 W", ventilateur: "MO 7/7 – 4P", prix: 1040 },
  { ref: "HTD-900-1.5", dim: "1500 x 900 x 550", filtres: 3, puissance: "400 W", ventilateur: "MO 7/7 – 4P", prix: 1170 },
  { ref: "HTD-900-2",   dim: "2000 x 900 x 550", filtres: 4, puissance: "550 W", ventilateur: "MO 9/9 – 4P", prix: 1300 },
  { ref: "HTD-900-2.5", dim: "2500 x 900 x 550", filtres: 5, puissance: "550 W", ventilateur: "MO 9/9 – 4P", prix: 1430 },
  { ref: "HTD-900-3",   dim: "3000 x 900 x 550", filtres: 6, puissance: "550 W", ventilateur: "MO 9/9 – 4P", prix: 1570 },
];
const hottesDynP750: HotteRow[] = [
  { ref: "HTD-750-1",   dim: "1000 x 750 x 460", filtres: 2, puissance: "300 W", ventilateur: "MO 7/7 – 4P", prix: 940 },
  { ref: "HTD-750-1.5", dim: "1500 x 750 x 460", filtres: 3, puissance: "300 W", ventilateur: "MO 7/7 – 4P", prix: 1160 },
  { ref: "HTD-750-2",   dim: "2000 x 750 x 460", filtres: 4, puissance: "550 W", ventilateur: "MO 9/9 – 4P", prix: 1300 },
  { ref: "HTD-750-2.5", dim: "2500 x 750 x 460", filtres: 5, puissance: "550 W", ventilateur: "MO 9/9 – 4P", prix: 1410 },
  { ref: "HTD-750-3",   dim: "3000 x 750 x 460", filtres: 6, puissance: "550 W", ventilateur: "MO 9/9 – 4P", prix: 1580 },
];
const hottesStatP900: HotteRow[] = [
  { ref: "HTS-900-1",   dim: "1000 x 900 x 550", filtres: 2, prix: 470 },
  { ref: "HTS-900-1.5", dim: "1500 x 900 x 550", filtres: 3, prix: 689 },
  { ref: "HTS-900-2",   dim: "2000 x 900 x 550", filtres: 4, prix: 855 },
  { ref: "HTS-900-2.5", dim: "2500 x 900 x 550", filtres: 5, prix: 985 },
  { ref: "HTS-900-3",   dim: "3000 x 900 x 550", filtres: 6, prix: 1075 },
];
const hottesStatP750: HotteRow[] = [
  { ref: "HTS-750-1",   dim: "1000 x 750 x 550", filtres: 2, prix: 470 },
  { ref: "HTS-750-1.5", dim: "1500 x 750 x 550", filtres: 3, prix: 689 },
  { ref: "HTS-750-2",   dim: "2000 x 750 x 550", filtres: 4, prix: 855 },
  { ref: "HTS-750-2.5", dim: "2500 x 750 x 550", filtres: 5, prix: 985 },
  { ref: "HTS-750-3",   dim: "3000 x 750 x 550", filtres: 6, prix: 1075 },
];
const hottesCubP900: HotteRow[] = [
  { ref: "HCS-900-1",   dim: "1000 x 900 x 400", filtres: 2, prix: 780 },
  { ref: "HCS-900-1.5", dim: "1500 x 900 x 400", filtres: 3, prix: 880 },
  { ref: "HCS-900-2",   dim: "2000 x 900 x 400", filtres: 4, prix: 1075 },
  { ref: "HCS-900-2.5", dim: "2500 x 900 x 400", filtres: 5, prix: 1185 },
  { ref: "HCS-900-3",   dim: "3000 x 900 x 400", filtres: 6, prix: 1275 },
];
const hottesCubP1200: HotteRow[] = [
  { ref: "HCS-1200-1",   dim: "1000 x 1200 x 400", filtres: 2, prix: 990 },
  { ref: "HCS-1200-1.5", dim: "1500 x 1200 x 400", filtres: 3, prix: 1090 },
  { ref: "HCS-1200-2",   dim: "2000 x 1200 x 400", filtres: 4, prix: 1310 },
  { ref: "HCS-1200-2.5", dim: "2500 x 1200 x 400", filtres: 5, prix: 1485 },
  { ref: "HCS-1200-3",   dim: "3000 x 1200 x 400", filtres: 6, prix: 1540 },
];
const hottesCubDouble: HotteRow[] = [
  { ref: "HCTF-1300-1.5", dim: "1500 x 1300 x 400", filtres: 3, prix: 1990 },
  { ref: "HCTF-1300-2",   dim: "2000 x 1300 x 400", filtres: 4, prix: 2290 },
  { ref: "HCTF-1300-2.5", dim: "2500 x 1300 x 400", filtres: 5, prix: 2590 },
  { ref: "HCTF-1300-3",   dim: "3000 x 1300 x 400", filtres: 6, prix: 2890 },
];

interface FiltreRow { ref: string; dim: string; prix: number; type: string; }
const filtres: FiltreRow[] = [
  { ref: "FC 50-50", dim: "50 x 50 x 25",   prix: 90,  type: "Filtre à choc" },
  { ref: "FC 40-50", dim: "40 x 50 x 25",   prix: 80,  type: "Filtre à choc" },
  { ref: "FM 50-50", dim: "50 x 50 x 25",   prix: 100, type: "Filtre à mailles" },
  { ref: "FG4-Z90",  dim: "29 x 59,5 x 4,8",prix: 60,  type: "Filtre G4" },
  { ref: "FG4-595",  dim: "59,5 x 59,5 x 4,8", prix: 90, type: "Filtre G4" },
];

interface VentTmd { ref: string; pnomKw: string; pnomCv: string; m3h: number; paMax: number; prix: number; }
const tmdVent: VentTmd[] = [
  { ref: "TMD 7/7 -037",   pnomKw: "0,37", pnomCv: "1/2", m3h: 2400, paMax: 270, prix: 330 },
  { ref: "TMD 9/9 -055",   pnomKw: "0,55", pnomCv: "3/4", m3h: 3400, paMax: 440, prix: 445 },
  { ref: "TMD 10/10 -055", pnomKw: "0,55", pnomCv: "3/4", m3h: 3170, paMax: 490, prix: 455 },
  { ref: "TMD 12/12-0,75-6P-M", pnomKw: "0,75", pnomCv: "1", m3h: 6000, paMax: 290, prix: 720 },
  { ref: "TMD 12/12-0,75-6P-T", pnomKw: "0,75", pnomCv: "1", m3h: 6000, paMax: 320, prix: 720 },
];

const accessoires = [
  { ref: "Ø 160 à 200 (montée)",     prix: 90,  desc: "Platine virole montée" },
  { ref: "Ø 160 à 200 (non montée)", prix: 70,  desc: "Platine virole non montée" },
  { ref: "Ø 450 à 630 (montée)",     prix: 100, desc: "Platine virole montée" },
  { ref: "Ø 450 à 630 (non montée)", prix: 80,  desc: "Platine virole non montée" },
  { ref: "Support 028-032-036",      prix: 150, desc: "Support conduit / tourelle" },
  { ref: "Support 040-045-050",      prix: 200, desc: "Support conduit / tourelle" },
  { ref: "Support 056-063",          prix: 250, desc: "Support conduit / tourelle" },
];

/* ------------------------------------------------------------------ */
/*  QUOTE / DEVIS STATE                                                */
/* ------------------------------------------------------------------ */

interface QuoteItem {
  id: string;
  category: string;
  ref: string;
  label: string;
  prix: number | null; // null = sur devis
  qty: number;
}

const useQuote = () => {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((item: Omit<QuoteItem, "qty"> & { qty?: number }) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + (item.qty || 1) } : i
        );
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
    // brief visual confirmation: open drawer if first item
    setOpen(true);
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = useMemo(
    () =>
      items.reduce((sum, i) => sum + (i.prix !== null ? i.prix * i.qty : 0), 0),
    [items]
  );

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  return { items, open, setOpen, add, updateQty, remove, clear, total, count };
};

type QuoteApi = ReturnType<typeof useQuote>;

/* ------------------------------------------------------------------ */
/*  CALCULATEUR                                                        */
/* ------------------------------------------------------------------ */

type IntensiteCuisson = "leger" | "standard" | "intensif";
type FormeHotte = "trapezoidale-dyn" | "trapezoidale-stat" | "cubique-900" | "cubique-1200" | "cubique-double-flux";

interface CalcInput {
  longueur: number; // m
  profondeur: 750 | 900 | 1200 | 1300;
  forme: FormeHotte;
  intensite: IntensiteCuisson;
  charbonActif: boolean;
  desenfumageF400: boolean;
}

interface CalcResult {
  debitRecommande: number;
  hotte: HotteRow & { categorie: string } | null;
  moteur: VentTmd | null;
  totalEstime: number;
  notes: string[];
  warnings: string[];
}

const COEFFS: Record<IntensiteCuisson, { k: number; label: string; desc: string }> = {
  leger:    { k: 1500, label: "Cuisson légère",   desc: "Snacking, sandwicherie, pizzas, four électrique" },
  standard: { k: 2000, label: "Cuisson standard", desc: "Restauration traditionnelle, bistrot, brasserie" },
  intensif: { k: 2500, label: "Cuisson intensive", desc: "Grill, friture, wok, plancha, cuisine asiatique" },
};

const FORMES: { id: FormeHotte; label: string; profondeurs: (750 | 900 | 1200 | 1300)[] }[] = [
  { id: "trapezoidale-dyn",   label: "Trapézoïdale dynamique (moteur intégré)", profondeurs: [750, 900] },
  { id: "trapezoidale-stat",  label: "Trapézoïdale statique (sans moteur)",      profondeurs: [750, 900] },
  { id: "cubique-900",        label: "Cubique P. 900",                            profondeurs: [900] },
  { id: "cubique-1200",       label: "Cubique P. 1200",                           profondeurs: [1200] },
  { id: "cubique-double-flux",label: "Cubique double flux P. 1300",               profondeurs: [1300] },
];

const longueurToSuffix = (l: number) => {
  if (l <= 1.0) return "1";
  if (l <= 1.5) return "1.5";
  if (l <= 2.0) return "2";
  if (l <= 2.5) return "2.5";
  return "3";
};

const findHotte = (forme: FormeHotte, profondeur: number, longueur: number): (HotteRow & { categorie: string }) | null => {
  const suffix = longueurToSuffix(longueur);
  if (forme === "trapezoidale-dyn") {
    const list = profondeur === 750 ? hottesDynP750 : hottesDynP900;
    const r = list.find((h) => h.ref.endsWith("-" + suffix));
    return r ? { ...r, categorie: `Hotte dynamique trapézoïdale P.${profondeur}` } : null;
  }
  if (forme === "trapezoidale-stat") {
    const list = profondeur === 750 ? hottesStatP750 : hottesStatP900;
    const r = list.find((h) => h.ref.endsWith("-" + suffix));
    return r ? { ...r, categorie: `Hotte statique trapézoïdale P.${profondeur}` } : null;
  }
  if (forme === "cubique-900") {
    const r = hottesCubP900.find((h) => h.ref.endsWith("-" + suffix));
    return r ? { ...r, categorie: "Hotte cubique P.900" } : null;
  }
  if (forme === "cubique-1200") {
    const r = hottesCubP1200.find((h) => h.ref.endsWith("-" + suffix));
    return r ? { ...r, categorie: "Hotte cubique P.1200" } : null;
  }
  if (forme === "cubique-double-flux") {
    const r = hottesCubDouble.find((h) => h.ref.endsWith("-" + suffix));
    return r ? { ...r, categorie: "Hotte cubique double flux P.1300" } : null;
  }
  return null;
};

const findMoteur = (debit: number): VentTmd | null => {
  // Pick smallest TMD with m3h >= debit
  const sorted = [...tmdVent].sort((a, b) => a.m3h - b.m3h);
  for (const v of sorted) if (v.m3h >= debit) return v;
  return sorted[sorted.length - 1] || null;
};

const calculate = (input: CalcInput): CalcResult => {
  const profM = input.profondeur / 1000;
  const k = COEFFS[input.intensite].k;
  let debit = Math.round(input.longueur * profM * k);
  // round up to nearest 100
  debit = Math.ceil(debit / 100) * 100;

  const hotte = findHotte(input.forme, input.profondeur, input.longueur);
  const isDynamique = input.forme === "trapezoidale-dyn";
  const moteur = isDynamique ? null : findMoteur(debit);

  let total = 0;
  if (hotte) total += hotte.prix;
  if (moteur) total += moteur.prix;

  const notes: string[] = [];
  const warnings: string[] = [];

  if (isDynamique) {
    notes.push("Le moteur est inclus dans la hotte dynamique (motorisation intégrée).");
  }
  if (input.charbonActif) {
    notes.push("Caisson charbon actif ALVICARB recommandé en sortie d'extraction (tarif sur devis).");
  }
  if (input.desenfumageF400) {
    notes.push("Caisson F400 (PYRAL A / PYRAL R / ALVYRAL) recommandé pour la conformité ERP (tarif sur devis).");
  }
  if (moteur && debit > moteur.m3h) {
    warnings.push("Le débit calculé dépasse les capacités du plus gros TMD : 2 caissons en parallèle ou un caisson TBD/CEB sont à étudier.");
  }
  if (!hotte) {
    warnings.push("Combinaison forme/profondeur/longueur non standard — demandez un devis personnalisé.");
  }

  return { debitRecommande: debit, hotte, moteur, totalEstime: total, notes, warnings };
};

/* ------------------------------------------------------------------ */
/*  UI : reusable bits                                                 */
/* ------------------------------------------------------------------ */

const AddButton = ({
  onClick,
  label = "Ajouter",
  size = "sm",
  variant = "primary",
}: {
  onClick: () => void;
  label?: string;
  size?: "sm" | "md";
  variant?: "primary" | "ghost";
}) => {
  const sizeCls = size === "md" ? "px-4 py-2 text-sm" : "px-2.5 py-1 text-[11px]";
  const variantCls =
    variant === "primary"
      ? "bg-brand-blue text-white hover:bg-brand-bluedark"
      : "bg-slate-100 text-brand-bluedark hover:bg-slate-200";
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-full font-semibold transition-colors ${sizeCls} ${variantCls}`}
    >
      <Plus className={size === "md" ? "w-3.5 h-3.5" : "w-3 h-3"} />
      {label}
    </button>
  );
};

const PriceTableWithAdd = ({
  rows,
  columns,
  category,
  quote,
}: {
  rows: HotteRow[] | FiltreRow[] | VentTmd[] | typeof accessoires;
  columns: { key: string; label: string; align?: "left" | "right" | "center" }[];
  category: string;
  quote: QuoteApi;
}) => (
  <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-soft">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gradient-to-r from-brand-bluedark to-brand-blue text-white">
          {columns.map((c) => (
            <th key={c.key} className={`px-4 py-3 text-${c.align || "left"} font-semibold`}>
              {c.label}
            </th>
          ))}
          <th className="px-2 py-3 w-10" aria-label="Ajouter au devis" />
        </tr>
      </thead>
      <tbody>
        {(rows as Array<Record<string, string | number>>).map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
            {columns.map((c) => (
              <td
                key={c.key}
                className={`px-4 py-3 text-${c.align || "left"} ${
                  c.key === "prix" ? "font-bold text-brand-red whitespace-nowrap" : "text-slate-700"
                }`}
              >
                {c.key === "prix" && typeof row[c.key] === "number"
                  ? formatEur(row[c.key] as number)
                  : row[c.key]}
              </td>
            ))}
            <td className="px-2 py-3">
              <button
                onClick={() =>
                  quote.add({
                    id: `${category}-${row.ref}`,
                    category,
                    ref: String(row.ref),
                    label: `${category} — ${row.ref}${row.dim ? ` (${row.dim})` : ""}`,
                    prix: typeof row.prix === "number" ? row.prix : null,
                  })
                }
                className="w-7 h-7 rounded-full bg-brand-blue text-white hover:bg-brand-bluedark flex items-center justify-center transition-colors"
                aria-label="Ajouter au devis"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Section = ({ id, eyebrow, title, subtitle, children }: {
  id: string; eyebrow: string; title: string; subtitle?: string; children: React.ReactNode;
}) => (
  <section id={id} className="py-20 md:py-24 scroll-mt-32">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-brand-bluedark text-xs font-bold tracking-wider uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 leading-tight mb-3">
          {title}
        </h2>
        {subtitle && <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  CALCULATEUR COMPONENT                                              */
/* ------------------------------------------------------------------ */

const CalculatorCard = ({ quote }: { quote: QuoteApi }) => {
  const [longueur, setLongueur] = useState(2.0);
  const [forme, setForme] = useState<FormeHotte>("trapezoidale-dyn");
  const [profondeur, setProfondeur] = useState<750 | 900 | 1200 | 1300>(900);
  const [intensite, setIntensite] = useState<IntensiteCuisson>("standard");
  const [charbonActif, setCharbonActif] = useState(false);
  const [desenfumageF400, setDesenfumageF400] = useState(false);

  const profondeursDispo = useMemo(() => {
    return FORMES.find((f) => f.id === forme)?.profondeurs || [900];
  }, [forme]);

  // Si on change de forme et la profondeur n'est plus dispo, on bascule
  useEffect(() => {
    if (!profondeursDispo.includes(profondeur)) {
      setProfondeur(profondeursDispo[0]);
    }
  }, [profondeursDispo, profondeur]);

  const result = useMemo(
    () =>
      calculate({
        longueur,
        profondeur,
        forme,
        intensite,
        charbonActif,
        desenfumageF400,
      }),
    [longueur, profondeur, forme, intensite, charbonActif, desenfumageF400]
  );

  const ajouterToutAuDevis = () => {
    if (result.hotte) {
      quote.add({
        id: `calc-hotte-${result.hotte.ref}`,
        category: result.hotte.categorie,
        ref: result.hotte.ref,
        label: `${result.hotte.categorie} — ${result.hotte.ref} (${result.hotte.dim})`,
        prix: result.hotte.prix,
      });
    }
    if (result.moteur) {
      quote.add({
        id: `calc-moteur-${result.moteur.ref}`,
        category: "Moteur direct TMD",
        ref: result.moteur.ref,
        label: `Moteur direct ${result.moteur.ref} (${result.moteur.m3h} m³/h)`,
        prix: result.moteur.prix,
      });
    }
    if (charbonActif) {
      quote.add({
        id: "calc-charbon-actif",
        category: "Charbon actif",
        ref: "ALVICARB (à dimensionner)",
        label: "Caisson charbon actif ALVICARB (à dimensionner selon débit)",
        prix: null,
      });
    }
    if (desenfumageF400) {
      quote.add({
        id: "calc-f400",
        category: "Désenfumage F400",
        ref: "PYRAL / ALVYRAL (à dimensionner)",
        label: "Caisson F400 CE (PYRAL A / R / ALVYRAL — à dimensionner)",
        prix: null,
      });
    }
  };

  return (
    <section id="calculateur" className="relative py-16 md:py-20 -mt-2 scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-white to-brand-sky/10 -z-10" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-bluedark text-xs font-bold tracking-wider uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Méthode de dimensionnement
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 leading-tight mb-3">
            Calculez votre installation en <span className="text-gradient-brand">moins d'une minute</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Renseignez les caractéristiques de votre cuisine, on vous propose la hotte, le moteur et les caissons adaptés — directement ajoutables à votre devis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-6 max-w-6xl mx-auto">
          {/* INPUTS */}
          <div className="rounded-3xl bg-white border border-border shadow-lifted p-6 md:p-8">
            <h3 className="font-bold text-slate-900 mb-5 flex items-center gap-2">
              <Ruler className="w-4 h-4 text-brand-blue" />
              Caractéristiques de votre hotte
            </h3>

            <div className="space-y-6">
              {/* Longueur */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-700">Longueur de la hotte</label>
                  <span className="text-base font-bold text-brand-blue">{longueur.toFixed(1)} m</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.5}
                  value={longueur}
                  onChange={(e) => setLongueur(parseFloat(e.target.value))}
                  className="w-full accent-brand-blue"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>1 m</span><span>1,5</span><span>2</span><span>2,5</span><span>3 m</span>
                </div>
              </div>

              {/* Forme */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">Type de hotte</label>
                <div className="grid grid-cols-1 gap-2">
                  {FORMES.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setForme(f.id)}
                      className={`text-left text-sm px-4 py-2.5 rounded-xl border transition-all ${
                        forme === f.id
                          ? "border-brand-blue bg-brand-blue/5 text-brand-bluedark font-semibold"
                          : "border-border bg-white hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Profondeur */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">Profondeur</label>
                <div className="flex flex-wrap gap-2">
                  {profondeursDispo.map((p) => (
                    <button
                      key={p}
                      onClick={() => setProfondeur(p)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                        profondeur === p
                          ? "border-brand-blue bg-brand-blue text-white"
                          : "border-border bg-white hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      {p} mm
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensité */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">
                  Intensité de cuisson
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {(Object.keys(COEFFS) as IntensiteCuisson[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => setIntensite(k)}
                      className={`text-left px-4 py-2.5 rounded-xl border transition-all ${
                        intensite === k
                          ? "border-brand-red bg-brand-red/5 text-brand-red"
                          : "border-border bg-white hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">{COEFFS[k].label}</span>
                        <span className="text-[11px] font-bold">{COEFFS[k].k} m³/h·m²</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{COEFFS[k].desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Options */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">Options</label>
                <div className="space-y-2">
                  <label className="flex items-start gap-3 px-4 py-3 rounded-xl border border-border hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={charbonActif}
                      onChange={(e) => setCharbonActif(e.target.checked)}
                      className="mt-0.5 accent-brand-blue w-4 h-4"
                    />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Caisson charbon actif (odeurs)</div>
                      <div className="text-[11px] text-muted-foreground">Obligatoire en restauration urbaine — neutralise les odeurs en sortie d'extraction</div>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 px-4 py-3 rounded-xl border border-border hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={desenfumageF400}
                      onChange={(e) => setDesenfumageF400(e.target.checked)}
                      className="mt-0.5 accent-brand-blue w-4 h-4"
                    />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Désenfumage F400 (ERP)</div>
                      <div className="text-[11px] text-muted-foreground">Conformité IT 246/263 pour les Établissements Recevant du Public</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* RESULT */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-bluedark to-brand-blue text-white shadow-lifted p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <Flame className="w-5 h-5" />
              <h3 className="font-bold">Notre recommandation</h3>
            </div>

            {/* Débit principal */}
            <div className="mb-5 pb-5 border-b border-white/15">
              <div className="text-[11px] uppercase tracking-widest opacity-80 mb-1">Débit d'extraction recommandé</div>
              <div className="text-4xl font-extrabold tracking-tight">
                {result.debitRecommande.toLocaleString("fr-FR")} <span className="text-xl opacity-80">m³/h</span>
              </div>
              <div className="text-[11px] opacity-75 mt-1">
                Calcul : {longueur.toFixed(1)} m × {(profondeur / 1000).toFixed(2)} m × {COEFFS[intensite].k} m³/h·m²
              </div>
            </div>

            {/* Hotte */}
            {result.hotte ? (
              <div className="mb-3 rounded-2xl bg-white/10 backdrop-blur-sm p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest opacity-80">{result.hotte.categorie}</div>
                    <div className="font-bold text-lg leading-tight mt-0.5">{result.hotte.ref}</div>
                    <div className="text-[11px] opacity-75 mt-0.5">{result.hotte.dim} mm — {result.hotte.filtres} filtres</div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold whitespace-nowrap">{formatEur(result.hotte.prix)}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-3 rounded-2xl bg-brand-red/30 backdrop-blur-sm p-4 text-sm">
                Combinaison non standard — devis sur mesure
              </div>
            )}

            {/* Moteur */}
            {result.moteur && (
              <div className="mb-3 rounded-2xl bg-white/10 backdrop-blur-sm p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest opacity-80">Moteur direct</div>
                    <div className="font-bold text-lg leading-tight mt-0.5">{result.moteur.ref}</div>
                    <div className="text-[11px] opacity-75 mt-0.5">
                      {result.moteur.m3h.toLocaleString("fr-FR")} m³/h · {result.moteur.paMax} Pa · {result.moteur.pnomKw} kW
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold whitespace-nowrap">{formatEur(result.moteur.prix)}</div>
                  </div>
                </div>
              </div>
            )}

            {(charbonActif || desenfumageF400) && (
              <div className="mb-3 rounded-2xl bg-white/10 backdrop-blur-sm p-4 space-y-1.5 text-sm">
                {charbonActif && (
                  <div className="flex items-center justify-between">
                    <span>Charbon actif ALVICARB</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">Sur devis</span>
                  </div>
                )}
                {desenfumageF400 && (
                  <div className="flex items-center justify-between">
                    <span>Caisson F400 CE</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">Sur devis</span>
                  </div>
                )}
              </div>
            )}

            {/* Notes */}
            {result.notes.length > 0 && (
              <div className="text-[11px] opacity-85 leading-relaxed mb-3 space-y-1">
                {result.notes.map((n, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <Info className="w-3 h-3 mt-0.5 shrink-0" />
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            )}
            {result.warnings.length > 0 && (
              <div className="text-[11px] bg-brand-red/30 rounded-lg p-3 mb-3 space-y-1">
                {result.warnings.map((w, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                    <span>{w}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Total + CTA */}
            <div className="mt-auto pt-4 border-t border-white/15">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest opacity-80">Total estimé</div>
                  <div className="text-2xl font-extrabold">{formatEur(result.totalEstime)}</div>
                  <div className="text-[10px] opacity-70">+ pose et options sur devis</div>
                </div>
              </div>
              <button
                onClick={ajouterToutAuDevis}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-brand-bluedark font-bold hover:bg-accent transition-colors"
              >
                <Plus className="w-4 h-4" />
                Ajouter à mon devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  PRODUCT CARD WITH ADD                                              */
/* ------------------------------------------------------------------ */

const ProductCardAdd = ({
  id,
  category,
  productRef,
  label,
  prix,
  quote,
}: {
  id: string;
  category: string;
  productRef: string;
  label: string;
  prix: number | null;
  quote: QuoteApi;
}) => (
  <button
    onClick={() => quote.add({ id, category, ref: productRef, label, prix })}
    className="w-full inline-flex items-center justify-center gap-2 mt-4 px-4 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-bluedark transition-colors"
  >
    <Plus className="w-3.5 h-3.5" />
    Ajouter au devis (sur demande)
  </button>
);

/* ------------------------------------------------------------------ */
/*  SECTION DEFINITIONS                                                */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "calculateur", label: "Calculateur", icon: Calculator },
  { id: "hottes", label: "Hottes professionnelles", icon: ChefHat },
  { id: "filtres", label: "Filtres & accessoires", icon: Filter },
  { id: "commandes", label: "Commandes électriques", icon: Zap },
  { id: "moteurs", label: "Moteurs directs", icon: Cog },
  { id: "caissons", label: "Caissons de ventilation", icon: Wind },
  { id: "tourelles", label: "Tourelles & désenfumage", icon: AlertTriangle },
  { id: "charbon", label: "Traitement des odeurs", icon: Layers },
];

/* ------------------------------------------------------------------ */
/*  QUOTE DRAWER                                                       */
/* ------------------------------------------------------------------ */

const QuoteDrawer = ({ quote }: { quote: QuoteApi }) => {
  const [nom, setNom] = useState("");
  const [societe, setSociete] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const buildMailto = () => {
    const lines = [
      "Bonjour,",
      "",
      "Je souhaite recevoir un devis pour la sélection suivante (catalogue Ventilex 2025) :",
      "",
      ...quote.items.map(
        (i) =>
          `• ${i.qty} × ${i.label}` +
          (i.prix !== null
            ? ` — ${formatEur(i.prix)} unit. → ${formatEur(i.prix * i.qty)}`
            : " — Sur devis"),
      ),
      "",
      `Sous-total estimé : ${formatEur(quote.total)} HT`,
      "(hors caissons sur devis et hors pose)",
      "",
      "─────────",
      `Nom        : ${nom}`,
      `Société    : ${societe}`,
      `E-mail     : ${email}`,
      `Téléphone  : ${tel}`,
      `Adresse    : ${adresse}`,
      "",
      "Mon projet :",
      message,
      "",
      "Merci de me contacter pour finaliser le devis.",
      "",
      "Cordialement.",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent(
      `Demande de devis Ventilation — ${nom || societe || "client"}`
    );
    return `mailto:contact@ecocvc.com?subject=${subject}&body=${body}`;
  };

  const isValid = nom.trim() && email.trim() && quote.items.length > 0;

  const handleSend = () => {
    if (!isValid) return;
    window.location.href = buildMailto();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <AnimatePresence>
      {quote.open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => quote.setOpen(false)}
            className="fixed inset-0 z-[90] bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 bottom-0 z-[91] w-full sm:max-w-md md:max-w-lg bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <header className="bg-gradient-to-r from-brand-bluedark to-brand-blue text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                <div>
                  <div className="text-[11px] uppercase tracking-widest opacity-80">Mon devis</div>
                  <div className="font-bold">{quote.count} article{quote.count > 1 ? "s" : ""}</div>
                </div>
              </div>
              <button
                onClick={() => quote.setOpen(false)}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </header>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {quote.items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground py-20">
                  <ShoppingCart className="w-12 h-12 text-slate-300 mb-3" />
                  <p className="text-sm">Votre devis est vide.</p>
                  <p className="text-xs mt-1">Ajoutez des produits depuis le calculateur ou le catalogue.</p>
                </div>
              ) : (
                <>
                  {quote.items.map((it) => (
                    <div key={it.id} className="rounded-2xl border border-border bg-white p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="min-w-0">
                          <div className="text-[10px] uppercase tracking-wider text-brand-red font-bold">{it.category}</div>
                          <div className="font-semibold text-sm text-slate-900 leading-tight mt-0.5">{it.ref}</div>
                          <div className="text-[11px] text-muted-foreground mt-0.5 truncate">{it.label}</div>
                        </div>
                        <button
                          onClick={() => quote.remove(it.id)}
                          className="w-7 h-7 rounded-full text-muted-foreground hover:bg-slate-100 hover:text-brand-red flex items-center justify-center transition-colors shrink-0"
                          aria-label="Supprimer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-border overflow-hidden">
                          <button
                            onClick={() => quote.updateQty(it.id, it.qty - 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-slate-100"
                            aria-label="Moins"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-9 text-center text-sm font-bold">{it.qty}</span>
                          <button
                            onClick={() => quote.updateQty(it.id, it.qty + 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-slate-100"
                            aria-label="Plus"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-right">
                          {it.prix !== null ? (
                            <>
                              <div className="text-sm font-bold text-brand-red whitespace-nowrap">
                                {formatEur(it.prix * it.qty)}
                              </div>
                              <div className="text-[10px] text-muted-foreground">
                                {formatEur(it.prix)} / unité
                              </div>
                            </>
                          ) : (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                              Sur devis
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Total */}
                  <div className="rounded-2xl bg-slate-50 border border-border p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Sous-total HT</span>
                      <span className="text-lg font-extrabold text-slate-900">{formatEur(quote.total)}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Articles « sur devis » non comptés. Pose, frais de livraison et options à étudier en bureau d'études.
                    </p>
                  </div>

                  {/* Form */}
                  <div className="rounded-2xl border border-border bg-white p-4 space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-brand-blue" />
                        Vos coordonnées
                      </h4>
                      <p className="text-[11px] text-muted-foreground">
                        Nous vous répondons sous 24 h ouvrées avec un devis détaillé.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <input
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Nom et prénom *"
                        className="px-3 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                      <input
                        value={societe}
                        onChange={(e) => setSociete(e.target.value)}
                        placeholder="Société (facultatif)"
                        className="px-3 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="E-mail *"
                        className="px-3 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                      <input
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        type="tel"
                        placeholder="Téléphone"
                        className="px-3 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                      <input
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                        placeholder="Adresse du chantier"
                        className="px-3 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Précisez votre projet : type d'établissement, contraintes, délais…"
                        rows={3}
                        className="px-3 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer actions */}
            {quote.items.length > 0 && (
              <footer className="border-t border-border p-4 bg-white">
                {sent && (
                  <div className="mb-3 rounded-xl bg-emerald-50 text-emerald-800 text-sm px-3 py-2 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Votre client mail s'est ouvert avec le devis prérempli.
                  </div>
                )}
                <div className="flex gap-2">
                  <button
                    onClick={quote.clear}
                    className="px-4 py-3 rounded-full text-sm font-semibold text-muted-foreground hover:bg-slate-100 transition-colors"
                  >
                    Vider
                  </button>
                  <button
                    onClick={handleSend}
                    disabled={!isValid}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-red text-white text-sm font-bold hover:bg-brand-red/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer le devis par mail
                  </button>
                </div>
                <p className="text-[10px] text-muted-foreground text-center mt-2">
                  Le devis s'ouvre dans votre client mail. Une vraie soumission web sera disponible prochainement.
                </p>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

const FloatingCartButton = ({ quote }: { quote: QuoteApi }) => (
  <motion.button
    onClick={() => quote.setOpen(true)}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-brand-red text-white font-bold shadow-lifted hover:bg-brand-red/90 transition-colors"
  >
    <ShoppingCart className="w-5 h-5" />
    <span>Mon devis</span>
    {quote.count > 0 && (
      <span className="ml-1 inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded-full bg-white text-brand-red text-xs font-extrabold">
        {quote.count}
      </span>
    )}
  </motion.button>
);

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

const Ventilation = () => {
  const [activeNav, setActiveNav] = useState<string>("calculateur");
  const quote = useQuote();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <PageHeader
        eyebrow="Catalogue Ventilex France 2025"
        title={
          <>
            Ventilation et hottes <span className="text-gradient-brand">professionnelles</span>
          </>
        }
        subtitle="Hottes, caissons d'extraction, désenfumage F400 et traitement des odeurs au charbon actif. Distributeur officiel Ventilex France pour la cuisine professionnelle, la restauration collective et les ERP."
        breadcrumb={[{ label: "Ventilation & extraction" }]}
        heroImage={{
          src: heroImg,
          alt: "Cuisine professionnelle équipée d'une hotte d'extraction",
          caption: "Catalogue 2025",
          badge: "Pro",
        }}
      />

      {/* Promise band */}
      <section className="py-8 bg-gradient-to-r from-brand-bluedark via-brand-blue to-brand-sky text-white">
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {[
            { icon: Award, label: "Distributeur officiel", v: "Ventilex France" },
            { icon: ShieldCheck, label: "Conforme ERP", v: "AISI 304/430 + EN 12101-3" },
            { icon: Wrench, label: "Pose & SAV", v: "par eco cvc en Rhône-Alpes" },
            { icon: Truck, label: "Livraison", v: "France entière sous 5–10 j" },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold opacity-80">{b.label}</div>
                <div className="font-bold">{b.v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATEUR */}
      <CalculatorCard quote={quote} />

      {/* Sticky catalog nav */}
      <div className="sticky top-28 z-30 bg-white/90 backdrop-blur-md border-y border-border">
        <div className="container mx-auto py-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setActiveNav(s.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    activeNav === s.id
                      ? "bg-brand-blue text-white shadow-soft"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* HOTTES */}
      <Section
        id="hottes"
        eyebrow="01 — Cuisines professionnelles"
        title="Hottes inox AISI 430 — finition Scotch Brite"
        subtitle="Conçues en monobloc, sans vis apparentes, plis retournés sur toutes les parties visibles. Plénum extractible pour évacuation des graisses et condensats. Luminaire LED intégré, verre de protection."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            { name: "Dynamique trapézoïdale",  desc: "Avec moteur intégré 230V", img: hotteDynamique, p: "P. 900 / 750 mm", cover: false },
            { name: "Statique trapézoïdale",   desc: "Sans moteur, avec virole", img: hotteStatique, p: "P. 900 / 750 mm", cover: false },
            { name: "Statique cubique",        desc: "Forme droite, débit haut", img: hotteCubique,  p: "P. 900 / 1200 mm", cover: false },
            { name: "Cubique double flux",     desc: "Soufflage + extraction en cuisine pro", img: hotteCubiqueDetail, p: "P. 1300 mm", cover: true },
          ].map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-white shadow-soft overflow-hidden hover:shadow-lifted hover:-translate-y-1 transition-all"
            >
              <div className={`aspect-[4/3] ${h.cover ? "" : "bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6"}`}>
                <img src={h.img} alt={h.name} className={h.cover ? "w-full h-full object-cover" : "max-w-full max-h-full object-contain"} />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red mb-1">{h.p}</div>
                <h3 className="font-bold text-slate-900 leading-tight mb-1">{h.name}</h3>
                <p className="text-xs text-muted-foreground">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          {/* Dynamique */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Hottes dynamiques trapézoïdales</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
              Inox 18/10 satiné AISI 430 — équipées de filtres à choc (AISI 304) — bouchon de vidange — variateur électronique 6A — alimentation monophasée 230V — luminaire LED.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-bluedark mb-2">Profondeur 900 mm</div>
                <PriceTableWithAdd
                  rows={hottesDynP900}
                  category="Hotte dynamique trapézoïdale P.900"
                  quote={quote}
                  columns={[
                    { key: "ref", label: "Réf." },
                    { key: "dim", label: "Dim. (mm)" },
                    { key: "filtres", label: "Filtres", align: "center" },
                    { key: "prix", label: "Prix HT", align: "right" },
                  ]}
                />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-bluedark mb-2">Profondeur 750 mm</div>
                <PriceTableWithAdd
                  rows={hottesDynP750}
                  category="Hotte dynamique trapézoïdale P.750"
                  quote={quote}
                  columns={[
                    { key: "ref", label: "Réf." },
                    { key: "dim", label: "Dim. (mm)" },
                    { key: "filtres", label: "Filtres", align: "center" },
                    { key: "prix", label: "Prix HT", align: "right" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Statique trapézoïdale */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Hottes statiques trapézoïdales</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
              Sans moteur incorporé — filtres labyrinthe inox AISI 304 (400 × 500 mm) — bouchon de vidange — luminaire LED.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-bluedark mb-2">Profondeur 900 mm</div>
                <PriceTableWithAdd
                  rows={hottesStatP900}
                  category="Hotte statique trapézoïdale P.900"
                  quote={quote}
                  columns={[
                    { key: "ref", label: "Réf." },
                    { key: "dim", label: "Dim. (mm)" },
                    { key: "filtres", label: "Filtres", align: "center" },
                    { key: "prix", label: "Prix HT", align: "right" },
                  ]}
                />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-bluedark mb-2">Profondeur 750 mm</div>
                <PriceTableWithAdd
                  rows={hottesStatP750}
                  category="Hotte statique trapézoïdale P.750"
                  quote={quote}
                  columns={[
                    { key: "ref", label: "Réf." },
                    { key: "dim", label: "Dim. (mm)" },
                    { key: "filtres", label: "Filtres", align: "center" },
                    { key: "prix", label: "Prix HT", align: "right" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Cubique */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Hottes statiques cubiques</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
              Inox 18/10 satiné AISI 430 — sans moteur incorporé — équipées de filtres labyrinthe inox AISI 304.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-bluedark mb-2">Profondeur 900 mm</div>
                <PriceTableWithAdd
                  rows={hottesCubP900}
                  category="Hotte cubique P.900"
                  quote={quote}
                  columns={[
                    { key: "ref", label: "Réf." },
                    { key: "dim", label: "Dim. (mm)" },
                    { key: "filtres", label: "Filtres", align: "center" },
                    { key: "prix", label: "Prix HT", align: "right" },
                  ]}
                />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-bluedark mb-2">Profondeur 1200 mm</div>
                <PriceTableWithAdd
                  rows={hottesCubP1200}
                  category="Hotte cubique P.1200"
                  quote={quote}
                  columns={[
                    { key: "ref", label: "Réf." },
                    { key: "dim", label: "Dim. (mm)" },
                    { key: "filtres", label: "Filtres", align: "center" },
                    { key: "prix", label: "Prix HT", align: "right" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Cubique double flux */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Hottes cubiques double flux — P. 1300 mm</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
              Soufflage et extraction intégrés. Façades porte-filtres en acier AISI 430 d'épaisseur 0,8 mm. Filtres à choc (398 × 498 × 25 mm) pour filtration efficace.
            </p>
            <div className="grid md:grid-cols-[1.4fr,1fr] gap-6 items-start">
              <PriceTableWithAdd
                rows={hottesCubDouble}
                category="Hotte cubique double flux P.1300"
                quote={quote}
                columns={[
                  { key: "ref", label: "Réf." },
                  { key: "dim", label: "Dim. (mm)" },
                  { key: "filtres", label: "Filtres", align: "center" },
                  { key: "prix", label: "Prix HT", align: "right" },
                ]}
              />
              <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
                <Info className="w-5 h-5 text-brand-blue mb-2" />
                <h4 className="font-bold text-slate-900 mb-2">Conçue pour les ERP</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Modèle adossé avec visière de 1300 mm. Pour la captation, la filtration et l'extraction des polluants en cuisines professionnelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FILTRES & ACCESSOIRES */}
      <Section
        id="filtres"
        eyebrow="Pièces détachées"
        title="Filtres, viroles & supports conduits"
        subtitle="Filtres à choc, à mailles et G4 — platines viroles en acier galvanisé montées ou non — supports pour conduits et tourelles."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-3">Filtration</h3>
            <PriceTableWithAdd
              rows={filtres}
              category="Filtres"
              quote={quote}
              columns={[
                { key: "type", label: "Type" },
                { key: "ref", label: "Réf." },
                { key: "dim", label: "Dim. (cm)" },
                { key: "prix", label: "Prix HT", align: "right" },
              ]}
            />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-3">Viroles & supports</h3>
            <PriceTableWithAdd
              rows={accessoires}
              category="Viroles & supports"
              quote={quote}
              columns={[
                { key: "ref", label: "Réf." },
                { key: "desc", label: "Description" },
                { key: "prix", label: "Prix HT", align: "right" },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* COMMANDES */}
      <Section
        id="commandes"
        eyebrow="02 — Pilotage"
        title="Variateurs de fréquence & autotransformateurs"
        subtitle="Du simple autotransformateur 5 positions au variateur de fréquence haut de gamme avec coupure CO₂ — sélectionnez le pilotage adapté à votre installation."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* ALVENE */}
          <div className="rounded-3xl border border-border bg-white shadow-soft overflow-hidden flex flex-col">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
              <img src={variateurAlvene} alt="Variateur ALVENE" className="max-h-full object-contain" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red mb-1">Variateur de fréquence</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">VARIATECH ALVENE</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Coffret IP55 inox — versions monophasée 230V (sortie 230V) et triphasée 400V (sortie 400V) — protection thermique moteur — bouton d'arrêt d'urgence en façade.
              </p>
              <div className="space-y-1.5 text-xs">
                {["Conception robuste IP55", "Adapté à une installation en cuisine", "Filtre antiparasite intégré (Type C1)", "Sortie 0/10V disponible"].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                    <span className="text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <ProductCardAdd
                id="cmd-alvene"
                category="Variateur de fréquence"
                productRef="VARIATECH ALVENE"
                label="VARIATECH ALVENE — Variateur de fréquence (sur devis)"
                prix={null}
                quote={quote}
              />
            </div>
          </div>
          {/* SENSEO */}
          <div className="rounded-3xl border-2 border-brand-blue bg-white shadow-lifted overflow-hidden flex flex-col relative">
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase z-10">
              Premium
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
              <img src={variateurSenseo} alt="SENSEO DRIVE" className="max-h-full object-contain" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red mb-1">Haute performance</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">SENSEO DRIVE</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Variateur triphasé 400V (sans neutre) ou monophasé 230V — boîtier IP66 — afficheur intégré — démarrage progressif — corrections automatiques de tension.
              </p>
              <div className="space-y-1.5 text-xs">
                {["Mode grande vitesse 40 → 100 % débit", "Filtre CEM Classe B intégré", "Plage température 40 → 100 °C nominale", "Coupure CO₂ via économiseur électrovanne gaz"].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                    <span className="text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <ProductCardAdd
                id="cmd-senseo"
                category="Variateur premium"
                productRef="SENSEO DRIVE"
                label="SENSEO DRIVE — Variateur haute performance (sur devis)"
                prix={null}
                quote={quote}
              />
            </div>
          </div>
          {/* AUTOTRANSFOS */}
          <div className="rounded-3xl border border-border bg-white shadow-soft overflow-hidden flex flex-col">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 relative">
              <Settings className="w-24 h-24 text-brand-blue/40" />
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase text-brand-bluedark shadow-soft">
                5 positions
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red mb-1">Solution éprouvée</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Autotransformateurs</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Versions monophasée 230V (PVC IP54 — 2,2A à 7,5A) — triphasée 400V (métallique IP54 — 2,4A à 11A) — avec ou sans coup de poing.
              </p>
              <div className="space-y-1.5 text-xs">
                {["Protection thermique moteur", "Marche forcée grande vitesse", "Coffret de relayage modulable", "Conforme CE"].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                    <span className="text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <ProductCardAdd
                id="cmd-autotransfo"
                category="Autotransformateur"
                productRef="Autotransformateur 5 positions"
                label="Autotransformateur 5 positions (mono ou triphasé — sur devis)"
                prix={null}
                quote={quote}
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-accent/50 border border-brand-blue/20 p-5 flex items-start gap-4">
          <Info className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
          <div className="text-sm text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Tarifs des commandes électriques sur devis.</span> Le choix du variateur dépend de la puissance moteur, du nombre de moteurs à piloter et du type d'alimentation (mono / triphasé). Notre bureau d'études vous accompagne gratuitement.
          </div>
        </div>
      </Section>

      {/* MOTEURS */}
      <Section
        id="moteurs"
        eyebrow="03 — Ventilation incorporée"
        title="Moteurs directs TMD — double aspiration"
        subtitle="Groupe TMD : ventilateurs centrifuges à double ouïe et basse pression. Volute en acier galvanisé. Turbine à action, dotée d'aubes inversées. Moteur IP54, classe B, avec refoulement vertical centré sur toute la longueur."
      >
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center mb-10">
          <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-border p-8 shadow-soft">
            <img src={moteurDirect} alt="Moteur direct TMD" className="w-full h-auto object-contain" />
          </div>
          <div>
            <ul className="space-y-3">
              {[
                "Turbine vers l'avant, équilibrée statiquement",
                "Pieds de support optionnels avec amortisseurs caoutchouc",
                "Moteur IP54 — classe B, 4 ou 6 pôles",
                "Sondes thermistances et bobinage classe F en option",
                "Plage de température : −20 °C à +50 °C",
                "Débits jusqu'à 10 000 m³/h en pression statique 5/8 ou 15/15",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PriceTableWithAdd
          rows={tmdVent}
          category="Moteur direct TMD"
          quote={quote}
          columns={[
            { key: "ref", label: "Référence" },
            { key: "pnomKw", label: "Pnom (kW)", align: "center" },
            { key: "pnomCv", label: "Pnom (CV)", align: "center" },
            { key: "m3h", label: "Débit max (m³/h)", align: "center" },
            { key: "paMax", label: "Pression max (Pa)", align: "center" },
            { key: "prix", label: "Prix HT", align: "right" },
          ]}
        />
      </Section>

      {/* CAISSONS */}
      <Section
        id="caissons"
        eyebrow="04 — Ventilation"
        title="Caissons de ventilation simple & double ouïe"
        subtitle="Trois familles : TBD double ouïe avec moteur intégré, CEB 400 °C / 2 h homologuée EN 12101-3 : 2002 pour le désenfumage, TBS simple ouïe pour les configurations encombrées."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              ref: "TBD",
              title: "Caisson TBD",
              desc: "Ventilateur double ouïe avec moteur intégré. Caissons en acier galvanisé Z-275, parois isolées intérieurement avec laine minérale 25 mm. Variateur centrifuge double ouïe avec turbine à aubes inclinées vers l'avant, type action.",
              img: caissonTbd,
              specs: ["Tailles 7/7 à 15/15", "Puissances 0,18 à 1,5 kW", "Pression statique jusqu'à 700 Pa", "Couverts 10 caissons"],
            },
            {
              ref: "CEB",
              title: "Caisson CEB 400 °C / 2 h",
              desc: "Conforme EN-12101-3:2002 dans un laboratoire certifié. Pour caissons de désenfumage CE. Couverts 5 caissons couvrant les puissances 0,25 kW à 15 kW. Disponible en décharge horizontale (H — fabrication standard) et verticale (V — sur demande).",
              img: caissonCeb,
              badge: "EN 12101-3 / 400 °C",
              specs: ["Homologué désenfumage", "Acier galvanisé Z-275", "Plage 0,25 → 15 kW", "Versions H & V"],
            },
            {
              ref: "TBS",
              title: "Caisson TBS",
              desc: "Ventilateur simple ouïe — pour la fabrication ou l'extraction d'air conventionnelle dans les configurations encombrées (400 °C / 2 h). Conforme à la norme UNE EN-12101-3 : 2002. Pression statique jusqu'à 1 100 Pa.",
              img: caissonTbs,
              specs: ["Tailles 9/9 à 30/14", "Standard / Désenfumage", "Moteur 2 vitesses", "RD-90/DR-1 ou LG-Q/DR-1"],
            },
          ].map((c, i) => (
            <motion.div
              key={c.ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-white shadow-soft overflow-hidden flex flex-col hover:shadow-lifted hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[5/4] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 relative">
                <img src={c.img} alt={c.title} className="max-w-full max-h-full object-contain" />
                {(c as { badge?: string }).badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase">
                    {(c as { badge?: string }).badge}
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red mb-1">Réf. {c.ref}</div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{c.desc}</p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] mb-4">
                  {c.specs.map((s) => (
                    <div key={s} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-brand-blue mt-0.5 shrink-0" />
                      <span className="text-slate-600">{s}</span>
                    </div>
                  ))}
                </div>
                <ProductCardAdd
                  id={`caisson-${c.ref.toLowerCase()}`}
                  category="Caisson de ventilation"
                  productRef={c.ref}
                  label={`${c.title} (à dimensionner)`}
                  prix={null}
                  quote={quote}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-accent/50 border border-brand-blue/20 p-5 flex items-start gap-4">
          <Info className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
          <div className="text-sm text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Tarifs caissons sur devis.</span> Dimensionnement réalisé en bureau d'études en fonction du débit, de la pression statique et de la configuration de votre installation.
          </div>
        </div>
      </Section>

      {/* TOURELLES */}
      <Section
        id="tourelles"
        eyebrow="05 — Désenfumage F400"
        title="Tourelles & caissons d'extraction F400"
        subtitle="Gamme certifiée F400 CE pour le désenfumage des ERP : tourelles toiture EMMOS et SIMOUN, caissons horizontaux PYRAL A et PYRAL R, ALVYRAL en V90/H90."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: "emmos", name: "EMMOS", tag: "Tourelle d'extraction F400 CE", ref: "0370-CPR-2283", desc: "Plage de débits 300 à 20 000 m³/h pour des pressions de 50 à 7 500 Pa. Moteur à bride IP55 classe F, hors du flux d'air et ventilé. Mono ou triphasé 2 vitesses Dalhander.", img: tourelleEmmos },
            { id: "simoun", name: "SIMOUN", tag: "Tourelle de ventilation F400-120", ref: "Cap. 110 °C", desc: "Embase en acier galvanisé peint RAL 7011. Grillage en acier galvanisé à mailles carrées. Moteur ECM (commutateur électronique) avec contrôleur déporté IP65 sous le capot. Mono 230V ou triphasé 400V/3N/50/60 Hz.", img: tourelleSimoun },
            { id: "pyral-a", name: "PYRAL A", tag: "Caisson F400 CE — 0370-CPR-2260", ref: "Classe F400 / −20 °C → +80 °C", desc: "Manchette lisse pour raccordement à l'aspiration et au refoulement. Pieds supports en acier galvanisé pour fixation. Aspiration et refoulement en ligne, servitude droite. Turbine double ouïe à action.", img: pyralA },
            { id: "pyral-r", name: "PYRAL R", tag: "Caisson F400 CE — 0370-CPR-2292", ref: "Classe F400 / 4 ou 2 pôles", desc: "Caisson en panneaux autoporteurs en acier galvanisé avec panneaux latéraux démontables (4 vis sur tour) pour l'accès au moteur ventilateur. Bac de dégraissage avec purge en partie basse.", img: pyralR },
            { id: "alvyral", name: "ALVYRAL", tag: "Caisson F400 CE — 0370-CPR-2281", ref: "Classe F400 / V90 ou H90", desc: "Débits 200 à 19 000 m³/h pour des pressions 50 à 1 100 Pa. Avec installation possible en position verticale ou horizontale. Enveloppe en acier galvanisé, simple paroi (double paroi en option) avec trappe d'accès.", img: alvyral },
          ].map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-3xl border border-border bg-white shadow-soft overflow-hidden flex flex-col hover:shadow-lifted hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[5/4] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 relative">
                <img src={p.img} alt={p.name} className="max-w-full max-h-full object-contain" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase">
                  F400
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red mb-1">{p.tag}</div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-1">{p.name}</h3>
                <div className="text-xs text-brand-bluedark font-semibold mb-3">{p.ref}</div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <ProductCardAdd
                  id={`tour-${p.id}`}
                  category="Désenfumage F400"
                  productRef={p.name}
                  label={`${p.name} — ${p.tag}`}
                  prix={null}
                  quote={quote}
                />
              </div>
            </motion.div>
          ))}

          {/* Bureau d'études card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="rounded-3xl border-2 border-brand-blue bg-gradient-to-br from-brand-blue/5 to-brand-sky/5 shadow-soft overflow-hidden flex flex-col"
          >
            <div className="aspect-[5/4] bg-gradient-to-br from-brand-blue/10 to-brand-sky/10 flex items-center justify-center p-8">
              <ShieldCheck className="w-24 h-24 text-brand-blue/60" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red mb-1">Désenfumage ERP</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Bureau d'études</h3>
              <div className="text-xs text-brand-bluedark font-semibold mb-3">Conformité réglementaire</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Notre bureau d'études vous accompagne pour le dimensionnement, la conformité IT 246/263 et le choix de la tourelle ou du caisson F400 le plus adapté à votre établissement (cuisine collective, parking, sous-sol).
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CHARBON */}
      <Section
        id="charbon"
        eyebrow="06 — Traitement des odeurs"
        title="Caissons à charbon actif ALVICARB"
        subtitle="Quatre niveaux de filtration pour neutraliser les odeurs de cuisine en sortie d'extraction : filtre synthétique G4 + filtre haute efficacité F7 + cartouche charbon actif rechargeable Ø160 / 400 mm."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { ref: "AD", id: "alvicarb-ad", name: "ALVICARB AD", tag: "Charbon actif dynamique — débit limité 4 200 m³/h", desc: "Caisson compact à charbon actif dynamique. Trois niveaux de filtration : G4 + F7 + cartouche charbon actif. Boîte de raccordement plate-bande sur cadre. Moteur à turbine extérieure fixé sur arbre monté sur silent blocs. Alimentation monophasée 230V, 50Hz.", img: alvicarbAd, highlight: true },
            { ref: "S", id: "alvicarb-s", name: "ALVICARB S", tag: "Charbon actif — débit limité 2 500 m³/h", desc: "Trappe d'accès en façade pour accès aux trois niveaux de filtration. Filtre synthétique G4 + filtre haute efficacité F7 + cartouche charbon actif rechargeable. Servitude droite ou gauche, sur demande.", img: alvicarbS },
            { ref: "AS", id: "alvicarb-as", name: "ALVICARB AS", tag: "Charbon actif — débit limité 8 400 m³/h", desc: "Enveloppe acier galvanisé avec cadre de raccordement percé et trappe de visite latérale (servitude droite ou gauche). Trois niveaux de filtration : G4 + F7 + cartouche charbon actif Ø160/400 mm.", img: alvicarbAs },
            { ref: "AT", id: "alvicarb-at", name: "ALVICARB AT", tag: "Charbon actif — débit limité 4 200 m³/h", desc: "Filtration en trois niveaux : G4, F7 et cartouche charbon. Turbine double ouïe en acier galvanisé. Moteur IP55, classe F, PTO, triphasé 230/400V, IE3 (>0,75 kW). Cartouches Ø160/400 mm rechargeables.", img: alvicarbAt },
          ].map((c, i) => (
            <motion.div
              key={c.ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl border bg-white shadow-soft overflow-hidden flex md:flex-row flex-col hover:shadow-lifted hover:-translate-y-1 transition-all ${
                c.highlight ? "border-2 border-brand-blue" : "border-border"
              }`}
            >
              <div className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
                <img src={c.img} alt={c.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col">
                <div className="text-[10px] uppercase tracking-wider font-bold text-brand-red mb-1">{c.tag}</div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <ProductCardAdd
                  id={`charbon-${c.id}`}
                  category="Charbon actif ALVICARB"
                  productRef={c.name}
                  label={`${c.name} — ${c.tag}`}
                  prix={null}
                  quote={quote}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-brand-bluedark to-brand-blue text-white p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-widest font-bold opacity-80 mb-2">Conformité</div>
              <h3 className="text-2xl font-extrabold mb-3">Pourquoi installer un caisson charbon actif ?</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Obligation réglementaire (article 64 du règlement sanitaire départemental) pour neutraliser les odeurs en sortie d'extraction de cuisine professionnelle. Les filtres se changent en quelques minutes — débit limité jusqu'à 8 400 m³/h selon le modèle.
              </p>
            </div>
            <button
              onClick={() => quote.setOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand-blue font-bold hover:bg-accent transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Voir mon devis
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Section>

      {/* POURQUOI */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-brand-bluedark text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              Notre valeur ajoutée
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mb-3">
              Pourquoi passer par eco cvc ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Distributeur officiel Ventilex France, nous sommes votre interlocuteur unique de la sélection à la mise en service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Award, title: "Bureau d'études interne", desc: "Dimensionnement précis : débits, pressions, IT 246/263, conformité ERP." },
              { icon: Wrench, title: "Pose et raccordement", desc: "Notre équipe frigoriste / électricien intervient en Rhône-Alpes." },
              { icon: ShieldCheck, title: "Garantie constructeur", desc: "Pièces 2 ans, main-d'œuvre 1 an. SAV pris en charge par eco cvc." },
              { icon: Truck, title: "Livraison France entière", desc: "Stock central — livraison sous 5 à 10 jours ouvrés (selon modèle)." },
              { icon: Package, title: "Pièces détachées", desc: "Filtres G4 / F7, charbon actif, viroles, supports — disponibles toute l'année." },
              { icon: Phone, title: "Support technique", desc: "Hotline dédiée pour vos installateurs. Plans CAD sur demande." },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-border p-6 shadow-soft hover:shadow-lifted transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-bluedark flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-brand-bluedark text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              Notre process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mb-3">
              De l'étude à la mise en route, en 4 étapes
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              { n: "01", title: "Étude & dimensionnement", desc: "Visite technique sur site, calcul des débits et pressions, recommandation matériel." },
              { n: "02", title: "Devis détaillé", desc: "Devis transparent : matériel Ventilex au prix catalogue + pose + accessoires." },
              { n: "03", title: "Pose & raccordement", desc: "Installation par notre équipe certifiée, raccordement électrique et test." },
              { n: "04", title: "Mise en service & SAV", desc: "Mise en route, formation client, contrat d'entretien optionnel (filtres + charbon)." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-border bg-white p-6 shadow-soft relative overflow-hidden"
              >
                <div className="text-[60px] font-extrabold leading-none text-brand-blue/10 absolute top-4 right-4 select-none">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bluedark via-brand-blue to-brand-sky" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight mb-5">
              Un projet de cuisine professionnelle ou un caisson F400 à dimensionner ?
            </h2>
            <p className="text-lg opacity-90 leading-relaxed mb-10">
              Utilisez le calculateur, ajoutez vos références au devis, envoyez-nous votre demande — réponse sous 24 h.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => quote.setOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-bluedark font-bold hover:bg-slate-100 transition-colors shadow-lifted"
              >
                <ShoppingCart className="w-4 h-4" />
                Voir mon devis ({quote.count})
              </button>
              <a
                href="tel:+33758459900"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/70 text-white font-bold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                07 58 45 99 00
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <FloatingCartButton quote={quote} />
      <QuoteDrawer quote={quote} />
    </div>
  );
};

export default Ventilation;
