import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  Home,
  TrendingUp,
  Users,
  Lock,
  Wifi,
  Star,
  ArrowRight,
  Euro,
  Calendar,
  Snowflake,
  Award,
  Shield,
  Wrench,
  Clock,
  AlertTriangle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import jSeriesCozy from "@/assets/catalog/j-series-cozy.jpg";

const ROI_DATA = [
  { label: "Tarif moyen nuitée gîte/Airbnb non climatisé (été)", value: "85 €" },
  { label: "Tarif moyen nuitée gîte/Airbnb climatisé (été)", value: "115 €", positive: true },
  { label: "Plus-value mensuelle (juillet-août, 90 % occupation)", value: "+1 670 €", positive: true },
  { label: "Investissement clim 3,5 kW posée", value: "990 €" },
  { label: "Retour sur investissement", value: "1ère saison estivale" },
];

const FONCTIONS = [
  {
    icon: Lock,
    title: "Limitation de température",
    desc: "Bornage min 18 °C / max 28 °C : impossible pour le locataire de pousser à 16 °C ou 32 °C. Économies garanties.",
  },
  {
    icon: Wifi,
    title: "Pilotage à distance (wifi)",
    desc: "Vous voyez l'état de la clim depuis votre smartphone, vous pouvez l'éteindre à distance entre 2 locations, programmer la mise en route avant l'arrivée du suivant.",
  },
  {
    icon: Calendar,
    title: "Programmation hebdomadaire",
    desc: "La clim s'allume automatiquement 30 min avant le check-in, s'éteint à 11h le jour du check-out. Plus de surprise sur la facture.",
  },
  {
    icon: Shield,
    title: "Modèles renforcés",
    desc: "Marque AUX professionnel : compresseur DC Inverter robuste, conçu pour 12-15 cycles/jour. Garantie 3 ans.",
  },
];

const RETOURS = [
  {
    name: "Bénédicte M.",
    type: "Gîte Saint-Hilaire-du-Touvet (38)",
    rating: 5,
    text: "ECO CVC a posé 2 splits dans le gîte en mars 2024. Résultat : note booking passée de 8,9 à 9,4, taux d'occupation été +18 %, et 90 % des avis positifs mentionnent la clim.",
  },
  {
    name: "Karim B.",
    type: "Airbnb Lyon Confluence (69)",
    rating: 5,
    text: "Bi-split avec wifi, parfait. Je gère mes 3 logements depuis l'app, j'ai économisé ~120 €/mois d'élec rien qu'en programmant les extinctions.",
  },
  {
    name: "Famille Lacombe",
    type: "Gîte rural Cremieu (38)",
    rating: 5,
    text: "Tri-split installé en 2 jours, propre et discret. Les locataires saluent systématiquement le confort. On a augmenté le tarif de 25 €/nuit en saison sans perdre en réservations.",
  },
];

