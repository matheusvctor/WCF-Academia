import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import HorariosSection from "@/components/sections/HorariosSection";
import PlanosSection from "@/components/sections/PlanosSection";
import FAQSection from "@/components/sections/FAQSection";
import bannerHorarios from "@/assets/banners/banner-comeco-zero.webp";
import { Clock } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export const HorariosPage = () => {
  usePageTitle(
    "Horários & Planos de Treino",
    "Consulte a grade completa de funcionamento da WCF Academia (05h às 00h) e nossos planos com o melhor custo-benefício de Campina Grande."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="Planejamento de Treino"
        badgeIcon={<Clock className="w-3.5 h-3.5" />}
        title={<>Horários de <span className="text-gradient-red">Funcionamento</span> & Aulas.</>}
        description="Aberto de segunda a domingo. Grade completa de musculação, turmas coletivas, tatame de Jiu-Jitsu e horários do Studio Pilates."
        imageSrc={bannerHorarios}
        imageAlt="Horários WCF Academia"
        accentColor="primary"
      />
      <main>
        <HorariosSection />
        <PlanosSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HorariosPage;
