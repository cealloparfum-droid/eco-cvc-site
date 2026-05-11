/**
 * Page hub B2B "Professionnels" — agrège toutes les offres pour pros :
 *  - Métiers de bouche (restos, boulangerie, fromagerie...)
 *  - Tertiaire (bureaux, cabinets médicaux, pharmacies)
 *  - Copropriétés / syndics
 *  - Programme partenariat (agents immo, plombiers, electriciens)
 *
 * Cible recherches : "artisan CVC pro Lyon", "frigoriste restaurant Isère",
 * "maintenance climatisation copropriété", "partenariat installateur PAC".
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Refrigerator,
  Wrench,
  Phone,
  Handshake,
  Users,
  ArrowRight,
  ChevronRight,
  Check,
  Calculator,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import { useSeo } from "@/lib/useSeo";

const Professionnels = () => {
  useSeo({
    title: "Professionnels : artisan CVC pour pros — ECO CVC Isère & Rhône-Alpes",
    description:
      "ECO CVC, artisan CVC dédié aux professionnels : chambres froides, vitrines réfrigérées, climatisation tertiaire, maintenance copropriétés, programme partenariat. Devis sous 48h.",
    canonical: "https://www.ecocvc.pro/professionnels",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Services CVC pour professionnels",
      provider: { "@type": "HVACBusiness", name: "ECO CVC", url: "https://www.ecocvc.pro" },
      areaServed: ["Isère", "Rhône", "Loire", "Savoie", "Haute-Savoie"],
      serviceType: "Installation et maintenance CVC professionnelle",
    },
  });

  const metiers = [
    { slug: "boulangerie", emoji: "🥖", label: "Boulangerie / Pâtisserie", desc: "Chambres froides positives, vitrines réfrigérées multi-niveaux, climatisation laboratoire" },
    { slug: "restaurant", emoji: "🍽️", label: "Restaurant / Brasserie", desc: "Chambre froide, vitrine traiteur, clim salle + cuisine, extraction air vicié" },
    { slug: "boucherie-charcuterie", emoji: "🥩", label: "Boucherie / Charcuterie", desc: "Vitrines ventilées hygro-contrôlées, chambre froide négative, salle découpe climatisée" },
    { slug: "fromagerie", emoji: "🧀", label: "Fromagerie / Crémerie", desc: "Vitrines hygrométrie réglable, cave d'affinage, conservation pâtes molles" },
    { slug: "traiteur", emoji: "🍱", label: "Traiteur", desc: "Chambre froide modulaire, cellule de refroidissement rapide, vitrine froide" },
    { slug: "pharmacie", emoji: "💊", label: "Pharmacie", desc: "Armoire vaccins, monitoring HACCP, climatisation officine ultra-silencieuse" },
    { slug: "fleuriste", emoji: "🌸", label: "Fleuriste", desc: "Chambre froide à fleurs (taux humidité 85-90%), clim boutique" },
    { slug: "supermarche-superette", emoji: "🛒", label: "Supérette / Épicerie", desc: "Meubles linéaires froid, chambre froide réserve, climatisation surface vente" },
  ];

  const offers = [
    {
      icon: Refrigerator,
      title: "Métiers de bouche",
      desc: "Restaurants, boulangeries, boucheries, fromagers — équipement froid commercial sur-mesure",
      href: "/froid-commercial/restaurant",
      bg: "from-amber-500 to-orange-600",
      cta: "Voir les offres métier",
    },
    {
      icon: Building2,
      title: "Tertiaire & bureaux",
      desc: "Cabinets médicaux, pharmacies, agences, open-spaces — climatisation DRV ou multi-split",
      href: "/climatisation-copropriete",
      bg: "from-blue-500 to-cyan-600",
      cta: "Climatisation tertiaire",
    },
    {
      icon: Wrench,
      title: "Copropriétés & syndics",
      desc: "Contrats cadres maintenance multi-lots, intervention rapide, gestion simplifiée",
      href: "/climatisation-copropriete",
      bg: "from-violet-500 to-purple-600",
      cta: "Contrat copropriété",
    },
  ];

  const partnerTypes = [
    {
      label: "Agences immobilières",
      desc: "Vous gérez biens à louer ou à vendre ? Vos clients ont besoin d'un installateur CVC fiable.",
      reward: "100 € par chantier signé",
    },
    {
      label: "Plombiers / Électriciens",
      desc: "Vous ne posez pas le CVC ? Envoyez-nous le client, on s'occupe du reste. Échange réciproque.",
      reward: "Échange équitable",
    },
    {
      label: "Cuisinistes / Architectes",
      desc: "Vos clients en rénovation ont souvent besoin de PAC ou clim. Devis prioritaire pour vos chantiers.",
      reward: "Commission ou échange",
    },
    {
      label: "Syndics de copropriétés",
      desc: "Contrat cadre annuel, intervention rapide tous les lots, factures groupées et tarifs négociés.",
      reward: "Tarifs préférentiels",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* HERO */}
        <section className="pt-32 pb-14 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-bluedark text-white">
          <div className="container mx-auto max-w-6xl px-4">
            <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-6">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="font-medium text-white">Professionnels</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 backdrop-blur-sm border border-brand-green/40 text-xs font-bold uppercase tracking-wider mb-4 text-emerald-200">
                <Building2 className="w-3.5 h-3.5" />
                Solutions pour professionnels
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
                Artisan CVC pour pros en <span className="text-brand-green">Isère & Rhône-Alpes</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mb-6">
                Restaurants, boulangeries, pharmacies, cabinets, supermarchés, copropriétés :
                ECO CVC accompagne les pros avec un service complet — étude, installation,
                maintenance HACCP, dépannage 7j/7 et garantie décennale.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+33629634045"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-green text-white font-bold hover:bg-emerald-700 transition shadow-lifted"
                >
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition"
                >
                  Devis pro sous 48h <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                <Stat label="50+" sub="clients pros actifs" />
                <Stat label="48h" sub="devis ferme" />
                <Stat label="7j/7" sub="dépannage urgence" />
                <Stat label="10 ans" sub="garantie décennale" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3 GRANDES FAMILLES D'OFFRES */}
        <section className="py-14 container mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-center">3 grandes familles de prestations</h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Chaque métier a ses contraintes spécifiques (HACCP, hygrométrie, silence, conformité ERP).
            On adapte la solution à votre cas réel — pas de copier-coller.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {offers.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-3xl bg-white border border-border overflow-hidden shadow-soft hover:shadow-lifted transition-shadow"
                >
                  <div className={`h-2 bg-gradient-to-r ${o.bg}`} />
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${o.bg} text-white flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{o.title}</h3>
                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">{o.desc}</p>
                    <Link
                      to={o.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:underline"
                    >
                      {o.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* MÉTIERS BOUCHE */}
        <section className="py-14 bg-slate-50 border-y border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-center">8 métiers de bouche couverts</h2>
            <p className="text-center text-slate-600 mb-10">
              Chaque métier a sa fiche dédiée avec équipements et tarifs typiques.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {metiers.map((m) => (
                <Link
                  key={m.slug}
                  to={`/froid-commercial/${m.slug}`}
                  className="group p-4 rounded-2xl bg-white border border-border hover:border-brand-green/50 hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-2">{m.emoji}</div>
                  <h3 className="font-bold text-sm mb-1.5 text-slate-900 group-hover:text-brand-green transition-colors">
                    {m.label}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">{m.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-green">
                    Voir l'offre <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMME PARTENARIAT */}
        <section className="py-14 container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                <Handshake className="w-3.5 h-3.5" />
                Programme partenariat
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Vous orientez vos clients vers nous ? On vous remercie.
              </h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Programme d'apport d'affaires simple et transparent. Vos clients ont besoin
                d'une PAC, d'une clim ou d'une chambre froide ? Envoyez-les-nous et on vous
                rétrocède une commission par chantier signé.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                {[
                  "Commission versée sous 30 jours après facturation chantier",
                  "Pas d'objectif minimum, pas d'engagement",
                  "Suivi des affaires en temps réel",
                  "Devis et SAV gérés par nous (zéro charge pour vous)",
                ].map((l, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-slate-700">{l}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-bluedark transition"
              >
                Devenir partenaire <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {partnerTypes.map((p, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-border"
                >
                  <h3 className="font-bold text-sm mb-2 text-slate-900">{p.label}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{p.desc}</p>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green text-[11px] font-bold">
                    <TrendingUp className="w-3 h-3" />
                    {p.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AVANTAGES B2B */}
        <section className="py-14 bg-slate-50 border-t border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-10 text-center">
              Pourquoi les pros choisissent ECO CVC
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              <Benefit icon={ShieldCheck} title="HACCP, F-Gaz, ERP" desc="Conformité réglementaire totale : registres tenus à jour, contrôles annuels, certificats d'entretien." />
              <Benefit icon={Zap} title="Intervention sous 24h" desc="Pour les pros, une panne = perte d'exploitation. On intervient en priorité, technicien stocké en pièces détachées." />
              <Benefit icon={Calculator} title="Devis ferme sous 48h" desc="Après visite gratuite, devis détaillé HT + TTC + amortissement comptable. Transparence totale." />
              <Benefit icon={Users} title="Interlocuteur unique" desc="Un référent ECO CVC dédié à vos chantiers et SAV. Plus de balle au prisonnier entre interlocuteurs." />
              <Benefit icon={Wrench} title="Maintenance incluse" desc="Contrat annuel optionnel : 4 visites pour les sites sensibles (restau, pharmacie), 1 visite pour bureaux." />
              <Benefit icon={TrendingUp} title="Aides CEE Pro" desc="Coup de pouce CEE professionnel mobilisable selon convention. On gère le dossier pour vous." />
            </div>
          </div>
        </section>

        {/* OUTILS + LEAD MAGNET */}
        <section className="container mx-auto max-w-4xl px-4 py-12">
          <ArticleToolsCTA
            preset="metier-pro"
            variant="highlighted"
            title="Outils gratuits pour pros"
            subtitle="Auditez un devis reçu, calculez la puissance, comparez avec d'autres solutions."
          />
        </section>
        <section className="container mx-auto max-w-4xl px-4 pb-12">
          <LeadMagnetCard
            source="professionnels-hub"
            variant="banner"
            title="Catalogue B2B ECO CVC — gratuit"
            subtitle="Tous nos équipements pros (chambres froides, vitrines, DRV, monitoring) + tarifs indicatifs + cas concrets clients."
            bullets={[
              "Catalogue PDF 30+ pages",
              "Tarifs indicatifs 2026 par taille",
              "Cas concrets clients pros",
              "Calendrier aides CEE pro 2026",
            ]}
          />
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

const Stat = ({ label, sub }: { label: string; sub: string }) => (
  <div className="text-center">
    <div className="font-display text-2xl md:text-3xl font-bold text-brand-green">{label}</div>
    <div className="text-[11px] uppercase tracking-wider text-white/70">{sub}</div>
  </div>
);

const Benefit = ({ icon: Icon, title, desc }: { icon: typeof Check; title: string; desc: string }) => (
  <div className="p-5 rounded-2xl bg-white border border-border">
    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-3">
      <Icon className="w-5 h-5 text-brand-blue" />
    </div>
    <h3 className="font-bold mb-1.5 text-slate-900">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default Professionnels;
