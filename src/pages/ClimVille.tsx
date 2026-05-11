import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Check,
  Snowflake,
  MapPin,
  Star,
  Award,
  Shield,
  Truck,
  ArrowRight,
  Sparkles,
  Wind,
  Home,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { useSeo } from "@/lib/useSeo";
import { cities } from "@/data/cities";
import promoIndoor from "@/assets/catalog/aux-global.jpg";

/**
 * Page locale climatisation par ville. Réutilise la data cities (déjà
 * utilisée pour les pages PAC) pour générer 33 landings géo-locales
 * pour le mot-clé "climatisation réversible [ville]".
 *
 * URL : /climatisation-reversible/:ville
 */

const PRICES = [
  { label: "Mono-split 2,5 kW", surface: "10-22 m²", price: "890 €" },
  { label: "Mono-split 3,5 kW", surface: "22-35 m²", price: "990 €", badge: true },
  { label: "Mono-split 5,0 kW", surface: "35-55 m²", price: "1 690 €" },
  { label: "Bi-split (2 pièces)", surface: "60-90 m²", price: "2 490 €" },
  { label: "Tri-split (3 pièces)", surface: "80-120 m²", price: "3 990 €" },
];

const ClimVille = () => {
  const { ville } = useParams<{ ville: string }>();
  const city = cities.find((c) => c.slug === ville);

  if (!city) {
    return <Navigate to="/climatisation-reversible-990-euros" replace />;
  }

  const title = `Climatisation réversible ${city.name} (${city.postalCode}) : pose à partir de 990 € | ECO CVC`;
  const description = `Installation climatisation réversible AUX à ${city.name} et alentours (${city.department}). Pose à partir de 990 € TTC. Visite technique gratuite, RGE QualiPAC, garantie 3 ans. Devis sous 48h.`;
  const canonical = `https://ecocvc.pro/climatisation-reversible/${city.slug}`;

  useSeo({
    title,
    description,
    canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: `ECO CVC — Climatisation ${city.name}`,
          telephone: "+33629634045",
          address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            postalCode: city.postalCode,
            addressRegion: city.department,
            addressCountry: "FR",
          },
          areaServed: { "@type": "City", name: city.name },
          serviceType: "Installation climatisation réversible",
          priceRange: "€€",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
        },
        {
          "@type": "Service",
          name: `Installation climatisation réversible ${city.name}`,
          provider: { "@type": "Organization", name: "ECO CVC" },
          areaServed: city.name,
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "990",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: city.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ecocvc.pro/" },
            { "@type": "ListItem", position: 2, name: "Climatisation réversible", item: "https://ecocvc.pro/climatisation-reversible-990-euros" },
            { "@type": "ListItem", position: 3, name: city.name, item: canonical },
          ],
        },
      ],
    },
  });

  return (
    <PageTransition>
      <Navbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-bluedark via-brand-blue to-cyan-600 text-white pt-28 pb-14">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="container mx-auto px-4 relative">
            <nav className="text-sm text-white/70 mb-6 flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/climatisation-reversible-990-euros" className="hover:text-white">Clim réversible</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{city.name}</span>
            </nav>

            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-lifted">
                  <MapPin className="w-3.5 h-3.5" />
                  {city.name} ({city.postalCode}) · {city.distanceKm} km de notre atelier
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  Climatisation réversible à{" "}
                  <span className="text-gradient-hot">{city.name}</span>
                </h1>
                <p className="text-lg text-white/90 mb-6">
                  Installation pose-comprise <strong>à partir de 990 € TTC</strong> en mono-split,
                  jusqu'au gainable invisible. Équipe locale ECO CVC, RGE QualiPAC, certifiée
                  manipulation des fluides frigorigènes (F-Gaz). <strong>Visite technique
                  gratuite sous 48h</strong> à {city.name} et communes alentour.
                </p>
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
                    <Check className="w-4 h-4 text-emerald-300" /> Devis ferme
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> Garantie 3 ans
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-300" /> Sans frais déplacement
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 shadow-lifted">
                  <img loading="lazy" decoding="async"
                    src={promoIndoor}
                    alt={`Climatisation réversible AUX 3,5 kW posée à ${city.name}`}
                    className="w-full h-72 md:h-80 object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur rounded-xl px-3 py-2 text-brand-bluedark">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                      Best-seller
                    </div>
                    <div className="text-2xl font-black">990 € TTC</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-slate-200 bg-slate-50 py-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              {[
                { icon: Award, label: "RGE QualiPAC" },
                { icon: Shield, label: "F-Gaz cat. 1" },
                { icon: Star, label: "4,9/5 (127 avis)" },
                { icon: Truck, label: `Atelier à ${city.distanceKm} km` },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 justify-center text-slate-700">
                  <t.icon className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm font-semibold">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEXTE LOCAL */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <Home className="w-6 h-6 text-brand-blue" />
              <h2 className="text-3xl font-extrabold text-slate-900">
                Pourquoi la clim réversible à {city.name} ?
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">{city.intro}</p>
            <p className="text-slate-700 leading-relaxed mb-4">{city.localContext}</p>
            <p className="text-slate-700 leading-relaxed mb-6">{city.habitatNotes}</p>

            <div className="bg-brand-blue/5 rounded-2xl border border-brand-blue/20 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-brand-blue" />
                <h3 className="font-bold text-slate-900">
                  Spécificités à {city.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {city.specificites.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PRIX */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
              Tarifs climatisation à {city.name}
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Tarifs <strong>tout compris</strong> (matériel + pose + mise en service +
              attestation F-Gaz + garantie). Visite technique gratuite avant signature.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {PRICES.map((p) => (
                <div
                  key={p.label}
                  className={`rounded-xl p-5 text-center transition border-2 bg-white ${
                    p.badge
                      ? "border-brand-blue ring-2 ring-brand-blue/20 shadow-soft"
                      : "border-slate-200"
                  }`}
                >
                  {p.badge && (
                    <div className="inline-block bg-brand-red text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-2">
                      Best-seller
                    </div>
                  )}
                  <div className="text-xs font-semibold text-slate-700 mb-1">{p.label}</div>
                  <div className="text-[10px] text-slate-500 mb-2">{p.surface}</div>
                  <div className={`text-2xl font-black ${p.badge ? "text-brand-blue" : "text-slate-900"}`}>
                    {p.price}
                  </div>
                  <div className="text-[10px] text-slate-500">TTC posé</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/tarifs-climatisation-reversible"
                className="inline-flex items-center gap-1.5 text-sm text-brand-blue hover:text-brand-bluedark font-semibold underline underline-offset-4"
              >
                Voir tous nos tarifs détaillés (gainable, multi-split…)
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* COMMUNES VOISINES */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Zones d'intervention autour de {city.name}
            </h2>
            <p className="text-slate-600 mb-6">
              Notre atelier se trouve à {city.distanceKm} km. Nous intervenons sans frais
              de déplacement supplémentaires sur tout le secteur :
            </p>
            <div className="flex flex-wrap gap-2">
              {city.communesVoisines.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm border border-slate-200"
                >
                  <MapPin className="w-3 h-3 text-brand-blue" />
                  {c}
                </span>
              ))}
            </div>
            {city.quartiers && city.quartiers.length > 0 && (
              <>
                <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">
                  Quartiers de {city.name} desservis
                </h3>
                <div className="flex flex-wrap gap-2">
                  {city.quartiers.map((q) => (
                    <span
                      key={q}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-blue/5 text-brand-blue text-sm border border-brand-blue/20"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA MIDDLE */}
        <section className="py-12 bg-gradient-to-br from-brand-bluedark to-brand-blue text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Visite technique gratuite à {city.name}
            </h2>
            <p className="text-white/85 mb-6">
              30 minutes sur place, sans engagement. Devis ferme remis sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+33629634045"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition shadow-lifted"
              >
                <Phone className="w-4 h-4" /> 06 29 63 40 45
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 transition"
              >
                Réserver visite technique
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
              Questions sur la climatisation à {city.name}
            </h2>
            <div className="space-y-3">
              {city.faq.map((f, i) => (
                <details
                  key={i}
                  className="group bg-slate-50 rounded-xl border border-slate-200 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 list-none flex items-center justify-between gap-3">
                    <span>{f.q}</span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition shrink-0" />
                  </summary>
                  <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Voir aussi
            </h2>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                { to: "/climatisation-reversible-990-euros", label: "Offre 990 € détaillée" },
                { to: "/tarifs-climatisation-reversible", label: "Tous nos tarifs clim" },
                { to: `/pompe-a-chaleur/${city.slug}`, label: `PAC à ${city.name}` },
                { to: "/calculateur", label: "Calculateur de puissance" },
                { to: "/produits", label: "Gamme AUX" },
                { to: "/maintenance", label: "Entretien clim" },
                { to: "/depannage", label: "Dépannage 24/7" },
                { to: "/avis", label: "Avis clients" },
                { to: "/contact", label: "Devis gratuit" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition"
                >
                  <ArrowRight className="w-4 h-4 shrink-0" />
                  <span>{l.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Climatisation dans d'autres villes
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities
                  .filter((c) => c.slug !== city.slug)
                  .slice(0, 12)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      to={`/climatisation-reversible/${c.slug}`}
                      className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-700 hover:border-brand-blue hover:text-brand-blue transition"
                    >
                      {c.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outils + Lead magnet — capture conversion */}
        <section className="container mx-auto max-w-4xl px-4 py-2">
          <ArticleToolsCTA
            preset="ville-clim"
            variant="highlighted"
            title={`Calculez votre clim idéale pour ${city.name}`}
            subtitle="Puissance, prix, aides — résultats personnalisés en moins de 2 minutes."
          />
        </section>
        <section className="container mx-auto max-w-4xl px-4 pb-12">
          <LeadMagnetCard
            source={`clim-ville-${ville}`}
            variant="banner"
            title={`Guide Climatisation ${city.name} — gratuit`}
            subtitle={`Choisir la bonne puissance, comparer les marques, éviter les pièges — guide complet pour ${city.name}.`}
          />
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ClimVille;
