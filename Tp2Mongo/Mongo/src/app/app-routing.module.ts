import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LlamadaComponent } from './component/llamada/llamada.component';

const routes: Routes = [{ path: 'llamada', component: LlamadaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
