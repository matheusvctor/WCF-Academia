import { useState } from 'react';
import { MessageCircle, ShieldCheck, Brain, Sparkles, HeartHandshake, CheckCircle2, Calendar, Clock, Trophy, Award, GraduationCap, ZoomIn, IdCard, Users } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { JIU_JITSU_KIDS_HERO, JIU_JITSU_MODALIDADES, JIU_JITSU_TATAME_INFO } from '@/data/jiujitsu';
import { getWhatsAppUrl } from '@/constants/site';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import wilsonCamaraImg from '@/assets/wilson-camara.webp';
import wilsonCarteirinhaImg from '@/assets/wilson-carteirinha.webp';
import tatameKidsImg from '@/assets/jiujitsu/tatame-mestre-wilson-kids.webp';
import tatameEquipeImg from '@/assets/jiujitsu/tatame-mestre-wilson-equipe.webp';

const ICON_MAP = {
  Brain,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
};

export const JiuJitsuKidsSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="jiu-jitsu-kids" className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-background section-optimized">
      {/* High-Performance Radial Ambient Glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 glow-ambient-red rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 glow-ambient-red rounded-full pointer-events-none opacity-50" />


      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          label="Tatame WCF • Formação e Família"
          title={
            <>
              Jiu-Jitsu Kids: <span className="text-gradient-red">Disciplina e Autoconfiança</span> para a Vida Inteira.
            </>
          }
          description="Metodologia esportiva que une técnica marcial, respeito e diversão em um ambiente 100% seguro e acolhedor para crianças e jovens."
          className="mb-12"
        />

        {/* Hero Card Principal - Jiu-Jitsu Kids */}
        <div className="glass rounded-2xl sm:rounded-3xl border border-primary/20 p-4 sm:p-6 md:p-10 mb-12 md:mb-16 relative overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Imagem do Pôster Oficial Kids */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                className="relative group max-w-sm rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-card cursor-pointer"
                onClick={() => setSelectedImg(JIU_JITSU_KIDS_HERO.image)}
              >
                <img
                  src={JIU_JITSU_KIDS_HERO.image}
                  alt="Jiu-Jitsu Kids WCF - 1ª Mensalidade Free"
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 select-none"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-heading uppercase tracking-wider bg-red-600 text-white shadow-lg animate-pulse">
                    <Trophy className="w-3.5 h-3.5" /> 1ª Mensalidade FREE
                  </span>
                </div>
              </div>
            </div>

            {/* Conteúdo & Pilares */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-heading uppercase tracking-widest mb-3">
                  {JIU_JITSU_KIDS_HERO.badgeSub}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                  Mais que um esporte: uma escola de valores.
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  O Jiu-Jitsu infantil da WCF Academia canaliza a energia das crianças de forma produtiva.
                  Aqui elas aprendem que a verdadeira força está no autocontrole, na humildade e na capacidade de superar desafios com resiliência.
                </p>
              </div>

              {/* Grid de 4 Benefícios */}
              <div className="grid sm:grid-cols-2 gap-4">
                {JIU_JITSU_KIDS_HERO.beneficios.map((b, i) => {
                  const IconComponent = ICON_MAP[b.icone as keyof typeof ICON_MAP] || Sparkles;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-card/60 border border-border/70 hover:border-primary/40 transition-colors duration-300 flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2.5 text-primary">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-heading text-sm font-semibold text-foreground">{b.titulo}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-1">
                        {b.descricao}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Botão de Agendamento Kids */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={getWhatsAppUrl("Olá! Quero agendar uma aula experimental grátis de Jiu-Jitsu Kids para meu filho(a) na WCF Academia!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary glow-red w-full sm:w-auto text-center !py-3.5 !px-8"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  Agendar Aula Grátis no WhatsApp
                </a>
                <span className="text-xs text-muted-foreground text-center sm:text-left">
                  Tatame higienizado com kimono para início imediato
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modalidades do Tatame: Kids, Feminino e Individual */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
              Programas Oficiais de Artes Marciais WCF
            </h3>
            <p className="text-sm text-muted-foreground">
              Turmas segmentadas para que cada atleta treine com pessoas no mesmo estágio e objetivos alinhados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {JIU_JITSU_MODALIDADES.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card/70 hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden group shadow-lg"
              >
                <div
                  className="aspect-[4/5] overflow-hidden relative bg-black/40 cursor-pointer"
                  onClick={() => setSelectedImg(m.image)}
                >
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    {m.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold font-heading uppercase tracking-wider bg-primary text-white shadow-md">
                        {m.badge}
                      </span>
                    )}
                    {m.price && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold font-heading uppercase tracking-wider bg-black/80 text-white border border-primary/40 shadow-md backdrop-blur-md">
                        {m.price}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] uppercase tracking-widest text-primary font-bold block mb-0.5">
                      {m.subtitle}
                    </span>
                    <h4 className="font-heading text-lg font-bold text-white">{m.title}</h4>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>

                  <ul className="space-y-2 border-t border-border/50 pt-3">
                    {m.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getWhatsAppUrl(`Olá! Quero conhecer mais e me matricular na turma de ${m.title} da WCF Academia!`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !py-2.5 !text-xs !w-full text-center hover:bg-primary hover:text-white transition-colors"
                  >
                    Quero treinar {m.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco de Autoridade: Liderança e Supervisão do Mestre Wilson Camara Filho */}
        <div className="surface p-6 sm:p-10 rounded-3xl border-primary/30 bg-gradient-to-br from-card via-card to-primary/[0.08] mb-16 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Fotos do Mestre Wilson */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className="relative group rounded-2xl overflow-hidden border border-white/15 max-w-xs shadow-2xl cursor-pointer bg-black/50"
                onClick={() => setSelectedImg(wilsonCamaraImg)}
              >
                <img
                  src={wilsonCamaraImg}
                  alt="Mestre Wilson Camara Filho - Faixa Preta 6º Grau"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="chip bg-black/80 border-white/20 text-white shadow-xl">
                    <ZoomIn className="w-3.5 h-3.5 text-primary" /> Ampliar retrato
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="chip bg-red-600 border-red-500/40 text-white !text-[10px] font-bold uppercase tracking-wider">
                    Faixa Preta 6º Grau
                  </span>
                  <span className="text-[10px] text-white/90 font-mono font-semibold bg-black/60 px-2 py-0.5 rounded">
                    CREF 007180-G/PB
                  </span>
                </div>
              </div>

              {/* Provas Reais: Carteirinha 001 e Tatame com a Turma */}
              <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs mt-3">
                <div
                  className="rounded-xl border border-white/10 bg-background/80 p-2 flex items-center gap-2 cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => setSelectedImg(wilsonCarteirinhaImg)}
                >
                  <img src={wilsonCarteirinhaImg} alt="Carteirinha 001 Mestre Wilson" className="w-10 h-8 rounded object-cover" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-foreground truncate">Carteirinha 001</div>
                    <div className="text-[9px] text-muted-foreground">Registro Oficial</div>
                  </div>
                </div>
                <div
                  className="rounded-xl border border-white/10 bg-background/80 p-2 flex items-center gap-2 cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => setSelectedImg(tatameKidsImg)}
                >
                  <img src={tatameKidsImg} alt="Mestre Wilson no Tatame com Turma Kids" className="w-10 h-8 rounded object-cover" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-foreground truncate">Com as Crianças</div>
                    <div className="text-[9px] text-muted-foreground">No Tatame</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto de Autoridade */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="section-label !mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Mestre Geral e Fundador
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3 leading-tight">
                  Supervisão direta do <span className="text-gradient-red">Mestre Wilson Camara Filho</span>.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Aqui na WCF, seu filho e você treinam sob a supervisão direta de quem construiu a tradição da equipe desde 2001. Formado em Educação Física (CREF 007180-G/PB) e Faixa Preta 6º Grau, o Mestre Wilson garante disciplina rígida com acolhimento pedagógico e total segurança no tatame.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-background/60 border border-white/[0.06] flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground">Faixa Preta 6º Grau CBJJE / CBJJP</span>
                </div>
                <div className="p-3 rounded-xl bg-background/60 border border-white/[0.06] flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-xs font-medium text-foreground">Faixa Preta 5º Grau CBJJ / IBJJF / AJP</span>
                </div>
                <div className="p-3 rounded-xl bg-background/60 border border-white/[0.06] flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground">Educação Física • CREF 007180-G/PB</span>
                </div>
                <div className="p-3 rounded-xl bg-background/60 border border-white/[0.06] flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-medium text-foreground">Metodologia Antibullying e Família</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Olá Mestre Wilson! Gostaria de agendar uma aula experimental de Jiu-Jitsu na WCF Academia!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-3.5 !px-7 text-xs font-heading font-bold inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com o Mestre Wilson no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cronograma do Tatame & Imagem de Grade */}
        <div className="glass rounded-2xl border border-border p-6 md:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-primary">
                <Calendar className="w-4 h-4" /> Grade Semanal do Tatame
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                Horários de Treino de Jiu-Jitsu (Adulto e Kids)
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Aulas ministradas por instrutores graduados com aquecimento neuromuscular, fundamentos técnicos e rola supervisionado.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {JIU_JITSU_TATAME_INFO.horarios.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-card border border-border/70 flex flex-col gap-1">
                    <span className="text-[11px] font-heading font-semibold text-primary uppercase tracking-wider">
                      {item.dia}
                    </span>
                    <span className="text-xs font-medium text-foreground flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-muted-foreground" /> {item.horario}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div
                className="rounded-2xl overflow-hidden border border-border max-w-xs shadow-lg cursor-pointer group"
                onClick={() => setSelectedImg(JIU_JITSU_TATAME_INFO.image)}
              >
                <img
                  src={JIU_JITSU_TATAME_INFO.image}
                  alt="Horários de Jiu-Jitsu WCF"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal de visualização de imagem em tamanho grande */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-2xl p-2 bg-card/95 backdrop-blur-xl border border-border">
            <DialogTitle className="sr-only">Visualização do Tatame e Jiu-Jitsu WCF</DialogTitle>
            <DialogDescription className="sr-only">Foto ampliada das turmas de Jiu-Jitsu Kids, Feminino e Adulto</DialogDescription>
            {selectedImg && (
              <img
                src={selectedImg}
                alt="Visualização ampliada do Pôster WCF"
                className="w-full h-auto rounded-xl max-h-[85vh] object-contain mx-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default JiuJitsuKidsSection;
