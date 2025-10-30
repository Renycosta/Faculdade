import { Animal } from "./Animal";

export class Pet extends Animal{
    protected _nome: string;
    protected _pedigree: boolean;

    constructor(){
        super()
        this._nome = "";
        this._pedigree = false;
    }
}