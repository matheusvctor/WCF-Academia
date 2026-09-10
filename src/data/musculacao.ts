import biomecanicaPoster from "@/assets/musculacao/post-treino-pernas.png";
import saudePoster from "@/assets/banners/banner-saude-longevidade.png";
import comecarPoster from "@/assets/banners/banner-comecar-dificil.png";
import comecoZeroPoster from "@/assets/banners/banner-comeco-zero.png";
import renallyPoster from "@/assets/professores/personal-renally-destaque.png";
import marcosPoster from "@/assets/professores/personal-marcos.jpg";
import radamesPoster from "@/assets/professores/personal-radames.jpg";
import { ImageGalleryItem } from "@/types";

export const MUSCULACAO_HIGHLIGHTS = {
  biomecanica: {
    title: "Biomecânica & Ajuste Ergonômico",
    desc: "Aprenda a treinar sem erros posturais. Nossos professores garantem amplitude correta, cadência e segurança total na execução.",
    image: biomecanicaPoster,
  },
  longevidade: {
    title: "Idade Não Limita. Movimento Liberta.",
    desc: "Musculação para a maturidade: ganho de massa magra, prevenção de osteoporose, autonomia funcional e vitalidade em qualquer fase da vida.",
    image: saudePoster,
  },
};

export const FOTOS_MUSCULACAO: ImageGalleryItem[] = [
  { src: biomecanicaPoster, alt: "Biomecânica e execução de pernas na WCF Academia" },
  { src: saudePoster, alt: "Longevidade, saúde e autonomia funcional" },
  { src: comecarPoster, alt: "Motivação e musculação para todos os níveis" },
  { src: comecoZeroPoster, alt: "Inicie seus treinos com acompanhamento profissional" },
  { src: renallyPoster, alt: "Prescrição individualizada e consultoria de treino" },
  { src: marcosPoster, alt: "Acompanhamento no salão de musculação com Personal Marcos" },
  { src: radamesPoster, alt: "Suporte contínuo no salão de musculação com Personal Radamés" },
];
