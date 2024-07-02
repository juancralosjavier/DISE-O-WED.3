import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { GestionClientesComponent } from './views/gestion-clientes/gestion-clientes.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: GestionClientesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

