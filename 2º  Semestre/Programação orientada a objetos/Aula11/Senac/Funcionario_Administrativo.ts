import { Funcionario } from "./Funcionario";

export class Funcionario_Administrativo extends Funcionario{
    constructor(
        private _setor: string,
    ){
        super()
    }
}