import { Check, MessageCircle, Sparkles, Trophy, Shield, Dumbbell, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader } from "@/components/common/SectionHeader";

const PLANOS = [
  {
    nome: "Musculação Total",
    subtitulo: "Abre às 05h e fecha à 00h",
    destaque: "Mais Procurado",
    isPopular: true,
    destaqueCor: "bg-primary text-white shadow-md shadow-primary/30",
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
    isPopular: true,
    destaqueCor: "bg-gradient-to-r from-red-600 to-amber-500 text-white animate-pulse shadow-md shadow-primary/30",
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
    ctaTexto: "Garantir Vaga Grátis",
    ctaMsg: "Olá! Quero aproveitar a campanha de 1ª Mensalidade FREE para Jiu-Jitsu Kids na WCF Academia!",
  },
  {
    nome: "Jiu-Jitsu Adulto & Feminino",
    subtitulo: "Tradição sob Mestre Wilson Camara",
    destaque: "R$ 60,00 / mês",
    isPopular: false,
    destaqueCor: "bg-primary/20 text-primary border border-primary/40",
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
    ctaTexto: "Quero Treinar Luta",
    ctaMsg: "Olá! Quero me matricular na turma de Jiu-Jitsu (R$ 60/mês) da WCF Academia!",
  },
  {
    nome: "WCF Studio Pilates",
    subtitulo: "Aparelhos Clássicos & Solo",
    destaque: "Reformer & Solo",
    isPopular: false,
    destaqueCor: "bg-amber-500/20 text-amber-300 border border-amber-500/40",
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
    ctaTexto: "Agendar Experimental",
    ctaMsg: "Olá! Quero saber valores e agendar uma aula experimental no WCF Studio Pilates!",
  },
];

export const PlanosSection = () => {
  return (
    <section id="planos" className="py-16 md:py-24 border-t border-white/10 relative overflow-hidden bg-background section-optimized">
      {/* High-Performance Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] glow-ambient-red rounded-full pointer-events-none" />


      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <SectionHeader
          label="Planos & Matrículas"
          title={
            <>
              Transparência e o Melhor <span className="text-gradient-red">Custo-Benefício</span> de Campina Grande.
            </>
          }
          description="Planos flexíveis, campanhas especiais de incentivo ao esporte e acompanhamento de personais incluído."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANOS.map((p, idx) => {
            const Icon = p.icone;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 relative ${
                  p.isPopular
                    ? "glass-card border-primary/50 shadow-primary/10 ring-1 ring-primary/30"
                    : "glass border-white/10 hover:border-primary/40"
                }`}
              >
                {p.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-heading font-black uppercase tracking-widest bg-primary text-white shadow-md">
                      Destaque WCF
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider ${p.destaqueCor}`}>
                      {p.destaque}
                    </span>
                  </div>

                  <div className="min-h-[58px] mb-4">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {p.nome}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {p.subtitulo}
                    </p>
                  </div>

                  <div className="min-h-[64px] mb-6 pb-4 border-b border-white/10 flex flex-col justify-center">
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

                <div className="mt-auto pt-6 border-t border-white/10">
                  <a
                    href={getWhatsAppUrl(p.ctaMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`!w-full h-12 !py-0 !text-xs sm:!text-sm font-heading font-bold uppercase tracking-wider text-center justify-center flex items-center gap-2 shadow-md whitespace-nowrap rounded-xl transition-all ${
                      p.isPopular ? "btn-primary glow-red" : "btn-outline hover:border-primary/60 hover:text-white"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>{p.ctaTexto}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Garantias & Acolhimento */}
        <div className="mt-12 p-6 rounded-2xl glass border border-white/10 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sem taxa oculta de matrícula</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Check className="w-4 h-4 text-primary" />
            <span>5 personais acompanhando no salão</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Pagamento via PIX, Débito e Cartão de Crédito</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;

