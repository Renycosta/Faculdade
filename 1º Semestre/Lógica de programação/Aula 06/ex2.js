const prompt = require("prompt-sync")()

const pessoas = prompt("Quantas pessoas vão para o casamento? ")
const pedagio = prompt("Qual o valor do pedágio? R$")

const carros = pessoas / 5

const total = (Math.ceil(carros) * 2) * pedagio

console.log(`N° de carros ${Math.ceil(carros)}`)
console.log(`Total do Pedágio R$${total.toFixed(2)}`)