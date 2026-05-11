/**
 * Page locale "service + ville" générique.
 * Génère 3×73 = 219 pages SEO ultra-ciblées :
 *  - /vmc/:ville
 *  - /depannage-rapide/:ville
 *  - /entretien-pac/:ville
 *
 * Chaque page : contenu unique par ville (réutilise data cities),
 * Schema.org Service + LocalBusiness + FAQ, blocs Outils + LeadMagnet.
 */

import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Check, MapPin, Wind, Wrench, Clock, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { findCity } from "@/data/cities";
import { useSeo } from "@/lib/useSeo";

export type ServiceType = "vmc" | "depannage" | "entretien";

const SERVICE_CONFIG: Record<ServiceType, {
  path: string;
  label: string;
  shortLabel: string;
  h1Suffix: string;
  metaTitlePrefix: string;
  metaDescPrefix: string;
  icon: typeof Wind;
  accent: string;
  intro: (cityName: string) => string;
  contextTitle: string;
  contextLines: (cityName: string) => string[];
  servicesTitle: string;
  services: string[];
  pricesTitle: string;
  prices: string[];
  whyUsTitle: string;
  whyUs: string[];
  faqGenerator: (cityName: string) => { q: string; a: string }[];
  toolsPreset: "ville-pac" | "ville-clim" | "depannage";
}> = {
  vmc: {
    path: "vmc",
    label: "Pose et installation VMC",
    shortLabel: "VMC",
    h1Suffix: "Pose VMC simple ou double flux",
    metaTitlePrefix: "VMC",
    metaDescPrefix: "Pose et installation VMC simple ou double flux",
    icon: Wind,
    accent: "violet",
    intro: (n) =>
      `À ${n} et dans les communes voisines, la pose d'une VMC est devenue indispensable dès qu'on isole une maison. Sans renouvellement d'air, condensation, moisissures et qualité de l'air dégradée arrivent vite. ECO CVC installe les VMC simple flux hygroréglables et les VMC double flux à récupération de chaleur dans toute la zone.`,
    contextTitle: "Pourquoi une VMC est essentielle dans votre logement",
    contextLines: (n) => [
      `Les maisons rénovées à ${n} (changement de fenêtres, isolation thermique par l'intérieur) deviennent étanches : l'air ne circule plus.`,
      `Sans VMC : humidité dans la salle de bain, traces noires sur les murs, qualité de l'air intérieur souvent moins bonne que l'extérieur (acariens, COV).`,
      `Avec une VMC bien dimensionnée : air sain, énergie économisée, valeur du bien préservée.`,
    ],
    servicesTitle: "Notre prestation VMC",
    services: [
      "VMC simple flux autoréglable — la plus économique (1 100-1 600 € posée)",
      "VMC simple flux hygroréglable B — le bon compromis 2026 (1 400-1 900 €)",
      "VMC double flux à récupération de chaleur — pour rénovation lourde et neuf (4 500-7 500 €)",
      "VMC double flux thermodynamique — couple chauffage + ventilation",
      "VMC pour cuisine professionnelle (hottes + extracteurs)",
      "Désenfumage / conformité ERP",
    ],
    pricesTitle: "Tarifs indicatifs 2026",
    prices: [
      "Maison T3-T4 (80-100 m²) hygro B : 1 200-1 700 € HT posée",
      "Maison T5-T6 (120-160 m²) hygro B : 1 400-2 100 € HT",
      "Double flux maison 100 m² (Atlantic / Aldes) : 4 800-6 800 € HT",
      "Double flux maison 150 m² avec by-pass été : 6 500-9 500 € HT",
      "Désenfumage local pro : devis sur mesure",
    ],
    whyUsTitle: "Pourquoi ECO CVC pour votre VMC",
    whyUs: [
      "Étude de débit selon NF DTU 68.3 (pas de pose au pifomètre)",
      "Conduits isolés et étanches (sans cela, perte 30 % d'efficacité)",
      "Bouches positionnées finement pour limiter les bruits",
      "Mise en service avec mesure de débit à l'anémomètre",
      "Garantie pose 2 ans + contrat d'entretien optionnel à 95 €/an",
    ],
    faqGenerator: (n) => [
      {
        q: `Combien de temps pour installer une VMC à ${n} ?`,
        a: `VMC simple flux : 1 journée pour une maison T4-T5. VMC double flux : 2-3 jours selon configuration (passage de gaines isolées).`,
      },
      {
        q: `MaPrimeRénov' couvre-t-elle la VMC ?`,
        a: `Oui, la VMC double flux est éligible MaPrimeRénov' (jusqu'à 2 500 € selon profil) et CEE. La VMC simple flux n'est pas éligible MaPrimeRénov' mais peut être cumulée avec une autre aide.`,
      },
      {
        q: `Faut-il un entretien ?`,
        a: `Oui : nettoyage des bouches tous les 3 mois (vous-même), changement des filtres tous les 6-12 mois sur double flux (40-60 €/an). Contrôle pro tous les 3 ans.`,
      },
    ],
    toolsPreset: "ville-pac",
  },
  depannage: {
    path: "depannage-rapide",
    label: "Dépannage urgent PAC et climatisation",
    shortLabel: "Dépannage",
    h1Suffix: "Dépannage PAC & climatisation",
    metaTitlePrefix: "Dépannage PAC climatisation",
    metaDescPrefix: "Dépannage urgent pompe à chaleur et climatisation",
    icon: Wrench,
    accent: "red",
    intro: (n) =>
      `Votre PAC ou votre climatisation est en panne à ${n} ? ECO CVC intervient en moins de 24h en semaine, 48h le week-end, partout dans le secteur. Diagnostic gratuit, devis transparent, intervention par technicien F-Gaz qualifié.`,
    contextTitle: "Comment ça se passe quand vous nous appelez",
    contextLines: (n) => [
      `Appel au 06 29 63 40 45 — un technicien pose 5-8 questions pour pré-qualifier la panne au téléphone.`,
      `Visite technique sous 24h en semaine à ${n} et alentours (souvent le jour même si signalé avant 14h).`,
      `Diagnostic complet à domicile : test pression, mesure performances, lecture codes erreur.`,
      `Devis transparent posé sur la table : main d'œuvre, pièces, garanties — vous décidez sans pression.`,
    ],
    servicesTitle: "Pannes traitées 7j/7",
    services: [
      "PAC qui ne démarre plus",
      "PAC qui chauffe mal / ne tient pas la consigne",
      "Code erreur affiché (E1, E5, U2, etc.) — voir nos pages codes erreur",
      "Fuite de fluide frigorigène",
      "Compresseur HS",
      "Carte électronique défaillante",
      "Climatisation qui souffle chaud en mode froid",
      "Bruit anormal de l'unité extérieure",
      "Coupures intempestives",
      "Givre permanent sur l'unité extérieure",
    ],
    pricesTitle: "Tarifs SAV transparents",
    prices: [
      "Déplacement diagnostic : 89 € HT (offert si réparation chez nous)",
      "Main d'œuvre : 75 €/h HT",
      "Recharge fluide frigorigène : 180 € HT forfait",
      "Pièces : tarif catalogue fabricant + 10 % marge",
      "Astreinte week-end / férié : majoration 50 %",
    ],
    whyUsTitle: "Pourquoi ECO CVC pour votre dépannage",
    whyUs: [
      "Techniciens F-Gaz qualifiés (manipulation fluides légale)",
      "Stock pièces détachées Daikin, Atlantic, Mitsubishi en local",
      "Intervention sous 24h en semaine, engagement écrit",
      "Diagnostic complet (pas juste « ça vient de la carte »)",
      "Prêt gratuit de radiateurs d'appoint si intervention longue",
      "Devis honnête : si réparer ne vaut plus la peine, on le dit",
    ],
    faqGenerator: (n) => [
      {
        q: `Combien de temps pour intervenir à ${n} en hiver ?`,
        a: `Sous 24h en semaine, 48h le week-end. Pour les clients sous contrat d'entretien, intervention prioritaire sous 12h.`,
      },
      {
        q: `Vous dépannez les marques que vous n'avez pas posées ?`,
        a: `Oui : Daikin, Atlantic, Mitsubishi, Bosch, Saunier Duval, Hitachi, Toshiba, Panasonic. Le diagnostic est universel.`,
      },
      {
        q: `Si la réparation coûte plus que la moitié du remplacement ?`,
        a: `On vous prévient honnêtement. Souvent, basculer en PAC neuve avec MaPrimeRénov' coûte moins cher qu'une grosse réparation. Décision claire avec chiffres.`,
      },
    ],
    toolsPreset: "depannage",
  },
  entretien: {
    path: "entretien-pac",
    label: "Entretien et maintenance PAC",
    shortLabel: "Entretien",
    h1Suffix: "Contrat d'entretien PAC & climatisation",
    metaTitlePrefix: "Entretien PAC climatisation",
    metaDescPrefix: "Contrat d'entretien annuel pompe à chaleur et climatisation",
    icon: Sparkles,
    accent: "green",
    intro: (n) =>
      `L'entretien annuel de votre pompe à chaleur est obligatoire depuis le décret 2020-912 dès 4 kW. À ${n}, ECO CVC propose des contrats d'entretien à partir de 165 € HT/an avec intervention SAV prioritaire sous 48h.`,
    contextTitle: "Pourquoi un contrat d'entretien est rentable",
    contextLines: (n) => [
      `Sans entretien, la performance d'une PAC chute de 5 à 10 % par an. Sur 10 ans, ça représente 30-50 % de surconsommation.`,
      `Une PAC bien entretenue dure 15-20 ans. Une PAC négligée : 8-10 ans. L'entretien double presque la durée de vie.`,
      `Les fabricants exigent souvent une preuve d'entretien pour faire jouer la garantie pièces. Sans contrat = garantie annulée.`,
      `À ${n}, plus de 80 % de nos clients ont souscrit au contrat — c'est devenu un standard.`,
    ],
    servicesTitle: "Notre prestation d'entretien annuel",
    services: [
      "Vérification pression circuit hydraulique + complément si besoin",
      "Contrôle étanchéité fluide frigorigène (test fuite à l'azote)",
      "Nettoyage filtres et échangeurs extérieurs",
      "Test des sécurités (pressostats, sondes, antigel)",
      "Vérification fixations + supports anti-vibratoires",
      "Mesure performance (COP en conditions réelles)",
      "Mise à jour paramètres régulation",
      "Certificat d'entretien remis (à conserver 2 ans minimum)",
    ],
    pricesTitle: "Nos formules contrat d'entretien",
    prices: [
      "Formule Essentielle (PAC ≤ 8 kW) : 165 € HT/an — entretien + certificat",
      "Formule Confort (PAC 8-14 kW) : 220 € HT/an — + SAV prioritaire 48h",
      "Formule Sérénité (toutes PAC) : 350 € HT/an — + main d'œuvre SAV offerte",
      "Pack 3 ans (paiement annuel, -10 %) : -15 à -30 € selon formule",
    ],
    whyUsTitle: "Pourquoi notre contrat d'entretien",
    whyUs: [
      "Visite de 1h30 minimum (pas la visite éclair de 20 min)",
      "Technicien F-Gaz attesté pour la manipulation fluides",
      "Rappel automatique chaque année — pas besoin d'y penser",
      "SAV prioritaire sous 48h pour les clients sous contrat",
      "Tarifs gelés pendant la durée du contrat",
      "Possibilité de transfert vers le nouveau propriétaire en cas de vente",
    ],
    faqGenerator: (n) => [
      {
        q: `Quand faut-il faire l'entretien ?`,
        a: `Idéalement avant l'hiver (septembre-octobre) ou avant l'été (mai-juin) pour la clim. On vous propose un créneau adapté à votre logement à ${n}.`,
      },
      {
        q: `Vous entretenez les marques que vous n'avez pas posées ?`,
        a: `Oui, toutes les marques courantes : Daikin, Atlantic, Mitsubishi, Bosch, Saunier Duval, Hitachi, Toshiba. Le contrat est ouvert à tous.`,
      },
      {
        q: `Et si la PAC tombe en panne sous contrat ?`,
        a: `Intervention sous 48h garantie. Sur la formule Sérénité, la main d'œuvre SAV est offerte toute l'année (pièces et déplacement restent à votre charge).`,
      },
    ],
    toolsPreset: "ville-pac",
  },
};

