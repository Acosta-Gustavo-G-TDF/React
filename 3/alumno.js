// Persona: alumno
// Atributos: 
/*
Legajo
Nombre y apellido
DNI
Email
Nacionalidad
Direccion
Genero
*/
//Funcionalidades:
/*
Obetener Legajo
*/
var Alumno = /** @class */ (function () {
    function Alumno(leg, nya, d, e, nac, dir, gen) {
        this.legajo = leg;
        this.nomyape = nya;
        this.dni = d;
        this.email = e;
        this.nacionalidad = nac;
        this.direccion = dir;
        this.genero = gen;
    }
    Alumno.prototype.obtenerLegajo = function () {
        console.log(Math.random());
    };
    Alumno.prototype.mostarNombreApellido = function () {
        console.log(this.nomyape);
    };
    Alumno.prototype.mostarAlumno = function () {
        console.log("\nLegajo: " + this.legajo +
            "\nNombre y Apellido: " + this.nomyape +
            "\nDNI: " + this.dni +
            "\nEmail: " + this.email +
            "\nNacionalidad: " + this.nacionalidad +
            "\nDireccion: " + this.direccion +
            "\nGenero: " + this.genero);
    };
    return Alumno;
}());
