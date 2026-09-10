import wilsonAsset from "@/assets/equipe/equipe-34_5.jpg.asset.json";
import { Award, GraduationCap, Dumbbell, Heart } from "lucide-react";
import { Credencial, Pilar } from "@/types";

export const FUNDADOR_INFO = {
  nome: "Wilson Camara Filho",
  foto: wilsonAsset.url,
  anosExperiencia: "15+",
  frase: "A verdadeira vitória não acontece apenas nas competições, mas na evolução diária de cada pessoa.",
  bio: "Bacharel e licenciado em Educação Física, Faixa Preta 6º Grau de Jiu-Jitsu (CBJJE/CBJJP) e 5º Grau (CBJJ/IBJJF/AJP), Personal Trainer (CREF 007180-G/PB), instrutor de Pilates, treinador certificado Core 360 e com especialização em treinamento para terceira idade. Décadas dedicadas a formar atletas, instrutores e centenas de alunos.",
};

export const CREDENCIAIS: Credencial[] = [
  { icon: GraduationCap, text: "Bacharel e Licenciatura em Educação Física" },
  { icon: Award, text: "Faixa Preta 6º Grau · CBJJE / CBJJP" },
  { icon: Award, text: "Faixa Preta 5º Grau · CBJJ / IBJJF / AJP" },
  { icon: Dumbbell, text: "Personal Trainer · CREF 007180-G/PB" },
  { icon: Dumbbell, text: "Treinador certificado Core 360" },
  { icon: Heart, text: "Instrutor de Pilates" },
  { icon: GraduationCap, text: "Cursou Fisioterapia" },
  { icon: Heart, text: "Especialização em treinamento para terceira idade" },
];

export const PILARES: Pilar[] = [
  {
    titulo: "WCF Jiu-Jitsu",
    texto:
      "A essência da WCF. Uma equipe construída sobre respeito, disciplina, humildade e superação — reconhecida dentro e fora da Paraíba. Mais do que formar campeões, nossa missão é formar pessoas.",
  },
  {
    titulo: "WCF Academia",
    texto:
      "Um espaço pensado para unir musculação, treinamento funcional, preparação física e condicionamento. Ambiente acolhedor e motivador para todos os níveis — onde saúde e performance caminham juntas.",
  },
  {
    titulo: "WCF Pilates",
    texto:
      "Fortalecimento muscular, correção postural, mobilidade e prevenção de lesões. Acompanhamento especializado para quem busca qualidade de vida ou alta performance esportiva.",
  },
];

export const VALORES = [
  "Disciplina",
  "Respeito",
  "Comprometimento",
  "Excelência",
  "Família",
  "Superação",
  "Evolução Contínua",
] as const;
