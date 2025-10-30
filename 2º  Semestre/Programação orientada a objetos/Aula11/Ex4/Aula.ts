import { Conteudo } from "./Conteudo";
import { GenericModel } from "./GenericModel";
import { Unidade } from "./Unidade";

export class Aula extends GenericModel{
    private _conteudo: Conteudo[];
    private _unidade: Unidade[];

    constructor(){
        super()
        this._conteudo = [];
        this._unidade = [];
    }
}