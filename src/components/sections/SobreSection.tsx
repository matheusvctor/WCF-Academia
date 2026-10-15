import { useState } from "react";
import { Quote, MessageCircle, ChevronRight, ZoomIn, IdCard, Users } from "lucide-react";
import { FUNDADOR_INFO, CREDENCIAIS, PILARES, VALORES } from "@/data/sobre";
import { SectionHeader } from "@/components/common/SectionHeader";
import { getWhatsAppUrl } from "@/constants/site";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import tatameKidsImg from "@/assets/jiujitsu/tatame-mestre-wilson-kids.webp";

export const SobreSection = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string; desc: string } | null>(null);

  return (
    <section id="sobre" className="py-14 md:py-24">
      <div className="container mx-auto">
        {/* História */}
        <div className="max-w-3xl mb-12 md:mb-20">
          <SectionHeader
            align="left"
            label="Nossa história"
            title={<>Construída com trabalho,<br />disciplina e <span className="text-gradient-gold">propósito.</span></>}
            className="mb-6"
          />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              A história da WCF começou de forma simples, mas com uma visão muito
              clara: <span className="text-foreground">transformar vidas através do esporte.</span>
            </p>
            <p>
              Antes de se tornar uma das referências em treinamento físico e
              artes marciais de Campina Grande, a WCF nasceu no bairro do{" "}
              <span className="text-foreground">Catolé</span>, através do trabalho
              de Wilson Camara Filho. O projeto iniciou com duas paixões que
              sempre fizeram parte de sua trajetória: o{" "}
              <span className="text-foreground">treinamento funcional</span> e o{" "}
              <span className="text-foreground">Jiu-Jitsu</span>.
            </p>
            <p>
              Movido pelo desejo de promover saúde, disciplina e qualidade de
              vida, Wilson começou a reunir alunos que buscavam mais do que
              apenas atividade física. Com o passar dos anos, o que começou como
              um projeto focado em funcional e Jiu-Jitsu foi crescendo,
              conquistando resultados, formando atletas, construindo amizades e
              transformando histórias.
            </p>
          </div>
        </div>

        {/* Fundador */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-14 md:mb-24">
          <div className="flex flex-col items-center">
            <div
              className="relative w-full rounded-3xl overflow-hidden border border-border group cursor-pointer bg-black/40 shadow-2xl"
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
                alt={`${FUNDADOR_INFO.nome} - Fundador WCF`}
                loading="lazy"
                width={640}
                height={800}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Botão de ampliação no hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                <span className="chip bg-black/80 border-white/20 text-white shadow-xl">
                  <ZoomIn className="w-3.5 h-3.5 text-primary" /> Ampliar retrato
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="chip bg-red-600 border-red-500/40 text-white !text-[11px] font-bold uppercase tracking-wider shadow-lg">
                    {FUNDADOR_INFO.faixa}
                  </span>
                  <div className="text-xs text-white/90 font-mono mt-1 font-semibold">
                    {FUNDADOR_INFO.cref}
                  </div>
                </div>
                <div className="glass rounded-xl px-3 py-1.5 text-right">
                  <div className="font-heading text-lg font-bold text-foreground">
                    {FUNDADOR_INFO.anosExperiencia}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted-foreground">
                    Anos de dedicação
                  </div>
                </div>
              </div>
            </div>

            {/* Miniaturas Prova Real: Carteirinha 001 e No Tatame */}
            <div className="grid grid-cols-2 gap-3 w-full mt-4">
              <div
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card p-2.5 flex items-center gap-2.5 cursor-pointer hover:border-primary/50 transition-all shadow-md"
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

              <div
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card p-2.5 flex items-center gap-2.5 cursor-pointer hover:border-primary/50 transition-all shadow-md"
                onClick={() =>
                  setSelectedImg({
                    src: tatameKidsImg,
                    title: "Mestre Wilson no Tatame WCF",
                    desc: "Supervisão direta e presença constante na formação de alunos e crianças",
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

          <div>
            <div className="section-label">
              <span className="w-8 h-px bg-primary" />
              O Fundador & Mestre Geral
            </div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Wilson Camara <span className="text-gradient-red">Filho</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {FUNDADOR_INFO.bio}
            </p>

            <div className="glass rounded-2xl p-5 mb-6 border-l-2 border-primary">
              <Quote className="w-5 h-5 text-primary mb-2" />
              <p className="text-foreground italic text-sm leading-relaxed">
                "{FUNDADOR_INFO.frase}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {CREDENCIAIS.map((c) => (
                <div
                  key={c.text}
                  className="flex items-center gap-2.5 text-xs text-muted-foreground glass rounded-xl px-4 py-3"
                >
                  <c.icon className="w-4 h-4 text-secondary shrink-0" />
                  {c.text}
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppUrl("Olá Mestre Wilson! Gostaria de conversar sobre as aulas e treinamentos na WCF Academia!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-3.5 !px-7 text-xs font-heading font-bold inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar diretamente com o Mestre Wilson</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Modal de visualização de fotos ampliadas */}
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

        {/* Pilares WCF */}
        <div className="mb-14 md:mb-24">
          <SectionHeader
            label="O ecossistema WCF"
            title={<>Mais que uma academia.<br /><span className="text-gradient-gold">Uma comunidade.</span></>}
          />

          <div className="grid md:grid-cols-3 gap-5">
            {PILARES.map((p) => (
              <div
                key={p.titulo}
                className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors"
              >
                <div className="font-heading text-xl font-bold text-foreground mb-3">
                  {p.titulo}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Missão / Visão / Valores */}
        <div className="grid md:grid-cols-3 gap-5">
          <div className="glass rounded-2xl p-6">
            <div className="text-[10px] uppercase tracking-widest text-primary mb-3">
              Missão
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformar vidas através do esporte, da atividade física e da
              educação — promovendo saúde, disciplina, bem-estar e
              desenvolvimento humano.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-[10px] uppercase tracking-widest text-primary mb-3">
              Visão
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ser referência em artes marciais, treinamento físico e qualidade
              de vida, formando pessoas mais fortes, saudáveis e preparadas
              para vencer seus desafios.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-[10px] uppercase tracking-widest text-primary mb-3">
              Valores
            </div>
            <div className="flex flex-wrap gap-2">
              {VALORES.map((v) => (
                <span
                  key={v}
                  className="text-xs text-foreground border border-border rounded-full px-3 py-1"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-16 max-w-2xl mx-auto leading-relaxed">
          Desde os primeiros treinos no Catolé até a estrutura de hoje, uma
          coisa nunca mudou:{" "}
          <span className="text-foreground">
            o compromisso de transformar vidas através do esporte.
          </span>
        </p>
      </div>
    </section>
  );
};

export default SobreSection;
