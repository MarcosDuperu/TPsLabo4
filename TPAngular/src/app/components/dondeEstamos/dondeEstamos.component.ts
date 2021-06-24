import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dondeEstamos',
  templateUrl: './dondeEstamos.component.html',
  styleUrls: ['./dondeEstamos.component.css']
})
export class DondeEstamosComponent implements OnInit {

  constructor() { }
    title= "Donde estamos";
    lat= -32.88632137022122;
    lng= -68.8382777027928;
    zoom= 15;

  ngOnInit(): void {
  }

}
