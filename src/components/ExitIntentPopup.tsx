import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Gift, CheckCircle2, ShieldCheck } from "lucide-react";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "ecocvc-exit-popup-shown";
const SHOWN_THRESHOLD_MS = 7 * 24 * 60 * 60 * 1000; // une fois par 7 jours

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const last = Number(localStorage.getItem(STORAGE_KEY) || 0);
    if (Date.now() - last < SHOWN_THRESHOLD_MS) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    };

    // Desktop : sortie de viewport par le haut
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseout", onMouseLeave);

    // Mobile : retour rapide en haut après scroll important
    let lastY = window.scrollY;
    let scrolledDown = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 600) scrolledDown = true;
      if (scrolledDown && y < lastY - 80 && y < 200) trigger();
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Filet : déclenchement après 90s d'inactivité
    const timer = window.setTimeout(trigger, 90_000);

    return () => {
      document.removeEventListener("mouseout", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const result = await submitForm({
        subject: "[eco cvc · guide] Demande guide MaPrimeRénov 2026",
        fields: {
          source: "exit_intent_popup",
          email,
          code_postal: zip || "—",
        },
      });
      if (result.ok) {
        setSent(true);
        toast({
          title: "Guide en route",
          description: "Vous recevez le PDF par email sous quelques minutes.",
        });
      }
    } catch {
      toast({
        title: "Oups, problème d'envoi",
        description: "Réessayez ou appelez-nous au 06 29 63 40 45.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-sky/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-green/15 rounded-full blur-3xl" />

            {sent ? (
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Merci !</h3>
                <p className="text-muted-foreground">
                  Le guide MaPrimeRénov' 2026 arrive dans votre boîte mail. Si vous voulez avancer plus vite,
                  appelez-nous au <a href="tel:+33629634045" className="text-brand-blue font-semibold">06 29 63 40 45</a>.
                </p>
              </div>
            ) : (
              <div className="relative p-7 md:p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                  <Gift className="w-3.5 h-3.5" /> Guide gratuit
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-3">
                  Avant de partir : recevez le <span className="text-gradient-brand">guide MaPrimeRénov' 2026</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Montants exacts, conditions, démarche pas à pas, pièges à éviter. PDF gratuit, envoyé tout de suite.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre email"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition"
                    />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Code postal (optionnel)"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors disabled:opacity-50"
                  >
                    {loading ? "Envoi…" : "Recevoir le guide gratuit"}
                  </button>
                </form>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                  Pas de spam — uniquement pour envoyer le guide. Désinscription en 1 clic.
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
