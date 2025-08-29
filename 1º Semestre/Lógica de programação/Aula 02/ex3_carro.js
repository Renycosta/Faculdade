const prompt = require("prompt-sync")()

const carro = Number (prompt("Qual o valor do carro?"))

const metade = carro / 2
const total = metade / 12

console.log(`Entrada R$ ${metade.toFixed(2)}`)
console.log(`Saldo em 12x de R$ ${total.toFixed(2)}`)