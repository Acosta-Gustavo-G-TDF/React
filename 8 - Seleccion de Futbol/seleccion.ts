import { Futbolistas } from "./futbolistas";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";


let fecha = new Date('08-05-1989');
let fecha2 = new Date('08-05-1990');
let fecha3 = new Date('08-05-1991');

let futbolista1:Futbolistas = new Futbolistas("Alejandro","Ledesma",25556,fecha,10,"Delantero");
let masajista1:Masajista = new Masajista("Emanuel","Duarte",25556,fecha2,10,"Compresion");
let entrenador1:Entrenador = new Entrenador("Roxana","Fernandez",25556,fecha3,10,5);

console.log(futbolista1);