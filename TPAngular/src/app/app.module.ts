import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DondeEstamosComponent } from './components/dondeEstamos/dondeEstamos.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InstrumentoService } from './servicios/instrumento.service';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ItemInstrumentoComponent } from './components/item-instrumento/item-instrumento.component';

import { HttpClientModule } from '@angular/common/http';
import { InstrumentoListaComponent } from './components/instrumento-lista/instrumento-lista.component';
import { InstrumentoAdminComponent } from './components/instrumento-admin/instrumento-admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DondeEstamosComponent,
    InstrumentoComponent,
    DetalleInstrumentoComponent,
    BuscadorComponent,
    ItemInstrumentoComponent,
    InstrumentoListaComponent,
    InstrumentoAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [InstrumentoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
