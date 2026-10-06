import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FOTOS_PILATES, PILATES_STUDIO_INFO } from "@/data/pilates";
import { getWhatsAppUrl } from "@/constants/site";
import { MessageCircle, Sparkles, Check, Activity, Heart, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const BENEFICIO_ICONS = [
  Sparkles,
  Activity,
  Heart,
  Shield,
];

export const PilatesSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="pilates" className="py-12 md:py-16 relative overflow-hidden bg-background section-optimized">
      {/* High-Performance Radial Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow-ambient-red rounded-full pointer-events-none opacity-60" />


      <div className="container mx-auto px-4 relative z-10">
        {/* Feature Banner Grid: Pôster Reformer + Pôster Solo */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Card 1: Banner Principal Studio & Reformer */}
          <div className="lg:col-span-7 glass rounded-2xl sm:rounded-3xl border border-border/80 hover:border-primary/40 p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-colors">
            <div className="space-y-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-heading uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Studio WCF
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground leading-tight">
                Seu corpo sente. <span className="text-gradient-red">Sua mente agradece.</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mais força, postura e autonomia para o seu dia a dia. No WCF Studio Pilates você conta com atendimento individualizado e turmas reduzidas para máxima evolução e segurança articular.
              </p>
            </div>

            {/* Imagem do Pôster Oficial Reformer */}
            <div
              className="rounded-2xl overflow-hidden border border-border/80 relative group cursor-pointer aspect-square max-h-[360px] mx-auto bg-card"
              onClick={() => setSelectedImg(PILATES_STUDIO_INFO.bannerImage)}
            >
              <img
                src={PILATES_STUDIO_INFO.bannerImage}
                alt="Pilates Reformer WCF Academia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-heading text-white tracking-wider">Clique para ampliar pôster</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/50 flex flex-wrap gap-2">
              {PILATES_STUDIO_INFO.aparelhos.map((ap, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-card border border-border/80 text-foreground/90 font-medium"
                >
                  <Check className="w-3 h-3 text-primary" /> {ap}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Pilates Solo & Aulão */}
          <div className="lg:col-span-5 glass rounded-2xl sm:rounded-3xl border border-border hover:border-primary/40 p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-xl transition-colors">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-heading uppercase tracking-widest mb-4">
                Aula Coletiva de Solo
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                Pilates Solo e Alongamento
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                Desenvolva mobilidade, flexibilidade e respiração funcional em nossas turmas de solo com o instrutor Romero Mota.
              </p>
              <div className="p-3 rounded-xl bg-card border border-border/80 text-xs font-semibold text-primary mb-6">
                🗓️ {PILATES_STUDIO_INFO.horarioSolo}
              </div>
            </div>

            <div
              className="rounded-2xl overflow-hidden border border-border relative group cursor-pointer aspect-[3/4] max-h-[320px] mx-auto bg-card"
              onClick={() => setSelectedImg(PILATES_STUDIO_INFO.soloImage)}
            >
              <img
                src={PILATES_STUDIO_INFO.soloImage}
                alt="Pilates Solo e Alongamento WCF"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-heading text-white tracking-wider">Clique para ampliar pôster</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50">
              <a
                href={getWhatsAppUrl("Olá! Quero agendar uma aula experimental no Studio Pilates da WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary glow-red w-full text-center !py-3.5 !text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                Agendar Experimental Pilates
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pilares de Benefícios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PILATES_STUDIO_INFO.beneficios.map((b, i) => {
            const Icon = BENEFICIO_ICONS[i] || Sparkles;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-card/60 border border-border/70 hover:border-primary/40 transition-colors duration-300 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-foreground">{b.titulo}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* Carrossel de Fotos Reais do Estúdio */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="font-heading text-lg font-bold text-foreground">Fotos Reais do Nosso Estúdio</h4>
              <p className="text-xs text-muted-foreground">Estrutura equipada e alunos em aula com instrutores dedicados.</p>
            </div>
          </div>

          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-3">
              {FOTOS_PILATES.map((f, i) => (
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

        {/* Dialog Modal de imagem */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-2xl p-2 bg-card/95 backdrop-blur-xl border border-border">
            <DialogTitle className="sr-only">Visualização do Studio Pilates WCF</DialogTitle>
            <DialogDescription className="sr-only">Foto ampliada das instalações de Pilates Reformer e Solo</DialogDescription>
            {selectedImg && (
              <img
                src={selectedImg}
                alt="Visualização ampliada Pilates WCF"
                className="w-full h-auto rounded-xl max-h-[85vh] object-contain mx-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PilatesSection;
