import {​​​​​ NgModule }​​​​​ from '@angular/core';
import {​​​​​ RouterModule, Routes }​​​​​ from "@angular/router";
import {​​​​​ HomeComponent }​​​​​ from './home/home.component';
import {​​​​​ LoginComponent }​​​​​ from './login/login.component';
import {​​​​​ AuthGuard }​​​​​ from './guards/auth.guard';
import {​​​​​ CursosGuard }​​​​​ from './guards/cursos.guard';
//import {​​​​​ AlunosGuard }​​​​​ from './guards/alunos.guard';
//import {​​​​​ PaginaNaoEncontradaComponent }​​​​​ from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {CursosComponent} from './cursos/cursos.component'
import {DetalheCursoComponent} from './cursos/detalhe-curso/detalhe-curso.component';

const appRoutes: Routes = [
   
    {​​​​​​​
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
        // canActivate: [AuthGuard],
    }​​​​​​​,
    
    { path: 'alunos',
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard],
        //canActivateChild: [AlunosGuard]
        canLoad: [AuthGuard]
    },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: DetalheCursoComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'home', component: HomeComponent,
        canActivate: [AuthGuard] 
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: '**', component: PaginaNaoEncontradaComponent } //, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}