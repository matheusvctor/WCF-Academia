import { MapPin, Navigation, ExternalLink, Clock, MessageCircle, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE_INFO, getWhatsAppUrl } from "@/constants/site";
import { SectionHeader } from "@/components/common/SectionHeader";
import { HORARIOS_FUNCIONAMENTO } from "@/data/horarios";
import { useOpenStatus } from "@/hooks/useOpenStatus";

export const LocalizacaoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);
  const status = useOpenStatus();
  const today = status.now.day;

  useEffect(() => {
    if (!ref.current || showMap) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowMap(true);
          io.disconnect();
        }
      },
      { rootMargin: "250px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [showMap]);

  const canais = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: SITE_INFO.phone,
      href: getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da WCF Academia!"),
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      external: true,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: SITE_INFO.phone,
      href: `tel:+${SITE_INFO.phoneRaw}`,
      accent: "text-primary bg-primary/10 border-primary/20",
      external: false,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: SITE_INFO.instagram.handle,
      href: SITE_INFO.instagram.url,
      accent: "text-gold bg-gold/10 border-gold/20",
      external: true,
    },
  ];

  return (
    <section id="localizacao" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Onde estamos"
          title={
            <>
              No coração do <span className="text-gradient-red">Jardim Paulistano</span>.
            </>
          }
          description="Fácil acesso pelas vias principais de Campina Grande, com tranquilidade para estacionar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-6">
          {/* ===== Painel de contato ===== */}
          <div className="lg:col-span-2 surface p-6 sm:p-8 flex flex-col gap-7">
            {/* Endereço */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Endereço</h3>
                <address className="not-italic mt-1 text-sm text-muted-foreground leading-relaxed">
                  {SITE_INFO.address.street}
                  <br />
                  {SITE_INFO.address.neighborhood}, {SITE_INFO.address.city} – {SITE_INFO.address.state}
                  <br />
                  CEP {SITE_INFO.address.cep}
                </address>
              </div>
            </div>

            {/* Horários */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading font-bold text-foreground">Horários</h3>
                  <span
                    className={`chip !py-0.5 ${
                      status.isOpen
                        ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                        : "bg-white/[0.04] border-white/10 text-muted-foreground"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? "bg-emerald-400" : "bg-muted-foreground"}`} />
                    {status.title} · {status.detail}
                  </span>
                </div>
                <dl className="mt-3 space-y-2 text-sm">
                  {HORARIOS_FUNCIONAMENTO.map((f) => {
                    const ativo =
                      (f.dia.startsWith("Segunda") && today >= 1 && today <= 5) ||
                      (f.dia.startsWith("Sábado") && today === 6) ||
                      (f.dia.startsWith("Domingo") && today === 0);
                    return (
                      <div key={f.dia} className="flex flex-wrap justify-between gap-x-4 gap-y-0.5">
                        <dt className={ativo ? "text-foreground font-medium" : "text-muted-foreground"}>{f.dia}</dt>
                        <dd className={`tabular ${ativo ? "text-foreground font-semibold" : "text-foreground/80"}`}>{f.horario}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>

            {/* Canais de atendimento */}
            <div>
              <h3 className="font-heading font-bold text-foreground mb-3">Atendimento direto</h3>
              <ul className="space-y-2">
                {canais.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-center gap-3 p-3 rounded-2xl border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03] transition-colors"
                      >
                        <span className={`w-9 h-9 shrink-0 rounded-xl border flex items-center justify-center ${c.accent}`}>
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-xs text-muted-foreground">{c.label}</span>
                          <span className="block text-sm font-semibold text-foreground truncate">{c.value}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma visita para conhecer a WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Agendar visita
              </a>
              <a
                href={SITE_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Traçar rota
              </a>
            </div>
          </div>

          {/* ===== Mapa ===== */}
          <div
            ref={ref}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-white/[0.08] bg-card min-h-[320px] sm:min-h-[420px]"
          >
            {showMap ? (
              <iframe
                title={`Localização ${SITE_INFO.name}`}
                src={SITE_INFO.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[25%] contrast-[105%]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-heading uppercase tracking-widest text-muted-foreground animate-pulse">
                  Carregando mapa…
                </span>
              </div>
            )}

            <a
              href={SITE_INFO.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-background/90 backdrop-blur-md border border-white/10 shadow-xl hover:border-white/25 transition-colors"
            >
              <span className="w-8 h-8 shrink-0 rounded-full bg-red-600 flex items-center justify-center text-white">
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-heading font-semibold text-foreground truncate">{SITE_INFO.name}</span>
                <span className="block text-xs text-muted-foreground truncate">{SITE_INFO.address.street}</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalizacaoSection;
