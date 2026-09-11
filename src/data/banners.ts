import banner1 from "@/assets/banners/banner-comeco-zero.webp";
import banner2 from "@/assets/banners/banner-comecar-dificil.webp";
import bannerKids from "@/assets/jiujitsu/jiujitsu-kids.webp";
import banner3 from "@/assets/banners/banner-saude-longevidade.webp";
import banner4 from "@/assets/banners/banner-pilates-qualidade.webp";
import { BannerItem } from "@/types";

export const BANNERS: BannerItem[] = [
  {
    src: banner1,
    alt: "Todo mundo começa do zero — O segredo é não parar | WCF Academia",
    tag: "Musculação",
    badge: "05h às 00h",
  },
  {
    src: bannerKids,
    alt: "Jiu-Jitsu Kids — 1ª Mensalidade FREE (crianças de até 10 anos) | WCF Academia",
    tag: "Jiu-Jitsu Kids",
    badge: "1ª Mensalidade FREE",
  },
  {
    src: banner4,
    alt: "Studio Pilates — Mais força, postura e qualidade de vida | WCF Academia",
    tag: "Studio Pilates",
    badge: "Reformer & Solo",
  },
  {
    src: banner3,
    alt: "Idade não limita — Movimento liberta | Musculação e Longevidade WCF",
    tag: "Saúde & Longevidade",
    badge: "Autonomia",
  },
  {
    src: banner2,
    alt: "Começar é difícil, mas se arrepender por não ter começado é pior | WCF Academia",
    tag: "Superação",
    badge: "Foco & Disciplina",
  },
];
