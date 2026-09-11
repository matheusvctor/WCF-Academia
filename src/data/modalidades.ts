import jiuJitsuKidsAsset from "@/assets/jiujitsu/jiujitsu-kids.webp";
import musculacaoAsset from "@/assets/musculacao/post-treino-pernas.webp";
import pilatesAsset from "@/assets/banners/banner-pilates-qualidade.webp";
import spinningAsset from "@/assets/aulas/aula-spinning.webp";
import stepAsset from "@/assets/aulas/aula-step.webp";
import muayThaiAsset from "@/assets/aulas/aula-muaythai.webp";
import localizadaAsset from "@/assets/aulas/aula-localizada.webp";
import jiuJitsuAsset from "@/assets/jiujitsu/jiujitsu-tatame-horarios.webp";
import { Modalidade } from "@/types";

export const MODALIDADES: Modalidade[] = [
  {
    name: "Musculação",
    tag: "Força & Saúde",
    desc: "Equipamentos profissionais e 5 personais de plantão cobrindo das 05h à 00h para o seu melhor treino.",
    image: musculacaoAsset,
  },
  {
    name: "Jiu-Jitsu Kids",
    tag: "Infantil & Disciplina",
    desc: "Tatame seguro, foco, respeito e 1ª Mensalidade FREE para crianças de até 10 anos.",
    image: jiuJitsuKidsAsset,
  },
  {
    name: "Studio Pilates",
    tag: "Postura & Bem-estar",
    desc: "Estúdio completo com Reformer, Cadillac, Chair e Barrel, além de aulas de Pilates Solo e Alongamento.",
    image: pilatesAsset,
  },
  {
    name: "Spinning",
    tag: "Cardio Intenso",
    desc: "Sessões dinâmicas com bikes profissionais todas as terças às 19h30. Alta queima calórica.",
    image: spinningAsset,
  },
  {
    name: "Aulão de Step",
    tag: "Ritmo & Queima",
    desc: "Aulas coletivas cheias de energia às segundas e quartas às 19h00 com instrutores dedicados.",
    image: stepAsset,
  },
  {
    name: "Muay Thai",
    tag: "Arte Marcial",
    desc: "Defesa, agilidade e condicionamento extremo às terças e quintas às 18h00.",
    image: muayThaiAsset,
  },
  {
    name: "Aula Localizada",
    tag: "Definição",
    desc: "Fortalecimento muscular e resistência localizada todas as sextas às 19h00.",
    image: localizadaAsset,
  },
  {
    name: "Jiu-Jitsu Adulto",
    tag: "Tatame Oficial",
    desc: "Aulas técnicas com mestre graduado, turmas masculinas e femininas com mensalidade a partir de R$ 60.",
    image: jiuJitsuAsset,
  },
  {
    name: "Espaço Kids",
    tag: "Família",
    desc: "Espaço infantil exclusivo para você treinar com tranquilidade enquanto seus filhos se divertem.",
    image: jiuJitsuKidsAsset,
  },
];
