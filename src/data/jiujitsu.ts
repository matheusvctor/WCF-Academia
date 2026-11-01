import kidsImg from '@/assets/jiujitsu/jiujitsu-kids.webp';
import femininoImg from '@/assets/jiujitsu/jiujitsu-feminino.webp';
import individualImg from '@/assets/jiujitsu/jiujitsu-individual.webp';
import tatameImg from '@/assets/jiujitsu/jiujitsu-tatame-horarios.webp';
import graduacaoEquipeImg from '@/assets/jiujitsu/graduacao-jiujitsu-equipe.webp';
import graduacaoKidsImg from '@/assets/jiujitsu/graduacao-jiujitsu-kids.webp';
import turmaKids1Img from '@/assets/jiujitsu/turma-jiujitsu-kids-1.webp';
import turmaKids2Img from '@/assets/jiujitsu/turma-jiujitsu-kids-2.webp';
import tatameMestreEquipeImg from '@/assets/jiujitsu/tatame-mestre-wilson-equipe.webp';
import tatameMestreKidsImg from '@/assets/jiujitsu/tatame-mestre-wilson-kids.webp';
import { JiuJitsuFeature, ImageGalleryItem } from '@/types';

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
      'Defesa pessoal efetiva e empoderamento',
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
  {
    title: 'Luta Livre Esportiva',
    subtitle: 'Grappling Sem Kimono (No-Gi)',
    badge: 'Tatame Oficial WCF',
    description: 'Arte marcial brasileira focada em quedas, domínio posicional e finalizações dinâmicas sem o uso do kimono.',
    image: graduacaoEquipeImg,
    highlights: [
      'Técnicas dinâmicas de grappling e submissão (No-Gi)',
      'Desenvolvimento de explosão muscular, agilidade e reflexos',
      'Excelente complemento técnico para Jiu-Jitsu e defesa pessoal',
      'Treinos supervisionados para iniciantes e avançados',
    ],
  },
  {
    title: 'Judô',
    subtitle: 'Tradição Olímpica • Infantil e Adulto',
    badge: 'Formação & Quedas',
    description: 'O caminho suave que desenvolve equilíbrio, projeções precisas, amortecimento de quedas (ukemi) e disciplina marcial.',
    image: graduacaoKidsImg,
    highlights: [
      'Domínio de projeções em pé (Tachi-waza) e solo (Ne-waza)',
      'Aprimoramento da coordenação motora, postura e equilíbrio',
      'Filosofia de respeito mútuo, autocontrole e formação cidadã',
      'Base técnica fundamental para todas as lutas de agarramento',
    ],
  },
];

export const FOTOS_TATAME: ImageGalleryItem[] = [
  {
    src: graduacaoEquipeImg,
    alt: 'Graduação Oficial no Tatame WCF — Equipe completa reunida com Mestre Wilson Camara Filho',
  },
  {
    src: graduacaoKidsImg,
    alt: 'Cerimônia de Graduação Jiu-Jitsu Kids e Adulto no Tatame Oficial WCF',
  },
  {
    src: turmaKids1Img,
    alt: 'Turma Jiu-Jitsu Kids WCF — Disciplina, amizade e formação infantil no tatame',
  },
  {
    src: turmaKids2Img,
    alt: 'Alegria e evolução das crianças na turma de Jiu-Jitsu Kids da WCF Academia',
  },
  {
    src: tatameMestreEquipeImg,
    alt: 'Mestre Wilson Camara Filho e alunos das turmas de lutas no tatame WCF',
  },
  {
    src: tatameMestreKidsImg,
    alt: 'Formação marcial infantil no tatame oficial da WCF Academia',
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
