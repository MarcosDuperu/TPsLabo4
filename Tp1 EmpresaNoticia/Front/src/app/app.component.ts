import { Component } from '@angular/core';
var jsfeat = require ("src/assets/js/device.min.js");
var jsfeat = require ("src/assets/js/rd-smoothscroll.min.js");
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/css/google-map.css','../assets/css/search.css']
})
export class AppComponent {
  title = 'TP1-laboratorio4';
}
