import { Vehiculo } from './Vehiculo';
import { Detalle } from './Detalles';
export class HojaRuta {
    fecha: Date;
    numero: number;
    vehiculo: Vehiculo;
    detalles: Detalle[]; //lista de detalles


    get getFecha (){
        return this.fecha;
    }

    set setFecha (fecha: Date){
        fecha = this.fecha;
    }

    //para sacar los km total se tiene q restar los km de salida que son los que el 
    //auto posee por los de regreso que fueron los q hizo pero ya sumados los de salida
    calcularTotalKilometro() {
        let kmTotal: number;
        let kmSalida: number;
        let kmRegreso: number;
        let i: number;
        //trae las todas las tablas de detalle
        for( i = 0; i <= this.detalles.length ; i++ ){
                kmSalida += this.detalles[i].getKmSalida;
                kmRegreso += this.detalles[i].getkmRegreso;
        }
            kmTotal = kmSalida - kmRegreso;
        return kmTotal;
    }
}