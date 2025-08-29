const prompt = require("prompt-sync")()

const num = Number(prompt("Me diga um número "))

const mais = num + 1
const menos = num - 1

console.log(`Antes do número ${num} tem o número ${menos} e depois do ${num} tem o número ${mais}`)