import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const APP_ROUTES:  Routes = [
    {path: 'cursos', component: CursosComponent},
    {path: 'curso/:id', component: DetalheCursoComponent},
    {path: 'login', component: LoginComponent },
    {path: '', component: HomeComponent },
    {path: 'naoEncontrado', component:CursoNaoEncontradoComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
