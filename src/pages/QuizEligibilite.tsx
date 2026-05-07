import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, ArrowRight, Send, Mail, Phone, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

type Answer = "oui" | "non" | null;

const QUESTIONS: { q: string; help: string }[] = [
  { q: "Êtes-vous propriétaire (occupant ou bailleur) du logement ?", help: "MaPrimeRénov' n'est pas accessible aux locataires. Le bailleur peut en revanche l'obtenir s'il loue ensuite en résidence principale 6 ans minimum." },
  { q: "Le logement a-t-il plus de 15 ans ?", help: "MaPrimeRénov' s'applique uniquement aux logements de plus de 15 ans, pour les rénovations." },
  { q: "Le logement est-il votre résidence principale (ou louée comme telle) ?", help: "Les résidences secondaires ne sont pas éligibles à MaPrimeRénov'." },
  { q: "Êtes-vous OK pour passer par un artisan certifié RGE ?", help: "Obligatoire pour bénéficier de toutes les aides énergétiques (MaPrimeRénov', CEE, éco-PTZ). ECO CVC est RGE QualiPAC." },
  { q: "Vos revenus sont-ils inférieurs ou proches du plafond Violet (~40 000 €/an pour 1 personne hors IDF) ?", help: "Les ménages au-dessus du plafond Rose (revenus aisés) ne sont plus éligibles à MaPrimeRénov' simple en 2026, sauf rénovation globale." },
];

