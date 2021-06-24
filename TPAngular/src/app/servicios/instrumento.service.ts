import { Injectable } from '@angular/core';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Instrumento } from '../entidades/Instrumento';

@Injectable({
  providedIn: 'root',
})
export class InstrumentoService {
  public instrumentoData: Instrumento[] = [];
  public InstrumentoEncontrado!: Instrumento;

  constructor(public http: HttpClient) {
    console.log('Servicio Cargado!!!');
  }

  public getInstrumentos(): any[] {
    return this.instrumentoData;
    console.log(this.instrumentoData);
  }

  public getInstrumentoXId(idx: string): any {
    for (let instrumento of this.instrumentoData) {
      if (instrumento.id == idx) {
        return instrumento;
      }
    }
  }

  getInstrumentoFromDataBase() {
    return this.http
      .get('http://localhost:9000/api/v1/instrumentos/all')
      .pipe(map((instrumentoData) => instrumentoData));
  }

  getInstrumentoEnBaseDatosXId(idx: string) {
    return this.http
      .get('http://localhost:9000/api/v1/instrumentos/' + idx)
      .pipe(map((instrumentoEncontrado) => instrumentoEncontrado));
  }

  getInstrumentoBusquedaFromDataBase(termino: string) {
    return this.http
      .get('http://localhost:9000/api/v1/instrumentos/search?filtro=' + termino)
      .pipe(map((instrumentoSearch) => instrumentoSearch));
  }

  instrumentoAdminUrl: string = 'http://localhost:9000/api/v1/instrumentos/';
  newInstrumento(instrumentoNuevo: Instrumento) {
    return this.http.post<Instrumento>(
      this.instrumentoAdminUrl,
      instrumentoNuevo
    );
  }

  updateInstrumento(instrumentoUpdate: Instrumento) {
    return this.http.put<Instrumento>(
      this.instrumentoAdminUrl + instrumentoUpdate.id,
      instrumentoUpdate
    );
  }

  deleteInstrumento(id: string) {
    return this.http.delete<Instrumento>(this.instrumentoAdminUrl + id);
  }
}
