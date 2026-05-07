import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  Phone,
  Check,
  X,
  HelpCircle,
  Award,
  FileText,
  Euro,
  Calendar,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

/**
 * Page "Comment choisir son installateur PAC".
 *
 * Cible un visiteur en phase de comparaison (3 devis en cours en moyenne).
 * Objectif : poser le cadre d'une démarche pro/transparente, donner les
 * 12 questions à poser et 8 signaux à fuir, et inviter naturellement à
 * tester ces critères auprès d'ECO CVC.
 *
 * Aucune mention nominative de concurrents. La page éduque, le visiteur
 * conclut.
 */

const QUESTIONS_A_POSER = [
  {
    titre: "Êtes-vous certifié RGE QualiPAC, et pouvez-vous me donner le numéro ?",
    pourquoi:
      "Sans certification RGE QualiPAC en cours de validité, vous ne pouvez pas toucher MaPrimeRénov'. La certification se vérifie en 30 secondes sur france-renov.gouv.fr.",
    eco: "Oui, ECO CVC est RGE QualiPAC, certificat consultable sur france-renov.gouv.fr (rubrique \"trouver un professionnel\").",
  },
  {
    titre:
      "Avez-vous l'attestation de capacité fluides frigorigènes (F-Gaz) catégorie 1 ?",
    pourquoi:
      "Manipuler les fluides frigorigènes sans cette attestation est interdit (décret n° 2007-737). Sans elle, l'installateur sous-traite à un tiers — ce qui se voit sur la facture et peut compliquer le SAV.",
    eco: "Oui, attestation F-Gaz catégorie 1 à jour pour les deux dirigeants techniques.",
  },
  {
    titre:
      "Allez-vous dimensionner ma PAC après une visite technique, ou par téléphone ?",
    pourquoi:
      "Un dimensionnement par téléphone (\"vous avez quelle surface ?\") aboutit dans 60 % des cas à un sous- ou sur-dimensionnement. Une PAC sous-dimensionnée tournera à 100 % en hiver et tombera en panne précocement ; sur-dimensionnée, elle fait des cycles courts et consomme plus.",
    eco: "Visite technique systématique gratuite. Mesure des radiateurs, calcul de déperditions, test du circuit, contrôle du tableau électrique.",
  },
  {
    titre:
      "Pouvez-vous me montrer un devis-type avec le détail matériel + main d'œuvre + aides ?",
    pourquoi:
      "Un devis honnête détaille la marque, modèle et puissance précise de la PAC, le ballon tampon s'il y en a, le matériel hydraulique, la main d'œuvre, les aides simulées avec les justificatifs. Un devis qui agrège tout en une seule ligne \"PAC posée 14 800 €\" cache la marge.",
    eco: "Devis détaillé ligne par ligne, marques et modèles précis. Vous pouvez comparer chaque poste.",
  },
  {
    titre: "Quelles marques proposez-vous, et pourquoi celles-ci ?",
    pourquoi:
      "Un installateur sérieux a 2 à 4 marques de référence (rarement plus de 5) qu'il maîtrise techniquement. S'il en propose une seule \"miracle\" qu'on ne trouve nulle part ailleurs, méfiance — c'est souvent une marque blanche surfacturée.",
    eco: "ECO CVC pose Daikin Altherma, Mitsubishi Ecodan, Atlantic Alféa, AUX. Quatre gammes connues, dont les pièces et les codes erreur sont documentés.",
  },
  {
    titre: "Quelles sont les garanties exactes, et que couvrent-elles ?",
    pourquoi:
      "Garantie matériel constructeur (3 à 10 ans selon marque), garantie pose (2 ans légale, 10 ans décennale), garantie pièces et main d'œuvre. Faites-vous expliquer ce qui est inclus et ce qui ne l'est pas (déplacement ? main d'œuvre ? pièces consommables ?).",
    eco: "Garanties claires écrites au devis : décennale entreprise, 2 ans pose, garantie constructeur PAC selon marque (5-10 ans). Contrat d'entretien optionnel pour la main d'œuvre dépannage.",
  },
  {
    titre: "Combien de temps après la commande pour la pose ?",
    pourquoi:
      "Un délai annoncé \"sous 2 semaines\" pour une PAC en pleine saison est suspect : les marques sérieuses ont 3 à 6 semaines de délai d'approvisionnement standard. \"Pose immédiate\" = soit stock douteux, soit pression commerciale.",
    eco: "Pose 2 à 4 semaines après commande matériel selon marque. Visite et devis sous 5 jours ouvrés.",
  },
  {
    titre:
      "Qui posera concrètement chez moi, et combien d'années d'expérience ?",
    pourquoi:
      "Beaucoup de \"commerciaux\" sous-traitent la pose à des équipes externes peu identifiées. Demandez le nom des techniciens, leur ancienneté, et si possible une référence chantier.",
    eco: "Les deux dirigeants ECO CVC posent eux-mêmes ou supervisent. Pas de sous-traitance opaque. Références fournies sur demande.",
  },
  {
    titre:
      "Comment se passe le SAV en cas de panne hors saison vs en plein hiver ?",
    pourquoi:
      "Une panne en juillet, c'est inconfortable ; une panne en janvier à -5 °C avec des enfants, c'est urgent. Posez la question explicitement : délai d'intervention urgente, astreinte, frais de déplacement.",
    eco: "Dépannage 7j/7. Intervention sous 24 h pour les clients sous contrat de maintenance, sous 72 h hors contrat.",
  },
  {
    titre: "Quelle est l'unité extérieure et où sera-t-elle posée ?",
    pourquoi:
      "L'emplacement de l'UE conditionne le bruit perçu (chez vous et chez vos voisins), le SCOP réel et l'esthétique. Un bon installateur vous montre 2-3 options avec les compromis. Une UE en façade au pied d'une fenêtre voisine = recours possibles (jurisprudence 2024).",
    eco: "Étude bruit + 3D virtuelle si besoin. Distance > 2 m d'une limite voisine privilégiée. Caisson antibruit en option.",
  },
  {
    titre: "Que se passe-t-il si j'ai des problèmes après la pose ?",
    pourquoi:
      "Un installateur fiable explique sa procédure de SAV : qui appeler, sous combien de temps, comment ça se documente. S'il dit \"appelez le constructeur\", fuyez : la décennale c'est lui, pas le constructeur.",
    eco: "Numéro direct du dirigeant technique. Carnet d'entretien remis à la pose. Suivi écrit de chaque intervention.",
  },
  {
    titre:
      "Pouvez-vous m'aider à monter le dossier MaPrimeRénov' / CEE ?",
    pourquoi:
      "Le montage du dossier d'aides est inclus dans la prestation chez les bons installateurs. S'il vous demande de le faire seul ou facture ce service à part (200-500 €), c'est anormal.",
    eco: "Dossier complet monté par ECO CVC, gratuit. Vous validez en ligne. Délai d'accord moyen : 15 jours.",
  },
];

