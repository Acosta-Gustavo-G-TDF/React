import { Personas } from "./personas";

export class Masajista extends Personas{
    protected matricula:number;
    protected tecnica:string;

    constructor(nombrePar:string,apellidoPar:string,numPasaportePar:number,fnacimientoPar:Date,matriculaPar:number,tecnicaPar:string){
        super(nombrePar,apellidoPar,numPasaportePar,fnacimientoPar);
        this.matricula=matriculaPar;
        this.tecnica=tecnicaPar;
    }

    public getMatricula():number{
        return this.matricula;
    }

    public setMatricula(parMatricula:number):void{
        this.matricula=parMatricula;
    }

    public getTecnica():string{
        return this.tecnica;
    }

    public setTecnia(parTecnica:string):void{
        this.tecnica=parTecnica;
    }
}