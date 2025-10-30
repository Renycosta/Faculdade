/*Peça ao usuário para digitar sua idade. Se a idade for maior ou igual a 18, exiba a mensagem
"Você é maior de idade". Caso contrário, exiba "Você é menor de idade".*/
const prompt = require('prompt-sync')();

const idade = Number(prompt("Digite a idade: "))

if(idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}