import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  X,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import { useDevisList } from "@/hooks/use-devis-list";

type ServiceType =
  | "installation"
  | "maintenance"
  | "depannage"
  | "chambre-froide"
  | "vitrines"
  | "ventilation"
  | "boutique"
  | "autre";

const SERVICE_LABELS: Record<ServiceType, string> = {
  installation: "Installation climatisation",
  maintenance: "Contrat d'entretien",
  depannage: "Dépannage",
  "chambre-froide": "Chambre froide",
  vitrines: "Vitrine réfrigérée",
  ventilation: "Ventilation / hotte",
  boutique: "Achat boutique",
  autre: "Autre demande",
};

// Services proposés dans la barre de boutons radio (les 4 principaux)
const PRIMARY_OPTIONS: { v: ServiceType; l: string }[] = [
  { v: "installation", l: "Installation" },
  { v: "maintenance", l: "Entretien" },
  { v: "depannage", l: "Dépannage" },
  { v: "autre", l: "Autre" },
];

// Mapping des services "secondaires" reçus en URL → service primaire à cocher
const SERVICE_FALLBACK: Record<ServiceType, ServiceType> = {
  installation: "installation",
  maintenance: "maintenance",
  depannage: "depannage",
  "chambre-froide": "installation",
  vitrines: "installation",
  ventilation: "installation",
  boutique: "installation",
  autre: "autre",
};

const OFFRES: Record<string, string> = {
  aux990: "Offre AUX 990 € posée",
  daikin: "Daikin Perfera",
  mitsubishi: "Mitsubishi MSZ-LN",
  panasonic: "Panasonic Etherea",
};

const AIDES: Record<string, string> = {
  mpr: "MaPrimeRénov'",
  cee: "Certificats d'Économie d'Énergie",
  tva: "TVA réduite 5,5 %",
  ecoptz: "Éco-PTZ",
};

const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || "";

