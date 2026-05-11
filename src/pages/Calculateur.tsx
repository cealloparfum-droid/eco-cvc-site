import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  Ruler,
  Building,
  Sun,
  Layers,
  Users,
  Thermometer,
  ArrowRight,
  Phone,
  Sparkles,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import LeadCaptureCard from "@/components/LeadCaptureCard";
import jSeries from "@/assets/catalog/j-series-cozy.jpg";
import cSeries from "@/assets/catalog/c-series-living.jpg";
import qSeries from "@/assets/catalog/q-series-quiet.jpg";

type Insulation = "bonne" | "standard" | "mauvaise";
type Exposition = "nord" | "variable" | "sud";
type Etage = "rdc" | "intermediaire" | "dernier";
type Piece = "salon" | "chambre" | "bureau" | "cuisine";

interface Recommendation {
  name: string;
  power: string;
  btu: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

const insulationCoef: Record<Insulation, number> = {
  bonne: 30,
  standard: 40,
  mauvaise: 55,
};

const expositionCoef: Record<Exposition, number> = {
  nord: 1.0,
  variable: 1.05,
  sud: 1.12,
};

const etageCoef: Record<Etage, number> = {
  rdc: 1.0,
  intermediaire: 1.0,
  dernier: 1.1,
};

const pieceCoef: Record<Piece, number> = {
  salon: 1.0,
  chambre: 0.9,
  bureau: 0.95,
  cuisine: 1.15,
};

const computeRecommendation = (kw: number): Recommendation => {
  if (kw <= 2.5) {
    return {
      name: "AUX J-Smart 2,5 kW",
      power: "2,5 kW",
      btu: "9 000 BTU/h",
      description: "Idéal pour les petites pièces (10 à 22 m²) : chambre, bureau, dressing.",
      price: "à partir de 890 €",
      image: jSeries,
    };
  }
  if (kw <= 3.7) {
    return {
      name: "AUX J-Smart 3,5 kW",
      power: "3,5 kW",
      btu: "12 000 BTU/h",
      description: "Le best-seller pour le séjour standard (jusqu'à 35 m²). DC Inverter R32, ultra-silencieux.",
      price: "à partir de 990 € TTC posé",
      image: jSeries,
      badge: "Promo eco cvc",
    };
  }
  if (kw <= 5.5) {
    return {
      name: "AUX C-Series 5,0 kW",
      power: "5,0 kW",
      btu: "18 000 BTU/h",
      description: "Recommandé pour les grands séjours et open-spaces (35 à 55 m²).",
      price: "à partir de 1 690 € TTC posé",
      image: cSeries,
    };
  }
  if (kw <= 7.5) {
    return {
      name: "AUX C-Series 7,0 kW",
      power: "7,0 kW",
      btu: "24 000 BTU/h",
      description: "Pour les volumes importants ou les pièces très exposées (50 à 75 m²).",
      price: "à partir de 2 290 € TTC posé",
      image: cSeries,
    };
  }
  return {
    name: "Multi-split AUX Free-Match",
    power: `${kw.toFixed(1)} kW`,
    btu: `${Math.round(kw * 3412)} BTU/h`,
    description: "Pour vos volumes ou plusieurs pièces : nous vous recommandons un système multi-split. 1 groupe extérieur + 2 à 5 unités intérieures.",
    price: "Devis personnalisé",
    image: qSeries,
    badge: "Multi-split",
  };
};

const Calculateur = () => {
  const [surface, setSurface] = useState(35);
  const [hauteur, setHauteur] = useState(2.5);
  const [piece, setPiece] = useState<Piece>("salon");
  const [insulation, setInsulation] = useState<Insulation>("standard");
  const [exposition, setExposition] = useState<Exposition>("variable");
  const [etage, setEtage] = useState<Etage>("intermediaire");
  const [occupants, setOccupants] = useState(2);

  const result = useMemo(() => {
    const volume = surface * hauteur;
    const baseW = volume * insulationCoef[insulation];
    const occupantsBonus = Math.max(0, occupants - 2) * 100;
    const totalW =
      (baseW + occupantsBonus) *
      expositionCoef[exposition] *
      etageCoef[etage] *
      pieceCoef[piece];

    const kw = Math.ceil(totalW / 100) / 10;
    const btu = Math.round(kw * 3412);
    const reco = computeRecommendation(kw);

    return { kw, btu, reco };
  }, [surface, hauteur, piece, insulation, exposition, etage, occupants]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Calculateur de puissance"
          title={
            <>
              Quelle <span className="text-gradient-brand">puissance</span> pour votre climatisation ?
            </>
          }
          subtitle="Surface, isolation, exposition, étage… Notre outil estime en temps réel la puissance frigorifique nécessaire et vous oriente vers la gamme AUX la plus adaptée. Le devis définitif est confirmé après visite technique gratuite."
          breadcrumb={[{ label: "Calculateur" }]}
        />

        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8 lg:gap-12">
              {/* Form */}
              <div className="bg-white rounded-3xl border border-border shadow-soft p-6 md:p-9">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">Vos paramètres</h2>
                    <p className="text-sm text-muted-foreground">Estimation en temps réel — sans engagement</p>
                  </div>
                </div>

                {/* Surface */}
                <Field
                  icon={Ruler}
                  label="Surface de la pièce"
                  hint={`${surface} m²`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={5}
                      max={150}
                      step={1}
                      value={surface}
                      onChange={(e) => setSurface(Number(e.target.value))}
                      className="flex-1 accent-brand-blue h-2"
                    />
                    <input
                      type="number"
                      min={5}
                      max={300}
                      value={surface}
                      onChange={(e) => setSurface(Math.max(5, Math.min(300, Number(e.target.value) || 0)))}
                      className="w-20 px-3 py-2 rounded-lg border border-border text-center font-semibold focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </Field>

                {/* Hauteur */}
                <Field
                  icon={Building}
                  label="Hauteur sous plafond"
                  hint={`${hauteur.toFixed(2)} m`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={2.2}
                      max={4.0}
                      step={0.1}
                      value={hauteur}
                      onChange={(e) => setHauteur(Number(e.target.value))}
                      className="flex-1 accent-brand-blue h-2"
                    />
                    <input
                      type="number"
                      min={2.2}
                      max={5}
                      step={0.1}
                      value={hauteur}
                      onChange={(e) => setHauteur(Math.max(2, Math.min(5, Number(e.target.value) || 2.5)))}
                      className="w-20 px-3 py-2 rounded-lg border border-border text-center font-semibold focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </Field>

                {/* Pièce */}
                <Field icon={Thermometer} label="Type de pièce">
                  <ButtonGroup
                    value={piece}
                    onChange={(v) => setPiece(v as Piece)}
                    options={[
                      { value: "salon", label: "Salon / séjour" },
                      { value: "chambre", label: "Chambre" },
                      { value: "bureau", label: "Bureau" },
                      { value: "cuisine", label: "Cuisine" },
                    ]}
                  />
                </Field>

                {/* Isolation */}
                <Field
                  icon={Layers}
                  label="Niveau d'isolation"
                  description="Une maison BBC/RT2012 demande moins de puissance qu'une maison ancienne mal isolée."
                >
                  <ButtonGroup
                    value={insulation}
                    onChange={(v) => setInsulation(v as Insulation)}
                    options={[
                      { value: "bonne", label: "Bonne", sub: "RT 2012+ / BBC" },
                      { value: "standard", label: "Standard", sub: "1990 - 2010" },
                      { value: "mauvaise", label: "Faible", sub: "Avant 1990" },
                    ]}
                  />
                </Field>

                {/* Exposition */}
                <Field icon={Sun} label="Exposition au soleil">
                  <ButtonGroup
                    value={exposition}
                    onChange={(v) => setExposition(v as Exposition)}
                    options={[
                      { value: "nord", label: "Nord / Est", sub: "peu d'ensoleillement" },
                      { value: "variable", label: "Variable", sub: "moyenne" },
                      { value: "sud", label: "Sud / Ouest", sub: "fort ensoleillement" },
                    ]}
                  />
                </Field>

                {/* Étage */}
                <Field icon={Building} label="Étage du logement">
                  <ButtonGroup
                    value={etage}
                    onChange={(v) => setEtage(v as Etage)}
                    options={[
                      { value: "rdc", label: "Rez-de-chaussée" },
                      { value: "intermediaire", label: "Étage intermédiaire" },
                      { value: "dernier", label: "Dernier étage / combles" },
                    ]}
                  />
                </Field>

                {/* Occupants */}
                <Field icon={Users} label="Nombre d'occupants" hint={`${occupants} personne${occupants > 1 ? "s" : ""}`}>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setOccupants(n)}
                        className={`w-12 h-12 rounded-xl font-bold border-2 transition-colors ${
                          occupants === n
                            ? "bg-brand-blue text-white border-brand-blue"
                            : "bg-white text-foreground border-border hover:border-brand-blue/40"
                        }`}
                      >
                        {n}
                        {n === 6 && <span className="text-xs">+</span>}
                      </button>
                    ))}
                  </div>
                </Field>

