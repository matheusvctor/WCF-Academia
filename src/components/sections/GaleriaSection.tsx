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
import { Camera, ZoomIn } from "lucide-react";

export const GaleriaSection = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="galeria" className="py-16 md:py-24 border-t border-white/10 relative overflow-hidden bg-background section-optimized">

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          label="Nossa Comunidade"
          title={
            <>
              A Verdadeira <span className="text-gradient-red">Família</span> WCF.
            </>
          }
          description="Crianças, jovens, adultos e atletas — todos treinando juntos no mesmo tatame e salão, com o mesmo propósito."
          className="mb-10"
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
                  className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div
                    onClick={() => setSelectedImg(img)}
                    className="overflow-hidden rounded-2xl border border-white/10 glass-card aspect-[4/3] relative group cursor-pointer shadow-lg hover:border-primary/50 transition-all duration-300"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex items-center justify-between w-full text-white">
                        <span className="text-xs font-heading font-medium truncate pr-2">
                          {img.alt}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-primary/90 flex items-center justify-center shrink-0">
                          <ZoomIn className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-card/80 border-white/15 text-foreground hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-4 bg-card/80 border-white/15 text-foreground hover:bg-primary hover:text-white" />
          </Carousel>
        </div>

        {/* Modal de Zoom com Acessibilidade Radix */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-3xl p-2 bg-card/95 backdrop-blur-2xl border border-white/15">
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
                  className="w-full h-auto rounded-xl max-h-[85vh] object-contain mx-auto"
                />
                <p className="text-xs text-muted-foreground text-center pt-2 px-4 pb-1">
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

