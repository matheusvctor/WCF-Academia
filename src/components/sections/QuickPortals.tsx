import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Dumbbell, Clock } from "lucide-react";
import posterPilates from "@/assets/pilates/studio-pilates-aula-real.webp";
import posterKids from "@/assets/jiujitsu/jiujitsu-kids.webp";
import posterMusc from "@/assets/musculacao/post-treino-pernas.webp";
import posterEquipe from "@/assets/professores/personal-renally-destaque.webp";
import { SectionHeader } from "@/components/common/SectionHeader";

const PORTALS = [
  {
    tag: "Studio exclusivo",
    tagColor: "text-gold bg-gold/10 border-gold/25",
    icon: Sparkles,
    title: "WCF Studio Pilates",
    desc: "Reformer clássico, Cadillac, alinhamento postural e turmas de Pilates Solo & Alongamento.",
    image: posterPilates,
    href: "/pilates",
    buttonText: "Conhecer o Studio",
  },
  {
    tag: "1ª mensalidade FREE",
    tagColor: "text-red-400 bg-primary/10 border-primary/25",
    icon: Shield,
    title: "Jiu-Jitsu Kids & Lutas",
    desc: "Tatame seguro, foco e autodefesa para crianças até 10 anos, turmas feminina e adulto.",
    image: posterKids,
    href: "/jiu-jitsu",
    buttonText: "Explorar o tatame",
  },
  {
    tag: "Aulas & Musculação",
    tagColor: "text-foreground bg-white/[0.06] border-white/15",
    icon: Dumbbell,
    title: "Modalidades & Treinos",
    desc: "Spinning, Step, Localizada, Muay Thai e musculação biomecânica de alto rendimento.",
    image: posterMusc,
    href: "/modalidades",
    buttonText: "Ver modalidades",
  },
  {
    tag: "05h às 00h",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    icon: Clock,
    title: "5 personais de plantão",
    desc: "Escala contínua cobrindo todas as 19h diárias com acompanhamento presencial no salão.",
    image: posterEquipe,
    href: "/equipe",
    buttonText: "Conhecer a equipe",
  },
];

export const QuickPortals = () => {
  return (
    <section className="section-y bg-background relative overflow-hidden section-optimized">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Estrutura completa"
          title={
            <>
              Escolha o seu objetivo na <span className="text-gradient-red">WCF</span>.
            </>
          }
          description="Espaços especializados para cada momento — seu e da sua família."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PORTALS.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.href}
                to={p.href}
                className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-white/[0.08] bg-card transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
              >
                <div className="relative sm:w-[42%] aspect-[16/10] sm:aspect-auto shrink-0 overflow-hidden bg-black/40">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-transparent to-card/80" aria-hidden="true" />
                </div>

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <span className={`chip self-start ${p.tagColor}`}>
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-foreground leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-heading font-semibold text-foreground group-hover:text-red-400 transition-colors">
                    {p.buttonText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickPortals;
