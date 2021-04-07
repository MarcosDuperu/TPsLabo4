import { Articulo } from "./Articulo";
import { Factura } from "./Factura";

export class DetalleFactura{

    cantidad: number;
    subtotal: number;
    factura: Factura;
    articulo: Articulo;


    calcularSubtotal(){//creo q la relacion es alrevez pero el profe quiere esto
        this.subtotal = this.articulo.precio;
        return this.subtotal;
    }
}