import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import {
  MessageCircle,
  Dumbbell,
  Shield,
  Award,
  Clock,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Trophy,
  Flame,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import { BANNERS } from "@/data/banners";
import { SITE_INFO, getWhatsAppUrl } from "@/constants/site";


const QUICK_STATS = [
  {
    icon: Clock,
    value: "05h às 00h",
    label: "Segunda a Sexta",
    sublabel: "Abre cedo e fecha tarde",
  },
  {
    icon: Dumbbell,
    value: "5 Personais",
    label: "No Salão de Treino",
    sublabel: "Acompanhamento de verdade",
  },
  {
    icon: Shield,
    value: "Tatame & Studio",
    label: "Jiu-Jitsu & Pilates",
    sublabel: "Reformer e Mestre 6º Dan",
  },
  {
    icon: Award,
    value: "+10 Anos",
    label: "Desde 2015",
    sublabel: "Referência no Jardim Paulistano",
  },
];

const PILL_ICONS: Record<string, LucideIcon> = {
  "Musculação": Dumbbell,
  "Jiu-Jitsu Kids": Trophy,
  "Studio Pilates": Sparkles,
  "Saúde & Longevidade": HeartPulse,
  "Superação": Flame,
};

export const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true, playOnInit: true })
  );

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePillClick = (idx: number) => {
    api?.scrollTo(idx);
  };

  return (
    <section className="relative flex flex-col justify-center bg-background overflow-hidden min-h-[calc(100vh-76px)] pt-24 pb-14 lg:py-24">
      {/* High-Performance Hardware-Accelerated Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[500px] glow-ambient-red rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] glow-ambient-red rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Coluna Esquerda: Texto, CTAs, Pílulas e Métricas */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Badge Institucional & Status */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card/80 border border-white/10 backdrop-blur-md text-xs font-heading font-semibold uppercase tracking-wider text-foreground shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400">Aberto Hoje</span>
                <span className="text-white/20">•</span>
                <span className="text-muted-foreground">05h às 00h</span>
                <span className="text-white/20">•</span>
                <span className="text-primary font-bold">Desde {SITE_INFO.since}</span>
              </div>
            </div>

            {/* Headline Principal */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.08]">
              Sua melhor <span className="text-gradient-red">versão</span> começa aqui.
            </h1>

            {/* Subheadline Informativa */}
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Musculação de alta performance das <strong>05h às 00h</strong> com 5 personais de plantão no salão,
              Studio Pilates com aparelhos clássicos Reformer e tatame oficial de Jiu-Jitsu com Mestre Wilson Camara Filho.
            </p>

            {/* Pílulas Interativas de Navegação dos Banners */}
            <div className="pt-1">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground/80 font-bold mb-2.5">
                Explore as modalidades da WCF:
              </p>
              <div className="flex flex-wrap gap-2">
                {BANNERS.map((b, idx) => {
                  const IconComponent = PILL_ICONS[b.tag || ""] || Dumbbell;
                  const isActive = current === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handlePillClick(idx)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-heading font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/30 border border-primary scale-105"
                          : "bg-card/70 border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card"
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{b.tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTAs de Conversão */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <a
                href={getWhatsAppUrl("Olá! Quero agendar uma aula experimental grátis na WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary glow-red !py-4 !px-8 text-xs sm:text-sm font-heading font-bold text-center justify-center flex items-center gap-2 shadow-xl shadow-primary/20"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                Agendar Aula Grátis no WhatsApp
              </a>
              <Link
                to="/modalidades"
                className="btn-outline !py-4 !px-8 text-xs sm:text-sm font-heading flex items-center justify-center gap-1.5 hover:border-primary/50"
              >
                Conhecer Modalidades
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Faixa de Métricas Rápidas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10">
              {QUICK_STATS.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl glass border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-1.5 text-primary mb-1">
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="font-heading font-bold text-xs sm:text-sm text-foreground">
                        {s.value}
                      </span>
                    </div>
                    <div className="text-[10px] text-muted-foreground leading-tight font-medium">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna Direita: O Carrossel de Pôsteres Vertical Sem Vazio */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Ambient Glow Exclusivo do Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-primary/10 to-transparent rounded-3xl opacity-70 scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-card/80 md:backdrop-blur-md group">

              <Carousel
                setApi={setApi}
                opts={{ loop: true, align: "start" }}
                plugins={[autoplay.current]}
                className="w-full h-full"
              >
                <CarouselContent className="ml-0 h-full">
                  {BANNERS.map((b, i) => (
                    <CarouselItem key={i} className="pl-0 basis-full h-full relative">
                      <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-card/90 via-black to-background">
                        {/* Pôster Principal 100% Nítido e Enquadrado */}
                        <img
                          src={b.src}
                          alt={b.alt}
                          className="relative z-10 w-full h-full object-contain p-2 sm:p-3 select-none drop-shadow-2xl"
                          draggable={false}
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding={i === 0 ? "sync" : "async"}
                          {...(i === 0 ? { fetchPriority: "high" as const } : {})}
                        />


                        {/* Selo Flutuante do Banner no Topo */}
                        {b.badge && (
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider bg-primary/90 text-white backdrop-blur-md shadow-lg border border-white/20 flex items-center gap-1.5">
                              <Sparkles className="w-3 h-3 text-amber-300" />
                              {b.badge}
                            </span>
                          </div>
                        )}

                        {/* Contador do Slide no Topo Direito */}
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-heading font-semibold bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
                            {String(i + 1).padStart(2, "0")} / {String(count || BANNERS.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Controles de Navegação no Rodapé do Card */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between pointer-events-auto">
                <button
                  onClick={() => api?.scrollPrev()}
                  aria-label="Banner anterior"
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors shadow-md"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Indicadores de Slide */}
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {Array.from({ length: count || BANNERS.length }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => api?.scrollTo(idx)}
                      aria-label={`Ir para banner ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        current === idx ? "w-5 bg-primary" : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => api?.scrollNext()}
                  aria-label="Próximo banner"
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors shadow-md"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
