import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, Quote, AlertCircle, Loader2 } from "lucide-react";

export type GoogleReview = {
  author: string;
  authorUrl?: string;
  photo?: string;
  rating: number;
  relativeTime: string;
  text: string;
  time: number;
};

export type GoogleReviewsData =
  | { configured: false; message: string }
  | { configured: true; ok: false; error: string }
  | {
      configured: true;
      ok: true;
      name?: string;
      rating: number;
      userRatingsTotal: number;
      url?: string;
      reviews: GoogleReview[];
    };

interface Props {
  variant?: "full" | "summary";
  className?: string;
}

const GoogleReviewsWidget = ({ variant = "full", className = "" }: Props) => {
  const [data, setData] = useState<GoogleReviewsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((d: GoogleReviewsData) => {
        if (mounted) setData(d);
      })
      .catch((e) => {
        if (mounted) setError(e instanceof Error ? e.message : "Erreur");
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return null;
  }

  if (!data) {
    return (
      <div className={`flex items-center gap-3 text-sm text-muted-foreground ${className}`}>
        <Loader2 className="w-4 h-4 animate-spin" /> Chargement des avis Google…
      </div>
    );
  }

  if (!data.configured) {
    return null;
  }

  if (!data.ok) {
    if (variant === "summary") return null;
    return (
      <div className={`flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-900 ${className}`}>
        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
        <div>
          <strong>Avis Google momentanément indisponibles.</strong>
          <p className="mt-1 text-amber-800/80">{data.error}</p>
        </div>
      </div>
    );
  }

  const fullStars = Math.round(data.rating);

  if (variant === "summary") {
    return (
      <a
        href={data.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-border hover:border-brand-blue/50 transition-colors group ${className}`}
      >
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < fullStars ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
            />
          ))}
        </div>
        <div className="text-sm">
          <span className="font-display text-base font-bold">{data.rating.toFixed(1)}</span>
          <span className="text-muted-foreground"> · {data.userRatingsTotal} avis Google</span>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-brand-blue transition-colors" />
      </a>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-5 mb-10">
        <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-border shadow-soft">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < fullStars ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
              />
            ))}
          </div>
          <div>
            <div className="font-display text-2xl font-bold leading-none">
              {data.rating.toFixed(1)}<span className="text-base text-muted-foreground font-normal">/5</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">{data.userRatingsTotal} avis Google</div>
          </div>
        </div>
        {data.url && (
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-blue font-semibold hover:underline"
          >
            Voir tous les avis sur Google <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {data.reviews.length === 0 ? (
        <p className="text-muted-foreground">Aucun avis publié pour le moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.reviews.map((r, i) => (
            <motion.article
              key={r.time}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="relative bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-5 right-5 w-7 h-7 text-brand-blue/15" />

              <div className="flex items-center gap-3 mb-4">
                {r.photo ? (
                  <img src={r.photo} alt={r.author} className="w-10 h-10 rounded-full" loading="lazy" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center">
                    {r.author.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{r.author}</div>
                  <div className="text-xs text-muted-foreground">{r.relativeTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className={`w-4 h-4 ${k < r.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                  />
                ))}
              </div>

              <p className="text-foreground/85 leading-relaxed text-sm whitespace-pre-line">{r.text}</p>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoogleReviewsWidget;