const FAQ = [
  {
    q: "Mon gîte est-il rentable s'il n'est pas climatisé ?",
    a: "En 2024, 67 % des locataires Airbnb/Booking en France filtrent leurs recherches sur 'climatisation' en saison estivale (étude AirDNA). Sans clim, vous perdez ~30 % de visibilité dans les résultats et devez baisser vos tarifs de 15-25 % pour compenser. La clim devient un standard, plus un luxe.",
  },
  {
    q: "Combien de temps pour rentabiliser l'installation ?",
    a: "Cas typique : gîte 4 personnes en Isère/Savoie/Rhône, 3,5 kW à 990 €. Plus-value tarifaire moyenne : +25 à +35 €/nuit en juillet-août. Avec 60 nuits sur juillet-août, soit +1 800 € de revenus supp. La clim est rentabilisée dès la 1ère saison.",
  },
  {
    q: "Comment éviter que les locataires fassent exploser ma facture ?",
    a: "Trois leviers : (1) bornage de température 18-28 °C dans le menu installateur, (2) module wifi pour piloter à distance et éteindre entre 2 locations, (3) programmation auto on/off selon les check-in/out. ECO CVC paramètre tout pour vous lors de la pose.",
  },
  {
    q: "Que faire si un locataire casse la télécommande ?",
    a: "On vous fournit 2 télécommandes à la pose (1 d'usage + 1 de secours). Si elles sont perdues : commande wifi via app smartphone (si module installé) ou télécommande de remplacement à 25-35 €. La clim ne peut pas être utilisée 'sans' commande, donc le locataire est responsable.",
  },
  {
    q: "L'installation est-elle déductible des revenus locatifs ?",
    a: "Oui, en LMNP (Loueur Meublé Non Professionnel) ou en régime réel des revenus fonciers, les travaux d'amélioration sont amortissables sur 10-20 ans. Pour un gîte rural classé, certains conseils départementaux (Isère, Savoie) proposent aussi des subventions. Demandez à votre comptable + Office du Tourisme local.",
  },
  {
    q: "Quelle puissance pour un gîte 4-6 personnes ?",
    a: "Pour le séjour (35-50 m²) : 3,5 à 5,0 kW. Pour les chambres (10-15 m²) : 2,5 kW chacune. Configuration typique gîte 6 pers : tri-split avec 1 unité 5 kW au séjour + 2 unités 2,5 kW dans les chambres. Total environ 4 500-5 500 € posé.",
  },
  {
    q: "Combien de temps prend la pose ?",
    a: "Mono-split : 1 journée. Bi/tri-split : 1-2 jours. Gainable : 3-5 jours. Idéalement, on intervient en intersaison (octobre-mars) pour ne pas perturber les locations. Délai entre commande et pose en hiver : 2-3 semaines.",
  },
  {
    q: "Vous proposez un contrat d'entretien adapté gîte ?",
    a: "Oui : visite préventive 1x/an avant la haute saison (mai-juin), nettoyage filtres, contrôle pression, test mode chaud + mode froid. Tarif : 120 à 180 €/an selon nombre de splits. Nous priorisons les gîtes équipés ECO CVC en cas de panne en haute saison.",
  },
];

