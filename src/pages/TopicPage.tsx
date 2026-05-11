/**
 * Page Topic / Tag — agrège les articles et villes pertinents.
 * Améliore le maillage interne et crée des landing pages SEO transversales.
 */

import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Hash, Calendar, Clock, MapPin, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { findTopic, topics } from "@/data/topics";
import { articles } from "@/data/articles";
import { cities } from "@/data/cities";
import { useSeo } from "@/lib/useSeo";

const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? findTopic(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";

  useSeo({
    title: topic?.metaTitle ?? "Topic — ECO CVC",
    description: topic?.metaDescription ?? "",
    canonical: topic ? `${baseUrl}/topic/${topic.slug}` : baseUrl,
    jsonLd: topic
      ? {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: topic.h1,
          description: topic.metaDescription,
          url: `${baseUrl}/topic/${topic.slug}`,
        }
      : undefined,
  });

  if (!topic) return <Navigate to="/blog" replace />;

  // Articles correspondant au topic
  const lower = (s: string) => s.toLowerCase();
  const matchedArticles = articles.filter((a) => {
    const inPinned = topic.pinnedArticles?.includes(a.slug);
    const titleMatch = topic.keywords.some((kw) => lower(a.title).includes(lower(kw)));
    const slugMatch = topic.keywords.some((kw) => lower(a.slug).includes(lower(kw)));
    return inPinned || titleMatch || slugMatch;
  });
  const orderedArticles = [
    ...(topic.pinnedArticles?.map((s) => articles.find((a) => a.slug === s)).filter(Boolean) ?? []),
    ...matchedArticles.filter((a) => !topic.pinnedArticles?.includes(a.slug)),
  ].slice(0, 20);

  // Villes liées
  const matchedCities = (topic.pinnedCities ?? [])
    .map((s) => cities.find((c) => c.slug === s))
    .filter(Boolean);

  // Autres topics suggérés
  const otherTopics = topics.filter((t) => t.slug !== topic.slug).slice(0, 4);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-32 pb-12 bg-gradient-to-br from-brand-bluedark via-brand-blue to-brand-sky text-white">
          <div className="container mx-auto max-w-5xl px-4">
            <nav className="flex items-center gap-1.5 text-xs text-white/80 mb-6">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Topics</span>
              <ChevronRight className="w-3 h-3" />
              <span className="font-medium text-white">{topic.title}</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-4">
                <Hash className="w-3.5 h-3.5" />
                Topic ECO CVC
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{topic.h1}</h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl">{topic.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* OUTILS LIÉS */}
        {topic.tools && topic.tools.length > 0 && (
          <section className="py-10 container mx-auto max-w-5xl px-4">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-5">Outils gratuits associés</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {topic.tools.map((t) => (
                <Link
                  key={t.href}
                  to={t.href}
                  className="p-4 rounded-2xl bg-white border border-brand-blue/20 hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all flex items-center gap-3"
                >
                  <Wrench className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="font-semibold text-sm flex-1">{t.label}</span>
                  <ArrowRight className="w-4 h-4 text-brand-blue" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ARTICLES */}
        {orderedArticles.length > 0 && (
          <section className="py-10 container mx-auto max-w-5xl px-4">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-5">
              Articles sur {topic.title} ({orderedArticles.length})
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {orderedArticles.map((a) => a && (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group p-5 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-2 block">
                    {a.category}
                  </span>
                  <h3 className="font-display font-semibold text-lg leading-tight mb-3 group-hover:text-brand-blue transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-3">{a.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(a.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {a.readingMinutes} min
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* VILLES LIÉES */}
        {matchedCities.length > 0 && (
          <section className="py-10 container mx-auto max-w-5xl px-4">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-5">Villes couvertes</h2>
            <div className="flex flex-wrap gap-2.5">
              {matchedCities.map((c) => c && (
                <Link
                  key={c.slug}
                  to={`/pompe-a-chaleur/${c.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/20 hover:bg-brand-blue/10 transition-colors text-sm font-medium text-brand-blue"
                >
                  <MapPin className="w-3 h-3" />
                  {c.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* LEAD MAGNET */}
        <section className="container mx-auto max-w-4xl px-4 py-10">
          <LeadMagnetCard
            source={`topic-${topic.slug}`}
            variant="banner"
            title={`Recevez notre Guide ${topic.title} gratuit`}
            subtitle="Tout ce qu'il faut savoir avant de signer : aides, prix, marques, arnaques à éviter. PDF complet."
          />
        </section>

        {/* AUTRES TOPICS */}
        <section className="py-10 bg-slate-50 border-t border-border">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-5">Autres sujets à explorer</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {otherTopics.map((t) => (
                <Link
                  key={t.slug}
                  to={`/topic/${t.slug}`}
                  className="p-4 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-md transition-all"
                >
                  <Hash className="w-4 h-4 text-brand-blue mb-2" />
                  <h3 className="font-bold text-sm leading-tight">{t.title}</h3>
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

export default TopicPage;
