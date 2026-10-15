import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ParallaxBanner from "@/components/common/ParallaxBanner";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import bannerContato from "@/assets/banners/banner-saude-longevidade.webp";
import { MapPin, Phone, MessageCircle, Instagram, Clock, ArrowUpRight } from "lucide-react";
import { SITE_INFO, getWhatsAppUrl } from "@/constants/site";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useOpenStatus } from "@/hooks/useOpenStatus";

export const ContatoPage = () => {
  usePageTitle(
    "Contato & Localização",
    "Fale com a WCF Academia no Jardim Paulistano em Campina Grande - PB. Agende sua aula experimental gratuita pelo WhatsApp."
  );

  const status = useOpenStatus();

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <ParallaxBanner
        badge="Fale Conosco"
        badgeIcon={<MapPin className="w-3.5 h-3.5" />}
        title={
          <>
            Venha treinar na <span className="text-gradient-red">WCF Academia</span>.
          </>
        }
        description="Localizada no Jardim Paulistano, Campina Grande – PB. Agende sua aula experimental gratuita e venha conhecer nossa estrutura completa."
        imageSrc={bannerContato}
        imageAlt="Contato WCF Academia"
        accentColor="primary"
      />

      <main>
        {/* Quick Contact Cards Grid */}
        <section className="py-12 md:py-16 bg-background border-b border-white/[0.08] relative z-10 section-optimized">
          <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Card WhatsApp */}
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover p-6 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground mb-1">
                    WhatsApp Oficial
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{SITE_INFO.phone}</p>
                </div>
                <span className="mt-5 pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-emerald-400 inline-flex items-center gap-1">
                  Iniciar conversa
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              {/* Card Horários com Status em Tempo Real */}
              <div className="surface p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span
                      className={`chip !py-0.5 ${
                        status.isOpen
                          ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                          : "bg-white/[0.04] border-white/10 text-muted-foreground"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? "bg-emerald-400" : "bg-muted-foreground"}`} />
                      {status.isOpen ? "Aberto" : "Fechado"}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">
                    Horário de Treino
                  </h3>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>Seg–Sex: <strong className="text-foreground">05h–00h</strong></p>
                    <p>Sáb: 08h–12h · 14h–17h</p>
                    <p>Dom: 08h–14h</p>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-white/[0.06] text-[11px] text-muted-foreground">
                  {status.title} · {status.detail}
                </div>
              </div>

              {/* Card Endereço */}
              <a
                href={SITE_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover p-6 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground mb-1">
                    Nosso Endereço
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {SITE_INFO.address.short}
                  </p>
                </div>
                <span className="mt-5 pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-primary inline-flex items-center gap-1">
                  Ver no Google Maps
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              {/* Card Instagram */}
              <a
                href={SITE_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover p-6 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-gold/10 border border-gold/25 text-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground mb-1">
                    Instagram Oficial
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{SITE_INFO.instagram.handle}</p>
                </div>
                <span className="mt-5 pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-gold inline-flex items-center gap-1">
                  Acessar perfil
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
