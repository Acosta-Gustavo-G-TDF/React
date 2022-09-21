class Alumno{
    legajo: number;
    nomyape: string;
    dni: number;
    email: string;
    nacionalidad: string;
    direccion: string;
    genero: string;

    constructor(legajoPar:number,nomyapePar:string,dniPar:number,emailPar:string,nacionalidadPar:string,direccionPar:string,generoPar:string){
        this.legajo = legajoPar;
        this.nomyape = nomyapePar;
        this.dni = dniPar;
        this.email = emailPar;
        this.nacionalidad = nacionalidadPar;
        this.direccion = direccionPar;
        this.genero = generoPar;
    }

    public getLegajo():number{
        return this.legajo;
    }

    public setLegajo(pLegajo:number):void{
        this.legajo=pLegajo;
    }

    public getNomyape():string{
        return this.nomyape
    }

    public setNomyape(pNomyape:string):void{
        this.nomyape=pNomyape;
    }

    public getDni():number{
        return this.dni;
    }

    /*
    public setDni(pDni:number):void{
        this.dni=pDni;
    }
    */

    public getEmail():string{
        return this.email;
    }

    public setEmail(pEmail:string):void{
        this.email=pEmail;
    }

    public getNacionalidad():string{
        return this.nacionalidad;
    }

    public setNacionalidad(pNacionalidad:string):void{
        this.nacionalidad=pNacionalidad;
    }

    public getDireccion():string{
        return this.direccion;
    }

    public setDireccion(pDireccion:string):void{
        this.direccion=pDireccion;
    }

    public getGenero():string{
        return this.genero;
    }

    public setGenero(pGenero:string):void{
        this.genero=pGenero;
    }

}

let alumno1 = new Alumno(11,"NN",11555666,"alumno1@gmail.com","argentino","Alberdi 123","Masculino");

console.log(alumno1);