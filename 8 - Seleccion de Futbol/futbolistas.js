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
exports.Futbolistas = void 0;
var personas_1 = require("./personas");
var Futbolistas = /** @class */ (function (_super) {
    __extends(Futbolistas, _super);
    function Futbolistas(nombrePar, apellidoPar, numPasaportePar, fnacimientoPar, NumeroPar, PosicionPar) {
        var _this = _super.call(this, nombrePar, apellidoPar, numPasaportePar, fnacimientoPar) || this;
        _this.numero = NumeroPar;
        _this.posicion = PosicionPar;
        return _this;
    }
    Futbolistas.prototype.getNumero = function () {
        return this.numero;
    };
    Futbolistas.prototype.setNumero = function (parNumero) {
        this.numero = parNumero;
    };
    Futbolistas.prototype.getPosicion = function () {
        return this.posicion;
    };
    Futbolistas.prototype.setPosicion = function (parPosicion) {
        this.posicion = parPosicion;
    };
    return Futbolistas;
}(personas_1.Personas));
exports.Futbolistas = Futbolistas;
