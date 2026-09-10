# WCF Academia — Website Oficial

Landing page moderna, responsiva e de alta conversão da **WCF Academia / WCF Jiu-Jitsu / WCF Pilates**, localizada em Campina Grande – PB.

---

## 📌 Sobre o Projeto

A **WCF Academia** foi fundada em 2015 no bairro do Catolé por **Wilson Camara Filho** com o propósito de transformar vidas através do esporte, da saúde e das artes marciais.

Este projeto é uma aplicação web focada em performance, acessibilidade e conversão de novos alunos, integrando canais de atendimento direto via WhatsApp para agendamento de aulas experimentais e apresentação detalhada das instalações, equipe e modalidades.

---

## ✨ Principais Seções e Recursos

* **Hero Section com Carrossel de Banners:** Apresentação dinâmica das principais mensagens com autoplay e call-to-action imediato para aula gratuita.
* **Modalidades:** Destaque para Jiu-Jitsu, Musculação, Pilates, Spinning, Treinamento Funcional, Treino Cardio e Espaço Kids, com links diretos parametrizados para o WhatsApp.
* **Equipe de Personais:** Grade com fotos e horários dos instrutores e personal trainers da musculação.
* **Espaço Pilates & Musculação:** Apresentação dos estúdios com equipamentos profissionais (Reformer, Cadillac, Chair, Barrel) e pesos livres.
* **História & Fundador:** Trajetória da WCF e histórico profissional do fundador Wilson Camara Filho (CREF 007180-G/PB, Faixa Preta 6º Grau CBJJE/CBJJP, 5º Grau CBJJ/IBJJF/AJP).
* **Galeria & Certificados:** Visualização em modal de diplomas, graduações e fotos do tatame e áreas de treino.
* **Unidades WCF:** Divulgação de unidades parceiras (ex.: unidade João Pessoa - PB com Prof. Fábio Lauriano).
* **Grade de Horários & FAQ:** Horários de funcionamento detalhados e acordeão de perguntas frequentes para tirar dúvidas comuns.
* **Captação de Leads:** Formulário para solicitação de aula experimental integrado ao WhatsApp.
* **Localização com Mapa Otimizado:** Mapa do Google Maps carregado sob demanda (*lazy-loading* com `IntersectionObserver`) para manter a performance e tempo de carregamento da página reduzidos.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **React 18** | Biblioteca para construção da interface de usuário |
| **TypeScript** | Tipagem estática para maior segurança e produtividade |
| **Vite 5** | Bundler ultra-rápido com suporte a SWC |
| **Tailwind CSS v3** | Framework de estilização com paleta Dark Mode nativa |
| **shadcn/ui & Radix UI** | Primitivas acessíveis e componentes UI desacoplados |
| **Embla Carousel** | Carrossel leve e responsivo com plugins de autoplay |
| **Lucide Icons** | Biblioteca de ícones modernos e consistentes |
| **React Router DOM v6** | Roteamento client-side |
| **TanStack Query** | Gerenciamento e cache de requisições assíncronas |
| **Vitest & Testing Library** | Framework de testes unitários |

---

## 🛠️ Como Rodar Localmente

### Pré-requisitos
* [Node.js](https://nodejs.org/) versão 18 ou superior instalada
* Gerenciador de pacotes `npm` (incluso com Node)

### 1. Clonar ou Acessar a Pasta do Projeto
```bash
cd wcf-academia-site
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```

O projeto será iniciado localmente. Acesse pelo navegador em:
👉 **`http://localhost:8080`**

---

## 📜 Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR).
* `npm run build`: Gera a versão otimizada para produção na pasta `dist/`.
* `npm run preview`: Executa um servidor local para visualizar a build de produção.
* `npm test`: Executa os testes automatizados com o Vitest.
* `npm run lint`: Executa a análise estática com ESLint.

---

## 📁 Estrutura de Pastas

```text
├── public/                 # Favicon, robôs e imagens estáticas públicas
├── src/
│   ├── assets/             # Imagens, certificados e mídias organizadas por setor
│   ├── constants/          # Constantes do negócio (site.ts, rotas, WhatsApp helpers)
│   ├── types/              # Definições de interfaces e contratos TypeScript
│   ├── data/               # Fonte única da verdade (modalidades, equipe, horários, faq, etc.)
│   ├── components/
│   │   ├── common/         # Componentes compartilhados (ex: SectionHeader)
│   │   ├── layout/         # Componentes de estrutura (Navbar, Footer, WhatsAppFloat)
│   │   ├── sections/       # Todas as seções da landing page isoladas e tipadas
│   │   └── ui/             # Primitivas essenciais ativas do shadcn/ui (accordion, dialog, etc.)
│   ├── hooks/              # Hooks customizados (use-mobile, use-toast)
│   ├── lib/                # Funções utilitárias (cn, tailwind-merge)
│   ├── pages/              # Páginas da aplicação (Index e NotFound)
│   ├── test/               # Arquivos e configuração de testes
│   ├── App.tsx             # Componente raiz com provedores e rotas
│   ├── index.css           # Estilos globais e tokens de tema
│   └── main.tsx            # Ponto de entrada da aplicação
├── index.html              # HTML base com meta tags SEO e Open Graph
├── tailwind.config.ts      # Configuração do Tailwind CSS
├── tsconfig.json           # Configurações TypeScript
└── vite.config.ts          # Configuração do Vite
```

---

## 📍 Localização & Contato

* **Endereço:** Rua Isaac Catão, 530 – Jardim Paulistano, Campina Grande – PB, CEP 58415-240
* **WhatsApp:** [(83) 98138-6488](https://api.whatsapp.com/send?phone=558381386488)

