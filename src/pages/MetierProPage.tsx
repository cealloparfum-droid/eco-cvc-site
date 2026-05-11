import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Check, ShieldCheck, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { findMetier, metiers } from "@/data/metiers-pro";
import { useSeo } from "@/lib/useSeo";

const MetierProPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const metier = slug ? findMetier(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = metier ? `${baseUrl}/froid-commercial/${metier.slug}` : baseUrl;

  useSeo({
    title: metier?.metaTitle ?? "Métiers pro — ECO CVC",
    description: metier?.metaDescription ?? "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: metier
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: `Frigoriste ${metier.name}`,
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
                addressCountry: "FR",
              },
            },
            areaServed: ["Isère", "Rhône", "Savoie", "Haute-Savoie", "Loire"],
            audience: { "@type": "BusinessAudience", audienceType: metier.name },
            url: canonical,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: metier.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : undefined,
  });

  if (!metier) return <Navigate to="/" replace />;

  const others = metiers.filter((m) => m.slug !== metier.slug).slice(0, 4);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-cool -z-10" />
          <div className="absolute inset-0 bg-grid opacity-[0.2] -z-10" />
          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground/70">Métiers pros</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{metier.name}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <div className="text-5xl mb-3">{metier.emoji}</div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
                Métier pro · {metier.name}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                {metier.h1}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">{metier.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+33629634045"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
                >
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
                <Link
                  to="/devis-froid-commercial"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50 transition-colors"
                >
                  Devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            {metier.intro.map((p, i) => (
              <p key={i} className="text-lg text-foreground/80 leading-relaxed mb-5">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Problèmes typiques */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">
              Problèmes que nous voyons régulièrement
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-3xl">
              Les défis spécifiques au métier de {metier.name.toLowerCase()}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {metier.problemes.map((p, i) => (
                <div key={i} className="flex gap-3 p-5 rounded-2xl bg-white border border-border">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-foreground/85 leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Équipements */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">
              Notre offre équipement
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-3xl">
              Tous les équipements froid pour votre {metier.name.toLowerCase()}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {metier.equipments.map((e, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-border">
                  <h3 className="font-display font-bold text-lg mb-2">{e.name}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">{e.description}</p>
                  <div className="text-sm font-semibold text-brand-blue">{e.priceRange}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contraintes réglementaires */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">
              Réglementation & normes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Contraintes spécifiques au métier
            </h2>
            <ul className="space-y-3">
              {metier.contraintes.map((c, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pourquoi ECO CVC */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">
              Pourquoi ECO CVC
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Notre engagement pour votre activité
            </h2>
            <div className="space-y-4">
              {metier.whyEcoCvc.map((w, i) => (
                <div key={i} className="flex gap-3 p-5 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
                  <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {metier.faq.map((item, i) => (
                <details key={i} className="group bg-white border border-border rounded-2xl px-6 py-5 open:shadow-md">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold">
                    {item.q}
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Autres métiers */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Autres métiers que nous équipons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {others.map((m) => (
                <Link
                  key={m.slug}
                  to={`/froid-commercial/${m.slug}`}
                  className="p-6 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl mb-3">{m.emoji}</div>
                  <h3 className="font-display font-semibold mb-1 group-hover:text-brand-blue transition-colors">
                    {m.name}
                  </h3>
                  <span className="text-xs text-brand-blue inline-flex items-center gap-1 font-medium">
                    Voir <ArrowRight className="w-3 h-3" />
                  </span>
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

export default MetierProPage;
