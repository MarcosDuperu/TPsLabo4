import { HojaRuta } from './HojaRuta';
import { Detalle } from './Detalles';
export class Vehiculo {
    patente: String;
    marca: String;
    modelo: String;
    hojaRuta: HojaRuta;
    detalles: Detalle;
    calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date) {
     let contadorD = 0;
        //minutos:
     let mS = this.detalles.minutoSalida = fechaDesde.getMinutes();
     let mE =  this.detalles.minutoRegreso = fechaHasta.getMinutes();

      //horas:
     let hS = this.detalles.horaSalida = fechaDesde.getHours();
     let hE =this.detalles.horaRegreso = fechaHasta.getHours();

        
     

        
        

        /*
function calcularDiasAusencia(fechaIni, fechaFin) {
  var diaEnMils = 1000 * 60 * 60 * 24,
      desde = new Date(fechaIni.substr(0, 10)),
      hasta = new Date(fechaFin.substr(0, 10)),
      diff = hasta.getTime() - desde.getTime() + diaEnMils;// +1 incluir el dia de ini
  return diff / diaEnMils;
  var fecha1 = moment("2016-09-30 07:30:00", "YYYY-MM-DD HH:mm:ss");
var fecha2 = moment("2016-10-03 07:30:00", "YYYY-MM-DD HH:mm:ss");

var diff = fecha2.diff(fecha1, 'd'); // Diff in days
console.log(diff);

var diff = fecha2.diff(fecha1, 'h'); // Diff in hours
console.log(diff);
}
    */

    }
}