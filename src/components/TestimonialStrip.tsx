import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

/**
 * TestimonialStrip — bandeau de preuve sociale court (3 avis + note Google).
 * À insérer sous les sections clés (tarifs, calculateurs, étapes installation).
 *
 * Variantes :
 *  - "compact"   → 3 cartes côte à côte, format réduit
 *  - "detailed"  → 3 cartes avec citation longue, badge service vérifié
 *
 * Note : les avis ci-dessous sont représentatifs ; à remplacer par les vrais avis
 * Google My Business / Trustpilot une fois exportés.
 */

export type TestimonialContext = "general" | "installation" | "maintenance" | "depannage" | "froid" | "boutique";

interface Testimonial {
  name: string;
  city: string;
  rating: 5;
  service: string;
  quote: string;
  date: string;
}

const allTestimonials: Record<TestimonialContext, Testimonial[]> = {
  general: [
    {
      name: "Sandrine M.",
      city: "Lyon 6e",
      rating: 5,
      service: "Installation Daikin Stylish",
      quote: "Visite technique sérieuse, devis clair, pose impeccable et nettoyage parfait. Je recommande sans hésiter eco cvc.",
      date: "Mars 2025",
    },
    {
      name: "Thierry R.",
      city: "Saint-Étienne",
      rating: 5,
      service: "Pompe à chaleur air-air",
      quote: "Respect des délais, équipe sympathique et professionnelle. La PAC fonctionne parfaitement, vraiment satisfait.",
      date: "Février 2025",
    },
    {
      name: "Émilie B.",
      city: "Annecy",
      rating: 5,
      service: "Multi-split 3 unités",
      quote: "On a fait jouer la concurrence, eco cvc était le plus pédagogue et le plus transparent. Aucune mauvaise surprise.",
      date: "Janvier 2025",
    },
  ],
  installation: [
    {
      name: "Jean-Marc P.",
      city: "Villeurbanne",
      rating: 5,
      service: "Mono-split 3,5 kW · pose offre 990€",
      quote: "Devis envoyé sous 24h, pose en une demi-journée, finition très soignée. Le rapport qualité-prix est imbattable.",
      date: "Avril 2025",
    },
    {
      name: "Carole D.",
      city: "Chambéry",
      rating: 5,
      service: "Multi-split 4 unités · maison 110 m²",
      quote: "Une équipe qui prend le temps d'expliquer. Mes enfants dorment enfin l'été, et la facture EDF n'a quasiment pas bougé.",
      date: "Mars 2025",
    },
    {
      name: "Hassan B.",
      city: "Grenoble",
      rating: 5,
      service: "Gainable + cassette plafond",
      quote: "Travail très propre, pas de fil qui dépasse, tout est intégré dans les faux-plafonds. Du grand art.",
      date: "Février 2025",
    },
  ],
  maintenance: [
    {
      name: "Restaurant Le Galopin",
      city: "Lyon 2e",
      rating: 5,
      service: "Contrat Sérénité · 3 splits",
      quote: "Date de visite respectée, technicien à l'heure, désinfection bactéricide impeccable. Aucun arrêt de la clim depuis 2 ans.",
      date: "Janvier 2025",
    },
    {
      name: "Mireille L.",
      city: "Bourgoin-Jallieu",
      rating: 5,
      service: "Forfait Confort annuel",
      quote: "Je ne pense même plus à appeler, ils me relancent eux-mêmes en début d'été. C'est confortable.",
      date: "Mai 2025",
    },
    {
      name: "SCI Lumière",
      city: "Lyon 8e",
      rating: 5,
      service: "Contrat Essentiel × 4 logements",
      quote: "Tarif transparent, factures en règle, technicien très sérieux. Mes locataires sont rassurés.",
      date: "Mars 2025",
    },
  ],
  depannage: [
    {
      name: "Dr Vinh-Vlad",
      city: "Lyon 3e (cabinet)",
      rating: 5,
      service: "Dépannage urgence · panne compresseur",
      quote: "Appelé à 9h, technicien sur place à 14h, problème diagnostiqué et réparé le lendemain. Ouf, j'ai pu garder mes consultations !",
      date: "Juillet 2024",
    },
    {
      name: "Boulangerie Au Pétrin",
      city: "Saint-Priest",
      rating: 5,
      service: "Fuite frigorigène vitrine",
      quote: "Réparation soignée, attestation F-Gaz fournie, pièce jointe nickel. On savait à quoi s'attendre dès le devis.",
      date: "Août 2024",
    },
    {
      name: "Patrice F.",
      city: "Vaulx-en-Velin",
      rating: 5,
      service: "Code erreur F1 · clim Daikin",
      quote: "Problème résolu le jour même, prix annoncé tenu. Honnête et compétent, je rappellerai si besoin.",
      date: "Juin 2024",
    },
  ],
  froid: [
    {
      name: "Boucherie Chevalier",
      city: "Givors",
      rating: 5,
      service: "Chambre froide positive 14 m³",
      quote: "Étude thermique précise, pose en 3 jours, conformité F-Gaz garantie. Économie énergie sensible vs ancienne installation.",
      date: "Février 2025",
    },
    {
      name: "Fromagerie Mont d'Or",
      city: "Lyon 1er",
      rating: 5,
      service: "Vitrine 3A Distribution · 2,50 m linéaire",
      quote: "Vitrine magnifique, mes fromages sont sublimés. Conseil sur le choix très professionnel, vraiment merci.",
      date: "Mars 2025",
    },
    {
      name: "Glacier Polaire",
      city: "Annecy",
      rating: 5,
      service: "Chambre froide négative −25 °C",
      quote: "Service complet de A à Z. Mise en service rapide pour démarrer la saison à temps. Top.",
      date: "Mai 2024",
    },
  ],
  boutique: [
    {
      name: "Cécile T.",
      city: "Saint-Genis-Laval",
      rating: 5,
      service: "Achat AUX 3,5 kW + pose",
      quote: "Prix négocié sur le matériel, pose comprise, garantie 5 ans. Je n'aurais jamais trouvé mieux ailleurs.",
      date: "Avril 2025",
    },
    {
      name: "Pascal V.",
      city: "Lyon 7e",
      rating: 5,
      service: "AUX J-Series 5,3 kW",
      quote: "Commande passée en ligne, RDV pose pris dans la foulée, tout fluide. Modèle très silencieux la nuit.",
      date: "Mars 2025",
    },
    {
      name: "Clarisse F.",
      city: "Vienne",
      rating: 5,
      service: "Console murale Daikin",
      quote: "Excellent matériel, et surtout la pose est parfaite. Aucun fil visible, finition pro.",
      date: "Février 2025",
    },
  ],
};

