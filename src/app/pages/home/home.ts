import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SelectModule } from 'primeng/select';

interface ProjectCategory {
  id: string;
  label: string;
  color: string;
}

type ProjectFilterGroupId = 'theme' | 'siteType' | 'origin';

interface ProjectCategoryGroup {
  id: ProjectFilterGroupId;
  label: string;
  description: string;
  categoryIds: string[];
}

interface ProjectTechnology {
  label: string;
  color: string;
  icon?: string;
  textIcon?: string;
}

interface Project {
  image: string;
  title: string;
  categories: string[];
  description: string;
  tags: ProjectTechnology[];
  link: string;
}

interface ServiceDetail {
  title: string;
  eyebrow: string;
  icon: string;
  color: string;
  summary: string;
  description: string;
  idealFor: string;
  features: string[];
  quoteOption: string;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, SelectModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly serviceOptions = [
    { label: 'Landing Page', value: 'Landing Page' },
    { label: 'Site Institucional', value: 'Site Institucional' },
    { label: 'E-commerce', value: 'E-commerce' },
    { label: 'Blog', value: 'Blog' },
    { label: 'Sistema Web', value: 'Sistema Web' },
    { label: 'CRM', value: 'CRM' },
    { label: 'SaaS', value: 'SaaS' },
    { label: 'Personalizado', value: 'Personalizado' },
  ];

  readonly services: ServiceDetail[] = [
    {
      title: 'Landing Page',
      eyebrow: 'Conversão e campanhas',
      icon: 'pi pi-bolt',
      color: '#38bdf8',
      summary: 'Uma página estratégica criada para transformar visitantes em contatos ou vendas.',
      description:
        'A landing page concentra uma oferta, serviço ou campanha em uma jornada objetiva. Cada seção conduz o visitante até uma ação principal, como pedir orçamento, falar no WhatsApp, preencher um formulário ou comprar um produto.',
      idealFor:
        'Lançamentos, anúncios pagos, profissionais autônomos, captação de leads, validação de ideias e divulgação de serviços específicos.',
      features: [
        'Estrutura orientada à conversão',
        'Chamadas para ação bem posicionadas',
        'Formulário e integração com WhatsApp',
        'SEO básico, métricas e responsividade',
      ],
      quoteOption: 'Landing Page',
    },
    {
      title: 'Site Institucional',
      eyebrow: 'Presença e credibilidade',
      icon: 'pi pi-building',
      color: '#6366f1',
      summary: 'A presença digital completa da empresa, organizada em páginas e informações claras.',
      description:
        'Um site institucional apresenta a empresa, seus serviços, diferenciais, equipe, história, portfólio e canais de contato. Ele funciona como referência oficial da marca e ajuda potenciais clientes a entenderem por que devem confiar no negócio.',
      idealFor:
        'Empresas, escritórios, indústrias, clínicas, prestadores de serviço e marcas que precisam fortalecer autoridade e serem encontradas online.',
      features: [
        'Páginas institucionais personalizadas',
        'Arquitetura de conteúdo e navegação',
        'Otimização para mecanismos de busca',
        'Contato, localização e redes sociais',
      ],
      quoteOption: 'Site Institucional',
    },
    {
      title: 'E-commerce',
      eyebrow: 'Vendas online',
      icon: 'pi pi-shopping-cart',
      color: '#f59e0b',
      summary: 'Uma loja virtual preparada para apresentar produtos e realizar vendas pela internet.',
      description:
        'O e-commerce reúne catálogo, categorias, busca, carrinho e checkout em uma experiência segura e fácil de usar. Pode integrar meios de pagamento, cálculo de frete, estoque, pedidos e ferramentas de relacionamento com o cliente.',
      idealFor:
        'Lojas, fabricantes, marcas próprias, negócios locais e empresas que desejam vender produtos ou serviços sem depender apenas de marketplaces.',
      features: [
        'Catálogo, variações e gerenciamento',
        'Carrinho e checkout responsivos',
        'Pagamento, frete e acompanhamento',
        'Painel de pedidos e integrações',
      ],
      quoteOption: 'E-commerce',
    },
    {
      title: 'Blog',
      eyebrow: 'Conteúdo e autoridade',
      icon: 'pi pi-file-edit',
      color: '#a855f7',
      summary: 'Uma plataforma editorial para publicar conteúdos, atrair público e gerar autoridade.',
      description:
        'O blog organiza artigos por categorias, autores e assuntos, permitindo que a empresa responda dúvidas do público e seja encontrada em pesquisas. Também pode apoiar estratégias de conteúdo, newsletter e geração de oportunidades comerciais.',
      idealFor:
        'Empresas que investem em SEO, especialistas, portais de conteúdo, escritórios, escolas, comunidades e produtores de conhecimento.',
      features: [
        'Editor e gerenciamento de publicações',
        'Categorias, busca e páginas de autor',
        'SEO técnico e compartilhamento social',
        'Newsletter, comentários e métricas',
      ],
      quoteOption: 'Blog',
    },
    {
      title: 'Sistema Web',
      eyebrow: 'Processos sob medida',
      icon: 'pi pi-desktop',
      color: '#e879f9',
      summary: 'Uma aplicação personalizada para digitalizar processos e centralizar operações.',
      description:
        'Um sistema web vai além de páginas informativas: ele recebe, processa e organiza dados para executar tarefas específicas do negócio. Pode substituir planilhas, automatizar rotinas e conectar equipes, clientes e serviços externos em um único ambiente.',
      idealFor:
        'Empresas com processos próprios, operações manuais, necessidade de painéis, portais, agendamentos, cadastros, relatórios ou integrações.',
      features: [
        'Login, usuários e níveis de permissão',
        'Painéis, formulários e relatórios',
        'Automação de fluxos operacionais',
        'APIs e integrações com outros serviços',
      ],
      quoteOption: 'Sistema Web',
    },
    {
      title: 'CRM',
      eyebrow: 'Vendas e relacionamento',
      icon: 'pi pi-users',
      color: '#14b8a6',
      summary: 'Um sistema para organizar leads, clientes, negociações e atividades comerciais.',
      description:
        'O CRM centraliza o histórico de relacionamento com cada cliente e oferece uma visão clara do funil de vendas. A equipe consegue acompanhar oportunidades, registrar contatos, programar tarefas e tomar decisões com base em indicadores reais.',
      idealFor:
        'Times comerciais, imobiliárias, consultorias, prestadores de serviço e empresas que precisam acompanhar leads e melhorar o processo de vendas.',
      features: [
        'Cadastro e histórico de clientes',
        'Funil de vendas personalizável',
        'Tarefas, lembretes e responsáveis',
        'Relatórios e integrações de atendimento',
      ],
      quoteOption: 'CRM',
    },
    {
      title: 'SaaS',
      eyebrow: 'Produto digital escalável',
      icon: 'pi pi-cloud',
      color: '#0a84ff',
      summary: 'Um software online oferecido como serviço para vários clientes ou empresas.',
      description:
        'SaaS significa Software as a Service. Nesse modelo, usuários acessam a plataforma pela internet e normalmente contratam planos recorrentes. O produto precisa combinar experiência de uso, segurança, gestão de contas, cobrança e uma arquitetura preparada para crescer.',
      idealFor:
        'Startups, empresas de tecnologia e negócios que desejam transformar uma solução própria em produto comercial por assinatura.',
      features: [
        'Contas, equipes e múltiplas empresas',
        'Planos, assinaturas e pagamentos',
        'Onboarding, permissões e segurança',
        'Métricas, escalabilidade e evolução contínua',
      ],
      quoteOption: 'SaaS',
    },
  ];

