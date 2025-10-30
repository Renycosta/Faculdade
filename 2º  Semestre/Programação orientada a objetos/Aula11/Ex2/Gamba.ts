import { Animal } from "./Animal";

export class Gamba extends Animal{
    private _nivelAroma: number;

    constructor(){
        super()
        this._nivelAroma = 0;
    }

    movimentar(){
        throw("O gambá está caminhando")
    }

    aromatizar(){
        throw("O gambá aromatizou o ambiente")
    }
}