import { Animales } from "./Animal";
import { Mascotas } from "./Mascotas";

export class Gato extends Animales implements Mascotas{
    protected nombre:string;
    
    constructor(parPatas:number,parNombre:string){
        super(parPatas);
        this.nombre=parNombre;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(parNombre: string): void {
        this.nombre=parNombre;
    }
    public jugar(nombre: string): void {
        console.log(nombre + "esta jugando");
    }

    public comer(): void {
        console.log(this.nombre + "esta comiendo en " + this.patas + "patas");
    }
    public caminar(patas: number): void {
        console.log(this.nombre + "esta caminando");
    }
}