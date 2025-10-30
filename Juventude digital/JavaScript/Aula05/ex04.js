//Mostrar se a pessoa pode votar, se ela tiver entre 16 anos e 18 mostrar "Voto não obrigatorio", menos que 16 "Não pode votar", mais que 18 "Voto obrigatorio"
const prompt = require("prompt-sync")()

const idade = Number(prompt("Qual a sua idade"))

if(idade >= 16 && idade < 18){
    console.log("Voto não obrigatorio")
}else if(idade >= 18){
    console.log("Voto obrigatorio")
}else{
    console.log("Não pode votar")
}