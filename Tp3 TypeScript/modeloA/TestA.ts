import { Vehiculo } from './Vehiculo';

//CREO AUTO 1
let auto1 = new Vehiculo("ABC123","Ford","Ranger");
//ASIGNO 3 HOJAS DE RUTA A 1 AUTO
auto1.hojasRutas[0]
auto1.hojasRutas[1];
auto1.hojasRutas[2];

//ASIGNO VALORES A HOJA DE RUTA

let fecha1 = auto1.hojasRutas[0].fecha = new Date ("2021-07-16");
auto1.hojasRutas[0].numero = 120;

let fecha2 = auto1.hojasRutas[1].fecha = new Date ("2021-06-25");
auto1.hojasRutas[1].numero = 320;

let fecha3 = auto1.hojasRutas[2].fecha = new Date ("2021-08-20");
auto1.hojasRutas[2].numero = 360;

////ASIGNO A CADA HOJA DE RUTA UN DETALLE 
auto1.hojasRutas[0].detalles[0];
auto1.hojasRutas[0].detalles[1];
auto1.hojasRutas[0].detalles[2];

auto1.hojasRutas[1].detalles[3];
auto1.hojasRutas[1].detalles[4];
auto1.hojasRutas[1].detalles[5];

auto1.hojasRutas[2].detalles[6];
auto1.hojasRutas[2].detalles[7];
auto1.hojasRutas[2].detalles[8];

//ASIGNO VALORES A HOJA DE  RUTA 0

auto1.hojasRutas[0].detalles[0].kmSalida = 200;
auto1.hojasRutas[0].detalles[0].kmRegreso = 300;
auto1.hojasRutas[0].detalles[0].horaSalida = 10;
auto1.hojasRutas[0].detalles[0].horaRegreso=11;
auto1.hojasRutas[0].detalles[0].minutoSalida=30;
auto1.hojasRutas[0].detalles[0].minutoRegreso=20;

auto1.hojasRutas[0].detalles[1].kmSalida = 400;
auto1.hojasRutas[0].detalles[1].kmRegreso = 500;
auto1.hojasRutas[0].detalles[1].horaSalida = 30;
auto1.hojasRutas[0].detalles[1].horaRegreso=21;
auto1.hojasRutas[0].detalles[1].minutoSalida=40;
auto1.hojasRutas[0].detalles[1].minutoRegreso=30;

auto1.hojasRutas[0].detalles[2].kmSalida = 320;
auto1.hojasRutas[0].detalles[2].kmRegreso = 100;
auto1.hojasRutas[0].detalles[2].horaSalida = 40;
auto1.hojasRutas[0].detalles[2].horaRegreso=31;
auto1.hojasRutas[0].detalles[2].minutoSalida=50;
auto1.hojasRutas[0].detalles[2].minutoRegreso=10;
//ASIGNO VALORES A HOJA DE  RUTA 1
auto1.hojasRutas[1].detalles[3].kmSalida =500;
auto1.hojasRutas[1].detalles[3].kmRegreso = 200;
auto1.hojasRutas[1].detalles[3].horaSalida = 20;
auto1.hojasRutas[1].detalles[3].horaRegreso=17;
auto1.hojasRutas[1].detalles[3].minutoSalida=27;
auto1.hojasRutas[1].detalles[3].minutoRegreso=36;

auto1.hojasRutas[1].detalles[4].kmSalida = 220;
auto1.hojasRutas[1].detalles[4].kmRegreso = 450;
auto1.hojasRutas[1].detalles[4].horaSalida = 19;
auto1.hojasRutas[1].detalles[4].horaRegreso=20;
auto1.hojasRutas[1].detalles[4].minutoSalida=5;
auto1.hojasRutas[1].detalles[4].minutoRegreso=40;

auto1.hojasRutas[1].detalles[5].kmSalida = 380;
auto1.hojasRutas[1].detalles[5].kmRegreso = 180;
auto1.hojasRutas[1].detalles[5].horaSalida = 22;
auto1.hojasRutas[1].detalles[5].horaRegreso=10;
auto1.hojasRutas[1].detalles[5].minutoSalida=35;
auto1.hojasRutas[1].detalles[5].minutoRegreso=5;
//ASIGNO VALORES A HOJA DE  RUTA 2
auto1.hojasRutas[2].detalles[6].kmSalida = 380;
auto1.hojasRutas[2].detalles[6].kmRegreso = 220;
auto1.hojasRutas[2].detalles[6].horaSalida = 30;
auto1.hojasRutas[2].detalles[6].horaRegreso=15;
auto1.hojasRutas[2].detalles[6].minutoSalida=49;
auto1.hojasRutas[2].detalles[6].minutoRegreso=38;

auto1.hojasRutas[2].detalles[7].kmSalida = 550;
auto1.hojasRutas[2].detalles[7].kmRegreso = 450;
auto1.hojasRutas[2].detalles[7].horaSalida = 23;
auto1.hojasRutas[2].detalles[7].horaRegreso=24;
auto1.hojasRutas[2].detalles[7].minutoSalida=33;
auto1.hojasRutas[2].detalles[7].minutoRegreso=35;

auto1.hojasRutas[2].detalles[8].kmSalida = 350;
auto1.hojasRutas[2].detalles[8].kmRegreso = 120;
auto1.hojasRutas[2].detalles[8].horaSalida = 15;
auto1.hojasRutas[2].detalles[8].horaRegreso=20;
auto1.hojasRutas[2].detalles[8].minutoSalida=25;
auto1.hojasRutas[2].detalles[8].minutoRegreso=40;

document.body.innerHTML = String("El total de kilometros recorridos entre un rango de fechas es : "  + auto1.calcularTotalKilometrosRecorridos(fecha1,fecha2));

document.body.innerHTML = String("El total de kilometros recorridos para la Hoja de Ruta 2 es: " + auto1.hojasRutas[2].calcularTotalKilometro());



   
   













