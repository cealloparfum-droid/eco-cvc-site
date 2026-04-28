import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Send, CheckCircle2, ShieldCheck, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { submitForm } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

/**
 * VoiceLeadSection — section vocale visible sur la page d'accueil.
 * Le visiteur clique sur le micro, décrit son projet à voix haute,
 * complète son email + téléphone, et envoie. Lead direct chez ECO CVC.
 */

const VoiceLeadSection = () => {
  const { toast } = useToast();
  const [transcript, setTranscript] = useState("");
  const [contact, setContact] = useState({ email: "", phone: "", zip: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const baseRef = useRef("");

  const { supported, listening, error, start, stop } = useSpeechRecognition({
    onTranscript: (chunk, isFinal) => {
      const trimmed = chunk.trim();
      if (!trimmed) return;
      const base = baseRef.current;
      const sep = base && !base.endsWith(" ") ? " " : "";
      const next = base + sep + trimmed;
      setTranscript(next);
      if (isFinal) baseRef.current = next;
    },
  });

  const handleMic = () => {
    if (listening) {
      stop();
      return;
    }
    baseRef.current = transcript;
    start();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transcript.trim()) {
      toast({ title: "Décrivez d'abord votre projet", description: "Cliquez sur le micro et parlez." });
      return;
    }
    setLoading(true);
    try {
      const result = await submitForm({
        subject: `[eco cvc · vocal] Demande projet — ${contact.zip || "?"}`,
        fields: {
          source: "voice_lead_homepage",
          projet_dicte: transcript,
          email: contact.email,
          telephone: contact.phone,
          code_postal: contact.zip,
        },
      });
      if (result.ok) {
        setSent(true);
        toast({ title: "Demande reçue", description: "Nous vous rappelons sous 24h ouvrées." });
      }
    } catch {
      toast({
        title: "Problème d'envoi",
        description: "Appelez-nous au 07 58 45 99 00.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Auto-clear silence error after 3s for clean UX
  const [hideError, setHideError] = useState(false);
  useEffect(() => {
    if (!error) return;
    setHideError(false);
    const t = setTimeout(() => setHideError(true), 3000);
    return () => clearTimeout(t);
  }, [error]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-white to-brand-green/5 -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-sky/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Nouveau — devis vocal
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
              Décrivez votre projet <span className="text-gradient-brand">à voix haute</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pas envie de remplir un formulaire ? Cliquez sur le micro et expliquez-nous votre besoin en quelques phrases : type de logement, surface, équipement actuel… On s'occupe du reste.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-brand-blue/15 shadow-2xl p-7 md:p-10 relative"
        >
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Demande reçue, merci</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Un de nos artisans RGE vous rappelle sous 24h ouvrées pour planifier la visite technique.
              </p>
            </div>
          ) : !supported ? (
            <div className="text-center py-6">
              <MicOff className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">Votre navigateur ne supporte pas la dictée vocale</h3>
              <p className="text-sm text-muted-foreground mb-4">
                La commande vocale fonctionne sur Chrome, Safari et Edge. Firefox n'est pas compatible.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors"
              >
                Utiliser le formulaire classique
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Mic + transcript */}
              <div className="flex flex-col items-center gap-5">
                <button
                  type="button"
                  onClick={handleMic}
                  className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all shadow-lg ${
                    listening
                      ? "bg-red-500 text-white"
                      : "bg-gradient-to-br from-brand-blue to-brand-bluedark text-white hover:scale-105"
                  }`}
                  aria-label={listening ? "Arrêter l'écoute" : "Démarrer l'écoute"}
                >
                  <Mic className="w-10 h-10" />
                  {listening && (
                    <>
                      <motion.span
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full bg-red-500/40"
                      />
                      <motion.span
                        initial={{ scale: 1, opacity: 0.4 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                        className="absolute inset-0 rounded-full bg-red-500/30"
                      />
                    </>
                  )}
                </button>

                <div className="text-center">
                  {listening ? (
                    <p className="text-sm font-semibold text-red-600">
                      🎙️ J'écoute… parlez librement
                    </p>
                  ) : transcript ? (
                    <p className="text-sm text-muted-foreground">
                      Cliquez à nouveau pour ajouter, ou complétez ci-dessous.
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Cliquez sur le micro et décrivez votre projet
                    </p>
                  )}

                  <AnimatePresence>
                    {error && !hideError && !listening && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-600 mt-2"
                      >
                        {error === "not-allowed"
                          ? "Micro bloqué — autorisez-le dans les réglages du navigateur."
                          : error === "no-speech"
                          ? "Aucune voix détectée — réessayez."
                          : "Erreur micro — réessayez."}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Transcript area */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Votre projet (transcription en direct)
                </label>
                <textarea
                  value={transcript}
                  onChange={(e) => {
                    setTranscript(e.target.value);
                    baseRef.current = e.target.value;
                  }}
                  placeholder="Cliquez sur le micro et parlez, ou écrivez directement votre projet ici…"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition resize-none"
                />
              </div>

              {/* Contact fields */}
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    placeholder="Email"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition text-sm"
                  />
                </div>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="tel"
                    required
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    placeholder="Téléphone"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition text-sm"
                  />
                </div>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    value={contact.zip}
                    onChange={(e) => setContact({ ...contact, zip: e.target.value })}
                    placeholder="Code postal"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-border bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !transcript.trim()}
                className="w-full py-3.5 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
              >
                {loading ? "Envoi…" : <>Envoyer ma demande <Send className="w-4 h-4" /></>}
              </button>

              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                Données utilisées uniquement pour vous rappeler. Pas de spam, pas de revente.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceLeadSection;
