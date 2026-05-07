import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  X,
  Equal,
  Snowflake,
  Flame,
  Euro,
  Home,
  Wrench,
  Volume2,
  Leaf,
  AlertTriangle,
  ArrowRight,
  Droplets,
  Thermometer,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

/**
 * PAC air-eau vs climatisation réversible (split mural).
 * Beaucoup de prospects confondent les deux : "j'ai vu une PAC à 2 500 €
 * chez Leroy Merlin" → c'est une clim, pas une PAC de chauffage central.
 * Cette page clarifie une fois pour toutes.
 */

type Verdict = "pac" | "clim" | "egal";

interface Critere {
  label: string;
  pac: string;
  clim: string;
  verdict: Verdict;
  detail: string;
}

const CRITERES: Critere[] = [
  {
    label: "Prix posé (maison 100 m²)",
    pac: "11 000 à 17 000 € posée",
    clim: "3 500 à 8 000 € posée (multi-split 3-4 unités)",
    verdict: "clim",
    detail:
      "La clim réversible est 3 fois moins chère à l'achat. Mais elle ne chauffe pas l'eau chaude sanitaire et ne remplace pas une chaudière.",
  },
  {
    label: "Aides MaPrimeRénov' 2026",
    pac: "Jusqu'à 11 000 € (MPR + CEE + bonus fioul)",
    clim: "0 € (clim réversible NON éligible MaPrimeRénov')",
    verdict: "pac",
    detail:
      "Critère décisif : la clim réversible est exclue des aides État. Seule la PAC air-eau (chauffage central) ouvre droit à MaPrimeRénov'.",
  },
  {
    label: "Système de chauffage",
    pac: "Chauffage central (radiateurs ou plancher chauffant)",
    clim: "Air soufflé local (1 split = 1 pièce)",
    verdict: "pac",
    detail:
      "La PAC air-eau remplace votre chaudière et alimente vos radiateurs existants. La clim chauffe l'air ambiant pièce par pièce, avec une température moins homogène.",
  },
  {
    label: "Eau chaude sanitaire",
    pac: "Oui (PAC + ballon ou cumulus thermodynamique inclus)",
    clim: "Non (il faut garder un cumulus séparé)",
    verdict: "pac",
    detail:
      "La PAC air-eau peut produire l'eau chaude. La clim réversible non — vous gardez votre ballon électrique (200-400 €/an d'élec).",
  },
  {
    label: "Confort en hiver très froid",
    pac: "Bon jusqu'à -15 °C (modèles montagne -25 °C)",
    clim: "Dégradé sous -7 °C (perte de rendement, dégivrage fréquent)",
    verdict: "pac",
    detail:
      "Une clim réversible est conçue pour la mi-saison. À -10 °C, elle souffle de l'air tiède et consomme beaucoup plus. Une PAC air-eau garde son rendement.",
  },
  {
    label: "Climatisation l'été",
    pac: "Oui si modèle réversible + plancher rafraîchissant",
    clim: "Excellente (c'est sa fonction principale)",
    verdict: "clim",
    detail:
      "Pour climatiser efficacement, la clim split gagne haut la main. Une PAC air-eau peut rafraîchir, mais sans la puissance d'une vraie clim.",
  },
  {
    label: "Esthétique intérieure",
    pac: "Invisible (cache la PAC dehors, radiateurs existants)",
    clim: "Splits muraux visibles dans chaque pièce chauffée",
    verdict: "pac",
    detail:
      "La clim impose 1 unité murale par pièce (chambre, salon, cuisine…). La PAC air-eau utilise vos radiateurs déjà en place.",
  },
  {
    label: "Bruit",
    pac: "Unité ext. 35-45 dB (1 seule)",
    clim: "Unité ext. 45-55 dB + ventilation intérieure",
    verdict: "pac",
    detail:
      "La clim a un ventilateur intérieur audible (souffle d'air). La PAC air-eau est silencieuse à l'intérieur (eau dans les radiateurs).",
  },
  {
    label: "Coût d'usage annuel (chauffage 100 m²)",
    pac: "550 à 850 €/an",
    clim: "750 à 1 200 €/an (chauffage uniquement)",
    verdict: "pac",
    detail:
      "La clim est moins efficace pour chauffer une maison entière (rendement chute par grand froid). La PAC air-eau reste constante.",
  },
  {
    label: "Travaux de pose",
    pac: "1 à 3 jours (raccord radiateurs existants)",
    clim: "1 à 2 jours (gainages muraux dans chaque pièce)",
    verdict: "egal",
    detail:
      "Durée comparable. La clim demande de percer un mur par pièce ; la PAC air-eau se branche sur le circuit chauffage central existant.",
  },
  {
    label: "Durée de vie",
    pac: "15 à 20 ans",
    clim: "10 à 15 ans",
    verdict: "pac",
    detail:
      "Une PAC air-eau bien entretenue dure plus longtemps. Les splits clim sont plus sollicités (mode chaud + froid intensif).",
  },
  {
    label: "Entretien obligatoire",
    pac: "1 visite tous les 2 ans (~150 €)",
    clim: "1 entretien/an pour multi-split (~200-300 €)",
    verdict: "pac",
    detail:
      "Plus de splits = plus de filtres à nettoyer + circuits frigorifiques distincts. La PAC air-eau a un seul circuit.",
  },
];

