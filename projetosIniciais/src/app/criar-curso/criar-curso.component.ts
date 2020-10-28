//import { CursosService } from './../../../primeiro-projeto/src/app/cursos/cursos.service';
import { CursosService } from '../cursosRaiz/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

    cursos: string [] = [];

  constructor(private CursosService: CursosService) { }

  ngOnInit() {

    this.cursos = this.CursosService.getCursos()

  }

  onAddCurso(curso: string){
    this.CursosService.addCurso(curso);
  }

}
