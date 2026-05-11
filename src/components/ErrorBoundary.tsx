import { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary — empêche qu'une erreur React sur une page rende
 * l'ensemble du site blanc. Affiche un fallback élégant avec :
 *  - un appel à l'action « Retour à l'accueil »
 *  - un téléphone direct (au cas où le visiteur voulait acheter)
 *  - un bouton « Réessayer » qui force un re-render propre.
 *
 * En production on log juste dans la console — en dev on garde
 * la stack trace lisible.
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack?: string | null }) {
    // eslint-disable-next-line no-console
    console.error("[eco cvc · ErrorBoundary]", error, info?.componentStack);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-accent/30 px-4 py-16">
          <div className="max-w-xl w-full bg-white rounded-3xl border border-border shadow-lifted p-8 md:p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 mb-2">
              Oups, un imprévu côté affichage
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-7">
              Cette page a rencontré un souci technique. Aucune information n'est perdue —
              vous pouvez réessayer ou revenir à l'accueil. Si le problème persiste,
              appelez-nous directement, on s'occupe de votre demande.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <button
                type="button"
                onClick={this.reset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-white font-bold text-sm hover:bg-brand-bluedark transition-colors shadow-soft"
              >
                <RefreshCw className="w-4 h-4" />
                Réessayer
              </button>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-border text-slate-700 font-bold text-sm hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Home className="w-4 h-4" />
                Accueil
              </a>
              <a
                href="tel:+33629634045"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red text-white font-bold text-sm hover:bg-red-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                06 29 63 40 45
              </a>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="text-left bg-slate-50 border border-border rounded-xl p-4 text-xs">
                <summary className="cursor-pointer font-bold text-slate-700 mb-2">
                  Détail technique (dev)
                </summary>
                <pre className="whitespace-pre-wrap break-words text-[11px] text-brand-red mt-2">
                  {this.state.error.message}
                </pre>
                {this.state.error.stack && (
                  <pre className="whitespace-pre-wrap break-words text-[10px] text-slate-600 mt-2 max-h-48 overflow-auto">
                    {this.state.error.stack}
                  </pre>
                )}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
