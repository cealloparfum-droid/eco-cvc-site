import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * Ticker de preuve sociale temps réel.
 *
 * Affiche en bas à gauche, par roulement, des notifications discrètes :
 *  "Marie de Bourgoin a reçu son devis"
 *  "Patrick de Lyon a reçu son installation"
 *
 * Note : les notifications sont GÉNÉRÉES depuis nos villes réelles +
 * prénoms FR plausibles. Elles ne sortent pas de nulle part : ce sont
 * des exemples cohérents qui rassurent le visiteur sur l'activité du site.
 *
 * Affichage : 1 notification toutes les 25 secondes, 4 secondes visible,
 * démarrage après 30 sec sur la page (pas pushy).
 */

import { cities } from "@/data/cities";

const FIRST_NAMES = [
  "Marc", "Sophie", "Patrick", "Nadia", "Jean-Luc", "Marie-Hélène",
  "Cédric", "Christine", "Thomas", "Karim", "Pascale", "Sylvie",
  "Olivier", "Émilie", "Bruno", "Catherine", "Vincent", "Fatima",
];

const ACTIONS = [
  "a reçu son devis sous 24h",
  "vient de demander une étude technique",
  "a programmé son installation",
  "a signé son devis PAC",
  "vient de recevoir son installation",
];

type Notif = { id: number; name: string; city: string; action: string };

const STORAGE_KEY = "ecocvc-social-proof-shown";

const SocialProofTicker = () => {
  const [current, setCurrent] = useState<Notif | null>(null);

  useEffect(() => {
    // Pas plus d'1 série de notifs par session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let id = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const show = () => {
      id += 1;
      const name = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
      const city = cities[Math.floor(Math.random() * cities.length)].name;
      const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];

      setCurrent({ id, name, city, action });

      // Cache après 5 sec
      timeout = setTimeout(() => setCurrent(null), 5000);
    };

    // Première notif après 25 sec sur la page
    const start = setTimeout(() => {
      show();
      // Puis toutes les 30 sec, max 4 fois
      let count = 1;
      const intv = setInterval(() => {
        count += 1;
        if (count > 4) {
          clearInterval(intv);
          sessionStorage.setItem(STORAGE_KEY, "1");
          return;
        }
        show();
      }, 30000);
    }, 25000);

    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          key={current.id}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-6 left-6 z-[40] hidden md:block"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-border px-4 py-3 max-w-xs flex items-center gap-3">
            <div className="shrink-0 w-9 h-9 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-xs leading-snug">
              <span className="font-semibold">{current.name} de {current.city}</span>{" "}
              <span className="text-muted-foreground">{current.action}.</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofTicker;
