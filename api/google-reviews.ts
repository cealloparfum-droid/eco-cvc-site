/**
 * API serverless Vercel pour récupérer les avis Google Business Profile.
 *
 * Variables d'environnement à configurer dans Vercel (Settings → Environment Variables) :
 *   - GOOGLE_PLACES_API_KEY : clé API Google Cloud (Places API activée)
 *   - GOOGLE_PLACE_ID       : identifiant Google Maps de ECO CVC
 *
 * Renvoie : { rating, userRatingsTotal, reviews: [...] }
 *
 * Cache : 1h côté Vercel pour limiter les appels (Google facture au-delà de 30k/mois,
 * et les avis ne changent pas toutes les minutes).
 */

type GoogleReview = {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  language?: string;
};

type GoogleResponse = {
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    reviews?: GoogleReview[];
    url?: string;
  };
  status: string;
  error_message?: string;
};

export default async function handler(req: Request): Promise<Response> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return new Response(
      JSON.stringify({
        configured: false,
        message: "Google Places API non configurée. Ajoutez GOOGLE_PLACES_API_KEY et GOOGLE_PLACE_ID dans les variables d'environnement Vercel.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" },
      }
    );
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,user_ratings_total,reviews,url");
  url.searchParams.set("language", "fr");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url.toString());
    const data: GoogleResponse = await res.json();

    if (data.status !== "OK" || !data.result) {
      return new Response(
        JSON.stringify({
          configured: true,
          ok: false,
          error: data.error_message || data.status,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" },
        }
      );
    }

    const result = data.result;
    return new Response(
      JSON.stringify({
        configured: true,
        ok: true,
        name: result.name,
        rating: result.rating,
        userRatingsTotal: result.user_ratings_total,
        url: result.url,
        reviews: (result.reviews || []).map((r) => ({
          author: r.author_name,
          authorUrl: r.author_url,
          photo: r.profile_photo_url,
          rating: r.rating,
          relativeTime: r.relative_time_description,
          text: r.text,
          time: r.time,
        })),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        configured: true,
        ok: false,
        error: err instanceof Error ? err.message : "Erreur réseau",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
      }
    );
  }
}

export const config = {
  runtime: "edge",
};