  contactRequest = {
    name: '',
    email: '',
    service: '',
    company: '',
    message: '',
  };

  readonly allProjectsCategory: ProjectCategory = {
    id: 'todos',
    label: 'Todos os projetos',
    color: '#0a84ff',
  };

  readonly projectCategories: ProjectCategory[] = [
    this.allProjectsCategory,
    { id: 'contabilidade', label: 'Contabilidade', color: '#22c55e' },
    { id: 'advocacia', label: 'Advocacia', color: '#a855f7' },
    { id: 'ecommerce', label: 'E-commerce', color: '#f59e0b' },
    { id: 'gas', label: 'Gás', color: '#f97316' },
    { id: 'sustentabilidade', label: 'Sustentabilidade', color: '#10b981' },
    { id: 'landing-page', label: 'Landing Page', color: '#38bdf8' },
    { id: 'institucional', label: 'Institucional', color: '#6366f1' },
    { id: 'sistema', label: 'Sistema', color: '#e879f9' },
    { id: 'projeto-real', label: 'Projeto Real', color: '#14b8a6' },
    { id: 'projeto-ficticio', label: 'Projeto Fictício', color: '#fb7185' },
  ];

  readonly projectCategoryGroups: ProjectCategoryGroup[] = [
    {
      id: 'theme',
      label: 'Tema do projeto',
      description: 'Segmento de atuação do cliente',
      categoryIds: ['advocacia', 'contabilidade', 'ecommerce', 'gas', 'sustentabilidade'],
    },
    {
      id: 'siteType',
      label: 'Tipo de site',
      description: 'Formato da solução desenvolvida',
      categoryIds: ['landing-page', 'institucional', 'sistema'],
    },
    {
      id: 'origin',
      label: 'Origem do projeto',
      description: 'Projetos para clientes ou demonstrações',
      categoryIds: ['projeto-real', 'projeto-ficticio'],
    },
  ];

