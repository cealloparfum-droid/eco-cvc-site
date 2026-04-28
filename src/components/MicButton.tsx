import { useRef } from "react";
import { Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

/**
 * Bouton micro pour dictée vocale.
 *
 *  - S'affiche en gris quand inactif, en rouge pulsé pendant l'écoute.
 *  - Caché si le navigateur ne supporte pas (Firefox).
 *  - Sur résultat interim → écrase la valeur en cours de phrase.
 *  - Sur résultat final → idem, en propre.
 *
 * Le parent fournit :
 *  - `value`        : la valeur courante de l'input/textarea
 *  - `onChange`     : pour mettre à jour cette valeur
 *  - `mode`         : "replace" (remplace tout) ou "append" (concatène).
 *                     Par défaut "append" — moins destructif.
 */

interface MicButtonProps {
  value: string;
  onChange: (next: string) => void;
  mode?: "append" | "replace";
  className?: string;
  /** Taille du bouton en px (carré). Par défaut 36. */
  size?: number;
  title?: string;
}

export function MicButton({
  value,
  onChange,
  mode = "append",
  className = "",
  size = 36,
  title = "Dictée vocale",
}: MicButtonProps) {
  // On garde la valeur de base (avant la session de dictée) dans un ref
  // pour pouvoir reconstruire la phrase à chaque chunk interim sans perdre
  // ce que l'utilisateur avait déjà tapé manuellement.
  const baseRef = useRef("");

  const { supported, listening, error, start, stop } = useSpeechRecognition({
    onTranscript: (chunk, isFinal) => {
      const trimmed = chunk.trim();
      if (!trimmed) return;
      if (mode === "replace") {
        onChange(trimmed);
        return;
      }
      // Mode append : on combine la base avec le chunk en cours.
      const base = baseRef.current;
      const sep = base && !base.endsWith(" ") ? " " : "";
      const next = base + sep + trimmed;
      onChange(next);
      if (isFinal) {
        // À la fin d'une phrase, on l'intègre à la base pour la suivante.
        baseRef.current = next;
      }
    },
  });

  // Si pas supporté, on n'affiche rien (pas la peine de troubler l'UI).
  if (!supported) return null;

  const handleClick = () => {
    if (listening) {
      stop();
      return;
    }
    // On prend la valeur actuelle comme base avant de démarrer.
    baseRef.current = value || "";
    start();
  };

  const errorLabel =
    error === "not-allowed"
      ? "Micro bloqué — autorisez-le dans les réglages du navigateur."
      : error === "no-speech"
      ? "Aucune voix détectée — réessayez."
      : error
      ? "Erreur micro — réessayez."
      : null;

  return (
    <div className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        title={listening ? "Arrêter la dictée" : title}
        aria-label={listening ? "Arrêter la dictée" : title}
        aria-pressed={listening}
        style={{ width: size, height: size }}
        className={[
          "shrink-0 rounded-full flex items-center justify-center transition-colors",
          listening
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-slate-100 text-slate-500 hover:bg-brand-blue/10 hover:text-brand-blue",
        ].join(" ")}
      >
        {listening ? (
          <Mic className="w-4 h-4" />
        ) : error === "not-allowed" ? (
          <MicOff className="w-4 h-4" />
        ) : (
          <Mic className="w-4 h-4" />
        )}

        {/* Halo pulsé quand l'écoute est active */}
        {listening && (
          <motion.span
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-red-500/50 pointer-events-none"
          />
        )}
      </button>

      {/* Tooltip d'erreur discret */}
      <AnimatePresence>
        {errorLabel && !listening && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-full mt-1 z-10 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[10px] font-medium text-white shadow"
          >
            {errorLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MicButton;
