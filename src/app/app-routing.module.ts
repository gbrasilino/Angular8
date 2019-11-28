import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaFilmeComponent} from './filme/lista-filme/lista-filme.component';
import {HomeComponent} from './home/home/home.component';
import {InserirFilmeComponent} from './filme/inserir-filme/inserir-filme.component';
import {UpdateFilmeComponent} from './filme/update-filme/update-filme.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listar-filmes', component: ListaFilmeComponent},
  {path: 'Inserir-filmes', component: InserirFilmeComponent},
  {path: 'update-filmes/:idf', component: UpdateFilmeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
