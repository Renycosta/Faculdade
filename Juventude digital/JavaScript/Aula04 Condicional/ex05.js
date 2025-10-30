//Pedir para o usuário digitar um valor e informar se esse valor é positivo ou negativo
const prompt = require("prompt-sync")();

const n = Number(prompt("Digite um número: "))

if(n < 0){
    console.log("Esse número é negativo")
}else{
    console.log("Esse número é positivo")
}