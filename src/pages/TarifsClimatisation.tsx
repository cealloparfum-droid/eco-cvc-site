import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  Sparkles,
  ArrowRight,
  Snowflake,
  Home,
  Zap,
  Wrench,
  Shield,
  Star,
  AlertTriangle,
  Plus,
  Euro,
  Wind,
  Building2,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import jSeriesCozy from "@/assets/catalog/j-series-cozy.jpg";
import cSeriesLiving from "@/assets/catalog/c-series-living.jpg";
import qSeriesQuiet from "@/assets/catalog/q-series-quiet.jpg";
import auxGlobal from "@/assets/catalog/aux-global.jpg";

/**
 * Page tarifs ultra-transparente : tous les prix de clim réversible
 * posée par ECO CVC. Rare dans le secteur (les concurrents cachent
 * leurs prix sous "devis sur mesure") → différenciation forte.
 */

interface Offer {
  id: string;
  badge?: string;
  title: string;
  power: string;
  surface: string;
  price: string;
  priceNote: string;
  desc: string;
  features: string[];
  image: string;
  highlight?: boolean;
}

const MONO_SPLIT: Offer[] = [
  {
    id: "j25",
    title: "Mono-split AUX 2,5 kW",
    power: "2,5 kW (9 000 BTU)",
    surface: "10 à 22 m²",
    price: "890 €",
    priceNote: "TTC posé",
    desc: "Idéal pour une chambre, un bureau ou un dressing. Discret, silencieux, économique.",
    features: [
      "Unité ext. + int. AUX J-Smart",
      "DC Inverter R32",
      "Pose + mise en service",
      "Garantie 3 ans",
    ],
    image: jSeriesCozy,
  },
  {
    id: "j35",
    badge: "Best-seller",
    title: "Mono-split AUX 3,5 kW",
    power: "3,5 kW (12 000 BTU)",
    surface: "22 à 35 m²",
    price: "990 €",
    priceNote: "TTC posé",
    desc: "Notre offre phare. Parfait pour le séjour standard. DC Inverter R32, ultra-silencieux (21 dB).",
    features: [
      "Unité ext. + int. AUX J-Smart",
      "Classe A++/A+",
      "Mise en service + attestation F-Gaz",
      "Garantie constructeur 3 ans + pose 2 ans",
    ],
    image: auxGlobal,
    highlight: true,
  },
  {
    id: "c50",
    title: "Mono-split AUX 5,0 kW",
    power: "5,0 kW (18 000 BTU)",
    surface: "35 à 55 m²",
    price: "1 690 €",
    priceNote: "TTC posé",
    desc: "Recommandé pour les grands séjours, salles à manger ouvertes ou open-spaces.",
    features: [
      "Unité ext. + int. AUX C-Series",
      "Compresseur renforcé pour grands volumes",
      "Pose + mise en service",
      "Garantie 3 ans",
    ],
    image: cSeriesLiving,
  },
  {
    id: "c70",
    title: "Mono-split AUX 7,0 kW",
    power: "7,0 kW (24 000 BTU)",
    surface: "50 à 75 m²",
    price: "2 290 €",
    priceNote: "TTC posé",
    desc: "Pour volumes importants, plafonds hauts, pièces très exposées au sud.",
    features: [
      "Unité ext. + int. AUX C-Series",
      "Puissance forte pour grands volumes",
      "Pose + mise en service",
      "Garantie 3 ans",
    ],
    image: cSeriesLiving,
  },
];

