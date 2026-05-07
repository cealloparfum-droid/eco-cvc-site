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
