const prompt = require("prompt-sync")()

let par = 0
let impar = 0
do{

    const num = Number(prompt("Digite um número: "))
    
    if(num < 0){
        break
    }

    if(num % 2 == 0){
        par = par + 1
    }else{
        impar = impar +1
    }

}while(true)

console.log(`Fora registrados ${par} números pares e ${impar} números impares`)