const PIEGES = [
  {
    titre: "\"PAC à 1 €\" ou \"PAC à coût zéro grâce aux aides\"",
    explication:
      "Le dispositif \"PAC à 1 €\" est interdit depuis juillet 2021 suite à des fraudes massives. Toute offre actuelle qui le promet est illégale (loi Hamon, démarchage rénovation énergétique interdit depuis 2020). Si vous recevez encore ces appels en 2026 : raccrochez.",
  },
  {
    titre: "Démarchage téléphonique ou porte-à-porte agressif",
    explication:
      "Le démarchage téléphonique pour la rénovation énergétique est INTERDIT depuis le 24 juillet 2020. Toute société qui vous appelle pour vous \"proposer\" une PAC est en infraction. La DGCCRF traite les signalements (signal.conso.gouv.fr).",
  },
  {
    titre: "Pression commerciale : \"il faut signer aujourd'hui\"",
    explication:
      "Aucune offre légitime n'a une validité de quelques heures. Si on vous met la pression pour signer le jour même \"avant la fin de la promo\", c'est qu'il y a une marge anormale à protéger. Vous avez 14 jours de rétractation légale après signature à domicile, et c'est un droit non négociable.",
  },
  {
    titre: "Devis flou ou \"forfait tout compris\" sans détail",
    explication:
      "Un devis qui ne précise ni la marque, ni la puissance, ni le modèle exact de la PAC est un signal rouge. Vous ne pouvez ni comparer, ni vérifier que ce que vous payez correspond à ce que vous recevez. Demandez systématiquement une fiche technique du matériel proposé.",
  },
  {
    titre: "Marque inconnue ou \"importation directe d'usine\"",
    explication:
      "Méfiance face aux marques que vous ne trouvez sur aucun comparateur. Souvent des marques blanches surfacturées, sans réseau SAV en France. Préférez des marques avec présence physique en France (Daikin, Mitsubishi, Atlantic, Panasonic, Toshiba) : pièces et techniciens dispos.",
  },
  {
    titre: "Pas de RGE QualiPAC vérifiable",
    explication:
      "Un installateur qui ne peut pas vous donner son numéro RGE QualiPAC, ou dont le numéro n'apparaît pas sur france-renov.gouv.fr, ne peut pas vous faire toucher MaPrimeRénov'. Vous risquez de perdre 3 000 à 5 000 € d'aides — ou pire, de devoir les rembourser.",
  },
  {
    titre: "Acompte > 30 % avant le début des travaux",
    explication:
      "Légalement, l'acompte ne doit pas dépasser 30 % du devis avant début des travaux (article L121-13 du Code de la consommation pour la vente à domicile). Tout dépassement = signal à fuir. Idéalement, un échéancier 30 / 40 / 30 ou 30 / 70 à la fin.",
  },
  {
    titre:
      "Promesse d'économies extraordinaires (\"-90 %\", \"facture divisée par 5\")",
    explication:
      "Une PAC bien dimensionnée fait gagner 50 à 75 % sur la facture chauffage par rapport au fioul, 40 à 55 % par rapport au gaz, 60 à 70 % vs convecteurs électriques. Au-delà de ces fourchettes, l'installateur ment ou ne sait pas calculer. Méfiez-vous des graphiques flatteurs sur fond bleu en présentation commerciale.",
  },
];

