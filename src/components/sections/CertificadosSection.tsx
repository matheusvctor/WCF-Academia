import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CERTIFICADOS } from "@/data/certificados";
import { SectionHeader } from "@/components/common/SectionHeader";

export const CertificadosSection = () => {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section id="certificados" className="py-14 md:py-24 border-t border-border/50">
      <div className="container mx-auto">
        <SectionHeader
          label="Credenciais"
          title={<>Certificações <span className="text-gradient-gold">reais.</span></>}
          description="Faixa Preta 6º Grau pela CBJJE e CBJJP, 5º Grau pela CBJJ, IBJJF e AJP, além de certificações em educação física, pilates, Core 360 e treinamento para terceira idade."
        />

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {CERTIFICADOS.map((url, i) => (
              <CarouselItem key={i} className="pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card group">
                  <img
                    src={url}
                    alt={`Certificado ${i + 1} - Wilson Camara Filho`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CertificadosSection;
