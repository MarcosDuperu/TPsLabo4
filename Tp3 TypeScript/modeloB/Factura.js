"use strict";
exports.__esModule = true;
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura() {
    }
    Factura.prototype.calcularTotalItems = function () {
        var i;
        var totalI;
        for (i = 0; i <= this.detalleFactura.length; i++) {
            totalI += this.detalleFactura[i].calcularSubtotal(); //en una variable sumo todos los subtotales
        }
        return this.totalItems = String(totalI); //casteo para asignar a total Items
    };
    Factura.prototype.calcularTotalFinal = function () {
        return this.totalFinal = String(this.recargo + (Number(this.calcularTotalItems())));
    };
    return Factura;
}());
exports.Factura = Factura;
