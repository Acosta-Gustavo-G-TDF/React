import { Animales } from "./Animal";

export class Araña extends Animales{
    
    constructor(parPatas:number){
        super(parPatas);
    }
    
    public comer(): void {
        console.log("Esta comiendo");
    }
    public caminar(patas: number): void {
        console.log("Esta caminando con " + this.patas + " patas");
    }
    
}