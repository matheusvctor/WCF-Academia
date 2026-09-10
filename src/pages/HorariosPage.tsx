import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import HorariosSection from "@/components/sections/HorariosSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import bannerHorarios from "@/assets/banners/banner-comeco-zero.png";
import { Clock } from "lucide-react";

export const HorariosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="Planejamento de Treino"
        badgeIcon={<Clock className="w-3.5 h-3.5" />}
        title={<>Horários de <span className="text-gradient-gold">Funcionamento</span> & Aulas.</>}
        description="Aberto de segunda a domingo. Grade completa de musculação, turmas coletivas, tatame de Jiu-Jitsu e horários do Studio Pilates."
        imageSrc={bannerHorarios}
        imageAlt="Horários WCF Academia"
        accentColor="gold"
      />
      <main>
        <HorariosSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HorariosPage;
