import { Pet } from "./Pet";

export class Gato extends Pet{
    movimentar(){
        throw("O gato está caminhando")
    }

    miar(){
        throw("O gato está miando")
    }
}