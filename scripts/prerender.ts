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

// Comment choisir un installateur PAC : 12 questions + 8 pièges
{
  const title =
    "Choisir un installateur de pompe à chaleur : 12 questions + 8 pièges 2026 | ECO CVC";
  const description =
    "Comment choisir un installateur de PAC en 2026 : les 12 questions à poser obligatoirement et les 8 signaux d'arnaque à fuir. Guide indépendant par ECO CVC, RGE QualiPAC en Isère.";
  const slug = "choisir-installateur-pompe-a-chaleur";
  const questions = [
    "Êtes-vous certifié RGE QualiPAC, et pouvez-vous me donner le numéro ?",
    "Avez-vous l'attestation de capacité fluides frigorigènes (F-Gaz) catégorie 1 ?",
    "Allez-vous dimensionner ma PAC après une visite technique, ou par téléphone ?",
    "Pouvez-vous me montrer un devis-type avec le détail matériel + main d'œuvre + aides ?",
    "Quelles marques proposez-vous, et pourquoi celles-ci ?",
    "Quelles sont les garanties exactes, et que couvrent-elles ?",
    "Combien de temps après la commande pour la pose ?",
    "Qui posera concrètement chez moi, et combien d'années d'expérience ?",
    "Comment se passe le SAV en cas de panne hors saison vs en plein hiver ?",
    "Quelle est l'unité extérieure et où sera-t-elle posée ?",
    "Que se passe-t-il si j'ai des problèmes après la pose ?",
    "Pouvez-vous m'aider à monter le dossier MaPrimeRénov' / CEE ?",
  ];
  const pieges = [
    "« PAC à 1 € » ou « PAC à coût zéro grâce aux aides »",
    "Démarchage téléphonique ou porte-à-porte agressif",
    "Pression commerciale : « il faut signer aujourd'hui »",
    "Devis flou ou « forfait tout compris » sans détail",
    "Marque inconnue ou « importation directe d'usine »",
    "Pas de RGE QualiPAC vérifiable",
    "Acompte > 30 % avant le début des travaux",
    "Promesse d'économies extraordinaires (-90 %, facture divisée par 5)",
  ];
  const bodyHtml = `
    ${breadcrumbHtml([
      { label: "Accueil", href: "/" },
      { label: "Choisir un installateur PAC" },
    ])}
    <h1>Comment choisir un installateur de pompe à chaleur en 2026</h1>
    <p>Vous avez déjà reçu 2 ou 3 devis et vous ne savez pas comment les comparer objectivement ? Ce guide rassemble les <strong>12 questions à poser à chaque installateur</strong> et les <strong>8 signaux d'arnaque à fuir</strong>, basés sur 200+ chantiers ECO CVC et les signalements DGCCRF du secteur.</p>
    <h2>Les 12 questions à poser à chaque installateur</h2>
    <ol>${questions.map((q) => `<li>${escape(q)}</li>`).join("")}</ol>
    <h2>Les 8 pièges et signaux d'arnaque à fuir</h2>
    <ol>${pieges.map((p) => `<li>${escape(p)}</li>`).join("")}</ol>
    <h2>Critères concrets pour comparer 3 devis</h2>
    <ul>
      <li><strong>Marque + modèle exact</strong> (Daikin Altherma 3 H 11 kW vs PAC « premium » : pas pareil)</li>
      <li><strong>Puissance et SCOP</strong> (SCOP > 4 = bon, > 4,5 = excellent)</li>
      <li><strong>Prix € / kW posé</strong> (standard 2026 : 1 100 à 1 600 €/kW posé pour PAC air-eau)</li>
      <li><strong>Délai de pose</strong> (réaliste : 3 à 6 semaines)</li>
      <li><strong>Garanties écrites</strong> (constructeur 5-10 ans, pose 2 ans, décennale)</li>
      <li><strong>Aides simulées + montage du dossier</strong> (inclus, pas en option)</li>
    </ul>
    <p><a href="/audit-devis-pac">Auditer un devis reçu</a> · <a href="/simulateur-aides">Simulateur aides 2026</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${slug}`, {
    title,
    description,
    canonical: `${BASE}/${slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map((q) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Réponse détaillée et critères de comparaison disponibles sur la page complète.",
        },
      })),
    },
    bodyHtml,
  });
  generated.push(`/${slug}`);
}

// PAC vs chaudière granulés : comparatif honnête
{
  const title =
    "PAC vs chaudière à granulés : comparatif honnête 2026 (12 critères) | ECO CVC";
  const description =
    "Pompe à chaleur ou chaudière à granulés ? Comparatif détaillé en 12 critères : coût, entretien, écologie, confort, espace, autonomie. Verdict transparent par ECO CVC.";
  const slug = "pac-vs-granules";
  const criteres = [
    { c: "Coût d'investissement", pac: "11 000 à 17 000 € posée", g: "17 000 à 25 000 € posée" },
    { c: "Aides 2026", pac: "Jusqu'à 13 000 € (MPR + CEE)", g: "Jusqu'à 11 000 € (MPR + CEE)" },
    { c: "Coût d'usage annuel", pac: "550 à 850 €/an (100 m²)", g: "900 à 1 400 €/an (100 m²)" },
    { c: "Rendement / efficacité", pac: "SCOP 4 à 5 (1 kWh élec → 4-5 kWh chaleur)", g: "Rendement 88-95 %" },
    { c: "Entretien obligatoire", pac: "1 visite / 2 ans (~150 €)", g: "1 ramonage + 1 entretien / an (~250 €)" },
    { c: "Espace nécessaire", pac: "Unité ext. ~1 m² + module int. placard", g: "Chaudière + silo granulés (3 à 6 m²)" },
    { c: "Approvisionnement", pac: "Aucun (électricité du réseau)", g: "Livraison granulés 2-3 fois/an (camion souffleur)" },
    { c: "Bruit", pac: "35-45 dB unité extérieure", g: "Quasi silencieux (ventilateur uniquement)" },
    { c: "Écologie / CO2", pac: "Très faible si élec décarbonée", g: "Neutre carbone (biomasse, mais particules fines)" },
    { c: "Climatisation l'été", pac: "Oui (PAC réversible)", g: "Non (chauffage seul)" },
    { c: "Autonomie en cas de coupure élec", pac: "Aucune (s'arrête)", g: "Aucune (régulation électrique)" },
    { c: "Durée de vie", pac: "15 à 20 ans", g: "20 à 25 ans" },
  ];
  const faq = [
    { q: "PAC ou granulés : que choisir en 2026 ?", a: "Dans 80 % des cas (maison correctement isolée, raccordée au réseau électrique), la pompe à chaleur est plus rentable et plus simple. Le granulé reste pertinent pour les vieilles maisons mal isolées en zone froide où la PAC seule ne suffirait pas." },
    { q: "Quel système coûte le moins cher sur 20 ans ?", a: "PAC air-eau : ~43 700 € (achat + énergie + entretien sur 20 ans). Chaudière granulés : ~44 050 €. Quasi égalité, mais la PAC démarre 6 000 € moins cher à l'achat et offre la clim incluse." },
    { q: "Le granulé est-il vraiment écologique ?", a: "Oui sur le CO2 (neutre carbone car biomasse), mais la combustion émet des particules fines (PM2.5). Une PAC sur électricité française (90 % décarbonée) est globalement plus propre." },
    { q: "Peut-on coupler PAC et chaudière granulés ?", a: "Oui, en système hybride. La PAC fait le chauffage de base et le granulé prend le relais quand il fait très froid. Coût élevé mais imbattable en zone montagne." },
  ];
  const bodyHtml = `
    ${breadcrumbHtml([
      { label: "Accueil", href: "/" },
      { label: "PAC vs Granulés" },
    ])}
    <h1>Pompe à chaleur ou chaudière à granulés : le comparatif honnête</h1>
    <p>Vous hésitez entre une <strong>pompe à chaleur air-eau</strong> et une <strong>chaudière à granulés</strong> ? Ce comparatif détaillé analyse les 12 critères qui comptent vraiment, sans biais commercial. ECO CVC pose uniquement les pompes à chaleur, mais on vous dit honnêtement quand le granulé est plus pertinent pour votre profil.</p>
    <h2>Comparatif en 12 critères</h2>
    <ul>${criteres.map((x) => `<li><strong>${escape(x.c)}</strong> — PAC : ${escape(x.pac)} / Granulés : ${escape(x.g)}</li>`).join("")}</ul>
    <h2>Choisissez la PAC si...</h2>
    <ul>
      <li>Votre maison est correctement isolée (DPE C, D ou mieux)</li>
      <li>Vous voulez la climatisation l'été (PAC réversible)</li>
      <li>Vous n'avez pas de place pour un silo à granulés</li>
      <li>Vous ne voulez aucune corvée d'approvisionnement</li>
      <li>Votre budget initial est plus serré (~6 000 € de moins)</li>
      <li>Vous habitez en plaine ou semi-montagne (jusqu'à 800 m)</li>
      <li>Vous êtes sensible aux particules fines (asthme, allergies)</li>
    </ul>
    <h2>Choisissez le granulé si...</h2>
    <ul>
      <li>Maison ancienne mal isolée que vous ne pouvez pas rénover</li>
      <li>Vous habitez en zone très froide (haute montagne, &gt; 1 000 m)</li>
      <li>Vous avez de la place (chaufferie + silo 3-6 m²)</li>
      <li>Vous aimez le côté "feu" et l'autonomie locale (filière française)</li>
      <li>Vous remplacez une chaudière fioul / gaz ancienne sans gros travaux annexes</li>
      <li>Vous avez accès facile à un fournisseur de granulés local</li>
      <li>Vous voulez garder votre installation radiateurs haute température</li>
    </ul>
    <h2>Coût total sur 20 ans (maison 100 m²)</h2>
    <ul>
      <li><strong>PAC air-eau :</strong> 14 000 € achat (après aides) + 14 000 € énergie + 1 500 € entretien + 14 200 € remplacement à 18 ans = <strong>43 700 €</strong></li>
      <li><strong>Chaudière granulés :</strong> 13 000 € achat (après aides) + 23 000 € énergie + 5 000 € entretien + 3 050 € ramonage = <strong>44 050 €</strong></li>
      <li>Égalité quasi parfaite — mais la PAC offre la clim et zéro corvée d'approvisionnement.</li>
    </ul>
    ${faqHtml(faq)}
    <p><a href="/comparateur-chauffages">Comparateur tous chauffages</a> · <a href="/simulateur-aides">Simulateur aides 2026</a> · <a href="/audit-devis-pac">Auditer un devis</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${slug}`, {
    title,
    description,
    canonical: `${BASE}/${slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    bodyHtml,
  });
  generated.push(`/${slug}`);
}

// Tarifs climatisation détaillés (transparence totale)
{
  const title =
    "Tarifs climatisation réversible 2026 : tous nos prix posés | ECO CVC";
  const description =
    "Tarifs détaillés climatisation AUX posée : mono-split (890 €), 3,5 kW (990 €), 5 kW (1 690 €), 7 kW (2 290 €), bi-split (2 490 €), tri-split (3 990 €), gainable (6 900 €). Transparence totale.";
  const slug = "tarifs-climatisation-reversible";
  const tarifs = [
    { c: "Mono-split AUX 2,5 kW (10-22 m²)", p: "890 € TTC posé" },
    { c: "Mono-split AUX 3,5 kW (22-35 m²) — best-seller", p: "990 € TTC posé" },
    { c: "Mono-split AUX 5,0 kW (35-55 m²)", p: "1 690 € TTC posé" },
    { c: "Mono-split AUX 7,0 kW (50-75 m²)", p: "2 290 € TTC posé" },
    { c: "Bi-split (2 unités intérieures)", p: "à partir de 2 490 € TTC posé" },
    { c: "Tri-split (3 unités intérieures)", p: "à partir de 3 990 € TTC posé" },
    { c: "Quadri-split (4 unités intérieures)", p: "à partir de 5 290 € TTC posé" },
    { c: "Gainable invisible (faux-plafond)", p: "à partir de 6 900 € TTC posé" },
  ];
  const supplements = [
    "Création ligne électrique dédiée : 150 à 300 €",
    "Liaisons frigo > 3 m : 45 €/m supplémentaire",
    "Échafaudage si pose en hauteur : 200 à 400 €",
    "Goulottes peintes au choix : 80 à 150 €",
    "Pompe de relevage condensats : 180 à 250 €",
    "Module wifi connecté : 120 à 180 €",
  ];
  const faq = [
    { q: "Pourquoi ECO CVC est moins cher que les concurrents ?", a: "Structure familiale légère (pas de siège, pas de pub TV), achats AUX en direct gros volume, zone d'intervention concentrée Isère/Rhône/Lyon (pas de frais de déplacement nationaux). On se rémunère sur la pose, pas sur le matériel." },
    { q: "Le prix peut-il dépasser le tarif annoncé ?", a: "Oui dans 3 cas : ligne électrique à créer, liaisons frigo > 3 m, échafaudage en hauteur. Tout est annoncé en visite technique avant signature, jamais après." },
    { q: "Faut-il un acompte ?", a: "30 % à la commande, 70 % à la fin de pose après mise en service. On ne demande jamais 50 % ou plus à la commande (signal d'alarme)." },
    { q: "Pourquoi AUX et pas Daikin ou Mitsubishi ?", a: "AUX = grand industriel chinois, 14e producteur mondial, 40 millions d'unités/an. Qualité solide, R32, garantie 3 ans. Le rapport qualité-prix est imbattable. On pose aussi Daikin/Mitsubishi sur demande (+800 à +1 500 €/split)." },
    { q: "Eligible aux aides ?", a: "Non, la clim réversible (PAC air-air) n'est pas éligible MaPrimeRénov'/CEE. C'est pour ça qu'on propose des prix tout compris ultra-compétitifs." },
    { q: "Délais ?", a: "Basse saison (oct-mars) : 2-3 semaines. Haute saison (avr-sept) : 4-8 semaines. Conseil : commandez en hiver pour avoir la clim avant l'été." },
  ];
  const bodyHtml = `
    ${breadcrumbHtml([
      { label: "Accueil", href: "/" },
      { label: "Tarifs climatisation" },
    ])}
    <h1>Tous nos tarifs climatisation réversible posée</h1>
    <p>Mono-split, bi-split, tri-split, gainable : voici <strong>tous nos prix tout compris</strong>, du plus petit modèle (890 €) à la grande maison gainable (6 900 €). Aucun "devis sur mesure" pour cacher les prix : on affiche, on assume, on respecte.</p>
    <h2>Tarifs ECO CVC 2026 (matériel + pose + mise en service)</h2>
    <ul>${tarifs.map((t) => `<li><strong>${escape(t.c)}</strong> — ${escape(t.p)}</li>`).join("")}</ul>
    <h2>Suppléments éventuels (transparence)</h2>
    <p>Les prix ci-dessus couvrent 95 % des poses. Voici les cas où un supplément peut s'appliquer :</p>
    <ul>${supplements.map((s) => `<li>${escape(s)}</li>`).join("")}</ul>
    <h2>Pourquoi nos prix sont plus bas ?</h2>
    <ul>
      <li>Structure familiale légère (pas de pub TV, pas d'armée commerciale)</li>
      <li>Achats AUX en direct gros volume</li>
      <li>Zone d'intervention concentrée (Isère, Rhône, Lyon, Ain, Savoie)</li>
      <li>On se rémunère sur la pose, pas sur le matériel</li>
    </ul>
    ${faqHtml(faq)}
    <p><a href="/climatisation-reversible-990-euros">Détail offre 990 €</a> · <a href="/calculateur">Calculateur de puissance</a> · <a href="/produits">Gamme AUX</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${slug}`, {
    title,
    description,
    canonical: `${BASE}/${slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    bodyHtml,
  });
  generated.push(`/${slug}`);
}

// Landing pages locales : climatisation réversible par ville
// (réutilise la data cities pour générer 33 landings géo-locales)
for (const city of cities) {
  const slug = `climatisation-reversible/${city.slug}`;
  const title = `Climatisation réversible ${city.name} (${city.postalCode}) : pose à partir de 990 € | ECO CVC`;
  const description = `Installation climatisation réversible AUX à ${city.name} (${city.department}). Pose à partir de 990 € TTC. Visite technique gratuite, RGE QualiPAC, garantie 3 ans.`;
  const canonical = `${BASE}/${slug}`;
  const tarifsLocaux = [
    "Mono-split 2,5 kW (10-22 m²) : 890 € TTC posé",
    "Mono-split 3,5 kW (22-35 m²) : 990 € TTC posé — best-seller",
    "Mono-split 5,0 kW (35-55 m²) : 1 690 € TTC posé",
    "Bi-split (2 pièces) : à partir de 2 490 € TTC posé",
    "Tri-split (3 pièces) : à partir de 3 990 € TTC posé",
  ];
  const bodyHtml = `
    ${breadcrumbHtml([
      { label: "Accueil", href: "/" },
      { label: "Climatisation réversible", href: "/climatisation-reversible-990-euros" },
      { label: city.name },
    ])}
    <h1>Climatisation réversible à ${escape(city.name)} (${escape(city.postalCode)})</h1>
    <p>Installation pose-comprise <strong>à partir de 990 € TTC</strong> en mono-split, jusqu'au gainable invisible. Équipe locale ECO CVC à ${city.distanceKm} km de ${escape(city.name)}, RGE QualiPAC, certifiée F-Gaz catégorie 1. Visite technique gratuite sous 48h.</p>
    <h2>Pourquoi la clim réversible à ${escape(city.name)} ?</h2>
    <p>${escape(city.intro)}</p>
    <p>${escape(city.localContext)}</p>
    <p>${escape(city.habitatNotes)}</p>
    <h2>Spécificités à ${escape(city.name)}</h2>
    <ul>${city.specificites.map((s) => `<li>${escape(s)}</li>`).join("")}</ul>
    <h2>Tarifs climatisation à ${escape(city.name)}</h2>
    <ul>${tarifsLocaux.map((t) => `<li>${escape(t)}</li>`).join("")}</ul>
    <h2>Zones d'intervention autour de ${escape(city.name)}</h2>
    <p>Sans frais de déplacement supplémentaires : ${city.communesVoisines.map(escape).join(", ")}.</p>
    ${city.quartiers && city.quartiers.length > 0 ? `<h2>Quartiers de ${escape(city.name)} desservis</h2><p>${city.quartiers.map(escape).join(" · ")}</p>` : ""}
    ${faqHtml(city.faq)}
    <p><a href="/climatisation-reversible-990-euros">Offre 990 € détaillée</a> · <a href="/tarifs-climatisation-reversible">Tous nos tarifs</a> · <a href="/pompe-a-chaleur/${city.slug}">PAC à ${escape(city.name)}</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${slug}`, {
    title,
    description,
    canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: `ECO CVC — Climatisation ${city.name}`,
          telephone: "+33758459900",
          address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            postalCode: city.postalCode,
            addressRegion: city.department,
            addressCountry: "FR",
          },
          areaServed: { "@type": "City", name: city.name },
          serviceType: "Installation climatisation réversible",
          priceRange: "€€",
        },
        {
          "@type": "Service",
          name: `Installation climatisation réversible ${city.name}`,
          provider: { "@type": "Organization", name: "ECO CVC" },
          areaServed: city.name,
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "990",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: city.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    },
    bodyHtml,
  });
  generated.push(`/${slug}`);
}

// Landing page offre phare : Climatisation réversible 990 € posée
{
  const title =
    "Climatisation réversible posée à 990 € TTC | AUX 3,5 kW | ECO CVC";
  const description =
    "Climatisation réversible AUX J-Smart 3,5 kW (12 000 BTU) posée à 990 € TTC. Offre tout compris : matériel, pose, mise en service, garantie 3 ans. Isère, Rhône, Lyon. Visite technique gratuite sous 48h.";
  const slug = "climatisation-reversible-990-euros";
  const inclus = [
    "Unité intérieure AUX J-Smart 3,5 kW (12 000 BTU)",
    "Unité extérieure DC Inverter R32",
    "Pose complète par technicien certifié F-Gaz catégorie 1",
    "3 mètres de liaisons frigorifiques cuivrées",
    "Goulottes blanches PVC pour finition propre",
    "Mise en service + tirage au vide + test d'étanchéité",
    "Attestation de conformité fluides frigorigènes",
    "Garantie constructeur 3 ans + garantie pose 2 ans",
  ];
  const specs = [
    "Puissance frigorifique : 3,5 kW (12 000 BTU/h)",
    "Puissance calorifique : 3,8 kW",
    "Surface idéale : pièce jusqu'à 35 m²",
    "Classe énergétique : A++ / A+",
    "SEER 6,1 / SCOP 4,0",
    "Niveau sonore intérieur : 21 dB(A)",
    "Fluide frigorigène : R32 (faible PRG)",
  ];
  const faq = [
    { q: "Pourquoi 990 € seulement, c'est pas une arnaque ?", a: "Non. ECO CVC est une petite structure familiale avec faibles frais fixes. On achète AUX en direct gros volume. C'est notre offre d'appel pour vous faire connaître. Aucune surprise, aucun frais caché." },
    { q: "Qu'est-ce qui peut faire dépasser 990 € ?", a: "3 cas : ligne électrique dédiée à créer (+150 à 300 €), liaisons frigorifiques > 3 m (+45 €/m), échafaudage si pose en hauteur (+200 à 400 €). Tout est dit en visite technique avant signature." },
    { q: "L'offre est-elle éligible à des aides ?", a: "Non. La climatisation réversible n'est pas éligible à MaPrimeRénov' ni aux CEE. C'est pour ça qu'on propose un prix tout compris ultra-compétitif." },
    { q: "Délai entre commande et pose ?", a: "Basse saison (octobre à mars) : 2 à 3 semaines. Haute saison (avril à septembre) : 4 à 8 semaines. Conseil : commandez en hiver pour avoir la clim avant l'été." },
    { q: "Garantie en cas de panne ?", a: "Garantie constructeur AUX 3 ans pièces. Garantie pose ECO CVC 2 ans. SAV sous 48h ouvrées." },
    { q: "Vous intervenez où ?", a: "Tout le département Isère (38), Rhône (69), Ain (01), Savoie (73), Haute-Savoie (74). Rayon 60 km autour de Nivolas-Vermelle, sans frais de déplacement." },
  ];
  const bodyHtml = `
    ${breadcrumbHtml([
      { label: "Accueil", href: "/" },
      { label: "Climatisation 990 €" },
    ])}
    <h1>Climatisation réversible posée à 990 € TTC — AUX 3,5 kW</h1>
    <p>L'offre phare ECO CVC : un <strong>split mural réversible AUX J-Smart 3,5 kW</strong> (12 000 BTU) posé pour <strong>990 € TTC tout compris</strong>. Idéal pour une pièce jusqu'à 35 m². Matériel + main d'œuvre + mise en service + attestation fluides frigorigènes + garantie 3 ans.</p>
    <h2>Ce qui est inclus dans les 990 €</h2>
    <ul>${inclus.map((x) => `<li>${escape(x)}</li>`).join("")}</ul>
    <h2>Caractéristiques techniques</h2>
    <ul>${specs.map((x) => `<li>${escape(x)}</li>`).join("")}</ul>
    <h2>De l'appel à la fraîcheur en 3 semaines</h2>
    <ol>
      <li><strong>Vous nous appelez</strong> au 07 58 45 99 00 — créneau visite technique sous 48h ouvrées.</li>
      <li><strong>Visite technique gratuite</strong> (30 min) : on valide l'emplacement, l'électricité, on remet le devis ferme à 990 €.</li>
      <li><strong>Pose en 1 journée</strong> : équipe sur place 8h-17h, raccordement, mise en service, démo télécommande.</li>
      <li><strong>Vous profitez</strong> : chauffage + clim dès le soir même, suivi ECO CVC.</li>
    </ol>
    <h2>Zone d'intervention</h2>
    <p>Isère (38), Rhône (69), Ain (01), Savoie (73), Haute-Savoie (74). Rayon 60 km autour de Nivolas-Vermelle.</p>
    ${faqHtml(faq)}
    <p><a href="/calculateur">Calculateur de puissance</a> · <a href="/produits">Toute la gamme AUX</a> · <a href="/contact">Réserver visite technique</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${slug}`, {
    title,
    description,
    canonical: `${BASE}/${slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          name: "Climatisation réversible AUX J-Smart 3,5 kW posée",
          description: "Split mural réversible AUX DC Inverter 3,5 kW (12 000 BTU) posé. Matériel + main-d'œuvre + mise en service.",
          brand: { "@type": "Brand", name: "AUX" },
          offers: {
            "@type": "Offer",
            url: `${BASE}/${slug}`,
            priceCurrency: "EUR",
            price: "990",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: { "@type": "Organization", name: "ECO CVC" },
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
        },
        {
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    },
    bodyHtml,
  });
  generated.push(`/${slug}`);
}

// PAC air-eau vs climatisation réversible : clarifier la confusion
{
  const title =
    "PAC air-eau vs climatisation réversible : que choisir en 2026 ? | ECO CVC";
  const description =
    "Pompe à chaleur air-eau ou clim réversible ? Comparatif détaillé en 12 critères : prix, aides MaPrimeRénov', confort, ECS, climatisation. Verdict honnête par ECO CVC.";
  const slug = "pac-vs-clim-reversible";
  const criteres = [
    { c: "Prix posé (100 m²)", pac: "11 000 à 17 000 €", x: "3 500 à 8 000 € (multi-split)" },
    { c: "Aides MaPrimeRénov' 2026", pac: "Jusqu'à 11 000 €", x: "0 € (NON éligible)" },
    { c: "Système de chauffage", pac: "Chauffage central via radiateurs", x: "Air soufflé local (1 split = 1 pièce)" },
    { c: "Eau chaude sanitaire", pac: "Oui (intégrée)", x: "Non (cumulus séparé requis)" },
    { c: "Confort en hiver très froid", pac: "Bon jusqu'à -15 °C", x: "Dégradé sous -7 °C" },
    { c: "Climatisation l'été", pac: "Oui si modèle réversible", x: "Excellente (fonction principale)" },
    { c: "Esthétique intérieure", pac: "Invisible", x: "Splits muraux visibles" },
    { c: "Bruit", pac: "35-45 dB ext.", x: "45-55 dB ext. + ventilateurs int." },
    { c: "Coût d'usage chauffage", pac: "550-850 €/an", x: "750-1 200 €/an" },
    { c: "Durée de vie", pac: "15-20 ans", x: "10-15 ans" },
    { c: "Entretien obligatoire", pac: "1 visite / 2 ans (~150 €)", x: "1/an (~200-300 €)" },
    { c: "Travaux de pose", pac: "1-3 jours", x: "1-2 jours" },
  ];
  const faq = [
    { q: "Une clim réversible peut-elle remplacer une chaudière ?", a: "Techniquement oui mais pas optimalement : elle chauffe pièce par pièce, perd en rendement sous -7 °C, et ne produit pas d'eau chaude. Pour remplacer une chaudière, la PAC air-eau gagne dans 95 % des cas." },
    { q: "La clim réversible donne-t-elle droit à MaPrimeRénov' ?", a: "Non. Seule la pompe à chaleur air-eau (chauffage central) ouvre droit à MaPrimeRénov' et aux CEE. La clim réversible n'est pas éligible aux aides État." },
    { q: "Quelle est la différence technique exacte ?", a: "Une clim réversible (PAC air-air) chauffe ou refroidit l'air. Une PAC air-eau chauffe l'EAU qui circule dans vos radiateurs ou plancher chauffant." },
    { q: "Combien coûte un multi-split clim ?", a: "Pour 3-4 splits intérieurs + 1 unité extérieure : 4 500 à 8 000 € posé selon la marque (Daikin, Mitsubishi, LG, Atlantic)." },
    { q: "Peut-on combiner PAC air-eau et clim réversible ?", a: "Oui, c'est même fréquent en région chaude. La PAC air-eau chauffe via radiateurs en hiver, et 2-3 splits ajoutent du confort l'été. Budget 16 000 à 22 000 €." },
    { q: "ECO CVC pose les deux systèmes ?", a: "Oui. Nous sommes RGE QualiPAC pour les PAC air-eau (avec aides) et nous installons aussi des climatisations réversibles multi-split. Visite technique gratuite." },
  ];
  const bodyHtml = `
    ${breadcrumbHtml([
      { label: "Accueil", href: "/" },
      { label: "PAC vs Clim réversible" },
    ])}
    <h1>Pompe à chaleur air-eau ou climatisation réversible : le bon choix en 2026</h1>
    <p>Vous hésitez entre une <strong>PAC air-eau</strong> (chauffage central via radiateurs) et une <strong>climatisation réversible</strong> (splits muraux par pièce) ? Les deux utilisent le même principe thermodynamique, mais le résultat — et le coût — sont très différents. Voici le comparatif honnête.</p>
    <h2>Comparatif détaillé en 12 critères</h2>
    <ul>${criteres.map((x) => `<li><strong>${escape(x.c)}</strong> — PAC air-eau : ${escape(x.pac)} / Clim : ${escape(x.x)}</li>`).join("")}</ul>
    <h2>Choisissez la PAC air-eau si...</h2>
    <ul>
      <li>Vous remplacez une chaudière (fioul, gaz, électrique)</li>
      <li>Vous voulez bénéficier de MaPrimeRénov' (jusqu'à 11 000 €)</li>
      <li>Vous avez des radiateurs ou un plancher chauffant</li>
      <li>Vous voulez chauffer toute la maison de façon homogène</li>
      <li>Vous habitez en zone froide ou en montagne (jusqu'à -15 °C)</li>
      <li>Vous voulez aussi produire votre eau chaude sanitaire</li>
      <li>Vous tenez à garder une esthétique intérieure sobre</li>
    </ul>
    <h2>Choisissez la clim réversible si...</h2>
    <ul>
      <li>Vous avez déjà un chauffage qui marche bien (poêle, électrique)</li>
      <li>Vous cherchez surtout à climatiser l'été</li>
      <li>Vous voulez chauffer 1 ou 2 pièces seulement (appoint)</li>
      <li>Votre budget est serré (&lt; 8 000 €) et vous renoncez aux aides</li>
      <li>Vous habitez en zone tempérée (climat doux)</li>
      <li>Vous êtes en appartement sans circuit chauffage central</li>
    </ul>
    <h2>Verdict honnête</h2>
    <p>Dans 80 % des cas (remplacement d'une chaudière + recherche d'aides), la <strong>PAC air-eau</strong> gagne. Dans 20 % des cas (appartement, climat doux, priorité clim été), la <strong>clim réversible</strong> reste pertinente — et coûte 3 fois moins cher. ECO CVC pose les deux et vous oriente honnêtement après visite technique.</p>
    ${faqHtml(faq)}
    <p><a href="/pac-vs-granules">PAC vs granulés</a> · <a href="/comparateur-chauffages">Comparateur chauffages</a> · <a href="/simulateur-aides">Simulateur aides 2026</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${slug}`, {
    title,
    description,
    canonical: `${BASE}/${slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    bodyHtml,
  });
  generated.push(`/${slug}`);
}

// Landing B2B : climatisation en copropriété
{
  const slug = "climatisation-copropriete";
  const canonical = `${BASE}/${slug}`;
  const faq = [
    { q: "Faut-il l'autorisation de la copropriété pour installer une clim ?", a: "Oui, dans 99 % des cas. Toute modification de l'aspect extérieur (unité ext. visible) doit être votée en AG (article 25). En pratique on vote toujours pour éviter un litige ultérieur." },
    { q: "Combien de temps prend la procédure complète ?", a: "Visite + devis : 1 semaine. Vote AG : 2-6 mois. Déclaration préalable mairie : 1 mois (2 mois si ABF). Pose : 1 jour. Total moyen : 3 à 8 mois." },
    { q: "Que faire si le syndic refuse de mettre la résolution à l'ordre du jour ?", a: "Le syndic est obligé d'inscrire toute résolution proposée par un copropriétaire (article 10 décret 1967). Demande à faire par recommandé AR avec le devis et les photo-montages." },
    { q: "Quelles solutions si le règlement interdit toute clim visible ?", a: "Trois options : gainable intégral (aucune unité visible), cassettes encastrées plafond, ou multi-split avec unité ext. en cour intérieure côté arrière." },
    { q: "Combien coûte une clim en copropriété ?", a: "Mêmes tarifs que le particulier classique (mono-split 990 €, bi-split 2 490 €, tri-split 3 990 €), à quoi peut s'ajouter : DP mairie (incluse), photo-montage AG (inclus), nacelle si pose en façade haute (200-600 €)." },
    { q: "ECO CVC peut-elle facturer directement le syndic ?", a: "Oui pour les parties communes (clim hall, locaux gardien, salle de réunion). Pour un appartement privé, la facture est au nom du copropriétaire (TVA 10 % si rénovation logement > 2 ans)." },
    { q: "Que se passe-t-il en cas de panne après la pose ?", a: "Garantie constructeur AUX 3 ans + garantie pose ECO CVC 2 ans. SAV sous 48h ouvrées. Contrat d'entretien annuel possible pour les parties communes." },
    { q: "Vous intervenez pour des immeubles complets ?", a: "Oui : tarif négocié pour 5+ lots équipés, planning coordonné avec le syndic, équipe dédiée. Idéal pour résidences services, appart-hôtels, ou opérations de rénovation globale." },
  ];
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Climatisation réversible", href: "/climatisation-reversible-990-euros" }, { label: "Copropriété" }])}
    <h1>Climatisation en copropriété : démarches, AG, prix</h1>
    <p>Installer une climatisation réversible en copropriété demande un peu plus de méthode qu'en maison individuelle, mais c'est tout à fait faisable. ECO CVC vous accompagne du dossier AG à la pose, en passant par la déclaration préalable en mairie.</p>
    <h2>Les 4 étapes clés</h2>
    <ol>
      <li><strong>Étude technique gratuite :</strong> visite de votre logement et des parties communes (passage gaine, emplacement unité extérieure, contraintes ABF), photo-montages pour l'AG.</li>
      <li><strong>Dossier AG :</strong> rédaction de la résolution, photo-montages, devis détaillé, transmis au syndic pour inscription à l'ordre du jour. Vote en AG (article 25, majorité absolue).</li>
      <li><strong>Déclaration préalable mairie :</strong> dépôt du dossier DP (formulaire Cerfa 13404, plan de masse, photos), instruction sous 1 mois (2 mois en site classé / ABF).</li>
      <li><strong>Pose :</strong> intervention en 1 journée, équipe RGE QualiPAC, tous échafaudages et nacelles inclus.</li>
    </ol>
    <h2>3 solutions pour copropriété</h2>
    <ul>
      <li><strong>Cassette encastrée plafond (1 990 € / pièce) :</strong> discrète, idéale si le règlement interdit le split mural visible.</li>
      <li><strong>Gainable invisible (6 900 €) :</strong> aucune unité visible à l'intérieur, bouches discrètes au plafond.</li>
      <li><strong>Multi-split discret (à partir de 2 490 €) :</strong> unité extérieure en cour intérieure ou façade arrière, peu visible depuis la rue.</li>
    </ul>
    <h2>Points juridiques à connaître</h2>
    <ul>
      <li>Vote en AG obligatoire (article 25 loi 1965) pour toute modification d'aspect extérieur</li>
      <li>Niveau sonore : ≤ 30 dB la nuit en limite de propriété (arrêté préfectoral type)</li>
      <li>Architecte des Bâtiments de France (ABF) si site classé : avis conforme obligatoire</li>
      <li>Déclaration préalable mairie obligatoire pour toute unité extérieure visible</li>
      <li>Servitudes de cour : vérifier que l'emplacement n'enclave pas un voisin</li>
      <li>Règlement de copropriété : lire l'article sur les modifications de façade</li>
    </ul>
    ${faqHtml(faq)}
    <p><a href="/climatisation-reversible-990-euros">Offre 990 € détaillée</a> · <a href="/tarifs-climatisation-reversible">Tous nos tarifs</a> · <a href="/climatisation-gite-airbnb">Clim pour gîte / Airbnb</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${slug}`, {
    title: "Climatisation en copropriété : démarches, AG, prix | ECO CVC Lyon Isère",
    description: "Installer une climatisation en copropriété : étude technique, dossier AG, déclaration préalable, vote article 25, ABF. ECO CVC accompagne du dossier au chantier. Devis gratuit.",
    canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Installation climatisation en copropriété",
          provider: { "@type": "Organization", name: "ECO CVC" },
          areaServed: ["Isère", "Rhône", "Lyon", "Savoie", "Haute-Savoie"],
          description: "Pose de climatisation réversible en copropriété : étude technique, montage dossier AG, déclaration préalable mairie, pose coordonnée.",
        },
        {
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    },
    bodyHtml,
  });
  generated.push(`/${slug}`);
}

