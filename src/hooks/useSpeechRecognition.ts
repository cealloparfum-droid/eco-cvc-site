import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hook minimaliste autour de la Web Speech API.
 *
 *  - Détecte si le navigateur supporte (Chrome / Safari / Edge oui,
 *    Firefox non — ~3 % des utilisateurs en France).
 *  - Reconnaissance en français (fr-FR).
 *  - Mode interim (transcription en temps réel pendant qu'on parle).
 *  - Auto-stop après 2 s de silence (paramétrable).
 *
 * Usage :
 *   const { supported, listening, start, stop } = useSpeechRecognition({
 *     onTranscript: (chunk, isFinal) => { ... },
 *   });
 */

// ─── Types ad hoc — la Web Speech API n'est pas dans lib.dom ────────
type SpeechRecognitionEvent = Event & {
  resultIndex: number;
  results: ArrayLike<{
    isFinal: boolean;
    0: { transcript: string };
  }>;
};

type SpeechRecognitionErrorEvent = Event & {
  error: string;
};

interface SpeechRecognitionInstance extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onerror: ((e: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

type SpeechRecognitionCtor = new () => SpeechRecognitionInstance;

interface UseSpeechRecognitionOptions {
  /** Callback à chaque chunk de transcription. `isFinal` = phrase complète. */
  onTranscript: (chunk: string, isFinal: boolean) => void;
  /** Code langue (par défaut "fr-FR"). */
  lang?: string;
}

export interface UseSpeechRecognitionResult {
  /** true si le navigateur supporte. */
  supported: boolean;
  /** true pendant l'écoute active. */
  listening: boolean;
  /** Erreur éventuelle ("not-allowed", "network"…), null sinon. */
  error: string | null;
  start: () => void;
  stop: () => void;
}

export function useSpeechRecognition({
  onTranscript,
  lang = "fr-FR",
}: UseSpeechRecognitionOptions): UseSpeechRecognitionResult {
  const Ctor: SpeechRecognitionCtor | undefined =
    typeof window !== "undefined"
      ? ((window as unknown as { SpeechRecognition?: SpeechRecognitionCtor })
          .SpeechRecognition ||
        (
          window as unknown as {
            webkitSpeechRecognition?: SpeechRecognitionCtor;
          }
        ).webkitSpeechRecognition)
      : undefined;

  const supported = Boolean(Ctor);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  // Garde la dernière callback pour éviter de re-créer l'instance à chaque render
  const onTranscriptRef = useRef(onTranscript);

  useEffect(() => {
    onTranscriptRef.current = onTranscript;
  }, [onTranscript]);

  const start = useCallback(() => {
    if (!Ctor) {
      setError("not-supported");
      return;
    }
    // Si déjà en cours, on ignore
    if (recognitionRef.current) return;

    setError(null);
    const rec = new Ctor();
    rec.lang = lang;
    rec.continuous = true;
    rec.interimResults = true;

    rec.onstart = () => setListening(true);

    rec.onresult = (event) => {
      // On agrège tous les résultats depuis resultIndex pour voir
      // ce qui est interim et ce qui est final.
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const res = event.results[i];
        const transcript = res[0].transcript;
        if (res.isFinal) final += transcript;
        else interim += transcript;
      }
      if (final) onTranscriptRef.current(final, true);
      else if (interim) onTranscriptRef.current(interim, false);
    };

    rec.onerror = (e) => {
      setError(e.error || "unknown");
      setListening(false);
    };

    rec.onend = () => {
      setListening(false);
      recognitionRef.current = null;
    };

    try {
      rec.start();
      recognitionRef.current = rec;
    } catch (err) {
      // Safari râle parfois si on rappelle start() trop vite
      setError(err instanceof Error ? err.message : "start-failed");
      recognitionRef.current = null;
    }
  }, [Ctor, lang]);

  const stop = useCallback(() => {
    const rec = recognitionRef.current;
    if (!rec) return;
    try {
      rec.stop();
    } catch {
      /* déjà stoppé */
    }
  }, []);

  // Cleanup si le composant disparaît pendant qu'on écoute
  useEffect(() => {
    return () => {
      const rec = recognitionRef.current;
      if (rec) {
        try {
          rec.abort();
        } catch {
          /* ignore */
        }
        recognitionRef.current = null;
      }
    };
  }, []);

  return { supported, listening, error, start, stop };
}
