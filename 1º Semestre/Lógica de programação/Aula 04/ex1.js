const prompt = require("prompt-sync")()

const nome = prompt("Nome do aluno: ")
const ano = Number(prompt("Ano de nascimento: "))

const idade = 2025 - ano

if (idade <= 17) {
    console.log(`Idade: ${idade}`)
    console.log(`${nome}, você é menor de idade`)
} else{
    console.log(`Idade: ${idade}`)
    console.log(`${nome}, você é maior de idade`)
}