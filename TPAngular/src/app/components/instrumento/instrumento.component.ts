import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from 'src/app/servicios/instrumento.service';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';

@Component({
  selector: 'app-Instrumento',
  templateUrl: './instrumento.component.html',
})
export class InstrumentoComponent implements OnInit {
  InstrumentosArr: Instrumento[] = [];
  loading = true;

  constructor(
    private instrumentoService: InstrumentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.instrumentoService
      .getInstrumentoFromDataBase()
      .subscribe((dataInstrumentos) => {
        for (let instrumento in dataInstrumentos) {
          this.InstrumentosArr.push(
            dataInstrumentos[instrumento as keyof object]
          );
        }
        this.loading = false;
      });
  }

  public verInstrumento(idx: string) {
    console.log('ID INSTRUMENTO ' + idx);
    this.router.navigate(['/detalleInstrumento', idx]);
  }
}
