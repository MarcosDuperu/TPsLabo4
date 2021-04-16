"use strict";
exports.__esModule = true;
exports.DetalleFactura = void 0;
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura() {
    }
    DetalleFactura.prototype.calcularSubtotal = function () {
        this.subtotal = this.articulo.precio;
        return this.subtotal;
    };
    return DetalleFactura;
}());
exports.DetalleFactura = DetalleFactura;
