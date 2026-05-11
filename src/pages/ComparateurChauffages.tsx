import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Trophy, Leaf, Wallet, Sparkles, ArrowRight, Phone, Info, Mail, CheckCircle2, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import ArticleToolsCTA from "@/components/ArticleToolsCTA";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import { compareAll, formatEuro, type CompareInput } from "@/lib/chauffage-comparator";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

const ComparateurChauffages = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/comparateur-chauffages`;
  const { toast } = useToast();

  const [input, setInput] = useState<CompareInput>({
    surface: 100,
    isolation: "moyenne",
    ville: "plaine",
    occupants: 4,
  });

  const results = useMemo(() => compareAll(input), [input]);
  const winner = results[0];

  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useSeo({
    title: "Comparateur de chauffages 2026 — PAC vs gaz vs fioul vs granulés | ECO CVC",
    description:
      "Comparateur de chauffages 2026 : pompe à chaleur, gaz, fioul, électrique, granulés. Calcul instantané du coût sur 15 ans, émissions CO2, aides MaPrimeRénov'. Gratuit, sans inscription.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Comparateur de chauffages ECO CVC",
      url: canonical,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: "Comparateur interactif de toutes les énergies de chauffage : PAC, gaz, fioul, électrique, granulés, géothermie.",
      offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
    },
  });

  const sendByEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const r = await submitForm({
        subject: `[eco cvc · comparateur] Lead chauffage — ${zip || "?"}`,
        fields: {
          source: "comparateur_chauffages",
          email,
          code_postal: zip,
          surface_m2: input.surface,
          isolation: input.isolation,
          ville: input.ville,
          occupants: input.occupants,
          gagnant: winner.detail.name,
          tco_15_ans_gagnant: winner.coutTotal15Ans,
          ecart_max_tco: results[results.length - 1].coutTotal15Ans - winner.coutTotal15Ans,
        },
      });
      if (r.ok) {
        setSent(true);
        toast({ title: "Étude envoyée", description: "Détail dans votre boîte mail." });
      }
    } catch {
      toast({ title: "Problème d'envoi", description: "Appelez 06 29 63 40 45.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Comparateur de chauffages</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Gratuit · Calcul réel sur 15 ans
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                PAC vs gaz vs fioul vs granulés : <span className="text-gradient-brand">quel chauffage en 2026 ?</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comparateur interactif des 7 systèmes de chauffage. Coût annuel, émissions CO2, aides 2026, coût total sur 15 ans. Mis à jour avec les barèmes officiels.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Inputs */}
        <section className="pb-10">
          <div className="container mx-auto">
            <div className="bg-white rounded-3xl border border-border p-6 md:p-8 max-w-4xl">
              <h2 className="font-display text-xl font-bold mb-6">Votre logement</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <Field label={`Surface : ${input.surface} m²`}>
                  <input type="range" min={30} max={300} step={10} value={input.surface}
                    onChange={(e) => setInput({ ...input, surface: Number(e.target.value) })}
                    className="w-full accent-brand-blue" />
                </Field>
                <Field label="Isolation">
                  <select value={input.isolation}
                    onChange={(e) => setInput({ ...input, isolation: e.target.value as CompareInput["isolation"] })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none">
                    <option value="bonne">Bonne (RT2012+)</option>
                    <option value="moyenne">Moyenne (rénovation partielle)</option>
                    <option value="faible">Faible (avant 1990)</option>
                  </select>
                </Field>
                <Field label="Localisation">
                  <select value={input.ville}
                    onChange={(e) => setInput({ ...input, ville: e.target.value as CompareInput["ville"] })}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none">
                    <option value="plaine">Plaine (Lyon, Bourgoin, Vienne)</option>
                    <option value="moyenne-altitude">Moyenne altitude (Voiron, Chambéry)</option>
                    <option value="haute-altitude">Haute altitude (Annecy, hauteurs)</option>
                  </select>
                </Field>
                <Field label={`Occupants : ${input.occupants}`}>
                  <input type="range" min={1} max={7} step={1} value={input.occupants}
                    onChange={(e) => setInput({ ...input, occupants: Number(e.target.value) })}
                    className="w-full accent-brand-blue" />
                </Field>
              </div>
            </div>
          </div>
        </section>

        {/* Winner card */}
        <section className="pb-10">
          <div className="container mx-auto">
            <motion.div
              key={winner.energie}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-brand-green/10 via-white to-brand-blue/10 rounded-3xl border-2 border-brand-green/30 p-7 md:p-10 max-w-4xl"
            >
              <div className="flex items-start gap-5 flex-wrap">
                <div className="text-6xl">{winner.detail.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
                    <Trophy className="w-3.5 h-3.5" /> Recommandation pour votre logement
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">{winner.detail.name}</h2>
                  <p className="text-foreground/80 mb-5">{winner.detail.tagline}</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Stat label="Coût total sur 15 ans" value={formatEuro(winner.coutTotal15Ans)} />
                    <Stat label="Coût annuel" value={formatEuro(winner.coutAnnuelTotal) + "/an"} />
                    <Stat label="CO₂ émis" value={winner.emissionsCO2KgAn + " kg/an"} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Comparatif complet sur 15 ans</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-border overflow-hidden text-sm">
                <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="text-left px-4 py-3">Système</th>
                    <th className="text-right px-4 py-3">Investissement</th>
                    <th className="text-right px-4 py-3">Aides max</th>
                    <th className="text-right px-4 py-3">Reste à charge</th>
                    <th className="text-right px-4 py-3">€/an</th>
                    <th className="text-right px-4 py-3">CO₂/an</th>
                    <th className="text-right px-4 py-3">TCO 15 ans</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={r.energie} className={`border-t border-border ${i === 0 ? "bg-brand-green/5" : ""}`}>
                      <td className="px-4 py-3 font-semibold flex items-center gap-2">
                        <span className="text-xl">{r.detail.emoji}</span>
                        <span>{r.detail.name}</span>
                        {i === 0 && <span className="text-[10px] font-bold uppercase text-brand-green bg-brand-green/15 px-2 py-0.5 rounded-full">Top</span>}
                      </td>
                      <td className="text-right px-4 py-3">{formatEuro(r.investissementMoyen)}</td>
                      <td className="text-right px-4 py-3 text-brand-green font-medium">{r.detail.aidesMax > 0 ? `-${formatEuro(r.detail.aidesMax)}` : "—"}</td>
                      <td className="text-right px-4 py-3 font-semibold">{formatEuro(r.resteACharge)}</td>
                      <td className="text-right px-4 py-3">{formatEuro(r.coutAnnuelTotal)}</td>
                      <td className="text-right px-4 py-3 text-muted-foreground">{r.emissionsCO2KgAn} kg</td>
                      <td className="text-right px-4 py-3 font-bold">{formatEuro(r.coutTotal15Ans)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1.5">
              <Info className="w-3 h-3" />
              TCO = investissement après aides + (coûts annuels × 15 ans). Aides max = profil Bleu (revenus modestes).
            </p>
          </div>
        </section>

        {/* Top 3 detailed cards */}
        <section className="pb-14 md:pb-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Top 3 — détail des avantages / limites</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {results.slice(0, 3).map((r, i) => (
                <div key={r.energie} className={`p-6 rounded-2xl bg-white border ${i === 0 ? "border-brand-green/30 shadow-lg" : "border-border"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">{r.detail.emoji}</div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Position #{i + 1}</div>
                      <h3 className="font-display font-bold text-lg leading-tight">{r.detail.name}</h3>
                    </div>
                  </div>
                  <div className="text-2xl font-display font-bold text-brand-blue mb-1">{formatEuro(r.coutTotal15Ans)}</div>
                  <p className="text-xs text-muted-foreground mb-4">sur 15 ans</p>

                  <div className="mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-green mb-2">Avantages</div>
                    <ul className="space-y-1.5">
                      {r.detail.pour.map((p, j) => (
                        <li key={j} className="text-xs text-foreground/80 flex gap-2">
                          <span className="text-brand-green">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Limites</div>
                    <ul className="space-y-1.5">
                      {r.detail.contre.map((c, j) => (
                        <li key={j} className="text-xs text-foreground/80 flex gap-2">
                          <span className="text-amber-600">!</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead capture */}
        <section className="pb-14 md:pb-20">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white rounded-3xl border-2 border-brand-blue/15 p-7 md:p-10 shadow-xl">
              {sent ? (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2">Étude envoyée</h2>
                  <p className="text-muted-foreground">Vous recevez le détail par email + un de nos experts vous rappelle sous 24h.</p>
                </div>
              ) : (
                <form onSubmit={sendByEmail}>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Recevez l'étude détaillée par email</h2>
                  <p className="text-muted-foreground mb-6">
                    + un devis personnalisé pour le système gagnant ({winner.detail.name}) si vous le souhaitez.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="Votre email" className="w-full pl-10 pr-3 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                    </div>
                    <input type="text" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={zip}
                      onChange={(e) => setZip(e.target.value)} placeholder="Code postal"
                      className="w-full px-3 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 disabled:opacity-50 inline-flex items-center justify-center gap-2">
                    {loading ? "Envoi…" : <>Recevoir l'étude <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Lead magnet + outils complémentaires */}
        <section className="container mx-auto max-w-4xl px-4 py-2">
          <LeadMagnetCard
            source="comparateur-chauffages"
            variant="banner"
            title="Guide PAC vs autres chauffages — gratuit"
            subtitle="Comparatif détaillé fioul / gaz / granulés / PAC sur 15 ans, basé sur les coûts réels 2026."
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
  <div>
    <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">{label}</label>
    {children}
  </div>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
    <div className="font-display text-xl font-bold mt-1">{value}</div>
  </div>
);

export default ComparateurChauffages;
