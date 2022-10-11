"use strict";
exports.__esModule = true;
exports.Personas = void 0;
var Personas = /** @class */ (function () {
    function Personas(nombrePar, apellidoPar, numPasaportePar, fnacimientoPar) {
        this.nombre = nombrePar;
        this.apellido = apellidoPar;
        this.numPasaporte = numPasaportePar;
        this.fnacimiento = fnacimientoPar;
    }
    Personas.prototype.getNombre = function () {
        return this.nombre;
    };
    Personas.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Personas.prototype.getApellido = function () {
        return this.apellido;
    };
    Personas.prototype.setApellido = function (parApellido) {
        this.apellido = parApellido;
    };
    Personas.prototype.getNumPasaporte = function () {
        return this.numPasaporte;
    };
    Personas.prototype.setNumPasaporte = function (parNumPasaporte) {
        this.numPasaporte = parNumPasaporte;
    };
    Personas.prototype.getFnacimiento = function () {
        return this.fnacimiento;
    };
    Personas.prototype.setFnacimiento = function (parFnacimiento) {
        this.fnacimiento = parFnacimiento;
    };
    return Personas;
}());
exports.Personas = Personas;
