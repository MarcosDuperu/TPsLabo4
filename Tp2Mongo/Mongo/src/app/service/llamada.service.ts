import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/Pais';
import { PaisMDB } from '../models/PaisMDB';

@Injectable({
  providedIn: 'root',
})
export class LlamadaService {
  private cabeceras: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  public llamar(id: number): Observable<any> {
    var response = this.http.get<any>(
      `https://restcountries.eu/rest/v2/callingcode/${id}`
    );
    if (response instanceof ErrorEvent) {
      return null;
    } else {
      return response;
    }
  }

  public enviar(pais: Pais): Observable<Pais> {
    console.log('Enviado' + pais);
    return this.http.post<Pais>(
      `http://localhost:9000/api/v1/pais/guardar`,
      pais,
      {
        headers: this.cabeceras,
      }
    );
  }

  public getById(id: number): Observable<Pais> {
    return this.http.get<Pais>(
      `http://localhost:9000/api/v1/pais/buscar/codigo/${id}`
    );
  }
  /*
Mongo

 */
  public enviarMDB(pais: Pais): Observable<PaisMDB> {
    console.log('Enviado' + pais);
    return this.http.post<PaisMDB>(
      `http://localhost:9000/api/v1/pais/guardarmdb`,
      pais,
      {
        headers: this.cabeceras,
      }
    );
  }

  public getByIdMDB(id: number): Observable<PaisMDB> {
    return this.http.get<PaisMDB>(
      `http://localhost:9000/api/v1/pais/buscarmdb/codigo${id}`
    );
  }

  public getByRegion(region: string): Observable<PaisMDB[]> {
    return this.http.get<PaisMDB[]>(
      `http://localhost:9000/api/v1/pais/buscarmdb/region/${region}`
    );
  }

  public getAmerpb(): Observable<PaisMDB[]> {
    return this.http.get<PaisMDB[]>(
      `http://localhost:9000/api/v1/pais/buscarmdb/americaspob`
    );
  }

  public getNotAfrican(): Observable<PaisMDB[]> {
    return this.http.get<PaisMDB[]>(
      `http://localhost:9000/api/v1/pais/buscarmdb/africane`
    );
  }

  public putEgyp(): Observable<PaisMDB> {
    return this.http.put<PaisMDB>(
      `http://localhost:9000/api/v1/pais/updatemdb/egypt`,
      {}
    );
  }

  public deletePais(): Observable<PaisMDB> {
    return this.http.delete<PaisMDB>(
      `http://localhost:9000/api/v1/pais/deletepais`,
      {}
    );
  }

  public searchPob(): Observable<PaisMDB[]> {
    return this.http.get<PaisMDB[]>(
      `http://localhost:9000/api/v1/pais/buscarmdb/poblacion`,
      {}
    );
  }

  public orderAsc(): Observable<PaisMDB[]> {
    return this.http.get<PaisMDB[]>(
      `http://localhost:9000/api/v1/pais/buscarmdb/ordenasc`,
      {}
    );
  }

  public searSkip(): Observable<PaisMDB[]> {
    return this.http.get<PaisMDB[]>(
      `http://localhost:9000/api/v1/pais/buscarmdb/skip/3`,
      {}
    );
  }
}