// Landing B2C : climatisation pour gîte et Airbnb
{
  const slug = "climatisation-gite-airbnb";
  const canonical = `${BASE}/${slug}`;
  const faq = [
    { q: "Mon gîte est-il rentable s'il n'est pas climatisé ?", a: "En 2024, 67 % des locataires Airbnb/Booking en France filtrent leurs recherches sur 'climatisation' en saison estivale. Sans clim, vous perdez ~30 % de visibilité dans les résultats et devez baisser vos tarifs de 15-25 % pour compenser." },
    { q: "Combien de temps pour rentabiliser l'installation ?", a: "Cas typique : gîte 4 personnes en Isère/Savoie/Rhône, 3,5 kW à 990 €. Plus-value tarifaire moyenne : +25 à +35 €/nuit en juillet-août. Avec 60 nuits sur juillet-août, soit +1 800 € de revenus supp. La clim est rentabilisée dès la 1ère saison." },
    { q: "Comment éviter que les locataires fassent exploser ma facture ?", a: "Trois leviers : bornage de température 18-28 °C dans le menu installateur, module wifi pour piloter à distance, programmation auto on/off selon les check-in/out. ECO CVC paramètre tout pour vous lors de la pose." },
    { q: "Que faire si un locataire casse la télécommande ?", a: "On fournit 2 télécommandes à la pose (1 d'usage + 1 de secours). Si elles sont perdues : commande wifi via app smartphone (si module installé) ou télécommande de remplacement à 25-35 €." },
    { q: "L'installation est-elle déductible des revenus locatifs ?", a: "Oui, en LMNP ou en régime réel des revenus fonciers, les travaux d'amélioration sont amortissables sur 10-20 ans. Pour un gîte rural classé, certains conseils départementaux (Isère, Savoie) proposent aussi des subventions." },
    { q: "Quelle puissance pour un gîte 4-6 personnes ?", a: "Pour le séjour (35-50 m²) : 3,5 à 5,0 kW. Pour les chambres (10-15 m²) : 2,5 kW chacune. Configuration typique gîte 6 pers : tri-split 5 kW + 2x 2,5 kW. Total 4 500-5 500 € posé." },
    { q: "Combien de temps prend la pose ?", a: "Mono-split : 1 journée. Bi/tri-split : 1-2 jours. Gainable : 3-5 jours. Idéalement, on intervient en intersaison (octobre-mars) pour ne pas perturber les locations." },
    { q: "Vous proposez un contrat d'entretien adapté gîte ?", a: "Oui : visite préventive 1x/an avant la haute saison (mai-juin), nettoyage filtres, contrôle pression. Tarif : 120 à 180 €/an selon nombre de splits. Priorité SAV en haute saison." },
  ];
  const bodyHtml = `
    ${breadcrumbHtml([{ label: "Accueil", href: "/" }, { label: "Climatisation réversible", href: "/climatisation-reversible-990-euros" }, { label: "Gîte / Airbnb" }])}
    <h1>Climatisation pour gîte et Airbnb : ROI dès la 1ère saison</h1>
    <p>Vous louez un gîte, un meublé de tourisme ou un Airbnb ? La climatisation réversible est devenue un standard recherché par les voyageurs. ECO CVC installe des solutions optimisées pour la location saisonnière, avec bornage de température et pilotage wifi pour éviter les abus.</p>
    <h2>Le ROI en chiffres</h2>
    <ul>
      <li><strong>Tarif nuitée moyen sans clim :</strong> 85 € (juillet-août)</li>
      <li><strong>Tarif nuitée moyen avec clim :</strong> 115 € (+30 €/nuit)</li>
      <li><strong>Plus-value mensuelle estivale :</strong> +1 670 € pour 56 nuits/mois</li>
      <li><strong>Investissement initial :</strong> 990 € (mono-split 3,5 kW posé)</li>
      <li><strong>ROI :</strong> dès la première saison estivale</li>
    </ul>
    <h2>Fonctions spécifiques location saisonnière</h2>
    <ul>
      <li><strong>Bornage de température 18-28 °C :</strong> impossible pour les locataires de descendre sous 18 °C ou monter au-dessus de 28 °C — facture maîtrisée.</li>
      <li><strong>Pilotage wifi :</strong> module Smart-Wifi inclus, vous éteignez tout entre 2 locations depuis votre smartphone.</li>
      <li><strong>Programmation hebdomadaire :</strong> on/off auto selon vos check-in/out.</li>
      <li><strong>Modèles renforcés :</strong> filtres lavables, télécommande IR + 1 secours, finition robuste.</li>
    </ul>
    ${faqHtml(faq)}
    <p><a href="/climatisation-reversible-990-euros">Offre 990 € détaillée</a> · <a href="/tarifs-climatisation-reversible">Tous nos tarifs</a> · <a href="/climatisation-copropriete">Clim en copropriété</a> · <a href="tel:+33758459900">07 58 45 99 00</a></p>
  `;
  await writeRoute(`/${slug}`, {
    title: "Climatisation pour gîte / Airbnb : ROI dès la 1ère saison | ECO CVC",
    description: "Installer une climatisation dans votre gîte ou Airbnb : limitation de température, pilotage wifi, programmation, ROI dès la première saison estivale. Mono-split à partir de 990 €. Devis gratuit.",
    canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Installation climatisation pour gîte et Airbnb",
          provider: { "@type": "Organization", name: "ECO CVC" },
          areaServed: ["Isère", "Rhône", "Lyon", "Savoie", "Haute-Savoie"],
          description: "Pose de climatisation réversible pour locations saisonnières : bornage de température, pilotage wifi, programmation hebdomadaire.",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "990",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    },
    bodyHtml,
  });
  generated.push(`/${slug}`);
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
