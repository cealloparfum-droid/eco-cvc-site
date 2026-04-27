import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wind,
  Snowflake,
  ArrowRight,
  Phone,
  Sparkles,
  ShieldCheck,
  Truck,
  Wrench,
  Award,
  Tag,
  Search,
  X,
  CheckCircle2,
  Filter,
  Package,
  Cpu,
  Layers,
  Home,
  Building2,
  Cable,
  Plug,
  Settings,
  Wifi,
  ThermometerSun,
  Plus,
  Check,
} from "lucide-react";
import { useDevisList, usePersistentState } from "@/hooks/use-devis-list";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import TestimonialStrip from "@/components/TestimonialStrip";

import { PRODUCTS, type Product, type ProductCategory } from "@/data/products";

import heroBoutique from "@/assets/boutique/hero-boutique-clim.jpg";
import poseMural from "@/assets/boutique/pose-mural-interieur.jpg";
import poseGainable from "@/assets/boutique/pose-gainable-faux-plafond.jpg";

// ────────────────────────────────────────────────────────────
// Métadonnées catégories
// ────────────────────────────────────────────────────────────

const categoryMeta: Record<ProductCategory, {
  label: string;
  short: string;
  icon: typeof Wind;
  description: string;
  gradient: string;
}> = {
  "mural": {
    label: "Climatisation murale",
    short: "Mural",
    icon: Home,
    description: "Split mural intérieur — la solution la plus répandue. Discrète et performante.",
    gradient: "from-sky-500 to-blue-600",
  },
  "monosplit": {
    label: "Monosplit haut de gamme",
    short: "Monosplit premium",
    icon: ThermometerSun,
    description: "Pack complet 1 unité intérieure + 1 groupe extérieur — finitions design.",
    gradient: "from-blue-600 to-indigo-700",
  },
  "multisplit-bi": {
    label: "Bi-split (2 pièces)",
    short: "Bi-split",
    icon: Layers,
    description: "1 groupe extérieur + 2 unités intérieures pour 2 pièces indépendantes.",
    gradient: "from-cyan-500 to-blue-600",
  },
  "multisplit-tri": {
    label: "Tri-split (3 pièces)",
    short: "Tri-split",
    icon: Layers,
    description: "1 groupe + 3 unités intérieures — appartement T3 ou maison étage.",
    gradient: "from-cyan-600 to-blue-700",
  },
  "multisplit-quadri": {
    label: "Quadri-split (4 pièces)",
    short: "Quadri-split",
    icon: Layers,
    description: "1 groupe + 4 unités intérieures — appartement T4 ou maison familiale.",
    gradient: "from-blue-700 to-indigo-800",
  },
  "console": {
    label: "Climatisation console",
    short: "Console",
    icon: Building2,
    description: "Unité intérieure au sol — alternative moderne au radiateur, design plat.",
    gradient: "from-indigo-600 to-purple-700",
  },
  "gainable": {
    label: "Climatisation gainable",
    short: "Gainable",
    icon: Wind,
    description: "Unité encastrée dans le faux-plafond — distribue l'air par gaines, invisible.",
    gradient: "from-slate-700 to-slate-900",
  },
};

const brandColor: Record<string, string> = {
  "Daikin": "bg-[#003c7d] text-white",
  "Mitsubishi Electric": "bg-[#e60012] text-white",
  "Toshiba": "bg-[#ff0000] text-white",
  "Panasonic": "bg-[#0058a3] text-white",
  "Gree": "bg-[#16a34a] text-white",
  "Atlantic": "bg-orange-600 text-white",
};

// ────────────────────────────────────────────────────────────
// Accessoires (catalogue interne — ce sont des estimations marché courantes)
// ────────────────────────────────────────────────────────────

interface Accessoire {
  name: string;
  description: string;
  price: number;
  icon: typeof Cable;
}

