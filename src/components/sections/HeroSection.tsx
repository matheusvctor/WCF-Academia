import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MessageCircle, ArrowDown } from "lucide-react";
import { BANNERS } from "@/data/banners";
import { SITE_INFO, getWhatsAppUrl } from "@/constants/site";

export const HeroSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false, playOnInit: true })
  );

  return (
    <section className="relative flex flex-col bg-background overflow-hidden">
      <div className="relative w-full pt-16 md:pt-20">
        <Carousel
          opts={{ loop: true, align: "start", containScroll: "trimSnaps" }}
          plugins={[autoplay.current]}
          className="w-full overflow-hidden"
        >
          <CarouselContent className="ml-0">
            {BANNERS.map((b, i) => (
              <CarouselItem key={i} className="pl-0 basis-full min-w-0">
                <img
                  src={b.src}
                  alt={b.alt}
                  className="w-full h-auto block select-none"
                  draggable={false}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding={i === 0 ? "sync" : "async"}
                  {...(i === 0 ? { fetchPriority: "high" as const } : {})}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center text-center">
        <div className="section-label">
          <span className="w-6 h-px bg-primary" />
          Desde {SITE_INFO.since}
        </div>
        <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mb-6 leading-tight">
          Sua melhor <span className="text-gradient-red">versão</span> começa aqui.
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href={getWhatsAppUrl("Olá! Quero agendar uma aula grátis na WCF Academia!")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary glow-red w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            Aula grátis no WhatsApp
          </a>
          <a href="#modalidades" className="btn-outline w-full sm:w-auto">
            Explorar modalidades
          </a>
        </div>

        <a
          href="#social"
          className="mt-8 text-muted-foreground animate-float"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
