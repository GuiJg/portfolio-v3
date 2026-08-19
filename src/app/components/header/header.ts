import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLightTheme = false;
  isMenuOpen = false;
  isSupportPage = false;

  ngOnInit() {
    this.isLightTheme = document.documentElement.classList.contains('light-theme');
    this.isSupportPage =
      window.location.hostname.toLowerCase() === 'suporte.josepessoa.dev.br' ||
      window.location.pathname.startsWith('/suporte');
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    document.documentElement.classList.toggle('light-theme', this.isLightTheme);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
