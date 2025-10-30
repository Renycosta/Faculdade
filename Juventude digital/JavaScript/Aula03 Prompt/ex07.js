//Peça o preço original e a porcentagem de desconto e mostre o valor final
const prompt = require("prompt-sync")();

const preco = prompt("Preço: ")
const des = prompt("Porcentagem de desconto: ")

const total = (preco * des) / 100

console.log(total)