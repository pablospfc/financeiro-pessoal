import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoriasModule} from './categorias/categorias.module';
import {CredoresModule} from './credores/credores.module';
import {DespesasModule} from './despesas/despesas.module';
import {ReceitasModule} from './receitas/receitas.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoriasModule,
    CredoresModule,
    DespesasModule,
    ReceitasModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
