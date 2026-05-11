import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wrench,
  Settings,
  LifeBuoy,
  Leaf,
  Euro,
  Award,
  ThermometerSnowflake,
  Flame,
  Phone,
  ArrowRight,
  Check,
  Sparkles,
  Calculator,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import StatsBand from "@/components/StatsBand";
import VoiceLeadSection from "@/components/VoiceLeadSection";
import GoogleReviewsBlock from "@/components/GoogleReviewsBlock";
import { useSeo } from "@/lib/useSeo";
import photoExt1 from "@/assets/photo-install-exterieur-1.jpeg";
import photoExt3 from "@/assets/photo-install-exterieur-3.jpeg";
import photoInt from "@/assets/photo-install-interieur.jpeg";
import photoToit from "@/assets/photo-install-toit.jpeg";
import photoFrigo from "@/assets/photo-maintenance-frigoriste.jpeg";
import promoIndoor from "@/assets/catalog/aux-global.jpg";
import promoOutdoor from "@/assets/catalog/outdoor-pool.jpg";
import logoQualiPAC from "@/assets/certifications/qualipac.png";
import logoQualiPV from "@/assets/certifications/qualipv.png";
import logoBureauVeritas from "@/assets/certifications/bureau-veritas.png";
import logoQualitEnR from "@/assets/certifications/qualitenr.png";
import logoMaafPro from "@/assets/certifications/maaf-pro.png";

const services = [
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Pose de climatisation réversible (mono-split, multi-split, gainable) et pompe à chaleur air-air par des techniciens qualifiés.",
    href: "/installation",
    tint: "blue" as const,
  },
  {
    icon: Settings,
    title: "Maintenance",
    description:
      "Entretien annuel obligatoire, nettoyage des filtres, contrôle du fluide frigorigène et optimisation de votre consommation.",
    href: "/maintenance",
    tint: "green" as const,
  },
  {
    icon: LifeBuoy,
    title: "Dépannage",
    description:
      "Intervention rapide 7j/7 pour toutes pannes : fuite de fluide, perte de performance, bruit anormal, erreur de sonde.",
    href: "/depannage",
    tint: "red" as const,
  },
];

const benefits = [
  { icon: Leaf, title: "Écologique", text: "Jusqu'à 3 kWh de chaleur produits pour 1 kWh consommé. Moins de CO₂, moins de factures." },
  { icon: Euro, title: "Aides 2026", text: "MaPrimeRénov', CEE, éco-PTZ : nous vous accompagnons dans vos démarches." },
  { icon: ThermometerSnowflake, title: "Confort 4 saisons", text: "Chauffage l'hiver, rafraîchissement l'été — un seul appareil, une télécommande." },
  { icon: Award, title: "Certifiés RGE", text: "QualiPAC, attestation manipulation des fluides frigorigènes, assurance décennale." },
];

const process = [
  { step: "01", title: "Étude gratuite", text: "Visite technique à domicile, bilan thermique et conseils sur le matériel adapté." },
  { step: "02", title: "Devis détaillé", text: "Devis transparent sous 24h avec le détail des aides financières auxquelles vous avez droit." },
  { step: "03", title: "Installation propre", text: "Pose en 1 à 2 jours, mise en service, réglages et explication du fonctionnement." },
  { step: "04", title: "Suivi long-terme", text: "Contrat d'entretien annuel et hotline dépannage pour toute la durée de vie de votre installation." },
];

const brands = [
  { name: "AUX", highlight: true },
  { name: "Atlantic", highlight: true },
  { name: "Daikin" },
  { name: "Mitsubishi" },
  { name: "Toshiba" },
  { name: "Panasonic" },
];

// FAQ rich snippet pour la home — apparaîtra directement dans les résultats Google
const HOME_FAQ = [
  {
    q: "Combien coûte une pompe à chaleur en 2026 ?",
    a: "Pour une maison 100-150 m² en Isère ou Rhône-Alpes, comptez 11 000 à 17 000 € HT posée. Après aides 2026 (MaPrimeRénov' + CEE + sortie fioul), le reste à charge peut descendre à 2 000-7 000 € selon votre profil de revenus.",
  },
  {
    q: "ECO CVC est-il certifié RGE QualiPAC ?",
    a: "Oui, ECO CVC est artisan RGE QualiPAC certifié, ce qui rend nos installations éligibles à MaPrimeRénov', CEE Coup de pouce et toutes les aides 2026. Numéro RGE vérifiable sur france-renov.gouv.fr.",
  },
  {
    q: "Quelle est la zone d'intervention d'ECO CVC ?",
    a: "Nous intervenons en Isère (Bourgoin, Vienne, La Tour-du-Pin, Voiron, Grenoble), Rhône (Lyon et Métropole), Loire (Saint-Étienne), Savoie (Chambéry) et Haute-Savoie (Annecy). Devis gratuit sous 24h.",
  },
  {
    q: "Combien de temps pour installer une pompe à chaleur ?",
    a: "Comptez 2-4 jours sur place pour la pose. Le délai global signature -> mise en service est de 4-8 semaines (commande matériel + déposition dossier MaPrimeRénov' + chantier).",
  },
  {
    q: "Quelles aides 2026 puis-je cumuler pour une PAC ?",
    a: "MaPrimeRénov' (jusqu'à 5 000 €), CEE Coup de pouce (jusqu'à 5 000 €), bonus sortie fioul (+1 000 €), TVA 5,5 %, éco-PTZ et aides locales. Cumul possible jusqu'à 14 000 € selon votre profil. Utilisez notre simulateur gratuit.",
  },
];