const MULTI_SPLIT = [
  {
    id: "bi",
    title: "Bi-split (2 unités intérieures)",
    power: "2 × 2,5 kW ou 2,5 + 3,5 kW",
    surface: "2 pièces (chambre + séjour)",
    price: "à partir de 2 490 €",
    priceNote: "TTC posé",
    economie: "Économise ~290 € vs 2 mono-splits séparés",
    desc: "1 seul groupe extérieur pour 2 unités intérieures. Plus discret, moins encombrant qu'avec deux groupes.",
    features: [
      "Groupe ext. AUX Free-Match 5,3 kW",
      "2 unités int. au choix (J-Smart ou C-Series)",
      "Liaisons frigo + raccord électrique",
      "Mise en service complète",
      "Garantie 3 ans",
    ],
  },
  {
    id: "tri",
    badge: "Le plus demandé",
    title: "Tri-split (3 unités intérieures)",
    power: "3 × 2,5 kW ou mix selon pièces",
    surface: "3 pièces (séjour + 2 chambres)",
    price: "à partir de 3 990 €",
    priceNote: "TTC posé",
    economie: "Économise ~470 € vs 3 mono-splits séparés",
    desc: "Configuration la plus fréquente : un séjour + deux chambres. Idéal maison familiale 80-110 m².",
    features: [
      "Groupe ext. AUX Free-Match 7,9 kW",
      "3 unités int. dimensionnées par pièce",
      "Liaisons frigo + raccord électrique",
      "Mise en service complète",
      "Garantie 3 ans",
    ],
    highlight: true,
  },
  {
    id: "quad",
    title: "Quadri-split (4 unités intérieures)",
    power: "4 × 2,5 kW ou mix",
    surface: "4 pièces (séjour + 3 chambres)",
    price: "à partir de 5 290 €",
    priceNote: "TTC posé",
    economie: "Économise ~580 € vs 4 mono-splits",
    desc: "Pour grande maison ou T4/T5 complet. 1 seul groupe ext. pour préserver la façade.",
    features: [
      "Groupe ext. AUX Free-Match 10,5 kW",
      "4 unités int. dimensionnées par pièce",
      "Pose 2 jours, équipe complète",
      "Garantie 3 ans",
    ],
  },
  {
    id: "penta",
    title: "5 unités et plus",
    power: "5 × 2,5 kW et plus",
    surface: "Maison 150 m²+, gîtes, locaux",
    price: "Devis sur mesure",
    priceNote: "à partir de 6 500 €",
    economie: "Tarif négocié selon volume",
    desc: "Grandes maisons, chambres d'hôtes, locaux pro. On dimensionne après visite technique gratuite.",
    features: [
      "Étude thermique complète",
      "Choix optimisé groupe(s) ext.",
      "Possibilité gainable invisible",
      "Garantie 3 ans",
    ],
  },
];

const GAINABLE = {
  title: "Gainable (clim invisible)",
  power: "5 à 14 kW selon surface",
  surface: "Maison neuve / rénovation lourde",
  price: "à partir de 6 900 €",
  priceNote: "TTC posé",
  desc: "Les bouches sont intégrées dans le faux-plafond ou les combles. Aucune unité visible dans les pièces. Esthétique maximale.",
  features: [
    "Unité gainable AUX (en faux plafond)",
    "Bouches de soufflage discrètes",
    "Réseau de gaines isolées",
    "Thermostat connecté",
    "Régulation pièce par pièce (option)",
  ],
};

const SUPPLEMENTS = [
  { item: "Création ligne électrique dédiée", price: "150 à 300 €", note: "Si tableau électrique éloigné ou saturé" },
  { item: "Liaisons frigo > 3 m", price: "45 €/m supp.", note: "Standard inclus : 3 m. Au-delà, supplément." },
  { item: "Échafaudage si pose en hauteur", price: "200 à 400 €", note: "Unité ext. > 3 m de hauteur" },
  { item: "Goulottes peintes au choix", price: "80 à 150 €", note: "Standard : goulottes blanches PVC incluses" },
  { item: "Évacuation condensats > 5 m", price: "à partir de 90 €", note: "Pour pose éloignée d'évacuation" },
  { item: "Pompe de relevage condensats", price: "180 à 250 €", note: "Si pas de pente naturelle vers évacuation" },
  { item: "Cache déco unité ext.", price: "190 à 350 €", note: "Habillage bois ou métallique sur demande" },
  { item: "Wifi + module connecté", price: "120 à 180 €", note: "Pilotage smartphone, programmes hebdo" },
];

const COMPARAISON = [
  { type: "Forfait grande surface bricolage (kit à monter)", prix: "599 à 899 €", note: "Sans pose, à votre charge. Risques : pas d'attestation F-Gaz (illégal sans), aucune garantie de pose, pas de SAV." },
  { type: "Auto-entrepreneur sans certif F-Gaz", prix: "1 200 à 1 500 €", note: "Illégal pour manipuler les fluides frigorigènes. Aucune garantie sérieuse. À fuir." },
  { type: "ECO CVC mono-split 3,5 kW posé", prix: "990 €", note: "Tout inclus, attestation F-Gaz, garantie 3 ans, équipe locale.", highlight: true },
  { type: "Concurrent national franchisé", prix: "1 800 à 2 500 €", note: "Mêmes prestations, frais de structure plus élevés (siège, pub TV, commerciaux)." },
  { type: "Installateur premium Daikin/Mitsubishi", prix: "2 200 à 3 200 €", note: "Marque haut de gamme japonaise. Qualité supérieure mais prix doublé. Pertinent si exigence acoustique extrême." },
];

