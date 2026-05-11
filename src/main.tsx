import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

/**
 * Service Worker registration — PWA offline + cache strategy.
 * Améliore Core Web Vitals (LCP, INP) + permet l'installation comme app.
 */
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .catch(() => {
        /* silent fail — pas critique */
      });
  });
}
