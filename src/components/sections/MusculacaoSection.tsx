import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FOTOS_MUSCULACAO, MUSCULACAO_HIGHLIGHTS } from "@/data/musculacao";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Dumbbell, HeartPulse, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const MusculacaoSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="musculacao" className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          label="Estrutura & Resultados"
          title={
            <>
              Área Principal de <span className="text-gradient-red">Musculação</span> & Biomecânica.
            </>
          }
          description="Equipamentos profissionais Supreme, Vitally e Impact — sala climatizada, pesos livres completos e 5 personais de plantão para orientar sua execução."
          className="mb-12"
        />

        {/* 2 Destaques Oficiais: Biomecânica de Pernas & Saúde/Longevidade */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Biomecânica */}
          <div className="glass rounded-3xl border border-border/80 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                <Dumbbell className="w-3.5 h-3.5" /> Biomecânica Aplicada
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                {MUSCULACAO_HIGHLIGHTS.biomecanica.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {MUSCULACAO_HIGHLIGHTS.biomecanica.desc}
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden border border-border/80 relative group cursor-pointer aspect-square max-h-[360px] mx-auto bg-card"
              onClick={() => setSelectedImg(MUSCULACAO_HIGHLIGHTS.biomecanica.image)}
            >
              <img
                src={MUSCULACAO_HIGHLIGHTS.biomecanica.image}
                alt="Treino de Pernas e Biomecânica WCF"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-heading text-white tracking-wider">Clique para ampliar pôster</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Aparelhos reguláveis com isolamento neuromuscular preciso</span>
            </div>
          </div>

          {/* Card 2: Longevidade & Terceira Idade */}
          <div className="glass rounded-3xl border border-border/80 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <HeartPulse className="w-3.5 h-3.5" /> Longevidade & Autonomia
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                {MUSCULACAO_HIGHLIGHTS.longevidade.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {MUSCULACAO_HIGHLIGHTS.longevidade.desc}
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden border border-border/80 relative group cursor-pointer aspect-square max-h-[360px] mx-auto bg-card"
              onClick={() => setSelectedImg(MUSCULACAO_HIGHLIGHTS.longevidade.image)}
            >
              <img
                src={MUSCULACAO_HIGHLIGHTS.longevidade.image}
                alt="Saúde e Longevidade na WCF Academia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-heading text-white tracking-wider">Clique para ampliar pôster</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Atendimento acolhedor e seguro para iniciantes e terceira idade</span>
            </div>
          </div>
        </div>

        {/* Galeria de Fotos dos Equipamentos */}
        <div>
          <div className="mb-6">
            <h4 className="font-heading text-lg font-bold text-foreground">Equipamentos e Ambiente do Salão</h4>
            <p className="text-xs text-muted-foreground">Linhas de ponta Supreme, Vitally e Impact para todos os grupos musculares.</p>
          </div>

          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-3">
              {FOTOS_MUSCULACAO.map((f, i) => (
                <CarouselItem
                  key={i}
                  className="pl-3 basis-4/5 sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="overflow-hidden rounded-2xl border border-border aspect-[4/3] bg-card cursor-pointer group"
                    onClick={() => setSelectedImg(f.src)}
                  >
                    <img
                      src={f.src}
                      alt={f.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>

        {/* Dialog Modal */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-2xl p-2 bg-card/95 backdrop-blur-xl border border-border">
            {selectedImg && (
              <img
                src={selectedImg}
                alt="Pôster WCF ampliado"
                className="w-full h-auto rounded-xl max-h-[85vh] object-contain mx-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MusculacaoSection;
