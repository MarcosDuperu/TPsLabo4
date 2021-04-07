import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";


export class Factura {
    letra: String;
    numero: number;
    recargo: number;
    tipoPago: String;
    totalItems: String;
    totalFinal: String;
    fecha: Date;
    cliente: Cliente;
    detalleFactura: DetalleFactura[];
    
    calcularTotalItems(){
        let i:number;
      let  totalI:number;
        for(i = 0; i <= this.detalleFactura.length ; i ++){
            totalI += this.detalleFactura[i].calcularSubtotal(); //en una variable sumo todos los subtotales
        }
       return this.totalItems = String ( totalI ); //casteo para asignar a total Items
    }

    calcularTotalFinal(){
       return this.totalFinal = String ( this.recargo + (Number(this.calcularTotalItems())));
    }
}