"use strict";
exports.__esModule = true;
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta() {
    }
    HojaRuta.prototype.calcularTotalKilometro = function () {
        var kmTotal;
        var kmSalida;
        var kmRegreso;
        var i;
        //trae las todas las tablas de detalle
        for (i = 0; i <= this.detalles.length; i++) {
            kmSalida += this.detalles[i].kmSalida; //agrega y suma los km de salida
            kmRegreso += this.detalles[i].kmRegreso; //agrega y suma los km de regreso
        }
        if (kmSalida != 0) {
            kmTotal = kmSalida - kmRegreso; //resta los km de salida por los de regreso para tener el total recorrido
        }
        else {
            kmTotal = kmRegreso;
        }
        return kmTotal;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
