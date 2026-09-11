import { MapPin, Award, CheckCircle2, MessageCircle, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { UNIDADES } from "@/data/unidades";
import { SectionHeader } from "@/components/common/SectionHeader";
import { getWhatsAppUrl } from "@/constants/site";

export const UnidadesSection = () => {
  return (
    <section id="unidades" className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <SectionHeader
          label="Rede de Ensino & Polos"
          title={
            <>
              A WCF <span className="text-gradient-red">pelo Brasil.</span>
            </>
          }
          description="Nossas unidades e polos chancelados espalhados pelo país, levando a filosofia, disciplina e alto nível técnico da linhagem WCF Jiu-Jitsu."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIDADES.map((u, i) => (
            <article
              key={i}
              className="glass rounded-3xl overflow-hidden border border-border/80 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 bg-card/60 backdrop-blur-md"
            >
              <div>
                {/* Header Image with Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/80 flex items-center justify-center">
                  <img
                    src={u.foto}
                    alt={`${u.nome} - ${u.cidade}`}
                    loading="lazy"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90" />

                  {/* Top Badge */}
                  {u.tipoBadge && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider bg-primary text-white shadow-lg border border-white/20 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        {u.tipoBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{u.cidade}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-1 leading-tight">
                    {u.nome}
                  </h3>

                  <div className="text-xs text-muted-foreground mb-3">
                    {u.cargo}: <strong className="text-foreground">{u.professor}</strong>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-heading font-semibold border border-primary/20 mb-4">
                    <Award className="w-3.5 h-3.5" />
                    <span>{u.faixa}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {u.bio}
                  </p>

                  {/* Highlights Bullet List */}
                  {u.destaques && (
                    <ul className="space-y-2 border-t border-border/50 pt-4 mb-2 text-xs text-muted-foreground">
                      {u.destaques.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Bottom CTA Button */}
              {u.ctaText && u.ctaMsg && (
                <div className="p-6 pt-0 mt-auto">
                  <a
                    href={getWhatsAppUrl(u.ctaMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !w-full h-12 !py-0 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-center justify-center flex items-center gap-2 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{u.ctaText}</span>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnidadesSection;
