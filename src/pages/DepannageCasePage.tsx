import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  AlertTriangle,
  AlertCircle,
  ShieldCheck,
  Clock,
  ArrowRight,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { findDepannage, depannageCases } from "@/data/depannage-cases";
import { useSeo } from "@/lib/useSeo";

const severiteColor: Record<string, string> = {
  mineur: "bg-green-50 border-green-200 text-green-900",
  moyen: "bg-amber-50 border-amber-200 text-amber-900",
  grave: "bg-red-50 border-red-200 text-red-900",
};
const severiteIconColor: Record<string, string> = {
  mineur: "text-green-600",
  moyen: "text-amber-600",
  grave: "text-red-600",
};

const DepannageCasePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const c = slug ? findDepannage(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = c ? `${baseUrl}/depannage/${c.slug}` : baseUrl;

  useSeo({
    title: c?.metaTitle ?? "Dépannage — ECO CVC",
    description: c?.metaDescription ?? "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: c
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Dépannage pompe à chaleur et climatisation",
            provider: {
              "@type": "HVACBusiness",
              name: "ECO CVC",
              url: baseUrl,
              telephone: "+33758459900",
            },
            areaServed: ["Isère", "Rhône", "Savoie", "Haute-Savoie", "Loire"],
            url: canonical,
            description: c.problem,
          },
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: c.h1,
            about: c.problem,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
            author: { "@type": "Organization", name: "ECO CVC" },
          },
        ]
      : undefined,
  });

  if (!c) return <Navigate to="/depannage" replace />;

  const others = depannageCases.filter((d) => d.slug !== c.slug).slice(0, 4);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero avec bandeau urgence */}
        <section className="relative pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="absolute inset-0 bg-mesh-cool -z-10" />
          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/depannage" className="hover:text-brand-blue transition-colors">Dépannage</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{c.problem}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              {c.urgence === "haute" && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
                  <AlertTriangle className="w-3.5 h-3.5" /> Urgence — appelez vite
                </div>
              )}
              {c.urgence === "moyenne" && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                  <AlertCircle className="w-3.5 h-3.5" /> À traiter rapidement
                </div>
              )}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                {c.h1}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">
                Symptômes, diagnostic et solution par technicien certifié F-Gaz. ECO CVC intervient en Isère et Rhône-Alpes — appelez-nous, on regarde ça avec vous.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+33758459900"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors text-base shadow-lg"
                >
                  <Phone className="w-5 h-5" /> Appeler maintenant — 07 58 45 99 00
                </a>
                <Link
                  to="/contact?service=depannage"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50 transition-colors"
                >
                  Demande de rappel <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-4 inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {c.delaiIntervention}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Symptômes */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Symptômes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Reconnaissez-vous ces signes ?</h2>
            <ul className="space-y-3">
              {c.symptomes.map((s, i) => (
                <li key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-border">
                  <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Causes possibles */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Causes possibles</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">D'où peut venir le problème</h2>
            <div className="space-y-4">
              {c.causesPossibles.map((cp, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${severiteColor[cp.severite]}`}>
                  <div className="flex items-start gap-3">
                    <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${severiteIconColor[cp.severite]}`} />
                    <div className="flex-1">
                      <h3 className="font-bold mb-1.5">{cp.cause}</h3>
                      <p className="text-sm leading-relaxed">{cp.description}</p>
                      <span className="inline-block mt-2 text-xs font-semibold uppercase tracking-wider opacity-75">
                        Sévérité : {cp.severite}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Diagnostic</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Étapes pour identifier la cause</h2>
            <ol className="space-y-4">
              {c.diagnostic.map((d, i) => (
                <li key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-border">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{d.etape}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Comment résoudre</h2>

            {c.solutionDiy && (
              <div className="mb-6 p-6 rounded-2xl bg-green-50 border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-green-700" />
                  <h3 className="font-display font-bold text-lg text-green-900">Ce que vous pouvez faire vous-même</h3>
                </div>
                <p className="text-green-900/85 leading-relaxed">{c.solutionDiy}</p>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                <h3 className="font-display font-bold text-lg text-brand-blue">Intervention ECO CVC</h3>
              </div>
              <p className="text-foreground/85 leading-relaxed mb-4">{c.solutionPro}</p>
              <a
                href="tel:+33758459900"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
              >
                <Phone className="w-4 h-4" /> Appeler le 07 58 45 99 00
              </a>
            </div>
          </div>
        </section>

        {/* Autres pannes */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Autres pannes fréquentes</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {others.map((d) => (
                <Link
                  key={d.slug}
                  to={`/depannage/${d.slug}`}
                  className="p-5 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all group"
                >
                  <Wrench className="w-6 h-6 text-brand-blue mb-3" />
                  <h3 className="font-display font-semibold mb-2 group-hover:text-brand-blue transition-colors leading-snug">
                    {d.problem}
                  </h3>
                  <span className="text-xs text-brand-blue inline-flex items-center gap-1 font-medium">
                    Diagnostic <ArrowRight className="w-3 h-3" />
                  </span>
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

export default DepannageCasePage;
