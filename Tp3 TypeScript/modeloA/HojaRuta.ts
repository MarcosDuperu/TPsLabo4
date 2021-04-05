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

    calcularTotalKilometro() {
        let totalKm: number;

        totalKm = this.detalle.getKmSalida + this.detalle.getRegreso;

        return totalKm;
    }
}