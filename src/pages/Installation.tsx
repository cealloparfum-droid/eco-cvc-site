import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wrench,
  Home,
  Building2,
  Factory,
  Check,
  ArrowRight,
  Wind,
  Zap,
  Gauge,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import TestimonialStrip from "@/components/TestimonialStrip";
import photoInstall from "@/assets/photo-install-interieur.jpeg";
import photoRoof from "@/assets/photo-install-toit.jpeg";
import photoIndoorAux from "@/assets/photo-installation-interieur-clim.jpg";

const types = [
  {
    icon: Home,
    name: "Mono-split",
    desc: "Une seule pièce à climatiser ? Solution idéale pour un salon ou une chambre.",
    range: "De 600 € à 2 500 €",
    power: "2,5 à 5 kW",
  },
  {
    icon: Building2,
    name: "Multi-split",
    desc: "Une unité extérieure raccordée à 2, 3, 4 ou 5 unités intérieures.",
    range: "De 2 500 € à 6 000 €",
    power: "5 à 12 kW",
  },
  {
    icon: Wind,
    name: "Gainable",
    desc: "Installation invisible dans les combles, diffusion par grilles dans chaque pièce.",
    range: "De 5 000 € à 12 000 €",
    power: "6 à 20 kW",
  },
  {
    icon: Factory,
    name: "Cassette & console",
    desc: "Solutions pour tertiaire, commerce ou grands volumes avec pilotage centralisé.",
    range: "Sur devis",
    power: "Jusqu'à 25 kW",
  },
];

const steps = [
  { title: "Visite technique", text: "Étude thermique, évaluation de l'isolation, repérage des points de passage et conseils sur la puissance adaptée." },
  { title: "Devis détaillé sous 24h", text: "Matériel préconisé, options, détail des aides (MaPrimeRénov', CEE) et plan de pose." },
  { title: "Pose en 1 à 2 jours", text: "Fixation unité extérieure, liaisons frigorifiques, raccordement électrique, mise sous vide." },
  { title: "Mise en service", text: "Charge fluide frigorigène, test de performance, paramétrage et remise du carnet d'entretien." },
];