  selectedProjectFilters: Record<ProjectFilterGroupId, string> = {
    theme: '',
    siteType: '',
    origin: '',
  };

  readonly frontendSkills = [
    {
      name: 'Angular',
      icon: 'bx bxl-angular',
      color: '#f43f5e',
    },
    {
      name: 'React',
      icon: 'bx bxl-react',
      color: '#22d3ee',
    },
    {
      name: 'Vite',
      icon: 'pi pi-bolt',
      color: '#facc15',
    },
    {
      name: 'TypeScript',
      icon: 'bx bxl-typescript',
      color: '#38bdf8',
    },
    {
      name: 'JavaScript',
      icon: 'bx bxl-javascript',
      color: '#f7df1e',
    },
    {
      name: 'Tailwind CSS',
      icon: 'bx bxl-tailwind-css',
      color: '#38bdf8',
    },
  ];

  readonly backendSkills = [
    {
      name: 'Java',
      icon: 'bx bxl-java',
      color: '#f97316',
    },
    {
      name: 'Node.js',
      icon: 'bx bxl-nodejs',
      color: '#64d942',
    },
    {
      name: 'MongoDB',
      icon: 'bx bxl-mongodb',
      color: '#4ade80',
    },
    {
      name: 'API REST',
      icon: 'pi pi-server',
      color: '#22d3ee',
    },
    {
      name: 'JSON',
      icon: 'pi pi-code',
      color: '#38bdf8',
    },
  ];

  readonly projects: Project[] = [
    {
      image: 'projetos/naojoguelixo.png',
      title: 'Não Jogue Lixo',
      categories: ['sustentabilidade', 'landing-page', 'sistema', 'projeto-real'],
      description:
        'Plataforma colaborativa para mapeamento de letreiramentos populares.',
      tags: [
        { label: 'Angular', icon: 'bx bxl-angular', color: '#f43f5e' },
        { label: 'Node.js', icon: 'bx bxl-nodejs', color: '#64d942' },
        { label: 'MongoDB', icon: 'bx bxl-mongodb', color: '#4ade80' },
        { label: 'Tailwind', icon: 'bx bxl-tailwind-css', color: '#38bdf8' },
      ],
      link: 'https://naojoguelixo.com.br/',
    },
    {
      image: 'projetos/oxente-cafe.png',
      title: 'Oxente Café',
      categories: ['ecommerce', 'landing-page', 'sistema', 'projeto-ficticio'],
      description:
        'E-commerce responsivo para venda de cafés especiais, com a API do Mercado Pago integrada ao sistema de pagamentos.',
      tags: [
        { label: 'React', icon: 'bx bxl-react', color: '#22d3ee' },
        { label: 'Node.js', icon: 'bx bxl-nodejs', color: '#64d942' },
        { label: 'MongoDB', icon: 'bx bxl-mongodb', color: '#4ade80' },
        { label: 'Tailwind', icon: 'bx bxl-tailwind-css', color: '#38bdf8' },
        { label: 'Mercado Pago', textIcon: 'MP', color: '#00b1ea' },
      ],
      link: 'https://e-commerce-test-react-vite.vercel.app/',
    },
    {
      image: 'projetos/santosmonteiro.png',
      title: 'Santos e Monteiro Advogados',
      categories: ['advocacia', 'institucional', 'sistema', 'projeto-real'],
      description: 'Site institucional para escritório de advocacia com blog integrado.',
      tags: [
        { label: 'React', icon: 'bx bxl-react', color: '#22d3ee' },
        { label: 'Node.js', icon: 'bx bxl-nodejs', color: '#64d942' },
        { label: 'MongoDB', icon: 'bx bxl-mongodb', color: '#4ade80' },
        { label: 'Tailwind', icon: 'bx bxl-tailwind-css', color: '#38bdf8' },
      ],
      link: 'https://santosmonteiro-adv.vercel.app/',
    },
    {
      image: 'projetos/absoluta-contabilidade.png',
      title: 'Absoluta Contabilidade',
      categories: ['contabilidade', 'institucional', 'projeto-real'],
      description:
        'Site institucional para escritório de contabilidade, apresentando serviços e canais de contato.',
      tags: [
        { label: 'Angular', icon: 'bx bxl-angular', color: '#f43f5e' },
        { label: 'TypeScript', icon: 'bx bxl-typescript', color: '#38bdf8' },
        { label: 'Tailwind', icon: 'bx bxl-tailwind-css', color: '#38bdf8' },
      ],
      link: 'https://absoluta-contabilidade.vercel.app/',
    },
    {
      image: 'projetos/family.png',
      title: 'Family Gás',
      categories: ['gas', 'landing-page', 'projeto-real'],
      description:
        'Site institucional para empresa especializada em instalação e manutenção de redes de gás em Cuiabá.',
      tags: [
        { label: 'HTML', icon: 'bx bxl-html5', color: '#f97316' },
        { label: 'CSS', icon: 'bx bxl-css3', color: '#38bdf8' },
        { label: 'JavaScript', icon: 'bx bxl-javascript', color: '#f7df1e' },
      ],
      link: 'https://familygas.com.br/',
    },
    {
      image: 'projetos/gbl-instalacoes.png',
      title: 'GBL Instalações',
      categories: ['gas', 'landing-page', 'projeto-real'],
      description:
        'Landing page para apresentar serviços de instalação e manutenção de redes de gás.',
      tags: [
        { label: 'HTML', icon: 'bx bxl-html5', color: '#f97316' },
        { label: 'CSS', icon: 'bx bxl-css3', color: '#38bdf8' },
        { label: 'JavaScript', icon: 'bx bxl-javascript', color: '#f7df1e' },
      ],
      link: 'https://www.gblinstalacoes.com.br/',
    },
  ];

