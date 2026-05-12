/**
 * Recherche interne site (palette de commande Cmd+K / Ctrl+K).
 *
 * Indexe articles, villes, services, calculateurs en mémoire et propose
 * un fuzzy search instantané.
 *
 * Améliore les signaux d'engagement SEO :
 *  - Temps moyen sur le site (les utilisateurs trouvent ce qu'ils cherchent)
 *  - Taux de rebond (réduit)
 *  - Pages par session (navigation interne facilitée)
 */

import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X, FileText, MapPin, Wrench, Calculator, Hash } from "lucide-react";
import { articles } from "@/data/articles";
import { cities } from "@/data/cities";
import { topics } from "@/data/topics";

type SearchResult = {
  type: "article" | "ville" | "service" | "outil" | "topic";
  title: string;
  subtitle?: string;
  href: string;
  keywords: string[];
};

// Index plat de toutes les pages searchables
const buildIndex = (): SearchResult[] => {
  const idx: SearchResult[] = [];

  // Articles
  for (const a of articles) {
    idx.push({
      type: "article",
      title: a.title,
      subtitle: a.category,
      href: `/blog/${a.slug}`,
      keywords: [a.title, a.category, a.excerpt, ...a.faq.map((f) => f.q)].map((s) => s.toLowerCase()),
    });
  }

  // Villes (PAC)
  for (const c of cities) {
    idx.push({
      type: "ville",
      title: `Pompe à chaleur à ${c.name}`,
      subtitle: `${c.postalCode} · ${c.department}`,
      href: `/pompe-a-chaleur/${c.slug}`,
      keywords: [c.name, c.postalCode, c.department, "PAC", "pompe à chaleur"].map((s) => s.toLowerCase()),
    });
    idx.push({
      type: "ville",
      title: `Climatisation à ${c.name}`,
      subtitle: `${c.postalCode} · ${c.department}`,
      href: `/climatisation-reversible/${c.slug}`,
      keywords: [c.name, c.postalCode, "climatisation", "clim"].map((s) => s.toLowerCase()),
    });
    idx.push({
      type: "ville",
      title: `Aides PAC ${c.name}`,
      subtitle: `MaPrimeRénov' à ${c.postalCode}`,
      href: `/aides-pac/${c.slug}`,
      keywords: [c.name, "aides", "maprimerenov", "cee"].map((s) => s.toLowerCase()),
    });
  }

  // Topics
  for (const t of topics) {
    idx.push({
      type: "topic",
      title: t.title,
      subtitle: "Topic ECO CVC",
      href: `/topic/${t.slug}`,
      keywords: [t.title, ...t.keywords].map((s) => s.toLowerCase()),
    });
  }

  // Outils
  const tools: SearchResult[] = [
    { type: "outil", title: "Simulateur d'aides 2026", subtitle: "MaPrimeRénov' + CEE", href: "/simulateur-aides", keywords: ["simulateur", "aides", "maprimerenov", "cee"] },
    { type: "outil", title: "Calculateur de puissance", subtitle: "PAC / climatisation", href: "/calculateur", keywords: ["calculateur", "puissance", "kw", "btu"] },
    { type: "outil", title: "Audit devis PAC gratuit", subtitle: "Vérifie un devis reçu", href: "/audit-devis-pac", keywords: ["audit", "devis", "verifier", "comparer"] },
    { type: "outil", title: "Comparateur chauffages", subtitle: "PAC vs gaz vs fioul vs granulés", href: "/comparateur-chauffages", keywords: ["comparateur", "chauffage", "gaz", "fioul", "granules"] },
    { type: "outil", title: "Quiz éligibilité MaPrimeRénov'", subtitle: "5 questions, 2 min", href: "/eligibilite-maprimerenov", keywords: ["quiz", "eligibilite", "maprimerenov"] },
    { type: "outil", title: "Calendrier aides 2026", subtitle: "Toutes les dates limites", href: "/calendrier-aides-2026", keywords: ["calendrier", "aides", "2026", "dates"] },
  ];
  idx.push(...tools);

  // Services principaux
  const services: SearchResult[] = [
    { type: "service", title: "Installation pompe à chaleur", href: "/installation", keywords: ["installation", "pac", "pompe a chaleur"] },
    { type: "service", title: "Maintenance et entretien", href: "/maintenance", keywords: ["maintenance", "entretien", "contrat"] },
    { type: "service", title: "Dépannage urgent 24h", href: "/depannage", keywords: ["depannage", "panne", "urgence", "24h"] },
    { type: "service", title: "Ventilation VMC", href: "/ventilation", keywords: ["ventilation", "vmc", "double flux"] },
    { type: "service", title: "Chambre froide professionnelle", href: "/chambre-froide", keywords: ["chambre froide", "froid", "commercial"] },
    { type: "service", title: "Vitrines réfrigérées", href: "/vitrines-refrigerees", keywords: ["vitrine", "refrigeree", "boutique"] },
    { type: "service", title: "Rappel express", subtitle: "Devis sous 1h", href: "/rappel-express", keywords: ["rappel", "express", "devis"] },
    { type: "service", title: "Hub Professionnels B2B", href: "/professionnels", keywords: ["pro", "b2b", "professionnel"] },
  ];
  idx.push(...services);

  return idx;
};

// Normalisation pour matching tolérant aux accents
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

const ICON_MAP = {
  article: FileText,
  ville: MapPin,
  service: Wrench,
  outil: Calculator,
  topic: Hash,
};

const SearchPalette = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(buildIndex, []);

  // Raccourci clavier global Cmd+K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQ("");
    }
  }, [open]);

  const results = useMemo(() => {
    if (!q || q.length < 2) return index.slice(0, 8);
    const nq = normalize(q);
    const scored = index
      .map((r) => {
        const titleScore = normalize(r.title).includes(nq) ? 100 : 0;
        const kwScore = r.keywords.some((k) => normalize(k).includes(nq)) ? 50 : 0;
        return { r, score: titleScore + kwScore };
      })
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map((s) => s.r);
    return scored;
  }, [q, index]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-[10vh] left-1/2 -translate-x-1/2 z-[101] w-[min(640px,90vw)] max-h-[70vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Chercher : ville, article, calculateur, service..."
                  className="flex-1 bg-transparent border-0 outline-0 text-base placeholder:text-slate-400"
                  autoComplete="off"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fermer"
                  className="w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-2 py-2">
                {results.length === 0 ? (
                  <p className="text-center text-sm text-slate-500 py-8">
                    Aucun résultat pour « {q} ». Appelez-nous au 06 29 63 40 45.
                  </p>
                ) : (
                  results.map((r, i) => {
                    const Icon = ICON_MAP[r.type];
                    return (
                      <Link
                        key={`${r.href}-${i}`}
                        to={r.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-brand-blue" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900 truncate">{r.title}</div>
                          {r.subtitle && (
                            <div className="text-xs text-slate-500 truncate">{r.subtitle}</div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })
                )}
              </div>
              <div className="px-5 py-3 border-t border-border text-[11px] text-slate-500 flex items-center justify-between">
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px]">⌘K</kbd>{" "}
                  pour ouvrir
                </span>
                <span>{results.length} résultat{results.length > 1 ? "s" : ""}</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bouton flottant compact en bas — toujours accessible */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Rechercher sur le site"
        className="fixed bottom-20 right-5 z-30 hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 shadow-md text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
      >
        <Search className="w-3.5 h-3.5" />
        Rechercher
        <kbd className="px-1 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px]">⌘K</kbd>
      </button>
    </>
  );
};

export default SearchPalette;
