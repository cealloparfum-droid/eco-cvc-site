import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Camera, Phone, Clock, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PhotoDepannageForm from "@/components/PhotoDepannageForm";
import { useSeo } from "@/lib/useSeo";

const DepannagePhoto = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/depannage-photo`;

  useSeo({
    title: "Dépannage par photo : envoyez vos photos, on diagnostique | ECO CVC",
    description:
      "Service dépannage avec envoi de photos : prenez 1 à 4 photos de votre PAC en panne, on vous rappelle avec un pré-diagnostic en 30-60 min. Isère et Rhône-Alpes par ECO CVC.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Dépannage avec pré-diagnostic photo",
      provider: { "@type": "HVACBusiness", name: "ECO CVC", url: baseUrl, telephone: "+33629634045" },
      areaServed: ["Isère", "Rhône", "Savoie", "Haute-Savoie", "Loire"],
      url: canonical,
    },
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-brand-blue/5 -z-10" />
          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/depannage" className="hover:text-brand-blue transition-colors">Dépannage</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Pré-diagnostic photo</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Nouveau service
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Pré-diagnostic <span className="text-gradient-brand">par photo</span> : intervention plus rapide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">
                Au lieu d'attendre la visite du technicien pour identifier la panne, envoyez-nous des photos. On examine, on identifie souvent la cause à distance, et on intervient avec la bonne pièce et les bonnes compétences.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#formulaire" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors text-base shadow-lg">
                  <Camera className="w-5 h-5" /> Envoyer mes photos
                </a>
                <a href="tel:+33629634045" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50">
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-10 text-center">Comment ça marche</h2>
            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <Step n="1" icon={Camera} title="Vous prenez 1 à 4 photos" body="Écran avec code erreur affiché, unité extérieure, fuite d'eau, taches de givre… Tout ce qui peut aider au diagnostic. Mobile = bouton ouvre directement la caméra." />
              <Step n="2" icon={CheckCircle2} title="On analyse à distance" body="Un technicien certifié F-Gaz examine vos photos + votre description. Identifie souvent la cause de la panne en 5-10 minutes." />
              <Step n="3" icon={Clock} title="Rappel + intervention ciblée" body="Selon urgence : 30 min (urgent), 4h (rapide), 24-48h (non urgent). On arrive avec la bonne pièce, gain de temps + de coûts." />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Photos utiles pour le diagnostic</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { titre: "Écran avec code erreur", desc: "Code Exx, Fxx, Pxx affiché sur l'unité intérieure ou la télécommande" },
                { titre: "Unité extérieure", desc: "Vue générale + ailettes (pour voir si encrassement, givre)" },
                { titre: "Fuite d'eau", desc: "Sous l'unité ou autour du module hydraulique" },
                { titre: "Tableau électrique", desc: "Si disjoncteur en position 'OFF' ou voyant rouge" },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border p-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-3">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{p.titre}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formulaire" className="py-14 md:py-20">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <PhotoDepannageForm />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
            <div className="space-y-3">
              {[
                { q: "Mes photos sont-elles vraiment exploitables pour un diagnostic ?", a: "Dans 70-80% des cas, oui. Le code erreur sur l'écran nous indique la zone du problème (carte électronique, sonde, fluide, ventilateur). Photo de l'unité ext. donne l'état général. C'est suffisant pour pré-diagnostic et amener la bonne pièce." },
                { q: "Est-ce que le diagnostic photo est gratuit ?", a: "Oui, totalement. Aucun engagement. Le diagnostic à distance est offert et sans contrepartie." },
                { q: "Et si le diagnostic photo est insuffisant ?", a: "On vous le dit clairement et on programme une visite technique classique. Pas de surcoût, pas d'attente — vous restez prioritaire." },
                { q: "Confidentialité des photos envoyées ?", a: "Photos envoyées uniquement à ecocvc69@gmail.com via formulaire sécurisé. Pas de stockage tiers, pas d'usage commercial. Suppression après diagnostic." },
                { q: "Quel est le délai de rappel selon l'urgence ?", a: "Urgent : 30 min en heures ouvrées (8h-19h sauf dim.). Rapide : 4h ouvrées. Pas urgent : 24-48h ouvrées." },
                { q: "Vous intervenez sur quelles marques ?", a: "Toutes : Daikin, Mitsubishi, Atlantic, AUX, Panasonic, Toshiba, Hitachi, Saunier Duval, Bosch, Vaillant, Viessmann, Stiebel Eltron." },
              ].map((item, i) => (
                <details key={i} className="group bg-white border border-border rounded-2xl px-6 py-5 open:shadow-md">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold">
                    {item.q}
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

const Step = ({ n, icon: Icon, title, body }: { n: string; icon: typeof Camera; title: string; body: string }) => (
  <div className="p-6 rounded-2xl bg-white border border-border text-center">
    <div className="w-12 h-12 mx-auto rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg mb-4">{n}</div>
    <Icon className="w-6 h-6 text-brand-blue mx-auto mb-2" />
    <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-foreground/80 leading-relaxed">{body}</p>
  </div>
);

export default DepannagePhoto;
