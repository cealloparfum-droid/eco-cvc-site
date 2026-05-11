/**
 * Page "Demande de rappel express" — capture leads paresseux.
 *
 * Formulaire ultra simple (3 champs) au lieu de 8 :
 *  - Prénom (parce qu'on aime bien dire bonjour)
 *  - Téléphone (le seul vraiment obligatoire)
 *  - Créneau préféré (radio buttons rapides)
 *
 * Taux de conversion attendu : 15-25 % vs 1-3 % formulaire devis classique.
 */

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Clock, CheckCircle2, ArrowRight, ChevronRight, Loader2, ShieldCheck, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { submitForm } from "@/lib/submit-form";
import { toast } from "@/components/ui/use-toast";
import { useSeo } from "@/lib/useSeo";

const CRENEAUX = [
  { id: "now", label: "Tout de suite", icon: "⚡" },
  { id: "today-am", label: "Aujourd'hui matin", icon: "☀️" },
  { id: "today-pm", label: "Aujourd'hui après-midi", icon: "🌤️" },
  { id: "today-eve", label: "Aujourd'hui soir (18h-20h)", icon: "🌆" },
  { id: "tomorrow", label: "Demain", icon: "📅" },
  { id: "week", label: "Cette semaine", icon: "📆" },
];

const RappelExpress = () => {
  const [prenom, setPrenom] = useState("");
  const [phone, setPhone] = useState("");
  const [creneau, setCreneau] = useState("today-pm");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useSeo({
    title: "Demande de rappel gratuit — ECO CVC, on vous appelle sous 1h",
    description:
      "Demande de rappel gratuite ECO CVC : 3 champs, 30 secondes. Choisissez votre créneau, on vous appelle pour étudier votre projet PAC ou climatisation en Isère / Rhône-Alpes.",
    canonical: "https://www.ecocvc.pro/rappel-express",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!phone) {
      toast({ title: "Téléphone manquant", description: "Renseignez votre numéro pour qu'on puisse vous appeler." });
      return;
    }
    setLoading(true);
    try {
      const cLabel = CRENEAUX.find((c) => c.id === creneau)?.label || creneau;
      const r = await submitForm({
        subject: `📞 RAPPEL EXPRESS — ${prenom || "Anonyme"} (${cLabel})`,
        fields: {
          source: "rappel-express",
          prenom,
          telephone: phone,
          creneau_souhaite: cLabel,
          priorite: creneau === "now" ? "URGENTE" : "Normale",
        },
      });
      if (!r.ok) throw new Error("Échec");
      setDone(true);
    } catch {
      toast({
        title: "Petit souci d'envoi",
        description: "Appelez-nous directement au 06 29 63 40 45.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-32 pb-12 bg-gradient-to-br from-brand-red via-red-600 to-brand-red text-white">
          <div className="container mx-auto max-w-4xl px-4">
            <nav className="flex items-center gap-1.5 text-xs text-white/80 mb-6">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="font-medium text-white">Rappel express</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5" />
                Réponse sous 1h
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Rappel gratuit en 30 secondes
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Pas envie de remplir un long formulaire ? Donnez-nous juste votre numéro
                et l'heure qui vous arrange — on s'occupe du reste.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 container mx-auto max-w-3xl px-4">
          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl bg-gradient-to-br from-brand-green/10 to-emerald-50 border-2 border-brand-green/30 p-10 text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-brand-green flex items-center justify-center mb-5">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-slate-900">
                Demande reçue, {prenom || "à vous"} !
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 max-w-lg mx-auto">
                Un technicien ECO CVC va vous appeler dans le créneau demandé. Si urgence, vous pouvez aussi nous joindre directement :
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+33629634045"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-green text-white font-bold hover:bg-emerald-700 transition-colors"
                >
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
                <Link
                  to="/simulateur-aides"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border-2 border-brand-green/30 text-brand-green font-bold hover:bg-brand-green/5 transition-colors"
                >
                  Simulez vos aides en attendant <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-white border-2 border-brand-red/20 p-8 md:p-10 shadow-lifted"
            >
              <div className="mb-7">
                <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-1">
                  3 champs, 30 secondes, c'est fini.
                </h2>
                <p className="text-sm text-slate-600">
                  Pas de questionnaire interminable. On vous rappelle, on discute 5 min, et on cale la suite.
                </p>
              </div>

              {/* Prénom */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Votre prénom <span className="text-slate-400 font-normal">(optionnel)</span>
                </label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Ex. Anthony"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-brand-red transition-colors"
                  autoComplete="given-name"
                />
              </div>

              {/* Téléphone */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Téléphone <span className="text-brand-red">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 ou 07 ..."
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-brand-red transition-colors font-semibold tracking-wide"
                  required
                  autoComplete="tel"
                />
              </div>

              {/* Créneau */}
              <div className="mb-7">
                <label className="block text-sm font-semibold text-slate-800 mb-3">
                  Quand voulez-vous être rappelé ?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {CRENEAUX.map((c) => (
                    <label
                      key={c.id}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        creneau === c.id
                          ? "border-brand-red bg-brand-red/5 ring-2 ring-brand-red/20"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="creneau"
                        value={c.id}
                        checked={creneau === c.id}
                        onChange={() => setCreneau(c.id)}
                        className="sr-only"
                      />
                      <span className="text-xl">{c.icon}</span>
                      <span className="text-sm font-medium text-slate-800">{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-red text-white font-bold text-base hover:bg-red-700 transition-colors shadow-lifted disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi…
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5" />
                    Recevoir mon rappel
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> RGE QualiPAC
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Réponse sous 1h en semaine
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Sans engagement
                </span>
              </div>
            </form>
          )}

          {/* Alternative directe */}
          <div className="mt-8 text-center text-sm text-slate-600">
            Pressé ? Appelez-nous directement au{" "}
            <a href="tel:+33629634045" className="text-brand-red font-bold hover:underline">06 29 63 40 45</a>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default RappelExpress;
