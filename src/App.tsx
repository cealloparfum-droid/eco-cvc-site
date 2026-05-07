import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdvisorBot from "./components/AdvisorBot";
import MobileStickyCTA from "./components/MobileStickyCTA";
import DevisFloatingBar from "./components/DevisFloatingBar";
import ExitIntentPopup from "./components/ExitIntentPopup";
import SeasonalUrgencyBanner from "./components/SeasonalUrgencyBanner";
import SocialProofTicker from "./components/SocialProofTicker";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ErrorBoundary from "./components/ErrorBoundary";
import { findDevis } from "./data/devis";

// Code splitting : chaque route lourde est chargée à la demande pour
// réduire le bundle initial (passage de 1,1 MB à ~350 KB côté JS).
const About = lazy(() => import("./pages/About"));
const Installation = lazy(() => import("./pages/Installation"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
const Depannage = lazy(() => import("./pages/Depannage"));
const Produits = lazy(() => import("./pages/Produits"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Calculateur = lazy(() => import("./pages/Calculateur"));
const ChambreFroide = lazy(() => import("./pages/ChambreFroide"));
const VitrinesRefrigerees = lazy(() => import("./pages/VitrinesRefrigerees"));
const Boutique = lazy(() => import("./pages/Boutique"));
const Ventilation = lazy(() => import("./pages/Ventilation"));
const Contact = lazy(() => import("./pages/Contact"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const CGV = lazy(() => import("./pages/CGV"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const CityPage = lazy(() => import("./pages/CityPage"));
const Blog = lazy(() => import("./pages/Blog"));
const Article = lazy(() => import("./pages/Article"));
const Avis = lazy(() => import("./pages/Avis"));
const Faq = lazy(() => import("./pages/Faq"));
const DevisLanding = lazy(() => import("./pages/DevisLanding"));
const Glossaire = lazy(() => import("./pages/Glossaire"));
const SimulateurAides = lazy(() => import("./pages/SimulateurAides"));
const MetierProPage = lazy(() => import("./pages/MetierProPage"));
const DepannageCasePage = lazy(() => import("./pages/DepannageCasePage"));
const AidesCollectivitePage = lazy(() => import("./pages/AidesCollectivitePage"));
const ComparateurChauffages = lazy(() => import("./pages/ComparateurChauffages"));
const MarquePage = lazy(() => import("./pages/MarquePage"));
const CodeErreurPage = lazy(() => import("./pages/CodeErreurPage"));
const QuizEligibilite = lazy(() => import("./pages/QuizEligibilite"));
const SolairePac = lazy(() => import("./pages/SolairePac"));
const Recrutement = lazy(() => import("./pages/Recrutement"));
const AuditDevis = lazy(() => import("./pages/AuditDevis"));
const ComparatifMarquesPage = lazy(() => import("./pages/ComparatifMarquesPage"));
const Parrainage = lazy(() => import("./pages/Parrainage"));
const CalendrierAides = lazy(() => import("./pages/CalendrierAides"));
const EtudesDeCas = lazy(() => import("./pages/EtudesDeCas"));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin" />
  </div>
);

const DevisLandingWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  if (slug && findDevis(slug)) return <DevisLanding />;
  return <NotFound />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/qui-sommes-nous" element={<About />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/depannage" element={<Depannage />} />
              <Route path="/produits" element={<Produits />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/calculateur" element={<Calculateur />} />
              <Route path="/chambre-froide" element={<ChambreFroide />} />
              <Route path="/vitrines-refrigerees" element={<VitrinesRefrigerees />} />
              <Route path="/boutique" element={<Boutique />} />
              <Route path="/ventilation" element={<Ventilation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/cgv" element={<CGV />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="/pompe-a-chaleur/:ville" element={<CityPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Article />} />
              <Route path="/avis" element={<Avis />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/glossaire" element={<Glossaire />} />
              <Route path="/simulateur-aides" element={<SimulateurAides />} />
              <Route path="/froid-commercial/:slug" element={<MetierProPage />} />
              <Route path="/depannage/:slug" element={<DepannageCasePage />} />
              <Route path="/aides-locales/:slug" element={<AidesCollectivitePage />} />
              <Route path="/comparateur-chauffages" element={<ComparateurChauffages />} />
              <Route path="/marques/:slug" element={<MarquePage />} />
              <Route path="/codes-erreur/:slug" element={<CodeErreurPage />} />
              <Route path="/eligibilite-maprimerenov" element={<QuizEligibilite />} />
              <Route path="/solaire-pompe-a-chaleur" element={<SolairePac />} />
              <Route path="/recrutement" element={<Recrutement />} />
              <Route path="/audit-devis-pac" element={<AuditDevis />} />
              <Route path="/comparatif/:slug" element={<ComparatifMarquesPage />} />
              <Route path="/parrainage" element={<Parrainage />} />
              <Route path="/calendrier-aides-2026" element={<CalendrierAides />} />
              <Route path="/etudes-de-cas" element={<EtudesDeCas />} />
              <Route path="/:slug" element={<DevisLandingWrapper />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <AdvisorBot />
          <MobileStickyCTA />
          <DevisFloatingBar />
          <ExitIntentPopup />
          <SeasonalUrgencyBanner />
          <SocialProofTicker />
          <WhatsAppFloat />
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
