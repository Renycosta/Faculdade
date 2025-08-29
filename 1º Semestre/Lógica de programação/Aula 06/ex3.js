const prompt = require("prompt-sync")()

const nome = prompt("Nome do aluno(a): ")
const alunos = prompt("Quantos alunos(a) tem na turma? ")
const mens = prompt("Quantas mensagens recebeu? ")

const por = alunos * 0.50

if (mens >= por){
    console.log(`Parabéns ${nome}! Você é bem popular na turma.`)
} else {
    console.log(`${nome}, temos que melhorar a sua popularidade`)
}