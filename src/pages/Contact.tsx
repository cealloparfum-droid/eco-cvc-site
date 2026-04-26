import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";

type ServiceType = "installation" | "maintenance" | "depannage" | "autre";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    service: "installation" as ServiceType,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande bien reçue",
      description: "Nous vous rappelons sous 24h ouvrées.",
    });
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Contact"
          title={
            <>
              Parlons de votre <span className="text-gradient-brand">projet</span>.
            </>
          }
          subtitle="Installation, entretien, dépannage ou simple demande d'information : remplissez le formulaire ou appelez-nous directement."
          breadcrumb={[{ label: "Contact" }]}
        />

        <section className="py-12 md:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-soft"
              >
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-brand-green/15 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-brand-green" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Merci pour votre demande !</h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Nous avons bien reçu votre message. Un technicien vous rappelle sous 24h ouvrées au numéro indiqué.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-foreground font-semibold text-sm transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Demande de devis gratuit</h2>
                      <p className="text-sm text-muted-foreground">Réponse sous 24h ouvrées, sans engagement.</p>
                    </div>

                    {/* Service selector */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Type de demande <span className="text-brand-red">*</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[
                          { v: "installation", l: "Installation" },
                          { v: "maintenance", l: "Entretien" },
                          { v: "depannage", l: "Dépannage" },
                          { v: "autre", l: "Autre" },
                        ].map((opt) => (
                          <label key={opt.v} className="relative cursor-pointer">
                            <input
                              type="radio"
                              name="service"
                              value={opt.v}
                              checked={form.service === opt.v}
                              onChange={handleChange}
                              className="peer sr-only"
                            />
                            <div className="text-center py-2.5 px-3 rounded-xl border-2 border-border text-sm font-semibold text-foreground/70 peer-checked:border-brand-blue peer-checked:bg-accent peer-checked:text-brand-bluedark transition-all hover:border-brand-blue/40">
                              {opt.l}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Nom complet" required>
                        <input
                          required
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="input"
                        />
                      </Field>
                      <Field label="Code postal" required>
                        <input
                          required
                          name="zip"
                          type="text"
                          pattern="[0-9]{5}"
                          value={form.zip}
                          onChange={handleChange}
                          placeholder="13090"
                          className="input"
                        />
                      </Field>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Téléphone" required>
                        <input
                          required
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="06 XX XX XX XX"
                          className="input"
                        />
                      </Field>
                      <Field label="Email" required>
                        <input
                          required
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jean.dupont@exemple.fr"
                          className="input"
                        />
                      </Field>
                    </div>

                    <Field label="Votre message">
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet : surface à climatiser, nombre de pièces, délais souhaités..."
                        className="input resize-none"
                      />
                    </Field>

                    <p className="text-xs text-muted-foreground">
                      En envoyant ce formulaire, vous acceptez que vos données soient utilisées uniquement
                      pour répondre à votre demande. Voir notre politique de confidentialité.
                    </p>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-blue hover:bg-brand-bluedark text-white font-bold transition-colors shadow-lifted"
                    >
                      Envoyer ma demande
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-lifted overflow-hidden relative">
                  <div className="absolute inset-0 bg-grid opacity-[0.06]" />
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-widest uppercase mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse-soft" />
                      Urgence clim ?
                    </span>
                    <h3 className="text-2xl font-extrabold mb-2">Besoin d'un dépannage ?</h3>
                    <p className="text-sm text-white/70 mb-6">
                      Intervention sous 24h en semaine. Appelez directement, un technicien vous prend en charge.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="tel:+33758459900"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-red hover:bg-red-600 font-extrabold transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        07 58 45 99 00
                      </a>
                      <a
                        href="tel:+33629634045"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-white/40 hover:bg-white/10 font-extrabold transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        06 29 63 40 45
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-border p-8 shadow-soft">
                  <h3 className="font-extrabold text-slate-900 mb-6">Nous contacter</h3>
                  <ul className="space-y-5">
                    <InfoLine icon={Phone} title="Téléphone" lines={["07 58 45 99 00", "06 29 63 40 45"]} tint="red" />
                    <InfoLine icon={Mail} title="Email" lines={["contact@ecocvc.fr"]} tint="blue" />
                    <InfoLine icon={MapPin} title="Zone d'intervention" lines={["Région Rhône-Alpes", "Rhône 69 · Loire 42 · Isère 38", "Savoie 73 · Haute-Savoie 74"]} tint="green" />
                    <InfoLine
                      icon={Clock}
                      title="Horaires"
                      lines={["Lun-Sam : 8h - 19h", "Dépannage d'urgence 7j/7"]}
                      tint="slate"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .input {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            border: 1.5px solid hsl(var(--border));
            background: white;
            font-size: 0.95rem;
            transition: all 0.2s;
          }
          .input:focus {
            outline: none;
            border-color: hsl(var(--brand-blue));
            box-shadow: 0 0 0 3px hsl(var(--brand-blue) / 0.1);
          }
          .input::placeholder {
            color: hsl(var(--muted-foreground) / 0.7);
          }
        `}</style>

        <Footer />
      </div>
    </PageTransition>
  );
};

const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-sm font-semibold text-slate-700 mb-2">
      {label} {required && <span className="text-brand-red">*</span>}
    </span>
    {children}
  </label>
);

const tintMap = {
  red: "bg-brand-red/10 text-brand-red",
  blue: "bg-brand-blue/10 text-brand-blue",
  green: "bg-brand-green/10 text-brand-green",
  slate: "bg-slate-100 text-slate-600",
};

const InfoLine = ({
  icon: Icon,
  title,
  lines,
  tint,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
  tint: keyof typeof tintMap;
}) => (
  <li className="flex gap-4">
    <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${tintMap[tint]}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex-1">
      <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground">{title}</div>
      {lines.map((l, i) => (
        <div key={i} className="text-sm font-medium text-foreground">{l}</div>
      ))}
    </div>
  </li>
);

export default Contact;
