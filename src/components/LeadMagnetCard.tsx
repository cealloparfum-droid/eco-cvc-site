/**
 * LeadMagnetCard — Capture email/téléphone contre téléchargement
 * du Guide PAC Isère 2026 (ou tout autre lead magnet).
 *
 * Position : injectable dans n'importe quelle page (ville, article,
 * calculateur, etc.). Le lead est envoyé via submitForm() + le PDF
 * s'ouvre dans un nouvel onglet après soumission réussie.
 *
 * Objectif conversion : 12-20% des visiteurs ciblés laissent leur
 * contact contre le guide gratuit. Levier #1 pour exploser les leads.
 */

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, Check, Loader2 } from "lucide-react";
import { submitForm } from "@/lib/submit-form";
import { toast } from "@/components/ui/use-toast";

interface LeadMagnetCardProps {
  /** Source (slug page) pour tracer l'origine du lead */
  source: string;
  /** URL du PDF à télécharger après capture */
  pdfUrl?: string;
  /** Titre principal */
  title?: string;
  /** Sous-titre */
  subtitle?: string;
  /** Nom du guide (affiché dans le bouton et l'accroche) */
  guideName?: string;
  /** Liste des bénéfices à afficher */
  bullets?: string[];
  /** Variant compact pour sidebar */
  variant?: "default" | "compact" | "banner";
  /** Classe CSS additionnelle */
  className?: string;
}

const LeadMagnetCard = ({
  source,
  pdfUrl = "/guide-pac-isere-2026.pdf",
  title = "Guide PAC Isère 2026",
  subtitle = "Le guide complet (10 pages) pour ne pas se faire avoir : aides 2026, marques fiables, arnaques à éviter, checklist signature.",
  guideName = "Guide PAC Isère 2026",
  bullets = [
    "Aides MaPrimeRénov' + CEE 2026 par profil",
    "7 arnaques à éviter absolument",
    "Marques fiables vs marques à fuir",
    "Checklist avant de signer un devis",
  ],
  variant = "default",
  className = "",
}: LeadMagnetCardProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || (!phone && !name)) {
      toast({
        title: "Encore un petit champ",
        description: "Renseignez votre prénom et email pour recevoir le guide.",
      });
      return;
    }
    setSubmitting(true);
    try {
      const result = await submitForm({
        subject: `📘 Téléchargement guide PDF — ${guideName}`,
        fields: {
          source: `lead_magnet_${source}`,
          guide: guideName,
          prenom: name,
          email,
          telephone: phone,
          message: `Demande de téléchargement du guide « ${guideName} »`,
        },
      });
      if (!result.ok) throw new Error("Échec envoi");
      setSubmitted(true);
      toast({
        title: "Guide envoyé !",
        description: "Le téléchargement démarre. Vérifiez aussi votre boîte mail.",
      });
      // Ouvre le PDF dans un nouvel onglet
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    } catch {
      toast({
        title: "Petit souci d'envoi",
        description: "Réessayez ou appelez-nous au 06 29 63 40 45.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const isBanner = variant === "banner";
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-3xl border-2 border-brand-green/30 bg-gradient-to-br from-brand-green/8 via-emerald-50 to-brand-blue/5 ${
        isBanner ? "p-6 md:p-7" : isCompact ? "p-5" : "p-7 md:p-9"
      } ${className}`}
    >
      {/* Halo décoratif */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl -translate-y-32 translate-x-20 pointer-events-none" />

      <div className={`relative ${isBanner ? "md:grid md:grid-cols-[1.2fr_1fr] md:gap-8 md:items-center" : ""}`}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green text-white text-[11px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Gratuit · PDF 10 pages
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-2">
            {title}
          </h3>
          <p className="text-sm text-slate-700 mb-4 leading-relaxed">{subtitle}</p>

          {!isCompact && bullets.length > 0 && (
            <ul className="space-y-1.5 mb-5 text-sm text-slate-700">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={isBanner ? "mt-5 md:mt-0" : ""}>
          {submitted ? (
            <div className="rounded-2xl bg-white p-5 border border-brand-green/30 text-center">
              <Check className="w-10 h-10 text-brand-green mx-auto mb-2" />
              <p className="font-bold text-slate-900">Guide envoyé !</p>
              <p className="text-xs text-slate-600 mt-1">
                Téléchargement en cours · Email reçu sous 2 min
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-2.5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Prénom"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                required
                autoComplete="given-name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                required
                autoComplete="email"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Téléphone (optionnel)"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                autoComplete="tel"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-green text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-lifted disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Recevoir le guide gratuit
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-500 text-center">
                Pas de spam · Désinscription en 1 clic · Données RGPD-friendly
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LeadMagnetCard;
