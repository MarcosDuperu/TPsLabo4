import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { InstrumentoService } from 'src/app/servicios/instrumento.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-instrumento-lista',
  templateUrl: './instrumento-lista.component.html',
})
export class InstrumentoListaComponent implements OnInit {
  instrumentos: Instrumento[] = [];
  loading = true;
  constructor(
    private instrumentoService: InstrumentoService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.instrumentoService.getInstrumentoFromDataBase().subscribe((data) => {
      console.log(data);
      for (let instrumento in data) {
        console.log(data[instrumento as keyof object]);
        this.instrumentos.push(data[instrumento as keyof object]);
      }
      this.loading = false;
    });
  }
  delete(idInstrumento: string) {
    var opcion = confirm('Esta seguro que desea eliminar el instrumento?');
    if (opcion == true) {
      this.instrumentoService
        .deleteInstrumento(idInstrumento)
        .subscribe((data) => {
          console.log(data);
          location.reload();
        });
    }
  }
}
