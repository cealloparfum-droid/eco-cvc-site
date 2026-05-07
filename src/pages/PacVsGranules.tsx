import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  X,
  Equal,
  Flame,
  Zap,
  Trees,
  Wrench,
  Euro,
  Clock,
  Volume2,
  Leaf,
  Home,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

/**
 * Page de comparatif honnête : pompe à chaleur air-eau vs chaudière
 * granulés. Volontairement équilibrée — on dit quand le granulé gagne.
 * L'honnêteté convertit mieux qu'un comparatif biaisé.
 */

type Verdict = "pac" | "granules" | "egal";

interface CritereCompare {
  critere: string;
  icone: React.ReactNode;
  pac: string;
  granules: string;
  verdict: Verdict;
  detail: string;
}

const CRITERES: CritereCompare[] = [
  {
    critere: "Coût d'investissement",
    icone: <Euro className="w-5 h-5" />,
    pac: "11 000 à 17 000 € posée (maison 100-130 m²)",
    granules: "17 000 à 25 000 € posée (chaudière + silo)",
    verdict: "pac",
    detail:
      "La PAC est environ 30 à 40 % moins chère à l'achat. Le granulé reste compétitif si vous avez déjà une chaufferie existante (radiateurs hydrauliques, conduit de fumée, local technique).",
  },
  {
    critere: "Aides MaPrimeRénov' 2026",
    icone: <Leaf className="w-5 h-5" />,
    pac: "5 000 € (Bleu) à 0 € (Rose) selon profil",
    granules: "5 000 € (Bleu) à 0 € (Rose) — montants identiques",
    verdict: "egal",
    detail:
      "Les deux solutions ont les mêmes plafonds MaPrimeRénov' 2026. Coup de pouce CEE également cumulable pour les deux. La différence se fait sur le reste à charge net : PAC plus avantageuse à profil égal car investissement initial plus faible.",
  },
  {
    critere: "Coût annuel chauffage",
    icone: <Flame className="w-5 h-5" />,
    pac: "~1 500 €/an pour 130 m² (PAC SCOP 4,2)",
    granules: "~1 100 €/an pour 130 m² (granulé à 350 €/T)",
    verdict: "granules",
    detail:
      "Le granulé est en moyenne 25 à 30 % moins cher à l'usage que l'électricité. MAIS le prix du granulé a fortement augmenté en 2022-2023 (de 280 €/T à 600 €/T sur certains lots), avant de redescendre. Volatilité forte selon la saison et la région.",
  },
  {
    critere: "Adapté aux logements peu isolés",
    icone: <Home className="w-5 h-5" />,
    pac: "Mieux si rénovation isolation préalable. PAC haute température (Daikin Altherma 3 H) jusqu'à 65 °C de départ d'eau couvre 80 % des cas.",
    granules: "Très bien : peut chauffer à 75-80 °C, idéal pour radiateurs en fonte d'origine non rénovés.",
    verdict: "granules",
    detail:
      "Sur une vieille maison à radiateurs fonte non isolée, le granulé reste plus pertinent. À partir d'une isolation correcte (DPE D ou mieux), la PAC haute température fait jeu égal. En neuf ou rénové, la PAC gagne largement.",
  },
  {
    critere: "Maintenance et entretien",
    icone: <Wrench className="w-5 h-5" />,
    pac: "1 visite annuelle (180-280 €). Quasi rien à faire entre 2 visites.",
    granules: "1 visite annuelle (250-350 €) + ramonage 2x/an + nettoyage cendrier toutes les 1-2 semaines.",
    verdict: "pac",
    detail:
      "La PAC demande beaucoup moins d'attention quotidienne. Le granulé impose une routine : surveiller le silo, vider le cendrier, ramoner. Pour les retraités c'est OK, pour les actifs ou les résidences secondaires c'est contraignant.",
  },
  {
    critere: "Empreinte carbone",
    icone: <Leaf className="w-5 h-5" />,
    pac: "~28 g CO₂/kWh (mix électrique français) × 6 000 kWh = 168 kg CO₂/an",
    granules: "~30 g CO₂/kWh (cycle bois) × 18 000 kWh = 540 kg CO₂/an",
    verdict: "pac",
    detail:
      "Sur le mix électrique français (peu carboné grâce au nucléaire et au renouvelable), la PAC l'emporte. En Allemagne ou Pologne (mix charbon), le calcul s'inverserait. Le granulé est neutre en carbone biologique mais l'usine de pellets et le transport ajoutent une empreinte significative.",
  },
  {
    critere: "Encombrement et stockage",
    icone: <Home className="w-5 h-5" />,
    pac: "Unité extérieure (~80×95×35 cm) en façade ou jardin. Module hydraulique intérieur compact.",
    granules: "Chaudière + silo de 4-7 m³ pour 1 saison. Conduit de fumée obligatoire.",
    verdict: "pac",
    detail:
      "Le granulé demande un local technique dédié (chaufferie + silo). Si vous n'avez pas l'espace, ce n'est pas négociable. La PAC se contente d'une UE en extérieur — beaucoup plus flexible, surtout en appartement ou maison de ville.",
  },
  {
    critere: "Bruit",
    icone: <Volume2 className="w-5 h-5" />,
    pac: "Unité extérieure 35-45 dB (≈ chuchotement à 5 m). Modèles silencieux 19 dB en mode nuit.",
    granules: "Chaudière silencieuse intérieure (< 40 dB), mais ventilation alimentation et soufflerie audibles à proximité.",
    verdict: "egal",
    detail:
      "Égalité : les deux peuvent gêner si mal placés. La PAC pose problème si l'UE est sous une fenêtre voisine (jurisprudence trouble du voisinage). Le granulé pose problème si la chaufferie touche une chambre. Étude bruit recommandée dans les deux cas.",
  },
  {
    critere: "Production d'eau chaude sanitaire",
    icone: <Zap className="w-5 h-5" />,
    pac: "Intégrée (PAC bibloc avec ballon 180-300 L) ou ballon thermodynamique séparé.",
    granules: "Intégrée la plupart du temps (chaudière à serpentin) ou ballon dédié.",
    verdict: "egal",
    detail:
      "Les deux gèrent l'ECS sans souci. Pour la PAC, attention au dimensionnement du ballon en famille de 4-6 personnes (300 L recommandé). Pour le granulé, la chaudière tourne plus souvent en intersaison juste pour l'ECS.",
  },
  {
    critere: "Durée de vie",
    icone: <Clock className="w-5 h-5" />,
    pac: "15 à 22 ans selon marque (Daikin/Mitsubishi 18-22, Atlantic 15-18, AUX 12-15).",
    granules: "20 à 25 ans avec entretien rigoureux. Nettoyage annuel intensif crucial.",
    verdict: "granules",
    detail:
      "Le granulé tient légèrement plus longtemps en moyenne. Mais avec un compresseur PAC bien entretenu, on dépasse facilement les 20 ans. À l'usage, c'est secondaire car les deux durent au moins une génération de propriétaires.",
  },
  {
    critere: "Réversibilité (chauffage + clim été)",
    icone: <Wrench className="w-5 h-5" />,
    pac: "Possible avec PAC réversible : chauffe l'hiver, rafraîchit l'été (mode rafraîchissement plancher chauffant ou ventilo-convecteurs).",
    granules: "Non. Le granulé chauffe uniquement.",
    verdict: "pac",
    detail:
      "Avec les étés à 38-40 °C de plus en plus fréquents en Rhône-Alpes, la réversibilité PAC est un atout majeur. Pour 0 € de plus côté investissement, vous obtenez un rafraîchissement doux qui évite l'achat séparé d'une climatisation.",
  },
  {
    critere: "Approvisionnement en hiver",
    icone: <Trees className="w-5 h-5" />,
    pac: "Aucun stock à gérer. L'électricité est dispo en continu (sauf coupure réseau).",
    granules: "Livraison silo 1-2x par an, plus délicat en hiver enneigé en zone de montagne. Tensions d'approvisionnement possibles (cas de l'hiver 2022-2023).",
    verdict: "pac",
    detail:
      "Pas besoin de surveiller un niveau de silo, pas de \"je n'ai plus de granulés et le livreur arrive dans 3 semaines\". La PAC est une solution sans effort logistique. Pour une résidence secondaire ou pour des seniors, c'est décisif.",
  },
];

