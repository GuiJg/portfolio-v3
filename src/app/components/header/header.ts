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

  ngOnInit() {
    this.isLightTheme =
      document.documentElement.classList.contains('light-theme');
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
