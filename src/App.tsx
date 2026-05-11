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
import MaPrimeRenovCountdown from "./components/MaPrimeRenovCountdown";
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
const DepannagePhoto = lazy(() => import("./pages/DepannagePhoto"));
const DimensionnementPage = lazy(() => import("./pages/DimensionnementPage"));
const GlossaireFluides = lazy(() => import("./pages/GlossaireFluides"));
const ZfeLyon = lazy(() => import("./pages/ZfeLyon"));
const MythesPac = lazy(() => import("./pages/MythesPac"));
const PacSolaireBatterie = lazy(() => import("./pages/PacSolaireBatterie"));
const RemplacementChaudiereFioul = lazy(() =>
  import("./pages/RemplacementChaudiere").then((m) => ({
    default: m.RemplacementChaudiereFioul,
  })),
);
const RemplacementChaudiereGaz = lazy(() =>
  import("./pages/RemplacementChaudiere").then((m) => ({
    default: m.RemplacementChaudiereGaz,
  })),
);
const ChoisirInstallateur = lazy(() => import("./pages/ChoisirInstallateur"));
const PacVsGranules = lazy(() => import("./pages/PacVsGranules"));
const PacVsClimReversible = lazy(() => import("./pages/PacVsClimReversible"));
const ClimReversible990 = lazy(() => import("./pages/ClimatisationReversible990"));
const TarifsClim = lazy(() => import("./pages/TarifsClimatisation"));
const ClimVille = lazy(() => import("./pages/ClimVille"));
const ClimCopro = lazy(() => import("./pages/ClimCopropriete"));
const ClimGite = lazy(() => import("./pages/ClimGiteAirbnb"));
const PlanDuSite = lazy(() => import("./pages/PlanDuSite"));
const QuartierPage = lazy(() => import("./pages/QuartierPage"));
const ServiceVillePage = lazy(() => import("./pages/ServiceVillePage"));
const ComparatifConcurrentPage = lazy(() => import("./pages/ComparatifConcurrentPage"));

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
              <Route path="/depannage-photo" element={<DepannagePhoto />} />
              <Route path="/dimensionnement/:slug" element={<DimensionnementPage />} />
              <Route path="/glossaire-fluides-frigorigenes" element={<GlossaireFluides />} />
              <Route path="/zfe-lyon-sortir-fioul-gaz" element={<ZfeLyon />} />
              <Route path="/mythes-pompe-a-chaleur" element={<MythesPac />} />
              <Route path="/pac-solaire-batterie" element={<PacSolaireBatterie />} />
              <Route path="/remplacement-chaudiere-fioul" element={<RemplacementChaudiereFioul />} />
              <Route path="/remplacement-chaudiere-gaz" element={<RemplacementChaudiereGaz />} />
              <Route path="/choisir-installateur-pompe-a-chaleur" element={<ChoisirInstallateur />} />
              <Route path="/pac-vs-granules" element={<PacVsGranules />} />
              <Route path="/pac-vs-clim-reversible" element={<PacVsClimReversible />} />
              <Route path="/climatisation-reversible-990-euros" element={<ClimReversible990 />} />
              <Route path="/tarifs-climatisation-reversible" element={<TarifsClim />} />
              <Route path="/climatisation-reversible/:ville" element={<ClimVille />} />
              <Route path="/climatisation-copropriete" element={<ClimCopro />} />
              <Route path="/climatisation-gite-airbnb" element={<ClimGite />} />
              <Route path="/plan-du-site" element={<PlanDuSite />} />
              <Route path="/quartier/:slug" element={<QuartierPage />} />
              <Route path="/vmc/:ville" element={<ServiceVillePage serviceType="vmc" />} />
              <Route path="/depannage-rapide/:ville" element={<ServiceVillePage serviceType="depannage" />} />
              <Route path="/entretien-pac/:ville" element={<ServiceVillePage serviceType="entretien" />} />
              <Route path="/vs/:slug" element={<ComparatifConcurrentPage />} />
              <Route path="/:slug" element={<DevisLandingWrapper />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <AdvisorBot />
          <MobileStickyCTA />
          <DevisFloatingBar />
          <ExitIntentPopup />
          <SeasonalUrgencyBanner />
          <MaPrimeRenovCountdown />
          <SocialProofTicker />
          <WhatsAppFloat />
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
