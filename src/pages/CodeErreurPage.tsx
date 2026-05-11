import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, AlertCircle, AlertTriangle, Check, Wrench, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { findCodeErreur, codesErreur } from "@/data/codes-erreur";
import { useSeo } from "@/lib/useSeo";

const severiteStyles: Record<string, { bg: string; text: string; icon: string }> = {
  mineur: { bg: "bg-green-50 border-green-200", text: "text-green-900", icon: "text-green-600" },
  moyen: { bg: "bg-amber-50 border-amber-200", text: "text-amber-900", icon: "text-amber-600" },
  grave: { bg: "bg-red-50 border-red-200", text: "text-red-900", icon: "text-red-600" },
};

const CodeErreurPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const c = slug ? findCodeErreur(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = c ? `${baseUrl}/codes-erreur/${c.slug}` : baseUrl;

  useSeo({
    title: c?.metaTitle ?? "Code erreur — ECO CVC",
    description: c?.metaDescription ?? "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: c
      ? [
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: c.h1,
            about: `Code erreur ${c.code} ${c.marqueLabel}`,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
            author: { "@type": "Organization", name: "ECO CVC" },
            datePublished: "2026-05-01",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Dépannage pompe à chaleur et climatisation",
            provider: { "@type": "HVACBusiness", name: "ECO CVC", url: baseUrl, telephone: "+33629634045" },
            areaServed: ["Isère", "Rhône", "Savoie", "Haute-Savoie", "Loire"],
            url: canonical,
          },
        ]
      : undefined,
  });

  if (!c) return <Navigate to="/depannage" replace />;

  const same = codesErreur.filter((x) => x.marque === c.marque && x.slug !== c.slug).slice(0, 4);
  const style = severiteStyles[c.severite];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/depannage" className="hover:text-brand-blue transition-colors">Dépannage</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Code {c.code} {c.marqueLabel}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${style.bg} ${style.text}`}>
                {c.severite === "grave" && <AlertTriangle className="w-3.5 h-3.5" />}
                {c.severite === "moyen" && <AlertCircle className="w-3.5 h-3.5" />}
                {c.severite === "mineur" && <Check className="w-3.5 h-3.5" />}
                Sévérité {c.severite}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">{c.h1}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">{c.signification}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+33629634045"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors text-base shadow-lg"
                >
                  <Phone className="w-5 h-5" /> Appeler maintenant — 06 29 63 40 45
                </a>
                {c.resoluble_diy && (
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-50 text-green-900 text-sm font-semibold border border-green-200">
                    <Wrench className="w-4 h-4" /> Résolvable seul (voir ci-dessous)
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mt-4 inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {c.delai}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Causes possibles</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">D'où peut venir ce code {c.code}</h2>
            <ul className="space-y-3">
              {c.causes.map((cause, i) => (
                <li key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-border">
                  <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${style.icon}`} />
                  <span className="text-foreground/85">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Diagnostic étape par étape</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Comment résoudre</h2>
            <ol className="space-y-4">
              {c.diagnostic.map((d, i) => (
                <li key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-border">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <span className="flex-1 text-foreground/85 leading-relaxed">{d}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
              <h3 className="font-display font-bold text-lg mb-3">Besoin d'un technicien ?</h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                ECO CVC est partenaire {c.marqueLabel} et dispose de l'outillage de diagnostic spécifique. {c.delai}
              </p>
              <a
                href="tel:+33629634045"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
              >
                <Phone className="w-4 h-4" /> 06 29 63 40 45
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Autres codes erreur {c.marqueLabel}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {same.map((o) => (
                <Link
                  key={o.slug}
                  to={`/codes-erreur/${o.slug}`}
                  className="p-5 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all group"
                >
                  <div className="text-2xl font-display font-bold text-brand-blue mb-2">{o.code}</div>
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-brand-blue transition-colors leading-tight">{o.h1.replace(`Code erreur ${o.code} ${o.marqueLabel} : `, "")}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-brand-blue font-medium">
                    Diagnostic <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Outils + Lead magnet — viseur SAV */}
        <section className="container mx-auto max-w-4xl px-4 py-2">
          <ArticleToolsCTA
            preset="code-erreur"
            variant="highlighted"
            title="Avant de réparer — vérifiez ces 3 points"
            subtitle="Outils gratuits : audit devis, simulateur aides (remplacement à envisager ?), calculateur de puissance."
          />
        </section>
        <section className="container mx-auto max-w-4xl px-4 pb-12">
          <LeadMagnetCard
            source={`code-erreur-${c.slug}`}
            variant="banner"
            title="Faut-il réparer ou remplacer ?"
            subtitle="Guide gratuit : quand une réparation devient un mauvais investissement, quand basculer en PAC neuve avec aides 2026 — décision en 5 minutes."
          />
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default CodeErreurPage;
