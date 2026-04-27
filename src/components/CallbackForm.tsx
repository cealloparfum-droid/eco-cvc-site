import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, CheckCircle2, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * CallbackForm — formulaire compact "Rappel sous 30 minutes".
 * À placer en haut des pages de service (notamment Dépannage) pour les
 * utilisateurs qui ne peuvent pas appeler tout de suite (réunion, soir, etc.).
 */

const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || "";

const NATURES = [
  { v: "ne-fonctionne-plus", l: "Ne fonctionne plus du tout" },
  { v: "fuite-eau", l: "Fuite d'eau" },
  { v: "bruit", l: "Bruit anormal" },
  { v: "code-erreur", l: "Code erreur affiché" },
  { v: "performance", l: "Perte de performance" },
  { v: "autre", l: "Autre / je ne sais pas" },
] as const;

const CallbackForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    nature: "ne-fonctionne-plus",
    when: "asap",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!WEB3FORMS_KEY) {
        const subject = `[eco cvc · DÉPANNAGE URGENT] Rappel demandé — ${form.name}`;
        const body = `Bonjour,\n\nJe demande un rappel d'urgence dépannage.\n\nNom : ${form.name}\nTéléphone : ${form.phone}\nVille : ${form.city}\nNature de la panne : ${NATURES.find((n) => n.v === form.nature)?.l}\nQuand me rappeler : ${form.when === "asap" ? "Dès que possible" : form.when === "matin" ? "Demain matin" : "Demain après-midi"}\n\nMerci.`;
        window.location.href = `mailto:ecocvc69@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        toast({ title: "Demande prête", description: "Votre client mail s'ouvre avec votre demande." });
        setSent(true);
        return;
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[eco cvc · DÉPANNAGE URGENT] Rappel demandé — ${form.name} (${form.city})`,
          from_name: "eco cvc · dépannage",
          botcheck: "",
          nom: form.name,
          telephone: form.phone,
          ville: form.city,
          nature_panne: NATURES.find((n) => n.v === form.nature)?.l,
          quand_rappeler: form.when,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Rappel programmé", description: "Un technicien vous rappelle au plus vite." });
        setSent(true);
      } else {
        throw new Error(data.message || "Erreur");
      }
    } catch {
      toast({
        title: "Problème d'envoi",
        description: "Appelez-nous au 07 58 45 99 00, on s'occupe de tout.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white rounded-3xl border-2 border-brand-red/15 shadow-lifted overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl" />

      <div className="relative p-6 md:p-7">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="text-center py-6"
            >
              <div className="w-14 h-14 rounded-full bg-brand-green/15 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Rappel programmé !</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Un technicien vous rappelle au <strong>{form.phone}</strong> dans les meilleurs délais. En cas d'urgence absolue, appelez le 07 58 45 99 00.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="flex items-start gap-3 mb-1">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-red/10 flex items-center justify-center">
                  <PhoneCall className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brand-red/10 text-brand-red text-[10px] font-bold tracking-widest uppercase mb-1">
                    Vous ne pouvez pas appeler ?
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                    Demandez un rappel — sous 30 min
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    On vous rappelle pour pré-diagnostiquer et fixer le créneau d'intervention.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="px-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Téléphone"
                  className="px-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
                />
              </div>

              <input
                required
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Ville (Lyon, Annecy, Grenoble…)"
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
              />

              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="block text-[11px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Nature de la panne</span>
                  <select
                    name="nature"
                    value={form.nature}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-red"
                  >
                    {NATURES.map((n) => (
                      <option key={n.v} value={n.v}>
                        {n.l}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-[11px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Quand vous rappeler</span>
                  <select
                    name="when"
                    value={form.when}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-red"
                  >
                    <option value="asap">Dès que possible</option>
                    <option value="matin">Demain matin</option>
                    <option value="aprem">Demain après-midi</option>
                  </select>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-red hover:bg-red-600 text-white font-bold transition-colors shadow-lifted disabled:opacity-60"
              >
                {loading ? (
                  "Envoi..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Demander mon rappel
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <Clock className="w-3 h-3" />
                Rappel sous 30 min en heures ouvrées · pas de spam, pas de revente
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CallbackForm;
