//Pedir a idade do usuario e verificar se ele é maior de idade
const prompt = require("prompt-sync")();

const idade = ("Qual a sua idade? ")

if(idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}