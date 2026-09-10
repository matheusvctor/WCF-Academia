import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROFESSORES, PERSONAL_DESTAQUE } from "@/data/equipe";
import { SectionHeader } from "@/components/common/SectionHeader";
import { getWhatsAppUrl } from "@/constants/site";
import { Clock, ShieldCheck, Dumbbell, MessageCircle, ChevronRight, UserCheck } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const ProfessoresSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="professores" className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          label="Equipe de Musculação & Personais"
          title={
            <>
              Acompanhamento de Verdade: <span className="text-gradient-red">Das 05h à 00h</span> no Salão.
            </>
          }
          description="Nossos personais trainers atuam em escala contínua todos os dias para garantir correção postural, intensidade certa e suporte constante em cada exercício."
          className="mb-10"
        />

        {/* Escala Contínua - Timeline Bar */}
        <div className="glass rounded-2xl border border-border p-4 sm:p-6 mb-12 shadow-lg">
          <div className="text-xs font-heading uppercase tracking-widest text-primary font-bold mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Grade de Cobertura Diária dos Personais
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {PROFESSORES.map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-card border border-border/80 hover:border-primary/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-heading font-semibold text-primary uppercase tracking-wider mb-1">
                    {p.turno}
                  </div>
                  <div className="font-heading font-bold text-foreground text-sm flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-primary" /> {p.nome}
                  </div>
                </div>
                <div className="text-[11px] text-muted-foreground mt-2 border-t border-border/50 pt-1.5">
                  {p.horario}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel dos Personais com fotos oficiais */}
        <div className="mb-16">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {PROFESSORES.map((p, i) => (
                <CarouselItem key={i} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <div
                    className="rounded-2xl overflow-hidden border border-border bg-card group shadow-lg cursor-pointer hover:border-primary/60 transition-all duration-300"
                    onClick={() => setSelectedImg(p.src)}
                  >
                    <div className="aspect-[9/16] overflow-hidden relative bg-black/40">
                      <img
                        src={p.src}
                        alt={`Personal ${p.nome} - WCF Academia`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary block mb-0.5">
                          {p.turno}
                        </span>
                        <div className="font-heading text-lg font-bold">Personal {p.nome}</div>
                        <div className="text-[11px] text-white/80 mt-0.5">{p.horario}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>

        {/* Card Destaque: Personal Trainer Individualizado & Metodologia */}
        <div className="glass rounded-3xl border border-primary/30 p-6 md:p-10 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div
                className="rounded-2xl overflow-hidden border border-border max-w-xs shadow-xl cursor-pointer group"
                onClick={() => setSelectedImg(PERSONAL_DESTAQUE.image)}
              >
                <img
                  src={PERSONAL_DESTAQUE.image}
                  alt="Personal Trainer Destaque WCF Academia"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-3">
                  <Dumbbell className="w-3.5 h-3.5" /> Metodologia WCF de Acompanhamento
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                  Treino Personalizado para o <span className="text-gradient-red">Seu Objetivo</span>.
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Na WCF você nunca fica sozinho no salão. Nossos profissionais acompanham a sua evolução, corrigem a amplitude e ajustam as cargas para que você atinja sua meta com saúde e sem lesões.
                </p>
              </div>

              <div className="space-y-3">
                {PERSONAL_DESTAQUE.pilares.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border/70">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-foreground">{p.titulo}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre os treinos com personal trainer na WCF Academia!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary glow-red inline-flex items-center gap-2 !py-3.5 !px-8 text-xs sm:text-sm font-heading"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar com Personal no WhatsApp
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de visualização */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-xl p-2 bg-card/95 backdrop-blur-xl border border-border">
            {selectedImg && (
              <img
                src={selectedImg}
                alt="Personal Trainer WCF ampliado"
                className="w-full h-auto rounded-xl max-h-[85vh] object-contain mx-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProfessoresSection;
