import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, User, Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitForm } from "@/lib/submit-form";

/**
 * LeadCaptureCard — formulaire compact à insérer juste APRÈS un calculateur
 * pour capter l'email du visiteur sans qu'il ait à recommencer un formulaire long.
 */

type Context = "clim" | "chambre-froide" | "vitrines" | "ventilation" | "calculateur";

const labels: Record<Context, { eyebrow: string; title: string; sub: string; cta: string }> = {
  clim: {
    eyebrow: "Recevez votre recommandation",
    title: "Recevez votre devis estimatif par email",
    sub: "On vous envoie le récap de votre calcul + un devis pose comprise sous 24h. Sans engagement.",
    cta: "Recevoir mon devis estimatif",
  },
  "chambre-froide": {
    eyebrow: "Étude personnalisée",
    title: "Recevez votre étude chambre froide",
    sub: "On vous envoie le bilan thermique adapté + le devis matériel & pose sous 48h.",
    cta: "Recevoir mon étude",
  },
  vitrines: {
    eyebrow: "Plan d'implantation",
    title: "Recevez votre recommandation vitrine",
    sub: "Plan 2D, fiche produit et devis matériel + pose envoyés par email sous 48h.",
    cta: "Recevoir ma recommandation",
  },
  ventilation: {
    eyebrow: "Étude ventilation",
    title: "Recevez l'étude de votre projet ventilation",
    sub: "Devis matériel (hotte, caissons, charbon actif…) + plan d'implantation par email sous 48h.",
    cta: "Recevoir mon étude",
  },
  calculateur: {
    eyebrow: "Recommandation personnalisée",
    title: "Recevez le détail de votre calcul par email",
    sub: "Récapitulatif de la puissance recommandée, modèle conseillé et devis pose comprise sous 24h.",
    cta: "Recevoir mon calcul",
  },
};

interface Props {
  context: Context;
  summary?: string;
  extraData?: Record<string, string | number | boolean>;
  className?: string;
}

const LeadCaptureCard = ({ context, summary, extraData, className = "" }: Props) => {
  const cfg = labels[context];
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", zip: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await submitForm({
        subject: `[eco cvc · ${context}] Nouveau lead calculateur — ${form.name}`,
        fields: {
          contexte: context,
          recap_calcul: summary || "—",
          nom: form.name,
          email: form.email,
          telephone: form.phone,
          code_postal: form.zip,
          ...extraData,
        },
      });
      if (result.ok) {
        toast({
          title: "Demande bien reçue",
          description:
            result.via === "mailto"
              ? "Votre client mail s'ouvre avec votre demande."
              : "Vous recevez votre récap par email sous quelques minutes.",
        });
        setSent(true);
      } else {
        throw new Error(result.message || "Erreur d'envoi");
      }
    } catch {
      toast({
        title: "Oups, problème d'envoi",
        description: "Appelez-nous au 07 58 45 99 00, on s'occupe de tout.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-3xl border-2 border-brand-blue/20 bg-gradient-to-br from-white via-accent/30 to-white shadow-lifted ${className}`}
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-sky/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="relative p-6 md:p-8">
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
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Merci {form.name.split(" ")[0]} !</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Vous recevez votre récap par email à <strong>{form.email}</strong> sous quelques minutes. Un technicien vous rappelle au {form.phone} sous 24h ouvrées.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="grid md:grid-cols-[1fr,auto] gap-6 items-center"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-bluedark text-[10px] font-bold tracking-widest uppercase mb-3">
                  <Mail className="w-3 h-3" />
                  {cfg.eyebrow}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-1.5 leading-tight">{cfg.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cfg.sub}</p>

                {summary && (
                  <div className="mb-4 px-3 py-2 rounded-lg bg-white border border-border text-xs">
                    <span className="font-bold text-brand-bluedark">Votre calcul : </span>
                    <span className="text-foreground">{summary}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <label className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nom"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"
                    />
                  </label>
                  <label className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"
                    />
                  </label>
                  <label className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Téléphone"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"
                    />
                  </label>
                  <label className="relative">
                    <input
                      required
                      type="text"
                      pattern="[0-9]{5}"
                      name="zip"
                      value={form.zip}
                      onChange={handleChange}
                      placeholder="Code postal"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"
                    />
                  </label>
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-brand-green shrink-0" />
                  Vos données restent chez nous. Pas de spam, pas de revente.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:min-w-[220px]">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-blue hover:bg-brand-bluedark text-white font-bold transition-colors shadow-lifted disabled:opacity-60"
                >
                  {loading ? (
                    "Envoi..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {cfg.cta}
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  Réponse sous 24h ouvrées
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LeadCaptureCard;