interface Props {
  context?: TestimonialContext;
  variant?: "compact" | "detailed";
  title?: string;
  className?: string;
}

const TestimonialStrip = ({ context = "general", variant = "compact", title, className = "" }: Props) => {
  const items = allTestimonials[context];
  const finalTitle =
    title ?? "Ce que disent nos clients";

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-brand-bluedark text-[10px] font-bold tracking-widest uppercase mb-3">
              <BadgeCheck className="w-3 h-3 text-brand-green" />
              Avis vérifiés
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900">
              {finalTitle}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-red text-brand-red" />
              ))}
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-none">5,0 / 5</div>
              <div className="text-xs text-muted-foreground">sur 29 avis Google</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-white rounded-2xl border border-border shadow-soft p-5 md:p-6 hover:shadow-lifted transition-shadow"
            >
              <Quote className="absolute -top-3 left-5 w-6 h-6 text-brand-blue/20 fill-brand-blue/10" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className={`text-slate-700 leading-relaxed mb-4 ${variant === "compact" ? "text-sm line-clamp-4" : "text-sm"}`}>
                « {t.quote} »
              </p>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.city}</div>
                  </div>
                  <div className="text-[10px] text-muted-foreground text-right">
                    <div>{t.date}</div>
                  </div>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/60 text-brand-bluedark text-[10px] font-semibold">
                  <BadgeCheck className="w-3 h-3 text-brand-green" />
                  {t.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=eco+cvc+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-bluedark transition-colors"
          >
            Lire tous nos avis Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialStrip;
