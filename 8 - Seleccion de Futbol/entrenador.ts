import { Personas } from "./personas";

export class Entrenador extends Personas{
    protected matricula:number;
    protected añosDirigiendo: number;

    constructor(nombrePar:string,apellidoPar:string,numPasaportePar:number,fnacimientoPar:Date,matriculaPar:number,añosDirigiendoPar:number){
        super(nombrePar,apellidoPar,numPasaportePar,fnacimientoPar);
        this.matricula=matriculaPar;
        this.añosDirigiendo=añosDirigiendoPar;
    }

    public getMatricula():number{
        return this.matricula;
    }

    public setMatricula(parMatricula:number):void{
        this.matricula=parMatricula;
    }

    public getAñosDirigiendo():number{
        return this.añosDirigiendo;
    }

    public setAñosDirigiendo(parAñosDirigiendo:number):void{
        this.añosDirigiendo=parAñosDirigiendo;
    }
}