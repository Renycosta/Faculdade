const prompt = require("prompt-sync")()

const n1 = Number(prompt("Digite o 1º número: "))
const n2 = Number(prompt("Digite o 2º número: "))

console.log(`Entre ${n1} e ${n2}`)

for (let i = n1; i <= n2; i = i + 1) {
    console.log(i)
}