const Installation = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Installation"
          title={
            <>
              Installation de <span className="text-gradient-brand">climatisation réversible</span> & pompe à chaleur air-air
            </>
          }
          subtitle="Du mono-split en appartement au gainable en maison individuelle : nos techniciens dimensionnent, installent et mettent en service votre équipement dans les règles de l'art."
          breadcrumb={[{ label: "Installation" }]}
          heroImage={{
            src: photoIndoorAux,
            alt: "Split mural réversible installé dans un séjour — pose eco cvc",
            caption: "Split mural réversible",
            badge: "Pose eco cvc",
            objectPosition: "center center",
          }}
        />

        {/* Types */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Nos solutions"
              title={<>La bonne <span className="text-gradient-brand">configuration</span> pour chaque logement.</>}
              subtitle="Que vous soyez en appartement, maison individuelle ou local professionnel, nous avons la solution adaptée à vos besoins."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
              {types.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-border p-6 hover:shadow-lifted hover:border-brand-blue/40 transition-all"
                >
                  <t.icon className="w-8 h-8 text-brand-blue mb-5" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{t.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.desc}</p>
                  <div className="space-y-1.5 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Puissance</span>
                      <span className="font-bold text-foreground">{t.power}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Budget</span>
                      <span className="font-bold text-brand-blue">{t.range}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process with photo */}
        <section className="py-16 md:py-24 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1.1fr,1fr] gap-12 items-start">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Processus"
                  title={<>Une installation <span className="text-gradient-brand">propre et méthodique</span>.</>}
                  subtitle="Chaque chantier suit le même protocole rigoureux, du premier rendez-vous à la mise en service finale."
                />
                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                  {steps.map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="relative bg-white rounded-2xl border border-border p-5"
                    >
                      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-blue text-white text-sm font-bold mb-3">
                        {i + 1}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">{s.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-28 grid gap-4"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lifted border border-border">
                  <img
                    src={photoInstall}
                    alt="Pose d'un split mural par un technicien eco cvc"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                      Pose unité intérieure
                    </div>
                  </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-soft">
                  <img
                    src={photoRoof}
                    alt="Installation d'une unité extérieure en toiture"
                    className="w-full aspect-[5/3] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                      Raccordement extérieur
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aides */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Financement"
                  title={<>Jusqu'à <span className="text-gradient-hot">5 000 €</span> d'aides sur votre projet</>}
                  subtitle="La climatisation réversible est éligible à plusieurs dispositifs. Nous nous occupons du montage de votre dossier."
                />
                <ul className="mt-8 space-y-4">
                  {[
                    { title: "MaPrimeRénov'", text: "Jusqu'à 4 000 € selon vos revenus pour une PAC air-air" },
                    { title: "Certificats d'Économies d'Énergie (CEE)", text: "Prime versée par les fournisseurs d'énergie (EDF, TotalEnergies...)" },
                    { title: "Éco-PTZ", text: "Prêt à taux zéro jusqu'à 15 000 € sur 20 ans" },
                    { title: "TVA à 10 %", text: "Taux réduit sur la main-d'œuvre et le matériel installé" },
                  ].map((a) => (
                    <li key={a.title} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <Check className="w-5 h-5 text-brand-blue" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{a.title}</div>
                        <div className="text-sm text-muted-foreground">{a.text}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative bg-gradient-to-br from-brand-bluedark to-brand-blue rounded-3xl p-10 text-white overflow-hidden shadow-lifted"
              >
                <div className="absolute inset-0 bg-grid opacity-[0.08]" />
                <div className="relative">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-brand-sky/80 mb-3">Simulation</div>
                  <div className="text-5xl md:text-6xl font-extrabold mb-2">4 200 €</div>
                  <div className="text-sm text-white/70 mb-8">Exemple pour une maison de 100 m² — PAC air-air 8 kW</div>
                  <div className="space-y-3">
                    {[
                      ["Installation complète", "7 800 €"],
                      ["MaPrimeRénov' (foyer modeste)", "-2 500 €"],
                      ["CEE (prime coup de pouce)", "-1 100 €"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between pb-3 border-b border-white/15 text-sm">
                        <span className="text-white/75">{k}</span>
                        <span className="font-bold">{v}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 text-lg">
                      <span className="font-bold">Reste à charge</span>
                      <span className="font-extrabold text-brand-sky">4 200 €</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-bluedark font-bold text-sm hover:bg-slate-100 transition-colors"
                  >
                    Simuler mon projet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="py-16 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Zap, title: "Économique", text: "Un COP jusqu'à 4,5 : 4,5 kWh de chaleur pour 1 kWh consommé." },
                { icon: Gauge, title: "Performant", text: "Fonctionne jusqu'à −20 °C sur nos modèles Daikin & Mitsubishi." },
                { icon: Wrench, title: "Silencieux", text: "Unités intérieures à partir de 19 dB — imperceptibles." },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl border border-border p-6">
                  <s.icon className="w-8 h-8 text-brand-blue mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products cross-link */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-brand-sky mb-2">Matériel installé</div>
                <h3 className="text-xl md:text-2xl font-extrabold">Partenaire officiel <span className="text-gradient-brand">AUX France</span></h3>
                <p className="text-sm text-white/70 mt-2 max-w-xl">
                  Séries Q / J / F / C (Multi-split Free-Match) — R32, DC Inverter 180° sinusoïdal, classe jusqu'à A+++.
                </p>
              </div>
              <Link
                to="/produits"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shrink-0"
              >
                Voir la gamme AUX
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <TestimonialStrip
          context="installation"
          title="Des installations qui parlent d'elles-mêmes"
          className="bg-slate-50/60 border-y border-border"
        />

        <CTABand variant="installation" />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Installation;
