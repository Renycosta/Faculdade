const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

console.log(`Seguintes ao ${num}`)

for (let i = (num+1); i <= (num+10); i++) {
    console.log(i)
}