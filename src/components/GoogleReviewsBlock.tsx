/**
 * Bloc "Avis Google" affiché sur la home.
 *
 * Version honnête : pas d'avis individuels affichés (pour éviter toute
 * ambiguïté sur leur source). On affiche uniquement :
 *  - La vraie note 5,0/5 sur 20 avis (extraite de la fiche Google)
 *  - 2 boutons : "Voir tous les avis" + "Laisser un avis"
 *
 * Les visiteurs cliquent et lisent les avis authentiques directement
 * sur Google Maps.
 */

import { Star, ExternalLink, ShieldCheck, MapPin, Clock } from "lucide-react";

const GoogleReviewsBlock = () => {
  const GOOGLE_URL = "https://www.google.com/maps/search/?api=1&query=ECO+CVC+Nivolas-Vermelle";

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-yellow-200 text-xs font-bold uppercase tracking-wider text-amber-700 mb-5">
            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
            Note vérifiée sur Google
          </div>

          {/* Titre */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-5">
            Ce que disent nos clients
          </h2>

          {/* Note 5,0/5 visuelle */}
          <div className="inline-flex items-center gap-3 px-7 py-5 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
            <div className="text-left">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-4xl md:text-5xl text-slate-900">5,0</span>
                <span className="text-slate-500 text-lg">/5</span>
              </div>
              <div className="flex mt-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200" />
            <div className="text-left">
              <div className="font-display font-extrabold text-2xl text-slate-900">20</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">avis Google</div>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Note attribuée par nos clients en Isère, Rhône, Loire, Savoie et Haute-Savoie depuis 2022.
            Les avis sont publics, traçables et vérifiables sur notre fiche Google Maps.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
              Artisan RGE QualiPAC
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-brand-green" />
              Nivolas-Vermelle, Isère
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
              <Clock className="w-3.5 h-3.5 text-brand-red" />
              Depuis 2022
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border-2 border-brand-blue text-brand-blue font-bold hover:bg-brand-blue/5 transition-colors"
            >
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              Lire les avis sur Google
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-bluedark transition-colors shadow-lifted"
            >
              <ShieldCheck className="w-4 h-4" />
              Laisser un avis Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsBlock;
