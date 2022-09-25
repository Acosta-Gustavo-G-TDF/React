class Electrodomestico{
    private nombre:string;
    private precioBase:number;
    private color:string;
    private consumoEnergetico:number;
    private peso:number;

    constructor(nombrePar:string,precioBasePar:number,colorPar:string,consumoEnergeticoPar:number,pesoPar:number){
        this.nombre=nombrePar;
        this.precioBase=precioBasePar;
        this.color=colorPar;
        this.consumoEnergetico=consumoEnergeticoPar;
        this.peso=pesoPar;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(pNombre:string):void{
        this.nombre=pNombre;
    }

    public getPrecioBase():number{
        return this.precioBase;
    }

    public setPrecioBase(pPrecioBase:number):void{
        this.precioBase=pPrecioBase;
    }

    public getColor():string{
        return this.color;
    }

    public setColor(pColor:string):void{
        this.color=pColor;
    }

    public getConsumoEnergetico():number{
        return this.consumoEnergetico;
    }

    public setConsumoEnergetico(pConsumoEnergetico:number):void{
        this.consumoEnergetico=pConsumoEnergetico;
    }

    public getPeso():number{
        return this.peso;
    }

    public setPeso(pPeso:number):void{
        this.peso=pPeso;
    }

    electrodomesticoBajoConsumo():void{

        if(this.consumoEnergetico<1000){
                console.log("Electrodomestico de bajo consumo: " + this.getNombre);
            }
        else{
            console.log("No hay electrodomesticos de bajo consumo");
        }
    }

    balance():void{
        let balance = 0;

            balance=this.precioBase/this.peso;
            console.log("El balance de " + this.getNombre + " es: " + balance);
        
    }

    altaGama():void{
        let balance = 0;

        balance=this.precioBase/this.peso;
        if(balance>3){
            console.log("Producto de alta gama: " + this.getNombre)
        }
        
        else{
            console.log("No hay productos de alta gama")
        }
    }
}

let primerElectrodomestico = new Electrodomestico("Heladera",5000,"Gris",1000,300);
let segundoElectrodomestico = new Electrodomestico("Cafetera",1000,"Negro",500,5);
let tercerElectrodomestico = new Electrodomestico("Licuadora",20,"Blanco",700,2);