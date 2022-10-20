"use strict";
exports.__esModule = true;
exports.ListaDeAnimales = void 0;
var ListaDeAnimales = /** @class */ (function () {
    function ListaDeAnimales(parArrayAnimales) {
        this.listadoDeAnimales = new Array;
        this.listadoDeAnimales = parArrayAnimales;
    }
    ListaDeAnimales.prototype.buscar = function (animal) {
        var posicion = false;
        for (var i = 0; i < this.listadoDeAnimales.length; i++) {
            if (this.listadoDeAnimales[i] === animal) {
                posicion = true;
            }
        }
        return posicion;
    };
    ListaDeAnimales.prototype.agregarAnimal = function (animal) {
        this.listadoDeAnimales.push(animal);
    };
    ListaDeAnimales.prototype.removerAnimal = function (animal) {
        for (var i = 0; i < this.listadoDeAnimales.length; i++) {
            if (this.listadoDeAnimales[i] === animal) {
                this.listadoDeAnimales.splice(1, 1);
            }
        }
    };
    return ListaDeAnimales;
}());
exports.ListaDeAnimales = ListaDeAnimales;
