import { Pet } from "./Pet";

export class Cachorro extends Pet{
    movimentar(){
        throw("O cachorro está caminhando")
    }

    latir(){
        throw("O cachorro está latindo")
    }

    comer(){
        this.peso += (10 / 100)
    }
}