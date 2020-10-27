import { CursosService } from './../../primeiro-projeto/src/app/cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.compenent';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

  import { from } from 'rxjs';
import { CursoComponent } from './servicos/curso/curso.component';
import {CursoService} from './servicos/curso/curso.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    CursoComponent,
    CriarCursoComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    CursosModule      
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
