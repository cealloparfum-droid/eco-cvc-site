import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  X,
  AlertTriangle,
  Calendar,
  TrendingDown,
  Euro,
  Flame,
  Zap,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

/**
 * Page de remplacement de chaudière (fioul ou gaz) — landing à très forte
 * intention transactionnelle pour la pose de PAC air-eau.
 *
 * Une seule implémentation partagée, deux configurations distinctes pour
 * deux URLs SEO indépendantes.
 */

type ChaudiereType = "fioul" | "gaz";

interface Config {
  type: ChaudiereType;
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  reglementation: { title: string; text: string }[];
  economieKwh: { titre: string; avant: string; apres: string };
  bonus: string | null;
  faq: { q: string; a: string }[];
}

const FIOUL: Config = {
  type: "fioul",
  slug: "remplacement-chaudiere-fioul",
  title: "Remplacement chaudière fioul par pompe à chaleur 2026 | ECO CVC Isère",
  description:
    "Remplacer votre chaudière fioul par une PAC air-eau en Isère et Rhône-Alpes : aides 2026 jusqu'à 12 000 €, bonus sortie fioul +1 000 €, économies 60-75% sur la facture. Visite technique gratuite. ECO CVC, RGE QualiPAC.",
  h1: "Remplacer votre chaudière fioul par une pompe à chaleur",
  intro:
    "Votre chaudière fioul a plus de 15 ans, consomme 2 500 à 4 000 litres par an et coûte de plus en plus cher à entretenir ? Vous êtes au bon endroit. Le remplacement par une pompe à chaleur air-eau est aujourd'hui le projet le plus rentable que vous puissiez engager : 60 à 75 % d'économie sur la facture chauffage, jusqu'à 12 000 € d'aides cumulées, et une cuve fioul retirée de votre cave. ECO CVC vous accompagne de bout en bout, de l'étude thermique au démontage de l'ancienne installation.",
  reglementation: [
    {
      title: "Interdiction d'installation neuf depuis le 1er juillet 2022",
      text: "Décret n° 2022-8 du 5 janvier 2022 : il est interdit d'installer une nouvelle chaudière fioul dans un logement, neuf ou ancien. Le remplacement à l'identique est encore toléré jusqu'à panne irréparable, mais l'État pousse fortement à la transition.",
    },
    {
      title: "Hausse continue du prix du fioul",
      text: "Le fioul domestique est passé d'environ 0,75 €/L en 2019 à 1,15-1,30 €/L en 2024-2025, avec une volatilité forte liée au pétrole. Pour 3 000 L/an, c'est ~3 600 €/an de chauffage, vs ~900-1 200 €/an avec une PAC air-eau dimensionnée correctement.",
    },
    {
      title: "Cuve fioul : démontage obligatoire si abandon définitif",
      text: "Cuve métallique enterrée : neutralisation par dégazage et inertage (sable ou mousse), ou retrait. Cuve aérienne : démontage et évacuation. ECO CVC sous-traite à un partenaire agréé (~600-1 200 € selon volume et accessibilité), souvent éligible à une aide complémentaire.",
    },
    {
      title: "DPE : passage de F/G à C/D systématique",
      text: "Une maison fioul des années 80 chauffée à 21 °C est généralement classée F. Après remplacement par une PAC + entretien correct, elle remonte à C ou D — décisif pour la valeur du bien et la possibilité de location (DPE F interdit à la location depuis 2025, DPE E à partir de 2034).",
    },
  ],
  economieKwh: {
    titre: "Une maison de 120 m² mal isolée en Isère",
    avant: "Chaudière fioul : 3 200 L/an × 1,20 €/L = 3 840 €/an",
    apres: "PAC air-eau 11 kW (SCOP 4,2) : 7 600 kWh × 0,21 € = 1 596 €/an",
  },
  bonus: "Bonus +1 000 € sortie de chaudière fioul (cumulable avec MaPrimeRénov' Bleu et Jaune)",
  faq: [
    {
      q: "Combien coûte le remplacement complet d'une chaudière fioul par une PAC ?",
      a: "Pour une maison 100-130 m² en Isère/Rhône-Alpes : 12 000 à 17 000 € posée pour la PAC air-eau (Daikin, Mitsubishi, Atlantic), + 600 à 1 200 € pour le démontage de la cuve fioul. Avec MaPrimeRénov' (jusqu'à 5 000 €), le bonus sortie fioul (+1 000 €), le Coup de pouce CEE (2 500 à 5 000 €) et la TVA réduite à 5,5 %, le reste à charge tombe couramment à 4 000-9 000 € pour les ménages modestes à intermédiaires.",
    },
    {
      q: "Faut-il changer les radiateurs ?",
      a: "Dans 80 % des cas, non. Une PAC haute température (Daikin Altherma 3 H, Mitsubishi Hydrobox HT, Atlantic Alféa Hybrid Duo) fonctionne avec les radiateurs en fonte d'origine jusqu'à 65 °C de départ d'eau. Notre étude thermique pendant la visite valide ça avant le devis. Si certains radiateurs sont sous-dimensionnés, on les remplace ponctuellement (200-400 € par radiateur).",
    },
    {
      q: "Combien de temps dure le chantier ?",
      a: "Pose PAC air-eau seule : 2 jours, dont une journée de raccordement hydraulique sur le circuit existant. Avec démontage cuve fioul : +1 à 2 jours selon le volume. On organise la dépose de l'ancienne chaudière le matin et la mise en service de la PAC en fin de journée — pas de coupure de plus de 6-8 h en hiver.",
    },
    {
      q: "Puis-je garder ma chaudière fioul en secours ?",
      a: "Oui, c'est l'option hybride : la PAC assure 90 % de la production, la chaudière fioul prend le relais en pic de froid (-15 °C). C'est rassurant les deux premiers hivers. Mais attention : on ne touche plus à la prime sortie fioul, et l'entretien chaudière fioul reste obligatoire. La majorité de nos clients opte pour le tout-PAC après 2 hivers de fonctionnement.",
    },
    {
      q: "Suis-je éligible à MaPrimeRénov' fin 2026 ?",
      a: "Oui, le dispositif est reconduit en 2026 avec les mêmes plafonds par profil (Bleu, Jaune, Violet, Rose). La PAC air-eau reste l'un des gestes les mieux soutenus, surtout en sortie de chaudière fioul. Notre simulateur sur /simulateur-aides vous donne le montant exact selon vos revenus et votre département.",
    },
    {
      q: "Que devient mon ancienne cuve fioul ?",
      a: "Trois options : (1) neutralisation sur place (dégazage + remplissage avec sable ou mousse PU), ~600 € pour une cuve aérienne 1 500 L, (2) retrait complet par un opérateur agréé, ~900-1 500 €, (3) réutilisation comme citerne d'eau de pluie après nettoyage. ECO CVC coordonne avec un partenaire local agréé.",
    },
  ],
};

