export class GenericModel{
    protected _id: string;
    protected _nome: string;
    protected _criadoEm: Date;
    protected _atualizadoEm: Date;
    protected _exluidoEm: Date | null;

    constructor(){
        this._id = "";
        this._nome = "";
        this._criadoEm = new Date();
        this._atualizadoEm = new Date();
        this._exluidoEm = null;
    }
}