const FAQ = [
  {
    q: "Pourquoi ECO CVC est moins cher que les concurrents ?",
    a: "3 raisons : (1) structure familiale légère (pas de siège, pas de pub TV, pas d'armée de commerciaux), (2) achats AUX en direct gros volume, (3) zone d'intervention concentrée (Isère, Rhône, Lyon — pas de frais de déplacement nationaux). On se rémunère sur la pose, pas sur le matériel.",
  },
  {
    q: "Le prix peut-il dépasser le tarif annoncé ?",
    a: "Oui dans 3 cas précis (ligne électrique à créer, liaisons > 3 m, échafaudage en hauteur). Tout est annoncé en visite technique gratuite avant signature, jamais après. Le devis remis est ferme : pas de surprise sur le chantier.",
  },
  {
    q: "Faut-il prévoir un acompte ?",
    a: "30 % à la commande, 70 % à la fin de la pose après mise en service. Conforme aux usages du métier. On ne demande jamais 50 % ou plus à la commande (signal d'alarme dans le secteur).",
  },
  {
    q: "Pourquoi AUX et pas Daikin ou Mitsubishi ?",
    a: "AUX est un grand industriel chinois (40 millions d'unités/an), 14e producteur mondial. Qualité technique solide, fluide R32, garantie 3 ans. Le rapport qualité-prix est imbattable. Si vous voulez du Daikin ou Mitsubishi (marques premium japonaises), on les pose aussi : devis personnalisé, comptez +800 à +1 500 € par split.",
  },
  {
    q: "L'offre est-elle éligible à des aides ?",
    a: "Non, la climatisation réversible (PAC air-air) n'est pas éligible à MaPrimeRénov' ni aux CEE. C'est précisément pour ça qu'on propose des prix tout compris ultra-compétitifs : pas de dossier d'aides à monter, vous payez le prix net affiché.",
  },
  {
    q: "Que faire si je veux comparer plusieurs configurations ?",
    a: "Notre visite technique gratuite (30 min sur place) inclut le chiffrage de plusieurs scénarios : mono ? bi-split ? gainable ? On vous remet un devis détaillé avec les 2-3 options pertinentes pour votre logement. Vous comparez à tête reposée.",
  },
  {
    q: "Délai entre commande et pose ?",
    a: "Basse saison (octobre à mars) : 2-3 semaines. Haute saison (avril-septembre) : 4-8 semaines selon la file d'attente. Conseil : commandez en hiver pour avoir la clim avant l'été et bénéficier des tarifs hors-saison.",
  },
  {
    q: "Vous intervenez où exactement ?",
    a: "Isère (38), Rhône (69), Ain (01), Savoie (73), Haute-Savoie (74). Rayon 60 km autour de Nivolas-Vermelle (38300). Pour le Rhône-Alpes au-delà de 60 km, devis avec frais de déplacement transparents.",
  },
];

