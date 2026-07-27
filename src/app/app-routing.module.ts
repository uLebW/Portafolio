import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'trabajos',
    loadChildren: () => import('./pages/trabajos/trabajos.module').then( m => m.TrabajosPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./pages/habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