const QuizEligibilite = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/eligibilite-maprimerenov`;
  const { toast } = useToast();

  const [answers, setAnswers] = useState<Answer[]>([null, null, null, null, null]);
  const [step, setStep] = useState(0); // 0..4 = questions, 5 = résultat
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useSeo({
    title: "Suis-je éligible MaPrimeRénov' 2026 ? Test en 30 sec | ECO CVC",
    description:
      "Test rapide d'éligibilité MaPrimeRénov' 2026 en 5 questions. Recevez votre estimation détaillée par email. Gratuit, sans inscription. ECO CVC, RGE QualiPAC en Isère.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Quiz éligibilité MaPrimeRénov' ECO CVC",
      url: canonical,
      applicationCategory: "FinanceApplication",
      offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
    },
  });

  const setAnswer = (i: number, v: Answer) => {
    const next = [...answers];
    next[i] = v;
    setAnswers(next);
  };

  const goNext = () => {
    if (step < 4) setStep(step + 1);
    else setStep(5);
  };
  const goPrev = () => step > 0 && setStep(step - 1);

  // Résultat
  const eligibleQ1 = answers[0] === "oui"; // proprio
  const eligibleQ2 = answers[1] === "oui"; // > 15 ans
  const eligibleQ3 = answers[2] === "oui"; // résidence principale
  const eligibleQ4 = answers[3] === "oui"; // RGE OK
  const ressources = answers[4]; // oui = profil aidé

  const eligible = eligibleQ1 && eligibleQ2 && eligibleQ3 && eligibleQ4;
  const aideMaximum = eligible && ressources === "oui";

  const sendByEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const r = await submitForm({
        subject: `[eco cvc · quiz] Lead éligibilité — ${zip || "?"}`,
        fields: {
          source: "quiz_eligibilite",
          email,
          code_postal: zip,
          eligible: eligible ? "OUI" : "NON",
          aide_maximum: aideMaximum ? "OUI" : "PARTIELLE",
          q1_proprietaire: answers[0] || "?",
          q2_plus_15_ans: answers[1] || "?",
          q3_residence_principale: answers[2] || "?",
          q4_rge_ok: answers[3] || "?",
          q5_revenus_inferieur_plafond: answers[4] || "?",
        },
      });
      if (r.ok) {
        setSent(true);
        toast({ title: "Estimation envoyée", description: "Détail dans votre boîte mail." });
      }
    } catch {
      toast({ title: "Problème d'envoi", description: "Appelez 07 58 45 99 00.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-10 md:pt-48 md:pb-14">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Éligibilité MaPrimeRénov'</span>
            </nav>

            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Test gratuit en 30 secondes
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
                Suis-je éligible <span className="text-gradient-brand">MaPrimeRénov' 2026</span> ?
              </h1>
              <p className="text-lg text-muted-foreground">
                5 questions, réponse instantanée, estimation détaillée envoyée par email.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto max-w-2xl">
            {/* Progress bar */}
            {step < 5 && (
              <div className="mb-6">
                <div className="flex justify-between text-xs font-bold text-muted-foreground mb-2">
                  <span>Question {step + 1} / {QUESTIONS.length}</span>
                  <span>{Math.round(((step + 1) / QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-brand-blue transition-all duration-500" style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {step < 5 ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl border-2 border-brand-blue/15 p-7 md:p-10 shadow-lg"
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">{QUESTIONS[step].q}</h2>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{QUESTIONS[step].help}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      type="button"
                      onClick={() => setAnswer(step, "oui")}
                      className={`py-4 rounded-2xl font-bold text-lg transition-all ${
                        answers[step] === "oui"
                          ? "bg-brand-green text-white shadow-lg scale-[1.02]"
                          : "bg-white border-2 border-border hover:border-brand-green/40"
                      }`}
                    >
                      Oui
                    </button>
                    <button
                      type="button"
                      onClick={() => setAnswer(step, "non")}
                      className={`py-4 rounded-2xl font-bold text-lg transition-all ${
                        answers[step] === "non"
                          ? "bg-amber-500 text-white shadow-lg scale-[1.02]"
                          : "bg-white border-2 border-border hover:border-amber-400"
                      }`}
                    >
                      Non
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={goPrev}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand-blue disabled:opacity-30"
                    >
                      <ChevronLeft className="w-4 h-4" /> Précédent
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={answers[step] === null}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-blue text-white font-semibold disabled:opacity-50 disabled:bg-slate-300 hover:bg-brand-blue/90 transition-colors"
                    >
                      {step === 4 ? "Voir mon résultat" : "Suivant"} <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                  <div className={`rounded-3xl border-2 p-7 md:p-10 ${eligible ? "bg-brand-green/5 border-brand-green/30" : "bg-amber-50 border-amber-200"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      {eligible ? (
                        <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center">
                          <AlertCircle className="w-6 h-6" />
                        </div>
                      )}
                      <h2 className="font-display text-2xl md:text-3xl font-bold">
                        {eligible
                          ? aideMaximum
                            ? "Excellent — éligibilité maximale"
                            : "Vous êtes éligible MaPrimeRénov'"
                          : "Éligibilité limitée"}
                      </h2>
                    </div>
                    <p className="text-foreground/85 leading-relaxed mb-5">
                      {eligible && aideMaximum &&
                        "Selon vos réponses, vous remplissez toutes les conditions de base. Avec les barèmes 2026, votre projet PAC peut être pris en charge à hauteur de 50-90% selon le type d'équipement choisi et votre profil exact de revenus."}
                      {eligible && !aideMaximum &&
                        "Vous êtes éligible aux dispositifs de base (MaPrimeRénov' Violet ou Rose, Coup de pouce CEE, TVA 5,5%). L'aide totale dépendra du type de PAC et de votre revenu fiscal de référence exact."}
                      {!eligible &&
                        "Certaines conditions de base ne sont pas remplies, mais d'autres aides restent souvent accessibles : prime CEE classique (tous revenus), TVA 5,5% (logement >2 ans), éco-PTZ. Une étude personnalisée permet d'identifier ce qui s'applique à votre cas."}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/simulateur-aides"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
                      >
                        Calculer le montant exact <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="tel:+33758459900"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50 transition-colors"
                      >
                        <Phone className="w-4 h-4" /> 07 58 45 99 00
                      </a>
                    </div>
                  </div>

                  {!sent ? (
                    <form onSubmit={sendByEmail} className="bg-white rounded-3xl border border-border p-7 md:p-8">
                      <h3 className="font-display text-xl font-bold mb-2">Recevez l'analyse détaillée par email</h3>
                      <p className="text-muted-foreground mb-5 text-sm">
                        + un de nos experts ECO CVC vous rappelle sous 24h pour un devis personnalisé si vous le souhaitez.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 mb-3">
                        <div className="relative">
                          <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Votre email"
                            className="w-full pl-10 pr-3 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                        </div>
                        <input type="text" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={zip}
                          onChange={(e) => setZip(e.target.value)} placeholder="Code postal"
                          className="w-full px-3 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                      </div>
                      <button type="submit" disabled={loading}
                        className="w-full py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 disabled:opacity-50 inline-flex items-center justify-center gap-2">
                        {loading ? "Envoi…" : <>Recevoir mon analyse <Send className="w-4 h-4" /></>}
                      </button>
                    </form>
                  ) : (
                    <div className="bg-brand-green/10 rounded-2xl border border-brand-green/20 p-6 text-center">
                      <CheckCircle2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                      <p className="font-semibold mb-1">Estimation envoyée par email</p>
                      <p className="text-sm text-muted-foreground">Un expert vous rappelle sous 24h ouvrées.</p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => { setStep(0); setAnswers([null, null, null, null, null]); setSent(false); }}
                    className="text-sm text-muted-foreground hover:text-brand-blue underline mx-auto block"
                  >
                    Refaire le test
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default QuizEligibilite;
