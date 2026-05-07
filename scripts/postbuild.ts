/**
 * Postbuild :
 *  1. Génère un flux RSS du blog (`dist/feed.xml`)
 *  2. Génère la clé IndexNow + le fichier de vérification dans `dist/`
 *  3. Pousse les URLs prérendues à Bing/Yandex/Naver via IndexNow
 *
 * IndexNow : protocole standard (Bing, Yandex, Naver, Seznam) qui permet
 * de signaler instantanément aux moteurs les nouvelles/mises à jour de
 * pages. Pas de compte requis, juste un fichier de vérification statique.
 *
 * Le ping IndexNow est fait avec `fetch` natif. En cas d'échec réseau,
 * on n'interrompt pas le build (warning seulement).
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "../src/data/articles";
import { cities } from "../src/data/cities";
import { metiers } from "../src/data/metiers-pro";
import { depannageCases } from "../src/data/depannage-cases";
import { devisConfigs } from "../src/data/devis";
import { aidesCollectivites } from "../src/data/aides-collectivites";
import { quartiers } from "../src/data/quartiers";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");
const BASE = "https://ecocvc.pro";

// ─── Clé IndexNow stable (générée 1 fois, conservée) ──────────────
// Si tu changes la clé, change-la ici ET dans le fichier de vérif.
const INDEXNOW_KEY = "8a9b1c2d3e4f5067a1b2c3d4e5f60718a9b1c2d3";

// 1. Fichier de vérification IndexNow (Bing/Yandex viennent le lire)
await fs.writeFile(path.join(DIST, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY, "utf-8");

// 2. RSS feed du blog
const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

const rssEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog ECO CVC — Pompe à chaleur, climatisation, aides 2026</title>
    <link>${BASE}/blog</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Guides experts ECO CVC : pompe à chaleur, climatisation, MaPrimeRénov', CEE, choix d'équipement.</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${sortedArticles
  .map(
    (a) => `    <item>
      <title>${rssEscape(a.title)}</title>
      <link>${BASE}/blog/${a.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${a.slug}</guid>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <category>${rssEscape(a.category)}</category>
      <description>${rssEscape(a.excerpt)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

await fs.writeFile(path.join(DIST, "feed.xml"), rss, "utf-8");
console.log(`✓ RSS feed: ${sortedArticles.length} articles → dist/feed.xml`);

// 2bis. Sitemap HTML humain (utile aux visiteurs ET au crawl)
const baseTpl = await fs.readFile(path.join(DIST, "index.html"), "utf-8");
const linkList = (title: string, items: { href: string; label: string }[]) =>
  `<section><h2>${title}</h2><ul>${items.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join("")}</ul></section>`;
const sitemapHtmlBody = `
  <main style="max-width:1100px;margin:0 auto;padding:120px 24px 60px;font-family:system-ui,-apple-system,sans-serif">
    <nav style="font-size:12px;color:#64748b;margin-bottom:24px"><a href="/">Accueil</a> › Plan du site</nav>
    <h1 style="font-size:42px;font-weight:bold;margin-bottom:16px">Plan du site</h1>
    <p style="color:#64748b;margin-bottom:40px">Toutes les pages d'ecocvc.pro classées par catégorie. Pour les robots : <a href="/sitemap.xml">sitemap.xml</a> · <a href="/feed.xml">flux RSS</a>.</p>
    ${linkList("Pages principales", [
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
    ])}
    ${linkList("Outils gratuits", [
      { href: "/calculateur", label: "Calculateur de puissance PAC" },
      { href: "/simulateur-aides", label: "Simulateur d'aides MaPrimeRénov' & CEE" },
    ])}
    ${linkList("Devis dédiés", devisConfigs.map((d) => ({ href: `/${d.slug}`, label: d.title })))}
    ${linkList("Aides locales par métropole", aidesCollectivites.map((a) => ({ href: `/aides-locales/${a.slug}`, label: a.name })))}
    ${linkList(`Zones d'intervention (${cities.length} communes)`, cities.map((c) => ({ href: `/pompe-a-chaleur/${c.slug}`, label: `Pompe à chaleur ${c.name}` })))}
    ${linkList(`Clim par quartier (${quartiers.length} sous-zones)`, quartiers.map((q) => ({ href: `/quartier/${q.slug}`, label: `${q.name} (${q.cityName})` })))}
    ${linkList("Métiers professionnels", metiers.map((m) => ({ href: `/froid-commercial/${m.slug}`, label: `Frigoriste ${m.name}` })))}
    ${linkList("Dépannage par panne", depannageCases.map((d) => ({ href: `/depannage/${d.slug}`, label: d.problem })))}
    ${linkList("Blog & guides", articles.map((a) => ({ href: `/blog/${a.slug}`, label: a.title })))}
    ${linkList("Ressources", [
      { href: "/blog", label: "Blog ECO CVC" },
      { href: "/faq", label: "FAQ" },
      { href: "/glossaire", label: "Glossaire CVC" },
      { href: "/avis", label: "Avis clients" },
    ])}
    ${linkList("Mentions légales", [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgv", label: "CGV" },
      { href: "/confidentialite", label: "Politique de confidentialité" },
    ])}
  </main>
  <style>
    h2{font-size:22px;font-weight:bold;margin:36px 0 12px;color:#1976C4}
    ul{margin:0;padding-left:20px}
    li{margin:6px 0;font-size:14px}
    a{color:#1e293b;text-decoration:none}
    a:hover{color:#1976C4;text-decoration:underline}
  </style>
`;
const sitemapHtml = baseTpl
  .replace(/<title>[\s\S]*?<\/title>/, `<title>Plan du site — ECO CVC</title>`)
  .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="Plan du site ECO CVC : toutes les pages classées par catégorie (services, villes, articles, outils, dépannage, métiers pro)."`)
  .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${BASE}/plan-du-site"`)
  .replace(/<div id="root"><\/div>/, `<div id="root">${sitemapHtmlBody}</div>`);
const sitemapDir = path.join(DIST, "plan-du-site");
await fs.mkdir(sitemapDir, { recursive: true });
await fs.writeFile(path.join(sitemapDir, "index.html"), sitemapHtml, "utf-8");
console.log(`✓ Sitemap HTML humain: dist/plan-du-site/index.html`);

// 3. Ping IndexNow (Bing, Yandex, Naver, Seznam)
let urls: string[] = [];
try {
  const json = await fs.readFile(path.join(DIST, "_prerendered-urls.json"), "utf-8");
  urls = JSON.parse(json);
} catch {
  console.warn("⚠ Pas de _prerendered-urls.json, IndexNow skippé.");
  process.exit(0);
}

// Limit to 10000 URLs per IndexNow API spec
const indexNowUrls = urls.slice(0, 10000);

const indexNowEndpoints = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

const payload = {
  host: "ecocvc.pro",
  key: INDEXNOW_KEY,
  keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
  urlList: indexNowUrls,
};

await Promise.allSettled(
  indexNowEndpoints.map(async (endpoint) => {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      console.log(`✓ IndexNow ${endpoint} → ${res.status}`);
    } catch (e) {
      console.warn(`⚠ IndexNow ${endpoint} failed:`, e instanceof Error ? e.message : e);
    }
  }),
);

console.log(`✓ ${indexNowUrls.length} URLs pushed to IndexNow`);
