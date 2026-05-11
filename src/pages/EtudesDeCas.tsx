import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Phone, TrendingDown, Wallet, Home, Building2, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

type CasType = {
  id: string;
  ville: string;
  typeLogement: string;
  surface: number;
  ancien: string;
  nouveau: string;
  investissement: number;
  aides: number;
  resteACharge: number;
  factureAvant: number;
  factureApres: number;
  delaiAmortissement: number;
  ancienProfil: "particulier" | "pro";
  context: string;
};

const cas: CasType[] = [
  {
    id: "C-2025-001",
    ville: "Bourgoin-Jallieu",
    typeLogement: "Pavillon individuel années 90",
    surface: 130,
    ancien: "Chaudière fioul 2002 vieillissante",
    nouveau: "PAC air-eau Daikin Altherma 3 H, 11 kW",
    investissement: 14800,
    aides: 9500,
    resteACharge: 5300,
    factureAvant: 2900,
    factureApres: 1050,
    delaiAmortissement: 3,
    ancienProfil: "particulier",
    context: "Famille de 4 personnes, profil Jaune, sortie de fioul. Conservation des radiateurs en fonte d'origine grâce à la PAC haute température.",
  },
  {
    id: "C-2025-002",
    ville: "L'Isle-d'Abeau",
    typeLogement: "Maison RT2012",
    surface: 110,
    ancien: "Chauffage gaz condensation",
    nouveau: "PAC air-eau Atlantic Alféa Excellia, 9 kW",
    investissement: 13200,
    aides: 6800,
    resteACharge: 6400,
    factureAvant: 1850,
    factureApres: 920,
    delaiAmortissement: 7,
    ancienProfil: "particulier",
    context: "Couple, profil Violet. Demande motivée par la baisse de la prime gaz et la hausse continue des prix du gaz.",
  },
  {
    id: "C-2025-003",
    ville: "Lyon 7e",
    typeLogement: "Appartement T3 en copropriété",
    surface: 75,
    ancien: "Convecteurs électriques",
    nouveau: "Multi-split AUX, 3 unités intérieures + 1 ext.",
    investissement: 6800,
    aides: 950,
    resteACharge: 5850,
    factureAvant: 1850,
    factureApres: 720,
    delaiAmortissement: 5,
    ancienProfil: "particulier",
    context: "Investissement locatif, propriétaire bailleur. Accord syndic obtenu en 4 mois. Locataire ravi du rafraîchissement été.",
  },
  {
    id: "C-2025-004",
    ville: "Voiron",
    typeLogement: "Ferme rénovée, hameau d'altitude",
    surface: 180,
    ancien: "Chaudière fioul + appoint poêle bûches",
    nouveau: "PAC air-eau Mitsubishi Ecodan Plus, 14 kW + maintien poêle",
    investissement: 18500,
    aides: 11200,
    resteACharge: 7300,
    factureAvant: 3400,
    factureApres: 1200,
    delaiAmortissement: 3,
    ancienProfil: "particulier",
    context: "Profil Bleu (revenus très modestes), sortie de fioul. Coup de pouce maximum + bonus fioul. Maintien du poêle pour les pics de froid.",
  },
  {
    id: "C-2025-005",
    ville: "Vienne",
    typeLogement: "Maison de bourg en pierre",
    surface: 140,
    ancien: "Chaudière gaz vieillissante",
    nouveau: "PAC air-eau haute température + ballon thermo 250L",
    investissement: 16500,
    aides: 7800,
    resteACharge: 8700,
    factureAvant: 2100,
    factureApres: 980,
    delaiAmortissement: 8,
    ancienProfil: "particulier",
    context: "Profil Violet. Centre-ville zone ABF : déclaration préalable et habillage discret de l'unité extérieure. Conservation radiateurs fonte.",
  },
  {
    id: "C-2025-006",
    ville: "Bourgoin-Jallieu",
    typeLogement: "Boulangerie-pâtisserie centre-ville",
    surface: 95,
    ancien: "Vitrines anciennes + chambre froide vieillissante",
    nouveau: "Chambre froide positive 8 m³ + 2 vitrines réfrigérées modernes",
    investissement: 22000,
    aides: 3500,
    resteACharge: 18500,
    factureAvant: 4800,
    factureApres: 2300,
    delaiAmortissement: 7,
    ancienProfil: "pro",
    context: "Boulangerie indépendante. Sondes connectées HACCP, contrat maintenance trimestriel. Pose en 3 jours pendant fermeture estivale.",
  },
  {
    id: "C-2025-007",
    ville: "Saint-Priest",
    typeLogement: "Restaurant brasserie 80 couverts",
    surface: 220,
    ancien: "Climatisation en panne récurrente, ventilation insuffisante",
    nouveau: "Climatisation tertiaire VRV multi-zone + hotte aspirante neuve",
    investissement: 28000,
    aides: 4200,
    resteACharge: 23800,
    factureAvant: 5200,
    factureApres: 3100,
    delaiAmortissement: 11,
    ancienProfil: "pro",
    context: "Restaurant familial. Pose en 4 nuits successives (lundi-mardi-mercredi-jeudi nuit) pour ne pas couper l'activité. Confort client transformé.",
  },
  {
    id: "C-2025-008",
    ville: "Lyon 6e",
    typeLogement: "Pharmacie d'officine",
    surface: 110,
    ancien: "Pas de monitoring connecté, pas de clim officine",
    nouveau: "Armoire vaccins 600L + monitoring IoT + clim officine gainable",
    investissement: 15500,
    aides: 1200,
    resteACharge: 14300,
    factureAvant: 1650,
    factureApres: 1850,
    delaiAmortissement: 12,
    ancienProfil: "pro",
    context: "Pharmacie indépendante. Conformité ARS désormais assurée (sondes étalonnées + alertes SMS). Clim discrète gainable invisible en zone client.",
  },
];

