"use strict";
exports.__esModule = true;
var DetalleFactura_1 = require("./DetalleFactura");
var testDetalle = new DetalleFactura_1.DetalleFactura();
testDetalle.subtotal = 300;
console.log(testDetalle.calcularSubtotal());
