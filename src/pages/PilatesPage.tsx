import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import PilatesSection from "@/components/sections/PilatesSection";
import CTASection from "@/components/sections/CTASection";
import bannerPilates from "@/assets/banners/banner-pilates-qualidade.png";
import { Sparkles } from "lucide-react";

export const PilatesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="WCF Studio Pilates"
        badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
        title={<>Studio Reformer & <span className="text-gradient-gold">Pilates Solo</span>.</>}
        description="Equipamentos clássicos, alinhamento postural, fortalecimento do core e aulas com acompanhamento individualizado para saúde e longevidade."
        imageSrc={bannerPilates}
        imageAlt="Studio Pilates WCF"
        accentColor="gold"
      />
      <main>
        <PilatesSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PilatesPage;
