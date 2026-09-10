import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import JiuJitsuKidsSection from "@/components/sections/JiuJitsuKidsSection";
import CTASection from "@/components/sections/CTASection";
import bannerJiuJitsu from "@/assets/jiujitsu/jiujitsu-tatame-horarios.jpg";
import { Shield } from "lucide-react";

export const JiuJitsuPage = () => {
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
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default JiuJitsuPage;
