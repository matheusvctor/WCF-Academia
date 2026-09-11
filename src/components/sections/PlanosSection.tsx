import { Check, MessageCircle, Sparkles, Trophy, Shield, Dumbbell } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader } from "@/components/common/SectionHeader";

const PLANOS = [
  {
    nome: "Musculação Total",
    subtitulo: "Abre às 05h e fecha à 00h",
    destaque: "Mais Procurado",
    destaqueCor: "bg-primary text-white",
    preco: "Consulte Condições",
    periodo: "mensalidade ou plano recorrente",
    icone: Dumbbell,
    beneficios: [
      "Livre acesso de segunda a domingo",
      "5 personais no salão cobrindo das 05h às 00h",
      "Sem taxa oculta de acompanhamento profissional",
      "Maquinário biomecânico Supreme, Vitally e Impact",
      "Espaço amplo, climatizado e com pesos livres",
    ],
    ctaTexto: "Matricule-se Agora",
    ctaMsg: "Olá! Gostaria de consultar os planos e valores da Musculação na WCF Academia!",
  },
  {
    nome: "Jiu-Jitsu Kids",
    subtitulo: "Crianças de até 10 anos",
    destaque: "1ª Mensalidade FREE",
    destaqueCor: "bg-primary text-white animate-pulse shadow-md shadow-primary/20",
    preco: "1ª Mensalidade Grátis",
    periodo: "vagas limitadas por turma",
    icone: Trophy,
    beneficios: [
      "1ª Mensalidade 100% Gratuita (até 10 anos)",
      "Desenvolvimento de disciplina, foco e respeito",
      "Tatame higienizado e ambiente 100% seguro",
      "Metodologia antibullying e coordenação motora",
      "Professores capacitados e acolhimento familiar",
    ],
    ctaTexto: "Matricule-se Agora",
    ctaMsg: "Olá! Quero aproveitar a campanha de 1ª Mensalidade FREE para Jiu-Jitsu Kids na WCF Academia!",
  },
  {
    nome: "Jiu-Jitsu Adulto & Feminino",
    subtitulo: "Tradição sob Mestre Wilson Camara",
    destaque: "R$ 60,00 / mês",
    destaqueCor: "bg-primary text-white shadow-md shadow-primary/20",
    preco: "A partir de R$ 60",
    periodo: "por mês",
    icone: Shield,
    beneficios: [
      "Turma exclusiva de Jiu-Jitsu Feminino",
      "Turma masculina e mista com horários flexíveis",
      "Supervisão direta de Mestre Faixa Preta 6º Grau",
      "Filiação oficial CBJJE, CBJJ, IBJJF e AJP",
      "Evolução técnica contínua e defesa pessoal",
    ],
    ctaTexto: "Matricule-se Agora",
    ctaMsg: "Olá! Quero me matricular na turma de Jiu-Jitsu (R$ 60/mês) da WCF Academia!",
  },
  {
    nome: "WCF Studio Pilates",
    subtitulo: "Aparelhos Clássicos & Solo",
    destaque: "Reformer & Solo",
    destaqueCor: "bg-primary/15 text-primary border border-primary/30",
    preco: "Aulas Personalizadas",
    periodo: "sessões individuais ou turmas de solo",
    icone: Sparkles,
    beneficios: [
      "Estúdio com Reformer, Cadillac, Chair e Barrel",
      "Turmas de Pilates Solo & Alongamento (Romero Mota)",
      "Correção postural e fortalecimento profundo do Core",
      "Alívio efetivo de dores na coluna e articulações",
      "Atendimento seguro para maturidade e terceira idade",
    ],
    ctaTexto: "Matricule-se Agora",
    ctaMsg: "Olá! Quero saber valores e agendar uma aula experimental no WCF Studio Pilates!",
  },
];

export const PlanosSection = () => {
  return (
    <section id="planos" className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <SectionHeader
          label="Planos & Matrículas"
          title={
            <>
              Transparência e o Melhor <span className="text-gradient-red">Custo-Benefício</span>.
            </>
          }
          description="Planos acessíveis, campanhas especiais de incentivo ao esporte e acompanhamento de personais incluído."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANOS.map((p, idx) => {
            const Icon = p.icone;
            return (
              <div
                key={idx}
                className="glass rounded-3xl p-6 border border-border/80 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider ${p.destaqueCor}`}>
                      {p.destaque}
                    </span>
                  </div>

                  <div className="min-h-[58px] mb-4">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-1">
                      {p.nome}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {p.subtitulo}
                    </p>
                  </div>

                  <div className="min-h-[64px] mb-6 pb-4 border-b border-border/50 flex flex-col justify-center">
                    <div className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                      {p.preco}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      {p.periodo}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-muted-foreground">
                    {p.beneficios.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-border/40">
                  <a
                    href={getWhatsAppUrl(p.ctaMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !w-full h-12 !py-0 !text-xs sm:!text-sm font-heading font-bold uppercase tracking-wider text-center justify-center flex items-center gap-2 shadow-md group-hover:glow-red whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>{p.ctaTexto}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
