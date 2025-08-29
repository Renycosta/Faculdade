const prompt = require("prompt-sync")()

const jantar = Number (prompt("Qual o valor do jantar? "))

const taxa1 = jantar * 10
const taxa2 = taxa1 / 100

const total = jantar + taxa2

console.log(`A taxa do garçom é ${taxa2}`)
console.log(`O valor total é ${total}`)