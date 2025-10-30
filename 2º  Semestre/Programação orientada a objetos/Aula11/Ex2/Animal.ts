export class Animal{
    protected _peso: number;
    protected _idade: number;
    protected _sexo: string;

    constructor(){
        this._peso = 0;
        this._idade = 0;
        this._sexo = "";
    }

    public get peso(){
        return this._peso
    }

    public set peso(peso : number){
        this._peso = peso
    }

    public get idade(){
        return this._idade
    }

    public set idade(idade : number){
        this._idade = idade
    }

    comer(){
        this.peso += (5 / 100)
    }

    envelhecer(){
        this.idade += 1
    }
}