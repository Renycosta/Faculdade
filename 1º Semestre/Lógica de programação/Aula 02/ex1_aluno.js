const prompt = require("prompt-sync")()

const nota1 = Number (prompt("Digite a primeira nota: "))
const nota2 = Number (prompt("Digite a segunda nota: "))

const soma = nota1 + nota2
const media = soma / 2 

console.log(`A media do aluno é:${media}`)