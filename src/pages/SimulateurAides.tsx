import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Home,
  Building2,
  Ruler,
  Shield,
  Flame,
  Snowflake,
  Wind,
  Mountain,
  Wallet,
  TrendingUp,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
  Info,
  ArrowRight,
  Send,
  Clock,
  FileDown,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import {
  simuler,
  formatEuro,
  PROFILS_LABELS,
  type SimulationInput,
  type Logement,
  type Isolation,
  type EnergieActuelle,
  type TypePac,
  type Profil,
} from "@/lib/aides-calculator";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

const SimulateurAides = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/simulateur-aides`;
  const { toast } = useToast();

  const [input, setInput] = useState<SimulationInput>({
    logement: "maison",
    surface: 100,
    isolation: "moyenne",
    energieActuelle: "gaz",
    typePac: "air-eau",
    profil: "violet",
    factureAnnuelleActuelle: undefined,
  });

  const result = useMemo(() => simuler(input), [input]);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useSeo({
    title: "Simulateur d'aides MaPrimeRénov' & CEE — Calcul en 30 sec | ECO CVC",
    description:
      "Simulateur d'aides 2026 pour pompe à chaleur : calculez en 30 secondes votre MaPrimeRénov', Coup de pouce CEE, TVA 5,5% et reste à charge. Gratuit, sans inscription. ECO CVC, RGE QualiPAC en Isère et Rhône-Alpes.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Simulateur d'aides PAC ECO CVC",
      url: canonical,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "Simulateur gratuit d'aides MaPrimeRénov', Coup de pouce CEE, TVA 5,5% pour pompe à chaleur en 2026.",
      offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
      provider: {
        "@type": "HVACBusiness",
        name: "ECO CVC",
        url: baseUrl,
      },
    },
  });

  const sendByEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const r = await submitForm({
        subject: `[eco cvc · simulateur] Lead aides PAC — ${zip || "?"}`,
        fields: {
          source: "simulateur_aides",
          email,
          telephone: phone,
          code_postal: zip,
          logement: input.logement,
          surface_m2: input.surface,
          isolation: input.isolation,
          energie_actuelle: input.energieActuelle,
          type_pac_souhaite: input.typePac,
          profil_revenus: input.profil,
          puissance_recommandee_kw: result.puissanceKw,
          prix_moyen_eur: result.prixMoyen.moyen,
          maprimerenov_eur: result.aides.maPrimeRenov,
          coup_de_pouce_eur: result.aides.coupDePouce,
          cee_classique_eur: result.aides.ceeClassique,
          bonus_sortie_fioul_eur: result.aides.bonusSortieFioul,
          tva_reduite_eur: result.aides.tvaReduite,
          total_aides_eur: result.aides.total,
          reste_a_charge_moyen_eur: result.resteACharge.moyen,
          economie_annuelle_eur: result.economieAnnuelle,
          amortissement_annees: result.amortissementAnnees,
        },
      });
      if (r.ok) {
        setSent(true);
        toast({
          title: "Estimation envoyée",
          description: "Vous recevez le détail par email + un de nos experts vous rappelle sous 24h.",
        });
      }
    } catch {
      toast({ title: "Problème d'envoi", description: "Appelez-nous au 06 29 63 40 45.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 print:hidden">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Simulateur d'aides</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Gratuit, sans inscription
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Simulez vos aides <span className="text-gradient-brand">pompe à chaleur 2026</span> en 30 secondes
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MaPrimeRénov' + Coup de pouce CEE + TVA 5,5% + bonus sortie fioul. Calcul instantané du reste à charge et des économies annuelles, mis à jour avec les barèmes 2026.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculateur */}
        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
              {/* INPUTS */}
              <div className="bg-white rounded-3xl border border-border p-7 md:p-8 print:hidden">
                <h2 className="font-display text-xl font-bold mb-6">Votre situation</h2>

                {/* Type de logement */}
                <Field label="Type de logement">
                  <div className="grid grid-cols-2 gap-2">
                    <Toggle active={input.logement === "maison"} onClick={() => setInput({ ...input, logement: "maison" })}>
                      <Home className="w-4 h-4" /> Maison
                    </Toggle>
                    <Toggle active={input.logement === "appartement"} onClick={() => setInput({ ...input, logement: "appartement" })}>
                      <Building2 className="w-4 h-4" /> Appartement
                    </Toggle>
                  </div>
                </Field>

                {/* Surface */}
                <Field label={`Surface chauffée : ${input.surface} m²`}>
                  <div className="flex items-center gap-3">
                    <Ruler className="w-4 h-4 text-muted-foreground" />
                    <input
                      type="range"
                      min={20}
                      max={300}
                      step={5}
                      value={input.surface}
                      onChange={(e) => setInput({ ...input, surface: Number(e.target.value) })}
                      className="flex-1 accent-brand-blue"
                    />
                    <span className="text-xs text-muted-foreground w-14 text-right">{input.surface} m²</span>
                  </div>
                </Field>

                {/* Isolation */}
                <Field label="Niveau d'isolation">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle active={input.isolation === "bonne"} onClick={() => setInput({ ...input, isolation: "bonne" })}>
                      Bonne
                    </Toggle>
                    <Toggle active={input.isolation === "moyenne"} onClick={() => setInput({ ...input, isolation: "moyenne" })}>
                      Moyenne
                    </Toggle>
                    <Toggle active={input.isolation === "faible"} onClick={() => setInput({ ...input, isolation: "faible" })}>
                      Faible
                    </Toggle>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-2 leading-snug flex gap-1.5">
                    <Info className="w-3 h-3 mt-0.5 shrink-0" />
                    Bonne = RT2012+ ou rénovation récente. Moyenne = double vitrage + combles isolés. Faible = avant 1990 sans rénovation.
                  </p>
                </Field>

                {/* Énergie actuelle */}
                <Field label="Chauffage actuel">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <Toggle active={input.energieActuelle === "fioul"} onClick={() => setInput({ ...input, energieActuelle: "fioul" })}>
                      <Flame className="w-3.5 h-3.5" /> Fioul
                    </Toggle>
                    <Toggle active={input.energieActuelle === "gaz"} onClick={() => setInput({ ...input, energieActuelle: "gaz" })}>
                      Gaz
                    </Toggle>
                    <Toggle active={input.energieActuelle === "electrique"} onClick={() => setInput({ ...input, energieActuelle: "electrique" })}>
                      Électrique
                    </Toggle>
                    <Toggle active={input.energieActuelle === "bois"} onClick={() => setInput({ ...input, energieActuelle: "bois" })}>
                      Bois
                    </Toggle>
                    <Toggle active={input.energieActuelle === "autre"} onClick={() => setInput({ ...input, energieActuelle: "autre" })}>
                      Autre
                    </Toggle>
                  </div>
                </Field>

                {/* Facture annuelle (optionnel) */}
                <Field label="Votre facture chauffage annuelle (optionnel — pour un calcul plus précis)">
                  <div className="relative">
                    <input
                      type="number"
                      min={0}
                      placeholder="Ex: 2 400"
                      value={input.factureAnnuelleActuelle || ""}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          factureAnnuelleActuelle: e.target.value ? Number(e.target.value) : undefined,
                        })
                      }
                      className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">€/an</span>
                  </div>
                </Field>

                {/* Type de PAC visé */}
                <Field label="Type de pompe à chaleur envisagée">
                  <div className="grid grid-cols-2 gap-2">
                    <Toggle active={input.typePac === "air-eau"} onClick={() => setInput({ ...input, typePac: "air-eau" })}>
                      <Snowflake className="w-3.5 h-3.5" /> Air-eau
                    </Toggle>
                    <Toggle active={input.typePac === "air-air"} onClick={() => setInput({ ...input, typePac: "air-air" })}>
                      <Wind className="w-3.5 h-3.5" /> Air-air
                    </Toggle>
                    <Toggle active={input.typePac === "geothermique"} onClick={() => setInput({ ...input, typePac: "geothermique" })}>
                      <Mountain className="w-3.5 h-3.5" /> Géothermique
                    </Toggle>
                    <Toggle active={input.typePac === "hybride"} onClick={() => setInput({ ...input, typePac: "hybride" })}>
                      <Flame className="w-3.5 h-3.5" /> Hybride
                    </Toggle>
                  </div>
                </Field>

                {/* Profil revenus */}
                <Field label="Votre profil de revenus (MaPrimeRénov')">
                  <div className="space-y-2">
                    {(Object.keys(PROFILS_LABELS) as Profil[]).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setInput({ ...input, profil: p })}
                        className={`w-full p-3 rounded-xl border text-left transition-colors ${
                          input.profil === p
                            ? "border-brand-blue bg-brand-blue/5"
                            : "border-border hover:border-brand-blue/30 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: PROFILS_LABELS[p].color }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold">{PROFILS_LABELS[p].name}</div>
                            <div className="text-[11px] text-muted-foreground">{PROFILS_LABELS[p].range}</div>
                          </div>
                          {input.profil === p && <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-2 leading-snug flex gap-1.5">
                    <Info className="w-3 h-3 mt-0.5 shrink-0" />
                    Plafonds 2026 hors Île-de-France ; barèmes IDF légèrement supérieurs. Le calcul exact dépend de la composition du foyer.
                  </p>
                </Field>
              </div>

              {/* RESULT */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <motion.div
                  key={`${input.surface}-${input.profil}-${input.typePac}-${input.energieActuelle}-${input.isolation}`}
                  initial={{ opacity: 0.6, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-gradient-to-br from-brand-blue/5 via-white to-brand-green/5 rounded-3xl border-2 border-brand-blue/15 shadow-xl p-7 md:p-8"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">Estimation pour votre projet</div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
                    Vous toucheriez{" "}
                    <span className="text-gradient-brand">{formatEuro(result.aides.total)}</span>{" "}
                    d'aides
                  </h2>

                  <div className="space-y-3 mb-6">
                    <ResultRow label="Puissance PAC recommandée" value={`${result.puissanceKw} kW`} />
                    <ResultRow
                      label="Prix moyen posé estimé"
                      value={`${formatEuro(result.prixMoyen.min)} – ${formatEuro(result.prixMoyen.max)}`}
                      sub={`moyenne : ${formatEuro(result.prixMoyen.moyen)}`}
                    />
                  </div>

                  <div className="rounded-2xl bg-white p-5 mb-5 border border-border">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">Détail des aides</div>
                    <ul className="space-y-2 text-sm">
                      <AideRow
                        label="MaPrimeRénov'"
                        value={result.aides.maPrimeRenov}
                        disabled={!result.eligibleMaPrimeRenov}
                      />
                      {result.aides.bonusSortieFioul > 0 && (
                        <AideRow label="Bonus sortie fioul" value={result.aides.bonusSortieFioul} highlight />
                      )}
                      <AideRow label="Coup de pouce CEE" value={result.aides.coupDePouce} />
                      {result.aides.ceeClassique > 0 && (
                        <AideRow label="Prime CEE classique" value={result.aides.ceeClassique} />
                      )}
                      <AideRow label="TVA réduite à 5,5%" value={result.aides.tvaReduite} />
                      <li className="flex justify-between pt-2 border-t border-border">
                        <span className="font-bold">Total des aides</span>
                        <span className="font-bold text-brand-green text-lg">{formatEuro(result.aides.total)}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    <StatCard
                      icon={Wallet}
                      label="Reste à charge moyen"
                      value={formatEuro(result.resteACharge.moyen)}
                      sub={`${formatEuro(result.resteACharge.min)} à ${formatEuro(result.resteACharge.max)}`}
                    />
                    <StatCard
                      icon={TrendingUp}
                      label="Économies annuelles"
                      value={formatEuro(result.economieAnnuelle)}
                      sub={`${formatEuro(result.economieDixAns)} sur 10 ans`}
                    />
                  </div>

                  <div className="rounded-2xl bg-brand-blue/5 p-4 mb-5 border border-brand-blue/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">Amortissement</div>
                        <div className="font-display text-2xl font-bold">
                          {result.amortissementAnnees < 30 ? `${result.amortissementAnnees} ans` : "—"}
                        </div>
                      </div>
                      <Clock className="w-8 h-8 text-brand-blue" />
                    </div>
                  </div>

                  {result.notes.length > 0 && (
                    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 mb-5">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <ul className="text-xs text-amber-900 space-y-1.5">
                          {result.notes.map((n, i) => (
                            <li key={i}>{n}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Email capture */}
                  {sent ? (
                    <div className="rounded-2xl bg-brand-green/10 border border-brand-green/20 p-5 text-center">
                      <CheckCircle2 className="w-10 h-10 text-brand-green mx-auto mb-2" />
                      <div className="font-bold mb-1">Estimation envoyée</div>
                      <p className="text-sm text-muted-foreground">
                        Détail dans votre boîte mail. Un expert ECO CVC vous rappelle sous 24h ouvrées.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={sendByEmail} className="space-y-3 print:hidden">
                      <div className="text-sm font-semibold mb-1">Recevoir le détail par email + devis personnalisé</div>
                      <div className="grid sm:grid-cols-3 gap-2">
                        <div className="relative sm:col-span-2">
                          <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Votre email"
                            className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 text-sm"
                          />
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]{5}"
                            maxLength={5}
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            placeholder="CP"
                            className="w-full px-3 py-2.5 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 text-sm"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Téléphone (optionnel — pour rappel)"
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
                      >
                        {loading ? "Envoi…" : <>Recevoir le détail par email <Send className="w-4 h-4" /></>}
                      </button>
                      <button
                        type="button"
                        onClick={handlePrint}
                        className="w-full py-2.5 rounded-xl bg-white border border-border text-foreground/80 hover:border-brand-blue/40 hover:text-brand-blue font-medium transition-colors text-sm inline-flex items-center justify-center gap-2"
                      >
                        <FileDown className="w-3.5 h-3.5" /> Imprimer / sauvegarder en PDF
                      </button>
                      <p className="text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3 h-3 text-brand-green" />
                        Pas de spam — uniquement pour le détail et le devis.
                      </p>
                    </form>
                  )}
                </motion.div>

                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  <Info className="w-3 h-3 inline mr-1" />
                  Calcul indicatif basé sur les barèmes 2026. Le montant exact dépend de votre dossier complet et est confirmé après visite technique gratuite par un artisan RGE QualiPAC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi ce simulateur est fiable */}
        <section className="py-14 md:py-20 bg-slate-50/60 print:hidden">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Pourquoi notre simulateur est fiable</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <InfoCard
                icon={Shield}
                title="Barèmes 2026 à jour"
                body="Mis à jour avec les dernières grilles MaPrimeRénov', Coup de pouce CEE et TVA 5,5%."
              />
              <InfoCard
                icon={CheckCircle2}
                title="Artisan RGE QualiPAC"
                body="ECO CVC est certifié RGE QualiPAC, condition obligatoire pour vos aides."
              />
              <InfoCard
                icon={ArrowRight}
                title="Confirmé en visite"
                body="Le montant exact est validé après étude thermique gratuite à votre domicile."
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { background: white; }
        }
      `}</style>
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
  <button
    type="button"
    onClick={onClick}
    className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-colors inline-flex items-center justify-center gap-1.5 ${
      active
        ? "border-brand-blue bg-brand-blue/10 text-brand-blue"
        : "border-border bg-white hover:border-brand-blue/30 text-foreground/70"
    }`}
  >
    {children}
  </button>
);

const ResultRow = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="flex justify-between items-baseline">
    <span className="text-sm text-muted-foreground">{label}</span>
    <div className="text-right">
      <div className="font-semibold">{value}</div>
      {sub && <div className="text-[11px] text-muted-foreground">{sub}</div>}
    </div>
  </div>
);

const AideRow = ({
  label,
  value,
  disabled,
  highlight,
}: {
  label: string;
  value: number;
  disabled?: boolean;
  highlight?: boolean;
}) => (
  <li className={`flex justify-between ${disabled ? "opacity-40" : ""}`}>
    <span className={`${highlight ? "text-brand-blue font-semibold" : ""}`}>{label}</span>
    <span className={`font-medium ${highlight ? "text-brand-blue" : ""}`}>
      {value > 0 ? formatEuro(value) : disabled ? "non éligible" : formatEuro(0)}
    </span>
  </li>
);

const StatCard = ({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
  sub?: string;
}) => (
  <div className="bg-white rounded-2xl border border-border p-4">
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      <Icon className="w-4 h-4 text-brand-blue" />
    </div>
    <div className="font-display text-xl font-bold">{value}</div>
    {sub && <div className="text-[11px] text-muted-foreground mt-0.5">{sub}</div>}
  </div>
);

const InfoCard = ({ icon: Icon, title, body }: { icon: typeof Shield; title: string; body: string }) => (
  <div className="p-6 rounded-2xl bg-white border border-border">
    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
  </div>
);

export default SimulateurAides;