const PROFIL_PAC = [
  "Vous remplacez une chaudière fioul, gaz ou électrique",
  "Vous voulez bénéficier de MaPrimeRénov' (jusqu'à 11 000 €)",
  "Vous avez des radiateurs ou un plancher chauffant",
  "Vous voulez chauffer toute la maison de façon homogène",
  "Vous habitez en zone froide ou en montagne (jusqu'à -15 °C)",
  "Vous voulez aussi produire votre eau chaude sanitaire",
  "Vous tenez à garder une esthétique intérieure sobre",
];

const PROFIL_CLIM = [
  "Vous avez déjà un chauffage qui marche bien (poêle, électrique)",
  "Vous cherchez surtout à climatiser l'été (priorité fraîcheur)",
  "Vous voulez chauffer 1 ou 2 pièces seulement (appoint)",
  "Votre budget est serré (< 8 000 €) et vous renoncez aux aides",
  "Vous habitez en zone tempérée (sud, plaine, climat doux)",
  "Vous êtes en appartement sans circuit chauffage central",
  "Vous acceptez les splits muraux visibles",
];

const FAQ = [
  {
    q: "Une clim réversible peut-elle remplacer une chaudière ?",
    a: "Techniquement oui, mais pas optimalement. La clim chauffe pièce par pièce (1 split = 1 pièce), perd en rendement sous -7 °C, et ne produit pas d'eau chaude sanitaire. Pour remplacer une chaudière, la PAC air-eau est le bon choix dans 95 % des cas.",
  },
  {
    q: "La clim réversible donne-t-elle droit à MaPrimeRénov' ?",
    a: "Non. La climatisation réversible n'est PAS éligible à MaPrimeRénov' ni aux CEE. Seule la pompe à chaleur air-eau (chauffage central) ouvre droit aux aides État (jusqu'à 11 000 € en 2026).",
  },
  {
    q: "Quelle est la différence technique exacte ?",
    a: "Une clim réversible (PAC air-air) chauffe ou refroidit l'air directement. Une PAC air-eau chauffe l'EAU qui circule dans vos radiateurs ou plancher chauffant. Les deux utilisent le même principe thermodynamique mais le rendu est très différent.",
  },
  {
    q: "Combien coûte la pose d'un multi-split clim ?",
    a: "Pour 3-4 splits intérieurs + 1 unité extérieure : 4 500 à 8 000 € posé selon la marque (Daikin, Mitsubishi, LG, Atlantic) et la difficulté de tirage des liaisons frigorifiques.",
  },
  {
    q: "Peut-on combiner PAC air-eau ET clim réversible ?",
    a: "Oui, c'est même fréquent en région chaude (sud-est). La PAC air-eau chauffe via les radiateurs en hiver, et 2-3 splits clim ajoutent du confort l'été dans les chambres. Budget combiné : 16 000 à 22 000 €.",
  },
  {
    q: "ECO CVC pose-t-elle les deux types de systèmes ?",
    a: "Oui. Nous sommes RGE QualiPAC pour les pompes à chaleur air-eau (avec aides MaPrimeRénov'), et nous installons aussi des climatisations réversibles multi-split Daikin, Mitsubishi, Atlantic. Visite technique gratuite pour orienter votre choix.",
  },
];

