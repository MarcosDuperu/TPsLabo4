import { Vehiculo } from './Vehiculo';
import { Detalle } from './Detalles';
export class HojaRuta {
    fecha: Date;
    numero: number;
    vehiculo: Vehiculo[];
    detalle: Detalle;


    get getFecha (){
        return this.fecha;
    }

    set setFecha (fecha: Date){
        fecha = this.fecha;
    }

    //para sacar los km total se tiene q restar los km de salida que son los que el 
    //auto posee por los de regreso que fueron los q hizo pero ya sumados los de salida
    calcularTotalKilometro() {
        let totalKm: number;
        totalKm = this.detalle.getKmSalida - this.detalle.getRegreso;
        return totalKm;
    }
}