const formatEuro = (n: number) => n.toLocaleString("fr-FR") + " €";

const EtudesDeCas = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/etudes-de-cas`;

  useSeo({
    title: "Études de cas ECO CVC : projets PAC chiffrés réels | RGE QualiPAC",
    description:
      "8 études de cas anonymisées et chiffrées : PAC, climatisation, froid commercial. Investissement, aides, économies, amortissement. Projets réalisés par ECO CVC en Isère et Rhône-Alpes.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
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
              <span className="text-foreground font-medium">Études de cas</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Études de cas <span className="text-gradient-brand">chiffrées et anonymisées</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pour vous aider à vous projeter sur votre propre projet, voici 8 chantiers récents réalisés par ECO CVC en Isère et Rhône-Alpes. Chiffres réels, anonymisés (anonymat client préservé selon RGPD).
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {cas.map((c) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl border border-border p-7 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                        {c.ancienProfil === "pro" ? "🏢 Professionnel" : "🏠 Particulier"} · {c.ville}
                      </span>
                      <h2 className="font-display text-xl font-bold mt-1 leading-tight">{c.typeLogement}</h2>
                      <p className="text-sm text-muted-foreground">{c.surface} m² · réf. {c.id}</p>
                    </div>
                  </div>

                  <div className="mb-4 text-sm">
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Avant :</strong> {c.ancien}</p>
                    <p className="text-muted-foreground"><strong className="text-foreground">Après :</strong> {c.nouveau}</p>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed mb-5 italic">{c.context}</p>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <Stat label="Investissement" value={formatEuro(c.investissement)} />
                    <Stat label="Aides obtenues" value={`-${formatEuro(c.aides)}`} valueClassName="text-brand-green" />
                    <Stat label="Reste à charge" value={formatEuro(c.resteACharge)} valueClassName="font-bold" />
                    <Stat label="Amortissement" value={`${c.delaiAmortissement} ans`} />
                  </div>

                  <div className="bg-brand-blue/5 rounded-xl p-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">Économies / an</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold text-brand-blue">{formatEuro(c.factureAvant - c.factureApres)}</span>
                      <span className="text-xs text-muted-foreground">soit {formatEuro(c.factureAvant)} → {formatEuro(c.factureApres)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white rounded-3xl border-2 border-brand-blue/20 p-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Votre projet ressemble à un de ces cas ?</h2>
              <p className="text-foreground/85 mb-6 leading-relaxed">
                Demandez une étude personnalisée gratuite : nous vous donnons un chiffrage précis basé sur votre logement, vos revenus et votre énergie actuelle.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/simulateur-aides" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
                  Simuler mon projet <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+33629634045" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50">
                  <Phone className="w-4 h-4" /> 06 29 63 40 45
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

const Stat = ({ label, value, valueClassName = "" }: { label: string; value: string; valueClassName?: string }) => (
  <div>
    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
    <div className={`font-display text-base ${valueClassName}`}>{value}</div>
  </div>
);

export default EtudesDeCas;
