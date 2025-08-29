const prompt = require("prompt-sync")()

const j1 = Number(prompt("Idade do 1° jovem: "))
const j2 = Number(prompt("Idade do 2° jovem: "))

const media = (j1+j2) / 2

if (j1 >= 16 && j2 >= 16) {
    console.log("Ambos podem votar")
} else if (j1 >= 16 || j2 >= 16) {
    console.log("Apenas um deles pode votar")
} else {
    console.log("Nenhum deles pode votar")
}
console.log(`Média da idades: ${media}`)