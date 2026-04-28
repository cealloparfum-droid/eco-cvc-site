import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, CheckCircle2 } from "lucide-react";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

interface Props {
  title?: string;
  subtitle?: string;
  source?: string;
  className?: string;
  variant?: "card" | "compact";
}

const NewsletterInline = ({
  title = "Recevez nos guides PAC & aides par email",
  subtitle = "Un email tous les 15 jours max : montants à jour, retours d'expérience, nouveaux dispositifs. Vous vous désinscrivez en 1 clic.",
  source = "newsletter_inline",
  className = "",
  variant = "card",
}: Props) => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const result = await submitForm({
        subject: `[eco cvc · newsletter] Inscription — ${email}`,
        fields: { source, email },
      });
      if (result.ok) {
        setSent(true);
        toast({ title: "Inscription confirmée", description: "À très vite dans votre boîte mail." });
      }
    } catch {
      toast({
        title: "Problème d'envoi",
        description: "Réessayez ou appelez-nous au 07 58 45 99 00.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (variant === "compact") {
    return (
      <form onSubmit={submit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
        {sent ? (
          <div className="flex items-center gap-2 text-brand-green text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" /> Bienvenue !
          </div>
        ) : (
          <>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="flex-1 px-4 py-2.5 rounded-full border border-border bg-white text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue/90 transition-colors disabled:opacity-50"
            >
              {loading ? "…" : "S'inscrire"}
            </button>
          </>
        )}
      </form>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-3xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 via-white to-brand-green/5 p-7 md:p-8 ${className}`}
    >
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand-sky/15 rounded-full blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
          <Mail className="w-3.5 h-3.5" /> Newsletter ECO CVC
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold leading-snug mb-2">{title}</h3>
        <p className="text-muted-foreground mb-5 leading-relaxed">{subtitle}</p>

        {sent ? (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-green/10 text-brand-green">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold">Inscription confirmée — à très vite.</span>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
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
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? "Envoi…" : "Je m'inscris"}
            </button>
          </form>
        )}

        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
          Pas de spam — RGPD respecté, désinscription en 1 clic.
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterInline;
