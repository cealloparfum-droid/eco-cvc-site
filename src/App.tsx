import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Installation from "./pages/Installation";
import Maintenance from "./pages/Maintenance";
import Depannage from "./pages/Depannage";
import Produits from "./pages/Produits";
import Certifications from "./pages/Certifications";
import Calculateur from "./pages/Calculateur";
import ChambreFroide from "./pages/ChambreFroide";
import VitrinesRefrigerees from "./pages/VitrinesRefrigerees";
import Boutique from "./pages/Boutique";
import Ventilation from "./pages/Ventilation";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";
import NotFound from "./pages/NotFound";
import AdvisorBot from "./components/AdvisorBot";
import MobileStickyCTA from "./components/MobileStickyCTA";
import DevisFloatingBar from "./components/DevisFloatingBar";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ErrorBoundary>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AdvisorBot />
          <MobileStickyCTA />
          <DevisFloatingBar />
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
