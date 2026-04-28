import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ChevronDown, Search, MessageCircle } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { faqGroups } from "@/data/faq";
import { useSeo } from "@/lib/useSeo";

const Faq = () => {
  const baseUrl = "https://ecocvc.pro";
  const [search, setSearch] = useState("");

  const allItems = faqGroups.flatMap((g) => g.items.map((i) => ({ ...i, category: g.category })));

  const filtered = search.trim()
    ? faqGroups
        .map((g) => ({
          ...g,
          items: g.items.filter(
            (i) =>
              i.q.toLowerCase().includes(search.toLowerCase()) ||
              i.a.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter((g) => g.items.length > 0)
    : faqGroups;

  useSeo({
    title: "FAQ pompe à chaleur, climatisation & aides — ECO CVC",
    description:
      "Questions fréquentes sur la pompe à chaleur, climatisation, aides MaPrimeRénov' et CEE, installation, entretien, copropriété. Réponses d'artisan RGE QualiPAC ECO CVC.",
    canonical: `${baseUrl}/faq`,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
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
              <span className="text-foreground font-medium">FAQ</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                Questions fréquentes
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Toutes vos <span className="text-gradient-brand">questions</span> sur la PAC, la clim, les aides
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Plus de {allItems.length} réponses détaillées sur le fonctionnement, les aides 2026, l'installation, l'entretien et nos spécificités locales en Isère et Rhône-Alpes. Si vous ne trouvez pas votre réponse, appelez-nous.
              </p>

              <div className="relative max-w-xl">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher une question…"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            {filtered.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center py-12">
                <MessageCircle className="w-12 h-12 mx-auto text-brand-blue/40 mb-4" />
                <h2 className="font-display text-xl font-bold mb-3">Aucune réponse trouvée</h2>
                <p className="text-muted-foreground mb-5">
                  Posez-nous votre question directement, on vous répond sous 24h.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
                >
                  Nous écrire
                </Link>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-12">
                {filtered.map((group, gi) => (
                  <div key={gi}>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 pb-3 border-b border-border">
                      {group.category}
                    </h2>
                    <div className="space-y-3">
                      {group.items.map((item, i) => (
                        <details
                          key={i}
                          className="group bg-white border border-border rounded-2xl px-6 py-5 open:shadow-md open:border-brand-blue/30 transition-all"
                        >
                          <summary className="flex justify-between items-start gap-4 cursor-pointer font-semibold leading-snug">
                            <span>{item.q}</span>
                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 shrink-0 text-brand-blue mt-0.5" />
                          </summary>
                          <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Faq;
