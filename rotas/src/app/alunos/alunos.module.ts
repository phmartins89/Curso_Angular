import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent, 
        AlunoDetalheComponent],
    providers: [AlunosService],
})

export class AlunosModule {}