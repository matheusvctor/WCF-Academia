import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import PilatesSection from "@/components/sections/PilatesSection";
import bannerPilates from "@/assets/banners/banner-pilates-qualidade.webp";
import { Sparkles } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export const PilatesPage = () => {
  usePageTitle(
    "Studio Pilates Reformer & Solo",
    "Studio Pilates WCF em Campina Grande: Aparelhos Reformer, Cadillac, Chair e aulas de Pilates Solo para alinhamento postural, core e longevidade."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="WCF Studio Pilates"
        badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
        title={<>Studio Reformer & <span className="text-gradient-red">Pilates Solo</span>.</>}
        description="Equipamentos clássicos, alinhamento postural, fortalecimento do core e aulas com acompanhamento individualizado para saúde e longevidade."
        imageSrc={bannerPilates}
        imageAlt="Studio Pilates WCF"
        accentColor="primary"
      />
      <main>
        <PilatesSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PilatesPage;
