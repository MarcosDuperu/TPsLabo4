import { HojaRuta } from './HojaRuta';
import { Detalle } from './Detalles';
export class Vehiculo {
    patente: String;
    marca: String;
    modelo: String;
    hojaRuta: HojaRuta;
    detalles: Detalle;

    calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date) {
        let mD = fechaDesde.getMinutes();
        let mH = fechaHasta.getMinutes();
        let hD = fechaDesde.getHours();
        let hH = fechaHasta.getHours();
        let minutos;
        let kmTotal; //kilometros recorridos total
        if (fechaDesde == fechaHasta) {
            if (fechaDesde.getHours() == fechaHasta.getHours()) {
                minutos = mH - mD;
                kmTotal = minutos * 100 / 60; //regla de 3 para sacar cuantos km recorrio
                this.hojaRuta.calcularTotalKilometro();//para sacar bien cuanto se recorrio
            } else { //si las fechas no son iguales
                if(mD == mH){ //validacion de minutos
                    minutos = ((hH - hD)*60/1)
                    kmTotal = minutos * 100 / 60; //regla de 3 para sacar cuantos km recorrio
                    this.hojaRuta.calcularTotalKilometro();//para sacar bien cuanto se recorrio
                }else if(mD > mH){
                    minutos = ((hH - hD)*60/1) + (mH + mD);
                    kmTotal = minutos * 100 / 60; //regla de 3 para sacar cuantos km recorrio
                    this.hojaRuta.calcularTotalKilometro();//para sacar bien cuanto se recorrio
                }else{
                    minutos = ((hH - hD)*60/1) + (mH - mD);
                    kmTotal = minutos * 100 / 60; //regla de 3 para sacar cuantos km recorrio
                    this.hojaRuta.calcularTotalKilometro();//para sacar bien cuanto se recorrio
                }
                
            }
        }
        //hacer lo mismo como lo anterior solo q con dias

    }





}