import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaFilmeComponent} from './filme/lista-filme/lista-filme.component';
import {HomeComponent} from './home/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listar-filmes', component: ListaFilmeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