const VerdictBadge = ({ verdict }: { verdict: Verdict }) => {
  if (verdict === "pac") {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold">
        <Check className="w-3.5 h-3.5" /> PAC air-eau
      </span>
    );
  }
  if (verdict === "clim") {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold">
        <Snowflake className="w-3.5 h-3.5" /> Clim réversible
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
      <Equal className="w-3.5 h-3.5" /> Égalité
    </span>
  );
};

export default function PacVsClimReversible() {
  useSeo({
    title:
      "PAC air-eau vs climatisation réversible : que choisir en 2026 ? | ECO CVC",
    description:
      "Pompe à chaleur air-eau ou clim réversible ? Comparatif détaillé en 12 critères : prix, aides MaPrimeRénov', confort, ESC, climatisation. Verdict honnête par ECO CVC, RGE QualiPAC en Isère.",
    canonical: "https://ecocvc.pro/pac-vs-clim-reversible",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline:
            "PAC air-eau vs climatisation réversible : le comparatif 2026",
          author: { "@type": "Organization", name: "ECO CVC" },
          publisher: { "@type": "Organization", name: "ECO CVC" },
          datePublished: "2026-05-07",
          dateModified: "2026-05-07",
        },
        {
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    },
  });

  const scorePac = CRITERES.filter((c) => c.verdict === "pac").length;
  const scoreClim = CRITERES.filter((c) => c.verdict === "clim").length;
  const scoreEgal = CRITERES.filter((c) => c.verdict === "egal").length;

  return (
    <PageTransition>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-brand-blue/5 via-white to-cyan-50 pt-28 pb-12">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
              <Link to="/" className="hover:text-brand-blue">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-700">PAC vs Clim réversible</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold mb-4">
                <Thermometer className="w-3.5 h-3.5" /> Guide 2026 — comparatif
                indépendant
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Pompe à chaleur air-eau ou climatisation réversible :{" "}
                <span className="text-brand-blue">le bon choix en 2026</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                Vous hésitez entre une <strong>PAC air-eau</strong> (chauffage
                central via radiateurs) et une{" "}
                <strong>clim réversible</strong> (splits muraux par pièce) ? Les
                deux utilisent le même principe thermodynamique, mais le résultat
                — et le coût — sont très différents. Voici le comparatif honnête,
                avec les profils où chaque solution gagne.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+33758459900"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-blue/90 transition"
                >
                  <Phone className="w-4 h-4" /> 07 58 45 99 00
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-brand-blue transition"
                >
                  Demander une visite technique
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Score header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-brand-blue/5 border border-brand-blue/20">
                <div className="text-4xl font-bold text-brand-blue">
                  {scorePac}
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  critères gagnés par la PAC air-eau
                </div>
              </div>
              <div className="text-center p-6 rounded-xl bg-cyan-50 border border-cyan-200">
                <div className="text-4xl font-bold text-cyan-700">
                  {scoreClim}
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  critères gagnés par la clim réversible
                </div>
              </div>
              <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-4xl font-bold text-slate-700">
                  {scoreEgal}
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  critères à égalité
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Critères détaillés */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Comparatif détaillé en 12 critères
            </h2>
            <p className="text-slate-600 mb-8">
              Chaque critère a un verdict transparent. On gagne pas tous les
              critères : on dit quand la clim est meilleure.
            </p>
            <div className="space-y-4">
              {CRITERES.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-white rounded-xl border border-slate-200 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <h3 className="font-semibold text-slate-900">
                      {c.label}
                    </h3>
                    <VerdictBadge verdict={c.verdict} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="p-4 rounded-lg bg-brand-blue/5 border border-brand-blue/10">
                      <div className="text-xs font-semibold text-brand-blue uppercase mb-1 flex items-center gap-1">
                        <Flame className="w-3 h-3" /> PAC air-eau
                      </div>
                      <div className="text-sm text-slate-700">{c.pac}</div>
                    </div>
                    <div className="p-4 rounded-lg bg-cyan-50/50 border border-cyan-100">
                      <div className="text-xs font-semibold text-cyan-700 uppercase mb-1 flex items-center gap-1">
                        <Snowflake className="w-3 h-3" /> Clim réversible
                      </div>
                      <div className="text-sm text-slate-700">{c.clim}</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 italic">{c.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Profils */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Quel système est fait pour vous ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border border-brand-blue/20">
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-6 h-6 text-brand-blue" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Choisissez la PAC air-eau si...
                  </h3>
                </div>
                <ul className="space-y-2">
                  {PROFIL_PAC.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200">
                <div className="flex items-center gap-2 mb-4">
                  <Snowflake className="w-6 h-6 text-cyan-700" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Choisissez la clim réversible si...
                  </h3>
                </div>
                <ul className="space-y-2">
                  {PROFIL_CLIM.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Verdict honnête */}
        <section className="py-12 bg-amber-50/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl border-2 border-amber-200 p-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Verdict honnête ECO CVC
                </h2>
              </div>
              <p className="text-slate-700 mb-3">
                <strong>Dans 80 % des cas</strong>, si vous remplacez une
                chaudière (fioul, gaz, électrique) et que vous voulez profiter
                des aides 2026, la <strong>PAC air-eau</strong> est le bon
                choix. Elle remplace votre chaudière, garde vos radiateurs,
                produit l'eau chaude, et ouvre droit à MaPrimeRénov' (jusqu'à
                11 000 €).
              </p>
              <p className="text-slate-700 mb-3">
                <strong>Dans 20 % des cas</strong>, la{" "}
                <strong>clim réversible</strong> reste pertinente : appartement
                sans chauffage central, maison avec poêle qui chauffe déjà bien,
                ou besoin prioritaire de climatisation. Et elle coûte 3 fois
                moins cher.
              </p>
              <p className="text-slate-700">
                <strong>Notre engagement :</strong> en visite technique gratuite,
                on vous dit honnêtement quel système correspond le mieux à
                votre situation. Si la clim est plus pertinente pour vous, on
                vous le dit — on la pose aussi.
              </p>
            </div>
          </div>
        </section>

        <CTABand />

        {/* FAQ */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {FAQ.map((f, i) => (
                <details
                  key={i}
                  className="group bg-slate-50 rounded-xl border border-slate-200 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 list-none flex items-center justify-between">
                    {f.q}
                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition" />
                  </summary>
                  <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Pour aller plus loin
            </h2>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                { to: "/pac-vs-granules", label: "PAC vs chaudière granulés" },
                { to: "/comparateur-chauffages", label: "Comparateur tous chauffages" },
                { to: "/simulateur-aides", label: "Simulateur aides 2026" },
                { to: "/audit-devis-pac", label: "Auditer un devis PAC" },
                { to: "/choisir-installateur-pompe-a-chaleur", label: "Bien choisir son installateur" },
                { to: "/installation", label: "Installation PAC air-eau" },
                { to: "/calculateur", label: "Calculateur économies" },
                { to: "/eligibilite-maprimerenov", label: "Quiz éligibilité MaPrimeRénov'" },
                { to: "/contact", label: "Demander une visite technique" },
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
}
