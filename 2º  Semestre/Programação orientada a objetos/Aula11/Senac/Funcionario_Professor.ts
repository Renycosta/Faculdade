import { Funcionario } from "./Funcionario";

export class Funcionario_Professor extends Funcionario{
    constructor(
        private _titulacao: string,
    ){
        super()
    }
}