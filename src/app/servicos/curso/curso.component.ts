import { from } from 'rxjs';
import { Component, OnInit} from '@angular/core';

import { CursoService } from './curso.service';



@Component({
  selector: 'app-cursoss',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  
  cursos: string[]= [];
  //cursosService: CursoService;

  constructor( private cursosService: CursoService)
  {
    //this.cursosService = new CursoService();
    //this.cursosService= _cursosService;
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
