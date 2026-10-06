import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import QuickPortals from "@/components/sections/QuickPortals";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ProfessoresSection from "@/components/sections/ProfessoresSection";
import PlanosSection from "@/components/sections/PlanosSection";
import GaleriaSection from "@/components/sections/GaleriaSection";
import DiferenciaisSection from "@/components/sections/DiferenciaisSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import FAQSection from "@/components/sections/FAQSection";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { usePageTitle } from "@/hooks/usePageTitle";

export const Index = () => {
  usePageTitle(
    "Início | Musculação das 05h às 00h, Jiu-Jitsu e Pilates",
    "WCF Academia - Musculação das 05h às 00h com 5 personais, Jiu-Jitsu Kids e Adulto, e Studio Pilates no Jardim Paulistano, Campina Grande - PB. Agende sua aula grátis!"
  );

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <QuickPortals />
        <ProfessoresSection />
        <PlanosSection />
        <GaleriaSection />
        <DiferenciaisSection />
        <LeadCaptureSection />
        <FAQSection />
        <LocalizacaoSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

