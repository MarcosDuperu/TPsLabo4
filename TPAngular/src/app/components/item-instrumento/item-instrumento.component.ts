import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-instrumento',
  templateUrl: './item-instrumento.component.html',
})
export class ItemInstrumentoComponent implements OnInit {
  @Input() instrumentoAux!: Instrumento;
  @Input() index!: string;

  @Output() instrumentoSeleccionado: EventEmitter<string>;

  constructor(private router: Router) {
    this.instrumentoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  public verInstrumento() {
    console.log(this.index);
    this.instrumentoSeleccionado.emit(this.index);
  }
}