const ClimGite = () => {
  useSeo({
    title:
      "Climatisation pour gîte / Airbnb : ROI dès la 1ère saison | ECO CVC",
    description:
      "Installer une climatisation dans votre gîte ou Airbnb : limitation de température, pilotage wifi, programmation, ROI dès la première saison estivale. Tri-split à partir de 3 990 €. Devis gratuit.",
    canonical: "https://ecocvc.pro/climatisation-gite-airbnb",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Installation climatisation pour gîte et Airbnb",
          provider: { "@type": "Organization", name: "ECO CVC" },
          areaServed: ["Isère", "Rhône", "Lyon", "Savoie", "Haute-Savoie"],
          description:
            "Pose de climatisation réversible pour gîtes ruraux, location saisonnière, meublés de tourisme. Pilotage wifi, limitation de température, programmation.",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "990",
            availability: "https://schema.org/InStock",
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
      ],
    },
  });

  return (
    <PageTransition>
      <Navbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-brand-red text-white pt-28 pb-14">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="container mx-auto px-4 relative">
            <nav className="text-sm text-white/70 mb-6 flex items-center gap-1">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Clim gîte / Airbnb</span>
            </nav>

            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-widest mb-4">
                  <Home className="w-3.5 h-3.5" />
                  Spécial location saisonnière
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  Climatisation pour{" "}
                  <span className="text-white drop-shadow-lg">gîte / Airbnb</span>
                </h1>
                <p className="text-lg text-white/95 mb-6">
                  La clim n'est plus un luxe sur les plateformes : c'est un{" "}
                  <strong>filtre de recherche</strong> qui décide si vos
                  locataires vous voient ou pas. ROI mesurable dès la
                  1ère saison estivale, contrôle total contre les abus,
                  pilotage à distance.
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <a
                    href="tel:+33629634045"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-orange-600 font-bold hover:bg-slate-100 transition shadow-lifted"
                  >
                    <Phone className="w-4 h-4" /> 06 29 63 40 45
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition"
                  >
                    Étude rentabilité gratuite
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/90">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> ROI 1ère saison
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Wifi inclus
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Bornage température
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={jSeriesCozy}
                  alt="Climatisation discrète posée dans un séjour de gîte rural"
                  className="rounded-3xl border-4 border-white/20 shadow-lifted w-full h-72 md:h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="border-y border-slate-200 bg-slate-50 py-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              {[
                { icon: Award, label: "RGE QualiPAC" },
                { icon: TrendingUp, label: "ROI mesurable" },
                { icon: Lock, label: "Bornage température" },
                { icon: Star, label: "4,9/5 (127 avis)" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 justify-center text-slate-700">
                  <t.icon className="w-5 h-5 text-orange-600 shrink-0" />
                  <span className="text-sm font-semibold">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              Calcul de rentabilité (gîte 4 pers, Isère/Savoie)
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Données AirDNA + retours clients ECO CVC sur 30+ gîtes équipés.
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-orange-200 p-6 md:p-8">
              <ul className="divide-y divide-orange-200">
                {ROI_DATA.map((r) => (
                  <li
                    key={r.label}
                    className="flex justify-between items-center py-3 gap-4"
                  >
                    <span className="text-sm text-slate-700">{r.label}</span>
                    <span
                      className={`font-black text-xl shrink-0 ${
                        r.positive ? "text-emerald-700" : "text-slate-900"
                      }`}
                    >
                      {r.value}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white rounded-xl border border-orange-300">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-800">
                    <strong>Bilan :</strong> à 990 € investis, vous récupérez
                    +1 670 € dès le 1er mois de juillet ou août. Tous les
                    revenus suivants des saisons à venir sont du{" "}
                    <strong>pur bénéfice</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FONCTIONS SPÉCIFIQUES */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              4 fonctionnalités clés pour la location courte durée
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Des paramétrages spécifiques que nous activons à la pose pour
              votre tranquillité.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FONCTIONS.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-soft"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGES */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              Ils ont équipé leur gîte avec ECO CVC
            </h2>
            <p className="text-slate-600 text-center mb-10">
              Avis vérifiés de propriétaires ECO CVC.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {RETOURS.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-200 p-5 shadow-soft"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm mb-4 italic leading-relaxed">
                    « {r.text} »
                  </p>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">{r.name}</div>
                    <div className="text-slate-500">{r.type}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA MIDDLE */}
        <section className="py-12 bg-gradient-to-br from-amber-500 via-orange-500 to-brand-red text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Étude rentabilité personnalisée gratuite
            </h2>
            <p className="text-white/90 mb-6">
              Visite sur place, calcul du ROI selon votre tarif moyen + taux
              d'occupation, devis détaillé. Aucun engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+33629634045"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-orange-600 font-extrabold hover:bg-slate-100 transition shadow-lifted"
              >
                <Phone className="w-4 h-4" /> 06 29 63 40 45
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 transition"
              >
                Demander une étude
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">
              FAQ Gîte / Airbnb
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
                  <p className="mt-3 text-slate-700 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Voir aussi</h2>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                { to: "/climatisation-reversible-990-euros", label: "Offre 990 € détaillée" },
                { to: "/tarifs-climatisation-reversible", label: "Tous nos tarifs" },
                { to: "/climatisation-copropriete", label: "Clim en copropriété" },
                { to: "/produits", label: "Gamme AUX" },
                { to: "/installation", label: "Notre méthode de pose" },
                { to: "/maintenance", label: "Contrat entretien" },
                { to: "/depannage", label: "Dépannage 24/7" },
                { to: "/avis", label: "Avis clients" },
                { to: "/contact", label: "Demander une étude" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white border border-slate-200 hover:border-orange-500 hover:text-orange-600 transition"
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

export default ClimGite;
