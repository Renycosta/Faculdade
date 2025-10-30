export class Conta{
    protected _nome: string;
    protected _numero: string;
    protected _saldo: number;

    constructor(){
        this._nome = "";
        this._numero = "";
        this._saldo = 0;
    }

    public get saldo(){
        return this._saldo
    }

    public set saldo(saldo : number){
        this._saldo = saldo
    }

    sacar(valor : number){
        this.saldo -= valor
        if(this.saldo < valor){
            throw (new Error("Não é possível realizar essa transação"))
        }
    }
}