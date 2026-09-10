import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import ModalidadesPage from "./pages/ModalidadesPage";
import PilatesPage from "./pages/PilatesPage";
import JiuJitsuPage from "./pages/JiuJitsuPage";
import EquipePage from "./pages/EquipePage";
import HorariosPage from "./pages/HorariosPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modalidades" element={<ModalidadesPage />} />
          <Route path="/pilates" element={<PilatesPage />} />
          <Route path="/jiu-jitsu" element={<JiuJitsuPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/horarios" element={<HorariosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
