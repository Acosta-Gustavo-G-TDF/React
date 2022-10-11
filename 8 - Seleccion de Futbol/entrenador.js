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
exports.Entrenador = void 0;
var personas_1 = require("./personas");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombrePar, apellidoPar, numPasaportePar, fnacimientoPar, matriculaPar, añosDirigiendoPar) {
        var _this = _super.call(this, nombrePar, apellidoPar, numPasaportePar, fnacimientoPar) || this;
        _this.matricula = matriculaPar;
        _this.añosDirigiendo = añosDirigiendoPar;
        return _this;
    }
    Entrenador.prototype.getMatricula = function () {
        return this.matricula;
    };
    Entrenador.prototype.setMatricula = function (parMatricula) {
        this.matricula = parMatricula;
    };
    Entrenador.prototype.getAñosDirigiendo = function () {
        return this.añosDirigiendo;
    };
    Entrenador.prototype.setAñosDirigiendo = function (parAñosDirigiendo) {
        this.añosDirigiendo = parAñosDirigiendo;
    };
    return Entrenador;
}(personas_1.Personas));
exports.Entrenador = Entrenador;
