import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  Star,
  Snowflake,
  Flame,
  Volume2,
  Zap,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  CalendarCheck,
  Award,
  AlertTriangle,
  Truck,
  Wrench,
  ThumbsUp,
  Euro,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import promoIndoor from "@/assets/catalog/aux-global.jpg";
import jSeriesCozy from "@/assets/catalog/j-series-cozy.jpg";
import outdoor from "@/assets/catalog/outdoor-nature.jpg";

/**
 * Landing page dédiée à l'offre phare ECO CVC : clim réversible AUX
 * 3,5 kW posée à 990 € TTC. Optimisée pour conversion (Google Ads,
 * SEO transactionnel "climatisation 990 euros") + Schema.org Product/
 * Offer pour les résultats riches Google.
 */

const INCLUS = [
  "Unité intérieure AUX J-Smart 3,5 kW (12 000 BTU)",
  "Unité extérieure DC Inverter R32 (fluide nouvelle génération)",
  "Pose complète par technicien certifié F-Gaz catégorie 1",
  "3 mètres de liaisons frigorifiques cuivrées",
  "Goulottes blanches PVC pour finition propre",
  "Mise en service + tirage au vide + test d'étanchéité",
  "Attestation de conformité (obligatoire fluides frigorigènes)",
  "Garantie constructeur 3 ans + garantie pose 2 ans",
];

const NON_INCLUS = [
  "Travaux d'électricité (création d'une ligne dédiée si besoin)",
  "Échafaudage si pose en hauteur (>3 m)",
  "Liaisons frigorifiques au-delà de 3 m (45 €/m supplémentaire)",
  "Goulottes peintes ou en bois noble (devis sur mesure)",
  "Évacuation des condensats au-delà de 5 m",
];

const TIMELINE = [
  {
    step: 1,
    icon: Phone,
    title: "Vous nous appelez",
    desc: "Au 06 29 63 40 45 ou via formulaire. On vous donne un créneau visite technique sous 48h ouvrées.",
  },
  {
    step: 2,
    icon: CalendarCheck,
    title: "Visite technique gratuite",
    desc: "30 min sur place : on valide la faisabilité, l'emplacement de l'unité ext., l'électricité. Devis ferme à 990 €.",
  },
  {
    step: 3,
    icon: Wrench,
    title: "Pose en 1 journée",
    desc: "Notre équipe arrive entre 8h et 9h. Pose, raccordement, mise en service, démonstration télécommande. Fini avant 17h.",
  },
  {
    step: 4,
    icon: ThumbsUp,
    title: "Vous profitez",
    desc: "Chauffage l'hiver + clim l'été dès le soir même. Garantie 3 ans constructeur + suivi ECO CVC.",
  },
];

const SPECS = [
  { label: "Puissance frigorifique", value: "3,5 kW (12 000 BTU/h)" },
  { label: "Puissance calorifique", value: "3,8 kW (chauffage)" },
  { label: "Surface idéale", value: "Pièce jusqu'à 35 m²" },
  { label: "Classe énergétique", value: "A++ / A+ (froid / chaud)" },
  { label: "SEER (efficacité froid)", value: "6,1" },
  { label: "SCOP (efficacité chaud)", value: "4,0" },
  { label: "Niveau sonore intérieur", value: "21 dB(A) (mode silence)" },
  { label: "Niveau sonore extérieur", value: "53 dB(A)" },
  { label: "Fluide frigorigène", value: "R32 (faible PRG)" },
  { label: "Wifi", value: "Compatible (en option)" },
];

const FAQ = [
  {
    q: "Pourquoi 990 € seulement, c'est pas une arnaque ?",
    a: "Non. ECO CVC est une petite structure familiale (2 patrons, équipe terrain) avec faibles frais fixes. On achète AUX en direct gros volume. À 990 €, on ne se rémunère pas sur le matériel mais sur la pose. C'est notre offre d'appel pour vous faire connaître ECO CVC. Aucune surprise, aucun frais caché.",
  },
  {
    q: "Qu'est-ce qui peut faire dépasser 990 € ?",
    a: "Les 3 cas les plus fréquents : (1) ligne électrique dédiée à créer (+150 à 300 €), (2) liaisons frigorifiques > 3 m (+45 €/m), (3) échafaudage si l'unité ext. est en hauteur (+200 à 400 €). Tout est dit en visite technique avant signature, jamais après.",
  },
  {
    q: "Qu'est-ce que la marque AUX ? Ce n'est pas Daikin/Mitsubishi…",
    a: "AUX est un grand fabricant chinois (40 millions d'unités/an, 14e producteur mondial). Ils fabriquent aussi pour des marques européennes en marque blanche. Qualité solide, garantie 3 ans, fluide R32. Pour le rapport qualité-prix à 990 €, c'est imbattable. Si vous voulez du Daikin/Mitsubishi, devis sur mesure.",
  },
  {
    q: "Combien coûte la pose d'une 2e ou 3e unité ?",
    a: "On bascule sur un système multi-split (1 groupe extérieur + 2-4 unités intérieures). Comptez 2 500 à 4 500 € pour 2 splits, 4 000 à 6 500 € pour 3 splits. Devis personnalisé.",
  },
  {
    q: "Le délai entre la commande et la pose ?",
    a: "En basse saison (octobre à mars) : 2 à 3 semaines. En haute saison (avril à septembre) : 4 à 8 semaines. Conseil : commandez en hiver pour avoir la clim posée avant l'été.",
  },
  {
    q: "L'offre est-elle éligible à des aides ?",
    a: "Non. La climatisation réversible (PAC air-air) n'est PAS éligible à MaPrimeRénov' ni aux CEE. C'est précisément pour ça qu'on propose un prix tout compris ultra-compétitif : pas besoin de monter un dossier d'aides, vous payez 990 € net.",
  },
  {
    q: "Garantie en cas de panne ?",
    a: "Garantie constructeur AUX 3 ans pièces. Garantie pose ECO CVC 2 ans. Notre SAV intervient sous 48h ouvrées si panne. En haute saison (juillet-août), on priorise nos clients chantier.",
  },
  {
    q: "Vous intervenez où ?",
    a: "Tout le département Isère (38), Rhône (69), Ain (01), Savoie (73), Haute-Savoie (74). Dans un rayon de 60 km autour de Nivolas-Vermelle, sans frais de déplacement.",
  },
];

