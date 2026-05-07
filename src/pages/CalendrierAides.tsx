import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, AlertTriangle, Calendar, TrendingDown, Clock, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

const CalendrierAides = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/calendrier-aides-2026`;

  useSeo({
    title: "Calendrier des aides PAC 2026 : quand vont-elles baisser ? | ECO CVC",
    description:
      "Calendrier 2026-2028 des aides pompe à chaleur : MaPrimeRénov', Coup de pouce CEE, TVA. Pourquoi attendre coûte cher. Anticipations baisse aides par ECO CVC.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Calendrier des aides PAC 2026 : pourquoi ne pas attendre",
      author: { "@type": "Organization", name: "ECO CVC" },
      datePublished: "2026-05-07",
    },
  });

  const events = [
    { date: "Janvier 2026", titre: "Barèmes MaPrimeRénov' actuels en vigueur", type: "actuel", description: "Les profils Bleu, Jaune, Violet bénéficient des aides maximum 2026 (jusqu'à 11 000 € géothermie, 5 000 € PAC air-eau)." },
    { date: "Juillet 2026", titre: "Possible révision des barèmes en cours d'année", type: "alerte", description: "Les barèmes MaPrimeRénov' peuvent être ajustés en cours d'année selon le budget de l'État. Historiquement, ce sont des baisses." },
    { date: "Janvier 2027", titre: "Nouveau barème MaPrimeRénov' 2027", type: "alerte", description: "Tendance historique : -10 à -15% chaque année sur les forfaits PAC. Attendre = perdre 500 à 1 500 € selon profil." },
    { date: "Janvier 2027", titre: "Profil Rose probablement encore exclu", type: "info", description: "Les ménages aisés (Rose) restent non éligibles à MaPrimeRénov' simple, sauf rénovation globale parcours accompagné." },
    { date: "Janvier 2028", titre: "Sortie progressive du gaz dans le neuf", type: "alerte", description: "RE2025 puis RE2028 imposent des bilans carbone de plus en plus stricts. La PAC devient quasi-obligatoire en neuf." },
    { date: "Janvier 2028", titre: "Logements F deviennent indécents", type: "alerte", description: "Les bailleurs avec logement F ne pourront plus louer à de nouveaux locataires. Sortie de chaudière fioul/gaz devient urgente." },
    { date: "2030+", titre: "Probable fin progressive des aides PAC", type: "alerte", description: "Les aides ne sont pas pérennes. Une fois la transition énergétique avancée (50%+ des logements équipés), les aides seront massivement réduites ou supprimées." },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-14 md:pt-48 md:pb-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Calendrier des aides 2026</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
                <AlertTriangle className="w-3.5 h-3.5" /> Urgent à savoir
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Calendrier des aides PAC 2026-2030 : <span className="text-gradient-brand">pourquoi attendre coûte cher</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les aides à la pompe à chaleur baissent chaque année. Voici la chronologie officielle et nos anticipations pour vous aider à décider du bon moment d'investir.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Chronologie officielle et anticipations</h2>
            <div className="space-y-4">
              {events.map((e, i) => (
                <div key={i} className={`p-6 rounded-2xl border-2 ${
                  e.type === "actuel" ? "bg-brand-green/5 border-brand-green/30"
                  : e.type === "alerte" ? "bg-amber-50 border-amber-200"
                  : "bg-white border-border"
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      {e.type === "actuel" && <Calendar className="w-6 h-6 text-brand-green" />}
                      {e.type === "alerte" && <AlertTriangle className="w-6 h-6 text-amber-600" />}
                      {e.type === "info" && <Clock className="w-6 h-6 text-brand-blue" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{e.date}</div>
                      <h3 className="font-display text-lg font-bold mb-2">{e.titre}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Combien coûte le fait d'attendre ?</h2>
            <p className="text-foreground/85 leading-relaxed mb-6">
              Sur la base des baisses historiques observées (-10 à -15% par an sur les forfaits MaPrimeRénov'), voici une estimation du coût d'attente pour un ménage Jaune envisageant une PAC air-eau :
            </p>
            <div className="bg-white rounded-2xl border border-border p-6">
              <table className="w-full text-sm">
                <thead className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <tr className="border-b border-border">
                    <th className="text-left py-3">Année de pose</th>
                    <th className="text-right py-3">MaPrimeRénov'</th>
                    <th className="text-right py-3">Coup de pouce</th>
                    <th className="text-right py-3">Total aides</th>
                    <th className="text-right py-3">Vs 2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border bg-brand-green/5">
                    <td className="py-3 font-bold">2026 (maintenant)</td>
                    <td className="text-right py-3">4 000 €</td>
                    <td className="text-right py-3">4 500 €</td>
                    <td className="text-right py-3 font-bold">8 500 €</td>
                    <td className="text-right py-3 text-brand-green font-bold">référence</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3">2027 (estim.)</td>
                    <td className="text-right py-3">3 600 €</td>
                    <td className="text-right py-3">4 000 €</td>
                    <td className="text-right py-3 font-bold">7 600 €</td>
                    <td className="text-right py-3 text-amber-600 font-bold">-900 €</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3">2028 (estim.)</td>
                    <td className="text-right py-3">3 200 €</td>
                    <td className="text-right py-3">3 500 €</td>
                    <td className="text-right py-3 font-bold">6 700 €</td>
                    <td className="text-right py-3 text-amber-600 font-bold">-1 800 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">2029 (estim.)</td>
                    <td className="text-right py-3">2 800 €</td>
                    <td className="text-right py-3">3 000 €</td>
                    <td className="text-right py-3 font-bold">5 800 €</td>
                    <td className="text-right py-3 text-red-600 font-bold">-2 700 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Estimation basée sur la tendance historique 2020-2026. Les chiffres exacts dépendront des décisions gouvernementales annuelles. Aucune garantie sur le futur, mais la tendance baissière est solidement établie.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl text-center">
            <TrendingDown className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Conclusion : 2026 est le bon moment</h2>
            <p className="text-foreground/85 leading-relaxed mb-7">
              Si vous envisagez une PAC dans les 5 prochaines années, signer en 2026 vous fera économiser 1 500 à 3 000 € vs attendre 2-3 ans. À cela s'ajoutent : économies de chauffage immédiates, valorisation immobilière dès aujourd'hui, et tranquillité face au durcissement réglementaire.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/simulateur-aides" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
                Simuler mes aides 2026 <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+33758459900" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50">
                <Phone className="w-4 h-4" /> 07 58 45 99 00
              </a>
            </div>
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CalendrierAides;
