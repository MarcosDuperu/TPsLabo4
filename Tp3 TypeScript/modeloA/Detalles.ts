import { HojaRuta } from './HojaRuta';
export class Detalle {
    kmSalida: number;
    kmRegreso: number;
    horaSalida: number;
    horaRegreso: number;
    minutoSalida: number;
    minutoRegreso: number;
    HojaRuta: HojaRuta;


    get getKmSalida(){
        return this.kmSalida;
    }

    set setkmSalida(KmSalida: number){
        KmSalida = this.kmSalida;
    }

    get getkmRegreso(){
        return this.kmSalida;
    }

    set setkmRegreso(kmRegreso: number){
        kmRegreso = this.kmRegreso;
    }
    get getHoraSalida(){
        return this.horaSalida;
    }

    set setHoraSalida(horaSalida: number){
        horaSalida = this.horaSalida;
    }

    get getHoraRegreso(){
        return this.horaRegreso;
    }

    set setHoraRegreso(horaRegreso: number){
        horaRegreso = this.horaRegreso;
    }

    get getMinutoSalida(){
        return this.minutoSalida;
    }

    set setMinutoSalida(minutoSalida: number){
        minutoSalida = this.minutoSalida;
    }
    get getMinutoRegreso(){
        return this.minutoRegreso;
    }

    set setMinutoRegreso(minutoRegreso: number){
        minutoRegreso = this.minutoRegreso;
    }
}