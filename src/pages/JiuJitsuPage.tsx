import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import JiuJitsuKidsSection from "@/components/sections/JiuJitsuKidsSection";
import UnidadesSection from "@/components/sections/UnidadesSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import bannerJiuJitsu from "@/assets/jiujitsu/graduacao-jiujitsu-equipe.webp";
import { Shield } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export const JiuJitsuPage = () => {
  usePageTitle(
    "Lutas: Jiu-Jitsu, Luta Livre e Judô",
    "Artes Marciais com Mestre Wilson Camara Filho na WCF: Jiu-Jitsu (Kids, Feminino e Adulto), Luta Livre e Judô em Campina Grande. 1ª mensalidade FREE até 10 anos."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="Tatame Oficial WCF • Artes Marciais"
        badgeIcon={<Shield className="w-3.5 h-3.5" />}
        title={<>Jiu-Jitsu, <span className="text-gradient-red">Luta Livre & Judô</span>.</>}
        description="Tradição, técnica e disciplina sob a liderança do Mestre Wilson Camara Filho. Turmas de Jiu-Jitsu (Kids, Feminino e Adulto), Luta Livre Esportiva e Judô para todas as idades."
        imageSrc={bannerJiuJitsu}
        imageAlt="Tatame Oficial de Lutas WCF Academia"
        accentColor="primary"
      />
      <main>
        <JiuJitsuKidsSection />
        <UnidadesSection />
        <LeadCaptureSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};


export default JiuJitsuPage;
