import { useCallback, useEffect, useState } from "react";

/**
 * Liste de devis multi-produits persistée dans localStorage.
 * Permet à l'utilisateur de constituer une sélection sur la boutique
 * puis de la transmettre au formulaire de contact.
 */

export interface DevisItem {
  ref: string;          // identifiant unique (gamme + name)
  name: string;
  brand?: string;
  price: number;
  kw?: number;
  category?: string;
  qty?: number;
}

const STORAGE_KEY = "ecocvc-devis-items";

const readStorage = (): DevisItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStorage = (items: DevisItem[]) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    // Notifier les autres composants montés sur la même page
    window.dispatchEvent(new CustomEvent("ecocvc-devis-updated"));
  } catch {
    /* ignore */
  }
};

export const useDevisList = () => {
  const [items, setItems] = useState<DevisItem[]>(readStorage);

  // Synchronisation cross-onglets ET cross-composants (via CustomEvent)
  useEffect(() => {
    const sync = () => setItems(readStorage());
    window.addEventListener("storage", sync);
    window.addEventListener("ecocvc-devis-updated", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("ecocvc-devis-updated", sync as EventListener);
    };
  }, []);

  const add = useCallback((item: DevisItem) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.ref === item.ref);
      const next = exists
        ? prev.map((p) => (p.ref === item.ref ? { ...p, qty: (p.qty || 1) + 1 } : p))
        : [...prev, { ...item, qty: 1 }];
      writeStorage(next);
      return next;
    });
  }, []);

  const remove = useCallback((ref: string) => {
    setItems((prev) => {
      const next = prev.filter((p) => p.ref !== ref);
      writeStorage(next);
      return next;
    });
  }, []);

  const toggle = useCallback((item: DevisItem) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.ref === item.ref);
      const next = exists
        ? prev.filter((p) => p.ref !== item.ref)
        : [...prev, { ...item, qty: 1 }];
      writeStorage(next);
      return next;
    });
  }, []);

  const has = useCallback(
    (ref: string) => items.some((p) => p.ref === ref),
    [items]
  );

  const clear = useCallback(() => {
    writeStorage([]);
    setItems([]);
  }, []);

  const total = items.reduce((sum, p) => sum + p.price * (p.qty || 1), 0);
  const count = items.length;

  return { items, add, remove, toggle, has, clear, count, total };
};

/**
 * Persiste un état arbitraire (par ex. filtres boutique) dans localStorage.
 * Initialisation paresseuse + écriture sur chaque changement.
 */
export function usePersistentState<T>(key: string, initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null) return initial;
      return JSON.parse(raw) as T;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* quota / privé */
    }
  }, [key, state]);

  return [state, setState];
}
