import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoNaoEncontradoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}