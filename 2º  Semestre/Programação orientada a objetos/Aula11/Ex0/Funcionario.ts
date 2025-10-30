import { Pessoa } from "./Pessoa";
import { Fornecedor } from "./Fornecedor";

export class Funcionario extends Pessoa{
    private _dataAdmissão: string;
    private _dataUltimoAcesso: string;
    private _fornecedorResponsavel: Fornecedor;

    constructor(){
        super()
        this._dataAdmissão = "";
        this._dataUltimoAcesso = "";
        this._fornecedorResponsavel = new Fornecedor;
    }

    public get fornecedorResposavel(){
        return this._fornecedorResponsavel
    }

    public set fornecedorResponsavel(fornecedorResponsavel : Fornecedor){
        this._fornecedorResponsavel = fornecedorResponsavel
    }

    public InativarFornecedor(): void{
        this.fornecedorResponsavel.Inativo();
    }

}