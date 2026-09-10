import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";

const ProfessoresSection = lazy(() => import("@/components/sections/ProfessoresSection"));
const ModalidadesSection = lazy(() => import("@/components/sections/ModalidadesSection"));
const PilatesSection = lazy(() => import("@/components/sections/PilatesSection"));
const MusculacaoSection = lazy(() => import("@/components/sections/MusculacaoSection"));
const DiferenciaisSection = lazy(() => import("@/components/sections/DiferenciaisSection"));
const SobreSection = lazy(() => import("@/components/sections/SobreSection"));
const GaleriaSection = lazy(() => import("@/components/sections/GaleriaSection"));
const CertificadosSection = lazy(() => import("@/components/sections/CertificadosSection"));
const HorariosSection = lazy(() => import("@/components/sections/HorariosSection"));
const UnidadesSection = lazy(() => import("@/components/sections/UnidadesSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const LeadCaptureSection = lazy(() => import("@/components/sections/LeadCaptureSection"));
const LocalizacaoSection = lazy(() => import("@/components/sections/LocalizacaoSection"));
const Footer = lazy(() => import("@/components/layout/Footer"));
const WhatsAppFloat = lazy(() => import("@/components/layout/WhatsAppFloat"));

const Fallback = () => <div className="min-h-[200px]" aria-hidden />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <Suspense fallback={<Fallback />}>
        <ProfessoresSection />
        <ModalidadesSection />
        <PilatesSection />
        <MusculacaoSection />
        <DiferenciaisSection />
        <SobreSection />
        <GaleriaSection />
        <CertificadosSection />
        <HorariosSection />
        <UnidadesSection />
        <CTASection />
        <FAQSection />
        <LeadCaptureSection />
        <LocalizacaoSection />
        <Footer />
        <WhatsAppFloat />
      </Suspense>
    </div>
  );
};

export default Index;
