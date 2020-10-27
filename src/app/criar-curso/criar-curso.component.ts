//import { CursosService } from './../../../primeiro-projeto/src/app/cursos/cursos.service';
import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

    cursos: string [] = [];

  constructor(private CursosService: CursosService) { }

  ngOnInit() {

    this.cursos = this.CursosService.getCursos()

  }

}
