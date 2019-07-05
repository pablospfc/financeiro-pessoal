import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {ListCategoriasComponent} from "./categorias/list-categorias/list-categorias.component";
import {ListCredoresComponent} from "./credores/list-credores/list-credores.component";
import {ListReceitasComponent} from "./receitas/list-receitas/list-receitas.component";
import {ListDespesasComponent} from "./despesas/list-despesas/list-despesas.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: ListCategoriasComponent
  },
  {
    path: 'credores',
    component: ListCredoresComponent
  },
  {
    path: 'receitas',
    component: ListReceitasComponent
  },
  {
    path: 'despesas',
    component: ListDespesasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