const PriceCard = ({ offer }: { offer: Offer }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative rounded-2xl overflow-hidden border-2 transition shadow-soft ${
      offer.highlight
        ? "border-brand-blue ring-2 ring-brand-blue/20"
        : "border-slate-200 hover:border-brand-blue/40"
    }`}
  >
    {offer.badge && (
      <div className="absolute top-3 right-3 z-10 bg-brand-red text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lifted">
        {offer.badge}
      </div>
    )}
    <img
      src={offer.image}
      alt={offer.title}
      className="w-full h-44 object-cover"
      loading="lazy"
    />
    <div className="p-5 bg-white">
      <h3 className="font-bold text-slate-900 mb-1">{offer.title}</h3>
      <div className="text-xs text-slate-500 mb-3">
        {offer.power} · {offer.surface}
      </div>
      <div className="flex items-baseline gap-1.5 mb-3">
        <span className="text-3xl font-black text-brand-blue">
          {offer.price}
        </span>
        <span className="text-xs text-slate-500">{offer.priceNote}</span>
      </div>
      <p className="text-sm text-slate-600 mb-4">{offer.desc}</p>
      <ul className="space-y-1.5 mb-5">
        {offer.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-1.5 text-xs text-slate-700"
          >
            <Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="block w-full text-center text-sm font-semibold py-2.5 rounded-full bg-brand-blue text-white hover:bg-brand-bluedark transition"
      >
        Demander un devis
      </Link>
    </div>
  </motion.div>
);

const TarifsClim = () => {
  useSeo({
    title:
      "Tarifs climatisation réversible 2026 : tous nos prix posés | ECO CVC",
    description:
      "Tarifs détaillés climatisation réversible AUX posée : mono-split (890 €), 3,5 kW (990 €), 5 kW (1 690 €), 7 kW (2 290 €), bi-split (2 490 €), tri-split (3 990 €), gainable (6 900 €). Transparence totale, devis ferme.",
    canonical: "https://ecocvc.pro/tarifs-climatisation-reversible",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        ...MONO_SPLIT.map((o) => ({
          "@type": "Product",
          name: o.title,
          description: o.desc,
          brand: { "@type": "Brand", name: "AUX" },
          offers: {
            "@type": "Offer",
            url: "https://ecocvc.pro/tarifs-climatisation-reversible",
            priceCurrency: "EUR",
            price: o.price.replace(/[^\d]/g, ""),
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "ECO CVC" },
          },
        })),
      ],
    },
  });

  return (
    <PageTransition>
      <Navbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-bluedark via-brand-blue to-cyan-600 text-white pt-28 pb-14">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="container mx-auto px-4 relative">
            <nav className="text-sm text-white/70 mb-6 flex items-center gap-1">
              <Link to="/" className="hover:text-white">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Tarifs climatisation</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">
                <Euro className="w-3.5 h-3.5" /> Transparence totale — pas de
                "devis sur mesure" caché
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Tous nos tarifs climatisation réversible{" "}
                <span className="text-gradient-hot">posée</span>
              </h1>
              <p className="text-lg text-white/85 mb-6">
                Mono-split, bi-split, tri-split, gainable : voici{" "}
                <strong>tous nos prix tout compris</strong>, du plus petit
                modèle (890 €) à la grande maison gainable (6 900 €). Aucun
                "devis sur mesure" pour cacher les prix : on affiche, on
                assume, on respecte.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+33629634045"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-brand-bluedark rounded-full font-bold hover:bg-slate-100 transition"
                >
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition"
                >
                  Visite technique gratuite
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TLDR PRICES */}
        <section className="py-10 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
              {[
                { label: "Petite pièce", price: "890 €" },
                { label: "Best-seller 35 m²", price: "990 €" },
                { label: "Bi-split (2 pièces)", price: "2 490 €" },
                { label: "Tri-split (3 pièces)", price: "3 990 €" },
                { label: "Gainable invisible", price: "6 900 €" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="bg-white rounded-xl p-4 border border-slate-200 text-center"
                >
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                    {p.label}
                  </div>
                  <div className="text-2xl font-black text-brand-blue">
                    {p.price}
                  </div>
                  <div className="text-[10px] text-slate-500">TTC posé</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MONO SPLIT */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-2 mb-2">
              <Snowflake className="w-6 h-6 text-brand-blue" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Mono-split (1 unité intérieure)
              </h2>
            </div>
            <p className="text-slate-600 mb-10">
              Pour climatiser <strong>1 pièce</strong>. Le plus simple, le
              plus rapide à poser (1 journée). Best-seller : la 3,5 kW à 990 €.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {MONO_SPLIT.map((o) => (
                <PriceCard key={o.id} offer={o} />
              ))}
            </div>
          </div>
        </section>

        {/* MULTI SPLIT */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-6 h-6 text-brand-blue" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Multi-split (plusieurs pièces, 1 seul groupe extérieur)
              </h2>
            </div>
            <p className="text-slate-600 mb-10">
              <strong>Solution la plus économique</strong> dès qu'on
              climatise 2 pièces ou plus : 1 seul groupe ext. dessert
              plusieurs unités int. → moins encombrant, moins cher que des
              mono-splits séparés.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {MULTI_SPLIT.map((o, i) => (
                <motion.div
                  key={o.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative rounded-2xl border-2 p-6 bg-white shadow-soft transition ${
                    o.highlight
                      ? "border-brand-blue ring-2 ring-brand-blue/20"
                      : "border-slate-200"
                  }`}
                >
                  {o.badge && (
                    <div className="absolute -top-3 left-6 bg-brand-red text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-lifted">
                      {o.badge}
                    </div>
                  )}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {o.title}
                    </h3>
                    <div className="text-xs text-slate-500">
                      {o.power} · {o.surface}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-3xl font-black text-brand-blue">
                      {o.price}
                    </span>
                    <span className="text-xs text-slate-500">
                      {o.priceNote}
                    </span>
                  </div>
                  <div className="inline-block text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold mb-3">
                    {o.economie}
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{o.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {o.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-1.5 text-xs text-slate-700"
                      >
                        <Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-bluedark"
                  >
                    Demander un devis personnalisé
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GAINABLE */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 items-center">
              <img
                src={qSeriesQuiet}
                alt="Climatisation gainable AUX en faux-plafond — invisible"
                className="rounded-2xl shadow-soft"
              />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-3">
                  <Wind className="w-3.5 h-3.5" /> Solution premium
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                  {GAINABLE.title}
                </h2>
                <p className="text-slate-600 mb-4">{GAINABLE.desc}</p>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-4xl font-black text-brand-blue">
                    {GAINABLE.price}
                  </span>
                  <span className="text-xs text-slate-500">
                    {GAINABLE.priceNote}
                  </span>
                </div>
                <div className="text-xs text-slate-500 mb-5">
                  {GAINABLE.power} · {GAINABLE.surface}
                </div>
                <ul className="space-y-1.5 mb-5">
                  {GAINABLE.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-1.5 text-sm text-slate-700"
                    >
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-bold hover:bg-brand-bluedark transition"
                >
                  Demander une étude gainable
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPLEMENTS */}
        <section className="py-14 bg-amber-50/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Suppléments éventuels (transparence totale)
              </h2>
            </div>
            <p className="text-slate-600 mb-8">
              Les prix ci-dessus couvrent <strong>95 % des poses</strong>.
              Voici les cas où un supplément peut s'appliquer. Tout est dit
              en visite technique avant signature, jamais après.
            </p>
            <div className="bg-white rounded-2xl border border-amber-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-amber-100/50">
                  <tr>
                    <th className="text-left p-3 font-bold text-slate-900">
                      Élément
                    </th>
                    <th className="text-right p-3 font-bold text-slate-900">
                      Prix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SUPPLEMENTS.map((s, i) => (
                    <tr
                      key={s.item}
                      className={i > 0 ? "border-t border-amber-100" : ""}
                    >
                      <td className="p-3">
                        <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                          <Plus className="w-3.5 h-3.5 text-amber-600" />
                          {s.item}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {s.note}
                        </div>
                      </td>
                      <td className="p-3 text-right font-bold text-amber-700">
                        {s.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* COMPARAISON CONCURRENCE */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-6 h-6 text-brand-blue" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Pourquoi nos prix sont plus bas ?
              </h2>
            </div>
            <p className="text-slate-600 mb-8">
              Comparaison honnête pour la même prestation (mono-split 3,5 kW
              posé, France métropolitaine, 2026).
            </p>
            <div className="space-y-3">
              {COMPARAISON.map((c) => (
                <div
                  key={c.type}
                  className={`rounded-xl p-4 border-2 ${
                    c.highlight
                      ? "border-brand-blue bg-brand-blue/5"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex flex-wrap justify-between gap-3 items-start mb-1">
                    <div className="font-bold text-slate-900">{c.type}</div>
                    <div
                      className={`text-lg font-black ${
                        c.highlight ? "text-brand-blue" : "text-slate-700"
                      }`}
                    >
                      {c.prix}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA MIDDLE */}
        <section className="py-12 bg-gradient-to-br from-brand-bluedark to-brand-blue text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Devis ferme en 48h, sans engagement
            </h2>
            <p className="text-white/85 mb-6">
              Visite technique gratuite (30 min sur place) → devis détaillé
              avec 2-3 scénarios → vous comparez à tête reposée.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+33629634045"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition shadow-lifted"
              >
                <Phone className="w-4 h-4" /> 06 29 63 40 45
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 transition"
              >
                Réserver visite technique
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">
              Questions fréquentes sur nos tarifs
            </h2>
            <div className="space-y-3">
              {FAQ.map((f, i) => (
                <details
                  key={i}
                  className="group bg-slate-50 rounded-xl border border-slate-200 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 list-none flex items-center justify-between gap-3">
                    <span>{f.q}</span>
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
                { to: "/climatisation-reversible-990-euros", label: "Offre 990 € détaillée" },
                { to: "/calculateur", label: "Calculateur de puissance" },
                { to: "/produits", label: "Toute la gamme AUX" },
                { to: "/pac-vs-clim-reversible", label: "PAC vs clim réversible" },
                { to: "/installation", label: "Notre méthode de pose" },
                { to: "/maintenance", label: "Entretien clim" },
                { to: "/depannage", label: "Dépannage 24/7" },
                { to: "/avis", label: "Avis clients" },
                { to: "/contact", label: "Demander un devis" },
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

export default TarifsClim;
