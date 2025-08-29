const prompt = require("prompt-sync")()

const distancia = Number(prompt("Distância percorrida (m): "))

const km = Math.floor(distancia / 1000)
const metros = distancia % 1000

console.log(`Equivale a ${km}km e ${metros}m`)