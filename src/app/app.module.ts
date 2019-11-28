import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFilmeComponent } from './filme/lista-filme/lista-filme.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { InserirFilmeComponent } from './filme/inserir-filme/inserir-filme.component';
import {FormsModule} from '@angular/forms';
import { UpdateFilmeComponent } from './filme/update-filme/update-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFilmeComponent,
    HomeComponent,
    InserirFilmeComponent,
    UpdateFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