const accessoires: Accessoire[] = [
  {
    name: "Support mural acier galvanisé (charge 100 kg)",
    description: "Console murale anti-vibration pour groupe extérieur jusqu'à 100 kg. Quincaillerie inox.",
    price: 49.90,
    icon: Wrench,
  },
  {
    name: "Console sol béton renforcée",
    description: "Pose au sol stabilisée pour groupe extérieur > 80 kg. Pieds anti-vibration.",
    price: 79.00,
    icon: Wrench,
  },
  {
    name: "Pompe de relevage condensats Aspen Mini Orange",
    description: "Pompe silencieuse 21 dBA, débit 12 L/h, hauteur 10 m. Standard du marché.",
    price: 89.00,
    icon: Plug,
  },
  {
    name: "Liaison frigorifique pré-isolée 1/4 + 3/8 (4 m)",
    description: "Cuivre frigorifique recuit avec isolation 9 mm et raccords flare. Longueurs sur mesure.",
    price: 65.00,
    icon: Cable,
  },
  {
    name: "Liaison frigorifique pré-isolée 1/4 + 3/8 (8 m)",
    description: "Pour distance groupe / unité intérieure étendue. Cuivre Cu-DHP qualité frigo.",
    price: 119.00,
    icon: Cable,
  },
  {
    name: "Goulotte décorative blanche 80×60 mm (2 m)",
    description: "PVC alimentaire blanc pour habiller la liaison frigo extérieure ou intérieure.",
    price: 35.00,
    icon: Layers,
  },
  {
    name: "Kit clé USB Wi-Fi BRP069B43 (Daikin)",
    description: "Adaptateur Wi-Fi pour pilotage Daikin Onecta depuis smartphone. Compatible toutes gammes.",
    price: 159.00,
    icon: Wifi,
  },
  {
    name: "Télécommande filaire fil pilote multifonctions",
    description: "Pour gainables et cassettes — programmation hebdomadaire, sondes externes.",
    price: 119.00,
    icon: Settings,
  },
  {
    name: "Filtres HEPA + charbon actif (jeu de 2)",
    description: "Filtration anti-pollen, anti-COV, anti-bactérienne. Compatible Daikin / Mitsubishi.",
    price: 45.00,
    icon: Sparkles,
  },
];

// ────────────────────────────────────────────────────────────
// Sélection produits coup de cœur (manuellement pour la mise en avant)
// ────────────────────────────────────────────────────────────

const formatEur = (v: number) =>
  v.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

