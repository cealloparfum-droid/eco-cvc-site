import { motion } from "framer-motion";
import { Award, ShieldCheck, FileCheck, BadgeCheck, Leaf, ExternalLink, Euro, Banknote, Wallet, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import logoQualiPAC from "@/assets/certifications/qualipac.png";
import logoQualiPV from "@/assets/certifications/qualipv.png";
import logoBureauVeritas from "@/assets/certifications/bureau-veritas.png";
import logoQualitEnR from "@/assets/certifications/qualitenr.png";
import logoMaafPro from "@/assets/certifications/maaf-pro.png";
import logoMarianne from "@/assets/certifications/marianne-republique.png";

const certifs = [
  {
    code: "Qualit'EnR",
    name: "Organisme de qualification de référence",
    description:
      "Reconnu par l'État, Qualit'EnR est l'organisme qui délivre les qualifications RGE QualiPAC, QualiPV, QualiBois, QualiSol… Notre adhésion garantit le suivi continu de nos compétences et notre engagement qualité dans la transition énergétique.",
    logo: logoQualitEnR,
    verifyUrl: "https://www.qualit-enr.org/professionnels/",
    verifyLabel: "Annuaire Qualit'EnR",
  },
  {
    code: "RGE QualiPAC",
    name: "Qualification Pompes à Chaleur",
    description:
      "Délivrée par Qualit'EnR, cette qualification atteste de notre compétence sur les pompes à chaleur air-air, air-eau, eau-eau et hybrides. Indispensable pour MaPrimeRénov' et les CEE.",
    logo: logoQualiPAC,
    verifyUrl: "https://france-renov.gouv.fr/annuaire-rge",
    verifyLabel: "Annuaire RGE — France Rénov'",
  },
  {
    code: "RGE QualiPV",
    name: "Qualification photovoltaïque",
    description:
      "Délivrée par Qualit'EnR, elle atteste de notre maîtrise des installations solaires photovoltaïques. Permet de proposer des solutions hybrides clim + solaire et d'accéder aux aides dédiées.",
    logo: logoQualiPV,
    verifyUrl: "https://france-renov.gouv.fr/annuaire-rge",
    verifyLabel: "Annuaire RGE — France Rénov'",
  },
  {
    code: "MAAF Pro",
    name: "Assurance décennale",
    description:
      "Notre garantie décennale est souscrite auprès de MAAF Pro, partenaire de référence des artisans français depuis 1950. Elle couvre vos chantiers pendant 10 ans après la réception des travaux : un véritable gage de qualité et de sérieux pour nos clients.",
    logo: logoMaafPro,
    verifyUrl: "https://www.maaf.fr/professionnels",
    verifyLabel: "MAAF Pro · Assurance artisans",
  },
  {
    code: "Bureau Veritas",
    name: "Audit & certification indépendante",
    description:
      "Organisme international fondé en 1828, Bureau Veritas vérifie nos process qualité et notre conformité réglementaire. Une garantie supplémentaire pour vos chantiers exigeants.",
    logo: logoBureauVeritas,
    verifyUrl: "https://www.bureauveritas.fr/",
    verifyLabel: "Bureau Veritas · Officiel",
  },
];

const aides = [
  {
    code: "MaPrimeRénov'",
    montant: "Jusqu'à 5 000 €",
    icon: Banknote,
    desc: "Aide de l'État pour la rénovation énergétique. Versée directement par l'Anah après travaux. Cumulable avec les CEE.",
    eligibility: "Sous conditions de revenus · résidence principale · 15 ans d'âge",
    color: "blue" as const,
  },
  {
    code: "Certificats Économies d'Énergie (CEE)",
    montant: "Jusqu'à 4 000 €",
    icon: Sparkles,
    desc: "Prime versée par les fournisseurs d'énergie pour financer vos travaux de rénovation thermique. Sans condition de revenus.",
    eligibility: "Tous propriétaires · résidence principale ou secondaire",
    color: "green" as const,
  },
  {
    code: "TVA réduite 5,5 %",
    montant: "−14,5 % vs 20 %",
    icon: Euro,
    desc: "Taux de TVA réduit appliqué directement sur la facture pour les pompes à chaleur installées par un professionnel RGE.",
    eligibility: "Logement de plus de 2 ans · pose par artisan RGE",
    color: "amber" as const,
  },
  {
    code: "Éco-PTZ",
    montant: "Jusqu'à 50 000 €",
    icon: Wallet,
    desc: "Prêt à taux zéro sur 20 ans pour financer le reste à charge de vos travaux. Compatible avec les autres aides.",
    eligibility: "Sans condition de revenus · résidence principale",
    color: "red" as const,
  },
];

const aideTints = {
  blue: "from-brand-blue/10 to-brand-sky/10 border-brand-blue/30 text-brand-blue",
  green: "from-brand-green/10 to-emerald-100/30 border-brand-green/30 text-brand-green",
  amber: "from-amber-100/40 to-yellow-100/30 border-amber-300/50 text-amber-600",
  red: "from-brand-red/10 to-orange-100/30 border-brand-red/30 text-brand-red",
};

const partners = [
  {
    name: "Daikin",
    level: "Installateur Pro+",
    desc: "Garantie constructeur étendue à 5 ans, SAV prioritaire, formation continue au siège de Lyon.",
  },
  {
    name: "Mitsubishi Electric",
    level: "Partenaire Diamond",
    desc: "Accès aux dernières gammes Zubadan & Hyper Heating, pièces détachées sous 48h.",
  },
  {
    name: "Atlantic",
    level: "Installateur Expert",
    desc: "Formation approfondie sur la gamme Takao & Fujitsu, échanges directs avec le support technique.",
  },
];

const Certifications = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow="Certifications & qualifications"
          title={
            <>
              Des <span className="text-gradient-brand">gages de qualité</span> reconnus par l'État.
            </>
          }
          subtitle="Nos certifications ne sont pas un argument marketing : elles conditionnent votre éligibilité aux aides (MaPrimeRénov', CEE) et la validité de votre installation."
          breadcrumb={[{ label: "Certifications" }]}
          heroImage={{
            src: logoMarianne,
            alt: "Logo officiel République Française — Liberté, Égalité, Fraternité",
            caption: "Reconnu par la République Française",
            badge: "Service public",
            fill: false,
          }}
        />

        {/* Certifs grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {certifs.map((c, i) => (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative bg-white rounded-3xl border border-border p-8 hover:shadow-lifted transition-shadow overflow-hidden"
                >
                  <div className="relative grid grid-cols-[auto,1fr] gap-6 items-start">
                    <div className="w-28 h-28 rounded-2xl bg-slate-50 border border-border p-4 flex items-center justify-center shrink-0">
                      <img src={c.logo} alt={`Logo officiel ${c.code}`} className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-1">{c.code}</h3>
                      <div className="text-sm font-semibold text-muted-foreground mb-3">{c.name}</div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{c.description}</p>
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-bluedark transition-colors group"
                      >
                        <BadgeCheck className="w-3.5 h-3.5 text-brand-green" />
                        Vérifier sur {c.verifyLabel}
                        <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi ça compte */}
        <section className="py-16 md:py-24 bg-slate-50/60 border-y border-border">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Pour vous"
                  title={<>Pourquoi <span className="text-gradient-brand">ces certifications</span> comptent.</>}
                  subtitle="Choisir un artisan RGE QualiPAC, c'est la garantie d'un travail conforme et d'un accès direct aux aides de l'État."
                />
                <div className="space-y-4 mt-8">
                  {[
                    {
                      icon: BadgeCheck,
                      title: "Éligibilité aux aides",
                      text: "Sans label RGE, pas de MaPrimeRénov', pas de CEE, pas d'éco-PTZ. C'est la règle.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Installations aux normes",
                      text: "Respect strict des normes NF DTU 65.16, F-Gaz, RT 2020 et décrets en vigueur.",
                    },
                    {
                      icon: FileCheck,
                      title: "Recours en cas de litige",
                      text: "Un artisan certifié est encadré : assurance décennale, médiation en cas de conflit.",
                    },
                    {
                      icon: Leaf,
                      title: "Performance énergétique",
                      text: "Dimensionnement juste, matériel pertinent et pose dans les règles — la clim performe vraiment.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-4 bg-white rounded-2xl p-5 border border-border"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.text}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-2 gap-4 sticky top-28"
              >
                {[
                  { label: "QualiPAC", sub: "Pompes à chaleur", logo: logoQualiPAC },
                  { label: "QualiPV", sub: "Photovoltaïque", logo: logoQualiPV },
                  { label: "MAAF Pro", sub: "Assurance décennale", logo: logoMaafPro },
                  { label: "Bureau Veritas", sub: "Audit indépendant", logo: logoBureauVeritas },
                ].map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="aspect-square rounded-3xl bg-white border border-border p-5 flex flex-col items-center justify-between shadow-soft hover:shadow-lifted transition-shadow"
                  >
                    <div className="flex-1 flex items-center justify-center w-full">
                      <img src={c.logo} alt={`Logo officiel ${c.label}`} className="max-h-24 max-w-full object-contain" loading="lazy" />
                    </div>
                    <div className="text-center">
                      <div className="text-base font-extrabold text-slate-900 leading-tight">{c.label}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{c.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <SectionHeading
              eyebrow="Partenaires constructeurs"
              title={<>Des <span className="text-gradient-brand">marques de référence</span>, pas de bricolage.</>}
              subtitle="Nous sommes agréés par les constructeurs majeurs du secteur. Cela nous permet de vous proposer du matériel de qualité avec des garanties étendues."
            />
            <div className="grid md:grid-cols-3 gap-5 mt-14">
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-border p-7"
                >
                  <div className="text-[10px] font-bold tracking-widest uppercase text-brand-red mb-2">{p.level}</div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mémo Aides 2026 */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-bluedark via-brand-blue to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(500px circle at 10% 30%, rgba(59,130,246,0.4), transparent 60%)",
                "radial-gradient(500px circle at 90% 70%, rgba(16,185,129,0.3), transparent 60%)",
                "radial-gradient(500px circle at 10% 30%, rgba(59,130,246,0.4), transparent 60%)",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3 h-3" />
                Aides 2026
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-4">
                Avec un artisan RGE, vous cumulez <span className="text-gradient-hot">jusqu'à 9 000 €</span> d'aides.
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                MaPrimeRénov', CEE, TVA 5,5 %, Éco-PTZ : nos certifications ouvrent l'accès aux principales aides de l'État. On vous accompagne dans le montage de chaque dossier.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {aides.map((a, i) => (
                <motion.div
                  key={a.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`bg-gradient-to-br ${aideTints[a.color]} backdrop-blur-md rounded-2xl border bg-white/5 p-6 hover:bg-white/10 transition-colors`}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                      <a.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3 mb-1">
                        <h3 className="text-lg font-extrabold text-white">{a.code}</h3>
                        <span className="text-sm font-bold text-white/95 whitespace-nowrap">{a.montant}</span>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed mb-3">{a.desc}</p>
                      <div className="text-[11px] text-white/65 border-t border-white/15 pt-2.5">
                        <span className="font-bold">Éligibilité :</span> {a.eligibility}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center">
              <p className="text-sm text-white/85 mb-4">
                Vous voulez savoir précisément à combien vous avez droit ? On simule pour vous en moins d'une minute.
              </p>
              <Link
                to="/contact?service=installation&aide=mpr"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-bluedark font-extrabold hover:bg-slate-100 transition-colors shadow-lifted"
              >
                Estimer mes aides en 1 min
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-3 text-[11px] text-white/60">
                Source officielle :{" "}
                <a
                  href="https://france-renov.gouv.fr/aides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  france-renov.gouv.fr
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTABand variant="certifications" />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Certifications;
