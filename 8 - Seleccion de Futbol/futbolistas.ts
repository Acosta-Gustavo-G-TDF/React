import { Personas } from "./personas";

export class Futbolistas extends Personas{
    protected numero:number;
    protected posicion:string;

    constructor(nombrePar:string,apellidoPar:string,numPasaportePar:number,fnacimientoPar:Date,NumeroPar:number,PosicionPar:string){
        super(nombrePar,apellidoPar,numPasaportePar,fnacimientoPar);
        this.numero=NumeroPar;
        this.posicion=PosicionPar;
    }

    public getNumero():number{
        return this.numero;
    }

    public setNumero(parNumero:number):void{
        this.numero=parNumero;
    }

    public getPosicion():string{
        return this.posicion;
    }

    public setPosicion(parPosicion:string):void{
        this.posicion=parPosicion;
    }
}