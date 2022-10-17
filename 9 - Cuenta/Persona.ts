export class Persona{
    protected nombre:string;
    protected apellidos:string;
    protected dni:number;

    constructor(parNombre:string,parApellidos:string,parDni:number){
        this.nombre=parNombre;
        this.apellidos=parApellidos;
        this.dni=parDni;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(parNombre:string):void{
        this.nombre=parNombre;
    }

    public getApellidos():string{
        return this.apellidos;
    }

    public setApellidos(parApellidos:string):void{
        this.apellidos=parApellidos;
    }

    public getDni():number{
        return this.dni;
    }

    public setDni(parDni:number):void{
        this.dni=parDni;
    }
}