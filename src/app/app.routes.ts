import { CanMatchFn, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Support } from './pages/support/support';

const isSupportSubdomain: CanMatchFn = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.location.hostname.toLowerCase() === 'suporte.josepessoa.dev.br';
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Support,
    canMatch: [isSupportSubdomain],
    title: 'Suporte Técnico | José Pessoa',
  },
  {
    path: 'suporte',
    component: Support,
    title: 'Suporte Técnico | José Pessoa',
  },
  {
    path: '',
    pathMatch: 'full',
    component: Home,
    title: 'Portfólio - José Pessoa',
  },
];
