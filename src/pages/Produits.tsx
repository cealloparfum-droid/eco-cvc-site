import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Thermometer,
  Volume2,
  Wifi,
  Leaf,
  Shield,
  Gauge,
  Wind,
  Droplets,
  Star,
  Check,
  ArrowRight,
  Snowflake,
  Flame,
  Sparkles,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";

import cSeriesLiving from "@/assets/catalog/c-series-living.jpg";
import qSeriesQuiet from "@/assets/catalog/q-series-quiet.jpg";
import qSeriesDualTemp from "@/assets/catalog/q-series-dual-temp.jpg";
import jSeriesCozy from "@/assets/catalog/j-series-cozy.jpg";
import minimalLiving from "@/assets/catalog/minimal-living.jpg";
import ecoNature from "@/assets/catalog/eco-nature.jpg";
import outdoorNature from "@/assets/catalog/outdoor-nature.jpg";
import outdoorPool from "@/assets/catalog/outdoor-pool.jpg";

const series = [
  {
    code: "Q",
    name: "Q Series",
    tagline: "Performance extrême",
    tint: "from-brand-blue to-brand-sky",
    image: qSeriesQuiet,
    capacities: ["09K", "12K", "18K", "24K"],
    refrigerant: "R32",
    features: [
      { icon: Flame, label: "Chauffe jusqu'à –25 °C" },
      { icon: Snowflake, label: "Refroidit jusqu'à +65 °C" },
      { icon: Zap, label: "Fast cooling & heating" },
      { icon: Wind, label: "Auto-cleaning IDU & ODU" },
    ],
    description:
      "Notre gamme haut de gamme pour les climats extrêmes. COP optimal, auto-nettoyage à haute température, démarrage rapide haute fréquence.",
  },
  {
    code: "J",
    name: "J Series",
    tagline: "Confort & longévité",
    tint: "from-brand-green to-emerald-500",
    image: jSeriesCozy,
    imagePosition: "center top",
    capacities: ["09K", "12K", "18K", "24K"],
    refrigerant: "R32",
    features: [
      { icon: Leaf, label: "Filtre ion d'argent" },
      { icon: Shield, label: "Plage tension 130-265 V" },
      { icon: Droplets, label: "Rappel nettoyage filtre" },
      { icon: Check, label: "Auto-restart après coupure" },
    ],
    description:
      "Le best-seller pour les logements français. Filtre silver-ion anti-bactéries, fiabilité électronique à toute épreuve, entretien simplifié.",
  },
  {
    code: "F",
    name: "F Series",
    tagline: "Accessible & efficace",
    tint: "from-brand-red to-orange-500",
    image: ecoNature,
    capacities: ["09K", "12K", "18K", "24K"],
    refrigerant: "R32",
    features: [
      { icon: Gauge, label: "Golden fin anti-corrosion" },
      { icon: Zap, label: "Démarrage haute fréquence" },
      { icon: Droplets, label: "Code CL nettoyage filtre" },
      { icon: Star, label: "Rapport qualité/prix" },
    ],
    description:
      "L'entrée de gamme qui ne fait aucun compromis sur l'essentiel. Ailette dorée anti-corrosion, montée en température rapide.",
  },
  {
    code: "C",
    name: "C Series (Multi-Split)",
    tagline: "Free-Match A+++",
    tint: "from-brand-bluedark to-brand-blue",
    image: cSeriesLiving,
    capacities: ["14K", "18K", "21K", "27K", "28K", "36K", "42K"],
    refrigerant: "R32",
    features: [
      { icon: Wifi, label: "WiFi intégré en option" },
      { icon: Volume2, label: "Ventilation 4D" },
      { icon: Wind, label: "Soft Air – 3 206 micro-ventilations" },
      { icon: Shield, label: "180° DC Inverter sinusoïdale" },
    ],
    description:
      "Notre système phare pour équiper plusieurs pièces avec une seule unité extérieure. Jusqu'à 5 splits intérieurs par groupe — idéal maison.",
  },
];

