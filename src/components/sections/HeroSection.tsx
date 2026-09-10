import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { MessageCircle, Dumbbell, Shield, Award, Clock, ArrowDown, ChevronRight } from "lucide-react";
import { BANNERS } from "@/data/banners";
import { SITE_INFO, getWhatsAppUrl } from "@/constants/site";
import { useParallax } from "@/hooks/useParallax";

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
    label: "Acompanhamento Contínuo",
    sublabel: "Sem taxa extra de suporte",
  },
  {
    icon: Shield,
    value: "Tatame & Studio",
    label: "Kids, Adulto & Pilates",
    sublabel: "Reformer e Tatame Oficial",
  },
  {
    icon: Award,
    value: "+10 Anos",
    label: "Desde 2015",
    sublabel: "Referência no Jardim Paulistano",
  },
];

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

  const parallaxOffset = useParallax({ speed: 0.18 });

  return (
    <section className="relative flex flex-col bg-background overflow-hidden">
      {/* Dynamic Background Glows with Parallax */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none will-change-transform"
        style={{ transform: `translate3d(-50%, ${parallaxOffset * 0.3}px, 0)` }}
      />

      {/* Banner Principal com Carousel de Alta Definição */}
      <div className="relative w-full pt-20 md:pt-24">
        <div
          className="max-w-6xl mx-auto px-2 sm:px-4 will-change-transform"
          style={{ transform: `translate3d(0, ${parallaxOffset * 0.12}px, 0)` }}
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "start" }}
              plugins={[autoplay.current]}
              className="w-full overflow-hidden"
            >
              <CarouselContent className="ml-0">
                {BANNERS.map((b, i) => (
                  <CarouselItem key={i} className="pl-0 basis-full min-w-0">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[560px] overflow-hidden bg-black/60">
                      <img
                        src={b.src}
                        alt={b.alt}
                        className="w-full h-full object-cover object-center select-none"
                        draggable={false}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding={i === 0 ? "sync" : "async"}
                        {...(i === 0 ? { fetchPriority: "high" as const } : {})}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Carousel Navigation Dots */}
            {count > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {Array.from({ length: count }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    aria-label={`Ir para banner ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === idx ? "w-6 bg-primary" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Conteúdo de Conversão e Chamada de Ação */}
      <div className="container mx-auto px-4 pt-10 pb-8 flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md text-xs font-heading uppercase tracking-[0.2em] text-primary mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Desde {SITE_INFO.since} • Campina Grande – PB
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mb-6 leading-[1.15]">
          Sua melhor <span className="text-gradient-red">versão</span> começa aqui.
        </h1>

        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
          Musculação completa, WCF Studio Pilates, Jiu-Jitsu Kids e Adulto, Muay Thai e Coletivas com acompanhamento de personais em tempo integral.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-10">
          <a
            href={getWhatsAppUrl("Olá! Quero agendar uma aula grátis na WCF Academia!")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary glow-red w-full sm:w-auto text-center !py-4 !px-8 text-xs sm:text-sm font-heading font-bold"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            Agendar Aula Grátis no WhatsApp
          </a>
          <Link
            to="/modalidades"
            className="btn-outline w-full sm:w-auto text-center !py-4 !px-8 text-xs sm:text-sm font-heading flex items-center justify-center gap-1.5"
          >
            Explorar Modalidades
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick Stats Strip (Super responsivo no mobile) */}
        <div className="w-full max-w-5xl mt-2 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 text-left">
          {QUICK_STATS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass border border-border/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="font-heading text-base sm:text-lg md:text-xl font-bold text-foreground">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-foreground/90 mt-0.5">
                    {s.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5">
                    {s.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="#social"
          className="mt-10 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
