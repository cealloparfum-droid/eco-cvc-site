import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, Wallet, FileCheck, Building2, ArrowRight, Phone, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { findAides, aidesCollectivites } from "@/data/aides-collectivites";
import { useSeo } from "@/lib/useSeo";

const AidesCollectivitePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const a = slug ? findAides(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = a ? `${baseUrl}/aides-locales/${a.slug}` : baseUrl;

  useSeo({
    title: a?.metaTitle ?? "Aides locales — ECO CVC",
    description: a?.metaDescription ?? "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: a
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Conseil et installation pompe à chaleur avec aides locales",
            provider: { "@type": "HVACBusiness", name: "ECO CVC", url: baseUrl, telephone: "+33758459900" },
            areaServed: { "@type": "AdministrativeArea", name: a.name },
            url: canonical,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: a.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : undefined,
  });

  if (!a) return <Navigate to="/" replace />;

  const others = aidesCollectivites.filter((x) => x.slug !== a.slug).slice(0, 4);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-cool -z-10" />
          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground/70">Aides locales</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{a.name}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                <MapPin className="w-3.5 h-3.5" /> {a.name} · {a.population}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                {a.h1}
              </h1>
              <div className="space-y-3">
                {a.intro.map((p, i) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/simulateur-aides" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
                  Simuler mes aides <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+33758459900" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50 transition-colors">
                  <Phone className="w-4 h-4" /> 07 58 45 99 00
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Aides nationales */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Aides nationales</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-3xl">
              Les aides de l'État en 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {a.aidesNationales.map((aide, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <FileCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <h3 className="font-display font-bold text-lg">{aide.name}</h3>
                  </div>
                  <div className="text-2xl font-display font-bold text-brand-green mb-2">{aide.montant}</div>
                  <p className="text-foreground/80 leading-relaxed">{aide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aides locales */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Spécifique {a.name}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-3xl">
              Aides locales en plus du national
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {a.aidesLocales.map((aide, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-green/5 border-2 border-brand-blue/15">
                  <div className="flex items-start gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <h3 className="font-display font-bold text-lg">{aide.name}</h3>
                  </div>
                  <div className="text-2xl font-display font-bold text-brand-blue mb-2">{aide.montant}</div>
                  <p className="text-foreground/80 leading-relaxed mb-3">{aide.description}</p>
                  {aide.conditions && (
                    <p className="text-xs text-muted-foreground italic">Conditions : {aide.conditions}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cumul exemple */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <div className="rounded-3xl border-2 border-brand-green/20 bg-gradient-to-br from-brand-green/5 via-white to-brand-blue/5 p-7 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="w-6 h-6 text-brand-green" />
                <h2 className="font-display text-2xl md:text-3xl font-bold">Exemple de cumul</h2>
              </div>
              <p className="text-foreground/85 leading-relaxed text-lg">{a.cumul}</p>
              <Link to="/simulateur-aides" className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
                Calculer pour mon projet <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Communes desservies */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3 block">Communes desservies</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-3xl">
              ECO CVC intervient sur tout {a.name}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {a.communes.map((c, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-border text-sm text-foreground/80">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {a.faq.map((item, i) => (
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

        {/* Autres collectivités */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Aides dans les autres métropoles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={`/aides-locales/${o.slug}`}
                  className="p-6 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all group"
                >
                  <Building2 className="w-6 h-6 text-brand-blue mb-3" />
                  <h3 className="font-display font-semibold mb-1 group-hover:text-brand-blue transition-colors leading-tight">
                    {o.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{o.population}</p>
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

export default AidesCollectivitePage;