// ────────────────────────────────────────────────────────────
// Composants
// ────────────────────────────────────────────────────────────

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const meta = categoryMeta[product.category];
  const Icon = meta.icon;
  const discount = product.priceOld
    ? Math.round(((product.priceOld - product.price) / product.priceOld) * 100)
    : 0;
  const { has, toggle } = useDevisList();
  const ref = `${product.brand}-${product.gamme}-${product.name}`.replace(/\s+/g, "_").toLowerCase();
  const inDevis = has(ref);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.4) }}
      className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lifted hover:border-brand-blue/40 transition-all flex flex-col"
    >
      {/* Brand band */}
      <div className={`h-2 ${brandColor[product.brand] || "bg-slate-700"}`} />

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3 gap-3">
          <div className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${brandColor[product.brand] || "bg-slate-700 text-white"}`}>
            {product.brand}
          </div>
          {discount > 0 && (
            <div className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-red text-white shadow-soft">
              −{discount}%
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mb-2 text-[10px] font-bold tracking-widest uppercase text-brand-bluedark">
          <Icon className="w-3.5 h-3.5" />
          {meta.short}
          {product.gamme && (
            <>
              <span className="text-muted-foreground">·</span>
              <span className="text-brand-blue">{product.gamme}</span>
            </>
          )}
        </div>

        <h3 className="text-sm font-extrabold text-slate-900 leading-tight mb-3 line-clamp-3">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="px-2.5 py-1 rounded-md bg-accent text-brand-bluedark text-xs font-bold flex items-center gap-1">
            <Snowflake className="w-3 h-3" />
            {product.kw} kW
          </div>
          <div className="text-xs text-muted-foreground">≈ {Math.round(product.kw * 11)} m²</div>
        </div>

        <div className="mt-auto pt-3 border-t border-border">
          <div className="flex items-baseline gap-2 mb-3">
            <div className="text-xl font-extrabold text-slate-900">{formatEur(product.price)}</div>
            {product.priceOld && (
              <div className="text-xs text-muted-foreground line-through">{formatEur(product.priceOld)}</div>
            )}
          </div>
          <div className="text-[11px] text-muted-foreground mb-3">TTC · livré · pose en option</div>
          <button
            type="button"
            onClick={() =>
              toggle({
                ref,
                name: product.name,
                brand: product.brand,
                price: product.price,
                kw: product.kw,
                category: product.category,
              })
            }
            className={`group inline-flex w-full items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-colors ${
              inDevis
                ? "bg-brand-green text-white hover:bg-emerald-600"
                : "bg-brand-blue text-white hover:bg-brand-bluedark"
            }`}
            aria-pressed={inDevis}
          >
            {inDevis ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Dans mon devis
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                Ajouter au devis
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ────────────────────────────────────────────────────────────
// Page Boutique
// ────────────────────────────────────────────────────────────

const Boutique = () => {
  const [activeCategory, setActiveCategory] = usePersistentState<ProductCategory | "all">("ecocvc-boutique-cat", "all");
  const [activeBrand, setActiveBrand] = usePersistentState<string | "all">("ecocvc-boutique-brand", "all");
  const [search, setSearch] = usePersistentState<string>("ecocvc-boutique-search", "");
  const [sortBy, setSortBy] = usePersistentState<"price-asc" | "price-desc" | "kw-asc" | "kw-desc">("ecocvc-boutique-sort", "price-asc");
  const [showFilters, setShowFilters] = useState(false);

  const brands = useMemo(() => Array.from(new Set(PRODUCTS.map((p) => p.brand))).sort(), []);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (activeCategory !== "all") list = list.filter((p) => p.category === activeCategory);
    if (activeBrand !== "all") list = list.filter((p) => p.brand === activeBrand);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.gamme.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "kw-asc": list.sort((a, b) => a.kw - b.kw); break;
      case "kw-desc": list.sort((a, b) => b.kw - a.kw); break;
    }
    return list;
  }, [activeCategory, activeBrand, search, sortBy]);

  const minPrice = useMemo(() => Math.min(...PRODUCTS.map((p) => p.price)), []);
  const maxPrice = useMemo(() => Math.max(...PRODUCTS.map((p) => p.price)), []);

  // Featured selections per category
  const featuredMonosplit = PRODUCTS
    .filter((p) => p.category === "mural" || p.category === "monosplit")
    .sort((a, b) => a.price - b.price)
    .slice(0, 4);

  const featuredGainable = PRODUCTS
    .filter((p) => p.category === "gainable")
    .sort((a, b) => a.price - b.price)
    .slice(0, 4);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Boutique en ligne · climatisation & gainable"
          title={
            <>
              <span className="text-gradient-brand">Climatisation Daikin, Mitsubishi, Toshiba, Panasonic</span> · pose comprise
            </>
          }
          subtitle="Notre boutique sélectionne plus de 60 références premium — climatiseurs muraux, monosplit, multi-split (bi/tri/quadri), consoles et gainables. Tarifs négociés, livraison gratuite, et installation par nos frigoristes certifiés F-Gaz catégorie 1 partout en Rhône-Alpes."
          breadcrumb={[{ label: "Boutique" }]}
          heroImage={{
            src: heroBoutique,
            alt: "Technicien eco cvc en pose de climatisation murale Daikin — boutique en ligne avec installation comprise",
            caption: "Pose certifiée · Garantie 5 ans",
            badge: "Fournisseur officiel Daikin · Mitsubishi · Toshiba",
          }}
        />

        {/* Promise band */}
        <section className="py-10 border-b border-border bg-slate-50/40">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Truck, title: "Livraison sous 5j", sub: "Gratuite Rhône-Alpes" },
                { icon: Wrench, title: "Pose en option", sub: "Par eco cvc · F-Gaz cat.1" },
                { icon: ShieldCheck, title: "Garantie 5 ans", sub: "Compresseur fabricant" },
                { icon: Tag, title: "Prix négocié", sub: "Jusqu'à −50 % sur PVC" },
              ].map((p) => (
                <div key={p.title} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm leading-tight">{p.title}</div>
                    <div className="text-xs text-muted-foreground">{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand strip */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Nos marques distribuées"
              title={
                <>
                  Cinq fabricants <span className="text-gradient-brand">au top de la qualité</span>.
                </>
              }
              subtitle="Nous distribuons les leaders mondiaux de la climatisation : Daikin (Japon), Mitsubishi Electric (Japon), Toshiba (Japon), Panasonic (Japon) et Gree (Chine, n°1 mondial en volume). Tous les modèles sont en R32 (PRG faible) et conformes ErP 2025."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
              {brands.map((b, i) => {
                const count = PRODUCTS.filter((p) => p.brand === b).length;
                return (
                  <motion.button
                    key={b}
                    type="button"
                    onClick={() => {
                      setActiveBrand(b);
                      setActiveCategory("all");
                      document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.04 }}
                    className={`rounded-2xl border-2 border-border p-6 text-center hover:shadow-lifted hover:border-brand-blue/60 transition-all ${
                      activeBrand === b ? "border-brand-blue bg-accent/30" : "bg-white"
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-extrabold tracking-widest uppercase mb-2 ${brandColor[b] || "bg-slate-700 text-white"}`}>
                      {b}
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900">{count}</div>
                    <div className="text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5">références</div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured: Climatisation murale / monosplit */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.4fr] gap-10 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden border border-border shadow-lifted aspect-[4/3]"
              >
                <img
                  src={poseMural}
                  alt="Pose d'une climatisation murale split intérieur par technicien eco cvc — installation Daikin Perfera salon"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lifted">
                    Climatisation murale
                  </div>
                  <p className="text-sm text-white/90">À partir de 620 € TTC livré (Daikin Sensira 2.0 kW).</p>
                </div>
              </motion.div>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Section vedette · murales & monosplits"
                  title={<>Le standard <span className="text-gradient-brand">de la climatisation</span> résidentielle.</>}
                  subtitle="L'unité murale split reste la solution la plus économique et la plus rapide à poser. Daikin Sensira (entrée de gamme) à Perfera et Emura (haut de gamme design) — toutes nos références sont garanties 5 ans compresseur."
                />
                <div className="grid sm:grid-cols-2 gap-3 mt-8">
                  {[
                    { icon: CheckCircle2, label: "Pose en 1 journée" },
                    { icon: CheckCircle2, label: "Wi-Fi inclus (pilotage smartphone)" },
                    { icon: CheckCircle2, label: "Mode chauffage réversible" },
                    { icon: CheckCircle2, label: "Niveau sonore 19 dB" },
                  ].map((u) => (
                    <div key={u.label} className="flex items-center gap-2 text-sm text-foreground/85">
                      <u.icon className="w-4 h-4 text-brand-blue shrink-0" />
                      {u.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredMonosplit.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured: Gainable */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 items-center mb-12">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Section vedette · climatisation gainable"
                  title={<>L'invisible : <span className="text-gradient-brand">tout passe par le faux-plafond</span>.</>}
                  subtitle="Le gainable distribue l'air conditionné dans plusieurs pièces via un réseau de gaines isolées dans les combles ou faux-plafonds. Aucune unité intérieure visible — uniquement des grilles discrètes. Idéal pour maisons, lofts et bureaux. Daikin SkyAir : Active (entrée), Advance (milieu), Alpha (top)."
                />
                <div className="grid sm:grid-cols-2 gap-3 mt-8">
                  {[
                    { icon: CheckCircle2, label: "Aucune unité visible" },
                    { icon: CheckCircle2, label: "1 groupe → plusieurs pièces" },
                    { icon: CheckCircle2, label: "Filtration F7 en option" },
                    { icon: CheckCircle2, label: "Mono ou triphasé selon puissance" },
                  ].map((u) => (
                    <div key={u.label} className="flex items-center gap-2 text-sm text-foreground/85">
                      <u.icon className="w-4 h-4 text-brand-blue shrink-0" />
                      {u.label}
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden border border-border shadow-lifted aspect-[4/3]"
              >
                <img
                  src={poseGainable}
                  alt="Installation d'un climatiseur gainable Daikin SkyAir dans un faux-plafond — pose technique eco cvc"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lifted">
                    Climatisation gainable
                  </div>
                  <p className="text-sm text-white/90">Daikin SkyAir Active à Alpha · 9 → 14 kW · monophasé ou triphasé.</p>
                </div>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredGainable.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Catalogue complet avec filtres */}
        <section id="catalogue" className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Catalogue complet"
              title={
                <>
                  {PRODUCTS.length} références <span className="text-gradient-brand">en stock négocié</span>.
                </>
              }
              subtitle={`Filtrez par catégorie, marque, puissance ou prix. Tarifs TTC livraison incluse — la pose par eco cvc fait l'objet d'un devis dédié à partir de 690 € HT.`}
            />

            {/* Filters */}
            <div className="mt-12 mb-8 bg-white rounded-3xl border border-border p-5 md:p-7 shadow-soft">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-5">
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-extrabold text-slate-900">Filtres</h3>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Rechercher : Daikin, gainable, 5 kW…"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-9 pr-9 py-2.5 rounded-xl border border-border bg-white text-sm w-64 focus:outline-none focus:border-brand-blue"
                    />
                    {search && (
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="px-3 py-2.5 rounded-xl border border-border bg-white text-sm font-semibold focus:outline-none focus:border-brand-blue"
                  >
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                    <option value="kw-asc">Puissance croissante</option>
                    <option value="kw-desc">Puissance décroissante</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:hidden px-4 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-bold"
                  >
                    {showFilters ? "Masquer" : "Filtres"}
                  </button>
                </div>
              </div>

              <div className={`${showFilters ? "block" : "hidden"} md:block`}>
                <div className="mb-4">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">Catégorie</div>
                  <div className="flex flex-wrap gap-2">
                    <FilterChip active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
                      Toutes ({PRODUCTS.length})
                    </FilterChip>
                    {(Object.keys(categoryMeta) as ProductCategory[]).map((cat) => {
                      const count = PRODUCTS.filter((p) => p.category === cat).length;
                      if (count === 0) return null;
                      return (
                        <FilterChip
                          key={cat}
                          active={activeCategory === cat}
                          onClick={() => setActiveCategory(cat)}
                        >
                          {categoryMeta[cat].short} ({count})
                        </FilterChip>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">Marque</div>
                  <div className="flex flex-wrap gap-2">
                    <FilterChip active={activeBrand === "all"} onClick={() => setActiveBrand("all")}>
                      Toutes
                    </FilterChip>
                    {brands.map((b) => (
                      <FilterChip key={b} active={activeBrand === b} onClick={() => setActiveBrand(b)}>
                        {b}
                      </FilterChip>
                    ))}
                  </div>
                </div>

                {(activeCategory !== "all" || activeBrand !== "all" || search) && (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("all");
                      setActiveBrand("all");
                      setSearch("");
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-brand-bluedark transition-colors"
                  >
                    <X className="w-3.5 h-3.5" /> Réinitialiser les filtres
                  </button>
                )}
              </div>
            </div>

            {/* Result count */}
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                <strong className="text-slate-900">{filtered.length}</strong> référence{filtered.length > 1 ? "s" : ""} affichée{filtered.length > 1 ? "s" : ""}
                {(activeCategory !== "all" || activeBrand !== "all" || search) && ` (filtrée${filtered.length > 1 ? "s" : ""})`}
              </div>
              <div className="text-xs text-muted-foreground hidden md:block">
                De {formatEur(minPrice)} à {formatEur(maxPrice)} TTC
              </div>
            </div>

            {/* Product grid */}
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div
                  layout
                  className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                >
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 bg-white rounded-3xl border border-border"
                >
                  <div className="inline-flex w-16 h-16 rounded-2xl bg-accent items-center justify-center mb-4">
                    <Search className="w-7 h-7 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">Aucun résultat</h3>
                  <p className="text-sm text-muted-foreground mb-6">Essayez d'élargir vos critères ou contactez-nous.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("all");
                      setActiveBrand("all");
                      setSearch("");
                    }}
                    className="px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-bold hover:bg-brand-bluedark transition-colors"
                  >
                    Réinitialiser
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Pourquoi acheter chez eco cvc plutôt que sur un site sec */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Pourquoi acheter chez eco cvc"
              title={
                <>
                  Le matériel <span className="text-gradient-brand">+ la pose certifiée</span>, sous une seule responsabilité.
                </>
              }
              subtitle="Acheter en ligne sans pose, c'est prendre le risque d'un matériel mal calibré, mal posé ou non éligible aux aides. eco cvc vous fournit ET pose votre climatisation, et reste le seul interlocuteur sur la garantie pendant 5 ans."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {[
                {
                  icon: Award,
                  title: "Certifications obligatoires",
                  desc: "Attestation F-Gaz catégorie 1 (sans limite de charge), QualiPAC, RGE — exigées par la loi pour toute manipulation de fluide frigorigène.",
                },
                {
                  icon: ShieldCheck,
                  title: "Garantie pleine et entière",
                  desc: "Sur un site sec, c'est à VOUS de gérer SAV, transports retour et expertises. Avec eco cvc, on s'occupe de tout.",
                },
                {
                  icon: Wrench,
                  title: "Bilan thermique gratuit",
                  desc: "Avant d'acheter, on vient mesurer chez vous : surface, isolation, exposition. Le bon dimensionnement évite la sous- ou sur-puissance.",
                },
                {
                  icon: Tag,
                  title: "Aides financières",
                  desc: "MaPrimeRénov', CEE, TVA réduite à 5,5 % — uniquement éligibles si l'installation est réalisée par un pro RGE.",
                },
                {
                  icon: Cpu,
                  title: "Mise en service connectée",
                  desc: "Configuration Wi-Fi (Daikin Onecta, MELCloud, Toshiba Home AC), mode silence, programmation hebdomadaire et formation à l'application.",
                },
                {
                  icon: Package,
                  title: "Stock négocié français",
                  desc: "Nous travaillons directement avec les distributeurs officiels Daikin, Mitsubishi, Toshiba — pas d'import gris ou parallèle, garantie pleine.",
                },
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

        {/* Accessoires */}
        <section className="py-14 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Accessoires & pièces détachées"
              title={
                <>
                  Tout pour <span className="text-gradient-brand">finir l'installation</span>.
                </>
              }
              subtitle="Supports muraux, pompes de relevage, liaisons frigorifiques pré-isolées, goulottes décoratives, télécommandes filaires, kits Wi-Fi et filtres : nos accessoires sont sélectionnés pour leur qualité éprouvée et leur compatibilité avec toutes les marques."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {accessoires.map((a, i) => (
                <AccessoireCard key={a.name} a={a} index={i} />
              ))}
            </div>

            <div className="mt-10 bg-white rounded-2xl border border-border p-6 md:p-7 grid md:grid-cols-[auto,1fr,auto] gap-6 items-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 mb-1">Pack pose complète eco cvc</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tous les accessoires nécessaires à votre installation sont inclus dans nos packs de pose : <strong className="text-foreground">support, liaisons frigo, goulottes, vide d'air, mise en service</strong>. À partir de 690 € HT pour un mural, 1 290 € HT pour un bi-split.
                </p>
              </div>
              <Link
                to="/installation"
                className="hidden md:inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600 text-white text-sm font-bold hover:bg-amber-700 transition-colors"
              >
                Détail pose
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Process commande */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Processus en 4 étapes"
              title={<>De la commande <span className="text-gradient-brand">à la mise en service</span>.</>}
            />
            <div className="grid md:grid-cols-4 gap-5 mt-14">
              {[
                { num: "01", title: "Sélection sur le catalogue", desc: "Vous parcourez nos 60+ références climatisation et gainable, ajoutez les accessoires." },
                { num: "02", title: "Visite technique gratuite", desc: "Un de nos techniciens passe chez vous valider le dimensionnement et l'implantation." },
                { num: "03", title: "Devis ferme + commande", desc: "Devis sous 48h matériel + pose. Acompte 30 % à la commande, solde à la mise en service." },
                { num: "04", title: "Pose & mise en service", desc: "Livraison + installation en 1 à 2 jours. Configuration Wi-Fi, formation et garantie 5 ans." },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-border p-6 relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-bluedark flex items-center justify-center text-white font-extrabold text-sm shadow-lifted">
                    {step.num}
                  </div>
                  <div className="font-extrabold text-slate-900 mb-2 mt-4">{step.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{step.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialStrip
          context="boutique"
          title="Acheteurs ravis, climatisations qui durent"
          className="bg-slate-50/60 border-y border-border"
        />

        <CTABand variant="boutique" />
        <Footer />
      </div>
    </PageTransition>
  );
};

// ────────────────────────────────────────────────────────────
// Sub-components
// ────────────────────────────────────────────────────────────

const FilterChip = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full border-2 text-xs font-bold transition-all ${
      active
        ? "bg-brand-blue border-brand-blue text-white shadow-soft"
        : "bg-white border-border text-foreground hover:border-brand-blue/40 hover:text-brand-blue"
    }`}
  >
    {children}
  </button>
);

