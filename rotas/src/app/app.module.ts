import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import {routing} from './app.routing';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { DetalheCursoComponent } from './cursos/detalhe-curso/detalhe-curso.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';
import { AuthService } from './login/auth.service';
import { CursosGuard } from './guards/cursos.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    AppRoutingModule,
    CursosModule,
    AlunosModule,
    FormsModule,
    routing,
     
  ],
  providers: [
    AuthService, 
    AuthGuard,
    CursosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
