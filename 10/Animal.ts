import { Mascotas } from "./Mascotas";

export abstract class Animales {
    protected patas:number;
    
    
    constructor(parPatas:number) {
        this.patas=parPatas;
    }

    public getPatas():number{
        return this.patas;
    }

    public setPatas(parPatas:number):void{
        this.patas=parPatas;
    }

    abstract comer():void;
    abstract caminar(patas:number):void;
}