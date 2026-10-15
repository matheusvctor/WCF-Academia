import { Check, MessageCircle, Sparkles, Trophy, Shield, Dumbbell, ShieldCheck, CreditCard, Users, type LucideIcon } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader } from "@/components/common/SectionHeader";

interface Plano {
  nome: string;
  subtitulo: string;
  icone: LucideIcon;
  /** Plano recomendado: recebe destaque visual máximo (apenas um). */
  recomendado?: boolean;
  /** Selo de campanha/oferta (ex.: 1ª mensalidade grátis). */
  oferta?: string;
  /** Selo informativo neutro. */
  selo?: string;
  precoPrefixo?: string;
  preco: string;
  precoSufixo?: string;
  periodo: string;
  beneficios: string[];
  ctaTexto: string;
  ctaMsg: string;
}

const PLANOS: Plano[] = [
  {
    nome: "Musculação Total",
    subtitulo: "Abre às 05h e fecha à 00h",
    icone: Dumbbell,
    recomendado: true,
    precoPrefixo: "Mensal ou recorrente",
    preco: "Consulte",
    periodo: "condições especiais na matrícula",
    beneficios: [
      "Livre acesso de segunda a domingo",
      "5 personais no salão cobrindo das 05h às 00h",
      "Sem taxa oculta de acompanhamento profissional",
      "Maquinário biomecânico Supreme, Vitally e Impact",
      "Espaço amplo, climatizado e com pesos livres",
    ],
    ctaTexto: "Quero me matricular",
    ctaMsg: "Olá! Gostaria de consultar os planos e valores da Musculação na WCF Academia!",
  },
  {
    nome: "Jiu-Jitsu Kids",
    subtitulo: "Crianças de até 10 anos",
    icone: Trophy,
    oferta: "1ª mensalidade FREE",
    precoPrefixo: "1ª mensalidade",
    preco: "Grátis",
    periodo: "vagas limitadas por turma",
    beneficios: [
      "1ª mensalidade 100% gratuita (até 10 anos)",
      "Desenvolvimento de disciplina, foco e respeito",
      "Tatame higienizado e ambiente 100% seguro",
      "Metodologia antibullying e coordenação motora",
      "Professores capacitados e acolhimento familiar",
    ],
    ctaTexto: "Garantir vaga grátis",
    ctaMsg: "Olá! Quero aproveitar a campanha de 1ª Mensalidade FREE para Jiu-Jitsu Kids na WCF Academia!",
  },
  {
    nome: "Jiu-Jitsu Adulto & Feminino",
    subtitulo: "Tradição sob Mestre Wilson Camara",
    icone: Shield,
    precoPrefixo: "A partir de",
    preco: "R$ 60",
    precoSufixo: "/mês",
    periodo: "turmas masculina, feminina e mista",
    beneficios: [
      "Turma exclusiva de Jiu-Jitsu Feminino",
      "Turma masculina e mista com horários flexíveis",
      "Supervisão direta de Mestre Faixa Preta 6º Grau",
      "Filiação oficial CBJJE, CBJJ, IBJJF e AJP",
      "Evolução técnica contínua e defesa pessoal",
    ],
    ctaTexto: "Quero treinar Jiu-Jitsu",
    ctaMsg: "Olá! Quero me matricular na turma de Jiu-Jitsu (R$ 60/mês) da WCF Academia!",
  },
  {
    nome: "WCF Studio Pilates",
    subtitulo: "Aparelhos clássicos & Solo",
    icone: Sparkles,
    selo: "Reformer & Solo",
    precoPrefixo: "Aulas",
    preco: "Personalizadas",
    periodo: "sessões individuais ou turmas de solo",
    beneficios: [
      "Estúdio com Reformer, Cadillac, Chair e Barrel",
      "Turmas de Pilates Solo & Alongamento (Romero Mota)",
      "Correção postural e fortalecimento profundo do core",
      "Alívio efetivo de dores na coluna e articulações",
      "Atendimento seguro para maturidade e terceira idade",
    ],
    ctaTexto: "Agendar experimental",
    ctaMsg: "Olá! Quero saber valores e agendar uma aula experimental no WCF Studio Pilates!",
  },
];

const GARANTIAS = [
  { icon: ShieldCheck, text: "Sem taxa oculta de matrícula", color: "text-emerald-400" },
  { icon: Users, text: "5 personais acompanhando no salão", color: "text-primary" },
  { icon: CreditCard, text: "PIX, débito e cartão de crédito", color: "text-gold" },
];

export const PlanosSection = () => {
  return (
    <section id="planos" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="absolute inset-x-0 top-0 divider-fade" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-ambient-red rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Planos & Matrículas"
          title={
            <>
              Transparência e o melhor <span className="text-gradient-red">custo-benefício</span> de Campina Grande.
            </>
          }
          description="Planos flexíveis, campanhas de incentivo ao esporte e acompanhamento de personais incluído."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-4 items-stretch pt-3">
          {PLANOS.map((p) => {
            const Icon = p.icone;
            return (
              <article
                key={p.nome}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  p.recomendado
                    ? "bg-gradient-to-b from-primary/[0.14] via-card to-card border border-primary/50 shadow-2xl shadow-primary/10 xl:-my-3 xl:py-10"
                    : "bg-card border border-white/[0.08] hover:border-white/20"
                }`}
              >
                {p.recomendado && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="chip bg-red-600 border-red-600 text-white shadow-lg shadow-primary/30 uppercase tracking-wider !text-[10px] !px-3">
                      ★ Mais escolhido
                    </span>
                  </div>
                )}

                {/* Cabeçalho */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${
                      p.recomendado ? "bg-red-600 border-red-600 text-white" : "bg-primary/10 border-primary/20 text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  {p.oferta && (
                    <span className="chip bg-gold/10 border-gold/30 text-gold">
                      <Sparkles className="w-3 h-3" aria-hidden="true" />
                      {p.oferta}
                    </span>
                  )}
                  {p.selo && <span className="chip bg-white/[0.04] border-white/10 text-muted-foreground">{p.selo}</span>}
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-foreground leading-tight">{p.nome}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.subtitulo}</p>

                {/* Preço */}
                <div className="mt-6 pb-6 border-b border-white/[0.08]">
                  {p.precoPrefixo && (
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{p.precoPrefixo}</div>
                  )}
                  <div className="mt-1 flex items-baseline gap-1">
                    <span
                      className={`font-heading font-bold tracking-tight text-foreground ${
                        p.preco.length > 9 ? "text-2xl" : "text-3xl sm:text-[2rem]"
                      }`}
                    >
                      {p.preco}
                    </span>
                    {p.precoSufixo && <span className="text-sm text-muted-foreground font-medium">{p.precoSufixo}</span>}
                  </div>
                  <div className="mt-1 text-[13px] text-muted-foreground">{p.periodo}</div>
                </div>

                {/* Benefícios */}
                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {p.beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${
                          p.recomendado ? "bg-red-600 text-white" : "bg-white/[0.06] text-foreground"
                        }`}
                        aria-hidden="true"
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/85 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={getWhatsAppUrl(p.ctaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full ${p.recomendado ? "btn-primary" : "btn-outline"} !py-3.5`}
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {p.ctaTexto}
                </a>
              </article>
            );
          })}
        </div>

        {/* Garantias */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.08]">
          {GARANTIAS.map((g) => {
            const GIcon = g.icon;
            return (
              <div key={g.text} className="flex items-center justify-center gap-2.5 px-5 py-4 bg-background text-sm text-muted-foreground">
                <GIcon className={`w-4 h-4 shrink-0 ${g.color}`} aria-hidden="true" />
                <span>{g.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
