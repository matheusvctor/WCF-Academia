import { HorarioFuncionamento, AulaColetiva, HorarioJiuJitsu } from "@/types";

export const HORARIOS_FUNCIONAMENTO: HorarioFuncionamento[] = [
  { dia: "Segunda à Sexta", horario: "05h00 – 00h00" },
  { dia: "Sábado", horario: "08h00 – 12h00 · 14h00 – 17h00" },
  { dia: "Domingo", horario: "08h00 – 14h00" },
];

export const AGENDA_AULAS: AulaColetiva[] = [
  { dia: "Segunda", aulas: "19h00 – Step · 19h40 – Dança" },
  { dia: "Terça", aulas: "18h00 – Muay Thai · 18h40 – Pilates Solo e Alongamento · 19h30 – Spinning" },
  { dia: "Quarta", aulas: "19h00 – Step · 19h40 – Dança" },
  { dia: "Quinta", aulas: "18h00 – Muay Thai · 18h40 – Pilates Solo e Alongamento" },
  { dia: "Sexta", aulas: "19h00 – Localizada" },
];

export const HORARIOS_JIU_JITSU: HorarioJiuJitsu[] = [
  { dia: "Segunda-feira", horario: "20h00" },
  { dia: "Terça-feira", horario: "10h00 e 19h30" },
  { dia: "Quarta-feira", horario: "20h00" },
  { dia: "Quinta-feira", horario: "10h00 e 19h30" },
  { dia: "Sexta-feira", horario: "20h00" },
  { dia: "Sábado", horario: "09h30" },
];
