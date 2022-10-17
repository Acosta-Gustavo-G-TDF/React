import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";

export class CuentaCorriente extends Cuenta{
    protected interes:number;

    constructor(parNcuenta:number,parSaldo:number,parCliente:Persona,parInteres:number){
        super(parNcuenta,parSaldo,parCliente);
        this.interes=1,5;
    }

    public getInteres():number{
        return this.interes;
    }

    actualizarSaldo(): void {
        this.saldo=this.saldo*this.interes;
    }

    retirarSaldo(parRetiro: number): void {
        if(this.saldo>parRetiro){
            this.saldo=this.saldo-parRetiro;
            console.log("Saldo retirado: " + parRetiro)
        }
        else{
            console.log("Saldo insuficiente");
        }
    }

    toString():string{
        return "Numero de cuenta: " + this.getNumeroCuenta +
        "\n" + "Saldo en la cuenta: " + this.getSaldo +
        "\n" + "Cliente: " + this.getCliente +
        "\n" + "Interes: " + this.getInteres 
    }
}