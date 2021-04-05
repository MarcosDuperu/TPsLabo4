import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* import { map }from 'rxjs/operators'; */
import { Empresa } from '../models/empresa';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app'

@Injectable({
  providedIn: 'root',
})
export class EmpresaService extends CommonService<Empresa> {
  protected baseEndpoint = BASE_ENDPOINT + '/empresa';

  constructor(http: HttpClient) {
    super(http);
  }

  public listarById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseEndpoint}/${id}`);
  }
}
