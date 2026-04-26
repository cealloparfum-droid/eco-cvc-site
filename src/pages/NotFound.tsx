import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center max-w-md">
          <div className="text-8xl md:text-9xl font-extrabold text-gradient-brand mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">Page introuvable</h1>
          <p className="text-muted-foreground mb-8">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-bluedark transition-colors"
            >
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-border hover:border-brand-blue/40 text-foreground font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Nous contacter
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
