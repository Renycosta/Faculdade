const prompt = require("prompt-sync")()

const pal = prompt("Digite uma palavra: ")
const num = Number(prompt("Digite um número: "))

let resposta = ""

for (let i = 1; i < num; i = i + 1) {
    resposta = resposta + pal + " * "
}

console.log(resposta)