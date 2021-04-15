import { Vehiculo } from './Vehiculo';
import { Detalle } from './Detalles';
export class HojaRuta{
    fecha: Date;
    numero: number;
    vehiculo: Vehiculo;
    detalles: Detalle[]; //lista de detalles

    calcularTotalKilometro() {
        let kmTotal: number;
        let kmSalida: number;
        let kmRegreso: number;
        let i: number;
        //trae las todas las tablas de detalle
        for( i = 0; i <= this.detalles.length ; i++ ){
                kmSalida += this.detalles[i].getKmSalida; //agrega y suma los km de salida
                kmRegreso += this.detalles[i].getkmRegreso; //agrega y suma los km de regreso
        }
        if( kmSalida != 0){
            kmTotal = kmSalida - kmRegreso; //resta los km de salida por los de regreso para tener el total recorrido
        }else{
            kmTotal = kmRegreso;
        }
            
        return kmTotal;
    }
}