const prompt = require("prompt-sync")()

const entrada = Number(prompt("Hora de entrada: "))
const saida = Number(prompt("Hora de saida: "))

const horas = Math.abs(Math.floor(entrada) - Math.ceil(saida))
const valor = Math.abs(horas * 5)

console.log(`Cobrar: ${horas} hora(s), valor: R$${valor}`)