import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path: '',
  loadComponent: () => import('./pages/index-page/index-page.component').then(m => m.IndexPageComponent)
}];
