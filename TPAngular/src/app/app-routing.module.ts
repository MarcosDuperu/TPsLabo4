import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DondeEstamosComponent } from './components/dondeEstamos/dondeEstamos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InstrumentoListaComponent } from './components/instrumento-lista/instrumento-lista.component';
import { InstrumentoAdminComponent } from './components/instrumento-admin/instrumento-admin.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dondeEstamos', component: DondeEstamosComponent },
  { path: 'instrumento', component: InstrumentoComponent },
  { path: 'detalleInstrumento/:id', component: DetalleInstrumentoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'lista', component: InstrumentoListaComponent },
  { path: 'admin/:id', component: InstrumentoAdminComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
