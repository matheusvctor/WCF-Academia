import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import QuickPortals from "@/components/sections/QuickPortals";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ProfessoresSection from "@/components/sections/ProfessoresSection";
import DiferenciaisSection from "@/components/sections/DiferenciaisSection";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { usePageTitle } from "@/hooks/usePageTitle";

export const Index = () => {
  usePageTitle(
    "Início",
    "WCF Academia - Musculação das 05h às 00h, Jiu-Jitsu Kids e Adulto, e Studio Pilates no Jardim Paulistano, Campina Grande - PB. Agende sua aula grátis!"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <QuickPortals />
        <ProfessoresSection />
        <DiferenciaisSection />
        <LocalizacaoSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
