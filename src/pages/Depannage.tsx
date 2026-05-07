import { motion } from "framer-motion";
import {
  LifeBuoy,
  Phone,
  Clock,
  AlertTriangle,
  Thermometer,
  VolumeX,
  Droplets,
  Zap,
  Snowflake,
  Wind,
} from "lucide-react";
import CallbackForm from "@/components/CallbackForm";
import PhotoDepannageForm from "@/components/PhotoDepannageForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import TestimonialStrip from "@/components/TestimonialStrip";
import photoToiture from "@/assets/photo-depannage-toiture.jpg";

const pannes = [
  {
    icon: Snowflake,
    title: "Ne fait plus de froid / chaud",
    causes: "Fuite de fluide, compresseur HS, vanne 4 voies bloquée, sonde défectueuse",
  },
  {
    icon: Droplets,
    title: "Fuite d'eau intérieure",
    causes: "Condensats bouchés, pompe de relevage HS, défaut d'inclinaison, filtre encrassé",
  },
  {
    icon: VolumeX,
    title: "Bruits anormaux",
    causes: "Turbine voilée, roulements compresseur usés, vibrations support extérieur",
  },
  {
    icon: Wind,
    title: "Odeurs désagréables",
    causes: "Bactéries dans l'échangeur, filtres saturés, moisissures dans bac à condensats",
  },
  {
    icon: Thermometer,
    title: "Erreur affichée",
    causes: "Code E1, E6, U5, P4… Nos techniciens maîtrisent toutes les marques",
  },
  {
    icon: Zap,
    title: "Unité qui ne démarre plus",
    causes: "Fusible, condensateur, carte électronique, télécommande, alimentation",
  },
];

const zones = [
  "Lyon", "Villeurbanne", "Saint-Étienne", "Grenoble", "Bourgoin-Jallieu",
  "Vienne", "Chambéry", "Aix-les-Bains", "Albertville", "Annecy",
  "Annemasse", "Thonon-les-Bains", "Roanne", "Voiron",
];

