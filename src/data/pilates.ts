import studioBanner from "@/assets/banners/banner-pilates-qualidade.png";
import soloPoster from "@/assets/aulas/aula-pilates-solo.jpg";
import longevidadeBanner from "@/assets/banners/banner-saude-longevidade.png";
import comecoZeroBanner from "@/assets/banners/banner-comeco-zero.png";
import { ImageGalleryItem } from "@/types";

export const PILATES_STUDIO_INFO = {
  bannerImage: studioBanner,
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
  { src: studioBanner, alt: "Pilates Reformer e aparelhos clássicos WCF" },
  { src: soloPoster, alt: "Pilates Solo e Alongamento com Romero Mota" },
  { src: longevidadeBanner, alt: "Saúde articular, postura e longevidade funcional" },
  { src: comecoZeroBanner, alt: "Aulas para iniciantes, intermediários e avançados" },
];
