import { libros } from './Libros'

class gestorLibro{
    public listadoLibros:libros[];

    constructor(listadoLibrosPar:libros[]){
        this.listadoLibros=listadoLibrosPar;
    }

    consultarLibro(parLibro:libros):string{
        let ban:boolean=false;
        let bus:string="";

        for(let i:number=0;i<this.listadoLibros.length;i++){
            if(this.listadoLibros[i].getTitulo()==parLibro.getTitulo()){
                ban=true;
                bus=parLibro.getTitulo();
            }
        }
        if(ban===false){
            console.log("Libro no encontrado")
        }
        return bus;
    }

    insertarLibro(parLibro:libros):void{
        this.listadoLibros.push(parLibro);
    }
}

let libro1: libros = new libros("Libro de cuentos","Español","Aventuras",200,65632322,"Varios");

let arregloLibros:libros[]= [libro1];

let gestorDeLibros:gestorLibro=new gestorLibro(arregloLibros);

let consulta=gestorDeLibros.consultarLibro(libro1);
console.log(consulta);