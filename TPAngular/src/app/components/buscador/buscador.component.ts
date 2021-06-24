import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstrumentoService } from 'src/app/servicios/instrumento.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  instrumentosBusqueda: any = [];
  termino!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioInstrumento: InstrumentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.servicioInstrumento
        .getInstrumentoBusquedaFromDataBase(this.termino)
        .subscribe((dataIntrumento) => {
          for (let instrumento in dataIntrumento) {
            this.instrumentosBusqueda.push(
              dataIntrumento[instrumento as keyof object]
            );
          }
        });
    });
  }

  public verInstrumento(idx: string) {
    this.router.navigate(['/detalleInstrumento', idx]);
  }
}
