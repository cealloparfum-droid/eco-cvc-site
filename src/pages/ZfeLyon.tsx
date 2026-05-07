import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, AlertTriangle, MapPin, Phone, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

const ZfeLyon = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/zfe-lyon-sortir-fioul-gaz`;

  useSeo({
    title: "ZFE Lyon : sortir du fioul/gaz pour passer en PAC | ECO CVC",
    description:
      "Zone à Faibles Émissions Lyon Métropole : pourquoi remplacer votre chaudière fioul/gaz par une pompe à chaleur. Aides spécifiques, calendrier, démarches.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-brand-blue/5 -z-10" />
          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">ZFE Lyon</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
                <AlertTriangle className="w-3.5 h-3.5" /> Zone à Faibles Émissions
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                ZFE Lyon Métropole : <span className="text-gradient-brand">sortir du fioul/gaz</span> avec une PAC
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La Zone à Faibles Émissions de Lyon ne concerne pas que les voitures : la pression réglementaire et les aides locales accélèrent la fin du chauffage fossile dans les logements. Voici pourquoi 2026 est le bon moment d'agir.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Communes concernées par la ZFE Lyon</h2>
            <p className="text-foreground/85 leading-relaxed mb-5">
              La ZFE de Lyon Métropole couvre 9 communes principales (au 1er janvier 2026), avec un objectif d'extension progressive :
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Lyon (1er-9e)", "Villeurbanne", "Caluire-et-Cuire", "Bron", "Vénissieux", "Saint-Fons", "La Mulatière", "Champagne-au-Mont-d'Or", "Sainte-Foy-lès-Lyon"].map((c) => (
                <span key={c} className="px-3.5 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/20 text-sm text-brand-blue font-medium">
                  <MapPin className="w-3 h-3 inline mr-1" /> {c}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              ECO CVC intervient sur l'ensemble de la métropole lyonnaise pour les bascules vers la pompe à chaleur.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Pourquoi sortir du fioul/gaz dans la ZFE</h2>
            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  titre: "Pression réglementaire",
                  body: "Pas d'interdiction directe sur le chauffage résidentiel ZFE pour le moment, mais durcissement progressif (DPE F interdit à la location 2028). La ZFE accélère les exigences environnementales métropolitaines.",
                },
                {
                  titre: "Aides Eco-Rénov majorées",
                  body: "Lyon Métropole double parfois les aides MaPrimeRénov' avec son dispositif Eco-Rénov, jusqu'à 3 500 € additionnels pour les rénovations performantes.",
                },
                {
                  titre: "Valorisation immobilière",
                  body: "Un logement passé du fioul/gaz à la PAC gagne 5-15% en valeur de revente. Critique dans la métropole lyonnaise où le prix au m² reste élevé.",
                },
              ].map((b, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-border">
                  <h3 className="font-display font-bold text-lg mb-2">{b.titre}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Calendrier des contraintes ZFE</h2>
            <div className="space-y-3">
              {[
                { date: "1er janvier 2025", titre: "Vignette Crit'Air 3 interdite (voitures)", type: "info" },
                { date: "1er janvier 2026", titre: "ZFE étendue à 9 communes principales", type: "actuel" },
                { date: "1er janvier 2028", titre: "DPE F interdit à la location partout en France", type: "alerte" },
                { date: "1er janvier 2034", titre: "DPE E interdit à la location", type: "alerte" },
                { date: "Horizon 2030+", titre: "Probable interdiction progressive du chauffage gaz dans le neuf", type: "alerte" },
              ].map((e, i) => (
                <div key={i} className={`p-5 rounded-2xl border-2 ${
                  e.type === "actuel" ? "bg-brand-green/5 border-brand-green/30"
                  : e.type === "alerte" ? "bg-amber-50 border-amber-200"
                  : "bg-white border-border"
                }`}>
                  <div className="flex items-start gap-3">
                    {e.type === "actuel" && <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />}
                    {e.type === "alerte" && <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
                    {e.type === "info" && <Calendar className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{e.date}</div>
                      <p className="font-semibold mt-1">{e.titre}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Anticipez maintenant</h2>
            <p className="text-foreground/85 leading-relaxed mb-7">
              ECO CVC intervient dans toute la ZFE Lyon Métropole pour le remplacement de chaudières fioul/gaz par PAC air-eau. Étude gratuite, montage du dossier MaPrimeRénov' + Eco-Rénov, pose en 2-4 jours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/simulateur-aides" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
                Simuler aides Lyon <ArrowRight className="w-4 h-4" />
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

export default ZfeLyon;
