import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GALERIA_EQUIPE } from "@/data/galeria";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ZoomIn, Users } from "lucide-react";

export const GaleriaSection = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="galeria" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Nossa Comunidade"
          title={
            <>
              A verdadeira <span className="text-gradient-red">família</span> WCF.
            </>
          }
          description="Crianças, jovens, adultos e atletas — todos treinando juntos no mesmo tatame e salão, com o mesmo propósito e respeito mútuo."
        />

        <div className="relative">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {GALERIA_EQUIPE.map((img, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div
                    onClick={() => setSelectedImg(img)}
                    className="overflow-hidden rounded-3xl border border-white/[0.08] bg-card aspect-[4/3] relative group cursor-pointer shadow-lg hover:border-white/25 hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="flex items-center justify-between w-full text-white">
                        <span className="text-xs font-heading font-semibold truncate pr-2">
                          {img.alt}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-md">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-card border-white/10 text-foreground hover:bg-red-600 hover:text-white" />
            <CarouselNext className="hidden md:flex -right-4 bg-card border-white/10 text-foreground hover:bg-red-600 hover:text-white" />
          </Carousel>
        </div>

        {/* Modal de Zoom com Acessibilidade Radix */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-3xl p-3 bg-card/95 backdrop-blur-2xl border border-white/15">
            <DialogTitle className="sr-only">
              {selectedImg?.alt || "Foto da Galeria WCF"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Visualização ampliada da comunidade e treinos da WCF Academia
            </DialogDescription>
            {selectedImg && (
              <div className="relative">
                <img
                  src={selectedImg.src}
                  alt={selectedImg.alt}
                  className="w-full h-auto rounded-2xl max-h-[82vh] object-contain mx-auto"
                />
                <p className="text-xs sm:text-sm text-foreground/80 text-center pt-3 px-4 pb-1 font-heading font-medium">
                  {selectedImg.alt}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GaleriaSection;
