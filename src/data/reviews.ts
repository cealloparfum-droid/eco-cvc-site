export type Review = {
  author: string;
  city: string;
  date: string; // ISO
  rating: 1 | 2 | 3 | 4 | 5;
  service: "Installation PAC" | "Climatisation" | "Maintenance" | "Dépannage" | "Ventilation" | "Froid commercial";
  body: string;
};

/**
 * Avis clients réels uniquement.
 *
 * ⚠️ Ne JAMAIS publier d'avis fictifs : interdit en France
 * (article L.111-7-2 du Code de la consommation, amendes DGCCRF jusqu'à 300k€)
 * + Google pénalise les avis non vérifiés.
 *
 * Pour ajouter un avis, exiger :
 *   - Le client a explicitement autorisé la publication (mail conservé)
 *   - L'avis est repris d'une plateforme publique (Google Business Profile,
 *     Pages Jaunes, Trustpilot…) ou d'un témoignage écrit signé
 *
 * Idéalement : récupérer automatiquement les avis Google via l'API
 * Google Business Profile une fois la fiche réclamée.
 */
export const reviews: Review[] = [];

export const aggregateRating = () => {
  if (reviews.length === 0) return null;
  const total = reviews.reduce((s, r) => s + r.rating, 0);
  return {
    ratingValue: (total / reviews.length).toFixed(2),
    reviewCount: reviews.length,
  };
};
