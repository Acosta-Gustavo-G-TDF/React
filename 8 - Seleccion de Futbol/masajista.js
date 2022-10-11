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
exports.Masajista = void 0;
var personas_1 = require("./personas");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombrePar, apellidoPar, numPasaportePar, fnacimientoPar, matriculaPar, tecnicaPar) {
        var _this = _super.call(this, nombrePar, apellidoPar, numPasaportePar, fnacimientoPar) || this;
        _this.matricula = matriculaPar;
        _this.tecnica = tecnicaPar;
        return _this;
    }
    Masajista.prototype.getMatricula = function () {
        return this.matricula;
    };
    Masajista.prototype.setMatricula = function (parMatricula) {
        this.matricula = parMatricula;
    };
    Masajista.prototype.getTecnica = function () {
        return this.tecnica;
    };
    Masajista.prototype.setTecnia = function (parTecnica) {
        this.tecnica = parTecnica;
    };
    return Masajista;
}(personas_1.Personas));
exports.Masajista = Masajista;
