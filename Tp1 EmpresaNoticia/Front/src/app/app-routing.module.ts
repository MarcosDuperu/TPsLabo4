import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiaComponent } from './components/noticia/noticia.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'buscar/:termino', component:BuscadorComponent},
{path:'empresa', component:EmpresaComponent},
{path:'empresa/:id', component:EmpresaComponent},
{path:'noticia', component:NoticiaComponent },
{path:'noticia/:id', component:NoticiaComponent },
{ path: '', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
