import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Cabeçalho padrão de seção: eyebrow → título → descrição.
 * Escala tipográfica consistente em todas as páginas.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = "center",
  className,
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16 flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="section-label">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
        {label}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground text-balance max-w-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-muted-foreground text-base md:text-lg leading-relaxed text-pretty max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
