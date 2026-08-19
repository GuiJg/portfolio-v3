import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    @if (!isStandalonePage()) {
      <app-header></app-header>
    }
    <router-outlet></router-outlet>
    @if (!isStandalonePage()) {
      <app-footer></app-footer>
    }
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-v3');
  readonly isStandalonePage = signal(
    typeof window !== 'undefined' && window.location.pathname.startsWith('/conexoes'),
  );

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isStandalonePage.set(event.urlAfterRedirects.startsWith('/conexoes'));
      }
    });
  }
}
