var Alumno = /** @class */ (function () {
    function Alumno(legajoPar, nomyapePar, dniPar, emailPar, nacionalidadPar, direccionPar, generoPar) {
        this.legajo = legajoPar;
        this.nomyape = nomyapePar;
        this.dni = dniPar;
        this.email = emailPar;
        this.nacionalidad = nacionalidadPar;
        this.direccion = direccionPar;
        this.genero = generoPar;
    }
    Alumno.prototype.getLegajo = function () {
        return this.legajo;
    };
    Alumno.prototype.setLegajo = function (pLegajo) {
        this.legajo = pLegajo;
    };
    Alumno.prototype.getNomyape = function () {
        return this.nomyape;
    };
    Alumno.prototype.setNomyape = function (pNomyape) {
        this.nomyape = pNomyape;
    };
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    Alumno.prototype.setDni = function (pDni) {
        this.dni = pDni;
    };
    Alumno.prototype.getEmail = function () {
        return this.email;
    };
    Alumno.prototype.setEmail = function (pEmail) {
        this.email = pEmail;
    };
    Alumno.prototype.getNacionalidad = function () {
        return this.nacionalidad;
    };
    Alumno.prototype.setNacionalidad = function (pNacionalidad) {
        this.nacionalidad = pNacionalidad;
    };
    Alumno.prototype.getDireccion = function () {
        return this.direccion;
    };
    Alumno.prototype.setDireccion = function (pDireccion) {
        this.direccion = pDireccion;
    };
    Alumno.prototype.getGenero = function () {
        return this.genero;
    };
    Alumno.prototype.setGenero = function (pGenero) {
        this.genero = pGenero;
    };
    return Alumno;
}());
var alumno1 = new Alumno(11, "NN", 555555, "zxczxc", "argentino", "asdasd", "ornitorrinco");
console.log(alumno1);
