import { Quote } from "lucide-react";
import { FUNDADOR_INFO, CREDENCIAIS, PILARES, VALORES } from "@/data/sobre";
import { SectionHeader } from "@/components/common/SectionHeader";

export const SobreSection = () => {
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
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-border">
              <img
                src={FUNDADOR_INFO.foto}
                alt={`${FUNDADOR_INFO.nome} - Fundador WCF`}
                loading="lazy"
                width={640}
                height={800}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute bottom-3 right-3 glass rounded-2xl px-4 py-2.5">
              <div className="font-heading text-xl md:text-2xl font-bold text-foreground">
                {FUNDADOR_INFO.anosExperiencia}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Anos transformando vidas
              </div>
            </div>
          </div>

          <div>
            <div className="section-label">
              <span className="w-8 h-px bg-primary" />
              O Fundador
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

            <div className="grid grid-cols-2 gap-3">
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
          </div>
        </div>

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
