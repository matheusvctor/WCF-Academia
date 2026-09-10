import kidsImg from '@/assets/jiujitsu/jiujitsu-kids.jpg';
import femininoImg from '@/assets/jiujitsu/jiujitsu-feminino.jpg';
import individualImg from '@/assets/jiujitsu/jiujitsu-individual.jpg';
import tatameImg from '@/assets/jiujitsu/jiujitsu-tatame-horarios.jpg';
import { JiuJitsuFeature } from '@/types';

export const JIU_JITSU_KIDS_HERO = {
  title: 'Jiu-Jitsu Kids WCF',
  subtitle: 'Disciplina, autoconfiança e desenvolvimento para o futuro do seu filho',
  badge: '1ª MENSALIDADE FREE',
  badgeSub: 'Válido para crianças de até 10 anos',
  image: kidsImg,
  tagline: 'O esporte que ensina respeito, concentração e prepara para a vida.',
  beneficios: [
    {
      titulo: 'Disciplina & Foco Escolar',
      descricao: 'Desenvolve a atenção, concentração nas tarefas e rotina equilibrada dentro e fora de casa.',
      icone: 'Brain',
    },
    {
      titulo: 'Antibullying & Defesa Pessoal',
      descricao: 'Ensina a criança a se proteger de forma não agressiva, desenvolvendo postura firme e segurança.',
      icone: 'ShieldCheck',
    },
    {
      titulo: 'Coordenação Motora & Saúde',
      descricao: 'Estimula agilidade, flexibilidade, equilíbrio e resistência física prevenindo o sedentarismo infantil.',
      icone: 'Sparkles',
    },
    {
      titulo: 'Respeito & Socialização',
      descricao: 'Ambiente familiar e acolhedor onde seu filho aprende a respeitar colegas, professores e regras.',
      icone: 'HeartHandshake',
    },
  ],
};

export const JIU_JITSU_MODALIDADES: JiuJitsuFeature[] = [
  {
    title: 'Jiu-Jitsu Kids',
    subtitle: 'Até 10 anos',
    badge: '1ª Mensalidade FREE',
    description: 'Turmas infantis com metodologia lúdica e focada na disciplina, motricidade e valores marciais.',
    image: kidsImg,
    highlights: [
      'Ambiente 100% seguro com tatame profissional',
      'Professores especializados em ensino infantil',
      'Desenvolvimento do foco, autocontrole e respeito',
      'Condição especial para novos alunos mirins',
    ],
  },
  {
    title: 'Jiu-Jitsu Feminino',
    subtitle: 'Turma Exclusiva para Mulheres',
    badge: '1ª Mensalidade FREE',
    description: 'Espaço dedicado ao fortalecimento, autoconfiança feminina, condicionamento intenso e defesa pessoal prática.',
    image: femininoImg,
    highlights: [
      'Turmas exclusivas femininas',
      'Defesa pessoal efetiva e emponderamento',
      'Alta queima calórica e condicionamento físico',
      'Treino dinâmico em ambiente respeitoso',
    ],
  },
  {
    title: 'Jiu-Jitsu Individual & Adulto',
    subtitle: 'Todos os Níveis (Iniciante ao Avançado)',
    price: 'R$ 60,00 / mês',
    badge: 'Vagas Limitadas',
    description: 'Treinamento técnico completo no tatame oficial WCF com acompanhamento de mestre graduado.',
    image: individualImg,
    highlights: [
      'Mensalidade super acessível de apenas R$ 60,00',
      'Fundamentos, passagens, raspagens e finalizações',
      'Graduação oficial reconhecida',
      'Vagas limitadas por turma para máxima atenção técnica',
    ],
  },
];

export const JIU_JITSU_TATAME_INFO = {
  image: tatameImg,
  horarios: [
    { dia: 'Segunda-feira', horario: '20h00' },
    { dia: 'Terça-feira', horario: '10h00 e 19h30' },
    { dia: 'Quarta-feira', horario: '20h00' },
    { dia: 'Quinta-feira', horario: '10h00 e 19h30' },
    { dia: 'Sexta-feira', horario: '20h00' },
    { dia: 'Sábado', horario: '09h00 (Aulão Geral)' },
  ],
};