                <div className="flex items-start gap-2 mt-2 text-xs text-muted-foreground bg-slate-50 rounded-lg p-3 border border-border">
                  <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>
                    Le résultat est une estimation à titre indicatif. La puissance définitive est validée
                    par notre technicien lors d'une visite gratuite à votre domicile (bilan thermique).
                  </span>
                </div>
              </div>

              {/* Result panel */}
              <div className="space-y-5">
                <motion.div
                  layout
                  className="sticky top-32 bg-gradient-to-br from-brand-bluedark via-brand-blue to-brand-sky rounded-3xl text-white p-7 md:p-8 shadow-lifted overflow-hidden relative"
                >
                  <motion.div
                    className="absolute inset-0 opacity-40"
                    animate={{
                      background: [
                        "radial-gradient(400px circle at 0% 0%, rgba(255,255,255,0.18), transparent 60%)",
                        "radial-gradient(400px circle at 100% 100%, rgba(255,255,255,0.18), transparent 60%)",
                        "radial-gradient(400px circle at 0% 0%, rgba(255,255,255,0.18), transparent 60%)",
                      ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase mb-5">
                      <Sparkles className="w-3 h-3" />
                      Recommandation eco cvc
                    </div>

                    <div className="text-[11px] tracking-widest uppercase text-white/70 mb-2">
                      Puissance frigorifique nécessaire
                    </div>

                    <motion.div
                      key={result.kw}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-baseline gap-2 mb-1"
                    >
                      <span className="text-6xl md:text-7xl font-black leading-none">
                        {result.kw.toFixed(1)}
                      </span>
                      <span className="text-2xl font-bold text-white/85">kW</span>
                    </motion.div>
                    <div className="text-sm text-white/70 mb-7">≈ {result.btu.toLocaleString("fr-FR")} BTU/h</div>

                    {/* Reco product */}
                    <div className="rounded-2xl overflow-hidden border-2 border-white/15">
                      <div className="relative h-32 overflow-hidden">
                        <img src={result.reco.image} alt={result.reco.name} className="absolute inset-0 w-full h-full object-cover" />
                        {result.reco.badge && (
                          <span className="absolute top-2 right-2 bg-brand-red text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full shadow-lifted">
                            {result.reco.badge}
                          </span>
                        )}
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-4">
                        <div className="text-[10px] font-bold tracking-widest uppercase text-white/70 mb-1">
                          Modèle conseillé
                        </div>
                        <div className="text-lg font-extrabold leading-tight mb-2">{result.reco.name}</div>
                        <div className="text-xs text-white/85 leading-relaxed mb-3">{result.reco.description}</div>
                        <div className="flex flex-wrap gap-2 mb-1">
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2 py-0.5 rounded-full">
                            {result.reco.power}
                          </span>
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2 py-0.5 rounded-full">
                            {result.reco.btu}
                          </span>
                        </div>
                        <div className="text-sm font-bold text-white mt-2">{result.reco.price}</div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition-all shadow-lifted hover:-translate-y-0.5 text-sm"
                      >
                        Demander mon devis personnalisé
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
                context="calculateur"
                summary={`${result.kw.toFixed(1)} kW · ${result.btu} BTU/h · ${result.reco.name}`}
                extraData={{
                  surface_m2: surface,
                  hauteur_m: hauteur,
                  piece,
                  isolation: insulation,
                  exposition,
                  etage,
                  occupants,
                  modele_recommande: result.reco.name,
                }}
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Méthodologie"
              title={<>Comment <span className="text-gradient-brand">l'outil calcule</span> votre puissance ?</>}
              subtitle="Notre formule reprend les références professionnelles utilisées par les frigoristes : volume de la pièce × coefficient d'isolation, ajusté selon l'usage et l'environnement."
            />
            <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Volume de la pièce",
                  text: "Surface × hauteur sous plafond. C'est le point de départ : on ne climatise pas un volume mais une masse d'air à refroidir ou réchauffer.",
                },
                {
                  step: "02",
                  title: "Coefficient d'isolation",
                  text: "30 W/m³ pour une maison BBC/RT2012, 40 W/m³ pour un standard, 55 W/m³ pour une maison ancienne. C'est le poste qui pèse le plus.",
                },
                {
                  step: "03",
                  title: "Ajustements",
                  text: "Type de pièce (la cuisine produit plus de calories), exposition au soleil, étage et nombre d'occupants viennent affiner le résultat.",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-border p-6"
                >
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-brand-sky mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl border border-border p-6 text-center">
              <div className="text-[11px] font-bold tracking-widest uppercase text-brand-red mb-2">
                ⚠️ Estimation indicative
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Le surdimensionnement comme le sous-dimensionnement nuisent au confort et à la durée de vie de l'appareil.
                C'est pourquoi notre <strong className="text-foreground">visite technique gratuite</strong> reste indispensable
                avant tout devis définitif : nous tenons compte de la disposition, du double-vitrage,
                des ponts thermiques, et du tirage électrique.
              </p>
            </div>
          </div>
        </section>

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
          {opt.sub && (
            <div className="text-[10px] text-muted-foreground mt-0.5">{opt.sub}</div>
          )}
        </button>
      );
    })}
  </div>
);

export default Calculateur;
