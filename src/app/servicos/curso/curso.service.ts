import { Injectable } from '@angular/core';


@Injectable()

export class CursoService{
    getCursos(){
        return['Angular 2','Java','php'];
    }
}