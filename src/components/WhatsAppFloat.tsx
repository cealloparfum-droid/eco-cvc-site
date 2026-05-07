import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

/**
 * Bouton WhatsApp flottant — apparait en bas à gauche après 8 sec.
 * Click → ouvre WhatsApp avec un message prérempli vers le numéro pro.
 *
 * Très efficace pour la conversion mobile : 30-50% des clics WhatsApp
 * deviennent des leads (vs ~2% pour un formulaire classique).
 */

const WHATSAPP_NUMBER = "33758459900"; // +33 7 58 45 99 00 sans le +
const PREFILLED_MESSAGE =
  "Bonjour ECO CVC, je m'intéresse à un devis pour ma maison. Pouvez-vous me rappeler ?";

const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 left-6 z-[55] hidden md:block"
        >
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-full left-0 mb-3 bg-white rounded-2xl shadow-xl border border-border p-4 w-72"
            >
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full hover:bg-slate-100 flex items-center justify-center"
                aria-label="Fermer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-sm flex-1 pr-4">
                  <div className="font-semibold mb-1">Discutons sur WhatsApp</div>
                  <p className="text-xs text-muted-foreground mb-3 leading-snug">
                    Réponse rapide en journée. Idéal pour décrire votre projet ou poser une question.
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1eb854] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Démarrer la discussion
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-label="Discuter sur WhatsApp"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#1eb854] transition-colors flex items-center justify-center relative group"
          >
            <MessageCircle className="w-6 h-6" />
            {!expanded && (
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;
