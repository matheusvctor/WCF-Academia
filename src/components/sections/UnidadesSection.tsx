import { useState } from "react";
import { MapPin, Award, ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { UNIDADES } from "@/data/unidades";
import { Unidade } from "@/types";
import { SectionHeader } from "@/components/common/SectionHeader";

export const UnidadesSection = () => {
  const [aberto, setAberto] = useState<null | Unidade>(null);

  return (
    <section id="unidades" className="py-16 md:py-24 border-t border-border/50 bg-card/30">
      <div className="container mx-auto">
        <SectionHeader
          label="Unidades WCF Jiu-Jitsu"
          title={<>A WCF <span className="text-gradient-red">pelo Brasil.</span></>}
          description="Nossas unidades parceiras espalhadas pelo país, levando a filosofia e o ensino da WCF Jiu-Jitsu."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {UNIDADES.map((u, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden border border-border bg-card group hover:border-primary/50 transition-colors"
            >
              {u.logo && (
                <div className="flex items-center justify-center bg-black p-4">
                  <img
                    src={u.logo}
                    alt={`Logo ${u.nome}`}
                    loading="lazy"
                    className="w-32 h-32 md:w-36 md:h-36 object-contain"
                  />
                </div>
              )}
              <button
                type="button"
                onClick={() => u.certificados?.length && setAberto(u)}
                aria-label={`Ver certificados de ${u.professor}`}
                className="relative aspect-[3/4] w-full overflow-hidden bg-muted block focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img
                  src={u.foto}
                  alt={`${u.professor} - ${u.nome}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {u.certificados?.length ? (
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-xs font-semibold bg-background/90 text-foreground px-2.5 py-1.5 rounded-full backdrop-blur">
                    <ImageIcon className="w-3.5 h-3.5" />
                    Ver certificados
                  </span>
                ) : null}
              </button>
              <div className="p-5">
                <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                  <MapPin className="w-4 h-4" />
                  {u.cidade}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{u.nome}</h3>
                <div className="text-sm text-muted-foreground mb-3">
                  Professor responsável: <span className="text-foreground font-medium">{u.professor}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full mb-3">
                  <Award className="w-3.5 h-3.5" />
                  {u.faixa}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!aberto} onOpenChange={(o) => !o && setAberto(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Certificados — {aberto?.professor}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-6 mt-2 max-h-[75vh] overflow-y-auto">
            {aberto?.certificados?.map((c, i) => (
              <figure key={i} className="rounded-lg overflow-hidden border border-border bg-muted">
                <img src={c.src} alt={c.titulo} className="w-full h-auto object-contain" />
                <figcaption className="text-sm text-muted-foreground text-center py-2 px-3">
                  {c.titulo}
                </figcaption>
              </figure>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default UnidadesSection;
