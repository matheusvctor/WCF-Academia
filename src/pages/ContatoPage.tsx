import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import bannerContato from "@/assets/banners/banner-saude-longevidade.webp";
import { MapPin, Phone, MessageCircle, Instagram, Clock, Navigation } from "lucide-react";
import { SITE_INFO, getWhatsAppUrl } from "@/constants/site";
import { usePageTitle } from "@/hooks/usePageTitle";

export const ContatoPage = () => {
  usePageTitle(
    "Contato & Localização",
    "Fale com a WCF Academia no Jardim Paulistano em Campina Grande - PB. Agende sua aula experimental gratuita pelo WhatsApp."
  );

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
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
        {/* Quick Contact Cards Grid */}
        <section className="py-12 bg-background border-b border-white/10 relative z-10 section-optimized">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Card WhatsApp */}
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mb-1">
                  WhatsApp Oficial
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{SITE_INFO.phone}</p>
                <span className="text-xs font-heading font-semibold text-emerald-400 group-hover:underline inline-flex items-center gap-1">
                  Enviar Mensagem →
                </span>
              </a>

              {/* Card Horários */}
              <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mb-1">
                  Horário de Treino
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Seg–Sex: 05h–00h <br />
                  Sáb: 08h–12h / 14h–17h <br />
                  Dom: 08h–14h
                </p>
              </div>

              {/* Card Endereço */}
              <a
                href={SITE_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mb-1">
                  Nosso Endereço
                </h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {SITE_INFO.address.short}
                </p>
                <span className="text-xs font-heading font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                  Ver no Google Maps →
                </span>
              </a>

              {/* Card Instagram */}
              <a
                href={SITE_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mb-1">
                  Instagram
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{SITE_INFO.instagram.handle}</p>
                <span className="text-xs font-heading font-semibold text-amber-400 group-hover:underline inline-flex items-center gap-1">
                  Acessar Perfil →
                </span>
              </a>
            </div>
          </div>
        </section>

        <LocalizacaoSection />
        <LeadCaptureSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContatoPage;