const signatureFeatures = [
  {
    icon: Wind,
    title: "SOFT – 3 206 micro-ventilations",
    text: "L'air froid est diffusé par des milliers de micro-sorties, évitant les courants d'air et procurant un confort enveloppant.",
  },
  {
    icon: Thermometer,
    title: "I-FEEL",
    text: "La télécommande mesure la température réelle à votre emplacement et ajuste le delta de consigne automatiquement.",
  },
  {
    icon: Volume2,
    title: "Ventilation 4D",
    text: "Flux d'air piloté verticalement ET horizontalement avec 2 moteurs — zéro zone morte dans la pièce.",
  },
  {
    icon: Wifi,
    title: "WiFi + Commande vocale",
    text: "Pilotage depuis votre smartphone (iOS/Android). Option voix (anglais). Programmation hebdomadaire, zones, groupes.",
  },
  {
    icon: Shield,
    title: "DC Inverter 180° sinusoïdal",
    text: "Compresseur à inversion de courant continu + EXV indépendant par split. Bruit réduit, durée de vie prolongée, COP maximum.",
  },
  {
    icon: Check,
    title: "Installation simplifiée",
    text: "Gabarit d'installation, niveau à bulle intégré, sous-face amovible pour accès rapide aux connexions. Gain de temps sur chantier.",
  },
];

const multisplitCombos = [
  { name: "AM2-H14/4DR3C", ratio: "1 moteur → 2 unités", power: "14 000 Btu/h", climaClass: "A++/A+", seer: "6.19", scop: "4.08" },
  { name: "AM2-H18/4DR3C", ratio: "1 moteur → 2 unités", power: "18 000 Btu/h", climaClass: "A+++/A++", seer: "6.19", scop: "4.08" },
  { name: "AM3-H21/4DR3C", ratio: "1 moteur → 3 unités", power: "21 000 Btu/h", climaClass: "A+++/A++", seer: "6.19", scop: "4.08" },
  { name: "AM3-H27/4DR3C", ratio: "1 moteur → 3 unités", power: "27 000 Btu/h", climaClass: "A++/A+", seer: "6.19", scop: "4.08" },
  { name: "AM4-H28/4DR3C", ratio: "1 moteur → 4 unités", power: "28 000 Btu/h", climaClass: "A++/A+", seer: "—", scop: "—" },
  { name: "AM4-H36/4DR3", ratio: "1 moteur → 4 unités", power: "36 000 Btu/h", climaClass: "A++/A+", seer: "6.15", scop: "4.12" },
  { name: "AM5-H42/4DR3", ratio: "1 moteur → 5 unités", power: "42 000 Btu/h", climaClass: "A++/A+", seer: "—", scop: "—" },
];

const protections = [
  "Température de décharge trop élevée",
  "Température condenseur trop élevée",
  "Hautes et basses pressions",
  "Capteur de température",
  "Surcharge du compresseur",
  "Inversion de phase",
  "Panne de communication",
  "Antigel",
  "Air froid",
  "Module d'entraînement",
  "Consommation excessive d'énergie",
  "Surintensités & surtensions",
];

