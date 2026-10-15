import { useState } from "react";
import { Award, GraduationCap, Dumbbell, ShieldCheck, MessageCircle, ChevronRight, ZoomIn, IdCard, Users } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FUNDADOR_INFO } from "@/data/sobre";
import { getWhatsAppUrl } from "@/constants/site";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import tatameKidsImg from "@/assets/jiujitsu/tatame-mestre-wilson-kids.webp";
import { Link } from "react-router-dom";

export const FundadorSection = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string; desc: string } | null>(null);

  return (
    <section id="fundador" className="section-y relative overflow-hidden bg-background section-optimized border-t border-white/[0.06]">
      {/* Glow decorativo de fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 glow-ambient-red rounded-full pointer-events-none opacity-40" />

      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Liderança & Tradição • Desde 2001"
          title={
            <>
              A autoridade de quem construiu a WCF:{" "}
              <span className="text-gradient-red">Mestre Wilson Camara Filho</span>.
            </>
          }
          description="Mais de 25 anos dedicados à formação de atletas, instrutores e transformação diária da saúde de centenas de alunos em Campina Grande."
        />

        <div className="surface p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden border-white/[0.08] bg-gradient-to-br from-card via-card to-primary/[0.06]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Bloco Visual com Fotos Reais do Mestre */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Foto Principal de Estúdio */}
              <div
                className="relative group rounded-3xl overflow-hidden border border-white/15 max-w-sm shadow-2xl cursor-pointer bg-black/40"
                onClick={() =>
                  setSelectedImg({
                    src: FUNDADOR_INFO.foto,
                    title: "Mestre Wilson Camara Filho",
                    desc: "Fundador da WCF Academia e Mestre Geral de Jiu-Jitsu (Faixa Preta 6º Grau)",
                  })
                }
              >
                <img
                  src={FUNDADOR_INFO.foto}
                  alt="Mestre Wilson Camara Filho - Fundador WCF Academia"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                  loading="lazy"
                  width={640}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Badge de ampliação no hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <span className="chip bg-black/80 border-white/20 text-white shadow-xl">
                    <ZoomIn className="w-3.5 h-3.5 text-primary" /> Ampliar retrato
                  </span>
                </div>

                {/* Badge inferior com graduação */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div>
                    <span className="chip bg-red-600 border-red-500/40 text-white !text-[11px] font-bold uppercase tracking-wider shadow-lg">
                      {FUNDADOR_INFO.faixa}
                    </span>
                    <div className="text-xs text-white/90 font-mono mt-1 font-semibold">
                      {FUNDADOR_INFO.cref}
                    </div>
                  </div>
                  <span className="text-[11px] text-white/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {FUNDADOR_INFO.anosExperiencia} no esporte
                  </span>
                </div>
              </div>

              {/* Miniaturas de Prova Real: Carteirinha 001 e Foto no Tatame */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-4">
                {/* Carteirinha Oficial */}
                <div
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-background/80 p-2.5 flex items-center gap-2.5 cursor-pointer hover:border-primary/50 transition-all shadow-md"
                  onClick={() =>
                    setSelectedImg({
                      src: FUNDADOR_INFO.carteirinha,
                      title: "Carteirinha Oficial Nº 001",
                      desc: "Credenciamento oficial de Mestre Wilson Camara Filho - Faixa Preta 6º Grau (Desde 2001)",
                    })
                  }
                >
                  <div className="w-12 h-10 rounded-lg overflow-hidden bg-black/60 shrink-0 border border-white/10">
                    <img
                      src={FUNDADOR_INFO.carteirinha}
                      alt="Carteirinha 001 Mestre Wilson"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold font-heading text-foreground flex items-center gap-1 truncate">
                      <IdCard className="w-3 h-3 text-secondary shrink-0" />
                      Carteirinha 001
                    </div>
                    <div className="text-[10px] text-muted-foreground truncate">Registro Oficial</div>
                  </div>
                </div>

                {/* Foto no Tatame com Turma Kids */}
                <div
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-background/80 p-2.5 flex items-center gap-2.5 cursor-pointer hover:border-primary/50 transition-all shadow-md"
                  onClick={() =>
                    setSelectedImg({
                      src: tatameKidsImg,
                      title: "Mestre Wilson no Tatame WCF",
                      desc: "Supervisão direta e presença constante na formação das crianças e jovens",
                    })
                  }
                >
                  <div className="w-12 h-10 rounded-lg overflow-hidden bg-black/60 shrink-0 border border-white/10">
                    <img
                      src={tatameKidsImg}
                      alt="Mestre Wilson no Tatame com Turma"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold font-heading text-foreground flex items-center gap-1 truncate">
                      <Users className="w-3 h-3 text-primary shrink-0" />
                      No Tatame
                    </div>
                    <div className="text-[10px] text-muted-foreground truncate">Supervisão direta</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo, Credenciais e Proposta de Valor */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="section-label !mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Mestre Geral & Fundador
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 leading-tight">
                  Tradição de verdade com <span className="text-gradient-red">quem entende do assunto</span>.
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {FUNDADOR_INFO.bio}
                </p>
              </div>

              {/* Frase / Citação do Fundador */}
              <div className="p-4 sm:p-5 rounded-2xl bg-background/80 border-l-4 border-primary border border-white/[0.08] shadow-inner">
                <p className="text-foreground text-sm sm:text-base italic leading-relaxed font-medium">
                  "{FUNDADOR_INFO.frase}"
                </p>
                <div className="text-xs text-muted-foreground mt-2 font-heading uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-4 h-px bg-primary inline-block" />
                  Mestre Wilson Camara Filho
                </div>
              </div>

              {/* Grade de 4 Credenciais de Destaque */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-background/60 border border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground font-heading">Faixa Preta 6º Grau</div>
                    <div className="text-[11px] text-muted-foreground">CBJJE & CBJJP Oficial</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-background/60 border border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground font-heading">Faixa Preta 5º Grau</div>
                    <div className="text-[11px] text-muted-foreground">CBJJ / IBJJF / AJP Internacional</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-background/60 border border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground font-heading">CREF 007180-G/PB</div>
                    <div className="text-[11px] text-muted-foreground">Bacharel & Licenciatura Plena</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-background/60 border border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground font-heading">Core 360º & Pilates</div>
                    <div className="text-[11px] text-muted-foreground">Treinador Funcional Certificado</div>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a
                  href={getWhatsAppUrl("Olá Mestre Wilson! Gostaria de agendar uma aula experimental de Jiu-Jitsu / Treinamento na WCF Academia!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-4 !px-8 text-sm font-heading font-bold w-full sm:w-auto text-center justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com o Mestre Wilson</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <Link
                  to="/equipe#sobre"
                  className="btn-outline !py-3.5 !px-6 text-xs font-heading font-semibold w-full sm:w-auto text-center justify-center hover:bg-white/5 transition-colors"
                >
                  Conhecer história completa da WCF
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de visualização de foto ampliada */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-2xl p-4 bg-card/95 backdrop-blur-2xl border border-white/15">
            <DialogTitle className="text-base font-heading font-bold text-foreground">
              {selectedImg?.title}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {selectedImg?.desc}
            </DialogDescription>
            {selectedImg && (
              <div className="mt-2 rounded-2xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
                <img
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl mx-auto"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FundadorSection;
