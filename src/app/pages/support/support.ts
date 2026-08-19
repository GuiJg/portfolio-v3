import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

interface SupportService {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

interface ExtraService {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-support',
  imports: [],
  templateUrl: './support.html',
  styleUrl: './support.css',
})
export class Support implements OnInit, OnDestroy {
  private readonly meta = inject(Meta);

  readonly whatsappLink = `https://wa.me/5581986927127?text=${encodeURIComponent(
    'Olá, José! Gostaria de solicitar um orçamento de suporte técnico. Meu equipamento ou necessidade é:',
  )}`;

  readonly mainServices: SupportService[] = [
    {
      title: 'Formatação de computadores',
      description:
        'Formatação completa de notebooks e desktops para recuperar desempenho e começar com um sistema organizado.',
      icon: 'pi pi-desktop',
      items: ['Instalação limpa', 'Drivers atualizados', 'Programas essenciais'],
    },
    {
      title: 'Windows personalizado',
      description:
        'Instalação do Windows preparada de acordo com o uso do computador, sem programas desnecessários.',
      icon: 'pi pi-cog',
      items: ['Configuração inicial', 'Atualizações do sistema', 'Ajustes de desempenho'],
    },
    {
      title: 'Conserto de desktops',
      description:
        'Diagnóstico de falhas em computadores de mesa, substituição de peças e testes de funcionamento.',
      icon: 'pi pi-wrench',
      items: ['Diagnóstico de hardware', 'Troca de componentes', 'Testes após o reparo'],
    },
    {
      title: 'Redes e cabeamento básico',
      description:
        'Organização dos pontos de rede existentes para deixar conexões mais confiáveis e fáceis de identificar.',
      icon: 'pi pi-sitemap',
      items: ['Crimpagem RJ45', 'Teste de cabos', 'Organização e identificação'],
    },
    {
      title: 'Limpeza e prevenção',
      description:
        'Limpeza interna para reduzir poeira, aquecimento e ruídos que prejudicam o equipamento com o tempo.',
      icon: 'pi pi-shield',
      items: ['Limpeza interna', 'Troca de pasta térmica', 'Verificação de temperaturas'],
    },
    {
      title: 'Upgrade de hardware',
      description:
        'Avaliação e instalação de melhorias simples para aumentar velocidade, espaço e vida útil do computador.',
      icon: 'pi pi-bolt',
      items: ['Instalação de SSD', 'Memória RAM', 'Migração de arquivos'],
    },
  ];

  readonly extraServices: ExtraService[] = [
    {
      title: 'Remoção de vírus',
      description: 'Verificação de ameaças, programas indesejados e configurações suspeitas.',
      icon: 'pi pi-shield',
    },
    {
      title: 'Programas e drivers',
      description:
        'Instalação e configuração dos aplicativos e drivers necessários para o uso diário.',
      icon: 'pi pi-download',
    },
    {
      title: 'Backup e transferência',
      description:
        'Cópia e migração organizada de documentos, fotos e arquivos entre computadores.',
      icon: 'pi pi-folder',
    },
    {
      title: 'Impressoras e periféricos',
      description: 'Configuração básica de impressoras, webcams, teclados e outros dispositivos.',
      icon: 'pi pi-print',
    },
    {
      title: 'Wi-Fi e roteadores',
      description:
        'Configuração simples de roteadores, senha, nome da rede e conexão dos dispositivos.',
      icon: 'pi pi-wifi',
    },
    {
      title: 'Montagem de computador',
      description: 'Montagem, organização dos componentes e primeiros testes de uma nova máquina.',
      icon: 'pi pi-box',
    },
    {
      title: 'Computador lento',
      description: 'Análise de inicialização, armazenamento e programas que afetam o desempenho.',
      icon: 'pi pi-chart-line',
    },
    {
      title: 'Tentativa de recuperação',
      description:
        'Avaliação inicial de arquivos apagados ou unidades com falha, sem promessa de recuperação.',
      icon: 'pi pi-database',
    },
  ];

  readonly steps = [
    {
      number: '01',
      title: 'Conte o problema',
      description: 'Envie uma mensagem explicando o que está acontecendo e qual é o equipamento.',
    },
    {
      number: '02',
      title: 'Diagnóstico inicial',
      description: 'Faço as primeiras perguntas e combinamos a melhor forma de avaliar o serviço.',
    },
    {
      number: '03',
      title: 'Orçamento e aprovação',
      description: 'Você recebe a explicação do serviço e aprova o orçamento antes da execução.',
    },
    {
      number: '04',
      title: 'Serviço e testes',
      description: 'O atendimento é realizado e o equipamento passa por testes antes da conclusão.',
    },
  ];

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Assistência técnica de computadores: formatação, instalação de Windows, manutenção de desktops e notebooks, upgrades e cabeamento de rede básico.',
    });
  }

  ngOnDestroy(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Portfólio de José Pessoa, desenvolvedor full-stack focado em aplicações web modernas, escaláveis e performáticas.',
    });
  }
}
