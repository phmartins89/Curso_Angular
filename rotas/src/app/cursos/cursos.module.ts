import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
//import { CursosRoutingModule } from '../routing.module';
//import { CursoFormComponent } from './curso-form/curso-form.component';

@NgModule({
    imports: [
        CommonModule,
        //CursosRoutingModule
        //RouterModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        DetalheCursoComponent,
        CursoNaoEncontradoComponent,
        //CursoFormComponent
    ],
    providers: [CursosService],
})
export class CursosModule { }
