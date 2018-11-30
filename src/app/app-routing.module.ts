import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamenComponent } from './examen/examen.component';
import { OrdenarComponent } from './ordenar/ordenar.component';
import { ResidentesComponent } from './residentes/residentes.component';

const routes: Routes = [
  {
    path: 'personajes/:id', component: ExamenComponent
  },
  {
    path: 'ordenar/:id', component: OrdenarComponent
  },
  {
    path: 'residentes', component: ResidentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
