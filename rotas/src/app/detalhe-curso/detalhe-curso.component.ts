import { CursosService } from './../../../../rotas/src/app/cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private cursosService: CursosService) {
    //this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(  
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        if(this.curso == null){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy() {
    {
      this.inscricao.unsubscribe();
    }
  }

}
