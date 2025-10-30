import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa{
    private _cpf: string
    private _cnh: string

    constructor(){
        super()
        this._cpf = ""
        this._cnh = ""
    }

    public get Cpf(){
        return this._cpf;
    }

    public get Nome(){
        return this._cnh;
    }

    hashCode(){
        Number
    }

    equals(obj : Object){
        Boolean
    }
}