const ACCENT_CLASSES: Record<string, { from: string; to: string; bg: string; text: string }> = {
  violet: { from: "from-violet-600", to: "to-violet-800", bg: "bg-violet-50", text: "text-violet-700" },
  red:    { from: "from-brand-red",   to: "to-red-800",     bg: "bg-red-50",    text: "text-brand-red" },
  green:  { from: "from-brand-green", to: "to-emerald-800", bg: "bg-green-50",  text: "text-brand-green" },
};

interface ServiceVillePageProps {
  serviceType: ServiceType;
}

const ServiceVillePage = ({ serviceType }: ServiceVillePageProps) => {
  const { ville } = useParams<{ ville: string }>();
  const city = ville ? findCity(ville) : undefined;
  const config = SERVICE_CONFIG[serviceType];
  const baseUrl = "https://ecocvc.pro";

  useSeo({
    title: city ? `${config.metaTitlePrefix} ${city.name} — ECO CVC, intervention rapide` : `${config.label} — ECO CVC`,
    description: city
      ? `${config.metaDescPrefix} à ${city.name} (${city.postalCode}). Devis gratuit, intervention sous 24h. ECO CVC, RGE QualiPAC en ${city.department}.`
      : `${config.label} en Isère et Rhône-Alpes. ECO CVC, artisan RGE QualiPAC.`,
    canonical: city ? `${baseUrl}/${config.path}/${ville}` : `${baseUrl}/${config.path}`,
    jsonLd: city
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${config.label} à ${city.name}`,
            provider: {
              "@type": "HVACBusiness",
              name: "ECO CVC",
              url: baseUrl,
              telephone: "+33629634045",
              areaServed: city.name,
            },
            areaServed: { "@type": "City", name: city.name },
            description: config.intro(city.name),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: config.faqGenerator(city.name).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : undefined,
  });

  if (!city) return <Navigate to="/" replace />;

  const Icon = config.icon;
  const accent = ACCENT_CLASSES[config.accent];
  const faq = config.faqGenerator(city.name);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* HERO */}
        <section className={`pt-32 pb-14 bg-gradient-to-br ${accent.from} ${accent.to} text-white`}>
          <div className="container mx-auto max-w-5xl px-4">
            <nav className="flex items-center gap-1.5 text-xs text-white/80 mb-6">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span>{config.shortLabel}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white font-medium">{city.name}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-4">
                <Icon className="w-3.5 h-3.5" />
                {config.shortLabel} · {city.name} ({city.postalCode})
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
                {config.h1Suffix} à {city.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
                {config.intro(city.name)}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:+33629634045"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-bold hover:bg-slate-100 transition shadow-lifted"
                >
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/40 text-white font-bold hover:bg-white/25 transition"
                >
                  Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTEXTE LOCAL */}
        <section className="py-14 container mx-auto max-w-4xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{config.contextTitle}</h2>
          <div className="space-y-4">
            {config.contextLines(city.name).map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed">{p}</p>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className={`py-14 ${accent.bg}`}>
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{config.servicesTitle}</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {config.services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-border">
                  <Check className={`w-5 h-5 shrink-0 mt-0.5 ${accent.text}`} />
                  <span className="text-sm text-foreground/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TARIFS */}
        <section className="py-14 container mx-auto max-w-4xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{config.pricesTitle}</h2>
          <ul className="space-y-3">
            {config.prices.map((p, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-border">
                <Sparkles className={`w-5 h-5 shrink-0 mt-0.5 ${accent.text}`} />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted-foreground italic">
            Tarifs indicatifs 2026, hors aides MaPrimeRénov' / CEE. Devis personnalisé après visite gratuite.
          </p>
        </section>

        {/* POURQUOI NOUS */}
        <section className={`py-14 ${accent.bg}`}>
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{config.whyUsTitle}</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {config.whyUs.map((w, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-border">
                  <Check className={`w-5 h-5 shrink-0 mt-0.5 ${accent.text}`} />
                  <span className="text-sm text-foreground/85">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OUTILS GRATUITS */}
        <section className="container mx-auto max-w-4xl px-4 py-10">
          <ArticleToolsCTA
            preset={config.toolsPreset}
            variant="highlighted"
            title={`Outils gratuits — ${city.name}`}
            subtitle="Simulez vos aides, vérifiez un devis, calculez votre puissance — résultats instantanés."
          />
        </section>

        {/* LEAD MAGNET */}
        <section className="container mx-auto max-w-4xl px-4 pb-10">
          <LeadMagnetCard
            source={`${config.path}-${ville}`}
            variant="banner"
            title={`Guide ${config.shortLabel} ${city.name} 2026 — gratuit`}
            subtitle={`Tout savoir avant de signer : aides 2026 spécifiques à ${city.department}, marques fiables, arnaques à éviter.`}
          />
        </section>

        {/* COMMUNES VOISINES */}
        {city.communesVoisines && city.communesVoisines.length > 0 && (
          <section className="py-10 container mx-auto max-w-4xl px-4">
            <h2 className="font-display text-xl font-bold mb-5">
              Nous intervenons aussi près de {city.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {city.communesVoisines.map((cv) => (
                <span
                  key={cv}
                  className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-700"
                >
                  <MapPin className="w-3 h-3 inline mr-1 text-brand-blue" />
                  {cv}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-14 container mx-auto max-w-4xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-7">Questions fréquentes</h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details key={i} className="group bg-white border border-border rounded-2xl px-6 py-5 open:shadow-md transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer font-semibold">
                  {item.q}
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90 shrink-0" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServiceVillePage;
