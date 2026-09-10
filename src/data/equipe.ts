import ricardoImg from "@/assets/professores/personal-ricardo.jpg";
import dayaneImg from "@/assets/professores/personal-dayane.jpg";
import renallyImg from "@/assets/professores/personal-renally.jpg";
import marcosImg from "@/assets/professores/personal-marcos.jpg";
import radamesImg from "@/assets/professores/personal-radames.jpg";
import renallyDestaqueImg from "@/assets/professores/personal-renally-destaque.png";
import { Professor } from "@/types";

export const PROFESSORES: Professor[] = [
  {
    nome: "Ricardo",
    turno: "Madrugada / Manhã & Domingo",
    horario: "Seg a Sex · 05h–08h | Dom · 08h–14h",
    src: ricardoImg,
  },
  {
    nome: "Dayane",
    turno: "Manhã",
    horario: "Seg a Sex · 08h–13h",
    src: dayaneImg,
  },
  {
    nome: "Renally",
    turno: "Tarde",
    horario: "Seg a Sex · 13h–16h",
    src: renallyImg,
  },
  {
    nome: "Marcos",
    turno: "Fim de Tarde",
    horario: "Seg a Sex · 16h–19h",
    src: marcosImg,
  },
  {
    nome: "Radamés",
    turno: "Noite / Madrugada",
    horario: "Seg a Sex · 19h–00h",
    src: radamesImg,
  },
];

export const PERSONAL_DESTAQUE = {
  nome: "Renally",
  horario: "Seg a Sex · 13h às 16h",
  image: renallyDestaqueImg,
  pilares: [
    {
      titulo: "Treinos Personalizados",
      desc: "Prescrição individualizada voltada para seu objetivo: hipertrofia, emagrecimento ou condicionamento.",
    },
    {
      titulo: "Acompanhamento de Verdade",
      desc: "Correção de postura, ajuste biomecânico e evolução constante com suporte no salão.",
    },
    {
      titulo: "Disciplina, Foco e Transformação",
      desc: "Nosso compromisso diário é levar você com consistência até sua melhor versão física e mental.",
    },
  ],
};
