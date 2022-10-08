"use strict";
exports.__esModule = true;
var Libros_1 = require("./Libros");
var gestorLibro = /** @class */ (function () {
    function gestorLibro(listadoLibrosPar) {
        this.listadoLibros = listadoLibrosPar;
    }
    gestorLibro.prototype.consultarLibro = function (parLibro) {
        var ban = false;
        var bus = "";
        for (var i = 0; i < this.listadoLibros.length; i++) {
            if (this.listadoLibros[i].getTitulo() == parLibro.getTitulo()) {
                ban = true;
                bus = parLibro.getTitulo();
            }
        }
        if (ban === false) {
            console.log("Libro no encontrado");
        }
        return bus;
    };
    gestorLibro.prototype.insertarLibro = function (parLibro) {
        this.listadoLibros.push(parLibro);
    };
    return gestorLibro;
}());
var libro1 = new Libros_1.libros("Libro de cuentos", "Español", "Aventuras", 200, 65632322, "Varios");
var arregloLibros = [libro1];
var gestorDeLibros = new gestorLibro(arregloLibros);
var consulta = gestorDeLibros.consultarLibro(libro1);
console.log(consulta);
