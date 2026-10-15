import React, { useRef, useEffect } from "react";

interface ParallaxBannerProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  accentColor?: "primary" | "gold" | "cyan";
  children?: React.ReactNode;
}

export const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  badge,
  badgeIcon,
  title,
  description,
  imageSrc,
  imageAlt = "Banner WCF Academia",
  accentColor = "primary",
  children,
}) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageSrc) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || window.innerWidth < 768) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const scrollY = window.scrollY || 0;
            bgRef.current.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [imageSrc]);

  const accentClasses = {
    primary: "border-primary/20 text-red-400 bg-primary/10",
    gold: "border-gold/25 text-gold bg-gold/10",
    cyan: "border-cyan-500/20 text-cyan-400 bg-cyan-500/10",
  }[accentColor];

  return (
    <div className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-background border-b border-white/[0.08]">
      {/* Background Image com parallax leve e compositor via GPU */}
      {imageSrc && (
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none will-change-transform"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center opacity-15 md:opacity-25"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
        </div>
      )}

      {/* Grid sutil e Glow ambiente */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] glow-ambient-red rounded-full pointer-events-none" aria-hidden="true" />

      {/* Conteúdo */}
      <div className="container max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {badge && (
          <div className="inline-flex justify-center mb-4">
            <span
              className={`chip px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider backdrop-blur-md ${accentClasses}`}
            >
              {badgeIcon}
              <span>{badge}</span>
            </span>
          </div>
        )}

        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] text-balance">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {description}
          </p>
        )}

        {children && <div className="mt-8 flex justify-center">{children}</div>}
      </div>
    </div>
  );
};

export default ParallaxBanner;
