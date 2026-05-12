import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Briefcase, Wrench, Shield, GraduationCap, Heart, Phone, Mail, Send, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import { useState } from "react";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

const POSTES = [
  {
    titre: "Frigoriste / Technicien CVC",
    type: "CDI",
    experience: "2 ans minimum",
    lieu: "Nivolas-Vermelle (38)",
    description: "Installation, maintenance et dépannage de PAC, climatisations et froid commercial. Habilitation F-Gaz souhaitée. Permis B requis.",
    competences: ["Habilitation F-Gaz Cat. 1 ou en cours d'obtention", "Connaissances frigorifiques (cycles, fluides R32/R290)", "Lecture de schémas électriques", "Esprit d'équipe et autonomie"],
  },
  {
    titre: "Apprenti BTS FED ou Bac Pro TFCA",
    type: "Apprentissage",
    experience: "Étudiant",
    lieu: "Nivolas-Vermelle (38)",
    description: "Accompagnement par nos artisans expérimentés sur tous types de chantiers. Formation accélérée sur PAC, climatisation, ventilation, froid commercial.",
    competences: ["Inscrit en BTS Fluides-Énergies-Domotique ou Bac Pro Technicien Froid et Conditionnement d'Air", "Permis B (souhaité)", "Motivation, sérieux"],
  },
];

const Recrutement = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/recrutement`;
  const { toast } = useToast();

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", poste: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useSeo({
    title: "Recrutement ECO CVC — frigoriste, apprenti CVC en Isère | RGE QualiPAC",
    description:
      "ECO CVC recrute en Isère et Rhône-Alpes : frigoriste, technicien CVC, apprenti BTS FED. CDI, alternance. Esprit d'équipe, montée en compétences, RGE QualiPAC.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    // Schema JobPosting enrichi pour apparition dans Google Jobs
    jsonLd: POSTES.map((p, idx) => ({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: p.titre,
      description: `<p>${p.description}</p><p>ECO CVC est artisan RGE QualiPAC en Isère et Rhône-Alpes. Nous recrutons pour accompagner notre développement sur Bourgoin-Jallieu, Lyon, Vienne et toute la région.</p>`,
      identifier: {
        "@type": "PropertyValue",
        name: "ECO CVC",
        value: `ECO-CVC-2026-${idx + 1}`,
      },
      datePosted: "2026-05-07",
      validThrough: "2027-05-07T00:00:00",
      employmentType: p.type === "Alternance" ? "INTERN" : "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "ECO CVC",
        sameAs: baseUrl,
        logo: `${baseUrl}/og-image.jpg`,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1074 Route Départementale 1085",
          addressLocality: "Nivolas-Vermelle",
          postalCode: "38300",
          addressRegion: "Isère",
          addressCountry: "FR",
        },
      },
      applicantLocationRequirements: {
        "@type": "Country",
        name: "France",
      },
      jobLocationType: "TELECOMMUTE" === "TELECOMMUTE" ? undefined : undefined,
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "EUR",
        value: {
          "@type": "QuantitativeValue",
          unitText: "MONTH",
          value: p.type === "Alternance" ? 900 : 2400,
          minValue: p.type === "Alternance" ? 700 : 2200,
          maxValue: p.type === "Alternance" ? 1200 : 3200,
        },
      },
      qualifications: p.requis ?? "Permis B obligatoire, attestation F-Gaz appréciée, sens du contact client",
      educationRequirements: p.type === "Alternance" ? "BTS Fluides Énergies Domotique (FED) ou équivalent en cours" : "CAP/BEP minimum en froid et climatisation",
      experienceRequirements: p.type === "Alternance" ? "Pas d'expérience requise" : "Minimum 2 ans en CVC",
      industry: "Génie climatique et chauffage",
      occupationalCategory: "49-9021.00 Heating, Air Conditioning, and Refrigeration Mechanics",
      directApply: true,
      url: canonical,
    })),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.name) return;
    setLoading(true);
    try {
      const r = await submitForm({
        subject: `[eco cvc · candidature] ${form.poste || "Spontanée"} — ${form.name}`,
        fields: {
          source: "recrutement",
          poste: form.poste || "Candidature spontanée",
          nom: form.name,
          email: form.email,
          telephone: form.phone,
          message: form.message,
        },
      });
      if (r.ok) {
        setSent(true);
        toast({ title: "Candidature reçue", description: "Nous revenons vers vous sous 5 jours." });
      }
    } catch {
      toast({ title: "Problème d'envoi", description: "Envoyez votre CV à ecocvc69@gmail.com", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-14 md:pt-48 md:pb-20">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Recrutement</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                <Briefcase className="w-3.5 h-3.5" /> Nous recrutons
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Rejoignez l'équipe <span className="text-gradient-brand">ECO CVC</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entreprise artisanale dynamique en Isère, RGE QualiPAC. Nous recherchons des passionnés du CVC pour grandir avec nous : frigoristes, techniciens, apprentis.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Postes ouverts</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {POSTES.map((p, i) => (
                <div key={i} className="p-7 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue">{p.type}</span>
                    <span className="text-xs text-muted-foreground">· {p.experience}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{p.titre}</h3>
                  <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3.5 h-3.5" /> {p.lieu}
                  </p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">{p.description}</p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">Compétences attendues</h4>
                  <ul className="space-y-1.5 mb-5">
                    {p.competences.map((c, j) => (
                      <li key={j} className="text-sm text-foreground/85 flex gap-2">
                        <span className="text-brand-green">✓</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, poste: p.titre })}
                    className="inline-flex items-center gap-1.5 text-sm text-brand-blue font-semibold hover:underline"
                  >
                    Postuler à ce poste <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Ce qui vous attend chez ECO CVC</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Heart, title: "Esprit d'équipe", body: "Une petite structure familiale où chacun compte. Pas de hiérarchie pesante, communication directe." },
                { icon: GraduationCap, title: "Formation continue", body: "Habilitations payées (F-Gaz, RGE QualiPAC), formations constructeurs (Daikin, Mitsubishi, Atlantic)." },
                { icon: Wrench, title: "Outillage pro", body: "Matériel de qualité (manomètres pro, station de récupération, outils Daikin DTA, Mitsubishi MELCloud)." },
                { icon: Shield, title: "Stabilité", body: "Carnet de commandes plein, croissance régulière. Mutuelle, prime de panier, paniers repas." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-border">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20" id="postuler">
          <div className="container mx-auto max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Envoyer votre candidature</h2>
            {sent ? (
              <div className="bg-brand-green/10 rounded-2xl border border-brand-green/20 p-8 text-center">
                <h3 className="font-display text-xl font-bold mb-2">Candidature reçue 👍</h3>
                <p className="text-muted-foreground">Nous revenons vers vous sous 5 jours ouvrés. Merci de votre intérêt pour ECO CVC.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Nom et prénom"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                </div>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Téléphone"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                <select value={form.poste} onChange={(e) => setForm({ ...form, poste: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15">
                  <option value="">Candidature spontanée</option>
                  {POSTES.map((p) => <option key={p.titre} value={p.titre}>{p.titre}</option>)}
                </select>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Présentez-vous en quelques lignes (parcours, motivations, disponibilité)"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                <p className="text-xs text-muted-foreground">CV à envoyer ensuite à <a href="mailto:ecocvc69@gmail.com" className="text-brand-blue underline">ecocvc69@gmail.com</a> avec votre nom en référence.</p>
                <button type="submit" disabled={loading}
                  className="w-full py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 disabled:opacity-50 inline-flex items-center justify-center gap-2">
                  {loading ? "Envoi…" : <>Envoyer ma candidature <Send className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Recrutement;
