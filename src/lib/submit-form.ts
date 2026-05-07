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

/**
 * Variante avec pièces jointes (photos).
 * Utilise Formsubmit en multipart/form-data.
 * Limite Formsubmit : 10 fichiers max, ~25 MB total.
 *
 * Pour la photo de dépannage, on compresse côté client avant envoi
 * (voir compressImage ci-dessous) pour éviter de saturer la limite.
 */
export async function submitFormWithFiles({
  subject,
  fields,
  files,
}: SubmitPayload & { files: File[] }): Promise<SubmitResult> {
  const formData = new FormData();
  formData.append("_subject", subject);
  formData.append("_captcha", "false");
  formData.append("_template", "table");
  for (const [k, v] of Object.entries(fields)) {
    if (v !== undefined && v !== null && v !== "") {
      formData.append(k, String(v));
    }
  }
  files.forEach((f, i) => formData.append(`photo_${i + 1}`, f, f.name));

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TARGET_EMAIL)}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success === "true" || data.success === true) {
      return { ok: true, via: "formsubmit" };
    }
    return { ok: false, via: "formsubmit", message: data.message || "Échec envoi" };
  } catch (err) {
    return { ok: false, via: "formsubmit", message: err instanceof Error ? err.message : "Erreur réseau" };
  }
}

/**
 * Compresse une image côté client (canvas) pour réduire la taille
 * avant envoi. Préserve la qualité visuelle pour un diagnostic à distance.
 */
export async function compressImage(file: File, maxWidth = 1600, quality = 0.82): Promise<File> {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    img.onload = () => {
      const ratio = Math.min(1, maxWidth / img.width);
      const w = Math.round(img.width * ratio);
      const h = Math.round(img.height * ratio);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) { resolve(file); return; }
      ctx.drawImage(img, 0, 0, w, h);
      canvas.toBlob(
        (blob) => {
          if (!blob) { resolve(file); return; }
          resolve(new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" }));
        },
        "image/jpeg",
        quality,
      );
    };
    reader.readAsDataURL(file);
  });
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
