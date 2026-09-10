import { Star } from "lucide-react";
import { STATS, TESTIMONIALS } from "@/data/depoimentos";
import { SectionHeader } from "@/components/common/SectionHeader";

export const SocialProofSection = () => {
  return (
    <section id="social" className="py-14 md:py-24">
      <div className="container mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 md:mb-24">
          {STATS.map((s) => (
            <div key={s.label} className="text-center py-8 rounded-2xl glass">
              <div className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                {s.value}
              </div>
              <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <SectionHeader
          label="Depoimentos"
          title={<>Quem treina, <span className="text-gradient-gold">recomenda.</span></>}
        />

        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
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
