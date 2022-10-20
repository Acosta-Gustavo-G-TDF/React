"use strict";
exports.__esModule = true;
exports.Animales = void 0;
var Animales = /** @class */ (function () {
    function Animales(parPatas) {
        this.patas = parPatas;
    }
    Animales.prototype.getPatas = function () {
        return this.patas;
    };
    Animales.prototype.setPatas = function (parPatas) {
        this.patas = parPatas;
    };
    return Animales;
}());
exports.Animales = Animales;
