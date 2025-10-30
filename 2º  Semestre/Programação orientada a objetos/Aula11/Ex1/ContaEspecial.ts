import { Conta } from "./Conta";

export class ContaEspecial extends Conta{
    private _limite : number;

    constructor (){
        super();
        this._limite = 0;
    }

    public get limite(){
        return this._limite
    }

    public set limite(limite : number){
        this._limite = limite
    }

    sacar(valor : number){
        this.saldo -= valor
        if((this.limite += this.saldo) < valor){
            throw (new Error("Não é possível realizar essa transação"))
        }
    }
}