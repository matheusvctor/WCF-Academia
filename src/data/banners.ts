import banner1 from "@/assets/banners/banner-comeco-zero.webp";
import bannerWilson from "@/assets/banners/banner-mestre-wilson.webp";
import bannerKids from "@/assets/jiujitsu/jiujitsu-kids.webp";
import bannerFeminino from "@/assets/jiujitsu/jiujitsu-feminino.webp";
import bannerSaude from "@/assets/banners/banner-saude-longevidade-4-5.webp";
import banner2 from "@/assets/banners/banner-comecar-dificil.webp";
import { BannerItem } from "@/types";

export const BANNERS: BannerItem[] = [
  {
    src: banner1,
    alt: "Todo mundo começa do zero — O segredo é não parar | WCF Academia",
    tag: "Musculação",
    badge: "05h às 00h",
  },
  {
    src: bannerWilson,
    alt: "Mestre Wilson Camara Filho — Fundador WCF Academia & Jiu-Jitsu Individual R$ 60",
    tag: "Fundador & Mestre",
    badge: "Faixa Preta 6º Grau",
  },
  {
    src: bannerKids,
    alt: "Jiu-Jitsu Kids — 1ª Mensalidade FREE (crianças de até 10 anos) | WCF Academia",
    tag: "Jiu-Jitsu Kids",
    badge: "1ª Mensalidade FREE",
  },
  {
    src: bannerFeminino,
    alt: "Jiu-Jitsu Feminino — 1ª Mensalidade FREE (turma exclusiva) | WCF Academia",
    tag: "Jiu-Jitsu Feminino",
    badge: "1ª Mensalidade FREE",
  },
  {
    src: bannerSaude,
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
