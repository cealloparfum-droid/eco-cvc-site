import { motion } from "framer-motion";
import {
  Settings,
  Check,
  CalendarCheck,
  Droplets,
  Wind,
  ShieldCheck,
  Gauge,
  FileText,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import TestimonialStrip from "@/components/TestimonialStrip";
import photoFrigo from "@/assets/photo-maintenance-frigoriste.jpeg";
import photoMaintenancePro from "@/assets/photo-maintenance-pro.jpg";

const checks = [
  { icon: Wind, title: "Filtres & échangeurs", text: "Nettoyage complet pour une qualité d'air optimale et un COP préservé." },
  { icon: Droplets, title: "Fluide frigorigène", text: "Contrôle d'étanchéité obligatoire et complément de charge si nécessaire." },
  { icon: Gauge, title: "Performances", text: "Mesure des températures soufflage/reprise, pressions HP/BP, intensité compresseur." },
  { icon: Settings, title: "Éléments électriques", text: "Serrage, contrôle des sondes et du programmateur, test sécurités." },
  { icon: FileText, title: "Rapport d'entretien", text: "Compte-rendu d'intervention détaillé, signé et archivé 5 ans." },
  { icon: ShieldCheck, title: "Attestation", text: "Document à conserver, exigé par les assurances en cas de sinistre." },
];

const plans = [
  {
    name: "Essentiel",
    price: "89 €",
    period: "/an par split",
    description: "Entretien annuel obligatoire et conforme à la réglementation.",
    features: [
      "1 visite annuelle planifiée",
      "Nettoyage filtres & échangeurs",
      "Contrôle d'étanchéité fluide",
      "Rapport d'entretien normatif",
    ],
    popular: false,
  },
  {
    name: "Confort",
    price: "149 €",
    period: "/an par split",
    description: "Entretien + garantie main-d'œuvre sur les interventions programmées.",
    features: [
      "Tout du forfait Essentiel",
      "Désinfection bactéricide",
      "Déplacement & main-d'œuvre inclus",
      "Priorité sur les dépannages",
      "Remise de 15 % sur les pièces",
    ],
    popular: true,
  },
  {
    name: "Sérénité",
    price: "349 €",
    period: "/an par split",
    description: "Tout inclus : interventions illimitées et remplacement pièces standard.",
    features: [
      "Tout du forfait Confort",
      "Interventions illimitées",
      "Pièces standard comprises",
      "Astreinte 7j/7",
      "Prêt d'appareil en cas de panne longue",
    ],
    popular: false,
  },
];

const Maintenance = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Maintenance"
          title={
            <>
              Entretien annuel <span className="text-gradient-brand">de votre climatisation</span>
            </>
          }
          subtitle="L'entretien annuel est obligatoire depuis le décret n° 2020-912. Au-delà de la conformité, c'est la garantie d'une longévité maximale et d'une facture d'énergie maîtrisée."
          breadcrumb={[{ label: "Maintenance" }]}
          heroImage={{
            src: photoMaintenancePro,
            alt: "Technicien eco cvc en intervention de maintenance préventive sur installation HVAC — relevé de mesures",
            caption: "Visite annuelle · relevé de performances",
            badge: "Maintenance préventive",
          }}
        />

        {/* Why maintain */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-lifted border border-border"
              >
                <img loading="lazy" decoding="async"
                  src={photoFrigo}
                  alt="Technicien eco cvc contrôlant les pressions du fluide frigorigène"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-brand-sky mb-2">Obligation légale</div>
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-5">
                    Décret 2020-912 : l'entretien annuel est obligatoire pour toute clim &gt; 4 kW.
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Contrôle visuel et nettoyage complet",
                      "Évaluation des performances énergétiques",
                      "Conseils d'utilisation personnalisés",
                      "Attestation remise au propriétaire",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-white/90">
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Pourquoi entretenir"
                  title={<>Préservez la <span className="text-gradient-brand">durée de vie</span> et les performances.</>}
                  subtitle="Un appareil entretenu consomme jusqu'à 30 % d'énergie en moins qu'un appareil laissé à l'abandon. Et voit sa durée de vie doubler."
                />
                <div className="grid sm:grid-cols-2 gap-5 mt-8">
                  {[
                    { label: "–30 %", sub: "de consommation" },
                    { label: "×2", sub: "de durée de vie" },
                    { label: "0", sub: "panne évitable" },
                    { label: "100 %", sub: "de garantie conservée" },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-50 rounded-2xl p-5 border border-border">
                      <div className="text-3xl font-extrabold text-brand-blue mb-1">{s.label}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-16 md:py-24 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Checklist technicien"
              title={<>Ce que nous <span className="text-gradient-brand">contrôlons</span> pendant la visite</>}
              subtitle="Un entretien complet prend 45 à 60 minutes par split. Rien n'est laissé au hasard."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {checks.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-border p-6 hover:border-brand-green/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Contrats d'entretien"
              title={<>Trois formules, <span className="text-gradient-brand">zéro surprise</span>.</>}
              subtitle="Choisissez la tranquillité d'esprit qui vous convient. Résiliable à tout moment après la première année."
            />
            <div className="grid md:grid-cols-3 gap-5 mt-14">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative bg-white rounded-2xl p-8 transition-all ${
                    plan.popular
                      ? "border-2 border-brand-blue shadow-lifted scale-[1.02]"
                      : "border border-border hover:shadow-soft"
                  }`}
                >
                  {plan.popular && (
                    <>
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                        Le plus choisi
                      </div>
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-brand-green/15 text-brand-green text-[10px] font-bold border border-brand-green/30">
                        312 contrats actifs
                      </div>
                    </>
                  )}
                  <CalendarCheck className={`w-8 h-8 mb-4 ${plan.popular ? "text-brand-blue" : "text-brand-green"}`} />
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>
                  <div className="mb-6 pb-6 border-b border-border">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-foreground/85">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-full font-bold text-sm transition-colors ${
                      plan.popular
                        ? "bg-brand-blue text-white hover:bg-brand-bluedark"
                        : "bg-slate-100 text-foreground hover:bg-slate-200"
                    }`}
                  >
                    Souscrire
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Tableau comparatif détaillé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 max-w-5xl mx-auto"
            >
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-brand-bluedark text-[10px] font-bold tracking-widest uppercase mb-3">
                  Comparatif détaillé
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Quelle <span className="text-gradient-brand">formule</span> pour vous ?
                </h3>
              </div>

              <div className="bg-white rounded-3xl border border-border shadow-soft overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-border">
                        <th className="text-left px-5 md:px-6 py-4 font-bold text-slate-900 w-2/5">Prestation</th>
                        <th className="px-3 py-4 font-bold text-foreground/70 text-center min-w-[100px]">
                          Essentiel
                          <div className="text-[11px] font-normal text-muted-foreground">89 €/an</div>
                        </th>
                        <th className="px-3 py-4 font-extrabold text-brand-blue text-center min-w-[100px] bg-accent/30">
                          Confort
                          <div className="text-[11px] font-normal text-brand-bluedark">149 €/an</div>
                        </th>
                        <th className="px-3 py-4 font-bold text-foreground/70 text-center min-w-[100px]">
                          Sérénité
                          <div className="text-[11px] font-normal text-muted-foreground">349 €/an</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { l: "Visite annuelle planifiée", e: true, c: true, s: true },
                        { l: "Contrôle d'étanchéité fluide frigorigène", e: true, c: true, s: true },
                        { l: "Nettoyage filtres & échangeurs", e: true, c: true, s: true },
                        { l: "Rapport d'entretien normatif", e: true, c: true, s: true },
                        { l: "Désinfection bactéricide", e: false, c: true, s: true },
                        { l: "Déplacement & main-d'œuvre inclus", e: false, c: true, s: true },
                        { l: "Priorité sur les dépannages (sous 24h)", e: false, c: true, s: true },
                        { l: "Remise sur les pièces", e: "—", c: "−15 %", s: "−25 %" },
                        { l: "Interventions illimitées", e: false, c: false, s: true },
                        { l: "Pièces standard comprises", e: false, c: false, s: true },
                        { l: "Astreinte 7j/7 (week-end + jours fériés)", e: false, c: false, s: true },
                        { l: "Prêt d'appareil en cas de panne longue", e: false, c: false, s: true },
                        { l: "Engagement", e: "1 an", c: "1 an", s: "2 ans" },
                      ].map((row, idx) => (
                        <tr key={row.l} className={idx % 2 ? "bg-slate-50/40" : ""}>
                          <td className="px-5 md:px-6 py-3 text-foreground/85">{row.l}</td>
                          {(["e", "c", "s"] as const).map((k) => (
                            <td
                              key={k}
                              className={`px-3 py-3 text-center ${k === "c" ? "bg-accent/15" : ""}`}
                            >
                              {typeof row[k] === "boolean" ? (
                                row[k] ? (
                                  <Check className="w-5 h-5 text-brand-green inline" strokeWidth={2.5} />
                                ) : (
                                  <span className="text-muted-foreground/50">—</span>
                                )
                              ) : (
                                <span className="font-semibold text-foreground/85 text-xs">
                                  {row[k] as string}
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 md:p-5 bg-slate-50/60 border-t border-border text-xs text-muted-foreground text-center">
                  Tous nos contrats sont sans engagement après la première année · Résiliation par lettre simple · TVA 10 % comprise.
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="/contact?service=maintenance"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-bold text-sm hover:bg-brand-bluedark transition-colors shadow-lifted"
                >
                  Choisir mon forfait — devis sous 24 h
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <TestimonialStrip
          context="maintenance"
          title="Ils ont signé un contrat d'entretien chez nous"
          className="bg-slate-50/60 border-y border-border"
        />

        <CTABand variant="maintenance" />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Maintenance;
