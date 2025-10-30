import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{
    private _diaRendimento : boolean;

    constructor (){
        super();
        this._diaRendimento = false
    }

    public get diaRendimento(){
        return this._diaRendimento
    }

    public set diaRendimento(diaRendimento : boolean){
        this._diaRendimento = diaRendimento
    }

    taxaRendimento(rendimento : number){
        if(this.diaRendimento == true){
            this.saldo += (this.saldo * (rendimento / 100))
        }else{
            throw (new Error("Ainda  não está no dia do rendimento"))
        }
    }
}