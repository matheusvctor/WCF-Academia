import studioBanner from "@/assets/banners/banner-pilates-qualidade.webp";
import studioPilatesAula from "@/assets/pilates/studio-pilates-aula-real.webp";
import studioPilatesCadillac from "@/assets/pilates/studio-pilates-cadillac.webp";
import soloPoster from "@/assets/aulas/aula-pilates-solo.webp";
import longevidadeBanner from "@/assets/banners/banner-saude-longevidade.webp";
import { ImageGalleryItem } from "@/types";

export const PILATES_STUDIO_INFO = {
  bannerImage: studioPilatesAula,
  graphicBanner: studioBanner,
  soloImage: soloPoster,
  tagline: "Seu corpo sente. Sua mente agradece.",
  beneficios: [
    {
      titulo: "Melhora da Postura",
      descricao: "Alinhamento da coluna vertebral, correção biomecânica e eliminação de vícios posturais.",
    },
    {
      titulo: "Mais Flexibilidade & Mobilidade",
      descricao: "Ganho de amplitude articular, elasticidade muscular e maior liberdade de movimentos.",
    },
    {
      titulo: "Alívio Efetivo das Dores",
      descricao: "Alívio significativo de dores lombares, tensões cervicais e reabilitação muscular segura.",
    },
    {
      titulo: "Fortalecimento do Core",
      descricao: "Ativação da musculatura profunda (Powerhouse), proporcionando sustentação e equilíbrio.",
    },
  ],
  aparelhos: [
    "Reformer Clássico",
    "Cadillac",
    "Step Chair",
    "Ladder Barrel",
    "Pilates Solo (Mat Pilates)",
    "Acessórios (Magic Circle, Foam Roller, Bolas)",
  ],
  horarioSolo: "Terças e Quintas às 18h40 · Instrutor Romero Mota",
};

export const FOTOS_PILATES: ImageGalleryItem[] = [
  { src: studioPilatesAula, alt: "Aulas de Studio Pilates nos aparelhos Reformer na WCF" },
  { src: studioPilatesCadillac, alt: "Aparelho Cadillac com treino de controle motor e flexibilidade" },
  { src: soloPoster, alt: "Pôster oficial de Pilates Solo e Alongamento com Romero Mota" },
  { src: studioBanner, alt: "WCF Studio Pilates - Postura, força e qualidade de vida" },
];
