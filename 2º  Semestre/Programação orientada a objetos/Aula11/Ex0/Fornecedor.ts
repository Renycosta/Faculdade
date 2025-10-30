import { Pessoa } from "./Pessoa";

export class Fornecedor extends Pessoa{
    private _cnpj: string;

    constructor(){
        super();
        this._cnpj = "";
    }
}