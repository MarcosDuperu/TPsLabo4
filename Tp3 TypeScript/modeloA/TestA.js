import { Detalle } from './Detalles';
import { HojaRuta } from './HojaRuta';
//PRUEBO METODOS DE VEHICULO
//let prueba1 = new Vehiculo("ABC123","Ford","Ranger");
let prueba2 = new Detalle();
let prueba3 = new HojaRuta();
//let fecha2 = new HojaRuta();
////fecha2.fecha = new Date("30-04-2021");
//prueba1.calcularTotalKilometrosRecorridos(fecha1,fecha2);
//PRUEBO METODOS DE  HOJA RUTA
//PRUEBO METODOS DE DETALLES
prueba2.kmSalida = 300;
prueba2.kmRegreso = 200;
console.log(prueba3.calcularTotalKilometro());
/*
var fecha1 = new Date();
fecha1.setTime(Date.parse('05/03/2021'));
var fecha2 = new Date();
fecha2.setTime(Date.parse('05/04/2021'));


console.log(prueba1.calcularTotalKilometrosRecorridos(fecha1,fecha2));*/
