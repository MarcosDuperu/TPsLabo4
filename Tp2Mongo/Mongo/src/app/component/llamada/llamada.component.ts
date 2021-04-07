import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/Pais';
import { LlamadaService } from 'src/app/service/llamada.service';
interface Data{
  codigo: number;
  nombre: String;
  capital: String;
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
  pais: any;
  data: undefined;

  ngOnInit(): void {
    this.service.llamar(54).subscribe((p) => {
      this.paises = p;
      
      let data: Data = {
        codigo : this.paises[0].name as number,
        nombre : this.paises[0].name as String,
        capital: this.paises[0].capital as String,
        region: this.paises[0].region as String,
        poblacion: this.paises[0].population as number,
        latitud: this.paises[0].latlng[0] as number,
        longitud: this.paises[0].latlng[1] as number,
      }

      console.log(data);
    });
   
 
  }


}
