import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/Pais';
import { PaisMDB } from 'src/app/models/PaisMDB';
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

interface DataMDB {
  codigoPais: number;
  nombrePais: String;
  capitalPais: String;
  region: String;
  poblacion: number;
  latitud: number;
  longitud: number;
  superficie: number;
}

@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html',
  styles: [],
})
export class LlamadaComponent implements OnInit {
  codigoBusqueda: number = 0;
  region: string = '';

  paises: any;
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
  /* Mongo */
  paisBuscado: Pais;
  paisBuscadoMDB: PaisMDB;
  PaisesRegion: PaisMDB[];
  dataMBD: DataMDB;
  public paisMDB: PaisMDB = {
    codigoPais: 0,
    nombrePais: '',
    capitalPais: '',
    region: '',
    poblacion: 0,
    latitud: 0,
    longitud: 0,
    superficie: 0,
  };

  constructor(public service: LlamadaService) {}

  ngOnInit(): void {}

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

  public BuscarGuardar() {
    for (let i = 1; i <= 300; i++) {
      this.service.llamar(i).subscribe((p) => {
        this.paises = p;
        if (p.status != 404) {
          console.log(this.paises);
          this.asignar();
          console.log(this.pais);
          this.service
            .enviar(this.pais)
            .subscribe((pais) => this.paisesRegistrdos.push(pais));
        } else {
          console.log('Elemento no encontrado');
        }
      });
    }
  }

  /* Mongo */

  public BuscarGuardarMDB() {
    for (let i = 1; i <= 300; i++) {
      this.service.llamar(i).subscribe((p) => {
        this.paises = p;
        if (p.status != 404) {
          console.log(this.paises);
          this.asignarMDB();
          console.log(this.pais);
          this.service
            .enviar(this.pais)
            .subscribe((pais) => this.paisesRegistrdos.push(pais));
        } else {
          console.log('Elemento no encontrado');
        }
      });
    }
  }
  private asignarMDB(): void {
    let dataMDB: DataMDB = {
      codigoPais: this.paises[0].callingCodes[0] as number,
      nombrePais: this.paises[0].name as String,
      capitalPais: this.paises[0].capital as String,
      region: this.paises[0].region as String,
      poblacion: this.paises[0].population as number,
      latitud: this.paises[0].latlng[0] as number,
      longitud: this.paises[0].latlng[1] as number,
      superficie: this.paises[0].area as number,
    };
    this.paisMDB = dataMDB;
    console.log(this.paisMDB);
  }

  public traerUno() {
    this.service
      .getById(this.codigoBusqueda)
      .subscribe((p) => (this.paisBuscado = p));
  }

  public traerUnoMDB() {
    this.service
      .getByIdMDB(this.codigoBusqueda)
      .subscribe((p) => (this.paisBuscadoMDB = p));
  }

  public paisesReg() {
    this.service.getByRegion;
  }
}