const TESTIMONIALS = [
  {
    name: "Karine D.",
    city: "Bourgoin-Jallieu (38)",
    rating: 5,
    text: "990 € posée comme annoncé, pas un euro de plus. Pose impeccable en 4 h. La clim tourne tous les jours depuis juin, on dort enfin la fenêtre fermée.",
  },
  {
    name: "Mehdi B.",
    city: "Vienne (38)",
    rating: 5,
    text: "J'avais des devis à 1 800-2 200 € chez les concurrents pour le même modèle. ECO CVC a fait à 990 €, sérieux, propre, livré en 3 semaines. Je recommande.",
  },
  {
    name: "Sophie L.",
    city: "Lyon 7e (69)",
    rating: 5,
    text: "Visite technique gratuite, devis ferme, pose dans la foulée. Aucune mauvaise surprise. Vraiment satisfaite, très bon rapport qualité-prix.",
  },
];

const ClimReversible990 = () => {
  useSeo({
    title:
      "Climatisation réversible posée à 990 € TTC | AUX 3,5 kW | ECO CVC",
    description:
      "Climatisation réversible AUX J-Smart 3,5 kW (12 000 BTU) posée à 990 € TTC. Offre tout compris : matériel, pose, mise en service, garantie. Isère, Rhône, Lyon. Visite technique gratuite sous 48h.",
    canonical: "https://ecocvc.pro/climatisation-reversible-990-euros",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          name: "Climatisation réversible AUX J-Smart 3,5 kW posée",
          description:
            "Split mural réversible AUX DC Inverter 3,5 kW (12 000 BTU) posée. Matériel + main-d'œuvre + mise en service. Pour pièce jusqu'à 35 m².",
          brand: { "@type": "Brand", name: "AUX" },
          image: "https://ecocvc.pro/og-image.jpg",
          offers: {
            "@type": "Offer",
            url: "https://ecocvc.pro/climatisation-reversible-990-euros",
            priceCurrency: "EUR",
            price: "990",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: { "@type": "Organization", name: "ECO CVC" },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "22",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "LocalBusiness",
          name: "ECO CVC",
          telephone: "+33629634045",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nivolas-Vermelle",
            addressRegion: "Isère",
            postalCode: "38300",
            addressCountry: "FR",
          },
        },
      ],
    },
  });

  return (
    <PageTransition>
      <Navbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-bluedark via-brand-blue to-cyan-600 text-white pt-28 pb-16">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <motion.div
            className="absolute -top-32 -right-32 w-96 h-96 bg-brand-red/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="container mx-auto px-4 relative">
            <nav className="text-sm text-white/70 mb-6 flex items-center gap-1">
              <Link to="/" className="hover:text-white">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Climatisation 990 €</span>
            </nav>

            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center">
              <div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red text-white text-xs font-bold tracking-widest uppercase mb-5 shadow-lifted"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Offre phare ECO CVC
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] mb-5">
                  Climatisation réversible{" "}
                  <span className="text-gradient-hot">posée</span>
                  <br />
                  <span className="text-white/90">à partir de</span>{" "}
                  <span className="relative inline-block">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-black">
                      990 €
                    </span>
                    <motion.span
                      className="absolute -top-2 -right-6 md:-right-10 rotate-12 text-[10px] md:text-xs font-bold bg-white text-brand-red px-2 py-0.5 rounded-full shadow-lifted"
                      animate={{ rotate: [12, 18, 12] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      TTC posé
                    </motion.span>
                  </span>
                </h1>
                <p className="text-white/85 text-lg leading-relaxed mb-7 max-w-xl">
                  <strong className="text-white">AUX J-Smart 3,5 kW</strong>{" "}
                  (12 000 BTU) posée et mise en service. Pour pièce jusqu'à
                  35 m². <strong>Tout est inclus</strong> : matériel, pose,
                  mise en service, attestation fluides, garantie 3 ans.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition-all shadow-lifted hover:-translate-y-0.5"
                  >
                    Réserver ma visite gratuite
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="tel:+33629634045"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    06 29 63 40 45
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> Devis ferme
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> Pose 1
                    journée
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> Garantie 3
                    ans
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> RGE
                    QualiPAC
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 shadow-lifted">
                  <img loading="lazy" decoding="async"
                    src={promoIndoor}
                    alt="Climatisation réversible AUX 3,5 kW posée à 990 € TTC par ECO CVC"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="bg-brand-red text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lifted">
                      AUX J-Smart 3,5 kW
                    </span>
                    <span className="bg-white text-brand-bluedark text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lifted">
                      DC Inverter R32
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-xl px-4 py-2 text-brand-bluedark">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      À partir de
                    </div>
                    <div className="text-3xl font-black">990 € TTC</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-slate-200 bg-slate-50 py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: Award, label: "RGE QualiPAC" },
                { icon: Shield, label: "F-Gaz cat. 1" },
                { icon: Star, label: "5,0/5 (22 avis Google)" },
                { icon: Truck, label: "Pose sous 3 sem." },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 justify-center text-slate-700"
                >
                  <t.icon className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm font-semibold">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CE QUI EST INCLUS */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Ce qui est inclus dans les 990 € TTC
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Tout est dit. Pas de petits caractères, pas de frais cachés.
                Devis ferme après visite technique gratuite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Inclus dans les 990 €
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {INCLUS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    En supplément (cas spécifiques)
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {NON_INCLUS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="text-amber-600 shrink-0">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 italic mt-4">
                  Tout est annoncé en visite technique avant signature, jamais
                  après.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECS */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              Caractéristiques techniques
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
              AUX J-Smart 3,5 kW — DC Inverter, R32, classe A++
            </p>

            <div className="grid md:grid-cols-[1fr,1.3fr] gap-6 items-center">
              <img loading="lazy" decoding="async"
                src={jSeriesCozy}
                alt="Unité intérieure AUX J-Smart 3,5 kW posée dans un séjour"
                className="rounded-2xl shadow-soft w-full"
              />
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <ul className="divide-y divide-slate-100">
                  {SPECS.map((s) => (
                    <li
                      key={s.label}
                      className="flex justify-between py-2.5 text-sm"
                    >
                      <span className="text-slate-600">{s.label}</span>
                      <span className="font-semibold text-slate-900">
                        {s.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              De l'appel à la fraîcheur en 3 semaines
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
              Process simple, transparent, sans surprise.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-brand-blue to-cyan-600 text-white rounded-2xl p-5 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-lg">
                        {t.step}
                      </div>
                      <t.icon className="w-6 h-6 text-white/70" />
                    </div>
                    <h3 className="font-bold mb-2">{t.title}</h3>
                    <p className="text-sm text-white/85">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              Ils ont choisi l'offre 990 €
            </h2>
            <p className="text-slate-600 text-center mb-10">
              Avis clients ECO CVC vérifiés
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm mb-4 italic">
                    « {t.text} »
                  </p>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-slate-500">{t.city}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA MIDDLE */}
        <section className="py-14 bg-gradient-to-br from-brand-bluedark via-brand-blue to-cyan-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Réservez votre visite technique gratuite
            </h2>
            <p className="text-white/85 mb-8 max-w-2xl mx-auto">
              30 minutes sur place, sans engagement. On valide la faisabilité,
              on chiffre, et on vous donne un{" "}
              <strong>devis ferme à 990 € TTC</strong> si la pose est standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+33629634045"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition shadow-lifted"
              >
                <Phone className="w-4 h-4" />
                06 29 63 40 45
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 transition"
              >
                Demander un rappel
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              Questions fréquentes
            </h2>
            <p className="text-slate-600 text-center mb-10">
              On répond aux questions qu'on vous pose le plus.
            </p>
            <div className="space-y-3">
              {FAQ.map((f, i) => (
                <details
                  key={i}
                  className="group bg-slate-50 rounded-xl border border-slate-200 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 list-none flex items-center justify-between">
                    {f.q}
                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition shrink-0" />
                  </summary>
                  <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Voir aussi
            </h2>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                { to: "/calculateur", label: "Calculateur de puissance" },
                { to: "/pac-vs-clim-reversible", label: "PAC vs Clim réversible" },
                { to: "/produits", label: "Toute la gamme AUX" },
                { to: "/installation", label: "Notre méthode de pose" },
                { to: "/maintenance", label: "Entretien climatisation" },
                { to: "/depannage", label: "Dépannage 24/7" },
                { to: "/contact", label: "Demander un devis" },
                { to: "/avis", label: "Avis clients" },
                { to: "/qui-sommes-nous", label: "Qui sommes-nous" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition"
                >
                  <ArrowRight className="w-4 h-4 shrink-0" />
                  <span>{l.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ClimReversible990;
