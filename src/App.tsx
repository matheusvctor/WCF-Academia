import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/layout/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const ModalidadesPage = lazy(() => import("./pages/ModalidadesPage"));
const PilatesPage = lazy(() => import("./pages/PilatesPage"));
const JiuJitsuPage = lazy(() => import("./pages/JiuJitsuPage"));
const EquipePage = lazy(() => import("./pages/EquipePage"));
const HorariosPage = lazy(() => import("./pages/HorariosPage"));
const ContatoPage = lazy(() => import("./pages/ContatoPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
    <div className="relative w-12 h-12">
      <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center font-heading font-black text-xs text-primary">
        WCF
      </div>
    </div>
    <span className="text-xs uppercase font-heading tracking-widest text-muted-foreground animate-pulse">
      Carregando...
    </span>
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner position="top-center" richColors />
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modalidades" element={<ModalidadesPage />} />
          <Route path="/pilates" element={<PilatesPage />} />
          <Route path="/jiu-jitsu" element={<JiuJitsuPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/horarios" element={<HorariosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;

