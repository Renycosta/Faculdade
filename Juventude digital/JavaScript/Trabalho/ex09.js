/*Peça a nota de um aluno (0 a 10).
- Se a nota for 9 ou 10, exiba "Conceito A".
- Se a nota for entre 7 e 8.9, exiba "Conceito B".
- Se a nota for entre 5 e 6.9, exiba "Conceito C".
- Se for menor que 5, exiba "Conceito D".*/
const prompt = require('prompt-sync')();

const nota = Number(prompt("Nota do aluno: "))

if(nota == 9 || nota == 10){
    console.log("Conceito A")
}else if(nota >= 7 && nota <= 8.9){
    console.log("Conceito B")
}else if(nota >= 5 && nota <= 6.9){
    console.log("Conceito C")
}else if(nota < 5){
    console.log("Conceito D")
}