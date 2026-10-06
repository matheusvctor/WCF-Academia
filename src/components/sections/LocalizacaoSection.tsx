import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE_INFO } from "@/constants/site";
import { SectionHeader } from "@/components/common/SectionHeader";

export const LocalizacaoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

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

  return (
    <section id="localizacao" className="py-16 md:py-24 relative overflow-hidden bg-background section-optimized">

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <SectionHeader
          label="Onde Estamos"
          title={
            <>
              Localização Privilegiada no <span className="text-gradient-red">Jardim Paulistano</span>.
            </>
          }
          description="Fácil acesso por vias principais de Campina Grande, com tranquilidade e comodidade para estacionar."
          className="mb-8"
        />

        <div className="inline-flex items-center justify-center w-full mb-8">
          <div className="glass px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/10 text-center shadow-md">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <span className="text-xs sm:text-sm font-heading font-medium text-foreground">

              {SITE_INFO.address.full}
            </span>
          </div>
        </div>

        <div
          ref={ref}
          className="rounded-3xl overflow-hidden border border-white/15 mb-6 glass-card shadow-2xl relative"
          style={{ minHeight: 380 }}
        >
          {showMap ? (
            <iframe
              title={`Localização ${SITE_INFO.name}`}
              src={SITE_INFO.maps.embedUrl}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[380px] grayscale-[25%] contrast-[105%]"
            />
          ) : (
            <div className="w-full h-[380px] flex items-center justify-center bg-card/60">
              <span className="text-xs font-heading uppercase tracking-widest text-muted-foreground animate-pulse">
                Carregando mapa interativo...
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE_INFO.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !py-3.5 !px-7 text-xs sm:text-sm font-heading flex items-center gap-2 hover:border-primary/50"
          >
            <Navigation className="w-4 h-4 text-primary" />
            Traçar Rota no Google Maps
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocalizacaoSection;

