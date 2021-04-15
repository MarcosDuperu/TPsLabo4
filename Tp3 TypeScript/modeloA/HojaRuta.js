export class HojaRuta {
    calcularTotalKilometro() {
        let kmTotal;
        let kmSalida;
        let kmRegreso;
        let i;
        //trae las todas las tablas de detalle
        for (i = 0; i <= this.detalles.length; i++) {
            kmSalida += this.detalles[i].getKmSalida; //agrega y suma los km de salida
            kmRegreso += this.detalles[i].getkmRegreso; //agrega y suma los km de regreso
        }
        if (kmSalida != 0) {
            kmTotal = kmSalida - kmRegreso; //resta los km de salida por los de regreso para tener el total recorrido
        }
        else {
            kmTotal = kmRegreso;
        }
        return kmTotal;
    }
}
