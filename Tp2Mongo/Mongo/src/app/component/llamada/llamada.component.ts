import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/Pais';
import { LlamadaService } from 'src/app/service/llamada.service';

@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html',
  styles: [],
})
export class LlamadaComponent implements OnInit {
  constructor(public service: LlamadaService) {}

  public paises: any[];
  public pais: Pais;

  ngOnInit(): void {
    this.service.llamar(54).subscribe((p) => {
      this.paises = p;
    });
    /* this.asignacion(); */
    console.log(this.paises[0]);
  }

  private asignacion(): void {
    this.pais.codigo = this.paises[0].callingCodes;
    this.pais.nombre = this.paises[0].name;
    this.pais.capital = this.paises[0].capital;
    this.pais.region = this.paises[0].region;
  }
}
