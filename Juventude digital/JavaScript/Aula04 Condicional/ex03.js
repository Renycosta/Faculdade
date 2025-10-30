//Pedir para o usuário digitar um valor, se ele for menor ou igual a 100 falar "Banana" senão falar "Maça"
const prompt = require("prompt-sync")();

const n = Number(prompt("Digite um número: "))

if (n <= 100){
    console.log("Banana")
}else{
    console.log("Maça")
}