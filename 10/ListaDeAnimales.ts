import { Animales } from "./Animal";

export class ListaDeAnimales {
    private listadoDeAnimales = new Array<Animales>;

    constructor(parArrayAnimales:Animales[]){
        this.listadoDeAnimales=parArrayAnimales;
    }

    public buscar(animal:Animales):boolean {
        let posicion:boolean=false 
        for (let i:number=0;i<this.listadoDeAnimales.length;i++){
            if (this.listadoDeAnimales[i] === animal){
                posicion=true;
            } 
            
        }
        return posicion;
    }
        
    public agregarAnimal(animal:Animales):void{
        this.listadoDeAnimales.push(animal);
    }
        
    public removerAnimal(animal:Animales):void{
        for (let i:number=0;i<this.listadoDeAnimales.length;i++) {
            if (this.listadoDeAnimales[i] === animal){
                this.listadoDeAnimales.splice(1,1);
            } 
        } 
    }    
        
}