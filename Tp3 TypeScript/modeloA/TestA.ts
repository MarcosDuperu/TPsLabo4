import { Vehiculo } from './Vehiculo';
import { Detalle } from './Detalles';
import { HojaRuta } from './HojaRuta';


//CREO AUTO 1
let auto1 = new Vehiculo("ABC123","Ford","Ranger");


let prueba2 = new Detalle();
let hojaderuta1 = new HojaRuta();

//ASIGNO 3 HOJAS DE RUTA A 1 AUTO
auto1.hojasRutas[0];
auto1.hojasRutas[1];
auto1.hojasRutas[2];

////ASIGNO A CADA HOJA DE RUTA UN DETALLE 
auto1.hojasRutas[0].detalles[0];
auto1.hojasRutas[0].detalles[1];
auto1.hojasRutas[0].detalles[2];

auto1.hojasRutas[1].detalles[0];
auto1.hojasRutas[1].detalles[1];
auto1.hojasRutas[1].detalles[2];

auto1.hojasRutas[2].detalles[0];
auto1.hojasRutas[2].detalles[1];
auto1.hojasRutas[2].detalles[2];

//ASIGNO ATRIBUTOS A HOJA DE  RUTA 0
auto1.hojasRutas[0].detalles[0].kmSalida = 200;
auto1.hojasRutas[0].detalles[1].kmRegreso = 300;
auto1.hojasRutas[0].detalles[0].horaSalida = 10;
auto1.hojasRutas[0].detalles[0].horaRegreso=11;
auto1.hojasRutas[0].detalles[0].minutoSalida=30;
auto1.hojasRutas[0].detalles[0].minutoRegreso=20;

//ASIGNO ATRIBUTOS A HOJA DE  RUTA 0
auto1.hojasRutas[1].detalles[1].kmSalida =500;
auto1.hojasRutas[1].detalles[1].kmRegreso = 200;
auto1.hojasRutas[1].detalles[1].horaSalida = 20;
auto1.hojasRutas[1].detalles[1].horaRegreso=23;
auto1.hojasRutas[1].detalles[1].minutoSalida=10;
auto1.hojasRutas[1].detalles[1].minutoRegreso=40;

//ASIGNO ATRIBUTOS A HOJA DE  RUTA 0
auto1.hojasRutas[2].detalles[2].kmSalida = 400;
auto1.hojasRutas[2].detalles[2].kmRegreso = 150;
auto1.hojasRutas[2].detalles[2].horaSalida = 30;
auto1.hojasRutas[2].detalles[2].horaRegreso=20;
auto1.hojasRutas[2].detalles[2].minutoSalida=10;
auto1.hojasRutas[2].detalles[2].minutoRegreso=30;

















////fecha2.fecha = new Date("30-04-2021");
//prueba1.calcularTotalKilometrosRecorridos(fecha1,fecha2);


//PRUEBO METODOS DE  HOJA RUTA



//PRUEBO METODOS DE DETALLES










/*
var fecha1 = new Date();
fecha1.setTime(Date.parse('05/03/2021'));
var fecha2 = new Date();
fecha2.setTime(Date.parse('05/04/2021'));


console.log(prueba1.calcularTotalKilometrosRecorridos(fecha1,fecha2));*/

   
   













