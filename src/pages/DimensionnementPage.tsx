import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Phone, Check, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { findDimension, dimensionnements } from "@/data/dimensionnement-pieces";
import { useSeo } from "@/lib/useSeo";

const DimensionnementPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const d = slug ? findDimension(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = d ? `${baseUrl}/dimensionnement/${d.slug}` : baseUrl;

  useSeo({
    title: d?.metaTitle ?? "Dimensionnement — ECO CVC",
    description: d?.metaDescription ?? "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: d
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: d.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : undefined,
  });

  if (!d) return <Navigate to="/calculateur" replace />;

  const others = dimensionnements.filter((x) => x.slug !== d.slug);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-14 md:pt-48 md:pb-20">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground/70">Dimensionnement</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{d.piece}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <div className="text-5xl mb-3">{d.emoji}</div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
                {d.piece} · {d.surface}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">{d.h1}</h1>
              <div className="space-y-3">
                {d.intro.map((p, i) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Recommandations selon la surface</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {d.reco.map((r, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
                    {r.surfaceMin} - {r.surfaceMax} m²
                  </div>
                  <div className="font-display text-2xl font-bold mb-2">{r.puissanceKw}</div>
                  <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{r.type}</p>
                  <div className="text-sm font-semibold text-brand-blue">{r.prix}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Facteurs qui influencent la puissance</h2>
            <div className="space-y-2">
              {d.facteurs.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-border">
                  <div className="flex-1">
                    <p className="font-semibold mb-1">{f.facteur}</p>
                  </div>
                  <div className="shrink-0 text-sm text-brand-blue font-medium">{f.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Conseils ECO CVC</h2>
            <ul className="space-y-3">
              {d.conseils.map((c, i) => (
                <li key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-border">
                  <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
            <div className="space-y-3">
              {d.faq.map((item, i) => (
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

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Autres pièces à climatiser</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map((o) => (
                <Link key={o.slug} to={`/dimensionnement/${o.slug}`}
                  className="p-6 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all group">
                  <div className="text-3xl mb-3">{o.emoji}</div>
                  <h3 className="font-display font-bold mb-1 group-hover:text-brand-blue transition-colors">{o.piece}</h3>
                  <p className="text-xs text-muted-foreground">{o.surface}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-brand-blue font-medium mt-2">
                    Voir <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
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

export default DimensionnementPage;
