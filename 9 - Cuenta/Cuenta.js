"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(parNcuenta, parSaldo, parCliente) {
        this.numeroCuenta = parNcuenta;
        this.saldo = parSaldo;
        this.cliente = parCliente;
    }
    Cuenta.prototype.getNumeroCuenta = function () {
        return this.numeroCuenta;
    };
    Cuenta.prototype.setNumeroCuenta = function (parNcuenta) {
        this.numeroCuenta = parNcuenta;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setSaldo = function (parSaldo) {
        this.saldo = parSaldo;
    };
    Cuenta.prototype.getCliente = function () {
        return this.cliente;
    };
    Cuenta.prototype.setCliente = function (parCliente) {
        this.cliente = parCliente;
    };
    Cuenta.prototype.ingresarSaldo = function (parIngreso) {
        console.log(parIngreso);
        this.saldo = this.saldo + parIngreso;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