const GAZ: Config = {
  type: "gaz",
  slug: "remplacement-chaudiere-gaz",
  title: "Remplacement chaudière gaz par pompe à chaleur 2026 | ECO CVC Isère",
  description:
    "Remplacer votre chaudière gaz par une PAC air-eau en Isère et Rhône-Alpes : aides 2026 jusqu'à 11 000 €, économies 40-55%, visite technique gratuite. RGE QualiPAC. ECO CVC.",
  h1: "Remplacer votre chaudière gaz par une pompe à chaleur",
  intro:
    "Votre chaudière gaz a plus de 12 ans ou vous voulez anticiper la fin programmée du gaz dans le neuf ? Le remplacement par une PAC air-eau divise votre consommation par 2,5 à 3 et vous décorrèle des hausses futures du prix du gaz. ECO CVC dimensionne, installe et raccorde votre nouvelle PAC sur votre circuit chauffage existant — radiateurs ou plancher chauffant — avec démontage de l'ancienne chaudière inclus. Étude thermique gratuite, montage du dossier d'aides sans frais.",
  reglementation: [
    {
      title: "Interdiction d'installation gaz dans le neuf depuis 2022 (RE2020)",
      text: "Réglementation Environnementale 2020 : depuis le 1er janvier 2022, les maisons neuves individuelles ne peuvent plus être chauffées au gaz. Pour les logements collectifs neufs, l'interdiction est entrée en vigueur en 2025. Pour l'existant, le remplacement est encore autorisé mais fortement découragé fiscalement.",
    },
    {
      title: "Fin programmée des aides gaz",
      text: "MaPrimeRénov' a totalement supprimé les chaudières gaz à condensation de la liste des équipements aidés en 2023. Aujourd'hui, remplacer une chaudière gaz par une autre chaudière gaz coûte intégralement de votre poche. Seul le remplacement par PAC, biomasse ou solaire thermique est subventionné.",
    },
    {
      title: "Volatilité du prix du gaz",
      text: "Le prix repère du gaz a doublé entre 2021 et 2023 (passage de ~0,07 €/kWh PCS à ~0,12 €/kWh). La fin du tarif réglementé en 2023 et la fin progressive du Tarif Bleu Pro pour les commerces a fragilisé les petites structures. Une PAC vous met sur l'électricité, dont le tarif évolue plus lentement.",
    },
    {
      title: "PAC hybride : compromis pour zones très froides",
      text: "Si vous êtes en altitude (Chartreuse, Vercors, Belledonne) avec températures de base à -15 °C, la PAC hybride couple PAC air-eau + chaudière gaz à condensation conservée. La PAC fait 90 % du job, le gaz prend le relais sous -7 °C. Maintien partiel des aides, retour sur investissement plus rapide qu'un tout-PAC dans ces zones.",
    },
  ],
  economieKwh: {
    titre: "Un appartement de 90 m² en agglo lyonnaise",
    avant: "Chaudière gaz à condensation : 12 000 kWh PCS/an × 0,11 € = 1 320 €/an",
    apres: "PAC air-eau 8 kW (SCOP 4,0) : 3 000 kWh × 0,21 € = 630 €/an",
  },
  bonus: null,
  faq: [
    {
      q: "Le remplacement gaz → PAC est-il toujours rentable ?",
      a: "Pour une consommation supérieure à 8 000 kWh PCS/an (typique d'une maison individuelle), oui. Économie annuelle de 600 à 1 400 € selon la taille du logement. Avec aides, retour sur investissement de 7 à 12 ans, sachant qu'une PAC dure 18-22 ans. Pour un petit appartement <60 m² avec faible conso (<5 000 kWh/an), c'est plus tangent : on vous le dira honnêtement lors de la visite technique.",
    },
    {
      q: "Que faire de l'arrivée gaz ?",
      a: "Soit on la maintient (utile si vous gardez plaque de cuisson gaz, gazinière, ou si vous optez pour PAC hybride). Soit on demande à GRDF la coupure définitive du branchement (gratuit). Le compteur est récupéré, la conduite intérieure neutralisée. Délai GRDF : 4 à 6 semaines.",
    },
    {
      q: "Peut-on garder le plancher chauffant existant ?",
      a: "Oui, c'est même idéal : un PCBT (plancher chauffant basse température) avec une PAC, c'est le combo le plus efficient (SCOP 4,5+). Aucun travaux sur le sol, on raccorde simplement la nouvelle PAC sur le distributeur existant.",
    },
    {
      q: "Combien coûte un remplacement complet ?",
      a: "12 000 à 17 000 € posée pour une maison 100-130 m². Avec MaPrimeRénov' (3 000 à 5 000 € selon profil), Coup de pouce CEE (2 500 à 5 000 €) et TVA 5,5 %, le reste à charge oscille entre 5 000 et 11 000 € pour les ménages modestes à intermédiaires. Pour un appartement avec PAC compacte sur balcon, le budget descend à 8 000-12 000 €.",
    },
    {
      q: "Faut-il l'accord de la copropriété pour un appartement ?",
      a: "Oui pour l'unité extérieure (UE) si elle est posée en façade ou sur balcon visible : vote en AG nécessaire (majorité simple article 25 depuis la loi Climat & Résilience 2021). On fournit un dossier technique pour la copro (plans, niveau sonore, intégration paysagère). 90 % des dossiers passent au premier vote.",
    },
    {
      q: "Quelle est la différence avec une PAC air-air (climatisation réversible) ?",
      a: "La PAC air-air diffuse l'air chaud par splits muraux et n'est PAS éligible MaPrimeRénov' (uniquement la prime CEE classique, 250-1 100 €). La PAC air-eau alimente votre circuit hydraulique existant (radiateurs, plancher chauffant) et donne droit aux aides maximales. Pour remplacer une chaudière, c'est quasi systématiquement la PAC air-eau qui est conseillée.",
    },
  ],
};

