/*Peça ao usuário para inserir um número inteiro. Verifique se o número é par ou ímpar e
mostre o resultado. (Dica: use o operador de módulo `%`).*/
const prompt = require('prompt-sync')();

const num = Number(prompt("Digite um número: "))

const total = num % 2

if(total == 0){
    console.log("O número é par")
}else{
    console.log("O número é impar")
}