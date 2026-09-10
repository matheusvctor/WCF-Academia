import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = "center",
  className,
}) => {
  const isCenter = align === "center";

  return (
    <div className={cn(isCenter ? "text-center" : "text-left", "mb-12", className)}>
      <div className={cn("section-label", isCenter && "justify-center")}>
        <span className="w-8 h-px bg-primary" />
        {label}
        {isCenter && <span className="w-8 h-px bg-primary" />}
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn("text-muted-foreground text-sm md:text-base leading-relaxed", isCenter ? "max-w-xl mx-auto" : "max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
};
