import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ChevronRight, Quote, MapPin, Calendar, MessageSquare, ExternalLink, Heart, Sparkles, Gift } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { reviews, aggregateRating } from "@/data/reviews";
import { useSeo } from "@/lib/useSeo";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { useEffect, useState } from "react";
import type { GoogleReviewsData } from "@/components/GoogleReviewsWidget";

// Lien direct vers le formulaire d'avis Google ECO CVC
// (à remplacer par g.page/r/XXXXX/review quand Anthony aura récupéré
// le lien court depuis sa fiche Google Business Profile)
const GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=ECO+CVC+Nivolas-Vermelle";

const Avis = () => {
  const baseUrl = "https://ecocvc.pro";
  const stats = aggregateRating();
  const [googleData, setGoogleData] = useState<GoogleReviewsData | null>(null);
  const [searchParams] = useSearchParams();
  // ?source=sms permet de tracker qui arrive depuis un SMS d'invitation
  const fromSms = searchParams.get("source") === "sms";

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((r) => r.json())
      .then(setGoogleData)
      .catch(() => setGoogleData(null));
  }, []);

  const hasGoogleReviews = googleData && googleData.configured && googleData.ok && googleData.reviews.length > 0;

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

        {/* HERO — Optimisé pour la conversion SMS / partage WhatsApp.
            Si ?source=sms → message d'accueil personnalisé "vous nous
            connaissez déjà, un petit avis ?" */}
        <section className="pt-32 pb-12 md:pt-36 md:pb-16 bg-gradient-to-br from-brand-blue/8 via-white to-brand-green/8">
          <div className="container mx-auto max-w-5xl px-4">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Avis clients</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-yellow-200 text-xs font-bold uppercase tracking-wider text-amber-700 mb-5">
                <Heart className="w-3.5 h-3.5 fill-brand-red text-brand-red" />
                {fromSms ? "Merci beaucoup pour votre temps !" : "Vos retours nous portent"}
              </div>

              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                {fromSms ? (
                  <>Un <span className="text-gradient-brand">petit avis Google</span>, et un grand merci 🙏</>
                ) : (
                  <>Vos avis sur <span className="text-gradient-brand">ECO CVC</span></>
                )}
              </h1>

              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-7">
                {fromSms ? (
                  <>
                    Si notre intervention vous a satisfait, un <strong>petit avis Google</strong>{" "}
                    nous aiderait énormément à faire connaître notre travail localement.
                    <br />
                    <span className="text-base text-muted-foreground">
                      Ça prend <strong>30 secondes</strong> max — un immense merci d'avance.
                    </span>
                  </>
                ) : (
                  <>
                    Parce que la confiance se construit, nous publions ici les retours de nos clients
                    particuliers et professionnels en Isère et Rhône-Alpes.
                  </>
                )}
              </p>

              {/* CARTE NOTE + CTA GROS BOUTON GOOGLE */}
              <div className="rounded-3xl bg-white border-2 border-brand-blue/20 p-6 md:p-8 shadow-lifted">
                {stats && (
                  <div className="flex items-center gap-5 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold leading-none">
                        {stats.ratingValue}<span className="text-lg text-muted-foreground font-normal">/5</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-semibold">
                        sur {stats.reviewCount} avis Google
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-sm text-slate-700 mb-5 leading-relaxed">
                  {fromSms
                    ? "👉 Cliquez sur le gros bouton bleu ci-dessous, choisissez 5 étoiles, écrivez 2 mots et c'est fait. Pas de connexion compliquée requise."
                    : "Vous êtes client ECO CVC ? Un avis Google nous aide à nous développer localement."}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand-blue text-white font-bold text-base hover:bg-brand-bluedark transition-colors shadow-lifted"
                  >
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    Laisser un avis Google
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white border-2 border-brand-blue/20 text-brand-blue font-bold hover:bg-brand-blue/5 transition-colors"
                  >
                    Lire les avis
                  </a>
                </div>

                {fromSms && (
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <Sparkles className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <strong>Bonus pour vous remercier :</strong> via notre programme de parrainage,
                        vous touchez <strong>200 €</strong> à chaque proche qui devient client chez nous.{" "}
                        <Link to="/parrainage" className="text-brand-blue font-semibold underline">
                          Voir le programme
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {!fromSms && (
                <p className="text-sm text-muted-foreground mt-6">
                  Nous publions ici les avis Google vérifiés. Cliquez ci-dessus pour
                  laisser le vôtre — 30 secondes.
                </p>
              )}
            </motion.div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <GoogleReviewsWidget />
          </div>
        </section>

        {!hasGoogleReviews && reviews.length === 0 && (
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
                    href={GOOGLE_REVIEW_URL}
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
        )}
        {reviews.length > 0 && (
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
