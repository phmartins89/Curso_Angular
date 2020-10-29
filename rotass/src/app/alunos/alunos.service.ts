import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'a1@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'a2@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'a3@email.com' }
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
