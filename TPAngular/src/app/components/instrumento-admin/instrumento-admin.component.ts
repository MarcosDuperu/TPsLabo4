import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from 'src/app/servicios/instrumento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-instrumento-admin',
  templateUrl: './instrumento-admin.component.html',
})
export class InstrumentoAdminComponent implements OnInit {
  instrumento: Instrumento = {
   id:"0",
  instrumento: "",
  precio: "",
  envio: "",
  marca: "",
  modelo:"",
  costoEnvio:"",
  cantidadVendida:"",
  imagen: "",
  descripcion:""
  };
  new = false;
  idinstrumento!: string;
  resultadoOperacion = '';

  constructor(
    private instrumentoService: InstrumentoService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe((parametros) => {
      this.idinstrumento = parametros['id'];
      if (this.idinstrumento != 'nuevo') {
        instrumentoService
          .getInstrumentoEnBaseDatosXId(this.idinstrumento)
          .subscribe(
            (instrumentoEncontrado) =>
              (this.instrumento = instrumentoEncontrado as Instrumento)
          );
      } else {
        console.log('ES NUEVO');
      }
    });
  }

  ngOnInit() {}

  save() {
    if (!this.validarSiNumero(this.instrumento.precio)) {
      this.resultadoOperacion = 'Ingrese un numero para el precio.';
      return;
    }
    if (this.idinstrumento === 'nuevo') {
      console.log('nuevo');
      this.instrumentoService.newInstrumento(this.instrumento).subscribe(
        (data) => {
          if (data && data.id) {
            this.resultadoOperacion = 'Operación finalizada con exito';
            this.router.navigate(['/admin', data.id]);
          } else {
            this.resultadoOperacion =
              'Error en la operación, verifique los datos';
          }
        },
        (error) => console.error(error)
      );
    } else {
      console.log(`Update ${this.idinstrumento}`);
      this.instrumentoService.updateInstrumento(this.instrumento).subscribe(
        (data) => {
          if (data && data.id) {
            this.resultadoOperacion = 'Operación finalizada con exito';
            this.router.navigate(['/lista']);
            console.log(data);
          } else {
            this.resultadoOperacion =
              'Error en la operación, verifique los datos';
          }
        },
        (error) => console.error(error)
      );
    }
  }

  addNew(formu: NgForm) {
    this.router.navigate(['/admin', 'nuevo']);
    formu.reset({
      id: '0',
      instrumento: '',
      precio: '',
      marca: '',
      modelo: '',
      envio: '',
      costoEnvio: '',
      cantidadVendida: '',
      imagen: '',
      descripcion: '',
    });
  }

  validarSiNumero(numero: string): boolean {
    if (!/^([0-9])*$/.test(numero)) return false;
    return true;
  }
}
