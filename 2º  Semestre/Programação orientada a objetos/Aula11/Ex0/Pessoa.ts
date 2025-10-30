export class Pessoa{
    protected _usuario: string;
    protected _nome: string;
    protected _cpf: string;
    protected _status: string;

    constructor(){
        this._usuario = "";
        this._nome = "";
        this._cpf = "";
        this._status = "";
    }

    public get status(){
        return this._status;
    }

    public set status(status : string){
        this._status = status
    }

    public Inativo(): void{
        this.status = "Inativo"
    }
}