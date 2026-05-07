import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Beaker, AlertTriangle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

type Fluide = {
  nom: string;
  prg: number;
  inflammable: string;
  utilisation: string;
  status: "actuel" | "interdit" | "futur";
  description: string;
};

const fluides: Fluide[] = [
  {
    nom: "R32",
    prg: 675,
    inflammable: "A2L (légèrement inflammable)",
    utilisation: "Standard 2026 pour PAC et climatiseurs résidentiels",
    status: "actuel",
    description: "Le R32 est devenu le fluide standard depuis 2018-2020. PRG 3 fois inférieur au R410A qu'il remplace, performance énergétique légèrement supérieure, charge réduite (-20% de fluide nécessaire). Pratiquement toutes les nouvelles PAC posées en 2026 utilisent du R32.",
  },
  {
    nom: "R410A",
    prg: 2088,
    inflammable: "A1 (non inflammable)",
    utilisation: "Anciennes installations 2005-2024, INTERDIT en neuf depuis 2025",
    status: "interdit",
    description: "Le R410A a été le standard des PAC pendant 20 ans. Son PRG très élevé (2088) le rend non-conforme à la réglementation F-Gaz européenne. Interdit dans les nouveaux équipements depuis le 1er janvier 2025. Recharges encore possibles sur les machines existantes mais à coût croissant.",
  },
  {
    nom: "R290 (Propane)",
    prg: 3,
    inflammable: "A3 (inflammable)",
    utilisation: "PAC haut de gamme, usage croissant 2026-2030",
    status: "futur",
    description: "Le propane est l'avenir : PRG quasi nul (3), excellent rendement énergétique (COP +5-10% vs R32). Limite : inflammable, donc charge frigorifique limitée par la réglementation (max 152 grammes par circuit indoor). Réservé aux PAC monobloc extérieures à terme.",
  },
  {
    nom: "R744 (CO2)",
    prg: 1,
    inflammable: "A1 (non inflammable)",
    utilisation: "Froid commercial professionnel, ECS thermodynamique",
    status: "actuel",
    description: "Le CO2 a un PRG de 1 (référence absolue). Utilisé surtout en froid commercial (supermarchés, chambres froides industrielles) et de plus en plus dans les ballons thermodynamiques résidentiels. Performance dégradée en climat très chaud. Pression élevée nécessite équipement spécifique.",
  },
  {
    nom: "R134a",
    prg: 1430,
    inflammable: "A1 (non inflammable)",
    utilisation: "Froid commercial, climatisation auto",
    status: "interdit",
    description: "Encore présent dans les anciennes vitrines réfrigérées et chambres froides commerciales. Interdit en neuf depuis 2022 (sauf dérogations spécifiques). Recharges autorisées sur installations existantes jusqu'en 2030 environ.",
  },
  {
    nom: "R454B",
    prg: 466,
    inflammable: "A2L (légèrement inflammable)",
    utilisation: "Remplaçant en cours du R410A pour gros systèmes",
    status: "actuel",
    description: "Mélange récent (2023+) qui remplace le R410A pour les systèmes commerciaux et tertiaires. PRG 4,5x inférieur au R410A. Adoption progressive sur les nouvelles installations VRV/VRF.",
  },
];

const GlossaireFluides = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/glossaire-fluides-frigorigenes`;

  useSeo({
    title: "Glossaire fluides frigorigènes : R32, R290, R410A, R744 | ECO CVC",
    description:
      "Tous les fluides frigorigènes 2026 expliqués : R32, R290 (propane), R410A interdit, R744 (CO2), R134a, R454B. PRG, inflammabilité, usages. Guide ECO CVC.",
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
              <span className="text-foreground font-medium">Glossaire fluides frigorigènes</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                <Beaker className="w-3.5 h-3.5" /> Référentiel technique
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Glossaire des <span className="text-gradient-brand">fluides frigorigènes</span> 2026
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                R32, R290, R410A, R744… Le fluide qui circule dans votre PAC ou climatisation a un impact sur sa performance, son prix et sa réglementation. Voici tous les fluides à connaître.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-14 md:pb-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              {fluides.map((f) => (
                <motion.div key={f.nom}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl border border-border p-7"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="font-display text-3xl font-bold text-brand-blue">{f.nom}</div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      f.status === "actuel" ? "bg-brand-green/15 text-brand-green"
                      : f.status === "futur" ? "bg-brand-blue/15 text-brand-blue"
                      : "bg-red-100 text-red-700"
                    }`}>
                      {f.status === "actuel" && "Standard 2026"}
                      {f.status === "futur" && "Futur"}
                      {f.status === "interdit" && "Interdit en neuf"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">PRG</div>
                      <div className="font-display text-xl font-bold">{f.prg}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Inflammabilité</div>
                      <div className="text-sm">{f.inflammable}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Usage</div>
                      <div className="text-xs leading-tight">{f.utilisation}</div>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Comprendre le PRG</h2>
            <p className="text-foreground/85 leading-relaxed mb-4">
              Le <strong>PRG (Pouvoir de Réchauffement Global)</strong> ou GWP (Global Warming Potential) est l'indicateur n°1 d'impact climatique d'un fluide. C'est sa contribution à l'effet de serre comparée au CO2 (référence = 1).
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /><span><strong>PRG 1-200 :</strong> Très bon (R290, R744)</span></li>
              <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /><span><strong>PRG 200-1000 :</strong> Bon (R32 = 675)</span></li>
              <li className="flex gap-3 items-start"><AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /><span><strong>PRG 1000-2500 :</strong> Mauvais (R410A = 2088, R134a = 1430)</span></li>
              <li className="flex gap-3 items-start"><AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /><span><strong>PRG &gt; 2500 :</strong> Très mauvais (anciens fluides interdits comme R404A à 3922)</span></li>
            </ul>
            <p className="text-foreground/85 leading-relaxed">
              La réglementation F-Gaz européenne impose la baisse progressive du PRG moyen des fluides commercialisés. À long terme, seuls les PRG &lt; 150 seront autorisés sur les nouveaux équipements.
            </p>
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default GlossaireFluides;
