import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/Pais';

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
}
