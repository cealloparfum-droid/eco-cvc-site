import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, AlertTriangle, Snowflake, Sun } from "lucide-react";

/**
 * Bandeau d'urgence saisonnière auto-adaptatif :
 *  - Hiver (déc-fév) : message dépannage chauffage urgent
 *  - Été (juin-août) : message canicule / clim
 *  - Reste de l'année : caché
 *
 * Affiché 1 fois par session (sessionStorage) — non agressif.
 */

const STORAGE_KEY = "ecocvc-seasonal-banner-dismissed";

const SeasonalUrgencyBanner = () => {
  const [visible, setVisible] = useState(false);
  const [season, setSeason] = useState<"winter" | "summer" | null>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const month = new Date().getMonth(); // 0 = janvier
    let s: "winter" | "summer" | null = null;
    if (month <= 1 || month === 11) s = "winter"; // déc, jan, fév
    else if (month >= 5 && month <= 7) s = "summer"; // juin, juil, août

    if (!s) return;
    setSeason(s);
    // Petit délai pour laisser la home se rendre avant
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!season) return null;

  const config = season === "winter"
    ? {
        icon: Snowflake,
        bg: "from-brand-blue to-brand-bluedark",
        title: "Pompe à chaleur en panne ?",
        body: "Intervention sous 24h en Isère et Rhône-Alpes — appelez maintenant.",
      }
    : {
        icon: Sun,
        bg: "from-orange-500 to-red-600",
        title: "Canicule annoncée — clim disponible sous 48h",
        body: "Mono-split posé en 1 jour, devis gratuit.",
      };

  const Icon = config.icon;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-[55]"
        >
          <div className={`relative rounded-2xl bg-gradient-to-br ${config.bg} text-white shadow-2xl p-5`}>
            <button
              onClick={close}
              aria-label="Fermer"
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-3 pr-6">
              <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display text-base font-bold leading-tight mb-1">
                  {config.title}
                </div>
                <p className="text-xs text-white/85 leading-relaxed mb-3">{config.body}</p>
                <a
                  href="tel:+33758459900"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-foreground font-bold text-xs hover:bg-white/90 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  07 58 45 99 00
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SeasonalUrgencyBanner;
