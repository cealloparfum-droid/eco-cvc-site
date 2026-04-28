import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Phone,
  Mail,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Snowflake,
  Wind,
  Settings,
  LifeBuoy,
  ShoppingBag,
  Refrigerator,
} from "lucide-react";
import { submitForm } from "@/lib/submit-form";
import { MicButton } from "@/components/MicButton";

/** ------------------------------------------------------------------
 *  Configuration
 *  ----------------------------------------------------------------*/

const PHONE_1 = "07 58 45 99 00";
const PHONE_1_HREF = "tel:+33758459900";
const PHONE_2 = "06 29 63 40 45";
const PHONE_2_HREF = "tel:+33629634045";
const TARGET_EMAIL = "ecocvc69@gmail.com";

type ServiceKey =
  | "climatisation"
  | "froid"
  | "vitrines"
  | "ventilation"
  | "maintenance"
  | "depannage";

type Step =
  | "welcome"
  | "questions"
  | "coordinates"
  | "summary";

type Answer = { question: string; value: string };

interface QuestionDef {
  id: string;
  label: string;
  hint?: string;
  type: "choice" | "text" | "number";
  options?: string[];
  placeholder?: string;
  unit?: string;
}

const SERVICES: {
  key: ServiceKey;
  label: string;
  description: string;
  icon: typeof Snowflake;
  accent: string; // tailwind text color class
  bg: string;    // tailwind bg color class for icon tile
}[] = [
  {
    key: "climatisation",
    label: "Climatisation / PAC",
    description: "Pose ou remplacement (mono ou multi-split)",
    icon: Snowflake,
    accent: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    key: "froid",
    label: "Chambre froide",
    description: "Positif, négatif, sur-mesure",
    icon: Refrigerator,
    accent: "text-brand-sky",
    bg: "bg-brand-sky/10",
  },
  {
    key: "vitrines",
    label: "Vitrines réfrigérées",
    description: "Boucherie, boulangerie, traiteur",
    icon: ShoppingBag,
    accent: "text-brand-green",
    bg: "bg-brand-green/10",
  },
  {
    key: "ventilation",
    label: "Ventilation / VMC",
    description: "Résidentiel, cuisine pro, désenfumage",
    icon: Wind,
    accent: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    key: "maintenance",
    label: "Entretien annuel",
    description: "Contrat de maintenance préventive",
    icon: Settings,
    accent: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    key: "depannage",
    label: "Dépannage urgent",
    description: "Panne, fuite, code erreur — 7j/7",
    icon: LifeBuoy,
    accent: "text-brand-red",
    bg: "bg-brand-red/10",
  },
];

