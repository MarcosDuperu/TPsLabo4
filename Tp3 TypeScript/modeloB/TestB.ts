import { Articulo } from "./Articulo";
import { Factura } from "./Factura";
import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";

let testDetalle = new DetalleFactura();

testDetalle.subtotal=300;

console.log(testDetalle.calcularSubtotal());

