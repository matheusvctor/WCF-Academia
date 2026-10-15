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
import { Clock, ShieldCheck, Dumbbell, MessageCircle, ChevronRight, UserCheck, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const ProfessoresSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="professores" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Equipe de Musculação & Personais"
          title={
            <>
              Acompanhamento de verdade: <span className="text-gradient-red">das 05h à 00h</span> no salão.
            </>
          }
          description="Nossos personais atuam em escala contínua todos os dias para garantir correção postural, intensidade ideal e suporte constante em cada exercício."
        />

        {/* Grade de Cobertura Diária - Escala dos Personais */}
        <div className="surface p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              <Clock className="w-4 h-4" />
              <span>Grade de Cobertura Diária dos Personais</span>
            </div>
            <span className="text-xs text-muted-foreground">
              5 turnos contínuos cobrindo 19 horas por dia
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1 lg:[&>*:last-child]:col-span-1">
            {PROFESSORES.map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-background/80 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="chip bg-primary/10 border-primary/25 text-red-400 !text-[10px] mb-2">
                    {p.turno}
                  </span>
                  <div className="font-heading font-bold text-foreground text-sm sm:text-base flex items-center gap-1.5 mt-1">
                    <UserCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>{p.nome}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-white/[0.06] tabular">
                  {p.horario}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel dos Personais */}
        <div className="mb-14">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {PROFESSORES.map((p, i) => (
                <CarouselItem key={i} className="pl-4 basis-[75%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <div
                    className="group relative rounded-3xl overflow-hidden border border-white/[0.08] bg-card shadow-lg cursor-pointer hover:border-white/25 transition-all duration-300"
                    onClick={() => setSelectedImg(p.src)}
                  >
                    <div className="aspect-[9/14] sm:aspect-[9/15] overflow-hidden relative bg-black/40">
                      <img
                        src={p.src}
                        alt={`Personal ${p.nome} - WCF Academia`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                          <ZoomIn className="w-4 h-4" />
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="chip bg-red-600/90 border-red-500/30 text-white !text-[10px] mb-1.5">
                          {p.turno}
                        </span>
                        <div className="font-heading text-lg font-bold">Personal {p.nome}</div>
                        <div className="text-xs text-white/80 mt-0.5 tabular">{p.horario}</div>
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

        {/* Card Destaque: Metodologia e Treino Individualizado */}
        <div className="surface border-primary/40 bg-gradient-to-br from-card via-card to-primary/[0.08] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div
                className="relative rounded-3xl overflow-hidden border border-white/10 max-w-xs shadow-2xl cursor-pointer group"
                onClick={() => setSelectedImg(PERSONAL_DESTAQUE.image)}
              >
                <img
                  src={PERSONAL_DESTAQUE.image}
                  alt="Personal Trainer Destaque WCF Academia"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="chip bg-black/70 border-white/20 text-white">
                    <ZoomIn className="w-3.5 h-3.5" /> Ampliar foto
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="section-label !mb-3">
                  <Dumbbell className="w-3.5 h-3.5 text-primary" />
                  Metodologia WCF de Acompanhamento
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 leading-tight">
                  Treino personalizado para o <span className="text-gradient-red">seu objetivo</span>.
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Na WCF você nunca treina desamparado. Nossos profissionais acompanham a sua evolução, corrigem amplitudes posturais e ajustam as cargas para você evoluir com segurança e constância.
                </p>
              </div>

              <div className="space-y-3">
                {PERSONAL_DESTAQUE.pilares.map((p, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 rounded-2xl bg-background/80 border border-white/[0.08]">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-bold text-foreground">{p.titulo}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre os treinos com personal trainer na WCF Academia!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-4 !px-8 text-sm font-heading font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com Personal no WhatsApp</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de visualização */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-xl p-2 bg-card/95 backdrop-blur-2xl border border-white/15">
            <DialogTitle className="sr-only">Visualização de Personal Trainer WCF</DialogTitle>
            <DialogDescription className="sr-only">Foto ampliada da equipe de personal trainers da WCF Academia</DialogDescription>
            {selectedImg && (
              <img
                src={selectedImg}
                alt="Personal Trainer WCF ampliado"
                className="w-full h-auto rounded-2xl max-h-[85vh] object-contain mx-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProfessoresSection;
