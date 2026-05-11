/**
 * Bandeau urgence MaPrimeRénov' avec compte à rebours dynamique.
 * Affiché en haut de TOUTES les pages (sauf si dismiss en session).
 *
 * Objectif conversion : créer un sentiment d'urgence basé sur la fin
 * de l'année (les aides 2026 ne sont garanties que jusqu'au 31/12/2026,
 * et les dossiers MaPrimeRénov' déposés en fin d'année subissent souvent
 * des retards de plusieurs mois).
 *
 * CTA principal → /simulateur-aides (capture lead).
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, X, Clock, ArrowRight } from "lucide-react";

const STORAGE_KEY = "ecocvc-maprimerenov-banner-dismissed-v1";

// Date butoir : 31 décembre 2026 (fin officielle du barème 2026)
const DEADLINE = new Date(2026, 11, 31, 23, 59, 59); // mois 11 = décembre

function getDaysLeft(): number {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

const MaPrimeRenovCountdown = () => {
  const [visible, setVisible] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    setDaysLeft(getDaysLeft());
    // Petit délai pour ne pas perturber le rendu initial
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Recalcule chaque heure (pas critique mais propre)
  useEffect(() => {
    const i = setInterval(() => setDaysLeft(getDaysLeft()), 60 * 60 * 1000);
    return () => clearInterval(i);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (daysLeft <= 0) return null;

  // Messages dynamiques selon l'urgence
  const urgency = daysLeft <= 30 ? "critique" : daysLeft <= 90 ? "haute" : "normale";
  const message =
    urgency === "critique"
      ? `Plus que ${daysLeft} jours pour bénéficier des aides MaPrimeRénov' 2026 (jusqu'à 9 000 €)`
      : urgency === "haute"
        ? `${daysLeft} jours restants — Profitez des aides MaPrimeRénov' 2026 (jusqu'à 9 000 €)`
        : `Aides MaPrimeRénov' 2026 actives — jusqu'à 9 000 € cumulés pour votre PAC`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className={`fixed top-0 left-0 right-0 z-[80] ${
            urgency === "critique"
              ? "bg-gradient-to-r from-brand-red via-red-600 to-brand-red"
              : urgency === "haute"
                ? "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"
                : "bg-gradient-to-r from-brand-green via-emerald-600 to-brand-green"
          } text-white shadow-md`}
        >
          <div className="container mx-auto max-w-7xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/20 items-center justify-center shrink-0">
              {urgency === "normale" ? <Sparkles className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
            </div>

            <p className="flex-1 text-xs sm:text-sm font-semibold leading-tight">
              {message}
            </p>

            <Link
              to="/simulateur-aides"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-white text-foreground text-xs sm:text-sm font-bold hover:bg-slate-100 transition-colors shrink-0"
            >
              Simuler mes aides
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* CTA mobile compact */}
            <Link
              to="/simulateur-aides"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white text-foreground text-[11px] font-bold shrink-0"
            >
              Simuler
            </Link>

            <button
              onClick={close}
              aria-label="Fermer"
              className="shrink-0 w-7 h-7 rounded-full hover:bg-white/15 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MaPrimeRenovCountdown;
