import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa{
    private _dataUltimoAcesso: string;

    constructor(){
        super();
        this._dataUltimoAcesso = "";
    }
}