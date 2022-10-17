"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(parNombre, parApellidos, parDni) {
        this.nombre = parNombre;
        this.apellidos = parApellidos;
        this.dni = parDni;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setApellidos = function (parApellidos) {
        this.apellidos = parApellidos;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (parDni) {
        this.dni = parDni;
    };
    return Persona;
}());
exports.Persona = Persona;
