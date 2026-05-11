import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck, Clock, Award } from "lucide-react";
import { useRef, useState } from "react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-cool -z-10" />
      <div className="absolute inset-0 bg-grid opacity-[0.25] -z-10" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border text-xs font-semibold tracking-wide text-brand-bluedark shadow-soft mb-6"
            >
              <span className="flex w-2 h-2 rounded-full bg-brand-green animate-pulse-soft" />
              Artisan certifié RGE QualiPAC · Intervention 7j/7
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] mb-6 text-slate-900"
            >
              La climatisation réversible,{" "}
              <span className="text-gradient-brand">installée, entretenue</span>{" "}
              et <span className="text-gradient-hot">dépannée</span> par des experts.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8"
            >
              Spécialiste de la <strong className="text-foreground">pompe à chaleur air-air</strong> et du
              confort thermique toute l'année. Devis gratuit sous 24h, pose soignée,
              entretien régulier et dépannage rapide partout en région.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-bluedark transition-all shadow-lifted hover:-translate-y-0.5"
              >
                Obtenir mon devis gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33629634045"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border-2 border-brand-red text-brand-red font-semibold hover:bg-brand-red hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Urgence dépannage
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-3 gap-4 max-w-lg"
            >
              {[
                { icon: ShieldCheck, label: "RGE QualiPAC", sub: "Aides éligibles" },
                { icon: Clock, label: "Intervention 24h", sub: "Urgences 7j/7" },
                { icon: Award, label: "Garantie 2 ans", sub: "Pièces & main-d'œuvre" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col gap-1">
                  <b.icon className="w-5 h-5 text-brand-blue" />
                  <div className="text-sm font-semibold text-foreground leading-tight">{b.label}</div>
                  <div className="text-xs text-muted-foreground">{b.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VIDEO_START = 2; // démarrage à 2 s pour sauter l'intro avec le fond blanc

const HeroVisual = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = VIDEO_START;
    }
  };

  // Quand le seek à 2 s est terminé, on révèle la vidéo (évite le flash de la frame 0)
  const handleSeeked = () => {
    setReady(true);
  };

  // Boucle manuelle : on repart à 2 s plutôt qu'à 0
  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = VIDEO_START;
      void videoRef.current.play();
    }
  };

  return (
    <div className="relative aspect-[4/5] lg:aspect-[5/6] max-w-lg mx-auto">
      <div className="absolute -top-8 -right-6 w-64 h-64 bg-brand-sky/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-red/15 rounded-full blur-3xl" />

      <div className="relative z-10 h-full rounded-3xl border border-border shadow-lifted overflow-hidden bg-gradient-to-br from-brand-blue via-brand-bluedark to-brand-red">
        <video
          ref={videoRef}
          src="/intro-logo.mp4#t=2"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onSeeked={handleSeeked}
          onEnded={handleEnded}
          aria-label="Animation logo eco cvc"
        />

        <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
          <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
            eco cvc · climatisation
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-green/95 text-white text-[10px] font-bold backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-soft" />
            RGE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
