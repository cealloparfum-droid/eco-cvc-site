import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object | object[];
  ogImage?: string;
  /** Type d'article pour Open Graph (article, website, product) */
  ogType?: "website" | "article" | "product";
  /** Mots-clés Pinterest Rich Pins */
  pinterestKeywords?: string[];
};

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const m = selector.match(/\[(.+?)="(.+?)"\]/);
    if (m) {
      const [, key, val] = m;
      el.setAttribute(key, val);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const useSeo = ({
  title,
  description,
  canonical,
  jsonLd,
  ogImage,
  ogType = "website",
  pinterestKeywords,
}: SeoOptions) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    // Meta tags génériques
    setMeta('meta[name="description"]', "content", description);

    // Open Graph (Facebook, LinkedIn, WhatsApp, iMessage)
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:locale"]', "content", "fr_FR");
    setMeta('meta[property="og:site_name"]', "content", "ECO CVC");
    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
      setMeta('meta[property="og:image:alt"]', "content", title);
      setMeta('meta[property="og:image:width"]', "content", "1200");
      setMeta('meta[property="og:image:height"]', "content", "630");
    }

    // Twitter Cards (summary_large_image = preview riche avec grande image)
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:site"]', "content", "@ecocvc");
    if (ogImage) {
      setMeta('meta[name="twitter:image"]', "content", ogImage);
      setMeta('meta[name="twitter:image:alt"]', "content", title);
    }

    // Pinterest Rich Pins (utilise les balises Open Graph + Article)
    // Pinterest reconnaît automatiquement les pages avec OG + Schema.org Article
    // On ajoute juste les mots-clés thématiques pour les "Idea Pins"
    if (pinterestKeywords && pinterestKeywords.length > 0) {
      setMeta('meta[name="pinterest:description"]', "content", description);
      setMeta('meta[name="pinterest:keywords"]', "content", pinterestKeywords.join(", "));
    }
    // Permet aux utilisateurs de "Save to Pinterest"
    setMeta('meta[name="pinterest-rich-pin"]', "content", "true");

    setLink("canonical", canonical);

    // JSON-LD (Schema.org)
    const oldScripts = document.head.querySelectorAll('script[data-dynamic="true"]');
    oldScripts.forEach((s) => s.remove());
    const created: HTMLScriptElement[] = [];
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.dynamic = "true";
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
        created.push(script);
      });
    }

    return () => {
      document.title = previousTitle;
      created.forEach((s) => s.remove());
    };
  }, [title, description, canonical, ogImage, ogType, JSON.stringify(jsonLd), JSON.stringify(pinterestKeywords)]);
};
