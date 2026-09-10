import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import ProfessoresSection from "@/components/sections/ProfessoresSection";
import SobreSection from "@/components/sections/SobreSection";
import CertificadosSection from "@/components/sections/CertificadosSection";
import GaleriaSection from "@/components/sections/GaleriaSection";
import UnidadesSection from "@/components/sections/UnidadesSection";
import CTASection from "@/components/sections/CTASection";
import bannerEquipe from "@/assets/professores/professor-radames-aniversario.jpg";
import { Users } from "lucide-react";

export const EquipePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxBanner
        badge="Corpo Docente & História"
        badgeIcon={<Users className="w-3.5 h-3.5" />}
        title={<>Nossa <span className="text-gradient-red">Equipe</span> & Fundador.</>}
        description="5 Personais garantindo cobertura ininterrupta das 05h às 00h no salão, sob a liderança do Mestre Wilson Camara Filho."
        imageSrc={bannerEquipe}
        imageAlt="Equipe WCF Academia"
        accentColor="primary"
      />
      <main>
        <ProfessoresSection />
        <SobreSection />
        <CertificadosSection />
        <GaleriaSection />
        <UnidadesSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default EquipePage;
