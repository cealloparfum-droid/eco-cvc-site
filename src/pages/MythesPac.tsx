import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, X, Check, AlertTriangle, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

const MYTHES = [
  {
    mythe: "La PAC ne marche pas en hiver",
    realite: "Les PAC modernes plage étendue garantissent un fonctionnement jusqu'à -25 °C. Sur une saison entière en Rhône-Alpes, COP saisonnier moyen : 3,8-4,2.",
    source: "Vrai pour les modèles 2010 et antérieurs. Faux depuis 2018.",
  },
  {
    mythe: "Une PAC consomme trop d'électricité",
    realite: "PAC air-eau moderne : 2 500-4 500 kWh/an pour 100-130 m² (~600-1 100 €/an). C'est 2 à 4 fois moins qu'un chauffage électrique direct, et souvent moins qu'une chaudière fioul.",
    source: "Comparé aux convecteurs électriques : -65 à -75% sur la facture chauffage.",
  },
  {
    mythe: "Les PAC sont toutes bruyantes",
    realite: "Modèles haut de gamme à 19 dB en mode silence (Daikin Stylish). Plus silencieux qu'un réfrigérateur (40 dB). Imperceptible à 5 m.",
    source: "Les retours négatifs viennent de modèles bas de gamme ou installations bâclées.",
  },
  {
    mythe: "Il faut changer ses radiateurs",
    realite: "Dans 80% des cas, NON. Une PAC haute température (Daikin Altherma 3 H, Mitsubishi Hydrobox HT) fonctionne avec les radiateurs en fonte d'origine jusqu'à 65 °C de départ d'eau.",
    source: "Calcul thermique pendant la visite technique pour valider.",
  },
  {
    mythe: "La PAC ne dure que 8-10 ans",
    realite: "Durée de vie observée chez Daikin/Mitsubishi : 18-22 ans avec entretien annuel. Atlantic : 15-18 ans. AUX/marques entrée : 12-15 ans. Géothermie : 22-25 ans (compresseur), capteurs/forage 50 ans+.",
    source: "Les anciennes PAC des années 2000 duraient effectivement 10-12 ans.",
  },
  {
    mythe: "Les PAC chinoises (AUX, Hisense) sont à éviter",
    realite: "Faux. Les modèles AUX modernes utilisent des compresseurs Mitsubishi sous-traités, conformité CE, R32 standard. Durée de vie 12-15 ans (vs 18-22 chez japonais premium). Excellent rapport qualité-prix pour locatif.",
    source: "Idée reçue datant des années 2000-2010 quand la qualité était effectivement moindre.",
  },
  {
    mythe: "MaPrimeRénov' est trop compliqué à obtenir",
    realite: "Avec un installateur RGE QualiPAC, vous n'avez quasi rien à faire : on monte le dossier complet (devis, justificatifs revenus, attestation RGE). Vous validez en ligne, recevez la prime 4-8 semaines après facturation.",
    source: "C'était plus complexe avant 2020. Maintenant largement simplifié.",
  },
  {
    mythe: "La PAC à 1 € existe et c'est légal",
    realite: "FAUX. Le dispositif a été supprimé en juillet 2021 suite à des fraudes massives. Les offres actuelles 'PAC à 1 €' sont du démarchage illégal (interdit depuis 2020 pour rénovation énergétique). Méfiance absolue.",
    source: "Si vous recevez encore ces appels en 2026 : raccrocher.",
  },
  {
    mythe: "Une PAC déprécie ma maison à la revente",
    realite: "FAUX. Au contraire, une PAC moderne valorise le bien : DPE amélioré (passe souvent de F à C/D), futur acheteur bénéficie de factures basses, conformité aux exigences 2028 (interdiction location DPE F).",
    source: "Plus-value immobilière estimée 5-15% selon zone et ancienneté du bien.",
  },
  {
    mythe: "Toutes les PAC se valent",
    realite: "FAUX. Différences majeures : durée de vie (12 vs 22 ans selon marque), consommation (SCOP 3,2 vs 4,5), niveau sonore (32 vs 50 dB), garantie (3 vs 10 ans), SAV. Sur 18 ans d'usage, écart de coût total : 3 000-8 000 €.",
    source: "Une PAC pas chère peut coûter plus cher qu'une PAC premium sur la durée.",
  },
];

const MythesPac = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/mythes-pompe-a-chaleur`;

  useSeo({
    title: "10 mythes sur la pompe à chaleur démontés | ECO CVC",
    description:
      "10 idées reçues sur la pompe à chaleur 2026 : la PAC ne marche pas en hiver, consomme trop, est bruyante, à 1 €… La vérité par ECO CVC, RGE QualiPAC.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: MYTHES.map((m) => ({
        "@type": "Question",
        name: m.mythe,
        acceptedAnswer: { "@type": "Answer", text: m.realite },
      })),
    },
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-14 md:pt-48 md:pb-20">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Mythes PAC</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
                <AlertTriangle className="w-3.5 h-3.5" /> Mythes vs réalité
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                10 mythes sur la pompe à chaleur <span className="text-gradient-brand">démontés</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "La PAC ne marche pas en hiver", "ça consomme trop", "c'est bruyant"… On entend tout sur les pompes à chaleur. Voici la vérité, sans langue de bois, par un artisan RGE QualiPAC.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              {MYTHES.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl border border-border overflow-hidden"
                >
                  <div className="p-5 bg-red-50 border-b border-border">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                        <X className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-red-700 mb-1">Mythe #{i + 1}</div>
                        <p className="font-display text-lg font-bold text-red-900 leading-snug">"{m.mythe}"</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-brand-green mb-1">Réalité</div>
                        <p className="text-foreground/85 leading-relaxed">{m.realite}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground italic mt-3 pl-11">D'où vient le mythe : {m.source}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Une question, un doute ?</h2>
            <p className="text-foreground/85 leading-relaxed mb-7">
              Notre équipe RGE QualiPAC répond honnêtement à vos questions, même les plus pointues. Pas de blabla commercial, juste de l'expertise terrain.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:+33629634045" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
                <Phone className="w-4 h-4" /> 06 29 63 40 45
              </a>
              <Link to="/faq" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50">
                FAQ complète <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default MythesPac;