const Index = () => {
  useSeo({
    title: "ECO CVC — Pompe à chaleur, climatisation & froid en Isère et Rhône-Alpes | RGE QualiPAC",
    description: "ECO CVC, artisan RGE QualiPAC en Isère. Installation, entretien et dépannage de pompes à chaleur, climatisations réversibles, VMC et froid commercial. Devis gratuit, aides MaPrimeRénov' & CEE.",
    canonical: "https://www.ecocvc.pro/",
    ogImage: "https://www.ecocvc.pro/og-image.jpg",
    pinterestKeywords: ["pompe à chaleur", "climatisation réversible", "MaPrimeRénov 2026", "RGE QualiPAC", "rénovation énergétique", "PAC air-eau", "Isère", "Lyon"],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: HOME_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />

        {/* Brands strip */}
        <section className="py-10 border-y border-border bg-slate-50/60">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mr-4">
                Partenaires constructeurs
              </span>
              {brands.map((b) => (
                <span
                  key={b.name}
                  className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${
                    b.highlight
                      ? "text-brand-red hover:text-brand-bluedark"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {b.name}
                  {b.highlight && <sup className="text-[9px] font-bold text-brand-green ml-1 align-super">★</sup>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats band — preuve sociale animée */}
        <StatsBand />

        {/* Voice lead — décrire son projet à voix haute */}
        <VoiceLeadSection />

        {/* Promotional offer */}
        <PromoOffer />

        {/* Services */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Nos services"
              title={
                <>
                  Une entreprise, <span className="text-gradient-brand">trois métiers</span>, un seul interlocuteur.
                </>
              }
              subtitle="De la pose au dépannage en passant par l'entretien, nos techniciens interviennent sur toute la durée de vie de votre climatisation réversible."
            />

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {services.map((s, i) => (
                <ServiceCard key={s.title} {...s} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Calculateur teaser */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-bluedark to-brand-blue text-white shadow-lifted"
            >
              <div className="absolute inset-0 bg-grid opacity-[0.06]" />
              <motion.div
                className="absolute inset-0 opacity-50"
                animate={{
                  background: [
                    "radial-gradient(500px circle at 20% 30%, rgba(255,255,255,0.12), transparent 60%)",
                    "radial-gradient(500px circle at 80% 70%, rgba(255,255,255,0.12), transparent 60%)",
                    "radial-gradient(500px circle at 20% 30%, rgba(255,255,255,0.12), transparent 60%)",
                  ],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative grid md:grid-cols-[auto,1fr,auto] items-center gap-8 p-8 md:p-10 lg:p-12">
                <div className="hidden md:flex w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center shrink-0">
                  <Calculator className="w-10 h-10 lg:w-12 lg:h-12 text-brand-sky" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase mb-4">
                    <Sparkles className="w-3 h-3" />
                    Nouvel outil gratuit
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display leading-[1.1] mb-3">
                    Quelle <span className="text-gradient-hot">puissance</span> pour votre climatisation ?
                  </h3>
                  <p className="text-white/80 leading-relaxed max-w-2xl">
                    En 30 secondes, calculez la puissance frigorifique adaptée à votre logement
                    (surface, isolation, exposition…) et découvrez la gamme AUX la plus pertinente.
                  </p>
                </div>
                <Link
                  to="/calculateur"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition-all shadow-lifted hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Lancer le calcul
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pourquoi la clim réversible */}
        <section className="py-20 md:py-28 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lifted border border-border">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-brand-sky/20 to-brand-blue/5 rounded-2xl p-5">
                      <ThermometerSnowflake className="w-8 h-8 text-brand-blue mb-3" />
                      <div className="text-3xl font-extrabold text-slate-900">17°C</div>
                      <div className="text-xs text-muted-foreground mt-1">Mode rafraîchissement</div>
                    </div>
                    <div className="bg-gradient-to-br from-brand-red/15 to-orange-100 rounded-2xl p-5">
                      <Flame className="w-8 h-8 text-brand-red mb-3" />
                      <div className="text-3xl font-extrabold text-slate-900">26°C</div>
                      <div className="text-xs text-muted-foreground mt-1">Mode chauffage</div>
                    </div>
                  </div>
                  <div className="bg-slate-900 text-white rounded-2xl p-5">
                    <div className="text-[10px] tracking-widest font-bold text-brand-sky mb-2 uppercase">COP moyen</div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-extrabold">4,2</span>
                      <span className="text-xs text-slate-400 mb-1.5">kWh de chaleur par kWh consommé</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Pourquoi choisir eco cvc"
                  title={<>Le confort thermique, <span className="text-gradient-hot">sans concession</span>.</>}
                  subtitle="La climatisation réversible — ou pompe à chaleur air-air — remplace avantageusement un chauffage électrique classique et apporte un vrai confort l'été."
                />
                <div className="grid sm:grid-cols-2 gap-5 mt-10">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={b.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-4"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center">
                        <b.icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 mb-1">{b.title}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{b.text}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Notre méthode"
              title={<>De la prise de contact à la <span className="text-gradient-brand">mise en service</span>.</>}
              subtitle="Un processus carré en 4 étapes, pensé pour vous simplifier la vie et vous garantir une installation durable."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl border border-border p-6 hover:border-brand-blue/40 hover:shadow-soft transition-all"
                >
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-blue/40 to-brand-red/30 mb-3">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications showcase */}
        <section className="py-20 md:py-24 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12 items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Certifications"
                  title={<>Artisan <span className="text-gradient-brand">RGE QualiPAC</span> certifié.</>}
                  subtitle="Nos qualifications sont la garantie d'un travail conforme aux normes et vous permettent d'accéder aux aides financières de l'État."
                />
                <ul className="mt-8 space-y-3">
                  {[
                    "Membre Qualit'EnR — organisme de qualification reconnu par l'État",
                    "RGE QualiPAC — obligatoire pour obtenir MaPrimeRénov' et les CEE",
                    "RGE QualiPV — qualification photovoltaïque pour solutions hybrides",
                    "Assurance décennale MAAF Pro — la garantie pour vos chantiers",
                    "Audit Bureau Veritas — vérification indépendante de nos process",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand-green" strokeWidth={3} />
                      </div>
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/certifications"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white border border-border hover:border-brand-blue/40 hover:shadow-soft text-foreground font-semibold text-sm transition-all"
                >
                  Voir toutes nos certifications
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "RGE QualiPAC", sub: "Pompes à chaleur", logo: logoQualiPAC },
                  { label: "QualiPV", sub: "Photovoltaïque", logo: logoQualiPV },
                  { label: "MAAF Pro", sub: "Assurance décennale", logo: logoMaafPro },
                  { label: "Bureau Veritas", sub: "Audit & certification", logo: logoBureauVeritas },
                  { label: "Qualit'EnR", sub: "Organisme de qualification — délivre QualiPAC & QualiPV", logo: logoQualitEnR, wide: true },
                ].map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`rounded-2xl bg-white border border-border p-5 hover:shadow-lifted transition-shadow ${
                      c.wide
                        ? "col-span-2 flex items-center gap-5"
                        : "aspect-square flex flex-col items-center justify-between"
                    }`}
                  >
                    <div className={`${c.wide ? "shrink-0 w-28 h-20" : "flex-1 w-full"} flex items-center justify-center`}>
                      <img
                        src={c.logo}
                        alt={`Logo officiel ${c.label}`}
                        className={`max-w-full object-contain ${c.wide ? "max-h-16" : "max-h-20"}`}
                        loading="lazy"
                      />
                    </div>
                    <div className={c.wide ? "text-left" : "text-center mt-2"}>
                      <div className="font-extrabold text-slate-900 text-sm leading-tight">{c.label}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{c.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 md:py-28 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Nos réalisations"
              title={<>Des chantiers <span className="text-gradient-brand">propres</span>, du matériel <span className="text-gradient-brand">qui dure</span>.</>}
              subtitle="Un aperçu de nos dernières installations et interventions. Toutes nos poses sont soignées, propres et documentées."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-14">
              {[
                { src: photoExt1, alt: "Pose d'une unité extérieure AUX DC Inverter par un technicien eco cvc", span: "md:col-span-2 md:row-span-2" },
                { src: photoInt, alt: "Installation d'une unité intérieure murale par un technicien eco cvc", span: "" },
                { src: photoToit, alt: "Installation d'une unité extérieure en toiture", span: "" },
                { src: photoFrigo, alt: "Technicien eco cvc contrôlant la charge de fluide frigorigène", span: "" },
                { src: photoExt3, alt: "Raccordement frigorifique d'une climatisation réversible", span: "md:col-span-2" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className={`relative overflow-hidden rounded-2xl bg-white border border-border group ${img.span}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Ils nous ont fait confiance"
              title={<>Plus de <span className="text-gradient-brand">1 200 installations</span> réalisées.</>}
            />
            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {[
                {
                  name: "Marie D.",
                  role: "Maison à Lyon (69)",
                  text: "Installation d'un multi-split AUX sur 3 pièces en une journée. Équipe ponctuelle, travail soigné, et vrai conseil sur les aides MaPrimeRénov'.",
                },
                {
                  name: "Philippe L.",
                  role: "Copropriété Saint-Étienne (42)",
                  text: "Contrat d'entretien depuis 4 ans sur 12 appartements. Toujours disponibles, devis clairs, aucune mauvaise surprise.",
                },
                {
                  name: "Sophie R.",
                  role: "Appartement Annecy (74)",
                  text: "Dépannage le dimanche en plein mois d'août. Diagnostic en 30 min, pièce remplacée sous garantie. Sauvés !",
                },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-border p-7 hover:shadow-lifted transition-shadow"
                >
                  <div className="flex gap-0.5 mb-4 text-amber-400">
                    {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
                  </div>
                  <p className="text-foreground/85 leading-relaxed mb-5">« {t.text} »</p>
                  <div className="pt-5 border-t border-border">
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GoogleReviewsBlock />

        <CTABand variant="default" />
        <Footer />
      </div>
    </PageTransition>
  );
};

const PromoOffer = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-bluedark via-brand-blue to-brand-sky text-white shadow-lifted"
      >
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            background: [
              "radial-gradient(500px circle at 10% 30%, rgba(255,255,255,0.15), transparent 60%)",
              "radial-gradient(500px circle at 90% 70%, rgba(255,255,255,0.15), transparent 60%)",
              "radial-gradient(500px circle at 10% 30%, rgba(255,255,255,0.15), transparent 60%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />

        <div className="relative grid lg:grid-cols-[1.3fr,1fr] gap-10 p-8 md:p-12 lg:p-14">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red text-white text-xs font-bold tracking-widest uppercase mb-5 shadow-lifted"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Offre spéciale installation
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1] mb-6">
              Climatisation <span className="text-gradient-hot">AUX</span> posée
              <br />
              <span className="text-white/90">à partir de</span>{" "}
              <span className="relative inline-block">
                <span className="text-6xl md:text-7xl lg:text-8xl font-black">990 €</span>
                <motion.span
                  className="absolute -top-2 -right-6 md:-right-10 rotate-12 text-[10px] md:text-xs font-bold bg-brand-red text-white px-2 py-0.5 rounded-full shadow-lifted"
                  animate={{ rotate: [12, 18, 12] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  TTC posé
                </motion.span>
              </span>
            </h2>

            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl">
              Split mural réversible <strong className="text-white">AUX DC Inverter 3,5 kW</strong> (12 000 BTU),
              pose incluse pour une pièce jusqu'à 35 m². Matériel + main-d'œuvre + mise en service.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition-all shadow-lifted hover:-translate-y-0.5"
              >
                Je réserve mon devis
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+33629634045"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                06 29 63 40 45
              </a>
            </div>

            <Link
              to="/climatisation-reversible-990-euros"
              className="inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-white underline underline-offset-4 mb-4"
            >
              Voir le détail de l'offre 990 € (inclus, garanties, FAQ)
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="text-[11px] text-white/60 max-w-lg">
              * Offre valable pour une installation standard (monosplit, pièce jusqu'à 35 m²) en Rhône-Alpes. Hors travaux annexes (électricité, gaine technique, échafaudage).
              Voir conditions en nous contactant.
            </div>
          </div>

          <div className="relative flex flex-col gap-3">
            {/* Indoor unit – main hero photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border-4 border-white/20 shadow-lifted"
            >
              <img
                src={promoIndoor}
                alt="Unité intérieure AUX 3,5 kW posée dans un salon — split mural réversible"
                className="w-full h-72 md:h-80 object-cover object-top"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="bg-white text-brand-bluedark text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lifted">
                  Unité intérieure
                </span>
                <span className="bg-brand-red text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lifted">
                  AUX J-Smart 3,5 kW
                </span>
              </div>
            </motion.div>

            {/* Outdoor unit + spec chips */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative overflow-hidden rounded-2xl border-4 border-white/20 shadow-lifted"
            >
              <img
                src={promoOutdoor}
                alt="Groupe extérieur AUX DC Inverter – installation soignée"
                className="w-full h-44 md:h-48 object-cover object-right"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-bluedark/80 via-brand-bluedark/40 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <span className="self-start bg-white text-brand-bluedark text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lifted">
                  Groupe extérieur
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    DC Inverter
                  </span>
                  <span className="bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    Classe A++
                  </span>
                  <span className="bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    R32 · −15°C
                  </span>
                  <span className="bg-brand-red text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-lifted">
                    Garantie 5 ans
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Index;
