const prompt = require("prompt-sync")()

const tor = Number(prompt("Torcedores: "))

const onibus = tor/40
const lug = tor%40
const lug2 = lug-40

console.log(`Número de torcedores: ${tor}`)
console.log(`Número de Ônibus: ${Math.ceil(onibus)}`)
console.log(`Lugares ainda disponiveis: ${Math.abs(lug2)}`)