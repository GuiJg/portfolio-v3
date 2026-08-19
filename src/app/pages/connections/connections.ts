import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

interface ConnectionLink {
  title: string;
  description: string;
  url: string;
  icon: string;
  accent: string;
  actionLabel: string;
}

@Component({
  selector: 'app-connections',
  imports: [],
  templateUrl: './connections.html',
  styleUrl: './connections.css',
})
export class Connections implements OnInit, OnDestroy {
  private readonly meta = inject(Meta);
  private feedbackTimer?: ReturnType<typeof setTimeout>;

  private readonly socialMetaTags: MetaDefinition[] = [
    {
      property: 'og:title',
      content: 'Conexões | José Pessoa',
    },
    {
      property: 'og:description',
      content: 'Desenvolvimento web, suporte técnico e canais de contato de José Pessoa.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://josepessoa.dev.br/conexoes' },
    {
      property: 'og:image',
      content: 'https://josepessoa.dev.br/og-conexoes.png',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Conexões | José Pessoa' },
    {
      name: 'twitter:description',
      content: 'Desenvolvimento web, suporte técnico e canais de contato de José Pessoa.',
    },
    {
      name: 'twitter:image',
      content: 'https://josepessoa.dev.br/og-conexoes.png',
    },
  ];

  isLightTheme = false;
  shareFeedback = '';

  readonly links: ConnectionLink[] = [
    {
      title: 'Desenvolvimento web',
      description: 'Sites, landing pages, sistemas e soluções digitais sob medida.',
      url: 'https://josepessoa.dev.br/',
      icon: 'pi pi-code',
      accent: '#0a84ff',
      actionLabel: 'Conhecer meu trabalho com desenvolvimento web',
    },
    {
      title: 'Suporte técnico em TI',
      description: 'Formatação, manutenção, upgrades e assistência para computadores.',
      url: 'https://suporte.josepessoa.dev.br/',
      icon: 'pi pi-wrench',
      accent: '#11d9fc',
      actionLabel: 'Conhecer os serviços de suporte técnico em TI',
    },
    {
      title: 'Fale comigo no WhatsApp',
      description: 'Solicite um orçamento ou conte como posso ajudar no seu projeto.',
      url: `https://wa.me/5581986927127?text=${encodeURIComponent(
        'Olá, José! Encontrei sua página de conexões e gostaria de conversar sobre um serviço.',
      )}`,
      icon: 'pi pi-whatsapp',
      accent: '#25d366',
      actionLabel: 'Conversar com José Pessoa pelo WhatsApp',
    },
    {
      title: 'Instagram profissional',
      description: 'Conteúdos, projetos e bastidores do meu trabalho em @jgui.dev.',
      url: 'https://www.instagram.com/jgui.dev/',
      icon: 'pi pi-instagram',
      accent: '#e1306c',
      actionLabel: 'Acessar o Instagram profissional @jgui.dev',
    },
  ];

  ngOnInit(): void {
    this.isLightTheme = document.documentElement.classList.contains('light-theme');
    this.meta.updateTag({
      name: 'description',
      content:
        'Encontre os serviços de desenvolvimento web e suporte técnico de José Pessoa, além dos canais de contato profissional.',
    });

    for (const tag of this.socialMetaTags) {
      this.meta.updateTag(tag);
    }
  }

  ngOnDestroy(): void {
    if (this.feedbackTimer) {
      clearTimeout(this.feedbackTimer);
    }

    this.meta.updateTag({
      name: 'description',
      content:
        'Portfólio de José Pessoa, desenvolvedor full-stack focado em aplicações web modernas, escaláveis e performáticas.',
    });

    for (const tag of this.socialMetaTags) {
      const selector = 'property' in tag ? `property="${tag.property}"` : `name="${tag.name}"`;
      this.meta.removeTag(selector);
    }
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    document.documentElement.classList.toggle('light-theme', this.isLightTheme);
  }

  async sharePage(): Promise<void> {
    const shareData = {
      title: 'Conexões | José Pessoa',
      text: 'Desenvolvimento web, suporte técnico e canais de contato de José Pessoa.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        this.showFeedback('Página compartilhada!');
        return;
      }

      await this.copyPageUrl();
      this.showFeedback('Link copiado!');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }

      this.showFeedback('Não foi possível compartilhar.');
    }
  }

  private async copyPageUrl(): Promise<void> {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(window.location.href);
      return;
    }

    const temporaryInput = document.createElement('textarea');
    temporaryInput.value = window.location.href;
    temporaryInput.style.position = 'fixed';
    temporaryInput.style.opacity = '0';
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand('copy');
    temporaryInput.remove();
  }

  private showFeedback(message: string): void {
    this.shareFeedback = message;

    if (this.feedbackTimer) {
      clearTimeout(this.feedbackTimer);
    }

    this.feedbackTimer = setTimeout(() => {
      this.shareFeedback = '';
    }, 2600);
  }
}
