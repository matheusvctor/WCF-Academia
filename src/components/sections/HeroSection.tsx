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
  Star,
  Check,
  type LucideIcon,
} from "lucide-react";
import { BANNERS } from "@/data/banners";
import { STATS, TESTIMONIALS } from "@/data/depoimentos";
import { SITE_INFO, getWhatsAppUrl } from "@/constants/site";
import { useOpenStatus } from "@/hooks/useOpenStatus";

const QUICK_STATS = [
  { icon: Clock, value: "05h às 00h", label: "Segunda a sexta" },
  { icon: Dumbbell, value: "5 personais", label: "No salão, todos os turnos" },
  { icon: Shield, value: "Tatame & Studio", label: "Jiu-Jitsu e Pilates Reformer" },
  { icon: Award, value: `Desde ${SITE_INFO.since}`, label: "Referência no bairro" },
];

const PILL_ICONS: Record<string, LucideIcon> = {
  "Musculação": Dumbbell,
  "Fundador & Mestre": Award,
  "Jiu-Jitsu Kids": Trophy,
  "Studio Pilates": Sparkles,
  "Saúde & Longevidade": HeartPulse,
  "Superação": Flame,
};

const alunos = STATS.find((s) => s.label === "Alunos")?.value ?? "1.000+";
const avaliacao = STATS.find((s) => s.label === "Avaliação")?.value ?? "5.0";

export const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const status = useOpenStatus();

  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true, playOnInit: true })
  );

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const total = count || BANNERS.length;

  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Fundo: grid sutil + brilho ambiente da marca */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] glow-ambient-red rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ===== Coluna de conteúdo ===== */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status em tempo real */}
            <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium">
              <span className="relative flex w-2 h-2" aria-hidden="true">
                {status.isOpen && (
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                )}
                <span className={`relative inline-flex w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-400" : "bg-muted-foreground"}`} />
              </span>
              <span className={status.isOpen ? "text-emerald-400 font-semibold" : "text-foreground font-semibold"}>
                {status.title}
              </span>
              <span className="text-muted-foreground">{status.detail}</span>
              <span className="hidden sm:inline text-white/20" aria-hidden="true">|</span>
              <span className="hidden sm:inline text-muted-foreground">Jardim Paulistano · Campina Grande</span>
            </div>

            {/* Proposta de valor */}
            <h1 className="mt-6 font-heading font-bold text-foreground tracking-[-0.03em] leading-[1.02] text-[2.6rem] sm:text-6xl lg:text-[4.25rem] xl:text-7xl text-balance">
              Sua melhor <span className="text-gradient-red">versão</span> começa aqui.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Musculação das <strong className="text-foreground font-semibold">05h às 00h</strong> com 5 personais
              no salão, Studio Pilates com Reformer e tatame oficial de Jiu-Jitsu com Mestre Wilson Camara —
              tudo em um só lugar.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl("Olá! Quero agendar uma aula experimental grátis na WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-4 !px-7 !text-[15px] w-full sm:w-auto"
              >
                <MessageCircle className="w-[18px] h-[18px] shrink-0" />
                Agendar aula grátis
              </a>
              <Link to="/horarios" className="btn-outline !py-4 !px-7 !text-[15px] w-full sm:w-auto group">
                Ver planos e horários
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Garantias rápidas */}
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
              {["1ª aula sem custo", "Sem taxa oculta", "Resposta rápida no WhatsApp"].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Prova social */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2.5" aria-hidden="true">
                {TESTIMONIALS.map((t) => (
                  <span
                    key={t.name}
                    className="w-10 h-10 rounded-full ring-2 ring-background bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-sm font-heading font-bold text-white"
                  >
                    {t.name[0]}
                  </span>
                ))}
                <span className="w-10 h-10 rounded-full ring-2 ring-background bg-card border border-white/10 flex items-center justify-center text-[11px] font-heading font-bold text-foreground">
                  +1k
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex" aria-label={`Avaliação ${avaliacao} de 5`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="font-heading font-bold text-sm text-foreground">{avaliacao}</span>
                </div>
                <p className="text-[13px] text-muted-foreground mt-0.5">
                  <strong className="text-foreground font-semibold">{alunos} alunos</strong> já treinaram com a gente
                </p>
              </div>
            </div>
          </div>

          {/* ===== Coluna visual: carrossel de campanhas ===== */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-[2.5rem] blur-2xl pointer-events-none" aria-hidden="true" />

              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-white/10 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
                <Carousel
                  setApi={setApi}
                  opts={{ loop: true, align: "start" }}
                  plugins={[autoplay.current]}
                  className="w-full h-full"
                  aria-label="Campanhas da WCF Academia"
                >
                  <CarouselContent className="ml-0 h-full">
                    {BANNERS.map((b, i) => (
                      <CarouselItem key={b.src} className="pl-0 basis-full h-full">
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-card via-black to-background">
                          <img
                            src={b.src}
                            alt={b.alt}
                            className="w-full h-full object-contain p-2 sm:p-3 select-none"
                            draggable={false}
                            loading={i === 0 ? "eager" : "lazy"}
                            decoding={i === 0 ? "sync" : "async"}
                            {...(i === 0 ? { fetchPriority: "high" as const } : {})}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Selo da campanha ativa */}
                {BANNERS[current]?.badge && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="chip bg-black/70 border-white/15 text-white backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-gold" aria-hidden="true" />
                      {BANNERS[current].badge}
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 z-20">
                  <span className="chip bg-black/70 border-white/10 text-white/80 backdrop-blur-md tabular">
                    {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* Setas */}
                <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
                  <button
                    type="button"
                    onClick={() => api?.scrollPrev()}
                    aria-label="Campanha anterior"
                    className="pointer-events-auto w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => api?.scrollNext()}
                    aria-label="Próxima campanha"
                    className="pointer-events-auto w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Abas das modalidades (também funcionam como indicadores) */}
              <div
                className="relative mt-4 -mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center"
                role="tablist"
                aria-label="Modalidades em destaque"
              >
                {BANNERS.map((b, idx) => {
                  const Icon = PILL_ICONS[b.tag || ""] || Dumbbell;
                  const isActive = current === idx;
                  return (
                    <button
                      key={b.src}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => api?.scrollTo(idx)}
                      className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-heading font-semibold border transition-all duration-300 ${
                        isActive
                          ? "bg-white text-background border-white"
                          : "bg-white/[0.03] border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-red-600" : ""}`} aria-hidden="true" />
                      {b.tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ===== Faixa de diferenciais rápidos ===== */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.08]">
          {QUICK_STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.value} className="flex items-start gap-3 p-4 sm:p-6 bg-background">
                <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center text-primary">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-bold text-base sm:text-lg text-foreground leading-tight">{s.value}</div>
                  <div className="text-xs sm:text-[13px] text-muted-foreground mt-1 leading-snug">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
