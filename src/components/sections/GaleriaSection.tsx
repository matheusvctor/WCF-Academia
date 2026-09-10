import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { GALERIA_EQUIPE } from "@/data/galeria";
import { SectionHeader } from "@/components/common/SectionHeader";

export const GaleriaSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="galeria" className="py-14 md:py-24">
      <div className="container mx-auto">
        <SectionHeader
          label="Nossa equipe"
          title={<>A <span className="text-gradient-red">família</span> WCF.</>}
          description="Crianças, jovens, adultos e atletas — todos treinando juntos no mesmo tatame, com o mesmo propósito."
        />

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {GALERIA_EQUIPE.map((img, i) => (
              <CarouselItem
                key={i}
                className="pl-3 basis-4/5 md:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-2xl border border-border aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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

export default GaleriaSection;