const FLOWS: Record<ServiceKey, QuestionDef[]> = {
  climatisation: [
    {
      id: "logement",
      label: "Quel type de logement ?",
      type: "choice",
      options: ["Maison individuelle", "Appartement", "Local pro / bureau", "Restaurant / commerce"],
    },
    {
      id: "surface",
      label: "Surface totale à climatiser",
      hint: "En m² au sol — une estimation suffit",
      type: "number",
      placeholder: "Ex. 80",
      unit: "m²",
    },
    {
      id: "pieces",
      label: "Combien de pièces séparées à climatiser ?",
      type: "choice",
      options: ["1 (mono-split)", "2 (bi-split)", "3 (tri-split)", "4 ou plus (multi-split)"],
    },
    {
      id: "isolation",
      label: "Niveau d'isolation du bâtiment",
      type: "choice",
      options: [
        "Récente / RT 2012 / RE 2020",
        "Rénovée correctement",
        "Standard (années 90-2000)",
        "Ancienne / peu isolée",
      ],
    },
    {
      id: "usage",
      label: "Usage principal",
      type: "choice",
      options: ["Rafraîchir l'été", "Chauffer l'hiver (PAC)", "Les deux (réversible)"],
    },
    {
      id: "delai",
      label: "Délai souhaité pour les travaux",
      type: "choice",
      options: ["Sous 2 semaines", "Dans le mois", "Dans les 3 mois", "Pas pressé"],
    },
  ],
  froid: [
    {
      id: "type",
      label: "Type de chambre froide",
      type: "choice",
      options: [
        "Positif (+2 °C / +8 °C)",
        "Négatif (−18 °C / −22 °C)",
        "Mixte / les deux",
        "Je ne sais pas encore",
      ],
    },
    {
      id: "volume",
      label: "Volume estimé de la chambre",
      type: "choice",
      options: ["< 5 m³", "5 à 10 m³", "10 à 20 m³", "20 à 50 m³", "> 50 m³"],
    },
    {
      id: "produits",
      label: "Produits stockés",
      type: "choice",
      options: [
        "Viande / boucherie",
        "Poisson / marée",
        "Fruits & légumes",
        "Produits laitiers",
        "Surgelés",
        "Mixte",
      ],
    },
    {
      id: "implantation",
      label: "Implantation",
      type: "choice",
      options: ["Intérieur d'un local", "Extérieur (avec auvent)", "Container / mobile"],
    },
    {
      id: "delai",
      label: "Délai souhaité",
      type: "choice",
      options: ["Sous 1 mois", "1 à 3 mois", "Plus de 3 mois"],
    },
  ],
  vitrines: [
    {
      id: "metier",
      label: "Votre métier",
      type: "choice",
      options: [
        "Boucherie / charcuterie",
        "Boulangerie / pâtisserie",
        "Traiteur",
        "Fromagerie",
        "Poissonnerie",
        "Épicerie / autre",
      ],
    },
    {
      id: "lineaire",
      label: "Linéaire de vitrine souhaité",
      hint: "Longueur totale en mètres",
      type: "number",
      placeholder: "Ex. 3",
      unit: "m",
    },
    {
      id: "config",
      label: "Configuration",
      type: "choice",
      options: ["Vitrine droite", "Avec angle (90°)", "En îlot central", "Sur-mesure complexe"],
    },
    {
      id: "esthetique",
      label: "Style esthétique recherché",
      type: "choice",
      options: ["Bois / chaleureux", "Inox / pro", "Noir mat moderne", "À définir avec vous"],
    },
  ],
  ventilation: [
    {
      id: "contexte",
      label: "Contexte de l'installation",
      type: "choice",
      options: [
        "Maison / appartement (VMC)",
        "Bureaux / commerce",
        "Cuisine professionnelle",
        "Désenfumage / sécurité incendie",
        "Industrie / atelier",
      ],
    },
    {
      id: "surface",
      label: "Surface du local concerné",
      type: "number",
      placeholder: "Ex. 120",
      unit: "m²",
    },
    {
      id: "besoin",
      label: "Besoin principal",
      type: "choice",
      options: [
        "Renouveler l'air",
        "Évacuer humidité / odeurs",
        "Extraction graisses (cuisine)",
        "Conformité réglementaire",
      ],
    },
    {
      id: "existant",
      label: "Y a-t-il un système existant ?",
      type: "choice",
      options: ["Aucun, neuf", "Oui, à remplacer", "Oui, à faire évoluer"],
    },
  ],
  maintenance: [
    {
      id: "nbsplits",
      label: "Combien de splits / unités intérieures ?",
      type: "choice",
      options: ["1", "2", "3 à 5", "6 à 10", "Plus de 10"],
    },
    {
      id: "type",
      label: "Type d'installation",
      type: "choice",
      options: ["Climatisation résidentielle", "Climatisation commerciale", "PAC air-air", "Chambre froide / vitrine", "Mixte"],
    },
    {
      id: "marque",
      label: "Marque(s) installée(s)",
      type: "choice",
      options: ["AUX", "Daikin", "Mitsubishi", "Atlantic / Toshiba", "Autre / je ne sais pas"],
    },
    {
      id: "formule",
      label: "Formule envisagée",
      type: "choice",
      options: ["Essentiel (89 €)", "Confort (149 €)", "Sérénité (349 €)", "À conseiller selon mon cas"],
    },
  ],
  depannage: [
    {
      id: "symptome",
      label: "Quel est le symptôme principal ?",
      type: "choice",
      options: [
        "Ne fait plus de froid / chaud",
        "Fuite d'eau intérieure",
        "Bruits anormaux",
        "Odeurs désagréables",
        "Code erreur affiché",
        "Ne démarre plus du tout",
      ],
    },
    {
      id: "appareil",
      label: "Quel appareil est concerné ?",
      type: "choice",
      options: ["Climatisation maison", "Climatisation commerce", "Chambre froide", "Vitrine réfrigérée", "VMC / ventilation"],
    },
    {
      id: "urgence",
      label: "Niveau d'urgence",
      type: "choice",
      options: [
        "Critique — impact métier (restaurant, commerce)",
        "Important — pas de chauffage / clim en pleine saison",
        "Standard — peut attendre quelques jours",
      ],
    },
    {
      id: "anciennete",
      label: "Âge approximatif de l'appareil",
      type: "choice",
      options: ["Moins de 2 ans", "2 à 5 ans", "5 à 10 ans", "Plus de 10 ans", "Je ne sais pas"],
    },
  ],
};

