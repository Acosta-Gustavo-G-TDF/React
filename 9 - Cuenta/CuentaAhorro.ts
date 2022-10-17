import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";

export class CuentaAhorro extends Cuenta{
    protected interes:number;
    protected saldoMinimo:number;

    constructor(parNcuenta:number,parSaldo:number,parCliente:Persona,parInteres:number,parSaldoMinimo:number){
        super(parNcuenta,parSaldo,parCliente);
        this.interes=parInteres;
        this.saldoMinimo=1000;
    }

    public getInteres():number{
        return this.interes;
    }

    public setInteres(parInteres:number):void{
        this.interes=parInteres;
    }

    public getSaldoMinimo():number{
        return this.saldoMinimo;
    }

    retirarSaldo(parRetiro: number): void {
        if(this.saldo>parRetiro && parRetiro<this.saldoMinimo){
            this.saldo=this.saldo-parRetiro;
            console.log("Saldo retirado: " + parRetiro)
        }
        else{
            console.log("Saldo insuficiente");
        }
    }

    actualizarSaldo(): void {
        this.saldo=this.saldo * this.interes;
    }

    actualizarInteres(nuevoInteres:number):void{
        this.interes=nuevoInteres;
        console.log("El nuevo interes es: " + this.interes);
    }

    toString():string{
        return "Numero de cuenta: " + this.getNumeroCuenta +
        "\n" + "Saldo en la cuenta: " + this.getSaldo +
        "\n" + "Cliente: " + this.getCliente +
        "\n" + "Interes: " + this.getInteres +
        "\n" + "Saldo minimo: " + this.getSaldoMinimo
    }
}