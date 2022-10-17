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
exports.CuentaCorriente = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente(parNcuenta, parSaldo, parCliente, parInteres) {
        var _this = _super.call(this, parNcuenta, parSaldo, parCliente) || this;
        _this.interes = 1, 5;
        return _this;
    }
    CuentaCorriente.prototype.getInteres = function () {
        return this.interes;
    };
    CuentaCorriente.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interes;
    };
    CuentaCorriente.prototype.retirarSaldo = function (parRetiro) {
        if (this.saldo > parRetiro) {
            this.saldo = this.saldo - parRetiro;
            console.log("Saldo retirado: " + parRetiro);
        }
        else {
            console.log("Saldo insuficiente");
        }
    };
    CuentaCorriente.prototype.toString = function () {
        return "Numero de cuenta: " + this.getNumeroCuenta +
            "\n" + "Saldo en la cuenta: " + this.getSaldo +
            "\n" + "Cliente: " + this.getCliente +
            "\n" + "Interes: " + this.getInteres;
    };
    return CuentaCorriente;
}(Cuenta_1.Cuenta));
exports.CuentaCorriente = CuentaCorriente;
