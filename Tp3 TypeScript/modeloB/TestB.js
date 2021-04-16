"use strict";
exports.__esModule = true;
exports.TestB = void 0;
var TestB = /** @class */ (function () {
    function TestB() {
        this.cliente = new Cliente;
        this.articulo1 = new Articulo;
        this.articulo2 = new Articulo;
        this.articulo3 = new Articulo;
        this.articulo4 = new Articulo;
        this.articulo5 = new Articulo;
        this.factura1 = new Factura;
        this.factura2 = new Factura;
        this.factura3 = new Factura;
        this.subtotal = new DetalleFactura();
    }
    TestB.prototype.asignoValores = function () {
        var detalleFactura1_1 = new DetalleFactura();
        detalleFactura1_1.cantidad = 3;
        detalleFactura1_1.subtotal = 350;
        var detalleFactura1_2 = new DetalleFactura();
        detalleFactura1_2.cantidad = 2;
        detalleFactura1_2.subtotal = 175;
        var detalleFactura2_1 = new DetalleFactura();
        detalleFactura2_1.cantidad = 1;
        detalleFactura2_1.subtotal = 100;
        var detalleFactura2_2 = new DetalleFactura();
        detalleFactura2_2.cantidad = 5;
        detalleFactura2_2.subtotal = 700;
        var detalleFactura3_1 = new DetalleFactura();
        detalleFactura3_1.cantidad = 6;
        detalleFactura3_1.subtotal = 850;
        var detalleFactura3_2 = new DetalleFactura();
        detalleFactura3_2.cantidad = 10;
        detalleFactura3_2.subtotal = 1500;
        this.articulo1.codigo = 1000;
        this.articulo1.denominacion = "Coca-Cola";
        this.articulo1.precio = 200;
        this.articulo1.unidadMedida = "Pesos";
        this.articulo2.codigo = 1001;
        this.articulo2.denominacion = "Pepsi";
        this.articulo2.precio = 150;
        this.articulo2.unidadMedida = "Pesos";
        this.articulo3.codigo = 1002;
        this.articulo3.denominacion = "Cerveza";
        this.articulo3.precio = 180;
        this.articulo3.unidadMedida = "Pesos";
        this.articulo4.codigo = 1003;
        this.articulo4.denominacion = "Sprite";
        this.articulo4.precio = 210;
        this.articulo4.unidadMedida = "Pesos";
        this.articulo5.codigo = 1004;
        this.articulo5.denominacion = "Manaos";
        this.articulo5.precio = 100;
        this.articulo5.unidadMedida = "Pesos";
        this.cliente.numero = 1;
        this.cliente.cuit = 20256585262;
        this.cliente.razonSocial = "Responsable Inscripto";
        this.factura1.detalleFactura.push(detalleFactura1_1);
        this.factura1.detalleFactura.push(detalleFactura1_2);
        this.factura2.detalleFactura.push(detalleFactura2_1);
        this.factura2.detalleFactura.push(detalleFactura2_2);
        this.factura3.detalleFactura.push(detalleFactura3_1);
        this.factura3.detalleFactura.push(detalleFactura3_2);
        this.cliente.factura.push(this.factura1);
    };
    TestB.prototype.calculoTotalFacturado = function () {
        var TotalFacturado = this.cliente.totalFacturadoXTipoPago;
        return TotalFacturado;
    };
    TestB.prototype.calculoTotalFinal = function () {
        var TotalFinal = this.factura1.calcularTotalFinal;
        return TotalFinal;
    };
    TestB.prototype.calculoTotalItems = function () {
        var TotalItems = this.factura1.calcularTotalItems;
        return TotalItems;
    };
    TestB.prototype.calcularSubtotal = function () {
        var Subtotal = this.subtotal.calcularSubtotal;
        return Subtotal;
    };
    return TestB;
}());
exports.TestB = TestB;
var test1 = new TestB();
test1.asignoValores();
console.log(test1.calculoTotalFacturado);
document.body.innerHTML = String("Prueba de calculo de total facturado por tipo de pago: " + test1.calculoTotalFacturado());
var test2 = new TestB();
test2.asignoValores();
console.log(test1.calculoTotalFinal);
document.body.innerHTML = String("Prueba de calculo de total final : " + test2.calculoTotalFinal());
var test3 = new TestB();
test3.asignoValores();
console.log(test3.calculoTotalItems);
document.body.innerHTML = String("Prueba de calculo de total items: " + test3.calculoTotalItems());
var test4 = new TestB();
test4.asignoValores();
console.log(test4.calcularSubtotal);
document.body.innerHTML = String("Prueba de calculo de Subtotal de items: " + test4.calcularSubtotal());
