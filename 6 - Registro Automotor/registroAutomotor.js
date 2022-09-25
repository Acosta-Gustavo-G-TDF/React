var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listadoAutosPar) {
        this.listadoAutos = listadoAutosPar;
    }
    RegistroAutomotor.prototype.consultarPatente = function (parAuto) {
        var ban = false;
        var posicion = -1;
        for (var i = 0; i < this.listadoAutos.length; i++) {
            if (this.listadoAutos[i].getPatente() === parAuto.getPatente()) {
                ban = true;
                posicion = i;
            }
        }
        if (ban === false) {
            console.log("No existe un vehiculo con esa patente");
        }
        return ban;
    };
    RegistroAutomotor.prototype.registrarAuto = function (parAuto) {
        this.listadoAutos.push(parAuto);
    };
    RegistroAutomotor.prototype.eliminarAuto = function (parAuto) {
        for (var i = 0; i < this.listadoAutos.length; i++) {
            if (this.listadoAutos[i].getPatente() === parAuto.getPatente()) {
                this.listadoAutos.splice(i, 1);
            }
        }
    };
    return RegistroAutomotor;
}());
var Auto = /** @class */ (function () {
    function Auto(patentePar, marcaPar, modeloPar, anioPar) {
        this.patente = patentePar;
        this.marca = marcaPar;
        this.modelo = modeloPar;
        this.anio = anioPar;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (parPatente) {
        this.patente = parPatente;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (parMarca) {
        this.marca = parMarca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (parModelo) {
        this.marca = parModelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.setAnio = function (parAnio) {
        this.anio = parAnio;
    };
    return Auto;
}());
var primerAuto = new Auto(101, "A1", "B1", 2000);
var arregloAutos = [primerAuto];
var registroAutomotorTDF = new RegistroAutomotor(arregloAutos);
var consulta = registroAutomotorTDF.consultarPatente(primerAuto);
console.log(consulta);
