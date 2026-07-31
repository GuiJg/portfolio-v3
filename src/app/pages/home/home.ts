import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly projectCategories = [
    { id: 'todos', label: 'Todos' },
    { id: 'contabilidade', label: 'Contabilidade' },
    { id: 'advocacia', label: 'Advocacia' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'gas', label: 'Gás' },
    { id: 'sustentabilidade', label: 'Sustentabilidade' },
  ];

  selectedProjectCategory = 'todos';

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

  readonly projects = [
    {
      image: 'projetos/naojoguelixo.png',
      title: 'Não Jogue Lixo',
      category: 'sustentabilidade',
      categoryLabel: 'Sustentabilidade',
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
      category: 'ecommerce',
      categoryLabel: 'E-commerce',
      description: 'E-commerce responsivo para venda de cafés especiais.',
      tags: [
        { label: 'React', icon: 'bx bxl-react', color: '#22d3ee' },
        { label: 'Node.js', icon: 'bx bxl-nodejs', color: '#64d942' },
        { label: 'MongoDB', icon: 'bx bxl-mongodb', color: '#4ade80' },
        { label: 'Tailwind', icon: 'bx bxl-tailwind-css', color: '#38bdf8' },
      ],
      link: 'https://e-commerce-test-react-vite.vercel.app/',
    },
    {
      image: 'projetos/santosmonteiro.png',
      title: 'Santos e Monteiro Advogados',
      category: 'advocacia',
      categoryLabel: 'Advocacia',
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
      category: 'contabilidade',
      categoryLabel: 'Contabilidade',
      description:
        'Site institucional para escritório de contabilidade, apresentando serviços e canais de contato.',
      tags: [
        { label: 'Angular', icon: 'bx bxl-angular', color: '#f43f5e' },
        { label: 'TypeScript', icon: 'bx bxl-typescript', color: '#38bdf8' },
        { label: 'Tailwind', icon: 'bx bxl-tailwind-css', color: '#38bdf8' },
      ],
      link: '',
    },
    {
      image: 'projetos/family.png',
      title: 'Family Gás',
      category: 'gas',
      categoryLabel: 'Gás',
      description:
        'Site institucional para empresa especializada em instalação e manutenção de redes de gás em Cuiabá.',
      tags: [
        { label: 'HTML', icon: 'bx bxl-html5', color: '#f97316' },
        { label: 'CSS', icon: 'bx bxl-css3', color: '#38bdf8' },
        { label: 'JavaScript', icon: 'bx bxl-javascript', color: '#f7df1e' },
      ],
      link: 'https://familygas.com.br/',
    },
  ];

  get filteredProjects() {
    if (this.selectedProjectCategory === 'todos') {
      return this.projects;
    }

    return this.projects.filter(
      (project) => project.category === this.selectedProjectCategory,
    );
  }

  selectProjectCategory(category: string) {
    this.selectedProjectCategory = category;
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
