import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Check, Award, AlertTriangle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { findMarque, marques } from "@/data/marques";
import { useSeo } from "@/lib/useSeo";

const MarquePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const m = slug ? findMarque(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = m ? `${baseUrl}/marques/${m.slug}` : baseUrl;

  useSeo({
    title: m?.metaTitle ?? "Marque — ECO CVC",
    description: m?.metaDescription ?? "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: m
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `Pompe à chaleur ${m.name}`,
            brand: { "@type": "Brand", name: m.name },
            description: m.tagline,
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: 8500,
              highPrice: 18000,
              offerCount: m.gammes.length,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: m.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : undefined,
  });

  if (!m) return <Navigate to="/produits" replace />;

  const others = marques.filter((x) => x.slug !== m.slug);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-14 md:pt-48 md:pb-20">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground/70">Marques</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{m.name}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" /> {m.positionnement === "premium" ? "Haut de gamme" : m.positionnement === "milieu" ? "Milieu de gamme" : "Entrée de gamme"} · Origine : {m.origine}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">{m.h1}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{m.tagline}</p>
              <div className="space-y-3">
                {m.intro.map((p, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Gammes proposées par ECO CVC</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {m.gammes.map((g, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-border">
                  <h3 className="font-display font-bold text-lg mb-2">{g.name}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">{g.description}</p>
                  <div className="text-2xl font-display font-bold text-brand-blue mb-2">{g.prix}</div>
                  <p className="text-sm text-muted-foreground italic">Pour : {g.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-green/5 border border-brand-green/20">
                <h3 className="font-display font-bold text-lg mb-4 text-brand-green">Forces de {m.name}</h3>
                <ul className="space-y-2">
                  {m.forces.map((f, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm">
                      <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
                <h3 className="font-display font-bold text-lg mb-4 text-amber-900">Limites à connaître</h3>
                <ul className="space-y-2">
                  {m.limites.map((l, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
              <h3 className="font-display font-bold mb-2">Garantie</h3>
              <p className="text-foreground/80">{m.garantie}</p>
            </div>
            <div className="mt-4 p-6 rounded-2xl bg-white border border-border">
              <h3 className="font-display font-bold mb-2">Pour qui ?</h3>
              <p className="text-foreground/80">{m.pourQui}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Questions fréquentes — {m.name}</h2>
            <div className="space-y-3">
              {m.faq.map((item, i) => (
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

        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Comparer avec d'autres marques</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={`/marques/${o.slug}`}
                  className="p-6 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all group"
                >
                  <Award className="w-6 h-6 text-brand-blue mb-3" />
                  <h3 className="font-display font-bold mb-1 group-hover:text-brand-blue transition-colors">{o.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{o.tagline.slice(0, 80)}…</p>
                  <span className="inline-flex items-center gap-1 text-sm text-brand-blue font-medium">
                    Voir <ArrowRight className="w-3.5 h-3.5" />
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

export default MarquePage;
