import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Check, X, Star, Phone, ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { findComparatifConcurrent } from "@/data/comparatifs-concurrents";
import { useSeo } from "@/lib/useSeo";

const ComparatifConcurrentPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const c = slug ? findComparatifConcurrent(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";

  useSeo({
    title: c?.metaTitle ?? "Comparatif — ECO CVC",
    description: c?.metaDescription ?? "",
    canonical: c ? `${baseUrl}/vs/${c.slug}` : baseUrl,
    jsonLd: c
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.h1,
            description: c.metaDescription,
            datePublished: c.updatedAt,
            dateModified: c.updatedAt,
            author: { "@type": "Organization", name: "ECO CVC", url: baseUrl },
            publisher: {
              "@type": "Organization",
              name: "ECO CVC",
              logo: { "@type": "ImageObject", url: `${baseUrl}/og-image.jpg` },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : undefined,
  });

  if (!c) return <Navigate to="/" replace />;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-32 pb-12 bg-gradient-to-br from-brand-bluedark via-brand-blue to-brand-sky text-white">
          <div className="container mx-auto max-w-5xl px-4">
            <nav className="flex items-center gap-1.5 text-xs text-white/80 mb-6">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Comparatifs</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white font-medium">ECO CVC vs {c.competitorName}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Comparatif honnête · {c.competitorType}
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{c.h1}</h1>
              <div className="space-y-3 max-w-3xl">
                {c.intro.map((p, i) => (
                  <p key={i} className="text-lg text-white/90 leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* POUR / CONTRE concurrent */}
        <section className="py-14 container mx-auto max-w-5xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-7">
            {c.competitorName} : ce qui est bien, ce qui l'est moins
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" /> Points positifs
              </h3>
              <ul className="space-y-2.5">
                {c.pour.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-green-900">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Points à connaître
              </h3>
              <ul className="space-y-2.5">
                {c.contre.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-red-900">
                    <X className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TABLEAU COMPARATIF */}
        <section className="py-14 bg-slate-50 border-y border-border">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-7">
              {c.competitorName} vs ECO CVC : comparaison point par point
            </h2>
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-brand-blue text-white text-sm font-bold">
                <div className="p-4">Critère</div>
                <div className="p-4 border-l border-white/20">{c.competitorName}</div>
                <div className="p-4 border-l border-white/20 bg-brand-bluedark">ECO CVC</div>
              </div>
              {c.diffEcoCvc.map((d, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1.2fr_1fr_1fr] text-sm ${i % 2 ? "bg-slate-50/50" : ""}`}
                >
                  <div className="p-4 font-semibold border-t border-border">{d.sujet}</div>
                  <div className="p-4 border-t border-l border-border text-slate-700">{d.competitor}</div>
                  <div className="p-4 border-t border-l border-border bg-brand-green/5 text-foreground font-medium">
                    {d.ecocvc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECO FINALE */}
        <section className="py-14 container mx-auto max-w-4xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">Notre conseil honnête</h2>
          <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-300">
            <p className="text-foreground/90 leading-relaxed">{c.recoFinale}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 container mx-auto max-w-4xl px-4">
          <div className="rounded-3xl bg-gradient-to-br from-brand-green via-emerald-600 to-brand-green text-white p-8 md:p-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Demandez un devis ECO CVC pour comparer
            </h3>
            <p className="text-white/90 mb-5">
              C'est gratuit, sans engagement, et la comparaison est généralement éclairante.
              Visite à domicile, devis transparent sous 24-48h.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-bold hover:bg-slate-100 transition shadow-lifted"
              >
                Devis gratuit ECO CVC <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33629634045"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-bold hover:bg-white/25 transition"
              >
                <Phone className="w-4 h-4" /> 06 29 63 40 45
              </a>
            </div>
          </div>
        </section>

        {/* OUTILS + LEAD MAGNET */}
        <section className="container mx-auto max-w-4xl px-4 py-2">
          <ArticleToolsCTA preset="comparatif" variant="highlighted" />
        </section>
        <section className="container mx-auto max-w-4xl px-4 pb-12">
          <LeadMagnetCard
            source={`vs-${c.slug}`}
            variant="banner"
            title="Audit gratuit de votre devis"
            subtitle={`Vous avez un devis ${c.competitorName} ? Envoyez-le, on l'audite sous 24h et on vous renvoie un comparatif détaillé honnête.`}
          />
        </section>

        {/* FAQ */}
        <section className="py-14 container mx-auto max-w-4xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-7">Questions fréquentes</h2>
          <div className="space-y-3">
            {c.faq.map((item, i) => (
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

export default ComparatifConcurrentPage;
