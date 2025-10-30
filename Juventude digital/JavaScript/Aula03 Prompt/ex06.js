//Peça ao usuário o valor em reais e a cotação do dolar e mostre o resultado em dólar.
const prompt = require("prompt-sync")();

const reais = prompt("Digite o valor em reais: ")
const dolar = prompt("Digite a cotação do dolar: ")

const total = reais / dolar

console.log(total)