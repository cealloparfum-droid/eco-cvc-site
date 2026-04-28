import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ChevronRight, Quote, MapPin, Calendar, MessageSquare, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { reviews, aggregateRating } from "@/data/reviews";
import { useSeo } from "@/lib/useSeo";

const Avis = () => {
  const baseUrl = "https://ecocvc.pro";
  const stats = aggregateRating();

  useSeo({
    title: "Avis clients ECO CVC — pompe à chaleur, climatisation, maintenance",
    description: stats
      ? `Témoignages vérifiés de nos clients en Isère et Rhône-Alpes : ${stats.reviewCount} avis, note moyenne ${stats.ratingValue}/5. ECO CVC, RGE QualiPAC.`
      : "Donnez votre avis sur les prestations ECO CVC : installation pompe à chaleur, climatisation, maintenance et dépannage en Isère et Rhône-Alpes.",
    canonical: `${baseUrl}/avis`,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: stats
      ? {
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "@id": `${baseUrl}/#business`,
          name: "ECO CVC",
          url: baseUrl,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: stats.ratingValue,
            reviewCount: stats.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            datePublished: r.date,
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
              worstRating: 1,
            },
            reviewBody: r.body,
            itemReviewed: { "@type": "Service", name: r.service },
          })),
        }
      : undefined,
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
              <span className="text-foreground font-medium">Avis clients</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                Témoignages clients
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Vos avis sur <span className="text-gradient-brand">ECO CVC</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Parce que la confiance se construit, nous publions ici les retours de nos clients particuliers et professionnels en Isère et Rhône-Alpes.
              </p>

              {stats && (
                <div className="inline-flex items-center gap-5 px-6 py-4 rounded-2xl bg-white border border-border shadow-soft mt-8">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold leading-none">
                      {stats.ratingValue}<span className="text-base text-muted-foreground font-normal">/5</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stats.reviewCount} avis clients</div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {reviews.length === 0 ? (
          <section className="pb-14 md:pb-20">
            <div className="container mx-auto max-w-3xl">
              <div className="rounded-3xl border-2 border-dashed border-brand-blue/30 bg-gradient-to-br from-brand-blue/5 via-white to-brand-green/5 p-8 md:p-12 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-5">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Vous êtes client ECO CVC ? Partagez votre expérience
                </h2>
                <p className="text-muted-foreground mb-7 leading-relaxed max-w-2xl mx-auto">
                  Nous publions ici uniquement des avis vérifiés. Votre retour aide d'autres familles à choisir le bon artisan pour leur projet pompe à chaleur, climatisation, ou ventilation.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://www.google.com/search?q=ECO+CVC+Nivolas-Vermelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
                  >
                    Laisser un avis sur Google <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50 transition-colors"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="pb-14 md:pb-20">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((r, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                    className="relative bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <Quote className="absolute top-5 right-5 w-7 h-7 text-brand-blue/15" />

                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star
                          key={k}
                          className={`w-4 h-4 ${k < r.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                        />
                      ))}
                    </div>

                    <p className="text-foreground/85 leading-relaxed mb-5">{r.body}</p>

                    <div className="flex flex-col gap-1.5 pt-4 border-t border-border text-sm">
                      <span className="font-semibold text-foreground">{r.author}</span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {r.city}
                        <span className="mx-1">•</span>
                        <Calendar className="w-3 h-3" />
                        {new Date(r.date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
                      </span>
                      <span className="inline-block mt-1 text-xs font-bold uppercase tracking-wider text-brand-blue">
                        {r.service}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Avis;
