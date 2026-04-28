import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Search, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { glossary } from "@/data/glossary";
import { useSeo } from "@/lib/useSeo";

const Glossaire = () => {
  const baseUrl = "https://ecocvc.pro";
  const [search, setSearch] = useState("");

  const sorted = useMemo(() => [...glossary].sort((a, b) => a.term.localeCompare(b.term, "fr")), []);
  const filtered = useMemo(
    () =>
      search.trim()
        ? sorted.filter(
            (g) =>
              g.term.toLowerCase().includes(search.toLowerCase()) ||
              g.short.toLowerCase().includes(search.toLowerCase()) ||
              g.full.toLowerCase().includes(search.toLowerCase())
          )
        : sorted,
    [sorted, search]
  );

  const letters = useMemo(() => Array.from(new Set(sorted.map((g) => g.term[0].toUpperCase()))).sort(), [sorted]);

  useSeo({
    title: "Glossaire CVC — pompe à chaleur, climatisation, ventilation",
    description:
      "Tous les termes techniques du chauffage, climatisation, pompe à chaleur et ventilation expliqués simplement : COP, ETAS, RGE, fluide frigorigène, F-Gaz, etc.",
    canonical: `${baseUrl}/glossaire`,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      name: "Glossaire CVC ECO CVC",
      hasDefinedTerm: sorted.map((g) => ({
        "@type": "DefinedTerm",
        name: g.term,
        description: g.short,
      })),
    },
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Glossaire</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                <BookOpen className="w-3.5 h-3.5" /> Glossaire CVC
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Tous les <span className="text-gradient-brand">termes techniques</span> expliqués simplement
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                COP, ETAS, RGE, fluide frigorigène, F-Gaz, multi-split… Le vocabulaire CVC peut paraître opaque. Voici les {sorted.length} termes que nos clients rencontrent le plus, expliqués clairement.
              </p>

              <div className="relative max-w-xl">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un terme…"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {!search && (
          <section className="pb-6">
            <div className="container mx-auto">
              <div className="flex flex-wrap gap-2">
                {letters.map((l) => (
                  <a
                    key={l}
                    href={`#letter-${l}`}
                    className="w-9 h-9 rounded-lg bg-white border border-border hover:border-brand-blue hover:text-brand-blue text-sm font-bold flex items-center justify-center transition-colors"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-14 md:pb-20 pt-6">
          <div className="container mx-auto max-w-4xl">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">Aucun terme trouvé pour « {search} ».</p>
            ) : (
              <dl className="space-y-5">
                {filtered.map((g, i) => {
                  const letter = g.term[0].toUpperCase();
                  const showLetter = i === 0 || filtered[i - 1].term[0].toUpperCase() !== letter;
                  return (
                    <div key={g.term}>
                      {showLetter && !search && (
                        <h2 id={`letter-${letter}`} className="font-display text-3xl font-bold text-brand-blue mt-10 mb-4 pb-2 border-b-2 border-brand-blue/15">
                          {letter}
                        </h2>
                      )}
                      <article className="bg-white border border-border rounded-2xl p-6 hover:border-brand-blue/30 transition-colors">
                        <dt className="font-display text-xl font-bold text-foreground mb-2">{g.term}</dt>
                        <dd>
                          <p className="text-foreground/85 leading-relaxed mb-3 italic">{g.short}</p>
                          <p className="text-muted-foreground leading-relaxed">{g.full}</p>
                          {g.related && g.related.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {g.related.map((r, k) => (
                                <Link
                                  key={k}
                                  to={r.href}
                                  className="inline-flex items-center gap-1 text-sm text-brand-blue font-medium hover:underline"
                                >
                                  {r.label} <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </dd>
                      </article>
                    </div>
                  );
                })}
              </dl>
            )}
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Glossaire;
