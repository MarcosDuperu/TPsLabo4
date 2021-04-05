import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_ENDPOINT } from '../config/app';
import { Noticia } from '../models/noticia';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService extends CommonService <Noticia>{
protected baseEndpoint = BASE_ENDPOINT + '/noticias';
  constructor(http:HttpClient) {
    super(http);
   }
}
