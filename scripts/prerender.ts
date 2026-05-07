/**
 * Prérend chaque route en HTML statique pour l'indexation Google.
 *
 * Pourquoi : le site est une SPA React. Sans prérendu, Googlebot doit
 * exécuter du JavaScript pour voir le contenu, ce qui ralentit et fragilise
 * l'indexation. Avec ce script, chaque URL sert un HTML déjà rempli avec
 * <title>, <meta>, JSON-LD et le contenu textuel principal de la page.
 * React prend le relais côté client (createRoot écrase le contenu de #root).
 *
 * Routes couvertes :
 *  - Pages statiques (15)        — title + description génériques
 *  - 18 pages villes             — contenu complet (intro, FAQ, quartiers…)
 *  - 15 articles blog            — contenu complet
 *  - 4 pages devis               — contenu complet
 *  - FAQ + Glossaire + Avis + Blog hub (4)
 *
 * Total ≈ 56 fichiers HTML statiques générés dans `dist/<route>/index.html`.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cities } from "../src/data/cities";
import { articles } from "../src/data/articles";
import { devisConfigs } from "../src/data/devis";
import { faqGroups } from "../src/data/faq";
import { glossary } from "../src/data/glossary";
import { metiers } from "../src/data/metiers-pro";
import { depannageCases } from "../src/data/depannage-cases";
import { aidesCollectivites } from "../src/data/aides-collectivites";
import { marques } from "../src/data/marques";
import { codesErreur } from "../src/data/codes-erreur";
import { comparatifsMarques } from "../src/data/comparatifs-marques";
import { dimensionnements } from "../src/data/dimensionnement-pieces";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");
const BASE = "https://ecocvc.pro";
const OG_IMAGE = `${BASE}/og-image.jpg`;

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

type Meta = {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object | object[];
  bodyHtml: string;
};

let template = "";

async function loadTemplate() {
  template = await fs.readFile(path.join(DIST, "index.html"), "utf-8");
}

function buildHtml({ title, description, canonical, jsonLd, bodyHtml }: Meta) {
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escape(description)}" />`,
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escape(title)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escape(description)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escape(title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escape(description)}" />`,
  );

  // Injecte JSON-LD additionnels avant </head>
  if (jsonLd) {
    const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    const scripts = arr
      .map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`)
      .join("\n    ");
    html = html.replace(/<\/head>/, `    ${scripts}\n  </head>`);
  }

  // Le contenu textuel SEO est inséré dans #root. React (createRoot) écrasera
  // ce contenu au montage côté client. Googlebot voit le texte directement.
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root"><div data-prerendered="seo">${bodyHtml}</div></div>`,
  );

  return html;
}

async function writeRoute(routePath: string, meta: Meta) {
  const html = buildHtml(meta);
  const dir = routePath === "/" ? DIST : path.join(DIST, routePath.replace(/^\//, ""));
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "index.html"), html, "utf-8");
}

// ─────────────────────────────────────────────────────────────────
// Helpers de rendu HTML SEO

const breadcrumbHtml = (items: { label: string; href?: string }[]) =>
  `<nav aria-label="fil d'Ariane"><ol>${items
    .map((i) =>
      i.href
        ? `<li><a href="${i.href}">${escape(i.label)}</a></li>`
        : `<li>${escape(i.label)}</li>`,
    )
    .join("")}</ol></nav>`;

const faqHtml = (faq: { q: string; a: string }[]) =>
  `<section aria-labelledby="faq-heading"><h2 id="faq-heading">Questions fréquentes</h2>${faq
    .map(
      (f) =>
        `<details><summary>${escape(f.q)}</summary><p>${escape(f.a)}</p></details>`,
    )
    .join("")}</section>`;

// ─────────────────────────────────────────────────────────────────
// Pages statiques (les pages de service sans data — on injecte juste un
// title + description optimisés pour le SEO local)

const staticPages: { path: string; title: string; description: string; h1: string; intro: string }[] = [
  {
    path: "/qui-sommes-nous",
    title: "Qui sommes-nous — ECO CVC, artisan RGE QualiPAC en Isère",
    description:
      "ECO CVC, entreprise artisanale CVC à Nivolas-Vermelle (38). Climatisation, pompe à chaleur, ventilation et froid commercial en Isère et Rhône-Alpes. RGE QualiPAC.",
    h1: "Qui sommes-nous",
    intro:
      "ECO CVC est une entreprise artisanale spécialisée dans la climatisation, la pompe à chaleur, la ventilation et le froid commercial. Implantée à Nivolas-Vermelle dans le Nord-Isère, nous intervenons sur toute la région Rhône-Alpes (Isère, Rhône, Loire, Savoie, Haute-Savoie). Certifiés RGE QualiPAC, nous accompagnons particuliers et professionnels avec un service complet : étude technique gratuite, installation, entretien annuel et dépannage.",
  },
  {
    path: "/installation",
    title: "Installation pompe à chaleur & climatisation — ECO CVC, RGE QualiPAC",
    description:
      "Installation de pompes à chaleur (air-air, air-eau) et climatisations réversibles en Isère et Rhône-Alpes. Mono-split, multi-split, gainable. Devis gratuit, aides MaPrimeRénov' et CEE.",
    h1: "Installation pompe à chaleur & climatisation réversible",
    intro:
      "Nos artisans RGE QualiPAC installent pompes à chaleur air-eau et air-air, climatisations réversibles mono-split, multi-split et gainables, pour les particuliers et les professionnels en Isère et Rhône-Alpes. Étude thermique gratuite, dimensionnement précis, pose en règles de l'art.",
  },
  {
    path: "/maintenance",
    title: "Maintenance & entretien PAC, climatisation — ECO CVC Isère",
    description:
      "Contrat d'entretien annuel pour pompes à chaleur et climatisations en Isère et Rhône-Alpes. Visite obligatoire (décret 2020), dépannage prioritaire. Tarifs 180-280 €/an.",
    h1: "Maintenance et entretien CVC",
    intro:
      "L'entretien annuel d'une pompe à chaleur ou d'une climatisation supérieure à 4 kW est obligatoire (décret 2020-912). Nos contrats d'entretien à 180-280 €/an incluent la visite technique annuelle, le contrôle du fluide frigorigène, le nettoyage des échangeurs et la priorité de dépannage en cas de panne.",
  },
  {
    path: "/depannage",
    title: "Dépannage pompe à chaleur & climatisation — ECO CVC, intervention rapide",
    description:
      "Dépannage pompe à chaleur, climatisation et ventilation en Isère et Rhône-Alpes. Intervention sous 24-48h. Diagnostic, réparation, remplacement pièces. Toutes marques.",
    h1: "Dépannage pompe à chaleur & climatisation",
    intro:
      "Panne de pompe à chaleur ou de climatisation ? Nos techniciens interviennent sous 24 à 48h en Isère, Rhône-Alpes et Auvergne-Rhône-Alpes. Diagnostic précis, devis transparent, réparation toutes marques. Clients sous contrat d'entretien prioritaires.",
  },
  {
    path: "/produits",
    title: "Produits AUX, Daikin, Mitsubishi — gamme PAC et climatisation ECO CVC",
    description:
      "Découvrez notre gamme de pompes à chaleur et climatisations : AUX, Daikin, Mitsubishi Electric, Atlantic. Modèles silencieux, inverter, plage étendue. Devis gratuit en Isère.",
    h1: "Notre gamme produits — PAC et climatisation",
    intro:
      "ECO CVC distribue les meilleures marques du marché : AUX en milieu de gamme, Daikin et Mitsubishi Electric en haut de gamme, Atlantic pour le marché français. Tous nos modèles sont inverter, silencieux et adaptés au climat de la région Rhône-Alpes.",
  },
  {
    path: "/certifications",
    title: "Certifications RGE QualiPAC, F-Gaz — ECO CVC, artisan certifié",
    description:
      "ECO CVC est certifié RGE QualiPAC et titulaire de l'attestation F-Gaz, garantissant la qualité de nos installations et l'éligibilité de vos travaux à MaPrimeRénov' et CEE.",
    h1: "Nos certifications professionnelles",
    intro:
      "ECO CVC détient les qualifications RGE QualiPAC et F-Gaz, indispensables pour réaliser des installations de pompe à chaleur conformes et permettre à nos clients de bénéficier des aides MaPrimeRénov', Coup de pouce chauffage et prime CEE. Notre numéro RGE est vérifiable sur france-renov.gouv.fr.",
  },
  {
    path: "/calculateur",
    title: "Calculateur d'aides PAC : MaPrimeRénov', CEE — simulation gratuite",
    description:
      "Estimez en 30 secondes les aides MaPrimeRénov', CEE et reste à charge pour votre pompe à chaleur en Isère et Rhône-Alpes. Calculateur gratuit, résultat immédiat.",
    h1: "Calculateur d'aides — MaPrimeRénov' & CEE",
    intro:
      "Notre calculateur estime gratuitement le montant des aides MaPrimeRénov', Coup de pouce chauffage CEE et le reste à charge pour votre projet de pompe à chaleur ou climatisation. Résultat immédiat, sans engagement, en moins de 30 secondes.",
  },
  {
    path: "/chambre-froide",
    title: "Chambre froide professionnelle — installation Isère, Rhône-Alpes",
    description:
      "Chambres froides positives et négatives sur mesure pour boulangerie, restaurant, traiteur, supérette en Isère et Rhône-Alpes. Étude, pose et maintenance par ECO CVC.",
    h1: "Installation de chambre froide professionnelle",
    intro:
      "ECO CVC conçoit et installe des chambres froides positives (0 à 8 °C) et négatives (-18 à -25 °C) pour les professionnels de l'agroalimentaire : boulangeries, restaurants, traiteurs, fleuristes, supérettes. Dimensionnement sur mesure, isolation renforcée, groupe froid silencieux.",
  },
  {
    path: "/vitrines-refrigerees",
    title: "Vitrines réfrigérées professionnelles — ECO CVC, Isère et Rhône-Alpes",
    description:
      "Vitrines réfrigérées pour boucherie, fromagerie, traiteur, primeur. Toutes températures, fabrication française et européenne. Installation et SAV en Isère.",
    h1: "Vitrines réfrigérées sur mesure",
    intro:
      "Nous installons des vitrines réfrigérées pour boucheries, charcuteries, traiteurs, fromagers, primeurs et fleuristes. Plage de température adaptée à chaque produit, design moderne, dégivrage automatique, alarme de température.",
  },
  {
    path: "/boutique",
    title: "Boutique ECO CVC — équipements CVC, pièces détachées",
    description:
      "Catalogue d'équipements et pièces détachées CVC : climatisations AUX, accessoires, télécommandes. Expédition Isère et Rhône-Alpes.",
    h1: "Boutique en ligne",
    intro:
      "Découvrez notre sélection d'équipements CVC : climatisations AUX prêtes à poser, accessoires, télécommandes universelles, supports muraux, kits de pose.",
  },
  {
    path: "/ventilation",
    title: "Ventilation VMC simple ou double flux — installation Isère, Rhône-Alpes",
    description:
      "Installation de VMC simple flux et double flux par ECO CVC. Étude technique gratuite, MaPrimeRénov' éligible. Solutions hygro, autoréglable, double flux thermodynamique.",
    h1: "Installation de ventilation — VMC simple ou double flux",
    intro:
      "La ventilation est essentielle pour un logement sain et économe. ECO CVC installe des VMC simple flux (autoréglable, hygroréglable) et double flux (avec récupération de chaleur jusqu'à 90%) en Isère et Rhône-Alpes. Devis gratuit, MaPrimeRénov' incluse.",
  },
  {
    path: "/contact",
    title: "Contact ECO CVC — devis gratuit, Isère & Rhône-Alpes",
    description:
      "Contactez ECO CVC pour un devis gratuit pompe à chaleur, climatisation, ventilation ou froid commercial. Tél 07 58 45 99 00, Nivolas-Vermelle (38).",
    h1: "Nous contacter",
    intro:
      "Notre équipe est à votre disposition pour un devis gratuit ou un conseil technique. Tél : 07 58 45 99 00 ou 06 29 63 40 45. Email : ecocvc69@gmail.com. Adresse : 1074 Route Départementale 1085, 38300 Nivolas-Vermelle.",
  },
  {
    path: "/mentions-legales",
    title: "Mentions légales — ECO CVC",
    description: "Mentions légales du site ecocvc.pro, ECO CVC, Nivolas-Vermelle (38).",
    h1: "Mentions légales",
    intro: "Informations légales relatives au site ecocvc.pro et à la société ECO CVC.",
  },
  {
    path: "/cgv",
    title: "Conditions générales de vente — ECO CVC",
    description: "Conditions générales de vente d'ECO CVC pour ses prestations CVC en Isère et Rhône-Alpes.",
    h1: "Conditions générales de vente",
    intro: "Les présentes CGV régissent les relations contractuelles entre ECO CVC et ses clients.",
  },
  {
    path: "/confidentialite",
    title: "Politique de confidentialité — ECO CVC",
    description: "Politique de confidentialité et de protection des données personnelles d'ECO CVC.",
    h1: "Politique de confidentialité",
    intro: "ECO CVC respecte la vie privée de ses utilisateurs et la réglementation RGPD.",
  },
];

// ─────────────────────────────────────────────────────────────────
// Génération

await loadTemplate();

const generated: string[] = [];

// HOME
{
  const title = "ECO CVC — Pompe à chaleur, climatisation & froid en Isère et Rhône-Alpes";
  const description =
    "ECO CVC, artisan RGE QualiPAC en Isère (Nivolas-Vermelle, Bourgoin, Lyon, Vienne). Installation, entretien et dépannage de pompes à chaleur, climatisations réversibles, ventilation et froid commercial. Devis gratuit, MaPrimeRénov' et CEE.";
  const bodyHtml = `
    <h1>${escape(title)}</h1>
    <p>${escape(description)}</p>
    <h2>Nos services CVC en Isère et Rhône-Alpes</h2>
    <ul>
      <li><a href="/installation">Installation pompe à chaleur et climatisation</a></li>
      <li><a href="/maintenance">Maintenance et entretien annuel</a></li>
      <li><a href="/depannage">Dépannage rapide</a></li>
      <li><a href="/ventilation">Ventilation VMC double flux</a></li>
      <li><a href="/chambre-froide">Chambre froide professionnelle</a></li>
      <li><a href="/vitrines-refrigerees">Vitrines réfrigérées</a></li>
    </ul>
    <h2>Zones d'intervention</h2>
    <ul>
      ${cities.map((c) => `<li><a href="/pompe-a-chaleur/${c.slug}">Pompe à chaleur ${escape(c.name)}</a></li>`).join("")}
    </ul>
    <h2>Ressources & guides</h2>
    <ul>
      <li><a href="/blog">Blog & guides experts</a></li>
      <li><a href="/calculateur">Calculateur d'aides MaPrimeRénov'</a></li>
      <li><a href="/faq">Questions fréquentes</a></li>
      <li><a href="/glossaire">Glossaire CVC</a></li>
    </ul>
  `;
  await writeRoute("/", { title, description, canonical: `${BASE}/`, bodyHtml });
  generated.push("/");
}

// Static pages
for (const p of staticPages) {
  const bodyHtml = `<h1>${escape(p.h1)}</h1><p>${escape(p.intro)}</p>`;
  await writeRoute(p.path, {
    title: p.title,
    description: p.description,
    canonical: `${BASE}${p.path}`,
    bodyHtml,
  });
  generated.push(p.path);
}

// Cities
for (const c of cities) {
  const title = `Pompe à chaleur & climatisation à ${c.name} — ECO CVC, RGE QualiPAC`;
  const description = `Installation, entretien et dépannage de pompes à chaleur et climatisations à ${c.name} (${c.postalCode}). Artisan RGE QualiPAC à ${c.distanceKm} km. Devis gratuit, aides MaPrimeRénov' et CEE.`;
  const canonical = `${BASE}/pompe-a-chaleur/${c.slug}`;

  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Zones d'intervention" }, { label: c.name }])}
    <h1>Pompe à chaleur & climatisation à ${escape(c.name)}</h1>
    <p>${escape(c.intro)}</p>
    <h2>Le marché PAC à ${escape(c.name)}</h2>
    <p>${escape(c.localContext)}</p>
    <ul>${c.specificites.map((s) => `<li>${escape(s)}</li>`).join("")}</ul>
    <h2>L'habitat à ${escape(c.name)}</h2>
    <p>${escape(c.habitatNotes)}</p>
    ${c.quartiers && c.quartiers.length ? `<h2>Quartiers desservis à ${escape(c.name)}</h2><ul>${c.quartiers.map((q) => `<li>${escape(q)}</li>`).join("")}</ul>` : ""}
    <h2>Zone d'intervention élargie</h2>
    <p>Communes voisines couvertes :</p>
    <ul>${c.communesVoisines.map((cv) => `<li>${escape(cv)}</li>`).join("")}</ul>
    ${faqHtml(c.faq)}
    <h2>Demander un devis</h2>
    <p><a href="/devis-pompe-a-chaleur">Devis pompe à chaleur</a> · <a href="/devis-climatisation">Devis climatisation</a> · Tél <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Installation et entretien de pompe à chaleur et climatisation",
      provider: {
        "@type": "HVACBusiness",
        name: "ECO CVC",
        url: BASE,
        telephone: "+33758459900",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1074 Route Départementale 1085",
          addressLocality: "Nivolas-Vermelle",
          postalCode: "38300",
          addressRegion: "Isère",
          addressCountry: "FR",
        },
      },
      areaServed: {
        "@type": "City",
        name: c.name,
        address: {
          "@type": "PostalAddress",
          postalCode: c.postalCode,
          addressLocality: c.name,
          addressRegion: c.department,
          addressCountry: "FR",
        },
      },
      url: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  await writeRoute(`/pompe-a-chaleur/${c.slug}`, {
    title,
    description,
    canonical,
    jsonLd,
    bodyHtml,
  });
  generated.push(`/pompe-a-chaleur/${c.slug}`);
}

// Articles
for (const a of articles) {
  const canonical = `${BASE}/blog/${a.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Blog", href: "/blog" }, { label: a.category }])}
    <article>
      <h1>${escape(a.title)}</h1>
      <p><em>${escape(a.category)} — ${a.readingMinutes} min de lecture</em></p>
      ${a.intro.map((p) => `<p>${escape(p)}</p>`).join("")}
      ${a.sections
        .map(
          (s) =>
            `<section><h2>${escape(s.heading)}</h2>${s.paragraphs.map((p) => `<p>${escape(p)}</p>`).join("")}${
              s.list ? `<ul>${s.list.map((it) => `<li>${escape(it)}</li>`).join("")}</ul>` : ""
            }${s.callout ? `<aside><strong>${escape(s.callout.title)}</strong><p>${escape(s.callout.body)}</p></aside>` : ""}</section>`,
        )
        .join("")}
      ${faqHtml(a.faq)}
    </article>
  `;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.metaDescription,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt,
    author: { "@type": "Organization", name: "ECO CVC", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "ECO CVC",
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: OG_IMAGE,
  };
  await writeRoute(`/blog/${a.slug}`, {
    title: a.metaTitle,
    description: a.metaDescription,
    canonical,
    jsonLd,
    bodyHtml,
  });
  generated.push(`/blog/${a.slug}`);
}

// Blog hub
{
  const title = "Blog ECO CVC — guides PAC, climatisation, aides MaPrimeRénov & CEE";
  const description =
    "Tous nos guides experts sur la pompe à chaleur, la climatisation réversible, les aides 2026 (MaPrimeRénov', CEE) et le choix d'équipement.";
  const bodyHtml = `
    <h1>Blog ECO CVC — Guides PAC, climatisation & aides</h1>
    <p>${escape(description)}</p>
    <ul>${articles
      .map((a) => `<li><a href="/blog/${a.slug}">${escape(a.title)}</a> — ${a.readingMinutes} min</li>`)
      .join("")}</ul>
  `;
  await writeRoute("/blog", { title, description, canonical: `${BASE}/blog`, bodyHtml });
  generated.push("/blog");
}

// Devis
for (const d of devisConfigs) {
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: d.title }])}
    <h1>${escape(d.h1)}</h1>
    <p>${escape(d.promise)}</p>
    <ul>${d.bullets.map((b) => `<li>${escape(b)}</li>`).join("")}</ul>
    <h2>Pourquoi choisir ECO CVC</h2>
    <ul>${d.whyUs.map((w) => `<li><strong>${escape(w.title)}</strong> — ${escape(w.body)}</li>`).join("")}</ul>
    ${faqHtml(d.faq)}
    <p>Tél <a href="tel:+33758459900">07 58 45 99 00</a> · <a href="/contact">Formulaire de contact</a></p>
  `;
  await writeRoute(`/${d.slug}`, {
    title: d.metaTitle,
    description: d.metaDescription,
    canonical: `${BASE}/${d.slug}`,
    bodyHtml,
  });
  generated.push(`/${d.slug}`);
}

// FAQ
{
  const title = "FAQ pompe à chaleur, climatisation & aides — ECO CVC";
  const description =
    "Questions fréquentes sur la pompe à chaleur, climatisation, aides MaPrimeRénov' et CEE, installation, entretien, copropriété.";
  const allItems = faqGroups.flatMap((g) => g.items.map((i) => ({ ...i, cat: g.category })));
  const bodyHtml = `
    <h1>FAQ — toutes vos questions sur la PAC, la clim, les aides</h1>
    <p>${escape(description)}</p>
    ${faqGroups
      .map(
        (g) =>
          `<section><h2>${escape(g.category)}</h2>${g.items
            .map((i) => `<details><summary>${escape(i.q)}</summary><p>${escape(i.a)}</p></details>`)
            .join("")}</section>`,
      )
      .join("")}
  `;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  await writeRoute("/faq", { title, description, canonical: `${BASE}/faq`, jsonLd, bodyHtml });
  generated.push("/faq");
}

// Glossaire
{
  const title = "Glossaire CVC — pompe à chaleur, climatisation, ventilation";
  const description =
    "Termes techniques CVC expliqués : COP, ETAS, RGE, fluide frigorigène, F-Gaz, multi-split, gainable, VMC double flux, géothermie, inverter.";
  const bodyHtml = `
    <h1>Glossaire CVC — termes techniques expliqués</h1>
    <p>${escape(description)}</p>
    <dl>${glossary
      .map((g) => `<dt><strong>${escape(g.term)}</strong></dt><dd>${escape(g.short)} ${escape(g.full)}</dd>`)
      .join("")}</dl>
  `;
  await writeRoute("/glossaire", { title, description, canonical: `${BASE}/glossaire`, bodyHtml });
  generated.push("/glossaire");
}

// Métiers pro — pages B2B
for (const m of metiers) {
  const canonical = `${BASE}/froid-commercial/${m.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Métiers pros" }, { label: m.name }])}
    <h1>${escape(m.h1)}</h1>
    <p>${escape(m.tagline)}</p>
    ${m.intro.map((p) => `<p>${escape(p)}</p>`).join("")}
    <h2>Problèmes typiques en ${escape(m.name.toLowerCase())}</h2>
    <ul>${m.problemes.map((p) => `<li>${escape(p)}</li>`).join("")}</ul>
    <h2>Équipements que nous installons</h2>
    <ul>${m.equipments.map((e) => `<li><strong>${escape(e.name)}</strong> — ${escape(e.description)} (${escape(e.priceRange)})</li>`).join("")}</ul>
    <h2>Réglementation et contraintes</h2>
    <ul>${m.contraintes.map((c) => `<li>${escape(c)}</li>`).join("")}</ul>
    <h2>Pourquoi ECO CVC</h2>
    <ul>${m.whyEcoCvc.map((w) => `<li>${escape(w)}</li>`).join("")}</ul>
    ${faqHtml(m.faq)}
    <p><a href="tel:+33758459900">Appeler 07 58 45 99 00</a> · <a href="/devis-froid-commercial">Devis froid commercial</a></p>
  `;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: `Frigoriste ${m.name}`,
      provider: { "@type": "HVACBusiness", name: "ECO CVC", url: BASE, telephone: "+33758459900" },
      areaServed: ["Isère", "Rhône", "Savoie", "Haute-Savoie", "Loire"],
      url: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: m.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  await writeRoute(`/froid-commercial/${m.slug}`, {
    title: m.metaTitle,
    description: m.metaDescription,
    canonical,
    jsonLd,
    bodyHtml,
  });
  generated.push(`/froid-commercial/${m.slug}`);
}

// Dépannage — pages techniques par panne / code erreur
for (const d of depannageCases) {
  const canonical = `${BASE}/depannage/${d.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Dépannage", href: "/depannage" }, { label: d.problem }])}
    <h1>${escape(d.h1)}</h1>
    <p><a href="tel:+33758459900"><strong>Appeler 07 58 45 99 00</strong></a> — ${escape(d.delaiIntervention)}</p>
    <h2>Symptômes</h2>
    <ul>${d.symptomes.map((s) => `<li>${escape(s)}</li>`).join("")}</ul>
    <h2>Causes possibles</h2>
    <ul>${d.causesPossibles.map((c) => `<li><strong>${escape(c.cause)}</strong> — ${escape(c.description)} (sévérité ${c.severite})</li>`).join("")}</ul>
    <h2>Diagnostic</h2>
    <ol>${d.diagnostic.map((s) => `<li><strong>${escape(s.etape)}</strong> — ${escape(s.detail)}</li>`).join("")}</ol>
    ${d.solutionDiy ? `<h2>Ce que vous pouvez faire</h2><p>${escape(d.solutionDiy)}</p>` : ""}
    <h2>Intervention ECO CVC</h2>
    <p>${escape(d.solutionPro)}</p>
    <p><a href="tel:+33758459900">Appeler maintenant — 07 58 45 99 00</a></p>
  `;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Dépannage pompe à chaleur et climatisation",
      provider: { "@type": "HVACBusiness", name: "ECO CVC", url: BASE, telephone: "+33758459900" },
      areaServed: ["Isère", "Rhône", "Savoie", "Haute-Savoie", "Loire"],
      url: canonical,
      description: d.problem,
    },
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: d.h1,
      about: d.problem,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      author: { "@type": "Organization", name: "ECO CVC" },
    },
  ];
  await writeRoute(`/depannage/${d.slug}`, {
    title: d.metaTitle,
    description: d.metaDescription,
    canonical,
    jsonLd,
    bodyHtml,
  });
  generated.push(`/depannage/${d.slug}`);
}

// Mythes PAC
{
  const title = "10 mythes sur la pompe à chaleur démontés | ECO CVC";
  const description = "10 idées reçues sur la pompe à chaleur 2026 : la PAC ne marche pas en hiver, consomme trop, est bruyante, à 1 €. La vérité par ECO CVC.";
  const bodyHtml = `
    <h1>10 mythes sur la pompe à chaleur démontés</h1>
    <p>${escape(description)}</p>
    <h2>Les 10 mythes les plus courants</h2>
    <ol>
      <li><strong>"La PAC ne marche pas en hiver"</strong> — Faux. Modèles plage étendue garantis -25 °C, SCOP 3,8-4,2 toute l'année.</li>
      <li><strong>"Une PAC consomme trop d'électricité"</strong> — Faux. 2 500-4 500 kWh/an pour 100-130 m², 2-4× moins qu'électrique direct.</li>
      <li><strong>"Toutes les PAC sont bruyantes"</strong> — Faux. Modèles haut de gamme à 19 dB en mode silence.</li>
      <li><strong>"Il faut changer ses radiateurs"</strong> — Faux dans 80% des cas. PAC haute température compatible radiateurs fonte.</li>
      <li><strong>"La PAC ne dure que 8-10 ans"</strong> — Faux. Daikin/Mitsubishi : 18-22 ans. Géothermie : 22-25 ans.</li>
      <li><strong>"Les PAC chinoises sont à éviter"</strong> — Faux. AUX modernes utilisent compresseurs Mitsubishi sous-traités.</li>
      <li><strong>"MaPrimeRénov' est trop compliqué"</strong> — Faux. Avec un installateur RGE, dossier monté pour vous.</li>
      <li><strong>"La PAC à 1 € existe et c'est légal"</strong> — FAUX. Supprimé en juillet 2021. Démarchage actuel = arnaque.</li>
      <li><strong>"Une PAC déprécie à la revente"</strong> — Faux. Plus-value 5-15% selon zone.</li>
      <li><strong>"Toutes les PAC se valent"</strong> — Faux. Écart 3 000-8 000 € sur 18 ans selon marque.</li>
    </ol>
  `;
  await writeRoute("/mythes-pompe-a-chaleur", { title, description, canonical: `${BASE}/mythes-pompe-a-chaleur`, bodyHtml });
  generated.push("/mythes-pompe-a-chaleur");
}

// PAC + Solaire + Batterie
{
  const title = "PAC + solaire + batterie : autonomie énergétique totale | ECO CVC";
  const description = "Combo PAC + panneaux solaires + batterie 2026 : autonomie 70-90%, factures divisées par 5, indépendance face aux hausses EDF.";
  const bodyHtml = `
    <h1>PAC + solaire + batterie : l'autonomie totale</h1>
    <p>${escape(description)}</p>
    <h2>Le trio gagnant 2026</h2>
    <ol>
      <li><strong>Solaire</strong> : 3-6 kWc panneaux, production 3 600-7 200 kWh/an en Isère</li>
      <li><strong>Batterie</strong> : 5-15 kWh stockage, durée de vie 15-20 ans</li>
      <li><strong>PAC</strong> : air-eau ou air-air pilotée par onduleur intelligent</li>
    </ol>
    <h2>Cas concret 130 m² Isère</h2>
    <p>Investissement total : 35 000 € — Aides : 10 850 € — Reste à charge : 24 150 €. Économie 25 ans : 78 750 €. Bénéfice net : +54 600 €. Amortissement 7-8 ans.</p>
    <h2>Avantages</h2>
    <ul>
      <li>Sécurité face aux coupures EDF (12-24h d'autonomie)</li>
      <li>Indépendance face aux hausses tarifaires</li>
      <li>Plus-value immobilière +10-20%</li>
      <li>Bilan carbone -80 à -90%</li>
    </ul>
  `;
  await writeRoute("/pac-solaire-batterie", { title, description, canonical: `${BASE}/pac-solaire-batterie`, bodyHtml });
  generated.push("/pac-solaire-batterie");
}

// Remplacement chaudière fioul / gaz — landings haute intention
for (const ch of [
  {
    type: "fioul",
    slug: "remplacement-chaudiere-fioul",
    title:
      "Remplacement chaudière fioul par pompe à chaleur 2026 | ECO CVC Isère",
    description:
      "Remplacer votre chaudière fioul par une PAC air-eau en Isère et Rhône-Alpes : aides 2026 jusqu'à 12 000 €, bonus sortie fioul +1 000 €, économies 60-75% sur la facture. Visite technique gratuite. ECO CVC, RGE QualiPAC.",
    h1: "Remplacer votre chaudière fioul par une pompe à chaleur",
    intro:
      "Votre chaudière fioul a plus de 15 ans, consomme 2 500 à 4 000 litres par an et coûte de plus en plus cher à entretenir ? Le remplacement par une pompe à chaleur air-eau est aujourd'hui le projet le plus rentable que vous puissiez engager : 60 à 75 % d'économie sur la facture chauffage, jusqu'à 12 000 € d'aides cumulées, et une cuve fioul retirée de votre cave.",
    contexte: [
      "Interdiction d'installation neuf depuis le 1er juillet 2022 (décret 2022-8)",
      "Hausse continue du prix du fioul : 0,75 €/L en 2019, 1,15-1,30 €/L en 2024-2025",
      "Cuve fioul : démontage ou neutralisation obligatoire si abandon définitif",
      "DPE : passage de F/G à C/D systématique, valorisation immobilière",
    ],
    aides: [
      "MaPrimeRénov' jusqu'à 5 000 € selon profil",
      "Bonus sortie de chaudière fioul +1 000 € (Bleu et Jaune)",
      "Coup de pouce CEE 2 500 à 5 000 €",
      "TVA réduite à 5,5 %",
      "Éco-PTZ jusqu'à 50 000 € à 0 %",
    ],
  },
  {
    type: "gaz",
    slug: "remplacement-chaudiere-gaz",
    title:
      "Remplacement chaudière gaz par pompe à chaleur 2026 | ECO CVC Isère",
    description:
      "Remplacer votre chaudière gaz par une PAC air-eau en Isère et Rhône-Alpes : aides 2026 jusqu'à 11 000 €, économies 40-55%, visite technique gratuite. RGE QualiPAC. ECO CVC.",
    h1: "Remplacer votre chaudière gaz par une pompe à chaleur",
    intro:
      "Votre chaudière gaz a plus de 12 ans ou vous voulez anticiper la fin programmée du gaz dans le neuf ? Le remplacement par une PAC air-eau divise votre consommation par 2,5 à 3 et vous décorrèle des hausses futures du prix du gaz.",
    contexte: [
      "Interdiction du gaz dans les maisons neuves depuis 2022 (RE2020)",
      "Fin des aides MaPrimeRénov' pour chaudières gaz à condensation depuis 2023",
      "Volatilité du prix du gaz : doublé entre 2021 et 2023",
      "PAC hybride : compromis pour zones d'altitude (Chartreuse, Vercors, Belledonne)",
    ],
    aides: [
      "MaPrimeRénov' jusqu'à 5 000 € selon profil",
      "Coup de pouce CEE 2 500 à 5 000 €",
      "TVA réduite à 5,5 %",
      "Éco-PTZ jusqu'à 50 000 € à 0 %",
    ],
  },
]) {
  const canonical = `${BASE}/${ch.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([
      { label: "Accueil", href: "/" },
      { label: "Installation", href: "/installation" },
      { label: `Remplacement chaudière ${ch.type}` },
    ])}
    <h1>${escape(ch.h1)}</h1>
    <p>${escape(ch.intro)}</p>
    <h2>Pourquoi remplacer maintenant</h2>
    <ul>${ch.contexte.map((c) => `<li>${escape(c)}</li>`).join("")}</ul>
    <h2>Aides cumulables 2026</h2>
    <ul>${ch.aides.map((a) => `<li>${escape(a)}</li>`).join("")}</ul>
    <h2>Notre process en 5 étapes</h2>
    <ol>
      <li>Visite technique gratuite (45 min à 1 h)</li>
      <li>Devis détaillé sous 48 h + montage du dossier d'aides</li>
      <li>Commande matériel et planification (livraison 2-4 semaines)</li>
      <li>Pose en 2 jours, démontage de l'ancienne chaudière inclus</li>
      <li>Mise en service, formation 15 min, visite de suivi à 12 mois</li>
    </ol>
    <p><a href="/devis-pompe-a-chaleur">Demander un devis gratuit</a> · <a href="/simulateur-aides">Simuler mes aides</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${ch.slug}`, {
    title: ch.title,
    description: ch.description,
    canonical,
    bodyHtml,
  });
  generated.push(`/${ch.slug}`);
}

// Pages dimensionnement par pièce
for (const d of dimensionnements) {
  const canonical = `${BASE}/dimensionnement/${d.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Dimensionnement" }, { label: d.piece }])}
    <h1>${escape(d.h1)}</h1>
    ${d.intro.map((p) => `<p>${escape(p)}</p>`).join("")}
    <h2>Recommandations selon la surface</h2>
    <ul>${d.reco.map((r) => `<li><strong>${r.surfaceMin}-${r.surfaceMax} m² :</strong> ${escape(r.puissanceKw)} (${escape(r.type)}) - ${escape(r.prix)}</li>`).join("")}</ul>
    <h2>Facteurs influençant la puissance</h2>
    <ul>${d.facteurs.map((f) => `<li><strong>${escape(f.facteur)}</strong> : ${escape(f.impact)}</li>`).join("")}</ul>
    <h2>Conseils ECO CVC</h2>
    <ul>${d.conseils.map((c) => `<li>${escape(c)}</li>`).join("")}</ul>
    ${faqHtml(d.faq)}
  `;
  await writeRoute(`/dimensionnement/${d.slug}`, {
    title: d.metaTitle,
    description: d.metaDescription,
    canonical,
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: d.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    bodyHtml,
  });
  generated.push(`/dimensionnement/${d.slug}`);
}

// Glossaire fluides frigorigènes
{
  const title = "Glossaire fluides frigorigènes : R32, R290, R410A, R744 | ECO CVC";
  const description = "Tous les fluides frigorigènes 2026 : R32, R290 (propane), R410A interdit, R744 (CO2), R134a, R454B. PRG, inflammabilité, usages.";
  const bodyHtml = `
    <h1>Glossaire des fluides frigorigènes 2026</h1>
    <p>${escape(description)}</p>
    <h2>R32 (standard 2026)</h2>
    <p>PRG 675, A2L (légèrement inflammable). Standard pour PAC et climatiseurs résidentiels depuis 2018-2020.</p>
    <h2>R410A (interdit en neuf depuis 2025)</h2>
    <p>PRG 2088, A1 (non inflammable). Standard 2005-2024, désormais interdit en nouvelle installation.</p>
    <h2>R290 - Propane (futur)</h2>
    <p>PRG 3, A3 (inflammable). Avenir des PAC, charge frigorifique limitée par la réglementation.</p>
    <h2>R744 - CO2 (froid commercial)</h2>
    <p>PRG 1, A1. Utilisé en supermarchés, chambres froides industrielles, ballons thermodynamiques.</p>
    <h2>R134a (interdit en neuf)</h2>
    <p>PRG 1430, A1. Encore présent en froid commercial ancien.</p>
    <h2>R454B</h2>
    <p>PRG 466, A2L. Remplaçant en cours du R410A pour systèmes commerciaux.</p>
  `;
  await writeRoute("/glossaire-fluides-frigorigenes", { title, description, canonical: `${BASE}/glossaire-fluides-frigorigenes`, bodyHtml });
  generated.push("/glossaire-fluides-frigorigenes");
}

// ZFE Lyon
{
  const title = "ZFE Lyon : sortir du fioul/gaz pour passer en PAC | ECO CVC";
  const description = "Zone à Faibles Émissions Lyon Métropole : pourquoi remplacer chaudière fioul/gaz par pompe à chaleur. Aides spécifiques, calendrier, démarches.";
  const bodyHtml = `
    <h1>ZFE Lyon Métropole : sortir du fioul/gaz avec une PAC</h1>
    <p>${escape(description)}</p>
    <h2>Communes concernées par la ZFE</h2>
    <ul>
      <li>Lyon (1er au 9e arrondissement)</li>
      <li>Villeurbanne, Caluire-et-Cuire, Bron, Vénissieux</li>
      <li>Saint-Fons, La Mulatière, Champagne-au-Mont-d'Or, Sainte-Foy-lès-Lyon</li>
    </ul>
    <h2>Pourquoi sortir du fioul/gaz</h2>
    <ul>
      <li>Pression réglementaire croissante (DPE F interdit à la location 2028)</li>
      <li>Aides Eco-Rénov Lyon Métropole jusqu'à 3 500 € additionnels</li>
      <li>Valorisation immobilière 5-15% à la revente</li>
    </ul>
    <p><a href="/aides-locales/lyon-metropole">Aides Lyon Métropole en détail</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute("/zfe-lyon-sortir-fioul-gaz", { title, description, canonical: `${BASE}/zfe-lyon-sortir-fioul-gaz`, bodyHtml });
  generated.push("/zfe-lyon-sortir-fioul-gaz");
}

// Dépannage par photo — service unique
{
  const title = "Dépannage par photo : envoyez vos photos, on diagnostique | ECO CVC";
  const description =
    "Service dépannage avec envoi de photos : 1 à 4 photos de votre PAC en panne, rappel avec pré-diagnostic en 30-60 min. Isère et Rhône-Alpes par ECO CVC.";
  const bodyHtml = `
    <h1>Pré-diagnostic par photo : intervention plus rapide</h1>
    <p>${escape(description)}</p>
    <h2>Comment ça marche</h2>
    <ol>
      <li>Vous prenez 1 à 4 photos (écran avec code erreur, unité extérieure, fuite, etc.)</li>
      <li>Un technicien F-Gaz analyse à distance en 5-10 min</li>
      <li>Rappel + intervention ciblée avec la bonne pièce</li>
    </ol>
    <h2>Photos utiles</h2>
    <ul>
      <li>Écran avec code erreur (Exx, Fxx, Pxx)</li>
      <li>Unité extérieure (état général, ailettes, givre)</li>
      <li>Fuite d'eau autour de l'unité</li>
      <li>Tableau électrique (disjoncteur, voyants)</li>
    </ul>
    <p>Service gratuit, sans engagement. Réactivité accrue (30 min en urgence, 4h en rapide, 24-48h en non urgent).</p>
    <p><a href="tel:+33758459900">Appeler 07 58 45 99 00</a></p>
  `;
  await writeRoute("/depannage-photo", { title, description, canonical: `${BASE}/depannage-photo`, bodyHtml });
  generated.push("/depannage-photo");
}

// Calendrier des aides
{
  const title = "Calendrier des aides PAC 2026 : quand vont-elles baisser ? | ECO CVC";
  const description =
    "Calendrier 2026-2030 des aides pompe à chaleur : MaPrimeRénov', Coup de pouce CEE, TVA. Pourquoi attendre coûte cher.";
  const bodyHtml = `
    <h1>Calendrier des aides PAC 2026-2030 : pourquoi attendre coûte cher</h1>
    <p>${escape(description)}</p>
    <h2>Anticipations baisse aides</h2>
    <ul>
      <li><strong>2026</strong> : barèmes maximum (jusqu'à 11 000 € géo + 5 000 € Coup de pouce + bonus fioul)</li>
      <li><strong>2027</strong> : -10 à -15% probables sur les forfaits MaPrimeRénov'</li>
      <li><strong>2028</strong> : sortie progressive du gaz dans le neuf, durcissement réglementaire</li>
      <li><strong>2030+</strong> : possible fin progressive des aides PAC après transition énergétique</li>
    </ul>
    <h2>Coût d'attendre 1 à 3 ans</h2>
    <p>Pour un ménage Jaune : aides 2026 = 8 500 €. Aides estimées 2029 = 5 800 €. <strong>Différence : 2 700 €</strong> à cumulés à la perte d'économies de chauffage immédiates.</p>
    <p><a href="/simulateur-aides">Simuler mes aides 2026</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute("/calendrier-aides-2026", { title, description, canonical: `${BASE}/calendrier-aides-2026`, bodyHtml });
  generated.push("/calendrier-aides-2026");
}

// Études de cas
{
  const title = "Études de cas ECO CVC : projets PAC chiffrés réels | RGE QualiPAC";
  const description =
    "8 études de cas anonymisées et chiffrées : PAC, climatisation, froid commercial. Investissement, aides, économies réelles.";
  const bodyHtml = `
    <h1>Études de cas chiffrées et anonymisées</h1>
    <p>${escape(description)}</p>
    <h2>Quelques exemples</h2>
    <ul>
      <li><strong>Pavillon Bourgoin 130 m², sortie fioul → PAC air-eau Daikin 11 kW :</strong> 14 800 € investis, 9 500 € d'aides, 1 850 €/an d'économie, amortissement 3 ans.</li>
      <li><strong>Ferme Voiron 180 m², profil Bleu, sortie fioul :</strong> 18 500 € investis, 11 200 € d'aides, économie 2 200 €/an.</li>
      <li><strong>Boulangerie Bourgoin, chambre froide + 2 vitrines :</strong> 22 000 € investis, économies 2 500 €/an, amortissement 7 ans.</li>
      <li><strong>Pharmacie Lyon 6e, monitoring vaccins + clim :</strong> 15 500 € investis, conformité ARS assurée.</li>
    </ul>
    <p>Anonymat client préservé selon RGPD. Chiffres réels.</p>
  `;
  await writeRoute("/etudes-de-cas", { title, description, canonical: `${BASE}/etudes-de-cas`, bodyHtml });
  generated.push("/etudes-de-cas");
}

// Comparatifs marque vs marque
for (const c of comparatifsMarques) {
  const canonical = `${BASE}/comparatif/${c.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Comparatifs" }, { label: `${c.marqueA} vs ${c.marqueB}` }])}
    <h1>${escape(c.h1)}</h1>
    <p>${escape(c.intro)}</p>
    <h2>Comparatif détaillé</h2>
    <table>
      <thead><tr><th>Critère</th><th>${escape(c.marqueA)}</th><th>${escape(c.marqueB)}</th><th>Top</th></tr></thead>
      <tbody>${c.criteres.map((cr) => `<tr><td>${escape(cr.critere)}</td><td>${escape(cr.marqueA)}</td><td>${escape(cr.marqueB)}</td><td>${cr.gagnant === "egal" ? "=" : cr.gagnant === "A" ? c.marqueA : c.marqueB}</td></tr>`).join("")}</tbody>
    </table>
    <h2>Conclusion</h2>
    <p>${escape(c.conclusion)}</p>
    <h2>Recommandation selon votre profil</h2>
    <ul>${c.recoSelon.map((r) => `<li>${escape(r.profil)} → <strong>${r.reco === "A" ? c.marqueA : c.marqueB}</strong></li>`).join("")}</ul>
    ${faqHtml(c.faq)}
  `;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  await writeRoute(`/comparatif/${c.slug}`, {
    title: c.metaTitle,
    description: c.metaDescription,
    canonical,
    jsonLd,
    bodyHtml,
  });
  generated.push(`/comparatif/${c.slug}`);
}

// Parrainage
{
  const title = "Programme de parrainage ECO CVC : 100 € à chaque recommandation";
  const description =
    "Programme parrainage ECO CVC : 100 € pour vous + 100 € pour votre filleul à chaque pose de pompe à chaleur. Recommandez un voisin.";
  const bodyHtml = `
    <h1>Recommandez ECO CVC, 100 € pour vous, 100 € pour eux</h1>
    <p>${escape(description)}</p>
    <h2>Comment ça marche</h2>
    <ol>
      <li>Vous nous recommandez un proche via formulaire ou téléphone (07 58 45 99 00)</li>
      <li>Nous contactons le filleul sous 48h pour visite technique gratuite</li>
      <li>Si pose réalisée : 100 € pour vous (parrain) + 100 € de remise pour votre filleul</li>
    </ol>
    <h2>Conditions</h2>
    <ul>
      <li>Filleul nouveau client (pas déjà connu d'ECO CVC)</li>
      <li>Pose effective et facturée nécessaire pour déclencher la prime</li>
      <li>Pas de plafond : recommandez autant de proches que vous voulez</li>
      <li>Cumulable avec MaPrimeRénov', CEE, toutes aides</li>
    </ul>
  `;
  await writeRoute("/parrainage", { title, description, canonical: `${BASE}/parrainage`, bodyHtml });
  generated.push("/parrainage");
}

// Audit de devis PAC
{
  const title = "Mon devis PAC est-il correct ? Audit gratuit en 30 sec | ECO CVC";
  const description =
    "Vérifiez si votre devis pompe à chaleur est correct ou louche en 30 secondes. Comparaison prix marché 2026, RGE, démarche commerciale, aides.";
  const bodyHtml = `
    <h1>Mon devis PAC est-il correct ?</h1>
    <p>${escape(description)}</p>
    <h2>Critères analysés</h2>
    <ul>
      <li>Cohérence puissance / surface (sous-dimensionnement, sur-dimensionnement)</li>
      <li>Prix par rapport au marché 2026 selon marque et type de PAC</li>
      <li>Certification RGE QualiPAC vérifiée</li>
      <li>Démarche commerciale (visite technique, démarchage tél = illégal, démarchage porte)</li>
      <li>Détail des aides (MaPrimeRénov', Coup de pouce CEE, TVA 5,5%)</li>
    </ul>
    <h2>Verdict en 3 niveaux</h2>
    <p>Score 80-100 : devis correct. 55-79 : devis acceptable mais à vérifier. <55 : devis suspect.</p>
    <p><a href="/contact">Demander un 2nd avis</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute("/audit-devis-pac", { title, description, canonical: `${BASE}/audit-devis-pac`, bodyHtml });
  generated.push("/audit-devis-pac");
}

// Quiz éligibilité MaPrimeRénov'
{
  const title = "Suis-je éligible MaPrimeRénov' 2026 ? Test gratuit en 30 sec | ECO CVC";
  const description =
    "Test rapide d'éligibilité MaPrimeRénov' 2026 en 5 questions. Réponse instantanée + estimation détaillée par email. Gratuit, sans inscription.";
  const bodyHtml = `
    <h1>Suis-je éligible MaPrimeRénov' 2026 ?</h1>
    <p>${escape(description)}</p>
    <h2>5 questions pour savoir</h2>
    <ol>
      <li>Êtes-vous propriétaire (occupant ou bailleur) du logement ?</li>
      <li>Le logement a-t-il plus de 15 ans ?</li>
      <li>Le logement est-il votre résidence principale (ou louée comme telle) ?</li>
      <li>Êtes-vous OK pour passer par un artisan certifié RGE ?</li>
      <li>Vos revenus sont-ils inférieurs ou proches du plafond Violet ?</li>
    </ol>
    <p>Si vous répondez oui aux 4 premières, vous êtes éligible. Le montant exact dépend de votre profil de revenus exact (Bleu, Jaune, Violet, Rose).</p>
  `;
  await writeRoute("/eligibilite-maprimerenov", { title, description, canonical: `${BASE}/eligibilite-maprimerenov`, bodyHtml });
  generated.push("/eligibilite-maprimerenov");
}

// Solaire + PAC
{
  const title = "Solaire + pompe à chaleur : le combo qui divise la facture par 3 | ECO CVC";
  const description =
    "Combiner panneaux solaires + pompe à chaleur en 2026 : économies, rentabilité, prix posé, aides. Le combo gagnant pour autonomie énergétique.";
  const bodyHtml = `
    <h1>Solaire + pompe à chaleur : le combo qui divise la facture par 3</h1>
    <p>${escape(description)}</p>
    <h2>Pourquoi c'est le combo idéal en 2026</h2>
    <ul>
      <li>La PAC consomme 3 000 à 5 000 kWh/an d'électricité (ce qu'un kit 3-4 kWc produit)</li>
      <li>Solaire seul rentable en 8-10 ans</li>
      <li>Combo = 50-80% d'autoconsommation, factures hivernales divisées</li>
      <li>Sur 25 ans : 30 000 à 60 000 € d'économies cumulées vs maintien fioul/gaz</li>
    </ul>
    <h2>Cas concret : maison 130 m² en Isère</h2>
    <p>PAC air-eau Daikin 11 kW + kit solaire 4 kWc avec onduleur hybride. Investissement total 24 000 €, aides cumulées 10 480 €, reste à charge 13 520 €. Facture annuelle passe de 2 800 €/an (chaudière fioul) à 650 €/an. Économie cumulée 25 ans : 53 750 €.</p>
    <p><a href="/contact">Étude personnalisée gratuite</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute("/solaire-pompe-a-chaleur", {
    title,
    description,
    canonical: `${BASE}/solaire-pompe-a-chaleur`,
    bodyHtml,
  });
  generated.push("/solaire-pompe-a-chaleur");
}

// Recrutement
{
  const title = "Recrutement ECO CVC — frigoriste, apprenti CVC en Isère | RGE QualiPAC";
  const description =
    "ECO CVC recrute en Isère et Rhône-Alpes : frigoriste, technicien CVC, apprenti BTS FED. CDI, alternance.";
  const bodyHtml = `
    <h1>Rejoignez l'équipe ECO CVC</h1>
    <p>${escape(description)}</p>
    <h2>Postes ouverts</h2>
    <ul>
      <li><strong>Frigoriste / Technicien CVC</strong> (CDI, 2 ans d'expérience min.) — Habilitation F-Gaz, permis B</li>
      <li><strong>Apprenti BTS FED ou Bac Pro TFCA</strong> — Formation accompagnée par nos artisans</li>
    </ul>
    <h2>Ce qui vous attend chez ECO CVC</h2>
    <ul>
      <li>Esprit d'équipe et structure familiale</li>
      <li>Formation continue (F-Gaz, RGE QualiPAC, formations constructeurs)</li>
      <li>Outillage pro (Daikin DTA, Mitsubishi MELCloud, manomètres pro)</li>
      <li>Stabilité, mutuelle, prime panier</li>
    </ul>
    <p>Candidature : <a href="mailto:ecocvc69@gmail.com">ecocvc69@gmail.com</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute("/recrutement", { title, description, canonical: `${BASE}/recrutement`, bodyHtml });
  generated.push("/recrutement");
}

// Marques de PAC
for (const m of marques) {
  const canonical = `${BASE}/marques/${m.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Marques" }, { label: m.name }])}
    <h1>${escape(m.h1)}</h1>
    <p><strong>${escape(m.tagline)}</strong> · Origine : ${escape(m.origine)} · Positionnement : ${escape(m.positionnement)}</p>
    ${m.intro.map((p) => `<p>${escape(p)}</p>`).join("")}
    <h2>Gammes proposées</h2>
    <ul>${m.gammes.map((g) => `<li><strong>${escape(g.name)}</strong> — ${escape(g.description)} (${escape(g.prix)}). Pour : ${escape(g.usage)}.</li>`).join("")}</ul>
    <h2>Forces</h2>
    <ul>${m.forces.map((f) => `<li>${escape(f)}</li>`).join("")}</ul>
    <h2>Limites</h2>
    <ul>${m.limites.map((l) => `<li>${escape(l)}</li>`).join("")}</ul>
    <h2>Garantie</h2>
    <p>${escape(m.garantie)}</p>
    <h2>Pour qui ?</h2>
    <p>${escape(m.pourQui)}</p>
    ${faqHtml(m.faq)}
    <p><a href="tel:+33758459900">Appeler 07 58 45 99 00</a> · <a href="/contact">Demande de devis</a></p>
  `;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `Pompe à chaleur ${m.name}`,
      brand: { "@type": "Brand", name: m.name },
      description: m.tagline,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: m.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  await writeRoute(`/marques/${m.slug}`, {
    title: m.metaTitle,
    description: m.metaDescription,
    canonical,
    jsonLd,
    bodyHtml,
  });
  generated.push(`/marques/${m.slug}`);
}

// Codes erreur précis
for (const c of codesErreur) {
  const canonical = `${BASE}/codes-erreur/${c.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Dépannage", href: "/depannage" }, { label: `Code ${c.code} ${c.marqueLabel}` }])}
    <h1>${escape(c.h1)}</h1>
    <p>${escape(c.signification)}</p>
    <p><strong>Sévérité :</strong> ${c.severite} · ${escape(c.delai)}</p>
    <p><a href="tel:+33758459900"><strong>Appeler 07 58 45 99 00</strong></a></p>
    <h2>Causes possibles</h2>
    <ul>${c.causes.map((x) => `<li>${escape(x)}</li>`).join("")}</ul>
    <h2>Diagnostic étape par étape</h2>
    <ol>${c.diagnostic.map((x) => `<li>${escape(x)}</li>`).join("")}</ol>
    <p><strong>${c.resoluble_diy ? "Souvent résolvable seul." : "Nécessite un technicien certifié."}</strong></p>
  `;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: c.h1,
      about: `Code erreur ${c.code} ${c.marqueLabel}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      author: { "@type": "Organization", name: "ECO CVC" },
    },
  ];
  await writeRoute(`/codes-erreur/${c.slug}`, {
    title: c.metaTitle,
    description: c.metaDescription,
    canonical,
    jsonLd,
    bodyHtml,
  });
  generated.push(`/codes-erreur/${c.slug}`);
}

// Comparateur de chauffages — outil viral
{
  const title = "Comparateur de chauffages 2026 — PAC vs gaz vs fioul vs granulés | ECO CVC";
  const description =
    "Comparateur de chauffages 2026 : pompe à chaleur, gaz, fioul, électrique, granulés, géothermie. Calcul instantané du coût sur 15 ans, émissions CO2, aides MaPrimeRénov'.";
  const bodyHtml = `
    <h1>Comparateur de chauffages 2026 — PAC vs gaz vs fioul vs granulés</h1>
    <p>${escape(description)}</p>
    <h2>Comparatif des 7 énergies de chauffage</h2>
    <p>Notre comparateur interactif analyse en temps réel : pompe à chaleur air-eau, pompe à chaleur géothermique, chaudière gaz à condensation, chaudière fioul, chauffage électrique direct, chaudière à granulés (pellets) et système hybride PAC + gaz.</p>
    <h2>Critères pris en compte</h2>
    <ul>
      <li>Investissement initial (matériel + pose) en euros</li>
      <li>Aides 2026 maximales (MaPrimeRénov', Coup de pouce CEE, TVA 5,5%)</li>
      <li>Reste à charge après aides</li>
      <li>Coût annuel énergie (selon prix 2026 du gaz, fioul, électricité, granulés)</li>
      <li>Émissions de CO₂ par an</li>
      <li>Coût total sur 15 ans (TCO complet)</li>
      <li>Score économique et écologique normalisé</li>
    </ul>
    <h2>Pourquoi comparer avant de choisir</h2>
    <p>Sur 15 ans, l'écart entre l'option la plus chère et la moins chère atteint souvent 20 000 à 35 000 € pour une maison standard. Les aides 2026 ont aussi profondément évolué : la chaudière gaz n'est plus éligible à MaPrimeRénov', le fioul est interdit en neuf depuis 2022, et les pompes à chaleur sont massivement subventionnées.</p>
    <p><a href="/simulateur-aides">Simulateur d'aides détaillé</a> · <a href="/contact">Demander un devis</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Comparateur de chauffages ECO CVC",
    url: `${BASE}/comparateur-chauffages`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description,
    offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
  };
  await writeRoute("/comparateur-chauffages", {
    title,
    description,
    canonical: `${BASE}/comparateur-chauffages`,
    jsonLd,
    bodyHtml,
  });
  generated.push("/comparateur-chauffages");
}

// Aides par collectivité — pages locales à forte autorité
for (const a of aidesCollectivites) {
  const canonical = `${BASE}/aides-locales/${a.slug}`;
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Aides locales" }, { label: a.name }])}
    <h1>${escape(a.h1)}</h1>
    ${a.intro.map((p) => `<p>${escape(p)}</p>`).join("")}
    <h2>Aides nationales</h2>
    <ul>${a.aidesNationales.map((x) => `<li><strong>${escape(x.name)}</strong> — ${escape(x.montant)} : ${escape(x.description)}</li>`).join("")}</ul>
    <h2>Aides locales — ${escape(a.name)}</h2>
    <ul>${a.aidesLocales.map((x) => `<li><strong>${escape(x.name)}</strong> — ${escape(x.montant)} : ${escape(x.description)}</li>`).join("")}</ul>
    <h2>Exemple de cumul</h2>
    <p>${escape(a.cumul)}</p>
    <h2>Communes desservies</h2>
    <ul>${a.communes.map((c) => `<li>${escape(c)}</li>`).join("")}</ul>
    ${faqHtml(a.faq)}
    <p><a href="/simulateur-aides">Simuler mes aides personnalisées</a> · <a href="tel:+33758459900">Tél 07 58 45 99 00</a></p>
  `;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Conseil et installation pompe à chaleur avec aides locales",
      provider: { "@type": "HVACBusiness", name: "ECO CVC", url: BASE, telephone: "+33758459900" },
      areaServed: { "@type": "AdministrativeArea", name: a.name },
      url: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  await writeRoute(`/aides-locales/${a.slug}`, {
    title: a.metaTitle,
    description: a.metaDescription,
    canonical,
    jsonLd,
    bodyHtml,
  });
  generated.push(`/aides-locales/${a.slug}`);
}

// Simulateur d'aides — page à fort potentiel SEO
{
  const title = "Simulateur d'aides MaPrimeRénov' & CEE — Calcul en 30 sec | ECO CVC";
  const description =
    "Simulateur d'aides 2026 pour pompe à chaleur : calculez en 30 secondes votre MaPrimeRénov', Coup de pouce CEE, TVA 5,5% et reste à charge. Gratuit, sans inscription.";
  const bodyHtml = `
    <h1>Simulez vos aides pompe à chaleur 2026 en 30 secondes</h1>
    <p>${escape(description)}</p>
    <h2>Comment fonctionne notre simulateur</h2>
    <p>Indiquez la surface de votre logement, son niveau d'isolation, votre énergie de chauffage actuelle, le type de pompe à chaleur envisagée et votre profil de revenus. En quelques secondes, vous obtenez :</p>
    <ul>
      <li>La puissance de pompe à chaleur recommandée pour votre logement</li>
      <li>Le prix moyen posé estimé en 2026</li>
      <li>Le montant détaillé de MaPrimeRénov' selon votre profil</li>
      <li>Le Coup de pouce chauffage CEE applicable</li>
      <li>Le bonus sortie de fioul si vous quittez une chaudière fioul</li>
      <li>L'économie liée à la TVA réduite à 5,5%</li>
      <li>Votre reste à charge final</li>
      <li>Vos économies annuelles sur la facture de chauffage</li>
      <li>La durée d'amortissement de votre investissement</li>
    </ul>
    <h2>Aides cumulables 2026</h2>
    <ul>
      <li><strong>MaPrimeRénov'</strong> : jusqu'à 5 000 € pour PAC air-eau, jusqu'à 11 000 € pour géothermie selon profil de revenus</li>
      <li><strong>Coup de pouce chauffage CEE</strong> : jusqu'à 5 000 € pour les ménages très modestes</li>
      <li><strong>Bonus sortie de fioul</strong> : 1 000 € additionnels pour profils Bleu et Jaune</li>
      <li><strong>TVA réduite à 5,5%</strong> : économie de ~14% sur le coût des travaux</li>
      <li><strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 50 000 € pour étaler le reste à charge</li>
    </ul>
    <h2>Pourquoi notre simulateur est fiable</h2>
    <p>Calcul mis à jour avec les barèmes officiels MaPrimeRénov' 2026 et le Coup de pouce chauffage en vigueur. ECO CVC est artisan RGE QualiPAC, certification obligatoire pour bénéficier de toutes ces aides. Le montant exact est confirmé après visite technique gratuite à votre domicile en Isère et Rhône-Alpes.</p>
    <p><a href="/contact">Demander un devis</a> · <a href="/blog/maprimerenov-2026-pompe-a-chaleur">En savoir plus sur MaPrimeRénov' 2026</a></p>
  `;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Simulateur d'aides PAC ECO CVC",
    url: `${BASE}/simulateur-aides`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description,
    offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
  };
  await writeRoute("/simulateur-aides", {
    title,
    description,
    canonical: `${BASE}/simulateur-aides`,
    jsonLd,
    bodyHtml,
  });
  generated.push("/simulateur-aides");
}

// Avis
{
  const title = "Avis clients ECO CVC — pompe à chaleur, climatisation, maintenance";
  const description =
    "Avis clients ECO CVC sur l'installation pompe à chaleur, climatisation, maintenance et dépannage en Isère et Rhône-Alpes.";
  const bodyHtml = `
    <h1>Avis clients ECO CVC</h1>
    <p>${escape(description)}</p>
  `;
  await writeRoute("/avis", { title, description, canonical: `${BASE}/avis`, bodyHtml });
  generated.push("/avis");
}

console.log(`✓ Prerendered ${generated.length} routes:`);
generated.forEach((r) => console.log(`  ${r}`));

// Liste pour IndexNow
await fs.writeFile(
  path.join(DIST, "_prerendered-urls.json"),
  JSON.stringify(generated.map((r) => `${BASE}${r}`), null, 2),
  "utf-8",
);
