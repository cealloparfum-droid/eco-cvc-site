/**
 * Bannière cookies conforme RGPD / CNIL 2026.
 *
 * Fonctionnement :
 *  - À la 1re visite : bannière en bas avec 3 boutons (Tout accepter,
 *    Tout refuser, Personnaliser).
 *  - Choix stocké dans localStorage (1 an).
 *  - Si refus → Microsoft Clarity et Google Analytics ne sont PAS chargés.
 *  - Si acceptation partielle → seuls les cookies acceptés sont chargés.
 *  - Le user peut modifier son choix à tout moment via /confidentialite.
 *
 * Catégories proposées :
 *  - Essentiels (toujours activés, pas de choix)
 *  - Mesure d'audience (Clarity, GA4)
 *  - Marketing (Meta Pixel, Google Ads — si ajoutés plus tard)
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Cookie, Check, X, Settings } from "lucide-react";

const STORAGE_KEY = "ecocvc-cookie-consent-v1";
const CONSENT_TTL_DAYS = 365;

type ConsentLevel = "all" | "essential" | "custom";

interface ConsentRecord {
  level: ConsentLevel;
  essentials: true; // toujours true
  analytics: boolean;
  marketing: boolean;
  decidedAt: string; // ISO date
}

/** API publique pour les autres composants : savoir si le consentement est donné */
export function hasConsent(category: "analytics" | "marketing"): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const r = JSON.parse(raw) as ConsentRecord;
    // Vérifier la fraîcheur (1 an max)
    const decidedAt = new Date(r.decidedAt).getTime();
    if (Date.now() - decidedAt > CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000) return false;
    return r[category] === true;
  } catch {
    return false;
  }
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        // 1re visite — affiche après un court délai pour ne pas perturber le rendu
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
      const r = JSON.parse(raw) as ConsentRecord;
      const decidedAt = new Date(r.decidedAt).getTime();
      // Si le consentement a expiré (>1 an), redemande
      if (Date.now() - decidedAt > CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (record: Omit<ConsentRecord, "decidedAt" | "essentials">) => {
    const full: ConsentRecord = {
      ...record,
      essentials: true,
      decidedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    // Émet un événement pour que les autres composants puissent recharger leur tracking
    window.dispatchEvent(new CustomEvent("ecocvc:consent-updated", { detail: full }));
    setVisible(false);
  };

  const acceptAll = () => save({ level: "all", analytics: true, marketing: true });
  const refuseAll = () => save({ level: "essential", analytics: false, marketing: false });
  const saveCustom = () =>
    save({ level: "custom", analytics, marketing });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          className="fixed bottom-3 left-3 right-3 md:left-auto md:right-5 md:bottom-5 md:max-w-[440px] z-[90] bg-white rounded-2xl shadow-2xl border-2 border-brand-blue/20 p-5 md:p-6"
          role="dialog"
          aria-label="Bannière de gestion des cookies"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-brand-blue" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-base mb-1">Cookies sur ecocvc.pro</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nous utilisons des cookies pour mesurer l'audience et améliorer votre expérience. Vous gardez le contrôle total —{" "}
                <Link to="/confidentialite" className="text-brand-blue hover:underline">en savoir plus</Link>.
              </p>
            </div>
          </div>

          {showCustom ? (
            <>
              <div className="space-y-2 mb-4 text-sm">
                <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 cursor-not-allowed opacity-70">
                  <input type="checkbox" checked disabled className="mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 text-xs">Essentiels <span className="text-slate-500 font-normal">(obligatoire)</span></div>
                    <div className="text-[11px] text-slate-600">Fonctionnement du site, sécurité, préférences.</div>
                  </div>
                </label>
                <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 cursor-pointer">
                  <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-0.5 accent-brand-blue" />
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 text-xs">Mesure d'audience</div>
                    <div className="text-[11px] text-slate-600">Microsoft Clarity, Google Analytics — anonymisés.</div>
                  </div>
                </label>
                <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 cursor-pointer">
                  <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-0.5 accent-brand-blue" />
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 text-xs">Marketing</div>
                    <div className="text-[11px] text-slate-600">Pixels Meta / Google Ads (si configurés).</div>
                  </div>
                </label>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCustom(false)}
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50"
                >
                  Retour
                </button>
                <button
                  onClick={saveCustom}
                  className="flex-1 px-3 py-2 rounded-lg bg-brand-blue text-white text-sm font-bold hover:bg-brand-bluedark"
                >
                  Enregistrer
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={refuseAll}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50"
              >
                <X className="w-4 h-4" /> Tout refuser
              </button>
              <button
                onClick={() => setShowCustom(true)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50"
              >
                <Settings className="w-4 h-4" /> Personnaliser
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-brand-blue text-white text-sm font-bold hover:bg-brand-bluedark"
              >
                <Check className="w-4 h-4" /> Tout accepter
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
