import { HojaRuta } from './HojaRuta';

export class Vehiculo {
    patente: String;
    marca: String;
    modelo: String;
    hojasRutas: HojaRuta[]; //lista de hojas de ruta

    //cosntructor:
    constructor( patente:String, marca:String, modelo:String){
        patente = this.patente;
        marca = this.marca;
        modelo = this.modelo;
        
    }

    calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date) {
       let i: number;
       for(i = 0 ; i <= this.hojasRutas.length ; i ++){
           if(this.hojasRutas[i].fecha >= fechaDesde && this.hojasRutas[i].fecha <= fechaHasta){ //valida segun el profe jajaj
               this.hojasRutas[i].calcularTotalKilometro(); //llamada al metodo
           }
       }

        

        
      
        
    }
}

/**
 * 
 *  let mD = fechaDesde.getMinutes();
        let mH = fechaHasta.getMinutes();
        let hD = fechaDesde.getHours();
        let hH = fechaHasta.getHours();
        let dD = fechaDesde.getDay();
        let dH = fechaHasta.getDay();
        let mesD = fechaDesde.getMonth();
        let mesH = fechaHasta.getMonth();
        let aD = fechaDesde.getFullYear();
        let aH = fechaHasta.getFullYear();

        let minutos;
        let kmTotal; //kilometros recorridos total
 * if (fechaDesde == fechaHasta) {
            if (hD == hH) {
                minutos = mH - mD;
                kmTotal = minutos * 100 / 60; //regla de 3 para sacar cuantos km recorrio
                this.hojaRuta.calcularTotalKilometro();//para sacar bien cuanto se recorrio
            } else { //si las HORAS no son iguales *validacion de minutos*
                if (mD == mH) { 
                    minutos = ((hH - hD) * 60 / 1)
                    kmTotal = minutos * 100 / 60; //regla de 3 para sacar cuantos km recorrio
                    this.hojaRuta.calcularTotalKilometro();//para sacar bien cuanto se recorrio
                } else if (mD > mH) {
                    minutos = ((hH - hD) * 60 / 1) + (mH + mD);
                    kmTotal = minutos * 100 / 60; //regla de 3 para sacar cuantos km recorrio
                    this.hojaRuta.calcularTotalKilometro();//para sacar bien cuanto se recorrio
                } else {
                    minutos = ((hH - hD) * 60 / 1) + (mH - mD);
                    kmTotal = minutos * 100 / 60; //regla de 3 para sacar cuantos km recorrio
                    this.hojaRuta.calcularTotalKilometro();//para sacar bien cuanto se recorrio
                }

            }
        }else{  //hacer lo mismo como lo anterior solo q con dias
            console.log("Si las fechas son distintas se utilizan 2 hojas de Ruta");
            if(mesD == mesH){//meses iguales
                if(dD == dH){//dias iguales
                    minutos = 

                }
            }

        }
 */