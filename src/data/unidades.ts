import logoWCF from "@/assets/logo-wcf-real.webp";
import matrizImg from "@/assets/wilson-camara.webp";
import tatameImg from "@/assets/jiujitsu/jiujitsu-tatame-horarios.webp";
import { Unidade } from "@/types";

export const UNIDADES: Unidade[] = [
  {
    cidade: "Campina Grande – PB",
    nome: "Sede Matriz WCF Academia",
    tipoBadge: "Sede & Tatame Central",
    professor: "Mestre Wilson Camara Filho",
    cargo: "Fundador e Líder Geral",
    faixa: "Faixa Preta 6º Dan",
    foto: matrizImg,
    bio: "O centro de excelência e coração da doutrina WCF. Estrutura completa de Musculação das 05h às 00h, Studio Pilates Reformer e Tatame Oficial de graduação.",
    destaques: [
      "Centro de formação e graduação de faixas pretas",
      "Musculação ininterrupta das 05h às 00h",
      "Studio Pilates Reformer e turmas Kids",
    ],
    ctaText: "Falar no WhatsApp",
    ctaMsg: "Olá! Gostaria de agendar uma visita e aula experimental na Sede Matriz da WCF Academia em Campina Grande!",
    certificados: [],
  },
  {
    cidade: "João Pessoa – PB",
    nome: "WCF Jiu-Jitsu João Pessoa",
    tipoBadge: "Polo Oficial Chancelado",
    professor: "Fábio Lauriano Silva de Souza",
    cargo: "Professor Responsável",
    faixa: "Faixa Preta WCF",
    foto: logoWCF,
    bio: "12 anos praticando Jiu-Jitsu, 4 anos como professor e 3 anos de faixa preta formado sob a doutrina, disciplina e excelência do Mestre Wilson Camara.",
    destaques: [
      "Linhagem direta da família WCF Jiu-Jitsu",
      "Metodologia para formação infantil e adulta",
      "Preparação técnica e valores marciais",
    ],
    ctaText: "Falar no WhatsApp",
    ctaMsg: "Olá! Gostaria de mais informações sobre os treinos no Polo da WCF Jiu-Jitsu em João Pessoa com o Prof. Fábio Lauriano!",
    certificados: [],
  },
  {
    cidade: "Nordeste & Brasil",
    nome: "Seja uma Filial Parceira",
    tipoBadge: "Expansão & Novos Polos",
    professor: "Coordenação de Expansão WCF",
    cargo: "Filiação & Suporte Técnico",
    faixa: "Chancela Oficial",
    foto: tatameImg,
    bio: "Tem um projeto ou academia e deseja chancelar sua equipe sob a bandeira de Mestre Wilson Camara Filho? Tenha suporte pedagógico, graduações e filiação oficial.",
    destaques: [
      "Filiação oficial chancelada CBJJE, CBJJ e IBJJF",
      "Seminários técnicos periódicos com Mestre Wilson",
      "Suporte na implantação da metodologia WCF",
    ],
    ctaText: "Falar no WhatsApp",
    ctaMsg: "Olá! Tenho interesse em filiar meu projeto/academia e abrir uma unidade parceira da WCF Jiu-Jitsu!",
    certificados: [],
  },
];

