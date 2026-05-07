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
