import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-v3');
}
