const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

console.log("Contagem regresiva")

for (let i = num; i >= 0; i = i - 1) {
    console.log(i)
}

console.log("Fogo!")