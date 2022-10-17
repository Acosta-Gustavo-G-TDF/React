import { CuentaAhorro } from "./CuentaAhorro";
import { CuentaCorriente } from "./CuentaCorriente";
import { Persona } from "./Persona";

let persona1: Persona = new Persona("Gabriel","Gutierrez",555666777);

let caPersona1:CuentaAhorro = new CuentaAhorro(555,10000,persona1,3,1000);
let ccPersona1:CuentaCorriente = new CuentaCorriente(666,15000,persona1,1.5,);

console.log(caPersona1.toString);
console.log(ccPersona1.toString);

caPersona1.setInteres(4);
ccPersona1.actualizarSaldo();