const Depannage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Dépannage"
          title={
            <>
              Dépannage <span className="text-gradient-hot">climatisation</span> 7j/7
            </>
          }
          subtitle="Panne en pleine canicule ? Fuite d'eau ? Erreur affichée ? Nos techniciens interviennent rapidement partout en Rhône-Alpes (69, 42, 38, 73, 74), du lundi au dimanche."
          breadcrumb={[{ label: "Dépannage" }]}
          heroImage={{
            src: photoToiture,
            alt: "Techniciens eco cvc en intervention sur batterie de groupes extérieurs Daikin en toiture",
            caption: "Intervention multi-splits · toiture",
            badge: "Intervention 7j/7",
          }}
        />

        {/* Urgency band */}
        <section className="py-10 bg-gradient-to-r from-brand-red to-orange-500 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-10 h-10 shrink-0" />
                <div>
                  <div className="text-lg font-extrabold">Urgence clim ?</div>
                  <div className="text-sm text-white/85">Intervention sous 24h en semaine · 48h le week-end</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href="tel:+33758459900"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-brand-red font-extrabold hover:bg-slate-100 transition-colors shadow-lifted"
                >
                  <Phone className="w-5 h-5" />
                  07 58 45 99 00
                </a>
                <a
                  href="tel:+33629634045"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-white text-white font-extrabold hover:bg-white/15 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  06 29 63 40 45
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Demande de rappel rapide */}
        <section className="py-12 md:py-14 -mt-6 relative z-10">
          <div className="container mx-auto max-w-3xl">
            <CallbackForm />
          </div>
        </section>

        {/* Formulaire photo : envoi photos + description pour pré-diagnostic */}
        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
                📸 Nouveau · Pré-diagnostic photo
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Une panne ? Envoyez-nous des photos pour intervention plus rapide
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Prenez 1 à 4 photos (écran avec code erreur, unité extérieure, fuite d'eau…) et décrivez le problème en quelques mots. Un technicien examine et vous rappelle avec un pré-diagnostic — souvent 30-60 minutes de gagnées sur l'intervention.
              </p>
            </div>
            <div className="flex justify-center">
              <PhotoDepannageForm />
            </div>
          </div>
        </section>

        {/* Pannes courantes */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Diagnostic"
              title={<>Les pannes <span className="text-gradient-hot">les plus fréquentes</span></>}
              subtitle="Nos techniciens identifient la cause réelle de la panne en moins de 30 minutes grâce à des outils de diagnostic professionnels."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {pannes.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group bg-white rounded-2xl border border-border p-6 hover:border-brand-red/40 hover:shadow-lifted transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <p.icon className="w-5 h-5 text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-[10px] tracking-widest uppercase text-brand-red font-bold block mb-1">Causes possibles</span>
                    {p.causes}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.4fr] gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse-soft" />
                  Notre intervention
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] mb-5">
                  Un dépannage <span className="text-gradient-hot">sans mauvaise surprise</span>.
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Devis avant intervention, tarifs transparents et pièces d'origine constructeur.
                  Un technicien, un diagnostic, une solution.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Phone, title: "1. Prise d'appel", text: "Vous décrivez la panne au téléphone, nous pré-diagnostiquons et fixons un créneau." },
                  { icon: Clock, title: "2. Déplacement rapide", text: "Intervention sous 24h en semaine, 48h le week-end. Technicien en Rhône-Alpes." },
                  { icon: LifeBuoy, title: "3. Diagnostic & devis", text: "Identification de la panne, devis écrit et validation avant intervention. Pas de frais cachés." },
                  { icon: Zap, title: "4. Réparation sur place", text: "80 % des pannes sont réglées dès la première visite. Véhicule équipé des pièces courantes." },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 rounded-2xl p-5 border border-white/10 flex gap-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{step.title}</h4>
                      <p className="text-sm text-white/70">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Tarifs transparents"
              title={<>Pas de frais <span className="text-gradient-hot">cachés</span>.</>}
              subtitle="Nos tarifs sont publics et communiqués avant toute intervention. Vous savez exactement ce que vous allez payer."
            />
            <div className="grid md:grid-cols-3 gap-5 mt-14 max-w-5xl mx-auto">
              {[
                { title: "Déplacement + diagnostic", price: "69 €", desc: "En semaine, Rhône-Alpes" },
                { title: "Intervention week-end", price: "139 €", desc: "Samedi, dimanche et jours fériés" },
                { title: "Forfait recharge fluide", price: "Dès 180 €", desc: "R32 / R410A · selon quantité" },
              ].map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-border p-6 text-center"
                >
                  <div className="text-3xl font-extrabold text-brand-red mb-2">{t.price}</div>
                  <div className="font-bold text-slate-900 mb-1">{t.title}</div>
                  <div className="text-sm text-muted-foreground">{t.desc}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto">
              Les frais de déplacement sont offerts si l'intervention est réalisée dans la foulée.
              Pièces supplémentaires facturées au prix coûtant + main-d'œuvre selon grille tarifaire.
            </p>
          </div>
        </section>

        {/* Zones */}
        <section className="py-16 md:py-20 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Zone d'intervention"
              title={<>Nous intervenons <span className="text-gradient-brand">partout en Rhône-Alpes</span></>}
              subtitle="Notre équipe de techniciens se déploie quotidiennement sur toute la région."
            />
            <div className="flex flex-wrap justify-center gap-2 mt-10 max-w-3xl mx-auto">
              {zones.map((z) => (
                <span key={z} className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-foreground">
                  {z}
                </span>
              ))}
            </div>
          </div>
        </section>

        <TestimonialStrip
          context="depannage"
          title="Pannes résolues, clients soulagés"
          className="bg-slate-50/60 border-y border-border"
        />

        <CTABand variant="depannage" />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Depannage;
