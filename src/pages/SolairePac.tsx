import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Sun, Snowflake, Wallet, Zap, ArrowRight, Phone, Check, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

const SolairePac = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/solaire-pompe-a-chaleur`;

  useSeo({
    title: "Solaire + pompe à chaleur : le combo qui divise la facture par 3 | ECO CVC",
    description:
      "Combiner panneaux solaires + pompe à chaleur en 2026 : économies, rentabilité, prix posé, aides. Le combo gagnant pour autonomie énergétique. ECO CVC, RGE QualiPAC en Isère.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Solaire + PAC : le combo qui divise la facture par 3",
      author: { "@type": "Organization", name: "ECO CVC" },
      datePublished: "2026-05-07",
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    },
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-brand-blue/5 -z-10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-blue/15 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Solaire + PAC</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-4">
                <Sun className="w-3.5 h-3.5" /> Combo gagnant 2026
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Panneaux solaires <span className="text-gradient-brand">+ pompe à chaleur</span> : le combo qui divise la facture par 3
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">
                La PAC consomme de l'électricité. Si vous la produisez vous-même via des panneaux solaires, vous êtes en autonomie partielle (50-80% selon configuration). Sur 25 ans, c'est 30 000 à 60 000 € d'économies.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
                  Étude personnalisée gratuite <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+33629634045" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50">
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Pourquoi c'est le combo idéal en 2026</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <Card icon={Snowflake} title="La PAC consomme moins qu'avant" body="Les PAC modernes (SCOP 4+) ont besoin de 3 000 à 5 000 kWh/an d'électricité pour chauffer une maison de 100-130 m². C'est exactement ce qu'un kit solaire 3-4 kWc produit." />
              <Card icon={Sun} title="Le solaire est rentable seul" body="Un kit 3 kWc posé (~7 000 €) produit 3 600 kWh/an en Isère. Économies 720-900 €/an. Amortissement 8-10 ans, durée de vie 30 ans." />
              <Card icon={Wallet} title="Le combo amplifie tout" body="Solaire + PAC : 50-80% de votre conso PAC est solaire = factures hivernales divisées. Sur 25 ans : 30-60 000 € d'économies cumulées vs maintien d'une chaudière fioul/gaz." />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-3xl">Cas concret chiffré : maison 130 m² en Isère</h2>
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
              <div className="p-6 rounded-2xl bg-white border border-border">
                <h3 className="font-display font-bold text-lg mb-3">📋 Configuration retenue</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" /><span>PAC air-eau Daikin Altherma 3 H, 11 kW</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" /><span>Kit solaire 4 kWc (10 panneaux 400 W)</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" /><span>Onduleur hybride avec autoconsommation</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" /><span>Optionnel : batterie 5 kWh pour stockage</span></li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
                <h3 className="font-display font-bold text-lg mb-3">💰 Investissement et aides</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>PAC posée :</span><strong>14 500 €</strong></li>
                  <li className="flex justify-between"><span>Solaire 4 kWc posé :</span><strong>9 500 €</strong></li>
                  <li className="flex justify-between text-brand-green"><span>Aides PAC (MPR + CEE) :</span><strong>-9 000 €</strong></li>
                  <li className="flex justify-between text-brand-green"><span>Prime autoconso solaire :</span><strong>-1 480 €</strong></li>
                  <li className="flex justify-between pt-2 border-t border-border"><span className="font-bold">Reste à charge :</span><strong className="text-xl">13 520 €</strong></li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-brand-green/5 border border-brand-green/20 md:col-span-2">
                <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-brand-green" />
                  📊 Économies sur 25 ans
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>Facture annuelle initiale (chaudière fioul) :</span><strong>2 800 €/an</strong></li>
                  <li className="flex justify-between"><span>Facture annuelle après combo :</span><strong>650 €/an</strong></li>
                  <li className="flex justify-between text-brand-green"><span>Économie annuelle :</span><strong>2 150 €/an</strong></li>
                  <li className="flex justify-between text-brand-green pt-2 border-t border-border"><span className="font-bold">Économie cumulée 25 ans :</span><strong className="text-xl">53 750 €</strong></li>
                  <li className="flex justify-between text-brand-blue"><span className="font-bold">Bénéfice net après reste à charge :</span><strong className="text-xl">+40 230 €</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Conditions pour que ça marche</h2>
            <ul className="space-y-3">
              {[
                "Toiture orientée sud, sud-est ou sud-ouest, sans ombrage majeur",
                "Inclinaison de toiture entre 15° et 45° (idéal 30°)",
                "Surface disponible : 6-8 m² par kWc (un kit 3 kWc = ~20 m²)",
                "Tableau électrique récent ou avec possibilité de mise à niveau",
                "Logement chauffé suffisamment l'hiver pour profiter pleinement de la PAC",
                "Habitudes de consommation orientables vers la journée (machine à laver, ECS)",
              ].map((c, i) => (
                <li key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-border">
                  <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
            <div className="space-y-3">
              {[
                { q: "Quelle taille de kit solaire pour ma PAC ?", a: "Pour une PAC 8-11 kW (maison 100-130 m²) : kit 3 à 4 kWc. Pour PAC 14-16 kW (maison 180-220 m²) : 5-6 kWc. Le calcul précis se fait sur visite avec étude des consommations." },
                { q: "Faut-il une batterie pour stocker l'électricité solaire ?", a: "Pas obligatoire. Sans batterie : autoconsommation 50-60% (ce qui est déjà énorme). Avec batterie 5-10 kWh : 75-85%. Surcoût batterie 4 000-7 000 €. Rentable si autoconsommation déjà optimisée." },
                { q: "Le combo est-il rentable en Isère et Rhône-Alpes ?", a: "Oui, malgré le climat moins ensoleillé qu'en sud. Production estimée : 1 000-1 200 kWh/an par kWc installé (vs 1 400 dans le sud). Amortissement 9-12 ans en Isère, économies 25 ans." },
                { q: "ECO CVC pose aussi le solaire ?", a: "Nous coordonnons avec un partenaire RGE QualiPV pour le solaire. ECO CVC reste votre interlocuteur unique : étude conjointe, devis groupé, gestion administrative consolidée." },
              ].map((item, i) => (
                <details key={i} className="group bg-white border border-border rounded-2xl px-6 py-5 open:shadow-md">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold">
                    {item.q}
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

const Card = ({ icon: Icon, title, body }: { icon: typeof Sun; title: string; body: string }) => (
  <div className="p-6 rounded-2xl bg-white border border-border">
    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-foreground/80 leading-relaxed">{body}</p>
  </div>
);

export default SolairePac;
