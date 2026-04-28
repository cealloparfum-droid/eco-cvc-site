import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Check, ShieldCheck, Clock, Euro, Award, Mail, User, MapPin, MessageSquare, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { findDevis } from "@/data/devis";
import { useSeo } from "@/lib/useSeo";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

const iconMap = { shield: ShieldCheck, clock: Clock, euro: Euro, award: Award };

const DevisLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const cfg = slug ? findDevis(slug) : undefined;
  const baseUrl = "https://ecocvc.pro";
  const canonical = cfg ? `${baseUrl}/${cfg.slug}` : baseUrl;

  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", zip: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useSeo({
    title: cfg?.metaTitle ?? "Devis ECO CVC",
    description: cfg?.metaDescription ?? "",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: cfg
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: cfg.service,
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
              addressCountry: "FR",
            },
          },
          areaServed: ["Isère", "Rhône", "Savoie", "Haute-Savoie", "Loire"],
          url: canonical,
        }
      : undefined,
  });

  if (!cfg) return <Navigate to="/contact" replace />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await submitForm({
        subject: `[eco cvc · DEVIS ${cfg.service.toUpperCase()}] ${form.name} (${form.zip})`,
        fields: {
          source: cfg.slug,
          service_demande: cfg.service,
          nom: form.name,
          email: form.email,
          telephone: form.phone,
          code_postal: form.zip,
          message: form.message || "—",
        },
      });
      if (result.ok) {
        setSent(true);
        toast({
          title: "Demande bien reçue",
          description: "Nous vous rappelons sous 24h ouvrées pour planifier la visite.",
        });
      }
    } catch {
      toast({
        title: "Problème d'envoi",
        description: "Appelez-nous directement au 07 58 45 99 00.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-cool -z-10" />
          <div className="absolute inset-0 bg-grid opacity-[0.2] -z-10" />

          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{cfg.title}</span>
            </nav>

            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                  {cfg.service}
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                  {cfg.h1.split(/(<.+?>|sous \d+h|24h|48h|gratuit)/i).map((part, i) => {
                    if (/(sous \d+h|24h|48h|gratuit)/i.test(part)) {
                      return <span key={i} className="text-gradient-brand">{part}</span>;
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-7">{cfg.promise}</p>

                <ul className="space-y-3 mb-7">
                  {cfg.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-7">
                  {cfg.trustBadges.map((b, i) => (
                    <span key={i} className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/30">
                      {b}
                    </span>
                  ))}
                </div>

                <a
                  href={`tel:${cfg.ctaPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Préférer appeler — 07 58 45 99 00
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white rounded-3xl border-2 border-brand-blue/15 shadow-xl p-7 md:p-8"
              >
                <div className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-bold uppercase tracking-wider">
                  Devis en 24h
                </div>

                {sent ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mb-5">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">Merci, demande reçue</h3>
                    <p className="text-muted-foreground">
                      Nous vous rappelons sous 24h ouvrées. Pour aller plus vite, appelez-nous au{" "}
                      <a href="tel:+33758459900" className="text-brand-blue font-semibold">07 58 45 99 00</a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <h2 className="font-display text-xl font-bold mb-4">Recevez votre devis</h2>

                    <div className="relative">
                      <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Nom et prénom" className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                    </div>

                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Email" className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="Téléphone" className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                      </div>
                      <div className="relative">
                        <MapPin className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input name="zip" required value={form.zip} onChange={handleChange} placeholder="Code postal" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                      </div>
                    </div>

                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-4 top-3.5 text-muted-foreground" />
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder={`Précisions (optionnel) : surface, type de logement, ${cfg.service.toLowerCase()} actuel…`} className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                    </div>

                    <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2">
                      {loading ? "Envoi…" : <>Recevoir mon devis <Send className="w-4 h-4" /></>}
                    </button>

                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                      Vos données ne sont utilisées que pour répondre à votre demande.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 max-w-2xl">
              Pourquoi choisir <span className="text-gradient-brand">ECO CVC</span> pour votre projet
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {cfg.whyUs.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-border">
                    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {cfg.faq.map((item, i) => (
                <details key={i} className="group bg-white border border-border rounded-2xl px-6 py-5 open:shadow-md">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold">
                    {item.q}
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default DevisLanding;
