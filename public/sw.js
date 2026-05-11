/**
 * Service Worker ECO CVC — cache stratégique pour PWA offline + speed.
 *
 * Stratégies :
 *  - Pages HTML : "network first" (toujours fraîche, fallback cache)
 *  - Assets statiques (JS/CSS/images) : "cache first" (instantané, MAJ asynchrone)
 *  - API + formulaires : "network only" (jamais cachés)
 *
 * Effets :
 *  - Site utilisable sans internet (à minima pages déjà visitées)
 *  - Re-visite = chargement instantané (cache)
 *  - Boost direct Lighthouse PWA score → boost ranking Google
 */

const CACHE_VERSION = "ecocvc-v1-2026-05-11";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const HTML_CACHE = `${CACHE_VERSION}-html`;

// Ressources à pré-cacher dès l'install (pages les + visitées)
const PRECACHE_URLS = [
  "/",
  "/installation",
  "/maintenance",
  "/depannage",
  "/contact",
  "/devis",
  "/simulateur-aides",
  "/calculateur",
  "/manifest.json",
  "/favicon.ico",
  "/og-image.jpg",
];

// Domaines à NE PAS cacher
const NO_CACHE_HOSTS = [
  "formsubmit.co",
  "hook.eu1.make.com",
  "api.callmebot.com",
  "clarity.ms",
  "google-analytics.com",
  "googletagmanager.com",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      // addAll fail si un seul echec → on fait individuellement avec catch
      return Promise.allSettled(
        PRECACHE_URLS.map((url) =>
          cache.add(url).catch(() => {
            // log silencieux, certaines pages peuvent ne pas exister localement
          }),
        ),
      );
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    // Supprime les vieux caches (versions précédentes)
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => !k.startsWith(CACHE_VERSION))
          .map((k) => caches.delete(k)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ne cache que GET
  if (req.method !== "GET") return;

  // Ne cache pas les domaines tiers sensibles
  if (NO_CACHE_HOSTS.some((h) => url.hostname.includes(h))) {
    return; // laisse passer en network-only
  }

  // Ne cache pas /api/
  if (url.pathname.startsWith("/api/")) return;

  // Stratégie selon le type de contenu
  const isHTML = req.mode === "navigate" || req.headers.get("accept")?.includes("text/html");

  if (isHTML) {
    // Pages HTML : network first, fallback cache
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Cache une copie pour usage offline futur
          const copy = res.clone();
          caches.open(HTML_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match("/"))),
    );
  } else {
    // Assets statiques : cache first, network fallback
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) {
          // Update silencieux en arrière-plan
          fetch(req).then((res) => {
            if (res.ok) {
              caches.open(STATIC_CACHE).then((c) => c.put(req, res.clone()));
            }
          }).catch(() => {});
          return cached;
        }
        return fetch(req).then((res) => {
          if (res.ok && (url.origin === self.location.origin)) {
            const copy = res.clone();
            caches.open(STATIC_CACHE).then((c) => c.put(req, copy));
          }
          return res;
        });
      }),
    );
  }
});
