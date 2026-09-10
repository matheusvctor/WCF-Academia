import React from "react";
import { useParallax } from "@/hooks/useParallax";

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
  const parallaxOffset = useParallax({ speed: 0.25 });

  const accentClasses = {
    primary: "border-primary/20 text-primary bg-primary/10",
    gold: "border-amber-500/20 text-amber-400 bg-amber-500/10",
    cyan: "border-cyan-500/20 text-cyan-400 bg-cyan-500/10",
  }[accentColor];

  return (
    <div className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-background border-b border-border/50">
      {/* Background Image with subtle Parallax */}
      {imageSrc && (
        <div
          className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(0, ${parallaxOffset * 0.4}px, 0)`,
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center opacity-15 md:opacity-20 filter blur-[1px]"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
      )}

      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        {badge && (
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading uppercase tracking-[0.2em] mb-4 border backdrop-blur-md ${accentClasses}`}
          >
            {badgeIcon}
            <span>{badge}</span>
          </div>
        )}

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {children && <div className="mt-8 flex justify-center">{children}</div>}
      </div>
    </div>
  );
};

export default ParallaxBanner;
