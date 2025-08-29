const prompt = require("prompt-sync")()

const nome = prompt("Nome do aluno: ")
const nota1 = Number(prompt("1° nota: "))
const nota2 = Number(prompt("2° nota: "))

const media = (nota1 + nota2) / 2

if(media >= 7) {
    console.log(`Parabéns ${nome}! Você foi aprovado(a)`)
} else {
    console.log(`ops... ${nome}. Você foi reprovado(a)`)
}