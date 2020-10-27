import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: string[] = ['Java','Ext JavaScript', 'Angular' ];

  constructor() { 
    console.log('CursosService');
    }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
