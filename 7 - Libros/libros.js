"use strict";
exports.__esModule = true;
exports.libros = void 0;
var libros = /** @class */ (function () {
    function libros(tituloPar, idiomaPar, generoPar, cantPaginasPar, isbnPar, autorPar) {
        this.titulo = tituloPar;
        this.idioma = idiomaPar;
        this.genero = generoPar;
        this.cantPaginas = cantPaginasPar;
        this.isbn = isbnPar;
        this.autor = autorPar;
    }
    libros.prototype.getTitulo = function () {
        return this.titulo;
    };
    libros.prototype.setTitulo = function (parTitulo) {
        this.titulo = parTitulo;
    };
    libros.prototype.getIdioma = function () {
        return this.idioma;
    };
    libros.prototype.setIdioma = function (parIdioma) {
        this.idioma = parIdioma;
    };
    libros.prototype.getGenero = function () {
        return this.genero;
    };
    libros.prototype.setGenero = function (parGenero) {
        this.genero = parGenero;
    };
    libros.prototype.getCantPaginas = function () {
        return this.cantPaginas;
    };
    libros.prototype.setCantPaginas = function (parCantPaginas) {
        this.cantPaginas = parCantPaginas;
    };
    libros.prototype.getIsbn = function () {
        return this.isbn;
    };
    libros.prototype.setIsbn = function (parIsbn) {
        this.isbn = parIsbn;
    };
    libros.prototype.getAutor = function () {
        return this.autor;
    };
    libros.prototype.setAutor = function (parAutor) {
        this.autor = parAutor;
    };
    return libros;
}());
exports.libros = libros;
