import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import CTASection from "@/components/sections/CTASection";
import bannerContato from "@/assets/banners/banner-saude-longevidade.png";
import { MapPin } from "lucide-react";

export const ContatoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="Fale Conosco"
        badgeIcon={<MapPin className="w-3.5 h-3.5" />}
        title={<>Venha Treinar na <span className="text-gradient-red">WCF Academia</span>.</>}
        description="Localizada no Jardim Paulistano, Campina Grande – PB. Agende sua aula experimental gratuita e venha conhecer nossa estrutura."
        imageSrc={bannerContato}
        imageAlt="Contato WCF Academia"
        accentColor="primary"
      />
      <main>
        <LocalizacaoSection />
        <LeadCaptureSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContatoPage;