const RemplacementChaudiereView = ({ config }: { config: Config }) => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/${config.slug}`;
  const isFioul = config.type === "fioul";

  useSeo({
    title: config.title,
    description: config.description,
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: `Remplacement chaudière ${config.type} par pompe à chaleur`,
          provider: {
            "@type": "LocalBusiness",
            name: "ECO CVC",
            telephone: "+33758459900",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1074 Route Départementale 1085",
              postalCode: "38300",
              addressLocality: "Nivolas-Vermelle",
              addressCountry: "FR",
            },
          },
          areaServed: ["Isère", "Rhône", "Savoie", "Haute-Savoie", "Loire", "Ain"],
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: 12000,
              maxPrice: 17000,
              priceCurrency: "EUR",
            },
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: config.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    },
  });

  const accent = isFioul ? "amber" : "sky";
  const accentBg = isFioul ? "bg-amber-100" : "bg-sky-100";
  const accentText = isFioul ? "text-amber-800" : "text-sky-800";
  const accentBorder = isFioul ? "border-amber-200" : "border-sky-200";

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
              <Link to="/installation" className="hover:text-brand-blue transition-colors">
                Installation
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">
                Remplacement chaudière {config.type}
              </span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${accentBg} ${accentText} text-xs font-bold uppercase tracking-wider mb-4`}
              >
                <Flame className="w-3.5 h-3.5" />
                Sortie {config.type} 2026
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
                {config.h1}
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {config.intro}
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href="tel:+33758459900"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-red text-white font-bold text-sm hover:bg-red-600 transition-colors shadow-lifted"
                >
                  <Phone className="w-4 h-4" />
                  07 58 45 99 00
                </a>
                <Link
                  to="/devis-pompe-a-chaleur"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-brand-blue text-brand-blue font-bold text-sm hover:bg-brand-blue hover:text-white transition-colors"
                >
                  Devis gratuit en 1 minute
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/simulateur-aides"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-600 font-bold text-sm hover:text-brand-blue transition-colors"
                >
                  <Euro className="w-4 h-4" />
                  Simuler mes aides
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparatif avant/après */}
        <section className="py-14 md:py-20 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Avant / après en chiffres
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-10 text-center max-w-2xl mx-auto">
              {config.economieKwh.titre}, sur la base d'un hiver standard en région Auvergne-Rhône-Alpes.
            </p>

            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white border-2 border-slate-200 p-7 relative overflow-hidden"
              >
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Avant
                </span>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-slate-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Chaudière {config.type} actuelle
                </h3>
                <p className="text-2xl font-extrabold text-slate-900 mb-1">
                  {config.economieKwh.avant.split(":")[1]?.trim()}
                </p>
                <p className="text-xs text-slate-500">
                  {config.economieKwh.avant.split(":")[0]}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-bluedark text-white p-7 relative overflow-hidden shadow-lifted"
              >
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-white/70">
                  Après
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">PAC air-eau dimensionnée</h3>
                <p className="text-2xl font-extrabold mb-1">
                  {config.economieKwh.apres.split(":")[1]?.trim()}
                </p>
                <p className="text-xs text-white/80">
                  {config.economieKwh.apres.split(":")[0]}
                </p>
              </motion.div>
            </div>

            <div className="mt-8 max-w-2xl mx-auto rounded-2xl bg-brand-green/10 border border-brand-green/30 p-5 text-center">
              <p className="text-sm text-slate-700">
                <span className="inline-flex items-center gap-1.5 font-bold text-brand-green">
                  <TrendingDown className="w-4 h-4" />
                  Économie annuelle :
                </span>{" "}
                <span className="font-extrabold text-slate-900 text-lg">
                  {isFioul ? "2 244 €/an" : "690 €/an"}
                </span>{" "}
                {isFioul
                  ? "(soit -58% sur la facture chauffage, hors hausses futures du fioul)"
                  : "(soit -52%, indépendant des hausses futures du gaz)"}
              </p>
            </div>
          </div>
        </section>

        {/* Réglementation et contexte */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Pourquoi maintenant ?
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-10 text-center max-w-2xl mx-auto">
              Quatre raisons réglementaires et économiques qui font de 2026 la
              meilleure année pour franchir le pas.
            </p>

            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {config.reglementation.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-2xl bg-white border ${accentBorder} p-6 hover:shadow-soft transition-shadow`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div
                      className={`w-9 h-9 shrink-0 rounded-lg ${accentBg} ${accentText} flex items-center justify-center`}
                    >
                      <AlertTriangle className="w-4.5 h-4.5" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {r.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{r.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aides 2026 */}
        <section className="py-14 md:py-20 bg-gradient-to-br from-brand-blue/5 via-brand-sky/5 to-transparent">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Aides cumulables 2026
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-10 text-center max-w-2xl mx-auto">
              ECO CVC monte le dossier complet pour vous : MaPrimeRénov',
              CEE, TVA réduite. Vous validez en ligne, recevez la prime 4 à 8
              semaines après facturation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                {
                  titre: "MaPrimeRénov'",
                  montant: "Jusqu'à 5 000 €",
                  detail: "Selon profil de revenus (Bleu/Jaune/Violet)",
                },
                {
                  titre: "Coup de pouce CEE",
                  montant: "2 500 à 5 000 €",
                  detail: "Cumulable avec MaPrimeRénov'",
                },
                {
                  titre: "TVA 5,5 %",
                  montant: "~14 % d'éco",
                  detail: "Sur fourniture et pose",
                },
                {
                  titre: config.bonus ? "Bonus sortie fioul" : "Éco-PTZ",
                  montant: config.bonus ? "+1 000 €" : "0 % jusqu'à 50 k€",
                  detail: config.bonus
                    ? "Profils Bleu et Jaune"
                    : "Étalement du reste à charge",
                },
              ].map((aide, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl bg-white border border-border p-5 text-center hover:border-brand-blue hover:shadow-soft transition-all"
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-brand-blue mb-1">
                    {aide.titre}
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 mb-1.5">
                    {aide.montant}
                  </div>
                  <p className="text-xs text-slate-500 leading-snug">
                    {aide.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/simulateur-aides"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue text-white font-bold text-sm hover:bg-brand-bluedark transition-colors shadow-lifted"
              >
                <Euro className="w-4 h-4" />
                Calculer mes aides personnalisées
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Notre process */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Notre process en 5 étapes
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-10 text-center max-w-2xl mx-auto">
              De votre premier appel à la mise en service, nous gérons tout —
              y compris le démontage de l'ancienne installation.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  n: "1",
                  t: "Visite technique gratuite",
                  d: "Étude thermique du logement, mesure des radiateurs, vérification du circuit hydraulique, choix de l'emplacement de l'unité extérieure. Durée : 45 min à 1 h. Rendez-vous sous 5 jours ouvrés.",
                  i: <Clock className="w-5 h-5" />,
                },
                {
                  n: "2",
                  t: "Devis détaillé + dossier d'aides",
                  d: "Devis personnalisé sous 48 h, avec montants exacts d'aides simulés (MaPrimeRénov', CEE, TVA). Vous signez, on monte le dossier. Délai d'accord MaPrimeRénov' : 15 jours en moyenne.",
                  i: <Euro className="w-5 h-5" />,
                },
                {
                  n: "3",
                  t: "Commande matériel + planification",
                  d: "Commande dès accord aides. Livraison sous 2 à 4 semaines selon marque. On planifie la pose à votre convenance, en évitant les pics de chauffage si possible.",
                  i: <Calendar className="w-5 h-5" />,
                },
                {
                  n: "4",
                  t: "Pose en 2 jours + démontage ancienne installation",
                  d: `Jour 1 : pose unité extérieure et raccordements. Jour 2 : raccordement hydraulique, mise en service, démontage chaudière ${config.type}${
                    isFioul ? " et neutralisation cuve" : ""
                  }. Pas de coupure de chauffage > 6 h en hiver.`,
                  i: <ShieldCheck className="w-5 h-5" />,
                },
                {
                  n: "5",
                  t: "Mise en service + suivi 1 an",
                  d: "Réglage de la loi d'eau selon votre logement, formation à l'utilisation (15 min), remise du carnet d'entretien. Visite de suivi à 12 mois pour optimiser les réglages selon votre usage réel.",
                  i: <Check className="w-5 h-5" />,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-border"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-extrabold text-lg">
                    {step.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-900 mb-1 inline-flex items-center gap-2">
                      <span className="text-brand-blue">{step.i}</span>
                      {step.t}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.d}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Questions fréquentes
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-10 text-center max-w-2xl mx-auto">
              {config.faq.length} questions concrètes que nos clients posent en
              visite technique. Une autre question ? Appelez le 07 58 45 99 00.
            </p>

            <div className="max-w-3xl mx-auto space-y-3">
              {config.faq.map((f, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group rounded-2xl bg-white border border-border p-5 hover:border-brand-blue/40 transition-colors"
                >
                  <summary className="flex items-start justify-between gap-3 cursor-pointer list-none">
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {f.q}
                    </h3>
                    <ChevronRight className="w-4 h-4 shrink-0 text-slate-400 mt-0.5 group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">
                    {f.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title={`Prêt à remplacer votre chaudière ${config.type} ?`}
          subtitle="Visite technique gratuite sous 5 jours ouvrés. Devis sous 48 h. Aides montées par nos soins."
        />

        {/* Liens internes */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-5 text-center">
              Aller plus loin
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { to: "/simulateur-aides", label: "Simulateur d'aides" },
                { to: "/comparateur-chauffages", label: "Comparateur PAC vs gaz/fioul" },
                { to: "/calculateur", label: "Dimensionnement de puissance" },
                { to: "/audit-devis-pac", label: "Audit d'un devis reçu" },
                { to: "/eligibilite-maprimerenov", label: "Éligibilité MaPrimeRénov'" },
                { to: "/calendrier-aides-2026", label: "Calendrier aides 2026" },
                { to: "/blog", label: "Blog & guides" },
                {
                  to: isFioul ? "/remplacement-chaudiere-gaz" : "/remplacement-chaudiere-fioul",
                  label: isFioul ? "Vous êtes au gaz ?" : "Vous êtes au fioul ?",
                },
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

export const RemplacementChaudiereFioul = () => (
  <RemplacementChaudiereView config={FIOUL} />
);

export const RemplacementChaudiereGaz = () => (
  <RemplacementChaudiereView config={GAZ} />
);

export default RemplacementChaudiereFioul;
