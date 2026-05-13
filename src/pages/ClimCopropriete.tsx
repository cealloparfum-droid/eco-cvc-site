import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  Building2,
  FileText,
  Users,
  Shield,
  AlertTriangle,
  ArrowRight,
  Vote,
  Eye,
  Wind,
  Wrench,
  ClipboardCheck,
  Scale,
  Award,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import qSeriesQuiet from "@/assets/catalog/q-series-quiet.jpg";
import outdoor from "@/assets/catalog/outdoor-nature.jpg";

const ETAPES = [
  {
    n: 1,
    icon: ClipboardCheck,
    title: "Étude technique préalable",
    desc: "Visite gratuite avec photos. Nous documentons l'emplacement possible de l'unité ext. (terrasse privative, balcon, façade arrière), les contraintes acoustiques (vis-à-vis), et le cheminement frigo.",
  },
  {
    n: 2,
    icon: FileText,
    title: "Dossier pour l'AG",
    desc: "Nous fournissons un dossier prêt-à-soumettre : devis détaillé, plans, photo-montages, fiche technique acoustique, attestation assurance décennale. Format clair pour un vote en AG.",
  },
  {
    n: 3,
    icon: Vote,
    title: "Déclaration préalable mairie (si nécessaire)",
    desc: "Si le règlement de copro l'impose ou si la façade est en zone protégée (ABF), nous montons le dossier de déclaration préalable. Le délai d'instruction est de 1 mois.",
  },
  {
    n: 4,
    icon: Wrench,
    title: "Pose coordonnée",
    desc: "Pose en 1 jour, rendez-vous fixé avec le gardien/syndic, accès parties communes coordonné, propreté garantie. Aucune nuisance pour les autres occupants.",
  },
];

const SOLUTIONS = [
  {
    icon: Eye,
    title: "Cassette encastrée plafond",
    desc: "Idéale pour préserver les murs et le visuel. L'unité int. est intégrée dans un faux-plafond, seules les bouches discrètes sont visibles.",
    prix: "à partir de 1 990 € / pièce",
  },
  {
    icon: Wind,
    title: "Gainable invisible",
    desc: "L'unité int. est dans les combles ou le faux-plafond. Bouches de soufflage discrètes. Solution premium pour appartement haussmannien ou rénovation lourde.",
    prix: "à partir de 6 900 €",
  },
  {
    icon: Building2,
    title: "Multi-split discret façade arrière",
    desc: "1 seul groupe ext. en façade arrière (cour intérieure) + plusieurs unités int. murales dans les pièces. Solution la plus économique et fréquente en copro.",
    prix: "à partir de 2 490 € (bi-split)",
  },
];

const POINTS_VIGILANCE = [
  {
    titre: "Règlement de copropriété",
    detail: "Lire la clause sur les modifications de façade. Certains règlements interdisent toute installation visible côté rue.",
  },
  {
    titre: "Vote en AG (article 25 ou 24)",
    detail: "Pour une PAC/clim privée modifiant la façade : vote à la majorité de l'article 25 (majorité absolue des voix). Le syndic inscrit la résolution à l'ordre du jour.",
  },
  {
    titre: "Bruit et vis-à-vis",
    detail: "L'unité ext. ne doit pas dépasser 30 dB(A) à la limite de propriété la nuit (arrêté 31 août 2006). Nous calculons cela en visite.",
  },
  {
    titre: "Architecte des Bâtiments de France (ABF)",
    detail: "Si l'immeuble est dans un secteur protégé (centre historique, abords de monuments classés), avis ABF obligatoire. Délai +2 mois.",
  },
  {
    titre: "Déclaration préalable mairie",
    detail: "Toute modification d'aspect extérieur impose une DP. Délai d'instruction : 1 mois. ECO CVC monte le dossier pour vous.",
  },
  {
    titre: "Servitudes et droit de passage",
    detail: "Pose de l'unité ext. en partie commune ou passage de gaines techniques par les parties communes : autorisation AG nécessaire.",
  },
];

const FAQ = [
  {
    q: "Faut-il l'autorisation de la copropriété pour installer une clim ?",
    a: "Oui, dans 99 % des cas. Toute modification de l'aspect extérieur (unité ext. visible) doit être votée en AG (article 25). Si l'unité est entièrement à l'intérieur (ex. clim mobile, ce que nous ne posons pas) ou sur un balcon non visible, la question peut se poser, mais en pratique on vote toujours pour éviter un litige ultérieur.",
  },
  {
    q: "Combien de temps prend la procédure complète ?",
    a: "Visite + devis : 1 semaine. Vote AG : selon calendrier (AG annuelle ou extraordinaire, 2-6 mois). Déclaration préalable mairie : 1 mois (2 mois si ABF). Pose : 1 jour. Total moyen : 3 à 8 mois. Si une AG extraordinaire est convoquée, on peut accélérer à 6-8 semaines.",
  },
  {
    q: "Que faire si le syndic refuse de mettre la résolution à l'ordre du jour ?",
    a: "Le syndic est obligé d'inscrire à l'ordre du jour de l'AG suivante toute résolution proposée par un copropriétaire (article 10 décret 1967). Demande à faire par recommandé AR avec le devis et les photo-montages.",
  },
  {
    q: "Quelles solutions si le règlement interdit toute clim visible ?",
    a: "Trois options : (1) gainable intégral (aucune unité visible, pose dans combles/faux-plafonds), (2) cassettes encastrées plafond (visible mais discret), (3) multi-split avec unité ext. en cour intérieure côté arrière. Nous étudions la faisabilité en visite.",
  },
  {
    q: "Combien coûte une clim en copropriété ?",
    a: "Mêmes tarifs que le particulier classique (mono-split 990 €, bi-split 2 490 €, tri-split 3 990 €), à quoi peut s'ajouter : déclaration préalable mairie (incluse), photo-montage AG (inclus), passage en parties communes (devis selon contraintes), nacelle si pose en façade haute (200-600 €).",
  },
  {
    q: "ECO CVC peut-elle facturer directement le syndic ?",
    a: "Oui pour les parties communes (clim hall, locaux gardien, salle de réunion). Pour un appartement privé, la facture est au nom du copropriétaire (TVA 10 % si rénovation logement > 2 ans). Nous fournissons toutes les factures et attestations TVA conformes.",
  },
  {
    q: "Que se passe-t-il en cas de panne après la pose ?",
    a: "Garantie constructeur AUX 3 ans + garantie pose ECO CVC 2 ans. SAV sous 48h ouvrées. Pour les copropriétés que nous équipons en parties communes, contrat d'entretien annuel possible (visite préventive 1x/an, intervention prioritaire en saison).",
  },
  {
    q: "Vous intervenez pour des immeubles complets (équipement de plusieurs lots) ?",
    a: "Oui, c'est même un de nos points forts : tarif négocié pour 5+ lots équipés, planning coordonné avec le syndic, équipe dédiée. Idéal pour résidences services, appart-hôtels, ou opérations de rénovation globale.",
  },
];

