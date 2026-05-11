import { motion } from "framer-motion";
import { Phone, ArrowRight, Wrench, Snowflake, Wind, Settings, ShieldCheck, ShoppingBag, Zap } from "lucide-react";
import { Link } from "react-router-dom";

type Variant =
  | "default"
  | "installation"
  | "maintenance"
  | "depannage"
  | "chambre-froide"
  | "vitrines"
  | "ventilation"
  | "boutique"
  | "produits"
  | "certifications"
  | "about";

const presets: Record<
  Variant,
  {
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    primaryLabel: string;
    primaryHref: string;
    accent: "blue" | "red";
  }
> = {
  default: {
    title: "Prêt à profiter d'un confort toute l'année ?",
    subtitle: "Nos techniciens vous rappellent sous 24h pour étudier votre projet.",
    icon: ArrowRight,
    primaryLabel: "Demander un devis gratuit",
    primaryHref: "/contact",
    accent: "blue",
  },
  installation: {
    title: "Votre installation, prête en 7 à 15 jours.",
    subtitle: "Visite technique offerte, devis détaillé sous 24h, pose soignée par nos artisans RGE QualiPAC.",
    icon: Wrench,
    primaryLabel: "Planifier ma visite technique",
    primaryHref: "/contact?service=installation",
    accent: "blue",
  },
  maintenance: {
    title: "Souscrivez votre contrat d'entretien en 2 minutes.",
    subtitle: "Visite annuelle obligatoire, désinfection, contrôle frigorifique : on s'occupe de tout, à date fixe.",
    icon: Settings,
    primaryLabel: "Choisir mon forfait entretien",
    primaryHref: "/contact?service=maintenance",
    accent: "blue",
  },
  depannage: {
    title: "Panne clim ? On intervient sous 24h.",
    subtitle: "Diagnostic transparent, devis avant intervention, pièces fréquentes en stock. Appelez maintenant ou demandez un rappel.",
    icon: Zap,
    primaryLabel: "Demander un rappel d'urgence",
    primaryHref: "/contact?service=depannage",
    accent: "red",
  },
  "chambre-froide": {
    title: "Votre chambre froide sur mesure, du dimensionnement à la mise en service.",
    subtitle: "Panasonic · Emerson · Danfoss · Tecumseh — partenaire officiel. Étude technique offerte, attestation F-Gaz fournie.",
    icon: Snowflake,
    primaryLabel: "Demander mon étude personnalisée",
    primaryHref: "/contact?service=chambre-froide",
    accent: "blue",
  },
  vitrines: {
    title: "Une vitrine réfrigérée qui valorise vos produits.",
    subtitle: "Boulangerie, boucherie, traiteur, fleuriste : on choisit le modèle adapté à votre activité et on l'installe.",
    icon: Snowflake,
    primaryLabel: "Demander une recommandation",
    primaryHref: "/contact?service=vitrines",
    accent: "blue",
  },
  ventilation: {
    title: "Hottes, caissons F400, charbon actif : conformité garantie.",
    subtitle: "Distributeur officiel Ventilex France, bureau d'études intégré, mise en service par nos techniciens.",
    icon: Wind,
    primaryLabel: "Demander mon étude ventilation",
    primaryHref: "/contact?service=ventilation",
    accent: "blue",
  },
  boutique: {
    title: "Pose comprise, garantie constructeur prolongée.",
    subtitle: "Toutes les climatisations de la boutique sont posées par nos techniciens RGE et garanties pièces & main-d'œuvre 2 ans.",
    icon: ShoppingBag,
    primaryLabel: "Demander mon devis pose comprise",
    primaryHref: "/contact?service=boutique",
    accent: "blue",
  },
  produits: {
    title: "Une AUX posée chez vous à partir de 990 €.",
    subtitle: "Partenaire officiel AUX France · matériel en stock · garantie constructeur étendue jusqu'à 5 ans.",
    icon: ShoppingBag,
    primaryLabel: "Profiter de l'offre 990 €",
    primaryHref: "/contact?service=installation&offre=aux990",
    accent: "blue",
  },
  certifications: {
    title: "Vos aides MaPrimeRénov' & CEE éligibles avec eco cvc.",
    subtitle: "Artisan RGE QualiPAC, attestation F-Gaz, assurance décennale MAAF Pro : votre installation ouvre droit aux aides de l'État.",
    icon: ShieldCheck,
    primaryLabel: "Estimer mes aides en 1 min",
    primaryHref: "/contact?service=installation&aide=mpr",
    accent: "blue",
  },
  about: {
    title: "20 ans de chantiers en Rhône-Alpes, à votre service.",
    subtitle: "Plus de 1 200 installations, des artisans formés en continu, un seul interlocuteur de A à Z.",
    icon: ArrowRight,
    primaryLabel: "Discuter de mon projet",
    primaryHref: "/contact",
    accent: "blue",
  },
};

interface CTABandProps {
  variant?: Variant;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

const CTABand = ({ variant = "default", title, subtitle, primaryLabel, primaryHref }: CTABandProps) => {
  const preset = presets[variant];
  const finalTitle = title ?? preset.title;
  const finalSubtitle = subtitle ?? preset.subtitle;
  const finalLabel = primaryLabel ?? preset.primaryLabel;
  const finalHref = primaryHref ?? preset.primaryHref;
  const Icon = preset.icon;
  const accentRgba =
    preset.accent === "red"
      ? "rgba(208,32,39,0.35)"
      : "rgba(59,130,246,0.30)";

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className={
          preset.accent === "red"
            ? "absolute inset-0 bg-gradient-to-br from-brand-red via-brand-bluedark to-brand-blue"
            : "absolute inset-0 bg-gradient-to-br from-brand-bluedark via-brand-blue to-brand-sky"
        }
      />
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            `radial-gradient(600px circle at 10% 40%, ${accentRgba}, transparent 60%)`,
            `radial-gradient(600px circle at 90% 60%, ${accentRgba}, transparent 60%)`,
            `radial-gradient(600px circle at 10% 40%, ${accentRgba}, transparent 60%)`,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white leading-tight mb-5">
            {finalTitle}
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-10">{finalSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={finalHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-bluedark font-bold hover:bg-slate-100 transition-colors shadow-lifted"
            >
              {finalLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33629634045"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/70 text-white font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              06 29 63 40 45
            </a>
            <a
              href="tel:+33758459900"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/70 text-white font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              07 58 45 99 00
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABand;
export type { Variant };
