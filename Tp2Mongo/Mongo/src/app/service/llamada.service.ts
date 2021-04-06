import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LlamadaService {
  constructor(public http: HttpClient) {}

  public llamar(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `https://restcountries.eu/rest/v2/callingcode/${id}`
    );
  }
}
