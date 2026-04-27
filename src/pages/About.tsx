import { motion } from "framer-motion";
import { Users, MapPin, Award, Clock, Wrench, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import photoAbout from "@/assets/photo-install-exterieur-1.jpeg";
import photoTeam from "@/assets/photo-team-frigoriste.jpeg";

const values = [
  {
    icon: Wrench,
    title: "Expertise technique",
    text: "20 ans de métier pour nos techniciens, des formations constructeurs continues, et une veille réglementaire permanente.",
  },
  {
    icon: Heart,
    title: "Proximité & écoute",
    text: "Un interlocuteur unique du devis au SAV. On prend le temps d'expliquer, de conseiller, jamais de survendre.",
  },
  {
    icon: Award,
    title: "Travail soigné",
    text: "On laisse votre logement plus propre qu'on ne l'a trouvé. Chaque installation est pensée pour durer 15 ans.",
  },
  {
    icon: Clock,
    title: "Ponctualité",
    text: "Si on prend un rendez-vous à 9h, on est là à 9h. Vous êtes prévenu en cas d'imprévu.",
  },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Qui sommes-nous"
          title={
            <>
              L'artisan <span className="text-gradient-brand">CVC</span> que vous attendiez.
            </>
          }
          subtitle="eco cvc est une entreprise artisanale spécialisée dans la climatisation réversible et la pompe à chaleur air-air. Implantée en région Rhône-Alpes (Rhône, Loire, Isère, Savoie et Haute-Savoie), notre société existe depuis 2022 et s'appuie sur une équipe de techniciens forte de 20 ans d'expérience dans le métier."
          breadcrumb={[{ label: "Qui sommes-nous" }]}
          heroImage={{
            src: photoTeam,
            alt: "Technicien frigoriste eco cvc en intervention sur une installation",
            caption: "Notre équipe terrain",
            badge: "20 ans d'expérience",
          }}
        />

        {/* Intro */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-lifted">
                  <img
                    src={photoAbout}
                    alt="Technicien eco cvc en pose d'une unité extérieure AUX"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                  <div className="relative h-full flex flex-col justify-between p-8 text-white">
                    <div>
                      <div className="text-[11px] font-bold tracking-widest uppercase text-brand-sky mb-2">Société créée en 2022</div>
                      <div className="text-6xl md:text-7xl font-extrabold leading-[0.9] drop-shadow">
                        20<span className="text-brand-sky">+</span>
                      </div>
                      <div className="text-sm text-white/80 mt-2">années d'expérience pour nos techniciens</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                        <Users className="w-5 h-5 text-brand-sky mb-2" />
                        <div className="text-xl font-extrabold">1 200+</div>
                        <div className="text-[10px] text-white/70 uppercase tracking-wider">Installations posées</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                        <MapPin className="w-5 h-5 text-brand-red mb-2" />
                        <div className="text-xl font-extrabold">Rhône-Alpes</div>
                        <div className="text-[10px] text-white/70 uppercase tracking-wider">69 · 42 · 38 · 73 · 74</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Notre histoire"
                  title={<>Un métier, une passion, <span className="text-gradient-brand">des convictions</span>.</>}
                />
                <div className="space-y-5 mt-6 text-foreground/85 leading-relaxed">
                  <p>
                    eco cvc, c'est avant tout une équipe d'artisans passionnés par leur métier : faire entrer le confort thermique
                    — et les économies d'énergie — dans chaque logement, sans jamais rogner sur la qualité.
                  </p>
                  <p>
                    La société <strong className="text-foreground">eco cvc a été fondée en 2022</strong>, mais nos techniciens, eux,
                    cumulent <strong className="text-foreground">plus de 20 ans d'expérience</strong> sur la pose, l'entretien et le dépannage
                    de climatisations réversibles et de pompes à chaleur air-air. Nous les accompagnons depuis le premier jour de l'aventure
                    eco cvc, et c'est cette expertise qui fait toute la différence sur le terrain.
                  </p>
                  <p>
                    Notre engagement ? Pas de sous-traitance opaque, pas de vente forcée, pas de surcouche technique inutile.
                    Du <strong className="text-foreground">conseil honnête</strong>, du <strong className="text-foreground">matériel qui dure</strong> et un <strong className="text-foreground">suivi à long terme</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Nos valeurs"
              title={<>Ce qui fait <span className="text-gradient-brand">notre différence</span>.</>}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-border p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABand variant="about" />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
