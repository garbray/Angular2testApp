import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'detail/:id',
    component: MovieDetailComponent
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
