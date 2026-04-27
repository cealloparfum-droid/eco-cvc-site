/**
 * Helper d'envoi de formulaires unifié pour eco cvc.
 *
 * Stratégie :
 *  1. Si `VITE_WEB3FORMS_KEY` est défini → utilise Web3Forms (meilleure
 *     deliverability, réservé pour montée en charge).
 *  2. Sinon (par défaut, zéro configuration) → utilise Formsubmit.co
 *     qui ne nécessite ni compte ni clé d'API. Les e-mails sont envoyés
 *     directement à l'adresse cible.
 *
 *     ⚠️ Au TOUT PREMIER envoi, Formsubmit envoie un mail d'activation
 *     à l'adresse cible. Il suffit de cliquer une fois sur le lien
 *     « Activate this form » dans ce mail. Tous les envois suivants
 *     arrivent directement, sans étape supplémentaire.
 *
 *  3. Mode dégradé ultime : si tout échoue côté réseau, on bascule
 *     automatiquement en `mailto:` pour ne jamais perdre un lead.
 */

const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || "";
export const TARGET_EMAIL = "ecocvc69@gmail.com";

export interface SubmitPayload {
  /** Sujet de l'e-mail reçu */
  subject: string;
  /** Données du formulaire (clés lisibles côté humain) */
  fields: Record<string, string | number | boolean | undefined>;
}

export interface SubmitResult {
  ok: boolean;
  via: "web3forms" | "formsubmit" | "mailto";
  message?: string;
}

/**
 * Envoie un formulaire vers eco cvc avec la meilleure méthode disponible.
 */
export async function submitForm({ subject, fields }: SubmitPayload): Promise<SubmitResult> {
  // ── Méthode 1 : Web3Forms (si clé configurée) ─────────────────────
  if (WEB3FORMS_KEY) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "eco cvc · site",
          botcheck: "",
          ...fields,
        }),
      });
      const data = await res.json();
      if (data.success) return { ok: true, via: "web3forms" };
      // Si Web3Forms échoue, on tombe en cascade vers Formsubmit.
    } catch {
      /* fallback */
    }
  }

  // ── Méthode 2 : Formsubmit.co (par défaut, aucune clé) ────────────
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TARGET_EMAIL)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: subject,
        _captcha: "false",
        _template: "table",
        ...fields,
      }),
    });
    const data = await res.json();
    if (data.success === "true" || data.success === true) {
      return { ok: true, via: "formsubmit" };
    }
    return { ok: false, via: "formsubmit", message: data.message || "Échec Formsubmit" };
  } catch (err) {
    // ── Méthode 3 : mailto (dernier recours, ne perd jamais un lead) ─
    return mailtoFallback(subject, fields);
  }
}

function mailtoFallback(subject: string, fields: Record<string, unknown>): SubmitResult {
  const body = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${formatLabel(k)} : ${v}`)
    .join("\n");
  const url = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (typeof window !== "undefined") {
    window.location.href = url;
  }
  return { ok: true, via: "mailto" };
}

function formatLabel(key: string): string {
  return key
    .replace(/_/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());
}
