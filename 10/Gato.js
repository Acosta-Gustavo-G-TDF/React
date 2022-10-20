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
exports.Gato = void 0;
var Animal_1 = require("./Animal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(parPatas, parNombre) {
        var _this = _super.call(this, parPatas) || this;
        _this.nombre = parNombre;
        return _this;
    }
    Gato.prototype.getNombre = function () {
        return this.nombre;
    };
    Gato.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Gato.prototype.jugar = function (nombre) {
        console.log(nombre + "esta jugando");
    };
    Gato.prototype.comer = function () {
        console.log(this.nombre + "esta comiendo en " + this.patas + "patas");
    };
    Gato.prototype.caminar = function (patas) {
        console.log(this.nombre + "esta caminando");
    };
    return Gato;
}(Animal_1.Animales));
exports.Gato = Gato;
