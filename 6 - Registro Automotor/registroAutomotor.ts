class RegistroAutomotor{
    public listadoAutos:Auto[];

    constructor(listadoAutosPar:Auto[]){
        this.listadoAutos=listadoAutosPar;
    }

    consultarPatente(parAuto:Auto):boolean{
        let ban:boolean=false;
        let posicion:number=-1;

        for(let i:number=0;i<this.listadoAutos.length;i++){
            if(this.listadoAutos[i].getPatente()===parAuto.getPatente()){
                ban=true;
                posicion=i;
            }
        }
        if(ban===false){
            console.log("No existe un vehiculo con esa patente")
        }
        return ban;
    }

    registrarAuto(parAuto:Auto):void{
        this.listadoAutos.push(parAuto);
    }

    eliminarAuto(parAuto:Auto):void{
        for(let i:number = 0;i<this.listadoAutos.length;i++){
            if(this.listadoAutos[i].getPatente() === parAuto.getPatente()){
                this.listadoAutos.splice(i,1);
            }
        }
    }
}

class Auto{
    private patente:number;
    private marca:string;
    private modelo:string;
    private anio:number;

    constructor(patentePar:number,marcaPar:string,modeloPar:string,anioPar:number){
        this.patente=patentePar;
        this.marca=marcaPar;
        this.modelo=modeloPar;
        this.anio=anioPar;
    }

    public getPatente():number{
        return this.patente;
    }

    public setPatente(parPatente:number):void{
        this.patente=parPatente;
    }

    public getMarca():string{
        return this.marca;
    }

    public setMarca(parMarca:string):void{
        this.marca=parMarca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(parModelo:string):void{
        this.marca=parModelo;
    }

    public getAnio():number{
        return this.anio;
    }

    public setAnio(parAnio:number):void{
        this.anio=parAnio;
    }
}

let primerAuto: Auto = new Auto(101,"A1","B1",2000);

let arregloAutos:Auto[]= [primerAuto];

let registroAutomotorTDF:RegistroAutomotor=new RegistroAutomotor(arregloAutos);

let consulta=registroAutomotorTDF.consultarPatente(primerAuto);
console.log(consulta);