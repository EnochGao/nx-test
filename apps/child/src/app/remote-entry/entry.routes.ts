import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: 'lazy',
    component: RemoteEntryComponent,
    loadChildren: () => import('../lazy/lazy.module').then((m) => m.LazyModule),
  },
];
