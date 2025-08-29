const prompt = require("prompt-sync")()

const ovos = Number(prompt("Quantidade de ovos: "))

const duzia = Math.floor(ovos / 12)
const res = ovos % 12

console.log(`Quantidade de ovos(duzia): ${duzia} restante: ${res}`)