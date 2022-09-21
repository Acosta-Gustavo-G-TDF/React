var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(nombrePar, precioBasePar, colorPar, consumoEnergeticoPar, pesoPar) {
        this.nombre = nombrePar;
        this.precioBase = precioBasePar;
        this.color = colorPar;
        this.consumoEnergetico = consumoEnergeticoPar;
        this.peso = pesoPar;
    }
    Electrodomestico.prototype.getNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Electrodomestico.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.setPrecioBase = function (pPrecioBase) {
        this.precioBase = pPrecioBase;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.setColor = function (pColor) {
        this.color = pColor;
    };
    Electrodomestico.prototype.getConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.setConsumoEnergetico = function (pConsumoEnergetico) {
        this.consumoEnergetico = pConsumoEnergetico;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.setPeso = function (pPeso) {
        this.peso = pPeso;
    };
    Electrodomestico.prototype.electrodomesticoBajoConsumo = function () {
        var ban = false;
        for (var i = 0; i < Electrodomestico.length; i++) {
            if (this.getNombre[i] < 1000) {
                ban = true;
                console.log("Electrodomestico de bajo consumo: " + this.getNombre[i]);
            }
        }
        if (ban === false) {
            console.log("No hay electrodomesticos de bajo consumo");
        }
    };
    Electrodomestico.prototype.balance = function () {
        var balance = 0;
        for (var i = 0; i < Electrodomestico.length; i++) {
            balance = this.getPrecioBase[i] / this.getPeso[i];
            console.log("El balance de " + this.getNombre[i] + " es: " + balance);
        }
    };
    Electrodomestico.prototype.altaGama = function () {
        var balance = 0;
        var ban = false;
        for (var i = 0; i < Electrodomestico.length; i++) {
            balance = this.getPrecioBase[i] / this.getPeso[i];
            if (balance > 3) {
                ban = true;
                console.log("Producto de alta gama: " + this.getNombre[i]);
            }
        }
        if (ban === false) {
            console.log("No hay productos de alta gama");
        }
    };
    return Electrodomestico;
}());
var primerElectrodomestico = new Electrodomestico("Heladera", 5000, "Gris", 1000, 300);
var segundoElectrodomestico = new Electrodomestico("Cafetera", 1000, "Negro", 500, 5);
var tercerElectrodomestico = new Electrodomestico("Licuadora", 20, "Blanco", 700, 2);
