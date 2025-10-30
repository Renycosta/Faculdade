import { Aula } from "./Aula";
import { GenericModel } from "./GenericModel";

export class Conteudo extends GenericModel{
    private _url: string;
    private _aula: Aula;

    constructor(){
        super();
        this._url = "";
        this._aula = new Aula();
    }
}