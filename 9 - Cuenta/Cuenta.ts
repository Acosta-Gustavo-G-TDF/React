import {Persona} from "./Persona";

export abstract class Cuenta{
    protected numeroCuenta:number;
    protected saldo:number;
    protected cliente:Persona;

    constructor(parNcuenta:number,parSaldo:number,parCliente:Persona){
        this.numeroCuenta=parNcuenta;
        this.saldo=parSaldo;
        this.cliente=parCliente;
    }

    public getNumeroCuenta():number{
        return this.numeroCuenta;
    }

    public setNumeroCuenta(parNcuenta:number):void{
        this.numeroCuenta=parNcuenta;
    }

    public getSaldo():number{
        return this.saldo;
    }

    public setSaldo(parSaldo:number):void{
        this.saldo=parSaldo;
    }

    public getCliente():Persona{
        return this.cliente;
    }

    public setCliente(parCliente:Persona):void{
        this.cliente=parCliente;
    }

    public ingresarSaldo(parIngreso:number):void{
        console.log(parIngreso);
        this.saldo=this.saldo+parIngreso;
    }

    abstract retirarSaldo(parRetiro:number):void;

    abstract actualizarSaldo():void;
}