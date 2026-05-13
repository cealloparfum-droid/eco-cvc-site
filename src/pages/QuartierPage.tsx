import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  MapPin,
  Star,
  Award,
  Shield,
  AlertTriangle,
  Wrench,
  Home,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { useSeo } from "@/lib/useSeo";
import { quartiers } from "@/data/quartiers";
import { cities } from "@/data/cities";

/**
 * Page locale climatisation par quartier (sous-zone d'une ville).
 * URL : /quartier/:slug
 *
 * Cible des recherches longue traîne ultra-locales :
 * - "clim Croix-Rousse"
 * - "climatisation Confluence Lyon"
 * - "PAC Saint-Clair Caluire"
 */
const QuartierPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const quartier = quartiers.find((q) => q.slug === slug);

  if (!quartier) {
    return <Navigate to="/plan-du-site" replace />;
  }

  const city = cities.find((c) => c.slug === quartier.citySlug);
  const cityLabel = quartier.cityName;
  const title = `Climatisation réversible ${quartier.name} (${cityLabel}) | ECO CVC`;
  const description = `Pose de climatisation réversible et pompe à chaleur air-air dans le quartier ${quartier.name} (${cityLabel}). ${quartier.intro.slice(0, 90)} Devis gratuit, RGE QualiPAC.`;
  const canonical = `https://ecocvc.pro/quartier/${quartier.slug}`;

  useSeo({
    title,
    description,
    canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: `ECO CVC — Climatisation ${quartier.name}`,
          telephone: "+33629634045",
          address: {
            "@type": "PostalAddress",
            addressLocality: cityLabel,
            postalCode: quartier.postalCodes[0],
            addressRegion: city?.department ?? "Rhône",
            addressCountry: "FR",
          },
          areaServed: { "@type": "Place", name: `${quartier.name}, ${cityLabel}` },
          serviceType: "Installation climatisation réversible et pompe à chaleur",
          priceRange: "€€",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "29",
          },
        },
        {
          "@type": "Service",
          name: `Climatisation réversible ${quartier.name}`,
          provider: { "@type": "Organization", name: "ECO CVC" },
          areaServed: `${quartier.name} (${cityLabel})`,
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "990",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: quartier.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ecocvc.pro/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Climatisation réversible",
              item: "https://ecocvc.pro/climatisation-reversible-990-euros",
            },
            ...(city
              ? [
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: cityLabel,
                    item: `https://ecocvc.pro/climatisation-reversible/${city.slug}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: quartier.name,
                    item: canonical,
                  },
                ]
              : [
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: quartier.name,
                    item: canonical,
                  },
                ]),
          ],
        },
      ],
    },
  });

  // 4 quartiers similaires (même ville en priorité, sinon n'importe lesquels)
  const related = quartiers
    .filter((q) => q.slug !== quartier.slug)
    .sort((a, b) => {
      if (a.citySlug === quartier.citySlug && b.citySlug !== quartier.citySlug) return -1;
      if (b.citySlug === quartier.citySlug && a.citySlug !== quartier.citySlug) return 1;
      return 0;
    })
    .slice(0, 6);

  return (
    <PageTransition>
      <Navbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-bluedark via-brand-blue to-cyan-600 text-white pt-28 pb-14">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="container mx-auto px-4 relative">
            <nav className="text-sm text-white/70 mb-6 flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-white">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/climatisation-reversible-990-euros" className="hover:text-white">
                Clim réversible
              </Link>
              <ChevronRight className="w-4 h-4" />
              {city && (
                <>
                  <Link
                    to={`/climatisation-reversible/${city.slug}`}
                    className="hover:text-white"
                  >
                    {cityLabel}
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
              <span className="text-white">{quartier.name}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-lifted">
                <MapPin className="w-3.5 h-3.5" />
                {quartier.name} · {cityLabel} · {quartier.postalCodes.join(" / ")}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-3xl">
                Climatisation réversible{" "}
                <span className="text-gradient-hot">{quartier.name}</span>
              </h1>
              <p className="text-lg text-white/90 mb-6 max-w-3xl">{quartier.intro}</p>
              <div className="flex flex-wrap gap-3 mb-5">
                <a
                  href="tel:+33629634045"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-brand-bluedark font-bold hover:bg-slate-100 transition shadow-lifted"
                >
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition"
                >
                  Devis gratuit sous 48h
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-300" /> Visite technique offerte
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-300" /> RGE QualiPAC
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-300" /> Garantie 3 ans
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-slate-200 bg-slate-50 py-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              {[
                { icon: Award, label: "RGE QualiPAC" },
                { icon: Shield, label: "F-Gaz cat. 1" },
                { icon: Star, label: "5,0/5 (29 avis Google)" },
                { icon: MapPin, label: `Intervention ${quartier.name}` },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 justify-center text-slate-700"
                >
                  <t.icon className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm font-semibold">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HABITAT */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-6 h-6 text-brand-blue" />
              <h2 className="text-3xl font-extrabold text-slate-900">
                L'habitat à {quartier.name}
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-8">{quartier.habitat}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* CONTRAINTES */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-slate-900">
                    Contraintes spécifiques
                  </h3>
                </div>
                <ul className="space-y-2">
                  {quartier.contraintes.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOLUTIONS */}
              <div className="bg-brand-blue/5 rounded-2xl border border-brand-blue/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-bold text-slate-900">Nos solutions adaptées</h3>
                </div>
                <ul className="space-y-2">
                  {quartier.solutions.map((s, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PRIX */}
            <div className="mt-8 bg-gradient-to-br from-brand-bluedark to-brand-blue rounded-2xl p-6 text-white">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase bg-white/15 rounded-full px-2.5 py-1 mb-2">
                    <Sparkles className="w-3 h-3" /> Prix indicatif {quartier.name}
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold">
                    {quartier.prixIndicatif}
                  </div>
                  <p className="text-sm text-white/80 mt-2">
                    Devis ferme après visite technique gratuite. Aucun frais
                    surprise.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-brand-bluedark font-bold hover:bg-slate-100 transition shadow-lifted"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
              Questions fréquentes — {quartier.name}
            </h2>
            <div className="space-y-4">
              {quartier.faq.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-slate-200 bg-white p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 flex items-start justify-between gap-4 list-none">
                    <span>{f.q}</span>
                    <ChevronRight className="w-5 h-5 text-brand-blue shrink-0 mt-0.5 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-slate-700 leading-relaxed text-sm">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* QUARTIERS SIMILAIRES */}
        {related.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                Autres quartiers {city ? `de ${cityLabel} et alentour` : "à proximité"}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {related.map((q) => (
                  <Link
                    key={q.slug}
                    to={`/quartier/${q.slug}`}
                    className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-blue hover:shadow-soft transition"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                      {q.cityName}
                    </div>
                    <div className="font-semibold text-slate-900 group-hover:text-brand-blue transition">
                      Clim réversible {q.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {q.postalCodes.join(" · ")}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 text-center">
                {city && (
                  <Link
                    to={`/climatisation-reversible/${city.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-brand-blue hover:text-brand-bluedark font-semibold underline underline-offset-4"
                  >
                    Voir toute la page {cityLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA FINAL */}
        <section className="py-14 bg-gradient-to-br from-brand-bluedark via-brand-blue to-cyan-600 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Devis climatisation gratuit à {quartier.name}
            </h2>
            <p className="text-white/90 mb-6">
              Visite technique offerte sous 48h, devis ferme et tout-compris,
              installation sous 2 à 4 semaines.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:+33629634045"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-bluedark font-bold hover:bg-slate-100 transition shadow-lifted"
              >
                <Phone className="w-4 h-4" /> 06 29 63 40 45
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </section>

        {/* Outils + Lead magnet */}
        <section className="container mx-auto max-w-4xl px-4 pt-12 pb-2">
          <ArticleToolsCTA
            preset="quartier"
            variant="highlighted"
            title={`Outils gratuits pour ${quartier.nom}`}
            subtitle="Simulez vos aides, calculez la puissance idéale, vérifiez un devis reçu — résultats instantanés."
          />
        </section>
        <section className="container mx-auto max-w-4xl px-4 pb-16">
          <LeadMagnetCard
            source={`quartier-${slug}`}
            variant="banner"
            title={`Guide PAC & Clim ${quartier.nom} — gratuit`}
            subtitle={`Spécificités du quartier, aides locales 2026, marques fiables, arnaques à éviter — guide complet en PDF.`}
          />
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default QuartierPage;