const ClimCopro = () => {
  useSeo({
    title:
      "Climatisation en copropriété : démarches, AG, prix | ECO CVC Lyon Isère",
    description:
      "Installer une climatisation en copropriété : étude technique, dossier AG, déclaration préalable, vote article 25, ABF. ECO CVC accompagne du dossier au chantier. Devis gratuit.",
    canonical: "https://ecocvc.pro/climatisation-copropriete",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Installation climatisation en copropriété",
          provider: { "@type": "Organization", name: "ECO CVC" },
          areaServed: ["Isère", "Rhône", "Lyon", "Savoie", "Haute-Savoie"],
          description:
            "Pose de climatisation réversible en copropriété : étude technique, montage dossier AG, déclaration préalable mairie, pose coordonnée.",
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
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-bluedark to-brand-blue text-white pt-28 pb-14">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="container mx-auto px-4 relative">
            <nav className="text-sm text-white/70 mb-6 flex items-center gap-1">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Climatisation copropriété</span>
            </nav>

            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-widest mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  Spécialiste copropriété
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  Installer une climatisation{" "}
                  <span className="text-gradient-hot">en copropriété</span>
                </h1>
                <p className="text-lg text-white/85 mb-6">
                  Vote AG, déclaration préalable, ABF, règlement de copro, vis-à-vis,
                  acoustique… <strong>ECO CVC monte le dossier complet</strong> pour
                  votre AG, gère la déclaration mairie, et pose coordonné en 1 jour.
                  De l'étude au chantier, vous êtes accompagné de A à Z.
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <a
                    href="tel:+33629634045"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-brand-bluedark font-bold hover:bg-slate-100 transition shadow-lifted"
                  >
                    <Phone className="w-4 h-4" /> 06 29 63 40 45
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition"
                  >
                    Étude technique gratuite
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> Dossier AG fourni
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> Déclaration mairie incluse
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> Décennale + RC pro
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img loading="lazy" decoding="async"
                  src={outdoor}
                  alt="Pose discrète d'une unité extérieure de climatisation en copropriété"
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
                { icon: Shield, label: "Décennale + RC pro" },
                { icon: FileText, label: "Dossiers AG clés en main" },
                { icon: Star, label: "5,0/5 (29 avis Google)" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 justify-center text-slate-700">
                  <t.icon className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm font-semibold">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ÉTAPES */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              4 étapes, du dossier AG au confort
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Notre méthode rodée pour les copropriétés en région lyonnaise.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {ETAPES.map((e, i) => (
                <motion.div
                  key={e.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gradient-to-br from-brand-blue/5 to-white rounded-2xl border border-brand-blue/20 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-black text-lg shrink-0">
                      {e.n}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <e.icon className="w-5 h-5 text-brand-blue" />
                        <h3 className="font-bold text-slate-900">{e.title}</h3>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              3 solutions adaptées copropriété
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Selon le règlement de copro, l'esthétique souhaitée et le budget.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {SOLUTIONS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-blue transition shadow-soft"
                >
                  <s.icon className="w-8 h-8 text-brand-blue mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-700 mb-4">{s.desc}</p>
                  <div className="text-lg font-black text-brand-blue">{s.prix}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* POINTS VIGILANCE */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-6 h-6 text-amber-600" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                6 points juridiques à connaître
              </h2>
            </div>
            <p className="text-slate-600 mb-8">
              Pour éviter litiges et recours après installation. Notre étude
              préalable couvre tous ces points.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {POINTS_VIGILANCE.map((p) => (
                <div
                  key={p.titre}
                  className="bg-amber-50/50 rounded-xl border border-amber-200 p-5"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <h3 className="font-bold text-slate-900 text-sm">{p.titre}</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed pl-6">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA MIDDLE */}
        <section className="py-12 bg-gradient-to-br from-brand-bluedark to-brand-blue text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Étude préalable gratuite pour votre AG
            </h2>
            <p className="text-white/85 mb-6">
              Visite, photos, photo-montage, devis détaillé prêt-à-soumettre.
              Inscrivez à votre prochaine AG en toute sérénité.
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
              FAQ Copropriété
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
                { to: "/climatisation-gite-airbnb", label: "Clim pour gîte / Airbnb" },
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

export default ClimCopro;
