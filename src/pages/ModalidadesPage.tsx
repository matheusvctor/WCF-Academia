import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import ModalidadesSection from "@/components/sections/ModalidadesSection";
import MusculacaoSection from "@/components/sections/MusculacaoSection";
import bannerMusc from "@/assets/musculacao/post-treino-pernas.webp";
import { Dumbbell } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export const ModalidadesPage = () => {
  usePageTitle(
    "Modalidades & Treinos",
    "Conheça as modalidades da WCF Academia: Musculação das 05h às 00h, Muay Thai, Spinning, Pilates Solo e Step em Campina Grande."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="Grade de Treinos"
        badgeIcon={<Dumbbell className="w-3.5 h-3.5" />}
        title={<>Nossas <span className="text-gradient-red">Modalidades</span> & Treinos.</>}
        description="Musculação de ponta, aulas coletivas energéticas e artes marciais com estrutura completa e orientação técnica de excelência."
        imageSrc={bannerMusc}
        imageAlt="Modalidades WCF Academia"
        accentColor="primary"
      />
      <main>
        <ModalidadesSection />
        <MusculacaoSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ModalidadesPage;
