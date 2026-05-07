import { Link } from "react-router-dom";
import { useSeo } from "@/lib/useSeo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { cities } from "@/data/cities";
import { metiers } from "@/data/metiers-pro";
import { depannageCases } from "@/data/depannage-cases";
import { devisConfigs } from "@/data/devis";
import { aidesCollectivites } from "@/data/aides-collectivites";
import { quartiers } from "@/data/quartiers";

type Item = { href: string; label: string };

const Section = ({ title, items }: { title: string; items: Item[] }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-brand-blue mb-3">{title}</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1.5 text-sm">
      {items.map((i) => (
        <li key={i.href}>
          <Link
            to={i.href}
            className="text-slate-700 hover:text-brand-blue hover:underline"
          >
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const PlanDuSite = () => {
  useSeo({
    title: "Plan du site — ECO CVC",
    description:
      "Plan du site ECO CVC : toutes les pages classées par catégorie (services, villes, articles, outils, dépannage, métiers pro).",
    canonical: "https://ecocvc.pro/plan-du-site",
  });

  const principales: Item[] = [
    { href: "/", label: "Accueil" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/installation", label: "Installation" },
    { href: "/maintenance", label: "Maintenance" },
    { href: "/depannage", label: "Dépannage" },
    { href: "/ventilation", label: "Ventilation" },
    { href: "/chambre-froide", label: "Chambre froide" },
    { href: "/vitrines-refrigerees", label: "Vitrines réfrigérées" },
    { href: "/produits", label: "Produits AUX" },
    { href: "/boutique", label: "Boutique" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  const climSection: Item[] = [
    { href: "/climatisation-reversible-990-euros", label: "Clim réversible à 990 € (offre phare)" },
    { href: "/tarifs-climatisation-reversible", label: "Tous nos tarifs climatisation" },
    { href: "/climatisation-copropriete", label: "Clim en copropriété" },
    { href: "/climatisation-gite-airbnb", label: "Clim pour gîte / Airbnb" },
    { href: "/pac-vs-clim-reversible", label: "PAC air-eau vs clim réversible" },
    ...cities.map((c) => ({
      href: `/climatisation-reversible/${c.slug}`,
      label: `Clim réversible ${c.name}`,
    })),
  ];

  const outils: Item[] = [
    { href: "/calculateur", label: "Calculateur de puissance PAC" },
    { href: "/simulateur-aides", label: "Simulateur d'aides MaPrimeRénov' & CEE" },
    { href: "/eligibilite-maprimerenov", label: "Quiz éligibilité MaPrimeRénov'" },
    { href: "/comparateur-chauffages", label: "Comparateur de chauffages" },
    { href: "/audit-devis-pac", label: "Audit de devis PAC" },
    { href: "/calendrier-aides-2026", label: "Calendrier des aides 2026" },
  ];

  const ressources: Item[] = [
    { href: "/blog", label: "Blog ECO CVC" },
    { href: "/faq", label: "FAQ" },
    { href: "/glossaire", label: "Glossaire CVC" },
    { href: "/glossaire-fluides-frigorigenes", label: "Glossaire fluides frigorigènes" },
    { href: "/avis", label: "Avis clients" },
    { href: "/etudes-de-cas", label: "Études de cas" },
    { href: "/parrainage", label: "Parrainage" },
    { href: "/recrutement", label: "Recrutement" },
  ];

  const legal: Item[] = [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/cgv", label: "CGV" },
    { href: "/confidentialite", label: "Politique de confidentialité" },
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <nav className="text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:underline">
            Accueil
          </Link>{" "}
          › Plan du site
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan du site</h1>
        <p className="text-slate-600 mb-10 max-w-2xl">
          Toutes les pages d'ecocvc.pro classées par catégorie. Pour les robots :{" "}
          <a href="/sitemap.xml" className="text-brand-blue hover:underline">
            sitemap.xml
          </a>{" "}
          ·{" "}
          <a href="/feed.xml" className="text-brand-blue hover:underline">
            flux RSS
          </a>
          .
        </p>
        <Section title="Pages principales" items={principales} />
        <Section title="Climatisation réversible (offre phare 990 €)" items={climSection} />
        <Section title="Outils gratuits" items={outils} />
        <Section
          title="Devis dédiés"
          items={devisConfigs.map((d) => ({ href: `/${d.slug}`, label: d.title }))}
        />
        <Section
          title="Aides locales par métropole"
          items={aidesCollectivites.map((a) => ({
            href: `/aides-locales/${a.slug}`,
            label: a.name,
          }))}
        />
        <Section
          title={`Zones d'intervention (${cities.length} communes)`}
          items={cities.map((c) => ({
            href: `/pompe-a-chaleur/${c.slug}`,
            label: `Pompe à chaleur ${c.name}`,
          }))}
        />
        <Section
          title={`Clim par quartier (${quartiers.length} sous-zones)`}
          items={quartiers.map((q) => ({
            href: `/quartier/${q.slug}`,
            label: `${q.name} (${q.cityName})`,
          }))}
        />
        <Section
          title="Métiers professionnels"
          items={metiers.map((m) => ({
            href: `/froid-commercial/${m.slug}`,
            label: `Frigoriste ${m.name}`,
          }))}
        />
        <Section
          title="Dépannage par panne"
          items={depannageCases.map((d) => ({
            href: `/depannage/${d.slug}`,
            label: d.problem,
          }))}
        />
        <Section
          title="Blog & guides"
          items={articles.map((a) => ({ href: `/blog/${a.slug}`, label: a.title }))}
        />
        <Section title="Ressources" items={ressources} />
        <Section title="Mentions légales" items={legal} />
      </main>
      <Footer />
    </>
  );
};

export default PlanDuSite;
