export class libros{
    private titulo:string;
    private idioma:string;
    private genero:string;
    private cantPaginas:number;
    private isbn:number;
    private autor:string;

    constructor(tituloPar:string,idiomaPar:string,generoPar:string,cantPaginasPar:number,isbnPar:number,autorPar:string){
        this.titulo=tituloPar;
        this.idioma=idiomaPar;
        this.genero=generoPar;
        this.cantPaginas=cantPaginasPar;
        this.isbn=isbnPar;
        this.autor=autorPar;
    }

    public getTitulo():string{
        return this.titulo;
    }

    public setTitulo(parTitulo:string):void{
        this.titulo=parTitulo;
    }

    public getIdioma():string{
        return this.idioma;
    }

    public setIdioma(parIdioma:string):void{
        this.idioma=parIdioma;
    }

    public getGenero():string{
        return this.genero;
    }

    public setGenero(parGenero:string):void{
        this.genero=parGenero;
    }

    public getCantPaginas():number{
        return this.cantPaginas;
    }

    public setCantPaginas(parCantPaginas:number):void{
        this.cantPaginas=parCantPaginas;
    }

    public getIsbn():number{
        return this.isbn;
    }

    public setIsbn(parIsbn:number):void{
        this.isbn=parIsbn;
    }

    public getAutor():string{
        return this.autor;
    }

    public setAutor(parAutor:string):void{
        this.autor=parAutor;
    }
}