const prompt = require("prompt-sync")()

const nome = prompt("Qual o seu nome? ")
const idade = Number (prompt("Qual a sua idade? "))

const ano = 2025 - idade

console.log(`O seu nome é ${nome} e o seu ano de nascimento é ${ano}`)