import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa{
    private _salario: number;

    constructor(){
        super();
        this._salario = 0;
    }

    public falar(): string{
        return "Sou um funcionário"
    }

    public acessoFalar(){
        console.log(this.falar)
    }

    public acessoFalarPessoa(){
        console.log(super.falar)
    }
}