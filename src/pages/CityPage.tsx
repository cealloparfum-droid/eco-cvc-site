import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Check, ChevronRight, Wind, Wrench, Thermometer, Award, Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { findCity } from "@/data/cities";
import { useSeo } from "@/lib/useSeo";
import photoInstall from "@/assets/photo-install-exterieur-1.jpeg";

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
          "@type": "Service",
          serviceType: "Installation et entretien de pompe à chaleur et climatisation",
          provider: {
            "@type": "HVACBusiness",
            name: "ECO CVC",
            url: baseUrl,
            telephone: "+33758459900",
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
                    href="tel:+33758459900"
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
                <img src={photoInstall} alt={`Installation pompe à chaleur à ${city.name} par ECO CVC`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENU PRINCIPAL — variation par city.variant */}
        {city.variant === "A" && (
          <>
            <SectionContext city={city} />
            <SectionServices services={services} city={city} />
            <SectionHabitat city={city} />
            <SectionCommunes city={city} />
            <SectionFaq city={city} />
          </>
        )}
        {city.variant === "B" && (
          <>
            <SectionServices services={services} city={city} />
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
            <SectionServices services={services} city={city} />
            <SectionFaq city={city} />
            <SectionCommunes city={city} />
          </>
        )}

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
      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Zone d'intervention</span>
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
