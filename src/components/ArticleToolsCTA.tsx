/**
 * ArticleToolsCTA — Bloc CTA "Outils gratuits ECO CVC" affiché
 * automatiquement dans les articles de blog selon leur catégorie.
 *
 * Objectif : convertir le visiteur lecteur en lead via les calculateurs
 * gratuits du site (simulateur aides, audit devis, calculateur puissance,
 * comparateur chauffages, quiz éligibilité MaPrimeRénov, calendrier aides).
 *
 * Mapping catégorie → 3 outils les plus pertinents.
 */

import { Link } from "react-router-dom";
import { Calculator, ClipboardCheck, GitCompareArrows, Wand2, Calendar, ShieldCheck, ArrowRight } from "lucide-react";
import type { Article } from "@/data/articles";

type Tool = {
  href: string;
  title: string;
  desc: string;
  icon: typeof Calculator;
  accent: "blue" | "green" | "amber" | "red" | "violet" | "sky";
};

const TOOLS: Record<string, Tool> = {
  simulateur: {
    href: "/simulateur-aides",
    title: "Simulateur aides 2026",
    desc: "Calculez vos aides MaPrimeRénov' + CEE en 60 secondes — montant exact par profil",
    icon: Wand2,
    accent: "green",
  },
  calculateur: {
    href: "/calculateur",
    title: "Calculateur de puissance",
    desc: "Quelle puissance de PAC ou clim pour votre maison ? Résultat en 2 minutes",
    icon: Calculator,
    accent: "blue",
  },
  audit: {
    href: "/audit-devis-pac",
    title: "Audit devis PAC gratuit",
    desc: "Vous avez reçu un devis ? On vérifie en 24 h s'il est honnête ou surfacturé",
    icon: ClipboardCheck,
    accent: "red",
  },
  comparateur: {
    href: "/comparateur-chauffages",
    title: "Comparateur chauffages",
    desc: "PAC vs gaz vs fioul vs granulés sur 15 ans — coût réel détaillé",
    icon: GitCompareArrows,
    accent: "violet",
  },
  eligibilite: {
    href: "/eligibilite-maprimerenov",
    title: "Quiz éligibilité MaPrimeRénov'",
    desc: "Suis-je éligible aux aides 2026 ? Réponse en 5 questions",
    icon: ShieldCheck,
    accent: "amber",
  },
  calendrier: {
    href: "/calendrier-aides-2026",
    title: "Calendrier aides 2026",
    desc: "Toutes les dates limites des aides cette année — ne ratez plus rien",
    icon: Calendar,
    accent: "sky",
  },
};

// Mapping catégorie d'article → 3 outils les plus pertinents
const CATEGORY_MAP: Record<Article["category"], string[]> = {
  "Aides": ["simulateur", "eligibilite", "calendrier"],
  "Tarifs": ["audit", "calculateur", "comparateur"],
  "Choisir sa PAC": ["calculateur", "comparateur", "simulateur"],
  "Pratique": ["audit", "simulateur", "calculateur"],
};

const ACCENT_CLASSES: Record<Tool["accent"], { bg: string; icon: string; border: string; hover: string }> = {
  blue: {
    bg: "bg-brand-blue/5",
    icon: "text-brand-blue bg-brand-blue/10",
    border: "border-brand-blue/20",
    hover: "hover:border-brand-blue/50 hover:bg-brand-blue/8",
  },
  green: {
    bg: "bg-brand-green/5",
    icon: "text-brand-green bg-brand-green/10",
    border: "border-brand-green/20",
    hover: "hover:border-brand-green/50 hover:bg-brand-green/8",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-700 bg-amber-100",
    border: "border-amber-200",
    hover: "hover:border-amber-500 hover:bg-amber-100",
  },
  red: {
    bg: "bg-brand-red/5",
    icon: "text-brand-red bg-brand-red/10",
    border: "border-brand-red/20",
    hover: "hover:border-brand-red/50 hover:bg-brand-red/8",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-700 bg-violet-100",
    border: "border-violet-200",
    hover: "hover:border-violet-500 hover:bg-violet-100",
  },
  sky: {
    bg: "bg-brand-sky/5",
    icon: "text-brand-sky bg-brand-sky/10",
    border: "border-brand-sky/20",
    hover: "hover:border-brand-sky/50 hover:bg-brand-sky/8",
  },
};

interface ArticleToolsCTAProps {
  category: Article["category"];
  variant?: "inline" | "highlighted";
  className?: string;
}

const ArticleToolsCTA = ({ category, variant = "inline", className = "" }: ArticleToolsCTAProps) => {
  const toolKeys = CATEGORY_MAP[category] ?? CATEGORY_MAP["Pratique"];
  const tools = toolKeys.map((k) => TOOLS[k]).filter(Boolean);

  return (
    <aside
      className={`my-12 rounded-3xl ${
        variant === "highlighted"
          ? "bg-gradient-to-br from-brand-blue/8 via-brand-sky/6 to-brand-green/8 border-2 border-brand-blue/20 p-7"
          : "bg-slate-50/80 border border-border p-6"
      } ${className}`}
    >
      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1.5">
          Outils gratuits ECO CVC
        </p>
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
          {variant === "highlighted"
            ? "Passez à l'action en 60 secondes"
            : "Pour aller plus loin, utilisez nos calculateurs gratuits"}
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5">
          Calculs personnalisés, sans inscription obligatoire, basés sur les barèmes officiels 2026.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {tools.map((tool) => {
          const colors = ACCENT_CLASSES[tool.accent];
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              to={tool.href}
              className={`group relative flex flex-col p-4 rounded-2xl bg-white border ${colors.border} ${colors.hover} transition-all`}
            >
              <div className={`w-10 h-10 rounded-xl ${colors.icon} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <h4 className="font-bold text-sm leading-snug mb-1.5 text-foreground group-hover:text-brand-blue transition-colors">
                {tool.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{tool.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue mt-auto">
                Lancer l'outil
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default ArticleToolsCTA;
