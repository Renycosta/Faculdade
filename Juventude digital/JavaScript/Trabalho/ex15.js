/*Peça a idade de uma pessoa. Se ela estiver em idade ativa no mercado de trabalho (entre 18
e 65 anos, inclusive), exiba "Pode trabalhar". Caso contrário, exiba "Não está na idade de
trabalho padrão".*/
const prompt = require('prompt-sync')();

const idade = Number(prompt("Digite a idade: "))

if(idade >= 18 && idade <= 65){
    console.log("Pode trabalhar")
}else{
    console.log("Não está na idade de trabalho padrão")
}