const formatEur = (v: number) =>
  v.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " €";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const { items: devisItems, remove: removeDevis, clear: clearDevis, total: devisTotal } = useDevisList();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Lecture des paramètres d'URL (depuis CTABand, Boutique, etc.)
  const urlService = (searchParams.get("service") || "").toLowerCase() as ServiceType | "";
  const urlOffre = (searchParams.get("offre") || "").toLowerCase();
  const urlAide = (searchParams.get("aide") || "").toLowerCase();
  const urlVille = searchParams.get("ville") || "";
  const urlModele = searchParams.get("modele") || "";

  // Service initial : on prend le service de l'URL s'il est valide, sinon installation
  const initialService: ServiceType = useMemo(() => {
    if (urlService && (urlService in SERVICE_LABELS)) {
      return SERVICE_FALLBACK[urlService as ServiceType];
    }
    return "installation";
  }, [urlService]);

  // Le service "réel" (avant fallback) sert à la chip et au pre-fill du message
  const realService: ServiceType | "" = (urlService && urlService in SERVICE_LABELS ? (urlService as ServiceType) : "");

  // Pré-remplissage automatique du message selon le contexte
  const initialMessage = useMemo(() => {
    const parts: string[] = [];
    if (realService) {
      parts.push(`Demande : ${SERVICE_LABELS[realService]}.`);
    }
    if (urlOffre && OFFRES[urlOffre]) {
      parts.push(`Offre qui m'intéresse : ${OFFRES[urlOffre]}.`);
    }
    if (urlModele) {
      parts.push(`Modèle : ${urlModele}.`);
    }
    if (urlAide && AIDES[urlAide]) {
      parts.push(`Je souhaite être accompagné·e pour l'aide ${AIDES[urlAide]}.`);
    }
    if (devisItems.length > 0) {
      parts.push(
        `\nProduits sélectionnés depuis la boutique :\n${devisItems
          .map((it) => `- ${it.brand ? `[${it.brand}] ` : ""}${it.name} — ${formatEur(it.price)}${it.qty && it.qty > 1 ? ` × ${it.qty}` : ""}`)
          .join("\n")}\nTotal indicatif : ${formatEur(devisTotal)}`
      );
    }
    if (parts.length > 0) {
      parts.push("\nMerci de me recontacter pour échanger sur mon projet.");
    }
    return parts.join("\n");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realService, urlOffre, urlModele, urlAide, devisItems.length, devisTotal]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    city: urlVille,
    service: initialService,
    message: initialMessage,
  });

  // Si l'URL change après le mount (changement de variante de CTA pendant la même session SPA)
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      service: initialService,
      city: urlVille || prev.city,
      message: prev.message || initialMessage,
    }));
    // scroll vers le formulaire si on arrive avec un contexte
    if (urlService || urlOffre || urlAide) {
      const el = document.getElementById("contact-form");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialService, initialMessage, urlVille]);

  // Construction de la "chip de contexte" affichée en haut du formulaire
  const contextChip = useMemo(() => {
    const bits: string[] = [];
    if (realService) bits.push(SERVICE_LABELS[realService]);
    if (urlOffre && OFFRES[urlOffre]) bits.push(OFFRES[urlOffre]);
    if (urlAide && AIDES[urlAide]) bits.push(`Aide : ${AIDES[urlAide]}`);
    if (urlModele) bits.push(`Modèle : ${urlModele}`);
    if (urlVille) bits.push(urlVille);
    return bits.length > 0 ? bits.join(" · ") : "";
  }, [realService, urlOffre, urlAide, urlModele, urlVille]);

  const clearContext = () => {
    setSearchParams({}, { replace: true });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = `[eco cvc · CONTACT] ${SERVICE_LABELS[form.service]} — ${form.name}`;

    try {
      if (!WEB3FORMS_KEY) {
        // Fallback mailto si la clé n'est pas configurée
        const body = `Bonjour,\n\nNom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone}\nCode postal : ${form.zip}\nVille : ${form.city || "—"}\nService : ${SERVICE_LABELS[form.service]}\n${realService && realService !== form.service ? `Précision : ${SERVICE_LABELS[realService]}\n` : ""}${urlOffre && OFFRES[urlOffre] ? `Offre : ${OFFRES[urlOffre]}\n` : ""}${urlAide && AIDES[urlAide] ? `Aide : ${AIDES[urlAide]}\n` : ""}${urlModele ? `Modèle : ${urlModele}\n` : ""}\nMessage :\n${form.message}\n\nMerci.`;
        window.location.href = `mailto:ecocvc69@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        toast({
          title: "Demande prête à envoyer",
          description: "Votre client mail s'ouvre avec votre demande.",
        });
        setSubmitted(true);
        if (devisItems.length > 0) clearDevis();
        return;
      }

      const devisLines = devisItems
        .map((it) => `${it.brand ? `[${it.brand}] ` : ""}${it.name} — ${formatEur(it.price)}${it.qty && it.qty > 1 ? ` × ${it.qty}` : ""}`)
        .join("\n");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "eco cvc · contact",
          botcheck: "",
          nom: form.name,
          email: form.email,
          telephone: form.phone,
          code_postal: form.zip,
          ville: form.city,
          service: SERVICE_LABELS[form.service],
          contexte_service: realService ? SERVICE_LABELS[realService] : "",
          contexte_offre: urlOffre && OFFRES[urlOffre] ? OFFRES[urlOffre] : "",
          contexte_aide: urlAide && AIDES[urlAide] ? AIDES[urlAide] : "",
          contexte_modele: urlModele,
          devis_count: devisItems.length,
          devis_total_eur: devisTotal,
          devis_produits: devisLines,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Demande bien reçue",
          description: "Nous vous rappelons sous 24h ouvrées.",
        });
        setSubmitted(true);
        // Vider le devis localStorage après envoi réussi
        if (devisItems.length > 0) clearDevis();
      } else {
        throw new Error(data.message || "Erreur serveur");
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

        <section id="contact-form" className="py-12 md:py-20">
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

                    {/* Récap devis multi-produits si présent */}
                    {devisItems.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl border-2 border-brand-blue/25 bg-gradient-to-br from-brand-blue/5 to-brand-sky/5 overflow-hidden"
                      >
                        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-brand-blue/15 bg-white/60">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-brand-blue/15 flex items-center justify-center">
                              <ShoppingCart className="w-4 h-4 text-brand-blue" />
                            </div>
                            <div>
                              <div className="text-[10px] font-bold tracking-widest uppercase text-brand-blue">Mon devis boutique</div>
                              <div className="text-sm font-extrabold text-slate-900">
                                {devisItems.length} produit{devisItems.length > 1 ? "s" : ""} · total {formatEur(devisTotal)}
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={clearDevis}
                            className="text-[11px] font-semibold text-muted-foreground hover:text-brand-red transition-colors"
                          >
                            Tout retirer
                          </button>
                        </div>
                        <ul className="divide-y divide-brand-blue/10">
                          {devisItems.map((it) => (
                            <li key={it.ref} className="flex items-center gap-3 px-4 py-2.5">
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-slate-900 font-semibold leading-tight truncate">
                                  {it.brand && <span className="text-brand-bluedark mr-1">[{it.brand}]</span>}
                                  {it.name}
                                </div>
                                <div className="text-[11px] text-muted-foreground">
                                  {formatEur(it.price)}
                                  {it.qty && it.qty > 1 && ` × ${it.qty}`}
                                  {it.kw && ` · ${it.kw} kW`}
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeDevis(it.ref)}
                                className="shrink-0 w-7 h-7 rounded-lg hover:bg-red-50 hover:text-brand-red text-muted-foreground flex items-center justify-center transition-colors"
                                aria-label={`Retirer ${it.name}`}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Context chip — uniquement si on arrive avec des params */}
                    {contextChip && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-gradient-to-r from-brand-blue/10 via-brand-sky/10 to-brand-blue/5 border border-brand-blue/20"
                      >
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-brand-blue/15 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-brand-blue" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-bold tracking-widest uppercase text-brand-blue mb-0.5">
                            Votre demande
                          </div>
                          <div className="text-sm font-semibold text-slate-900 truncate">{contextChip}</div>
                        </div>
                        <button
                          type="button"
                          onClick={clearContext}
                          aria-label="Effacer le contexte"
                          className="shrink-0 w-7 h-7 rounded-lg hover:bg-white/60 text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}

                    {/* Service selector */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Type de demande <span className="text-brand-red">*</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {PRIMARY_OPTIONS.map((opt) => (
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

                    <Field label="Ville (optionnel)">
                      <input
                        name="city"
                        type="text"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Lyon, Annecy, Grenoble…"
                        className="input"
                      />
                    </Field>

                    <Field label="Votre message">
                      <textarea
                        name="message"
                        rows={5}
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
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-blue hover:bg-brand-bluedark text-white font-bold transition-colors shadow-lifted disabled:opacity-60"
                    >
                      {loading ? (
                        "Envoi en cours…"
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="w-4 h-4" />
                        </>
                      )}
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
                    <InfoLine icon={Mail} title="Email" lines={["ecocvc69@gmail.com"]} tint="blue" />
                    <InfoLine icon={MapPin} title="Zone d'intervention" lines={["Région Rhône-Alpes", "Rhône 69 · Loire 42 · Isère 38", "Savoie 73 · Haute-Savoie 74"]} tint="green" />
                    <InfoLine
                      icon={Clock}
                      title="Horaires"
                      lines={["Lun. – Sam. : 8 h – 19 h", "Dépannage d'urgence 7j/7"]}
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
