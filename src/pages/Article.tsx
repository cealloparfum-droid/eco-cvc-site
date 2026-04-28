import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Calendar, ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { findArticle, articles } from "@/data/articles";
import { findCity } from "@/data/cities";
import { useSeo } from "@/lib/useSeo";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? findArticle(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/blog/${slug}`;

  useSeo({
    title: article ? article.metaTitle : "Article",
    description: article ? article.metaDescription : "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: article
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          author: { "@type": "Organization", name: "ECO CVC", url: baseUrl },
          publisher: {
            "@type": "Organization",
            name: "ECO CVC",
            logo: { "@type": "ImageObject", url: `${baseUrl}/og-image.jpg` },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          image: `${baseUrl}/og-image.jpg`,
          articleSection: article.category,
        }
      : undefined,
  });

  if (!article) return <Navigate to="/blog" replace />;

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="pt-44 pb-14 md:pt-48">
          <div className="container mx-auto max-w-3xl">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-brand-blue transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium line-clamp-1">{article.category}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                {article.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">{article.title}</h1>
              <div className="flex flex-wrap gap-5 text-sm text-muted-foreground mb-10">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readingMinutes} min de lecture
                </span>
              </div>

              {article.intro.map((p, i) => (
                <p key={i} className="text-lg text-foreground/80 leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </article>

        <div className="container mx-auto max-w-3xl pb-14 md:pb-20">
          {article.sections.map((section, i) => (
            <section key={i} className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-5 mt-10">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-foreground/80 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-3 my-6 pl-1">
                  {section.list.map((item, k) => (
                    <li key={k} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.callout && (
                <div className="my-7 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">{section.callout.title}</p>
                  <p className="text-foreground/85 leading-relaxed">{section.callout.body}</p>
                </div>
              )}
            </section>
          ))}

          <section className="mt-16 pt-10 border-t border-border">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-7">Questions fréquentes</h2>
            <div className="space-y-3">
              {article.faq.map((item, i) => (
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

          {(article.relatedCities?.length || article.relatedServices?.length) && (
            <section className="mt-16 pt-10 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-5">Pour aller plus loin</h2>
              {article.relatedServices && article.relatedServices.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Sur ECO CVC</p>
                  <div className="flex flex-wrap gap-2.5">
                    {article.relatedServices.map((s, i) => (
                      <Link
                        key={i}
                        to={s.href}
                        className="px-4 py-2 rounded-full bg-white border border-border hover:border-brand-blue/50 hover:text-brand-blue transition-colors text-sm"
                      >
                        {s.label} <ArrowRight className="w-3 h-3 inline ml-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {article.relatedCities && article.relatedCities.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Vous habitez dans une de ces villes ?</p>
                  <div className="flex flex-wrap gap-2.5">
                    {article.relatedCities.map((slug) => {
                      const c = findCity(slug);
                      if (!c) return null;
                      return (
                        <Link
                          key={slug}
                          to={`/pompe-a-chaleur/${slug}`}
                          className="px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/20 hover:bg-brand-blue/10 transition-colors text-sm text-brand-blue font-medium"
                        >
                          {c.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </section>
          )}

          <div className="mt-12 pt-10 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-brand-blue hover:underline">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
          </div>
        </div>

        <section className="bg-slate-50/60 py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Articles similaires</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((a) => (
                <Link key={a.slug} to={`/blog/${a.slug}`} className="group p-6 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">{a.category}</span>
                  <h3 className="font-display font-semibold text-lg leading-tight mb-3 group-hover:text-brand-blue transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
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

export default Article;
