import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowRight, X, Trash2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDevisList } from "@/hooks/use-devis-list";

const formatEur = (v: number) =>
  v.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " €";

/**
 * Pastille flottante "Mon devis" affichée dès qu'au moins un produit
 * a été ajouté à la liste de devis (boutique). Cliquable pour ouvrir
 * un panneau récapitulatif puis naviguer vers le formulaire de contact.
 */
const DevisFloatingBar = () => {
  const { items, count, total, remove, clear } = useDevisList();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Caché sur la page contact (où la liste est déjà affichée)
  if (location.pathname.startsWith("/contact") || count === 0) return null;

  return (
    <>
      {/* Pastille flottante */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.9 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="fixed z-[55] bottom-24 xl:bottom-6 right-4 xl:right-6 inline-flex items-center gap-3 pl-3 pr-5 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-bluedark text-white shadow-lifted hover:shadow-xl"
        aria-label={`Mon devis : ${count} produit(s)`}
      >
        <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-brand-red text-[11px] font-extrabold flex items-center justify-center border-2 border-brand-bluedark">
            {count}
          </span>
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-bold tracking-widest uppercase opacity-80">Mon devis</span>
          <span className="block text-sm font-extrabold">{formatEur(total)}</span>
        </span>
      </motion.button>

      {/* Panneau récapitulatif */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] max-w-full bg-white z-[61] shadow-2xl flex flex-col"
              role="dialog"
              aria-label="Récapitulatif de mon devis"
            >
              <header className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div>
                  <span className="block text-[10px] font-bold tracking-widest uppercase text-brand-blue">
                    Mon devis
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900 leading-tight">
                    {count} produit{count > 1 ? "s" : ""} sélectionné{count > 1 ? "s" : ""}
                  </h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </header>

              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                {items.map((item) => (
                  <div
                    key={item.ref}
                    className="flex items-start gap-3 p-3 rounded-xl border border-border hover:border-brand-blue/40 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      {item.brand && (
                        <div className="text-[10px] font-bold tracking-widest uppercase text-brand-bluedark mb-0.5">
                          {item.brand}
                        </div>
                      )}
                      <div className="text-sm font-bold text-slate-900 leading-tight line-clamp-2">
                        {item.name}
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-sm font-extrabold text-brand-blue">
                          {formatEur(item.price)}
                        </span>
                        {item.qty && item.qty > 1 && (
                          <span className="text-[11px] text-muted-foreground">× {item.qty}</span>
                        )}
                        {item.kw && (
                          <span className="text-[11px] text-muted-foreground">· {item.kw} kW</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => remove(item.ref)}
                      className="shrink-0 w-8 h-8 rounded-lg hover:bg-red-50 hover:text-brand-red text-muted-foreground flex items-center justify-center transition-colors"
                      aria-label={`Retirer ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <footer className="px-5 py-4 border-t border-border bg-slate-50/60 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-700">Total indicatif</span>
                  <span className="text-xl font-extrabold text-slate-900">{formatEur(total)}</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Tarifs TTC matériel · livraison incluse Rhône-Alpes. La pose fait l'objet d'un devis dédié à partir de 690 € HT.
                </p>
                <Link
                  to="/contact?service=boutique"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue hover:bg-brand-bluedark text-white font-extrabold transition-colors shadow-lifted"
                >
                  Demander mon devis pose comprise
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => {
                    if (confirm("Vider mon devis ?")) clear();
                  }}
                  className="w-full text-xs font-semibold text-muted-foreground hover:text-brand-red transition-colors"
                >
                  Vider mon devis
                </button>
              </footer>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DevisFloatingBar;
