import { Star, Quote } from "lucide-react";
import { STATS, TESTIMONIALS } from "@/data/depoimentos";
import { SectionHeader } from "@/components/common/SectionHeader";

export const SocialProofSection = () => {
  return (
    <section id="social" className="py-16 md:py-24 relative overflow-hidden bg-background section-optimized">
      {/* High-Performance Radial Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] glow-ambient-gold rounded-full pointer-events-none" />


      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Metric Counter Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 md:mb-24">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center py-7 sm:py-8 px-4 rounded-3xl glass-card border border-white/10 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-foreground group-hover:text-gradient-red transition-all">
                {s.value}
              </div>
              <div className="text-muted-foreground text-[11px] sm:text-xs uppercase font-heading font-semibold tracking-widest mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <SectionHeader
          label="Depoimentos Reais"
          title={
            <>
              Quem Treina na WCF, <span className="text-gradient-gold">Recomenda.</span>
            </>
          }
          description="Histórias de superação, disciplina e transformação de vidas contadas por quem vive a academia todos os dias."
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-muted-foreground/30 group-hover:text-amber-400/50 transition-colors" />
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-amber-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