  get filteredProjects() {
    if (!this.hasActiveProjectFilters) {
      return this.projects;
    }

    return this.projects.filter((project) =>
      this.activeProjectCategoryIds.every((categoryId) =>
        project.categories.includes(categoryId),
      ),
    );
  }

  get activeProjectCategoryIds(): string[] {
    return Object.values(this.selectedProjectFilters).filter(Boolean);
  }

  get selectedProjectFilterLabels(): string[] {
    return this.activeProjectCategoryIds.map(
      (categoryId) => this.getProjectCategory(categoryId).label,
    );
  }

  get hasActiveProjectFilters(): boolean {
    return this.activeProjectCategoryIds.length > 0;
  }

  getProjectCategory(categoryId: string): ProjectCategory {
    return (
      this.projectCategories.find((category) => category.id === categoryId) ??
      this.allProjectsCategory
    );
  }

  isProjectCategorySelected(categoryId: string): boolean {
    return this.activeProjectCategoryIds.includes(categoryId);
  }

  selectProjectCategory(groupId: ProjectFilterGroupId, categoryId: string) {
    this.selectedProjectFilters[groupId] =
      this.selectedProjectFilters[groupId] === categoryId ? '' : categoryId;
  }

  clearProjectFilters() {
    this.selectedProjectFilters = {
      theme: '',
      siteType: '',
      origin: '',
    };
  }

  prepareQuoteFromFilters() {
    const serviceByCategory: Record<string, string> = {
      'landing-page': 'Landing Page',
      institucional: 'Site Institucional',
      sistema: 'Sistema Web',
    };
    const selectedSiteType = this.selectedProjectFilters.siteType;

    if (selectedSiteType) {
      this.contactRequest.service = serviceByCategory[selectedSiteType] ?? 'Personalizado';
    }

    this.contactRequest.message = `Gostaria de solicitar um projeto com estas características: ${this.selectedProjectFilterLabels.join(' + ')}.`;
  }

  selectServiceForQuote(service: string) {
    this.contactRequest.service = service;
  }

  sendWhatsApp(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const name = this.contactRequest.name.trim();
    const email = this.contactRequest.email.trim();
    const service = this.contactRequest.service;
    const company = this.contactRequest.company.trim() || 'Não informada';
    const details = this.contactRequest.message.trim();

    const message = [
      'Olá, José! Gostaria de solicitar um orçamento.',
      '',
      '*DADOS DO CONTATO*',
      `*Nome:* ${name}`,
      `*E-mail:* ${email}`,
      `*Serviço desejado:* ${service}`,
      `*Empresa:* ${company}`,
      '',
      '*DETALHES DO PROJETO*',
      details,
    ].join('\n');

    const whatsappUrl = `https://wa.me/5581986927127?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }
  }
}
