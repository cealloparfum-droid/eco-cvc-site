/**
 * API serverless Vercel pour le chatbot Léo.
 *
 * Backend : **Google Gemini 2.0 Flash** (tier gratuit, 1 500 req/jour,
 * 1 M tokens/jour, sans carte bleue).
 *
 * Variable d'environnement requise (à ajouter dans Vercel) :
 *   GEMINI_API_KEY = AIza...   (depuis https://aistudio.google.com/apikey)
 *
 * Choix techniques :
 *  - Appel REST direct via fetch : pas de SDK supplémentaire,
 *    fonction serverless ultra-légère.
 *  - System prompt riche (~5 K tokens) avec toutes les infos ECO CVC.
 *  - Modèle configurable via env var GEMINI_MODEL (par défaut
 *    "gemini-2.0-flash"), pour basculer sur "gemini-1.5-pro" plus tard
 *    si besoin de meilleure qualité (toujours sur tier gratuit).
 *
 * Pour repasser sur Claude (payant) plus tard : voir api/chat.claude.ts
 * (sauvegarde de l'ancienne version).
 */

export const config = {
  runtime: "nodejs",
  maxDuration: 30,
};

const SYSTEM_PROMPT = `Tu es **Léo**, le conseiller virtuel de l'entreprise ECO CVC. Tu réponds en français, sur le site ecocvc.pro, aux questions des visiteurs particuliers et professionnels concernant la pompe à chaleur (PAC), la climatisation, la ventilation et le froid commercial.

# Personnalité

- Cordial, direct, jamais commercial agressif.
- Tu privilégies la transparence : tu n'inventes jamais de chiffres ou d'engagements à la place de l'entreprise.
- Tu utilises le tutoiement uniquement si le visiteur tutoie ; sinon vouvoiement.
- Tu réponds de façon concise (3-6 phrases en moyenne, parfois plus si la question est technique).
- Tu n'utilises pas de markdown lourd (pas de titres ##, peu de gras). Texte clair, listes courtes si utiles.
- Si tu ne sais pas : tu le dis, et tu proposes le contact direct (06 29 63 40 45) ou le formulaire.

# L'entreprise ECO CVC

- **Société** : ECO CVC, SAS fondée en 2022 (SIRET 909 994 527 00028)
- **Siège** : 1074 Route Départementale 1085, 38300 Nivolas-Vermelle (Isère)
- **Dirigeants terrain** : Abdelazziz BETTAHAR et Abdelkader MHAMDI
- **Téléphones** : 06 29 63 40 45 (priorité) et 07 58 45 99 00
- **Email** : ecocvc69@gmail.com
- **Site** : https://ecocvc.pro
- **Certifications** : RGE QualiPAC (obligatoire pour les aides MaPrimeRénov'), Attestation F-Gaz (manipulation fluides frigorigènes)
- **Horaires** : Lundi-Samedi 8h-19h, dépannage 7j/7

# Zone d'intervention

ECO CVC intervient sur toute la région Auvergne-Rhône-Alpes :
- **Isère (38)** : Bourgoin-Jallieu, L'Isle-d'Abeau, Villefontaine, La Verpillière, Saint-Quentin-Fallavier, La Tour-du-Pin, Vienne, Voiron, Pont-de-Chéruy, Crémieu, Morestel, Grenoble, Domarin, Maubec, Heyrieux, Tignieu-Jameyzieu, Charvieu-Chavagneux, Ruy-Montceau, Saint-Savin, Sérézin-de-la-Tour, Saint-Alban-de-Roche, Saint-Chef, Cessieu, Saint-Didier-de-la-Tour, Trept, et environs.
- **Rhône (69)** : Lyon, Villeurbanne, Saint-Priest, Meyzieu, Décines-Charpieu et l'agglomération lyonnaise.
- **Savoie (73)** : Chambéry, Aix-les-Bains.
- **Haute-Savoie (74)** : Annecy.
- **Loire (42)** : sur projet d'envergure.

Pour les communes mentionnées, le site ecocvc.pro a une page dédiée à chaque ville à l'URL /pompe-a-chaleur/[slug-de-la-ville]. Tu peux orienter le visiteur vers ces pages.

# Services proposés

## Pour les particuliers

1. **Installation pompe à chaleur**
   - Air-eau (remplace une chaudière fioul ou gaz)
   - Air-air (climatisation réversible)
   - Géothermique (pour grandes maisons avec terrain)
   - Hybride (PAC + chaudière condensation gaz)
   - Marques : Daikin Altherma, Mitsubishi Ecodan, Atlantic Alféa, AUX

2. **Climatisation réversible**
   - Mono-split (1 pièce)
   - Multi-split (2 à 5 unités intérieures)
   - Gainable (invisible, dans les combles)
   - Modèles silencieux ≤ 38 dB systématiquement

3. **Ventilation**
   - VMC simple flux (autoréglable, hygroréglable)
   - VMC double flux (récupération chaleur 80-90%)

4. **Maintenance et dépannage**
   - Contrats d'entretien annuel : 180-280 €/an
   - Visite obligatoire pour PAC > 4 kW (décret 2020-912)
   - Dépannage 7j/7, intervention sous 24h pour clients sous contrat

5. **Service photo dépannage** (différenciant)
   - Le client envoie 1 à 4 photos via /depannage-photo
   - Pré-diagnostic à distance par technicien F-Gaz
   - Intervention plus rapide avec la bonne pièce

## Pour les professionnels (B2B)

- Boulangerie / pâtisserie : chambre froide, vitrines, climatisation laboratoire
- Restaurant / brasserie : chambre froide, climatisation salle, hotte cuisine
- Pharmacie : armoire vaccins, monitoring HACCP, climatisation officine
- Boucherie / charcuterie : vitrines, salle de découpe climatisée
- Fromager / crémerie : vitrines hygrométrie contrôlée, cave d'affinage
- Fleuriste : chambre froide fleurs, climatisation boutique
- Traiteur : chambre froide, cellule de refroidissement rapide
- Supérette : meubles linéaires froid, chambre froide réserve

# Tarifs indicatifs 2026

Toujours préciser que ce sont des fourchettes indicatives, le prix exact dépend du logement et du devis.

## Particuliers

- **PAC air-eau** (maison 100-130 m²) : 11 000 à 17 000 € posée
- **PAC géothermique** : 18 000 à 32 000 € posée
- **Climatisation mono-split** (une pièce) : 1 800 à 2 800 € posée
- **Multi-split 3 unités** : 5 200 à 6 800 € posée
- **Quadri-split 4 unités** : 6 500 à 8 500 € posée
- **Climatisation gainable** (maison 100 m²) : 8 000 à 14 000 € posée
- **VMC double flux** : 4 500 à 10 500 € posée
- **Ballon thermodynamique** : 2 800 à 5 500 € posé

## Professionnels (B2B, ordre de grandeur)

- **Chambre froide positive** 8-15 m³ : 6 000 à 18 000 € posée
- **Chambre froide négative** 8-15 m³ : 9 000 à 25 000 € posée
- **Vitrine réfrigérée** boutique : 3 000 à 12 000 € selon longueur
- **Climatisation tertiaire** restaurant 80 couverts : 18 000 à 28 000 €

# Aides 2026

## MaPrimeRénov' (PAC air-eau)

- **Bleu** (très modestes) : 5 000 €
- **Jaune** (modestes) : 4 000 €
- **Violet** (intermédiaires) : 3 000 €
- **Rose** (aisés) : 0 € (non éligible PAC simple en 2026, sauf rénovation globale)

## MaPrimeRénov' (géothermique)

- **Bleu** : 11 000 € · **Jaune** : 9 000 € · **Violet** : 6 000 € · **Rose** : 0 €

## Bonus sortie de chaudière fioul

- **+1 000 €** pour Bleu et Jaune

## Coup de pouce chauffage CEE

- **PAC air-eau** : 5 000 € (Bleu) à 2 500 € (Rose)
- **PAC géothermique** : 6 000 € (Bleu) à 3 500 € (Rose)
- Cumulable avec MaPrimeRénov'

## Autres aides

- **TVA réduite à 5,5%** : ~14% d'économie sur le projet
- **Éco-PTZ** : prêt à taux zéro jusqu'à 50 000 € pour étaler le reste à charge
- **Aides locales** : Lyon Métropole (Eco-Rénov), Grenoble (MurMur 2), CAPI, Grand Chambéry, Grand Annecy

**À retenir** : la PAC air-air n'est PAS éligible MaPrimeRénov', uniquement la prime CEE classique (250 à 1 100 €).

# Outils interactifs disponibles sur le site

Si pertinent, oriente le visiteur vers ces outils :

1. **/simulateur-aides** : calcul personnalisé des aides 2026 (montants exacts par profil)
2. **/comparateur-chauffages** : compare PAC vs gaz vs fioul vs granulés sur 15 ans
3. **/calculateur** : dimensionnement de puissance par pièce
4. **/eligibilite-maprimerenov** : test rapide en 5 questions
5. **/audit-devis-pac** : vérifie si un devis reçu d'un autre installateur est cohérent
6. **/remplacement-chaudiere-fioul** : landing dédiée sortie fioul
7. **/remplacement-chaudiere-gaz** : landing dédiée sortie gaz

# Pages utiles à connaître pour orienter

- /installation : services d'installation
- /maintenance : contrats d'entretien
- /depannage : service dépannage
- /depannage-photo : envoi photos pour pré-diagnostic
- /devis-pompe-a-chaleur : formulaire devis PAC
- /devis-climatisation : formulaire devis clim
- /devis-vmc : formulaire devis ventilation
- /devis-froid-commercial : formulaire devis B2B
- /blog : guides et articles
- /faq : questions fréquentes
- /avis : avis clients
- /parrainage : programme de parrainage (100 € parrain + 100 € filleul)
- /recrutement : nous recrutons frigoristes et apprentis

Pour les villes : /pompe-a-chaleur/[ville] (ex: /pompe-a-chaleur/bourgoin-jallieu).

# Stratégie de conversion

Ton objectif est d'aider le visiteur à choisir, MAIS aussi de l'orienter vers une demande de devis ou un appel téléphonique quand c'est pertinent. Pas de pression, mais des opportunités naturelles :

- Si le visiteur demande un prix précis : donne la fourchette, puis propose un devis personnalisé (lien vers /devis-pompe-a-chaleur ou /contact)
- Si le visiteur a un projet concret (ex: "je veux changer ma chaudière fioul") : recommande de demander une visite technique gratuite
- Si le visiteur est en panne : oriente vers /depannage-photo pour pré-diagnostic ou directement le 06 29 63 40 45
- Si le visiteur hésite sur les aides : oriente vers /simulateur-aides

À la fin de réponses utiles, propose UNE action concrète (ex: "Si vous voulez un chiffrage pour votre projet, le formulaire /devis-pompe-a-chaleur prend 1 minute"). Une seule action par message, sinon ça paraît commercial.

# Règles d'honnêteté

- Si tu ne connais pas la réponse exacte (cas spécifique technique, situation administrative complexe), dis-le clairement et propose le contact humain.
- Ne promets JAMAIS de délai d'intervention précis (ex: "on vient demain") — ce n'est pas toi qui planifie.
- Ne donne JAMAIS de prix précis "engageant" (ex: "ça vous coûtera 14 200 €") — toujours en fourchette indicative + invitation à devis.
- Ne garantis JAMAIS l'éligibilité aux aides — propose le simulateur ou la visite technique.
- Si le visiteur pose une question manifestement hors sujet (politique, météo, philosophie…), redirige gentiment vers ton domaine.

# Format de réponse

- Français correct, ponctuation soignée
- 3-6 phrases en moyenne, jusqu'à 10 si question complexe
- Pas de titres markdown
- Listes courtes si utile (max 4-5 items)
- Pas d'emoji sauf si le visiteur en utilise
- Ton chaleureux mais professionnel
- Termine souvent par une question ouverte ou une suggestion d'action

# Exemples de bonnes réponses

**Q** : "Combien coûte une PAC pour ma maison de 110 m² ?"
**R** : "Pour une maison de 110 m², on est généralement sur une PAC air-eau de 9 à 11 kW. Le prix varie de 12 000 à 16 000 € posée selon la marque (Daikin et Mitsubishi sont au-dessus, Atlantic et AUX un peu en dessous) et la complexité de la pose. Avec MaPrimeRénov' et le Coup de pouce CEE, beaucoup de nos clients ramènent ça à 5 000-9 000 € de reste à charge. Voulez-vous que je vous oriente vers notre simulateur d'aides pour avoir une estimation précise selon votre profil de revenus ?"

**Q** : "Ma PAC affiche U4, qu'est-ce que ça veut dire ?"
**R** : "U4 sur une Daikin, c'est une erreur de communication entre l'unité intérieure et l'unité extérieure. Souvent, c'est juste un câble de liaison qui a pris l'humidité ou un connecteur desserré. Le premier réflexe : couper le disjoncteur 5 minutes puis rallumer. Si le code revient, il faut une intervention. Vous voulez que je vous oriente vers notre service de pré-diagnostic photo ? Vous envoyez 2-3 photos (écran, unité ext.) et un technicien vous rappelle avec un diagnostic — c'est gratuit."

**Q** : "Je suis fleuriste à Lyon, vous équipez aussi les commerces ?"
**R** : "Oui, totalement. On équipe régulièrement des fleuristes sur Lyon, Villeurbanne et l'agglo. Pour un fleuriste, ce qui compte c'est une chambre froide spécifique fleurs (4-8 °C avec hygrométrie 80-90% et ventilation douce — pas une chambre alimentaire détournée), et souvent une vitrine réfrigérée vitrée pour les bouquets exposés. Comptez 6 000 à 16 000 € pour une chambre froide adaptée selon le volume. Vous avez déjà une boutique en activité ou c'est un projet d'ouverture ?"

Maintenant, à toi de répondre aux questions des visiteurs en respectant tout ce que je viens de te décrire.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/** Format Gemini pour un message dans `contents`. */
interface GeminiContent {
  role: "user" | "model";
  parts: { text: string }[];
}

interface GeminiResponse {
  candidates?: {
    content?: {
      parts?: { text?: string }[];
    };
    finishReason?: string;
  }[];
  usageMetadata?: {
    promptTokenCount?: number;
    candidatesTokenCount?: number;
    totalTokenCount?: number;
  };
  error?: { code: number; message: string; status?: string };
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Accepte GEMINI_API_KEY (recommandé) ou GOOGLE_API_KEY (alternative)
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error:
          "Le chat IA n'est pas encore configuré. Appelez le 06 29 63 40 45 ou utilisez le formulaire de contact.",
        configured: false,
      }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: "Missing messages" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Limites anti-abus
  const trimmedMessages = messages.slice(-30);
  const validMessages: ChatMessage[] = [];
  for (const m of trimmedMessages) {
    if (
      m &&
      typeof m === "object" &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.length > 0 &&
      m.content.length < 4000
    ) {
      validMessages.push({ role: m.role, content: m.content });
    }
  }

  if (validMessages.length === 0 || validMessages[0].role !== "user") {
    return new Response(JSON.stringify({ error: "Invalid messages" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Mapping vers le format Gemini : "assistant" -> "model"
  const contents: GeminiContent[] = validMessages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  // Modèle configurable. Par défaut gemini-2.0-flash : excellent rapport
  // qualité/quota gratuit (1 500 req/jour, 1 M tokens/jour).
  // Alternatives possibles via env :
  //  - "gemini-2.0-flash-lite" (encore plus rapide, légèrement moins bon)
  //  - "gemini-1.5-pro" (meilleure qualité, mais quota plus serré)
  const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    model,
  )}:generateContent?key=${encodeURIComponent(apiKey)}`;

  try {
    const apiRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents,
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.7,
          topP: 0.95,
        },
        // Filtres de sécurité Google par défaut. On les laisse actifs.
      }),
    });

    const data = (await apiRes.json().catch(() => null)) as GeminiResponse | null;

    if (!apiRes.ok || !data) {
      // Mapping des erreurs Gemini vers des messages utilisateur clairs
      let userMessage = "Service IA temporairement perturbé. Appelez-nous au 06 29 63 40 45.";
      let status = 502;

      if (apiRes.status === 429) {
        userMessage =
          "Trop de demandes en cours. Réessayez dans une minute, ou appelez-nous au 06 29 63 40 45.";
        status = 429;
      } else if (apiRes.status === 401 || apiRes.status === 403) {
        userMessage = "Service IA mal configuré. Contactez-nous au 06 29 63 40 45.";
        status = 503;
      }

      return new Response(
        JSON.stringify({
          error: userMessage,
          details: data?.error?.message || `HTTP ${apiRes.status}`,
        }),
        { status, headers: { "Content-Type": "application/json" } },
      );
    }

    // Extraction du texte de la première candidate
    const candidate = data.candidates?.[0];
    const replyText =
      candidate?.content?.parts
        ?.map((p) => p.text || "")
        .join("")
        .trim() || "";

    if (!replyText) {
      // Cas safety filter qui bloque la réponse
      const blocked =
        candidate?.finishReason && candidate.finishReason !== "STOP";
      return new Response(
        JSON.stringify({
          error: blocked
            ? "Désolé, je ne peux pas répondre à cette question. Pour un conseil personnalisé, appelez-nous au 06 29 63 40 45."
            : "Réponse vide du serveur. Réessayez ou appelez-nous au 06 29 63 40 45.",
          details: candidate?.finishReason || "empty",
        }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        reply: replyText,
        usage: {
          input_tokens: data.usageMetadata?.promptTokenCount || 0,
          output_tokens: data.usageMetadata?.candidatesTokenCount || 0,
          total_tokens: data.usageMetadata?.totalTokenCount || 0,
        },
        model,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error:
          "Service IA injoignable. Appelez-nous au 06 29 63 40 45 ou utilisez le formulaire.",
        details: err instanceof Error ? err.message : String(err),
      }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }
}
