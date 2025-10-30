/*Peça um número qualquer. Verifique se o número é positivo, negativo ou zero e imprima a
informação na tela.*/
const prompt = require('prompt-sync')();

const num = Number(prompt("Digite um número: "))

if(num == 0){
    console.log("O número é 0")
}else if(num < 0){
    console.log("O número é negativo")
}else{
    console.log("O número é positivo")
}