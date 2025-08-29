const prompt = require("prompt-sync")()

const km = Number(prompt("Distância (em km): "))
const hora = Number(prompt("Horário: "))

let valor = 3

if(hora <= 5 || hora >= 20){
    pagar = valor * km
} else{
    valor = 2
    pagar = valor * km
}

console.log(`Distância: ${km}`)
console.log(`Horário: ${hora}`)
console.log(`Vlor a pagar: ${pagar}`)