const Produits = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Nos produits AUX"
          title={
            <>
              Le matériel <span className="text-gradient-brand">AUX DC Inverter</span> que nous installons.
            </>
          }
          subtitle="Partenaire officiel AUX France (Villeurbanne), nous proposons l'ensemble de la gamme : mono-split, multi-split Free-Match, gainable et unités spéciales. Voici les séries disponibles chez eco cvc."
          breadcrumb={[{ label: "Produits" }]}
        />

        {/* Spotlight 990€ offer */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-red via-orange-500 to-amber-500 text-white p-7 md:p-10 shadow-lifted"
            >
              <div className="absolute inset-0 bg-grid opacity-[0.08]" />
              <div className="relative grid md:grid-cols-[1fr,auto] gap-6 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/25 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase mb-3">
                    <Sparkles className="w-3 h-3" />
                    Offre d'appel
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
                    Split mural AUX 3,5 kW posé dès <span className="text-white underline decoration-4 underline-offset-4">990 €</span>
                  </h2>
                  <p className="text-white/90 text-sm md:text-base">
                    12 000 BTU · R32 · Classe A++ · Pose pièce jusqu'à 35 m² incluse · Garantie 5 ans.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-brand-red font-extrabold text-sm hover:bg-slate-100 transition-colors">
                    Profiter de l'offre
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+33758459900" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white/70 text-white font-bold text-sm hover:bg-white/10 transition-colors">
                    <Phone className="w-4 h-4" />
                    07 58 45 99 00
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand intro */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 items-center">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-border shadow-soft">
                <img src={outdoorPool} alt="Unité extérieure AUX DC Inverter en bord de piscine" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-brand-red mb-3">AUX Group · Depuis 1986</div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                  Un groupe mondial, une implantation <span className="text-gradient-brand">française</span>.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AUX est un groupe industriel chinois fondé en 1986, coté à Shanghai (601567.SH) et Hong Kong (02080.HK),
                  avec 14 usines dans le monde, 6 centres R&amp;D et plus de 40 000 collaborateurs. Exporté dans 140+ pays.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <Stat value="140+" label="Pays" />
                  <Stat value="40 000" label="Collaborateurs" />
                  <Stat value="90,2 Md¥" label="CA 2024" />
                </div>
                <div className="mt-6 text-xs text-muted-foreground">
                  Contact AUX France : 29 Rue Greuze, 69100 Villeurbanne · <a href="https://www.aux-france.fr" target="_blank" rel="noreferrer" className="text-brand-blue hover:underline">aux-france.fr</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Series grid */}
        <section className="py-12 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Les séries murales"
              title={<>Choisissez la <span className="text-gradient-brand">série</span> adaptée à vos besoins.</>}
              subtitle="Toutes nos unités murales fonctionnent en réversible : chauffage l'hiver, rafraîchissement l'été."
            />
            <div className="grid md:grid-cols-2 gap-6 mt-14">
              {series.map((s, i) => (
                <motion.article
                  key={s.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group relative bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lifted transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={`AUX ${s.name} en situation`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={"imagePosition" in s && s.imagePosition ? { objectPosition: s.imagePosition } : undefined}
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${s.tint} text-white text-xs font-bold tracking-widest uppercase shadow-lifted`}>
                      Série {s.code}
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-2xl font-extrabold text-slate-900">{s.name}</h3>
                      <span className="text-xs font-bold text-brand-red tracking-widest uppercase">{s.tagline}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.description}</p>

                    <div className="flex items-center gap-2 mb-5 text-xs">
                      <span className="text-muted-foreground uppercase tracking-wider font-semibold">Capacités</span>
                      {s.capacities.map((c) => (
                        <span key={c} className="px-2 py-0.5 rounded-full bg-slate-100 text-foreground font-bold">{c}</span>
                      ))}
                      <span className="ml-auto px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green font-bold">{s.refrigerant}</span>
                    </div>

                    <ul className="grid grid-cols-2 gap-2.5 text-sm">
                      {s.features.map((f) => (
                        <li key={f.label} className="flex items-center gap-2 text-foreground/85">
                          <f.icon className="w-4 h-4 text-brand-blue shrink-0" />
                          <span className="text-xs">{f.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Extreme temperatures */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl overflow-hidden border border-border shadow-lifted aspect-[16/10]"
              >
                <img src={qSeriesDualTemp} alt="AUX Q Series : chauffe jusqu'à −25 °C, refroidit jusqu'à +65 °C" className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="High performance"
                  title={<>Des climats <span className="text-gradient-hot">extrêmes</span>, sans faiblir.</>}
                  subtitle="Que l'on soit sous −25 °C en hiver ou sous canicule estivale, la gamme Q continue de fonctionner à pleine puissance."
                />
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-brand-sky/15 to-brand-blue/10 rounded-2xl p-5 border border-brand-blue/20">
                    <Snowflake className="w-7 h-7 text-brand-blue mb-3" />
                    <div className="text-3xl font-extrabold text-slate-900">−25 °C</div>
                    <div className="text-xs text-muted-foreground mt-1">Chauffage basse température</div>
                  </div>
                  <div className="bg-gradient-to-br from-brand-red/15 to-orange-100 rounded-2xl p-5 border border-brand-red/20">
                    <Flame className="w-7 h-7 text-brand-red mb-3" />
                    <div className="text-3xl font-extrabold text-slate-900">+65 °C</div>
                    <div className="text-xs text-muted-foreground mt-1">Refroidissement haute température</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature features */}
        <section className="py-16 md:py-24 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Technologies AUX"
              title={<>Les <span className="text-gradient-brand">innovations</span> qui font la différence.</>}
              subtitle="Ce qui distingue les splits AUX des modèles d'entrée de gamme du marché."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {signatureFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-2xl border border-border p-6 hover:border-brand-blue/40 hover:shadow-soft transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-split table */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12">
              <div>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-border shadow-soft">
                  <img src={minimalLiving} alt="Intérieur minimaliste équipé d'une climatisation AUX" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <SectionHeading
                  align="left"
                  eyebrow="Série C — Free-Match"
                  title={<>Multi-split : <span className="text-gradient-brand">1 unité extérieure</span>, jusqu'à 5 intérieures.</>}
                  subtitle="Idéal pour les maisons & appartements avec plusieurs pièces à climatiser. Moins de nuisance visuelle en façade, meilleure gestion énergétique."
                  className="mt-8"
                />
              </div>

              <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-soft">
                <div className="p-5 bg-slate-900 text-white">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-brand-sky mb-1">Combinaisons disponibles</div>
                  <div className="text-lg font-bold">Unités extérieures Free-Match R32</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="text-left px-5 py-3 font-bold">Modèle</th>
                        <th className="text-left px-5 py-3 font-bold">Configuration</th>
                        <th className="text-left px-5 py-3 font-bold">Puissance</th>
                        <th className="text-left px-5 py-3 font-bold">Classe</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {multisplitCombos.map((c) => (
                        <tr key={c.name} className="hover:bg-slate-50/60 transition-colors">
                          <td className="px-5 py-3 font-bold text-foreground">{c.name}</td>
                          <td className="px-5 py-3 text-muted-foreground">{c.ratio}</td>
                          <td className="px-5 py-3 text-foreground">{c.power}</td>
                          <td className="px-5 py-3">
                            <span className="px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs">{c.climaClass}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-slate-50 text-xs text-muted-foreground">
                  Les conceptions et spécifications sont sujettes à modification sans préavis. Nous vous fournissons la fiche technique à jour avec votre devis.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Protections */}
        <section className="py-16 md:py-20 bg-slate-900 text-white">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.4fr] gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-sky" />
                  Sécurité intégrée
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-[1.1] mb-5">
                  12 protections <span className="text-gradient-brand">embarquées</span> pour une fiabilité absolue.
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Les unités AUX intègrent de série une palette complète de protections électroniques et mécaniques.
                  Résultat : moins de pannes, une durée de vie prolongée et une consommation maîtrisée.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {protections.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-start gap-2.5 bg-white/5 rounded-xl border border-white/10 p-3 text-sm"
                  >
                    <Shield className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                    <span className="text-white/85">{p}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ecology */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Écologie & fluide"
                  title={<>Fluide <span className="text-gradient-brand">R32</span>, 3 fois moins de CO₂.</>}
                  subtitle="Tous nos nouveaux appareils fonctionnent au R32, dont le GWP (pouvoir de réchauffement global) est 3× inférieur au R410A historique."
                />
                <ul className="space-y-3 mt-8">
                  {[
                    "R32 : GWP de 675 (vs 2 088 pour R410A)",
                    "Recyclable à 100 % avec des équipements adaptés",
                    "Conformité stricte au règlement F-Gaz UE",
                    "Moins de fluide nécessaire pour une puissance équivalente",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Leaf className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-border shadow-lifted">
                <img src={outdoorNature} alt="Unité extérieure AUX dans un environnement naturel" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-50/60 border-t border-border">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                Quelle série est <span className="text-gradient-brand">faite pour vous</span> ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nos techniciens vous aident à choisir le bon modèle AUX selon votre surface, votre isolation et votre budget.
                Devis sous 24h avec matériel préconisé et détail des aides.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-bluedark transition-colors shadow-lifted"
              >
                Demander un devis personnalisé
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CTABand variant="produits" />
        <Footer />
      </div>
    </PageTransition>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-xl md:text-2xl font-extrabold text-slate-900">{value}</div>
    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-0.5">{label}</div>
  </div>
);

export default Produits;
