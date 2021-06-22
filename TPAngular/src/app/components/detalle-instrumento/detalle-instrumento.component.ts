import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { InstrumentoService } from 'src/app/servicios/instrumento.service';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
})
export class DetalleInstrumentoComponent implements OnInit {
  instrumento!: Instrumento;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private servicioInstrumento: InstrumentoService
  ) {
    this.ActivatedRoute.params.subscribe((params) => {
      this.servicioInstrumento
        .getInstrumentoEnBaseDatosXId(params['id'])
        .subscribe((instrumentoEncontrado) => {
          this.instrumento = instrumentoEncontrado as Instrumento;
        });
    });
  }

  ngOnInit(): void {}
}
