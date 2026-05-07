import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Check, Trophy, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { findComparatif, comparatifsMarques } from "@/data/comparatifs-marques";
import { useSeo } from "@/lib/useSeo";

const ComparatifMarquesPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const c = slug ? findComparatif(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = c ? `${baseUrl}/comparatif/${c.slug}` : baseUrl;

  useSeo({
    title: c?.metaTitle ?? "Comparatif — ECO CVC",
    description: c?.metaDescription ?? "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: c
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: c.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : undefined,
  });

  if (!c) return <Navigate to="/produits" replace />;

  const others = comparatifsMarques.filter((x) => x.slug !== c.slug);
  const scoreA = c.criteres.filter((x) => x.gagnant === "A").length;
  const scoreB = c.criteres.filter((x) => x.gagnant === "B").length;
  const scoreEgal = c.criteres.filter((x) => x.gagnant === "egal").length;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground/70">Comparatifs</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{c.marqueA} vs {c.marqueB}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">{c.h1}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{c.intro}</p>
            </motion.div>

            {/* Score cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10 max-w-3xl">
              <div className={`p-6 rounded-2xl border-2 ${scoreA > scoreB ? "border-brand-blue bg-brand-blue/5" : "border-border bg-white"}`}>
                <div className="flex items-center gap-2 mb-2">
                  {scoreA > scoreB && <Trophy className="w-5 h-5 text-brand-blue" />}
                  <h2 className="font-display text-2xl font-bold">{c.marqueA}</h2>
                </div>
                <div className="text-4xl font-display font-bold text-brand-blue mb-1">{scoreA}</div>
                <p className="text-sm text-muted-foreground">critères favorables sur {c.criteres.length}</p>
              </div>
              <div className={`p-6 rounded-2xl border-2 ${scoreB > scoreA ? "border-brand-blue bg-brand-blue/5" : "border-border bg-white"}`}>
                <div className="flex items-center gap-2 mb-2">
                  {scoreB > scoreA && <Trophy className="w-5 h-5 text-brand-blue" />}
                  <h2 className="font-display text-2xl font-bold">{c.marqueB}</h2>
                </div>
                <div className="text-4xl font-display font-bold text-brand-blue mb-1">{scoreB}</div>
                <p className="text-sm text-muted-foreground">critères favorables sur {c.criteres.length}</p>
              </div>
            </div>
            {scoreEgal > 0 && (
              <p className="text-xs text-muted-foreground mt-3 max-w-3xl">{scoreEgal} critères considérés équivalents.</p>
            )}
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Comparatif détaillé</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-border overflow-hidden text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold">Critère</th>
                    <th className="text-left px-4 py-3 font-bold">{c.marqueA}</th>
                    <th className="text-left px-4 py-3 font-bold">{c.marqueB}</th>
                    <th className="text-center px-4 py-3 font-bold w-20">Top</th>
                  </tr>
                </thead>
                <tbody>
                  {c.criteres.map((cr, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="px-4 py-3 font-semibold">{cr.critere}</td>
                      <td className={`px-4 py-3 ${cr.gagnant === "A" ? "bg-brand-blue/5 font-medium" : ""}`}>
                        {cr.marqueA}
                      </td>
                      <td className={`px-4 py-3 ${cr.gagnant === "B" ? "bg-brand-blue/5 font-medium" : ""}`}>
                        {cr.marqueB}
                      </td>
                      <td className="text-center px-4 py-3">
                        {cr.gagnant === "A" && <span className="text-brand-blue font-bold">A</span>}
                        {cr.gagnant === "B" && <span className="text-brand-blue font-bold">B</span>}
                        {cr.gagnant === "egal" && <span className="text-muted-foreground text-xs">=</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Notre conclusion</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-8">{c.conclusion}</p>

            <h3 className="font-display text-xl font-bold mb-5">Recommandation selon votre profil</h3>
            <div className="space-y-3">
              {c.recoSelon.map((r, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border">
                  <div className="flex-1">
                    <p className="text-foreground/85">{r.profil}</p>
                  </div>
                  <div className="shrink-0 px-3 py-1.5 rounded-full bg-brand-blue text-white text-xs font-bold uppercase tracking-wider">
                    → {r.reco === "A" ? c.marqueA : c.marqueB}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {c.faq.map((item, i) => (
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
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Autres comparatifs</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={`/comparatif/${o.slug}`}
                  className="p-6 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand-blue transition-colors">
                    {o.marqueA} vs {o.marqueB}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{o.intro}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-brand-blue font-medium">
                    Voir le comparatif <ArrowRight className="w-3.5 h-3.5" />
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

export default ComparatifMarquesPage;
