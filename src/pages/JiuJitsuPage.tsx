import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import JiuJitsuKidsSection from "@/components/sections/JiuJitsuKidsSection";
import UnidadesSection from "@/components/sections/UnidadesSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import bannerJiuJitsu from "@/assets/jiujitsu/jiujitsu-tatame-horarios.webp";
import { Shield } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export const JiuJitsuPage = () => {
  usePageTitle(
    "Jiu-Jitsu Kids, Feminino & Adulto",
    "Jiu-Jitsu com Mestre Wilson Camara Filho na WCF. Turmas Kids (1ª mensalidade FREE até 10 anos), Jiu-Jitsu Feminino e Adulto a partir de R$ 60/mês."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="Tatame Oficial WCF"
        badgeIcon={<Shield className="w-3.5 h-3.5" />}
        title={<>Jiu-Jitsu Kids, <span className="text-gradient-red">Feminino & Adulto</span>.</>}
        description="Tradição e disciplina com Mestre Wilson Camara Filho. Campanha oficial de 1ª Mensalidade FREE para crianças até 10 anos e turma feminina."
        imageSrc={bannerJiuJitsu}
        imageAlt="Tatame Jiu-Jitsu WCF"
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
