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
    
}