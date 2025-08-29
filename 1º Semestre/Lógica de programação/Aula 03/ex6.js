const prompt = require("prompt-sync")()

const destino = prompt("Destino: ")
const dias = Number(prompt("Dias: ")) 
const horas = Number(prompt("Horas: "))

const horas2 = dias * 24
const resultado = horas + horas2

console.log(`A viagem para ${destino} dura ${resultado} horas`)