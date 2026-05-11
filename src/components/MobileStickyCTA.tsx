import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * MobileStickyCTA — barre flottante en bas d'écran sur mobile uniquement.
 * Apparaît après ~300px de scroll, masquable par l'utilisateur.
 *
 * Pas affichée sur desktop (xl:hidden) ni sur la page /contact (formulaire déjà visible).
 */
const MobileStickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Restore dismissal between sessions (sessionStorage uniquement → re-affiche au prochain onglet)
    if (typeof window !== "undefined" && sessionStorage.getItem("ecocvc-mobile-cta-dismissed") === "1") {
      setDismissed(true);
    }
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ne pas afficher sur la page contact
  if (typeof window !== "undefined" && window.location.pathname === "/contact") {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("ecocvc-mobile-cta-dismissed", "1");
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 250 }}
          className="xl:hidden fixed bottom-3 left-3 right-3 z-[60]"
        >
          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl border border-border shadow-lifted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-transparent to-brand-red/10 pointer-events-none" />
            <div className="relative flex items-stretch gap-2 p-2">
              <a
                href="tel:+33629634045"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl border-2 border-brand-red text-brand-red font-bold text-sm hover:bg-brand-red hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Appeler
              </a>
              <Link
                to="/contact"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-brand-blue text-white font-bold text-sm hover:bg-brand-bluedark transition-colors shadow-soft"
              >
                <Sparkles className="w-4 h-4" />
                Devis gratuit
              </Link>
              <button
                onClick={handleDismiss}
                aria-label="Fermer la barre d'action"
                className="shrink-0 w-9 self-stretch flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
