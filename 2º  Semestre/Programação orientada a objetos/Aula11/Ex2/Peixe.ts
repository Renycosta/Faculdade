import { Animal } from "./Animal";

export class Peixe extends Animal{
    private _escamas: boolean;

    constructor(){
        super()
        this._escamas = false;
    }

    movimentar(){
        throw("O peixe está nadando")
    }
}