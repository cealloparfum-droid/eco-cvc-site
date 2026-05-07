import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Gift, Users, Wallet, ArrowRight, Phone, Send, Mail, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/lib/useSeo";
import { useState } from "react";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

const Parrainage = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/parrainage`;
  const { toast } = useToast();

  const [form, setForm] = useState({ parrain: "", parrainEmail: "", filleulNom: "", filleulTel: "", commune: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useSeo({
    title: "Programme de parrainage ECO CVC : 100 € à chaque recommandation",
    description:
      "Programme de parrainage ECO CVC : 100 € pour vous + 100 € pour votre filleul à chaque pose de pompe à chaleur. Recommandez un voisin, gagnez. ECO CVC, RGE QualiPAC.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Programme de parrainage ECO CVC",
      description: "Recommandez ECO CVC à un proche : 100 € pour vous, 100 € de remise pour lui à la pose.",
      provider: { "@type": "Organization", name: "ECO CVC", url: baseUrl },
    },
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.parrainEmail || !form.filleulNom || !form.filleulTel) return;
    setLoading(true);
    try {
      const r = await submitForm({
        subject: `[eco cvc · parrainage] Recommandation de ${form.parrain || form.parrainEmail}`,
        fields: {
          source: "parrainage",
          parrain_nom: form.parrain,
          parrain_email: form.parrainEmail,
          filleul_nom: form.filleulNom,
          filleul_telephone: form.filleulTel,
          commune: form.commune,
          message: form.message,
        },
      });
      if (r.ok) {
        setSent(true);
        toast({ title: "Recommandation enregistrée", description: "Nous contactons votre filleul sous 48h." });
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

        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-white to-brand-blue/5 -z-10" />
          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Parrainage</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 text-brand-green text-xs font-bold uppercase tracking-wider mb-4">
                <Gift className="w-3.5 h-3.5" /> Programme parrainage
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Recommandez ECO CVC, <span className="text-gradient-brand">100 € pour vous, 100 € pour eux</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vos voisins, amis, famille cherchent une PAC ou une climatisation ? Recommandez-nous. À chaque pose réussie, **vous touchez 100 €** et **votre filleul a 100 € de remise**.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">Comment ça marche</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <Step n="1" icon={Users} title="Vous nous recommandez" body="Donnez-nous le nom et numéro d'un proche intéressé via le formulaire ci-dessous, ou faites-leur citer votre nom au 07 58 45 99 00." />
              <Step n="2" icon={Phone} title="On les contacte sous 48h" body="Visite technique gratuite, devis personnalisé. Pas de pression, ils décident librement." />
              <Step n="3" icon={Wallet} title="Si pose réalisée : tout le monde gagne" body="100 € en chèque ou virement pour vous (parrain). 100 € de remise sur le devis pour votre filleul. Pas de plafond — vous pouvez parrainer plusieurs proches." />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Conditions du programme</h2>
            <ul className="space-y-3">
              {[
                "Le filleul doit être un nouveau client (pas déjà connu d'ECO CVC).",
                "La pose doit être réalisée et facturée pour déclencher la prime.",
                "Prime parrain de 100 € versée par chèque ou virement dans les 30 jours suivant la facturation du chantier filleul.",
                "Remise filleul de 100 € automatiquement déduite du devis final.",
                "Pas de plafond : vous pouvez parrainer autant de proches que vous voulez.",
                "Programme cumulable avec MaPrimeRénov', Coup de pouce CEE et toutes autres aides.",
                "Programme sans engagement : si la pose ne se fait pas, aucune obligation pour le parrain ou le filleul.",
              ].map((c, i) => (
                <li key={i} className="flex gap-3 items-start text-foreground/85">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Recommander un proche maintenant</h2>
            {sent ? (
              <div className="bg-brand-green/10 rounded-2xl border border-brand-green/20 p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto mb-3" />
                <h3 className="font-display text-xl font-bold mb-2">Recommandation enregistrée 🙏</h3>
                <p className="text-muted-foreground">Nous contactons votre filleul sous 48h ouvrées. Si la pose se fait, vous recevrez votre prime de 100 € sous 30 jours après facturation.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white rounded-2xl border border-border p-7 space-y-4">
                <h3 className="font-display text-lg font-bold">Vos infos (parrain)</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input value={form.parrain} onChange={(e) => setForm({ ...form, parrain: e.target.value })} placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                  <input type="email" value={form.parrainEmail} onChange={(e) => setForm({ ...form, parrainEmail: e.target.value })} required placeholder="Votre email"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                </div>

                <h3 className="font-display text-lg font-bold mt-4">Infos du filleul</h3>
                <input value={form.filleulNom} onChange={(e) => setForm({ ...form, filleulNom: e.target.value })} required placeholder="Nom et prénom du filleul"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="tel" value={form.filleulTel} onChange={(e) => setForm({ ...form, filleulTel: e.target.value })} required placeholder="Téléphone du filleul"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                  <input value={form.commune} onChange={(e) => setForm({ ...form, commune: e.target.value })} placeholder="Commune"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                </div>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} placeholder="Quelques mots sur leur projet (optionnel)"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15" />
                <p className="text-xs text-muted-foreground">
                  Important : prévenez votre filleul que nous allons l'appeler de votre part, c'est plus sympa et plus efficace.
                </p>
                <button type="submit" disabled={loading}
                  className="w-full py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 disabled:opacity-50 inline-flex items-center justify-center gap-2">
                  {loading ? "Envoi…" : <>Envoyer la recommandation <Send className="w-4 h-4" /></>}
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

const Step = ({ n, icon: Icon, title, body }: { n: string; icon: typeof Users; title: string; body: string }) => (
  <div className="p-7 rounded-2xl bg-white border border-border">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">{n}</div>
      <Icon className="w-5 h-5 text-brand-blue" />
    </div>
    <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-foreground/80 leading-relaxed">{body}</p>
  </div>
);

export default Parrainage;
