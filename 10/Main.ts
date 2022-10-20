import { Animales } from "./Animal";
import {ListaDeAnimales} from "./ListaDeAnimales"; 
import { Gato } from "./Gato"; 
import { Pez } from "./Pez"; 
import { Araña } from "./Araña";

let animal1:Gato = new Gato(4,"Gato1"); 
let animal2:Pez = new Pez(0,"Pez1"); 
let animal3:Araña = new Araña(8);
let animal4:Gato = new Gato(4,"Gato2");

let arrayAnimales: Animales[] = [animal1, animal2, animal3]; 
let listadoA:ListaDeAnimales = new ListaDeAnimales (arrayAnimales);

listadoA.buscar(animal4);
listadoA.agregarAnimal (animal4);
console.log(listadoA);
listadoA.removerAnimal (animal1);
console.log(listadoA);
console.log(listadoA.buscar(animal4));
