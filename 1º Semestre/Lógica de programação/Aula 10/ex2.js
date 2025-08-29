const prompt = require("prompt-sync")()

console.log("Informe o nome e a quantidade de *")
console.log("-".repeat(30))

const nome = prompt("Diga seu nome: ")
const sim = Number(prompt("Diga a quantidade de *: "))

let espacamento = ""

for(let i = 1; i < sim; i++){
    espacamento = espacamento + "*"
}

console.log(`${espacamento} ${nome} ${espacamento}`)