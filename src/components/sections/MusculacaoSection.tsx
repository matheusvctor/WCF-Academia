import { useState } from "react";
import { MUSCULACAO_HIGHLIGHTS } from "@/data/musculacao";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Dumbbell, HeartPulse, CheckCircle2, Sparkles, Activity, Layers, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const MusculacaoSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="musculacao" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Estrutura & Resultados"
          title={
            <>
              Área principal de <span className="text-gradient-red">musculação</span> & biomecânica.
            </>
          }
          description="Equipamentos profissionais Supreme, Vitally e Impact — sala climatizada, pesos livres completos e suporte técnico para orientar sua execução com total segurança."
        />

        {/* 2 Destaques Oficiais: Biomecânica de Pernas & Saúde/Longevidade */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {/* Card 1: Biomecânica */}
          <div className="surface p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-3 mb-6">
              <span className="chip bg-primary/10 border-primary/25 text-red-400">
                <Dumbbell className="w-3.5 h-3.5" /> Biomecânica Aplicada
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                {MUSCULACAO_HIGHLIGHTS.biomecanica.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {MUSCULACAO_HIGHLIGHTS.biomecanica.desc}
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden border border-white/[0.08] relative group cursor-pointer aspect-square max-h-[360px] mx-auto bg-card shadow-lg"
              onClick={() => setSelectedImg(MUSCULACAO_HIGHLIGHTS.biomecanica.image)}
            >
              <img
                src={MUSCULACAO_HIGHLIGHTS.biomecanica.image}
                alt="Treino de Pernas e Biomecânica WCF"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <span className="chip bg-black/70 border-white/20 text-white">
                  <ZoomIn className="w-3.5 h-3.5" /> Clique para ampliar
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Aparelhos reguláveis com isolamento neuromuscular preciso</span>
            </div>
          </div>

          {/* Card 2: Longevidade & Terceira Idade */}
          <div className="surface p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-3 mb-6">
              <span className="chip bg-gold/10 border-gold/25 text-gold">
                <HeartPulse className="w-3.5 h-3.5" /> Longevidade & Autonomia
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                {MUSCULACAO_HIGHLIGHTS.longevidade.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {MUSCULACAO_HIGHLIGHTS.longevidade.desc}
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden border border-white/[0.08] relative group cursor-pointer aspect-square max-h-[360px] mx-auto bg-card shadow-lg"
              onClick={() => setSelectedImg(MUSCULACAO_HIGHLIGHTS.longevidade.image)}
            >
              <img
                src={MUSCULACAO_HIGHLIGHTS.longevidade.image}
                alt="Saúde e Longevidade na WCF Academia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <span className="chip bg-black/70 border-white/20 text-white">
                  <ZoomIn className="w-3.5 h-3.5" /> Clique para ampliar
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Atendimento acolhedor e seguro para iniciantes e terceira idade</span>
            </div>
          </div>
        </div>

        {/* Linhas de Equipamentos e Ambiente */}
        <div className="surface p-6 sm:p-8">
          <div className="mb-6">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-foreground">Equipamentos e Ambiente do Salão</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Estrutura completa com linhas profissionais para todos os grupos musculares e níveis de treino.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-background/80 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-foreground text-sm sm:text-base mb-1">Linhas Supreme & Vitally</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Aparelhos com biomecânica avançada para isolamento neuromuscular preciso.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-foreground text-sm sm:text-base mb-1">Linha Impact Articulada</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Máquinas articuladas de alta carga com amplitude ajustável e máxima segurança.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-foreground text-sm sm:text-base mb-1">Espaço de Pesos Livres</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Halteres emborrachados até altas cargas, barras olímpicas e bancos anatômicos.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-foreground text-sm sm:text-base mb-1">Ambiente Climatizado</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Salão amplo e bem ventilado, piso de alta absorção e iluminação profissional.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dialog Modal */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-2xl p-3 bg-card/95 backdrop-blur-2xl border border-white/15">
            <DialogTitle className="sr-only">Visualização de Musculação e Biomecânica WCF</DialogTitle>
            <DialogDescription className="sr-only">Foto ampliada das instalações e biomecânica de treino da WCF</DialogDescription>
            {selectedImg && (
              <img
                src={selectedImg}
                alt="Pôster WCF ampliado"
                className="w-full h-auto rounded-2xl max-h-[85vh] object-contain mx-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MusculacaoSection;
