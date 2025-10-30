import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa{
    private _cnpj: string
    private _razaoSocial: string

    constructor(){
        super()
        this._cnpj = ""
        this._razaoSocial = ""
    }

    public get Cnpj(){
        return this._cnpj;
    }

    public get RazaoSocial(){
        return this._razaoSocial;
    }

    public set RazaoSocial(RazaoSocial : string){
        this._razaoSocial = RazaoSocial
    }
}