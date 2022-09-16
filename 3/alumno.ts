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


class Alumno{
    legajo: Number;
    nomyape: String;
    dni: Number;
    email: String;
    nacionalidad: String;
    direccion: String;
    genero: String;

    constructor(leg:number,nya:String,d:number,e:String,nac:String,dir:String,gen:String){
        this.legajo = leg;
        this.nomyape = nya;
        this.dni = d;
        this.email = e;
        this.nacionalidad = nac;
        this.direccion = dir;
        this.genero = gen;
    }

    obtenerLegajo(){
        console.log(Math.random());
    }

    mostarNombreApellido(){
        console.log(this.nomyape)
    }

    mostarAlumno(){
        console.log("\nLegajo: " + this.legajo +
                    "\nNombre y Apellido: " + this.nomyape +
                    "\nDNI: " + this.dni +
                    "\nEmail: " + this.email +
                    "\nNacionalidad: " + this.nacionalidad +
                    "\nDireccion: " + this.direccion +
                    "\nGenero: " + this.genero)
    }

}

