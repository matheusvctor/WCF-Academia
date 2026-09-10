import { MapPin, Navigation } from "lucide-react";
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
      { rootMargin: "200px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [showMap]);

  return (
    <section id="localizacao" className="py-14 md:py-24">
      <div className="container mx-auto">
        <SectionHeader
          label="Localização"
          title={<>Fácil de <span className="text-gradient-gold">chegar.</span></>}
        />

        <p className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-10 text-center">
          <MapPin className="w-4 h-4 text-primary shrink-0" />
          <span>{SITE_INFO.address.full}</span>
        </p>

        <div
          ref={ref}
          className="rounded-2xl overflow-hidden border border-border mb-6 bg-card"
          style={{ minHeight: 350 }}
        >
          {showMap && (
            <iframe
              title={`Localização ${SITE_INFO.name}`}
              src={SITE_INFO.maps.embedUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>

        <div className="text-center">
          <a
            href={SITE_INFO.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Navigation className="w-4 h-4" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocalizacaoSection;
