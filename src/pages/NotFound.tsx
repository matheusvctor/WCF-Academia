import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, Dumbbell, Sparkles, Shield, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";

const NotFound = () => {
  const location = useLocation();

  usePageTitle(
    "Página Não Encontrada",
    "A página que você tentou acessar não foi encontrada na WCF Academia. Volte para a página inicial ou fale conosco."
  );

  useEffect(() => {
    console.error("404 Error: Rota não encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="relative max-w-xl w-full text-center space-y-8">
          {/* Ambient Glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

          {/* 404 Badge */}
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-sm tracking-wider uppercase">
            <Dumbbell className="w-4 h-4 animate-pulse" />
            Erro 404 • Rota Perdida
          </div>

          <div className="relative space-y-4">
            <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-gradient-red font-display">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Ops! Essa página não existe no tatame.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
              O link que você seguiu pode ter sido alterado ou a página foi movida durante a nossa reformulação.
            </p>
          </div>

          {/* CTAs */}
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold w-full sm:w-auto shadow-lg shadow-primary/20">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar para o Início
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:border-primary/50 text-foreground w-full sm:w-auto">
              <a href={getWhatsAppUrl("Olá! Estava navegando no site da WCF e gostaria de informações.")} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2 text-green-500" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Quick links */}
          <div className="relative pt-6 border-t border-border/50">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Navegue direto para nossas modalidades:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Link
                to="/modalidades"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-card/60 border border-border/50 hover:border-primary/50 text-xs font-medium text-foreground transition-all hover:bg-primary/5"
              >
                <Dumbbell className="w-3.5 h-3.5 text-primary" />
                <span>Modalidades</span>
              </Link>
              <Link
                to="/pilates"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-card/60 border border-border/50 hover:border-primary/50 text-xs font-medium text-foreground transition-all hover:bg-primary/5"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Pilates</span>
              </Link>
              <Link
                to="/jiu-jitsu"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-card/60 border border-border/50 hover:border-primary/50 text-xs font-medium text-foreground transition-all hover:bg-primary/5"
              >
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span>Jiu-Jitsu</span>
              </Link>
              <Link
                to="/horarios"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-card/60 border border-border/50 hover:border-primary/50 text-xs font-medium text-foreground transition-all hover:bg-primary/5"
              >
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Planos</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default NotFound;
