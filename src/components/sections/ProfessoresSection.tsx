import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PROFESSORES } from "@/data/equipe";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SITE_INFO } from "@/constants/site";

export const ProfessoresSection = () => {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section id="professores" className="py-12 md:py-20 border-t border-border/50">
      <div className="container mx-auto">
        <SectionHeader
          label="Nossos personais"
          title={<>Quem treina <span className="text-gradient-red">com você.</span></>}
          description="Personal trainers da WCF Musculação — atendimento personalizado em todos os horários do dia."
          className="mb-10"
        />

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {PROFESSORES.map((p, i) => (
              <CarouselItem key={i} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                <div className="rounded-2xl overflow-hidden border border-border bg-card group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={p.src}
                      alt={`Personal ${p.nome} - ${SITE_INFO.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-heading text-lg font-bold text-foreground">Personal {p.nome}</div>
                    <div className="text-xs text-muted-foreground mt-1">{p.horario}</div>
                  </div>
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

export default ProfessoresSection;