const ChoisirInstallateur = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/choisir-installateur-pompe-a-chaleur`;

  useSeo({
    title:
      "Choisir un installateur de pompe à chaleur : 12 questions + 8 pièges 2026 | ECO CVC",
    description:
      "Comment choisir un installateur de PAC en 2026 : les 12 questions à poser obligatoirement et les 8 signaux d'arnaque à fuir. Guide indépendant par ECO CVC, RGE QualiPAC en Isère.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline:
            "Choisir un installateur de pompe à chaleur : 12 questions + 8 pièges",
          datePublished: "2026-05-07",
          dateModified: "2026-05-07",
          author: { "@type": "Organization", name: "ECO CVC" },
          publisher: {
            "@type": "Organization",
            name: "ECO CVC",
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/og-image.jpg`,
            },
          },
          mainEntityOfPage: canonical,
        },
        {
          "@type": "FAQPage",
          mainEntity: QUESTIONS_A_POSER.map((q) => ({
            "@type": "Question",
            name: q.titre,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${q.pourquoi} Réponse ECO CVC : ${q.eco}`,
            },
          })),
        },
      ],
    },
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-44 pb-14 md:pt-48 md:pb-20">
          <div className="container mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">
                Choisir un installateur PAC
              </span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Guide indépendant 2026
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
                Comment choisir un installateur de pompe à chaleur en 2026
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Vous avez déjà reçu 2 ou 3 devis et vous ne savez pas comment
                les comparer objectivement ? Ce guide rassemble les{" "}
                <strong>12 questions à poser à chaque installateur</strong> et
                les <strong>8 signaux d'arnaque à fuir absolument</strong>.
                Construit à partir de 200+ chantiers ECO CVC en Isère et
                Rhône-Alpes, et des signalements DGCCRF du secteur. Aucune
                mention de concurrents — vous comparez vous-même.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href="#questions"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-blue text-white font-bold text-sm hover:bg-brand-bluedark transition-colors shadow-lifted"
                >
                  <HelpCircle className="w-4 h-4" />
                  Voir les 12 questions
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#pieges"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-brand-red text-brand-red font-bold text-sm hover:bg-brand-red hover:text-white transition-colors"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Voir les 8 pièges
                </a>
                <Link
                  to="/audit-devis-pac"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-600 font-bold text-sm hover:text-brand-blue transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Auditer un devis reçu
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Encadré avant questions */}
        <section className="py-10 bg-amber-50/50 border-y border-amber-200/50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Pourquoi ce guide est important
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  La rénovation énergétique reste l'un des secteurs les plus
                  signalés à la DGCCRF :{" "}
                  <strong>
                    18 % des chantiers PAC font l'objet d'une plainte
                  </strong>{" "}
                  (rapport DGCCRF 2024), principalement pour devis trompeurs,
                  pose défaillante ou pression commerciale. Demander les bonnes
                  questions en amont divise par 4 le risque de problème. ECO
                  CVC édite ce guide en accès libre — y compris si vous ne
                  travaillez pas avec nous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 questions */}
        <section id="questions" className="py-14 md:py-20 scroll-mt-20">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Les 12 questions à poser à chaque installateur
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Posez-les telles quelles. Un installateur sérieux y répond avec
              précision et écrit. Un installateur opaque tourne autour du pot.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {QUESTIONS_A_POSER.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-2xl bg-white border border-border p-5 hover:border-brand-blue/40 hover:shadow-soft transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-extrabold">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug mb-3">
                        « {q.titre} »
                      </h3>
                      <div className="space-y-2.5 text-sm leading-relaxed">
                        <div className="flex gap-2">
                          <HelpCircle className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
                          <p className="text-slate-600">
                            <span className="font-semibold text-slate-900">
                              Pourquoi :{" "}
                            </span>
                            {q.pourquoi}
                          </p>
                        </div>
                        <div className="flex gap-2 rounded-xl bg-brand-green/5 border border-brand-green/20 p-3">
                          <Check className="w-4 h-4 shrink-0 text-brand-green mt-0.5" />
                          <p className="text-slate-700">
                            <span className="font-semibold text-brand-green">
                              Notre réponse ECO CVC :{" "}
                            </span>
                            {q.eco}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 pièges */}
        <section
          id="pieges"
          className="py-14 md:py-20 bg-gradient-to-br from-brand-red/5 to-amber-50 scroll-mt-20"
        >
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Les 8 pièges et signaux d'arnaque à fuir
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Si vous voyez UN SEUL de ces signaux, méfiance maximale. Si vous
              en voyez deux, fuyez. Vous avez 14 jours de rétractation légale
              après toute signature à domicile.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {PIEGES.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-2xl bg-white border-2 border-brand-red/20 p-5"
                >
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
                      <X className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {p.titre}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.explication}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-white border border-border p-6">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Que faire en cas d'arnaque ?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Signalez à la DGCCRF via{" "}
                    <a
                      href="https://signal.conso.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue font-semibold hover:underline"
                    >
                      signal.conso.gouv.fr
                    </a>{" "}
                    (gratuit, anonyme possible). En cas de doute sur un devis
                    déjà reçu, utilisez notre outil{" "}
                    <Link
                      to="/audit-devis-pac"
                      className="text-brand-blue font-semibold hover:underline"
                    >
                      audit de devis PAC
                    </Link>{" "}
                    : on vérifie gratuitement la cohérence technique et
                    tarifaire en 24 h.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Critères de comparaison */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-center">
              Critères concrets pour comparer 3 devis
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-10 text-center max-w-2xl mx-auto">
              Ne comparez pas seulement le prix total. Voici les 6 critères qui
              permettent de comparer objectivement.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                {
                  icon: <Award className="w-5 h-5" />,
                  titre: "Marque + modèle exact",
                  detail:
                    "Daikin Altherma 3 H 11 kW vs PAC \"premium\" : pas pareil. Comparez les fiches techniques.",
                },
                {
                  icon: <Wrench className="w-5 h-5" />,
                  titre: "Puissance et SCOP",
                  detail:
                    "SCOP > 4 = bon ; > 4,5 = excellent. Vérifiez la cohérence avec votre logement.",
                },
                {
                  icon: <Euro className="w-5 h-5" />,
                  titre: "Prix € / kW posé",
                  detail:
                    "Standard 2026 : 1 100 à 1 600 €/kW posé pour PAC air-eau. > 2 000 €/kW = surfacturation probable.",
                },
                {
                  icon: <Calendar className="w-5 h-5" />,
                  titre: "Délai de pose",
                  detail:
                    "Réaliste : 3 à 6 semaines. Trop rapide = stock douteux. Trop lent = sous-effectif.",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  titre: "Garanties écrites",
                  detail:
                    "Constructeur (5-10 ans), pose (2 ans), décennale, contrat entretien optionnel.",
                },
                {
                  icon: <FileText className="w-5 h-5" />,
                  titre: "Aides simulées + montage",
                  detail:
                    "Montants exacts par profil. Inclus dans la prestation. Pas de \"complément à payer\".",
                },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl bg-white border border-border p-5 hover:border-brand-blue/40 hover:shadow-soft transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-3">
                    {c.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {c.titre}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {c.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title="Demander un devis ECO CVC"
          subtitle="Visite technique gratuite sous 5 jours, devis détaillé sous 48 h, dossier d'aides monté pour vous. Vous comparerez ensuite avec les autres."
        />

        {/* Liens internes */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-5 text-center">
              Aller plus loin
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { to: "/audit-devis-pac", label: "Auditer un devis reçu" },
                { to: "/simulateur-aides", label: "Simulateur aides 2026" },
                { to: "/comparateur-chauffages", label: "PAC vs gaz / fioul" },
                { to: "/calculateur", label: "Dimensionnement de puissance" },
                { to: "/eligibilite-maprimerenov", label: "Éligibilité MaPrimeRénov'" },
                { to: "/remplacement-chaudiere-fioul", label: "Sortir du fioul" },
                { to: "/remplacement-chaudiere-gaz", label: "Sortir du gaz" },
                { to: "/mythes-pompe-a-chaleur", label: "10 mythes PAC" },
                { to: "/certifications", label: "Nos certifications" },
                { to: "/contact", label: "Nous contacter" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-border text-sm font-semibold text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {link.label}
                  <ChevronRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ChoisirInstallateur;
