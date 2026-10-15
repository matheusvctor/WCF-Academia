import { Star, Quote } from "lucide-react";
import { STATS, TESTIMONIALS } from "@/data/depoimentos";
import { SectionHeader } from "@/components/common/SectionHeader";

export const SocialProofSection = () => {
  return (
    <section id="social" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="absolute top-1/3 right-0 w-[600px] h-[400px] glow-ambient-gold rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho + métricas lado a lado no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12 md:mb-16">
          <SectionHeader
            align="left"
            label="Depoimentos reais"
            title={
              <>
                Quem treina na WCF, <span className="text-gradient-gold">recomenda.</span>
              </>
            }
            description="Histórias de superação, disciplina e transformação contadas por quem vive a academia todos os dias."
            className="mb-0 lg:col-span-6"
          />

          <dl className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.08]">
            {STATS.map((s) => (
              <div key={s.label} className="bg-background px-4 py-5 sm:py-6 text-center flex flex-col-reverse">
                <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                <dd className="font-heading text-3xl sm:text-[2rem] font-bold tracking-tight text-foreground tabular">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="surface surface-hover p-6 sm:p-8 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label="Avaliação 5 de 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-white/10" aria-hidden="true" />
              </div>

              <blockquote className="mt-5 flex-1 text-base sm:text-[17px] text-foreground/90 leading-relaxed text-pretty">
                “{t.text}”
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-sm font-heading font-bold text-white">
                  {t.name[0]}
                </span>
                <div>
                  <div className="text-sm font-heading font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
