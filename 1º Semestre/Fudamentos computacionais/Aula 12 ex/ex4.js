const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número:"))

if((num >= 5 && num <= 10) || (num <= 2 || num >= 20)){
    console.log("Correto")
}else{
    console.log("Incorreto")
}


if((num < 5 || num > 10) || (num > 2 && num < 20)){
    console.log("Correto")
}else{
    console.log("Incorreto")
}