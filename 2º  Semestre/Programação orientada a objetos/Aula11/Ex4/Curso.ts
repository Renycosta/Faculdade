import { GenericModel } from "./GenericModel";
import { Unidade } from "./Unidade";

export class Cursos extends GenericModel{
    private _unidades: Unidade [];

    constructor(){
        super();
        this._unidades = [];
    }
}