/** ------------------------------------------------------------------
 *  Component
 *  ----------------------------------------------------------------*/

const AdvisorBot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [service, setService] = useState<ServiceKey | null>(null);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [textValue, setTextValue] = useState("");
  const [coords, setCoords] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    note: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open on mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const reset = () => {
    setStep("welcome");
    setService(null);
    setQIndex(0);
    setAnswers([]);
    setTextValue("");
    setCoords({ name: "", email: "", phone: "", zip: "", note: "" });
    setSending(false);
    setSent(false);
    setSendError(null);
  };

  const close = () => {
    setOpen(false);
    // small delay so user doesn't see reset flash
    setTimeout(reset, 250);
  };

  const handleServiceChoice = (key: ServiceKey) => {
    setService(key);
    setStep("questions");
    setQIndex(0);
    setAnswers([]);
  };

  const currentFlow = service ? FLOWS[service] : [];
  const currentQuestion = currentFlow[qIndex];

  const nextQuestion = (rawValue: string) => {
    const value = rawValue.trim();
    if (!value) return;

    const newAnswers = [
      ...answers,
      { question: currentQuestion.label, value },
    ];
    setAnswers(newAnswers);
    setTextValue("");

    if (qIndex + 1 < currentFlow.length) {
      setQIndex(qIndex + 1);
    } else {
      setStep("coordinates");
    }
  };

  const goBack = () => {
    if (step === "questions") {
      if (qIndex === 0) {
        setStep("welcome");
        setService(null);
      } else {
        // remove last answer
        setAnswers(answers.slice(0, -1));
        setQIndex(qIndex - 1);
      }
      setTextValue("");
    } else if (step === "coordinates") {
      setStep("questions");
      setQIndex(currentFlow.length - 1);
      setAnswers(answers.slice(0, -1));
    } else if (step === "summary") {
      setStep("coordinates");
    }
  };

  const validateCoordinates = () => {
    if (!coords.name.trim() || !coords.phone.trim()) return false;
    return true;
  };

  const submitCoordinates = () => {
    if (!validateCoordinates()) return;
    setStep("summary");
  };

  const buildEmailBody = () => {
    const serviceLabel =
      SERVICES.find((s) => s.key === service)?.label || "Demande générale";
    const lines: string[] = [
      "Bonjour,",
      "",
      `Je vous contacte via l'assistant en ligne pour : ${serviceLabel}.`,
      "",
      "Mes réponses :",
      ...answers.map((a) => `• ${a.question} : ${a.value}`),
      "",
      "Mes coordonnées :",
      `• Nom : ${coords.name}`,
      `• Téléphone : ${coords.phone}`,
      coords.email ? `• Email : ${coords.email}` : "",
      coords.zip ? `• Code postal : ${coords.zip}` : "",
      coords.note ? `\nMessage complémentaire :\n${coords.note}` : "",
      "",
      "Merci de me recontacter pour finaliser le devis / l'étude.",
      "",
      "Cordialement,",
      coords.name,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const buildEmailSubject = () => {
    const serviceLabel =
      SERVICES.find((s) => s.key === service)?.label || "Demande";
    return `[eco cvc] Demande ${serviceLabel} — ${coords.name}`;
  };

  const mailHref = () => {
    const subject = encodeURIComponent(buildEmailSubject());
    const body = encodeURIComponent(buildEmailBody());
    return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
  };

  /**
   * Envoi direct via le helper unifié submitForm (Web3Forms si clé,
   * sinon Formsubmit.co, sinon mailto en dernier recours).
   */
  const sendDirect = async () => {
    setSendError(null);
    setSending(true);
    try {
      const result = await submitForm({
        subject: buildEmailSubject(),
        fields: {
          message: buildEmailBody(),
          service: SERVICES.find((s) => s.key === service)?.label || "Demande",
          nom: coords.name,
          email: coords.email,
          telephone: coords.phone,
          code_postal: coords.zip,
          note: coords.note,
          ...Object.fromEntries(answers.map((a, i) => [`q${i + 1}_${a.question.slice(0, 30)}`, a.value])),
        },
      });
      if (result.ok) {
        setSent(true);
      } else {
        throw new Error(result.message || "Erreur d'envoi");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erreur d'envoi";
      setSendError(msg);
    } finally {
      setSending(false);
    }
  };

  const totalSteps = currentFlow.length;
  const progress =
    step === "welcome"
      ? 0
      : step === "questions"
      ? Math.round(((qIndex + 1) / (totalSteps + 2)) * 100)
      : step === "coordinates"
      ? Math.round(((totalSteps + 1) / (totalSteps + 2)) * 100)
      : 100;

  /** -------- Render helpers ----------------------------------------- */

  const renderWelcome = () => (
    <motion.div
      key="welcome"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-4"
    >
      <div className="bg-gradient-to-br from-brand-blue/10 via-brand-sky/10 to-transparent rounded-2xl p-5 border border-brand-blue/20">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 shrink-0 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lifted">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 mb-1">
              Bonjour ! Je suis Léo, votre assistant eco cvc.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Je vous aide à préparer votre demande en 30 secondes — devis,
              étude technique ou conseil. Que puis-je faire pour vous ?
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {SERVICES.map((s) => (
          <button
            key={s.key}
            onClick={() => handleServiceChoice(s.key)}
            className="group flex items-start gap-3 p-3.5 rounded-xl border border-border bg-white hover:border-brand-blue/40 hover:shadow-soft text-left transition-all"
          >
            <div
              className={`shrink-0 w-9 h-9 rounded-lg ${s.bg} ${s.accent} flex items-center justify-center group-hover:scale-105 transition-transform`}
            >
              <s.icon className="w-[18px] h-[18px]" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-slate-900 leading-tight mb-0.5">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-500 leading-snug">
                {s.description}
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1.5 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" />
          </button>
        ))}
      </div>

      <div className="pt-3 border-t border-border">
        <p className="text-[11px] text-slate-500 mb-2 font-semibold tracking-wider uppercase">
          Ou contactez-nous directement
        </p>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={PHONE_1_HREF}
            className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-brand-red text-white text-xs font-bold hover:bg-red-600 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE_1}
          </a>
          <a
            href={PHONE_2_HREF}
            className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full border-2 border-brand-red text-brand-red text-xs font-bold hover:bg-brand-red/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE_2}
          </a>
        </div>
      </div>
    </motion.div>
  );

  const renderQuestions = () => {
    if (!currentQuestion) return null;
    return (
      <motion.div
        key={`q-${qIndex}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-4"
      >
        {/* prior answers transcript */}
        {answers.length > 0 && (
          <div className="space-y-2 pb-2 border-b border-border">
            {answers.map((a, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-slate-500">{a.question} : </span>
                <span className="font-semibold text-slate-700">{a.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="bg-slate-50 rounded-2xl p-4 border border-border">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 shrink-0 rounded-full bg-brand-blue text-white flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900 leading-snug">
                {currentQuestion.label}
              </p>
              {currentQuestion.hint && (
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentQuestion.hint}
                </p>
              )}
            </div>
          </div>
        </div>

        {currentQuestion.type === "choice" ? (
          <div className="space-y-2">
            {currentQuestion.options!.map((opt) => (
              <button
                key={opt}
                onClick={() => nextQuestion(opt)}
                className="w-full text-left text-sm px-4 py-3 rounded-xl border border-border bg-white hover:border-brand-blue hover:bg-brand-blue/5 transition-all flex items-center justify-between gap-2 group"
              >
                <span className="font-medium text-slate-700 group-hover:text-brand-bluedark">
                  {opt}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type={currentQuestion.type === "number" ? "number" : "text"}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") nextQuestion(textValue);
                }}
                placeholder={currentQuestion.placeholder}
                autoFocus
                className="w-full px-4 py-3 pr-20 rounded-xl border-2 border-border bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
              />
              {currentQuestion.unit && (
                <span className="absolute right-12 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                  {currentQuestion.unit}
                </span>
              )}
              {currentQuestion.type !== "number" && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <MicButton
                    value={textValue}
                    onChange={setTextValue}
                    size={32}
                    title="Dicter la réponse"
                  />
                </div>
              )}
            </div>
            <button
              onClick={() => nextQuestion(textValue)}
              disabled={!textValue.trim()}
              className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue text-white hover:bg-brand-bluedark disabled:bg-slate-200 disabled:text-slate-400 transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        )}
      </motion.div>
    );
  };

  const renderCoordinates = () => (
    <motion.div
      key="coords"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div className="bg-slate-50 rounded-2xl p-4 border border-border">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 shrink-0 rounded-full bg-brand-blue text-white flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 leading-snug">
              Parfait ! Pour finaliser votre demande, j'ai besoin de quelques
              coordonnées.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Vous pourrez ensuite envoyer le récap par mail ou nous appeler
              directement.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          value={coords.name}
          onChange={(e) => setCoords({ ...coords, name: e.target.value })}
          placeholder="Nom complet *"
          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="tel"
            value={coords.phone}
            onChange={(e) => setCoords({ ...coords, phone: e.target.value })}
            placeholder="Téléphone *"
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
          />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}"
            value={coords.zip}
            onChange={(e) => setCoords({ ...coords, zip: e.target.value })}
            placeholder="Code postal"
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
          />
        </div>
        <input
          type="email"
          value={coords.email}
          onChange={(e) => setCoords({ ...coords, email: e.target.value })}
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
        />
        <div className="relative">
          <textarea
            value={coords.note}
            onChange={(e) => setCoords({ ...coords, note: e.target.value })}
            placeholder="Précision libre (optionnel)…"
            rows={2}
            className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-border bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none"
          />
          <div className="absolute right-2 top-2">
            <MicButton
              value={coords.note}
              onChange={(next) => setCoords({ ...coords, note: next })}
              size={32}
              title="Dicter la précision"
            />
          </div>
        </div>
        <p className="text-[11px] text-slate-500">
          * champs obligatoires. Vos données ne servent qu'à vous recontacter.
        </p>
      </div>

      <button
        onClick={submitCoordinates}
        disabled={!validateCoordinates()}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue hover:bg-brand-bluedark disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors shadow-lifted"
      >
        Voir le récap & envoyer
        <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );

  const renderSummary = () => {
    const serviceLabel =
      SERVICES.find((s) => s.key === service)?.label || "Demande";
    return (
      <motion.div
        key="summary"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="space-y-4"
      >
        <div className="text-center py-2">
          <div className="w-12 h-12 rounded-full bg-brand-green/15 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6 text-brand-green" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900 mb-1">
            Récap de votre demande
          </h3>
          <p className="text-xs text-slate-500">
            Vérifiez puis envoyez à un technicien.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-slate-50 p-4 text-xs space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-border">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span className="font-bold text-slate-900">{serviceLabel}</span>
          </div>
          <ul className="space-y-1.5">
            {answers.map((a, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-slate-500 shrink-0">{a.question} :</span>
                <span className="font-semibold text-slate-800">{a.value}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2 mt-2 border-t border-border space-y-1">
            <div className="flex gap-2">
              <span className="text-slate-500">Nom :</span>
              <span className="font-semibold text-slate-800">{coords.name}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-500">Téléphone :</span>
              <span className="font-semibold text-slate-800">{coords.phone}</span>
            </div>
            {coords.email && (
              <div className="flex gap-2">
                <span className="text-slate-500">Email :</span>
                <span className="font-semibold text-slate-800">
                  {coords.email}
                </span>
              </div>
            )}
            {coords.zip && (
              <div className="flex gap-2">
                <span className="text-slate-500">Code postal :</span>
                <span className="font-semibold text-slate-800">{coords.zip}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          {sent ? (
            <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-brand-green mx-auto mb-2" />
              <div className="text-sm font-bold text-slate-900 mb-1">Demande envoyée !</div>
              <p className="text-xs text-slate-600">
                Un technicien vous rappelle au {coords.phone} sous 24h ouvrées.
              </p>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={sendDirect}
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue hover:bg-brand-bluedark text-white font-bold text-sm transition-colors shadow-lifted disabled:opacity-60"
              >
                <Mail className="w-4 h-4" />
                {sending ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
              {sendError && (
                <a
                  href={mailHref()}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-brand-red/30 text-brand-red font-semibold text-xs hover:bg-brand-red/5 transition-colors"
                >
                  Échec — ouvrir mon client mail à la place
                </a>
              )}
            </>
          )}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={PHONE_1_HREF}
              className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-full bg-brand-red text-white text-xs font-bold hover:bg-red-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE_1}
            </a>
            <a
              href={PHONE_2_HREF}
              className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-full border-2 border-brand-red text-brand-red text-xs font-bold hover:bg-brand-red/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE_2}
            </a>
          </div>
          <button
            onClick={reset}
            className="w-full text-xs text-slate-500 hover:text-brand-blue py-2 transition-colors"
          >
            Recommencer une demande
          </button>
        </div>
      </motion.div>
    );
  };

  /** -------- Floating button + panel ------------------------------- */

  return (
    <>
      {/* Floating launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="bot-fab"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 18 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 pl-3 pr-5 py-3 rounded-full bg-gradient-to-br from-brand-blue to-brand-bluedark text-white shadow-lifted hover:shadow-xl"
            aria-label="Ouvrir l'assistant eco cvc"
          >
            <span className="relative flex w-9 h-9 rounded-full bg-white/15 items-center justify-center">
              <motion.span
                className="absolute inset-0 rounded-full bg-white/25"
                animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
              <Bot className="w-5 h-5 relative" />
            </span>
            <span className="text-sm font-bold whitespace-nowrap hidden sm:inline">
              Conseil & devis
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop on mobile */}
            <motion.div
              key="bot-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-[70] bg-slate-900/40 backdrop-blur-sm md:hidden"
            />

            <motion.div
              key="bot-panel"
              ref={panelRef}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              className="fixed z-[71] bg-white shadow-xl flex flex-col overflow-hidden
                         inset-x-3 bottom-3 top-3 rounded-2xl
                         md:inset-x-auto md:right-6 md:bottom-6 md:top-auto md:w-[420px] md:h-[640px] md:max-h-[calc(100vh-3rem)]"
            >
              {/* Header */}
              <div className="shrink-0 px-5 py-4 bg-gradient-to-br from-brand-blue to-brand-bluedark text-white">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-extrabold truncate">
                        Léo — Assistant eco cvc
                      </div>
                      <div className="text-[11px] text-white/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-soft" />
                        En ligne · Réponse sous 24 h
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={close}
                    className="w-8 h-8 rounded-full hover:bg-white/15 flex items-center justify-center shrink-0"
                    aria-label="Fermer l'assistant"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Progress bar */}
                {step !== "welcome" && (
                  <div className="mt-3">
                    <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-white/80 mt-1.5">
                      <button
                        onClick={goBack}
                        className="inline-flex items-center gap-1 hover:text-white transition-colors"
                      >
                        <ArrowLeft className="w-3 h-3" />
                        Retour
                      </button>
                      <span>
                        {step === "questions" && `Étape ${qIndex + 1} / ${totalSteps + 2}`}
                        {step === "coordinates" && `Étape ${totalSteps + 1} / ${totalSteps + 2}`}
                        {step === "summary" && "Terminé"}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-5 py-5">
                <AnimatePresence mode="wait">
                  {step === "welcome" && renderWelcome()}
                  {step === "questions" && renderQuestions()}
                  {step === "coordinates" && renderCoordinates()}
                  {step === "summary" && renderSummary()}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="shrink-0 px-5 py-3 bg-slate-50 border-t border-border text-[10px] text-slate-500 flex items-center justify-between">
                <span>Propulsé par eco cvc</span>
                <span className="inline-flex items-center gap-1 text-brand-blue font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Conseil gratuit
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdvisorBot;
