import { Aula } from "./Aula";
import { Cursos } from "./Curso";
import { GenericModel } from "./GenericModel";

export class Unidade extends GenericModel{
    private _cursos: Cursos[];
    private _aulas: Aula[];
    private _ativo: boolean;

    constructor(){
        super();
        this._cursos = [];
        this._aulas = [];
        this._ativo = true;
    }
}