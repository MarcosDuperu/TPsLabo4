import { Articulo } from "./Articulo";
import { Factura } from "./Factura";

export class DetalleFactura{

    cantidad: number;
    subtotal: number;
    factura: Factura;
    articulo: Articulo;


    calcularSubtotal(){ //REVISAR
        this.subtotal = this.articulo.precio;
        return this.subtotal;
    }
}