"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var i;
        tipoPago.toUpperCase;
        for (i = 0; i <= this.factura.length; i++) {
            if (this.factura[i].tipoPago == tipoPago) {
                if ('E') {
                    console.log("Usted realizo un pago en Efectivo, monto a pagar $", this.factura[i].totalFinal);
                }
                if ('TD') {
                    console.log("Usted realizo un pago con Tarjeta de Debito, monto a pagar $", this.factura[i].totalFinal);
                }
                if ('TC') {
                    console.log("Usted realizo un pago con Tarjeta de Credito, monto a pagar $", this.factura[i].totalFinal);
                }
                if ('CC') {
                    console.log("Usted realizo un pago a Cuenta Corriente, monto a pagar $", this.factura[i].totalFinal);
                }
                if ('TR') {
                    console.log("Usted realizo un pago mediante Trasnferencia, monto a pagar $", this.factura[i].totalFinal);
                }
            }
            if (tipoPago == null) {
                this.factura[i].totalFinal;
            }
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