// ────────────────────────────────────────────────────────────
// Accessoire card — toggle ajout au devis
// ────────────────────────────────────────────────────────────

interface Accessoire {
  name: string;
  description: string;
  price: number;
  icon: typeof Wind;
}

const AccessoireCard = ({ a, index }: { a: Accessoire; index: number }) => {
  const { has, toggle } = useDevisList();
  const ref = `accessoire-${a.name}`.replace(/\s+/g, "_").toLowerCase();
  const inDevis = has(ref);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-border p-6 hover:shadow-lifted hover:border-brand-blue/40 transition-all flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
          <a.icon className="w-5 h-5 text-brand-blue" />
        </div>
        <div className="text-lg font-extrabold text-slate-900">{formatEur(a.price)}</div>
      </div>
      <h3 className="font-extrabold text-slate-900 mb-2 leading-tight text-sm">{a.name}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{a.description}</p>
      <button
        type="button"
        onClick={() => toggle({ ref, name: a.name, price: a.price, brand: "Accessoire" })}
        className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-colors ${
          inDevis
            ? "bg-brand-green text-white hover:bg-emerald-600"
            : "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white"
        }`}
        aria-pressed={inDevis}
      >
        {inDevis ? (
          <>
            <Check className="w-3.5 h-3.5" />
            Dans mon devis
          </>
        ) : (
          <>
            <Plus className="w-3.5 h-3.5" />
            Ajouter au devis
          </>
        )}
      </button>
    </motion.div>
  );
};

export default Boutique;
