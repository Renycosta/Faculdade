//Solicite a nota de um aluno (de 0 a 10). Se a nota for maior ou igual a 7, mostre "Aprovado!".
//Se não, mostre "Reprovado.".

const prompt = require('prompt-sync')();

const nota = Number(prompt("Digete sua nota: "))

if(nota >= 7){
    console.log("Aprovado!")
}else{
    console.log("Reprovado.")
}