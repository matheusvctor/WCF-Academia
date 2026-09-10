import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { MODALIDADES } from "@/data/modalidades";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader } from "@/components/common/SectionHeader";

const CATEGORIAS = [
  "Todas",
  "Força & Saúde",
  "Lutas & Kids",
  "Bem-estar & Pilates",
  "Aulas Coletivas",
];

export const ModalidadesSection = () => {
  const [activeCat, setActiveCat] = useState("Todas");

  const filtered = MODALIDADES.filter((m) => {
    if (activeCat === "Todas") return true;
    if (activeCat === "Força & Saúde") return m.tag.includes("Força") || m.name.includes("Musculação");
    if (activeCat === "Lutas & Kids") return m.name.includes("Jiu-Jitsu") || m.name.includes("Muay") || m.name.includes("Kids");
    if (activeCat === "Bem-estar & Pilates") return m.name.includes("Pilates");
    if (activeCat === "Aulas Coletivas") return m.name.includes("Spinning") || m.name.includes("Step") || m.name.includes("Localizada");
    return true;
  });

  return (
    <section id="modalidades" className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader
            align="left"
            label="Modalidades & Treinos"
            title={
              <>
                Encontre o Treino <span className="text-gradient-red">Perfeito</span> pra Você.
              </>
            }
            description="Variedade completa de treinos para todos os objetivos, idades e ritmos. Escolha a sua modalidade e treine com os melhores."
            className="mb-0"
          />

          {/* Filtros de Categoria Deslizáveis no Mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 max-w-full no-scrollbar md:flex-wrap shrink-0">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-heading uppercase tracking-wider whitespace-nowrap transition-all duration-300 shrink-0 ${
                  activeCat === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((m) => {
            // Se for Jiu-Jitsu Kids ou Pilates, pode redirecionar para a seção dedicada
            const internalRoute =
              m.name.includes("Kids") && m.name.includes("Jiu-Jitsu")
                ? "/jiu-jitsu"
                : m.name.includes("Pilates")
                ? "/pilates"
                : null;

            const externalUrl = internalRoute
              ? null
              : m.name === "Musculação"
              ? "#musculacao"
              : getWhatsAppUrl(`Olá! Quero conhecer mais sobre as aulas de ${m.name} na WCF Academia!`);

            const CardContent = (
              <>
                <div className="aspect-[4/3] overflow-hidden relative bg-black/40">
                  <img
                    src={m.image}
                    alt={`${m.name} - WCF Academia Campina Grande`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-background/90 backdrop-blur-md text-foreground px-3 py-1 rounded-full border border-border/60">
                      {m.tag}
                    </span>
                  </div>

                  {internalRoute && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider bg-primary/90 text-white px-2.5 py-1 rounded-full shadow">
                        <Sparkles className="w-3 h-3" /> Ver Detalhes
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {m.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-card border border-border/80 flex items-center justify-center shrink-0 group-hover:border-primary/60 group-hover:bg-primary/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </>
            );

            const cardClasses =
              "group relative overflow-hidden rounded-2xl border border-border bg-card/70 hover:border-primary/50 transition-all duration-300 flex flex-col shadow-lg";

            if (internalRoute) {
              return (
                <Link key={m.name} to={internalRoute} className={cardClasses}>
                  {CardContent}
                </Link>
              );
            }

            return (
              <a
                key={m.name}
                href={externalUrl || "#"}
                {...(externalUrl?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cardClasses}
              >
                {CardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModalidadesSection;
