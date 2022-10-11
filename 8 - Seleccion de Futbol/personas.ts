export class Personas{
    nombre:string;
    apellido:string;
    numPasaporte:number;
    fnacimiento:Date;

    constructor(nombrePar:string,apellidoPar:string,numPasaportePar:number,fnacimientoPar:Date){
        this.nombre=nombrePar;
        this.apellido=apellidoPar;
        this.numPasaporte=numPasaportePar;
        this.fnacimiento=fnacimientoPar;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(parNombre:string):void{
        this.nombre=parNombre;
    }

    public getApellido():string{
        return this.apellido;
    }

    public setApellido(parApellido:string):void{
        this.apellido=parApellido;
    }

    public getNumPasaporte():number{
        return this.numPasaporte;
    }

    public setNumPasaporte(parNumPasaporte:number):void{
        this.numPasaporte=parNumPasaporte;
    }

    public getFnacimiento():Date{
        return this.fnacimiento;
    }

    public setFnacimiento(parFnacimiento:Date):void{
        this.fnacimiento=parFnacimiento;
    }
}