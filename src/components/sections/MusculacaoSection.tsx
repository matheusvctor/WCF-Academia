import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FOTOS_MUSCULACAO } from "@/data/musculacao";
import { SectionHeader } from "@/components/common/SectionHeader";

export const MusculacaoSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="musculacao" className="py-14 md:py-24 border-t border-border/50">
      <div className="container mx-auto">
        <SectionHeader
          label="Estrutura completa"
          title={<>Área principal de <span className="text-gradient-red">musculação</span>.</>}
          description="Equipamentos profissionais Supreme, Vitally e Impact — espaço amplo para hipertrofia, força e condicionamento."
          className="mb-10"
        />

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="w-full relative"
        >
          <CarouselContent className="-ml-3">
            {FOTOS_MUSCULACAO.map((f, i) => (
              <CarouselItem
                key={i}
                className="pl-3 basis-4/5 md:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-2xl border border-border aspect-[4/3] bg-card">
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default MusculacaoSection;
