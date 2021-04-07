import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/Pais';
import { LlamadaService } from 'src/app/service/llamada.service';
interface Data {
  codigoPais: number;
  nombrePais: String;
  capitalPais: String;
  region: String;
  poblacion: number;
  latitud: number;
  longitud: number;
}

@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html',
  styles: [],
})
export class LlamadaComponent implements OnInit {
  constructor(public service: LlamadaService) {}

  paises: any[];
  paisesRegistrdos: Pais[];
  data: undefined;
  public pais: Pais = {
    codigoPais: 0,
    nombrePais: '',
    capitalPais: '',
    region: '',
    poblacion: 0,
    latitud: 0,
    longitud: 0,
  };

  ngOnInit(): void {
    this.service.llamar(1).subscribe((p) => {
      this.paises = p;

      this.asignar();
      console.log(this.pais);
      this.service
        .enviar(this.pais)
        .subscribe((pais) => this.paisesRegistrdos.push(pais));
    });
  }

  private asignar(): void {
    let data: Data = {
      codigoPais: this.paises[0].callingCodes[0] as number,
      nombrePais: this.paises[0].name as String,
      capitalPais: this.paises[0].capital as String,
      region: this.paises[0].region as String,
      poblacion: this.paises[0].population as number,
      latitud: this.paises[0].latlng[0] as number,
      longitud: this.paises[0].latlng[1] as number,
    };
    this.pais = data;
    console.log(this.pais);
  }
  public enviarPais(): void {
    this.service.enviar(this.pais);
  }
}
