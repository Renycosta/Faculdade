export class Pessoa{
    protected _nome: string;
    protected _idade: number;

    constructor(){
        this._nome = "";
        this._idade = 0;
    }

    public get Nome(){
        return this._nome;
    }

    public set Nome(Nome : string){
        this._nome = Nome
    }

    public get Idade(){
        return this._idade;
    }

    public set Idade(Idade : number){
        this._idade = Idade
    }
}