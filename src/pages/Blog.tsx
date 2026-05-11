import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { articles } from "@/data/articles";
import { useSeo } from "@/lib/useSeo";
import NewsletterInline from "@/components/NewsletterInline";

const Blog = () => {
  const baseUrl = "https://ecocvc.pro";

  useSeo({
    title: "Blog ECO CVC — guides PAC, climatisation, aides MaPrimeRénov & CEE",
    description:
      "Tous nos guides experts sur la pompe à chaleur, la climatisation réversible, les aides 2026 (MaPrimeRénov', CEE) et le choix d'équipement pour votre logement en Isère et Rhône-Alpes.",
    canonical: `${baseUrl}/blog`,
    ogImage: `${baseUrl}/og-image.jpg`,
    pinterestKeywords: ["pompe à chaleur", "climatisation", "MaPrimeRénov", "rénovation énergétique", "PAC air-eau", "aides 2026"],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Blog ECO CVC",
        url: `${baseUrl}/blog`,
        publisher: { "@type": "Organization", name: "ECO CVC", url: baseUrl },
        blogPost: articles.map((a) => ({
          "@type": "BlogPosting",
          headline: a.title,
          url: `${baseUrl}/blog/${a.slug}`,
          datePublished: a.publishedAt,
          dateModified: a.updatedAt,
        })),
      },
      {
        // ItemList = Google peut afficher les articles en carrousel direct
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: articles.slice(0, 20).map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${baseUrl}/blog/${a.slug}`,
          name: a.title,
        })),
      },
    ],
  });

  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Blog</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                Le blog ECO CVC
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Tous nos <span className="text-gradient-brand">guides experts</span> PAC, clim & aides
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conseils concrets, montants à jour, retours du terrain. Pas de marketing, juste l'essentiel pour choisir, financer et installer votre équipement en Isère et Rhône-Alpes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2.5 mb-10">
              {categories.map((c) => (
                <span key={c} className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                  {c}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group flex flex-col p-7 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
                    {a.category}
                  </span>
                  <h2 className="font-display font-semibold text-xl leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                    {a.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-5 flex-grow">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {a.readingMinutes} min
                    </span>
                    <span className="inline-flex items-center gap-1 text-brand-blue font-medium">
                      Lire <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <NewsletterInline source="blog_hub" />
            </div>
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
