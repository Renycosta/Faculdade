const prompt = require("prompt-sync")()

const fruta = prompt("Digite o nome da fruta: ")
const quant = prompt("Digite a quantidade de frutas: ")

console.log(`Você comprou ${quant} unidades de ${fruta}`)