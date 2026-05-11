import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, AlertTriangle, AlertCircle, CheckCircle2, ShieldCheck, Phone, Send, Mail, Sparkles, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

type Verdict = "correct" | "moyen" | "louche" | null;

const AuditDevis = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/audit-devis-pac`;
  const { toast } = useToast();

  const [surface, setSurface] = useState(110);
  const [puissance, setPuissance] = useState(11);
  const [marque, setMarque] = useState<"premium" | "milieu" | "entree">("milieu");
  const [typePac, setTypePac] = useState<"air-eau" | "air-air" | "geothermique">("air-eau");
  const [prix, setPrix] = useState(15000);
  const [rge, setRge] = useState<"oui" | "non" | "incertain">("oui");
  const [demarche, setDemarche] = useState<"visite" | "telephone" | "domicile">("visite");
  const [aidesIncluses, setAidesIncluses] = useState<"oui" | "non">("oui");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const audit = useMemo(() => {
    const issues: { type: "rouge" | "orange" | "vert"; label: string; detail: string }[] = [];
    let score = 100;

    // 1. Cohérence puissance / surface
    const wM2 = (puissance * 1000) / surface;
    if (wM2 < 60) {
      issues.push({ type: "rouge", label: "Puissance trop faible", detail: `${wM2.toFixed(0)} W/m² — risque sous-dimensionnement, factures 2x supérieures aux promesses.` });
      score -= 25;
    } else if (wM2 > 150) {
      issues.push({ type: "orange", label: "Puissance probablement trop élevée", detail: `${wM2.toFixed(0)} W/m² — sur-dimensionnement, courts cycles, usure prématurée.` });
      score -= 10;
    } else {
      issues.push({ type: "vert", label: "Puissance cohérente", detail: `${wM2.toFixed(0)} W/m² — dans la fourchette normale (60-130 selon isolation).` });
    }

    // 2. Cohérence prix / type / marque
    let prixAttenduMin = 0;
    let prixAttenduMax = 0;
    if (typePac === "air-eau") {
      const baseMin = marque === "premium" ? 13000 : marque === "milieu" ? 11000 : 9000;
      const baseMax = marque === "premium" ? 17500 : marque === "milieu" ? 14500 : 12000;
      prixAttenduMin = baseMin * (puissance / 8);
      prixAttenduMax = baseMax * (puissance / 8);
    } else if (typePac === "geothermique") {
      prixAttenduMin = 17000 + puissance * 500;
      prixAttenduMax = 28000 + puissance * 800;
    } else {
      prixAttenduMin = 3500 + Math.max(0, puissance - 5) * 600;
      prixAttenduMax = 7500 + Math.max(0, puissance - 5) * 800;
    }

    if (prix > prixAttenduMax * 1.2) {
      issues.push({ type: "rouge", label: "Prix nettement supérieur au marché", detail: `Devis ${prix} € vs marché ${Math.round(prixAttenduMin)} - ${Math.round(prixAttenduMax)} €. Au moins +20% par rapport au haut de fourchette.` });
      score -= 25;
    } else if (prix > prixAttenduMax) {
      issues.push({ type: "orange", label: "Prix légèrement élevé", detail: `Devis ${prix} € vs haut de marché ${Math.round(prixAttenduMax)} €. À justifier (services inclus, garanties).` });
      score -= 8;
    } else if (prix < prixAttenduMin * 0.85) {
      issues.push({ type: "rouge", label: "Prix anormalement bas", detail: `Devis ${prix} € vs bas marché ${Math.round(prixAttenduMin)} €. Risque matériel low-cost ou pose bâclée.` });
      score -= 20;
    } else {
      issues.push({ type: "vert", label: "Prix dans le marché", detail: `Devis ${prix} € cohérent avec la fourchette ${Math.round(prixAttenduMin)} - ${Math.round(prixAttenduMax)} €.` });
    }

    // 3. RGE
    if (rge === "non") {
      issues.push({ type: "rouge", label: "Artisan non RGE", detail: "Sans RGE QualiPAC, vous ne toucherez AUCUNE aide (MaPrimeRénov', CEE, éco-PTZ). Refusez ce devis." });
      score -= 30;
    } else if (rge === "incertain") {
      issues.push({ type: "orange", label: "RGE non vérifié", detail: "Vérifiez le numéro RGE sur france-renov.gouv.fr AVANT signature. Numéro non vérifiable = signal d'alerte." });
      score -= 12;
    } else {
      issues.push({ type: "vert", label: "Artisan RGE", detail: "Bonne base. Vérifiez le numéro sur france-renov.gouv.fr pour confirmer." });
    }

    // 4. Démarche commerciale
    if (demarche === "telephone") {
      issues.push({ type: "rouge", label: "Démarchage téléphonique", detail: "Démarchage tél interdit pour rénovation énergétique depuis 2020. Toute société qui le pratique est dans l'illégalité." });
      score -= 20;
    } else if (demarche === "domicile") {
      issues.push({ type: "orange", label: "Démarche à domicile", detail: "Légal mais risqué. Gardez 14 jours de rétractation, ne signez RIEN sur place sans étude technique sérieuse préalable." });
      score -= 10;
    } else {
      issues.push({ type: "vert", label: "Visite technique sur RDV", detail: "C'est la démarche normale. Vous gardez la main." });
    }

    // 5. Aides incluses
    if (aidesIncluses === "non") {
      issues.push({ type: "orange", label: "Aides non détaillées dans le devis", detail: "Un bon devis détaille MaPrimeRénov', Coup de pouce CEE, TVA 5,5%. Demandez la simulation écrite avant signature." });
      score -= 8;
    } else {
      issues.push({ type: "vert", label: "Simulation aides incluse", detail: "Bon point — l'artisan a fait son travail." });
    }

    // Verdict global
    let verdict: Verdict;
    if (score >= 80) verdict = "correct";
    else if (score >= 55) verdict = "moyen";
    else verdict = "louche";

    return { score: Math.max(0, score), issues, verdict, prixAttenduMin: Math.round(prixAttenduMin), prixAttenduMax: Math.round(prixAttenduMax) };
  }, [surface, puissance, marque, typePac, prix, rge, demarche, aidesIncluses]);

  useSeo({
    title: "Mon devis PAC est-il correct ? Audit gratuit en 30 sec | ECO CVC",
    description:
      "Vérifiez si votre devis pompe à chaleur est correct ou louche en 30 secondes. Comparaison prix marché 2026, RGE, démarche commerciale, aides. Gratuit, sans inscription.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Audit de devis PAC ECO CVC",
      url: canonical,
      applicationCategory: "FinanceApplication",
      offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
    },
  });

  const sendByEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const r = await submitForm({
        subject: `[eco cvc · audit] Lead audit devis — ${zip || "?"} (${audit.verdict})`,
        fields: {
          source: "audit_devis",
          email,
          telephone: phone,
          code_postal: zip,
          surface_m2: surface,
          puissance_kw: puissance,
          marque,
          type_pac: typePac,
          prix_devis_eur: prix,
          rge,
          demarche,
          aides_incluses: aidesIncluses,
          score_audit: audit.score,
          verdict: audit.verdict,
          prix_attendu_min: audit.prixAttenduMin,
          prix_attendu_max: audit.prixAttenduMax,
        },
      });
      if (r.ok) {
        setSent(true);
        toast({ title: "Audit envoyé", description: "Détail dans votre boîte mail. Un expert vous rappelle si vous avez laissé votre tel." });
      }
    } catch {
      toast({ title: "Problème d'envoi", description: "Appelez 06 29 63 40 45.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const verdictStyle = {
    correct: { bg: "bg-brand-green/10 border-brand-green/30", text: "text-brand-green", icon: CheckCircle2, label: "Devis correct ✓" },
    moyen: { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", icon: AlertCircle, label: "Devis acceptable mais à vérifier" },
    louche: { bg: "bg-red-50 border-red-200", text: "text-red-700", icon: AlertTriangle, label: "Devis suspect — attention !" },
  };
  const v = audit.verdict ? verdictStyle[audit.verdict] : null;
  const Icon = v?.icon || CheckCircle2;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Audit de devis</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Anti-arnaque · Gratuit
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Mon devis PAC <span className="text-gradient-brand">est-il correct ?</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avant de signer, vérifiez en 30 sec si votre devis est cohérent avec le marché 2026 ou si c'est une arnaque. Test gratuit, sans inscription.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
              {/* Inputs */}
              <div className="bg-white rounded-3xl border border-border p-7 md:p-8">
                <h2 className="font-display text-xl font-bold mb-6">Détails du devis reçu</h2>

                <Field label={`Surface chauffée : ${surface} m²`}>
                  <input type="range" min={30} max={300} step={5} value={surface} onChange={(e) => setSurface(Number(e.target.value))} className="w-full accent-brand-blue" />
                </Field>

                <Field label={`Puissance PAC dans le devis : ${puissance} kW`}>
                  <input type="range" min={4} max={25} step={1} value={puissance} onChange={(e) => setPuissance(Number(e.target.value))} className="w-full accent-brand-blue" />
                </Field>

                <Field label="Type de PAC">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle active={typePac === "air-eau"} onClick={() => setTypePac("air-eau")}>Air-eau</Toggle>
                    <Toggle active={typePac === "air-air"} onClick={() => setTypePac("air-air")}>Air-air</Toggle>
                    <Toggle active={typePac === "geothermique"} onClick={() => setTypePac("geothermique")}>Géothermique</Toggle>
                  </div>
                </Field>

                <Field label="Marque proposée">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle active={marque === "premium"} onClick={() => setMarque("premium")}>Premium (Daikin/Mitsubishi)</Toggle>
                    <Toggle active={marque === "milieu"} onClick={() => setMarque("milieu")}>Milieu (Atlantic)</Toggle>
                    <Toggle active={marque === "entree"} onClick={() => setMarque("entree")}>Entrée (AUX, etc.)</Toggle>
                  </div>
                </Field>

                <Field label="Prix total du devis (TTC, après aides supposées)">
                  <input type="number" min={1000} value={prix} onChange={(e) => setPrix(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none" />
                </Field>

                <Field label="L'artisan est-il certifié RGE QualiPAC ?">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle active={rge === "oui"} onClick={() => setRge("oui")}>Oui (vérifié)</Toggle>
                    <Toggle active={rge === "incertain"} onClick={() => setRge("incertain")}>Pas sûr</Toggle>
                    <Toggle active={rge === "non"} onClick={() => setRge("non")}>Non</Toggle>
                  </div>
                </Field>

                <Field label="Comment êtes-vous entré en contact ?">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle active={demarche === "visite"} onClick={() => setDemarche("visite")}>RDV chez moi</Toggle>
                    <Toggle active={demarche === "domicile"} onClick={() => setDemarche("domicile")}>Démarchage porte</Toggle>
                    <Toggle active={demarche === "telephone"} onClick={() => setDemarche("telephone")}>Appel commercial</Toggle>
                  </div>
                </Field>

                <Field label="Le devis détaille-t-il les aides (MaPrimeRénov', CEE) ?">
                  <div className="grid grid-cols-2 gap-2">
                    <Toggle active={aidesIncluses === "oui"} onClick={() => setAidesIncluses("oui")}>Oui, simulation</Toggle>
                    <Toggle active={aidesIncluses === "non"} onClick={() => setAidesIncluses("non")}>Non / vague</Toggle>
                  </div>
                </Field>
              </div>

              {/* Verdict */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <motion.div
                  key={audit.verdict}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className={`rounded-3xl border-2 p-7 md:p-8 ${v?.bg}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-full ${v?.text.replace("text-", "bg-")} text-white flex items-center justify-center`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider opacity-75">Verdict</div>
                      <h2 className={`font-display text-2xl md:text-3xl font-bold ${v?.text}`}>{v?.label}</h2>
                    </div>
                  </div>

                  <div className="bg-white/60 rounded-2xl p-4 mb-5">
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-75">Score audit</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold">{audit.score}</span>
                      <span className="text-muted-foreground">/100</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Prix marché attendu : {audit.prixAttenduMin.toLocaleString("fr-FR")} - {audit.prixAttenduMax.toLocaleString("fr-FR")} €
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    {audit.issues.map((i, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl text-xs flex gap-2 items-start ${
                          i.type === "rouge"
                            ? "bg-red-100 text-red-900"
                            : i.type === "orange"
                            ? "bg-amber-100 text-amber-900"
                            : "bg-green-100 text-green-900"
                        }`}
                      >
                        {i.type === "rouge" && <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />}
                        {i.type === "orange" && <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />}
                        {i.type === "vert" && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />}
                        <div>
                          <div className="font-bold">{i.label}</div>
                          <div className="opacity-90">{i.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!sent ? (
                    <form onSubmit={sendByEmail} className="space-y-2 pt-4 border-t border-border/30">
                      <p className="text-xs font-semibold mb-2">Recevoir l'audit complet par email + 2nd avis ECO CVC :</p>
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2.5 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none text-sm" />
                      <div className="grid grid-cols-2 gap-2">
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Tél (rappel)" className="w-full px-3 py-2.5 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none text-sm" />
                        <input value={zip} onChange={(e) => setZip(e.target.value)} placeholder="CP" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} className="w-full px-3 py-2.5 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none text-sm" />
                      </div>
                      <button type="submit" disabled={loading} className="w-full py-2.5 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 disabled:opacity-50 text-sm inline-flex items-center justify-center gap-2">
                        {loading ? "Envoi…" : <>Recevoir l'audit + 2nd avis <Send className="w-3.5 h-3.5" /></>}
                      </button>
                    </form>
                  ) : (
                    <div className="bg-brand-green/10 rounded-xl p-3 text-center text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mx-auto mb-1" />
                      <strong>Audit envoyé.</strong> Un expert vous rappelle si demandé.
                    </div>
                  )}
                </motion.div>

                <p className="text-xs text-muted-foreground mt-3 leading-relaxed flex gap-1.5">
                  <Info className="w-3 h-3 mt-0.5 shrink-0" />
                  Estimation indicative basée sur les fourchettes marché 2026. Un audit complet inclut analyse fiches techniques, vérification SCOP, garanties pièces, et conditions générales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead magnet — audit honnête : conversion énorme */}
        <section className="container mx-auto max-w-4xl px-4 py-2">
          <LeadMagnetCard
            source="audit-devis-pac"
            variant="banner"
            title="Recevez votre audit détaillé par email"
            subtitle="On vous renvoie sous 24h une analyse écrite du devis : ce qui est honnête, ce qui est surévalué, ce qui manque."
            bullets={[
              "Analyse écrite ligne par ligne",
              "Comparatif marché 2026",
              "Estimation reste à charge après aides",
              "Liste des questions à poser à l'installateur",
            ]}
          />
        </section>
        <section className="container mx-auto max-w-4xl px-4 pb-12">
          <ArticleToolsCTA preset="comparatif" variant="inline" title="Continuez avec ces outils" />
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-5">
    <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">{label}</label>
    {children}
  </div>
);

const Toggle = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button type="button" onClick={onClick} className={`px-3 py-2 rounded-xl border text-xs font-medium transition-colors text-center leading-tight ${active ? "border-brand-blue bg-brand-blue/10 text-brand-blue" : "border-border bg-white hover:border-brand-blue/30"}`}>
    {children}
  </button>
);

export default AuditDevis;
