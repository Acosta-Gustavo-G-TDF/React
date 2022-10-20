"use strict";
exports.__esModule = true;
var ListaDeAnimales_1 = require("./ListaDeAnimales");
var Gato_1 = require("./Gato");
var Pez_1 = require("./Pez");
var Ara_a_1 = require("./Ara\u00F1a");
var animal1 = new Gato_1.Gato(4, "Gato1");
var animal2 = new Pez_1.Pez(0, "Pez1");
var animal3 = new Ara_a_1.Araña(8);
var animal4 = new Gato_1.Gato(4, "Gato2");
var arrayAnimales = [animal1, animal2, animal3];
var listadoA = new ListaDeAnimales_1.ListaDeAnimales(arrayAnimales);
listadoA.buscar(animal4);
listadoA.agregarAnimal(animal4);
console.log(listadoA);
listadoA.removerAnimal(animal1);
console.log(listadoA);
console.log(listadoA.buscar(animal4));
