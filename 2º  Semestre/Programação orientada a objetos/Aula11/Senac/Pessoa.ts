export class Pessoa {
    protected _nome: string;
    protected _cpf: string;
    protected _endereco: string;
    protected _estado_civil: string;

    constructor(){
        this._nome = "";
        this._cpf = "";
        this._endereco = "";
        this._estado_civil = "";
    }

    public falar(){
        return "Sou uma Pessoa"
    }
}