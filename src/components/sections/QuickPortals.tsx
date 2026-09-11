import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Dumbbell, Clock } from "lucide-react";
import posterPilates from "@/assets/banners/banner-pilates-qualidade.webp";
import posterKids from "@/assets/jiujitsu/jiujitsu-kids.webp";
import posterMusc from "@/assets/musculacao/post-treino-pernas.webp";
import posterEquipe from "@/assets/professores/professor-radames-aniversario.webp";

const PORTALS = [
  {
    tag: "Studio Exclusivo",
    tagColor: "text-primary bg-primary/10 border-primary/20",
    icon: Sparkles,
    title: "WCF Studio Pilates",
    desc: "Reformer clássico, Cadillac, alinhamento postural e turmas de Pilates Solo & Alongamento.",
    image: posterPilates,
    href: "/pilates",
    buttonText: "Conhecer Studio Pilates",
  },
  {
    tag: "1ª Mensalidade FREE",
    tagColor: "text-primary bg-primary/10 border-primary/20",
    icon: Shield,
    title: "Jiu-Jitsu Kids & Lutas",
    desc: "Tatame seguro, foco e autodefesa para crianças até 10 anos, turmas feminina e adultos.",
    image: posterKids,
    href: "/jiu-jitsu",
    buttonText: "Explorar Tatame & Kids",
  },
  {
    tag: "Aulas & Musculação",
    tagColor: "text-primary bg-primary/10 border-primary/20",
    icon: Dumbbell,
    title: "Modalidades & Treinos",
    desc: "Spinning, Step, Localizada, Muay Thai e musculação biomecânica de alto rendimento.",
    image: posterMusc,
    href: "/modalidades",
    buttonText: "Ver Todas as Modalidades",
  },
  {
    tag: "05h às 00h",
    tagColor: "text-primary bg-primary/10 border-primary/20",
    icon: Clock,
    title: "5 Personais de Plantão",
    desc: "Escala contínua cobrindo todas as 19h diárias com acompanhamento presencial no salão.",
    image: posterEquipe,
    href: "/equipe",
    buttonText: "Conhecer a Equipe",
  },
];

export const QuickPortals = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-heading uppercase tracking-[0.2em] text-primary mb-3">
            Estrutura Completa
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Escolha o seu objetivo na <span className="text-gradient-red">WCF</span>.
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Navegue pelos espaços especializados da academia e descubra o treino ideal para o seu momento e da sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PORTALS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden glass border border-border/80 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
              >
                <div className="p-6 sm:p-8 relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider border ${p.tagColor}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  {/* Poster Thumbnail */}
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-border/60 bg-card">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>

                  <Link
                    to={p.href}
                    className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-card/80 border border-border hover:border-primary text-xs font-heading font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all"
                  >
                    <span>{p.buttonText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickPortals;
