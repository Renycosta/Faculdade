const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log(`Contagem até ${num}`)

for (let i = 1; i <= num; i = i + 1) {
    console.log(i)
}

console.log("--------------------------")

console.log(`Pares até ${num}`)

for (let i = 2; i <= num; i = i + 2) {
    console.log(i)
}