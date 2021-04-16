"use strict";
exports.__esModule = true;
exports.Detalle = void 0;
var HojaRuta_1 = require("./HojaRuta");
var Detalle = /** @class */ (function () {
    function Detalle() {
        this.kmSalida = 0;
        this.kmRegreso = 0;
        this.horaSalida = 0;
        this.horaRegreso = 0;
        this.minutoSalida = 0;
        this.minutoRegreso = 0;
        this.hojaRuta = new HojaRuta_1.HojaRuta();
    }
    return Detalle;
}());
exports.Detalle = Detalle;
