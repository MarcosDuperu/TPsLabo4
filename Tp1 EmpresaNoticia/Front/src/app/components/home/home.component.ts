import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { BASE_ENDPOINT } from '../../config/app';
@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  baseEndpoint = BASE_ENDPOINT + '/empresa';

  titulo: string;
  empresas: Empresa[];

  constructor( public service: EmpresaService,
    public router: Router,
    public route: ActivatedRoute
  ) { 
    this.titulo = 'Listado de empresas'
  }

  ngOnInit(): void {
  this.service.listar().subscribe( empresas => {
  this.empresas = empresas;
})

    // this.route.paramMap.subscribe((params) => {
    //   const id: number = +params.get('id');
    //   if (id) {
    //     this.service.ver(id).subscribe((m) => {

    //       this.titulo = 'Editar ';
    //     });
    //   }
    // });
  }



}
