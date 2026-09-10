import dayane from "@/assets/professores/personal-dayane.png.asset.json";
import ricardo from "@/assets/professores/personal-ricardo.png.asset.json";
import marcos from "@/assets/professores/personal-marcos.png.asset.json";
import radames from "@/assets/professores/personal-radames.png.asset.json";
import { Professor } from "@/types";

export const PROFESSORES: Professor[] = [
  { src: ricardo.url, nome: "Ricardo", horario: "Seg a Sex · 05h–08h · Dom 08h–14h" },
  { src: dayane.url, nome: "Dayane", horario: "Seg a Sex · 08h–13h" },
  { src: marcos.url, nome: "Marcos", horario: "Seg a Sex · 16h–19h" },
  { src: radames.url, nome: "Radamés", horario: "Seg a Sex · 19h–00h" },
];