const PacVsGranules = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/pac-vs-granules`;

  // Comptage du verdict
  const scorePac = CRITERES.filter((c) => c.verdict === "pac").length;
  const scoreGranules = CRITERES.filter((c) => c.verdict === "granules").length;
  const scoreEgal = CRITERES.filter((c) => c.verdict === "egal").length;

  useSeo({
    title:
      "Pompe à chaleur ou chaudière granulés : comparatif honnête 2026 | ECO CVC",
    description:
      "PAC air-eau ou chaudière à granulés en 2026 ? Comparatif détaillé sur 12 critères : prix, aides, conso, entretien, carbone, bruit. Quand chacun gagne. Guide ECO CVC.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Pompe à chaleur ou chaudière à granulés : comparatif honnête 2026",
      datePublished: "2026-05-07",
      dateModified: "2026-05-07",
      author: { "@type": "Organization", name: "ECO CVC" },
      publisher: {
        "@type": "Organization",
        name: "ECO CVC",
        logo: { "@type": "ImageObject", url: `${baseUrl}/og-image.jpg` },
      },
      mainEntityOfPage: canonical,
    },
  });

  const verdictColor = (v: Verdict) =>
    v === "pac"
      ? "text-brand-blue bg-brand-blue/10"
      : v === "granules"
      ? "text-amber-700 bg-amber-100"
      : "text-slate-500 bg-slate-100";

  const verdictIcon = (v: Verdict) =>
    v === "pac" ? (
      <Zap className="w-3.5 h-3.5" />
    ) : v === "granules" ? (
      <Trees className="w-3.5 h-3.5" />
    ) : (
      <Equal className="w-3.5 h-3.5" />
    );

  const verdictLabel = (v: Verdict) =>
    v === "pac" ? "PAC gagne" : v === "granules" ? "Granulés gagne" : "Égalité";

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-14 md:pt-48 md:pb-20">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                to="/comparateur-chauffages"
                className="hover:text-brand-blue transition-colors"
              >
                Comparateurs
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">PAC vs Granulés</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                <Equal className="w-3.5 h-3.5" />
                Comparatif honnête 2026
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
                Pompe à chaleur ou chaudière à granulés ?
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Vous hésitez entre les deux principales alternatives à la
                chaudière fioul ou gaz ? Voici un comparatif{" "}
                <strong>équilibré et chiffré</strong> sur 12 critères concrets.
                ECO CVC pose des PAC, mais on dit aussi clairement{" "}
                <strong>quand le granulé gagne</strong> — l'honnêteté est notre
                principal argument.
              </p>

              {/* Score header */}
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                <div className="text-center p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20">
                  <div className="text-2xl font-extrabold text-brand-blue">
                    {scorePac}
                  </div>
                  <div className="text-[10px] font-bold uppercase text-brand-blue tracking-wider">
                    PAC gagne
                  </div>
                </div>
                <div className="text-center p-3 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-2xl font-extrabold text-amber-700">
                    {scoreGranules}
                  </div>
                  <div className="text-[10px] font-bold uppercase text-amber-700 tracking-wider">
                    Granulés gagne
                  </div>
                </div>
                <div className="text-center p-3 rounded-xl bg-slate-100 border border-slate-200">
                  <div className="text-2xl font-extrabold text-slate-600">
                    {scoreEgal}
                  </div>
                  <div className="text-[10px] font-bold uppercase text-slate-600 tracking-wider">
                    Égalité
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href="#tableau"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-blue text-white font-bold text-sm hover:bg-brand-bluedark transition-colors shadow-lifted"
                >
                  Voir le tableau détaillé
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/simulateur-aides"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-brand-blue text-brand-blue font-bold text-sm hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Euro className="w-4 h-4" />
                  Simuler mes aides
                </Link>
                <a
                  href="tel:+33758459900"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-brand-red font-bold text-sm hover:text-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  07 58 45 99 00
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Synthèse rapide quand chacun gagne */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Verdict rapide : quand choisir quoi
            </h2>
            <p className="text-sm text-slate-600 mb-10 text-center max-w-2xl mx-auto">
              Si vous voulez la version courte, c'est ici.
            </p>

            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="rounded-3xl bg-white border-2 border-brand-blue/30 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Choisissez la PAC si...
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {[
                    "Votre maison est isolée (DPE D ou mieux) ou en cours de rénovation",
                    "Vous voulez aussi rafraîchir l'été (PAC réversible)",
                    "Vous habitez en plaine, pas en montagne",
                    "Vous voulez zéro contrainte logistique (pas de silo, pas de cendrier)",
                    "Vous êtes actif·ve ou souvent absent·e",
                    "Votre budget initial est plus serré (PAC = 30-40 % moins cher à l'achat)",
                    "Vous avez peu de place pour un local technique",
                  ].map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="w-4 h-4 shrink-0 text-brand-green mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white border-2 border-amber-300 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center">
                    <Trees className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Choisissez le granulé si...
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {[
                    "Maison ancienne mal isolée à radiateurs fonte (sans rénovation prévue)",
                    "Vous êtes en altitude/zone très froide (Chartreuse, Vercors, Belledonne)",
                    "Vous avez un local technique disponible (chaufferie + silo)",
                    "Vous êtes attaché·e au confort \"feu de bois\" et flux thermique chaud",
                    "Vous êtes retraité·e et la routine d'entretien ne vous gêne pas",
                    "Vous voulez minimiser la facture annuelle même si l'investissement initial est plus élevé",
                    "Vous avez accès à du granulé local à prix stable",
                  ].map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 mt-8 max-w-2xl mx-auto">
              ECO CVC pose uniquement les pompes à chaleur. Si votre profil
              correspond mieux au granulé, on vous le dit en visite — et on
              peut vous orienter vers un poseur granulé local de confiance.
            </p>
          </div>
        </section>

        {/* Tableau comparatif détaillé */}
        <section id="tableau" className="py-14 md:py-20 scroll-mt-20">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Comparatif sur 12 critères
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Chaque ligne contient les chiffres réels 2026, et le verdict
              honnête : qui gagne et pourquoi.
            </p>

            <div className="max-w-5xl mx-auto space-y-3">
              {CRITERES.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-2xl bg-white border border-border p-5 hover:shadow-soft transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      {c.icone}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-base md:text-lg font-bold text-slate-900">
                          {c.critere}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${verdictColor(
                            c.verdict,
                          )}`}
                        >
                          {verdictIcon(c.verdict)}
                          {verdictLabel(c.verdict)}
                        </span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 mb-3">
                        <div className="rounded-xl bg-brand-blue/5 border border-brand-blue/20 p-3">
                          <div className="text-[10px] font-bold uppercase text-brand-blue tracking-wider mb-1">
                            <Zap className="w-3 h-3 inline mr-1" />
                            PAC air-eau
                          </div>
                          <p className="text-sm text-slate-700 leading-snug">
                            {c.pac}
                          </p>
                        </div>
                        <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
                          <div className="text-[10px] font-bold uppercase text-amber-700 tracking-wider mb-1">
                            <Trees className="w-3 h-3 inline mr-1" />
                            Chaudière granulés
                          </div>
                          <p className="text-sm text-slate-700 leading-snug">
                            {c.granules}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        {c.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coût total sur 20 ans */}
        <section className="py-14 md:py-20 bg-gradient-to-br from-brand-blue/5 to-amber-50/50">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Coût total sur 20 ans
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-10 text-center max-w-2xl mx-auto">
              Sur la durée de vie complète de l'installation, en cumulant
              investissement, conso annuelle, entretien et remplacements de
              pièces (sur la base d'un foyer profil Jaune avec aides).
            </p>

            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="rounded-3xl bg-white border-2 border-brand-blue/30 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <Zap className="w-6 h-6 text-brand-blue" />
                  <h3 className="text-lg font-bold text-slate-900">
                    PAC air-eau (Daikin Altherma 11 kW)
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    { l: "Investissement initial (après aides)", v: "7 500 €" },
                    { l: "Conso 20 ans (1 500 €/an)", v: "30 000 €" },
                    { l: "Entretien 20 ans (220 €/an)", v: "4 400 €" },
                    {
                      l: "Remplacement compresseur an 15",
                      v: "1 800 €",
                    },
                  ].map((x, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between py-1.5 border-b border-border last:border-0"
                    >
                      <span className="text-slate-600">{x.l}</span>
                      <span className="font-bold text-slate-900">{x.v}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t-2 border-brand-blue/30 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">
                    TOTAL 20 ans
                  </span>
                  <span className="text-2xl font-extrabold text-brand-blue">
                    43 700 €
                  </span>
                </div>
              </div>

              <div className="rounded-3xl bg-white border-2 border-amber-300 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <Trees className="w-6 h-6 text-amber-700" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Chaudière granulés (ÖkoFEN 22 kW)
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    { l: "Investissement initial (après aides)", v: "13 500 €" },
                    { l: "Conso 20 ans (1 100 €/an)", v: "22 000 €" },
                    { l: "Entretien + ramonage 20 ans (380 €/an)", v: "7 600 €" },
                    { l: "Remplacement vis sans fin an 12", v: "950 €" },
                  ].map((x, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between py-1.5 border-b border-border last:border-0"
                    >
                      <span className="text-slate-600">{x.l}</span>
                      <span className="font-bold text-slate-900">{x.v}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t-2 border-amber-300 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">
                    TOTAL 20 ans
                  </span>
                  <span className="text-2xl font-extrabold text-amber-700">
                    44 050 €
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto rounded-2xl bg-white border border-border p-5 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Différence quasi nulle sur 20 ans</strong> (350 €
                d'écart). Le critère financier n'est PAS le différenciant. Ce
                qui doit guider votre choix, ce sont :{" "}
                <strong>
                  l'isolation actuelle, le confort d'usage, la place
                  disponible, et la réversibilité été.
                </strong>{" "}
                Dans 80 % des cas en Auvergne-Rhône-Alpes, la PAC l'emporte
                pour ces raisons d'usage. Le granulé reste pertinent pour les
                vieilles maisons non isolées en montagne.
              </p>
            </div>
          </div>
        </section>

        <CTABand
          title="Visite technique gratuite ECO CVC"
          subtitle="On vient chez vous, on évalue votre cas, on vous dit honnêtement si la PAC est la bonne solution — ou si le granulé serait mieux pour votre logement."
        />

        {/* Liens internes */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-5 text-center">
              Aller plus loin
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { to: "/comparateur-chauffages", label: "PAC vs gaz / fioul / élec" },
                { to: "/simulateur-aides", label: "Aides 2026 par profil" },
                { to: "/calculateur", label: "Dimensionnement de puissance" },
                { to: "/remplacement-chaudiere-fioul", label: "Sortir du fioul" },
                { to: "/remplacement-chaudiere-gaz", label: "Sortir du gaz" },
                { to: "/choisir-installateur-pompe-a-chaleur", label: "Choisir un installateur" },
                { to: "/audit-devis-pac", label: "Audit d'un devis reçu" },
                { to: "/mythes-pompe-a-chaleur", label: "10 mythes PAC" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-border text-sm font-semibold text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {link.label}
                  <ChevronRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default PacVsGranules;
