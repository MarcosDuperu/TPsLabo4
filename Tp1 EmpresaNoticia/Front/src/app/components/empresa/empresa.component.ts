import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { BASE_ENDPOINT } from '../../config/app';
@Injectable()
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  baseEndpoint = BASE_ENDPOINT + '/empresa';

  titulo: string;
  empresa: Empresa;

  constructor( public service: EmpresaService,
    public router: Router,
    public route: ActivatedRoute
  ) { 
    this.titulo = 'Componente Empresa'
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: number = +params.get('id');
      if (id) {
        this.service.ver(id).subscribe((empresa) => {
          this.empresa = empresa;
          this.titulo = 'Visualizando ' + empresa.denominacion;
      });
    }
  });

  }

}
