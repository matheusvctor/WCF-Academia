export interface CertificacaoOficial {
  sigla: string;
  titulo: string;
  entidade: string;
  descricao: string;
  tipo: "artes-marciais" | "educacao-fisica" | "saude";
  anoOuGrau: string;
}

export const CERTIFICACOES_OFICIAIS: CertificacaoOficial[] = [
  {
    sigla: "CBJJE",
    titulo: "Faixa Preta 6º Grau",
    entidade: "Confederação Brasileira de Jiu-Jitsu Esportivo",
    descricao: "Graduação de alto mestre expedida pela maior confederação esportiva do país.",
    tipo: "artes-marciais",
    anoOuGrau: "6º Grau",
  },
  {
    sigla: "CBJJ / IBJJF",
    titulo: "Faixa Preta 5º Grau",
    entidade: "International Brazilian Jiu-Jitsu Federation",
    descricao: "Reconhecimento internacional e filiação às máximas entidades mundiais de Jiu-Jitsu.",
    tipo: "artes-marciais",
    anoOuGrau: "5º Grau",
  },
  {
    sigla: "AJP",
    titulo: "Certificação Internacional Faixa Preta",
    entidade: "Abu Dhabi Jiu-Jitsu Pro",
    descricao: "Homologação internacional para atuação em competições e formação de atletas de elite.",
    tipo: "artes-marciais",
    anoOuGrau: "Oficial",
  },
  {
    sigla: "CREF",
    titulo: "Bacharel & Licenciatura Plena",
    entidade: "Conselho Regional de Educação Física (007180-G/PB)",
    descricao: "Habilitação formal para prescrição, orientação e condução de treinamentos esportivos.",
    tipo: "educacao-fisica",
    anoOuGrau: "007180-G/PB",
  },
  {
    sigla: "CORE 360º",
    titulo: "Treinador Funcional Certificado",
    entidade: "Core 360º Training System",
    descricao: "Especialização em padrões fundamentais de movimento, estabilização e performance.",
    tipo: "educacao-fisica",
    anoOuGrau: "Certificado",
  },
  {
    sigla: "PILATES",
    titulo: "Instrutor Internacional de Pilates",
    entidade: "Metodologia Clássica & Aparelhos",
    descricao: "Capacitação completa em Reformer, Cadillac, Chair, Barrel e Mat Pilates.",
    tipo: "saude",
    anoOuGrau: "Studio & Solo",
  },
  {
    sigla: "3ª IDADE",
    titulo: "Prescrição para Longevidade",
    entidade: "Fisiologia & Treinamento Adaptado",
    descricao: "Especialização em prevenção de sarcopenia, osteoporose e manutenção da autonomia motora.",
    tipo: "saude",
    anoOuGrau: "Especialista",
  },
  {
    sigla: "FISIO",
    titulo: "Biomecânica & Prevenção de Lesões",
    entidade: "Extensão em Fisioterapia Esportiva",
    descricao: "Conhecimento avançado em alinhamento cinemático, reabilitação articular e correção postural.",
    tipo: "saude",
    anoOuGrau: "Extensão",
  },
];

// Compatibilidade retroativa
export const CERTIFICADOS: string[] = [];
