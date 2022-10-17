"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CuentaAhorro = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(parNcuenta, parSaldo, parCliente, parInteres, parSaldoMinimo) {
        var _this = _super.call(this, parNcuenta, parSaldo, parCliente) || this;
        _this.interes = parInteres;
        _this.saldoMinimo = 1000;
        return _this;
    }
    CuentaAhorro.prototype.getInteres = function () {
        return this.interes;
    };
    CuentaAhorro.prototype.setInteres = function (parInteres) {
        this.interes = parInteres;
    };
    CuentaAhorro.prototype.getSaldoMinimo = function () {
        return this.saldoMinimo;
    };
    CuentaAhorro.prototype.retirarSaldo = function (parRetiro) {
        if (this.saldo > parRetiro && parRetiro < this.saldoMinimo) {
            this.saldo = this.saldo - parRetiro;
            console.log("Saldo retirado: " + parRetiro);
        }
        else {
            console.log("Saldo insuficiente");
        }
    };
    CuentaAhorro.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interes;
    };
    CuentaAhorro.prototype.actualizarInteres = function (nuevoInteres) {
        this.interes = nuevoInteres;
        console.log("El nuevo interes es: " + this.interes);
    };
    CuentaAhorro.prototype.toString = function () {
        return "Numero de cuenta: " + this.getNumeroCuenta +
            "\n" + "Saldo en la cuenta: " + this.getSaldo +
            "\n" + "Cliente: " + this.getCliente +
            "\n" + "Interes: " + this.getInteres +
            "\n" + "Saldo minimo: " + this.getSaldoMinimo;
    };
    return CuentaAhorro;
}(Cuenta_1.Cuenta));
exports.CuentaAhorro = CuentaAhorro;
