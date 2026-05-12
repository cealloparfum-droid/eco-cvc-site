import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Check, ChevronRight, Wind, Wrench, Thermometer, Award, Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { findCity } from "@/data/cities";
import { useSeo } from "@/lib/useSeo";
import { getCityClimate } from "@/lib/cityClimate";
import photoExt1 from "@/assets/photo-install-exterieur-1.jpeg";
import photoExt2 from "@/assets/photo-install-exterieur-2.jpeg";
import photoExt3 from "@/assets/photo-install-exterieur-3.jpeg";
import photoToit from "@/assets/photo-install-toit.jpeg";
import photoInterieur from "@/assets/photo-install-interieur.jpeg";

// Rotation déterministe des 5 photos selon le hash du slug ville
// (chaque ville garde toujours la MÊME photo, mais elles sont réparties)
const CITY_PHOTOS = [photoExt1, photoExt2, photoExt3, photoToit, photoInterieur];
function pickPhotoForCity(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return CITY_PHOTOS[h % CITY_PHOTOS.length];
}

const CityPage = () => {
  const { ville } = useParams<{ ville: string }>();
  const city = ville ? findCity(ville) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/pompe-a-chaleur/${ville}`;

  useSeo({
    title: city
      ? `Pompe à chaleur & climatisation à ${city.name} — ECO CVC, RGE QualiPAC`
      : "ECO CVC",
    description: city
      ? `Installation, entretien et dépannage de pompes à chaleur et climatisations à ${city.name} (${city.postalCode}). Artisan RGE QualiPAC à ${city.distanceKm} km. Devis gratuit, aides MaPrimeRénov & CEE.`
      : "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: city
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "Installation et entretien de pompe à chaleur et climatisation",
              provider: {
                "@type": "HVACBusiness",
                name: "ECO CVC",
                url: baseUrl,
                telephone: "+33629634045",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "1074 Route Départementale 1085",
                  addressLocality: "Nivolas-Vermelle",
                  postalCode: "38300",
                  addressRegion: "Isère",
                  addressCountry: "FR",
                },
              },
              areaServed: {
                "@type": "City",
                name: city.name,
                address: {
                  "@type": "PostalAddress",
                  postalCode: city.postalCode,
                  addressLocality: city.name,
                  addressRegion: city.department,
                  addressCountry: "FR",
                },
              },
              url: canonical,
              mainEntityOfPage: canonical,
            },
            {
              "@type": "FAQPage",
              mainEntity: city.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ],
        }
      : undefined,
  });

  if (!city) return <Navigate to="/" replace />;

  const services = [
    { icon: Thermometer, label: "Pompe à chaleur air-air", href: "/installation" },
    { icon: Home, label: "Pompe à chaleur air-eau", href: "/installation" },
    { icon: Wind, label: "Climatisation réversible", href: "/installation" },
    { icon: Wrench, label: "Maintenance & dépannage", href: "/maintenance" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* HERO — commun aux 3 variantes */}
        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-cool -z-10" />
          <div className="absolute inset-0 bg-grid opacity-[0.2] -z-10" />
          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Zones d'intervention</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{city.name}</span>
            </nav>

            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-5">
                  <MapPin className="w-3 h-3" /> {city.name} • {city.postalCode}
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Pompe à chaleur & climatisation à <span className="text-gradient-brand">{city.name}</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {city.intro}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+33629634045"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Appeler — devis gratuit
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50 transition-colors"
                  >
                    Demande en ligne <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/30">
                    <Award className="w-3 h-3" /> RGE QualiPAC
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/30">
                    Atelier à {city.distanceKm} km
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    Aides MaPrimeRénov + CEE
                  </span>
                </div>
              </motion.div>

              <div className="hidden lg:block rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  loading="lazy"
                  decoding="async"
                  src={pickPhotoForCity(city.slug)}
                  alt={`Installation pompe à chaleur et climatisation réversible à ${city.name} (${city.postalCode}) par ECO CVC, artisan RGE QualiPAC en ${city.department}`}
                  title={`PAC ${city.name} — ECO CVC`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENU PRINCIPAL — variation par city.variant */}
        {city.variant === "A" && (
          <>
            <SectionContext city={city} />
            <SectionClimat city={city} />
            <SectionServices services={services} city={city} />
            <SectionHabitat city={city} />
            <SectionCommunes city={city} />
            <SectionFaq city={city} />
          </>
        )}
        {city.variant === "B" && (
          <>
            <SectionServices services={services} city={city} />
            <SectionClimat city={city} />
            <SectionContext city={city} />
            <SectionCommunes city={city} />
            <SectionHabitat city={city} />
            <SectionFaq city={city} />
          </>
        )}
        {city.variant === "C" && (
          <>
            <SectionHabitat city={city} />
            <SectionContext city={city} />
            <SectionClimat city={city} />
            <SectionServices services={services} city={city} />
            <SectionFaq city={city} />
            <SectionCommunes city={city} />
          </>
        )}

        {/* Outils gratuits — pousse vers les calculateurs (lead gen) */}
        <section className="container mx-auto max-w-4xl px-4 py-2">
          <ArticleToolsCTA
            preset="ville-pac"
            variant="highlighted"
            title={`Estimez vos aides et le bon dimensionnement pour ${city.name}`}
            subtitle="3 outils gratuits — résultat personnalisé en moins de 2 minutes, basé sur les barèmes officiels 2026."
          />
        </section>

        {/* Lead magnet — capture email contre Guide PAC PDF gratuit */}
        <section className="container mx-auto max-w-4xl px-4 py-6">
          <LeadMagnetCard
            source={`city-pac-${ville}`}
            variant="banner"
            title={`Guide PAC ${city.name} 2026 — gratuit`}
            subtitle={`Aides exactes, marques fiables, arnaques à éviter et checklist signature — pour les habitants de ${city.name} et environs.`}
          />
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

const SectionContext = ({ city }: { city: ReturnType<typeof findCity> & object }) => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">
          Le marché PAC à {city.name}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
          Ce qu'il faut savoir avant d'installer une pompe à chaleur à {city.name}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{city.localContext}</p>

        <ul className="space-y-3 mt-8">
          {city.specificites.map((s, i) => (
            <li key={i} className="flex gap-3 items-start">
              <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
              <span className="text-foreground/90">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const SectionServices = ({ services, city }: { services: { icon: any; label: string; href: string }[]; city: ReturnType<typeof findCity> & object }) => (
  <section className="py-14 md:py-20 bg-slate-50/60">
    <div className="container mx-auto">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Nos prestations à {city.name}</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 max-w-3xl">
        Installation, entretien et dépannage à {city.name} et alentours
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <Link
            key={i}
            to={s.href}
            className="group p-6 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold mb-1">{s.label}</h3>
            <p className="text-sm text-muted-foreground">à {city.name} et communes voisines</p>
            <span className="text-sm text-brand-blue inline-flex items-center gap-1 mt-3 font-medium">
              En savoir plus <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const SectionHabitat = ({ city }: { city: ReturnType<typeof findCity> & object }) => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">L'habitat à {city.name}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Maisons, copropriétés, bâti ancien : nos retours d'expérience locaux
          </h2>
          <p className="text-muted-foreground leading-relaxed">{city.habitatNotes}</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-green/5 p-7 border border-border">
          <h3 className="font-semibold text-lg mb-4">Population & contexte</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Population</dt><dd className="font-semibold">{city.population}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Code postal</dt><dd className="font-semibold">{city.postalCode}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Département</dt><dd className="font-semibold">{city.department}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Distance ECO CVC</dt><dd className="font-semibold">{city.distanceKm} km</dd></div>
          </dl>
        </div>
      </div>
    </div>
  </section>
);

const SectionCommunes = ({ city }: { city: ReturnType<typeof findCity> & object }) => (
  <section className="py-14 md:py-20 bg-slate-50/60">
    <div className="container mx-auto">
      {city.quartiers && city.quartiers.length > 0 && (
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Quartiers desservis à {city.name}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-3xl">
            Tous les quartiers de {city.name} couverts
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Quel que soit votre secteur dans {city.name}, nous intervenons sans frais de déplacement supplémentaires :
          </p>
          <div className="flex flex-wrap gap-2.5">
            {city.quartiers.map((q, i) => (
              <span key={i} className="px-3.5 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/20 text-sm text-brand-blue font-medium">
                {q}
              </span>
            ))}
          </div>
        </div>
      )}

      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Zone d'intervention élargie</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-3xl">
        Nous intervenons aussi autour de {city.name}
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Le bassin de {city.name} fait partie de notre zone quotidienne. Nous nous déplaçons sans surcoût dans les communes suivantes :
      </p>
      <div className="flex flex-wrap gap-2.5">
        {city.communesVoisines.map((c, i) => (
          <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-border text-sm text-foreground/80">
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/**
 * SectionClimat — contenu climat ULTRA local, unique par ville,
 * généré automatiquement à partir de getCityClimate().
 * Booste l'unicité de chaque page ville (anti-duplicate content).
 */
const SectionClimat = ({ city }: { city: ReturnType<typeof findCity> & object }) => {
  const climate = getCityClimate(city);
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-brand-sky/5 via-white to-brand-blue/5 border-y border-border">
      <div className="container mx-auto max-w-4xl px-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">
          Climat local — {climate.zoneLabel}
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">
          Pourquoi une PAC est adaptée à {city.name}
        </h2>

        <p className="text-foreground/85 leading-relaxed mb-7">{climate.paragraphe}</p>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <div className="p-5 rounded-2xl bg-white border border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">❄️</span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">Hiver typique</p>
            </div>
            <p className="font-display text-3xl font-bold text-foreground">
              {climate.tempHiverMin}°C
            </p>
            <p className="text-sm text-muted-foreground">température minimale en vague de froid</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">☀️</span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-red">Été typique</p>
            </div>
            <p className="font-display text-3xl font-bold text-foreground">
              {climate.tempEteMax}°C
            </p>
            <p className="text-sm text-muted-foreground">température maximale en canicule</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-border p-6 mb-6">
          <h3 className="font-bold text-foreground mb-3">Phénomènes climatiques observés à {city.name}</h3>
          <ul className="space-y-2">
            {climate.phenomenes.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-foreground/80">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-blue/5 border border-brand-blue/20 p-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1.5">
            Notre recommandation technique pour {city.name}
          </p>
          <p className="text-foreground/85 leading-relaxed">{climate.recoTypePAC}</p>
        </div>
      </div>
    </section>
  );
};

const SectionFaq = ({ city }: { city: ReturnType<typeof findCity> & object }) => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto max-w-3xl">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Questions fréquentes — {city.name}</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
        Vos questions sur la PAC à {city.name}
      </h2>
      <div className="space-y-4">
        {city.faq.map((item, i) => (
          <details key={i} className="group bg-white border border-border rounded-2xl px-6 py-5 open:shadow-md transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg">
              {item.q}
              <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default CityPage;
